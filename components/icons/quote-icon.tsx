import type { SVGProps } from "react";

export function QuoteIcon({ pathClassName = "fill-[#AB052D]", ...props }: SVGProps<SVGSVGElement> & { pathClassName?: string }) {
  return (
    <svg viewBox="0 0 36 26" aria-hidden="true" {...props}>
      <path d="M15.4287 0.142578V15.5713L10.2861 25.8564H2.57129L7.71387 15.5713H0V0.142578H15.4287ZM35.999 0.142578V15.5713L30.8564 25.8564H23.1416L28.2842 15.5713H20.5703V0.142578H35.999ZM21.5703 14.5713H29.9023L24.7598 24.8564H30.2383L34.999 15.335V1.14258H21.5703V14.5713ZM1 14.5713H9.33203L4.18945 24.8564H9.66797L14.4287 15.335V1.14258H1V14.5713Z" className={pathClassName} />
    </svg>
  );
}
