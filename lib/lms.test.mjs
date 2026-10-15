import assert from "node:assert/strict";
import { test } from "node:test";
import { getUpcomingCourses } from "./lms.ts";

test("LMS feed: upcoming public runs mapped for the course calendar", async () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = { ...process.env };
  const urls = [];
  try {
    process.env.CRM_API_HOST = "https://lms.example.com";
    process.env.CRM_API_KEY = "test-key";
    process.env.CRM_API_SECRET = "test-secret";
    globalThis.fetch = async (url, init) => {
      urls.push(new URL(url));
      assert.equal(new Headers(init?.headers).get("Authorization"), "token test-key:test-secret");
      assert.equal(init?.next?.revalidate, 3600);
      if (String(url).includes("LMS%20Batch%20Enrollment")) {
        return Response.json({ data: [{ batch: "r1" }, { batch: "r1" }, { batch: "r4 usd" }, { batch: "r4 usd" }] });
      }
      // Row shapes as the Frappe LMS in the icfc-15 bench returns them.
      return Response.json({ data: [
        { name: "r1", title: "ISO 9001 Internal Auditor", category: "ISO", medium: "Offline", start_date: "2026-11-17", end_date: "2026-11-18", start_time: "9:00:00", end_time: "17:00:00", seat_count: 16, paid_batch: 1, amount: 750, currency: "SGD", custom_ssg_funded: 1, custom_run_type: "Public" },
        { name: "r2", title: "Cyber Trust awareness", category: null, medium: "Online", start_date: "2026-12-03", end_date: "2026-12-03", start_time: null, end_time: null, seat_count: 0, paid_batch: 0, amount: 0, currency: "SGD" },
        { name: "r3", title: "Client in-house run", medium: "Offline", start_date: "2026-11-05", end_date: "2026-11-07", seat_count: 10, paid_batch: 1, amount: 900, currency: "SGD", custom_run_type: "In-house" },
        { name: "r4 usd", title: "Priced in USD", medium: "Online", start_date: "2027-01-12", end_date: "2027-01-12", seat_count: 1, paid_batch: 1, amount: 500, currency: "USD" },
      ] });
    };

    const courses = await getUpcomingCourses();

    const [batchQuery, enrolmentQuery] = urls;
    assert.equal(batchQuery.pathname, "/api/resource/LMS%20Batch");
    const [published, upcoming] = JSON.parse(batchQuery.searchParams.get("filters"));
    assert.deepEqual(published, ["published", "=", 1]);
    assert.deepEqual(upcoming.slice(0, 2), ["start_date", ">="]);
    assert.match(upcoming[2], /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(batchQuery.searchParams.get("limit_page_length"), "0");
    assert.deepEqual(JSON.parse(enrolmentQuery.searchParams.get("filters")), [["batch", "in", ["r1", "r2", "r4 usd"]]]);

    assert.deepEqual(courses.map((c) => c.id), ["r1", "r2", "r4 usd"], "in-house runs stay off the public calendar");
    assert.deepEqual(courses[0], {
      id: "r1", title: "ISO 9001 Internal Auditor", service: "ISO", mode: "Classroom",
      start: "2026-11-17", end: "2026-11-18", time: "9:00–17:00", feeSGD: 750, seats: 14,
      funding: "SSG funding available. Eligibility is shown on the course page.",
      url: "https://lms.example.com/lms/batches/r1",
    });
    assert.deepEqual([courses[1].mode, courses[1].feeSGD, courses[1].seats, courses[1].time, courses[1].funding], ["Live online", null, null, "", ""]);
    assert.equal(courses[2].feeSGD, null, "no S$ fee for a non-SGD price");
    assert.equal(courses[2].seats, 0, "overbooked run shows 0, not a negative count");
    assert.equal(courses[2].url, "https://lms.example.com/lms/batches/r4%20usd");

    globalThis.fetch = async () => new Response("Forbidden", { status: 403 });
    assert.deepEqual(await getUpcomingCourses(), [], "an unreadable LMS gives an empty calendar, not a crash");
  } finally {
    globalThis.fetch = originalFetch;
    process.env = originalEnv;
  }
});
