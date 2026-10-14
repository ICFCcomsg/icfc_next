"use client";
import { AnimatedMenuIcon } from "@/components/atoms/animated-element";
import { Icon } from "@/components/atoms/icon";

import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { Modal } from "@/components/atoms/modal";
import { SiteLink } from "@/components/atoms/site-link";
import { useI18n } from "@/components/atoms/i18n-provider";
import { LANGS, localizedPath } from "@/lib/i18n";
import { SiteImage } from "@/components/atoms/site-image";

const navigation = [
  ["home", "/"],
  ["industries", "/industry"],
  ["about", "/about"],
  ["services", "/services"],
  ["blog", "/blog"],
  ["contact", "/contact-us"],
] as const;

function subscribeScroll(update: () => void) {
  window.addEventListener("scroll", update, { passive: true });
  return () => window.removeEventListener("scroll", update);
}

export function SiteHeader({ route }: { route: string }) {
  const [panel, setPanel] = useState<"menu" | "search" | null>(null);
  const [query, setQuery] = useState("");
  // The URL decides the language: "/zh-hans/..." is Simplified Chinese, unprefixed is English.
  const pathname = usePathname();
  const first = pathname.split("/")[1];
  const lang = LANGS.find((l) => l.prefix && l.segment === first) ?? LANGS[0];
  const basePath = lang.prefix ? pathname.slice(lang.prefix.length) || "/" : pathname;
  const href = (path: string) => localizedPath(lang.segment, path);
  const sticky = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 200,
    () => false,
  );
  const reducedMotion = useReducedMotion();
  const { dict: copy } = useI18n();
  function isCurrent(href: string) {
    if (href === "/") return route === "index";
    if (href === "/services") return route.startsWith("services");
    if (href === "/blog") return route.startsWith("blog");
    return href === `/${route}`;
  }
  const navigationBar = (
    <div className="flex items-center justify-between gap-3 bg-[#2B3944] px-15 py-0 max-[1600px]:px-3.75 max-[1199px]:py-2.5 max-[575px]:py-3.25 md:gap-6">
      <SiteLink
        href="/"
        className="shrink-0 [&_img]:w-28 md:[&_img]:w-37.5 [&_img]:h-auto"
        aria-label="ICFC home"
      >
        <SiteImage src="/assets/images/logo/logo.webp" alt="ICFC" width={150} loading="eager" />
      </SiteLink>
      <nav
        className="ml-auto hidden min-[1200px]:block [&_ul]:flex [&_ul]:items-center [&_ul]:gap-10 [&_a]:inline-block [&_a]:py-2 [&_a]:text-[17px] [&_a]:font-medium [&_a]:text-white [&_a]:hover:text-[#C8102E] [&_a[aria-current]]:text-[#C8102E]"
        aria-label="Main navigation"
      >
        <ul>
          {navigation.map(([label, path]) => (
            <li key={path}>
              <SiteLink
                href={href(path)}
                aria-current={isCurrent(path) ? "page" : undefined}
              >
                {copy.nav[label]}
              </SiteLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-2 md:gap-4.5">
        <SiteLink
          href="/contact-us"
          className="hidden items-center gap-3 whitespace-nowrap rounded-full border border-white/20 px-6.5 py-3.5 text-[17px] font-medium text-white transition-colors hover:bg-[#AB052D] md:inline-flex"
        >
          {copy.header.get_quote} ↗
        </SiteLink>
        <button
          className="grid size-9 shrink-0 place-items-center rounded-full border border-white/20 bg-transparent text-2xl transition-colors hover:bg-[#AB052D] md:size-13.5"
          type="button"
          aria-label="Search site"
          onClick={() => setPanel("search")}
        >
          <Icon name="search" />
        </button>
        <motion.button
          whileHover="hover"
          className="grid size-9 shrink-0 place-items-center rounded-full border border-white/20 bg-transparent text-2xl transition-colors hover:bg-[#AB052D] md:size-13.5"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={panel === "menu"}
          onClick={() => setPanel("menu")}
        >
          <AnimatedMenuIcon />
        </motion.button>
      </div>
    </div>
  );
  return (
    <header className="relative z-50 bg-[#2B3944] text-white">
      <div className="flex flex-wrap items-center justify-between gap-2.5 bg-[#AB052D] px-15 py-1.75 text-sm font-medium max-[1600px]:px-3.75 max-[991px]:justify-center max-[991px]:pt-2 max-[991px]:pb-2.5 [&_a]:text-white">
        <span className="flex items-center gap-2.5 text-center text-white/90 max-[480px]:hidden">
          <span className="flex h-5 w-4.25 shrink-0 items-center justify-center rounded bg-white text-[9px] text-[#AB052D]">
            <Icon name="right" />
          </span>
          <span>
            {copy.top.obstacle_text}{" "}
            <SiteLink
              href="/contact-us"
              className="underline hover:text-[#2B3944]!"
            >
              {copy.top.connect_link}
            </SiteLink>
          </span>
        </span>
        <div className="flex items-center gap-7.5 max-[575px]:flex-wrap max-[575px]:justify-center max-[575px]:gap-x-7.5 max-[575px]:gap-y-1.25">
          <select
            className="w-36 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[13px] font-medium text-[#111]"
            aria-label={copy.header.language_label}
            value={lang.segment}
            onChange={(event) => {
              window.location.href = localizedPath(event.target.value, basePath);
            }}
          >
            {LANGS.map((l) => (
              <option key={l.segment} value={l.segment} lang={l.code}>
                {l.label}
              </option>
            ))}
          </select>
          <SiteLink
            href="tel:+6586017001"
            className="relative whitespace-nowrap min-[576px]:border-r min-[576px]:border-white/50 min-[576px]:pr-3.75 min-[576px]:-mr-3.75"
          >
            <Icon name="phone" className="mr-2" /> {copy.top.call_us_label} +65
            8601 7001
          </SiteLink>
          <SiteLink
            href="mailto:admin@icfc.com.sg"
            className="whitespace-nowrap"
          >
            <Icon name="mail" className="mr-2" /> {copy.top.send_mail_label}{" "}
            admin@icfc.com.sg
          </SiteLink>
        </div>
      </div>
      <div aria-hidden={sticky} inert={sticky}>
        {navigationBar}
      </div>
      <motion.div
        aria-hidden={!sticky}
        inert={!sticky}
        initial={false}
        animate={{
          y: sticky ? "0%" : "-100%",
          opacity: sticky ? 1 : 0,
          visibility: sticky ? "visible" : "hidden",
        }}
        transition={{
          duration: reducedMotion ? 0 : 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          visibility: { duration: 0, delay: sticky || reducedMotion ? 0 : 0.6 },
        }}
        className={`fixed inset-x-0 top-0 z-50 shadow-[0_0_25px_rgba(0,0,0,0.07)] ${sticky ? "" : "pointer-events-none"}`}
      >
        {navigationBar}
      </motion.div>
      {panel && (
        <Modal
          drawer
          closeLabel="Close panel"
          label={panel === "menu" ? "Navigation menu" : "Search site"}
          className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-107.5 max-w-full overflow-y-auto border-0 bg-white p-10 text-[#2B3944] backdrop:bg-black/50 [&_h2]:mb-6 [&_h2]:text-3xl [&_h2]:font-bold [&_nav]:my-6 [&_nav]:grid [&_nav]:gap-5 [&_nav_a]:text-xl [&_a[aria-current]]:text-[#AB052D] [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-slate-300 [&_input]:p-3"
          onClose={() => setPanel(null)}
        >
          <h2>{panel === "menu" ? "Menu" : "Search site"}</h2>
          {panel === "menu" && (
            <>
              <SiteImage
                src="/assets/images/logo/logo.webp"
                alt="ICFC"
                className="mb-6 w-37.5 h-auto"
              />
              <p>
                ICFC provides audit, consulting and training for ISO management systems, cybersecurity, data protection and sustainability standards in Singapore.
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
              .map(([label, path]) => (
                <SiteLink
                  key={path}
                  href={href(path)}
                  aria-current={isCurrent(path) ? "page" : undefined}
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
