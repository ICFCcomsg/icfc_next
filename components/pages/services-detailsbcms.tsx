import { AnimatedElement } from "@/components/atoms/animated-element";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsbcmsPageContent() {
  return (
    <SitePageTemplate route="services-detailsbcms">
      <main>
        <BannerAreaSection />
        <ContainerSection />
        <ContainerSection2 />
        <SectionSpaceSection />
        <SectionSpaceSection2 />
        <SectionSpaceSection3 />
        <SectionSpaceSection4 />
        <ContainerSection3 />
        <SectionSpaceSection5 />
        <SectionSpaceSection6 />
        <SectionSpaceSection7 />
        <ContainerSection4 />
        <ContainerSection5 />
        <ContainerSection6 />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section className="relative z-[1] [overflow-x:clip] [background:#0a2e3b]!">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center! min-h-[70vh]!">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="pt-[110px] max-[767px]:pt-[75px] min-[767px]:max-[991px]:pt-[95px] pb-[330px] max-[767px]:pb-[80px] min-[767px]:max-[991px]:pb-[100px] min-[991px]:max-[1199px]:pb-[110px] min-[1199px]:max-[1600px]:pb-[295px] relative z-[1] [padding-inline-start:200px] max-[1199px]:[padding-inline-start:15px] min-[1199px]:max-[1600px]:[padding-inline-start:100px] max-[1199px]:[padding-inline-end:15px]">
              <AnimatedElement
                as="span"
                effect="up"
                delay={0}
                duration={0.8}
                className="mb-[15px] text-[14px] font-medium tracking-[2.4px] uppercase text-[#6bc2e8]! inline-block"
              >
                {
                  "ISO 22301:2019 · Business Continuity Management System · Singapore"
                }
              </AnimatedElement>
              <AnimatedElement
                as="h1"
                effect="up"
                delay={0}
                duration={0.8}
                className="mt-[0px] mb-[0] font-medium leading-[1.12] text-[#FFFFFF] text-[66px] max-[480px]:text-[40px] min-[480px]:max-[575px]:text-[45px] min-[575px]:max-[767px]:text-[50px] min-[767px]:max-[991px]:text-[55px] min-[991px]:max-[1600px]:text-[60px] [word-break:break-word]"
              >
                {"Business continuity —"}
                <br className="max-[480px]:hidden" />
                {"certified, resilient, and grant-funded"}
              </AnimatedElement>
              <p className="mt-[0] mb-[40px] text-[17px] font-medium text-[rgba(255,_255,_255,_0.8)] leading-[28px] tracking-[0.02em] max-w-[580px] max-[575px]:max-w-full">
                {
                  "ISO 22301 BCMS certification. BIA, gap analysis, implementation & training. EDG/MASA grant up to 50%. MAS TRM aligned. ICFC since 2014."
                }
              </p>
              <div>
                <SiteLink
                  href="/contact-us"
                  className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D] gap-[8px] group/btn group/has-bg-white"
                >
                  {"Book free BCMS assessment →"}
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
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"4–6"}
          </div>
          <div>{"Months typical BCMS timeline"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"50%"}
          </div>
          <div>{"EDG grant co-fund"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"98%"}
          </div>
          <div>{"First-attempt rate"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"25+"}
          </div>
          <div>{"Industries served"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"11+"}
          </div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#1a4d7a] leading-[1]">
            {"MAS"}
          </div>
          <div>{"TRM & BCM aligned"}</div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection2() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
      <div className="relative pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! mb-[1rem] text-[#055160] bg-[#cff4fc] [border:0]! rounded-[1rem]! [background:#e8f4f8]!">
        <strong className="[font-weight:bolder]">
          {"📋 2024 Climate Action Amendment to ISO 22301:2019."}
        </strong>
        {
          " An amendment was adopted in 2024 integrating climate change considerations. ICFC's BCMS implementation includes this amendment as standard — ensuring your BIA and risk assessment address climate-related disruption scenarios."
        }
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
            {"BCMS services"}
          </span>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Audit · Consultation · Training"}
          </h2>
          <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            {"BIA · ISO 22301 · MAS TRM · EDG grant managed"}
          </p>
        </div>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[28px] pr-[22px] pb-[28px] pl-[22px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]!">{"🔍"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"BCMS Audit"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Gap analysis · Stage 1/Stage 2 · Pre-cert mock audit · Surveillance · Internal audit co-sourcing."
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
              <span className="text-[42px]!">{"📋"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"BCMS Consultation"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Full implementation · BIA facilitation · MAS TRM aligned · IMS integration · Crisis management · Post-cert retainer."
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
                {"BCMS Training"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Lead auditor (CQI/IRCA) · Internal auditor · Implementation practitioner · Staff awareness · Tabletop exercises."
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
            {"The BCMS framework — six core components ICFC implements"}
          </h2>
        </div>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"📊 BIA"}
              </h4>
              <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Business Impact Analysis"}
              </h6>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Identify critical processes, quantify disruption impact, set RTO and RPO for every key activity."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"⚠️ RA"}
              </h4>
              <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Risk Assessment"}
              </h6>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Identify threats and vulnerabilities — cyber, climate, supply chain, pandemic."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"🎯 BC Strat"}
              </h4>
              <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Continuity Strategies"}
              </h6>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Design strategies for people, technology, facilities, data, supply chain covering all disruption scenarios."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"📄 BCP"}
              </h4>
              <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Business Continuity Plans"}
              </h6>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Documented, tested response and recovery procedures — crisis comms, escalation paths, recovery actions."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"🏋️ Exercise"}
              </h4>
              <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Testing & Exercises"}
              </h6>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Desktop exercises, simulations, and live drills — validating plans work before incidents occur."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"🔄 PDCA"}
              </h4>
              <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Continual Improvement"}
              </h6>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Internal audit, management review, and ongoing BCMS refinement as threats evolve."
                }
              </p>
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
        <div>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"What is ISO 22301 BCMS? Singapore's resilience standard"}
          </h2>
        </div>
        <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          {
            "ISO 22301:2019 is the internationally recognised standard for Business Continuity Management Systems. It provides a framework for organisations to prepare for, respond to, and recover from disruptive incidents — whether cyberattacks, pandemics, supply chain failures, or natural disasters. In Singapore's position as a global business hub, disruptions carry outsized impact. Several Singapore regulators now require or strongly recommend certified BCMS."
          }
        </p>
        <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          {
            "The 2024 Climate Action Amendment to ISO 22301:2019 integrates climate change considerations into BCMS requirements. ICFC includes this as standard in every implementation."
          }
        </p>
      </div>
    </section>
  );
}

