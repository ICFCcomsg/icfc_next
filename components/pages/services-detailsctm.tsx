import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsctmPageContent() {
  return (
    <SitePageTemplate route="services-detailsctm.html">
      <main>
        <BannerAreaSection />
        <ContainerSection />
        <ContainerSection2 />
        <SectionSpaceSection />
        <SectionSpaceSection2 />
        <SectionSpaceSection3 />
        <ContainerSection3 />
        <ContainerSection4 />
        <SectionSpaceSection4 />
        <ContainerSection5 />
        <SectionSpaceSection5 />
        <ContainerSection6 />
        <SeoKeywordsSection />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section className="relative z-[1] [overflow-x:clip] [background:#0a2a3b]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 min-h-[70vh] items-center">
          <div className="w-full shrink-0 px-3 xl:w-[66.66666666666666%]">
            <div className="relative z-[1] pt-[110px] [padding-inline-start:200px] pb-[330px] max-[1600px]:[padding-inline-start:100px] max-[1600px]:pb-[295px] max-[1199px]:[padding-inline-start:15px] max-[1199px]:[padding-inline-end:15px] max-[1199px]:pb-[110px] max-[991px]:pt-[95px] max-[991px]:pb-[100px] max-[767px]:pt-[75px] max-[767px]:pb-[80px]">
              <span className="text-[14px] font-medium tracking-[2.4px] uppercase text-[#6bc2e8] mb-[15px] inline-block">
                {
                  "CSA Cyber Trust Mark · Five Preparedness Tiers · Cloud · OT · AI Security · Singapore"
                }
              </span>
              <h1 className="font-bold leading-tight text-[#2B3944] text-4xl md:text-6xl text-[#FFFFFF] font-medium leading-[1.12]">
                {
                  "Cyber Trust Mark — advanced cybersecurity, certified at every tier"
                }
              </h1>
              <p className="leading-relaxed text-[rgba(255,_255,_255,_0.8)] font-medium tracking-[0.02em] max-w-[580px] mb-[40px] max-[575px]:max-w-full">
                {
                  "5 preparedness tiers · 22 domains · Cloud Security · OT Security · AI Security. Mandatory for CII operators. ESG/EDG grant up to 50%. ICFC Singapore since 2014."
                }
              </p>
              <div>
                <SiteLink
                  className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF] gap-[8px]"
                  href="/contact-us.html"
                >
                  {"Book free assessment →"}
                  <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                    <svg
                      className="in-hover:[transform:translateX(150%)] w-[17px]"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                        fill="white"
                        className="[fill:#2B3944] in-hover:[fill:#FFFFFF]"
                      ></path>
                    </svg>
                  </span>
                </SiteLink>
                <SiteLink
                  className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#AB052D] hover:text-[#FFFFFF] gap-[8px] [border:1px_solid_rgba(255,_255,_255,_0.15)]"
                  href="#grant"
                >
                  {"Check grant eligibility →"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] max-[991px]:pt-[100px] max-[767px]:pt-[70px] max-[480px]:pt-[60px]">
      <div className="flex flex-wrap gap-[20px] justify-center m-[40px_0]">
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"5"}
          </div>
          <div>{"Tiers"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"22"}
          </div>
          <div>{"Domains"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"3"}
          </div>
          <div>{"Specialisations"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"25+"}
          </div>
          <div>{"Industries"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"50%"}
          </div>
          <div>{"Grant"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"11+"}
          </div>
          <div>{"Years"}</div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection2() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
      <div className="[background:#fff3e0] mb-4 rounded-md border p-4 border-amber-200 bg-amber-50 text-amber-900 border-0 p-6">
        <h4 className="font-bold leading-tight text-[#2B3944] text-2xl text-slate-900">
          {
            "🏅 Why Singapore organisations must act now — 2026 CTM enforcement is accelerating"
          }
        </h4>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <strong>{"CII operators:"}</strong>
            {
              " CSA has communicated CTM Level 5 as target by end-2027 for all 11 CII sectors."
            }
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <strong>{"Cloud Security:"}</strong>
            {
              " IMDA cloud governance requires third-party certification for government workloads."
            }
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <strong>{"AI Security (SS 712:2025):"}</strong>
            {" New mandatory control domain — procurement requirement."}
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <strong>{"OT Security:"}</strong>
            {
              " EMA Cybersecurity Code maps directly to CTM OT domain requirements."
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center">
          <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
            {"CTM services"}
          </span>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"Audit · Consultation · Training"}
          </h2>
          <p className="leading-relaxed mb-4">
            {"Five tiers · Cloud · OT · AI Security · ESG/EDG grant managed"}
          </p>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"🔍"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Audits"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Baseline gap assessment · Cloud Security audit · OT/ICS audit · AI Security audit · Pre-certification readiness audit."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore audit →"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"🏗️"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Consulting"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Full certification · Cloud track · OT/ICS track · AI Security + ISO 42001 · Tier upgrade · Integrated CTM+ISO27001."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore consulting →"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"🎓"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Training"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Awareness (EN/中文) · Cloud & OT technical workshop · Board governance · AI Security domain training."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore training →"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection2() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"Framework — Five Preparedness Tiers"}
          </h2>
          <p className="leading-relaxed mb-4">
            {"CSA Cyber Trust Mark: five tiers, 10–22 domains."}
          </p>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[24px] p-[20px] h-full [border:1px_solid_#eef2f6] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <span className="inline-block [background:#AB052D] text-[white] rounded-[30px] p-[4px_14px] text-[12px] font-semibold mb-[12px]">
                {"Tier 1 — Entry"}
              </span>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"Essential Cyber Hygiene (10 Domains)"}
              </h5>
              <ul className="[columns:2] gap-x-[20px] list-none pl-[0] max-[768px]:[columns:1]">
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Asset Management"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Secure Configuration"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Software Security"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Access Control"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Malware Protection"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Network Security"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Security Policies"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Staff Awareness"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Incident Response"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"Backup & Recovery"}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[24px] p-[20px] h-full [border:1px_solid_#eef2f6] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <span className="inline-block [background:#AB052D] text-[white] rounded-[30px] p-[4px_14px] text-[12px] font-semibold mb-[12px]">
                {"Tier 2 — Developing"}
              </span>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"Managed Controls (13 Domains)"}
              </h5>
              <ul className="[columns:2] gap-x-[20px] list-none pl-[0] max-[768px]:[columns:1]">
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Identity & Access Mgmt"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Vulnerability Management"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Supplier Risk Management"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Business Continuity"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Security Governance"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Compliance Management"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Security Training"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Security Monitoring"}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[24px] p-[20px] h-full [border:1px_solid_#eef2f6] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <span className="inline-block [background:#AB052D] text-[white] rounded-[30px] p-[4px_14px] text-[12px] font-semibold mb-[12px]">
                {"Tier 3 — Established"}
              </span>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"Advanced Cyber Risk Mgmt (16 Domains)"}
              </h5>
              <ul className="[columns:2] gap-x-[20px] list-none pl-[0] max-[768px]:[columns:1]">
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Penetration Testing"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Application Security"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Threat Intelligence"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"☁️ Cloud Security (Track A)"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"⚙️ OT Security (Track B)"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ SIEM Monitoring"}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:white] rounded-[24px] p-[20px] h-full [border:1px_solid_#eef2f6] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <span className="inline-block [background:#AB052D] text-[white] rounded-[30px] p-[4px_14px] text-[12px] font-semibold mb-[12px]">
                {"Tier 4 — Proficient"}
              </span>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"Proactive & Resilient (19 Domains)"}
              </h5>
              <ul className="[columns:2] gap-x-[20px] list-none pl-[0] max-[768px]:[columns:1]">
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Red Team Exercises"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Zero Trust Architecture"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Supply Chain Security"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"🤖 AI Security (Track C)"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Cyber Crisis Management"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Digital Forensics"}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:white] rounded-[24px] p-[20px] h-full [border:1px_solid_#eef2f6] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-200">
              <span className="inline-block [background:#e67e22] text-[white] rounded-[30px] p-[4px_14px] text-[12px] font-semibold mb-[12px]">
                {"Tier 5 — Exemplary"}
              </span>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"Excellence in Cyber Governance (22 Domains)"}
              </h5>
              <ul className="[columns:2] gap-x-[20px] list-none pl-[0] max-[768px]:[columns:1]">
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Cloud Security (Full Track)"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ OT Security (IEC 62443)"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ AI Security (SS 712:2025)"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Board-Level Cyber Governance"}
                </li>
                <li className="mb-[8px] text-[14px] [break-inside:avoid] pl-[20px] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#AB052D]">
                  {"+ Cyber Threat Intelligence"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection3() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center">
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"Three Specialisation Tracks"}
          </h2>
          <p className="leading-relaxed mb-4">
            {
              "Cloud Security · OT Security · AI Security — unlocked at Tier 3 and above"
            }
          </p>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#f0f4f8] rounded-[20px] p-[24px] h-full hover:[transform:translateY(-5px)] hover:[background:#e8f0f8]">
              <div className="text-[40px]">{"☁️"}</div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Cloud Security"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Cloud governance, IAM/PAM, encryption, container security, MAS TRM aligned."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore Cloud Security →"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#f0f4f8] rounded-[20px] p-[24px] h-full hover:[transform:translateY(-5px)] hover:[background:#e8f0f8]">
              <div className="text-[40px]">{"⚙️"}</div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"OT Security"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "OT asset inventory, Purdue segmentation, OT patch mgmt, IEC 62443 alignment, EMA Cybersecurity Code."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore OT Security →"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#f0f4f8] rounded-[20px] p-[24px] h-full hover:[transform:translateY(-5px)] hover:[background:#e8f0f8]">
              <div className="text-[40px]">{"🤖"}</div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"AI Security"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "AI risk assessment, adversarial ML, model security, SS 712:2025 + ISO 42001 integration."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore AI Security →"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection3() {
  return (
    <div
      id="grant"
      className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]"
    >
      <div className="[background:linear-gradient(135deg,_#0a2e3b_0%,_#051c26_100%)] rounded-[32px] p-[40px] text-[white] max-[768px]:p-[28px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 items-center">
          <div className="w-full shrink-0 px-3 lg:w-[66.66666666666666%]">
            <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
              {
                "50% ESG / EDG grant co-funding — up to 50% of CTM consultation costs"
              }
            </h3>
            <p className="leading-relaxed mb-4">
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying cybersecurity consultancy fees for eligible Singapore SMEs. ICFC manages your grant application before project commencement. Combined CTM + Cyber Essentials + ISO 27001 engagements maximise total co-funding."
              }
            </p>
            <SiteLink
              className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
              href="/contact-us.html"
            >
              {"Check grant eligibility →"}
            </SiteLink>
          </div>
          <div className="w-full shrink-0 px-3 lg:w-[33.33333333333333%] text-center">
            <Icon
              name="building"
              className="text-[60px] opacity-[0.5] text-[white]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection4() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="border-0 shadow-sm overflow-hidden">
        <div className="bg-white border-0">
          <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
            {"CSA Cyber Trust Mark — tier comparison at a glance"}
          </h4>
        </div>
        <div>
          <div className="w-full overflow-x-auto">
            <table className="[border:1px_solid_#DBDEE1] max-[991px]:w-[900px] w-full border-collapse text-left [&_th]:border-b [&_th]:border-slate-300 [&_th]:bg-slate-50 [&_th]:p-3 [&_td]:border-b [&_td]:border-slate-200 [&_td]:p-3 [&_td]:border [&_th]:border">
              <thead>
                <tr>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Criteria"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 1"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 2"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 3"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 4"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 5"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Domains covered"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"10"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"13"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"16"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"19"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"22"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Assessment method"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"SAQ + assessor"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"3rd-party"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Independent"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Rigorous independent"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Regulator-informed"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Cloud Security track"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"–"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"–"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"OT Security track"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"–"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"–"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"AI Security track"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"–"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"–"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"–"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Typical ICFC timeline"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"4–8 wks"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"6–10 wks"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"3–5 mo"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"4–7 mo"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"6–12 mo"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection4() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#AB052D]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Head of Technology"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Colocation Data Centre"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  '"ICFC guided our data centre through CTM Tier 4 including Cloud Security and AI Security tracks in under 5 months. Their depth across all 22 domains is exceptional."'
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#AB052D]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Group CISO"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Energy CII Operator"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  '"CTM Tier 5 with OT Security was non-negotiable. ICFC delivered OT domain alongside EMA Cybersecurity Code in a single engagement — outstanding value."'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection5() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
      <div className="[background:linear-gradient(135deg,_#1a2a3a,_#0f1a24)] bg-slate-900 text-white p-12 text-center">
        <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
          {"中文服务 · CSA网络信任标志认证 · ICFC新加坡"}
        </h3>
        <p className="leading-relaxed mb-4">
          {
            "ICFC为新加坡各类企业提供全面的CSA网络信任标志（Cyber Trust Mark）认证服务，涵盖五级网络安全准备层级、22个领域，专注三大高价值专业轨道：云安全（Cloud Security）、运营技术安全（OT Security）及人工智能安全（AI Security）。提供中英双语服务，帮助企业申请ESG补助金及EDG，最高获得50%费用补贴。"
          }
        </p>
        <SiteLink
          href="/contact-us.html"
          className="transition-colors hover:text-[#AB052D]"
        >
          {"中文咨询 · 免费评估 →"}
        </SiteLink>
      </div>
    </div>
  );
}

