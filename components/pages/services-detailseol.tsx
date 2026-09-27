import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailseolPageContent() {
  return (
    <SitePageTemplate
      route="services-detailseol.html"
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
        "/styles/pages/services-detailseol.css",
      ]}
    >
      <main>
        <BannerAreaSection />
        <ContainerSection />
        <SectionSpaceSection />
        <SectionSpaceSection2 />
        <SectionSpaceSection3 />
        <SectionSpaceSection4 />
        <ContainerSection2 />
        <SectionSpaceSection5 />
        <SectionSpaceSection6 />
        <ContainerSection3 />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section
      className="rs-banner-area rs-banner-one"
      style={{ background: "#0a1924" }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "70vh" }}>
          <div className="col-xl-8">
            <div className="rs-banner-wrapper">
              <span className="rs-banner-subtitle" style={{ color: "#AB052D" }}>
                {"Singapore Standard SS 587 : 2022"}
              </span>
              <h1 className="rs-banner-title">
                {"End-of-Life ICT Management "}
                <br />
                {"Audits, Consulting & Training"}
              </h1>
              <p className="rs-banner-desc">
                {
                  "Responsible disposal, data security & ESG compliance for 25+ Singapore industries — Fintech, Data Centres, CII, Telco, Pharma, Marine, Logistics."
                }
              </p>
              <div className="rs-banner-btn">
                <SiteLink
                  className="rs-btn has-icon has-bg-white hover-primary"
                  href="/contact-us.html"
                >
                  {"Free SS 587 Gap Assessment ↗"}
                  <span className="icon-box">
                    <svg width="16" height="16" viewBox="0 0 16 16">
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
                  {"ESG grant eligibility ↗"}
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
      <div className="ss587-stats-grid">
        <div className="ss587-stat-card">
          <div className="ss587-stat-number">{"6"}</div>
          <div>{"Core process phases"}</div>
        </div>
        <div className="ss587-stat-card">
          <div className="ss587-stat-number">{"25+"}</div>
          <div>{"Industries served"}</div>
        </div>
        <div className="ss587-stat-card">
          <div className="ss587-stat-number">{"98%"}</div>
          <div>{"First-attempt cert"}</div>
        </div>
        <div className="ss587-stat-card">
          <div className="ss587-stat-number">{"11+"}</div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="ss587-stat-card">
          <div className="ss587-stat-number">{"500+"}</div>
          <div>{"Organisations guided"}</div>
        </div>
        <div className="ss587-stat-card">
          <div className="ss587-stat-number">{"70%"}</div>
          <div>{"Avg ESG grant"}</div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrapper">
              <span className="section-subtitle">{"Singapore standard"}</span>
              <h2>{"What is SS 587"}</h2>
              <p>
                {
                  "Singapore's national standard for end-of-life ICT equipment — secure, traceable, environmentally responsible retirement of computers, servers, storage, networking devices."
                }
              </p>
            </div>
            <div className="row g-4 mt-2">
              <div className="col-md-4">
                <div className="pillar-card">
                  <div className="fw-bold text-danger">{"01"}</div>
                  <h5 className="mt-2">{"ICT asset inventory"}</h5>
                  <p>
                    {
                      "Catalogue assets with serial numbers, data classification, retirement trigger."
                    }
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pillar-card">
                  <div className="fw-bold text-danger">{"02"}</div>
                  <h5 className="mt-2">{"Data sanitisation"}</h5>
                  <p>
                    {
                      "NIST 800-88, DoD 5220.22-M, PDPA obligations certified wiping/destruction."
                    }
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pillar-card">
                  <div className="fw-bold text-danger">{"03"}</div>
                  <h5 className="mt-2">{"Chain-of-custody"}</h5>
                  <p>
                    {
                      "End-to-end documentation collection → transport → processing."
                    }
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pillar-card">
                  <div className="fw-bold text-danger">{"04"}</div>
                  <h5 className="mt-2">{"ITAD vendor vetting"}</h5>
                  <p>
                    {
                      "Due diligence & audit downstream recyclers under SS 587 criteria."
                    }
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pillar-card">
                  <div className="fw-bold text-danger">{"05"}</div>
                  <h5 className="mt-2">{"Environmental compliance"}</h5>
                  <p>
                    {
                      "NEA Resource Sustainability Act, Basel Convention, Green Plan 2030."
                    }
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pillar-card">
                  <div className="fw-bold text-danger">{"06"}</div>
                  <h5 className="mt-2">{"Reporting & certification"}</h5>
                  <p>
                    {
                      "Management review, audit prep, third-party certification body engagement."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection2() {
  return (
    <section className="section-space theme-secondary pt-0">
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">{"End-to-end support"}</span>
          <h2>{"Our three service pillars — Audit, Consulting, Training"}</h2>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="pillar-card">
              <span style={{ fontSize: "42px" }}>{"🔍"}</span>
              <h4 className="mt-3">{"SS 587 Audit services"}</h4>
              <p>
                {
                  "Gap assessments, pre-certification review, ITAD vendor audits, internal audits, surveillance readiness, data destruction audit."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="rs-btn has-text mt-3"
              >
                {"Explore audit ↗"}
              </SiteLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pillar-card">
              <span style={{ fontSize: "42px" }}>{"📝"}</span>
              <h4 className="mt-3">{"SS 587 Consulting"}</h4>
              <p>
                {
                  "Policy & procedure design, ITAD procurement frameworks, data sanitisation standards, NEA RSA alignment, PDPA integration, ESG grant advisory."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="rs-btn has-text mt-3"
              >
                {"Explore consulting ↗"}
              </SiteLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pillar-card">
              <span style={{ fontSize: "42px" }}>{"🏫"}</span>
              <h4 className="mt-3">{"SS 587 Training"}</h4>
              <p>
                {
                  "Foundation awareness, lead implementer, internal auditor, data sanitisation officer, ITAD manager programme, WSQ-aligned modules."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="rs-btn has-text mt-3"
              >
                {"Explore training ↗"}
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
          <span className="section-subtitle">{"Regulatory alignment"}</span>
          <h2>{"SS 587 within Singapore legal framework"}</h2>
        </div>
        <div className="regulatory-grid">
          <div className="reg-item">
            <strong>{"NEA — Resource Sustainability Act"}</strong>
            <br />
            {"E-waste producer responsibility obligations."}
          </div>
          <div className="reg-item">
            <strong>{"IMDA — ICT governance"}</strong>
            <br />
            {"Government-linked ICT asset retirement."}
          </div>
          <div className="reg-item">
            <strong>{"CSA — Cybersecurity Act"}</strong>
            <br />
            {"CII secure decommissioning."}
          </div>
          <div className="reg-item">
            <strong>{"PDPA — Data Protection"}</strong>
            <br />
            {"Certified data destruction."}
          </div>
          <div className="reg-item">
            <strong>{"EMA — Energy Market Authority"}</strong>
            <br />
            {"Grid/SCADA ICT decommission."}
          </div>
          <div className="reg-item">
            <strong>{"MOM — WSH Act"}</strong>
            <br />
            {"Safe handling of hazardous components."}
          </div>
          <div className="reg-item">
            <strong>{"SCDF — Fire & hazmat"}</strong>
            <br />
            {"Lithium battery / hazmat storage."}
          </div>
          <div className="reg-item">
            <strong>{"GovTech IM8"}</strong>
            <br />
            {"Public sector ICT retirement."}
          </div>
          <div className="reg-item">
            <strong>{"ESG — Green Plan 2030"}</strong>
            <br />
            {"Circular economy & e-waste reduction."}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection4() {
  return (
    <section
      className="section-space theme-secondary"
      style={{ backgroundColor: "gray" }}
    >
      <div className="container">
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">{"Sector expertise"}</span>
          <h2>{"25+ industries across Singapore"}</h2>
        </div>
        <div className="text-center mt-4">
          <span className="industry-badge">{"Fintech & Payments"}</span>
          <span className="industry-badge">{"Telecommunications"}</span>
          <span className="industry-badge">{"Data Centres"}</span>
          <span className="industry-badge">{"CII sectors"}</span>
          <span className="industry-badge">{"Construction"}</span>
          <span className="industry-badge">{"Marine & Offshore"}</span>
          <span className="industry-badge">{"Logistics"}</span>
          <span className="industry-badge">{"Pharmaceutical"}</span>
          <span className="industry-badge">{"Manufacturing"}</span>
          <span className="industry-badge">{"Healthcare"}</span>
          <span className="industry-badge">{"Banking & Finance"}</span>
          <span className="industry-badge">{"Energy & Utilities"}</span>
          <span className="industry-badge">{"Aviation"}</span>
          <span className="industry-badge">{"Retail"}</span>
          <span className="industry-badge">{"Government"}</span>
          <span className="industry-badge">{"Insurance"}</span>
          <span className="industry-badge">{"Hospitality"}</span>
          <span className="industry-badge">{"Cybersecurity"}</span>
          <span className="industry-badge">{"Education"}</span>
          <span className="industry-badge">{"Real Estate"}</span>
          <span className="industry-badge">{"Waste Mgmt"}</span>
          <span className="industry-badge">{"Food & Beverage"}</span>
          <span className="industry-badge">{"Professional Services"}</span>
          <span className="industry-badge">{"Media & Entertainment"}</span>
          <span className="industry-badge">{"Transport & Mobility"}</span>
        </div>
      </div>
    </section>
  );
}

function ContainerSection2() {
  return (
    <div id="grant" className="container section-space">
      <div className="grant-banner">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="text-white">
              {"Fund your SS 587 compliance — up to 70% co-funding"}
            </h3>
            <p className="opacity-75">
              {
                "Enterprise Singapore MASA grant, SkillsFuture WSQ training grants, NEA producer responsibility integration, ESG Business Improvement Fund (BIF). ICFC manages grant application alongside your project."
              }
            </p>
            <SiteLink className="rs-btn has-bg-white" href="/contact-us.html">
              {"Check MASA grant eligibility ↗"}
            </SiteLink>
          </div>
          <div className="col-lg-4 text-center">
            <SiteImage
              src="/assets/images/favicon.webp"
              alt="grant"
              style={{ width: "80px", opacity: "0.8" }}
            />
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
        <div className="row">
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"Head of IT governance"}</h5>
                  <p className="text-muted">
                    {"Licensed financial institution"}
                  </p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  "“ICFC designed our SS 587 programme to satisfy PDPA data destruction and MAS TRM decommissioning. ITAD vendor audit gave us documented assurance.”"
                }
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"Infrastructure director"}</h5>
                  <p className="text-muted">{"Data centre operator"}</p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  "“Retired thousands of servers, ICFC established chain-of-custody & ITAD framework under 3 months + MASA grant recovered significant costs.”"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection6() {
  return (
    <section className="section-space faq-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>{"Frequently asked questions — SS 587"}</h2>
        </div>
        <div className="accordion" id="ss587faq">
          <AccordionItem
            title={<>{"What is SS 587 and who must comply?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "SS 587 is Singapore's national standard for end-of-life ICT management. It applies to any organisation retiring ICT assets, ITAD service providers, recyclers, especially CII operators, MAS-regulated entities, NEA producer responsibility obligations. Provides certified data destruction and ESG reporting evidence."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"How long does SS 587 certification take?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "With ICFC, typical programme takes 3–5 months from kickoff to certification-body audit readiness. 98% first-attempt certification rate minimises rework."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Can ICFC help with MASA grant?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "Yes, ICFC assesses eligibility, manages documentation, milestone claims, coordinates with certification body. Qualifying SMEs can recover up to 70% of eligible consultation & certification costs."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Do we need SS 587 if we already have ISO 14001?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "ISO 14001 covers environmental management broadly, but SS 587 addresses specific ICT asset retirement processes, chain-of-custody, data sanitisation, ITAD vendor governance, and PDPA compliance. Many organisations integrate SS 587 into their existing environmental or security management systems."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {"How does SS 587 relate to PDPA data destruction obligations?"}
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "The Personal Data Protection Act requires organisations to protect personal data at disposal. SS 587 provides certified data sanitisation (NIST 800-88) and chain-of-custody documentation fulfilling PDPA's disposal obligations and audit trail requirements."
            }
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}

function ContainerSection3() {
  return (
    <div className="container section-space-bottom">
      <div
        className="text-center p-5 rounded-4"
        style={{ background: "#1e2a36" }}
      >
        <h3 className="text-white">
          {"Start your SS 587 compliance journey with ICFC"}
        </h3>
        <p className="text-white-50">
          {
            "Whether a handful of laptops or whole data centre — get a practical path to certification backed by 11+ years Singapore expertise."
          }
        </p>
        <div className="mt-4">
          <SiteLink className="rs-btn has-bg-white" href="/contact-us.html">
            {"Book a free consultation ↗"}
          </SiteLink>
          <SiteLink
            className="rs-btn is-transparent text-white ms-3"
            href="/contact-us.html"
          >
            {"Get a quote + grant check ↗"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
