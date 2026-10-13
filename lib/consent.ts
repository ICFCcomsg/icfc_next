/**
 * ICFC consent core.
 * - Stores choices in the first-party cookie "icfc_consent" for 12 months.
 * - Maps choices to Google Consent Mode v2 and fires an "icfc:consent" event.
 * - Activates gated scripts written as <script type="text/plain" data-consent="performance" data-src="https://...">.
 */
export const CONSENT_COOKIE = "icfc_consent";
export const CONSENT_VERSION = 1; // bump when categories or vendors change, to ask visitors again
export const CATEGORIES = ["necessary", "functional", "performance", "targeting"] as const;
const MAX_AGE = 60 * 60 * 24 * 365;

export type ConsentCategory = (typeof CATEGORIES)[number];
export type ConsentChoices = Record<Exclude<ConsentCategory, "necessary">, boolean>;
type StoredConsent = { v: number; t: string; c: ConsentChoices & { necessary: true } };

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readConsent(): StoredConsent | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp("(?:^|; )" + CONSENT_COOKIE + "=([^;]*)"));
  let raw = m ? decodeURIComponent(m[1]) : null;
  if (!raw) {
    try {
      raw = localStorage.getItem(CONSENT_COOKIE); // fallback where cookies are unavailable
    } catch {}
  }
  if (!raw) return null;
  try {
    const v = JSON.parse(raw);
    return v && v.v === CONSENT_VERSION ? v : null;
  } catch {
    return null;
  }
}

export function hasConsent(category: ConsentCategory) {
  if (category === "necessary") return true;
  return !!readConsent()?.c[category];
}

export function saveConsent(choices: Partial<ConsentChoices>) {
  const value: StoredConsent = {
    v: CONSENT_VERSION,
    t: new Date().toISOString(),
    c: {
      necessary: true,
      functional: !!choices.functional,
      performance: !!choices.performance,
      targeting: !!choices.targeting,
    },
  };
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  if (!document.cookie.includes(CONSENT_COOKIE + "=")) {
    try {
      localStorage.setItem(CONSENT_COOKIE, JSON.stringify(value));
    } catch {}
  }
  applyConsent(value.c);
  window.dispatchEvent(new CustomEvent("icfc:consent", { detail: value.c }));
  return value.c;
}

export function applyConsent(c: ConsentChoices) {
  const g = (b: boolean) => (b ? "granted" : "denied");
  window.gtag?.("consent", "update", {
    analytics_storage: g(c.performance),
    ad_storage: g(c.targeting),
    ad_user_data: g(c.targeting),
    ad_personalization: g(c.targeting),
    functionality_storage: g(c.functional),
    personalization_storage: g(c.functional),
  });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "icfc_consent_update", icfc_consent: c });
  activateGatedScripts(c);
}

export function activateGatedScripts(c: ConsentChoices) {
  document
    .querySelectorAll<HTMLScriptElement>('script[type="text/plain"][data-consent]')
    .forEach((el) => {
      const cat = el.dataset.consent as keyof ConsentChoices;
      if (!c[cat] || el.dataset.activated) return;
      const s = document.createElement("script");
      if (el.dataset.src) {
        s.src = el.dataset.src;
        s.async = true;
      } else s.text = el.text;
      el.dataset.activated = "1";
      el.after(s);
    });
}

/** Load a third-party script once, only if its category is allowed. */
export function loadScriptOnce(src: string, category: ConsentCategory) {
  if (!hasConsent(category)) return Promise.resolve(false);
  if (document.querySelector(`script[src="${src}"]`)) return Promise.resolve(true);
  return new Promise<boolean>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve(true);
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

/** Re-open the preference centre from anywhere, e.g. the footer "Cookie settings" link. */
export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent("icfc:open-cookie-settings"));
}
