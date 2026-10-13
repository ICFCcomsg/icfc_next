"use client";

import { useEffect, useRef, useState } from "react";
import { readConsent, saveConsent, type ConsentChoices } from "@/lib/consent";
import cookieRegister from "@/lib/data/cookies.json";

const DEFAULT_TEXT = {
  cookie_title: "We value your privacy",
  cookie_body:
    "We use strictly necessary cookies to run this site. With your permission, we also use functional, performance and targeting cookies. You can change your choice at any time in Cookie settings.",
  accept_all: "Accept all",
  reject_all: "Reject all",
  cookie_settings: "Cookie settings",
  save_choices: "Save choices",
  cat_necessary: "Strictly necessary",
  cat_functional: "Functional",
  cat_performance: "Performance",
  cat_targeting: "Targeting",
  always_on: "Always on",
};

const CATEGORIES = {
  necessary: "Needed for the site to work, keep it secure and remember your cookie choices. Always on.",
  functional: "Remember preferences such as language and enable optional features such as the AI chat assistant.",
  performance:
    "Help us understand how the site is used through aggregated statistics (Google Analytics 4, Microsoft Clarity or Hotjar).",
  targeting:
    "Used by advertising and social platforms (Meta Pixel, LinkedIn Insight, YouTube) to measure campaigns and show relevant ICFC content elsewhere.",
};

const all = (v: boolean): ConsentChoices => ({ functional: v, performance: v, targeting: v });

/** Cookie banner plus preference centre. t: UI strings from lib/i18n/{lang}.json. */
export function CookieConsent({
  t = {},
  cookieNoticeHref = "/cookie-notice",
  privacyHref = "/privacy-policy",
}: {
  t?: Partial<typeof DEFAULT_TEXT>;
  cookieNoticeHref?: string;
  privacyHref?: string;
}) {
  const s = { ...DEFAULT_TEXT, ...t };
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [choices, setChoices] = useState(all(false));
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Consent lives in a cookie, so it can only be read after mount.
    const c = readConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (c) setChoices(c.c);
    else setShowBanner(true);
    const open = () => {
      const cur = readConsent();
      if (cur) setChoices(cur.c);
      setShowPrefs(true);
    };
    window.addEventListener("icfc:open-cookie-settings", open);
    return () => window.removeEventListener("icfc:open-cookie-settings", open);
  }, []);

  useEffect(() => {
    if (!showPrefs) return;
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowPrefs(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showPrefs]);

  const commit = (c: ConsentChoices) => {
    saveConsent(c);
    setChoices(c);
    setShowBanner(false);
    setShowPrefs(false);
  };

  return (
    <>
      {showBanner && !showPrefs && (
        <section className="icfc-cc-banner" aria-label={s.cookie_title}>
          <div className="icfc-cc-text">
            <h2 className="icfc-cc-title">{s.cookie_title}</h2>
            <p>
              {s.cookie_body} <a href={cookieNoticeHref}>Cookie Notice</a>
            </p>
          </div>
          <div className="icfc-cc-actions">
            <button type="button" className="icfc-btn is-outline" onClick={() => setShowPrefs(true)}>
              {s.cookie_settings}
            </button>
            <button type="button" className="icfc-btn is-outline" onClick={() => commit(all(false))}>
              {s.reject_all}
            </button>
            <button type="button" className="icfc-btn" onClick={() => commit(all(true))}>
              {s.accept_all}
            </button>
          </div>
        </section>
      )}

      {showPrefs && (
        <div className="icfc-overlay" onClick={(e) => e.target === e.currentTarget && setShowPrefs(false)}>
          <div className="icfc-dialog" role="dialog" aria-modal="true" aria-labelledby="icfc-cc-h" tabIndex={-1} ref={dialogRef}>
            <div className="icfc-dialog-head">
              <h2 id="icfc-cc-h">{s.cookie_settings}</h2>
              <button type="button" className="icfc-close" aria-label="Close" onClick={() => setShowPrefs(false)}>
                ×
              </button>
            </div>
            <p className="icfc-muted">
              Choose which optional cookies we may use. You can change this at any time from the Cookie settings link in
              the footer. See our <a href={cookieNoticeHref}>Cookie Notice</a> and <a href={privacyHref}>Privacy Policy</a>.
            </p>
            {(Object.keys(CATEGORIES) as (keyof typeof CATEGORIES)[]).map((k) => (
              <details className="icfc-cc-cat" key={k}>
                <summary>
                  <span>{s[`cat_${k}`]}</span>
                  {k === "necessary" ? (
                    <span className="icfc-pill">{s.always_on}</span>
                  ) : (
                    <label className="icfc-switch" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        role="switch"
                        aria-label={s[`cat_${k}`]}
                        checked={choices[k]}
                        onChange={(e) => setChoices({ ...choices, [k]: e.target.checked })}
                      />
                      <span aria-hidden="true" />
                    </label>
                  )}
                </summary>
                <p>{CATEGORIES[k]}</p>
                <ul className="icfc-cc-list">
                  {cookieRegister
                    .filter((c) => c.category.toLowerCase().startsWith(k === "necessary" ? "strictly" : k))
                    .map((c) => (
                      <li key={c.name}>
                        <strong>{c.name}</strong> ({c.provider}): {c.purpose}. {c.duration}.
                      </li>
                    ))}
                </ul>
              </details>
            ))}
            <div className="icfc-cc-actions">
              <button type="button" className="icfc-btn is-outline" onClick={() => commit(all(false))}>
                {s.reject_all}
              </button>
              <button type="button" className="icfc-btn is-outline" onClick={() => commit(choices)}>
                {s.save_choices}
              </button>
              <button type="button" className="icfc-btn" onClick={() => commit(all(true))}>
                {s.accept_all}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
