import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailseolPageContent() {
  return (
    <SitePageTemplate route="services-detailseol">
      <main>
        <BannerAreaSection />
        <ContainerSection />
        <SectionSpaceSection />
        <SectionSpaceSection2 />
        <SectionSpaceSection3 />
        <SectionSpaceSection4 />
        <ContainerSection2 />
        <SectionSpaceSection5 />
        <SectionSpaceSection6 />
        <ContainerSection3 />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section className="relative z-[1] [overflow-x:clip] [background:#0a1924]!">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center! min-h-[70vh]!">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="pt-[110px] max-[767px]:pt-[75px] min-[767px]:max-[991px]:pt-[95px] pb-[330px] max-[767px]:pb-[80px] min-[767px]:max-[991px]:pb-[100px] min-[991px]:max-[1199px]:pb-[110px] min-[1199px]:max-[1600px]:pb-[295px] relative z-[1] [padding-inline-start:200px] max-[1199px]:[padding-inline-start:15px] min-[1199px]:max-[1600px]:[padding-inline-start:100px] max-[1199px]:[padding-inline-end:15px]">
              <span className="mb-[15px] text-[14px] font-medium tracking-[2.4px] uppercase text-[#AB052D]! inline-block">
                {"Singapore Standard SS 587 : 2022"}
              </span>
              <h1 className="mt-[0px] mb-[0] font-medium leading-[1.12] text-[#FFFFFF] text-[66px] max-[480px]:text-[40px] min-[480px]:max-[575px]:text-[45px] min-[575px]:max-[767px]:text-[50px] min-[767px]:max-[991px]:text-[55px] min-[991px]:max-[1600px]:text-[60px] [word-break:break-word]">
                {"End-of-Life ICT Management "}
                <br className="max-[480px]:hidden" />
                {"Audits, Consulting & Training"}
              </h1>
              <p className="mt-[0] mb-[40px] text-[17px] font-medium text-[rgba(255,_255,_255,_0.8)] leading-[28px] tracking-[0.02em] max-w-[580px] max-[575px]:max-w-full">
                {
                  "Responsible disposal, data security & ESG compliance for 25+ Singapore industries — Fintech, Data Centres, CII, Telco, Pharma, Marine, Logistics."
                }
              </p>
              <div>
                <SiteLink
                  href="/contact-us"
                  className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D] gap-[8px] group/has-bg-white"
                >
                  {"Free SS 587 Gap Assessment ↗"}
                  <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="[vertical-align:middle] w-[17px]"
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
                  {"ESG grant eligibility ↗"}
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
      <div className="mt-[40px] mr-[0] mb-[40px] ml-[0] flex flex-wrap gap-[30px] justify-center">
        <div className="pt-[25px] pr-[20px] pb-[25px] pl-[20px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="mb-[8px] text-[48px] font-extrabold text-[#AB052D] leading-[1]">
            {"6"}
          </div>
          <div>{"Core process phases"}</div>
        </div>
        <div className="pt-[25px] pr-[20px] pb-[25px] pl-[20px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="mb-[8px] text-[48px] font-extrabold text-[#AB052D] leading-[1]">
            {"25+"}
          </div>
          <div>{"Industries served"}</div>
        </div>
        <div className="pt-[25px] pr-[20px] pb-[25px] pl-[20px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="mb-[8px] text-[48px] font-extrabold text-[#AB052D] leading-[1]">
            {"98%"}
          </div>
          <div>{"First-attempt cert"}</div>
        </div>
        <div className="pt-[25px] pr-[20px] pb-[25px] pl-[20px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="mb-[8px] text-[48px] font-extrabold text-[#AB052D] leading-[1]">
            {"11+"}
          </div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="pt-[25px] pr-[20px] pb-[25px] pl-[20px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="mb-[8px] text-[48px] font-extrabold text-[#AB052D] leading-[1]">
            {"500+"}
          </div>
          <div>{"Organisations guided"}</div>
        </div>
        <div className="pt-[25px] pr-[20px] pb-[25px] pl-[20px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="mb-[8px] text-[48px] font-extrabold text-[#AB052D] leading-[1]">
            {"70%"}
          </div>
          <div>{"Avg ESG grant"}</div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div>
              <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                {"Singapore standard"}
              </span>
              <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
                {"What is SS 587"}
              </h2>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Singapore's national standard for end-of-life ICT equipment — secure, traceable, environmentally responsible retirement of computers, servers, storage, networking devices."
                }
              </p>
            </div>
            <div className="flex flex-wrap mt-[.5rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
              <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold! text-[rgba(220,53,69,1)]!">
                    {"01"}
                  </div>
                  <h5 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"ICT asset inventory"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Catalogue assets with serial numbers, data classification, retirement trigger."
                    }
                  </p>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold! text-[rgba(220,53,69,1)]!">
                    {"02"}
                  </div>
                  <h5 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Data sanitisation"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "NIST 800-88, DoD 5220.22-M, PDPA obligations certified wiping/destruction."
                    }
                  </p>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold! text-[rgba(220,53,69,1)]!">
                    {"03"}
                  </div>
                  <h5 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Chain-of-custody"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "End-to-end documentation collection → transport → processing."
                    }
                  </p>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold! text-[rgba(220,53,69,1)]!">
                    {"04"}
                  </div>
                  <h5 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"ITAD vendor vetting"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Due diligence & audit downstream recyclers under SS 587 criteria."
                    }
                  </p>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold! text-[rgba(220,53,69,1)]!">
                    {"05"}
                  </div>
                  <h5 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Environmental compliance"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "NEA Resource Sustainability Act, Basel Convention, Green Plan 2030."
                    }
                  </p>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold! text-[rgba(220,53,69,1)]!">
                    {"06"}
                  </div>
                  <h5 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Reporting & certification"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Management review, audit prep, third-party certification body engagement."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection2() {
  return (
    <section className="pt-[0]! pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] [background:#2B3944]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="text-center!">
          <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"End-to-end support"}
          </span>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Our three service pillars — Audit, Consulting, Training"}
          </h2>
        </div>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
              <span className="text-[42px]!">{"🔍"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"SS 587 Audit services"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Gap assessments, pre-certification review, ITAD vendor audits, internal audits, surveillance readiness, data destruction audit."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[1rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore audit ↗"}
              </SiteLink>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
              <span className="text-[42px]!">{"📝"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"SS 587 Consulting"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Policy & procedure design, ITAD procurement frameworks, data sanitisation standards, NEA RSA alignment, PDPA integration, ESG grant advisory."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[1rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore consulting ↗"}
              </SiteLink>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[32px] pr-[24px] pb-[32px] pl-[24px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
              <span className="text-[42px]!">{"🏫"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"SS 587 Training"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Foundation awareness, lead implementer, internal auditor, data sanitisation officer, ITAD manager programme, WSQ-aligned modules."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[1rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore training ↗"}
              </SiteLink>
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
          <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"Regulatory alignment"}
          </span>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"SS 587 within Singapore legal framework"}
          </h2>
        </div>
        <div className="mt-[30px] mr-[0] mb-[30px] ml-[0] grid [grid-template-columns:repeat(auto-fill,_minmax(240px,1fr))] gap-[16px]">
          <div className="pt-[14px] pr-[18px] pb-[14px] pl-[18px] [background:#fff] [border-left:4px_solid_#AB052D] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong className="[font-weight:bolder]">
              {"NEA — Resource Sustainability Act"}
            </strong>
            <br />
            {"E-waste producer responsibility obligations."}
          </div>
          <div className="pt-[14px] pr-[18px] pb-[14px] pl-[18px] [background:#fff] [border-left:4px_solid_#AB052D] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong className="[font-weight:bolder]">
              {"IMDA — ICT governance"}
            </strong>
            <br />
            {"Government-linked ICT asset retirement."}
          </div>
          <div className="pt-[14px] pr-[18px] pb-[14px] pl-[18px] [background:#fff] [border-left:4px_solid_#AB052D] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong className="[font-weight:bolder]">
              {"CSA — Cybersecurity Act"}
            </strong>
            <br />
            {"CII secure decommissioning."}
          </div>
          <div className="pt-[14px] pr-[18px] pb-[14px] pl-[18px] [background:#fff] [border-left:4px_solid_#AB052D] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong className="[font-weight:bolder]">
              {"PDPA — Data Protection"}
            </strong>
            <br />
            {"Certified data destruction."}
          </div>
          <div className="pt-[14px] pr-[18px] pb-[14px] pl-[18px] [background:#fff] [border-left:4px_solid_#AB052D] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong className="[font-weight:bolder]">
              {"EMA — Energy Market Authority"}
            </strong>
            <br />
            {"Grid/SCADA ICT decommission."}
          </div>
          <div className="pt-[14px] pr-[18px] pb-[14px] pl-[18px] [background:#fff] [border-left:4px_solid_#AB052D] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong className="[font-weight:bolder]">{"MOM — WSH Act"}</strong>
            <br />
            {"Safe handling of hazardous components."}
          </div>
          <div className="pt-[14px] pr-[18px] pb-[14px] pl-[18px] [background:#fff] [border-left:4px_solid_#AB052D] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong className="[font-weight:bolder]">
              {"SCDF — Fire & hazmat"}
            </strong>
            <br />
            {"Lithium battery / hazmat storage."}
          </div>
          <div className="pt-[14px] pr-[18px] pb-[14px] pl-[18px] [background:#fff] [border-left:4px_solid_#AB052D] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong className="[font-weight:bolder]">{"GovTech IM8"}</strong>
            <br />
            {"Public sector ICT retirement."}
          </div>
          <div className="pt-[14px] pr-[18px] pb-[14px] pl-[18px] [background:#fff] [border-left:4px_solid_#AB052D] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong className="[font-weight:bolder]">
              {"ESG — Green Plan 2030"}
            </strong>
            <br />
            {"Circular economy & e-waste reduction."}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection4() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] [background:#2B3944] bg-[gray]!">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="text-center!">
          <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"Sector expertise"}
          </span>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"25+ industries across Singapore"}
          </h2>
        </div>
        <div className="mt-[1.5rem]! text-center!">
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Fintech & Payments"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Telecommunications"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Data Centres"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"CII sectors"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Construction"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Marine & Offshore"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Logistics"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Pharmaceutical"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Manufacturing"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Healthcare"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Banking & Finance"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Energy & Utilities"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Aviation"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Retail"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Government"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Insurance"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Hospitality"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Cybersecurity"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Education"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Real Estate"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Waste Mgmt"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Food & Beverage"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Professional Services"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Media & Entertainment"}
          </span>
          <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[6px] pr-[20px] pb-[6px] pl-[20px] inline-block [background:#f0f2f5] rounded-[40px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Transport & Mobility"}
          </span>
        </div>
      </div>
    </section>
  );
}

