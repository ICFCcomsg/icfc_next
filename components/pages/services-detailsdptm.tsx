import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

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
    <section className="relative z-[1] [overflow-x:clip] [background:#0a3142]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 min-h-[70vh] items-center">
          <div className="w-full shrink-0 px-3 xl:w-[66.66666666666666%]">
            <div className="relative z-[1] pt-[110px] [padding-inline-start:200px] pb-[330px] max-[1600px]:[padding-inline-start:100px] max-[1600px]:pb-[295px] max-[1199px]:[padding-inline-start:15px] max-[1199px]:[padding-inline-end:15px] max-[1199px]:pb-[110px] max-[991px]:pt-[95px] max-[991px]:pb-[100px] max-[767px]:pt-[75px] max-[767px]:pb-[80px]">
              <span className="text-[14px] font-medium tracking-[2.4px] uppercase text-[#6ab0de] mb-[15px] inline-block">
                {"SS 714:2025 · Data Protection Trustmark · PDPA · Singapore"}
              </span>
              <h1 className="font-bold leading-tight text-[#2B3944] text-4xl md:text-6xl text-[#FFFFFF] font-medium leading-[1.12]">
                {"Data Protection Trustmark —"}
                <br className="max-[480px]:hidden" />
                {"SS 714:2025 certified, PDPA aligned, grant-funded"}
              </h1>
              <p className="leading-relaxed text-[rgba(255,_255,_255,_0.8)] font-medium tracking-[0.02em] max-w-[580px] mb-[40px] max-[575px]:max-w-full">
                {
                  "DPTM certification demonstrates accountable personal data handling. EDG/MASA grant up to 50% | PDPC Active Enforcement mitigating factor | DPO registration mandatory from June 2025."
                }
              </p>
              <div>
                <SiteLink
                  className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF] gap-[8px]"
                  href="/contact-us.html"
                >
                  {"Free DPTM assessment →"}
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] max-[991px]:pt-[100px] max-[767px]:pt-[70px] max-[480px]:pt-[60px]">
      <div className="flex flex-wrap gap-[20px] justify-center m-[40px_0]">
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#0b5e7e] leading-[1] mb-[5px]">
            {"SS 714"}
          </div>
          <div>{":2025 — national standard"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#0b5e7e] leading-[1] mb-[5px]">
            {"3 yr"}
          </div>
          <div>{"Certificate + surveillance"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#0b5e7e] leading-[1] mb-[5px]">
            {"50%"}
          </div>
          <div>{"EDG grant co-funding"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#0b5e7e] leading-[1] mb-[5px]">
            {"7"}
          </div>
          <div>{"IMDA-appointed CBs"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[110px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[38px] font-extrabold text-[#0b5e7e] leading-[1] mb-[5px]">
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
      <div className="[background:#e8f4f8] mb-4 rounded-md border p-4 border-blue-200 bg-blue-50 text-blue-900 border-0 p-6">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 lg:w-[100%]">
            <h4 className="font-bold leading-tight text-[#2B3944] text-2xl text-slate-900">
              {"🛡️ Why DPTM matters more than ever in 2026"}
            </h4>
            <div className="-mx-3 flex flex-wrap gap-y-6">
              <div className="w-full shrink-0 px-3 md:w-[50%]">
                <strong>{"PDPC Active Enforcement"}</strong>
                {
                  " — DPTM certification serves as a mitigating factor under PDPC's Active Enforcement Framework — reducing penalty exposure in data breach investigations."
                }
              </div>
              <div className="w-full shrink-0 px-3 md:w-[50%]">
                <strong>{"DPO Registration"}</strong>
                {
                  " — DPO registration with PDPC is now a legal requirement (effective 1 June 2025) — DPTM structures the governance around your DPO."
                }
              </div>
              <div className="w-full shrink-0 px-3 md:w-[50%]">
                <strong>{"Procurement"}</strong>
                {
                  " — Government agencies and enterprise clients increasingly require DPTM as vendor qualification."
                }
              </div>
              <div className="w-full shrink-0 px-3 md:w-[50%]">
                <strong>{"Digital Economy"}</strong>
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center">
          <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
            {"SS 714:2025 DPTM"}
          </span>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {
              "What is the Data Protection Trustmark? Singapore's official data protection certification"
            }
          </h2>
        </div>
        <p className="leading-relaxed mb-4">
          {
            "The DPTM is a voluntary, enterprise-wide certification that assesses an organisation's data protection maturity through a structured governance audit against the PDPA's requirements. Jointly developed by PDPC and IMDA, it was elevated to Singapore Standard SS 714:2025 in 2025 — reinforcing its national recognition and linking it to SAC's accreditation framework."
          }
        </p>
        <p className="leading-relaxed mb-4">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center">
          <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
            {"DPTM services"}
          </span>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"Audit · Consultation · Training"}
          </h2>
          <p className="leading-relaxed mb-4">
            {"EDG eligible | SAC accreditation | SS 714:2025 aligned"}
          </p>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"🔍"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"DPTM Audit"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Gap analysis · Stage 1/Stage 2 readiness · Annual surveillance · Data intermediary PDPA audit."
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
              <span className="text-[42px]">{"📋"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"DPTM Consultation"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Full SS 714 implementation · DPO appointment · Breach management · Data inventory ROPA · APEC CBPR/PRP."
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
                {"DPTM Training"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "DPO practitioner · PDPA implementation · Internal auditor · Staff awareness · Breach tabletop."
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

function SectionSpaceSection3() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"SS 714:2025 certification domains — four pillars ICFC implements"}
          </h2>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[25%]">
            <div className="[background:#f0f8fc] rounded-[20px] p-[22px] h-full [border-bottom:3px_solid_#0b5e7e] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <div className="text-[40px]">{"🏛️"}</div>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"Clause 6 — Governance & transparency"}
              </h5>
              <p className="leading-relaxed mb-4">
                {
                  "DPO appointment and registration, data protection policies, compliance monitoring, stakeholder communication, query and complaint handling, and breach management plan."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[25%]">
            <div className="[background:#f0f8fc] rounded-[20px] p-[22px] h-full [border-bottom:3px_solid_#0b5e7e] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <div className="text-[40px]">{"📋"}</div>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"Clause 7 — Management of personal data"}
              </h5>
              <p className="leading-relaxed mb-4">
                {
                  "Consent management, purpose limitation, data collection notification, use and disclosure controls, and cross-border transfer management."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[25%]">
            <div className="[background:#f0f8fc] rounded-[20px] p-[22px] h-full [border-bottom:3px_solid_#0b5e7e] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <div className="text-[40px]">{"🔒"}</div>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"Clause 8 — Care of personal data"}
              </h5>
              <p className="leading-relaxed mb-4">
                {
                  "Data security arrangements, accuracy and completeness controls, retention schedules, secure disposal, and third-party data intermediary management."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[25%]">
            <div className="[background:#f0f8fc] rounded-[20px] p-[22px] h-full [border-bottom:3px_solid_#0b5e7e] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <div className="text-[40px]">{"⚖️"}</div>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"Clause 9 — Safeguarding individuals' rights"}
              </h5>
              <p className="leading-relaxed mb-4">
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="border-0 shadow-sm overflow-hidden">
        <div className="bg-white border-0">
          <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
            {
              "DPTM (SS 714:2025) vs ISO 27701 vs PDPA — complete privacy governance picture"
            }
          </h3>
        </div>
        <div>
          <div className="w-full overflow-x-auto">
            <table className="[border:1px_solid_#DBDEE1] max-[991px]:w-[900px] w-full border-collapse text-left [&_th]:border-b [&_th]:border-slate-300 [&_th]:bg-slate-50 [&_th]:p-3 [&_td]:border-b [&_td]:border-slate-200 [&_td]:p-3 [&_td]:border [&_th]:border">
              <thead>
                <tr>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8] text-[#0b5e7e]">
                    {"Dimension"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8] text-[#0b5e7e]">
                    {"DPTM SS 714:2025"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8] text-[#0b5e7e]">
                    {"ISO/IEC 27701:2025"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8] text-[#0b5e7e]">
                    {"PDPA (mandatory)"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Authority"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"IMDA / PDPC — Singapore national"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"ISO — International"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"PDPC — Singapore law"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Nature"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Voluntary certification (national mark)"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Voluntary certification (international)"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Mandatory legal obligation"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Scope"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Enterprise-wide data protection practices"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Privacy Information Management System"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"All personal data handling"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"SAC accreditation"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ SS 714:2025 from July 2025"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ ISO 17021-1 accredited CBs"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"N/A — regulator enforced"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"PDPC enforcement benefit"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Active enforcement mitigating factor"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"≈ Supports accountability demonstration"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"N/A — mandatory minimum"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"EDG grant eligible"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Consultation co-funded up to 50%"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Consultation co-funded up to 50%"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            <strong>{"ICFC recommendation:"}</strong>
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
      className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]"
    >
      <div className="[background:linear-gradient(135deg,_#0a2e4a_0%,_#051c2c_100%)] rounded-[32px] p-[40px] text-[white] max-[768px]:p-[28px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 items-center">
          <div className="w-full shrink-0 px-3 lg:w-[66.66666666666666%]">
            <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
              {
                "50% EDG / MASA grant co-funding — up to 50% of DPTM consultation costs"
              }
            </h3>
            <p className="leading-relaxed mb-4">
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying SS 714:2025 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. DPTM + ISO 27701 integrated projects qualify for EDG co-funding on both standards through a single application."
              }
            </p>
            <SiteLink
              className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
              href="/contact-us.html"
            >
              {"Check EDG eligibility →"}
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

function SectionSpaceSection4() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"ICFC's DPTM process — data inventory to SS 714:2025 certificate"}
          </h2>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6 text-center">
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"01"}</div>
              <p className="leading-relaxed mb-4">{"Free briefing"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"02"}</div>
              <p className="leading-relaxed mb-4">{"Data inventory"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"03"}</div>
              <p className="leading-relaxed mb-4">{"SS 714 gap analysis"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"04"}</div>
              <p className="leading-relaxed mb-4">{"Grant application"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"05"}</div>
              <p className="leading-relaxed mb-4">{"Pre-cert audit"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"06"}</div>
              <p className="leading-relaxed mb-4">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#0b5e7e]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Data Protection Officer"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"E-commerce platform, Singapore"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  '"ICFC helped us achieve DPTM certification in under four months — starting from a position where we had a DPO appointment letter but very little else. Their data inventory workshop revealed personal data processing activities across three departments that we had not previously documented. The EDG grant covered 50% of the consultation cost. First-attempt success."'
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#0b5e7e]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"CTO"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Healthcare technology provider, Singapore"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  '"We needed both DPTM and ISO 27701 to qualify for a government tender that required Singapore national certification and international privacy management credentials. ICFC\'s integrated approach — one data inventory, one policy framework, one EDG grant application — saved us significant time and cost versus pursuing them separately."'
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[100%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#0b5e7e]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"General Manager"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Logistics service provider, Singapore"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
      <div className="[background:linear-gradient(135deg,_#1a2a3a,_#0f1a24)] bg-slate-900 text-white p-12 text-center">
        <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
          {
            "新加坡SS 714:2025数据保护信任标志（DPTM）认证 · ICFC Pte Ltd（2014年创立）"
          }
        </h3>
        <p className="leading-relaxed mb-4">
          {
            "ICFC提供新加坡SS 714:2025数据保护信任标志全程认证服务，包括数据保护差距分析、个人数据清单建立、数据保护官（DPO）任命支持、隐私政策制定、数据泄露应急计划及员工培训，涵盖金融、医疗、物流、零售等35大行业。与PDPA及ISO 27701完全对齐。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务。"
          }
        </p>
        <p className="leading-relaxed mb-4">
          <strong>{"关键词："}</strong>
          {
            "数据保护信任标志 · SS 714 2025 · DPTM认证 · PDPA合规 · 个人数据保护官 · DPO注册 · EDG补助金 · 最佳DPTM顾问 · 实惠数据保护认证 · APEC CBPR新加坡"
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

function ContainerSection6() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-center">
        {"Related services"}
      </h3>
      <div className="-mx-3 flex flex-wrap gap-y-6">
        <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
          <div className="text-center p-4 border border-slate-200 h-full">
            <span className="bg-[#2B3944] [background:#0b5e7e] bg-[#AB052D]">
              {"🛡️"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"ISO 27701"}
            </h5>
            <p className="leading-relaxed mb-4">
              {"International partner to DPTM · 30–40% saving when combined"}
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
          <div className="text-center p-4 border border-slate-200 h-full">
            <span className="bg-[#2B3944] [background:#0b5e7e] bg-[#AB052D]">
              {"🔒"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"ISO 27001"}
            </h5>
            <p className="leading-relaxed mb-4">
              {"Data security arrangements required by SS 714:2025 Clause 8"}
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
          <div className="text-center p-4 border border-slate-200 h-full">
            <span className="bg-[#2B3944] [background:#0b5e7e] bg-[#AB052D]">
              {"🤖"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="leading-relaxed mb-4">
              {"AI + personal data governance — comprehensive privacy posture"}
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
          <div className="text-center p-4 border border-slate-200 h-full">
            <span className="bg-[#2B3944] [background:#0b5e7e] bg-[#AB052D]">
              {"♻️"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"ISO 22301 BCM"}
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "Data resilience and recovery — personal data protection in incidents"
              }
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
          <div className="text-center p-4 border border-slate-200 h-full">
            <span className="bg-[#2B3944] [background:#0b5e7e] bg-[#AB052D]">
              {"🌐"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"APEC CBPR/PRP"}
            </h5>
            <p className="leading-relaxed mb-4">
              {"Cross-border data transfer certification pathway"}
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
          <div className="text-center p-4 border border-slate-200 h-full">
            <span className="bg-[#2B3944] [background:#0b5e7e] bg-[#AB052D]">
              {"📋"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"PDPA Compliance"}
            </h5>
            <p className="leading-relaxed mb-4">
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
    <div className="m-[50px_0_30px] p-[25px_20px] [background:#f0f4f8] rounded-[20px] text-center">
      <div className="text-[2rem] font-bold text-[#0b5e7e] inline-block mb-[15px] tracking-[1px]">
        {"🔍 Related searches & keywords"}
      </div>
      <div className="text-[1.9rem] text-[#2c3e50] leading-[1.8] [word-break:break-word]">
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"DPTM Singapore 2026"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"SS 714:2025"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"data protection trustmark"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"PDPA certification SG"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"best DPTM consultant SG"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"affordable DPTM"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"budget PDPA consultant"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"top data protection firm"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"EDG grant DPTM"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"MASA grant data protection"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"SkillsFuture PDPA"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"ESG grant DPTM"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"新加坡数据保护信任标志"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"DPTM认证新加坡"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"SS 714 2025"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"PDPA合规顾问"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.2rem] text-[#1a2a3a] hover:[background:#0b5e7e] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"个人数据保护"}
        </span>
      </div>
    </div>
  );
}

function SectionSpaceSection6() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="text-[2.2rem] font-extrabold mb-[2rem] text-[#0a2e4a] max-[768px]:text-[1.7rem]">
            {"Frequently asked questions — DPTM SS 714:2025"}
          </h2>
        </div>
        <div id="dptmFaq">
          <AccordionItem
            title={<>{"What changed when DPTM became SS 714:2025?"}</>}
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "In 2025, the DPTM was incorporated into Singapore Standards as SS 714:2025, elevating its national recognition. The SAC launched a new accreditation programme from 7 July 2025, ensuring certification bodies meet ISO/IEC 17021-1 standards. The certification experience was streamlined — organisations now work with one certification body throughout their journey. Annual surveillance audits were formalised as a requirement. Organisations previously certified under the non-SS DPTM should contact ICFC to understand the transition requirements."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Is DPTM mandatory? Does my organisation need it?"}</>}
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
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
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "Typical ICFC consultation fees for a Singapore SME range from S$8,000–S$25,000 from gap analysis through pre-certification readiness. Certification body audit fees are separate, typically S$3,000–S$8,000 for Stage 1 and Stage 2 combined. The EDG/MASA grant covers up to 50% of qualifying consultation fees for eligible Singapore SMEs — significantly reducing the net cost. For integrated DPTM + ISO 27701 projects, the combined cost is 30–40% less than two separate projects, with the same EDG co-funding available. Contact ICFC for a project-specific estimate."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Should we pursue DPTM or ISO 27701 — or both?"}</>}
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
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
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "As of 1 June 2025, DPO registration with PDPC is a mandatory legal requirement for all organisations in Singapore. SS 714:2025 DPTM certification requires DPO appointment documentation, defined responsibilities, and operational effectiveness as a core governance requirement (Clause 6). Achieving DPTM ensures your DPO framework meets PDPC expectations and provides documented evidence of responsible data protection governance — which can potentially serve as a mitigating factor under PDPC's Active Enforcement Framework. ICFC includes DPO role design and registration support within all DPTM consulting packages."
            }
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}

function ContainerSection7() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pb-[120px] max-[991px]:pb-[100px] max-[767px]:pb-[70px] max-[480px]:pb-[60px]">
      <div className="[background:#0a3142] text-center p-12">
        <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
          {"Start your DPTM SS 714:2025 journey today"}
        </h3>
        <p className="leading-relaxed mb-4">
          {
            "Free 30-minute data protection assessment. Honest gap analysis against SS 714:2025. EDG grant eligibility check. No obligation."
          }
        </p>
        <div>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
            href="/contact-us.html"
          >
            {"Book free DPTM assessment →"}
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
