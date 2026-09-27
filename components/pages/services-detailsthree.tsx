import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsthreePageContent() {
  return (
    <SitePageTemplate
      route="services-detailsthree.html"
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
        "/assets/css/main.css?v=20260503",
        "/assets/css/whatsapp-float.css",
        "/styles/pages/services-detailsthree.css",
      ]}
    >
      <main>
        <BreadcrumbAreaSection />
        <ServicesAreaSection />
        <CtaAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="ISO/IEC 42001:2023 · AI Management System · Singapore"
      description="AI governance — certified, responsible, and grant-funded"
      background="/assets/images/services/services-thumb-30.webp"
      className="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space"
    />
  );
}

function ServicesAreaSection() {
  return (
    <section className="rs-services-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-services-details-wrapper">
              <div className="rs-services-details-thumb">
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 42001 AI Management System"
                />
              </div>
              <p className="mt-30">
                {
                  "ISO/IEC 42001:2023 is the world's first international standard for Artificial Intelligence Management Systems (AIMS). In Singapore, it is increasingly mandated by enterprise procurement, aligned with IMDA's AI governance frameworks, required by MAS AI Risk Management Guidelines (finalised 2026), and the foundation for CSA's Cyber Trust Mark AI security pillar. ICFC — Singapore's first dedicated ISO 42001 consultancy — delivers AIMS audit, consultation, and training with EDG grant management built in."
                }
              </p>
              <div className="grid-4">
                <div className="stat-box">
                  <div className="stat-number">{"Dec 2023"}</div>
                  <p className="mb-0">{"ISO 42001 published"}</p>
                  <small>{"world's first AI MSS"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"2024"}</div>
                  <p className="mb-0">{"SAC accreditation launched"}</p>
                  <small>{"SG accreditation programme"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"4–6 mo"}</div>
                  <p className="mb-0">{"Typical implementation"}</p>
                  <small>{"AI inventory to certified"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"25+"}</div>
                  <p className="mb-0">{"Singapore industries"}</p>
                  <small>{"served"}</small>
                </div>
              </div>
              <div
                className="service-block"
                style={{ background: "linear-gradient(135deg, #fff5f5, #fff)" }}
              >
                <h3 className="mb-15">
                  {
                    "🤖 Why Singapore AI companies must act now — 2026 is the tipping point"
                  }
                </h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <strong>{"MAS AI Risk Management Guidelines:"}</strong>
                    {
                      " finalised 2026, supervisory expectations for all MAS-regulated FIs"
                    }
                  </div>
                  <div className="col-md-6">
                    <strong>
                      {"CTM Cyber Trust Mark AI security pillar (SS 712:2025):"}
                    </strong>
                    {" new mandatory control domain for CII operators"}
                  </div>
                  <div className="col-md-6">
                    <strong>{"EU AI Act high-risk AI enforcement:"}</strong>
                    {
                      " August 2025 onset — ISO 42001 is the primary conformity pathway"
                    }
                  </div>
                  <div className="col-md-6">
                    <strong>{"Procurement:"}</strong>
                    {
                      " Enterprise RFPs now routinely include AI governance certification requirements"
                    }
                  </div>
                </div>
                <div className="mt-4">
                  <SiteLink href="/contact-us.html" className="btn btn-primary">
                    {"Book free AIMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-outline-primary ms-2"
                  >
                    {"Get free quote"}
                  </SiteLink>
                </div>
              </div>
              <div className="alert alert-success border-0 p-4 rounded-3 mb-4">
                <i
                  className="ri-government-line fs-3 me-3 float-start"
                  style={{ color: "#3B6D11" }}
                ></i>
                <h5 className="text-dark">
                  {
                    "EDG / MASA grant — up to 50% co-funding for ISO 42001 consultation"
                  }
                </h5>
                <p className="mb-0">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 42001 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. Integrated AIMS + ISO 27001 engagements can maximise total grant co-funding across both standards."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn btn-success mt-3"
                >
                  {"Check grant eligibility →"}
                </SiteLink>
              </div>
              <div className="grid-4">
                <div className="text-center">
                  <div className="stat-number">{"IMDA"}</div>
                  <p className="mb-0">{"AI Verify crosswalk"}</p>
                  <small>{"published June 2024"}</small>
                </div>
                <div className="text-center">
                  <div className="stat-number">{"50%"}</div>
                  <p className="mb-0">{"EDG grant co-funding"}</p>
                  <small>{"for qualifying SMEs"}</small>
                </div>
                <div className="text-center">
                  <div className="stat-number">{"SAC"}</div>
                  <p className="mb-0">{"Accreditation programme"}</p>
                  <small>{"launched 2025"}</small>
                </div>
                <div className="text-center">
                  <div className="stat-number">{"SS"}</div>
                  <p className="mb-0">{"ISO/IEC 42001:2024"}</p>
                  <small>{"Singapore national standard"}</small>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-10">
                {
                  "What is ISO 42001 AIMS? Singapore's AI governance standard — why ISO 42001 certification matters in 2026"
                }
              </h3>
              <p>
                {
                  "ISO/IEC 42001:2023 is the world's first international standard for Artificial Intelligence Management Systems. It provides a framework for organisations to establish policies and processes for the responsible development, provision, and use of AI systems — covering governance, risk management, transparency, human oversight, and ethical AI across the entire AI lifecycle. Singapore has nationally adopted ISO 42001 as SS ISO/IEC 42001:2024. The Singapore Accreditation Council (SAC) launched its ISO/IEC 42001 AIMS accreditation programme in early 2025. ISO 42001 is a management system standard — not a product standard. Certification confirms that your organisation has a robust, auditable system for governing AI."
                }
              </p>
              <h3 className="mt-40 mb-20">
                {
                  "ISO 42001 AIMS — eight core governance components ICFC implements"
                }
              </h3>
              <div className="grid-2">
                <div className="bg-light p-3 rounded">
                  <strong>{"📋 AI policy framework"}</strong>
                  <br />
                  {
                    "Board-endorsed AI policy covering values, risk appetite, human oversight, and accountability structures"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"🗂️ AI use case register"}</strong>
                  <br />
                  {
                    "Inventory of all AI systems — purpose, data used, decisions influenced, risk level, and ownership"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"⚖️ AI risk assessment"}</strong>
                  <br />
                  {
                    "Risk assessment across the AI lifecycle — bias, transparency, security, data quality, and misuse risks"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"👁️ Human oversight controls"}</strong>
                  <br />
                  {
                    "Documented human review, override, and intervention procedures for AI-driven decisions (Annex A.6)"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"📊 Performance monitoring"}</strong>
                  <br />
                  {
                    "AI accuracy, fairness, bias, and performance metrics — measured continuously post-deployment"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"🔗 Third-party AI governance"}</strong>
                  <br />
                  {
                    "Supplier and CSP AI assessment (Annex A.9) — for Microsoft Copilot, Salesforce AI, LLM API use"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"🚨 AI incident management"}</strong>
                  <br />
                  {
                    "Detection, escalation, and response procedures for AI failures, bias incidents, and unexpected outputs"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"🔄 Continual improvement"}</strong>
                  <br />
                  {
                    "PDCA-driven AIMS improvement as AI systems evolve, regulations change, and new AI is deployed"
                  }
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {"Singapore's AI governance regulatory landscape — 2026"}
              </h3>
              <table className="regulatory-table">
                <thead>
                  <tr>
                    <th>{"Framework / Regulator"}</th>
                    <th>{"Requirement"}</th>
                    <th>{"Sectors"}</th>
                    <th>{"ISO 42001 alignment"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"MAS AI Risk Management Guidelines (2026)"}</td>
                    <td>
                      {
                        "Board-level AI oversight, 3-LOD AI governance, AI inventory, full lifecycle controls"
                      }
                    </td>
                    <td>{"All MAS-regulated FIs"}</td>
                    <td className="check-yes">{"✓ Direct alignment"}</td>
                  </tr>
                  <tr>
                    <td>{"IMDA Model AI Governance Framework 2.0"}</td>
                    <td>
                      {
                        "Voluntary framework — AI Verify crosswalk published June 2024"
                      }
                    </td>
                    <td>{"All industries"}</td>
                    <td className="check-yes">{"✓ Direct alignment"}</td>
                  </tr>
                  <tr>
                    <td>{"IMDA Agentic AI Framework (Jan 2026)"}</td>
                    <td>
                      {
                        "Governance for autonomous AI agents — human accountability mandated"
                      }
                    </td>
                    <td>{"All deploying agentic AI"}</td>
                    <td className="check-yes">{"✓ Strong alignment"}</td>
                  </tr>
                  <tr>
                    <td>{"CSA Cyber Trust Mark (SS 712:2025)"}</td>
                    <td>
                      {
                        "AI security pillar — new mandatory control domain for CII operators"
                      }
                    </td>
                    <td>{"CII operators"}</td>
                    <td className="check-yes">{"✓ CTM AI pillar aligned"}</td>
                  </tr>
                  <tr>
                    <td>{"EU AI Act (Aug 2025 enforcement)"}</td>
                    <td>
                      {
                        "High-risk AI system requirements — conformity mechanism"
                      }
                    </td>
                    <td>{"EU citizen data processors"}</td>
                    <td className="check-yes">
                      {"✓ Primary conformity pathway"}
                    </td>
                  </tr>
                  <tr>
                    <td>{"PDPC / PDPA"}</td>
                    <td>
                      {
                        "Purpose limitation, data minimisation, automated decision accountability"
                      }
                    </td>
                    <td>{"All organisations"}</td>
                    <td>{"≈ Annex A.7 data governance"}</td>
                  </tr>
                  <tr>
                    <td>{"SGX sustainability reporting (ISSB)"}</td>
                    <td>
                      {"AI-related ESG disclosures — governance of AI systems"}
                    </td>
                    <td>{"SGX-listed companies"}</td>
                    <td>{"≈ Partial alignment"}</td>
                  </tr>
                  <tr>
                    <td>{"GovTech tender criteria"}</td>
                    <td>
                      {
                        "AI governance certification increasingly weighted for vendors"
                      }
                    </td>
                    <td>{"Government suppliers"}</td>
                    <td className="check-yes">{"✓ Certification expected"}</td>
                  </tr>
                </tbody>
              </table>
              <div className="row g-4 mt-4 mb-5">
                <div className="col-md-4">
                  <div className="service-card p-4 border rounded h-100 bg-white">
                    <div className="mb-3">
                      <i
                        className="ri-survey-line fs-1"
                        style={{ color: "#C8102E" }}
                      ></i>
                    </div>
                    <h4>{"🔍 AIMS Audit Services"}</h4>
                    <p>
                      {
                        "Gap analysis, Stage 1 & 2, pre-certification, surveillance. EDG eligible."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="service-card-btn"
                    >
                      {"Explore audit →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-card p-4 border rounded h-100 bg-white">
                    <div className="mb-3">
                      <i
                        className="ri-file-copy-line fs-1"
                        style={{ color: "#C8102E" }}
                      ></i>
                    </div>
                    <h4>{"🤖 AIMS Consultation"}</h4>
                    <p>
                      {
                        "Full implementation, ISO 27001 integration, MAS AI alignment, EDG grant managed."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="service-card-btn"
                    >
                      {"Explore consulting →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-card p-4 border rounded h-100 bg-white">
                    <div className="mb-3">
                      <i
                        className="ri-bar-chart-grouped-line fs-1"
                        style={{ color: "#C8102E" }}
                      ></i>
                    </div>
                    <h4>{"🎓 AIMS Training"}</h4>
                    <p>
                      {
                        "Lead Auditor (PECB pathway), Internal Auditor, Implementer, Board governance. SkillsFuture eligible."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="service-card-btn"
                    >
                      {"Explore training →"}
                    </SiteLink>
                  </div>
                </div>
              </div>
              <h3 className="mt-40 mb-20">{"Client outcomes · Singapore"}</h3>
              <div className="testimonial-card">
                <p>
                  {
                    '"ICFC was the first consultant in Singapore to help us implement ISO 42001. Their AI use case register methodology was rigorous and practical — we mapped 23 AI systems in two weeks. The EDG grant covered 50% of the project. Highly recommended."'
                  }
                </p>
                <strong>{"— CTO, AI platform provider, Singapore"}</strong>
              </div>
              <div className="testimonial-card">
                <p>
                  {
                    '"We needed ISO 42001 to satisfy MAS AI Risk Management Guidelines. ICFC\'s integrated ISO 27001 + ISO 42001 approach reduced our total implementation cost by 35% versus doing them separately."'
                  }
                </p>
                <strong>{"— CISO, Digital bank, Singapore"}</strong>
              </div>
              <div className="testimonial-card">
                <p>
                  {
                    "\"ICFC's agentic AI governance framework — built on ISO 42001 and aligned to IMDA's January 2026 framework — gave us exactly what we needed to win an enterprise healthcare contract.\""
                  }
                </p>
                <strong>
                  {"— VP Product & Compliance, HealthTech company, Singapore"}
                </strong>
              </div>
              <h3 className="mt-40 mb-20">
                {"ICFC's ISO 42001 audit process — AI inventory to certificate"}
              </h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">{"01"}</div>
                  {"Free briefing"}
                </div>
                <div className="step">
                  <div className="step-number">{"02"}</div>
                  {"AI inventory"}
                </div>
                <div className="step">
                  <div className="step-number">{"03"}</div>
                  {"Gap analysis"}
                </div>
                <div className="step">
                  <div className="step-number">{"04"}</div>
                  {"Grant application"}
                </div>
                <div className="step">
                  <div className="step-number">{"05"}</div>
                  {"Pre-cert audit"}
                </div>
                <div className="step">
                  <div className="step-number">{"06"}</div>
                  {"CB assessment → certificate"}
                </div>
              </div>
              <h3 className="mt-40 mb-20">{"Related services"}</h3>
              <div className="related-services">
                <div className="related-card">
                  <span className="badge-red">{"🔒 ISO 27001"}</span>
                  <p>{"30–40% saving via integrated AIMS + ISMS scope"}</p>
                </div>
                <div className="related-card">
                  <span className="badge-red">{"🛡️ ISO 27701"}</span>
                  <p>
                    {"AI + personal data governance — Annex A.7 integration"}
                  </p>
                </div>
                <div className="related-card">
                  <span className="badge-red">{"🔐 Cyber Trust Mark"}</span>
                  <p>{"SS 712:2025 AI security + ISO 42001 integration"}</p>
                </div>
              </div>
              <div className="lang-section">
                <h3>
                  {
                    "新加坡ISO 42001人工智能管理体系（AIMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p>
                  {
                    "ICFC是新加坡首家专注ISO 42001认证的顾问公司，提供人工智能使用清单建立、全面AIMS实施及培训服务，涵盖金融、医疗、物流、制造等25大行业。与IMDA AI Verify框架、MAS AI风险管理指南及CSA网络信任标志AI安全支柱完全对齐。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务。"
                  }
                </p>
                <p>
                  <strong>{"关键词："}</strong>
                  {
                    "ISO 42001新加坡 · 人工智能管理体系 · AIMS认证 · AI治理 · 负责任AI · IMDA AI Verify · MAS AI指南 · EDG补助金 · 最佳AI治理顾问 · 实惠ISO 42001认证"
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn btn-primary mt-2"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div className="service-block mt-4 text-center">
                <h3>{"Start your ISO 42001 AIMS journey today"}</h3>
                <p>
                  {
                    "Free 30-minute AI governance assessment. Honest gap analysis of your AI systems against ISO 42001:2023. EDG grant eligibility check. MAS AI Guidelines alignment review. No obligation."
                  }
                </p>
                <div className="flex-between justify-content-center gap-3 mt-3">
                  <SiteLink href="/contact-us.html" className="btn btn-primary">
                    {"Book free AIMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-outline-primary"
                  >
                    {"Check grant eligibility"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-outline-primary"
                  >
                    {"Get free quote"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-20 mt-40">
                {"Frequently asked questions — ISO 42001 AIMS"}
              </h3>
              <div className="accordion" id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "How is ISO 42001 different from IMDA's Model AI Governance Framework?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "IMDA's Framework is voluntary and principles-based. ISO 42001 is a certifiable international management system standard — an accredited third-party verifies your AI governance. A formal crosswalk mapping AI Verify to ISO 42001 was published in June 2024."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "We use third-party AI tools (Microsoft Copilot, OpenAI API). Do we need to certify those?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "No — ISO 42001 certifies your organisation's AI management system, not the tools. However, Annex A.9 requires you to assess third-party AI risks. Microsoft 365 Copilot has achieved ISO 42001 certification, so you can leverage their certification evidence as part of your own governance documentation."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How much does ISO 42001 consultation cost after grants?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Typical fees S$15,000–S$40,000 depending on AI systems in scope. EDG covers up to 50% for eligible SMEs. Integrated ISO 27001 + ISO 42001 projects save 30–40%."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Is ISO 42001 required by MAS for financial institutions?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "The MAS AI Risk Management Guidelines (2026) establish supervisory expectations — ISO 42001 is the most efficient framework for demonstrating compliance."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"We are a small AI startup. Is ISO 42001 appropriate?"}
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Yes — a focused initial scope covering one to two AI systems is both achievable and commercially valuable. The EDG grant significantly reduces the financial barrier."
                  }
                </AccordionItem>
              </div>
              <div className="mt-40 text-muted small">
                <strong>{"Page optimised for:"}</strong>
                {
                  " ISO 42001 Singapore · AIMS certification SG · AI governance 2026 · EDG grant ISO 42001 · best ISO 42001 consultant SG · budget AI governance · 新加坡ISO 42001 · 人工智能管理体系 · AIMS认证"
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaAreaSection() {
  return (
    <div className="rs-cta-area rs-cta-six">
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-cta-content-wrapper">
              <span className="rs-cta-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path
                    d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                    fill="#AB052D"
                  ></path>
                </svg>
              </span>
              <div className="rs-cta-content">
                <p>
                  {
                    "ISO 42001 AIMS certification — Singapore's first dedicated consultancy. "
                  }
                  <SiteLink href="/contact-us.html">
                    {"Start your AI governance journey today →"}
                  </SiteLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
