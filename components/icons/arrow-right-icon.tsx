import type { SVGProps } from "react";

export function ArrowRightIcon({ pathClassName = "group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]", ...props }: SVGProps<SVGSVGElement> & { pathClassName?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z" fill="white" className={pathClassName} />
    </svg>
  );
}
