import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogIso42001AiPageContent() {
  return (
    <SitePageTemplate route="blog_ISO42001_AI.html">
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
      title="ISO/IEC 42001: what Singapore AI companies need to know in 2026"
      description="AI governance standard, IMDA crosswalk, PDPA alignment, EDG grant, and certification roadmap for Singapore AI developers and users"
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
                      <span>{"12 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Published by ICFC Pte Ltd"}
                  </strong>
                  {" | April 2026 | 12 min read"}
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Categories:"}
                  </strong>
                  {
                    " ISO 42001 · Artificial intelligence · AI governance · Singapore · Certification"
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Artificial intelligence has moved from a competitive advantage to a business-critical infrastructure layer. Across Singapore's fastest-growing sectors — financial services, healthcare, GovTech, logistics, and HR technology — AI systems are now embedded in hiring decisions, credit approvals, patient triage, fraud detection, and customer service at scale."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "With that scale comes accountability. And with accountability comes a question that more Singapore organisations are being asked by enterprise clients, regulators, and procurement panels every month: "
                  }
                  <em>{"how do we know your AI is governed responsibly?"}</em>
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO/IEC 42001:2023 is the answer the world has standardised on. This article explains what ISO/IEC 42001 requires, how it maps to Singapore's own AI governance landscape, who needs it and why, what implementing it actually involves, and how to achieve certification — including how it connects to Singapore's national AI frameworks and the Enterprise Development Grant (EDG)."
                  }
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#eef2ff] [border-left:4px_solid_#1e3a8a] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"📌 What is ISO/IEC 42001?"}
                  </strong>
                  {
                    " The world's first AI management system standard (Dec 2023). Certifies your "
                  }
                  <strong className="[font-weight:bolder]">
                    {"governance framework"}
                  </strong>
                  {
                    " for AI — not individual models. Follows Plan-Do-Check-Act structure (same as ISO 27001/9001). Singapore adopted as SS ISO/IEC 42001:2024.\n                                "
                  }
                </div>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Why 2026 is the tipping point for Singapore AI companies"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Singapore has adopted ISO/IEC 42001 as a national standard"
                    }
                  </strong>
                  {
                    " – SS ISO/IEC 42001:2024 includes national Annex describing AI Verify as an example alignment tool."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"IMDA's AI governance frameworks directly map"}
                  </strong>
                  {
                    " – AI Verify Foundation published formal crosswalk (June 2024). If you've used AI Verify, significant ISO 42001 groundwork is already done."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Model AI Governance Framework for Agentic AI launched (Jan 2026)"
                    }
                  </strong>
                  {
                    " – covers autonomous AI agents. ISO 42001 provides the management system backbone."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "SAC launched ISO/IEC 42001 accreditation programme (2025)"
                    }
                  </strong>
                  {
                    " – Singapore-issued certificates now have international recognition."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Who needs ISO/IEC 42001?"}
                </h4>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"AI developers & platform providers"}
                    </strong>
                    {
                      " – building LLMs, predictive analytics, AI SaaS products."
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"AI users deploying for consequential decisions"}
                    </strong>
                    {
                      " – hiring, credit, insurance, patient care, fraud detection."
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Organisations responding to supply chain requirements"}
                    </strong>
                    {
                      " – enterprise and government contracts increasingly require AI governance."
                    }
                  </li>
                </ul>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"What does ISO/IEC 42001 actually require?"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Clause structure (HLS):"}
                  </strong>
                  {
                    " Context (Clause 4) → Leadership (5) → Planning (6) → Support (7) → Operation (8) → Evaluation (9) → Improvement (10)."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Annex A — 38 controls across 8 domains:"}
                  </strong>
                </p>
                <table className="[caption-side:bottom] [border-collapse:collapse] mt-[1.5rem] mr-[0] mb-[1.5rem] ml-[0] w-full">
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Domain"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Key controls"}
                      </th>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"A.2 Policies for AI"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"AI policy, governance framework"}
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"A.3 Internal organisation"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Roles, responsibilities, cross‑functional AI governance committee"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"A.4 Resources for AI systems"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Competence, training, awareness"}
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"A.5 Assessing impacts of AI systems"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"AI impact assessment, risk classification"}
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"A.6 AI system life cycle"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {
                          "Data sourcing, development, validation, deployment, monitoring, human oversight"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"A.7 Data for AI systems"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Data quality, data governance, privacy"}
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"A.8 Information for interested parties"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Transparency, explainability, communication"}
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"A.9 Third‑party AI systems"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[10px] pr-[10px] pb-[10px] pl-[10px] [border:1px_solid_#e2e8f0] [vertical-align:top]">
                        {"Supplier AI assessment, procurement controls"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#eef2ff] [border-left:4px_solid_#1e3a8a] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"⚠️ Common mistakes Singapore organisations make:"}
                  </strong>
                  {
                    " Treating it as an IT project (needs board‑level governance); scoping too broadly (start with 2‑3 high‑risk systems); confusing model documentation with management system documentation; neglecting human oversight controls (Annex A.6); waiting for regulation instead of being proactive.\n                                "
                  }
                </div>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"ISO/IEC 42001 and Singapore's AI landscape"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"AI Verify crosswalk:"}
                  </strong>
                  {
                    " AI Verify tests against 11 ethics principles. The formal crosswalk means AI Verify evidence directly supports ISO 42001 documentation. "
                  }
                  <em>
                    {
                      '"The AI Verify framework maps to standards around the world, including ISO/IEC 42001:2023."'
                    }
                  </em>
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"PDPA alignment:"}
                  </strong>
                  {
                    " ISO 42001 Annex A.7 (Data for AI systems) directly addresses purpose limitation, data minimisation, and accountability — supporting PDPA compliance. Organisations with ISO 27701 see substantial overlap."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"NIST AI RMF & EU AI Act:"}
                  </strong>
                  {
                    " IMDA crosswalks to NIST AI RMF. ISO 42001 certification is widely regarded as the most efficient path to EU AI Act conformity for organisations in scope."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Implementation roadmap (typical 4‑6 months)"}
                </h4>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Phase 1 – Gap analysis & AI use case mapping"}
                    </strong>
                    {
                      " (weeks 1‑4): Identify AI systems in scope, document purpose/data/decisions/risk level."
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Phase 2 – Policy & documentation"}
                    </strong>
                    {
                      " (weeks 4‑10): AI policy, governance roles, impact assessment methodology, lifecycle procedures."
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Phase 3 – Control deployment"}
                    </strong>
                    {
                      " (weeks 8‑16): Human oversight checkpoints, monitoring, supplier AI assessment."
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Phase 4 – Internal audit & management review"}
                    </strong>
                    {" (weeks 14‑18)."}
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"Phase 5 – Certification audit"}
                    </strong>
                    {
                      " (weeks 18‑24): Stage 1 (documentation) + Stage 2 (implementation verification)."
                    }
                  </li>
                </ul>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Funding & costs"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Estimated costs (Singapore):"}
                  </strong>
                  {
                    " Consultation S$15,000‑S$40,000; certification body audit S$4,000‑S$10,000; internal effort 100‑250 hours."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"EDG grant:"}
                  </strong>
                  {
                    " ISO/IEC 42001 eligible under Standards Adoption category — up to 50% co‑funding for qualifying SMEs. Enhanced 70% may apply if AI governance has sustainability dimension. "
                  }
                  <strong className="[font-weight:bolder]">
                    {"Critical:"}
                  </strong>
                  {" apply before any project work commences."}
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Combining with other ISO standards"}
                </h4>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"+ ISO/IEC 27001:"}
                    </strong>
                    {
                      " Most common combination – AI data governance + information security. Overlap reduces effort ~20‑30%."
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"+ ISO/IEC 27701:"}
                    </strong>
                    {
                      " Privacy + AI governance – directly addresses PDPA across AI lifecycle."
                    }
                  </li>
                  <li>
                    <strong className="[font-weight:bolder]">
                      {"+ ISO 9001:"}
                    </strong>
                    {
                      " For AI product companies – integrated quality + AI governance."
                    }
                  </li>
                </ul>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Frequently asked questions"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Does ISO/IEC 42001 cover generative AI / LLMs?"}
                  </strong>
                  {
                    " Yes. Technology‑neutral. Transparency and human oversight controls are particularly relevant for generative AI."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "We use third‑party AI tools (Microsoft Copilot). Do we need to certify those tools?"
                    }
                  </strong>
                  {" No – ISO 42001 certifies "}
                  <em>{"your"}</em>
                  {
                    " management system. Annex A.9 requires you to assess third‑party AI risks. Microsoft 365 Copilot undergoes independent ISO 42001 audits – you can leverage their certification evidence."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"How does ISO 42001 relate to EU AI Act?"}
                  </strong>
                  {
                    " ISO 42001 is the most practical management system framework for supporting EU AI Act compliance – risk‑based approach and governance controls address many of the same requirements."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"We're a small AI startup. Is this appropriate?"}
                  </strong>
                  {
                    " Yes, with appropriate scoping. ICFC has implemented for 5‑person startups to multinationals. Narrow initial scope (1‑2 AI systems) is achievable and commercially valuable for enterprise contracts."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"How long does certification last?"}
                  </strong>
                  {" Three‑year cycle with annual surveillance audits."}
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"The bottom line"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO/IEC 42001 gives Singapore's Model AI Governance Framework, AI Verify, and PDPA requirements a certifiable, internationally recognised structure. For Singapore AI companies in 2026, the question is no longer whether to govern AI responsibly — it's whether to make that governance visible, auditable, and certifiable."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ICFC offers a complimentary AI governance readiness assessment as part of our free initial consultation."
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"About ICFC Pte Ltd"}
                  </strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. Specialist practices: ISO/IEC 42001 (AI), ISO/IEC 27001, ISO/IEC 27701 (PDPA), and integrated management systems. Contact: "
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
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. Regulatory frameworks, standard requirements, and grant terms subject to change. Refer to IMDA, PDPC, Enterprise Singapore, and ISO official sources."
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
                    {"ISO 42001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"AI Governance"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"IMDA"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"AI Verify"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"PDPA"}
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
                      {"AI Governance "}
                      <span>{"(8)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ISO 42001 "}
                      <span>{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"IMDA Frameworks "}
                      <span>{"(5)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"PDPA "}
                      <span>{"(7)"}</span>
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
                    {"ISO/IEC 42001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"AI Verify"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Agentic AI"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"EDG Grant"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"AIMS"}
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
