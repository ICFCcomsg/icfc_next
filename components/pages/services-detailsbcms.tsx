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
    <section className="relative z-1 overflow-x-clip [background:#0a2e3b]!">
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
                  "ISO 22301:2019 · Business Continuity Management System · Singapore"
                }
              </AnimatedElement>
              <AnimatedElement
                as="h1"
                effect="up"
                delay={0}
                duration={1}
                className="mt-0 mb-0 font-medium leading-[1.12] text-[#FFFFFF] text-[66px] max-[480px]:text-[40px] min-[480px]:max-[575px]:text-[45px] min-[575px]:max-[767px]:text-[50px] min-[767px]:max-[991px]:text-[55px] min-[991px]:max-[1600px]:text-[60px] [word-break:break-word]"
              >
                {"Business continuity —"}
                <br className="max-[480px]:hidden" />
                {"certified, resilient, and grant-funded"}
              </AnimatedElement>
              <p className="mt-0 mb-10 text-[17px] font-medium text-[rgba(255,255,255,0.8)] leading-7 tracking-[0.02em] max-w-145 max-[575px]:max-w-full">
                {
                  "ISO 22301 BCMS certification. BIA, gap analysis, implementation & training. EDG/MASA grant up to 50%. MAS TRM aligned. ICFC since 2014."
                }
              </p>
              <div>
                <SiteLink
                  href="/contact-us"
                  className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] gap-2 group/btn group/has-bg-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                >
                  {"Book free BCMS assessment →"}
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
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-25 shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-1.25 text-[36px] font-extrabold text-[#1a4d7a] leading-none">
            {"4–6"}
          </div>
          <div>{"Months typical BCMS timeline"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-25 shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-1.25 text-[36px] font-extrabold text-[#1a4d7a] leading-none">
            {"50%"}
          </div>
          <div>{"EDG grant co-fund"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-25 shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-1.25 text-[36px] font-extrabold text-[#1a4d7a] leading-none">
            {"98%"}
          </div>
          <div>{"First-attempt rate"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-25 shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-1.25 text-[36px] font-extrabold text-[#1a4d7a] leading-none">
            {"25+"}
          </div>
          <div>{"Industries served"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-25 shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-1.25 text-[36px] font-extrabold text-[#1a4d7a] leading-none">
            {"11+"}
          </div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-25 shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="mb-1.25 text-[36px] font-extrabold text-[#1a4d7a] leading-none">
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
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
      <div className="relative pt-4! pr-4! pb-4! pl-4! mb-4 text-[#055160] bg-[#cff4fc] [border:0]! rounded-2xl! [background:#e8f4f8]!">
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="text-center!">
          <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"BCMS services"}
          </span>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Audit · Consultation · Training"}
          </h2>
          <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
            {"BIA · ISO 22301 · MAS TRM · EDG grant managed"}
          </p>
        </div>
        <div className="flex flex-wrap mt-4! -mr-6 -ml-6">
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-7 pr-5.5 pb-7 pl-5.5 [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:transform-[translateY(-8px)] [transition:0.2s] motion-reduce:transition-none">
              <span className="text-[42px]!">{"🔍"}</span>
              <h4 className="mt-4! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"BCMS Audit"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Gap analysis · Stage 1/Stage 2 · Pre-cert mock audit · Surveillance · Internal audit co-sourcing."
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
              <span className="text-[42px]!">{"📋"}</span>
              <h4 className="mt-4! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"BCMS Consultation"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Full implementation · BIA facilitation · MAS TRM aligned · IMS integration · Crisis management · Post-cert retainer."
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
                {"BCMS Training"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Lead auditor (CQI/IRCA) · Internal auditor · Implementation practitioner · Staff awareness · Tabletop exercises."
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
            {"The BCMS framework — six core components ICFC implements"}
          </h2>
        </div>
        <div className="flex flex-wrap mt-4! -mr-6 -ml-6">
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"📊 BIA"}
              </h4>
              <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Business Impact Analysis"}
              </h6>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Identify critical processes, quantify disruption impact, set RTO and RPO for every key activity."
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"⚠️ RA"}
              </h4>
              <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Risk Assessment"}
              </h6>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Identify threats and vulnerabilities — cyber, climate, supply chain, pandemic."
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"🎯 BC Strat"}
              </h4>
              <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Continuity Strategies"}
              </h6>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Design strategies for people, technology, facilities, data, supply chain covering all disruption scenarios."
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"📄 BCP"}
              </h4>
              <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Business Continuity Plans"}
              </h6>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Documented, tested response and recovery procedures — crisis comms, escalation paths, recovery actions."
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"🏋️ Exercise"}
              </h4>
              <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Testing & Exercises"}
              </h6>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Desktop exercises, simulations, and live drills — validating plans work before incidents occur."
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5 pr-5 pb-5 pl-5 [background:white] rounded-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"🔄 PDCA"}
              </h4>
              <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word]">
                {"Continual Improvement"}
              </h6>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"What is ISO 22301 BCMS? Singapore's resilience standard"}
          </h2>
        </div>
        <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
          {
            "ISO 22301:2019 is the internationally recognised standard for Business Continuity Management Systems. It provides a framework for organisations to prepare for, respond to, and recover from disruptive incidents — whether cyberattacks, pandemics, supply chain failures, or natural disasters. In Singapore's position as a global business hub, disruptions carry outsized impact. Several Singapore regulators now require or strongly recommend certified BCMS."
          }
        </p>
        <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Singapore's BCMS regulatory landscape"}
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="caption-bottom border-collapse w-full max-[991px]:w-225 mb-4 align-top border-[#dee2e6] [border:1px_solid_#DBDEE1]">
            <thead className="border-inherit border-solid [border-width:0] align-bottom">
              <tr className="border-inherit border-solid [border-width:1px_0]">
                <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top [background:#f0f4f8]">
                  {"Regulator / Framework"}
                </th>
                <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top [background:#f0f4f8]">
                  {"Requirement"}
                </th>
                <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top [background:#f0f4f8]">
                  {"Sectors"}
                </th>
                <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top [background:#f0f4f8]">
                  {"ISO 22301 alignment"}
                </th>
              </tr>
            </thead>
            <tbody className="border-inherit border-solid [border-width:0] align-[inherit]">
              <tr className="border-inherit border-solid [border-width:1px_0]">
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"MAS TRM Guidelines"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Robust BCM capabilities; scenario testing"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Banks, insurers, FinTech"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓ Direct alignment"}
                </td>
              </tr>
              <tr className="border-inherit border-solid [border-width:1px_0]">
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"MAS Notice 655 / BCM Guidelines"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Documented BCP, RTO/RPO, annual testing"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"All MAS-regulated FIs"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓ Direct alignment"}
                </td>
              </tr>
              <tr className="border-inherit border-solid [border-width:1px_0]">
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"CSA Cybersecurity Act"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"CII operators must have BCPs for critical systems"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Energy, water, transport, banking, telco, healthcare, govt"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓ Strong alignment"}
                </td>
              </tr>
              <tr className="border-inherit border-solid [border-width:1px_0]">
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"MOH guidelines"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Business continuity for essential healthcare services"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Hospitals, clinics, pharma"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓ Strong alignment"}
                </td>
              </tr>
              <tr className="border-inherit border-solid [border-width:1px_0]">
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"BCA requirements"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Business continuity for major projects"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Critical infrastructure contractors"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"✓ Framework aligned"}
                </td>
              </tr>
              <tr className="border-inherit border-solid [border-width:1px_0]">
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"Government tender criteria"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"ISO 22301 increasingly required or scored"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                  {"All government suppliers"}
                </td>
                <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
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
      className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25"
    >
      <div className="pt-10 max-[768px]:pt-7 pr-10 max-[768px]:pr-7 pb-10 max-[768px]:pb-7 pl-10 max-[768px]:pl-7 [background:linear-gradient(135deg,#0a2e3b_0%,#051c26_100%)] rounded-4xl text-[white]">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 items-center!">
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
              {
                "50% EDG / MASA grant co-funding — up to 50% of BCMS consultation costs"
              }
            </h3>
            <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 22301 consultation fees for eligible SMEs. ICFC manages your application before project commencement. Integrated IMS engagements (ISO 22301 + ISO 27001) can stack grant funding across both standards."
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

function SectionSpaceSection5() {
  return (
    <section className="pt-0! pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"ICFC's BCMS audit process — from first call to certificate"}
          </h2>
        </div>
        <div className="flex flex-wrap -mt-6 -mr-6 -ml-6 text-center!">
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"01"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {"Free briefing"}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"02"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {"Gap analysis"}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"03"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {"Grant application"}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"04"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {"Pre-cert audit"}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"05"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {"CB coordination"}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"06"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 [background:#2B3944]">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto] mb-6!">
            <div className="mt-3.75 mr-0 mb-3.75 ml-0 pt-6 pr-6 pb-6 pl-6 [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-4!">
                <div>
                  <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Chief Risk Officer"}
                  </h5>
                  <p className="mt-0 mb-0 text-[rgba(33,37,41,0.75)]! text-[17px] [font-weight:normal] leading-7">
                    {"Digital bank, Singapore"}
                  </p>
                </div>
                <div className="ml-auto!">{"★★★★★"}</div>
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "\"ICFC's BIA facilitation identified three single-point dependencies we hadn't recognised — including a critical vendor with no sub-contractor. Certification achieved on first attempt with MAS TRM fully addressed.\""
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto] mb-6!">
            <div className="mt-3.75 mr-0 mb-3.75 ml-0 pt-6 pr-6 pb-6 pl-6 [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-4!">
                <div>
                  <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"IT Director"}
                  </h5>
                  <p className="mt-0 mb-0 text-[rgba(33,37,41,0.75)]! text-[17px] [font-weight:normal] leading-7">
                    {"Data centre operator"}
                  </p>
                </div>
                <div className="ml-auto!">{"★★★★★"}</div>
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  '"Achieved ISO 22301 and ISO 27001 dual certification under ICFC\'s integrated IMS approach — saved over S$30,000 compared to separate engagements. EDG grant covered 50% of total cost."'
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-2! flex-[0_0_auto]">
            <div className="mt-3.75 mr-0 mb-3.75 ml-0 pt-6 pr-6 pb-6 pl-6 [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#1a4d7a]">
              <div className="flex! gap-4!">
                <div>
                  <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"General Manager"}
                  </h5>
                  <p className="mt-0 mb-0 text-[rgba(33,37,41,0.75)]! text-[17px] [font-weight:normal] leading-7">
                    {"Pharmaceutical manufacturer"}
                  </p>
                </div>
                <div className="ml-auto!">{"★★★★★"}</div>
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-8 font-extrabold leading-[1.19] text-[#0a2e3b] text-[2.2rem] max-[768px]:text-[1.7rem] [word-break:break-word]">
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
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] rounded-tl-md rounded-tr-md mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] rounded-br-md rounded-bl-md mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
      <div className="pt-12! pr-12! pb-12! pl-12! text-center! text-[rgba(255,255,255,1)]! bg-[rgba(33,37,41,1)]! rounded-2xl! [background:linear-gradient(135deg,#1a2a3a,#0f1a24)]!">
        <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {
            "新加坡ISO 22301业务持续性管理体系（BCMS）认证 · ICFC Pte Ltd（2014年创立）"
          }
        </h3>
        <p className="mt-4! mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
          {
            "ICFC专注于新加坡ISO 22301:2019业务持续性管理体系认证，提供业务影响分析（BIA）、全面实施及培训服务，涵盖金融、医疗、物流、制造、建筑、航运等25大行业。与MAS TRM指南、MAS业务持续性管理指南完全一致。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务，欢迎免费咨询。"
          }
        </p>
        <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
          <strong className="[font-weight:bolder]">{"关键词："}</strong>
          {
            "业务持续性管理 · ISO 22301新加坡 · BCMS认证 · 业务影响分析 · BIA · MAS TRM合规 · EDG补助金 · 最佳BCMS顾问 · 实惠ISO 22301认证"
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

function ContainerSection5() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <h3 className="mt-0 mb-6! font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] text-center! [word-break:break-word]">
        {"Related services"}
      </h3>
      <div className="flex flex-wrap -mt-6 -mr-6 -ml-6">
        <div className="shrink-0 w-[25%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"🔒"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 27001"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {"Annex SL integration — shared policy & audit cycle"}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[25%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"✅"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 9001"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {"IMS integration · government tender qualification"}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[25%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"🤖"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {"AI system disruption governance and continuity"}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[25%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#1a4d7a]!">
              {"🛡️"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"Cyber Trust Mark"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="pt-12! pr-12! pb-12! pl-12! text-center! rounded-2xl! [background:#0a2e3b]!">
        <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"Start your BCMS certification journey today"}
        </h3>
        <p className="mt-0 mb-7.5 text-[rgba(255,255,255,.5)]! text-[17px] [font-weight:normal] leading-7">
          {
            "Free 30-minute assessment. Honest gap analysis of your BCP maturity against ISO 22301:2019. EDG grant eligibility check. MAS TRM alignment review. No obligation."
          }
        </p>
        <div className="mt-6!">
          <SiteLink
            href="/contact-us"
            className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
          >
            {"Book free BCMS assessment →"}
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
