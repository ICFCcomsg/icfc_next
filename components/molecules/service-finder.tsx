"use client";

import { useState } from "react";
import { SiteLink } from "@/components/atoms/site-link";

type Need = "audit" | "consultation" | "training";
type FinderService = { slug: string; code: string; name: string; group: string; offers: Record<Need, boolean> };

const chip = "rounded-full border px-5 py-3 text-[16px] font-medium transition-colors";
const on = "border-[#AB052D] bg-[#AB052D] text-white";
const off = "border-[#DBDEE1] bg-white text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]";

/** Two-tap service finder: what you need, then the topic group. Labels come from the page's dictionary. */
export function ServiceFinder({
  services,
  groups,
  needs,
  topicLabel,
}: {
  services: FinderService[];
  groups: [string, string][];
  needs: [Need, string][];
  topicLabel: string;
}) {
  const [need, setNeed] = useState<Need | null>(null);
  const [group, setGroup] = useState<string | null>(null);
  const matches = services.filter((s) => need && group && s.group === group && s.offers[need]);
  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label={needs.map(([, l]) => l).join(" / ")}>
        {needs.map(([key, label]) => (
          <button
            key={key}
            type="button"
            aria-pressed={need === key}
            className={`${chip} ${need === key ? on : off}`}
            onClick={() => setNeed(key)}
          >
            {label}
          </button>
        ))}
      </div>
      {need && (
        <div className="mt-5 flex flex-wrap gap-3" role="group" aria-label={topicLabel}>
          {groups.map(([key, label]) => (
            <button
              key={key}
              type="button"
              aria-pressed={group === key}
              className={`${chip} ${group === key ? on : off}`}
              onClick={() => setGroup(key)}
            >
              {label}
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
