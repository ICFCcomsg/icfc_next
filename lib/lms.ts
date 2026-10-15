import type { Course } from "@/components/organisms/lms-calendar";

type Row = Record<string, string | number | null>;

const MODE: Record<string, string> = { Offline: "Classroom", Online: "Live online" };
const hhmm = (time: Row[string]) => String(time).replace(/:\d\d$/, ""); // "9:00:00" → "9:00"

/** One Frappe LMS "LMS Batch" row → calendar entry. Field names checked against the LMS in the icfc-15 bench. */
export function mapFrappeBatch(b: Row, enrolled: number, lmsBase: string): Course {
  const seats = Number(b.seat_count);
  return {
    id: String(b.name),
    title: String(b.title),
    service: String(b.category ?? ""),
    mode: MODE[String(b.medium)] ?? String(b.medium ?? ""),
    start: String(b.start_date),
    end: String(b.end_date),
    // ponytail: LMS Batch has no duration field, so the daily times stand in; add one if ICFC wants hours shown.
    time: b.start_time && b.end_time ? `${hhmm(b.start_time)}–${hhmm(b.end_time)}` : "",
    // Full fee only, never a funded price (pack: Prices). Free or non-SGD runs show no fee.
    feeSGD: b.paid_batch && b.currency === "SGD" ? Number(b.amount) : null,
    seats: seats > 0 ? Math.max(0, seats - enrolled) : null,
    funding: b.custom_ssg_funded ? "SSG funding available. Eligibility is shown on the course page." : "",
    url: new URL(`/lms/batches/${encodeURIComponent(String(b.name))}`, lmsBase).href,
  };
}

/** Upcoming public runs from the Frappe LMS on CRM_API_HOST, cached for an hour. Empty if the LMS can't be read. */
export async function getUpcomingCourses(): Promise<Course[]> {
  const { CRM_API_HOST: host, CRM_API_KEY: key, CRM_API_SECRET: secret } = process.env;
  if (!host || !key || !secret) return [];
  const list = async (doctype: string, fields: string[], filters: unknown[]): Promise<Row[]> => {
    const url = new URL(`/api/resource/${doctype}`, host);
    url.search = new URLSearchParams({ fields: JSON.stringify(fields), filters: JSON.stringify(filters), limit_page_length: "0" }).toString();
    const response = await fetch(url, {
      headers: { Authorization: `token ${key}:${secret}` },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok) throw new Error(`${doctype}: HTTP ${response.status}`);
    return (await response.json()).data;
  };
  try {
    const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Singapore" });
    // "*" returns ICFC's custom fields (run type, SSG funding) where they exist, without failing where they don't.
    const batches = (await list("LMS Batch", ["*"], [["published", "=", 1], ["start_date", ">=", today]]))
      .filter((b) => b.custom_run_type !== "In-house");
    const enrolled: Record<string, number> = {};
    // ponytail: counts enrolment rows here; group by batch in Frappe if runs reach thousands of learners.
    if (batches.length) {
      for (const { batch } of await list("LMS Batch Enrollment", ["batch"], [["batch", "in", batches.map((b) => b.name)]])) {
        enrolled[String(batch)] = (enrolled[String(batch)] ?? 0) + 1;
      }
    }
    return batches.map((b) => mapFrappeBatch(b, enrolled[String(b.name)] ?? 0, host));
  } catch (error) {
    // warn, not error: an unreachable LMS is expected until it's live, and console.error opens the dev overlay.
    console.warn(`LMS course feed failed: ${error instanceof Error ? error.message : error}`);
    return [];
  }
}
