import assert from "node:assert/strict";
import { test } from "node:test";
import { POST } from "./route.ts";

test("contact validation, CRM payload, and upstream failures", async () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = { ...process.env };
  let calls = 0;
  const mails = [];
  const fields = { name: " Test User ", email: "test@example.com", phone: "+6512345678", subject: "FinTech", topic: "consult-iso27001", message: "Hello <script>&\"'" };
  const request = (body, origin = "http://localhost") => new Request("http://localhost/api/contact", {
    method: "POST", headers: { origin, "Content-Type": "application/json" }, body: JSON.stringify(body),
  });
  try {
    process.env.CRM_API_HOST = "https://crm.example.com";
    process.env.CRM_API_KEY = "test-key";
    process.env.CRM_API_SECRET = "test-secret";
    globalThis.fetch = async (url, init) => {
      if (String(url).endsWith("communication.email.make")) {
        mails.push(JSON.parse(String(init?.body)));
        return Response.json({});
      }
      calls++;
      assert.equal(String(url), "https://crm.example.com/api/resource/Lead");
      assert.equal(init?.method, "POST");
      assert.equal(new Headers(init?.headers).get("Authorization"), "token test-key:test-secret");
      const lead = JSON.parse(String(init?.body));
      assert.equal(lead.first_name, "Test User");
      assert.equal(lead.lead_name, "Test User");
      assert.equal(lead.email_id, fields.email);
      assert.equal(lead.mobile_no, fields.phone);
      assert.equal(lead.status, "Open");
      assert.equal(lead.notes[0].note, "<pre>Subject: FinTech\nTopic: consult-iso27001\nHello &lt;script&gt;&amp;&quot;&#39;</pre>");
      return Response.json({ data: { name: "CRM-LEAD-TEST" } }, { status: 201 });
    };
    for (const body of [null, [], { ...fields, email: "invalid" }, { ...fields, name: " " }, { ...fields, message: "" }, { ...fields, phone: 123 }, { ...fields, message: "x".repeat(5001) }]) {
      assert.equal((await POST(request(body))).status, 400);
    }
    assert.equal((await POST(request(fields, "https://other.example.com"))).status, 403);
    assert.equal((await POST(new Request("http://localhost/api/contact", { method: "POST", body: "{" }))).status, 400);
    assert.equal(calls, 0);
    const result = await POST(request(fields));
    assert.equal(result.status, 200);
    assert.deepEqual(await result.json(), { success: true });
    assert.equal(calls, 1);
    assert.equal(mails.length, 1);
    assert.equal(mails[0].recipients, "admin@icfc.com.sg");

    delete process.env.CRM_API_KEY;
    assert.equal((await POST(request(fields))).status, 503);
    assert.equal(calls, 1);
    process.env.CRM_API_KEY = "test-key";
    for (const response of [new Response("private upstream error", { status: 403 }), Response.json({}), new Response("not JSON")]) {
      globalThis.fetch = async () => response;
      const failure = await POST(request(fields));
      assert.equal(failure.status, 502);
      assert.ok(!(await failure.text()).includes("private upstream error"));
    }
    globalThis.fetch = async () => { throw new Error("connection failed"); };
    assert.equal((await POST(request(fields))).status, 502);
  } finally {
    globalThis.fetch = originalFetch;
    for (const key of ["CRM_API_HOST", "CRM_API_KEY", "CRM_API_SECRET"]) {
      if (originalEnv[key] === undefined) delete process.env[key];
      else process.env[key] = originalEnv[key];
    }
  }
});

test("dock enquiry stores marketing consent record and drops honeypot", async () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = { ...process.env };
  const leads = [];
  const request = (body) => new Request("http://localhost/api/contact", {
    method: "POST", headers: { origin: "http://localhost", "Content-Type": "application/json" }, body: JSON.stringify(body),
  });
  try {
    Object.assign(process.env, { CRM_API_HOST: "https://crm.example.com", CRM_API_KEY: "k", CRM_API_SECRET: "s" });
    globalThis.fetch = async (url, init) => {
      if (String(url).endsWith("communication.email.make")) return Response.json({});
      leads.push(JSON.parse(String(init?.body)));
      return Response.json({ data: { name: "CRM-LEAD-TEST" } }, { status: 201 });
    };
    const dock = { name: "A", email: "a@example.com", message: "Hi", company: "Acme", type: "Quote", service: "ISO 9001", pdpa: "on",
      marketing_email: true, marketing_phone: false,
      consent: { version: "MC-2026-10", lang: "en", at: "2026-10-13T00:00:00Z", email_text: "Yes email", phone_text: "Yes phone" } };
    assert.equal((await POST(request(dock))).status, 200);
    const record = JSON.parse(leads[0].marketing_consent_record);
    assert.equal(record.version, "MC-2026-10");
    assert.equal(record.pdpa_notice, true);
    assert.equal(record.marketing_email, true);
    assert.equal(record.marketing_phone, false);
    assert.equal(record.phone_text, null);
    assert.equal(leads[0].unsubscribed, 0);
    assert.match(leads[0].notes[0].note, /Enquiry type: Quote\nService: ISO 9001\nCompany: Acme/);
    assert.equal((await POST(request({ ...dock, website: "bot" }))).status, 200);
    assert.equal(leads.length, 1);
  } finally {
    globalThis.fetch = originalFetch;
    process.env = originalEnv;
  }
});
