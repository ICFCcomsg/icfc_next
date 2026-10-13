import { AnimatedElement } from "@/components/atoms/animated-element";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsctmPageContent() {
  return (
    <SitePageTemplate route="services-detailsctm">
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
                  "Cyber Trust Mark — advanced cybersecurity, led by SS 680:2021 certified consultants"
                }
              </AnimatedElement>
              <p className="mt-0 mb-10 text-[17px] font-medium text-[rgba(255,255,255,0.8)] leading-7 tracking-[0.02em] max-w-145 max-[575px]:max-w-full">
                {
                  "5 preparedness tiers · 22 domains · Cloud Security · OT Security · AI Security. Mandatory for CII operators. EDGE Grant support up to 50% for SMEs, subject to eligibility and Enterprise Singapore's approval. ICFC Singapore since 2014."
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
          <div className="mb-1.25 text-[38px] font-extrabold text-[#AB052D] leading-none">
            {"5"}
          </div>
          <div>{"Tiers"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#AB052D] leading-none">
            {"22"}
          </div>
          <div>{"Domains"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#AB052D] leading-none">
            {"3"}
          </div>
          <div>{"Specialisations"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#AB052D] leading-none">
            {"250+"}
          </div>
          <div>{"Clients"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#AB052D] leading-none">
            {"EDGE"}
          </div>
          <div>{"Grant guidance (subject to eligibility)"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#AB052D] leading-none">
            {"12"}
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
              " CSA has communicated CTM Level 5 as target by inset-e-2027 for all 11 CII sectors."
            }
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"Cloud Security:"}
            </strong>
            {
              " IMDA cloud governance requires third-party certification for government workloads."
            }
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-2! flex-[0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"AI Security (SS 712:2025):"}
            </strong>
            {" New mandatory control domain — procurement requirement."}
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-2! flex-[0_0_auto]">
            <strong className="[font-weight:bolder]">{"OT Security:"}</strong>
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
            {"Five tiers · Cloud · OT · AI Security · EDGE Grant guidance"}
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
              <span className="mb-3 pt-1 pr-3.5 pb-1 pl-3.5 inline-block [background:#AB052D] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 1 — Entry"}
              </span>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Essential Cyber Hygiene (10 Domains)"}
              </h5>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Asset Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Secure Configuration"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Software Security"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Access Control"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Malware Protection"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Network Security"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Security Policies"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Staff Awareness"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Incident Response"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"Backup & Recovery"}
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-3xl h-full [border:1px_solid_#eef2f6] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <span className="mb-3 pt-1 pr-3.5 pb-1 pl-3.5 inline-block [background:#AB052D] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 2 — Developing"}
              </span>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Managed Controls (13 Domains)"}
              </h5>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Identity & Access Mgmt"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Vulnerability Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Supplier Risk Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Business Continuity"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Security Governance"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Compliance Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Security Training"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Security Monitoring"}
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-3xl h-full [border:1px_solid_#eef2f6] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <span className="mb-3 pt-1 pr-3.5 pb-1 pl-3.5 inline-block [background:#AB052D] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 3 — Established"}
              </span>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Advanced Cyber Risk Mgmt (16 Domains)"}
              </h5>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Penetration Testing"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Application Security"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Threat Intelligence"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"☁️ Cloud Security (Track A)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"⚙️ OT Security (Track B)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ SIEM Monitoring"}
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-4! flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-3xl h-full [border:1px_solid_#eef2f6] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <span className="mb-3 pt-1 pr-3.5 pb-1 pl-3.5 inline-block [background:#AB052D] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 4 — Proficient"}
              </span>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Proactive & Resilient (19 Domains)"}
              </h5>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Red Team Exercises"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Zero Trust Architecture"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Supply Chain Security"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"🤖 AI Security (Track C)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Cyber Crisis Management"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Digital Forensics"}
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
                {"Excellence in Cyber Governance (22 Domains)"}
              </h5>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 columns-2 max-[768px]:columns-1 gap-x-5 list-none">
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Cloud Security (Full Track)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ OT Security (IEC 62443)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ AI Security (SS 712:2025)"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
                  {"+ Board-Level Cyber Governance"}
                </li>
                <li className="mb-2 pl-5 text-[14px] break-inside-avoid relative before:[content:'✓'] before:absolute before:left-0 before:text-[#AB052D]">
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
                  "Cloud governance, IAM/PAM, encryption, container security, MAS TRM aligned."
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
                  "OT asset inventory, Purdue segmentation, OT patch mgmt, IEC 62443 alignment, EMA Cybersecurity Code."
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
                  "AI risk assessment, adversarial ML, model security, SS 712:2025 + ISO 42001 integration."
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
                "EDGE Grant — up to 50% for SMEs on eligible CTM consultancy, subject to eligibility and Enterprise Singapore's approval"
              }
            </h3>
            <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "Enterprise Singapore's EDGE Grant may support up to 50% of qualifying cybersecurity consultancy fees for SMEs, subject to eligibility and Enterprise Singapore's approval. ICFC prepares the proposal, quotation and SS 680 consultant details EDGE asks for; you apply on the Business Grants Portal before starting work. CSA separately funds first Cyber Trust and Cyber Essentials certification for eligible SMEs until 6 February 2028, deducted by the certification body; consultancy is not covered."
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
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Assessment method"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"SAQ + assessor"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"3rd-party"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Independent"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Rigorous independent"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Regulator-informed"}
                  </td>
                </tr>
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Cloud Security track"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"–"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"–"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓"}
                  </td>
                </tr>
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"OT Security track"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"–"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"–"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓"}
                  </td>
                </tr>
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"AI Security track"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"–"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"–"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"–"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓"}
                  </td>
                </tr>
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Typical ICFC timeline"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"4–8 wks"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"6–10 wks"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"3–5 mo"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"4–7 mo"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
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
  return null;
}

