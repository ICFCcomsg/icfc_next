import { SiteLink } from "@/components/atoms/site-link";
import { CONTAINER } from "@/components/atoms/container";
import { getDictionary } from "@/lib/dictionary";
import siteEn from "@/lib/i18n/site/en.json";
import { getUpcomingCourses } from "@/lib/lms";
import { getSiteFlags } from "@/lib/frappe";
import { section, eyebrow, h2, p } from "./styles";

const fmt = (d: Date, o: Intl.DateTimeFormatOptions) => d.toLocaleDateString("en-GB", { timeZone: "UTC", ...o });

// "14–16 Nov 2026", "30 Nov – 02 Dec 2026", "01 Nov 2026 – 31 Jan 2027"
function dateRange(start: string, end: string) {
  const a = new Date(start), b = new Date(end);
  const full = (d: Date) => fmt(d, { day: "2-digit", month: "short", year: "numeric" });
  if (start === end) return full(a);
  if (a.getUTCFullYear() !== b.getUTCFullYear()) return `${full(a)} – ${full(b)}`;
  if (a.getUTCMonth() !== b.getUTCMonth()) return `${fmt(a, { day: "2-digit", month: "short" })} – ${full(b)}`;
  return `${fmt(a, { day: "2-digit" })}–${full(b)}`;
}

export async function HomeCourses() {
  // Courses are booked on the LMS, so the section hides with the online-course flag.
  if (!(await getSiteFlags()).enable_online_course) return null;
  const [t, courses] = await Promise.all([getDictionary(), getUpcomingCourses()]);
  const h = { ...siteEn.home, ...t.home }; // new keys fall back to English until translated
  const next = courses.sort((a, b) => a.start.localeCompare(b.start)).slice(0, 4);
  if (!next.length) return null;
  return (
    <section className={`${section} bg-[#F8F8F9]`}>
      <div className={CONTAINER}>
        <span className={eyebrow}>{h.courses_eyebrow}</span>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className={`${h2} mb-2!`}>{h.courses_title}</h2>
            <p className={p}>{h.courses_intro}</p>
          </div>
          <SiteLink href="/training/calendar" className="font-medium text-[#AB052D]">{h.courses_all} →</SiteLink>
        </div>
        <div className="grid grid-cols-4 max-[1199px]:grid-cols-2 max-[575px]:grid-cols-1 gap-6">
          {next.map((c) => (
            <div key={c.id} className="flex flex-col rounded-2xl border border-[#DBDEE1] bg-white p-6">
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="rounded-full bg-[rgba(171,5,45,0.08)] px-2.5 py-1 text-[13px] font-semibold text-[#AB052D]">
                  {dateRange(c.start, c.end)}
                </span>
                <span className="text-[13px] text-[#616C74]">{c.time}</span>
              </div>
              <h3 className="mt-0 mb-2 text-[18px] font-semibold leading-snug text-[#2B3944]">{c.title}</h3>
              <p className="mt-0 mb-5 text-[14px] text-[#616C74]">{h.courses_mode}: {c.mode}</p>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-auto rounded-lg bg-[#F1F3F5] py-2.5 text-center text-[15px] font-medium text-[#2B3944] hover:bg-[#AB052D] hover:text-white">
                {h.courses_book} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
