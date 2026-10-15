import type { ReactNode } from "react";

const BASE = "mt-0 mb-5 font-semibold leading-[1.2] text-[#2B3944] text-[36px] max-[767px]:text-[26px] [word-break:break-word]";

/** Section-level h2; `className` adds overrides such as text-white! or a smaller size. */
export function SectionHeading({ className = "", children }: { className?: string; children: ReactNode }) {
  return <h2 className={className ? `${BASE} ${className}` : BASE}>{children}</h2>;
}
