import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { QuoteButton } from "@/components/atoms/quote-button";
import { Icon } from "@/components/atoms/icon";
import { ContentTabs } from "@/components/molecules/content-tabs";
import {
  AccordionGroup,
  AccordionItem,
} from "@/components/molecules/accordion-item";
import { TransferBanner } from "@/components/molecules/transfer-banner";
import { ViewToggle } from "@/components/molecules/view-toggle";
import { getDictionary, getServices, type ServiceContent as Service } from "@/lib/dictionary";
import { SERVICE_GROUP_ICONS, offers } from "@/lib/service-data";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLdHtml,
  serviceJsonLd,
} from "@/lib/jsonld";

// Date the grant facts in the content matrix were last checked.
const FUNDING_CHECKED = "11 October 2026";

const container =
  "w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330";
const h2 =
  "mt-0 mb-5 font-semibold leading-[1.2] text-[#2B3944] text-[36px] max-[767px]:text-[26px] [word-break:break-word]";
const h3 = "mt-0 mb-2 font-semibold text-[20px] leading-[1.4]";
const p = "mt-0 mb-0 text-[17px] text-[#616C74] leading-7";
// Sketches named in the guide for SOC, HIPAA, GDPR and CMMI; other services use a group sketch.
const SKETCH_BY_SLUG: Record<string, string> = {
  "soc-1-soc-2-attestation-readiness": "sketch-soc-attestation",
  "hipaa-compliance": "sketch-hipaa-health-data",
  "gdpr-compliance": "sketch-gdpr-privacy",
  "cmmi-compliance": "sketch-cmmi-maturity",
};
const SKETCH_BY_GROUP: Record<string, string> = {
  "Cybersecurity, IT and Data Protection": "sketch-audit",
  "ISO Management Systems": "sketch-integrated-audit",
  "Singapore Standards and Schemes": "sketch-ss680-consultant",
  "Sustainability and Supply Chain": "sketch-regional-reach",
};
const section = "pt-20 pb-20 max-[767px]:pt-12.5 max-[767px]:pb-12.5";
const eyebrow =
  "mb-2 inline-block text-[12px] font-semibold uppercase tracking-[2px] text-[#AB052D]";

// Heading + text cards with a 01, 02... index; `dark` for the #2B3944 tabs section.
function NumberedCards({ items, dark }: { items: { heading: string; text: string }[]; dark?: boolean }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
      {items.map((x, i) => (
        <div
          key={x.heading}
          className={`rounded-2xl p-8 border-t-4 border-[#AB052D] ${dark ? "bg-[#2F3E4B]" : "bg-white shadow-[0_10px_30px_rgba(43,57,68,0.06)] border-x border-b border-x-[#DBDEE1] border-b-[#DBDEE1]"}`}
        >
          <span className={`mb-4 block text-[14px] font-bold ${dark ? "text-white/40" : "text-[#AB052D]"}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-0 mb-3 font-semibold text-[20px] leading-[1.4] ${dark ? "text-white" : "text-[#2B3944]"}`}>{x.heading}</h3>
          <p className={`m-0 text-[16px] leading-7 ${dark ? "text-white/70" : "text-[#616C74]"}`}>{x.text}</p>
        </div>
      ))}
    </div>
  );
}

