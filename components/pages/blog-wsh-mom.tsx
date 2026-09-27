import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogWshMomPageContent() {
  return (
    <SitePageTemplate route="blog_wsh_mom.html">
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
      title="MOM WSH Act and ISO 45001: a practical integration guide for Singapore contractors"
      description="WSH Act obligations mapped to ISO 45001 clauses, SHMS audit requirements, bizSAFE STAR pathway – a practical integration guide for Singapore contractors"
      background="https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
                          className="transition-colors hover:text-[#AB052D]"
                        >
                          {"ICFC Pte Ltd"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <svg width="14" height="16" className="w-[15px] h-[15px]">
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335Z"
                          fill="white"
                          className="[fill:#AB052D]"
                        ></path>
                      </svg>
                      <span>{"April 2026"}</span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <svg width="12" height="12" className="w-[15px] h-[15px]">
                        <path
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12Z"
                          fill="#616C74"
                          className="[fill:#AB052D]"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                          className="[fill:#AB052D]"
                        ></path>
                      </svg>
                      <span>{"12 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="leading-relaxed mb-4">
                  <strong>{"Published by ICFC Pte Ltd"}</strong>
                  {" | April 2026 | 12 min read"}
                  <br />
                  <strong>{"Categories:"}</strong>
                  {
                    " ISO 45001 · WSH Act · Construction · Occupational safety · bizSAFE · Singapore"
                  }
                </p>
                <hr />
                <p className="leading-relaxed mb-4">
                  {
                    "Most Singapore contractors treat the Workplace Safety and Health (WSH) Act and ISO 45001 as two separate compliance obligations — running a WSH programme to satisfy MOM inspectors and a management system to keep their ISO certificate. The result is duplication: two sets of documents, two audit programmes, two training schedules, and two sets of records that never quite align with each other."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "It does not have to work this way — and for contractors looking to win government tenders, satisfy main contractors, and genuinely protect their workers, it should not."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "The WSH Act and ISO 45001 are not competing frameworks. They are deeply complementary — the Act sets Singapore's legal obligations, and ISO 45001 provides the internationally recognised management system structure that makes those obligations systematic, auditable, and continuously improving. For Singapore contractors who build the integration deliberately, one management system satisfies both."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "This guide maps the key WSH Act requirements to ISO 45001 clauses, explains the unique role of bizSAFE in Singapore's safety landscape, identifies the gaps that must be addressed beyond the standard, and gives you a practical roadmap for implementation."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Understanding the two frameworks"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "The WSH Act: performance-based, multi-party accountability"
                    }
                  </strong>
                  {
                    " — The Workplace Safety and Health Act 2006 (as amended, most recently by Act 30 of 2024 with effect from 1 January 2025) places a general duty of care on all stakeholders: employers, employees, occupiers, manufacturers, suppliers, and contractors. Fines up to S$500,000 for companies and personal liability for directors. Key recent developments: increased financial penalties (from 1 June 2024, fines up to S$50,000 for first convictions) and mandatory video surveillance systems for construction sector."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "ISO 45001:2018 — the international OH&S management system standard"
                    }
                  </strong>
                  {
                    " — Follows Annex SL High Level Structure, making it compatible with ISO 9001 and ISO 14001. Singapore has adopted ISO 45001 as SS ISO 45001. Certification by SAC-accredited body provides pathway to bizSAFE STAR."
                  }
                </p>
                <div className="[background:#f0f9f4] [border-left:4px_solid_#2e7d32] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong>{"📌 SHMS audit requirement:"}</strong>
                  {
                    " Construction worksites with contract sum ≥ S$30 million must have formal Safety and Health Management System (SHMS) audit. ISO 45001 certificate from SAC-accredited CB satisfies this legal requirement.\n                                "
                  }
                </div>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "The mandatory SHMS audit requirement: when ISO 45001 becomes effectively obligatory"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "MOM requires SHMS audits for: Construction worksites with contract sum ≥ S$30 million; Shipyards employing ≥200 people; Factories in metalworking, petrochemicals exceeding thresholds. ISO 45001 certification by SAC-accredited CB recognised as meeting SHMS requirements."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "The bizSAFE connection: ISO 45001 as the fast track to bizSAFE STAR"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Companies certified to ISO 45001 by SAC-accredited CB can submit certificate (plus valid Risk Management Implementation Audit Report) to apply for bizSAFE STAR — bypassing Levels 1-4. ISO 45001 simultaneously satisfies international best practice, MOM SHMS audit requirement, and bizSAFE STAR qualification."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "The integration map: WSH Act obligations and ISO 45001 clauses"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Duty to conduct risk assessments → ISO 45001 Clause 6.1:"}
                  </strong>
                  {
                    " WSH (Risk Management) Regulations require risk assessments every 3 years. ISO 45001 HIRA satisfies this requirement. Critical: explicit three-year review cycle and post-incident review trigger must be referenced."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Duty to appoint competent persons → ISO 45001 Clauses 7.1 & 7.2:"
                    }
                  </strong>
                  {
                    " WSHO/WSHC registration requirements must be captured in competence framework."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Duty to investigate accidents → ISO 45001 Clause 10.2:"}
                  </strong>
                  {
                    " MOM incident reporting timelines (immediate for fatal, 10 days for incapacity) are Singapore-specific gaps that must be built into incident management procedure."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Duty for safe work procedures & PTW → ISO 45001 Clause 8.1:"
                    }
                  </strong>
                  {
                    " Permit-to-work systems for work at height (>3m), confined space, hot work, excavation per WSH (Construction) Regulations."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Duty to manage subcontractors → ISO 45001 Clause 8.1.4:"}
                  </strong>
                  {
                    " Tiered contractor pre-qualification system recommended (bizSAFE Level 3 minimum for high-risk)."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Duty for safety training → ISO 45001 Clauses 7.2 & 7.3:"}
                  </strong>
                  {
                    " CSOC mandatory for all construction workers; training matrix must track MOM-mandated courses with expiry dates."
                  }
                </p>
                <div className="[background:#fff5f5] [border-left:4px_solid_#AB052D] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong>
                    {
                      "⚠️ Critical gaps — where ISO 45001 alone is not sufficient:"
                    }
                  </strong>
                  {
                    " MOM incident reporting timelines (immediate/10 days); Mandatory safety appointments (WSHO/WSHC registration); Construction Safety Orientation Course (CSOC); Approved Codes of Practice including SS 679:2021; Mandatory video surveillance system obligations (from June 2024); Psychosocial risks and mental health guidance.\n                                "
                  }
                </div>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "Building one integrated system: ICFC's implementation approach"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Step 1 — Legal register and WSH Act mapping:"}
                  </strong>
                  {
                    " Compile comprehensive legal register listing all applicable WSH Act obligations, subsidiary legislation, and ACOPs."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Step 2 — HIRA that satisfies the WSH RM Regulations:"}
                  </strong>
                  {
                    " Cover routine, non-routine, emergency activities; include contractors/visitors; hierarchy of controls; three-year review cycles."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Step 3 — Incident management that meets MOM reporting requirements:"
                    }
                  </strong>
                  {
                    " Clear classification by MOM category, specific reporting timelines, responsible person for MOM reports, root cause investigation, learning loop."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Step 4 — Contractor management as a competitive differentiator:"
                    }
                  </strong>
                  {
                    " Tiered pre-qualification: Tier 1 (high-risk) bizSAFE Level 3+; Tier 2 (medium-risk) bizSAFE Level 2+; Tier 3 basic induction + CSOC."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Step 5 — Integrating ISO 45001 with ISO 9001 and ISO 14001:"
                    }
                  </strong>
                  {
                    " IMS reduces overhead by ~30-40% with one policy suite, one risk assessment, one audit programme, one management review."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"The bizSAFE STAR pathway after ISO 45001 certification"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Submit ISO 45001 certificate (SAC-accredited) + valid Risk Management Implementation Audit Report to WSH Council via bizSAFE portal."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Penalties, enforcement, and why getting this right matters"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Composition fines: up to S$5,000; Court fines (serious harm): up to S$50,000 per count; Serious cases: fines up to S$500,000 for corporations; Personal liability for directors; Stop-work orders; Work pass revocation. An ISO 45001-certified OHSMS provides defensible due diligence evidence during MOM investigations."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Frequently asked questions"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Is ISO 45001 mandatory for Singapore contractors?"}
                  </strong>
                  {
                    " Not universally — but functionally mandatory for projects ≥S$30 million (SHMS audit requirement), for bizSAFE STAR, and increasingly for major developers' supply chains."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Can we achieve bizSAFE STAR without going through all five levels?"
                    }
                  </strong>
                  {
                    " Yes — ISO 45001 certification provides direct entry to bizSAFE STAR."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"How long does implementation take?"}</strong>
                  {
                    " Typically 4-6 months from gap analysis to certification for small to medium contractors."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Can we integrate with existing ISO 9001/ISO 14001?"}
                  </strong>
                  {
                    " Yes — ICFC strongly recommends integrated management system (IMS)."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"The bottom line"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "The WSH Act sets your legal obligations; ISO 45001 provides the management system to make those obligations systematic and demonstrable. For contractors, ISO 45001 satisfies SHMS audit requirements, provides bizSAFE STAR fast-track, opens tender doors, and creates due diligence trail that matters when incidents occur."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "ICFC offers a complimentary dual-framework gap assessment as part of free initial consultation."
                  }
                </p>
                <hr />
                <p className="leading-relaxed mb-4">
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. We provide ISO consultation, third-party audit, and training across 25 industries. OH&S practice: ISO 45001, integrated management systems (ISO 9001 + ISO 14001 + ISO 45001), WSH Act alignment for construction, manufacturing, marine, and engineering contractors. Contact: "
                  }
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="transition-colors hover:text-[#AB052D]"
                  >
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p className="leading-relaxed mb-4">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. WSH Act obligations, penalty amounts, and bizSAFE requirements subject to change. Refer to official MOM and WSH Council sources."
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
                    {"ISO 45001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"WSH Act"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"bizSAFE"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Construction Safety"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Contractors"}
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
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
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
          <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[41.66666666666667%]">
            <div className="sticky top-[110px] max-[991px]:relative max-[991px]:top-[unset]">
              <div className="relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] p-[30px_30px_38px_30px] rounded-[8px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px] mb-[30px]">
                <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
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
                      <button className="absolute top-[50%] [inset-inline-end:25px] text-[#000] text-[16px] [transform:translateY(-50%)] hover:text-[#AB052D]">
                        <svg width="18" height="18">
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
                <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                  {"Categories"}
                </h5>
                <ul className="list-none pl-[0]">
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"ISO 45001 "}
                      <span className="[float:right]">{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"WSH Act "}
                      <span className="[float:right]">{"(5)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"Construction Safety "}
                      <span className="[float:right]">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"bizSAFE "}
                      <span className="[float:right]">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"Contractors "}
                      <span className="[float:right]">{"(3)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] p-[30px_30px_38px_30px] rounded-[8px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px]">
                <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-[12px]">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"ISO 45001:2018"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"WSH Act"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"bizSAFE STAR"}
                  </SiteLink>
                  <SiteLink
                    href="/services.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"SHMS Audit"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Risk Assessment"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Contractor Safety"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"MOM Compliance"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"SS ISO 45001"}
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
