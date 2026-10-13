"use client";

import { useState } from "react";
import { SiteLink } from "@/components/atoms/site-link";
import { openEnquiry } from "@/components/icfc/react/FloatingDock.jsx";
import services from "@/lib/services.json";

const NEEDS = [
  { key: "audit", label: "I need a certificate" },
  { key: "consultation", label: "I need to prepare or implement" },
  { key: "training", label: "I need training" },
] as const;

const GROUPS = [
  "Cybersecurity, IT and Data Protection",
  "ISO Management Systems",
  "Singapore Standards and Schemes",
  "Sustainability and Supply Chain",
];

const chip =
  "rounded-full border px-5 py-3 text-[16px] font-medium transition-colors";
const on = "border-[#AB052D] bg-[#AB052D] text-white";
const off =
  "border-[#DBDEE1] bg-white text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]";

export function QuoteButton({ light }: { light?: boolean }) {
  return (
    <button
      type="button"
      onClick={() => openEnquiry("Quote")}
      className={`rounded-full px-7 py-3.5 font-medium ${light ? "bg-white text-[#AB052D] hover:bg-[#F8F8F9]" : "bg-[#AB052D] text-white hover:bg-[#9D0026]"}`}
    >
      Get a Quote
    </button>
  );
}

/** Two-tap service finder: what you need, then the topic group. */
export function ServiceFinder() {
  const [need, setNeed] = useState<(typeof NEEDS)[number]["key"] | null>(null);
  const [group, setGroup] = useState<string | null>(null);
  const matches = services.filter(
    (s) => need && group && s.group === group && s[need].length > 0,
  );
  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="What do you need?">
        {NEEDS.map((n) => (
          <button
            key={n.key}
            type="button"
            aria-pressed={need === n.key}
            className={`${chip} ${need === n.key ? on : off}`}
            onClick={() => setNeed(n.key)}
          >
            {n.label}
          </button>
        ))}
      </div>
      {need && (
        <div className="mt-5 flex flex-wrap gap-3" role="group" aria-label="Topic">
          {GROUPS.map((g) => (
            <button
              key={g}
              type="button"
              aria-pressed={group === g}
              className={`${chip} ${group === g ? on : off}`}
              onClick={() => setGroup(g)}
            >
              {g}
            </button>
          ))}
        </div>
      )}
      {matches.length > 0 && (
        <ul className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3 p-0 m-0 list-none" aria-live="polite">
          {matches.map((s) => (
            <li key={s.slug}>
              <SiteLink
                href={`/services/${s.slug}`}
                className="block h-full rounded-xl border border-[#DBDEE1] bg-white p-4 text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]"
              >
                <span className="block text-[13px] font-semibold text-[#AB052D]">{s.code}</span>
                {s.name}
              </SiteLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
