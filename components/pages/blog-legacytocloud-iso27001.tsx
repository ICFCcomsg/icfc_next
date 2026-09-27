import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogLegacytocloudIso27001PageContent() {
  return (
    <SitePageTemplate
      route="blog_LegacyToCloud_ISO27001.html"
      stylesheets={[
        "/assets/css/vendor/bootstrap.min.css",
        "/assets/css/vendor/animate.min.css",
        "/assets/css/plugins/swiper.min.css",
        "/assets/css/plugins/nice-select.css",
        "/assets/css/plugins/flatpickr.min.css",
        "/assets/css/plugins/nouislider.min.css",
        "/assets/css/vendor/magnific-popup.css",
        "/assets/css/vendor/odometer.min.css",
        "/assets/css/vendor/spacing.css",
        "https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css",
        "/assets/css/main.css",
        "/assets/css/whatsapp-float.css",
        "/styles/pages/blog-legacytocloud-iso27001.css",
      ]}
    >
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
      className="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="rs-postbox-area section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-8 col-lg-7">
            <div className="rs-postbox-details-wrapper">
              <div className="rs-post-meta">
                <ul>
                  <li>
                    <span className="rs-meta">
                      <span className="rs-meta-thumb">
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                        />
                      </span>
                      <span className="rs-meta-content">
                        {"By "}
                        <SiteLink href="/contact-us.html">
                          {"ICFC Pte Ltd"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="rs-meta">
                      <svg width="14" height="16">
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C4.83447 1.06016 4.83447 1.3335V3.3335Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span>{"April 2026"}</span>
                    </span>
                  </li>
                  <li>
                    <span className="rs-meta">
                      <svg width="12" height="12">
                        <path
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12Z"
                          fill="#616C74"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                        ></path>
                      </svg>
                      <span>{"12 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rs-postbox-details-content">
                <p>
                  <strong>{"Published by ICFC Pte Ltd"}</strong>
                  {" | April 2026 | 12 min read"}
                  <br />
                  <strong>{"Categories:"}</strong>
                  {
                    " ISO 42001 · Artificial intelligence · AI governance · Singapore · Certification"
                  }
                </p>
                <hr />
                <p>
                  {
                    "Artificial intelligence has moved from a competitive advantage to a business-critical infrastructure layer. Across Singapore's fastest-growing sectors — financial services, healthcare, GovTech, logistics, and HR technology — AI systems are now embedded in hiring decisions, credit approvals, patient triage, fraud detection, and customer service at scale."
                  }
                </p>
                <p>
                  {
                    "With that scale comes accountability. And with accountability comes a question that more Singapore organisations are being asked by enterprise clients, regulators, and procurement panels every month: "
                  }
                  <em>{"how do we know your AI is governed responsibly?"}</em>
                </p>
                <p>
                  {
                    "ISO/IEC 42001:2023 is the answer the world has standardised on."
                  }
                </p>
                <div className="postbox-highlight-box">
                  <strong>{"📌 Why 2026 is the tipping point:"}</strong>
                  {
                    " Singapore adopted ISO/IEC 42001 as national standard (SS ISO/IEC 42001:2024). IMDA's AI Verify directly maps to ISO 42001. New Model AI Governance Framework for Agentic AI launched Jan 2026. SAC accreditation programme is live. Procurement requirements are shifting.\n                                "
                  }
                </div>
                <h4>{"What is ISO/IEC 42001?"}</h4>
                <p>
                  {
                    "ISO/IEC 42001 is an international standard that specifies requirements for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS) within organisations. Published in December 2023, it is the world's first AI management system standard. It addresses unique AI challenges such as ethical considerations, transparency, and continuous learning."
                  }
                </p>
                <p>
                  {"Importantly, ISO/IEC 42001 is a "}
                  <strong>{"management system standard (MSS)"}</strong>
                  {
                    " following the same Plan-Do-Check-Act structure as ISO 9001 and ISO 27001. It certifies that your organisation has a robust, auditable system for governing AI — policies, processes, risk assessments, and controls — not that a specific algorithm is unbiased."
                  }
                </p>
                <h4>
                  {"Why 2026 is the tipping point for Singapore AI companies"}
                </h4>
                <p>
                  <strong>
                    {
                      "Singapore has adopted ISO/IEC 42001 as a national standard"
                    }
                  </strong>
                  {
                    " – SS ISO/IEC 42001:2024, with national Annex describing AI Verify as an example of a voluntary testing tool."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "IMDA's AI governance frameworks directly map to ISO/IEC 42001"
                    }
                  </strong>
                  {
                    " – The AI Verify Foundation published a formal crosswalk (June 2024). If you've used AI Verify, much of your ISO 42001 groundwork is done."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "Model AI Governance Framework for Agentic AI launched January 2026"
                    }
                  </strong>
                  {
                    " – Governing autonomous AI agents; ISO 42001 provides the management system backbone."
                  }
                </p>
                <p>
                  <strong>
                    {"SAC accreditation programme for ISO/IEC 42001"}
                  </strong>
                  {
                    " – Certification bodies can now be formally accredited to issue ISO 42001 certificates with international recognition."
                  }
                </p>
                <h4>{"Who needs ISO/IEC 42001?"}</h4>
                <ul>
                  <li>
                    <strong>{"AI developers and platform providers"}</strong>
                    {" – building AI models, LLM apps, AI-powered SaaS."}
                  </li>
                  <li>
                    <strong>
                      {"AI users deploying AI for consequential decisions"}
                    </strong>
                    {" – hiring, credit, healthcare, fraud detection."}
                  </li>
                  <li>
                    <strong>
                      {
                        "Organisations responding to supply chain/procurement requirements"
                      }
                    </strong>
                    {
                      " – enterprise and government contracts increasingly require AI governance certification."
                    }
                  </li>
                </ul>
                <h4>{"What does ISO/IEC 42001 actually require?"}</h4>
                <p>
                  {
                    "The standard follows the High Level Structure (HLS) with clauses 4–10:"
                  }
                </p>
                <ul>
                  <li>
                    <strong>{"Clause 4 – Context:"}</strong>
                    {
                      " Understand AI systems, stakeholders, obligations, risk classification."
                    }
                  </li>
                  <li>
                    <strong>{"Clause 5 – Leadership:"}</strong>
                    {
                      " Top management commitment, AI policy, roles and responsibilities."
                    }
                  </li>
                  <li>
                    <strong>{"Clause 6 – Planning:"}</strong>
                    {
                      " AI-specific risk assessment (bias, opacity, data quality, unintended consequences)."
                    }
                  </li>
                  <li>
                    <strong>{"Clause 7 – Support:"}</strong>
                    {" Resources, competence, awareness."}
                  </li>
                  <li>
                    <strong>{"Clause 8 – Operation:"}</strong>
                    {
                      " Controls across AI lifecycle (design, data, dev, deployment, monitoring)."
                    }
                  </li>
                  <li>
                    <strong>{"Clause 9 – Evaluation:"}</strong>
                    {" Monitoring, internal audit, management review."}
                  </li>
                  <li>
                    <strong>{"Clause 10 – Improvement:"}</strong>
                    {" Corrective action, continual improvement."}
                  </li>
                </ul>
                <p>
                  <strong>{"Annex A contains 38 controls"}</strong>
                  {
                    " across 8 domains: AI policies, internal org, resources, impact assessment, lifecycle, data for AI, information to stakeholders, third-party AI use."
                  }
                </p>
                <h4>
                  {
                    "How ISO/IEC 42001 relates to Singapore's AI governance landscape"
                  }
                </h4>
                <p>
                  <strong>{"AI Verify + ISO 42001:"}</strong>
                  {
                    " Formal crosswalk means AI Verify evidence directly supports ISO 42001 documentation. Organisations that have completed AI Verify self-assessments have a head start."
                  }
                </p>
                <p>
                  <strong>{"PDPA and ISO 42001:"}</strong>
                  {
                    " Controls on data quality and data governance (Annex A.7) directly address PDPA obligations (purpose limitation, accountability for automated decisions). Combined with ISO 27701, coverage is substantial."
                  }
                </p>
                <p>
                  <strong>{"NIST AI RMF & EU AI Act:"}</strong>
                  {
                    " Crosswalks exist; ISO 42001 certification signals alignment with multiple global frameworks, reducing compliance friction."
                  }
                </p>
                <h4>{"Common mistakes Singapore organisations make"}</h4>
                <ul>
                  <li>
                    <strong>{"Treating it as an IT project"}</strong>
                    {
                      " – Requires executive sponsorship and cross-functional (legal, HR, product, tech)."
                    }
                  </li>
                  <li>
                    <strong>{"Scoping too broadly"}</strong>
                    {" – Start with 2-3 highest-risk AI systems, then expand."}
                  </li>
                  <li>
                    <strong>
                      {"Confusing model docs with management system docs"}
                    </strong>
                    {
                      " – Need governance processes documentation, not just model cards."
                    }
                  </li>
                  <li>
                    <strong>{"Neglecting human oversight controls"}</strong>
                    {
                      " – Key for consequential decisions; common audit non-conformity."
                    }
                  </li>
                  <li>
                    <strong>{"Waiting for regulation"}</strong>
                    {
                      " – IMDA frameworks already function as benchmarks in procurement."
                    }
                  </li>
                </ul>
                <h4>{"ISO/IEC 42001 implementation roadmap (4–6 months)"}</h4>
                <p>
                  <strong>{"Phase 1 – Gap analysis (weeks 1-4):"}</strong>
                  {
                    " Map AI systems, document purpose, risk level, current governance. Output: gap report."
                  }
                </p>
                <p>
                  <strong>
                    {"Phase 2 – Policy & documentation (weeks 4-10):"}
                  </strong>
                  {
                    " AI policy, roles, risk assessment methodology, lifecycle procedures."
                  }
                </p>
                <p>
                  <strong>
                    {"Phase 3 – Control deployment (weeks 8-16):"}
                  </strong>
                  {
                    " Implement Annex A controls, human oversight, monitoring, third-party AI assessment."
                  }
                </p>
                <p>
                  <strong>{"Phase 4 – Internal audit (weeks 14-18):"}</strong>
                  {" Full internal audit and management review."}
                </p>
                <p>
                  <strong>
                    {"Phase 5 – Certification audit (weeks 18-24):"}
                  </strong>
                  {" Stage 1 (documentation) + Stage 2 (implementation)."}
                </p>
                <h4>{"Combining ISO 42001 with other standards"}</h4>
                <p>
                  <strong>{"+ ISO 27001:"}</strong>
                  {
                    " Most common combination. Shared controls reduce effort by 20-30%."
                  }
                </p>
                <p>
                  <strong>{"+ ISO 27701:"}</strong>
                  {
                    " Comprehensive privacy and AI governance, directly addresses PDPA across AI lifecycle."
                  }
                </p>
                <p>
                  <strong>{"+ ISO 9001:"}</strong>
                  {
                    " For AI product companies serving enterprise clients with QMS requirements."
                  }
                </p>
                <div className="postbox-highlight-box">
                  <strong>{"💰 Funding & costs:"}</strong>
                  {
                    " Consultation S$15k–S$40k, certification audit S$4k–S$10k. ISO/IEC 42001 is eligible for EDG grant (Standards Adoption) up to 50% for SMEs. Sustainability-related AI projects may qualify for enhanced 70% rate. Apply "
                  }
                  <em>{"before"}</em>
                  {" project commencement.\n                                "}
                </div>
                <h4>{"Frequently asked questions"}</h4>
                <p>
                  <strong>
                    {"Does ISO 42001 cover generative AI and LLMs?"}
                  </strong>
                  {
                    " Yes – technology-neutral, applies to all AI types. Annex A controls on transparency and human oversight are particularly relevant for gen AI."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "We use third-party AI tools (Microsoft Copilot, etc). Do we need to certify?"
                    }
                  </strong>
                  {
                    " No – your organisation's AIMS is certified. Annex A.9 requires assessing third-party AI risks. If the platform is ISO 42001 certified (e.g., Microsoft 365 Copilot audits), you can leverage their evidence."
                  }
                </p>
                <p>
                  <strong>{"How does ISO 42001 relate to EU AI Act?"}</strong>
                  {
                    " Widely regarded as the most practical management system framework for supporting EU AI Act compliance for organisations in scope."
                  }
                </p>
                <p>
                  <strong>{"Is it relevant for small AI startups?"}</strong>
                  {
                    " Yes – with appropriate scoping. A narrowly scoped implementation covering one or two AI systems is both achievable and commercially valuable for winning enterprise contracts."
                  }
                </p>
                <p>
                  <strong>{"Certificate validity?"}</strong>
                  {" Three-year cycle with annual surveillance audits."}
                </p>
                <h4>{"The bottom line"}</h4>
                <p>
                  {
                    "ISO/IEC 42001 takes Singapore's Model AI Governance Framework, AI Verify, and PDPA requirements and gives them a certifiable, internationally recognised structure. For Singapore AI companies in 2026, the question is no longer whether to govern AI responsibly, but whether to make that governance visible, auditable, and certifiable."
                  }
                </p>
                <p>
                  {
                    "ICFC is one of Singapore's first ISO consultancies to offer ISO/IEC 42001 consultation, gap analysis, and lead auditor training. Contact us for a complimentary AI governance readiness assessment."
                  }
                </p>
                <hr />
                <p>
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "Singapore's ISO certification partner since 2014. We provide ISO consultation, third-party audit, and training across 25 industries – including specialist practices in ISO/IEC 42001 (AI), ISO 27001, ISO 27701, and integrated management systems. Contact: "
                  }
                  <SiteLink href="mailto:admin@icfc.com.sg">
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p>
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. Regulatory frameworks, standard requirements, and grant terms subject to change. Refer to IMDA, PDPC, Enterprise Singapore, and ISO for current requirements."
                    }
                  </em>
                </p>
              </div>
              <div className="rs-postbox-details-social mt-40">
                <div className="rs-postbox-details-tags tagcloud">
                  <span>{"Tags:"}</span>
                  <SiteLink href="/contact-us.html">{"ISO 42001"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"AI Governance"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Singapore"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"AIMS"}</SiteLink>
                </div>
                <div className="rs-postbox-social">
                  <span>{"Share:"}</span>
                  <div className="rs-theme-social">
                    <SiteLink href="/contact-us.html">
                      <i className="ri-facebook-fill"></i>
                    </SiteLink>
                    <SiteLink href="/contact-us.html">
                      <i className="ri-twitter-x-fill"></i>
                    </SiteLink>
                    <SiteLink href="/contact-us.html">
                      <i className="ri-linkedin-fill"></i>
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div className="rs-postbox-comment-form">
                <h3>{"Leave a Comment"}</h3>
                <EmailForm>
                  <div className="row g-4">
                    <div className="col-xl-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        aria-label="Your Name"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                      />
                    </div>
                    <div className="col-xl-12">
                      <textarea placeholder="Write Message" defaultValue="" />
                    </div>
                    <div className="col-xl-12">
                      <button type="submit" className="rs-btn">
                        {"Post Comment"}
                      </button>
                    </div>
                  </div>
                </EmailForm>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="rs-sidebar-wrapper rs-sidebar-sticky">
              <div className="sidebar-widget mb-30">
                <h5>{"Search"}</h5>
                <div className="sidebar-search">
                  <EmailForm>
                    <div className="sidebar-search-input">
                      <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search..."
                      />
                      <button>
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
              <div className="sidebar-widget mb-30">
                <h5>{"Categories"}</h5>
                <ul>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"AI Governance "}
                      <span>{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"ISO 42001 "}
                      <span>{"(3)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"Singapore Tech "}
                      <span>{"(5)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h5>{"Popular Tags"}</h5>
                <div className="tagcloud">
                  <SiteLink href="/contact-us.html">{"ISO 42001"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"AIMS"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"AI Verify"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Agentic AI"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"PDPA"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"IMDA"}</SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