function SectionSpaceSection5() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="text-[4.2rem] font-extrabold mb-[2rem] text-[#0a2e3b] max-[768px]:text-[3rem]">
            {"FAQs — CSA Cyber Trust Mark"}
          </h2>
        </div>
        <div id="ctmFaq">
          <AccordionItem
            title={
              <>
                {
                  "What is the CSA Cyber Trust Mark and how does it differ from Cyber Essentials?"
                }
              </>
            }
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "The CTM is Singapore's advanced, independently verified cybersecurity certification covering five preparedness tiers, up to 22 domains, including Cloud, OT, and AI Security specialisations. Cyber Essentials Mark is the baseline (self-assessed, 5 domains) and a prerequisite. CTM requires third-party independent assessment from Tier 2 upwards — significantly more rigorous."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Which CTM tier should my organisation target?"}</>}
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "CII operators target Tier 5 by end-2027. Large enterprises with cloud/OT environments should target Tier 3–4. SMEs and ICT vendors seeking procurement differentiation should start at Tier 1–2. ICFC provides free tier scoping consultation including grant optimisation."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {"Can I get ESG/EDG grant for Cyber Trust Mark certification?"}
              </>
            }
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "Yes. Enterprise Singapore's EDG covers up to 50% of qualifying cybersecurity consultancy fees for eligible SMEs. ICFC manages your grant application before project commencement. Combined CTM + Cyber Essentials + ISO 27001 engagements can combine grant claims."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Is CTM mandatory for CII operators?"}</>}
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "CSA has communicated Cyber Trust Mark Level 5 as the target certification standard for all 11 CII sectors (energy, water, banking, finance, transport, healthcare, infocomm, etc.) by end-2027. Non-CII organisations face growing procurement and cyber insurance pressure."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"How does AI Security integrate with CTM?"}</>}
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "The new AI Security pillar (SS 712:2025) becomes mandatory for CTM Tier 4 and above. It includes AI asset inventory, model threat modelling, adversarial robustness testing, and AI incident response. ICFC provides integrated AI security audit aligned with both CTM and ISO 42001 frameworks."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"What is the typical timeline for CTM Tier 5?"}</>}
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "For an average-sized CII organisation, the end-to-end journey from gap assessment to certification is 6–12 months, depending on existing security maturity. ICFC compresses this with parallel workstreams (Cloud, OT, AI) and grant management."
            }
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}

