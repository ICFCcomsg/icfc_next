import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogWshMomPageContent() {
  return (
    <SitePageTemplate route="blog_wsh_mom">
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[58.33333333%] max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div>
              <div>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 flex gap-5 items-center max-[1600px]:flex-wrap">
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <span className="">
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                          className="align-middle max-w-full w-10 h-10 rounded-full"
                        />
                      </span>
                      <span className="">
                        {"By "}
                        <SiteLink
                          href="/contact-us"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"ICFC Pte Ltd"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <svg
                        width="14"
                        height="16"
                        className="align-middle w-3.75 h-3.75"
                      >
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335Z"
                          fill="white"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                      <span className="">{"April 2026"}</span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <svg
                        width="12"
                        height="12"
                        className="align-middle w-3.75 h-3.75"
                      >
                        <path
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12Z"
                          fill="#616C74"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                      <span className="">{"12 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Published by ICFC Pte Ltd"}
                  </strong>
                  {" | April 2026 | 12 min read"}
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Categories:"}
                  </strong>
                  {
                    " ISO 45001 · WSH Act · Construction · Occupational safety · bizSAFE · Singapore"
                  }
                </p>
                <hr className="mt-0 mr-0 mb-0 ml-0 text-inherit [border:none] [border-top:1px_solid] opacity-[1] h-px bg-[#ececec]" />
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Most Singapore contractors treat the Workplace Safety and Health (WSH) Act and ISO 45001 as two separate compliance obligations — running a WSH programme to satisfy MOM inspectors and a management system to keep their ISO certificate. The result is duplication: two sets of documents, two audit programmes, two training schedules, and two sets of records that never quite align with each other."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "It does not have to work this way — and for contractors looking to win government tenders, satisfy main contractors, and genuinely protect their workers, it should not."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "The WSH Act and ISO 45001 are not competing frameworks. They are deeply complementary — the Act sets Singapore's legal obligations, and ISO 45001 provides the internationally recognised management system structure that makes those obligations systematic, auditable, and continuously improving. For Singapore contractors who build the integration deliberately, one management system satisfies both."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "This guide maps the key WSH Act requirements to ISO 45001 clauses, explains the unique role of bizSAFE in Singapore's safety landscape, identifies the gaps that must be addressed beyond the standard, and gives you a practical roadmap for implementation."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Understanding the two frameworks"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {
                      "The WSH Act: performance-based, multi-party accountability"
                    }
                  </strong>
                  {
                    " — The Workplace Safety and Health Act 2006 (as amended, most recently by Act 30 of 2024 with effect from 1 January 2025) places a general duty of care on all stakeholders: employers, employees, occupiers, manufacturers, suppliers, and contractors. Fines up to S$500,000 for companies and personal liability for directors. Key recent developments: increased financial penalties (from 1 June 2024, fines up to S$50,000 for first convictions) and mandatory video surveillance systems for construction sector."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {
                      "ISO 45001:2018 — the international OH&S management system standard"
                    }
                  </strong>
                  {
                    " — Follows Annex SL High Level Structure, making it compatible with ISO 9001 and ISO 14001. Singapore has adopted ISO 45001 as SS ISO 45001. Certification by SAC-accredited body provides pathway to bizSAFE STAR."
                  }
                </p>
                <div className="mt-[1.8rem] mr-0 mb-[1.8rem] ml-0 pt-6 pr-[1.8rem] pb-6 pl-[1.8rem] [background:#f0f9f4] [border-left:4px_solid_#2e7d32] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"📌 SHMS audit requirement:"}
                  </strong>
                  {
                    " Construction worksites with contract sum ≥ S$30 million must have formal Safety and Health Management System (SHMS) audit. ISO 45001 certificate from SAC-accredited CB satisfies this legal requirement.\n                                "
                  }
                </div>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "The mandatory SHMS audit requirement: when ISO 45001 becomes effectively obligatory"
                  }
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "MOM requires SHMS audits for: Construction worksites with contract sum ≥ S$30 million; Shipyards employing ≥200 people; Factories in metalworking, petrochemicals exceeding thresholds. ISO 45001 certification by SAC-accredited CB recognised as meeting SHMS requirements."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "The bizSAFE connection: ISO 45001 as the fast track to bizSAFE STAR"
                  }
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Companies certified to ISO 45001 by SAC-accredited CB can submit certificate (plus valid Risk Management Implementation Audit Report) to apply for bizSAFE STAR — bypassing Levels 1-4. ISO 45001 simultaneously satisfies international best practice, MOM SHMS audit requirement, and bizSAFE STAR qualification."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "The integration map: WSH Act obligations and ISO 45001 clauses"
                  }
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Duty to conduct risk assessments → ISO 45001 Clause 6.1:"}
                  </strong>
                  {
                    " WSH (Risk Management) Regulations require risk assessments every 3 years. ISO 45001 HIRA satisfies this requirement. Critical: explicit three-year review cycle and post-incident review trigger must be referenced."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {
                      "Duty to appoint competent persons → ISO 45001 Clauses 7.1 & 7.2:"
                    }
                  </strong>
                  {
                    " WSHO/WSHC registration requirements must be captured in competence framework."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Duty to investigate accidents → ISO 45001 Clause 10.2:"}
                  </strong>
                  {
                    " MOM incident reporting timelines (immediate for fatal, 10 days for incapacity) are Singapore-specific gaps that must be built into incident management procedure."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {
                      "Duty for safe work procedures & PTW → ISO 45001 Clause 8.1:"
                    }
                  </strong>
                  {
                    " Permit-to-work systems for work at height (>3m), confined space, hot work, excavation per WSH (Construction) Regulations."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Duty to manage subcontractors → ISO 45001 Clause 8.1.4:"}
                  </strong>
                  {
                    " Tiered contractor pre-qualification system recommended (bizSAFE Level 3 minimum for high-risk)."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Duty for safety training → ISO 45001 Clauses 7.2 & 7.3:"}
                  </strong>
                  {
                    " CSOC mandatory for all construction workers; training matrix must track MOM-mandated courses with expiry dates."
                  }
                </p>
                <div className="mt-[1.8rem] mr-0 mb-[1.8rem] ml-0 pt-6 pr-[1.8rem] pb-6 pl-[1.8rem] [background:#fff5f5] [border-left:4px_solid_#AB052D] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {
                      "⚠️ Critical gaps — where ISO 45001 alone is not sufficient:"
                    }
                  </strong>
                  {
                    " MOM incident reporting timelines (immediate/10 days); Mandatory safety appointments (WSHO/WSHC registration); Construction Safety Orientation Course (CSOC); Approved Codes of Practice including SS 679:2021; Mandatory video surveillance system obligations (from June 2024); Psychosocial risks and mental health guidance.\n                                "
                  }
                </div>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "Building one integrated system: ICFC's implementation approach"
                  }
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Step 1 — Legal register and WSH Act mapping:"}
                  </strong>
                  {
                    " Compile comprehensive legal register listing all applicable WSH Act obligations, subsidiary legislation, and ACOPs."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Step 2 — HIRA that satisfies the WSH RM Regulations:"}
                  </strong>
                  {
                    " Cover routine, non-routine, emergency activities; include contractors/visitors; hierarchy of controls; three-year review cycles."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {
                      "Step 3 — Incident management that meets MOM reporting requirements:"
                    }
                  </strong>
                  {
                    " Clear classification by MOM category, specific reporting timelines, responsible person for MOM reports, root cause investigation, learning loop."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {
                      "Step 4 — Contractor management as a competitive differentiator:"
                    }
                  </strong>
                  {
                    " Tiered pre-qualification: Tier 1 (high-risk) bizSAFE Level 3+; Tier 2 (medium-risk) bizSAFE Level 2+; Tier 3 basic induction + CSOC."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {
                      "Step 5 — Integrating ISO 45001 with ISO 9001 and ISO 14001:"
                    }
                  </strong>
                  {
                    " IMS reduces overhead by ~30-40% with one policy suite, one risk assessment, one audit programme, one management review."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"The bizSAFE STAR pathway after ISO 45001 certification"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Submit ISO 45001 certificate (SAC-accredited) + valid Risk Management Implementation Audit Report to WSH Council via bizSAFE portal."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Penalties, enforcement, and why getting this right matters"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Composition fines: up to S$5,000; Court fines (serious harm): up to S$50,000 per count; Serious cases: fines up to S$500,000 for corporations; Personal liability for directors; Stop-work orders; Work pass revocation. An ISO 45001-certified OHSMS provides defensible due diligence evidence during MOM investigations."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Frequently asked questions"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Is ISO 45001 mandatory for Singapore contractors?"}
                  </strong>
                  {
                    " Not universally — but functionally mandatory for projects ≥S$30 million (SHMS audit requirement), for bizSAFE STAR, and increasingly for major developers' supply chains."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {
                      "Can we achieve bizSAFE STAR without going through all five levels?"
                    }
                  </strong>
                  {
                    " Yes — ISO 45001 certification provides direct entry to bizSAFE STAR."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"How long does implementation take?"}
                  </strong>
                  {
                    " Typically 4-6 months from gap analysis to certification for small to medium contractors."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Can we integrate with existing ISO 9001/ISO 14001?"}
                  </strong>
                  {
                    " Yes — ICFC strongly recommends integrated management system (IMS)."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"The bottom line"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "The WSH Act sets your legal obligations; ISO 45001 provides the management system to make those obligations systematic and demonstrable. For contractors, ISO 45001 satisfies SHMS audit requirements, provides bizSAFE STAR fast-track, opens tender doors, and creates due diligence trail that matters when incidents occur."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "ICFC offers a complimentary dual-framework gap assessment as part of free initial consultation."
                  }
                </p>
                <hr className="mt-0 mr-0 mb-0 ml-0 text-inherit [border:none] [border-top:1px_solid] opacity-[1] h-px bg-[#ececec]" />
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"About ICFC Pte Ltd"}
                  </strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. We provide ISO consultation, third-party audit, and training across 25 industries. OH&S practice: ISO 45001, integrated management systems (ISO 9001 + ISO 14001 + ISO 45001), WSH Act alignment for construction, manufacturing, marine, and engineering contractors. Contact: "
                  }
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. WSH Act obligations, penalty amounts, and bizSAFE requirements subject to change. Refer to official MOM and WSH Council sources."
                    }
                  </em>
                </p>
              </div>
              <div className="mt-10 pt-5 pb-5 items-center justify-between flex gap-7.5 flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                <div className="items-center flex flex-wrap gap-3">
                  <span className="font-semibold pe-2.5 text-[#2B3944]">
                    {"Tags:"}
                  </span>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"ISO 45001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"WSH Act"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"bizSAFE"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Construction Safety"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Contractors"}
                  </SiteLink>
                </div>
                <div>
                  <span className="font-semibold pe-2.5 text-[#2B3944]">
                    {"Share:"}
                  </span>
                  <div className="gap-3.75">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Icon
                        name="facebook"
                        className="inline-block not-italic"
                      />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Icon
                        name="x"
                        className="inline-block not-italic"
                      />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Icon
                        name="linkedin"
                        className="inline-block not-italic"
                      />
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {"Leave a Comment"}
                </h3>
                <EmailForm>
                  <div className="flex flex-wrap -mt-6 -mr-6 -ml-6">
                    <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                      <input
                        type="text"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                      <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                      <textarea
                        placeholder="Write Message"
                        defaultValue=""
                        className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] resize-y pt-3.5 pr-6 pb-3.5 pl-6 bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                      <button
                        type="submit"
                        className="rounded-[50px] mt-0 mr-0 mb-0 ml-0 text-[17px] leading-[inherit] normal-case pt-3.5 pr-6.5 pb-3.5 pl-6.5 text-[#FFFFFF] [border:none] [background:#AB052D] inline-flex items-center justify-center font-medium relative z-1 overflow-hidden hover:[background:#2B3944] hover:text-[#FFFFFF] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        {"Post Comment"}
                      </button>
                    </div>
                  </div>
                </EmailForm>
              </div>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[41.66666667%] max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="sticky max-[991px]:relative top-27.5 max-[991px]:top-[unset]">
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {"Search"}
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search..."
                        className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-15 w-full [border:1px_solid_#ddd] rounded-md text-black ps-6.25 pe-12.5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                      <button className="rounded-none mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] normal-case text-black [border:none] [background:transparent] absolute top-[50%] inset-e-6.25 transform-[translateY(-50%)] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                        <svg
                          width="18"
                          height="18"
                          className="align-middle"
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
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {"Categories"}
                </h5>
                <ul className="pl-0! mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 list-none!">
                  <li className="mb-2.5!">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"ISO 45001 "}
                      <span className="float-right!">{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-2.5!">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"WSH Act "}
                      <span className="float-right!">{"(5)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-2.5!">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"Construction Safety "}
                      <span className="float-right!">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-2.5!">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"bizSAFE "}
                      <span className="float-right!">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-2.5!">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"Contractors "}
                      <span className="float-right!">{"(3)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-3">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"ISO 45001:2018"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"WSH Act"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"bizSAFE STAR"}
                  </SiteLink>
                  <SiteLink
                    href="/services"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"SHMS Audit"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Risk Assessment"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Contractor Safety"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"MOM Compliance"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
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