function ContainerSection2() {
  return (
    <div
      id="grant"
      className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]"
    >
      <div className="pt-[40px] max-[768px]:pt-[28px] pr-[40px] max-[768px]:pr-[28px] pb-[40px] max-[768px]:pb-[28px] pl-[40px] max-[768px]:pl-[28px] [background:linear-gradient(135deg,_#1a2a3a_0%,_#0f1a24_100%)] rounded-[32px] text-[white]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center!">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
              {"Fund your SS 587 compliance — up to 70% co-funding"}
            </h3>
            <p className="mt-[0] mb-[30px] opacity-[.75]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Enterprise Singapore MASA grant, SkillsFuture WSQ training grants, NEA producer responsibility integration, ESG Business Improvement Fund (BIF). ICFC manages grant application alongside your project."
              }
            </p>
            <SiteLink
              href="/contact-us"
              className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D]"
            >
              {"Check MASA grant eligibility ↗"}
            </SiteLink>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] text-center!">
            <SiteImage
              src="/assets/images/favicon.webp"
              alt="grant"
              className="[vertical-align:middle] max-w-full w-[80px]! opacity-[0.8]!"
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
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="shadow-[0_0.125rem_0.25rem_rgba(0,_0,_0,_0.075)]! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[1rem]!">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Head of IT governance"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Licensed financial institution"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "“ICFC designed our SS 587 programme to satisfy PDPA data destruction and MAS TRM decommissioning. ITAD vendor audit gave us documented assurance.”"
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="shadow-[0_0.125rem_0.25rem_rgba(0,_0,_0,_0.075)]! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[1rem]!">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Infrastructure director"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Data centre operator"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "“Retired thousands of servers, ICFC established chain-of-custody & ITAD framework under 3 months + MASA grant recovered significant costs.”"
                }
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Frequently asked questions — SS 587"}
          </h2>
        </div>
        <AccordionGroup id="ss587faq">
          <AccordionItem
            title={<>{"What is SS 587 and who must comply?"}</>}
            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#dee2e6] [border-top-left-radius:0.375rem] [border-top-right-radius:0.375rem]"
          >
            {" "}
            {
              "SS 587 is Singapore's national standard for end-of-life ICT management. It applies to any organisation retiring ICT assets, ITAD service providers, recyclers, especially CII operators, MAS-regulated entities, NEA producer responsibility obligations. Provides certified data destruction and ESG reporting evidence."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"How long does SS 587 certification take?"}</>}
            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#dee2e6] [border-top:0]"
          >
            {" "}
            {
              "With ICFC, typical programme takes 3–5 months from kickoff to certification-body audit readiness. 98% first-attempt certification rate minimises rework."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Can ICFC help with MASA grant?"}</>}
            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#dee2e6] [border-top:0]"
          >
            {" "}
            {
              "Yes, ICFC assesses eligibility, manages documentation, milestone claims, coordinates with certification body. Qualifying SMEs can recover up to 70% of eligible consultation & certification costs."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Do we need SS 587 if we already have ISO 14001?"}</>}
            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#dee2e6] [border-top:0]"
          >
            {" "}
            {
              "ISO 14001 covers environmental management broadly, but SS 587 addresses specific ICT asset retirement processes, chain-of-custody, data sanitisation, ITAD vendor governance, and PDPA compliance. Many organisations integrate SS 587 into their existing environmental or security management systems."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {"How does SS 587 relate to PDPA data destruction obligations?"}
              </>
            }
            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#dee2e6] [border-top:0] [border-bottom-right-radius:0.375rem] [border-bottom-left-radius:0.375rem]"
          >
            {" "}
            {
              "The Personal Data Protection Act requires organisations to protect personal data at disposal. SS 587 provides certified data sanitisation (NIST 800-88) and chain-of-custody documentation fulfilling PDPA's disposal obligations and audit trail requirements."
            }
          </AccordionItem>
        </AccordionGroup>
      </div>
    </section>
  );
}

function ContainerSection3() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! rounded-[1rem]! [background:#1e2a36]!">
        <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"Start your SS 587 compliance journey with ICFC"}
        </h3>
        <p className="mt-[0] mb-[30px] text-[rgba(255,255,255,.5)]! text-[17px] [font-weight:normal] leading-[28px]">
          {
            "Whether a handful of laptops or whole data centre — get a practical path to certification backed by 11+ years Singapore expertise."
          }
        </p>
        <div className="mt-[1.5rem]!">
          <SiteLink
            href="/contact-us"
            className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D]"
          >
            {"Book a free consultation ↗"}
          </SiteLink>
          <SiteLink
            href="/contact-us"
            className="text-[rgba(255,255,255,1)]! [text-decoration:none] ml-[1rem]! pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944]"
          >
            {"Get a quote + grant check ↗"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
