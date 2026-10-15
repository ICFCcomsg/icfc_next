import type { ReactNode } from "react";

/** Small red uppercase label above a section heading. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="mb-2 inline-block text-[12px] font-semibold uppercase tracking-[2px] text-[#AB052D]">{children}</span>;
}
