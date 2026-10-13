"use client";

import { openCookieSettings } from "@/lib/consent";

/** Footer link that reopens the cookie preference centre. */
export function CookieSettingsLink({ label = "Cookie settings" }: { label?: string }) {
  return (
    <button type="button" className="icfc-linkbtn" onClick={openCookieSettings}>
      {label}
    </button>
  );
}
