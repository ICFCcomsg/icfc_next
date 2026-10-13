"use client";
import React, { useEffect, useRef, useState } from "react";
import { hasConsent, saveConsent, readConsent, loadScriptOnce } from "../consent/consent.js";

const ICONS = {
  enquiry: <path d="M4 4h16v12H7l-3 3V4zm3 4h10v2H7V8zm0 4h7v2H7v-2z" />,
  whatsapp: <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.2 1.4z" />,
  telegram: <path d="M21.9 4.3l-3.2 15.2c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.2l-4.8-1.5c-1-.3-1-1 .2-1.5L20.5 3c.9-.3 1.6.2 1.4 1.3z" />,
  wechat: <path d="M9 4C4.6 4 1 7 1 10.6c0 2 1.1 3.8 2.9 5l-.7 2.2 2.6-1.3c.9.3 2 .4 3 .4h.6a6 6 0 01-.2-1.5C9.2 12 12.5 9 16.6 9h.6C16.4 6.2 13 4 9 4zm-3 4a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2zm4.6 2C13 10 10 12.5 10 15.4s3 5.4 6.6 5.4c.8 0 1.6-.1 2.3-.4l2.1 1-.6-1.8c1.4-1 2.3-2.5 2.3-4.2 0-2.9-3-5.4-6.5-5.4zm-2.2 2.7a.8.8 0 110 1.6.8.8 0 010-1.6zm4.4 0a.8.8 0 110 1.6.8.8 0 010-1.6z" />,
  ai: <path d="M12 2l1.8 4.6L18 8.4l-4.2 1.8L12 15l-1.8-4.8L6 8.4l4.2-1.8L12 2zm6.5 10l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5zM6 14l1.2 3L10 18l-2.8 1L6 22l-1.2-3L2 18l2.8-1L6 14z" />,
  chat: <path d="M4 3h16a1 1 0 011 1v12a1 1 0 01-1 1H8l-5 4V4a1 1 0 011-1z" />,
};
const Icon = ({ name }) => <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">{ICONS[name]}</svg>;

const ENQUIRY_TYPES = ["Quote", "Audit", "Consulting", "Training", "Transfer", "Other"];

/**
 * Right-edge dock: enquiry form, WhatsApp, Telegram, WeChat, AI chat (Frappe).
 * Props:
 *  phone: "6586017001"; telegram: "https://t.me/+6586017001"; wechatId: "+65 8601 7001"
 *  endpoint: form POST URL (default "/api/enquiry"); services: [{id,name}] for the dropdown
 *  chatScriptSrc: Frappe chatbot embed script URL (loaded only on click and only with Functional consent)
 *  t: UI strings; pageTitle: used in WhatsApp greeting; privacyHref
 */
export const CONSENT_WORDING_VERSION = "MC-2026-10"; // bump whenever consent wording changes, so records show what each person agreed to

