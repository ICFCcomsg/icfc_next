"use client";

import { useSyncExternalStore, type ReactNode } from "react";

const PARTS = ["admin", "icfc.com.sg"];
const noop = () => () => {};

/** Builds the address in the browser so scrapers reading the HTML never see it; server HTML shows "admin [at] icfc.com.sg". */
export function EmailLink({ className, children }: { className?: string; children?: ReactNode }) {
  const email = useSyncExternalStore(noop, () => PARTS.join("@"), () => undefined);
  return (
    <a href={email && `mailto:${email}`} className={className}>
      {children}
      {email ?? PARTS.join(" [at] ")}
    </a>
  );
}
