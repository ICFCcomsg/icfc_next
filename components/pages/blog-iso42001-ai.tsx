import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogIso42001AiPageContent() {
  return (
    <SitePageTemplate
      route="blog_ISO42001_AI.html"
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
        "/styles/pages/blog-iso42001-ai.css",
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
      description="AI governance standard, IMDA crosswalk, PDPA alignment, EDG grant, and certification roadmap for Singapore AI developers and users"
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
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335Z"
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
                    "ISO/IEC 42001:2023 is the answer the world has standardised on. This article explains what ISO/IEC 42001 requires, how it maps to Singapore's own AI governance landscape, who needs it and why, what implementing it actually involves, and how to achieve certification — including how it connects to Singapore's national AI frameworks and the Enterprise Development Grant (EDG)."
                  }
                </p>
                <div className="postbox-highlight-box">
                  <strong>{"📌 What is ISO/IEC 42001?"}</strong>
                  {
                    " The world's first AI management system standard (Dec 2023). Certifies your "
                  }
                  <strong>{"governance framework"}</strong>
                  {
                    " for AI — not individual models. Follows Plan-Do-Check-Act structure (same as ISO 27001/9001). Singapore adopted as SS ISO/IEC 42001:2024.\n                                "
                  }
                </div>
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
                    " – SS ISO/IEC 42001:2024 includes national Annex describing AI Verify as an example alignment tool."
                  }
                </p>
                <p>
                  <strong>
                    {"IMDA's AI governance frameworks directly map"}
                  </strong>
                  {
                    " – AI Verify Foundation published formal crosswalk (June 2024). If you've used AI Verify, significant ISO 42001 groundwork is already done."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "Model AI Governance Framework for Agentic AI launched (Jan 2026)"
                    }
                  </strong>
                  {
                    " – covers autonomous AI agents. ISO 42001 provides the management system backbone."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "SAC launched ISO/IEC 42001 accreditation programme (2025)"
                    }
                  </strong>
                  {
                    " – Singapore-issued certificates now have international recognition."
                  }
                </p>
                <h4>{"Who needs ISO/IEC 42001?"}</h4>
                <ul>
                  <li>
                    <strong>{"AI developers & platform providers"}</strong>
                    {
                      " – building LLMs, predictive analytics, AI SaaS products."
                    }
                  </li>
                  <li>
                    <strong>
                      {"AI users deploying for consequential decisions"}
                    </strong>
                    {
                      " – hiring, credit, insurance, patient care, fraud detection."
                    }
                  </li>
                  <li>
                    <strong>
                      {"Organisations responding to supply chain requirements"}
                    </strong>
                    {
                      " – enterprise and government contracts increasingly require AI governance."
                    }
                  </li>
                </ul>
                <h4>{"What does ISO/IEC 42001 actually require?"}</h4>
                <p>
                  <strong>{"Clause structure (HLS):"}</strong>
                  {
                    " Context (Clause 4) → Leadership (5) → Planning (6) → Support (7) → Operation (8) → Evaluation (9) → Improvement (10)."
                  }
                </p>
                <p>
                  <strong>{"Annex A — 38 controls across 8 domains:"}</strong>
                </p>
                <table className="controls-table">
                  <tbody>
                    <tr>
                      <th>{"Domain"}</th>
                      <th>{"Key controls"}</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{"A.2 Policies for AI"}</td>
                      <td>{"AI policy, governance framework"}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{"A.3 Internal organisation"}</td>
                      <td>
                        {
                          "Roles, responsibilities, cross‑functional AI governance committee"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{"A.4 Resources for AI systems"}</td>
                      <td>{"Competence, training, awareness"}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{"A.5 Assessing impacts of AI systems"}</td>
                      <td>{"AI impact assessment, risk classification"}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{"A.6 AI system life cycle"}</td>
                      <td>
                        {
                          "Data sourcing, development, validation, deployment, monitoring, human oversight"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{"A.7 Data for AI systems"}</td>
                      <td>{"Data quality, data governance, privacy"}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{"A.8 Information for interested parties"}</td>
                      <td>{"Transparency, explainability, communication"}</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{"A.9 Third‑party AI systems"}</td>
                      <td>{"Supplier AI assessment, procurement controls"}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="postbox-highlight-box">
                  <strong>
                    {"⚠️ Common mistakes Singapore organisations make:"}
                  </strong>
                  {
                    " Treating it as an IT project (needs board‑level governance); scoping too broadly (start with 2‑3 high‑risk systems); confusing model documentation with management system documentation; neglecting human oversight controls (Annex A.6); waiting for regulation instead of being proactive.\n                                "
                  }
                </div>
                <h4>{"ISO/IEC 42001 and Singapore's AI landscape"}</h4>
                <p>
                  <strong>{"AI Verify crosswalk:"}</strong>
                  {
                    " AI Verify tests against 11 ethics principles. The formal crosswalk means AI Verify evidence directly supports ISO 42001 documentation. "
                  }
                  <em>
                    {
                      '"The AI Verify framework maps to standards around the world, including ISO/IEC 42001:2023."'
                    }
                  </em>
                </p>
                <p>
                  <strong>{"PDPA alignment:"}</strong>
                  {
                    " ISO 42001 Annex A.7 (Data for AI systems) directly addresses purpose limitation, data minimisation, and accountability — supporting PDPA compliance. Organisations with ISO 27701 see substantial overlap."
                  }
                </p>
                <p>
                  <strong>{"NIST AI RMF & EU AI Act:"}</strong>
                  {
                    " IMDA crosswalks to NIST AI RMF. ISO 42001 certification is widely regarded as the most efficient path to EU AI Act conformity for organisations in scope."
                  }
                </p>
                <h4>{"Implementation roadmap (typical 4‑6 months)"}</h4>
                <ul>
                  <li>
                    <strong>
                      {"Phase 1 – Gap analysis & AI use case mapping"}
                    </strong>
                    {
                      " (weeks 1‑4): Identify AI systems in scope, document purpose/data/decisions/risk level."
                    }
                  </li>
                  <li>
                    <strong>{"Phase 2 – Policy & documentation"}</strong>
                    {
                      " (weeks 4‑10): AI policy, governance roles, impact assessment methodology, lifecycle procedures."
                    }
                  </li>
                  <li>
                    <strong>{"Phase 3 – Control deployment"}</strong>
                    {
                      " (weeks 8‑16): Human oversight checkpoints, monitoring, supplier AI assessment."
                    }
                  </li>
                  <li>
                    <strong>
                      {"Phase 4 – Internal audit & management review"}
                    </strong>
                    {" (weeks 14‑18)."}
                  </li>
                  <li>
                    <strong>{"Phase 5 – Certification audit"}</strong>
                    {
                      " (weeks 18‑24): Stage 1 (documentation) + Stage 2 (implementation verification)."
                    }
                  </li>
                </ul>
                <h4>{"Funding & costs"}</h4>
                <p>
                  <strong>{"Estimated costs (Singapore):"}</strong>
                  {
                    " Consultation S$15,000‑S$40,000; certification body audit S$4,000‑S$10,000; internal effort 100‑250 hours."
                  }
                </p>
                <p>
                  <strong>{"EDG grant:"}</strong>
                  {
                    " ISO/IEC 42001 eligible under Standards Adoption category — up to 50% co‑funding for qualifying SMEs. Enhanced 70% may apply if AI governance has sustainability dimension. "
                  }
                  <strong>{"Critical:"}</strong>
                  {" apply before any project work commences."}
                </p>
                <h4>{"Combining with other ISO standards"}</h4>
                <ul>
                  <li>
                    <strong>{"+ ISO/IEC 27001:"}</strong>
                    {
                      " Most common combination – AI data governance + information security. Overlap reduces effort ~20‑30%."
                    }
                  </li>
                  <li>
                    <strong>{"+ ISO/IEC 27701:"}</strong>
                    {
                      " Privacy + AI governance – directly addresses PDPA across AI lifecycle."
                    }
                  </li>
                  <li>
                    <strong>{"+ ISO 9001:"}</strong>
                    {
                      " For AI product companies – integrated quality + AI governance."
                    }
                  </li>
                </ul>
                <h4>{"Frequently asked questions"}</h4>
                <p>
                  <strong>
                    {"Does ISO/IEC 42001 cover generative AI / LLMs?"}
                  </strong>
                  {
                    " Yes. Technology‑neutral. Transparency and human oversight controls are particularly relevant for generative AI."
                  }
                </p>
                <p>
                  <strong>
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
                <p>
                  <strong>{"How does ISO 42001 relate to EU AI Act?"}</strong>
                  {
                    " ISO 42001 is the most practical management system framework for supporting EU AI Act compliance – risk‑based approach and governance controls address many of the same requirements."
                  }
                </p>
                <p>
                  <strong>
                    {"We're a small AI startup. Is this appropriate?"}
                  </strong>
                  {
                    " Yes, with appropriate scoping. ICFC has implemented for 5‑person startups to multinationals. Narrow initial scope (1‑2 AI systems) is achievable and commercially valuable for enterprise contracts."
                  }
                </p>
                <p>
                  <strong>{"How long does certification last?"}</strong>
                  {" Three‑year cycle with annual surveillance audits."}
                </p>
                <h4>{"The bottom line"}</h4>
                <p>
                  {
                    "ISO/IEC 42001 gives Singapore's Model AI Governance Framework, AI Verify, and PDPA requirements a certifiable, internationally recognised structure. For Singapore AI companies in 2026, the question is no longer whether to govern AI responsibly — it's whether to make that governance visible, auditable, and certifiable."
                  }
                </p>
                <p>
                  {
                    "ICFC offers a complimentary AI governance readiness assessment as part of our free initial consultation."
                  }
                </p>
                <hr />
                <p>
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. Specialist practices: ISO/IEC 42001 (AI), ISO/IEC 27001, ISO/IEC 27701 (PDPA), and integrated management systems. Contact: "
                  }
                  <SiteLink href="mailto:admin@icfc.com.sg">
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p>
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. Regulatory frameworks, standard requirements, and grant terms subject to change. Refer to IMDA, PDPC, Enterprise Singapore, and ISO official sources."
                    }
                  </em>
                </p>
              </div>
              <div className="rs-postbox-details-social mt-40">
                <div className="rs-postbox-details-tags tagcloud">
                  <span>{"Tags:"}</span>
                  <SiteLink href="/contact-us.html">{"ISO 42001"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"AI Governance"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"IMDA"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"AI Verify"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"PDPA"}</SiteLink>
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
                      <span>{"(8)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"ISO 42001 "}
                      <span>{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"IMDA Frameworks "}
                      <span>{"(5)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"PDPA "}
                      <span>{"(7)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h5>{"Popular Tags"}</h5>
                <div className="tagcloud">
                  <SiteLink href="/contact-us.html">{"ISO/IEC 42001"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"AI Verify"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Agentic AI"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"EDG Grant"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"AIMS"}</SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
