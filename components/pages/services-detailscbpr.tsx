import { AnimatedElement } from "@/components/atoms/animated-element";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailscbprPageContent() {
  return (
    <SitePageTemplate route="services-detailscbpr">
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
        <ContainerSection6 />
        <SeoKeywordsSection />
        <SectionSpaceSection5 />
        <ContainerSection7 />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section className="relative z-1 overflow-x-clip [background:#0a2a3b]!">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 items-center! min-h-[70vh]!">
          <div className="shrink-0 w-[66.66666667%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="pt-27.5 max-[767px]:pt-18.75 min-[767px]:max-[991px]:pt-23.75 pb-82.5 max-[767px]:pb-20 min-[767px]:max-[991px]:pb-25 min-[991px]:max-[1199px]:pb-27.5 min-[1199px]:max-[1600px]:pb-73.75 relative z-1 ps-50 max-[1199px]:ps-3.75 min-[1199px]:max-[1600px]:ps-25 max-[1199px]:pe-3.75">
              <AnimatedElement
                as="span"
                effect="up"
                delay={0}
                duration={1}
                className="mb-3.75 text-[14px] font-medium tracking-[2.4px] uppercase text-[#6bc2e8]! inline-block"
              >
                {
                  "CSA Cyber Trust Mark · Five Preparedness Tiers · Cloud · OT · AI Security · Singapore"
                }
              </AnimatedElement>
              <AnimatedElement
                as="h1"
                effect="up"
                delay={0}
                duration={1}
                className="mt-0 mb-0 font-medium leading-[1.12] text-[#FFFFFF] text-[66px] max-[480px]:text-[40px] min-[480px]:max-[575px]:text-[45px] min-[575px]:max-[767px]:text-[50px] min-[767px]:max-[991px]:text-[55px] min-[991px]:max-[1600px]:text-[60px] [word-break:break-word]"
              >
                {
                  "Cyber Trust Mark — advanced cybersecurity, certified at every tier"
                }
              </AnimatedElement>
              <p className="mt-0 mb-10 text-[17px] font-medium text-[rgba(255,255,255,0.8)] leading-7 tracking-[0.02em] max-w-145 max-[575px]:max-w-full">
                {
                  "5 preparedness tiers · 22 domains · Cloud Security · OT Security · AI Security. Mandatory for CII operators. ESG/EDG grant up to 50%. ICFC Singapore since 2014."
                }
              </p>
              <div>
                <SiteLink
                  href="/contact-us"
                  className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] gap-2 group/btn group/has-bg-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                >
                  {"Book free assessment →"}
                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                    >
                      <path
                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                        fill="white"
                        className="fill-[#2B3944] group-hover/has-bg-white:fill-[#FFFFFF]"
                      ></path>
                    </svg>
                  </span>
                </SiteLink>
                <SiteLink
                  href="#grant"
                  className="text-[#FFFFFF] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,255,255,0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] gap-2 [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
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
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25">
      <div className="mt-10 mr-0 mb-10 ml-0 flex flex-wrap gap-5 justify-center">
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#1a4d7a] leading-none">
            {"5"}
          </div>
          <div>{"Tiers"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#1a4d7a] leading-none">
            {"22"}
          </div>
          <div>{"Domains"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#1a4d7a] leading-none">
            {"3"}
          </div>
          <div>{"Specialisations"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#1a4d7a] leading-none">
            {"25+"}
          </div>
          <div>{"Industries"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#1a4d7a] leading-none">
            {"50%"}
          </div>
          <div>{"Grant"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#1a4d7a] leading-none">
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
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
      <div className="relative pt-6! pr-6! pb-6! pl-6! mb-4 text-[#664d03] bg-[#fff3cd] [border:0]! rounded-2xl! [background:#fff3e0]!">
        <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[rgba(33,37,41,1)]! text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
          {
            "🏅 Why Singapore organisations must act now — 2026 CTM enforcement is accelerating"
          }
        </h4>
        <div className="flex flex-wrap mt-4! -mr-6 -ml-6">
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <strong className="[font-weight:bolder]">{"CII operators:"}</strong>
            {
              " CSA has communicated CTM Level 5 as target by inset-e-2027 for all 11 CII sectors under the Cybersecurity Act."
            }
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"Cloud Security:"}
            </strong>
            {
              " IMDA cloud governance requires demonstrable third-party certification for government and regulated-sector workloads."
            }
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-2! flex-[0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"AI Security pillar (SS 712:2025):"}
            </strong>
            {
              " New mandatory control domain — ISO 42001 + CTM AI alignment now a procurement requirement."
            }
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-2! flex-[0_0_auto]">
            <strong className="[font-weight:bolder]">{"OT Security:"}</strong>
            {
              " EMA Cybersecurity Code: energy CII OT security controls now map directly to CTM OT security domain requirements."
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="text-center!">
          <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"CTM services"}
          </span>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Audit · Consultation · Training"}
          </h2>
          <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
            {"Five tiers · Cloud · OT · AI Security · ESG/EDG grant managed"}
          </p>
        </div>
        <div className="flex flex-wrap mt-4! -mr-6 -ml-6">
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-7 pr-5.5 pb-7 pl-5.5 [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:transform-[translateY(-8px)] [transition:0.2s] motion-reduce:transition-none">
              <span className="text-[42px]!">{"🔍"}</span>
              <h4 className="mt-4! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Audits"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Baseline gap assessment · Cloud Security audit · OT/ICS audit · AI Security audit · Pre-certification readiness audit."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-2! pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
              >
                {"Explore audit →"}
              </SiteLink>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-7 pr-5.5 pb-7 pl-5.5 [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:transform-[translateY(-8px)] [transition:0.2s] motion-reduce:transition-none">
              <span className="text-[42px]!">{"🏗️"}</span>
              <h4 className="mt-4! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Consulting"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Full certification · Cloud track · OT/ICS track · AI Security + ISO 42001 · Tier upgrade · Integrated CTM+ISO27001."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-2! pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
              >
                {"Explore consulting →"}
              </SiteLink>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-7 pr-5.5 pb-7 pl-5.5 [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:transform-[translateY(-8px)] [transition:0.2s] motion-reduce:transition-none">
              <span className="text-[42px]!">{"🎓"}</span>
              <h4 className="mt-4! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Training"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Awareness (EN/中文) · Cloud & OT technical workshop · Board governance · AI Security domain training."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-2! pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 [background:#2B3944]">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Framework — Five Preparedness Tiers"}
          </h2>
          <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
            {"CSA Cyber Trust Mark: five tiers, 10–22 domains."}
          </p>
        </div>
        <div className="flex flex-wrap mt-2! -mr-6 -ml-6">
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-3xl h-full [border:1px_solid_#eef2f6] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <span className="mb-3 pt-1 pr-3.5 pb-1 pl-3.5 inline-block [background:#1a4d7a] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 1 — Entry"}
              </span>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Essential Cyber Hygiene (10 Domains)"}
              </h5>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Self-Assessment Questionnaire (SAQ) · Foundation level · Builds on Cyber Essentials Mark"
                }
              </p>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"📦 Asset Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"🔐 Secure Configuration"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"🔄 Software Security"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"🔑 Access Control"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"🛡️ Malware Protection"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"🌐 Network Security"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"📋 Security Policies"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"👥 Staff Awareness"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"🚨 Incident Response"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"💾 Backup & Recovery"}
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-3xl h-full [border:1px_solid_#eef2f6] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <span className="mb-3 pt-1 pr-3.5 pb-1 pl-3.5 inline-block [background:#1a4d7a] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 2 — Developing"}
              </span>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Managed Cybersecurity Controls (13 Domains)"}
              </h5>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Third-party assessment · SMEs to mid-size enterprises · Procurement-grade certification"
                }
              </p>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Asset Management (Enhanced)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Identity & Access Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Network Security (Enhanced)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Vulnerability Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Change Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Supplier Risk Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Incident Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Data Protection"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Business Continuity"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Security Governance"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Compliance Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Security Training"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Security Monitoring (Basic)"}
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-3xl h-full [border:1px_solid_#eef2f6] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <span className="mb-3 pt-1 pr-3.5 pb-1 pl-3.5 inline-block [background:#1a4d7a] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 3 — Established"}
              </span>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Advanced Cybersecurity Risk Management (16 Domains)"}
              </h5>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Independent third-party assessment · Mid to large enterprises · Cloud/OT tracks unlock"
                }
              </p>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Penetration Testing"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Application Security"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Threat Intelligence"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"☁️ Cloud Security (Track A)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"⚙️ OT Security (Track B)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Security Monitoring (Advanced)"}
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-4! flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-3xl h-full [border:1px_solid_#eef2f6] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <span className="mb-3 pt-1 pr-3.5 pb-1 pl-3.5 inline-block [background:#1a4d7a] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 4 — Proficient"}
              </span>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Proactive & Resilient Cybersecurity (19 Domains)"}
              </h5>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Rigorous independent assessment · Large enterprises · CII preparatory tier · AI Security track unlocks"
                }
              </p>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Red Team / Purple Team Exercises"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Zero Trust Architecture"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Supply Chain Security (Advanced)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"🤖 AI Security (Track C)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Cyber Crisis Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Digital Forensics & IR"}
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-4! flex-[0_0_auto]">
            <div className="[border:1px_solid_#dee2e6]! border-[rgba(13,110,253,1)]! pt-5 pr-5 pb-5 pl-5 [background:white] rounded-3xl h-full hover:transform-[translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <span className="mb-3 pt-1 pr-3.5 pb-1 pl-3.5 inline-block [background:#e67e22]! text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 5 — Exemplary"}
              </span>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Excellence in Cybersecurity Governance (22 Domains)"}
              </h5>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Full independent + regulator-informed assessment · CII operators · Maximum sector trust signal"
                }
              </p>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Cloud Security (Full Track)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ OT Security (Full Track/IEC 62443)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ AI Security (Full Track/SS 712:2025)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Board-Level Cyber Governance"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Cyber Threat Intelligence (Advanced)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#1a4d7a]">
                  {"+ Cross-Sector Risk Management"}
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="text-center!">
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Three Specialisation Tracks"}
          </h2>
          <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
            {
              "Cloud Security · OT Security · AI Security — unlocked at Tier 3 and above"
            }
          </p>
        </div>
        <div className="flex flex-wrap mt-4! -mr-6 -ml-6">
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-6 pr-6 pb-6 pl-6 [background:#f0f4f8] rounded-[20px] h-full hover:transform-[translateY(-5px)] hover:[background:#e8f0f8] [transition:0.2s] motion-reduce:transition-none">
              <div className="mb-2! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]!">
                {"☁️"}
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Cloud Security"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Cloud governance framework, CSPM, IAM/PAM, encryption, cloud network security, cloud SIEM, container security. IMDA cloud guidelines & MAS TRM aligned."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-2! pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
              >
                {"Explore Cloud Security →"}
              </SiteLink>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-6 pr-6 pb-6 pl-6 [background:#f0f4f8] rounded-[20px] h-full hover:transform-[translateY(-5px)] hover:[background:#e8f0f8] [transition:0.2s] motion-reduce:transition-none">
              <div className="mb-2! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]!">
                {"⚙️"}
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"OT Security"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "OT asset inventory, Purdue segmentation, OT patch management, OT access control, OT-native SIEM, OT incident response, IEC 62443 alignment. EMA & NEA mapped."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-2! pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
              >
                {"Explore OT Security →"}
              </SiteLink>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-6 pr-6 pb-6 pl-6 [background:#f0f4f8] rounded-[20px] h-full hover:transform-[translateY(-5px)] hover:[background:#e8f0f8] [transition:0.2s] motion-reduce:transition-none">
              <div className="mb-2! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]!">
                {"🤖"}
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"AI Security"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "AI asset inventory, AI risk assessment, model security controls, adversarial ML testing, AI supply chain security, AI monitoring, AI incident response. SS 712:2025 + ISO 42001 integrated."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-2! pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
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
      className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25"
    >
      <div className="pt-10 max-[768px]:pt-7 pr-10 max-[768px]:pr-7 pb-10 max-[768px]:pb-7 pl-10 max-[768px]:pl-7 [background:linear-gradient(135deg,#0a2e3b_0%,#051c26_100%)] rounded-4xl text-[white]">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 items-center!">
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
              {
                "50% ESG / EDG grant co-funding — up to 50% of Cyber Trust Mark consultation costs"
              }
            </h3>
            <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying cybersecurity consultancy fees for eligible Singapore SMEs. ICFC manages your grant application before project commencement. Combined CTM + Cyber Essentials + ISO 27001 engagements maximise total co-funding."
              }
            </p>
            <SiteLink
              href="/contact-us"
              className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
            >
              {"Check grant eligibility →"}
            </SiteLink>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto] text-center!">
            <Icon
              name="building"
              className="inline-block not-italic text-[60px]! opacity-[0.5]! text-[white]!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection4() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-0! pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="relative flex flex-col min-w-0 h-[_] text-[#212529] [word-wrap:break-word] bg-white bg-clip-border [border:0]! rounded-2xl! overflow-hidden! shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]!">
        <div className="pt-6! pr-4 pb-2 pl-4 mb-0 text-[_] bg-[rgba(255,255,255,1)]! [border-bottom:1px_solid_rgba(0,0,0,0.175)] rounded-[calc(0.375rem-(1px))_calc(0.375rem-(1px))_0_0] [border:0]!">
          <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
            {"CSA Cyber Trust Mark — tier comparison at a glance"}
          </h4>
        </div>
        <div className="flex-[1_1_auto] pt-4 pr-4 pb-4 pl-4 text-[_]">
          <div className="overflow-x-auto">
            <table className="caption-bottom border-collapse w-full max-[991px]:w-225 mb-4 align-top border-[#dee2e6] [border:1px_solid_#DBDEE1]">
              <thead className="border-inherit border-solid [border-width:0] align-bottom">
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Criteria"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Tier 1"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Tier 2"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Tier 3"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Tier 4"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Tier 5"}
                  </th>
                </tr>
              </thead>
              <tbody className="border-inherit border-solid [border-width:0] align-[inherit]">
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Domains covered"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"10"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"13"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"16"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"19"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"22"}
                  </td>
                </tr>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Assessment method"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"SAQ + assessor"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"3rd-party"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Independent"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Rigorous independent"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Regulator-informed"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Cloud Security track"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"–"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"–"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"OT Security track"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"–"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"–"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"AI Security track"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"–"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"–"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"–"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Target organisations"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"SMEs, ICT vendors"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"SMEs to mid-size"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Large enterprises, FinTech, Telecom"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Large CII, data centres"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"All 11 CII sectors"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Typical ICFC timeline"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"4–8 wks"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"6–10 wks"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"3–5 mo"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"4–7 mo"}
                </td>
                <td className="border-inherit border-solid [border-width:1px_0] pt-3 pr-3 pb-3 pl-3 [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"6–12 mo"}
                </td>
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 [background:#2B3944]">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto] mb-6!">
            <div className="mt-3.75 mr-0 mb-3.75 ml-0 pt-6 pr-6 pb-6 pl-6 [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-4!">
                <div>
                  <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Head of Technology"}
                  </h5>
                  <p className="mt-0 mb-0 text-[rgba(33,37,41,0.75)]! text-[17px] [font-weight:normal] leading-7">
                    {"Colocation Data Centre · Data Centres & Cloud"}
                  </p>
                </div>
                <div className="ml-auto!">{"★★★★★"}</div>
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  '"ICFC guided our data centre through Cyber Trust Mark Tier 4, including the Cloud Security and AI Security tracks, in under 5 months. Their team\'s depth across all 22 CTM domains is exceptional. The ESG grant management alone saved us significant admin time. Best Cyber Trust Mark consultant in Singapore."'
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto] mb-6!">
            <div className="mt-3.75 mr-0 mb-3.75 ml-0 pt-6 pr-6 pb-6 pl-6 [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-4!">
                <div>
                  <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Group CISO"}
                  </h5>
                  <p className="mt-0 mb-0 text-[rgba(33,37,41,0.75)]! text-[17px] [font-weight:normal] leading-7">
                    {"Energy Generation Operator · CII / EMA"}
                  </p>
                </div>
                <div className="ml-auto!">{"★★★★★"}</div>
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  '"As an energy CII operator, Cyber Trust Mark Tier 5 with OT Security was non-negotiable. ICFC delivered the OT domain alongside our EMA Cybersecurity Code obligations in a single engagement — no duplicated effort, one grant claim, one project team. Outstanding value and expertise."'
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-2! flex-[0_0_auto]">
            <div className="mt-3.75 mr-0 mb-3.75 ml-0 pt-6 pr-6 pb-6 pl-6 [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-4!">
                <div>
                  <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"CTO"}
                  </h5>
                  <p className="mt-0 mb-0 text-[rgba(33,37,41,0.75)]! text-[17px] [font-weight:normal] leading-7">
                    {"B2B SaaS Platform · FinTech & Cloud"}
                  </p>
                </div>
                <div className="ml-auto!">{"★★★★★"}</div>
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "\"We needed CTM Tier 3 with Cloud Security for our SaaS platform's enterprise contracts. ICFC's team mapped our AWS environment to both CTM cloud controls and IMDA guidelines simultaneously. Their bilingual team handled our Chinese-speaking leadership seamlessly. 强烈推荐！专业高效。\""
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
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <h3 className="mt-0 mb-6! font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] text-center! [word-break:break-word]">
        {"Related services"}
      </h3>
      <div className="flex flex-wrap -mt-6 -mr-6 -ml-6">
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"🔒"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"CSA Cyber Essentials"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "Foundation pathway to CTM. HIMS vendors, ICT vendors, HIA entities."
              }
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"🔐"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 27001:2022"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "International ISMS standard. Integrated CTM + ISMS dual certification."
              }
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"🤖"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {"AI governance standard. Integrated with CTM AI Security track."}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"⚙️"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"IEC 62443"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "OT/ICS security standard. Integrated with CTM OT Security track."
              }
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"📋"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"PDPA Compliance"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "Singapore data protection. Integrated with CTM data protection domain."
              }
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"🔄"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 22301 BCM"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "Business Continuity Management. Aligns with CTM resilience domains."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection6() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
      <div className="pt-12! pr-12! pb-12! pl-12! text-center! text-[rgba(255,255,255,1)]! bg-[rgba(33,37,41,1)]! rounded-2xl! [background:linear-gradient(135deg,#1a2a3a,#0f1a24)]!">
        <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"中文服务 · CSA网络信任标志认证 · ICFC新加坡"}
        </h3>
        <p className="mt-4! mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
          {
            "ICFC为新加坡各类企业提供全面的CSA网络信任标志（Cyber Trust Mark）认证服务，涵盖五级网络安全准备层级、22个领域，专注三大高价值专业轨道：云安全（Cloud Security）、运营技术安全（OT Security）及人工智能安全（AI Security）。我们的服务覆盖三大核心支柱：审核（Audit）、咨询（Consulting）、培训（Training），适用于关键信息基础设施（CII）运营商、云服务商、SaaS/PaaS平台、数据中心、金融科技、电信、制造业、能源、物流、建筑及航运等25大行业。服务符合IMDA、CSA、EMA、NEA监管框架。"
          }
        </p>
        <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
          <strong className="[font-weight:bolder]">{"关键词："}</strong>
          {
            "CSA网络信任标志新加坡 · Cyber Trust Mark审核 · 云安全认证 · OT网络安全 · AI安全治理 · 关键信息基础设施网络安全 · ESG补助金网络安全 · 最佳网络安全顾问 · 实惠CTM认证 · 新加坡网络安全2026"
          }
        </p>
        <SiteLink
          href="/contact-us"
          className="text-[#f8f9fa] [text-decoration:none] inline-block pt-1.5 pr-3 pb-1.5 pl-3 text-[1rem] font-normal leading-normal text-center align-middle [user-select:none] [border:1px_solid_#f8f9fa] rounded-md bg-transparent hover:text-black hover:bg-[#f8f9fa] hover:border-[#f8f9fa] focus-visible:text-black focus-visible:bg-[#f8f9fa] focus-visible:border-[#f8f9fa] focus-visible:shadow-[0_0_0_0.25rem_rgba(248,249,250,.5)] active:text-black active:bg-[#f8f9fa] active:border-[#f8f9fa] active:shadow-[0_0_0_0.25rem_rgba(248,249,250,.5)] mt-2! focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
        >
          {"中文咨询 · 免费评估 →"}
        </SiteLink>
      </div>
    </div>
  );
}

