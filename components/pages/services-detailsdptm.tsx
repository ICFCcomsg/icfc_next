import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsdptmPageContent() {
  return (
    <SitePageTemplate route="services-detailsdptm.html">
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
        <SectionSpaceSection5 />
        <ContainerSection5 />
        <ContainerSection6 />
        <SeoKeywordsSection />
        <SectionSpaceSection6 />
        <ContainerSection7 />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section className="relative z-[1] [overflow-x:clip] [background:#0a3142]!">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center! min-h-[70vh]!">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="pt-[110px] max-[767px]:pt-[75px] min-[767px]:max-[991px]:pt-[95px] pb-[330px] max-[767px]:pb-[80px] min-[767px]:max-[991px]:pb-[100px] min-[991px]:max-[1199px]:pb-[110px] min-[1199px]:max-[1600px]:pb-[295px] relative z-[1] [padding-inline-start:200px] max-[1199px]:[padding-inline-start:15px] min-[1199px]:max-[1600px]:[padding-inline-start:100px] max-[1199px]:[padding-inline-end:15px]">
              <span className="mb-[15px] text-[14px] font-medium tracking-[2.4px] uppercase text-[#6ab0de]! inline-block">
                {"SS 714:2025 · Data Protection Trustmark · PDPA · Singapore"}
              </span>
              <h1 className="mt-[0px] mb-[0] font-medium leading-[1.12] text-[#FFFFFF] text-[66px] max-[480px]:text-[40px] min-[480px]:max-[575px]:text-[45px] min-[575px]:max-[767px]:text-[50px] min-[767px]:max-[991px]:text-[55px] min-[991px]:max-[1600px]:text-[60px] [word-break:break-word]">
                {"Data Protection Trustmark —"}
                <br className="max-[480px]:hidden" />
                {"SS 714:2025 certified, PDPA aligned, grant-funded"}
              </h1>
              <p className="mt-[0] mb-[40px] text-[17px] font-medium text-[rgba(255,_255,_255,_0.8)] leading-[28px] tracking-[0.02em] max-w-[580px] max-[575px]:max-w-full">
                {
                  "DPTM certification demonstrates accountable personal data handling. EDG/MASA grant up to 50% | PDPC Active Enforcement mitigating factor | DPO registration mandatory from June 2025."
                }
              </p>
              <div>
                <SiteLink
                  href="/contact-us.html"
                  className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D] gap-[8px] group/btn group/has-bg-white"
                >
                  {"Free DPTM assessment →"}
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
                  {"Check EDG grant eligibility →"}
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
          <div className="mb-[5px] text-[38px] font-extrabold text-[#0b5e7e] leading-[1]">
            {"SS 714"}
          </div>
          <div>{":2025 — national standard"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#0b5e7e] leading-[1]">
            {"3 yr"}
          </div>
          <div>{"Certificate + surveillance"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#0b5e7e] leading-[1]">
            {"50%"}
          </div>
          <div>{"EDG grant co-funding"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#0b5e7e] leading-[1]">
            {"7"}
          </div>
          <div>{"IMDA-appointed CBs"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[38px] font-extrabold text-[#0b5e7e] leading-[1]">
            {"35+"}
          </div>
          <div>{"Industries served"}</div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection2() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
      <div className="relative pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! mb-[1rem] text-[#055160] bg-[#cff4fc] [border:0]! rounded-[1rem]! [background:#e8f4f8]!">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[rgba(33,37,41,1)]! text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
              {"🛡️ Why DPTM matters more than ever in 2026"}
            </h4>
            <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                <strong className="[font-weight:bolder]">
                  {"PDPC Active Enforcement"}
                </strong>
                {
                  " — DPTM certification serves as a mitigating factor under PDPC's Active Enforcement Framework — reducing penalty exposure in data breach investigations."
                }
              </div>
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                <strong className="[font-weight:bolder]">
                  {"DPO Registration"}
                </strong>
                {
                  " — DPO registration with PDPC is now a legal requirement (effective 1 June 2025) — DPTM structures the governance around your DPO."
                }
              </div>
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
                <strong className="[font-weight:bolder]">
                  {"Procurement"}
                </strong>
                {
                  " — Government agencies and enterprise clients increasingly require DPTM as vendor qualification."
                }
              </div>
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
                <strong className="[font-weight:bolder]">
                  {"Digital Economy"}
                </strong>
                {
                  " — Singapore's vision as a trusted global data hub — DPTM is the mark of distinction."
                }
              </div>
            </div>
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
            {"SS 714:2025 DPTM"}
          </span>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {
              "What is the Data Protection Trustmark? Singapore's official data protection certification"
            }
          </h2>
        </div>
        <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          {
            "The DPTM is a voluntary, enterprise-wide certification that assesses an organisation's data protection maturity through a structured governance audit against the PDPA's requirements. Jointly developed by PDPC and IMDA, it was elevated to Singapore Standard SS 714:2025 in 2025 — reinforcing its national recognition and linking it to SAC's accreditation framework."
          }
        </p>
        <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          {
            "SS 714:2025 took effect with a new SAC accreditation programme from 7 July 2025. Under the new standard, the SAC ensures certification bodies demonstrate the necessary competence to conduct SS 714 audits based on ISO/IEC 17021-1 and SAC CT 34. DPTM may serve as a mitigating factor under PDPC's Active Enforcement Framework. For any Singapore organisation handling significant volumes of personal data, DPTM is no longer merely a commercial differentiator; it is a risk management instrument."
          }
        </p>
      </div>
    </section>
  );
}

function SectionSpaceSection2() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] [background:#2B3944]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="text-center!">
          <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"DPTM services"}
          </span>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Audit · Consultation · Training"}
          </h2>
          <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            {"EDG eligible | SAC accreditation | SS 714:2025 aligned"}
          </p>
        </div>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[28px] pr-[22px] pb-[28px] pl-[22px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]!">{"🔍"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"DPTM Audit"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Gap analysis · Stage 1/Stage 2 readiness · Annual surveillance · Data intermediary PDPA audit."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
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
                {"DPTM Consultation"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Full SS 714 implementation · DPO appointment · Breach management · Data inventory ROPA · APEC CBPR/PRP."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
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
                {"DPTM Training"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "DPO practitioner · PDPA implementation · Internal auditor · Staff awareness · Breach tabletop."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
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

function SectionSpaceSection3() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"SS 714:2025 certification domains — four pillars ICFC implements"}
          </h2>
        </div>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[22px] pr-[22px] pb-[22px] pl-[22px] [background:#f0f8fc] rounded-[20px] h-full [border-bottom:3px_solid_#0b5e7e] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <div className="mb-[.5rem]! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]!">
                {"🏛️"}
              </div>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Clause 6 — Governance & transparency"}
              </h5>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "DPO appointment and registration, data protection policies, compliance monitoring, stakeholder communication, query and complaint handling, and breach management plan."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[22px] pr-[22px] pb-[22px] pl-[22px] [background:#f0f8fc] rounded-[20px] h-full [border-bottom:3px_solid_#0b5e7e] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <div className="mb-[.5rem]! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]!">
                {"📋"}
              </div>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Clause 7 — Management of personal data"}
              </h5>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Consent management, purpose limitation, data collection notification, use and disclosure controls, and cross-border transfer management."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[22px] pr-[22px] pb-[22px] pl-[22px] [background:#f0f8fc] rounded-[20px] h-full [border-bottom:3px_solid_#0b5e7e] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <div className="mb-[.5rem]! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]!">
                {"🔒"}
              </div>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Clause 8 — Care of personal data"}
              </h5>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Data security arrangements, accuracy and completeness controls, retention schedules, secure disposal, and third-party data intermediary management."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[22px] pr-[22px] pb-[22px] pl-[22px] [background:#f0f8fc] rounded-[20px] h-full [border-bottom:3px_solid_#0b5e7e] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <div className="mb-[.5rem]! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]!">
                {"⚖️"}
              </div>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Clause 9 — Safeguarding individuals' rights"}
              </h5>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Access and correction request procedures, consent withdrawal processes, do-not-call registry compliance, and individual rights communication."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection3() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[0]! pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="relative flex [flex-direction:column] min-w-[0] h-[_] text-[#212529] [word-wrap:break-word] bg-[#fff] [background-clip:border-box] [border:0]! rounded-[1rem]! overflow-hidden! shadow-[0_0.125rem_0.25rem_rgba(0,_0,_0,_0.075)]!">
        <div className="pt-[1.5rem]! pr-[1rem] pb-[0.5rem] pl-[1rem] mb-[0] text-[_] bg-[rgba(255,255,255,1)]! [border-bottom:1px_solid_rgba(0,_0,_0,_0.175)] rounded-[calc(0.375rem_-_(1px))_calc(0.375rem_-_(1px))_0_0] [border:0]!">
          <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
            {
              "DPTM (SS 714:2025) vs ISO 27701 vs PDPA — complete privacy governance picture"
            }
          </h3>
        </div>
        <div className="[flex:1_1_auto] pt-[1rem] pr-[1rem] pb-[1rem] pl-[1rem] text-[_]">
          <div className="[overflow-x:auto]">
            <table className="[caption-side:bottom] [border-collapse:collapse] w-full max-[991px]:w-[900px] mb-[1rem] [vertical-align:top] [border-color:#dee2e6] [border:1px_solid_#DBDEE1]">
              <thead className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:bottom]">
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8]">
                    {"Dimension"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8]">
                    {"DPTM SS 714:2025"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8]">
                    {"ISO/IEC 27701:2025"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8]">
                    {"PDPA (mandatory)"}
                  </th>
                </tr>
              </thead>
              <tbody className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:inherit]">
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Authority"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"IMDA / PDPC — Singapore national"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"ISO — International"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"PDPC — Singapore law"}
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Nature"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Voluntary certification (national mark)"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Voluntary certification (international)"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Mandatory legal obligation"}
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Scope"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Enterprise-wide data protection practices"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Privacy Information Management System"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"All personal data handling"}
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"SAC accreditation"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ SS 714:2025 from July 2025"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ ISO 17021-1 accredited CBs"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"N/A — regulator enforced"}
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"PDPC enforcement benefit"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Active enforcement mitigating factor"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"≈ Supports accountability demonstration"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"N/A — mandatory minimum"}
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"EDG grant eligible"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Consultation co-funded up to 50%"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Consultation co-funded up to 50%"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-[1rem]! mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            <strong className="[font-weight:bolder]">
              {"ICFC recommendation:"}
            </strong>
            {
              " Implement DPTM + ISO 27701 together for maximum PDPA compliance coverage and international recognition — single EDG grant application, 30–40% more efficient."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

function ContainerSection4() {
  return (
    <div
      id="grant"
      className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]"
    >
      <div className="pt-[40px] max-[768px]:pt-[28px] pr-[40px] max-[768px]:pr-[28px] pb-[40px] max-[768px]:pb-[28px] pl-[40px] max-[768px]:pl-[28px] [background:linear-gradient(135deg,_#0a2e4a_0%,_#051c2c_100%)] rounded-[32px] text-[white]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center!">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
              {
                "50% EDG / MASA grant co-funding — up to 50% of DPTM consultation costs"
              }
            </h3>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying SS 714:2025 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. DPTM + ISO 27701 integrated projects qualify for EDG co-funding on both standards through a single application."
              }
            </p>
            <SiteLink
              href="/contact-us.html"
              className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D]"
            >
              {"Check EDG eligibility →"}
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

