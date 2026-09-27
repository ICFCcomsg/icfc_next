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
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
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
                        className="[vertical-align:middle] w-[15px] h-[15px]"
                      >
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
                      <svg
                        width="12"
                        height="12"
                        className="[vertical-align:middle] w-[15px] h-[15px]"
                      >
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
                    " ISO 45001 · WSH Act · bizSAFE · Codes of Practice · Occupational safety · Singapore · All industries"
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "If you run a company in Singapore — any company, in any industry — you are subject to the Workplace Safety and Health Act. Not just construction firms. Not just factories. Every employer, every occupier, every principal across every sector bears duties under the WSHA and its subsidiary legislation."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Most business leaders are aware of this in principle. Far fewer have sat down and mapped exactly how Singapore's four-layer workplace safety framework — the WSH Act, the Approved Codes of Practice (ACOPs), the bizSAFE programme, and ISO 45001 — fits together and what it means for their specific operations."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "This article is that map. It is written for Singapore employers across all industries — manufacturing, healthcare, logistics, retail, professional services, F&B, hospitality, and beyond — who want to understand the full framework, where the layers overlap, and how to build one coherent safety management system rather than managing each element in isolation."
                  }
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#fff8e7] [border-left:4px_solid_#d32f2f] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"📌 Key insight:"}
                  </strong>
                  {" The WSH Act applies to "}
                  <strong className="[font-weight:bolder]">{"ALL"}</strong>
                  {
                    " Singapore workplaces — offices, restaurants, retail, healthcare, manufacturing, logistics. Director personal liability (Section 48) means senior management cannot delegate safety responsibility. Integration of ACOPs + bizSAFE + ISO 45001 is the most efficient compliance path.\n                                "
                  }
                </div>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "Layer 1 — The WSH Act: the legal foundation for every Singapore workplace"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "The Workplace Safety and Health Act 2006, as amended most recently by Act 30 of 2024 (effective 1 January 2025), is Singapore's primary workplace safety legislation. It covers employers, employees, supervisors, contractors, occupiers, and visitors. Key obligations applicable to all employers: risk assessment (WSH RM Regulations), incident reporting (notifiable accidents to MOM), safe plant and systems of work, information/training/supervision, and "
                  }
                  <strong className="[font-weight:bolder]">
                    {
                      "personal liability for company directors under Section 48(1)"
                    }
                  </strong>
                  {"."}
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Penalty escalation:"}
                  </strong>
                  {
                    " As of 1 June 2024, maximum fines for safety breaches increased from S$20,000 to S$50,000 for first convictions. Corporate fines can reach S$500,000, with personal imprisonment for gross negligence."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "Layer 2 — The Approved Codes of Practice: translating the Act"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "WSH Council publishes 102+ ACOPs (as of January 2025). They are not legislation but carry significant legal weight — if an accident occurs, the relevant ACOP becomes the benchmark. Key cross-industry ACOPs: WSH Risk Management (2021), Chief Executives' and Board of Directors' WSH Duties (2022), Working Safely at Heights (2013), Safe Lifting Operations (2014)."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "Layer 3 — bizSAFE: Singapore's progressive capability-building programme"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Five-level programme: Level 1 (CEO commitment), Level 2 (Risk Management Champion), Level 3 (RM Implementation Audit — minimum for government tenders), Level 4 (Safety Management System), Level 5/bizSAFE Star (ISO 45001 certification). bizSAFE Level 3 or higher is effectively mandatory for government procurement and major private sector contracts."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Layer 4 — ISO 45001: the international OHSMS standard"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO 45001:2018 (SS ISO 45001 in Singapore) provides a risk-based Plan-Do-Check-Act framework. Certification by SAC-accredited body grants direct entry to bizSAFE Star. For higher-risk workplaces (construction ≥S$30M, shipyards ≥200 persons), MOM requires formal SHMS audits — ISO 45001 certification satisfies this requirement."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "Core overlap: where WSH Act meets ISO 45001 clause by clause"
                  }
                </h4>
                <table className="[caption-side:bottom] [border-collapse:collapse] mt-[1.5rem] mr-[0] mb-[1.5rem] ml-[0] w-full">
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"WSH Requirement"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"ISO 45001 Clause"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Integration note"}
                      </th>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Risk Management Regulations (3‑year review, post‑incident trigger)"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Clause 6.1 (HIRAC)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Explicitly add SG‑specific review triggers into HIRAC procedure"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Director liability (Section 48) + CoP on Directors' Duties"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Clause 5 (Leadership)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Document board walkabouts, management reviews, OH&S reporting to board"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Incident Reporting Regulations (MOM timelines)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Clause 10.2 (Incident investigation & corrective action)"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Embed MOM notification categories & deadlines into incident procedure"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Competence (WSHO/CSOC/work-at-height certificates)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Clause 7.2 (Competence)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Training matrix must track MOM‑mandated registrations & expiry dates"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Worker participation (safety committees)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Clause 5.4 (Consultation & participation)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Toolbox meetings, safety committee minutes = ISO evidence"
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#fff8e7] [border-left:4px_solid_#d32f2f] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
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
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Industry‑specific considerations"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Manufacturing:"}
                  </strong>
                  {
                    " WSH (Factories) Regulations, machinery guarding, noise control. ACOPs: machinery safety (SS ISO 12100:2024), noise control (CP 99)."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Healthcare:"}
                  </strong>
                  {
                    " Patient handling, sharps injuries, biological hazards, psychosocial risks. WSH Council healthcare guidelines."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Logistics:"}
                  </strong>
                  {
                    " Forklift safety, work at heights (racking), loading docks, pedestrian‑vehicle separation."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"F&B/Hospitality:"}
                  </strong>
                  {
                    " Slip resistance (SS 485:2022), heat stress (WSHC advisory March 2026), manual handling."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Professional services/offices:"}
                  </strong>
                  {
                    " Ergonomics, psychosocial hazards (stress, workload), fire evacuation, remote work safety."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "Strategic decision: which level is right for your organisation?"
                  }
                </h4>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Start with bizSAFE Level 3:"}
                    </strong>
                    {
                      " Smaller orgs (\u003c30 staff), need govt tenders, lower risk profile."
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Pursue bizSAFE Level 4 → ISO 45001:"}
                    </strong>
                    {
                      " Medium‑large orgs (30‑200 staff), higher risk industry, approaching SHMS threshold."
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"ISO 45001 directly:"}
                    </strong>
                    {
                      " Already on ISO 9001/14001, international clients require ISO 45001, SHMS audit threshold applies."
                    }
                  </li>
                </ul>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Building the integrated system: ICFC practical approach"}
                </h4>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Step 1:"}
                    </strong>
                    {
                      " Legal register + ACOP identification (list all applicable WSHA provisions & sector ACOPs)"
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Step 2:"}
                    </strong>
                    {
                      " HIRAC covering all work activities (include 3‑year review & post‑incident triggers)"
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Step 3:"}
                    </strong>
                    {
                      " Incident management with MOM notification built in (categories, timelines, report formats)"
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Step 4:"}
                    </strong>
                    {
                      " Competence framework with Singapore‑specific roles (WSHO, WSHC, CSOC, etc.)"
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Step 5:"}
                    </strong>
                    {
                      " Director & management engagement documentation (CoP on Directors' Duties alignment)"
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Step 6:"}
                    </strong>
                    {
                      " Internal audit programme covering ISO 45001 clauses + WSH Act/ACOP obligations"
                    }
                  </li>
                </ul>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Frequently asked questions"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Does my company need to be in a high‑risk industry for the WSH Act to apply?"
                    }
                  </strong>
                  {
                    " No. It applies to all workplaces — offices, shops, restaurants, clinics. The extent scales with risk, but no employer is exempt."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "We are not in construction or manufacturing. Do we need bizSAFE?"
                    }
                  </strong>
                  {
                    " Not legally mandatory, but commercially necessary for government contracts and large enterprise clients. Contact ICFC to confirm your specific situation."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Can we skip straight to ISO 45001 without bizSAFE levels 1‑4?"
                    }
                  </strong>
                  {
                    " Yes. ISO 45001 certification provides direct entry to bizSAFE Star."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"What is the difference between an ACOP and a guideline?"}
                  </strong>
                  {
                    ' ACOP is formally approved by MOM and can be cited in court as benchmark for "reasonably practicable". Guidelines do not carry the same legal weight.'
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"How does director personal liability work?"}
                  </strong>
                  {
                    " Under Section 48(1), a director may be convicted if they did not exercise due diligence. Demonstrating engagement consistent with the CoP on Directors' WSH Duties (2022) is the primary defence."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"The bottom line"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Singapore's workplace safety framework is a coherent, multi‑layered system. The Act creates legal obligations. ACOPs translate into industry‑specific standards. bizSAFE provides a progressive pathway. ISO 45001 delivers the internationally recognised management system that brings it all together."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ICFC offers a complimentary WSH Act and ISO 45001 gap assessment as part of our free initial consultation — for companies of all sizes and across all sectors."
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"About ICFC Pte Ltd"}
                  </strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. Occupational health & safety practice: ISO 45001, integrated management systems (ISO 9001+14001+45001), bizSAFE advisory, WSH Act alignment. Contact: "
                  }
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                  >
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. WSH Act obligations, penalties, and ACOP content subject to change. Refer to official MOM and WSH Council sources."
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
                    {"WSH Act"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"ISO 45001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"bizSAFE"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Workplace Safety"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
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
                <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
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
                <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
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
                      <button className="rounded-[0] mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [text-transform:none] text-[#000] [border:none] [background:transparent] absolute top-[50%] [inset-inline-end:25px] [transform:translateY(-50%)] hover:text-[#AB052D]">
                        <svg
                          width="18"
                          height="18"
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
                <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {"Categories"}
                </h5>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ISO 45001 "}
                      <span>{"(10)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"WSH Act "}
                      <span>{"(7)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"bizSAFE "}
                      <span>{"(5)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Workplace Safety "}
                      <span>{"(12)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-[12px]">
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"ISO 45001:2018"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"bizSAFE Level 3"}
                  </SiteLink>
                  <SiteLink
                    href="/services.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"SHMS Audit"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Director Liability"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
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
