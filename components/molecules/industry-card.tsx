import { useId } from "react";
import type { industries } from "@/lib/industries";

type Industry = (typeof industries)[number];

export function IndustryCard({
  industry,
  expanded,
  onToggle,
}: {
  industry: Industry;
  expanded: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  return (
    <article className={`card${expanded ? " expanded" : ""}`}>
      <button
        type="button"
        className="card-inner native-industry-trigger"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={onToggle}
      >
        <span className="card-header">
          <span className="icon-box-large">
            <i className={industry.icon} aria-hidden="true" />
          </span>
          <span className="card-meta">
            <span className="card-title">{industry.name}</span>
            <span className="card-cagr">{industry.cagr}</span>
            <span className="card-sub">{industry.sub}</span>
            <span className="badge-strip">
              {industry.standards.map((standard) => (
                <span key={standard} className="mini-standard">
                  {standard}
                </span>
              ))}
            </span>
          </span>
          <span className="expand-arrow">
            <i className="ri-arrow-down-s-line" aria-hidden="true" />
          </span>
        </span>
      </button>
      <div id={id} className="details" hidden={!expanded}>
        <p className="det-label">Priority Standards</p>
        <div className="iso-row">
          {industry.standards.map((standard, index) => (
            <span
              key={standard}
              className={`iso-tag ${["t-blue", "t-green", "t-amber", "t-purple", "t-red"][index % 5]}`}
            >
              {standard}
            </span>
          ))}
        </div>
        <p className="why-text">{industry.why}</p>
        <a className="cta-mini" href="/contact-us.html">
          Get ISO Guidance ↗
        </a>
      </div>
    </article>
  );
}
