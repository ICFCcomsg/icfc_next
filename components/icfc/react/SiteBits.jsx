"use client";
import React, { useEffect, useState } from "react";
import { openEnquiry } from "./FloatingDock.jsx";
import { hasConsent, saveConsent, readConsent, openCookieSettings } from "../consent/consent.js";

/** Quick view / Full detail switch. Wrap detail-only blocks in <div data-detail>. State lasts for the session only. */
export function ViewToggle({ labels = ["Quick view", "Full detail"] }) {
  const [full, setFull] = useState(false);
  useEffect(() => { try { setFull(sessionStorage.getItem("icfc_view") === "full"); } catch (e) {} }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("icfc-quick", !full);
    try { sessionStorage.setItem("icfc_view", full ? "full" : "quick"); } catch (e) {}
  }, [full]);
  return (
    <div className="icfc-seg" role="group" aria-label="Detail level">
      <button aria-pressed={!full} onClick={() => setFull(false)}>{labels[0]}</button>
      <button aria-pressed={full} onClick={() => setFull(true)}>{labels[1]}</button>
    </div>
  );
}

/** Minimal "Transfer your services" banner. */
export function TransferBanner({ title = "Transfer your services to ICFC", text = "Moving your consulting, internal audits or training to us is simple. We review your current system, certificates and plans, then pick up where your previous provider left off. Any transfer of certification between certification bodies is handled by the receiving certification body under accreditation rules.", cta = "Start a transfer" }) {
  return (
    <aside className="icfc-transfer">
      <div><p className="icfc-eyebrow">Thinking of switching providers?</p><h2>{title}</h2><p>{text}</p></div>
      <button className="icfc-btn is-light" onClick={() => openEnquiry("Transfer")}>{cta}</button>
    </aside>
  );
}

/** Language switcher. languages from /i18n/languages.json; current = code; path = current path without language prefix. */
export function LanguageSwitcher({ languages, current = "en", path = "/" }) {
  return (
    <label className="icfc-lang">
      <span className="icfc-sr">Language</span>
      <select value={current} onChange={(e) => {
        const l = languages.find((x) => x.code === e.target.value);
        try { if (hasConsent("functional")) document.cookie = `icfc_lang=${l.code}; Max-Age=31536000; Path=/; SameSite=Lax`; } catch (err) {}
        location.href = (l.prefix || "") + path;
      }}>
        {languages.map((l) => <option key={l.code} value={l.code} lang={l.code}>{l.label}</option>)}
      </select>
    </label>
  );
}

/** YouTube embed that loads nothing from YouTube until the visitor allows Targeting cookies and clicks play. */
export function YouTubeEmbed({ id, title }) {
  const [play, setPlay] = useState(false);
  const allowed = typeof document !== "undefined" && hasConsent("targeting");
  if (play && allowed) return <iframe className="icfc-yt" src={`https://www.youtube.com/embed/${id}?autoplay=1`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />;
  return (
    <div className="icfc-yt is-placeholder">
      <p>{title}</p>
      <p className="icfc-small">This video is hosted on YouTube, which sets targeting cookies.</p>
      <button className="icfc-btn" onClick={() => { if (!allowed) { const c = readConsent(); saveConsent({ ...(c ? c.c : {}), targeting: true }); } setPlay(true); }}>
        {allowed ? "Play video" : "Allow and play video"}
      </button>
    </div>
  );
}

/** Footer link that reopens the preference centre. */
export function CookieSettingsLink({ label = "Cookie settings" }) {
  return <button className="icfc-linkbtn" onClick={openCookieSettings}>{label}</button>;
}
