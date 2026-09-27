import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsbcmsPageContent() {
  return (
    <SitePageTemplate
      route="services-detailsbcms.html"
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
        "/styles/pages/services-detailsbcms.css",
      ]}
    >
      <main>
        <BannerAreaSection />
        <ContainerSection />
        <ContainerSection2 />
        <SectionSpaceSection />
        <SectionSpaceSection2 />
        <SectionSpaceSection3 />
        <SectionSpaceSection4 />
        <ContainerSection3 />
        <SectionSpaceSection5 />
        <SectionSpaceSection6 />
        <SectionSpaceSection7 />
        <ContainerSection4 />
        <ContainerSection5 />
        <ContainerSection6 />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section
      className="rs-banner-area rs-banner-one"
      style={{ background: "#0a2e3b" }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "70vh" }}>
          <div className="col-xl-8">
            <div className="rs-banner-wrapper">
              <span
                className="rs-banner-subtitle  fadeInUp"
                style={{ color: "#6bc2e8" }}
              >
                {
                  "ISO 22301:2019 · Business Continuity Management System · Singapore"
                }
              </span>
              <h1 className="rs-banner-title  fadeInUp">
                {"Business continuity —"}
                <br />
                {"certified, resilient, and grant-funded"}
              </h1>
              <p className="rs-banner-desc">
                {
                  "ISO 22301 BCMS certification. BIA, gap analysis, implementation & training. EDG/MASA grant up to 50%. MAS TRM aligned. ICFC since 2014."
                }
              </p>
              <div className="rs-banner-btn">
                <SiteLink
                  className="rs-btn has-icon has-bg-white hover-primary"
                  href="/contact-us.html"
                >
                  {"Book free BCMS assessment →"}
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
                  {"Check grant eligibility →"}
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
      <div className="bcms-stats-grid">
        <div className="bcms-stat-card">
          <div className="bcms-stat-number">{"4–6"}</div>
          <div>{"Months typical BCMS timeline"}</div>
        </div>
        <div className="bcms-stat-card">
          <div className="bcms-stat-number">{"50%"}</div>
          <div>{"EDG grant co-fund"}</div>
        </div>
        <div className="bcms-stat-card">
          <div className="bcms-stat-number">{"98%"}</div>
          <div>{"First-attempt rate"}</div>
        </div>
        <div className="bcms-stat-card">
          <div className="bcms-stat-number">{"25+"}</div>
          <div>{"Industries served"}</div>
        </div>
        <div className="bcms-stat-card">
          <div className="bcms-stat-number">{"11+"}</div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="bcms-stat-card">
          <div className="bcms-stat-number">{"MAS"}</div>
          <div>{"TRM & BCM aligned"}</div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection2() {
  return (
    <div className="container">
      <div
        className="alert alert-info border-0 rounded-4 p-3"
        style={{ background: "#e8f4f8" }}
      >
        <strong>{"📋 2024 Climate Action Amendment to ISO 22301:2019."}</strong>
        {
          " An amendment was adopted in 2024 integrating climate change considerations. ICFC's BCMS implementation includes this amendment as standard — ensuring your BIA and risk assessment address climate-related disruption scenarios."
        }
      </div>
    </div>
  );
}

