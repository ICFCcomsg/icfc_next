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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[66.66666666666666%] lg:w-[58.333333333333336%]">
            <div>
              <div>
                <ul className="flex gap-[20px] items-center max-[1600px]:flex-wrap">
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <span>
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                          className="max-w-full h-auto w-[40px] h-[40px] rounded-full"
                        />
                      </span>
                      <span>
                        {"By "}
                        <SiteLink
                          href="/contact-us.html"
                          className="transition-colors hover:text-[#AB052D] hover:text-[#AB052D]"
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
                        className="w-[15px] h-[15px]"
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
                        className="w-[15px] h-[15px]"
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
              <h3 className="text-[30px] mt-[20px] mb-[20px] max-[1199px]:text-[25px] font-bold">
                {
                  "Singapore Cybersecurity Act 2024 amendments: what CII operators need to certify now"
                }
              </h3>
              <div>
                <p className="leading-relaxed mb-4">
                  <strong>{"Published by ICFC Pte Ltd"}</strong>
                  {" | April 2026 | 13 min read"}
                  <br />
                  <strong>{"Categories:"}</strong>
                  {
                    " ISO 27001 · ISO 27032 · Cybersecurity Act · CII · Cyber Trust Mark · Singapore compliance"
                  }
                </p>
                <hr className="m-[2rem_0]" />
                <p className="leading-relaxed mb-4">
                  {
                    "The Cybersecurity (Amendment) Act 2024 has been in force since 31 October 2025. The Cyber Security Agency of Singapore (CSA) announced mandatory Cyber Trust Mark certification requirements for Critical Information Infrastructure Owners (CIIOs) in March 2026. And parts of the Amendment Act — including the Entities of Special Cybersecurity Interest and Major Foundational Digital Infrastructure frameworks — have not yet commenced, meaning further obligations are still to come."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "For organisations designated as, or supplying services to, Singapore's Critical Information Infrastructure operators, this is the most consequential regulatory period since the original Cybersecurity Act came into force in 2018."
                  }
                </p>
                <div className="[background:#f8fafc] [border-left:4px_solid_#AB052D] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong className="text-[#AB052D]">
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
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {
                    "Background: Singapore's cybersecurity regulatory architecture"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "The original Cybersecurity Act 2018 established Singapore's statutory framework for CII across eleven critical sectors. The 2024 Amendment Act extends coverage to virtual systems, third-party-owned CII (3PO CII) and extraterritorial infrastructure, recognising modern cloud and outsourcing realities."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {"What commenced on 31 October 2025: key changes in force"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"1. Virtual computers and systems now designated as CII"}
                  </strong>
                  {
                    " – Cloud-hosted VMs, containers, and software-defined networks can be designated as CII. Your ISO 27001 ISMS scope must be reviewed to include cloud-hosted CII."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"2. New Part 3A: third-party-owned CII (3PO CII)"}
                  </strong>
                  {
                    " – The Commissioner may designate a third‑party system (including overseas) as 3PO CII. The essential service provider becomes responsible for its cybersecurity, requiring binding contracts with providers for information access, standards compliance, and incident reporting."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"3. Extraterritorial designation of PO CII"}</strong>
                  {
                    " – Singapore-incorporated essential service providers cannot avoid CII obligations by hosting systems offshore."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "4. Expanded incident reporting scope – including APTs and supply chain incidents"
                    }
                  </strong>
                  {
                    " – CII owners must now report APT incidents and supply chain incidents within "
                  }
                  <strong>{"two hours"}</strong>
                  {" of becoming aware."}
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"5. Systems of Temporary Cybersecurity Concern (STCCs)"}
                  </strong>
                  {
                    " – Temporary designation for systems supporting national events or emergencies."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"6. Enhanced enforcement powers"}</strong>
                  {
                    " – CSA can order audits, inspections, and entry; non‑compliance is a criminal offence."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {
                    "March 2026 announcement: mandatory Cyber Trust Mark certification"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "CSA requires all CIIOs to achieve Cyber Trust Mark (CTM) Level 5 for non-CII systems supporting business operations by "
                  }
                  <strong>{"end‑2027"}</strong>
                  {
                    ". Approved CII auditors must obtain CTM Level 5 by end‑2026, licensed CSPs CTM Level 3 by end‑2026. The CTM 2025 edition (SS 712:2025) now applies. Up to 65% of CTM controls map to ISO/IEC 27001:2022, making ISO 27001 the most efficient foundation."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {"What is still pending: ESCI and MFDI frameworks"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Parts 3C (Entities of Special Cybersecurity Interest) and 3D (Major Foundational Digital Infrastructure) have not commenced. Organisations adjacent to CII sectors should monitor CSA announcements."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {
                    "The CII compliance map: obligations, standards, and ISO integration"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Existing CII obligations are enhanced: compliance with Code of Practice, regular audits, risk assessments, two‑hour incident reporting, penetration testing, information provision. ISO/IEC 27001:2022 addresses these through Clause 6.1 (risk assessment), Annex A 5.19-5.22 (supply chain), A 5.23 (cloud services), and A 8.8 (vulnerability management). ISO 27032 complements for OT/ICS environments, particularly relevant for energy/water/transport CII operators."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {"How ISO 27032 complements for CII operators"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "For CII operators managing OT environments, ISO 27032 provides cybersecurity controls for industrial systems. ICFC implements integrated ISO 27001 + ISO 27032 scopes for CII operators in OT-heavy sectors."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {"Cyber Trust Mark: Level 5 and the ISO pathway"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Level 5 requires mature governance, advanced threat detection, supply chain security, and privileged access controls. Starting from ISO 27001:2022 reduces the gap to about 35% additional controls. ICFC's integrated approach: conduct joint gap analysis, implement shared controls once, achieve ISO 27001 first (4‑8 months), then complete CTM Level 5 assessment."
                  }
                </p>
                <div className="[background:#f8fafc] [border-left:4px_solid_#AB052D] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong className="text-[#AB052D]">
                    {"Practical action plan for CII operators"}
                  </strong>
                  <br />
                  <strong className="text-[#AB052D]">
                    {"Immediate (now – Q3 2026):"}
                  </strong>
                  {
                    " map virtual/cloud CII, audit contracts for 3PO CII risk, update incident response plan for 2‑hour APT reporting, confirm ISO 27001:2022 transition, start CTM Level 5 gap assessment."
                  }
                  <br />
                  <strong className="text-[#AB052D]">
                    {"Medium-term (Q3 2026 – end 2027):"}
                  </strong>
                  {
                    " implement additional CTM controls, engage CSA-approved auditor, prepare for CSA threat detection tools, monitor ESCI/MFDI commencement.\n                                "
                  }
                </div>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {"Sector‑specific considerations"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>{"Banking & Finance:"}</strong>
                  {
                    " Dual burden with MAS TRM and Cyber Hygiene Notice – integrate with ISO 27001."
                  }
                  <br />
                  <strong>{"Healthcare:"}</strong>
                  {
                    " Health Information Bill and MOH guidelines; recommended ISO 27001 + ISO 27701."
                  }
                  <br />
                  <strong>{"Energy & Utilities:"}</strong>
                  {
                    " Implement ISO 27001 + ISO 27032 integrated scope with OT Cybersecurity Masterplan."
                  }
                  <br />
                  <strong>{"Transport:"}</strong>
                  {
                    " Overlapping CAAS/MPA/LTA requirements; ISO 27001 as anchor."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {"Frequently asked questions"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>{"Not designated as CII – should I care?"}</strong>
                  {
                    " Yes – as a supplier you may fall under 3PO CII or future ESCI/MFDI."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Already ISO 27001:2022: how much work for CTM Level 5?"}
                  </strong>
                  {
                    " ~65% already addressed; ICFC gap analysis typically finds 20‑35 specific control gaps."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Two‑hour APT reporting – realistic?"}</strong>
                  {
                    " Yes – initial notification within 2 hours is required; root cause can follow. Requires detection, escalation, pre‑drafted templates."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[1rem] font-semibold text-[#0a1e2f]">
                  {"The bottom line"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "The Cybersecurity (Amendment) Act 2024 and March 2026 CTM mandates represent the most significant expansion since 2018. CII operators must act now: update incident response, secure 3PO CII contracts, achieve CTM Level 5 by end‑2027 with ISO 27001 as foundation. ICFC supports CII operators, technology vendors, and CSPs through integrated ISO 27001, ISO 27032, and Cyber Trust Mark certification."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "ISO certification partner since 2014, providing consultation, third‑party audit, and training across 25 industries. Contact: "
                  }
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="transition-colors hover:text-[#AB052D]"
                  >
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <hr className="m-[2rem_0]" />
                <p className="leading-relaxed mb-4">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes and does not constitute legal advice. Verify current requirements at csa.gov.sg."
                    }
                  </em>
                </p>
              </div>
              <div className="items-center justify-between flex gap-[30px] flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1] pt-[20px] pb-[20px] mt-[40px]">
                <div className="items-center flex flex-wrap gap-[12px]">
                  <span className="font-semibold [padding-inline-end:10px] text-[#2B3944]">
                    {"Tags:"}
                  </span>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Cybersecurity Act"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"CII"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Cyber Trust Mark"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
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
                      className="transition-colors hover:text-[#AB052D] text-[#616C74] text-[16px]"
                    >
                      <Icon name="facebook" />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#616C74] text-[16px]"
                    >
                      <Icon name="x" />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#616C74] text-[16px]"
                    >
                      <Icon name="linkedin" />
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[30px] mt-[20px] mb-[20px] max-[1199px]:text-[25px] font-bold">
                  {"Leave a Comment"}
                </h3>
                <EmailForm>
                  <div className="-mx-3 flex flex-wrap gap-y-6">
                    <div className="w-full shrink-0 px-3 xl:w-[50%]">
                      <input
                        type="text"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D]"
                      />
                    </div>
                    <div className="w-full shrink-0 px-3 xl:w-[50%]">
                      <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D]"
                      />
                    </div>
                    <div className="w-full shrink-0 px-3 xl:w-[100%]">
                      <textarea
                        placeholder="Write Message"
                        defaultValue=""
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D]"
                      />
                    </div>
                    <div className="w-full shrink-0 px-3 xl:w-[100%]">
                      <button
                        type="submit"
                        className="text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#AB052D] hover:[background:#2B3944] hover:text-[#FFFFFF]"
                      >
                        {"Post Comment"}
                      </button>
                    </div>
                  </div>
                </EmailForm>
              </div>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%]">
            <div className="sticky top-[110px] max-[991px]:relative max-[991px]:top-[unset]">
              <div className="relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] p-[30px_30px_38px_30px] rounded-[8px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px] mb-[30px]">
                <h5 className="mb-[30px] relative text-[22px] pb-[12px] before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D] font-bold">
                  {"Search"}
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search..."
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D] [padding-inline-end:50px] [background:#FFFFFF] [border:1px_solid_#ddd] h-[60px]"
                      />
                      <button
                        type="submit"
                        className="absolute top-[50%] [inset-inline-end:25px] text-[#000] text-[16px] [transform:translateY(-50%)] hover:text-[#AB052D]"
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18">
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
              <div className="relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] p-[30px_30px_38px_30px] rounded-[8px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px] mb-[30px]">
                <h5 className="mb-[30px] relative text-[22px] pb-[12px] before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D] font-bold">
                  {"Categories"}
                </h5>
                <ul>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] [word-break:break-word]"
                    >
                      {"Cybersecurity Act "}
                      <span>{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] [word-break:break-word]"
                    >
                      {"ISO 27001 "}
                      <span>{"(8)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] [word-break:break-word]"
                    >
                      {"CII Compliance "}
                      <span>{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] [word-break:break-word]"
                    >
                      {"Cyber Trust Mark "}
                      <span>{"(3)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] p-[30px_30px_38px_30px] rounded-[8px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px]">
                <h5 className="mb-[30px] relative text-[22px] pb-[12px] before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D] font-bold">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-[12px]">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"CII"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"CSA"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"ISO 27001:2022"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"Cyber Trust Mark Level 5"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
                  >
                    {"3PO CII"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D] [word-break:break-word]"
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