export async function ServicePageContent({ service: s }: { service: Service }) {
  const t = await getDictionary();
  const L = t.service;
  const groupLabel = t.groups[s.group as keyof typeof t.groups];
  const groupHref = `/services#${s.group.toLowerCase().replace(/[^a-z]+/g, "-")}`;
  const groupCount = (await getServices()).filter((x) => x.group === s.group).length;
  // [label, value, note under the value]; the group note links to that group on /services.
  const facts = [
    [L.fact_code, s.code, s.owner],
    [L.fact_type, s.type, s.typeNote],
    [L.fact_group, groupLabel, t.home.view_all.replace("{n}", String(groupCount))],
    [L.fact_funding, s.edgeStatus, s.funding.replace(/^.*? - /, "")],
  ];
  const crumbs: [string, string?][] = [
    [L.breadcrumb_home, "/"],
    [L.breadcrumb_services, "/services"],
    [groupLabel, groupHref],
    [s.name],
  ];
  const offer = offers(s.slug);
  const needs = [
    ["audit", L.tab_audit],
    ["consultation", L.tab_consultation],
    ["training", L.tab_training],
  ] as const;
  const tabs = [
    { label: L.tab_audit, items: s.audit },
    { label: L.tab_consultation, items: s.consultation },
    { label: L.tab_training, items: s.training },
  ].filter((t) => t.items.length);

  return (
    <SitePageTemplate route={`services/${s.slug}`}>
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#161D2E] pt-16 pb-24 text-white max-[767px]:pt-10 max-[767px]:pb-16">
          <SiteImage src="/assets/bg/breadcrumb-bg-thumb-01.webp" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10" />
          <div className={container}>
            <nav aria-label="Breadcrumb">
              <ol className="m-0 p-0 list-none flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-medium tracking-wide text-white/80">
                {crumbs.map(([name, href], i) => (
                  <li key={name} className="flex items-center gap-3">
                    {i > 0 && <Icon name="right" className="size-3.5! text-white/50" aria-hidden="true" />}
                    {href ? (
                      <SiteLink href={href} className="hover:text-white">{name}</SiteLink>
                    ) : (
                      <span aria-current="page" className="text-white">{name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#AB052D]/20 px-5 py-2 text-[15px] font-semibold tracking-wide">
              <span className="size-2.5 rounded-full bg-[#E0213F]" aria-hidden="true" />
              {s.code}
            </span>
            <h1 className="mt-6 mb-0 max-w-5xl text-[64px] font-semibold leading-[1.12] tracking-[-0.02em] max-[1199px]:text-[52px] max-[767px]:text-[38px]">
              {s.name}
            </h1>
            <p className="mt-8 mb-0 max-w-4xl text-[20px] leading-[1.75] text-white/80 max-[767px]:text-[17px]">{s.summary}</p>
            <div className="mt-12 flex flex-wrap gap-5 max-[480px]:flex-col">
              <QuoteButton className="inline-flex items-center gap-2.5 rounded-md px-7 py-4 font-semibold transition-colors justify-center bg-[#AB052D] text-white hover:bg-[#9D0026]">
                <Icon name="diagonal" className="size-4.5!" />
              </QuoteButton>
              <a href={`/downloads/service-sheets/${s.download.pdf}`} download className="inline-flex items-center gap-2.5 rounded-md px-7 py-4 font-semibold transition-colors justify-center bg-white/8 text-white hover:bg-white/15">
                <Icon name="download" className="size-5!" />
                {L.sheet_title} (PDF)
              </a>
              <a href={`/downloads/service-sheets/${s.download.docx}`} download className="inline-flex items-center gap-2.5 rounded-md px-7 py-4 font-semibold transition-colors justify-center bg-white/8 text-white hover:bg-white/15">
                <Icon name="doc" className="size-5!" />
                {L.word}
              </a>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdHtml([
              serviceJsonLd({ ...s, path: `/services/${s.slug}` }),
              faqJsonLd(s.faqs),
              breadcrumbJsonLd([
                { name: L.breadcrumb_home, path: "/" },
                { name: L.breadcrumb_services, path: "/services" },
                { name: s.name, path: `/services/${s.slug}` },
              ]),
            ]),
          }}
        />
        {/* Profile row: group and Quick view / Full detail switch */}
        <div className={`${container} flex items-center justify-between gap-4 flex-wrap pt-16 max-[767px]:pt-10`}>
          <div className="flex items-center gap-4">
            <span className="grid size-15 shrink-0 place-items-center rounded-md bg-[#FBE3E8]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/icfc/${SERVICE_GROUP_ICONS[s.group]}.svg`} alt="" width={34} height={34} />
            </span>
            <div>
              <span className="block text-[14px] font-medium uppercase tracking-[1.5px] text-[#616C74]">{L.fact_group}</span>
              <p className="m-0 text-[26px] font-medium leading-tight text-[#161D2E] max-[767px]:text-[20px]">{groupLabel}</p>
            </div>
          </div>
          <ViewToggle />
        </div>

        {/* Overview: what it is, beside a checklist of what ICFC offers for this standard */}
        <section className="pt-16 max-[767px]:pt-10">
          <div className={container}>
            <div className="grid grid-cols-[1.5fr_1fr] max-[991px]:grid-cols-1 items-center gap-12 rounded-2xl bg-[#F0F4FC] px-24 py-24 max-[1199px]:px-12 max-[1199px]:py-14 max-[767px]:p-7">
              <div>
                <span className="inline-block rounded-sm bg-[#DFE7F7] px-3 py-1.5 font-mono text-[15px] uppercase tracking-[2px] text-[#161D2E]">
                  {s.type}
                </span>
                <h2 className="mt-4 mb-0 text-[52px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#161D2E] max-[1199px]:text-[40px] max-[767px]:text-[30px]">
                  {L.how_we_help}
                </h2>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/icfc/${SKETCH_BY_SLUG[s.slug] ?? SKETCH_BY_GROUP[s.group]}.svg`}
                  alt=""
                  className="mt-8 h-auto w-full max-w-xs"
                />
              </div>
              <div className="rounded-xl bg-white p-6 shadow-[0_10px_30px_rgba(22,29,46,0.06)]">
                <div className="mb-3 font-mono text-[14px] uppercase tracking-[1px] text-[#616C74]">{s.code}</div>
                <ul className="m-0 p-0 list-none space-y-3">
                  {needs.map(([key, label]) => (
                    <li key={key} className={`flex items-center gap-3 rounded-md bg-[#F0F4FC] px-4 py-3 text-[15px] font-medium ${offer[key] ? "text-[#161D2E]" : "text-[#9AA1A7] line-through"}`}>
                      <Icon name={offer[key] ? "check" : "close"} className={`size-5! shrink-0 ${offer[key] ? "text-[#AB052D]" : ""}`} />
                      <span>
                        {label}
                        {offer[key] && (
                          <span className="block text-[13px] font-normal text-[#616C74]">{s[key].map((x) => x.heading).join(" · ")}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between gap-3 text-[15px] font-bold uppercase tracking-[1px] text-[#AB052D]">
                  {s.edgeStatus}
                  <Icon name="shield" className="size-6! shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key facts strip */}
        <section className="pt-16 max-[767px]:pt-10">
          <div className={container}>
            <dl className="m-0 grid grid-cols-4 max-[991px]:grid-cols-2 max-[480px]:grid-cols-1 gap-8 rounded-2xl bg-[#F0F4FC] px-9 py-11">
              {facts.map(([k, v, note], i) => (
                <div key={k}>
                  <dt className="text-[15px] font-semibold uppercase tracking-[1.5px] text-[#AB052D]">{k}</dt>
                  <dd className={`m-0 mt-2 text-[24px] font-medium leading-snug max-[767px]:text-[20px] ${i === 3 ? "text-[#AB052D]" : "text-[#161D2E]"}`}>{v}</dd>
                  {note && (
                    <dd className="m-0 mt-2 text-[15px] leading-6 text-[#4A5560]">
                      {i === 2 ? (
                        <SiteLink href={groupHref} className="text-[#4A5560] hover:text-[#AB052D]">{note} →</SiteLink>
                      ) : (
                        note
                      )}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* What it is and who it is for */}
        <section className="mt-16 bg-[#F8F8FD] py-20 max-[767px]:mt-10 max-[767px]:py-12">
          <div className={`${container} grid grid-cols-2 max-[991px]:grid-cols-1 gap-12 max-[767px]:gap-6`}>
            {[
              ["shield", L.what, s.what],
              ["building", L.who, s.who],
            ].map(([icon, title, text]) => {
              const cut = text.indexOf(". ") + 1;
              return (
                <div key={title} className="rounded-xl bg-white p-14 shadow-[0_1px_3px_rgba(22,29,46,0.05)] max-[767px]:p-7">
                  <span className="mb-8 grid size-14 place-items-center rounded-sm bg-[#E3EAF7] text-[#161D2E]">
                    <Icon name={icon} className="size-7!" />
                  </span>
                  <h2 className="mt-0 mb-5 text-[30px] font-semibold text-[#161D2E]">{title}</h2>
                  <p className="m-0 text-[22px] leading-[1.6] text-[#4A5560] max-[767px]:text-[18px]">{cut ? text.slice(0, cut) : text}</p>
                  {cut > 0 && <p className="mt-5 mb-0 text-[18px] leading-[1.75] text-[#4A5560]">{text.slice(cut + 1)}</p>}
                </div>
              );
            })}
          </div>
        </section>

        {/* Extra blocks from the pack (tiers, pillars, levels, scheme funding) */}
        {s.extra.length > 0 && (
          <section className={section}>
            <div className={container}>
              <span className={eyebrow}>{s.code}</span>
              <h2 className={h2}>{L.key_details}</h2>
              <NumberedCards items={s.extra} />
            </div>
          </section>
        )}

        {/* Funding and impartiality */}
        <section className={section}>
          <div className={`${container} grid grid-cols-[1.4fr_1fr] max-[991px]:grid-cols-1 gap-6`}>
            <div className="rounded-3xl border border-[#F5C9D3] bg-[#fdf2f4] p-10 max-[767px]:p-7">
              <span className="inline-block mb-4 rounded-full bg-[#AB052D] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[1.5px] text-white">
                {s.edgeStatus}
              </span>
              {s.funding && (
                <h2 className={`${h2} text-[22px]! max-[767px]:text-[19px]! leading-[1.4]!`}>{s.funding}</h2>
              )}
              <p className={p}>{s.edgeNote}</p>
              <p className="mt-5 mb-0 border-t border-[#F5C9D3] pt-4 text-[14px] text-[#616C74]">
                {L.info_checked.replace("{date}", FUNDING_CHECKED)}{" "}
                <SiteLink href="/blogedg" className="font-medium text-[#AB052D] underline">
                  {L.about_edge} →
                </SiteLink>
              </p>
            </div>
            {s.impartiality.map((x) => (
              <div key={x.heading} className="rounded-3xl border border-[#DBDEE1] bg-white p-10 max-[767px]:p-7">
                <span className="mb-5 grid size-14 place-items-center rounded-2xl bg-[#2B3944] text-white">
                  <Icon name="shield" className="size-7!" />
                </span>
                <h3 className={`${h3} text-[#2B3944]`}>{L.impartiality}</h3>
                <p className={p}>{x.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Audit, Consultation and Training tabs */}
        <section className={`${section} bg-[#2B3944]`}>
          <div className={container}>
            <h2 className={`${h2} text-white! text-center`}>{L.how_we_help}</h2>
            <ContentTabs
              items={tabs.map((t) => ({
                label: t.label,
                content: <NumberedCards items={t.items} dark />,
              }))}
            />
          </div>
        </section>

        {/* FAQs */}
        <section className={section}>
          <div className={`${container} max-w-225!`}>
            <div className="text-center">
              <span className={eyebrow}>FAQ</span>
              <h2 className={h2}>{L.faq_title}</h2>
            </div>
            <AccordionGroup>
              {s.faqs.map((f) => (
                <AccordionItem key={f.q} title={f.q}>
                  {f.a}
                </AccordionItem>
              ))}
            </AccordionGroup>
          </div>
        </section>

        {/* Service sheet and related services */}
        <section className={`${section} pt-0!`}>
          <div className={`${container} grid grid-cols-2 max-[991px]:grid-cols-1 gap-6`}>
            <div className="rounded-3xl border border-[#DBDEE1] bg-[#F8F8F9] p-10 max-[767px]:p-7">
              <span className="mb-5 grid size-14 place-items-center rounded-2xl bg-[#AB052D] text-white">
                <Icon name="download" className="size-7!" />
              </span>
              <h2 className={`${h2} text-[26px]! mb-2!`}>{L.sheet_title}</h2>
              <p className={`${p} mb-6!`}>{L.sheet_text}</p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={`/downloads/service-sheets/${s.download.pdf}`}
                  download
                  className="rounded-full bg-[#AB052D] hover:bg-[#9D0026] px-6 py-3 text-white font-medium"
                >
                  {L.download_pdf}
                </a>
                <a
                  href={`/downloads/service-sheets/${s.download.docx}`}
                  download
                  className="rounded-full border border-[#AB052D] bg-white px-6 py-3 text-[#AB052D] font-medium hover:bg-[#fdf2f4]"
                >
                  {L.word}
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-[#DBDEE1] bg-white p-10 max-[767px]:p-7">
              <h2 className={`${h2} text-[26px]!`}>{L.related}</h2>
              <ul className="m-0 p-0 list-none divide-y divide-[#EEF0F1]">
                {s.related.map((r) => (
                  <li key={r.url}>
                    <SiteLink href={r.url} className="flex items-center justify-between gap-4 py-3.5 font-medium text-[#2B3944] hover:text-[#AB052D]">
                      {r.name}
                      <Icon name="right" className="size-4! shrink-0" />
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className={container}>
          <TransferBanner />
        </div>

        <section className={section} data-detail>
          <div className={container}>
            <h2 className={`${h2} text-[22px]!`}>{L.references}</h2>
            <ul className="m-0 p-0 list-none flex flex-wrap gap-3">
              {s.sources.map((r) => (
                <li key={r.url}>
                  <a href={r.url} target="_blank" rel="noopener" className="inline-block rounded-full border border-[#DBDEE1] px-4 py-2 text-[14px] text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]">
                    {r.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </SitePageTemplate>
  );
}