function ContainerSection6() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pb-[120px] max-[991px]:pb-[100px] max-[767px]:pb-[70px] max-[480px]:pb-[60px]">
      <div className="[background:#0a2a3b] text-center p-12">
        <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
          {"Start your Cyber Trust Mark journey today"}
        </h3>
        <p className="leading-relaxed mb-4">
          {
            "Free 30-minute CTM readiness assessment. Tier selection guidance. Cloud, OT & AI Security track scoping. ESG/EDG grant eligibility check included. CII, FinTech, Data Centre specialists."
          }
        </p>
        <div>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
            href="/contact-us.html"
          >
            {"Book free assessment →"}
          </SiteLink>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] text-white ml-4"
            href="/contact-us.html"
          >
            {"Check grant eligibility →"}
          </SiteLink>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] text-white ml-4"
            href="/contact-us.html"
          >
            {"Get free quote →"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}

function SeoKeywordsSection() {
  return (
    <div className="m-[50px_0_30px] p-[25px_20px] [background:#f0f4f8] rounded-[20px] text-center">
      <div className="text-[1.7rem] font-bold text-[#AB052D] inline-block mb-[15px] tracking-[1px]">
        {"🔍 Related searches & keywords"}
      </div>
      <div className="text-[1.7rem] text-[#2c3e50] leading-[1.8] [word-break:break-word]">
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"CSA Cyber Trust Mark Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"Cyber Trust Mark 5 tiers"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"Cyber Trust Mark certification 2026"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"Cyber Trust Mark audit Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"best Cyber Trust Mark consultant SG"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"budget-friendly CTM consultant"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"ESG grant Cyber Trust Mark"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"EDG grant cybersecurity certification"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"cloud security certification Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"OT ICS cybersecurity Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"AI security governance Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"SS 712 2025 AI security"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"CII cybersecurity Cyber Trust Mark"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"IMDA cloud security certification"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"EMA cybersecurity code OT"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"data centre Cyber Trust Mark"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"SaaS PaaS cybersecurity certification SG"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"fintech Cyber Trust Mark MAS"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"manufacturing OT cybersecurity Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"ISO 27001 Cyber Trust Mark integrated"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"ISO 42001 AI security CTM"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"ICFC Cyber Trust Mark consultant"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"CSA网络信任标志新加坡"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"网络信任标志认证"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"云安全认证新加坡"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"OT网络安全顾问"}
        </span>
      </div>
    </div>
  );
}
