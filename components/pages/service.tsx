import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { ContentTabs } from "@/components/molecules/content-tabs";
import {
  AccordionGroup,
  AccordionItem,
} from "@/components/molecules/accordion-item";
import { InfoCardGrid } from "@/components/molecules/info-card-grid";
import { TransferBanner } from "@/components/molecules/transfer-banner";
import { ViewToggle } from "@/components/molecules/view-toggle";
import { getDictionary, type ServiceContent as Service } from "@/lib/dictionary";
import { SERVICE_GROUP_ICONS } from "@/lib/service-data";
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
const section = "pt-20 pb-20 max-[767px]:pt-12.5 max-[767px]:pb-12.5";



export async function ServicePageContent({ service: s }: { service: Service }) {
  const t = await getDictionary();
  const L = t.service;
  const groupLabel = t.groups[s.group as keyof typeof t.groups];
  const facts = [
    [L.fact_code, s.code],
    [L.fact_type, s.type],
    [L.fact_group, groupLabel],
    [L.fact_funding, s.edgeStatus],
  ];
  const tabs = [
    { label: L.tab_audit, items: s.audit },
    { label: L.tab_consultation, items: s.consultation },
    { label: L.tab_training, items: s.training },
  ].filter((t) => t.items.length);

  return (
    <SitePageTemplate route={`services/${s.slug}`}>
      <main>
        <SiteBreadcrumb
          title={s.name}
          description={s.summary}
          background="/assets/images/logo/logo.png"
        />

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
        <div className={`${container} flex items-center justify-between gap-4 flex-wrap pt-6`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/images/icfc/${SERVICE_GROUP_ICONS[s.group]}.svg`} alt="" width={56} height={56} />
          <ViewToggle />
        </div>

        {/* Key facts strip */}
        <section className="bg-[#F8F8F9] border-y border-[#DBDEE1]">
          <div className={container}>
            <dl className="grid grid-cols-4 max-[991px]:grid-cols-2 max-[480px]:grid-cols-1 gap-6 py-8 m-0">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[13px] uppercase tracking-wider text-[#AB052D] font-semibold">
                    {k}
                  </dt>
                  <dd className="m-0 mt-1 text-[17px] text-[#2B3944] font-medium">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* What it is and who it is for */}
        <section className={section}>
          <div className={`${container} grid grid-cols-2 max-[991px]:grid-cols-1 gap-10`}>
            <div>
              <h2 className={h2}>{L.what}</h2>
              <p className={p}>{s.what}</p>
            </div>
            <div>
              <h2 className={h2}>{L.who}</h2>
              <p className={p}>{s.who}</p>
            </div>
          </div>
        </section>

        {/* Audit, Consultation and Training tabs */}
        <section className={`${section} bg-[#2B3944]`}>
          <div className={container}>
            <h2 className={`${h2} text-white! text-center`}>{L.how_we_help}</h2>
            <ContentTabs
              items={tabs.map((t) => ({
                label: t.label,
                content: <InfoCardGrid items={t.items} dark />,
              }))}
            />
          </div>
        </section>

        {s.extra.length > 0 && (
          <section className={section} data-detail>
            <div className={container}>
              <h2 className={h2}>{L.key_details}</h2>
              <InfoCardGrid items={s.extra} />
            </div>
          </section>
        )}

        {/* EDGE eligibility note and impartiality */}
        <section className={`${section} pt-0!`}>
          <div className={`${container} grid grid-cols-2 max-[991px]:grid-cols-1 gap-6`}>
            <div className="rounded-2xl p-8 bg-[#FFF5E6] border border-[#FFE0B5]">
              <span className="inline-block mb-3 rounded-full bg-[#AB052D] px-3 py-1 text-[13px] font-semibold text-white">
                {s.edgeStatus}
              </span>
              <p className={p}>{s.edgeNote}</p>
              <p className="mt-3 mb-0 text-[14px] text-[#616C74]">
                {L.info_checked.replace("{date}", FUNDING_CHECKED)}{" "}
                <SiteLink href="/blogedg" className="text-[#AB052D]">
                  {L.about_edge}
                </SiteLink>
              </p>
            </div>
            {s.impartiality.map((x) => (
              <div key={x.heading} className="rounded-2xl p-8 bg-[#F8F8F9] border border-[#DBDEE1]">
                <h3 className={`${h3} text-[#2B3944]`}>{L.impartiality}</h3>
                <p className={p}>{x.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className={`${section} bg-[#F8F8F9]`}>
          <div className={`${container} max-w-225!`}>
            <h2 className={`${h2} text-center`}>{L.faq_title}</h2>
            <AccordionGroup>
              {s.faqs.map((f) => (
                <AccordionItem key={f.q} title={f.q}>
                  {f.a}
                </AccordionItem>
              ))}
            </AccordionGroup>
          </div>
        </section>

        <div className={`${container} pt-10`}>
          <TransferBanner />
        </div>

        {/* Download, related services and references */}
        <section className={section}>
          <div className={`${container} grid grid-cols-3 max-[991px]:grid-cols-1 gap-10`}>
            <div>
              <h2 className={`${h2} text-[26px]!`}>{L.sheet_title}</h2>
              <p className={`${p} mb-4!`}>{L.sheet_text}</p>
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
                  className="rounded-full border border-[#AB052D] px-6 py-3 text-[#AB052D] font-medium"
                >
                  {L.word}
                </a>
              </div>
            </div>
            <div>
              <h2 className={`${h2} text-[26px]!`}>{L.related}</h2>
              <ul className="m-0 p-0 list-none space-y-2">
                {s.related.map((r) => (
                  <li key={r.url}>
                    <SiteLink href={r.url} className="text-[#2B3944] hover:text-[#AB052D]">
                      {r.name}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
            <div data-detail>
              <h2 className={`${h2} text-[26px]!`}>{L.references}</h2>
              <ul className="m-0 p-0 list-none space-y-2">
                {s.sources.map((r) => (
                  <li key={r.url}>
                    <a href={r.url} target="_blank" rel="noopener" className="text-[#2B3944] hover:text-[#AB052D]">
                      {r.name} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </SitePageTemplate>
  );
}

