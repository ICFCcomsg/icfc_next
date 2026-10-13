import { Tx } from "@/components/atoms/tx";
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
      title={<Tx ns="blogedg">{"How to apply for the Enterprise Singapore EDGE Grant for ISO certification in Singapore (2026 guide)"}</Tx>}
      description={<Tx ns="blogedg">{"Step-by-step EDGE Grant application for ISO standards, with up to 50-70% support for SMEs, subject to eligibility and Enterprise Singapore's approval."}</Tx>}
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
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
                        <Tx ns="blogedg">{"By "}</Tx>
                        <SiteLink
                          href="/contact-us"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blogedg">{"ICFC Pte Ltd"}</Tx>
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
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335ZM9.66781 3.8335C9.39447 3.8335 9.16781 3.60683 9.16781 3.3335V1.3335C9.16781 1.06016 9.39447 0.833496 9.66781 0.833496C9.94114 0.833496 10.1678 1.06016 10.1678 1.3335V3.3335C10.1678 3.60683 9.94114 3.8335 9.66781 3.8335Z"
                          fill="white"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                      <span className=""><Tx ns="blogedg">{"April 2026"}</Tx></span>
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
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12ZM6 0.799987C8.86799 0.799987 11.2 3.13198 11.2 6C11.2 8.86802 8.86802 11.2 6 11.2C3.13198 11.2 0.799987 8.86802 0.799987 6C0.799987 3.13198 3.13201 0.799987 6 0.799987Z"
                          fill="#616C74"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                      <span className=""><Tx ns="blogedg">{"10 min read"}</Tx></span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Published by ICFC Pte Ltd"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" | April 2026 | 10 min read"}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Categories:"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Grant funding · ISO certification · Singapore SME · Standards adoption"}</Tx>
                </p>
                <hr className="mt-0 mr-0 mb-0 ml-0 text-inherit [border:none] [border-top:1px_solid] opacity-[1] h-px bg-[#ececec]" />
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blogedg">{"ISO certification opens doors — to enterprise contracts, government procurement panels, overseas markets, and multinational supply chains. But for many Singapore SMEs, the upfront cost of consultation and certification can feel like a barrier. It doesn't have to be."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blogedg">{"Enterprise Singapore's "}</Tx>
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"EDGE Grant"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" replaced the EDG, MRA and PSG schemes, which ceased on 29 September 2026. It provides support for Singapore companies adopting internationally recognised ISO standards. For most standards, SMEs can receive up to "}</Tx>
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"50% support"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" (up to 30% for non-SMEs). For sustainability standards such as SS 587, and ISO 14001 and ISO 50001 where listed, SMEs can receive "}</Tx>
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"up to 70%"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" (up to 50% for non-SMEs), subject to eligibility and Enterprise Singapore's approval."}</Tx>
                </p>
                <div className="mt-[1.8rem] mr-0 mb-[1.8rem] ml-0 pt-6 pr-[1.8rem] pb-6 pl-[1.8rem] [background:#f8fafc] [border-left:4px_solid_#AB052D] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"📌 Important note:"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Grant terms, funding rates, and eligible standards are set by Enterprise Singapore and subject to change. Information checked 11 October 2026. Always verify current requirements on the Enterprise Singapore website before applying.\n                                "}</Tx>
                </div>
                <h4 className="mt-8 mb-4 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blogedg">{"What is the EDGE Grant — and what does it have to do with ISO?"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blogedg">{"The EDGE Grant supports Singapore companies across business areas including upgrading operations, innovating and expanding overseas. Standards support sits under "}</Tx>
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Standards"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{". ISO certification falls under "}</Tx>
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"EDGE — Standards activities"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{". The rationale: international standards like ISO 27001, ISO 9001, ISO 14001 are often prerequisites for overseas tenders, government procurement, and global supply chains."}</Tx>
                </p>
                <h4 className="mt-8 mb-4 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blogedg">{"How much funding can my company receive?"}</Tx>
                </h4>
                <table className="caption-bottom border-collapse mt-6 mr-0 mb-6 ml-0 w-full">
                  <thead className="border-inherit border-solid [border-width:0]">
                    <tr className="border-inherit border-solid [border-width:0]">
                      <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0] pt-3 pr-3 pb-3 pl-3 [border:1px_solid_#e2e8f0] align-top">
                        <Tx ns="blogedg">{"Company type"}</Tx>
                      </th>
                      <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0] pt-3 pr-3 pb-3 pl-3 [border:1px_solid_#e2e8f0] align-top">
                        <Tx ns="blogedg">{"Standard support level"}</Tx>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-inherit border-solid [border-width:0]">
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 pr-3 pb-3 pl-3 [border:1px_solid_#e2e8f0] align-top">
                        <Tx ns="blogedg">{"SME (≤200 employees OR ≤S$100M annual turnover)"}</Tx>
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 pr-3 pb-3 pl-3 [border:1px_solid_#e2e8f0] align-top">
                        <Tx ns="blogedg">{"Up to "}</Tx>
                        <strong className="[font-weight:bolder]">
                          {"50%"}
                        </strong>
                        <Tx ns="blogedg">{" of qualifying costs"}</Tx>
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 pr-3 pb-3 pl-3 [border:1px_solid_#e2e8f0] align-top">
                        <Tx ns="blogedg">{"Non-SME (large enterprise)"}</Tx>
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 pr-3 pb-3 pl-3 [border:1px_solid_#e2e8f0] align-top">
                        <Tx ns="blogedg">{"Up to "}</Tx>
                        <strong className="[font-weight:bolder]">
                          {"30%"}
                        </strong>
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 pr-3 pb-3 pl-3 [border:1px_solid_#e2e8f0] align-top">
                        <Tx ns="blogedg">{"SME — sustainability (ISO 14001, ISO 50001)"}</Tx>
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 pr-3 pb-3 pl-3 [border:1px_solid_#e2e8f0] align-top">
                        <Tx ns="blogedg">{"Up to "}</Tx>
                        <strong className="[font-weight:bolder]">
                          {"70%"}
                        </strong>
                        <Tx ns="blogedg">{" (SMEs; up to 50% for non-SMEs)"}</Tx>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blogedg">{"The grant is paid as reimbursement after the activity is completed and paid for. All percentages are subject to eligibility and Enterprise Singapore's approval."}</Tx>
                </p>
                <h4 className="mt-8 mb-4 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blogedg">{"Which ISO standards qualify?"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Information security & cybersecurity:"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" ISO/IEC 27001, ISO 27032, ISO 27701, ISO 42001."}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Quality & operations:"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" ISO 22301, ISO 37001."}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Sustainability:"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" ISO 14001, ISO 50001 (enhanced rate), ISO 45001."}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Exclusions:"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Annual surveillance audits, recertification of existing standards, local regulatory compliance, basic commodity standards."}</Tx>
                </p>
                <h4 className="mt-8 mb-4 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blogedg">{"Step-by-step: How to apply for the EDGE Grant for ISO certification"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Step 1 – Confirm eligibility:"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Local equity ≥30%, financially viable, project not commenced."}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Step 2 – Select ISO standard & define scope."}</Tx>
                  </strong>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Step 3 – Engage an SS 680:2021 certified consultant."}</Tx>
                  </strong>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Step 4 – Prepare application documents:"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" ACRA profile, financial statements, detailed project proposal, consultant credentials."}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Step 5 – Submit via Business Grants Portal (CorpPass)."}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Processing ~8–12 weeks."}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Step 6 – Receive Letter of Offer, then commence project."}</Tx>
                  </strong>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Step 7 – Complete ISO project (typically 12–18 months)."}</Tx>
                  </strong>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Step 8 – Submit claim"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" with the deliverables, invoices and the accredited certificate."}</Tx>
                </p>
                <div className="mt-[1.8rem] mr-0 mb-[1.8rem] ml-0 pt-6 pr-[1.8rem] pb-6 pl-[1.8rem] [background:#f8fafc] [border-left:4px_solid_#AB052D] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"⚠️ Most common mistake:"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Starting any chargeable work before grant approval. Do not sign contracts, make payments, or begin gap assessments until you receive the Letter of Offer.\n                                "}</Tx>
                </div>
                <h4 className="mt-8 mb-4 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blogedg">{"What costs can I claim?"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"1. Third-party consultancy fees"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" (by an SS 680:2021 certified consultant) – gap analysis, documentation, implementation."}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"2. Internal manpower costs"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" – incremental salary of employees directly involved in ISO implementation."}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"3. Equipment/software"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" – QMS platform, security tooling required for the standard."}</Tx>
                </p>
                <h4 className="mt-8 mb-4 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blogedg">{"The EDGE Grant — what replaced EDG, MRA and PSG"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blogedg">{"EDG, MRA and PSG ceased on 29 September 2026 and were replaced by the "}</Tx>
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"EDGE Grant"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" from 30 September 2026. Key features: one application route across business areas, and applications made by the business itself on the Business Grants Portal. "}</Tx>
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Recommendation: apply under EDGE before starting any work"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" and check the current activity page for support levels."}</Tx>
                </p>
                <h4 className="mt-8 mb-4 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blogedg">{"How ICFC supports your EDGE Grant application"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blogedg">{"ICFC prepares the proposal, quotation and SS 680 consultant details that EDGE asks for. You apply yourself on the Business Grants Portal with your own authorised staff; we do not apply, pay or claim on your behalf."}</Tx>
                </p>
                <h4 className="mt-8 mb-4 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blogedg">{"Frequently asked questions"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Can I apply for EDGE for multiple ISO standards together?"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Yes – integrated management system (IMS) projects covering two or more standards in one application are possible and often more efficient."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"What if my EDGE application is rejected?"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Resubmit after reviewing reasons. ICFC can explain the proposal details EDGE asks for; any resubmission is made by you."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Can I use SkillsFuture Enterprise Credit (SFEC) alongside EDGE?"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Check the current SFEC and EDGE rules; eligibility depends on each scheme and course."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"Is EDGE worth it for non-SMEs?"}</Tx>
                  </strong>
                  <Tx ns="blogedg">{" Most standards are supported at up to 30% for non-SMEs, subject to eligibility and Enterprise Singapore's approval."}</Tx>
                </p>
                <h4 className="mt-8 mb-4 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blogedg">{"The bottom line"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blogedg">{"The EDGE Grant is the main funding pathway for Singapore SMEs seeking ISO certification, subject to eligibility and approval. The process is clear: apply before starting any work, engage an SS 680:2021 certified consultant, and present a specific, outcome-focused proposal."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blogedg">{"ICFC offers a complimentary eligibility assessment as part of our initial consultation."}</Tx>
                </p>
                <hr className="mt-0 mr-0 mb-0 ml-0 text-inherit [border:none] [border-top:1px_solid] opacity-[1] h-px bg-[#ececec]" />
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blogedg">{"About ICFC Pte Ltd"}</Tx>
                  </strong>
                  <br />
                  <Tx ns="blogedg">{"Singapore's ISO certification partner since 2014. We provide ISO consultation, third-party audit, and training, with proposal support for EDGE applications. Contact: "}</Tx>
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"admin@icfc.com.sg"}</Tx>
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <em>
                    <Tx ns="blogedg">{"© 2026 ICFC Pte Ltd. This article is for informational purposes only and does not constitute professional grant advice. Grant terms subject to change. Verify at enterprisesg.gov.sg."}</Tx>
                  </em>
                </p>
              </div>
              <div className="mt-10 pt-5 pb-5 items-center justify-between flex gap-7.5 flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                <div className="items-center flex flex-wrap gap-3">
                  <span className="font-semibold pe-2.5 text-[#2B3944]">
                    <Tx ns="blogedg">{"Tags:"}</Tx>
                  </span>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"EDGE Grant"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"ISO Certification"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"Enterprise Singapore"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"SME Funding"}</Tx>
                  </SiteLink>
                </div>
                <div>
                  <span className="font-semibold pe-2.5 text-[#2B3944]">
                    <Tx ns="blogedg">{"Share:"}</Tx>
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
                  <Tx ns="blogedg">{"Leave a Comment"}</Tx>
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
                        <Tx ns="blogedg">{"Post Comment"}</Tx>
                      </button>
                    </div>
                  </div>
                </EmailForm>
              </div>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="sticky max-[991px]:relative top-27.5 max-[991px]:top-[unset]">
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  <Tx ns="blogedg">{"Search"}</Tx>
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
                  <Tx ns="blogedg">{"Categories"}</Tx>
                </h5>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blogedg">{"Grant Funding "}</Tx>
                      <span className="">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blogedg">{"ISO 27001 "}</Tx>
                      <span className="">{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blogedg">{"SME Resources "}</Tx>
                      <span className="">{"(5)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  <Tx ns="blogedg">{"Popular Tags"}</Tx>
                </h5>
                <div className="flex flex-wrap gap-3">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"EDGE"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"EDGE Grant"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"ISO 9001"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"Enterprise Singapore"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blogedg">{"Co-funding"}</Tx>
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