function SeoKeywordsSection() {
  return (
    <div className="mt-12.5 mr-0 mb-7.5 ml-0 pt-6.25 pr-5 pb-6.25 pl-5 [background:#f0f4f8] rounded-[20px] text-center">
      <div className="mb-3.75 text-[1rem] font-bold text-[#AB052D] inline-block tracking-[1px]">
        {"🔍 Related searches & keywords"}
      </div>
      <div className="text-[0.9rem] text-[#2c3e50] leading-[1.8] [word-break:break-word]">
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"CSA Cyber Trust Mark Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"Cyber Trust Mark 5 tiers"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"Cyber Trust Mark certification 2026"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"Cyber Trust Mark audit Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"best Cyber Trust Mark consultant SG"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"budget-friendly CTM consultant"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"ESG grant Cyber Trust Mark"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"EDG grant cybersecurity certification"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"cloud security certification Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"OT ICS cybersecurity Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"AI security governance Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"SS 712 2025 AI security"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"CII cybersecurity Cyber Trust Mark"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"IMDA cloud security certification"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"EMA cybersecurity code OT"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"NEA cybersecurity Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"data centre Cyber Trust Mark"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"SaaS PaaS cybersecurity certification SG"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"fintech Cyber Trust Mark MAS"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"telecom cybersecurity certification"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"manufacturing OT cybersecurity Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"marine port CII cybersecurity"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"construction cyber trust Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"ISO 27001 Cyber Trust Mark integrated"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"ISO 42001 AI security CTM"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"ICFC Cyber Trust Mark consultant"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"CSA网络信任标志新加坡"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"网络信任标志认证"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"云安全认证新加坡"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"OT网络安全顾问"}
        </span>
      </div>
    </div>
  );
}

