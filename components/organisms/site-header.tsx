"use client";
import { Icon } from "@/components/atoms/icon";

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
  ["home", "/"],
  ["industries", "/industry"],
  ["about", "/about"],
  ["services", "/services"],
  ["blog", "/blog"],
  ["contact", "/contact-us"],
] as const;

export function SiteHeader({ route }: { route: string }) {
  const [panel, setPanel] = useState<"menu" | "search" | null>(null);
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<keyof typeof translations>("en");
  const copy = translations[language];
  function isCurrent(href: string) {
    if (href === "/") return route === "index";
    if (href === "/services") return route.startsWith("services");
    if (href === "/blog") return route.startsWith("blog");
    return href === `/${route}`;
  }
  return (
    <header className="sticky top-0 z-50 bg-[#2B3944] text-white">
      <div className="flex items-center justify-between gap-4 bg-[#AB052D] px-[15px] py-[7px] md:min-h-[47.5px] text-xs font-medium md:text-base [&>div]:hidden [&>div]:items-center [&>div]:gap-5 md:[&>div]:flex [&_a]:text-white">
        <span className="flex flex-wrap items-center gap-x-1">
          <span className="mr-2 hidden rounded bg-white px-1 text-[#AB052D] sm:inline-flex">
            <Icon name="right" />
          </span>
          {copy.top.obstacle_text}{" "}
          <SiteLink href="/contact-us" className="underline">
            {copy.top.connect_link}
          </SiteLink>
        </span>
        <div>
          <select
            className="w-[144px] rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[13px] font-medium text-[#111]"
            aria-label={copy.header.language_label}
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value as keyof typeof translations)
            }
          >
            <option value="en">Select Language</option>
            <option value="zh">中文</option>
            <option value="ms">Melayu</option>
            <option value="ko">한국어</option>
            <option value="id">Bahasa</option>
          </select>
          <SiteLink href="tel:+6586017001">
            <Icon name="phone" className="mr-2" /> {copy.top.call_us_label} +65
            8601 7001
          </SiteLink>
          <SiteLink href="mailto:admin@icfc.com.sg">
            <Icon name="mail" className="mr-2" /> {copy.top.send_mail_label}{" "}
            admin@icfc.com.sg
          </SiteLink>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 px-[15px] py-2 md:gap-6 md:py-0">
        <SiteLink
          href="/"
          className="shrink-0 [&_img]:w-28 md:[&_img]:w-[150px] [&_img]:h-auto"
          aria-label="ICFC home"
        >
          <SiteImage
            src="/assets/images/logo/logo.png"
            alt="ICFC"
            width={150}
          />
        </SiteLink>
        <nav
          className="ml-auto hidden min-[1200px]:block [&_ul]:flex [&_ul]:items-center [&_ul]:gap-10 [&_a]:text-[17px] [&_a]:font-medium [&_a]:text-white [&_a]:hover:text-[#C8102E] [&_a[aria-current]]:text-[#C8102E]"
          aria-label="Main navigation"
        >
          <ul>
            {navigation.map(([label, href]) => (
              <li key={href}>
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
        <div className="flex items-center gap-2 md:gap-[18px]">
          <select
            className="w-16 rounded border border-white/20 bg-[#2B3944] p-1 text-xs text-white md:hidden"
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
            href="/contact-us"
            className="hidden items-center gap-3 whitespace-nowrap rounded-full border border-white/20 px-[26px] py-[14px] text-[17px] font-medium text-white transition-colors hover:bg-[#AB052D] md:inline-flex"
          >
            {copy.header.get_quote} ↗
          </SiteLink>
          <button
            className="grid size-9 shrink-0 place-items-center rounded-full border border-white/20 bg-transparent text-2xl transition-colors hover:bg-[#AB052D] md:size-[54px]"
            type="button"
            aria-label="Search site"
            onClick={() => setPanel("search")}
          >
            <Icon name="search" />
          </button>
          <button
            className="grid size-9 shrink-0 place-items-center rounded-full border border-white/20 bg-transparent text-2xl transition-colors hover:bg-[#AB052D] md:size-[54px]"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={panel === "menu"}
            onClick={() => setPanel("menu")}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
      {panel && (
        <Modal
          label={panel === "menu" ? "Navigation menu" : "Search site"}
          className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-[430px] max-w-full overflow-y-auto border-0 bg-white p-10 text-[#2B3944] backdrop:bg-black/50 [&_h2]:mb-6 [&_h2]:text-3xl [&_h2]:font-bold [&_nav]:my-6 [&_nav]:grid [&_nav]:gap-5 [&_nav_a]:text-xl [&_a[aria-current]]:text-[#AB052D] [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-slate-300 [&_input]:p-3"
          onClose={() => setPanel(null)}
        >
          <button
            type="button"
            autoFocus
            aria-label="Close panel"
            className="absolute top-3 right-4 text-3xl text-[#2B3944] hover:text-[#AB052D]"
            onClick={() => setPanel(null)}
          >
            ×
          </button>
          <h2>{panel === "menu" ? "Menu" : "Search site"}</h2>
          {panel === "menu" && (
            <>
              <SiteImage
                src="/assets/images/logo/logo.png"
                alt="ICFC"
                className="mb-6 w-[150px] h-auto"
              />
              <p>
                ICFC specializes in helping startups and enterprises craft
                strategic solutions.
              </p>
              <div className="my-6 grid grid-cols-3 gap-2">
                {["01", "02", "03", "04", "05", "06"].map((number) => (
                  <a
                    key={number}
                    href={`/assets/images/gallery/gallery-thumb-${number}.webp`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiteImage
                      src={`/assets/images/gallery/gallery-thumb-${number}.webp`}
                      alt={`ICFC gallery ${number}`}
                      className="aspect-square w-full rounded-md object-cover"
                    />
                  </a>
                ))}
              </div>
            </>
          )}
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
            <span className="mb-3 block">
              10 BUROH STREET #04-05 WEST CONNECT BUILDING SINGAPORE 627564
            </span>
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