function SectionSpaceSection4() {
  return (
    <section className="pt-[0]! pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"ICFC's DPTM process — data inventory to SS 714:2025 certificate"}
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
                {"Data inventory"}
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"03"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"SS 714 gap analysis"}
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"04"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"Grant application"}
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"05"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"Pre-cert audit"}
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]!">
              <div className="inline-flex! mb-[.5rem]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"06"}
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {"CB assessment → certificate"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection5() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] [background:#2B3944]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] mb-[1.5rem]!">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#0b5e7e]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Data Protection Officer"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"E-commerce platform, Singapore"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  '"ICFC helped us achieve DPTM certification in under four months — starting from a position where we had a DPO appointment letter but very little else. Their data inventory workshop revealed personal data processing activities across three departments that we had not previously documented. The EDG grant covered 50% of the consultation cost. First-attempt success."'
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] mb-[1.5rem]!">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#0b5e7e]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"CTO"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Healthcare technology provider, Singapore"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  '"We needed both DPTM and ISO 27701 to qualify for a government tender that required Singapore national certification and international privacy management credentials. ICFC\'s integrated approach — one data inventory, one policy framework, one EDG grant application — saved us significant time and cost versus pursuing them separately."'
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#0b5e7e]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"General Manager"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Logistics service provider, Singapore"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  '"ICFC\'s data breach tabletop exercise was the most valuable part of our DPTM preparation. We ran a realistic breach scenario that exposed a critical gap — we had no pre-drafted PDPC notification template and no clear escalation path for the 3-day notification deadline. Fixing this before it became a real incident was invaluable."'
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
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
      <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! text-[rgba(255,255,255,1)]! bg-[rgba(33,37,41,1)]! rounded-[1rem]! [background:linear-gradient(135deg,_#1a2a3a,_#0f1a24)]!">
        <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {
            "新加坡SS 714:2025数据保护信任标志（DPTM）认证 · ICFC Pte Ltd（2014年创立）"
          }
        </h3>
        <p className="mt-[1rem]! mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          {
            "ICFC提供新加坡SS 714:2025数据保护信任标志全程认证服务，包括数据保护差距分析、个人数据清单建立、数据保护官（DPO）任命支持、隐私政策制定、数据泄露应急计划及员工培训，涵盖金融、医疗、物流、零售等35大行业。与PDPA及ISO 27701完全对齐。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务。"
          }
        </p>
        <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          <strong className="[font-weight:bolder]">{"关键词："}</strong>
          {
            "数据保护信任标志 · SS 714 2025 · DPTM认证 · PDPA合规 · 个人数据保护官 · DPO注册 · EDG补助金 · 最佳DPTM顾问 · 实惠数据保护认证 · APEC CBPR新加坡"
          }
        </p>
        <SiteLink
          href="/contact-us.html"
          className="text-[#f8f9fa] [text-decoration:none] inline-block pt-[0.375rem] pr-[0.75rem] pb-[0.375rem] pl-[0.75rem] text-[1rem] [font-weight:400] leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:1px_solid_#f8f9fa] rounded-[0.375rem] bg-[transparent] hover:text-[#000] hover:bg-[#f8f9fa] hover:[border-color:#f8f9fa] focus-visible:text-[#000] focus-visible:bg-[#f8f9fa] focus-visible:[border-color:#f8f9fa] focus-visible:shadow-[0_0_0_0.25rem_rgba(248,249,250,_.5)] active:text-[#000] active:bg-[#f8f9fa] active:[border-color:#f8f9fa] active:shadow-[0_0_0_0.25rem_rgba(248,249,250,_.5)] mt-[.5rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent]"
        >
          {"中文咨询 · 免费评估 →"}
        </SiteLink>
      </div>
    </div>
  );
}

