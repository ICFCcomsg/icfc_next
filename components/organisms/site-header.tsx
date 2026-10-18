"use client";
import { AnimatedMenuIcon } from "@/components/atoms/animated-element";
import { Icon } from "@/components/icons/icon";

import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { Modal } from "@/components/atoms/modal";
import { SiteLink } from "@/components/atoms/site-link";
import { useI18n } from "@/components/atoms/i18n-provider";
import { LANGS, localizedPath } from "@/lib/i18n";
import { SiteImage } from "@/components/atoms/site-image";
import siteEn from "@/lib/i18n/site/en.json";
import { SERVICE_GROUPS, groupAnchor, services } from "@/lib/service-data";

type NavKey = keyof typeof siteEn.nav;
type SubLink = [label: string, href: string];

// Pack section 5: six main items. Sub-links point only at pages and sections that exist;
// Compare Services, Industries pages, Insights filters, Feedback and Careers come later.
// ponytail: sub-link labels are English until the site dictionaries carry them.
const navigation: [NavKey, string, SubLink[]?][] = [
  ["services", "/services"],
  [
    "training",
    "/training",
    [
      ["Course calendar", "/training/calendar"],
      ["Online courses", process.env.LMS_COURSES_URL!],
      ["In-house training", "/training#in-house"],
      ["Funding and discounts", "/training/funding"],
      ["LMS terms", "/training/lms-terms"],
    ],
  ],
  ["industries", "/industry"],
  ["grants", "/grants/edge"],
  [
    "about",
    "/about",
    [
      ["Our story", "/about#story"],
      ["Impartiality", "/about#impartiality"],
      ["SS 680 certified consultancy", "/about/ss-680-certified-consultancy"],
      ["Our team", "/about#team"],
      ["Regional reach", "/about#regional-reach"],
    ],
  ],
  ["blog", "/blog"],
];

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
  // Languages whose dictionary predates the Training and Grants items fall back to English labels.
  const label = (key: NavKey) => (copy.nav as Partial<typeof siteEn.nav>)[key] ?? siteEn.nav[key];
  const group = (g: string) => copy.groups[g as keyof typeof copy.groups];
  function isCurrent(href: string) {
    const section = { "/industry": "industry", "/grants/edge": "grants", "/blog": "blog" }[href] ?? href.slice(1);
    return route.startsWith(section);
  }
  const link = (path: string) => (path.startsWith("http") ? path : href(path));
  const topLink = "inline-block py-2 text-[17px] font-medium text-white hover:text-[#C8102E] aria-[current]:text-[#C8102E]";
  // Invisible strip over the gap between the Services link and the mega-menu, so it stays open while the cursor moves down.
  const megaBridge = "relative after:absolute after:inset-x-0 after:top-full after:h-12 after:content-['']";
  const panelLink = "block rounded-md px-3 py-2 text-[15px] text-[#2B3944] hover:bg-[#F0F4FC] hover:text-[#AB052D]";
  const navigationBar = (
    <div className="relative flex items-center justify-between gap-3 bg-[#2B3944] px-15 py-0 max-[1600px]:px-3.75 max-[1199px]:py-2.5 max-[575px]:py-3.25 md:gap-6">
      <SiteLink
        href="/"
        className="shrink-0 [&_img]:w-28 md:[&_img]:w-37.5 [&_img]:h-auto"
        aria-label="ICFC home"
      >
        <SiteImage src="/assets/images/logo/logo.webp" alt="ICFC" width={150} loading="eager" />
      </SiteLink>
      <nav className="ml-auto hidden min-[1200px]:block" aria-label="Main navigation">
        <ul className="m-0 flex items-center gap-9 p-0 list-none">
          {navigation.map(([key, path, subs]) => (
            <li key={path} className={`group/nav ${subs ? "relative" : ""}`}>
              <SiteLink href={href(path)} aria-current={isCurrent(path) ? "page" : undefined} className={key === "services" ? `${topLink} ${megaBridge}` : topLink}>
                {label(key)}
                {(subs || key === "services") && <Icon name="down" className="ml-1 size-3.5!" />}
              </SiteLink>
              {key === "services" && (
                // Mega-menu: the four groups and their services; spans the header bar.
                <div className="invisible absolute inset-x-0 top-full z-50 bg-white text-[#2B3944] opacity-0 shadow-[0_20px_40px_rgba(22,29,46,0.15)] transition-opacity group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                  <div className="mx-auto grid max-w-330 grid-cols-4 gap-8 px-6 py-8">
                    {SERVICE_GROUPS.map((g) => (
                      <div key={g}>
                        <SiteLink href={href(`/services#${groupAnchor(g)}`)} className="mb-3 block border-b border-[#DBDEE1] pb-2 text-[15px] font-semibold text-[#AB052D]">
                          {group(g)}
                        </SiteLink>
                        <ul className="m-0 p-0 list-none">
                          {services
                            .filter((s) => s.group === g)
                            .map((s) => (
                              <li key={s.slug}>
                                <SiteLink href={href(`/services/${s.slug}`)} className={`${panelLink} py-1! text-[14px]!`}>
                                  {s.name}
                                </SiteLink>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#DBDEE1] bg-[#F8F8FD]">
                    <div className="mx-auto max-w-330 px-6 py-4">
                      <SiteLink href={href("/services")} className="font-semibold text-[#AB052D] hover:underline">
                        {copy.footer.all_services} →
                      </SiteLink>
                    </div>
                  </div>
                </div>
              )}
              {subs && (
                <ul className="invisible absolute left-0 top-full z-50 m-0 w-64 rounded-lg bg-white p-2 list-none opacity-0 shadow-[0_20px_40px_rgba(22,29,46,0.15)] transition-opacity group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                  {subs.map(([text, target]) => (
                    <li key={target}>
                      {target.startsWith("http") ? (
                        <a href={target} target="_blank" rel="noopener" className={panelLink}>
                          {text} ↗
                        </a>
                      ) : (
                        <SiteLink href={href(target)} className={panelLink}>
                          {text}
                        </SiteLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
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
                {["audit", "consult", "train", "integrated-audit", "regional-reach", "hero-assurance"].map((name) => (
                  <SiteImage
                    key={name}
                    src={`/assets/icfc/sketch-${name}.svg`}
                    alt=""
                    className="aspect-square w-full rounded-md object-cover"
                  />
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
              .filter(([key]) => panel !== "search" || label(key).toLowerCase().includes(query.toLowerCase()))
              .map(([key, path, subs]) => (
                <div key={path}>
                  <SiteLink href={href(path)} aria-current={isCurrent(path) ? "page" : undefined}>
                    {label(key)}
                  </SiteLink>
                  {panel === "menu" && (key === "services" || subs) && (
                    <ul className="mt-2 ml-4 grid gap-1.5 p-0 list-none text-[15px] text-[#4A5560]">
                      {(key === "services"
                        ? SERVICE_GROUPS.map((g): SubLink => [group(g), `/services#${groupAnchor(g)}`])
                        : subs!
                      ).map(([text, target]) => (
                        <li key={target}>
                          <SiteLink href={link(target)} className="text-[15px]! hover:text-[#AB052D]">
                            {text}
                          </SiteLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