function ContainerSection5() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
      <div className="pt-12! pr-12! pb-12! pl-12! text-center! text-[rgba(255,255,255,1)]! bg-[rgba(33,37,41,1)]! rounded-2xl! [background:linear-gradient(135deg,#1a2a3a,#0f1a24)]!">
        <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"中文服务 · CSA网络信任标志认证 · ICFC新加坡"}
        </h3>
        <p className="mt-4! mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
          {
            "ICFC为新加坡各类企业提供全面的CSA网络信任标志（Cyber Trust Mark）认证服务，涵盖五级网络安全准备层级、22个领域，专注三大高价值专业轨道：云安全（Cloud Security）、运营技术安全（OT Security）及人工智能安全（AI Security）。提供中英双语服务，并协助准备EDGE补助金申请所需的建议书和报价（由企业自行在Business Grants Portal申请，最高可获50%支持，须符合资格并经新加坡企业发展局批准）。"
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

function SectionSpaceSection5() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-8 font-extrabold leading-[1.19] text-[#0a2e3b] text-[4.2rem] max-[768px]:text-[3rem] [word-break:break-word]">
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
              "CII operators target Tier 5 by end-2027. Large enterprises with cloud/OT environments should target Tier 3–4. SMEs and ICT vendors seeking procurement differentiation should start at Tier 1–2. ICFC provides free tier scoping consultation including an explanation of which scheme, if any, may apply."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {"Can I get EDGE Grant support for Cyber Trust Mark certification?"}
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Possibly. Enterprise Singapore's EDGE Grant may support up to 50% of qualifying cybersecurity consultancy fees for SMEs, subject to eligibility and Enterprise Singapore's approval. ICFC prepares the proposal, quotation and SS 680 consultant details; you apply on the Business Grants Portal. CSA separately funds first Cyber Trust certification for eligible SMEs until 6 February 2028, deducted by the certification body."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Is CTM mandatory for CII operators?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "CSA has communicated Cyber Trust Mark Level 5 as the target certification standard for all 11 CII sectors (energy, water, banking, finance, transport, healthcare, infocomm, etc.) by end-2027. Non-CII organisations face growing procurement and cyber insurance pressure."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"How does AI Security integrate with CTM?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "The new AI Security pillar (SS 712:2025) becomes mandatory for CTM Tier 4 and above. It includes AI asset inventory, model threat modelling, adversarial robustness testing, and AI incident response. ICFC provides integrated AI security audit aligned with both CTM and ISO 42001 frameworks."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"What is the typical timeline for CTM Tier 5?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] rounded-br-md rounded-bl-md mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "For an average-sized CII organisation, the end-to-end journey from gap assessment to certification is 6–12 months, depending on existing security maturity. ICFC compresses this with parallel workstreams (Cloud, OT, AI) and clear grant documentation."
            }
          </AccordionItem>
        </AccordionGroup>
      </div>
    </section>
  );
}

function ContainerSection6() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="pt-12! pr-12! pb-12! pl-12! text-center! rounded-2xl! [background:#0a2a3b]!">
        <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"Start your Cyber Trust Mark journey today"}
        </h3>
        <p className="mt-0 mb-7.5 text-[rgba(255,255,255,.5)]! text-[17px] [font-weight:normal] leading-7">
          {
            "Free 30-minute CTM readiness assessment. Tier selection guidance. Cloud, OT & AI Security track scoping. EDGE Grant scheme guidance included. CII, FinTech, Data Centre specialists."
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

function SeoKeywordsSection() {
  return (
    <div className="mt-12.5 mr-0 mb-7.5 ml-0 pt-6.25 pr-5 pb-6.25 pl-5 [background:#f0f4f8] rounded-[20px] text-center">
      <div className="mb-3.75 text-[1.7rem] font-bold text-[#AB052D] inline-block tracking-[1px]">
        {"🔍 Related searches & keywords"}
      </div>
      <div className="text-[1.7rem] text-[#2c3e50] leading-[1.8] [word-break:break-word]">
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"CSA Cyber Trust Mark Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"Cyber Trust Mark 5 tiers"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"Cyber Trust Mark certification 2026"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"Cyber Trust Mark audit Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"best Cyber Trust Mark consultant SG"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"budget-friendly CTM consultant"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"EDGE Grant Cyber Trust Mark"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"EDGE Grant cybersecurity certification"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"cloud security certification Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"OT ICS cybersecurity Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"AI security governance Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"SS 712 2025 AI security"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"CII cybersecurity Cyber Trust Mark"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"IMDA cloud security certification"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"EMA cybersecurity code OT"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"data centre Cyber Trust Mark"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"SaaS PaaS cybersecurity certification SG"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"fintech Cyber Trust Mark MAS"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"manufacturing OT cybersecurity Singapore"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"ISO 27001 Cyber Trust Mark integrated"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"ISO 42001 AI security CTM"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"ICFC Cyber Trust Mark consultant"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"CSA网络信任标志新加坡"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"网络信任标志认证"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"云安全认证新加坡"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"OT网络安全顾问"}
        </span>
      </div>
    </div>
  );
}
