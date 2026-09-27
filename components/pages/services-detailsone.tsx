import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";

export function ServicesDetailsonePageContent() {
  return (
    <SitePageTemplate
      route="services-detailsone.html"
      stylesheets={[
        "/assets/css/vendor/bootstrap.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
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
        "/styles/pages/services-detailsone.css",
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
      title="ISO/IEC 27701 Privacy Information Management System (PIMS)"
      description="Audit · Consulting · Training — Singapore PDPA-Aligned Certification for Every Industry. 隐私信息管理体系认证 · 新加坡个人数据保护合规 · ESG资助申请协助 · 35+行业覆盖"
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
                  alt="ISO 27701 PIMS Certification"
                />
              </div>
              <div className="row mt-40 mb-40">
                <div className="col-md-3 col-6">
                  <div className="pims-stat-box">
                    <div className="pims-stat-number">{"35+"}</div>
                    <p className="mb-0">{"Industries Served"}</p>
                    <small>{"Deep sector expertise"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="pims-stat-box">
                    <div className="pims-stat-number">{"200+"}</div>
                    <p className="mb-0">{"Organisations Certified"}</p>
                    <small>{"Across Singapore & ASEAN"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="pims-stat-box">
                    <div className="pims-stat-number">{"100%"}</div>
                    <p className="mb-0">{"PDPA Compliant Framework"}</p>
                    <small>{"PDPC Recognised"}</small>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="pims-stat-box">
                    <div className="pims-stat-number">{"S$0"}</div>
                    <p className="mb-0">{"Initial Consultation"}</p>
                    <small>{"Free no-obligation quote"}</small>
                  </div>
                </div>
              </div>
              <h3 className="rs-services-details-title mt-15 mb-20">
                {"Singapore's Premier Privacy Compliance Specialist"}
              </h3>
              <p>
                {
                  "ISO/IEC 27701:2019 is the international standard that extends ISO/IEC 27001 to establish, implement, maintain and continually improve a Privacy Information Management System (PIMS). In Singapore's regulatory landscape, PIMS directly supports your obligations under the Personal Data Protection Act (PDPA), providing a structured, auditable framework for personal data governance."
                }
              </p>
              <div className="alert alert-danger bg-soft-red border-0 mt-3 mb-4 p-4">
                <i className="ri-shield-check-fill fs-3 me-2 float-start text-pims-red"></i>
                <strong>{"ISO 27701 PIMS certification"}</strong>
                {
                  " demonstrates to customers, regulators, and partners that your organisation treats personal data with the rigour it deserves — a competitive differentiator and a regulatory safeguard in Singapore's tightening data privacy environment."
                }
              </div>
              <p>
                {
                  "Bustar Consulting is Singapore's most trusted, budget-friendly PIMS certification specialist — delivering end-to-end audit, consulting, and training services across all major industries. Our bilingual (English & Mandarin) team ensures seamless adoption whether you're an MNC, SME, or government-linked organisation."
                }
              </p>
              <div className="row g-4 mt-5">
                <div className="col-md-4">
                  <div className="service-pillar-card">
                    <i className="ri-survey-line pillar-icon"></i>
                    <h4>{"01. PIMS Certification Audit"}</h4>
                    <p>
                      {
                        "Independent, impartial ISO/IEC 27701 gap analysis and certification audit services. Our accredited auditors assess your privacy controls against all 31 privacy-specific clauses and 49 PDPA-mapped controls."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="btn-outline-pims mt-3"
                    >
                      {"Explore Audit "}
                      <i className="ri-arrow-right-line"></i>
                    </SiteLink>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-pillar-card">
                    <i className="ri-file-copy-line pillar-icon"></i>
                    <h4>{"02. PIMS Implementation Consulting"}</h4>
                    <p>
                      {
                        "End-to-end consulting to design, implement, and operationalise your Privacy Information Management System. Our Singapore-based consultants bring deep PDPA expertise and pragmatic approach."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="btn-outline-pims mt-3"
                    >
                      {"Explore Consulting "}
                      <i className="ri-arrow-right-line"></i>
                    </SiteLink>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-pillar-card">
                    <i className="ri-bar-chart-grouped-line pillar-icon"></i>
                    <h4>{"03. PIMS Awareness & Training"}</h4>
                    <p>
                      {
                        "Industry-leading ISO 27701 training programs designed for Singapore's multi-sector workforce. From C-suite privacy awareness to hands-on implementer boot camps."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="btn-outline-pims mt-3"
                    >
                      {"Explore Training "}
                      <i className="ri-arrow-right-line"></i>
                    </SiteLink>
                  </div>
                </div>
              </div>
              <h3 className="rs-services-details-title mt-50 mb-20">
                {"ISO 27701 Audit Process"}
              </h3>
              <div className="step-timeline">
                <div className="step-item">
                  <div className="step-number">
                    {"Step 1: Pre-Audit Scoping & Readiness Review"}
                  </div>
                  <p>
                    {
                      "Define audit scope, identify PIIs in scope, review existing ISMS documentation, and assess PDPA compliance posture. We identify quick wins and critical gaps before formal audit begins."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"Step 2: Stage 1 - Documentation Audit"}
                  </div>
                  <p>
                    {
                      "Desk review of your PIMS policies, procedures, risk registers, DPIAs, and legal bases documentation. We verify alignment with ISO 27701 Annex A, B, and all Singapore PDPA obligations."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"Step 3: Stage 2 - On-site Certification Audit"}
                  </div>
                  <p>
                    {
                      "In-depth interviews, evidence sampling, and process walk-throughs across your organisation. Assessment against all 31 privacy-specific clauses covering both data controllers and processors."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"Step 4: Non-Conformity Resolution & Corrective Action"}
                  </div>
                  <p>
                    {
                      "We work alongside your team to close identified non-conformities, providing remediation guidance, documentation templates, and evidence-gathering support."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"Step 5: Certification Recommendation & Award"}
                  </div>
                  <p>
                    {
                      "Successful completion results in ISO/IEC 27701 certification valid for 3 years, with annual surveillance audits. Certificate is internationally recognised and accepted by regulators globally."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"Step 6: Surveillance & Recertification (Ongoing)"}
                  </div>
                  <p>
                    {
                      "Annual surveillance audits maintain certification currency. We support continuous improvement, PDPA regulatory updates, and recertification every 3 years."
                    }
                  </p>
                </div>
              </div>
              <h4>{"Audit Deliverables"}</h4>
              <ul className="deliverables-list mb-4">
                <li>{"ISO/IEC 27701 Certification Certificate"}</li>
                <li>{"Detailed Gap Analysis Report"}</li>
                <li>{"Non-conformity Register with remediation roadmap"}</li>
                <li>{"PDPA Obligation Mapping Matrix"}</li>
                <li>{"Privacy Risk Assessment Report"}</li>
                <li>{"Audit Evidence Package"}</li>
                <li>{"Corrective Action Plan (CAP)"}</li>
                <li>{"Executive Summary Presentation"}</li>
              </ul>
              <p>
                <strong>{"Typical Audit Timeline:"}</strong>
                {
                  " Pre-Audit Scoping (Week 1-2) → Stage 1 Documentation Review (Week 3-4) → Stage 2 On-site Audit (Week 5-7) → NC Closure (Week 8-10) → Certification Award (Week 11-12) → Total Duration 10-14 Weeks"
                }
              </p>
              <h3 className="rs-services-details-title mt-40 mb-20">
                {"PIMS Implementation Consulting"}
              </h3>
              <div className="step-timeline">
                <div className="step-item">
                  <div className="step-number">
                    {"1. Organisational Privacy Maturity Assessment"}
                  </div>
                  <p>
                    {
                      "Baseline assessment of your current privacy practices, data flows, existing policies, and PDPA compliance gaps. Produces a prioritised improvement roadmap with ROI considerations."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"2. Data Inventory, Mapping & ROPA"}
                  </div>
                  <p>
                    {
                      "Comprehensive mapping of personal data across systems, processes, and third parties. We build your Register of Processing Activities (ROPA) aligned to PDPC requirements."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"3. Privacy Risk Assessment & DPIA/PIA"}
                  </div>
                  <p>
                    {
                      "Structured Data Protection Impact Assessments for high-risk processing activities, aligned to PDPC's Advisory Guidelines on DPIA and ISO 29134."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"4. Policy, Procedure & Control Development"}
                  </div>
                  <p>
                    {
                      "End-to-end drafting of your Privacy Policy, Data Breach Response Plan, Consent Management Framework, Third-party Vendor Management Policy, and all supporting PIMS documentation."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"5. PIMS Implementation & Integration"}
                  </div>
                  <p>
                    {
                      "Technical and operational implementation of privacy controls, integrated with your existing ISMS (ISO 27001), quality management (ISO 9001), or ESG reporting frameworks."
                    }
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">
                    {"6. ESG Grant & Funding Application Assistance"}
                  </div>
                  <p>
                    {
                      "We identify applicable government grants (EDG, CTO-as-a-Service, MAS FSTI, IMDA schemes) and prepare your application to maximise funding coverage for PIMS certification."
                    }
                  </p>
                </div>
              </div>
              <h4>{"Consulting Deliverables"}</h4>
              <ul className="deliverables-list mb-4">
                <li>{"Privacy Maturity Assessment Report"}</li>
                <li>{"Data Flow Maps & ROPA Documentation"}</li>
                <li>{"Privacy Policy Suite (15+ templates)"}</li>
                <li>{"DPIA/PIA Reports for high-risk processes"}</li>
                <li>{"Consent Management Framework"}</li>
                <li>{"Vendor Privacy Risk Assessment Templates"}</li>
                <li>{"Data Breach Response Playbook"}</li>
                <li>{"PIMS Implementation Roadmap"}</li>
                <li>{"ESG/EDG Grant Application Package"}</li>
              </ul>
              <p>
                <strong>{"Consulting Timeline:"}</strong>
                {
                  " Discovery & Assessment (Week 1-3) → Data Mapping & ROPA (Week 3-6) → Policy Development (Week 5-10) → Control Implementation (Week 8-16) → Grant Application Support (Parallel Track) → Certification-Ready in 12-20 Weeks"
                }
              </p>
              <h3 className="rs-services-details-title mt-40 mb-20">
                {"PIMS Training Programs"}
              </h3>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-4">
                    <h5>{"ISO 27701 Foundation Course (1 Day)"}</h5>
                    <p>
                      {
                        "Introduction to PIMS concepts, ISO 27701 structure, key clauses, PDPA alignment, and the role of DPO. Ideal for all staff needing privacy awareness. Available in English and Mandarin."
                      }
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-4">
                    <h5>{"ISO 27701 Implementer Course (3 Days)"}</h5>
                    <p>
                      {
                        "Hands-on training for privacy officers, IT teams, and compliance professionals. Covers PIMS design, DPIA methodology, policy development, and audit preparation techniques."
                      }
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-4">
                    <h5>{"PDPA Staff Awareness Programme (Half Day)"}</h5>
                    <p>
                      {
                        "Practical, scenario-based PDPA training for all employees. Covers consent, purpose limitation, access rights, data breach obligations, and do-not-call registry compliance."
                      }
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-4">
                    <h5>{"DPO Certification Preparation (2 Days)"}</h5>
                    <p>
                      {
                        "Intensive preparation for PDPC's Data Protection Officer certification. Covers PDPA obligations, privacy risk management, breach notification, and enforcement case studies from Singapore."
                      }
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-4">
                    <h5>{"Executive Privacy Leadership Workshop"}</h5>
                    <p>
                      {
                        "Half-day C-suite workshop on privacy governance, board responsibilities, ESG privacy reporting, regulatory enforcement trends, and building privacy-by-design into business strategy."
                      }
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-4">
                    <h5>{"Custom Industry-Specific Training"}</h5>
                    <p>
                      {
                        "Bespoke training modules for Fintech (MAS Notice), Healthcare (MOH requirements), Telecommunications (iDA regulations), CII operators, and other regulated sectors."
                      }
                    </p>
                  </div>
                </div>
              </div>
              <p>
                <strong>{"Training Formats:"}</strong>
                {
                  " Public classroom (Singapore CBD), Private on-site corporate sessions, Live virtual (Zoom / Teams), Self-paced e-learning modules, Mandarin-language classes 华语班, SkillsFuture Credit eligible courses."
                }
              </p>
              <h3 className="rs-services-details-title mt-40 mb-20">
                {"PDPC Enforcement Statistics (2024–2025)"}
              </h3>
              <div className="row g-4 mb-4">
                <div className="col-md-4">
                  <div className="pims-stat-box">
                    <div className="pims-stat-number">{"S$1M+"}</div>
                    <p>{"Maximum financial penalty per breach"}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pims-stat-box">
                    <div className="pims-stat-number">{"10%"}</div>
                    <p>{"Annual turnover cap for large enterprises"}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pims-stat-box">
                    <div className="pims-stat-number">{"3 Days"}</div>
                    <p>{"Mandatory breach notification window"}</p>
                  </div>
                </div>
              </div>
              <div className="grant-badge mb-4">
                <i className="ri-government-line fs-3 float-start me-3"></i>
                <h5 className="mb-1">
                  {"EDG & ESG Grant Eligible - Up to 70% Co-funding"}
                </h5>
                <p>
                  {
                    "Enterprise Development Grant (EDG) supports SMEs in building business capabilities. PIMS implementation qualifies under Consultancy capability category. MAS FSTI for financial institutions, IMDA Digital Resilience Bonus also available."
                  }
                </p>
                <p className="mt-2">
                  <strong>{"Why Budget-Friendly Matters:"}</strong>
                  {
                    " Many SMEs believe ISO 27701 certification is out of reach financially. Bustar challenges this assumption with modular, right-sized engagement models. Our SME PIMS Express package — combining gap assessment, essential policy templates, and certification support — is engineered to deliver international-standard privacy governance at a fraction of large consultancy costs. With ESG and EDG grant stacking, many clients achieve net certification costs below S$5,000."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn-pims mt-2"
                  style={{ background: "#3B6D11" }}
                >
                  {"Check Eligibility "}
                  <i className="ri-arrow-right-line"></i>
                </SiteLink>
              </div>
              <p>
                <strong>{"PIMS as ESG Currency:"}</strong>
                {
                  " ISO 27701 PIMS certification is increasingly recognised as a governance component of ESG (Environmental, Social, Governance) reporting — particularly in the Social dimension. SGX-listed companies and supply chain partners are beginning to require privacy governance evidence from vendors. Early PIMS certification positions your organisation ahead of this curve, supporting both regulatory compliance and ESG-driven supplier qualification."
                }
              </p>
              <h3 className="rs-services-details-title mb-20">
                {"35+ Industries We Serve"}
              </h3>
              <div className="mb-40">
                <span className="industry-tag">
                  {"🏦 Financial Services & Fintech"}
                </span>
                <span className="industry-tag">{"📡 Telecommunications"}</span>
                <span className="industry-tag">
                  {"💻 Information Technology"}
                </span>
                <span className="industry-tag">
                  {"🏢 Data Centre Operations"}
                </span>
                <span className="industry-tag">
                  {"🛡️ Critical Information Infrastructure"}
                </span>
                <span className="industry-tag">
                  {"🏥 Healthcare & Hospitals"}
                </span>
                <span className="industry-tag">
                  {"💊 Pharmaceutical & Biotech"}
                </span>
                <span className="industry-tag">
                  {"🏗️ Construction & Real Estate"}
                </span>
                <span className="industry-tag">{"⚓ Marine & Shipping"}</span>
                <span className="industry-tag">
                  {"🚛 Logistics & Supply Chain"}
                </span>
                <span className="industry-tag">
                  {"🏭 Manufacturing & Industry 4.0"}
                </span>
                <span className="industry-tag">
                  {"🎓 Education & Training"}
                </span>
                <span className="industry-tag">
                  {"🏛️ Government & Statutory Boards"}
                </span>
                <span className="industry-tag">{"🛒 Retail & E-Commerce"}</span>
                <span className="industry-tag">
                  {"🍽️ Food & Beverage / Hospitality"}
                </span>
                <span className="industry-tag">
                  {"✈️ Aviation & Aerospace"}
                </span>
                <span className="industry-tag">{"⚡ Energy & Utilities"}</span>
                <span className="industry-tag">{"🏠 Property Management"}</span>
                <span className="industry-tag">
                  {"🎰 Gaming & Entertainment"}
                </span>
                <span className="industry-tag">
                  {"⚖️ Legal & Professional Services"}
                </span>
                <span className="industry-tag">
                  {"🚌 Land Transport & Mobility"}
                </span>
                <span className="industry-tag">
                  {"🔬 Research & Academic Institutions"}
                </span>
                <span className="industry-tag">
                  {"🛡️ Cybersecurity Services"}
                </span>
                <span className="industry-tag">
                  {"📱 Media & Communications"}
                </span>
                <span className="industry-tag">
                  {"🧪 Laboratory & Testing Services"}
                </span>
                <span className="industry-tag">{"💰 Insurance"}</span>
                <span className="industry-tag">
                  {"🌐 Digital Marketing & AdTech"}
                </span>
                <span className="industry-tag">
                  {"🧩 Human Resources & Staffing"}
                </span>
                <span className="industry-tag">
                  {"🔧 Engineering & Technical Services"}
                </span>
                <span className="industry-tag">
                  {"🌱 Environmental & Sustainability (ESG)"}
                </span>
                <span className="industry-tag">
                  {"🎨 Creative & Design Industries"}
                </span>
                <span className="industry-tag">{"🛳️ Cruise & Tourism"}</span>
                <span className="industry-tag">
                  {"🧸 Social Services & NGOs"}
                </span>
                <span className="industry-tag">
                  {"🧬 MedTech & HealthTech"}
                </span>
                <span className="industry-tag">
                  {"🤖 AI / Data Analytics Firms"}
                </span>
                <p className="mt-3 text-muted">
                  <small>
                    {
                      "Don't see your industry? Contact us — we cover all sectors operating in Singapore."
                    }
                  </small>
                </p>
              </div>
              <h3 className="rs-services-details-title mb-20">
                {"How ISO 27701 Maps to Singapore's PDPA"}
              </h3>
              <div className="table-responsive mb-40">
                <table className="table table-bordered">
                  <thead className="bg-light">
                    <tr>
                      <th>{"PDPA Obligation"}</th>
                      <th>{"ISO 27701 Control"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{"Consent & Notification"}</td>
                      <td>
                        {"Clause 7.2, 7.3 – Purpose and consent management"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Access & Correction"}</td>
                      <td>{"Clause 7.3 – DSAR handling procedures"}</td>
                    </tr>
                    <tr>
                      <td>{"Protection (Security)"}</td>
                      <td>
                        {"Annex A / B – Technical & organisational controls"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Retention Limitation"}</td>
                      <td>
                        {"Data lifecycle & retention schedule management"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Transfer Limitation"}</td>
                      <td>
                        {"Third-party management & transfer impact assessments"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Data Breach Notification"}</td>
                      <td>
                        {"Incident response & breach notification procedures"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Accountability"}</td>
                      <td>{"PIMS certification as evidence to PDPC"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-soft-red p-5 rounded-4 mb-40">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <h3 className="mb-3">
                      {
                        "Why Bustar Consulting? Singapore's Best-Value PIMS Specialist"
                      }
                    </h3>
                    <p>
                      {
                        "200+ organisations certified across Singapore, ASEAN, and Greater China. Bilingual (English & Mandarin) consultants. PDPA-first methodology, not generic templates. Practical, operational experience. Long-term partnership with DPO retainer services."
                      }
                    </p>
                    <ul className="deliverables-list">
                      <li>
                        {
                          "PDPA-First Methodology – Every PIMS engagement starts with Singapore PDPA alignment"
                        }
                      </li>
                      <li>
                        {
                          "Practical, Not Just Compliant – We build PIMS that actually work in your organisation"
                        }
                      </li>
                      <li>
                        {
                          "Long-Term Partnership – We don't disappear after certification"
                        }
                      </li>
                    </ul>
                    <SiteLink href="/contact-us.html" className="btn-pims mt-2">
                      {"Start Your PIMS Journey "}
                      <i className="ri-arrow-right-line"></i>
                    </SiteLink>
                  </div>
                  <div className="col-lg-5 text-center">
                    <i
                      className="ri-award-fill"
                      style={{ fontSize: "80px", color: "#C8102E" }}
                    ></i>
                    <h4 className="mt-2">{"Trusted by 200+ Orgs"}</h4>
                    <p>{"⭐⭐⭐⭐⭐ Singapore's leading PIMS partner"}</p>
                  </div>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-20">
                {"Frequently Asked Questions"}
              </h3>
              <div className="faq-custom-wrapper" id="faqCustom">
                <div className="faq-custom-item">
                  <div className="faq-custom-question">
                    {
                      "What is ISO/IEC 27701 and how does it relate to Singapore's PDPA? "
                    }
                    <i className="ri-add-line"></i>
                  </div>
                  <div className="faq-custom-answer">
                    {
                      'ISO/IEC 27701:2019 is the international standard for Privacy Information Management Systems (PIMS). It extends ISO/IEC 27001 (Information Security) by adding specific privacy controls for both Personal Information Controllers (PICs) and Personal Information Processors (PIPs). In Singapore\'s context, PIMS directly supports compliance with the PDPA 2012 (as amended in 2021), and achieving certification demonstrates the "accountability" obligation to the PDPC — potentially serving as a mitigating factor in enforcement actions.'
                    }
                  </div>
                </div>
                <div className="faq-custom-item">
                  <div className="faq-custom-question">
                    {"How long does ISO 27701 PIMS certification take? "}
                    <i className="ri-add-line"></i>
                  </div>
                  <div className="faq-custom-answer">
                    {
                      "For organisations with an existing ISO 27001 ISMS, PIMS certification typically takes 10–14 weeks including gap analysis, policy development, and the two-stage audit process. For organisations starting from scratch, expect 16–24 weeks for a full ISMS + PIMS implementation. Bustar's SME Express pathway can accelerate this to 8–10 weeks for smaller organisations with simpler data processing activities."
                    }
                  </div>
                </div>
                <div className="faq-custom-item">
                  <div className="faq-custom-question">
                    {"Is PIMS certification mandatory in Singapore? "}
                    <i className="ri-add-line"></i>
                  </div>
                  <div className="faq-custom-answer">
                    {
                      "ISO 27701 PIMS certification is currently voluntary in Singapore. However, it is increasingly becoming a de facto requirement in regulated sectors (financial services, healthcare, CII), government procurement, and MNC supply chains. PDPC explicitly recognises PIMS certification as evidence of accountability. With PDPA penalties now reaching up to 10% of annual turnover or S$1 million, the risk-reduction value of certification far outweighs its cost."
                    }
                  </div>
                </div>
                <div className="faq-custom-item">
                  <div className="faq-custom-question">
                    {"Can we get ESG grants to fund PIMS certification? "}
                    <i className="ri-add-line"></i>
                  </div>
                  <div className="faq-custom-answer">
                    {
                      "Yes. Singapore SMEs may be eligible for Enterprise Singapore's Enterprise Development Grant (EDG), which can cover up to 70% of qualifying consultancy and certification costs. Financial sector organisations may access MAS's FSTI scheme. IMDA's Digital Resilience Bonus may also apply for certain sectors. Bustar's grant advisory team will assess your specific eligibility and prepare your application as part of our engagement — at no additional charge for qualifying clients."
                    }
                  </div>
                </div>
                <div className="faq-custom-item">
                  <div className="faq-custom-question">
                    {"Do we need ISO 27001 before pursuing ISO 27701? "}
                    <i className="ri-add-line"></i>
                  </div>
                  <div className="faq-custom-answer">
                    {
                      "ISO 27701 is an extension to ISO 27001, meaning a certified ISMS is technically required as the foundation. In practice, many organisations pursue a combined ISO 27001 + ISO 27701 implementation and certification, which is often more cost-effective and time-efficient than sequential certifications. Bustar offers an integrated implementation pathway and can recommend the optimal approach based on your organisation's starting point."
                    }
                  </div>
                </div>
                <div className="faq-custom-item">
                  <div className="faq-custom-question">
                    {
                      "Do you offer Mandarin-language PIMS services? 提供华语服务吗？ "
                    }
                    <i className="ri-add-line"></i>
                  </div>
                  <div className="faq-custom-answer">
                    {
                      "是的。Bustar Consulting provides fully bilingual ISO 27701 PIMS services in both English and Mandarin (普通话). This includes consulting engagements, training courses, documentation in Chinese, and client communications. We serve Singapore-based companies with Chinese-speaking leadership, as well as Chinese multinationals expanding into Singapore who require PDPA-compliant operations."
                    }
                  </div>
                </div>
                <div className="faq-custom-item">
                  <div className="faq-custom-question">
                    {"What is the cost of ISO 27701 PIMS certification? "}
                    <i className="ri-add-line"></i>
                  </div>
                  <div className="faq-custom-answer">
                    {
                      "Bustar prides itself on being Singapore's most budget-friendly PIMS specialist without compromising on quality. Indicative pricing for SME PIMS Express (up to 50 employees, simple data processing): from S$8,000–S$15,000 before grants. Mid-size organisations (50–500 employees): S$18,000–S$45,000. Enterprise (500+ employees, complex processing): custom scoping. After EDG grant support (up to 70%), net costs are substantially reduced. Contact us for a free, no-obligation scoping quote."
                    }
                  </div>
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
                <svg width="6" height="11" viewBox="0 0 6 11">
                  <path
                    d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                    fill="#AB052D"
                  ></path>
                </svg>
              </span>
              <div className="rs-cta-content">
                <p>
                  {
                    "Join 200+ Singapore organisations that trust Bustar to navigate ISO 27701, PDPA compliance, and privacy governance — on time, on budget, and with grant support. "
                  }
                  <SiteLink href="/contact-us.html">
                    {"Get Free Quote →"}
                  </SiteLink>
                  {
                    " | Call us: +65 9123 4567 | Email: bustar@bustarconsulting.com | 华语热线: +65 8123 4567"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
