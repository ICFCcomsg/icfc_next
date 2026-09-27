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
    <section className="industry-section section-space-top pb-40">
      <div className="industry-container">
        <div className="hero-industry">
          <div className="hero-tag">All-Industry ISO Solutions · Singapore</div>
          <h1 className="hero-h">ISO standards tailored to your industry</h1>
          <p className="hero-sub">
            Singapore&apos;s fastest-growing industries each carry unique
            compliance, quality, and security obligations. Explore the standards
            that apply to your sector — and how we help you achieve them.
          </p>
        </div>
        <div style={{ marginTop: 30 }}>
          <input
            className="search-box"
            type="search"
            aria-label="Search industries"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search industry (e.g. fintech, healthcare, logistics...)"
          />
          <div className="filter-row" aria-label="Industry categories">
            {categories.map(([key, name]) => (
              <button
                key={key}
                type="button"
                aria-pressed={category === key}
                className={`filter-btn${category === key ? " active" : ""}`}
                onClick={() => {
                  setCategory(key);
                  setExpanded(null);
                }}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="count-badge" role="status">
            Showing {filtered.length} industries
            {category !== "all" && ` in ${label}`}
          </div>
          <div className="grid" id="cardGrid">
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
            <p className="no-results" style={{ display: "block" }}>
              No industries match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
