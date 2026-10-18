import type { Course } from "@/components/organisms/lms-calendar";
import { getFromFrappe } from "./frappe.ts";

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

/** Upcoming public runs from the Frappe LMS guest API, cached for an hour. Empty if the LMS can't be read. */
export async function getUpcomingCourses(): Promise<Course[]> {
  if (!process.env.CRM_API_HOST) return [];
  try {
    const batches = await getFromFrappe<(Row & { enrolled: number })[]>("upcoming_courses");
    return batches.map((b) => mapFrappeBatch(b, b.enrolled, process.env.CRM_API_HOST!));
  } catch (error) {
    // warn, not error: an unreachable LMS is expected until it's live, and console.error opens the dev overlay.
    console.warn(`LMS course feed failed: ${error instanceof Error ? error.message : error}`);
    return [];
  }
}
