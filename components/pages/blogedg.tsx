import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogedgPageContent() {
  return (
    <SitePageTemplate route="blogedg">
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
      title="How to apply for the Enterprise Singapore EDG grant for ISO certification in Singapore (2026 guide)"
      description="Step-by-step EDG grant application, up to 50-70% co-funding for ISO standards, and EDGE grant 2026 updates."
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
                      <span className="">
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                          className="[vertical-align:middle] max-w-full w-[40px] h-[40px] rounded-full"
                        />
                      </span>
                      <span className="">
                        {"By "}
                        <SiteLink
                          href="/contact-us"
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
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
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335ZM9.66781 3.8335C9.39447 3.8335 9.16781 3.60683 9.16781 3.3335V1.3335C9.16781 1.06016 9.39447 0.833496 9.66781 0.833496C9.94114 0.833496 10.1678 1.06016 10.1678 1.3335V3.3335C10.1678 3.60683 9.94114 3.8335 9.66781 3.8335Z"
                          fill="white"
                          className="[fill:#AB052D]"
                        ></path>
                      </svg>
                      <span className="">{"April 2026"}</span>
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
                      <span className="">{"10 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Published by ICFC Pte Ltd"}
                  </strong>
                  {" | April 2026 | 10 min read"}
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Categories:"}
                  </strong>
                  {
                    " Grant funding · ISO certification · Singapore SME · Standards adoption"
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO certification opens doors — to enterprise contracts, government procurement panels, overseas markets, and multinational supply chains. But for many Singapore SMEs, the upfront cost of consultation and certification can feel like a barrier. It doesn't have to be."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {"Enterprise Singapore's "}
                  <strong className="[font-weight:bolder]">
                    {"Enterprise Development Grant (EDG)"}
                  </strong>
                  {
                    " — administered under the Market Access pillar — provides co-funding for Singapore companies adopting internationally recognised ISO standards. For qualifying SMEs, up to "
                  }
                  <strong className="[font-weight:bolder]">
                    {"50% of eligible project costs"}
                  </strong>
                  {
                    " can be offset. For sustainability-related standards such as ISO 14001 and ISO 50001, the enhanced rate of "
                  }
                  <strong className="[font-weight:bolder]">
                    {"up to 70% applied until 31 March 2026"}
                  </strong>
                  {"."}
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#f8fafc] [border-left:4px_solid_#AB052D] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"📌 Important note:"}
                  </strong>
                  {
                    " Grant terms, funding rates, and eligible standards are set by Enterprise Singapore and subject to change. All information accurate as of April 2026. Always verify current requirements on the Enterprise Singapore website or through a certified consultant before applying.\n                                "
                  }
                </div>
                <h4 className="mt-[2rem] mb-[1rem] font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "What is the EDG grant — and what does it have to do with ISO?"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "The Enterprise Development Grant supports Singapore companies upgrading operations, innovating, or expanding overseas across three pillars: Core Capabilities, Innovation & Productivity, and "
                  }
                  <strong className="[font-weight:bolder]">
                    {"Market Access"}
                  </strong>
                  {". ISO certification falls under "}
                  <strong className="[font-weight:bolder]">
                    {"Market Access — Standards Adoption"}
                  </strong>
                  {
                    ". The rationale: international standards like ISO 27001, ISO 9001, ISO 14001 are often prerequisites for overseas tenders, government procurement, and global supply chains."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[1rem] font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"How much funding can my company receive?"}
                </h4>
                <table className="[caption-side:bottom] [border-collapse:collapse] mt-[1.5rem] mr-[0] mb-[1.5rem] ml-[0] w-full">
                  <thead className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Company type"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Standard support level"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"SME (≤200 employees OR ≤S$100M annual turnover)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Up to "}
                        <strong className="[font-weight:bolder]">
                          {"50%"}
                        </strong>
                        {" of qualifying costs"}
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Non-SME (large enterprise)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Up to "}
                        <strong className="[font-weight:bolder]">
                          {"30%"}
                        </strong>
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"SME — sustainability (ISO 14001, ISO 50001)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Up to "}
                        <strong className="[font-weight:bolder]">
                          {"70%"}
                        </strong>
                        {" until 31 March 2026"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "The grant operates on a reimbursement basis — fund the project upfront, then claim. Disbursement typically takes 6–8 weeks. No fixed min/max grant amount; Enterprise Singapore assesses based on project scope and financial viability."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[1rem] font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Which ISO standards qualify?"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Information security & cybersecurity:"}
                  </strong>
                  {" ISO/IEC 27001, ISO 27032, ISO 27701, ISO 42001."}
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Quality & operations:"}
                  </strong>
                  {" ISO 22301, ISO 37001."}
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Sustainability:"}
                  </strong>
                  {" ISO 14001, ISO 50001 (enhanced rate), ISO 45001."}
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Exclusions:"}
                  </strong>
                  {
                    " Annual surveillance audits, recertification of existing standards, local regulatory compliance, basic commodity standards."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[1rem] font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Step-by-step: How to apply for EDG for ISO certification"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Step 1 – Confirm eligibility:"}
                  </strong>
                  {
                    " Local equity ≥30%, financially viable, project not commenced."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Step 2 – Select ISO standard & define scope."}
                  </strong>
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Step 3 – Engage a certified consultant (TR 43 / SS 680)."}
                  </strong>
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Step 4 – Prepare application documents:"}
                  </strong>
                  {
                    " ACRA profile, financial statements, detailed project proposal, consultant credentials."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Step 5 – Submit via Business Grants Portal (CorpPass)."}
                  </strong>
                  {" Processing ~8–12 weeks."}
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Step 6 – Receive Letter of Offer, then commence project."}
                  </strong>
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Step 7 – Complete ISO project (typically 12–18 months)."}
                  </strong>
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Step 8 – Submit claim"}
                  </strong>
                  {
                    " with completion report, invoices, and pre-qualified auditor report."
                  }
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#f8fafc] [border-left:4px_solid_#AB052D] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"⚠️ Most common mistake:"}
                  </strong>
                  {
                    " Starting any chargeable work before grant approval. Do not sign contracts, make payments, or begin gap assessments until you receive the Letter of Offer.\n                                "
                  }
                </div>
                <h4 className="mt-[2rem] mb-[1rem] font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"What costs can I claim?"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"1. Third-party consultancy fees"}
                  </strong>
                  {
                    " (TR43/SS680 certified) – gap analysis, documentation, implementation."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"2. Internal manpower costs"}
                  </strong>
                  {
                    " – incremental salary of employees directly involved in ISO implementation."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"3. Equipment/software"}
                  </strong>
                  {
                    " – QMS platform, security tooling required for the standard."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[1rem] font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"The EDGE grant — what's coming in 2H 2026"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Budget 2026 announced the merger of EDG, PSG, and MRA into a unified "
                  }
                  <strong className="[font-weight:bolder]">
                    {"EDGE – Enterprise Development and Growth for Enterprises"}
                  </strong>
                  {
                    " (launching 2H 2026). Key features: single application, open to all Singapore-registered businesses, enhanced overseas support. "
                  }
                  <strong className="[font-weight:bolder]">
                    {"Recommendation: apply now under current EDG"}
                  </strong>
                  {
                    " rather than waiting, as processing times are 8–12 weeks and EDGE's standards adoption scope is not yet fully detailed."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[1rem] font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"How ICFC helps you maximise your EDG grant"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ICFC integrates grant management into your ISO project from eligibility assessment, proposal co-authoring, through project implementation and claim submission. We align milestones to grant conditions and coordinate with pre-qualified auditors to ensure a smooth reimbursement process."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[1rem] font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Frequently asked questions"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Can I apply for EDG for multiple ISO standards together?"}
                  </strong>
                  {
                    " Yes – integrated management system (IMS) projects covering two or more standards in one application are possible and often more efficient."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"What if my EDG application is rejected?"}
                  </strong>
                  {
                    " Resubmit after reviewing reasons. ICFC can assist with rejection analysis and resubmission."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Can I use SkillsFuture Enterprise Credit (SFEC) alongside EDG?"
                    }
                  </strong>
                  {
                    " Yes, SFEC can stack with EDG for eligible training components such as internal auditor courses."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Is EDG worth it for non-SMEs?"}
                  </strong>
                  {
                    " Yes, up to 30% of qualifying costs – significant for larger implementations."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[1rem] font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"The bottom line"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "The Enterprise Development Grant is the most accessible funding pathway for Singapore SMEs seeking ISO certification. With EDGE consolidation coming in late 2026, now is the time to apply. The process is clear: apply before starting any work, engage a certified consultant, and present a specific, outcome-focused proposal."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ICFC offers a complimentary eligibility assessment as part of our initial consultation."
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"About ICFC Pte Ltd"}
                  </strong>
                  <br />
                  {
                    "Singapore's ISO certification partner since 2014. We provide ISO consultation, third-party audit, training, and integrated grant management. Contact: "
                  }
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only and does not constitute professional grant advice. Grant terms subject to change. Verify at enterprisesg.gov.sg."
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
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"EDG Grant"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"ISO Certification"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Enterprise Singapore"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"SME Funding"}
                  </SiteLink>
                </div>
                <div>
                  <span className="font-semibold [padding-inline-end:10px] text-[#2B3944]">
                    {"Share:"}
                  </span>
                  <div className="gap-[15px]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Icon
                        name="facebook"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Icon
                        name="x"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
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
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="[flex-shrink:0] w-[50%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <textarea
                        placeholder="Write Message"
                        defaultValue=""
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [resize:vertical] pt-[14px] pr-[24px] pb-[14px] pl-[24px] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <button
                        type="submit"
                        className="rounded-[50px] mt-[0] mr-[0] mb-[0] ml-[0] text-[17px] leading-[inherit] [text-transform:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] text-[#FFFFFF] [border:none] [background:#AB052D] inline-flex items-center justify-center font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] hover:text-[#FFFFFF] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
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
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[60px] w-full [border:1px_solid_#ddd] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:50px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                      <button className="rounded-[0] mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [text-transform:none] text-[#000] [border:none] [background:transparent] absolute top-[50%] [inset-inline-end:25px] [transform:translateY(-50%)] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
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
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"Grant Funding "}
                      <span className="">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"ISO 27001 "}
                      <span className="">{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"SME Resources "}
                      <span className="">{"(5)"}</span>
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
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"EDG"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"EDGE Grant"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"ISO 9001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Enterprise Singapore"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Co-funding"}
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
