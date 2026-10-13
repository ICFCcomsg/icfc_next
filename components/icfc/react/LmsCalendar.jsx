"use client";
import React, { useEffect, useMemo, useState } from "react";

/**
 * LMS course calendar with month view and list view.
 * Data: array of { id, title, service, mode, start, end, hours, feeSGD, seats, funding, url, sample }
 * Pass `courses` directly, or `src` (JSON URL). For Frappe LMS, see mapFrappeBatch() below.
 */
const MODES = ["All", "Classroom", "Live online", "Self-paced"];
const fmtDate = (iso, locale) => new Date(iso + "T00:00:00").toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" });
const sameMonth = (d, y, m) => d.getFullYear() === y && d.getMonth() === m;

export function mapFrappeBatch(b, lmsBase = "https://icfc.digital") {
  // Adjust field names to match your Frappe LMS "LMS Batch" doctype before use.
  return { id: b.name, title: b.title, service: b.category || "", mode: b.medium || "Live online", start: b.start_date, end: b.end_date,
    hours: b.duration_hours || null, feeSGD: b.amount || null, seats: b.seats_left ?? null, funding: b.funding_status || "",
    url: `${lmsBase}/lms/batches/${b.name}` };
}

export default function LmsCalendar({ courses: initial = null, src = "", t = {}, locale = "en-SG", showSampleFlag = true }) {
  const s = { calendar: "Course calendar", book: "Book", seats_left: "seats left", ...t };
  const [courses, setCourses] = useState(initial || []);
  const [view, setView] = useState("list");
  const [mode, setMode] = useState("All");
  const [q, setQ] = useState("");
  const first = courses.length ? new Date(courses.map((c) => c.start).sort()[0] + "T00:00:00") : new Date();
  const [ym, setYm] = useState([first.getFullYear(), first.getMonth()]);

  useEffect(() => {
    if (initial || !src) return;
    fetch(src).then((r) => r.json()).then((d) => {
      setCourses(d);
      if (d.length) { const f = new Date(d.map((c) => c.start).sort()[0] + "T00:00:00"); setYm([f.getFullYear(), f.getMonth()]); }
    }).catch(() => setCourses([]));
  }, [src]);

  const filtered = useMemo(() => courses
    .filter((c) => mode === "All" || c.mode === mode)
    .filter((c) => !q || (c.title + " " + c.service).toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => a.start.localeCompare(b.start)), [courses, mode, q]);

  const [y, m] = ym;
  const monthLabel = new Date(y, m, 1).toLocaleDateString(locale, { month: "long", year: "numeric" });
  const startDay = (new Date(y, m, 1).getDay() + 6) % 7; // Monday first
  const days = new Date(y, m + 1, 0).getDate();
  const cells = Array.from({ length: Math.ceil((startDay + days) / 7) * 7 }, (_, i) => i - startDay + 1);
  const onDay = (day) => filtered.filter((c) => {
    const d = new Date(y, m, day); const a = new Date(c.start + "T00:00:00"); const b = new Date(c.end + "T00:00:00");
    return c.mode !== "Self-paced" ? d >= a && d <= b : sameMonth(a, y, m) && day === a.getDate();
  });
  const shift = (n) => { const d = new Date(y, m + n, 1); setYm([d.getFullYear(), d.getMonth()]); };

  return (
    <section className="icfc-cal" aria-label={s.calendar}>
      <div className="icfc-cal-bar">
        <h2>{s.calendar}</h2>
        <div className="icfc-cal-tools">
          <input type="search" placeholder="Search courses" aria-label="Search courses" value={q} onChange={(e) => setQ(e.target.value)} />
          <select aria-label="Mode" value={mode} onChange={(e) => setMode(e.target.value)}>{MODES.map((x) => <option key={x}>{x}</option>)}</select>
          <div className="icfc-seg" role="group" aria-label="View">
            <button aria-pressed={view === "list"} onClick={() => setView("list")}>List</button>
            <button aria-pressed={view === "month"} onClick={() => setView("month")}>Month</button>
          </div>
        </div>
      </div>

      {showSampleFlag && courses.some((c) => c.sample) && <p className="icfc-note">Sample schedule for layout testing. Dates and fees are not live.</p>}

      {view === "list" ? (
        <ul className="icfc-cal-list">
          {filtered.length === 0 && <li className="icfc-muted">No courses match your filters.</li>}
          {filtered.map((c) => (
            <li key={c.id} className="icfc-cal-item">
              <div className="icfc-cal-date"><strong>{fmtDate(c.start, locale)}</strong>{c.end !== c.start && <span> to {fmtDate(c.end, locale)}</span>}</div>
              <div className="icfc-cal-main">
                <h3>{c.title}</h3>
                <p className="icfc-muted">{c.service}</p>
                <p className="icfc-tags"><span className="icfc-pill">{c.mode}</span>{c.hours && <span className="icfc-pill">{c.hours} h</span>}{c.seats != null && <span className="icfc-pill">{c.seats} {s.seats_left}</span>}</p>
                {c.funding && <p className="icfc-small">{c.funding}</p>}
              </div>
              <div className="icfc-cal-cta">
                {c.feeSGD != null && <p className="icfc-fee">S${Number(c.feeSGD).toLocaleString("en-SG")}</p>}
                <a className="icfc-btn" href={c.url} target="_blank" rel="noopener noreferrer">{s.book}</a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="icfc-cal-month">
          <div className="icfc-cal-nav">
            <button onClick={() => shift(-1)} aria-label="Previous month">‹</button>
            <strong>{monthLabel}</strong>
            <button onClick={() => shift(1)} aria-label="Next month">›</button>
          </div>
          <div className="icfc-cal-grid" role="grid">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <div key={d} className="icfc-cal-dow" role="columnheader">{d}</div>)}
            {cells.map((day, i) => (
              <div key={i} className={"icfc-cal-cell" + (day < 1 || day > days ? " is-out" : "")} role="gridcell">
                {day >= 1 && day <= days && (<>
                  <span className="icfc-cal-num">{day}</span>
                  {onDay(day).map((c) => <a key={c.id} className="icfc-cal-chip" href={c.url} target="_blank" rel="noopener noreferrer" title={c.title}>{c.title}</a>)}
                </>)}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
