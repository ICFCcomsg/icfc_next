"use client";

import { useState } from "react";
import { industries } from "@/lib/industries";
import { IndustryCard } from "@/components/molecules/industry-card";

const categories = [
  ["all", "All industries"],
  ["digital", "Digital & Tech"],
  ["health", "Health & Life Sciences"],
  ["industry", "Manufacturing & Industry"],
  ["services", "Professional Services"],
  ["sustainability", "Sustainability & Energy"],
];

export function IndustryExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const filtered = industries.filter(
    (item) =>
      (category === "all" || item.category === category) &&
      `${item.name} ${item.sub} ${item.standards.join(" ")} ${item.why}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const label = categories.find(([key]) => key === category)?.[1];

  return (
    <section className="pt-[120px] pb-10 max-[991px]:pt-[100px] max-[767px]:pt-[70px] max-[480px]:pt-[60px]">
      <div className="mx-auto max-w-[1280px] px-5">
        <div className="border-b border-slate-200 pt-12 pb-8">
          <div className="mb-4 inline-block rounded-full bg-[#AB052D]/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#AB052D] uppercase">
            All-Industry ISO Solutions · Singapore
          </div>
          <h1 className="mb-4 text-[28px] font-bold leading-[1.2] text-[#111] md:text-[38px]">
            ISO standards tailored to your industry
          </h1>
          <p className="max-w-[780px] text-base leading-relaxed text-[#5A5A5A]">
            Singapore&apos;s fastest-growing industries each carry unique
            compliance, quality, and security obligations. Explore the standards
            that apply to your sector — and how we help you achieve them.
          </p>
        </div>
        <div className="mt-[30px]">
          <input
            className="mb-[15px] w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-[15px] text-slate-800 shadow-sm focus:border-[#AB052D] focus:outline-none focus:ring-4 focus:ring-[#AB052D]/10"
            type="search"
            aria-label="Search industries"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search industry (e.g. fintech, healthcare, logistics...)"
          />
          <div
            className="flex flex-wrap gap-2.5 pt-8 pb-4"
            aria-label="Industry categories"
          >
            {categories.map(([key, name]) => (
              <button
                key={key}
                type="button"
                aria-pressed={category === key}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${category === key ? "border-[#AB052D] bg-[#AB052D] text-white shadow-md" : "border-slate-200 bg-white text-slate-700 hover:border-[#AB052D] hover:bg-rose-50 hover:text-[#AB052D]"}`}
                onClick={() => {
                  setCategory(key);
                  setExpanded(null);
                }}
              >
                {name}
              </button>
            ))}
          </div>
          <div
            className="inline-block border-b border-slate-100 py-2 text-sm font-medium text-slate-600"
            role="status"
          >
            Showing {filtered.length} industries
            {category !== "all" && ` in ${label}`}
          </div>
          <div
            className="grid gap-5 py-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
            id="cardGrid"
          >
            {filtered.map((industry) => (
              <IndustryCard
                key={industry.name}
                industry={industry}
                expanded={expanded === industry.name}
                onToggle={() =>
                  setExpanded(expanded === industry.name ? null : industry.name)
                }
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-16 text-center text-slate-500">
              No industries match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
