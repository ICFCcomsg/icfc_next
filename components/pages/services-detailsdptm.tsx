import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsdptmPageContent() {
  return (
    <SitePageTemplate
      route="services-detailsdptm.html"
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
        "/styles/pages/services-detailsdptm.css",
      ]}
    >
      <main>
        <BannerAreaSection />
        <ContainerSection />
        <ContainerSection2 />
        <SectionSpaceSection />
        <SectionSpaceSection2 />
        <SectionSpaceSection3 />
        <ContainerSection3 />
        <ContainerSection4 />
        <SectionSpaceSection4 />
        <SectionSpaceSection5 />
        <ContainerSection5 />
        <ContainerSection6 />
        <SeoKeywordsSection />
        <SectionSpaceSection6 />
        <ContainerSection7 />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section
      className="rs-banner-area rs-banner-one"
      style={{ background: "#0a3142" }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "70vh" }}>
          <div className="col-xl-8">
            <div className="rs-banner-wrapper">
              <span
                className="rs-banner-subtitle  fadeInUp"
                style={{ color: "#6ab0de" }}
              >
                {"SS 714:2025 · Data Protection Trustmark · PDPA · Singapore"}
              </span>
              <h1 className="rs-banner-title  fadeInUp">
                {"Data Protection Trustmark —"}
                <br />
                {"SS 714:2025 certified, PDPA aligned, grant-funded"}
              </h1>
              <p className="rs-banner-desc">
                {
                  "DPTM certification demonstrates accountable personal data handling. EDG/MASA grant up to 50% | PDPC Active Enforcement mitigating factor | DPO registration mandatory from June 2025."
                }
              </p>
              <div className="rs-banner-btn">
                <SiteLink
                  className="rs-btn has-icon has-bg-white hover-primary"
                  href="/contact-us.html"
                >
                  {"Free DPTM assessment →"}
                  <span className="icon-box">
                    <svg
                      className="icon-first"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </SiteLink>
                <SiteLink
                  className="rs-btn has-icon is-transparent hover-primary"
                  href="#grant"
                >
                  {"Check EDG grant eligibility →"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection() {
  return (
    <div className="container section-space-top">
      <div className="dptm-stats-grid">
        <div className="dptm-stat-card">
          <div className="dptm-stat-number">{"SS 714"}</div>
          <div>{":2025 — national standard"}</div>
        </div>
        <div className="dptm-stat-card">
          <div className="dptm-stat-number">{"3 yr"}</div>
          <div>{"Certificate + surveillance"}</div>
        </div>
        <div className="dptm-stat-card">
          <div className="dptm-stat-number">{"50%"}</div>
          <div>{"EDG grant co-funding"}</div>
        </div>
        <div className="dptm-stat-card">
          <div className="dptm-stat-number">{"7"}</div>
          <div>{"IMDA-appointed CBs"}</div>
        </div>
        <div className="dptm-stat-card">
          <div className="dptm-stat-number">{"35+"}</div>
          <div>{"Industries served"}</div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection2() {
  return (
    <div className="container">
      <div
        className="alert alert-info border-0 rounded-4 p-4"
        style={{ background: "#e8f4f8" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <h4 className="text-dark">
              {"🛡️ Why DPTM matters more than ever in 2026"}
            </h4>
            <div className="row mt-3">
              <div className="col-md-6">
                <strong>{"PDPC Active Enforcement"}</strong>
                {
                  " — DPTM certification serves as a mitigating factor under PDPC's Active Enforcement Framework — reducing penalty exposure in data breach investigations."
                }
              </div>
              <div className="col-md-6">
                <strong>{"DPO Registration"}</strong>
                {
                  " — DPO registration with PDPC is now a legal requirement (effective 1 June 2025) — DPTM structures the governance around your DPO."
                }
              </div>
              <div className="col-md-6 mt-2">
                <strong>{"Procurement"}</strong>
                {
                  " — Government agencies and enterprise clients increasingly require DPTM as vendor qualification."
                }
              </div>
              <div className="col-md-6 mt-2">
                <strong>{"Digital Economy"}</strong>
                {
                  " — Singapore's vision as a trusted global data hub — DPTM is the mark of distinction."
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">{"SS 714:2025 DPTM"}</span>
          <h2>
            {
              "What is the Data Protection Trustmark? Singapore's official data protection certification"
            }
          </h2>
        </div>
        <p>
          {
            "The DPTM is a voluntary, enterprise-wide certification that assesses an organisation's data protection maturity through a structured governance audit against the PDPA's requirements. Jointly developed by PDPC and IMDA, it was elevated to Singapore Standard SS 714:2025 in 2025 — reinforcing its national recognition and linking it to SAC's accreditation framework."
          }
        </p>
        <p>
          {
            "SS 714:2025 took effect with a new SAC accreditation programme from 7 July 2025. Under the new standard, the SAC ensures certification bodies demonstrate the necessary competence to conduct SS 714 audits based on ISO/IEC 17021-1 and SAC CT 34. DPTM may serve as a mitigating factor under PDPC's Active Enforcement Framework. For any Singapore organisation handling significant volumes of personal data, DPTM is no longer merely a commercial differentiator; it is a risk management instrument."
          }
        </p>
      </div>
    </section>
  );
}

function SectionSpaceSection2() {
  return (
    <section className="section-space theme-secondary">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">{"DPTM services"}</span>
          <h2>{"Audit · Consultation · Training"}</h2>
          <p>{"EDG eligible | SAC accreditation | SS 714:2025 aligned"}</p>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="pillar-card">
              <span style={{ fontSize: "42px" }}>{"🔍"}</span>
              <h4 className="mt-3">{"DPTM Audit"}</h4>
              <p>
                {
                  "Gap analysis · Stage 1/Stage 2 readiness · Annual surveillance · Data intermediary PDPA audit."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="rs-btn has-text mt-2"
              >
                {"Explore audit →"}
              </SiteLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pillar-card">
              <span style={{ fontSize: "42px" }}>{"📋"}</span>
              <h4 className="mt-3">{"DPTM Consultation"}</h4>
              <p>
                {
                  "Full SS 714 implementation · DPO appointment · Breach management · Data inventory ROPA · APEC CBPR/PRP."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="rs-btn has-text mt-2"
              >
                {"Explore consulting →"}
              </SiteLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pillar-card">
              <span style={{ fontSize: "42px" }}>{"🎓"}</span>
              <h4 className="mt-3">{"DPTM Training"}</h4>
              <p>
                {
                  "DPO practitioner · PDPA implementation · Internal auditor · Staff awareness · Breach tabletop."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="rs-btn has-text mt-2"
              >
                {"Explore training →"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection3() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>
            {"SS 714:2025 certification domains — four pillars ICFC implements"}
          </h2>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-3">
            <div className="domain-card">
              <div className="fs-1 mb-2">{"🏛️"}</div>
              <h5>{"Clause 6 — Governance & transparency"}</h5>
              <p>
                {
                  "DPO appointment and registration, data protection policies, compliance monitoring, stakeholder communication, query and complaint handling, and breach management plan."
                }
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="domain-card">
              <div className="fs-1 mb-2">{"📋"}</div>
              <h5>{"Clause 7 — Management of personal data"}</h5>
              <p>
                {
                  "Consent management, purpose limitation, data collection notification, use and disclosure controls, and cross-border transfer management."
                }
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="domain-card">
              <div className="fs-1 mb-2">{"🔒"}</div>
              <h5>{"Clause 8 — Care of personal data"}</h5>
              <p>
                {
                  "Data security arrangements, accuracy and completeness controls, retention schedules, secure disposal, and third-party data intermediary management."
                }
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="domain-card">
              <div className="fs-1 mb-2">{"⚖️"}</div>
              <h5>{"Clause 9 — Safeguarding individuals' rights"}</h5>
              <p>
                {
                  "Access and correction request procedures, consent withdrawal processes, do-not-call registry compliance, and individual rights communication."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection3() {
  return (
    <div className="container section-space pt-0">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-white border-0 pt-4">
          <h3>
            {
              "DPTM (SS 714:2025) vs ISO 27701 vs PDPA — complete privacy governance picture"
            }
          </h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered comparison-table">
              <thead>
                <tr>
                  <th>{"Dimension"}</th>
                  <th>{"DPTM SS 714:2025"}</th>
                  <th>{"ISO/IEC 27701:2025"}</th>
                  <th>{"PDPA (mandatory)"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{"Authority"}</td>
                  <td>{"IMDA / PDPC — Singapore national"}</td>
                  <td>{"ISO — International"}</td>
                  <td>{"PDPC — Singapore law"}</td>
                </tr>
                <tr>
                  <td>{"Nature"}</td>
                  <td>{"Voluntary certification (national mark)"}</td>
                  <td>{"Voluntary certification (international)"}</td>
                  <td>{"Mandatory legal obligation"}</td>
                </tr>
                <tr>
                  <td>{"Scope"}</td>
                  <td>{"Enterprise-wide data protection practices"}</td>
                  <td>{"Privacy Information Management System"}</td>
                  <td>{"All personal data handling"}</td>
                </tr>
                <tr>
                  <td>{"SAC accreditation"}</td>
                  <td>{"✓ SS 714:2025 from July 2025"}</td>
                  <td>{"✓ ISO 17021-1 accredited CBs"}</td>
                  <td>{"N/A — regulator enforced"}</td>
                </tr>
                <tr>
                  <td>{"PDPC enforcement benefit"}</td>
                  <td>{"✓ Active enforcement mitigating factor"}</td>
                  <td>{"≈ Supports accountability demonstration"}</td>
                  <td>{"N/A — mandatory minimum"}</td>
                </tr>
                <tr>
                  <td>{"EDG grant eligible"}</td>
                  <td>{"✓ Consultation co-funded up to 50%"}</td>
                  <td>{"✓ Consultation co-funded up to 50%"}</td>
                  <td>{"N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            <strong>{"ICFC recommendation:"}</strong>
            {
              " Implement DPTM + ISO 27701 together for maximum PDPA compliance coverage and international recognition — single EDG grant application, 30–40% more efficient."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

function ContainerSection4() {
  return (
    <div id="grant" className="container section-space">
      <div className="grant-banner">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="text-white">
              {
                "50% EDG / MASA grant co-funding — up to 50% of DPTM consultation costs"
              }
            </h3>
            <p>
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying SS 714:2025 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. DPTM + ISO 27701 integrated projects qualify for EDG co-funding on both standards through a single application."
              }
            </p>
            <SiteLink className="rs-btn has-bg-white" href="/contact-us.html">
              {"Check EDG eligibility →"}
            </SiteLink>
          </div>
          <div className="col-lg-4 text-center">
            <i
              className="ri-government-line"
              style={{ fontSize: "60px", opacity: "0.5", color: "white" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection4() {
  return (
    <section className="section-space pt-0">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>
            {"ICFC's DPTM process — data inventory to SS 714:2025 certificate"}
          </h2>
        </div>
        <div className="row g-4 text-center">
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"01"}
              </div>
              <p>{"Free briefing"}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"02"}
              </div>
              <p>{"Data inventory"}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"03"}
              </div>
              <p>{"SS 714 gap analysis"}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"04"}
              </div>
              <p>{"Grant application"}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"05"}
              </div>
              <p>{"Pre-cert audit"}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"06"}
              </div>
              <p>{"CB assessment → certificate"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection5() {
  return (
    <section className="section-space theme-secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"Data Protection Officer"}</h5>
                  <p className="text-muted">
                    {"E-commerce platform, Singapore"}
                  </p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  '"ICFC helped us achieve DPTM certification in under four months — starting from a position where we had a DPO appointment letter but very little else. Their data inventory workshop revealed personal data processing activities across three departments that we had not previously documented. The EDG grant covered 50% of the consultation cost. First-attempt success."'
                }
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"CTO"}</h5>
                  <p className="text-muted">
                    {"Healthcare technology provider, Singapore"}
                  </p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  '"We needed both DPTM and ISO 27701 to qualify for a government tender that required Singapore national certification and international privacy management credentials. ICFC\'s integrated approach — one data inventory, one policy framework, one EDG grant application — saved us significant time and cost versus pursuing them separately."'
                }
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"General Manager"}</h5>
                  <p className="text-muted">
                    {"Logistics service provider, Singapore"}
                  </p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  '"ICFC\'s data breach tabletop exercise was the most valuable part of our DPTM preparation. We ran a realistic breach scenario that exposed a critical gap — we had no pre-drafted PDPC notification template and no clear escalation path for the 3-day notification deadline. Fixing this before it became a real incident was invaluable."'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection5() {
  return (
    <div className="container">
      <div
        className="bg-dark text-white p-5 rounded-4 text-center"
        style={{ background: "linear-gradient(135deg, #1a2a3a, #0f1a24)" }}
      >
        <h3>
          {
            "新加坡SS 714:2025数据保护信任标志（DPTM）认证 · ICFC Pte Ltd（2014年创立）"
          }
        </h3>
        <p className="mt-3">
          {
            "ICFC提供新加坡SS 714:2025数据保护信任标志全程认证服务，包括数据保护差距分析、个人数据清单建立、数据保护官（DPO）任命支持、隐私政策制定、数据泄露应急计划及员工培训，涵盖金融、医疗、物流、零售等35大行业。与PDPA及ISO 27701完全对齐。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务。"
          }
        </p>
        <p>
          <strong>{"关键词："}</strong>
          {
            "数据保护信任标志 · SS 714 2025 · DPTM认证 · PDPA合规 · 个人数据保护官 · DPO注册 · EDG补助金 · 最佳DPTM顾问 · 实惠数据保护认证 · APEC CBPR新加坡"
          }
        </p>
        <SiteLink
          href="/contact-us.html"
          className="btn btn-outline-light mt-2"
        >
          {"中文咨询 · 免费评估 →"}
        </SiteLink>
      </div>
    </div>
  );
}

function ContainerSection6() {
  return (
    <div className="container section-space">
      <h3 className="text-center mb-4">{"Related services"}</h3>
      <div className="row g-4">
        <div className="col-md-2">
          <div className="text-center p-3 border rounded-4 h-100">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#0b5e7e" }}
            >
              {"🛡️"}
            </span>
            <h5>{"ISO 27701"}</h5>
            <p>
              {"International partner to DPTM · 30–40% saving when combined"}
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-center p-3 border rounded-4 h-100">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#0b5e7e" }}
            >
              {"🔒"}
            </span>
            <h5>{"ISO 27001"}</h5>
            <p>
              {"Data security arrangements required by SS 714:2025 Clause 8"}
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-center p-3 border rounded-4 h-100">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#0b5e7e" }}
            >
              {"🤖"}
            </span>
            <h5>{"ISO 42001 AIMS"}</h5>
            <p>
              {"AI + personal data governance — comprehensive privacy posture"}
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-center p-3 border rounded-4 h-100">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#0b5e7e" }}
            >
              {"♻️"}
            </span>
            <h5>{"ISO 22301 BCM"}</h5>
            <p>
              {
                "Data resilience and recovery — personal data protection in incidents"
              }
            </p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-center p-3 border rounded-4 h-100">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#0b5e7e" }}
            >
              {"🌐"}
            </span>
            <h5>{"APEC CBPR/PRP"}</h5>
            <p>{"Cross-border data transfer certification pathway"}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="text-center p-3 border rounded-4 h-100">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#0b5e7e" }}
            >
              {"📋"}
            </span>
            <h5>{"PDPA Compliance"}</h5>
            <p>{"Mandatory data protection law · DPO registration support"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeoKeywordsSection() {
  return (
    <div className="seo-keywords">
      <div className="seo-label">{"🔍 Related searches & keywords"}</div>
      <div className="keywords-list">
        <span>{"DPTM Singapore 2026"}</span>
        <span>{"SS 714:2025"}</span>
        <span>{"data protection trustmark"}</span>
        <span>{"PDPA certification SG"}</span>
        <span>{"best DPTM consultant SG"}</span>
        <span>{"affordable DPTM"}</span>
        <span>{"budget PDPA consultant"}</span>
        <span>{"top data protection firm"}</span>
        <span>{"EDG grant DPTM"}</span>
        <span>{"MASA grant data protection"}</span>
        <span>{"SkillsFuture PDPA"}</span>
        <span>{"ESG grant DPTM"}</span>
        <span>{"新加坡数据保护信任标志"}</span>
        <span>{"DPTM认证新加坡"}</span>
        <span>{"SS 714 2025"}</span>
        <span>{"PDPA合规顾问"}</span>
        <span>{"个人数据保护"}</span>
      </div>
    </div>
  );
}

function SectionSpaceSection6() {
  return (
    <section className="section-space faq-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>{"Frequently asked questions — DPTM SS 714:2025"}</h2>
        </div>
        <div className="accordion" id="dptmFaq">
          <AccordionItem
            title={<>{"What changed when DPTM became SS 714:2025?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "In 2025, the DPTM was incorporated into Singapore Standards as SS 714:2025, elevating its national recognition. The SAC launched a new accreditation programme from 7 July 2025, ensuring certification bodies meet ISO/IEC 17021-1 standards. The certification experience was streamlined — organisations now work with one certification body throughout their journey. Annual surveillance audits were formalised as a requirement. Organisations previously certified under the non-SS DPTM should contact ICFC to understand the transition requirements."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Is DPTM mandatory? Does my organisation need it?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "DPTM is voluntary — it is not mandated by PDPA. However: government procurement panels increasingly require DPTM as a vendor qualification criterion; enterprise clients in banking, healthcare, and technology sectors require DPTM evidence; certification may serve as a mitigating factor under PDPC's Active Enforcement Framework; and Singapore's position as a global data hub means international partners increasingly ask for recognised credentials. ICFC recommends a free assessment to determine the commercial and risk management case for DPTM in your context."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "How much does DPTM consultation cost? Is EDG grant available?"
                }
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "Typical ICFC consultation fees for a Singapore SME range from S$8,000–S$25,000 from gap analysis through pre-certification readiness. Certification body audit fees are separate, typically S$3,000–S$8,000 for Stage 1 and Stage 2 combined. The EDG/MASA grant covers up to 50% of qualifying consultation fees for eligible Singapore SMEs — significantly reducing the net cost. For integrated DPTM + ISO 27701 projects, the combined cost is 30–40% less than two separate projects, with the same EDG co-funding available. Contact ICFC for a project-specific estimate."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Should we pursue DPTM or ISO 27701 — or both?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "Both serve different but complementary purposes. DPTM is Singapore's national mark — recognised by PDPC, government procurement, and Singapore-focused enterprise clients. ISO 27701 is internationally recognised — accepted by GDPR-regulated entities, Asian privacy regulators, and global enterprise procurement. ICFC's strong recommendation for organisations with international data flows or multinational clients is to pursue both through an integrated implementation — sharing one data inventory, one policy framework, and qualifying for one EDG grant application. The total cost of both together is 30–40% less than pursuing them separately."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "What is the DPO registration deadline and how does DPTM help?"
                }
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "As of 1 June 2025, DPO registration with PDPC is a mandatory legal requirement for all organisations in Singapore. SS 714:2025 DPTM certification requires DPO appointment documentation, defined responsibilities, and operational effectiveness as a core governance requirement (Clause 6). Achieving DPTM ensures your DPO framework meets PDPC expectations and provides documented evidence of responsible data protection governance — which can potentially serve as a mitigating factor under PDPC's Active Enforcement Framework. ICFC includes DPO role design and registration support within all DPTM consulting packages."
            }
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}

function ContainerSection7() {
  return (
    <div className="container section-space-bottom">
      <div
        className="text-center p-5 rounded-4"
        style={{ background: "#0a3142" }}
      >
        <h3 className="text-white">
          {"Start your DPTM SS 714:2025 journey today"}
        </h3>
        <p className="text-white-50">
          {
            "Free 30-minute data protection assessment. Honest gap analysis against SS 714:2025. EDG grant eligibility check. No obligation."
          }
        </p>
        <div className="mt-4">
          <SiteLink className="rs-btn has-bg-white" href="/contact-us.html">
            {"Book free DPTM assessment →"}
          </SiteLink>
          <SiteLink
            className="rs-btn is-transparent text-white ms-3"
            href="/contact-us.html"
          >
            {"Check grant eligibility →"}
          </SiteLink>
          <SiteLink
            className="rs-btn is-transparent text-white ms-3"
            href="/contact-us.html"
          >
            {"Get free quote →"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
