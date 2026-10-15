import { Tx } from "@/components/atoms/tx";
import { SiteLink } from "@/components/atoms/site-link";
import { BlogSidebar } from "@/components/molecules/blog-sidebar";
import { BlogPostTemplate } from "@/components/templates/blog-post-template";

export function BlogedgPageContent() {
  return (
    <BlogPostTemplate
      route="blogedg"
      ns="blogedg"
      title="How to apply for the Enterprise Singapore EDGE Grant for ISO certification in Singapore (2026 guide)"
      description="Step-by-step EDGE Grant application for ISO standards, with up to 50-70% support for SMEs, subject to eligibility and Enterprise Singapore's approval."
      meta={{
        authorImage: "/assets/images/blog/details/blog-details-01.webp",
        by: "By ",
        author: "ICFC Pte Ltd",
        date: "April 2026",
        readTime: "10 min read",
      }}
      tags={[
        ["EDGE Grant", "/contact-us"],
        ["ISO Certification", "/contact-us"],
        ["Enterprise Singapore", "/contact-us"],
        ["SME Funding", "/contact-us"],
      ]}
      sidebar={
        <BlogSidebar
          ns="blogedg"
          categories={[
            ["Grant Funding ", 4, "/contact-us"],
            ["ISO 27001 ", 6, "/contact-us"],
            ["SME Resources ", 5, "/contact-us"],
          ]}
          popularTags={[
            ["EDGE", "/contact-us"],
            ["EDGE Grant", "/contact-us"],
            ["ISO 9001", "/contact-us"],
            ["Enterprise Singapore", "/contact-us"],
            ["Co-funding", "/contact-us"],
          ]}
        />
      }
    >
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
    </BlogPostTemplate>
  );
}
