"use client";
import { motion, useReducedMotion } from "motion/react";
import { SiteLink } from "@/components/atoms/site-link";
import { Icon } from "@/components/atoms/icon";
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
  const reduced = useReducedMotion();
  return (
    <article
      className={`relative overflow-hidden rounded-2xl border bg-linear-to-b from-white to-[#FCFDFF] shadow-sm transition-all hover:-translate-y-1.75 hover:shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-linear-to-r before:from-[#AB052D] before:to-rose-500 ${expanded ? "border-[#AB052D] before:opacity-100" : "border-slate-200 before:opacity-25"}`}
    >
      <button
        type="button"
        className="block w-full bg-transparent p-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#AB052D] md:p-7"
        aria-expanded={expanded}
        aria-controls={id}
        onClick={onToggle}
      >
        <span className="flex items-start gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-rose-200 bg-rose-50 text-2xl text-[#AB052D]">
            <Icon name={industry.icon} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="mb-1.5 block text-xl font-bold tracking-tight text-slate-900">
              {industry.name}
            </span>
            <span className="mb-2 inline-block rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-800 uppercase">
              {industry.cagr}
            </span>
            <span className="block text-sm leading-relaxed text-slate-600">
              {industry.sub}
            </span>
            <span className="mt-3.5 flex flex-wrap gap-2">
              {industry.standards.map((standard) => (
                <span
                  key={standard}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-800"
                >
                  {standard}
                </span>
              ))}
            </span>
          </span>
          <span
            className={`${expanded ? "rotate-180" : ""} ml-auto flex size-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-lg text-slate-500 transition-transform`}
          >
            <Icon name="down" />
          </span>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ opacity: expanded ? 1 : 0, y: expanded || reduced ? 0 : 8 }}
        transition={{ duration: reduced ? 0 : 0.35, ease: "easeOut" }}
        id={id}
        className="border-t border-slate-100 px-5 pt-5 pb-5 md:px-7 md:pb-7"
        hidden={!expanded}
      >
        <p className="mb-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
          Priority Standards
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {industry.standards.map((standard, index) => (
            <span
              key={standard}
              className={`rounded-full px-3.5 py-1 text-xs font-semibold ${["bg-blue-50 text-blue-800", "bg-green-50 text-green-800", "bg-amber-50 text-amber-700", "bg-purple-50 text-purple-800", "bg-red-50 text-red-800"][index % 5]}`}
            >
              {standard}
            </span>
          ))}
        </div>
        <p className="mb-5 text-sm leading-relaxed text-slate-700">
          {industry.why}
        </p>
        <SiteLink
          className="inline-flex items-center gap-2 rounded-full bg-[#AB052D] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8E0425]"
          href="/contact-us"
        >
          Get ISO Guidance ↗
        </SiteLink>
      </motion.div>
    </article>
  );
}
