"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { hasConsent, loadScriptOnce, readConsent, saveConsent } from "@/lib/consent";
import { DockIcon } from "@/components/icons/dock-icon";
import { ENQUIRY_TYPES, type EnquiryType } from "@/lib/enquiry";
import consentText from "@/lib/data/marketing-consent.json";
import { services } from "@/lib/service-data";


const DEFAULT_TEXT = {
  enquire: "Enquire",
  send: "Send",
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  message: "Message",
  consent_pdpa: consentText.pdpa_notice,
  consent_email: consentText.email,
  consent_phone: consentText.phone,
  ai_notice: "You are chatting with an automated AI assistant, not a person. Please do not share sensitive personal data.",
  chat_ai: "Ask our AI assistant",
  ai_needs_functional: "The AI assistant needs Functional cookies to keep your conversation linked to this browser.",
  ai_start: "Start chat",
  ai_allow_start: "Allow Functional cookies and start chat",
  thanks: "Thank you. We have received your enquiry and will contact you soon.",
  get_quote: "Get a Quote",
};

// Bump in lib/data/marketing-consent.json whenever consent wording changes, so records show what each person agreed to.
export const CONSENT_WORDING_VERSION = consentText.version;

type Panel = "form" | "wechat" | "ai" | null;

/** Right-edge dock: enquiry form, WhatsApp, Telegram, WeChat and AI chat (Frappe, loaded only with Functional consent). */
export function FloatingDock({
  phone = "6586017001",
  telegram = "https://t.me/+6586017001",
  wechatId = "+65 8601 7001",
  endpoint = "/api/contact",
  chatScriptSrc = "",
  t = {},
  privacyHref = "/privacy-policy",
  lang = "en",
}: {
  phone?: string;
  telegram?: string;
  wechatId?: string;
  endpoint?: string;
  chatScriptSrc?: string;
  t?: Partial<typeof DEFAULT_TEXT>;
  privacyHref?: string;
  lang?: string;
}) {
  const s = { ...DEFAULT_TEXT, ...t };
  const [open, setOpen] = useState<Panel>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [preset, setPreset] = useState<EnquiryType>("Quote");
  const [preMsg, setPreMsg] = useState("");
  const [aiSeen, setAiSeen] = useState(false); // show the AI disclosure before the first chat in a page view
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const d = (e as CustomEvent<{ type?: EnquiryType; message?: string }>).detail;
      setPreset(d?.type || "Quote");
      setPreMsg(d?.message || "");
      setStatus("idle");
      setOpen("form");
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("icfc:open-enquiry", onOpen);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("icfc:open-enquiry", onOpen);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(fd.entries()),
          marketing_email: fd.get("marketing_email") === "on",
          marketing_phone: fd.get("marketing_phone") === "on",
          consent: {
            version: CONSENT_WORDING_VERSION,
            lang,
            at: new Date().toISOString(),
            pdpa_text: s.consent_pdpa,
            email_text: s.consent_email,
            phone_text: s.consent_phone,
          },
          page: location.href,
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  async function openChat() {
    setOpen(null);
    if (chatScriptSrc) await loadScriptOnce(chatScriptSrc, "functional");
    window.dispatchEvent(new CustomEvent("icfc:ai-chat-open"));
  }

  function startAi() {
    if (!hasConsent("functional") || !aiSeen) setOpen("ai");
    else openChat();
  }

  function allowFunctionalAndChat() {
    if (!hasConsent("functional")) saveConsent({ ...readConsent()?.c, functional: true });
    setAiSeen(true);
    openChat();
  }

  const waLink = (page: string) => `https://wa.me/${phone}?text=${encodeURIComponent(`Hello ICFC, I have an enquiry about: ${page}`)}`;
  const wa = waLink("your services");
  const items = [
    { key: "form", label: s.enquire, icon: "enquiry", onClick: () => setOpen(open === "form" ? null : "form") },
    { key: "wa", label: "WhatsApp", icon: "whatsapp", href: wa },
    { key: "tg", label: "Telegram", icon: "telegram", href: telegram },
    { key: "wc", label: "WeChat", icon: "wechat", onClick: () => setOpen(open === "wechat" ? null : "wechat") },
    { key: "ai", label: s.chat_ai, icon: "ai", onClick: startAi },
  ] as const;

  return (
    <>
      <nav className={"icfc-dock" + (mobileOpen ? " is-open" : "")} aria-label="Contact options">
        <button
          type="button"
          className="icfc-dock-toggle"
          aria-expanded={mobileOpen}
          aria-label="Contact us"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <DockIcon name="chat" />
        </button>
        <ul>
          {items.map((it) => (
            <li key={it.key}>
              {"href" in it ? (
                <a
                  className={"icfc-dock-btn is-" + it.key}
                  href={it.href}
                  // WhatsApp greeting names the page the visitor is on, read at click time.
                  onClick={it.key === "wa" ? (e) => { e.currentTarget.href = waLink(document.title.split(" | ")[0]); } : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={it.label}
                  title={it.label}
                >
                  <DockIcon name={it.icon} />
                  <span>{it.label}</span>
                </a>
              ) : (
                <button
                  type="button"
                  className={"icfc-dock-btn is-" + it.key}
                  onClick={it.onClick}
                  aria-label={it.label}
                  title={it.label}
                >
                  <DockIcon name={it.icon} />
                  <span>{it.label}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <aside className="icfc-panel" role="dialog" aria-modal="false" aria-labelledby="icfc-panel-h" tabIndex={-1} ref={panelRef}>
          <div className="icfc-dialog-head">
            <h2 id="icfc-panel-h">
              {open === "form" ? `${s.get_quote} / ${s.enquire}` : open === "wechat" ? "WeChat" : s.chat_ai}
            </h2>
            <button type="button" className="icfc-close" aria-label="Close" onClick={() => setOpen(null)}>
              ×
            </button>
          </div>

          {open === "form" &&
            (status === "done" ? (
              <p className="icfc-success" role="status">
                {s.thanks}
              </p>
            ) : (
              <form className="icfc-form" onSubmit={submit}>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="icfc-hp" aria-hidden="true" />
                <label>
                  {s.name}
                  <input name="name" required autoComplete="name" />
                </label>
                <label>
                  {s.company}
                  <input name="company" autoComplete="organization" />
                </label>
                <label>
                  {s.email}
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  {s.phone}
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label>
                  Country
                  <input name="country" autoComplete="country-name" />
                </label>
                <label>
                  Enquiry type
                  <select name="type" defaultValue={preset} key={preset}>
                    {ENQUIRY_TYPES.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Service
                  <select name="service" defaultValue="">
                    <option value="">Not sure yet</option>
                    {services.map((x) => (
                      <option key={x.id} value={x.name}>
                        {x.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  {s.message}
                  <textarea name="message" rows={4} required defaultValue={preMsg} key={preMsg} />
                </label>
                <label className="icfc-check">
                  <input type="checkbox" name="pdpa" required />{" "}
                  <span>
                    {s.consent_pdpa} <a href={privacyHref}>Privacy Policy</a>
                  </span>
                </label>
                <fieldset className="icfc-optin">
                  <legend>Optional. Leaving these unticked does not affect your enquiry.</legend>
                  <label className="icfc-check">
                    <input type="checkbox" name="marketing_email" /> <span>{s.consent_email}</span>
                  </label>
                  <label className="icfc-check">
                    <input type="checkbox" name="marketing_phone" /> <span>{s.consent_phone}</span>
                  </label>
                </fieldset>
                <button className="icfc-btn" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "..." : s.send}
                </button>
                {status === "error" && (
                  <p className="icfc-error" role="alert">
                    Sorry, that did not go through. Please email admin@icfc.com.sg or WhatsApp +65 8601 7001.
                  </p>
                )}
              </form>
            ))}

          {open === "wechat" && (
            <div className="icfc-wechat">
              <p>Add us on WeChat using this ID:</p>
              <p className="icfc-wechat-id">{wechatId}</p>
              <button type="button" className="icfc-btn is-outline" onClick={() => navigator.clipboard?.writeText(wechatId)}>
                Copy ID
              </button>
              {/* ponytail: QR placeholder until ICFC supplies the WeChat QR image */}
              <div className="mx-auto mt-4 grid size-40 place-items-center rounded-lg border-2 border-dashed border-[#DBDEE1] text-[13px] text-[#616C74]" aria-label="WeChat QR code coming soon">
                QR code
              </div>
            </div>
          )}

          {open === "ai" && (
            <div>
              <p>
                <strong>{s.ai_notice}</strong>
              </p>
              <p>{s.ai_needs_functional}</p>
              <button type="button" className="icfc-btn" onClick={allowFunctionalAndChat}>
                {hasConsent("functional") ? s.ai_start : s.ai_allow_start}
              </button>
            </div>
          )}
        </aside>
      )}
    </>
  );
}