function SectionSpaceSection() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">{"BCMS services"}</span>
          <h2>{"Audit · Consultation · Training"}</h2>
          <p>{"BIA · ISO 22301 · MAS TRM · EDG grant managed"}</p>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="pillar-card">
              <span style={{ fontSize: "42px" }}>{"🔍"}</span>
              <h4 className="mt-3">{"BCMS Audit"}</h4>
              <p>
                {
                  "Gap analysis · Stage 1/Stage 2 · Pre-cert mock audit · Surveillance · Internal audit co-sourcing."
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
              <h4 className="mt-3">{"BCMS Consultation"}</h4>
              <p>
                {
                  "Full implementation · BIA facilitation · MAS TRM aligned · IMS integration · Crisis management · Post-cert retainer."
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
              <h4 className="mt-3">{"BCMS Training"}</h4>
              <p>
                {
                  "Lead auditor (CQI/IRCA) · Internal auditor · Implementation practitioner · Staff awareness · Tabletop exercises."
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

function SectionSpaceSection2() {
  return (
    <section className="section-space theme-secondary">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>{"The BCMS framework — six core components ICFC implements"}</h2>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="component-card">
              <h4>{"📊 BIA"}</h4>
              <h6>{"Business Impact Analysis"}</h6>
              <p>
                {
                  "Identify critical processes, quantify disruption impact, set RTO and RPO for every key activity."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="component-card">
              <h4>{"⚠️ RA"}</h4>
              <h6>{"Risk Assessment"}</h6>
              <p>
                {
                  "Identify threats and vulnerabilities — cyber, climate, supply chain, pandemic."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="component-card">
              <h4>{"🎯 BC Strat"}</h4>
              <h6>{"Continuity Strategies"}</h6>
              <p>
                {
                  "Design strategies for people, technology, facilities, data, supply chain covering all disruption scenarios."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="component-card">
              <h4>{"📄 BCP"}</h4>
              <h6>{"Business Continuity Plans"}</h6>
              <p>
                {
                  "Documented, tested response and recovery procedures — crisis comms, escalation paths, recovery actions."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="component-card">
              <h4>{"🏋️ Exercise"}</h4>
              <h6>{"Testing & Exercises"}</h6>
              <p>
                {
                  "Desktop exercises, simulations, and live drills — validating plans work before incidents occur."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="component-card">
              <h4>{"🔄 PDCA"}</h4>
              <h6>{"Continual Improvement"}</h6>
              <p>
                {
                  "Internal audit, management review, and ongoing BCMS refinement as threats evolve."
                }
              </p>
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
          <h2>{"What is ISO 22301 BCMS? Singapore's resilience standard"}</h2>
        </div>
        <p>
          {
            "ISO 22301:2019 is the internationally recognised standard for Business Continuity Management Systems. It provides a framework for organisations to prepare for, respond to, and recover from disruptive incidents — whether cyberattacks, pandemics, supply chain failures, or natural disasters. In Singapore's position as a global business hub, disruptions carry outsized impact. Several Singapore regulators now require or strongly recommend certified BCMS."
          }
        </p>
        <p>
          {
            "The 2024 Climate Action Amendment to ISO 22301:2019 integrates climate change considerations into BCMS requirements. ICFC includes this as standard in every implementation."
          }
        </p>
      </div>
    </section>
  );
}

function SectionSpaceSection4() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>{"Singapore's BCMS regulatory landscape"}</h2>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered reg-table">
            <thead>
              <tr>
                <th>{"Regulator / Framework"}</th>
                <th>{"Requirement"}</th>
                <th>{"Sectors"}</th>
                <th>{"ISO 22301 alignment"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"MAS TRM Guidelines"}</td>
                <td>{"Robust BCM capabilities; scenario testing"}</td>
                <td>{"Banks, insurers, FinTech"}</td>
                <td>{"✓ Direct alignment"}</td>
              </tr>
              <tr>
                <td>{"MAS Notice 655 / BCM Guidelines"}</td>
                <td>{"Documented BCP, RTO/RPO, annual testing"}</td>
                <td>{"All MAS-regulated FIs"}</td>
                <td>{"✓ Direct alignment"}</td>
              </tr>
              <tr>
                <td>{"CSA Cybersecurity Act"}</td>
                <td>{"CII operators must have BCPs for critical systems"}</td>
                <td>
                  {"Energy, water, transport, banking, telco, healthcare, govt"}
                </td>
                <td>{"✓ Strong alignment"}</td>
              </tr>
              <tr>
                <td>{"MOH guidelines"}</td>
                <td>
                  {"Business continuity for essential healthcare services"}
                </td>
                <td>{"Hospitals, clinics, pharma"}</td>
                <td>{"✓ Strong alignment"}</td>
              </tr>
              <tr>
                <td>{"BCA requirements"}</td>
                <td>{"Business continuity for major projects"}</td>
                <td>{"Critical infrastructure contractors"}</td>
                <td>{"✓ Framework aligned"}</td>
              </tr>
              <tr>
                <td>{"Government tender criteria"}</td>
                <td>{"ISO 22301 increasingly required or scored"}</td>
                <td>{"All government suppliers"}</td>
                <td>{"✓ Certification required"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ContainerSection3() {
  return (
    <div id="grant" className="container section-space">
      <div className="grant-banner">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="text-white">
              {
                "50% EDG / MASA grant co-funding — up to 50% of BCMS consultation costs"
              }
            </h3>
            <p>
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 22301 consultation fees for eligible SMEs. ICFC manages your application before project commencement. Integrated IMS engagements (ISO 22301 + ISO 27001) can stack grant funding across both standards."
              }
            </p>
            <SiteLink className="rs-btn has-bg-white" href="/contact-us.html">
              {"Check grant eligibility →"}
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

function SectionSpaceSection5() {
  return (
    <section className="section-space pt-0">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>
            {"ICFC's BCMS audit process — from first call to certificate"}
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
              <p>{"Gap analysis"}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"03"}
              </div>
              <p>{"Grant application"}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"04"}
              </div>
              <p>{"Pre-cert audit"}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"05"}
              </div>
              <p>{"CB coordination"}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="p-3">
              <div className="bg-light rounded-circle d-inline-flex p-3 mb-2">
                {"06"}
              </div>
              <p>{"Certificate"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection6() {
  return (
    <section className="section-space theme-secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"Chief Risk Officer"}</h5>
                  <p className="text-muted">{"Digital bank, Singapore"}</p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  "\"ICFC's BIA facilitation identified three single-point dependencies we hadn't recognised — including a critical vendor with no sub-contractor. Certification achieved on first attempt with MAS TRM fully addressed.\""
                }
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"IT Director"}</h5>
                  <p className="text-muted">{"Data centre operator"}</p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  '"Achieved ISO 22301 and ISO 27001 dual certification under ICFC\'s integrated IMS approach — saved over S$30,000 compared to separate engagements. EDG grant covered 50% of total cost."'
                }
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"General Manager"}</h5>
                  <p className="text-muted">{"Pharmaceutical manufacturer"}</p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  '"ICFC\'s tabletop exercise programme changed how our executive team thinks about business continuity. They ran a realistic cyber-incident scenario that exposed gaps in our crisis communication escalation path that no document review would have found."'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection7() {
  return (
    <section className="section-space faq-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>{"FAQs — ISO 22301 BCMS"}</h2>
        </div>
        <div className="accordion" id="bcmsFaq">
          <AccordionItem
            title={
              <>
                {
                  "How long does ISO 22301 BCMS certification take in Singapore?"
                }
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "The typical ISO 22301 certification timeline is 4–6 months from gap analysis to certificate. Organisations with existing ISO 9001 or ISO 27001 certification typically achieve faster timelines through integrated IMS approach as management system infrastructure is already in place."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"How much does ISO 22301 consultation cost in Singapore?"}</>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "Consultancy fees typically S$5,000–S$20,000 depending on scope. Certification audit fees S$3,000–S$8,000. EDG/MASA grant covers up to 50% of consultancy fees for eligible SMEs — net cost S$2,500–S$10,000. Integrated IMS reduces costs by 20–30%."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "Is ISO 22301 required for MAS-regulated financial institutions?"
                }
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "MAS does not mandate ISO 22301 by name — but MAS Notice 655, TRM Guidelines, and BCM Guidelines require documented BCM practices aligned with ISO 22301. Certification is widely adopted as most efficient way to demonstrate MAS BCM compliance."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"Can we integrate ISO 22301 with ISO 27001 or ISO 9001?"}</>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "Yes — ICFC strongly recommends integrated IMS. All three standards share Annex SL structure. Reuses existing policy infrastructure, risk assessment, internal audit programme — reducing total cost by 20–30% with a single EDG grant application."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"What is the 2024 Climate Action Amendment to ISO 22301?"}</>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "In 2024, ISO adopted a Climate Action Amendment integrating climate change considerations into BCMS requirements. This requires organisations to consider climate-related threats (flood, extreme heat) in BIA, risk assessment, and BC strategy design. ICFC includes this amendment as standard in every implementation."
            }
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}

function ContainerSection4() {
  return (
    <div className="container">
      <div
        className="bg-dark text-white p-5 rounded-4 text-center"
        style={{ background: "linear-gradient(135deg, #1a2a3a, #0f1a24)" }}
      >
        <h3>
          {
            "新加坡ISO 22301业务持续性管理体系（BCMS）认证 · ICFC Pte Ltd（2014年创立）"
          }
        </h3>
        <p className="mt-3">
          {
            "ICFC专注于新加坡ISO 22301:2019业务持续性管理体系认证，提供业务影响分析（BIA）、全面实施及培训服务，涵盖金融、医疗、物流、制造、建筑、航运等25大行业。与MAS TRM指南、MAS业务持续性管理指南完全一致。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务，欢迎免费咨询。"
          }
        </p>
        <p>
          <strong>{"关键词："}</strong>
          {
            "业务持续性管理 · ISO 22301新加坡 · BCMS认证 · 业务影响分析 · BIA · MAS TRM合规 · EDG补助金 · 最佳BCMS顾问 · 实惠ISO 22301认证"
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

function ContainerSection5() {
  return (
    <div className="container section-space">
      <h3 className="text-center mb-4">{"Related services"}</h3>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="text-center p-3 border rounded-4">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#1a4d7a" }}
            >
              {"🔒"}
            </span>
            <h5>{"ISO 27001"}</h5>
            <p>{"Annex SL integration — shared policy & audit cycle"}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center p-3 border rounded-4">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#1a4d7a" }}
            >
              {"✅"}
            </span>
            <h5>{"ISO 9001"}</h5>
            <p>{"IMS integration · government tender qualification"}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center p-3 border rounded-4">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#1a4d7a" }}
            >
              {"🤖"}
            </span>
            <h5>{"ISO 42001 AIMS"}</h5>
            <p>{"AI system disruption governance and continuity"}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center p-3 border rounded-4">
            <span
              className="badge bg-primary mb-2"
              style={{ background: "#1a4d7a" }}
            >
              {"🛡️"}
            </span>
            <h5>{"Cyber Trust Mark"}</h5>
            <p>{"CII operator mandatory · CSA + BCMS integration"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection6() {
  return (
    <div className="container section-space-bottom">
      <div
        className="text-center p-5 rounded-4"
        style={{ background: "#0a2e3b" }}
      >
        <h3 className="text-white">
          {"Start your BCMS certification journey today"}
        </h3>
        <p className="text-white-50">
          {
            "Free 30-minute assessment. Honest gap analysis of your BCP maturity against ISO 22301:2019. EDG grant eligibility check. MAS TRM alignment review. No obligation."
          }
        </p>
        <div className="mt-4">
          <SiteLink className="rs-btn has-bg-white" href="/contact-us.html">
            {"Book free BCMS assessment →"}
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
