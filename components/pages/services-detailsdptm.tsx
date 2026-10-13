import { AnimatedElement } from "@/components/atoms/animated-element";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsdptmPageContent() {
  return (
    <SitePageTemplate route="services-detailsdptm">
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
    <section className="relative z-1 overflow-x-clip [background:#0a3142]!">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 items-center! min-h-[70vh]!">
          <div className="shrink-0 w-[66.66666667%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="pt-27.5 max-[767px]:pt-18.75 min-[767px]:max-[991px]:pt-23.75 pb-82.5 max-[767px]:pb-20 min-[767px]:max-[991px]:pb-25 min-[991px]:max-[1199px]:pb-27.5 min-[1199px]:max-[1600px]:pb-73.75 relative z-1 ps-50 max-[1199px]:ps-3.75 min-[1199px]:max-[1600px]:ps-25 max-[1199px]:pe-3.75">
              <AnimatedElement
                as="span"
                effect="up"
                delay={0}
                duration={1}
                className="mb-3.75 text-[14px] font-medium tracking-[2.4px] uppercase text-[#6ab0de]! inline-block"
              >
                {"SS 714:2025 · Data Protection Trustmark · PDPA · Singapore"}
              </AnimatedElement>
              <AnimatedElement
                as="h1"
                effect="up"
                delay={0}
                duration={1}
                className="mt-0 mb-0 font-medium leading-[1.12] text-[#FFFFFF] text-[66px] max-[480px]:text-[40px] min-[480px]:max-[575px]:text-[45px] min-[575px]:max-[767px]:text-[50px] min-[767px]:max-[991px]:text-[55px] min-[991px]:max-[1600px]:text-[60px] [word-break:break-word]"
              >
                {"Data Protection Trustmark —"}
                <br className="max-[480px]:hidden" />
                {"SS 714:2025 certified, PDPA aligned, EDGE Grant eligible"}
              </AnimatedElement>
              <p className="mt-0 mb-10 text-[17px] font-medium text-[rgba(255,255,255,0.8)] leading-7 tracking-[0.02em] max-w-145 max-[575px]:max-w-full">
                {
                  "DPTM certification demonstrates accountable personal data handling. EDGE Grant up to 50% for SMEs, subject to eligibility and Enterprise Singapore's approval | PDPC Active Enforcement mitigating factor | DPO registration mandatory from June 2025."
                }
              </p>
              <div>
                <SiteLink
                  href="/contact-us"
                  className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] gap-2 group/btn group/has-bg-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                >
                  {"Free DPTM assessment →"}
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
                  {"Check EDGE Grant eligibility →"}
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
          <div className="mb-1.25 text-[38px] font-extrabold text-[#0b5e7e] leading-none">
            {"SS 714"}
          </div>
          <div>{":2025 — national standard"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#0b5e7e] leading-none">
            {"3 yr"}
          </div>
          <div>{"Certificate + surveillance"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#0b5e7e] leading-none">
            {"EDGE"}
          </div>
          <div>{"Grant guidance (subject to eligibility)"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#0b5e7e] leading-none">
            {"7"}
          </div>
          <div>{"IMDA-appointed CBs"}</div>
        </div>
        <div className="pt-5 pr-3.75 pb-5 pl-3.75 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-27.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] [transition:all_0.3s] motion-reduce:transition-none">
          <div className="mb-1.25 text-[38px] font-extrabold text-[#0b5e7e] leading-none">
            {"250+"}
          </div>
          <div>{"Clients"}</div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection2() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
      <div className="relative pt-6! pr-6! pb-6! pl-6! mb-4 text-[#055160] bg-[#cff4fc] [border:0]! rounded-2xl! [background:#e8f4f8]!">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[rgba(33,37,41,1)]! text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
              {"🛡️ Why DPTM matters more than ever in 2026"}
            </h4>
            <div className="flex flex-wrap mt-4! -mr-6 -ml-6">
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                <strong className="[font-weight:bolder]">
                  {"PDPC Active Enforcement"}
                </strong>
                {
                  " — DPTM certification serves as a mitigating factor under PDPC's Active Enforcement Framework — reducing penalty exposure in data breach investigations."
                }
              </div>
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                <strong className="[font-weight:bolder]">
                  {"DPO Registration"}
                </strong>
                {
                  " — DPO registration with PDPC is now a legal requirement (effective 1 June 2025) — DPTM structures the governance around your DPO."
                }
              </div>
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-2! flex-[0_0_auto]">
                <strong className="[font-weight:bolder]">
                  {"Procurement"}
                </strong>
                {
                  " — Government agencies and enterprise clients increasingly require DPTM as vendor qualification."
                }
              </div>
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-2! flex-[0_0_auto]">
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="text-center!">
          <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"SS 714:2025 DPTM"}
          </span>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {
              "What is the Data Protection Trustmark? Singapore's official data protection certification"
            }
          </h2>
        </div>
        <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
          {
            "The DPTM is a voluntary, enterprise-wide certification that assesses an organisation's data protection maturity through a structured governance audit against the PDPA's requirements. Jointly developed by PDPC and IMDA, it was elevated to Singapore Standard SS 714:2025 in 2025 — reinforcing its national recognition and linking it to SAC's accreditation framework."
          }
        </p>
        <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 [background:#2B3944]">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="text-center!">
          <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"DPTM services"}
          </span>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Audit · Consultation · Training"}
          </h2>
          <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
            {"EDGE eligible | SAC accreditation | SS 714:2025 aligned"}
          </p>
        </div>
        <div className="flex flex-wrap mt-4! -mr-6 -ml-6">
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-7 pr-5.5 pb-7 pl-5.5 [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:transform-[translateY(-8px)] [transition:0.2s] motion-reduce:transition-none">
              <span className="text-[42px]!">{"🔍"}</span>
              <h4 className="mt-4! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"DPTM Audit"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Gap analysis · Stage 1/Stage 2 readiness · Annual surveillance · Data intermediary PDPA audit."
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
                {"DPTM Consultation"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Full SS 714 implementation · DPO appointment · Breach management · Data inventory ROPA · APEC CBPR/PRP."
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
                {"DPTM Training"}
              </h4>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "DPO practitioner · PDPA implementation · Internal auditor · Staff awareness · Breach tabletop."
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

function SectionSpaceSection3() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"SS 714:2025 certification domains — four pillars ICFC implements"}
          </h2>
        </div>
        <div className="flex flex-wrap mt-4! -mr-6 -ml-6">
          <div className="shrink-0 w-[25%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5.5 pr-5.5 pb-5.5 pl-5.5 [background:#f0f8fc] rounded-[20px] h-full [border-bottom:3px_solid_#0b5e7e] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <div className="mb-2! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]!">
                {"🏛️"}
              </div>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Clause 6 — Governance & transparency"}
              </h5>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "DPO appointment and registration, data protection policies, compliance monitoring, stakeholder communication, query and complaint handling, and breach management plan."
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[25%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5.5 pr-5.5 pb-5.5 pl-5.5 [background:#f0f8fc] rounded-[20px] h-full [border-bottom:3px_solid_#0b5e7e] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <div className="mb-2! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]!">
                {"📋"}
              </div>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Clause 7 — Management of personal data"}
              </h5>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Consent management, purpose limitation, data collection notification, use and disclosure controls, and cross-border transfer management."
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[25%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5.5 pr-5.5 pb-5.5 pl-5.5 [background:#f0f8fc] rounded-[20px] h-full [border-bottom:3px_solid_#0b5e7e] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <div className="mb-2! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]!">
                {"🔒"}
              </div>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Clause 8 — Care of personal data"}
              </h5>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Data security arrangements, accuracy and completeness controls, retention schedules, secure disposal, and third-party data intermediary management."
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[25%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-5.5 pr-5.5 pb-5.5 pl-5.5 [background:#f0f8fc] rounded-[20px] h-full [border-bottom:3px_solid_#0b5e7e] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] [transition:0.2s] motion-reduce:transition-none">
              <div className="mb-2! text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]!">
                {"⚖️"}
              </div>
              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"Clause 9 — Safeguarding individuals' rights"}
              </h5>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-0! pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="relative flex flex-col min-w-0 h-[_] text-[#212529] [word-wrap:break-word] bg-white bg-clip-border [border:0]! rounded-2xl! overflow-hidden! shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]!">
        <div className="pt-6! pr-4 pb-2 pl-4 mb-0 text-[_] bg-[rgba(255,255,255,1)]! [border-bottom:1px_solid_rgba(0,0,0,0.175)] rounded-[calc(0.375rem-(1px))_calc(0.375rem-(1px))_0_0] [border:0]!">
          <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
            {
              "DPTM (SS 714:2025) vs ISO 27701 vs PDPA — complete privacy governance picture"
            }
          </h3>
        </div>
        <div className="flex-[1_1_auto] pt-4 pr-4 pb-4 pl-4 text-[_]">
          <div className="overflow-x-auto">
            <table className="caption-bottom border-collapse w-full max-[991px]:w-225 mb-4 align-top border-[#dee2e6] [border:1px_solid_#DBDEE1]">
              <thead className="border-inherit border-solid [border-width:0] align-bottom">
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top [background:#f0f4f8]">
                    {"Dimension"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top [background:#f0f4f8]">
                    {"DPTM SS 714:2025"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top [background:#f0f4f8]">
                    {"ISO/IEC 27701:2025"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top [background:#f0f4f8]">
                    {"PDPA (mandatory)"}
                  </th>
                </tr>
              </thead>
              <tbody className="border-inherit border-solid [border-width:0] align-[inherit]">
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Authority"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"IMDA / PDPC — Singapore national"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"ISO — International"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"PDPC — Singapore law"}
                  </td>
                </tr>
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Nature"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Voluntary certification (national mark)"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Voluntary certification (international)"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Mandatory legal obligation"}
                  </td>
                </tr>
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Scope"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Enterprise-wide data protection practices"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"Privacy Information Management System"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"All personal data handling"}
                  </td>
                </tr>
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"SAC accreditation"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓ SS 714:2025 from July 2025"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓ ISO 17021-1 accredited CBs"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"N/A — regulator enforced"}
                  </td>
                </tr>
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"PDPC enforcement benefit"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓ Active enforcement mitigating factor"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"≈ Supports accountability demonstration"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"N/A — mandatory minimum"}
                  </td>
                </tr>
                <tr className="border-inherit border-solid [border-width:1px_0]">
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"EDGE Grant eligible"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓ Consultation co-funded up to 50%"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"✓ Consultation co-funded up to 50%"}
                  </td>
                  <td className="border-inherit border-solid [border-width:0_1px] pt-2 pr-2 pb-2 pl-2 text-[initial] bg-white [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] align-top">
                    {"N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4! mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
            <strong className="[font-weight:bolder]">
              {"ICFC recommendation:"}
            </strong>
            {
              " Implement DPTM + ISO 27701 together for maximum PDPA compliance coverage and international recognition — one EDGE Grant application by you, 30–40% more efficient."
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
      className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25"
    >
      <div className="pt-10 max-[768px]:pt-7 pr-10 max-[768px]:pr-7 pb-10 max-[768px]:pb-7 pl-10 max-[768px]:pl-7 [background:linear-gradient(135deg,#0a2e4a_0%,#051c2c_100%)] rounded-4xl text-[white]">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 items-center!">
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
              {
                "EDGE Grant — up to 50% of DPTM consultation costs for SMEs, subject to eligibility and Enterprise Singapore's approval"
              }
            </h3>
            <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "Enterprise Singapore's EDGE Grant supports up to 50% of qualifying SS 714:2025 consultation fees for SMEs (up to 30% for non-SMEs), subject to eligibility and Enterprise Singapore's approval. ICFC prepares the proposal, quotation and SS 680 consultant details EDGE asks for; you apply on the Business Grants Portal before project commencement. DPTM + ISO 27701 integrated projects may be supported under EDGE for both standards."
              }
            </p>
            <SiteLink
              href="/contact-us"
              className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
            >
              {"Check EDGE eligibility →"}
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

function SectionSpaceSection4() {
  return (
    <section className="pt-0! pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"ICFC's DPTM process — data inventory to SS 714:2025 certificate"}
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
                {"Data inventory"}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"03"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {"SS 714 gap analysis"}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"04"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {"Grant application (by you, on the Business Grants Portal)"}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"05"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {"Pre-cert audit"}
              </p>
            </div>
          </div>
          <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-4! pr-4! pb-4! pl-4!">
              <div className="inline-flex! mb-2! pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-full!">
                {"06"}
              </div>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
  return null;
}

function ContainerSection5() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
      <div className="pt-12! pr-12! pb-12! pl-12! text-center! text-[rgba(255,255,255,1)]! bg-[rgba(33,37,41,1)]! rounded-2xl! [background:linear-gradient(135deg,#1a2a3a,#0f1a24)]!">
        <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {
            "新加坡SS 714:2025数据保护信任标志（DPTM）认证 · ICFC Pte Ltd（2014年创立）"
          }
        </h3>
        <p className="mt-4! mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
          {
            "ICFC提供新加坡SS 714:2025数据保护信任标志全程认证服务，包括数据保护差距分析、个人数据清单建立、数据保护官（DPO）任命支持、隐私政策制定、数据泄露应急计划及员工培训，涵盖金融、医疗、物流、零售等35大行业。与PDPA及ISO 27701完全对齐。EDGE补助金中小企业最高50%（须符合资格并经新加坡企业发展局批准）。提供中英双语服务。"
          }
        </p>
        <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
          <strong className="[font-weight:bolder]">{"关键词："}</strong>
          {
            "数据保护信任标志 · SS 714 2025 · DPTM认证 · PDPA合规 · 个人数据保护官 · DPO注册 · EDGE补助金 · 最佳DPTM顾问 · 实惠数据保护认证 · APEC CBPR新加坡"
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

function ContainerSection6() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <h3 className="mt-0 mb-6! font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] text-center! [word-break:break-word]">
        {"Related services"}
      </h3>
      <div className="flex flex-wrap -mt-6 -mr-6 -ml-6">
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#0b5e7e]!">
              {"🛡️"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 27701"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {"International partner to DPTM · 30–40% saving when combined"}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#0b5e7e]!">
              {"🔒"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 27001"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {"Data security arrangements required by SS 714:2025 Clause 8"}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#0b5e7e]!">
              {"🤖"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {"AI + personal data governance — comprehensive privacy posture"}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#0b5e7e]!">
              {"♻️"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 22301 BCM"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "Data resilience and recovery — personal data protection in incidents"
              }
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#0b5e7e]!">
              {"🌐"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"APEC CBPR/PRP"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {"Cross-border data transfer certification pathway"}
            </p>
          </div>
        </div>
        <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! h-full! pt-4! pr-4! pb-4! pl-4! text-center! rounded-2xl!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md mb-2! bg-[#2B3944] [background:#0b5e7e]!">
              {"📋"}
            </span>
            <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"PDPA Compliance"}
            </h5>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
    <div className="mt-12.5 mr-0 mb-7.5 ml-0 pt-6.25 pr-5 pb-6.25 pl-5 [background:#f0f4f8] rounded-[20px] text-center">
      <div className="mb-3.75 text-[2rem] font-bold text-[#0b5e7e] inline-block tracking-[1px]">
        {"🔍 Related searches & keywords"}
      </div>
      <div className="text-[1.9rem] text-[#2c3e50] leading-[1.8] [word-break:break-word]">
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"DPTM Singapore 2026"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"SS 714:2025"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"data protection trustmark"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"PDPA certification SG"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"best DPTM consultant SG"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"affordable DPTM"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"budget PDPA consultant"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"top data protection firm"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"EDGE Grant DPTM"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"EDGE Grant data protection"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"SkillsFuture PDPA"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"EDGE Grant DPTM support"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"新加坡数据保护信任标志"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"DPTM认证新加坡"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"SS 714 2025"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"PDPA合规顾问"}
        </span>
        <span className="mt-1 mr-1 mb-1 ml-1 pt-1.25 max-[768px]:pt-1 pr-3 max-[768px]:pr-2.5 pb-1.25 max-[768px]:pb-1 pl-3 max-[768px]:pl-2.5 inline-block [background:white] rounded-[30px] text-[1.2rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] [transition:all_0.2s] motion-reduce:transition-none">
          {"个人数据保护"}
        </span>
      </div>
    </div>
  );
}

function SectionSpaceSection6() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div>
          <h2 className="mt-0 mb-8 font-extrabold leading-[1.19] text-[#0a2e4a] text-[2.2rem] max-[768px]:text-[1.7rem] [word-break:break-word]">
            {"Frequently asked questions — DPTM SS 714:2025"}
          </h2>
        </div>
        <AccordionGroup id="dptmFaq">
          <AccordionItem
            title={<>{"What changed when DPTM became SS 714:2025?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] rounded-tl-md rounded-tr-md mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "In 2025, the DPTM was incorporated into Singapore Standards as SS 714:2025, elevating its national recognition. The SAC launched a new accreditation programme from 7 July 2025, ensuring certification bodies meet ISO/IEC 17021-1 standards. The certification experience was streamlined — organisations now work with one certification body throughout their journey. Annual surveillance audits were formalised as a requirement. Organisations previously certified under the non-SS DPTM should contact ICFC to understand the transition requirements."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Is DPTM mandatory? Does my organisation need it?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
                  "How much does DPTM consultation cost? Is EDGE Grant support available?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Typical ICFC consultation fees for a Singapore SME range from S$8,000–S$25,000 from gap analysis through pre-certification readiness. Certification body audit fees are separate, typically S$3,000–S$8,000 for Stage 1 and Stage 2 combined. The EDGE Grant may support up to 50% of qualifying consultation fees for SMEs (30% for non-SMEs), subject to eligibility and Enterprise Singapore's approval; you apply on the Business Grants Portal. For integrated DPTM + ISO 27701 projects, the combined cost is 30–40% less than two separate projects, with EDGE Grant support possible, subject to eligibility and Enterprise Singapore's approval. Contact ICFC for a project-specific estimate."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Should we pursue DPTM or ISO 27701 — or both?"}</>}

            defaultOpen={false}
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
          >
            {" "}
            {
              "Both serve different but complementary purposes. DPTM is Singapore's national mark — recognised by PDPC, government procurement, and Singapore-focused enterprise clients. ISO 27701 is internationally recognised — accepted by GDPR-regulated entities, Asian privacy regulators, and global enterprise procurement. ICFC's strong recommendation for organisations with international data flows or multinational clients is to pursue both through an integrated implementation — sharing one data inventory, one policy framework, and which may be supported by one EDGE Grant application made by you. The total cost of both together is 30–40% less than pursuing them separately."
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
            className="text-[#212529] bg-white [border:1px_solid_#e9ecef] [border-top:0] rounded-br-md rounded-bl-md mb-4 rounded-[20px]! overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
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
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="pt-12! pr-12! pb-12! pl-12! text-center! rounded-2xl! [background:#0a3142]!">
        <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"Start your DPTM SS 714:2025 journey today"}
        </h3>
        <p className="mt-0 mb-7.5 text-[rgba(255,255,255,.5)]! text-[17px] [font-weight:normal] leading-7">
          {
            "Free 30-minute data protection assessment. Honest gap analysis against SS 714:2025. EDGE Grant eligibility guidance. No obligation."
          }
        </p>
        <div className="mt-6!">
          <SiteLink
            href="/contact-us"
            className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
          >
            {"Book free DPTM assessment →"}
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
