import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogedgPageContent() {
  return (
    <SitePageTemplate route="blogedg.html">
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
                      <svg width="12" height="12" className="w-[15px] h-[15px]">
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
                      <span>{"10 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="leading-relaxed mb-4">
                  <strong>{"Published by ICFC Pte Ltd"}</strong>
                  {" | April 2026 | 10 min read"}
                  <br />
                  <strong>{"Categories:"}</strong>
                  {
                    " Grant funding · ISO certification · Singapore SME · Standards adoption"
                  }
                </p>
                <hr />
                <p className="leading-relaxed mb-4">
                  {
                    "ISO certification opens doors — to enterprise contracts, government procurement panels, overseas markets, and multinational supply chains. But for many Singapore SMEs, the upfront cost of consultation and certification can feel like a barrier. It doesn't have to be."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {"Enterprise Singapore's "}
                  <strong>{"Enterprise Development Grant (EDG)"}</strong>
                  {
                    " — administered under the Market Access pillar — provides co-funding for Singapore companies adopting internationally recognised ISO standards. For qualifying SMEs, up to "
                  }
                  <strong>{"50% of eligible project costs"}</strong>
                  {
                    " can be offset. For sustainability-related standards such as ISO 14001 and ISO 50001, the enhanced rate of "
                  }
                  <strong>{"up to 70% applied until 31 March 2026"}</strong>
                  {"."}
                </p>
                <div className="[background:#f8fafc] [border-left:4px_solid_#AB052D] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong>{"📌 Important note:"}</strong>
                  {
                    " Grant terms, funding rates, and eligible standards are set by Enterprise Singapore and subject to change. All information accurate as of April 2026. Always verify current requirements on the Enterprise Singapore website or through a certified consultant before applying.\n                                "
                  }
                </div>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[2rem] mb-[1rem] font-semibold">
                  {
                    "What is the EDG grant — and what does it have to do with ISO?"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "The Enterprise Development Grant supports Singapore companies upgrading operations, innovating, or expanding overseas across three pillars: Core Capabilities, Innovation & Productivity, and "
                  }
                  <strong>{"Market Access"}</strong>
                  {". ISO certification falls under "}
                  <strong>{"Market Access — Standards Adoption"}</strong>
                  {
                    ". The rationale: international standards like ISO 27001, ISO 9001, ISO 14001 are often prerequisites for overseas tenders, government procurement, and global supply chains."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[2rem] mb-[1rem] font-semibold">
                  {"How much funding can my company receive?"}
                </h4>
                <table className="w-full [border-collapse:collapse] m-[1.5rem_0]">
                  <thead>
                    <tr>
                      <th className="[border:1px_solid_#e2e8f0] p-[12px] [vertical-align:top]">
                        {"Company type"}
                      </th>
                      <th className="[border:1px_solid_#e2e8f0] p-[12px] [vertical-align:top]">
                        {"Standard support level"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="[border:1px_solid_#e2e8f0] p-[12px] [vertical-align:top]">
                        {"SME (≤200 employees OR ≤S$100M annual turnover)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[12px] [vertical-align:top]">
                        {"Up to "}
                        <strong>{"50%"}</strong>
                        {" of qualifying costs"}
                      </td>
                    </tr>
                    <tr>
                      <td className="[border:1px_solid_#e2e8f0] p-[12px] [vertical-align:top]">
                        {"Non-SME (large enterprise)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[12px] [vertical-align:top]">
                        {"Up to "}
                        <strong>{"30%"}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="[border:1px_solid_#e2e8f0] p-[12px] [vertical-align:top]">
                        {"SME — sustainability (ISO 14001, ISO 50001)"}
                      </td>
                      <td className="[border:1px_solid_#e2e8f0] p-[12px] [vertical-align:top]">
                        {"Up to "}
                        <strong>{"70%"}</strong>
                        {" until 31 March 2026"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="leading-relaxed mb-4">
                  {
                    "The grant operates on a reimbursement basis — fund the project upfront, then claim. Disbursement typically takes 6–8 weeks. No fixed min/max grant amount; Enterprise Singapore assesses based on project scope and financial viability."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[2rem] mb-[1rem] font-semibold">
                  {"Which ISO standards qualify?"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>{"Information security & cybersecurity:"}</strong>
                  {" ISO/IEC 27001, ISO 27032, ISO 27701, ISO 42001."}
                  <br />
                  <strong>{"Quality & operations:"}</strong>
                  {" ISO 22301, ISO 37001."}
                  <br />
                  <strong>{"Sustainability:"}</strong>
                  {" ISO 14001, ISO 50001 (enhanced rate), ISO 45001."}
                  <br />
                  <strong>{"Exclusions:"}</strong>
                  {
                    " Annual surveillance audits, recertification of existing standards, local regulatory compliance, basic commodity standards."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[2rem] mb-[1rem] font-semibold">
                  {"Step-by-step: How to apply for EDG for ISO certification"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>{"Step 1 – Confirm eligibility:"}</strong>
                  {
                    " Local equity ≥30%, financially viable, project not commenced."
                  }
                  <br />
                  <strong>
                    {"Step 2 – Select ISO standard & define scope."}
                  </strong>
                  <br />
                  <strong>
                    {"Step 3 – Engage a certified consultant (TR 43 / SS 680)."}
                  </strong>
                  <br />
                  <strong>{"Step 4 – Prepare application documents:"}</strong>
                  {
                    " ACRA profile, financial statements, detailed project proposal, consultant credentials."
                  }
                  <br />
                  <strong>
                    {"Step 5 – Submit via Business Grants Portal (CorpPass)."}
                  </strong>
                  {" Processing ~8–12 weeks."}
                  <br />
                  <strong>
                    {"Step 6 – Receive Letter of Offer, then commence project."}
                  </strong>
                  <br />
                  <strong>
                    {"Step 7 – Complete ISO project (typically 12–18 months)."}
                  </strong>
                  <br />
                  <strong>{"Step 8 – Submit claim"}</strong>
                  {
                    " with completion report, invoices, and pre-qualified auditor report."
                  }
                </p>
                <div className="[background:#f8fafc] [border-left:4px_solid_#AB052D] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong>{"⚠️ Most common mistake:"}</strong>
                  {
                    " Starting any chargeable work before grant approval. Do not sign contracts, make payments, or begin gap assessments until you receive the Letter of Offer.\n                                "
                  }
                </div>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[2rem] mb-[1rem] font-semibold">
                  {"What costs can I claim?"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>{"1. Third-party consultancy fees"}</strong>
                  {
                    " (TR43/SS680 certified) – gap analysis, documentation, implementation."
                  }
                  <br />
                  <strong>{"2. Internal manpower costs"}</strong>
                  {
                    " – incremental salary of employees directly involved in ISO implementation."
                  }
                  <br />
                  <strong>{"3. Equipment/software"}</strong>
                  {
                    " – QMS platform, security tooling required for the standard."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[2rem] mb-[1rem] font-semibold">
                  {"The EDGE grant — what's coming in 2H 2026"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Budget 2026 announced the merger of EDG, PSG, and MRA into a unified "
                  }
                  <strong>
                    {"EDGE – Enterprise Development and Growth for Enterprises"}
                  </strong>
                  {
                    " (launching 2H 2026). Key features: single application, open to all Singapore-registered businesses, enhanced overseas support. "
                  }
                  <strong>
                    {"Recommendation: apply now under current EDG"}
                  </strong>
                  {
                    " rather than waiting, as processing times are 8–12 weeks and EDGE's standards adoption scope is not yet fully detailed."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[2rem] mb-[1rem] font-semibold">
                  {"How ICFC helps you maximise your EDG grant"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "ICFC integrates grant management into your ISO project from eligibility assessment, proposal co-authoring, through project implementation and claim submission. We align milestones to grant conditions and coordinate with pre-qualified auditors to ensure a smooth reimbursement process."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[2rem] mb-[1rem] font-semibold">
                  {"Frequently asked questions"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Can I apply for EDG for multiple ISO standards together?"}
                  </strong>
                  {
                    " Yes – integrated management system (IMS) projects covering two or more standards in one application are possible and often more efficient."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"What if my EDG application is rejected?"}</strong>
                  {
                    " Resubmit after reviewing reasons. ICFC can assist with rejection analysis and resubmission."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Can I use SkillsFuture Enterprise Credit (SFEC) alongside EDG?"
                    }
                  </strong>
                  {
                    " Yes, SFEC can stack with EDG for eligible training components such as internal auditor courses."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Is EDG worth it for non-SMEs?"}</strong>
                  {
                    " Yes, up to 30% of qualifying costs – significant for larger implementations."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[2rem] mb-[1rem] font-semibold">
                  {"The bottom line"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "The Enterprise Development Grant is the most accessible funding pathway for Singapore SMEs seeking ISO certification. With EDGE consolidation coming in late 2026, now is the time to apply. The process is clear: apply before starting any work, engage a certified consultant, and present a specific, outcome-focused proposal."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "ICFC offers a complimentary eligibility assessment as part of our initial consultation."
                  }
                </p>
                <hr />
                <p className="leading-relaxed mb-4">
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "Singapore's ISO certification partner since 2014. We provide ISO consultation, third-party audit, training, and integrated grant management. Contact: "
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
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only and does not constitute professional grant advice. Grant terms subject to change. Verify at enterprisesg.gov.sg."
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
                    {"EDG Grant"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"ISO Certification"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Enterprise Singapore"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[16px] relative font-medium [background:#FFFFFF] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
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
                      {"Grant Funding "}
                      <span>{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ISO 27001 "}
                      <span>{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"SME Resources "}
                      <span>{"(5)"}</span>
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
                    {"EDG"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"EDGE Grant"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"ISO 9001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Enterprise Singapore"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
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
