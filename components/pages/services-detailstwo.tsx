import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailstwoPageContent() {
  return (
    <SitePageTemplate
      route="services-detailstwo.html"
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
        "/styles/pages/services-detailstwo.css",
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
      title="ISO 37001:2025 · Anti-Bribery Management System · Singapore · CPIB endorsed"
      description="Anti-bribery management — ISO 37001:2025 certified, PCA-aligned, grant-funded"
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
                  alt="ISO 37001 Anti-Bribery Management System"
                />
              </div>
              <p className="mt-30">
                {
                  "ISO 37001:2025 is the world's leading standard for Anti-Bribery Management Systems (ABMS). In Singapore, it is nationally adopted as SS ISO 37001 — jointly launched by SPRING Singapore and the Corrupt Practices Investigation Bureau (CPIB) — and aligned to the Prevention of Corruption Act (PCA). The 2025 edition introduces critical updates including climate change risk, enhanced conflicts of interest management, and stronger compliance culture requirements. ICFC delivers full ABMS audit, consultation, and training with EDG grant management built into every engagement, across all 35 major Singapore industries."
                }
              </p>
              <div className="row mb-40 mt-30 g-4">
                <div className="col-md-3 col-6">
                  <div className="abms-stat-box">
                    <div className="abms-stat-number">{"2025"}</div>
                    <p className="mb-0">{"New ISO 37001 edition"}</p>
                    <small>{"climate risk + CoI"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="abms-stat-box">
                    <div className="abms-stat-number">{"6–12"}</div>
                    <p className="mb-0">{"Months typical ABMS"}</p>
                    <small>{"certification timeline"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="abms-stat-box">
                    <div className="abms-stat-number">{"50%"}</div>
                    <p className="mb-0">{"EDG grant co-funding"}</p>
                    <small>{"for qualifying SMEs"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="abms-stat-box">
                    <div className="abms-stat-number">{"35+"}</div>
                    <p className="mb-0">{"Singapore industries"}</p>
                    <small>{"served"}</small>
                  </div>
                </div>
              </div>
              <div className="bg-soft-red p-4 rounded-4 mb-40">
                <h4 className="mb-3">
                  <i className="ri-alert-line me-2 text-pims-red"></i>
                  {
                    "ISO 37001:2025 — what changed and why it matters for Singapore organisations"
                  }
                </h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <i className="ri-leaf-line fs-5 text-pims-red"></i>
                      <div>
                        <strong>{"Climate risk"}</strong>
                        {
                          " — Mandatory climate change risk assessment for sustainability projects, carbon trading, and green financing"
                        }
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <i className="ri-hand-heart-line fs-5 text-pims-red"></i>
                      <div>
                        <strong>{"Conflicts of interest"}</strong>
                        {" — Enhanced CoI guidance and management requirements"}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <i className="ri-group-line fs-5 text-pims-red"></i>
                      <div>
                        <strong>{"Compliance culture"}</strong>
                        {
                          " — Stronger compliance culture requirements — tone from the top now formally assessed"
                        }
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <i className="ri-shield-user-line fs-5 text-pims-red"></i>
                      <div>
                        <strong>{"Whistleblower"}</strong>
                        {" — Improved whistleblower protection provisions"}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-2">
                      <i className="ri-shuffle-line fs-5 text-pims-red"></i>
                      <div>
                        <strong>{"Integration"}</strong>
                        {
                          " — Better integration with ISO 37301 (Compliance MS) and other management standards"
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="rs-services-details-title mt-15 mb-20">
                {
                  "What is ISO 37001 ABMS? Singapore's anti-bribery certification — why ISO 37001:2025 matters in 2026"
                }
              </h3>
              <p>
                {
                  "ISO 37001 is the international standard dedicated to establishing, implementing, maintaining, and improving an Anti-Bribery Management System. It offers requirements and guidance for preventing, detecting, and responding to bribery — covering direct and indirect bribery across public, private, and non-profit sectors. In Singapore, it is nationally adopted as SS ISO 37001 and aligns directly with the Prevention of Corruption Act."
                }
              </p>
              <p>
                {
                  "SS ISO 37001 was jointly launched by SPRING Singapore and the Corrupt Practices Investigation Bureau (CPIB). The Singapore Standard (SS) ISO 37001 on anti-bribery management systems is a voluntary standard designed to help companies establish, implement, maintain and improve their anti-bribery compliance programmes. It includes a series of measures which represents globally recognised anti-bribery good practice. Critically, SS ISO 37001 helps in the event of an investigation to provide evidence to the prosecutors or courts that the company had taken reasonable steps to prevent bribery. For Singapore organisations facing CPIB investigations, this evidentiary protection is the most compelling reason to certify."
                }
              </p>
              <p>
                {
                  "ISO 37001:2025 is now the current edition. Organisations certified under ISO 37001:2016 should plan their transition to the 2025 edition. ICFC manages 2016-to-2025 transition audits alongside new implementation engagements. The 2025 edition adopts the ISO harmonized structure — making integration with ISO 9001, ISO 14001, ISO 27001, and ISO 22301 more efficient than ever before."
                }
              </p>
              <h3 className="rs-services-details-title mt-40 mb-20">
                {"ISO 37001:2025 ABMS — eight core components ICFC implements"}
              </h3>
              <div className="row g-4 mb-40">
                <div className="col-md-3 col-6">
                  <div className="text-center p-3 bg-light rounded h-100">
                    <i className="ri-file-text-line fs-2 text-pims-red"></i>
                    <p className="mt-2 fw-bold mb-0">{"Anti-bribery policy"}</p>
                    <small>{"Board-endorsed zero tolerance"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3 bg-light rounded h-100">
                    <i className="ri-shield-flash-line fs-2 text-pims-red"></i>
                    <p className="mt-2 fw-bold mb-0">
                      {"Bribery risk assessment"}
                    </p>
                    <small>{"Activities, geographies, third parties"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3 bg-light rounded h-100">
                    <i className="ri-search-eye-line fs-2 text-pims-red"></i>
                    <p className="mt-2 fw-bold mb-0">{"Due diligence"}</p>
                    <small>{"Third-party, transaction, personnel"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3 bg-light rounded h-100">
                    <i className="ri-bank-card-line fs-2 text-pims-red"></i>
                    <p className="mt-2 fw-bold mb-0">
                      {"Financial & non-financial controls"}
                    </p>
                    <small>{"Gift register, expense controls"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3 bg-light rounded h-100">
                    <i className="ri-chat-quote-line fs-2 text-pims-red"></i>
                    <p className="mt-2 fw-bold mb-0">
                      {"Whistleblowing channel"}
                    </p>
                    <small>{"Anonymous + protection"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3 bg-light rounded h-100">
                    <i className="ri-git-merge-line fs-2 text-pims-red"></i>
                    <p className="mt-2 fw-bold mb-0">
                      {"Conflicts of interest"}
                    </p>
                    <small>{"Enhanced 2025 CoI management"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3 bg-light rounded h-100">
                    <i className="ri-earth-line fs-2 text-pims-red"></i>
                    <p className="mt-2 fw-bold mb-0">
                      {"Climate change risk (new 2025)"}
                    </p>
                    <small>{"Carbon trading, green financing"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center p-3 bg-light rounded h-100">
                    <i className="ri-bar-chart-2-line fs-2 text-pims-red"></i>
                    <p className="mt-2 fw-bold mb-0">
                      {"Monitoring & investigation"}
                    </p>
                    <small>{"Internal audit, management review"}</small>
                  </div>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-20">
                {
                  "Singapore's anti-bribery legal and regulatory framework — ISO 37001 alignment"
                }
              </h3>
              <div className="table-responsive mb-40">
                <table className="table table-bordered">
                  <thead className="bg-light">
                    <tr>
                      <th>{"Framework / Legislation"}</th>
                      <th>{"Key obligation"}</th>
                      <th>{"Sectors"}</th>
                      <th>{"ISO 37001 alignment"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{"Prevention of Corruption Act (PCA)"}</td>
                      <td>
                        {
                          "Criminalises giving and accepting bribes in public and private sectors"
                        }
                      </td>
                      <td>{"All sectors"}</td>
                      <td>
                        {
                          "✓ Direct alignment — ABMS demonstrates reasonable prevention steps"
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>{"CPIB enforcement"}</td>
                      <td>
                        {
                          "CPIB investigates corruption offences. ISO 37001 certification provides evidentiary protection"
                        }
                      </td>
                      <td>{"All sectors"}</td>
                      <td>
                        {
                          "✓ CPIB endorsed SS ISO 37001 provides prosecution mitigation"
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>{"MAS Guidelines on Gifts & Entertainment"}</td>
                      <td>
                        {
                          "Financial institutions must have documented policies on gifts and entertainment"
                        }
                      </td>
                      <td>{"Banks, insurers, FinTech"}</td>
                      <td>
                        {"✓ Gift/hospitality register and financial controls"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"UK Bribery Act (extraterritorial)"}</td>
                      <td>
                        {
                          '"Adequate procedures" defence requires documented ABMS'
                        }
                      </td>
                      <td>
                        {"Professional services, construction, logistics"}
                      </td>
                      <td>
                        {
                          '✓ ISO 37001 satisfies UK "adequate procedures" defence'
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>{"US FCPA (extraterritorial)"}</td>
                      <td>
                        {
                          "Singapore companies listed on US exchanges face FCPA exposure"
                        }
                      </td>
                      <td>{"Listed companies, US-market Singapore firms"}</td>
                      <td>
                        {
                          "✓ ISO 37001 aligns with FCPA compliance programme expectations"
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>{"SGX ESG reporting (sustainability)"}</td>
                      <td>
                        {
                          "Anti-bribery governance is an explicit component under G-pillar"
                        }
                      </td>
                      <td>{"SGX-listed companies"}</td>
                      <td>
                        {
                          "✓ ABMS certification supports ESG governance disclosures"
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row g-4 mt-4 mb-5">
                <div className="col-md-4">
                  <div className="service-card p-4 border rounded h-100 bg-white">
                    <i className="ri-survey-line pillar-icon"></i>
                    <h4>{"ABMS Audit Services"}</h4>
                    <p>
                      {
                        "Gap analysis, Stage 1 & 2 audits, pre-certification, internal audit, 2016→2025 transition."
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
                    <i className="ri-file-copy-line pillar-icon"></i>
                    <h4>{"ABMS Consultation"}</h4>
                    <p>
                      {
                        "Full implementation, IMS integration, PCA alignment, EDG grant managed."
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
                    <i className="ri-bar-chart-grouped-line pillar-icon"></i>
                    <h4>{"ABMS Training"}</h4>
                    <p>
                      {
                        "Lead Auditor (PECB), Internal Auditor, Implementer, Board governance, Staff awareness."
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
              <div className="alert alert-success border-0 p-4 rounded-3 mb-5">
                <i
                  className="ri-government-line fs-3 me-3 float-start"
                  style={{ color: "#3B6D11" }}
                ></i>
                <h5 className="text-dark">
                  {
                    "EDG / MASA grant — up to 50% co-funding for ISO 37001 consultation"
                  }
                </h5>
                <p className="mb-0">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 37001 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. Integrated ABMS + ISO 9001 / ISO 27001 projects can qualify for EDG co-funding across all standards in a single application."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn btn-success mt-3"
                  style={{ background: "#3B6D11", padding: "10px 24px" }}
                >
                  {"Check eligibility →"}
                </SiteLink>
              </div>
              <h3 className="rs-services-details-title mt-40 mb-20">
                {
                  "ICFC's ABMS audit process — bribery risk mapping to certificate"
                }
              </h3>
              <div className="step-timeline">
                <div className="step-item">
                  <div className="step-number">{"01. Free briefing"}</div>
                  <p>{"ABMS scope, PCA obligations, grant eligibility"}</p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"02. Bribery risk map"}</div>
                  <p>
                    {"Activities, geographies, third parties — risk register"}
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"03. Gap analysis"}</div>
                  <p>
                    {
                      "Full ISO 37001:2025 gap assessment including 2025 updates"
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"04. Grant application"}</div>
                  <p>{"EDG submitted and approved before any billable work"}</p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"05. Pre-cert audit"}</div>
                  <p>{"Mock audit — close NCPs before SAC-accredited CB"}</p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"06. Certification"}</div>
                  <p>
                    {"Stage 1 + Stage 2 CB audit — ISO 37001:2025 certificate"}
                  </p>
                </div>
              </div>
              <h3 className="rs-services-details-title mt-40 mb-20">
                {
                  "ABMS consultation — from bribery risk assessment to ISO 37001:2025 certificate"
                }
              </h3>
              <div className="step-timeline">
                <div className="step-item">
                  <div className="step-number">{"01. Free assessment"}</div>
                  <p>{"ABMS scope, PCA exposure, grant eligibility check"}</p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"02. Grant application"}</div>
                  <p>{"EDG submitted and approved before any work begins"}</p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"03. Bribery risk assessment"}
                  </div>
                  <p>
                    {"Activities, geographies, third parties — risk register"}
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"04. ABMS build"}</div>
                  <p>
                    {"Policy, controls, due diligence, whistleblowing, CoI"}
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"05. 2025 updates"}</div>
                  <p>{"Climate risk, enhanced CoI, compliance culture"}</p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"06. Internal audit"}</div>
                  <p>{"Mock audit and corrective actions before CB"}</p>
                </div>
                <div className="step-item">
                  <div className="step-number">{"07. Certification"}</div>
                  <p>{"SAC-accredited CB Stage 1 + Stage 2 — certificate"}</p>
                </div>
              </div>
              <h3 className="rs-services-details-title mt-40 mb-20">
                {"Client outcomes · Singapore"}
              </h3>
              <div className="row g-4 mb-40">
                <div className="col-md-4">
                  <div className="testimonial-card">
                    <i className="ri-double-quotes-L"></i>
                    <p className="mt-2">
                      {
                        '"ICFC helped us achieve ISO 37001 certification in eight months — from scratch. Their third-party due diligence framework identified three overseas agents who had never been properly assessed for bribery risk."'
                      }
                    </p>
                    <p className="fw-bold mb-0 mt-3">
                      {"— GM, Infrastructure contractor"}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial-card">
                    <i className="ri-double-quotes-L"></i>
                    <p className="mt-2">
                      {
                        '"Integrated ISO 9001 + ISO 37001 approach meant one project, one EDG grant application, and certification to both standards simultaneously. Total cost was significantly less than budgeted."'
                      }
                    </p>
                    <p className="fw-bold mb-0 mt-3">
                      {"— COO, Logistics provider"}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial-card">
                    <i className="ri-double-quotes-L"></i>
                    <p className="mt-2">
                      {
                        '"ICFC\'s ISO 37001:2025 transition audit identified gaps in conflicts of interest register and climate change risk for renewable energy procurement. We transitioned on first attempt."'
                      }
                    </p>
                    <p className="fw-bold mb-0 mt-3">
                      {"— CCO, Energy company"}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-10">
                {"Frequently asked questions — ISO 37001 ABMS"}
              </h3>
              <div className="accordion" id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "How does ISO 37001 certification help in the event of a CPIB investigation?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "SS ISO 37001 helps provide evidence to prosecutors or courts that the company had taken reasonable steps to prevent bribery. This evidentiary protection is the most compelling reason for Singapore companies to certify under the Prevention of Corruption Act. A company that can demonstrate it had implemented internationally recognised anti-bribery controls is in a significantly stronger legal position than one with no documented anti-bribery management system."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "What are the main differences between ISO 37001:2016 and the 2025 edition?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "The 2025 edition introduces: (1) Climate change risk assessment mandatory for sustainability projects, carbon trading, green financing; (2) Enhanced conflicts of interest management; (3) Stronger compliance culture requirements — tone from the top now formally assessed; (4) Improved whistleblower protections; (5) ISO harmonized structure for better integration with ISO 9001, ISO 27001."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How much does ISO 37001 consultation cost after grants?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Typical ICFC consultation fees S$12,000–S$35,000. EDG covers up to 50% for eligible SMEs. Certification body fees S$4,000–S$9,000. Integrated IMS projects reduce total cost by 20-30%. Small organizations may complete the process in 6-8 months."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Does ISO 37001 satisfy UK Bribery Act and US FCPA requirements?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    'Yes — ISO 37001 is widely recognised as demonstrating "adequate procedures" under the UK Bribery Act and aligns with US DOJ compliance programme expectations for FCPA. ICFC designs ABMS programmes that explicitly address the six principles of the UK Bribery Act and align with US DOJ guidance.'
                  }
                </AccordionItem>
              </div>
              <div className="bg-soft-red p-5 rounded-4 mt-50 text-center">
                <h3 className="mb-3">
                  {"Start your ISO 37001:2025 ABMS journey today"}
                </h3>
                <p className="mb-4">
                  {
                    "Free 30-minute anti-bribery assessment. Honest gap analysis against ISO 37001:2025. PCA and CPIB framework alignment review. EDG grant eligibility check. No obligation."
                  }
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-primary"
                    style={{ background: "#C8102E" }}
                  >
                    {"Book free ABMS assessment →"}
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
                    "ISO 37001:2025 ABMS certification — CPIB endorsed, PCA aligned. "
                  }
                  <SiteLink href="/contact-us.html">
                    {"Start your anti-bribery governance journey today →"}
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
