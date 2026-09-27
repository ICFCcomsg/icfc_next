"use client";

import { useState } from "react";
import { Modal } from "@/components/atoms/modal";
import en from "@/public/lang/en.json";
import zh from "@/public/lang/zh.json";
import ms from "@/public/lang/ms.json";
import ko from "@/public/lang/ko.json";
import id from "@/public/lang/id.json";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";

const translations = { en, zh, ms, ko, id };
const navigation = [
  ["home", "/index.html"],
  ["industries", "/industry.html"],
  ["about", "/about.html"],
  ["services", "/services.html"],
  ["blog", "/blog.html"],
  ["contact", "/contact-us.html"],
] as const;

export function SiteHeader({ route }: { route: string }) {
  const [panel, setPanel] = useState<"menu" | "search" | null>(null);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<keyof typeof translations>("en");
  const copy = translations[language];
  function isCurrent(href: string) {
    if (href === "/services.html") return route.startsWith("services");
    if (href === "/blog.html") return route.startsWith("blog");
    return href === `/${route}`;
  }
  return (
    <header className="native-site-header rs-header-area rs-header-one">
      <div className="rs-header-top">
        <span>
          {copy.top.obstacle_text}{" "}
          <SiteLink href="/contact-us.html">{copy.top.connect_link}</SiteLink>
        </span>
        <div>
          <SiteLink href="tel:+6586017001">
            ☎ {copy.top.call_us_label} +65 8601 7001
          </SiteLink>
          <SiteLink href="mailto:admin@icfc.com.sg">
            ✉ {copy.top.send_mail_label} admin@icfc.com.sg
          </SiteLink>
        </div>
      </div>
      <div className="native-header-bar header-wrapper">
        <SiteLink href="/" className="header-logo" aria-label="ICFC home">
          <SiteImage
            src="/assets/images/logo/logo.png"
            alt="ICFC"
            width={150}
          />
        </SiteLink>
        <nav
          className="main-menu native-desktop-nav"
          aria-label="Main navigation"
        >
          <ul>
            {navigation.map(([label, href]) => (
              <li key={href} className={isCurrent(href) ? "active" : ""}>
                <SiteLink
                  href={href}
                  aria-current={isCurrent(href) ? "page" : undefined}
                >
                  {copy.nav[label]}
                </SiteLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="native-header-actions">
          <select
            className="native-language-select"
            aria-label={copy.header.language_label}
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value as keyof typeof translations)
            }
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ms">Melayu</option>
            <option value="ko">한국어</option>
            <option value="id">Bahasa</option>
          </select>
          <SiteLink
            href="/contact-us.html"
            className="rs-btn has-icon has-transparent has-border has-radius native-quote"
          >
            {copy.header.get_quote} ↗
          </SiteLink>
          <button
            className="native-round-button"
            type="button"
            aria-label="Search site"
            onClick={() => setPanel("search")}
          >
            <i className="ri-search-line" aria-hidden="true" />
          </button>
          <button
            className="native-round-button"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={panel === "menu"}
            onClick={() => setPanel("menu")}
          >
            <i className="ri-menu-line" aria-hidden="true" />
          </button>
        </div>
      </div>
      {panel && (
        <Modal
          label={panel === "menu" ? "Navigation menu" : "Search site"}
          className="native-header-panel"
          onClose={() => setPanel(null)}
        >
          <button
            type="button"
            autoFocus
            aria-label="Close panel"
            className="native-panel-close"
            onClick={() => setPanel(null)}
          >
            ×
          </button>
          <h2>{panel === "menu" ? "Menu" : "Search site"}</h2>
          {panel === "search" && (
            <input
              aria-label="Search pages"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search pages…"
            />
          )}
          <nav
            aria-label={
              panel === "menu" ? "Expanded navigation" : "Search results"
            }
          >
            {navigation
              .filter(
                ([label]) =>
                  panel !== "search" ||
                  copy.nav[label].toLowerCase().includes(query.toLowerCase()),
              )
              .map(([label, href]) => (
                <SiteLink
                  key={href}
                  href={href}
                  aria-current={isCurrent(href) ? "page" : undefined}
                >
                  {copy.nav[label]}
                </SiteLink>
              ))}
          </nav>
          <p>
            <SiteLink href="tel:+6586017001">+65 8601 7001</SiteLink>
            <br />
            <SiteLink href="mailto:admin@icfc.com.sg">
              admin@icfc.com.sg
            </SiteLink>
          </p>
        </Modal>
      )}
    </header>
  );
}
