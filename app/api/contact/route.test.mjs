import assert from "node:assert/strict";
import { test } from "node:test";
import { POST } from "./route.ts";

// Validation and the Lead itself are tested in Frappe (icfc_or_evidence/test_website.py); this covers the proxy.
test("contact proxies to the Frappe guest API without credentials", async () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = { ...process.env };
  const calls = [];
  const fields = { name: "Test User", email: "test@example.com", message: "Hello" };
  const request = (body, origin = "http://localhost") => new Request("http://localhost/api/contact", {
    method: "POST", headers: { origin, "Content-Type": "application/json", "x-forwarded-for": "203.0.113.7, 10.0.0.1" }, body: JSON.stringify(body),
  });
  try {
    process.env.CRM_API_HOST = "https://crm.example.com";
    globalThis.fetch = async (url, init) => {
      calls.push({ url: String(url), init });
      return Response.json({ message: { success: true } });
    };
    assert.equal((await POST(request(fields, "https://other.example.com"))).status, 403);
    assert.equal((await POST(request(null))).status, 400);
    assert.equal((await POST(new Request("http://localhost/api/contact", { method: "POST", body: "{" }))).status, 400);
    assert.equal((await POST(request({ ...fields, website: "bot" }))).status, 200);
    assert.equal(calls.length, 0, "rejects and honeypot never reach Frappe");

    const ok = await POST(request(fields));
    assert.deepEqual([ok.status, await ok.json()], [200, { success: true }]);
    assert.equal(calls[0].url, "https://crm.example.com/api/method/icfc_or_evidence.api.website.submit_enquiry");
    const headers = new Headers(calls[0].init.headers);
    assert.equal(headers.get("Authorization"), null);
    assert.equal(headers.get("X-Forwarded-For"), "203.0.113.7", "visitor IP forwarded for rate limits");
    assert.deepEqual(JSON.parse(calls[0].init.body), fields);

    globalThis.fetch = async () => Response.json({ _server_messages: JSON.stringify([JSON.stringify({ message: "Invalid email." })]) }, { status: 417 });
    const invalid = await POST(request(fields));
    assert.deepEqual([invalid.status, await invalid.json()], [400, { error: "Invalid email." }]);
    globalThis.fetch = async () => new Response("", { status: 429 });
    assert.equal((await POST(request(fields))).status, 429);
    globalThis.fetch = async () => new Response("private upstream error", { status: 500 });
    const failure = await POST(request(fields));
    assert.equal(failure.status, 502);
    assert.ok(!(await failure.text()).includes("private upstream error"));
    globalThis.fetch = async () => { throw new Error("connection failed"); };
    assert.equal((await POST(request(fields))).status, 502);
    delete process.env.CRM_API_HOST;
    assert.equal((await POST(request(fields))).status, 503);
  } finally {
    globalThis.fetch = originalFetch;
    process.env = originalEnv;
  }
});
