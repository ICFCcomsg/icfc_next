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
    <section className="relative z-[1] [overflow-x:clip] [background:#0a2a3b]!">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center! min-h-[70vh]!">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="pt-[110px] max-[767px]:pt-[75px] min-[767px]:max-[991px]:pt-[95px] pb-[330px] max-[767px]:pb-[80px] min-[767px]:max-[991px]:pb-[100px] min-[991px]:max-[1199px]:pb-[110px] min-[1199px]:max-[1600px]:pb-[295px] relative z-[1] [padding-inline-start:200px] max-[1199px]:[padding-inline-start:15px] min-[1199px]:max-[1600px]:[padding-inline-start:100px] max-[1199px]:[padding-inline-end:15px]">
              <span className="mb-[15px] text-[14px] font-medium tracking-[2.4px] uppercase text-[#6bc2e8]! inline-block">
                {
                  "CSA Cyber Trust Mark · Five Preparedness Tiers · Cloud · OT · AI Security · Singapore"
                }
              </span>
              <h1 className="mt-[0px] mb-[0] font-medium leading-[1.12] text-[#FFFFFF] text-[66px] max-[480px]:text-[40px] min-[480px]:max-[575px]:text-[45px] min-[575px]:max-[767px]:text-[50px] min-[767px]:max-[991px]:text-[55px] min-[991px]:max-[1600px]:text-[60px] [word-break:break-word]">
                {
                  "Cyber Trust Mark — advanced cybersecurity, certified at every tier"
                }
              </h1>
              <p className="mt-[0] mb-[40px] text-[17px] font-medium text-[rgba(255,_255,_255,_0.8)] leading-[28px] tracking-[0.02em] max-w-[580px] max-[575px]:max-w-full">
                {
                  "5 preparedness tiers · 22 domains · Cloud Security · OT Security · AI Security. Mandatory for CII operators. ESG/EDG grant up to 50%. ICFC Singapore since 2014."
                }
              </p>
              <div>
                <SiteLink
                  href="/contact-us"
                  className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D] gap-[8px] group/btn group/has-bg-white"
                >
                  {"Book free assessment →"}
                  <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[17px] group-hover/icon-box:[transform:translateX(150%)]"
                    >
                      <path
                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                        fill="white"
                        className="[fill:#2B3944] group-hover/has-bg-white:[fill:#FFFFFF]"
                      ></path>
                    </svg>
                  </span>
                </SiteLink>
                <SiteLink
                  href="#grant"
                  className="text-[#FFFFFF] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D] gap-[8px]"
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
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px]">
      <div className="mt-[40px] mr-[0] mb-[40px] ml-[0] flex flex-wrap gap-[20px] justify-center">
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"5"}
          </div>
          <div>{"Tiers"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"22"}
          </div>
          <div>{"Domains"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"3"}
          </div>
          <div>{"Specialisations"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"25+"}
          </div>
          <div>{"Industries"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"50%"}
          </div>
          <div>{"Grant"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#1a4d7a] leading-[1]">
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
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
      <div className="relative pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! mb-[1rem] text-[#664d03] bg-[#fff3cd] [border:0]! rounded-[1rem]! [background:#fff3e0]!">
        <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[rgba(33,37,41,1)]! text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
          {
            "🏅 Why Singapore organisations must act now — 2026 CTM enforcement is accelerating"
          }
        </h4>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <strong className="[font-weight:bolder]">{"CII operators:"}</strong>
            {
              " CSA has communicated CTM Level 5 as target by end-2027 for all 11 CII sectors under the Cybersecurity Act."
            }
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"Cloud Security:"}
            </strong>
            {
              " IMDA cloud governance requires demonstrable third-party certification for government and regulated-sector workloads."
            }
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"AI Security pillar (SS 712:2025):"}
            </strong>
            {
              " New mandatory control domain — ISO 42001 + CTM AI alignment now a procurement requirement."
            }
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="text-center!">
          <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"CTM services"}
          </span>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Audit · Consultation · Training"}
          </h2>
          <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            {"Five tiers · Cloud · OT · AI Security · ESG/EDG grant managed"}
          </p>
        </div>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[28px] pr-[22px] pb-[28px] pl-[22px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]!">{"🔍"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Audits"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Baseline gap assessment · Cloud Security audit · OT/ICS audit · AI Security audit · Pre-certification readiness audit."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[.5rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore audit →"}
              </SiteLink>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[28px] pr-[22px] pb-[28px] pl-[22px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]!">{"🏗️"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Consulting"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Full certification · Cloud track · OT/ICS track · AI Security + ISO 42001 · Tier upgrade · Integrated CTM+ISO27001."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[.5rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore consulting →"}
              </SiteLink>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[28px] pr-[22px] pb-[28px] pl-[22px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]!">{"🎓"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Training"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Awareness (EN/中文) · Cloud & OT technical workshop · Board governance · AI Security domain training."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[.5rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] [background:#2B3944]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Framework — Five Preparedness Tiers"}
          </h2>
          <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            {"CSA Cyber Trust Mark: five tiers, 10–22 domains."}
          </p>
        </div>
        <div className="flex flex-wrap mt-[.5rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[24px] h-full [border:1px_solid_#eef2f6] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <span className="mb-[12px] pt-[4px] pr-[14px] pb-[4px] pl-[14px] inline-block [background:#1a4d7a] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 1 — Entry"}
              </span>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Essential Cyber Hygiene (10 Domains)"}
              </h5>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Self-Assessment Questionnaire (SAQ) · Foundation level · Builds on Cyber Essentials Mark"
                }
              </p>
              <ul className="pl-[0] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] [columns:2] max-[768px]:[columns:1] gap-x-[20px] list-none">
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"📦 Asset Management"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"🔐 Secure Configuration"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"🔄 Software Security"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"🔑 Access Control"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"🛡️ Malware Protection"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"🌐 Network Security"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"📋 Security Policies"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"👥 Staff Awareness"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"🚨 Incident Response"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"💾 Backup & Recovery"}
                </li>
              </ul>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[24px] h-full [border:1px_solid_#eef2f6] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <span className="mb-[12px] pt-[4px] pr-[14px] pb-[4px] pl-[14px] inline-block [background:#1a4d7a] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 2 — Developing"}
              </span>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Managed Cybersecurity Controls (13 Domains)"}
              </h5>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Third-party assessment · SMEs to mid-size enterprises · Procurement-grade certification"
                }
              </p>
              <ul className="pl-[0] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] [columns:2] max-[768px]:[columns:1] gap-x-[20px] list-none">
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Asset Management (Enhanced)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Identity & Access Management"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Network Security (Enhanced)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Vulnerability Management"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Change Management"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Supplier Risk Management"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Incident Management"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Data Protection"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Business Continuity"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Security Governance"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Compliance Management"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Security Training"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Security Monitoring (Basic)"}
                </li>
              </ul>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[24px] h-full [border:1px_solid_#eef2f6] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <span className="mb-[12px] pt-[4px] pr-[14px] pb-[4px] pl-[14px] inline-block [background:#1a4d7a] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 3 — Established"}
              </span>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Advanced Cybersecurity Risk Management (16 Domains)"}
              </h5>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Independent third-party assessment · Mid to large enterprises · Cloud/OT tracks unlock"
                }
              </p>
              <ul className="pl-[0] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] [columns:2] max-[768px]:[columns:1] gap-x-[20px] list-none">
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Penetration Testing"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Application Security"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Threat Intelligence"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"☁️ Cloud Security (Track A)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"⚙️ OT Security (Track B)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Security Monitoring (Advanced)"}
                </li>
              </ul>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem]! [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[24px] h-full [border:1px_solid_#eef2f6] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <span className="mb-[12px] pt-[4px] pr-[14px] pb-[4px] pl-[14px] inline-block [background:#1a4d7a] text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 4 — Proficient"}
              </span>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Proactive & Resilient Cybersecurity (19 Domains)"}
              </h5>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Rigorous independent assessment · Large enterprises · CII preparatory tier · AI Security track unlocks"
                }
              </p>
              <ul className="pl-[0] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] [columns:2] max-[768px]:[columns:1] gap-x-[20px] list-none">
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Red Team / Purple Team Exercises"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Zero Trust Architecture"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Supply Chain Security (Advanced)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"🤖 AI Security (Track C)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Cyber Crisis Management"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Digital Forensics & IR"}
                </li>
              </ul>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem]! [flex:0_0_auto]">
            <div className="[border:1px_solid_#dee2e6]! [border-color:rgba(13,110,253,1)]! pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[24px] h-full hover:[transform:translateY(-5px)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <span className="mb-[12px] pt-[4px] pr-[14px] pb-[4px] pl-[14px] inline-block [background:#e67e22]! text-[white] rounded-[30px] text-[12px] font-semibold">
                {"Tier 5 — Exemplary"}
              </span>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Excellence in Cybersecurity Governance (22 Domains)"}
              </h5>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Full independent + regulator-informed assessment · CII operators · Maximum sector trust signal"
                }
              </p>
              <ul className="pl-[0] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] [columns:2] max-[768px]:[columns:1] gap-x-[20px] list-none">
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Cloud Security (Full Track)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ OT Security (Full Track/IEC 62443)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ AI Security (Full Track/SS 712:2025)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Board-Level Cyber Governance"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
                  {"+ Cyber Threat Intelligence (Advanced)"}
                </li>
                <li className="mb-[8px] pl-[20px] text-[14px] [break-inside:avoid] relative before:[content:'✓'] before:absolute before:left-[0] before:text-[#1a4d7a]">
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="text-center!">
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Three Specialisation Tracks"}
          </h2>
          <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            {
              "Cloud Security · OT Security · AI Security — unlocked at Tier 3 and above"
            }
          </p>
        </div>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#f0f4f8] rounded-[20px] h-full hover:[transform:translateY(-5px)] hover:[background:#e8f0f8]">
              <div className="mb-[.5rem]! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]!">
                {"☁️"}
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Cloud Security"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Cloud governance framework, CSPM, IAM/PAM, encryption, cloud network security, cloud SIEM, container security. IMDA cloud guidelines & MAS TRM aligned."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[.5rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore Cloud Security →"}
              </SiteLink>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#f0f4f8] rounded-[20px] h-full hover:[transform:translateY(-5px)] hover:[background:#e8f0f8]">
              <div className="mb-[.5rem]! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]!">
                {"⚙️"}
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"OT Security"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "OT asset inventory, Purdue segmentation, OT patch management, OT access control, OT-native SIEM, OT incident response, IEC 62443 alignment. EMA & NEA mapped."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[.5rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore OT Security →"}
              </SiteLink>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#f0f4f8] rounded-[20px] h-full hover:[transform:translateY(-5px)] hover:[background:#e8f0f8]">
              <div className="mb-[.5rem]! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]!">
                {"🤖"}
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"AI Security"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "AI asset inventory, AI risk assessment, model security controls, adversarial ML testing, AI supply chain security, AI monitoring, AI incident response. SS 712:2025 + ISO 42001 integrated."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[.5rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
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
      className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]"
    >
      <div className="pt-[40px] max-[768px]:pt-[28px] pr-[40px] max-[768px]:pr-[28px] pb-[40px] max-[768px]:pb-[28px] pl-[40px] max-[768px]:pl-[28px] [background:linear-gradient(135deg,_#0a2e3b_0%,_#051c26_100%)] rounded-[32px] text-[white]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center!">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
              {
                "50% ESG / EDG grant co-funding — up to 50% of Cyber Trust Mark consultation costs"
              }
            </h3>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying cybersecurity consultancy fees for eligible Singapore SMEs. ICFC manages your grant application before project commencement. Combined CTM + Cyber Essentials + ISO 27001 engagements maximise total co-funding."
              }
            </p>
            <SiteLink
              href="/contact-us"
              className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D]"
            >
              {"Check grant eligibility →"}
            </SiteLink>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] text-center!">
            <Icon
              name="building"
              className="inline-block [font-style:normal] text-[60px]! opacity-[0.5]! text-[white]!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection4() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[0]! pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="relative flex [flex-direction:column] min-w-[0] h-[_] text-[#212529] [word-wrap:break-word] bg-[#fff] [background-clip:border-box] [border:0]! rounded-[1rem]! overflow-hidden! shadow-[0_0.125rem_0.25rem_rgba(0,_0,_0,_0.075)]!">
        <div className="pt-[1.5rem]! pr-[1rem] pb-[0.5rem] pl-[1rem] mb-[0] text-[_] bg-[rgba(255,255,255,1)]! [border-bottom:1px_solid_rgba(0,_0,_0,_0.175)] rounded-[calc(0.375rem_-_(1px))_calc(0.375rem_-_(1px))_0_0] [border:0]!">
          <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
            {"CSA Cyber Trust Mark — tier comparison at a glance"}
          </h4>
        </div>
        <div className="[flex:1_1_auto] pt-[1rem] pr-[1rem] pb-[1rem] pl-[1rem] text-[_]">
          <div className="[overflow-x:auto]">
            <table className="[caption-side:bottom] [border-collapse:collapse] w-full max-[991px]:w-[900px] mb-[1rem] [vertical-align:top] [border-color:#dee2e6] [border:1px_solid_#DBDEE1]">
              <thead className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:bottom]">
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Criteria"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 1"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 2"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 3"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 4"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Tier 5"}
                  </th>
                </tr>
              </thead>
              <tbody className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:inherit]">
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Domains covered"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"10"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"13"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"16"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"19"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"22"}
                  </td>
                </tr>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Assessment method"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"SAQ + assessor"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"3rd-party"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Independent"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Rigorous independent"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Regulator-informed"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Cloud Security track"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"–"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"–"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"OT Security track"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"–"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"–"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"AI Security track"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"–"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"–"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"–"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Target organisations"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"SMEs, ICT vendors"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"SMEs to mid-size"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Large enterprises, FinTech, Telecom"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Large CII, data centres"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"All 11 CII sectors"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Typical ICFC timeline"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"4–8 wks"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"6–10 wks"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"3–5 mo"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"4–7 mo"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:1px_0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] [background:#2B3944]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] mb-[1.5rem]!">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Head of Technology"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Colocation Data Centre · Data Centres & Cloud"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  '"ICFC guided our data centre through Cyber Trust Mark Tier 4, including the Cloud Security and AI Security tracks, in under 5 months. Their team\'s depth across all 22 CTM domains is exceptional. The ESG grant management alone saved us significant admin time. Best Cyber Trust Mark consultant in Singapore."'
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] mb-[1.5rem]!">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Group CISO"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Energy Generation Operator · CII / EMA"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  '"As an energy CII operator, Cyber Trust Mark Tier 5 with OT Security was non-negotiable. ICFC delivered the OT domain alongside our EMA Cybersecurity Code obligations in a single engagement — no duplicated effort, one grant claim, one project team. Outstanding value and expertise."'
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"CTO"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"B2B SaaS Platform · FinTech & Cloud"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
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
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <h3 className="mt-[0px] mb-[1.5rem]! [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] text-center! [word-break:break-word]">
        {"Related services"}
      </h3>
      <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"🔒"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"CSA Cyber Essentials"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Foundation pathway to CTM. HIMS vendors, ICT vendors, HIA entities."
              }
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"🔐"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 27001:2022"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "International ISMS standard. Integrated CTM + ISMS dual certification."
              }
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"🤖"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"AI governance standard. Integrated with CTM AI Security track."}
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"⚙️"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"IEC 62443"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "OT/ICS security standard. Integrated with CTM OT Security track."
              }
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"📋"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"PDPA Compliance"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Singapore data protection. Integrated with CTM data protection domain."
              }
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"🔄"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 22301 BCM"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
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
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
      <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! text-[rgba(255,255,255,1)]! bg-[rgba(33,37,41,1)]! rounded-[1rem]! [background:linear-gradient(135deg,_#1a2a3a,_#0f1a24)]!">
        <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"中文服务 · CSA网络信任标志认证 · ICFC新加坡"}
        </h3>
        <p className="mt-[1rem]! mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          {
            "ICFC为新加坡各类企业提供全面的CSA网络信任标志（Cyber Trust Mark）认证服务，涵盖五级网络安全准备层级、22个领域，专注三大高价值专业轨道：云安全（Cloud Security）、运营技术安全（OT Security）及人工智能安全（AI Security）。我们的服务覆盖三大核心支柱：审核（Audit）、咨询（Consulting）、培训（Training），适用于关键信息基础设施（CII）运营商、云服务商、SaaS/PaaS平台、数据中心、金融科技、电信、制造业、能源、物流、建筑及航运等25大行业。服务符合IMDA、CSA、EMA、NEA监管框架。"
          }
        </p>
        <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          <strong className="[font-weight:bolder]">{"关键词："}</strong>
          {
            "CSA网络信任标志新加坡 · Cyber Trust Mark审核 · 云安全认证 · OT网络安全 · AI安全治理 · 关键信息基础设施网络安全 · ESG补助金网络安全 · 最佳网络安全顾问 · 实惠CTM认证 · 新加坡网络安全2026"
          }
        </p>
        <SiteLink
          href="/contact-us"
          className="text-[#f8f9fa] [text-decoration:none] inline-block pt-[0.375rem] pr-[0.75rem] pb-[0.375rem] pl-[0.75rem] text-[1rem] [font-weight:400] leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:1px_solid_#f8f9fa] rounded-[0.375rem] bg-[transparent] hover:text-[#000] hover:bg-[#f8f9fa] hover:[border-color:#f8f9fa] focus-visible:text-[#000] focus-visible:bg-[#f8f9fa] focus-visible:[border-color:#f8f9fa] focus-visible:shadow-[0_0_0_0.25rem_rgba(248,249,250,_.5)] active:text-[#000] active:bg-[#f8f9fa] active:[border-color:#f8f9fa] active:shadow-[0_0_0_0.25rem_rgba(248,249,250,_.5)] mt-[.5rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent]"
        >
          {"中文咨询 · 免费评估 →"}
        </SiteLink>
      </div>
    </div>
  );
}

