import assert from "node:assert/strict";
import { test } from "node:test";
import { getUpcomingCourses } from "./lms.ts";

test("LMS feed: upcoming public runs mapped for the course calendar", async () => {
  const originalFetch = globalThis.fetch;
  const originalEnv = { ...process.env };
  const urls = [];
  try {
    process.env.CRM_API_HOST = "https://lms.example.com";
    globalThis.fetch = async (url, init) => {
      urls.push(new URL(url));
      assert.equal(new Headers(init?.headers).get("Authorization"), null);
      assert.equal(init?.next?.revalidate, 3600);
      // Shape of icfc_grants website.upcoming_courses: in-house runs already filtered, enrolment counted.
      return Response.json({ message: [
        { name: "r1", title: "ISO 9001 Internal Auditor", category: "ISO", medium: "Offline", start_date: "2026-11-17", end_date: "2026-11-18", start_time: "9:00:00", end_time: "17:00:00", seat_count: 16, paid_batch: 1, amount: 750, currency: "SGD", custom_ssg_funded: 1, enrolled: 2 },
        { name: "r2", title: "Cyber Trust awareness", category: null, medium: "Online", start_date: "2026-12-03", end_date: "2026-12-03", start_time: null, end_time: null, seat_count: 0, paid_batch: 0, amount: 0, currency: "SGD", enrolled: 0 },
        { name: "r4 usd", title: "Priced in USD", medium: "Online", start_date: "2027-01-12", end_date: "2027-01-12", seat_count: 1, paid_batch: 1, amount: 500, currency: "USD", enrolled: 2 },
      ] });
    };

    const courses = await getUpcomingCourses();

    assert.equal(urls[0].pathname, "/api/method/icfc_grants.api.website.upcoming_courses");
    assert.deepEqual(courses.map((c) => c.id), ["r1", "r2", "r4 usd"]);
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