function SectionSpaceSection4() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Singapore's BCMS regulatory landscape"}
          </h2>
        </div>
        <div className="[overflow-x:auto]">
          <table className="[caption-side:bottom] [border-collapse:collapse] w-full max-[991px]:w-[900px] mb-[1rem] [vertical-align:top] [border-color:#dee2e6] [border:1px_solid_#DBDEE1]">
            <thead className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:bottom]">
              <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8]">
                  {"Regulator / Framework"}
                </th>
                <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8]">
                  {"Requirement"}
                </th>
                <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8]">
                  {"Sectors"}
                </th>
                <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8]">
                  {"ISO 22301 alignment"}
                </th>
              </tr>
            </thead>
            <tbody className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:inherit]">
              <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"MAS TRM Guidelines"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Robust BCM capabilities; scenario testing"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Banks, insurers, FinTech"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Direct alignment"}
                </td>
              </tr>
              <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"MAS Notice 655 / BCM Guidelines"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Documented BCP, RTO/RPO, annual testing"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"All MAS-regulated FIs"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Direct alignment"}
                </td>
              </tr>
              <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"CSA Cybersecurity Act"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"CII operators must have BCPs for critical systems"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Energy, water, transport, banking, telco, healthcare, govt"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Strong alignment"}
                </td>
              </tr>
              <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"MOH guidelines"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Business continuity for essential healthcare services"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Hospitals, clinics, pharma"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Strong alignment"}
                </td>
              </tr>
              <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"BCA requirements"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Business continuity for major projects"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Critical infrastructure contractors"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Framework aligned"}
                </td>
              </tr>
              <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Government tender criteria"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"ISO 22301 increasingly required or scored"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"All government suppliers"}
                </td>
                <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Certification required"}
                </td>
              </tr>
            </tbody>
          </table>
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
                "50% EDG / MASA grant co-funding — up to 50% of BCMS consultation costs"
              }
            </h3>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 22301 consultation fees for eligible SMEs. ICFC manages your application before project commencement. Integrated IMS engagements (ISO 22301 + ISO 27001) can stack grant funding across both standards."
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

