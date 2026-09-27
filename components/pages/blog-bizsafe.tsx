import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogBizsafePageContent() {
  return (
    <SitePageTemplate route="blog_bizsafe.html">
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
      title="WSH Act, CoP, bizSAFE and ISO 45001: a practical integration guide for Singapore companies across all industries"
      description="Four-layer workplace safety framework: legal foundation, approved codes, capability programme, international OHSMS standard"
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
                      <span>{"13 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="leading-relaxed mb-4">
                  <strong>{"Published by ICFC Pte Ltd"}</strong>
                  {" | April 2026 | 13 min read"}
                  <br />
                  <strong>{"Categories:"}</strong>
                  {
                    " ISO 45001 · WSH Act · bizSAFE · Codes of Practice · Occupational safety · Singapore · All industries"
                  }
                </p>
                <hr />
                <p className="leading-relaxed mb-4">
                  {
                    "If you run a company in Singapore — any company, in any industry — you are subject to the Workplace Safety and Health Act. Not just construction firms. Not just factories. Every employer, every occupier, every principal across every sector bears duties under the WSHA and its subsidiary legislation."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "Most business leaders are aware of this in principle. Far fewer have sat down and mapped exactly how Singapore's four-layer workplace safety framework — the WSH Act, the Approved Codes of Practice (ACOPs), the bizSAFE programme, and ISO 45001 — fits together and what it means for their specific operations."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "This article is that map. It is written for Singapore employers across all industries — manufacturing, healthcare, logistics, retail, professional services, F&B, hospitality, and beyond — who want to understand the full framework, where the layers overlap, and how to build one coherent safety management system rather than managing each element in isolation."
                  }
                </p>
                <div className="[background:#fff8e7] [border-left:4px_solid_#d32f2f] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong>{"📌 Key insight:"}</strong>
                  {" The WSH Act applies to "}
                  <strong>{"ALL"}</strong>
                  {
                    " Singapore workplaces — offices, restaurants, retail, healthcare, manufacturing, logistics. Director personal liability (Section 48) means senior management cannot delegate safety responsibility. Integration of ACOPs + bizSAFE + ISO 45001 is the most efficient compliance path.\n                                "
                  }
                </div>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "Layer 1 — The WSH Act: the legal foundation for every Singapore workplace"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "The Workplace Safety and Health Act 2006, as amended most recently by Act 30 of 2024 (effective 1 January 2025), is Singapore's primary workplace safety legislation. It covers employers, employees, supervisors, contractors, occupiers, and visitors. Key obligations applicable to all employers: risk assessment (WSH RM Regulations), incident reporting (notifiable accidents to MOM), safe plant and systems of work, information/training/supervision, and "
                  }
                  <strong>
                    {
                      "personal liability for company directors under Section 48(1)"
                    }
                  </strong>
                  {"."}
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Penalty escalation:"}</strong>
                  {
                    " As of 1 June 2024, maximum fines for safety breaches increased from S$20,000 to S$50,000 for first convictions. Corporate fines can reach S$500,000, with personal imprisonment for gross negligence."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "Layer 2 — The Approved Codes of Practice: translating the Act"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "WSH Council publishes 102+ ACOPs (as of January 2025). They are not legislation but carry significant legal weight — if an accident occurs, the relevant ACOP becomes the benchmark. Key cross-industry ACOPs: WSH Risk Management (2021), Chief Executives' and Board of Directors' WSH Duties (2022), Working Safely at Heights (2013), Safe Lifting Operations (2014)."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "Layer 3 — bizSAFE: Singapore's progressive capability-building programme"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Five-level programme: Level 1 (CEO commitment), Level 2 (Risk Management Champion), Level 3 (RM Implementation Audit — minimum for government tenders), Level 4 (Safety Management System), Level 5/bizSAFE Star (ISO 45001 certification). bizSAFE Level 3 or higher is effectively mandatory for government procurement and major private sector contracts."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Layer 4 — ISO 45001: the international OHSMS standard"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "ISO 45001:2018 (SS ISO 45001 in Singapore) provides a risk-based Plan-Do-Check-Act framework. Certification by SAC-accredited body grants direct entry to bizSAFE Star. For higher-risk workplaces (construction ≥S$30M, shipyards ≥200 persons), MOM requires formal SHMS audits — ISO 45001 certification satisfies this requirement."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "Core overlap: where WSH Act meets ISO 45001 clause by clause"
                  }
                </h4>
                <table className="w-full [border-collapse:collapse] m-[1.5rem_0]">
                  <tbody>
                    <tr>
                      <th className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"WSH Requirement"}
                      </th>
                      <th className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"ISO 45001 Clause"}
                      </th>
                      <th className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"Integration note"}
                      </th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {
                          "Risk Management Regulations (3‑year review, post‑incident trigger)"
                        }
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"Clause 6.1 (HIRAC)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {
                          "Explicitly add SG‑specific review triggers into HIRAC procedure"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {
                          "Director liability (Section 48) + CoP on Directors' Duties"
                        }
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"Clause 5 (Leadership)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {
                          "Document board walkabouts, management reviews, OH&S reporting to board"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"Incident Reporting Regulations (MOM timelines)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {
                          "Clause 10.2 (Incident investigation & corrective action)"
                        }
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {
                          "Embed MOM notification categories & deadlines into incident procedure"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"Competence (WSHO/CSOC/work-at-height certificates)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"Clause 7.2 (Competence)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {
                          "Training matrix must track MOM‑mandated registrations & expiry dates"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"Worker participation (safety committees)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {"Clause 5.4 (Consultation & participation)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[10px] [vertical-align:top]">
                        {
                          "Toolbox meetings, safety committee minutes = ISO evidence"
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="[background:#fff8e7] [border-left:4px_solid_#d32f2f] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong>
                    {"⚠️ Critical Singapore-specific gaps in ISO 45001:"}
                  </strong>
                  <br />
                  {
                    "\n                                    • MOM incident notification timelines & report formats (not defined in ISO)"
                  }
                  <br />
                  {
                    "\n                                    • Three‑year risk assessment review cycle & post‑incident review trigger"
                  }
                  <br />
                  {
                    "\n                                    • Registration of WSH Officers (WSHO), WSH Coordinators (WSHC), CSOC for construction"
                  }
                  <br />
                  {
                    "\n                                    • Mandatory SHMS audit thresholds (construction ≥S$30M, shipyards ≥200 persons)\n                                "
                  }
                </div>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Industry‑specific considerations"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>{"Manufacturing:"}</strong>
                  {
                    " WSH (Factories) Regulations, machinery guarding, noise control. ACOPs: machinery safety (SS ISO 12100:2024), noise control (CP 99)."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Healthcare:"}</strong>
                  {
                    " Patient handling, sharps injuries, biological hazards, psychosocial risks. WSH Council healthcare guidelines."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Logistics:"}</strong>
                  {
                    " Forklift safety, work at heights (racking), loading docks, pedestrian‑vehicle separation."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"F&B/Hospitality:"}</strong>
                  {
                    " Slip resistance (SS 485:2022), heat stress (WSHC advisory March 2026), manual handling."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Professional services/offices:"}</strong>
                  {
                    " Ergonomics, psychosocial hazards (stress, workload), fire evacuation, remote work safety."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "Strategic decision: which level is right for your organisation?"
                  }
                </h4>
                <ul>
                  <li>
                    <strong>{"Start with bizSAFE Level 3:"}</strong>
                    {
                      " Smaller orgs (\u003c30 staff), need govt tenders, lower risk profile."
                    }
                  </li>
                  <li>
                    <strong>{"Pursue bizSAFE Level 4 → ISO 45001:"}</strong>
                    {
                      " Medium‑large orgs (30‑200 staff), higher risk industry, approaching SHMS threshold."
                    }
                  </li>
                  <li>
                    <strong>{"ISO 45001 directly:"}</strong>
                    {
                      " Already on ISO 9001/14001, international clients require ISO 45001, SHMS audit threshold applies."
                    }
                  </li>
                </ul>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Building the integrated system: ICFC practical approach"}
                </h4>
                <ul>
                  <li>
                    <strong>{"Step 1:"}</strong>
                    {
                      " Legal register + ACOP identification (list all applicable WSHA provisions & sector ACOPs)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 2:"}</strong>
                    {
                      " HIRAC covering all work activities (include 3‑year review & post‑incident triggers)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 3:"}</strong>
                    {
                      " Incident management with MOM notification built in (categories, timelines, report formats)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 4:"}</strong>
                    {
                      " Competence framework with Singapore‑specific roles (WSHO, WSHC, CSOC, etc.)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 5:"}</strong>
                    {
                      " Director & management engagement documentation (CoP on Directors' Duties alignment)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 6:"}</strong>
                    {
                      " Internal audit programme covering ISO 45001 clauses + WSH Act/ACOP obligations"
                    }
                  </li>
                </ul>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Frequently asked questions"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Does my company need to be in a high‑risk industry for the WSH Act to apply?"
                    }
                  </strong>
                  {
                    " No. It applies to all workplaces — offices, shops, restaurants, clinics. The extent scales with risk, but no employer is exempt."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "We are not in construction or manufacturing. Do we need bizSAFE?"
                    }
                  </strong>
                  {
                    " Not legally mandatory, but commercially necessary for government contracts and large enterprise clients. Contact ICFC to confirm your specific situation."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Can we skip straight to ISO 45001 without bizSAFE levels 1‑4?"
                    }
                  </strong>
                  {
                    " Yes. ISO 45001 certification provides direct entry to bizSAFE Star."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"What is the difference between an ACOP and a guideline?"}
                  </strong>
                  {
                    ' ACOP is formally approved by MOM and can be cited in court as benchmark for "reasonably practicable". Guidelines do not carry the same legal weight.'
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"How does director personal liability work?"}
                  </strong>
                  {
                    " Under Section 48(1), a director may be convicted if they did not exercise due diligence. Demonstrating engagement consistent with the CoP on Directors' WSH Duties (2022) is the primary defence."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"The bottom line"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Singapore's workplace safety framework is a coherent, multi‑layered system. The Act creates legal obligations. ACOPs translate into industry‑specific standards. bizSAFE provides a progressive pathway. ISO 45001 delivers the internationally recognised management system that brings it all together."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "ICFC offers a complimentary WSH Act and ISO 45001 gap assessment as part of our free initial consultation — for companies of all sizes and across all sectors."
                  }
                </p>
                <hr />
                <p className="leading-relaxed mb-4">
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. Occupational health & safety practice: ISO 45001, integrated management systems (ISO 9001+14001+45001), bizSAFE advisory, WSH Act alignment. Contact: "
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
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. WSH Act obligations, penalties, and ACOP content subject to change. Refer to official MOM and WSH Council sources."
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
                    {"WSH Act"}
                  </SiteLink>
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
                    {"bizSAFE"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Workplace Safety"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"ACOP"}
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
          <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%]">
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
                <ul>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ISO 45001 "}
                      <span>{"(10)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"WSH Act "}
                      <span>{"(7)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"bizSAFE "}
                      <span>{"(5)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Workplace Safety "}
                      <span>{"(12)"}</span>
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
                    {"bizSAFE Level 3"}
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
                    {"Director Liability"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Risk Assessment"}
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
