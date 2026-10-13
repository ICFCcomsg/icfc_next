"use client";

import { hasConsent } from "@/lib/consent";
import languages from "@/lib/i18n/languages.json";

/** current = language code; path = current path without the language prefix. */
export function LanguageSwitcher({ current = "en", path = "/" }: { current?: string; path?: string }) {
  return (
    <label className="icfc-lang">
      <span className="icfc-sr">Language</span>
      <select
        value={current}
        onChange={(e) => {
          const l = languages.find((x) => x.code === e.target.value);
          if (!l) return;
          if (hasConsent("functional")) document.cookie = `icfc_lang=${l.code}; Max-Age=31536000; Path=/; SameSite=Lax`;
          location.href = (l.prefix || "") + path;
        }}
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} lang={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