export default function FloatingDock({
  phone = "6586017001", telegram = "https://t.me/+6586017001", wechatId = "+65 8601 7001",
  endpoint = "/api/enquiry", services = /** @type {{id: string, name: string}[]} */ ([]), chatScriptSrc = "", t = {}, pageTitle = "", privacyHref = "/privacy-policy", lang = "en",
}) {
  const s = { enquire: "Enquire", send: "Send", name: "Name", email: "Email", phone: "Phone", company: "Company", message: "Message",
    consent_pdpa: "I have read the Privacy Policy and agree that ICFC may use my details to respond to this enquiry.",
    consent_email: "Yes, send me email updates about ICFC services, courses and standards news. I can unsubscribe at any time.",
    consent_phone: "Yes, ICFC may contact me with marketing calls or messages by phone, SMS, WhatsApp, Telegram or WeChat. I can opt out at any time by replying STOP.",
    ai_notice: "You are chatting with an automated AI assistant, not a person. Please do not share sensitive personal data.",
    chat_ai: "Ask our AI assistant", thanks: "Thank you. We have received your enquiry and will contact you soon.", get_quote: "Get a Quote", ...t };
  const [open, setOpen] = useState(null); // "form" | "wechat" | "ai" | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [preset, setPreset] = useState("Quote");
  const [preMsg, setPreMsg] = useState("");
  const [aiSeen, setAiSeen] = useState(false); // show the AI disclosure before every first chat in a page view
  const panelRef = useRef(null);

  useEffect(() => {
    const h = (e) => { setPreset((e.detail && e.detail.type) || "Quote"); setPreMsg((e.detail && e.detail.message) || ""); setStatus("idle"); setOpen("form"); };
    window.addEventListener("icfc:open-enquiry", h);
    const esc = (e) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", esc);
    return () => { window.removeEventListener("icfc:open-enquiry", h); document.removeEventListener("keydown", esc); };
  }, []);
  useEffect(() => { open && panelRef.current && panelRef.current.focus(); }, [open]);

  const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Hello ICFC, I have an enquiry" + (pageTitle ? " about " + pageTitle : "") + ".")}`;

  async function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(fd.entries()),
          marketing_email: fd.get("marketing_email") === "on", marketing_phone: fd.get("marketing_phone") === "on",
          consent: { version: CONSENT_WORDING_VERSION, lang, at: new Date().toISOString(),
            pdpa_text: s.consent_pdpa, email_text: s.consent_email, phone_text: s.consent_phone },
          page: typeof location !== "undefined" ? location.href : "" }) });
      setStatus(res.ok ? "done" : "error");
    } catch (err) { setStatus("error"); }
  }

  async function startAi() {
    if (!hasConsent("functional") || !aiSeen) { setOpen("ai"); return; }
    setOpen(null);
    if (chatScriptSrc) await loadScriptOnce(chatScriptSrc, "functional");
    window.dispatchEvent(new CustomEvent("icfc:ai-chat-open"));
  }
  async function allowFunctionalAndChat() {
    const cur = readConsent();
    if (!hasConsent("functional")) saveConsent({ ...(cur ? cur.c : {}), functional: true });
    setAiSeen(true);
    setOpen(null);
    if (chatScriptSrc) await loadScriptOnce(chatScriptSrc, "functional");
    window.dispatchEvent(new CustomEvent("icfc:ai-chat-open"));
  }

  const items = [
    { key: "form", label: s.enquire, icon: "enquiry", onClick: () => setOpen(open === "form" ? null : "form") },
    { key: "wa", label: "WhatsApp", icon: "whatsapp", href: wa },
    { key: "tg", label: "Telegram", icon: "telegram", href: telegram },
    { key: "wc", label: "WeChat", icon: "wechat", onClick: () => setOpen(open === "wechat" ? null : "wechat") },
    { key: "ai", label: s.chat_ai, icon: "ai", onClick: startAi },
  ];

  return (
    <>
      <nav className={"icfc-dock" + (mobileOpen ? " is-open" : "")} aria-label="Contact options">
        <button className="icfc-dock-toggle" aria-expanded={mobileOpen} aria-label="Contact us" onClick={() => setMobileOpen(!mobileOpen)}><Icon name="chat" /></button>
        <ul>
          {items.map((it) => (
            <li key={it.key}>
              {it.href ? (
                <a className={"icfc-dock-btn is-" + it.key} href={it.href} target="_blank" rel="noopener noreferrer" aria-label={it.label} title={it.label}><Icon name={it.icon} /><span>{it.label}</span></a>
              ) : (
                <button className={"icfc-dock-btn is-" + it.key} onClick={it.onClick} aria-label={it.label} title={it.label}><Icon name={it.icon} /><span>{it.label}</span></button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <aside className="icfc-panel" role="dialog" aria-modal="false" aria-labelledby="icfc-panel-h" tabIndex={-1} ref={panelRef}>
          <div className="icfc-dialog-head">
            <h2 id="icfc-panel-h">{open === "form" ? s.get_quote + " / " + s.enquire : open === "wechat" ? "WeChat" : s.chat_ai}</h2>
            <button className="icfc-close" aria-label="Close" onClick={() => setOpen(null)}>×</button>
          </div>

          {open === "form" && (status === "done" ? <p className="icfc-success" role="status">{s.thanks}</p> : (
            <form className="icfc-form" onSubmit={submit} noValidate={false}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="icfc-hp" aria-hidden="true" />
              <label>{s.name}<input name="name" required autoComplete="name" /></label>
              <label>{s.company}<input name="company" autoComplete="organization" /></label>
              <label>{s.email}<input name="email" type="email" required autoComplete="email" /></label>
              <label>{s.phone}<input name="phone" type="tel" autoComplete="tel" /></label>
              <label>Country<input name="country" autoComplete="country-name" /></label>
              <label>Enquiry type<select name="type" defaultValue={preset} key={preset}>{ENQUIRY_TYPES.map((x) => <option key={x}>{x}</option>)}</select></label>
              {services.length > 0 && (
                <label>Service<select name="service" defaultValue=""><option value="">Not sure yet</option>{services.map((x) => <option key={x.id} value={x.name}>{x.name}</option>)}</select></label>
              )}
              <label>{s.message}<textarea name="message" rows={4} required defaultValue={preMsg} key={preMsg} /></label>
              <label className="icfc-check"><input type="checkbox" name="pdpa" required /> <span>{s.consent_pdpa} <a href={privacyHref}>Privacy Policy</a></span></label>
              <fieldset className="icfc-optin">
                <legend>Optional. Leaving these unticked does not affect your enquiry.</legend>
                <label className="icfc-check"><input type="checkbox" name="marketing_email" /> <span>{s.consent_email}</span></label>
                <label className="icfc-check"><input type="checkbox" name="marketing_phone" /> <span>{s.consent_phone}</span></label>
              </fieldset>
              <button className="icfc-btn" type="submit" disabled={status === "sending"}>{status === "sending" ? "..." : s.send}</button>
              {status === "error" && <p className="icfc-error" role="alert">Sorry, that did not go through. Please email admin@icfc.com.sg or WhatsApp +65 8601 7001.</p>}
            </form>
          ))}

          {open === "wechat" && (
            <div className="icfc-wechat">
              <p>Add us on WeChat using this ID:</p>
              <p className="icfc-wechat-id">{wechatId}</p>
              <button className="icfc-btn is-outline" onClick={() => navigator.clipboard && navigator.clipboard.writeText(wechatId)}>Copy ID</button>
              <div className="icfc-qr" aria-label="WeChat QR code placeholder">QR code</div>
            </div>
          )}

          {open === "ai" && (
            <div>
              <p><strong>{s.ai_notice}</strong></p>
              <p>The AI assistant needs Functional cookies to keep your conversation linked to this browser.</p>
              <button className="icfc-btn" onClick={allowFunctionalAndChat}>{hasConsent("functional") ? "Start chat" : "Allow Functional cookies and start chat"}</button>
            </div>
          )}
        </aside>
      )}
    </>
  );
}

/**
 * Helper for any "Get a Quote" or "Contact us" button.
 * openEnquiry("Quote"); openEnquiry("Transfer");
 * openEnquiry("Other", "Please send details of your SS 680 certified consultants.");
 * openEnquiry("Other", "Please tell me whether ICFC is on IMDA's DPTM consultancy list or is a DPE service provider.");
 */
export function openEnquiry(type = "Quote", message = "") {
  window.dispatchEvent(new CustomEvent("icfc:open-enquiry", { detail: { type, message } }));
}
