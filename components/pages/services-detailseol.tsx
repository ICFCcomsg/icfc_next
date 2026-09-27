import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailseolPageContent() {
  return (
    <SitePageTemplate route="services-detailseol.html">
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
    <section className="relative z-[1] [overflow-x:clip] [background:#0a1924]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 min-h-[70vh] items-center">
          <div className="w-full shrink-0 px-3 xl:w-[66.66666666666666%]">
            <div className="relative z-[1] pt-[110px] [padding-inline-start:200px] pb-[330px] max-[1600px]:[padding-inline-start:100px] max-[1600px]:pb-[295px] max-[1199px]:[padding-inline-start:15px] max-[1199px]:[padding-inline-end:15px] max-[1199px]:pb-[110px] max-[991px]:pt-[95px] max-[991px]:pb-[100px] max-[767px]:pt-[75px] max-[767px]:pb-[80px]">
              <span className="text-[14px] font-medium tracking-[2.4px] uppercase text-[#AB052D] mb-[15px] inline-block">
                {"Singapore Standard SS 587 : 2022"}
              </span>
              <h1 className="font-bold leading-tight text-[#2B3944] text-4xl md:text-6xl text-[#FFFFFF] font-medium leading-[1.12]">
                {"End-of-Life ICT Management "}
                <br className="max-[480px]:hidden" />
                {"Audits, Consulting & Training"}
              </h1>
              <p className="leading-relaxed text-[rgba(255,_255,_255,_0.8)] font-medium tracking-[0.02em] max-w-[580px] mb-[40px] max-[575px]:max-w-full">
                {
                  "Responsible disposal, data security & ESG compliance for 25+ Singapore industries — Fintech, Data Centres, CII, Telco, Pharma, Marine, Logistics."
                }
              </p>
              <div>
                <SiteLink
                  className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF] gap-[8px]"
                  href="/contact-us.html"
                >
                  {"Free SS 587 Gap Assessment ↗"}
                  <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="w-[17px]"
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] max-[991px]:pt-[100px] max-[767px]:pt-[70px] max-[480px]:pt-[60px]">
      <div className="flex flex-wrap gap-[30px] justify-center m-[40px_0]">
        <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="text-[48px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
            {"6"}
          </div>
          <div>{"Core process phases"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="text-[48px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
            {"25+"}
          </div>
          <div>{"Industries served"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="text-[48px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
            {"98%"}
          </div>
          <div>{"First-attempt cert"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="text-[48px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
            {"11+"}
          </div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="text-[48px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
            {"500+"}
          </div>
          <div>{"Organisations guided"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[140px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:[background:white] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]">
          <div className="text-[48px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 lg:w-[100%]">
            <div>
              <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
                {"Singapore standard"}
              </span>
              <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
                {"What is SS 587"}
              </h2>
              <p className="leading-relaxed mb-4">
                {
                  "Singapore's national standard for end-of-life ICT equipment — secure, traceable, environmentally responsible retirement of computers, servers, storage, networking devices."
                }
              </p>
            </div>
            <div className="-mx-3 flex flex-wrap gap-y-6">
              <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold text-red-700">{"01"}</div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"ICT asset inventory"}
                  </h5>
                  <p className="leading-relaxed mb-4">
                    {
                      "Catalogue assets with serial numbers, data classification, retirement trigger."
                    }
                  </p>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold text-red-700">{"02"}</div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Data sanitisation"}
                  </h5>
                  <p className="leading-relaxed mb-4">
                    {
                      "NIST 800-88, DoD 5220.22-M, PDPA obligations certified wiping/destruction."
                    }
                  </p>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold text-red-700">{"03"}</div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Chain-of-custody"}
                  </h5>
                  <p className="leading-relaxed mb-4">
                    {
                      "End-to-end documentation collection → transport → processing."
                    }
                  </p>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold text-red-700">{"04"}</div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"ITAD vendor vetting"}
                  </h5>
                  <p className="leading-relaxed mb-4">
                    {
                      "Due diligence & audit downstream recyclers under SS 587 criteria."
                    }
                  </p>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold text-red-700">{"05"}</div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Environmental compliance"}
                  </h5>
                  <p className="leading-relaxed mb-4">
                    {
                      "NEA Resource Sustainability Act, Basel Convention, Green Plan 2030."
                    }
                  </p>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
                  <div className="font-bold text-red-700">{"06"}</div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Reporting & certification"}
                  </h5>
                  <p className="leading-relaxed mb-4">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center">
          <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
            {"End-to-end support"}
          </span>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"Our three service pillars — Audit, Consulting, Training"}
          </h2>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
              <span className="text-[42px]">{"🔍"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"SS 587 Audit services"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Gap assessments, pre-certification review, ITAD vendor audits, internal audits, surveillance readiness, data destruction audit."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore audit ↗"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
              <span className="text-[42px]">{"📝"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"SS 587 Consulting"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Policy & procedure design, ITAD procurement frameworks, data sanitisation standards, NEA RSA alignment, PDPA integration, ESG grant advisory."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore consulting ↗"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:shadow-[0_25px_40px_-12px_rgba(0,0,0,0.15)]">
              <span className="text-[42px]">{"🏫"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"SS 587 Training"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Foundation awareness, lead implementer, internal auditor, data sanitisation officer, ITAD manager programme, WSQ-aligned modules."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
            {"Regulatory alignment"}
          </span>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"SS 587 within Singapore legal framework"}
          </h2>
        </div>
        <div className="grid [grid-template-columns:repeat(auto-fill,_minmax(240px,1fr))] gap-[16px] m-[30px_0]">
          <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong>{"NEA — Resource Sustainability Act"}</strong>
            <br />
            {"E-waste producer responsibility obligations."}
          </div>
          <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong>{"IMDA — ICT governance"}</strong>
            <br />
            {"Government-linked ICT asset retirement."}
          </div>
          <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong>{"CSA — Cybersecurity Act"}</strong>
            <br />
            {"CII secure decommissioning."}
          </div>
          <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong>{"PDPA — Data Protection"}</strong>
            <br />
            {"Certified data destruction."}
          </div>
          <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong>{"EMA — Energy Market Authority"}</strong>
            <br />
            {"Grid/SCADA ICT decommission."}
          </div>
          <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong>{"MOM — WSH Act"}</strong>
            <br />
            {"Safe handling of hazardous components."}
          </div>
          <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong>{"SCDF — Fire & hazmat"}</strong>
            <br />
            {"Lithium battery / hazmat storage."}
          </div>
          <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong>{"GovTech IM8"}</strong>
            <br />
            {"Public sector ICT retirement."}
          </div>
          <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_6px_rgba(0,0,0,0.03)]">
            <strong>{"ESG — Green Plan 2030"}</strong>
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944] bg-[gray]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center">
          <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
            {"Sector expertise"}
          </span>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"25+ industries across Singapore"}
          </h2>
        </div>
        <div className="text-center">
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Fintech & Payments"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Telecommunications"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Data Centres"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"CII sectors"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Construction"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Marine & Offshore"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Logistics"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Pharmaceutical"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Manufacturing"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Healthcare"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Banking & Finance"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Energy & Utilities"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Aviation"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Retail"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Government"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Insurance"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Hospitality"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Cybersecurity"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Education"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Real Estate"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Waste Mgmt"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Food & Beverage"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Professional Services"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
            {"Media & Entertainment"}
          </span>
          <span className="inline-block [background:#f0f2f5] rounded-[40px] p-[6px_20px] m-[5px] text-[14px] font-medium hover:[background:#AB052D] hover:text-[white]">
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
      className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]"
    >
      <div className="[background:linear-gradient(135deg,_#1a2a3a_0%,_#0f1a24_100%)] rounded-[32px] p-[40px] text-[white] max-[768px]:p-[28px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 items-center">
          <div className="w-full shrink-0 px-3 lg:w-[66.66666666666666%]">
            <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
              {"Fund your SS 587 compliance — up to 70% co-funding"}
            </h3>
            <p className="leading-relaxed mb-4">
              {
                "Enterprise Singapore MASA grant, SkillsFuture WSQ training grants, NEA producer responsibility integration, ESG Business Improvement Fund (BIF). ICFC manages grant application alongside your project."
              }
            </p>
            <SiteLink
              className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
              href="/contact-us.html"
            >
              {"Check MASA grant eligibility ↗"}
            </SiteLink>
          </div>
          <div className="w-full shrink-0 px-3 lg:w-[33.33333333333333%] text-center">
            <SiteImage
              src="/assets/images/favicon.webp"
              alt="grant"
              className="max-w-full h-auto w-[80px] opacity-[0.8]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection5() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="p-6 bg-white shadow-sm">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Head of IT governance"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Licensed financial institution"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  "“ICFC designed our SS 587 programme to satisfy PDPA data destruction and MAS TRM decommissioning. ITAD vendor audit gave us documented assurance.”"
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="p-6 bg-white shadow-sm">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Infrastructure director"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Data centre operator"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"Frequently asked questions — SS 587"}
          </h2>
        </div>
        <div id="ss587faq">
          <AccordionItem
            title={<>{"What is SS 587 and who must comply?"}</>}
            defaultOpen={false}
          >
            {" "}
            {
              "SS 587 is Singapore's national standard for end-of-life ICT management. It applies to any organisation retiring ICT assets, ITAD service providers, recyclers, especially CII operators, MAS-regulated entities, NEA producer responsibility obligations. Provides certified data destruction and ESG reporting evidence."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"How long does SS 587 certification take?"}</>}
            defaultOpen={false}
          >
            {" "}
            {
              "With ICFC, typical programme takes 3–5 months from kickoff to certification-body audit readiness. 98% first-attempt certification rate minimises rework."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Can ICFC help with MASA grant?"}</>}
            defaultOpen={false}
          >
            {" "}
            {
              "Yes, ICFC assesses eligibility, manages documentation, milestone claims, coordinates with certification body. Qualifying SMEs can recover up to 70% of eligible consultation & certification costs."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Do we need SS 587 if we already have ISO 14001?"}</>}
            defaultOpen={false}
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
          >
            {" "}
            {
              "The Personal Data Protection Act requires organisations to protect personal data at disposal. SS 587 provides certified data sanitisation (NIST 800-88) and chain-of-custody documentation fulfilling PDPA's disposal obligations and audit trail requirements."
            }
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}

function ContainerSection3() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pb-[120px] max-[991px]:pb-[100px] max-[767px]:pb-[70px] max-[480px]:pb-[60px]">
      <div className="[background:#1e2a36] text-center p-12">
        <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
          {"Start your SS 587 compliance journey with ICFC"}
        </h3>
        <p className="leading-relaxed mb-4">
          {
            "Whether a handful of laptops or whole data centre — get a practical path to certification backed by 11+ years Singapore expertise."
          }
        </p>
        <div>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
            href="/contact-us.html"
          >
            {"Book a free consultation ↗"}
          </SiteLink>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] text-white ml-4"
            href="/contact-us.html"
          >
            {"Get a quote + grant check ↗"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
