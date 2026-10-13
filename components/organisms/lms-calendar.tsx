"use client";

import { useEffect, useMemo, useState } from "react";

export type Course = {
  id: string;
  title: string;
  service: string;
  mode: string;
  start: string; // YYYY-MM-DD
  end: string;
  hours?: number | null;
  feeSGD?: number | null;
  seats?: number | null;
  funding?: string;
  url: string;
  sample?: boolean;
};

const MODES = ["All", "Classroom", "Live online", "Self-paced"];
const day0 = (iso: string) => new Date(iso + "T00:00:00");
const fmtDate = (iso: string, locale: string) =>
  day0(iso).toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" });

/** Maps a Frappe LMS "LMS Batch" record. Confirm the field names on the icfc.digital instance before use. */
export function mapFrappeBatch(b: Record<string, string | number | null>, lmsBase = "https://icfc.digital"): Course {
  return {
    id: String(b.name),
    title: String(b.title),
    service: String(b.category ?? ""),
    mode: String(b.medium ?? "Live online"),
    start: String(b.start_date),
    end: String(b.end_date),
    hours: (b.duration_hours as number) ?? null,
    feeSGD: (b.amount as number) ?? null,
    seats: (b.seats_left as number) ?? null,
    funding: String(b.funding_status ?? ""),
    url: `${lmsBase}/lms/batches/${b.name}`,
  };
}

/** Course calendar with list and month views. Pass `courses`, or `src` (JSON URL). */
export function LmsCalendar({
  courses: initial,
  src = "",
  locale = "en-SG",
}: {
  courses?: Course[];
  src?: string;
  locale?: string;
}) {
  const [fetched, setFetched] = useState<Course[]>([]);
  const courses = initial ?? fetched;
  const [view, setView] = useState<"list" | "month">("list");
  const [mode, setMode] = useState("All");
  const [q, setQ] = useState("");
  const [ym, setYm] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (initial || !src) return;
    fetch(src)
      .then((r) => r.json())
      .then(setFetched)
      .catch(() => setFetched([]));
  }, [initial, src]);

  const filtered = useMemo(
    () =>
      courses
        .filter((c) => mode === "All" || c.mode === mode)
        .filter((c) => !q || `${c.title} ${c.service}`.toLowerCase().includes(q.toLowerCase()))
        .sort((a, b) => a.start.localeCompare(b.start)),
    [courses, mode, q],
  );

  // Month view opens on the first course's month until the visitor navigates.
  const first = courses.length ? day0([...courses].sort((a, b) => a.start.localeCompare(b.start))[0].start) : new Date();
  const [y, m] = ym ?? [first.getFullYear(), first.getMonth()];
  const monthLabel = new Date(y, m, 1).toLocaleDateString(locale, { month: "long", year: "numeric" });
  const startDay = (new Date(y, m, 1).getDay() + 6) % 7; // Monday first
  const days = new Date(y, m + 1, 0).getDate();
  const cells = Array.from({ length: Math.ceil((startDay + days) / 7) * 7 }, (_, i) => i - startDay + 1);
  const onDay = (day: number) =>
    filtered.filter((c) => {
      const d = new Date(y, m, day);
      const a = day0(c.start);
      return c.mode !== "Self-paced"
        ? d >= a && d <= day0(c.end)
        : a.getFullYear() === y && a.getMonth() === m && day === a.getDate();
    });
  const shift = (n: number) => {
    const d = new Date(y, m + n, 1);
    setYm([d.getFullYear(), d.getMonth()]);
  };

  return (
    <section className="icfc-cal" aria-label="Course calendar">
      <div className="icfc-cal-bar">
        <h2>Course calendar</h2>
        <div className="icfc-cal-tools">
          <input type="search" placeholder="Search courses" aria-label="Search courses" value={q} onChange={(e) => setQ(e.target.value)} />
          <select aria-label="Mode" value={mode} onChange={(e) => setMode(e.target.value)}>
            {MODES.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
          <div className="icfc-seg" role="group" aria-label="View">
            <button type="button" aria-pressed={view === "list"} onClick={() => setView("list")}>
              List
            </button>
            <button type="button" aria-pressed={view === "month"} onClick={() => setView("month")}>
              Month
            </button>
          </div>
        </div>
      </div>

      {courses.some((c) => c.sample) && (
        <p className="icfc-note">Sample schedule for layout testing. Dates and fees are not live.</p>
      )}

      {view === "list" ? (
        <ul className="icfc-cal-list">
          {filtered.length === 0 && <li className="icfc-muted">No courses match your filters.</li>}
          {filtered.map((c) => (
            <li key={c.id} className="icfc-cal-item">
              <div className="icfc-cal-date">
                <strong>{fmtDate(c.start, locale)}</strong>
                {c.end !== c.start && <span> to {fmtDate(c.end, locale)}</span>}
              </div>
              <div className="icfc-cal-main">
                <h3>{c.title}</h3>
                <p className="icfc-muted">{c.service}</p>
                <p className="icfc-tags">
                  <span className="icfc-pill">{c.mode}</span>
                  {c.hours && <span className="icfc-pill">{c.hours} h</span>}
                  {c.seats != null && <span className="icfc-pill">{c.seats} seats left</span>}
                </p>
                {c.funding && <p className="icfc-small">{c.funding}</p>}
              </div>
              <div className="icfc-cal-cta">
                {c.feeSGD != null && <p className="icfc-fee">S${Number(c.feeSGD).toLocaleString("en-SG")}</p>}
                <a className="icfc-btn" href={c.url} target="_blank" rel="noopener noreferrer">
                  Book
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="icfc-cal-month">
          <div className="icfc-cal-nav">
            <button type="button" onClick={() => shift(-1)} aria-label="Previous month">
              ‹
            </button>
            <strong>{monthLabel}</strong>
            <button type="button" onClick={() => shift(1)} aria-label="Next month">
              ›
            </button>
          </div>
          <div className="icfc-cal-grid" role="grid">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d} className="icfc-cal-dow" role="columnheader">
                {d}
              </div>
            ))}
            {cells.map((day, i) => (
              <div key={i} className={"icfc-cal-cell" + (day < 1 || day > days ? " is-out" : "")} role="gridcell">
                {day >= 1 && day <= days && (
                  <>
                    <span className="icfc-cal-num">{day}</span>
                    {onDay(day).map((c) => (
                      <a key={c.id} className="icfc-cal-chip" href={c.url} target="_blank" rel="noopener noreferrer" title={c.title}>
                        {c.title}
                      </a>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
