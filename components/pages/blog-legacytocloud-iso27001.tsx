import { Tx } from "@/components/atoms/tx";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogLegacytocloudIso27001PageContent() {
  return (
    <SitePageTemplate route="blog_LegacyToCloud_ISO27001">
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
      title={<Tx ns="blog-legacytocloud-iso27001">{"ISO/IEC 42001: what Singapore AI companies need to know in 2026"}</Tx>}
      description={<Tx ns="blog-legacytocloud-iso27001">{"AI governance is now certifiable – ISO 42001 requirements, Singapore AI Verify alignment, PDPA connection, and implementation roadmap"}</Tx>}
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
                        <Tx ns="blog-legacytocloud-iso27001">{"By "}</Tx>
                        <SiteLink
                          href="/contact-us"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-legacytocloud-iso27001">{"ICFC Pte Ltd"}</Tx>
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
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C4.83447 1.06016 4.83447 1.3335V3.3335Z"
                          fill="white"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                      <span className=""><Tx ns="blog-legacytocloud-iso27001">{"April 2026"}</Tx></span>
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
                      <span className=""><Tx ns="blog-legacytocloud-iso27001">{"12 min read"}</Tx></span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Published by ICFC Pte Ltd"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" | April 2026 | 12 min read"}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Categories:"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" ISO 42001 · Artificial intelligence · AI governance · Singapore · Certification"}</Tx>
                </p>
                <hr className="mt-0 mr-0 mb-0 ml-0 text-inherit [border:none] [border-top:1px_solid] opacity-[1] h-px bg-[#ececec]" />
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-legacytocloud-iso27001">{"Artificial intelligence has moved from a competitive advantage to a business-critical infrastructure layer. Across Singapore's fastest-growing sectors — financial services, healthcare, GovTech, logistics, and HR technology — AI systems are now embedded in hiring decisions, credit approvals, patient triage, fraud detection, and customer service at scale."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-legacytocloud-iso27001">{"With that scale comes accountability. And with accountability comes a question that more Singapore organisations are being asked by enterprise clients, regulators, and procurement panels every month: "}</Tx>
                  <em><Tx ns="blog-legacytocloud-iso27001">{"how do we know your AI is governed responsibly?"}</Tx></em>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-legacytocloud-iso27001">{"ISO/IEC 42001:2023 is the answer the world has standardised on."}</Tx>
                </p>
                <div className="mt-[1.8rem] mr-0 mb-[1.8rem] ml-0 pt-6 pr-[1.8rem] pb-6 pl-[1.8rem] [background:#eef2ff] [border-left:4px_solid_#1e3a8a] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"📌 Why 2026 is the tipping point:"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Singapore adopted ISO/IEC 42001 as national standard (SS ISO/IEC 42001:2024). IMDA's AI Verify directly maps to ISO 42001. New Model AI Governance Framework for Agentic AI launched Jan 2026. SAC accreditation programme is live. Procurement requirements are shifting.\n                                "}</Tx>
                </div>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"What is ISO/IEC 42001?"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-legacytocloud-iso27001">{"ISO/IEC 42001 is an international standard that specifies requirements for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS) within organisations. Published in December 2023, it is the world's first AI management system standard. It addresses unique AI challenges such as ethical considerations, transparency, and continuous learning."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-legacytocloud-iso27001">{"Importantly, ISO/IEC 42001 is a "}</Tx>
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"management system standard (MSS)"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" following the same Plan-Do-Check-Act structure as ISO 9001 and ISO 27001. It certifies that your organisation has a robust, auditable system for governing AI — policies, processes, risk assessments, and controls — not that a specific algorithm is unbiased."}</Tx>
                </p>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"Why 2026 is the tipping point for Singapore AI companies"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Singapore has adopted ISO/IEC 42001 as a national standard"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" – SS ISO/IEC 42001:2024, with national Annex describing AI Verify as an example of a voluntary testing tool."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"IMDA's AI governance frameworks directly map to ISO/IEC 42001"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" – The AI Verify Foundation published a formal crosswalk (June 2024). If you've used AI Verify, much of your ISO 42001 groundwork is done."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Model AI Governance Framework for Agentic AI launched January 2026"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" – Governing autonomous AI agents; ISO 42001 provides the management system backbone."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"SAC accreditation programme for ISO/IEC 42001"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" – Certification bodies can now be formally accredited to issue ISO 42001 certificates with international recognition."}</Tx>
                </p>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"Who needs ISO/IEC 42001?"}</Tx>
                </h4>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"AI developers and platform providers"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" – building AI models, LLM apps, AI-powered SaaS."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"AI users deploying AI for consequential decisions"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" – hiring, credit, healthcare, fraud detection."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Organisations responding to supply chain/procurement requirements"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" – enterprise and government contracts increasingly require AI governance certification."}</Tx>
                  </li>
                </ul>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"What does ISO/IEC 42001 actually require?"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-legacytocloud-iso27001">{"The standard follows the High Level Structure (HLS) with clauses 4–10:"}</Tx>
                </p>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Clause 4 – Context:"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" Understand AI systems, stakeholders, obligations, risk classification."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Clause 5 – Leadership:"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" Top management commitment, AI policy, roles and responsibilities."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Clause 6 – Planning:"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" AI-specific risk assessment (bias, opacity, data quality, unintended consequences)."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Clause 7 – Support:"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" Resources, competence, awareness."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Clause 8 – Operation:"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" Controls across AI lifecycle (design, data, dev, deployment, monitoring)."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Clause 9 – Evaluation:"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" Monitoring, internal audit, management review."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Clause 10 – Improvement:"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" Corrective action, continual improvement."}</Tx>
                  </li>
                </ul>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Annex A contains 38 controls"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" across 8 domains: AI policies, internal org, resources, impact assessment, lifecycle, data for AI, information to stakeholders, third-party AI use."}</Tx>
                </p>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"How ISO/IEC 42001 relates to Singapore's AI governance landscape"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"AI Verify + ISO 42001:"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Formal crosswalk means AI Verify evidence directly supports ISO 42001 documentation. Organisations that have completed AI Verify self-assessments have a head start."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"PDPA and ISO 42001:"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Controls on data quality and data governance (Annex A.7) directly address PDPA obligations (purpose limitation, accountability for automated decisions). Combined with ISO 27701, coverage is substantial."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"NIST AI RMF & EU AI Act:"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Crosswalks exist; ISO 42001 certification signals alignment with multiple global frameworks, reducing compliance friction."}</Tx>
                </p>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"Common mistakes Singapore organisations make"}</Tx>
                </h4>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Treating it as an IT project"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" – Requires executive sponsorship and cross-functional (legal, HR, product, tech)."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Scoping too broadly"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" – Start with 2-3 highest-risk AI systems, then expand."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Confusing model docs with management system docs"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" – Need governance processes documentation, not just model cards."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Neglecting human oversight controls"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" – Key for consequential decisions; common audit non-conformity."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-legacytocloud-iso27001">{"Waiting for regulation"}</Tx>
                    </strong>
                    <Tx ns="blog-legacytocloud-iso27001">{" – IMDA frameworks already function as benchmarks in procurement."}</Tx>
                  </li>
                </ul>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"ISO/IEC 42001 implementation roadmap (4–6 months)"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Phase 1 – Gap analysis (weeks 1-4):"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Map AI systems, document purpose, risk level, current governance. Output: gap report."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Phase 2 – Policy & documentation (weeks 4-10):"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" AI policy, roles, risk assessment methodology, lifecycle procedures."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Phase 3 – Control deployment (weeks 8-16):"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Implement Annex A controls, human oversight, monitoring, third-party AI assessment."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Phase 4 – Internal audit (weeks 14-18):"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Full internal audit and management review."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Phase 5 – Certification audit (weeks 18-24):"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Stage 1 (documentation) + Stage 2 (implementation)."}</Tx>
                </p>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"Combining ISO 42001 with other standards"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"+ ISO 27001:"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Most common combination. Shared controls reduce effort by 20-30%."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"+ ISO 27701:"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Comprehensive privacy and AI governance, directly addresses PDPA across AI lifecycle."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"+ ISO 9001:"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" For AI product companies serving enterprise clients with QMS requirements."}</Tx>
                </p>
                <div className="mt-[1.8rem] mr-0 mb-[1.8rem] ml-0 pt-6 pr-[1.8rem] pb-6 pl-[1.8rem] [background:#eef2ff] [border-left:4px_solid_#1e3a8a] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"💰 Funding & costs:"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Consultation S$15k–S$40k, certification audit S$4k–S$10k. ISO/IEC 42001 is listed under the EDGE Grant, with most standards up to 50% for SMEs, subject to eligibility and Enterprise Singapore's approval. Apply "}</Tx>
                  <em><Tx ns="blog-legacytocloud-iso27001">{"before"}</Tx></em>
                  <Tx ns="blog-legacytocloud-iso27001">{" project commencement.\n                                "}</Tx>
                </div>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"Frequently asked questions"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Does ISO 42001 cover generative AI and LLMs?"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Yes – technology-neutral, applies to all AI types. Annex A controls on transparency and human oversight are particularly relevant for gen AI."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"We use third-party AI tools (Microsoft Copilot, etc). Do we need to certify?"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" No – your organisation's AIMS is certified. Annex A.9 requires assessing third-party AI risks. If the platform is ISO 42001 certified (e.g., Microsoft 365 Copilot audits), you can leverage their evidence."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"How does ISO 42001 relate to EU AI Act?"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Widely regarded as the most practical management system framework for supporting EU AI Act compliance for organisations in scope."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Is it relevant for small AI startups?"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Yes – with appropriate scoping. A narrowly scoped implementation covering one or two AI systems is both achievable and commercially valuable for winning enterprise contracts."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Certificate validity?"}</Tx>
                  </strong>
                  <Tx ns="blog-legacytocloud-iso27001">{" Three-year cycle with annual surveillance audits."}</Tx>
                </p>
                <h4 className="mt-8 mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"The bottom line"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-legacytocloud-iso27001">{"ISO/IEC 42001 takes Singapore's Model AI Governance Framework, AI Verify, and PDPA requirements and gives them a certifiable, internationally recognised structure. For Singapore AI companies in 2026, the question is no longer whether to govern AI responsibly, but whether to make that governance visible, auditable, and certifiable."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-legacytocloud-iso27001">{"ICFC is one of Singapore's first ISO consultancies to offer ISO/IEC 42001 consultation, gap analysis, and lead auditor training. Contact us for a complimentary AI governance readiness assessment."}</Tx>
                </p>
                <hr className="mt-0 mr-0 mb-0 ml-0 text-inherit [border:none] [border-top:1px_solid] opacity-[1] h-px bg-[#ececec]" />
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-legacytocloud-iso27001">{"About ICFC Pte Ltd"}</Tx>
                  </strong>
                  <br />
                  <Tx ns="blog-legacytocloud-iso27001">{"Singapore's ISO certification partner since 2014. We provide ISO consultation, third-party audit, and training across 25 industries – including specialist practices in ISO/IEC 42001 (AI), ISO 27001, ISO 27701, and integrated management systems. Contact: "}</Tx>
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"admin@icfc.com.sg"}</Tx>
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <em>
                    <Tx ns="blog-legacytocloud-iso27001">{"© 2026 ICFC Pte Ltd. This article is for informational purposes only. Regulatory frameworks, standard requirements, and grant terms subject to change. Refer to IMDA, PDPC, Enterprise Singapore, and ISO for current requirements."}</Tx>
                  </em>
                </p>
              </div>
              <div className="mt-10 pt-5 pb-5 items-center justify-between flex gap-7.5 flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                <div className="items-center flex flex-wrap gap-3">
                  <span className="font-semibold pe-2.5 text-[#2B3944]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Tags:"}</Tx>
                  </span>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"ISO 42001"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"AI Governance"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"Singapore"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"AIMS"}</Tx>
                  </SiteLink>
                </div>
                <div>
                  <span className="font-semibold pe-2.5 text-[#2B3944]">
                    <Tx ns="blog-legacytocloud-iso27001">{"Share:"}</Tx>
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
                  <Tx ns="blog-legacytocloud-iso27001">{"Leave a Comment"}</Tx>
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
                        <Tx ns="blog-legacytocloud-iso27001">{"Post Comment"}</Tx>
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
                  <Tx ns="blog-legacytocloud-iso27001">{"Search"}</Tx>
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
                  <Tx ns="blog-legacytocloud-iso27001">{"Categories"}</Tx>
                </h5>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-legacytocloud-iso27001">{"AI Governance "}</Tx>
                      <span className="">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-legacytocloud-iso27001">{"ISO 42001 "}</Tx>
                      <span className="">{"(3)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-legacytocloud-iso27001">{"Singapore Tech "}</Tx>
                      <span className="">{"(5)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  <Tx ns="blog-legacytocloud-iso27001">{"Popular Tags"}</Tx>
                </h5>
                <div className="flex flex-wrap gap-3">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"ISO 42001"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"AIMS"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"AI Verify"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"Agentic AI"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"PDPA"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-legacytocloud-iso27001">{"IMDA"}</Tx>
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