function SeoKeywordsSection() {
  return (
    <div className="mt-[50px] mr-[0] mb-[30px] ml-[0] pt-[25px] pr-[20px] pb-[25px] pl-[20px] [background:#f0f4f8] rounded-[20px] text-center">
      <div className="mb-[15px] text-[1rem] font-bold text-[#AB052D] inline-block tracking-[1px]">
        {"🔍 Related searches & keywords"}
      </div>
      <div className="text-[0.9rem] text-[#2c3e50] leading-[1.8] [word-break:break-word]">
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"CSA Cyber Trust Mark Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"Cyber Trust Mark 5 tiers"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"Cyber Trust Mark certification 2026"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"Cyber Trust Mark audit Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"best Cyber Trust Mark consultant SG"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"budget-friendly CTM consultant"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"ESG grant Cyber Trust Mark"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"EDG grant cybersecurity certification"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"cloud security certification Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"OT ICS cybersecurity Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"AI security governance Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"SS 712 2025 AI security"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"CII cybersecurity Cyber Trust Mark"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"IMDA cloud security certification"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"EMA cybersecurity code OT"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"NEA cybersecurity Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"data centre Cyber Trust Mark"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"SaaS PaaS cybersecurity certification SG"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"fintech Cyber Trust Mark MAS"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"telecom cybersecurity certification"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"manufacturing OT cybersecurity Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"marine port CII cybersecurity"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"construction cyber trust Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"ISO 27001 Cyber Trust Mark integrated"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"ISO 42001 AI security CTM"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"ICFC Cyber Trust Mark consultant"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"CSA网络信任标志新加坡"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"网络信任标志认证"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"云安全认证新加坡"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[0.85rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"OT网络安全顾问"}
        </span>
      </div>
    </div>
  );
}

