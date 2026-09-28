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
      title="ISO/IEC 42001: what Singapore AI companies need to know in 2026"
      description="AI governance is now certifiable – ISO 42001 requirements, Singapore AI Verify alignment, PDPA connection, and implementation roadmap"
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
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C4.83447 1.06016 4.83447 1.3335V3.3335Z"
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
                      <span className="">{"12 min read"}</span>
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
                    "ISO/IEC 42001:2023 is the answer the world has standardised on."
                  }
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#eef2ff] [border-left:4px_solid_#1e3a8a] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"📌 Why 2026 is the tipping point:"}
                  </strong>
                  {
                    " Singapore adopted ISO/IEC 42001 as national standard (SS ISO/IEC 42001:2024). IMDA's AI Verify directly maps to ISO 42001. New Model AI Governance Framework for Agentic AI launched Jan 2026. SAC accreditation programme is live. Procurement requirements are shifting.\n                                "
                  }
                </div>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"What is ISO/IEC 42001?"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO/IEC 42001 is an international standard that specifies requirements for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS) within organisations. Published in December 2023, it is the world's first AI management system standard. It addresses unique AI challenges such as ethical considerations, transparency, and continuous learning."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {"Importantly, ISO/IEC 42001 is a "}
                  <strong className="[font-weight:bolder]">
                    {"management system standard (MSS)"}
                  </strong>
                  {
                    " following the same Plan-Do-Check-Act structure as ISO 9001 and ISO 27001. It certifies that your organisation has a robust, auditable system for governing AI — policies, processes, risk assessments, and controls — not that a specific algorithm is unbiased."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Why 2026 is the tipping point for Singapore AI companies"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Singapore has adopted ISO/IEC 42001 as a national standard"
                    }
                  </strong>
                  {
                    " – SS ISO/IEC 42001:2024, with national Annex describing AI Verify as an example of a voluntary testing tool."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "IMDA's AI governance frameworks directly map to ISO/IEC 42001"
                    }
                  </strong>
                  {
                    " – The AI Verify Foundation published a formal crosswalk (June 2024). If you've used AI Verify, much of your ISO 42001 groundwork is done."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Model AI Governance Framework for Agentic AI launched January 2026"
                    }
                  </strong>
                  {
                    " – Governing autonomous AI agents; ISO 42001 provides the management system backbone."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"SAC accreditation programme for ISO/IEC 42001"}
                  </strong>
                  {
                    " – Certification bodies can now be formally accredited to issue ISO 42001 certificates with international recognition."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Who needs ISO/IEC 42001?"}
                </h4>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"AI developers and platform providers"}
                    </strong>
                    {" – building AI models, LLM apps, AI-powered SaaS."}
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"AI users deploying AI for consequential decisions"}
                    </strong>
                    {" – hiring, credit, healthcare, fraud detection."}
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {
                        "Organisations responding to supply chain/procurement requirements"
                      }
                    </strong>
                    {
                      " – enterprise and government contracts increasingly require AI governance certification."
                    }
                  </li>
                </ul>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"What does ISO/IEC 42001 actually require?"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "The standard follows the High Level Structure (HLS) with clauses 4–10:"
                  }
                </p>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Clause 4 – Context:"}
                    </strong>
                    {
                      " Understand AI systems, stakeholders, obligations, risk classification."
                    }
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Clause 5 – Leadership:"}
                    </strong>
                    {
                      " Top management commitment, AI policy, roles and responsibilities."
                    }
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Clause 6 – Planning:"}
                    </strong>
                    {
                      " AI-specific risk assessment (bias, opacity, data quality, unintended consequences)."
                    }
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Clause 7 – Support:"}
                    </strong>
                    {" Resources, competence, awareness."}
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Clause 8 – Operation:"}
                    </strong>
                    {
                      " Controls across AI lifecycle (design, data, dev, deployment, monitoring)."
                    }
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Clause 9 – Evaluation:"}
                    </strong>
                    {" Monitoring, internal audit, management review."}
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Clause 10 – Improvement:"}
                    </strong>
                    {" Corrective action, continual improvement."}
                  </li>
                </ul>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Annex A contains 38 controls"}
                  </strong>
                  {
                    " across 8 domains: AI policies, internal org, resources, impact assessment, lifecycle, data for AI, information to stakeholders, third-party AI use."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "How ISO/IEC 42001 relates to Singapore's AI governance landscape"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"AI Verify + ISO 42001:"}
                  </strong>
                  {
                    " Formal crosswalk means AI Verify evidence directly supports ISO 42001 documentation. Organisations that have completed AI Verify self-assessments have a head start."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"PDPA and ISO 42001:"}
                  </strong>
                  {
                    " Controls on data quality and data governance (Annex A.7) directly address PDPA obligations (purpose limitation, accountability for automated decisions). Combined with ISO 27701, coverage is substantial."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"NIST AI RMF & EU AI Act:"}
                  </strong>
                  {
                    " Crosswalks exist; ISO 42001 certification signals alignment with multiple global frameworks, reducing compliance friction."
                  }
                </p>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Common mistakes Singapore organisations make"}
                </h4>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Treating it as an IT project"}
                    </strong>
                    {
                      " – Requires executive sponsorship and cross-functional (legal, HR, product, tech)."
                    }
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Scoping too broadly"}
                    </strong>
                    {" – Start with 2-3 highest-risk AI systems, then expand."}
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Confusing model docs with management system docs"}
                    </strong>
                    {
                      " – Need governance processes documentation, not just model cards."
                    }
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Neglecting human oversight controls"}
                    </strong>
                    {
                      " – Key for consequential decisions; common audit non-conformity."
                    }
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      {"Waiting for regulation"}
                    </strong>
                    {
                      " – IMDA frameworks already function as benchmarks in procurement."
                    }
                  </li>
                </ul>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"ISO/IEC 42001 implementation roadmap (4–6 months)"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Phase 1 – Gap analysis (weeks 1-4):"}
                  </strong>
                  {
                    " Map AI systems, document purpose, risk level, current governance. Output: gap report."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Phase 2 – Policy & documentation (weeks 4-10):"}
                  </strong>
                  {
                    " AI policy, roles, risk assessment methodology, lifecycle procedures."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Phase 3 – Control deployment (weeks 8-16):"}
                  </strong>
                  {
                    " Implement Annex A controls, human oversight, monitoring, third-party AI assessment."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Phase 4 – Internal audit (weeks 14-18):"}
                  </strong>
                  {" Full internal audit and management review."}
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Phase 5 – Certification audit (weeks 18-24):"}
                  </strong>
                  {" Stage 1 (documentation) + Stage 2 (implementation)."}
                </p>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Combining ISO 42001 with other standards"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"+ ISO 27001:"}
                  </strong>
                  {
                    " Most common combination. Shared controls reduce effort by 20-30%."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"+ ISO 27701:"}
                  </strong>
                  {
                    " Comprehensive privacy and AI governance, directly addresses PDPA across AI lifecycle."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"+ ISO 9001:"}
                  </strong>
                  {
                    " For AI product companies serving enterprise clients with QMS requirements."
                  }
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#eef2ff] [border-left:4px_solid_#1e3a8a] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"💰 Funding & costs:"}
                  </strong>
                  {
                    " Consultation S$15k–S$40k, certification audit S$4k–S$10k. ISO/IEC 42001 is eligible for EDG grant (Standards Adoption) up to 50% for SMEs. Sustainability-related AI projects may qualify for enhanced 70% rate. Apply "
                  }
                  <em>{"before"}</em>
                  {" project commencement.\n                                "}
                </div>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Frequently asked questions"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Does ISO 42001 cover generative AI and LLMs?"}
                  </strong>
                  {
                    " Yes – technology-neutral, applies to all AI types. Annex A controls on transparency and human oversight are particularly relevant for gen AI."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "We use third-party AI tools (Microsoft Copilot, etc). Do we need to certify?"
                    }
                  </strong>
                  {
                    " No – your organisation's AIMS is certified. Annex A.9 requires assessing third-party AI risks. If the platform is ISO 42001 certified (e.g., Microsoft 365 Copilot audits), you can leverage their evidence."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"How does ISO 42001 relate to EU AI Act?"}
                  </strong>
                  {
                    " Widely regarded as the most practical management system framework for supporting EU AI Act compliance for organisations in scope."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Is it relevant for small AI startups?"}
                  </strong>
                  {
                    " Yes – with appropriate scoping. A narrowly scoped implementation covering one or two AI systems is both achievable and commercially valuable for winning enterprise contracts."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Certificate validity?"}
                  </strong>
                  {" Three-year cycle with annual surveillance audits."}
                </p>
                <h4 className="mt-[2rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"The bottom line"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO/IEC 42001 takes Singapore's Model AI Governance Framework, AI Verify, and PDPA requirements and gives them a certifiable, internationally recognised structure. For Singapore AI companies in 2026, the question is no longer whether to govern AI responsibly, but whether to make that governance visible, auditable, and certifiable."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ICFC is one of Singapore's first ISO consultancies to offer ISO/IEC 42001 consultation, gap analysis, and lead auditor training. Contact us for a complimentary AI governance readiness assessment."
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"About ICFC Pte Ltd"}
                  </strong>
                  <br />
                  {
                    "Singapore's ISO certification partner since 2014. We provide ISO consultation, third-party audit, and training across 25 industries – including specialist practices in ISO/IEC 42001 (AI), ISO 27001, ISO 27701, and integrated management systems. Contact: "
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
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. Regulatory frameworks, standard requirements, and grant terms subject to change. Refer to IMDA, PDPC, Enterprise Singapore, and ISO for current requirements."
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
                    {"ISO 42001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"AI Governance"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Singapore"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"AIMS"}
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
                      {"AI Governance "}
                      <span className="">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"ISO 42001 "}
                      <span className="">{"(3)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"Singapore Tech "}
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
                    {"ISO 42001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"AIMS"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"AI Verify"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Agentic AI"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"PDPA"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"IMDA"}
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
