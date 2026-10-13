/* eslint-disable @next/next/no-img-element */
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { BlogCard } from "@/components/molecules/blog-card";
import { TransferBanner } from "@/components/icfc/react/SiteBits.jsx";
import {
  QuoteButton,
  ServiceFinder,
} from "@/components/organisms/home-interactive";
import { posts } from "@/components/pages/blog";
import services from "@/lib/services.json";

// Approved copy: ICFC Website Content and Structure Pack, section 6 (Home page).
const STATS = [
  ["12", "Years in Singapore", "Since 2014"],
  ["250+", "Clients served", "Across Asia Pacific"],
  ["500+", "Audits completed", "First, second and third party"],
  ["100+", "Trainees trained", "Classroom and online"],
];

const GROUP_ICON: Record<string, string> = {
  "Cybersecurity, IT and Data Protection": "icon-group-cyber",
  "ISO Management Systems": "icon-group-iso",
  "Singapore Standards and Schemes": "icon-group-ss",
  "Sustainability and Supply Chain": "icon-group-sus",
};

const WAYS = [
  ["Audit", "sketch-audit", "Third-party audits delivered by our auditors on behalf of accredited certification bodies, plus second-party and internal audits."],
  ["Consult", "sketch-consult", "Grant-supported (EDGE) or fixed-scope projects."],
  ["Train", "sketch-train", "Classroom and online through the ICFC Digital LMS."],
];

const WHY = [
  ["Impartial by design", "Consulting and auditing roles are kept apart, and every engagement starts with a conflict-of-interest check."],
  ["Integrated audits", "Our auditors handle integrated management systems, so several standards can be audited together, saving time and cost."],
  ["SS 680 certified consultants", "ICFC's consultancy is led by consultants certified to SS 680:2021, the standard Enterprise Singapore requires for consultancy support under EDGE Standards activities."],
  ["Learning that sticks", "Classroom and online training on the ICFC Digital LMS keeps your team capable after the project ends."],
];

const INDUSTRIES = [
  ["Banking and financial services", "banking"],
  ["Technology, SaaS and cloud", "technology"],
  ["Data centres", "data-centres"],
  ["Healthcare and medical devices", "healthcare"],
  ["Manufacturing", "manufacturing"],
  ["Logistics and cold chain", "logistics"],
  ["Construction and facilities", "construction"],
  ["Education and training", "education"],
  ["Food and beverage", "food"],
  ["Events, hospitality and MICE", "events"],
  ["Apparel and textiles", "apparel"],
  ["Automotive supply chain", "automotive"],
  ["Professional services", "professional"],
  ["Retail and e-commerce", "retail"],
  ["Energy, utilities and infrastructure", "energy"],
  ["Government suppliers and public sector", "public-sector"],
];

const container =
  "w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330";
const section = "pt-25 pb-25 max-[767px]:pt-15 max-[767px]:pb-15";
const eyebrow =
  "mb-4 inline-block rounded-[30px] bg-[rgba(171,5,45,0.08)] px-3.5 py-1 text-[12px] font-medium uppercase tracking-widest text-[#AB052D]";
const h2 =
  "mt-0 mb-5 font-semibold leading-[1.2] text-[#2B3944] text-[45px] max-[767px]:text-[30px] [word-break:break-word]";
const p = "mt-0 mb-0 text-[17px] text-[#616C74] leading-7";