function ContainerSection6() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <h3 className="mt-[0px] mb-[1.5rem]! [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] text-center! [word-break:break-word]">
        {"Related services"}
      </h3>
      <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#0b5e7e]!">
              {"🛡️"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 27701"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"International partner to DPTM · 30–40% saving when combined"}
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#0b5e7e]!">
              {"🔒"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 27001"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"Data security arrangements required by SS 714:2025 Clause 8"}
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#0b5e7e]!">
              {"🤖"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"AI + personal data governance — comprehensive privacy posture"}
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#0b5e7e]!">
              {"♻️"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 22301 BCM"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Data resilience and recovery — personal data protection in incidents"
              }
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#0b5e7e]!">
              {"🌐"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"APEC CBPR/PRP"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"Cross-border data transfer certification pathway"}
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[16.66666667%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[#2B3944] [background:#0b5e7e]!">
              {"📋"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"PDPA Compliance"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {"Mandatory data protection law · DPO registration support"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeoKeywordsSection() {
  return (
    <div className="mt-[50px] mr-[0] mb-[30px] ml-[0] pt-[25px] pr-[20px] pb-[25px] pl-[20px] [background:#f0f4f8] rounded-[20px] text-center">
      <div className="mb-[15px] text-[2rem] font-bold text-[#0b5e7e] inline-block tracking-[1px]">
        {"🔍 Related searches & keywords"}
      </div>
      <div className="text-[1.9rem] text-[#2c3e50] leading-[1.8] [word-break:break-word]">
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"DPTM Singapore 2026"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"SS 714:2025"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"data protection trustmark"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"PDPA certification SG"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"best DPTM consultant SG"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"affordable DPTM"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"budget PDPA consultant"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"top data protection firm"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"EDG grant DPTM"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"MASA grant data protection"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"SkillsFuture PDPA"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"ESG grant DPTM"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"新加坡数据保护信任标志"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"DPTM认证新加坡"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"SS 714 2025"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"PDPA合规顾问"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white]">
          {"个人数据保护"}
        </span>
      </div>
    </div>
  );
}

function SectionSpaceSection6() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div>
          <h2 className="mt-[0px] mb-[2rem] font-extrabold leading-[1.19] text-[#0a2e4a] text-[2.2rem] max-[768px]:text-[1.7rem] [word-break:break-word]">
            {"Frequently asked questions — DPTM SS 714:2025"}
          </h2>
        </div>
        <AccordionGroup id="dptmFaq">
          <AccordionItem
            title={<>{"What changed when DPTM became SS 714:2025?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top-left-radius:0.375rem] [border-top-right-radius:0.375rem] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "In 2025, the DPTM was incorporated into Singapore Standards as SS 714:2025, elevating its national recognition. The SAC launched a new accreditation programme from 7 July 2025, ensuring certification bodies meet ISO/IEC 17021-1 standards. The certification experience was streamlined — organisations now work with one certification body throughout their journey. Annual surveillance audits were formalised as a requirement. Organisations previously certified under the non-SS DPTM should contact ICFC to understand the transition requirements."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Is DPTM mandatory? Does my organisation need it?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "DPTM is voluntary — it is not mandated by PDPA. However: government procurement panels increasingly require DPTM as a vendor qualification criterion; enterprise clients in banking, healthcare, and technology sectors require DPTM evidence; certification may serve as a mitigating factor under PDPC's Active Enforcement Framework; and Singapore's position as a global data hub means international partners increasingly ask for recognised credentials. ICFC recommends a free assessment to determine the commercial and risk management case for DPTM in your context."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "How much does DPTM consultation cost? Is EDG grant available?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Typical ICFC consultation fees for a Singapore SME range from S$8,000–S$25,000 from gap analysis through pre-certification readiness. Certification body audit fees are separate, typically S$3,000–S$8,000 for Stage 1 and Stage 2 combined. The EDG/MASA grant covers up to 50% of qualifying consultation fees for eligible Singapore SMEs — significantly reducing the net cost. For integrated DPTM + ISO 27701 projects, the combined cost is 30–40% less than two separate projects, with the same EDG co-funding available. Contact ICFC for a project-specific estimate."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Should we pursue DPTM or ISO 27701 — or both?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Both serve different but complementary purposes. DPTM is Singapore's national mark — recognised by PDPC, government procurement, and Singapore-focused enterprise clients. ISO 27701 is internationally recognised — accepted by GDPR-regulated entities, Asian privacy regulators, and global enterprise procurement. ICFC's strong recommendation for organisations with international data flows or multinational clients is to pursue both through an integrated implementation — sharing one data inventory, one policy framework, and qualifying for one EDG grant application. The total cost of both together is 30–40% less than pursuing them separately."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "What is the DPO registration deadline and how does DPTM help?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:1px_solid_#e9ecef] [border-top:0] [border-bottom-right-radius:0.375rem] [border-bottom-left-radius:0.375rem] mb-[1rem] rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "As of 1 June 2025, DPO registration with PDPC is a mandatory legal requirement for all organisations in Singapore. SS 714:2025 DPTM certification requires DPO appointment documentation, defined responsibilities, and operational effectiveness as a core governance requirement (Clause 6). Achieving DPTM ensures your DPO framework meets PDPC expectations and provides documented evidence of responsible data protection governance — which can potentially serve as a mitigating factor under PDPC's Active Enforcement Framework. ICFC includes DPO role design and registration support within all DPTM consulting packages."
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
      <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! rounded-[1rem]! [background:#0a3142]!">
        <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"Start your DPTM SS 714:2025 journey today"}
        </h3>
        <p className="mt-[0] mb-[30px] text-[rgba(255,255,255,.5)]! text-[17px] [font-weight:normal] leading-[28px]">
          {
            "Free 30-minute data protection assessment. Honest gap analysis against SS 714:2025. EDG grant eligibility check. No obligation."
          }
        </p>
        <div className="mt-[1.5rem]!">
          <SiteLink
            href="/contact-us.html"
            className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D]"
          >
            {"Book free DPTM assessment →"}
          </SiteLink>
          <SiteLink
            href="/contact-us.html"
            className="text-[rgba(255,255,255,1)]! [text-decoration:none] ml-[1rem]! pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944]"
          >
            {"Check grant eligibility →"}
          </SiteLink>
          <SiteLink
            href="/contact-us.html"
            className="text-[rgba(255,255,255,1)]! [text-decoration:none] ml-[1rem]! pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944]"
          >
            {"Get free quote →"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
