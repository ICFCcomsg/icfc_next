import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogcybersecurityPageContent() {
  return (
    <SitePageTemplate route="blogcybersecurity.html">
      <main>
        <BreadcrumbAreaSection />
        <PostboxAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="Singapore Cybersecurity Act 2024 amendments: what CII operators need to certify now"
      description="Mandatory Cyber Trust Mark Level 5, 2-hour APT reporting & third-party CII obligations – complete compliance roadmap for CIIOs"
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_3rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[58.33333333%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
            <div>
              <div>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] flex gap-[20px] items-center max-[1600px]:flex-wrap">
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <span>
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                          className="[vertical-align:middle] max-w-full w-[40px] h-[40px] rounded-full"
                        />
                      </span>
                      <span>
                        {"By "}
                        <SiteLink
                          href="/contact-us.html"
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent]"
                        >
                          {"ICFC Pte Ltd"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        className="[vertical-align:middle] w-[15px] h-[15px]"
                      >
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335ZM9.66781 3.8335C9.39447 3.8335 9.16781 3.60683 9.16781 3.3335V1.3335C9.16781 1.06016 9.39447 0.833496 9.66781 0.833496C9.94114 0.833496 10.1678 1.06016 10.1678 1.3335V3.3335C10.1678 3.60683 9.94114 3.8335 9.66781 3.8335Z"
                          fill="white"
                          className="[fill:#AB052D]"
                        ></path>
                      </svg>
                      <span>{"April 2026"}</span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        className="[vertical-align:middle] w-[15px] h-[15px]"
                      >
                        <path
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12ZM6 0.799987C8.86799 0.799987 11.2 3.13198 11.2 6C11.2 8.86802 8.86802 11.2 6 11.2C3.13198 11.2 0.799987 8.86802 0.799987 6C0.799987 3.13198 3.13201 0.799987 6 0.799987Z"
                          fill="#616C74"
                          className="[fill:#AB052D]"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                          className="[fill:#AB052D]"
                        ></path>
                      </svg>
                      <span>{"13 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <h3 className="mt-[20px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[30px] max-[1199px]:text-[25px] [word-break:break-word]">
                {
                  "Singapore Cybersecurity Act 2024 amendments: what CII operators need to certify now"
                }
              </h3>
              <div>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Published by ICFC Pte Ltd"}
                  </strong>
                  {" | April 2026 | 13 min read"}
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Categories:"}
                  </strong>
                  {
                    " ISO 27001 · ISO 27032 · Cybersecurity Act · CII · Cyber Trust Mark · Singapore compliance"
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "The Cybersecurity (Amendment) Act 2024 has been in force since 31 October 2025. The Cyber Security Agency of Singapore (CSA) announced mandatory Cyber Trust Mark certification requirements for Critical Information Infrastructure Owners (CIIOs) in March 2026. And parts of the Amendment Act — including the Entities of Special Cybersecurity Interest and Major Foundational Digital Infrastructure frameworks — have not yet commenced, meaning further obligations are still to come."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "For organisations designated as, or supplying services to, Singapore's Critical Information Infrastructure operators, this is the most consequential regulatory period since the original Cybersecurity Act came into force in 2018."
                  }
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#f8fafc] [border-left:4px_solid_#AB052D] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"⏰ Key deadlines at a glance"}
                  </strong>
                  <br />
                  {
                    "\n                                    • CIIOs: Cyber Trust Mark Level 5 by end‑2027"
                  }
                  <br />
                  {
                    "\n                                    • CII approved auditors: CTM Level 5 by end‑2026"
                  }
                  <br />
                  {
                    "\n                                    • Licensed CSPs: CTM Level 3 by end‑2026"
                  }
                  <br />
                  {
                    "\n                                    • Two‑hour incident reporting (APT/supply chain) – already live since Oct 2025.\n                                "
                  }
                </div>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "Background: Singapore's cybersecurity regulatory architecture"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "The original Cybersecurity Act 2018 established Singapore's statutory framework for CII across eleven critical sectors. The 2024 Amendment Act extends coverage to virtual systems, third-party-owned CII (3PO CII) and extraterritorial infrastructure, recognising modern cloud and outsourcing realities."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"What commenced on 31 October 2025: key changes in force"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"1. Virtual computers and systems now designated as CII"}
                  </strong>
                  {
                    " – Cloud-hosted VMs, containers, and software-defined networks can be designated as CII. Your ISO 27001 ISMS scope must be reviewed to include cloud-hosted CII."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"2. New Part 3A: third-party-owned CII (3PO CII)"}
                  </strong>
                  {
                    " – The Commissioner may designate a third‑party system (including overseas) as 3PO CII. The essential service provider becomes responsible for its cybersecurity, requiring binding contracts with providers for information access, standards compliance, and incident reporting."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"3. Extraterritorial designation of PO CII"}
                  </strong>
                  {
                    " – Singapore-incorporated essential service providers cannot avoid CII obligations by hosting systems offshore."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "4. Expanded incident reporting scope – including APTs and supply chain incidents"
                    }
                  </strong>
                  {
                    " – CII owners must now report APT incidents and supply chain incidents within "
                  }
                  <strong className="[font-weight:bolder]">
                    {"two hours"}
                  </strong>
                  {" of becoming aware."}
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"5. Systems of Temporary Cybersecurity Concern (STCCs)"}
                  </strong>
                  {
                    " – Temporary designation for systems supporting national events or emergencies."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"6. Enhanced enforcement powers"}
                  </strong>
                  {
                    " – CSA can order audits, inspections, and entry; non‑compliance is a criminal offence."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "March 2026 announcement: mandatory Cyber Trust Mark certification"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "CSA requires all CIIOs to achieve Cyber Trust Mark (CTM) Level 5 for non-CII systems supporting business operations by "
                  }
                  <strong className="[font-weight:bolder]">{"end‑2027"}</strong>
                  {
                    ". Approved CII auditors must obtain CTM Level 5 by end‑2026, licensed CSPs CTM Level 3 by end‑2026. The CTM 2025 edition (SS 712:2025) now applies. Up to 65% of CTM controls map to ISO/IEC 27001:2022, making ISO 27001 the most efficient foundation."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"What is still pending: ESCI and MFDI frameworks"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Parts 3C (Entities of Special Cybersecurity Interest) and 3D (Major Foundational Digital Infrastructure) have not commenced. Organisations adjacent to CII sectors should monitor CSA announcements."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "The CII compliance map: obligations, standards, and ISO integration"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Existing CII obligations are enhanced: compliance with Code of Practice, regular audits, risk assessments, two‑hour incident reporting, penetration testing, information provision. ISO/IEC 27001:2022 addresses these through Clause 6.1 (risk assessment), Annex A 5.19-5.22 (supply chain), A 5.23 (cloud services), and A 8.8 (vulnerability management). ISO 27032 complements for OT/ICS environments, particularly relevant for energy/water/transport CII operators."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"How ISO 27032 complements for CII operators"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "For CII operators managing OT environments, ISO 27032 provides cybersecurity controls for industrial systems. ICFC implements integrated ISO 27001 + ISO 27032 scopes for CII operators in OT-heavy sectors."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Cyber Trust Mark: Level 5 and the ISO pathway"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Level 5 requires mature governance, advanced threat detection, supply chain security, and privileged access controls. Starting from ISO 27001:2022 reduces the gap to about 35% additional controls. ICFC's integrated approach: conduct joint gap analysis, implement shared controls once, achieve ISO 27001 first (4‑8 months), then complete CTM Level 5 assessment."
                  }
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#f8fafc] [border-left:4px_solid_#AB052D] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Practical action plan for CII operators"}
                  </strong>
                  <br />
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Immediate (now – Q3 2026):"}
                  </strong>
                  {
                    " map virtual/cloud CII, audit contracts for 3PO CII risk, update incident response plan for 2‑hour APT reporting, confirm ISO 27001:2022 transition, start CTM Level 5 gap assessment."
                  }
                  <br />
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Medium-term (Q3 2026 – end 2027):"}
                  </strong>
                  {
                    " implement additional CTM controls, engage CSA-approved auditor, prepare for CSA threat detection tools, monitor ESCI/MFDI commencement.\n                                "
                  }
                </div>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Sector‑specific considerations"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Banking & Finance:"}
                  </strong>
                  {
                    " Dual burden with MAS TRM and Cyber Hygiene Notice – integrate with ISO 27001."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Healthcare:"}
                  </strong>
                  {
                    " Health Information Bill and MOH guidelines; recommended ISO 27001 + ISO 27701."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Energy & Utilities:"}
                  </strong>
                  {
                    " Implement ISO 27001 + ISO 27032 integrated scope with OT Cybersecurity Masterplan."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Transport:"}
                  </strong>
                  {
                    " Overlapping CAAS/MPA/LTA requirements; ISO 27001 as anchor."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Frequently asked questions"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Not designated as CII – should I care?"}
                  </strong>
                  {
                    " Yes – as a supplier you may fall under 3PO CII or future ESCI/MFDI."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Already ISO 27001:2022: how much work for CTM Level 5?"}
                  </strong>
                  {
                    " ~65% already addressed; ICFC gap analysis typically finds 20‑35 specific control gaps."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Two‑hour APT reporting – realistic?"}
                  </strong>
                  {
                    " Yes – initial notification within 2 hours is required; root cause can follow. Requires detection, escalation, pre‑drafted templates."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[1rem] font-semibold leading-[1.33] text-[#0a1e2f] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"The bottom line"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "The Cybersecurity (Amendment) Act 2024 and March 2026 CTM mandates represent the most significant expansion since 2018. CII operators must act now: update incident response, secure 3PO CII contracts, achieve CTM Level 5 by end‑2027 with ISO 27001 as foundation. ICFC supports CII operators, technology vendors, and CSPs through integrated ISO 27001, ISO 27032, and Cyber Trust Mark certification."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"About ICFC Pte Ltd"}
                  </strong>
                  <br />
                  {
                    "ISO certification partner since 2014, providing consultation, third‑party audit, and training across 25 industries. Contact: "
                  }
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                  >
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes and does not constitute legal advice. Verify current requirements at csa.gov.sg."
                    }
                  </em>
                </p>
              </div>
              <div className="mt-[40px] pt-[20px] pb-[20px] items-center justify-between flex gap-[30px] flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                <div className="items-center flex flex-wrap gap-[12px]">
                  <span className="font-semibold [padding-inline-end:10px] text-[#2B3944]">
                    {"Tags:"}
                  </span>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Cybersecurity Act"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"CII"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Cyber Trust Mark"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"ISO 27001"}
                  </SiteLink>
                </div>
                <div>
                  <span className="font-semibold [padding-inline-end:10px] text-[#2B3944]">
                    {"Share:"}
                  </span>
                  <div className="gap-[15px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px]"
                    >
                      <Icon
                        name="facebook"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px]"
                    >
                      <Icon
                        name="x"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px]"
                    >
                      <Icon
                        name="linkedin"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mt-[20px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[30px] max-[1199px]:text-[25px] [word-break:break-word]">
                  {"Leave a Comment"}
                </h3>
                <EmailForm>
                  <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
                    <div className="[flex-shrink:0] w-[50%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <input
                        type="text"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)]"
                      />
                    </div>
                    <div className="[flex-shrink:0] w-[50%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)]"
                      />
                    </div>
                    <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <textarea
                        placeholder="Write Message"
                        defaultValue=""
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [resize:vertical] pt-[14px] pr-[24px] pb-[14px] pl-[24px] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)]"
                      />
                    </div>
                    <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <button
                        type="submit"
                        className="rounded-[50px] mt-[0] mr-[0] mb-[0] ml-[0] text-[17px] leading-[inherit] [text-transform:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] text-[#FFFFFF] [border:none] [background:#AB052D] inline-flex items-center justify-center font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] hover:text-[#FFFFFF]"
                      >
                        {"Post Comment"}
                      </button>
                    </div>
                  </div>
                </EmailForm>
              </div>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
            <div className="sticky max-[991px]:relative top-[110px] max-[991px]:top-[unset]">
              <div className="mb-[30px] pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Search"}
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search..."
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[60px] w-full [border:1px_solid_#ddd] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:50px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [background:#FFFFFF]"
                      />
                      <button
                        type="submit"
                        className="rounded-[0] mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [text-transform:none] text-[#000] [border:none] [background:transparent] absolute top-[50%] [inset-inline-end:25px] [transform:translateY(-50%)] hover:text-[#AB052D]"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          className="[vertical-align:middle]"
                        >
                          <path
                            d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M16.9995 17L13.1328 13.1333"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </EmailForm>
                </div>
              </div>
              <div className="mb-[30px] pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Categories"}
                </h5>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [word-break:break-word]"
                    >
                      {"Cybersecurity Act "}
                      <span>{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [word-break:break-word]"
                    >
                      {"ISO 27001 "}
                      <span>{"(8)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [word-break:break-word]"
                    >
                      {"CII Compliance "}
                      <span>{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [word-break:break-word]"
                    >
                      {"Cyber Trust Mark "}
                      <span>{"(3)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-[12px]">
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"CII"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"CSA"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"ISO 27001:2022"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"Cyber Trust Mark Level 5"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"3PO CII"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"Singapore compliance"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