export function IndexPageContent() {
  return (
    <SitePageTemplate route="index">
      <main>
        {/* Hero */}
        <section className="pt-40 pb-25 max-[991px]:pt-32 max-[767px]:pb-15 bg-[#F8F8F9]">
          <div className={`${container} grid grid-cols-[1.1fr_1fr] max-[991px]:grid-cols-1 items-center gap-12`}>
            <div>
              <span className={eyebrow}>Singapore, since 2014</span>
              <h1 className="mt-0 mb-6 font-semibold leading-[1.1] text-[#2B3944] text-[64px] max-[1199px]:text-[48px] max-[575px]:text-[36px]">
                Audit, consulting and training you can trust
              </h1>
              <p className={`${p} text-[19px]! mb-8!`}>
                Since 2014, ICFC has helped organisations in Singapore and across
                Asia Pacific achieve and keep ISO, cybersecurity, IT assurance,
                data protection and Singapore standards. Impartial audits,
                practical consulting, and training in class or online.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#finder" className="rounded-full border border-[#2B3944] px-7 py-3.5 font-medium text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]">
                  Find your standard
                </a>
                <QuoteButton />
              </div>
            </div>
            <img src="/images/icfc/sketch-hero-assurance.svg" alt="" className="w-full h-auto" />
          </div>
        </section>

        {/* Service finder */}
        <section id="finder" className={`${section} scroll-mt-24`}>
          <div className={container}>
            <span className={eyebrow}>Service finder</span>
            <h2 className={h2}>What do you need today?</h2>
            <ServiceFinder />
          </div>
        </section>

        {/* Trust numbers */}
        <section className="bg-[#2B3944] pt-17.5 pb-17.5">
          <div className={container}>
            <h2 className={`${h2} text-white! text-center text-[32px]!`}>Trusted since 2014</h2>
            <dl className="m-0 grid grid-cols-4 max-[991px]:grid-cols-2 gap-6 text-center">
              {STATS.map(([n, label, note]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="m-0 text-[48px] font-bold leading-none text-white">{n}</dd>
                  <dd className="m-0 mt-2 text-[17px] font-medium text-white">{label}</dd>
                  <dd className="m-0 text-[14px] text-white/60">{note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Service groups */}
        <section className={section}>
          <div className={container}>
            <span className={eyebrow}>Services</span>
            <h2 className={h2}>Four ways we help</h2>
            <div className="grid grid-cols-4 max-[1199px]:grid-cols-2 max-[575px]:grid-cols-1 gap-6">
              {Object.keys(GROUP_ICON).map((g) => {
                const list = services.filter((s) => s.group === g);
                return (
                  <div key={g} className="rounded-2xl border border-[#DBDEE1] bg-white p-7">
                    <img src={`/images/icfc/${GROUP_ICON[g]}.svg`} alt="" width={56} height={56} />
                    <h3 className="mt-4 mb-3 text-[20px] font-semibold text-[#2B3944]">{g}</h3>
                    <ul className="m-0 mb-4 p-0 list-none space-y-2">
                      {list.slice(0, 4).map((s) => (
                        <li key={s.slug}>
                          <SiteLink href={`/services/${s.slug}`} className="text-[15px] text-[#616C74] hover:text-[#AB052D]">
                            {s.name}
                          </SiteLink>
                        </li>
                      ))}
                    </ul>
                    <SiteLink href="/services" className="font-medium text-[#AB052D]">
                      View all {list.length} →
                    </SiteLink>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Three ways we work */}
        <section className={`${section} bg-[#F8F8F9]`}>
          <div className={container}>
            <span className={eyebrow}>Three ways we work</span>
            <h2 className={h2}>Audit. Consult. Train.</h2>
            <div className="grid grid-cols-3 max-[991px]:grid-cols-1 gap-6">
              {WAYS.map(([title, img, text]) => (
                <div key={title} className="rounded-2xl bg-white p-7">
                  <img src={`/images/icfc/${img}.svg`} alt="" className="mb-5 h-40 w-auto" loading="lazy" />
                  <h3 className="mt-0 mb-2 text-[24px] font-semibold text-[#2B3944]">{title}</h3>
                  <p className={p}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDGE highlight */}
        <section className={section}>
          <div className={`${container} grid grid-cols-[1fr_1.4fr] max-[991px]:grid-cols-1 items-center gap-12`}>
            <img src="/images/icfc/sketch-edge-grant.svg" alt="" className="w-full h-auto" loading="lazy" />
            <div>
              <span className={eyebrow}>Funding</span>
              <h2 className={h2}>EDGE Grant support for standards</h2>
              <p className={`${p} mb-6!`}>
                From 30 September 2026, business grant support moved to the EDGE
                Grant. Many standards we support are listed, with up to 50%
                support for SMEs and up to 70% for sustainability standards,
                subject to eligibility and Enterprise Singapore&apos;s approval.
                ICFC&apos;s consultancy is led by SS 680:2021 certified
                consultants, as EDGE requires for Standards activities. CSA
                separately funds first Cyber Trust and Cyber Essentials
                certifications until 6 February 2028.
              </p>
              <SiteLink href="/blogedg" className="inline-block rounded-full bg-[#AB052D] px-7 py-3.5 font-medium text-white hover:bg-[#9D0026]">
                Check EDGE eligibility
              </SiteLink>
              <p className="mt-4 mb-0 text-[14px] text-[#616C74]">
                Grant decisions are made by Enterprise Singapore. Information
                checked 11 October 2026.
              </p>
            </div>
          </div>
        </section>

        {/* Why ICFC */}
        <section className={`${section} bg-[#2B3944]`}>
          <div className={container}>
            <span className={`${eyebrow} bg-white/10! text-white!`}>Why ICFC</span>
            <h2 className={`${h2} text-white!`}>Why organisations choose us</h2>
            <div className="grid grid-cols-4 max-[1199px]:grid-cols-2 max-[575px]:grid-cols-1 gap-6">
              {WHY.map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-[#2F3E4B] p-7">
                  <h3 className="mt-0 mb-2 text-[20px] font-semibold text-white">{title}</h3>
                  <p className={`${p} text-white/70!`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className={section}>
          <div className={container}>
            <span className={eyebrow}>Industries</span>
            <h2 className={h2}>Industries we serve</h2>
            <ul className="m-0 p-0 list-none grid grid-cols-4 max-[991px]:grid-cols-2 gap-4">
              {INDUSTRIES.map(([name, key]) => (
                <li key={key}>
                  {/* ponytail: links to the existing industry page until per-industry pages exist */}
                  <SiteLink href="/industry" className="flex h-full items-center gap-3 rounded-xl border border-[#DBDEE1] p-4 text-[#2B3944] hover:border-[#AB052D] hover:text-[#AB052D]">
                    <img src={`/images/icfc/icon-industry-${key}.svg`} alt="" width={40} height={40} loading="lazy" />
                    <span className="text-[15px] font-medium">{name}</span>
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Insights */}
        <section className={`${section} bg-[#F8F8F9]`}>
          <div className={container}>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <span className={eyebrow}>Insights</span>
                <h2 className={`${h2} mb-0!`}>Latest insights</h2>
              </div>
              <SiteLink href="/blog" className="font-medium text-[#AB052D]">All insights →</SiteLink>
            </div>
            <div className="grid grid-cols-3 max-[991px]:grid-cols-1 gap-6">
              {posts.slice(0, 3).map((post) => (
                <BlogCard key={post.href} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Transfer banner */}
        <div className={`${container} pt-20`}>
          <TransferBanner />
        </div>

        {/* Contact strip */}
        <section className={section}>
          <div className={`${container} rounded-[28px] bg-[#AB052D] p-12 max-[575px]:p-7 flex items-center justify-between flex-wrap gap-6`}>
            <div>
              <h2 className={`${h2} text-white! mb-2!`}>Talk to us</h2>
              <p className="m-0 text-[17px] text-white/85">
                <a href="tel:+6586017001" className="text-white">+65 8601 7001</a>
                {" · "}
                <a href="mailto:admin@icfc.com.sg" className="text-white">admin@icfc.com.sg</a>
                {" · "}
                <a href="https://wa.me/6586017001" target="_blank" rel="noopener noreferrer" className="text-white">WhatsApp</a>
              </p>
            </div>
            <QuoteButton light />
          </div>
        </section>
      </main>
    </SitePageTemplate>
  );
}