function SectionSpaceSection5() {
  return (
    <section className="pt-[0]! pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"ICFC's BCMS audit process — from first call to certificate"}
          </h2>
        </div>
        <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] text-center!">
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"01"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"Free briefing"}
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"02"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"Gap analysis"}
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"03"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"Grant application"}
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"04"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"Pre-cert audit"}
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"05"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"CB coordination"}
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"06"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"Certificate"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection6() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] [background:#2B3944]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] mb-[1.5rem]!">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Chief Risk Officer"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Digital bank, Singapore"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "\"ICFC's BIA facilitation identified three single-point dependencies we hadn't recognised — including a critical vendor with no sub-contractor. Certification achieved on first attempt with MAS TRM fully addressed.\""
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] mb-[1.5rem]!">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"IT Director"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Data centre operator"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  '"Achieved ISO 22301 and ISO 27001 dual certification under ICFC\'s integrated IMS approach — saved over S$30,000 compared to separate engagements. EDG grant covered 50% of total cost."'
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"General Manager"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Pharmaceutical manufacturer"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  '"ICFC\'s tabletop exercise programme changed how our executive team thinks about business continuity. They ran a realistic cyber-incident scenario that exposed gaps in our crisis communication escalation path that no document review would have found."'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection7() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div>
          <h2 className="mt-[0px] mb-[2rem] font-extrabold leading-[1.19] text-[#0a2e3b] text-[2.2rem] max-[768px]:text-[1.7rem] [word-break:break-word]">
            {"FAQs — ISO 22301 BCMS"}
          </h2>
        </div>
        <AccordionGroup id="bcmsFaq">
          <AccordionItem
            title={
              <>
                {
                  "How long does ISO 22301 BCMS certification take in Singapore?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top-left-radius:0.375rem] [border-top-right-radius:0.375rem] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "The typical ISO 22301 certification timeline is 4–6 months from gap analysis to certificate. Organisations with existing ISO 9001 or ISO 27001 certification typically achieve faster timelines through integrated IMS approach as management system infrastructure is already in place."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"How much does ISO 22301 consultation cost in Singapore?"}</>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Consultancy fees typically S$5,000–S$20,000 depending on scope. Certification audit fees S$3,000–S$8,000. EDG/MASA grant covers up to 50% of consultancy fees for eligible SMEs — net cost S$2,500–S$10,000. Integrated IMS reduces costs by 20–30%."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "Is ISO 22301 required for MAS-regulated financial institutions?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "MAS does not mandate ISO 22301 by name — but MAS Notice 655, TRM Guidelines, and BCM Guidelines require documented BCM practices aligned with ISO 22301. Certification is widely adopted as most efficient way to demonstrate MAS BCM compliance."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"Can we integrate ISO 22301 with ISO 27001 or ISO 9001?"}</>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Yes — ICFC strongly recommends integrated IMS. All three standards share Annex SL structure. Reuses existing policy infrastructure, risk assessment, internal audit programme — reducing total cost by 20–30% with a single EDG grant application."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"What is the 2024 Climate Action Amendment to ISO 22301?"}</>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] [border-bottom-right-radius:0.375rem] [border-bottom-left-radius:0.375rem] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "In 2024, ISO adopted a Climate Action Amendment integrating climate change considerations into BCMS requirements. This requires organisations to consider climate-related threats (flood, extreme heat) in BIA, risk assessment, and BC strategy design. ICFC includes this amendment as standard in every implementation."
            }
          </AccordionItem>
        </AccordionGroup>
      </div>
    </section>
  );
}

function ContainerSection4() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
      <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! text-[rgba(255,255,255,1)]! bg-[rgba(33,37,41,1)]! rounded-[1rem]! [background:linear-gradient(135deg,_#1a2a3a,_#0f1a24)]!">
        <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {
            "新加坡ISO 22301业务持续性管理体系（BCMS）认证 · ICFC Pte Ltd（2014年创立）"
          }
        </h3>
        <p className="mt-[1rem]! mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          {
            "ICFC专注于新加坡ISO 22301:2019业务持续性管理体系认证，提供业务影响分析（BIA）、全面实施及培训服务，涵盖金融、医疗、物流、制造、建筑、航运等25大行业。与MAS TRM指南、MAS业务持续性管理指南完全一致。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务，欢迎免费咨询。"
          }
        </p>
        <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          <strong className="[font-weight:bolder]">{"关键词："}</strong>
          {
            "业务持续性管理 · ISO 22301新加坡 · BCMS认证 · 业务影响分析 · BIA · MAS TRM合规 · EDG补助金 · 最佳BCMS顾问 · 实惠ISO 22301认证"
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

function ContainerSection5() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <h3 className="mt-[0px] mb-[1.5rem]! [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] text-center! [word-break:break-word]">
        {"Related services"}
      </h3>
      <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
        <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"🔒"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 27001"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"Annex SL integration — shared policy & audit cycle"}
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"✅"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 9001"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"IMS integration · government tender qualification"}
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"🤖"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"AI system disruption governance and continuity"}
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#1a4d7a]!">
              {"🛡️"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"Cyber Trust Mark"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"CII operator mandatory · CSA + BCMS integration"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection6() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! rounded-[1rem]! [background:#0a2e3b]!">
        <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"Start your BCMS certification journey today"}
        </h3>
        <p className="mt-[0] mb-[30px] text-[rgba(255,255,255,.5)]! text-[17px] [font-weight:normal] leading-[28px]">
          {
            "Free 30-minute assessment. Honest gap analysis of your BCP maturity against ISO 22301:2019. EDG grant eligibility check. MAS TRM alignment review. No obligation."
          }
        </p>
        <div className="mt-[1.5rem]!">
          <SiteLink
            href="/contact-us"
            className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D]"
          >
            {"Book free BCMS assessment →"}
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