function SectionSpaceSection5() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-8 font-extrabold leading-[1.19] text-[#0a2e3b] text-[2.2rem] max-[768px]:text-[1.7rem] [word-break:break-word]">
            {"FAQs — CSA Cyber Trust Mark"}
          </h2>
        </div>
        <AccordionGroup id="ctmFaq">
          <AccordionItem
            title={
              <>
                {
                  "What is the CSA Cyber Trust Mark and how does it differ from Cyber Essentials?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] rounded-tl-md rounded-tr-md mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "The CTM is Singapore's advanced, independently verified cybersecurity certification covering five preparedness tiers, up to 22 domains, including Cloud, OT, and AI Security specialisations. Cyber Essentials Mark is the baseline (self-assessed, 5 domains) and a prerequisite. CTM requires third-party independent assessment from Tier 2 upwards — significantly more rigorous."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Which CTM tier should my organisation target?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Yes. Enterprise Singapore's EDG covers up to 50% of qualifying cybersecurity consultancy fees for eligible SMEs. ICFC manages your grant application before project commencement. Combined CTM + Cyber Essentials + ISO 27001 engagements can combine grant claims."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Is CTM mandatory for CII operators?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "CSA has communicated Cyber Trust Mark Level 5 as the target certification standard for all 11 CII sectors by end-2027. Non-CII organisations face growing procurement and cyber insurance pressure."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "How does the CTM Cloud Security track relate to IMDA cloud requirements?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "ICFC maps CTM Cloud Security domain controls directly to IMDA's cloud governance guidelines and MAS TRM cloud outsourcing requirements. A single engagement satisfies both certification and regulatory obligations."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "What regulations drive the Cyber Trust Mark OT Security track?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "EMA Cybersecurity Code for Electricity Licensees and NEA's digital infrastructure requirements mandate OT controls aligned to CTM OT Security domain. ICFC maps CTM OT controls to EMA and NEA obligations simultaneously."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"How long does Cyber Trust Mark certification take?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] rounded-br-md rounded-bl-md mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Timeline depends on target tier: Tier 1 (4–8 weeks), Tier 2 (6–10 weeks), Tier 3 (3–5 months), Tier 4 (4–7 months), Tier 5 (6–12 months). ICFC provides clear project timeline at inception."
            }
          </AccordionItem>
        </AccordionGroup>
      </div>
    </section>
  );
}

function ContainerSection7() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="pt-12! pr-12! pb-12! pl-12! text-center! rounded-2xl! [background:#0a2a3b]!">
        <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"Start your Cyber Trust Mark journey today"}
        </h3>
        <p className="mt-0 mb-7.5 text-[rgba(255,255,255,.5)]! text-[17px] [font-weight:normal] leading-7">
          {
            "Free 30-minute CTM readiness assessment. Tier selection guidance. Cloud, OT & AI Security track scoping. ESG/EDG grant eligibility check included. CII, FinTech, Telecom, Data Centre, Cloud specialists. No obligation."
          }
        </p>
        <div className="mt-6!">
          <SiteLink
            href="/contact-us"
            className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
          >
            {"Book free assessment →"}
          </SiteLink>
          <SiteLink
            href="/contact-us"
            className="text-[rgba(255,255,255,1)]! [text-decoration:none] ml-4! pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,255,255,0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
          >
            {"Check grant eligibility →"}
          </SiteLink>
          <SiteLink
            href="/contact-us"
            className="text-[rgba(255,255,255,1)]! [text-decoration:none] ml-4! pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,255,255,0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
          >
            {"Get free quote →"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