function SectionSpaceSection5() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div>
          <h2 className="mt-[0px] mb-[2rem] font-extrabold leading-[1.19] text-[#0a2e3b] text-[2.2rem] max-[768px]:text-[1.7rem] [word-break:break-word]">
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
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top-left-radius:0.375rem] [border-top-right-radius:0.375rem] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "The CTM is Singapore's advanced, independently verified cybersecurity certification covering five preparedness tiers, up to 22 domains, including Cloud, OT, and AI Security specialisations. Cyber Essentials Mark is the baseline (self-assessed, 5 domains) and a prerequisite. CTM requires third-party independent assessment from Tier 2 upwards — significantly more rigorous."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Which CTM tier should my organisation target?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Yes. Enterprise Singapore's EDG covers up to 50% of qualifying cybersecurity consultancy fees for eligible SMEs. ICFC manages your grant application before project commencement. Combined CTM + Cyber Essentials + ISO 27001 engagements can combine grant claims."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Is CTM mandatory for CII operators?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "EMA Cybersecurity Code for Electricity Licensees and NEA's digital infrastructure requirements mandate OT controls aligned to CTM OT Security domain. ICFC maps CTM OT controls to EMA and NEA obligations simultaneously."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"How long does Cyber Trust Mark certification take?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] [border-bottom-right-radius:0.375rem] [border-bottom-left-radius:0.375rem] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! rounded-[1rem]! [background:#0a2a3b]!">
        <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"Start your Cyber Trust Mark journey today"}
        </h3>
        <p className="mt-[0] mb-[30px] text-[rgba(255,255,255,.5)]! text-[17px] [font-weight:normal] leading-[28px]">
          {
            "Free 30-minute CTM readiness assessment. Tier selection guidance. Cloud, OT & AI Security track scoping. ESG/EDG grant eligibility check included. CII, FinTech, Telecom, Data Centre, Cloud specialists. No obligation."
          }
        </p>
        <div className="mt-[1.5rem]!">
          <SiteLink
            href="/contact-us"
            className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D]"
          >
            {"Book free assessment →"}
          </SiteLink>
          <SiteLink
            href="/contact-us"
            className="text-[rgba(255,255,255,1)]! [text-decoration:none] ml-[1rem]! pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944]"
          >
            {"Check grant eligibility →"}
          </SiteLink>
          <SiteLink
            href="/contact-us"
            className="text-[rgba(255,255,255,1)]! [text-decoration:none] ml-[1rem]! pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944]"
          >
            {"Get free quote →"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
