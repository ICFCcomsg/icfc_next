import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsfivecyberPageContent() {
  return (
    <SitePageTemplate
      route="services-detailsfivecyber.html"
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
        "/styles/pages/services-detailsfivecyber.css",
      ]}
    >
      <main>
        <BannerAreaSection />
        <ContainerSection />
        <ContainerSection2 />
        <SectionSpaceSection />
        <SectionSpaceSection2 />
        <ContainerSection3 />
        <ContainerSection4 />
        <SectionSpaceSection3 />
        <FaqModernSection />
        <ContainerSection5 />
        <ContainerSection6 />
        <ContainerSection7 />
        <SeoKeywordsSection />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section
      className="rs-banner-area rs-banner-one"
      style={{ background: "#0a3b33" }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "70vh" }}>
          <div className="col-xl-8">
            <div className="rs-banner-wrapper">
              <span
                className="rs-banner-subtitle  fadeInUp"
                style={{ color: "#6bc2b0" }}
              >
                {
                  "CSA Cyber Essentials Mark · Singapore Cybersecurity Framework"
                }
              </span>
              <h1 className="rs-banner-title  fadeInUp">
                {"Cyber Essentials Mark —"}
                <br />
                {"certified, compliant, and grant-supported"}
              </h1>
              <p className="rs-banner-desc">
                {
                  "Mandated for HIMS vendors, ICT vendors, HIA entities. ESG/EDG grant up to 50%. Audit, consultation & training. ICFC since 2014."
                }
              </p>
              <div className="rs-banner-btn">
                <SiteLink
                  className="rs-btn has-icon has-bg-white hover-primary"
                  href="/contact-us.html"
                >
                  {"Book free assessment →"}
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
      <div className="ce-stats-grid">
        <div className="ce-stat-card">
          <div className="ce-stat-number">{"11+"}</div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="ce-stat-card">
          <div className="ce-stat-number">{"25+"}</div>
          <div>{"Industries served"}</div>
        </div>
        <div className="ce-stat-card">
          <div className="ce-stat-number">{"3"}</div>
          <div>{"Service pillars"}</div>
        </div>
        <div className="ce-stat-card">
          <div className="ce-stat-number">{"50%"}</div>
          <div>{"Max grant co-fund"}</div>
        </div>
        <div className="ce-stat-card">
          <div className="ce-stat-number">{"100%"}</div>
          <div>{"CSA-aligned"}</div>
        </div>
        <div className="ce-stat-card">
          <div className="ce-stat-number">{"5★"}</div>
          <div>{"Client rated"}</div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection2() {
  return (
    <div className="container">
      <div
        className="alert alert-warning border-0 rounded-4 p-4"
        style={{ background: "#fff3e0" }}
      >
        <h4 className="text-dark">
          {
            "🛡️ Why Singapore organisations must certify now — 2026 regulatory pressure is intensifying"
          }
        </h4>
        <div className="row mt-3">
          <div className="col-md-6">
            <strong>{"MOH HIMS vendors & HIA entities:"}</strong>
            {
              " Health Information Act mandates baseline cybersecurity — Cyber Essentials is accepted pathway."
            }
          </div>
          <div className="col-md-6">
            <strong>{"IMDA Telecom & ICT vendors:"}</strong>
            {" Technical specifications require demonstrable cyber hygiene."}
          </div>
          <div className="col-md-6 mt-2">
            <strong>{"EMA Energy & utilities CII:"}</strong>
            {
              " EMA Cyber Security Code requires Cyber Essentials as minimum baseline."
            }
          </div>
          <div className="col-md-6 mt-2">
            <strong>{"CSA Cyber Trust Mark:"}</strong>
            {
              " Cyber Essentials is mandatory foundational level for all applicants."
            }
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
          <span className="section-subtitle">
            {"Singapore's national baseline cybersecurity certification"}
          </span>
          <h2>{"What is the CSA Cyber Essentials Mark?"}</h2>
          <p>
            {
              "5 foundational domains — mandatory for HIMS vendors, HIA entities & ICT vendors"
            }
          </p>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="domain-card">
              <div className="fs-2 mb-2">{"🔒"}</div>
              <h4>{"Asset Management (AM)"}</h4>
              <p>
                {
                  "Inventory and classification of hardware, software, and data assets. Know what you have before you protect it."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="domain-card">
              <div className="fs-2 mb-2">{"🔐"}</div>
              <h4>{"Secure Configuration (SC)"}</h4>
              <p>
                {
                  "Hardening of devices, systems, and services. Removing default credentials, disabling unnecessary services."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="domain-card">
              <div className="fs-2 mb-2">{"🌐"}</div>
              <h4>{"Software Security (SS)"}</h4>
              <p>
                {
                  "Patch management, vulnerability remediation, and secure software deployment across the organisation."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="domain-card">
              <div className="fs-2 mb-2">{"🛡️"}</div>
              <h4>{"Access Control (AC)"}</h4>
              <p>
                {
                  "Principle of least privilege, multi-factor authentication (MFA), and privileged account management."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="domain-card">
              <div className="fs-2 mb-2">{"📡"}</div>
              <h4>{"Malware Protection (MP)"}</h4>
              <p>
                {
                  "Anti-malware deployment, endpoint detection, and protection of email and web gateways from threats."
                }
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="domain-card bg-light">
              <div className="fs-2 mb-2">{"🏥"}</div>
              <h5>{"HIMS Vendor & HIA Entity requirement"}</h5>
              <p>
                {
                  "The Ministry of Health (MOH) and Health Sciences Authority (HSA) have designated CSA Cyber Essentials as accepted baseline for HIMS vendors and HIA entities. Non-certified vendors risk disqualification from government healthcare procurement panels."
                }
              </p>
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
        <div className="section-title-wrapper text-center">
          <span className="section-subtitle">{"Service pillars"}</span>
          <h2>{"Audit · Consulting · Training"}</h2>
          <p>{"5 CSA domains · HIMS/HIA specialist · ESG/EDG grant managed"}</p>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="pillar-card">
              <span style={{ fontSize: "42px" }}>{"🔍"}</span>
              <h4 className="mt-3">{"Audits"}</h4>
              <p>
                {
                  "Baseline gap assessment · Network & infrastructure audit · HIMS/HIA compliance audit · ICT vendor audit · Pre-cert readiness."
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
              <span style={{ fontSize: "42px" }}>{"🏗️"}</span>
              <h4 className="mt-3">{"Consulting"}</h4>
              <p>
                {
                  "Full certification · HIMS vendor/HIA support · Cyber Trust Mark upgrade · Policy suite · ISO 27001 integration · Annual renewal."
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
              <h4 className="mt-3">{"Training"}</h4>
              <p>
                {
                  "Staff awareness (English/中文) · Technical workshop · Leadership governance · Industry-specific programmes."
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

function ContainerSection3() {
  return (
    <div className="container section-space pt-0">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-white border-0 pt-4">
          <h4>
            {"Cyber Essentials vs Cyber Trust Mark — which is right for you?"}
          </h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered comparison-table">
              <thead>
                <tr>
                  <th>{"Criteria"}</th>
                  <th>{"CSA Cyber Essentials Mark"}</th>
                  <th>{"CSA Cyber Trust Mark"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{"Target organisations"}</td>
                  <td>{"SMEs, HIMS vendors, ICT vendors, HIA entities"}</td>
                  <td>
                    {
                      "Large enterprises, CII operators, complex IT/OT environments"
                    }
                  </td>
                </tr>
                <tr>
                  <td>{"Assessment method"}</td>
                  <td>
                    {
                      "Self-Assessment Questionnaire (SAQ) with CSA-approved assessor review"
                    }
                  </td>
                  <td>
                    {
                      "Independent third-party assessment across 5 Pillars, 200+ controls"
                    }
                  </td>
                </tr>
                <tr>
                  <td>{"Coverage domains"}</td>
                  <td>{"5 domains: AM, SC, SS, AC, MP"}</td>
                  <td>
                    {"5 Pillars: Asset, Govern, Identify, Protect, Respond"}
                  </td>
                </tr>
                <tr>
                  <td>{"Mandatory for HIMS vendors"}</td>
                  <td>{"✓ Required by MOH"}</td>
                  <td>{"Optional — advanced pathway"}</td>
                </tr>
                <tr>
                  <td>{"Mandatory for HIA entities"}</td>
                  <td>{"✓ Required under HIA framework"}</td>
                  <td>{"Optional — advanced pathway"}</td>
                </tr>
                <tr>
                  <td>{"ESG/EDG grant eligible"}</td>
                  <td>{"✓ Yes — up to 50%"}</td>
                  <td>{"✓ Yes — up to 50%"}</td>
                </tr>
                <tr>
                  <td>{"Typical timeline"}</td>
                  <td>{"4–8 weeks"}</td>
                  <td>{"3–6 months"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            <strong>{"ICFC recommendation:"}</strong>
            {
              " Most Singapore SMEs, HIMS vendors, ICT vendors, and HIA entities should start with Cyber Essentials. CII operators and large enterprises targeting CTM directly — ICFC's integrated programme ensures Cyber Essentials work never wasted."
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
                "50% ESG / EDG grant co-funding — up to 50% of Cyber Essentials consultation costs"
              }
            </h3>
            <p>
              {
                "Enterprise Singapore's EDG and PSG cover qualifying cybersecurity consultation fees for eligible SMEs. ICFC manages your grant application before project commencement. Integrated engagements maximise total co-funding. Transparent fixed pricing."
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

function SectionSpaceSection3() {
  return (
    <section className="section-space theme-secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"Chief Financial Officer"}</h5>
                  <p className="text-muted">
                    {"Regional Private Clinic Group · Healthcare"}
                  </p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  '"ICFC guided our clinic group through full Cyber Essentials certification including HIA compliance in under 6 weeks. Their HIMS vendor expertise is unmatched, and they managed our ESG grant seamlessly."'
                }
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"Director of Technology"}</h5>
                  <p className="text-muted">
                    {"ICT Solutions Vendor · Government Technology"}
                  </p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  '"Cyber Essentials was non-negotiable for our procurement qualification. ICFC delivered in 5 weeks, helped us claim 50% via EDG grant, and upskilled our IT team. Truly budget-friendly."'
                }
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"Head of Compliance"}</h5>
                  <p className="text-muted">
                    {"Colocation Data Centre Operator · Data Centres"}
                  </p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  "\"We needed both Cyber Essentials and ISO 27001 for our data centre customers. ICFC's integrated programme achieved both certifications in a single engagement — saving us time, cost, and admin burden. The team's bilingual capability was a huge bonus for our Chinese-speaking leadership.\""
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqModernSection() {
  return (
    <div className="faq-modern">
      <div className="container">
        <div className="faq-title">
          <h2>{"FAQs — CSA Cyber Essentials Mark"}</h2>
          <p>
            {
              "Everything Singapore organisations need to know about Cyber Essentials certification, grants, and ICFC's services"
            }
          </p>
        </div>
        <div className="accordion" id="ceFaq">
          <AccordionItem
            title={
              <>
                {
                  "What is the CSA Cyber Essentials Mark and is it mandatory in Singapore?"
                }
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "The CSA Cyber Essentials Mark is Singapore's nationally recognised baseline cybersecurity certification, administered by the Cyber Security Agency of Singapore (CSA). It certifies that an organisation has implemented foundational controls across five cybersecurity domains. It is mandatory for HIMS vendors under MOH's HIMS vendor qualification framework and for HIA entities under the Health Information Act. It is increasingly required by government procurement, enterprise RFPs, and is mandatory for organisations applying for the Cyber Trust Mark."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "Is Cyber Essentials mandatory for HIMS vendors and HIA entities?"
                }
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "Yes. The Ministry of Health (MOH) has designated the CSA Cyber Essentials Mark as the required baseline cybersecurity certification for Health Information Management System (HIMS) vendors seeking inclusion in MOH procurement panels. Similarly, entities subject to the Health Information Act (HIA), including healthcare providers handling National Electronic Health Record (NEHR) data, are required to demonstrate Cyber Essentials-level cybersecurity controls. ICFC's HIMS/HIA consultation track addresses both requirements in a single engagement."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "Can I get an ESG grant or EDG grant for CSA Cyber Essentials certification?"
                }
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "Yes. Enterprise Singapore's Enterprise Development Grant (EDG) covers up to 50% of qualifying cybersecurity consultancy fees for eligible Singapore-registered SMEs. The Productivity Solutions Grant (PSG) also covers some pre-approved cybersecurity solutions. ICFC manages your grant application before project commencement, ensuring grant eligibility is confirmed and costs are maximised. Integrated Cyber Essentials + ISO 27001 engagements can combine grant claims for greater co-funding. Contact ICFC for a free grant eligibility check."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"How long does CSA Cyber Essentials certification take?"}</>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "With ICFC's support, most organisations achieve CSA Cyber Essentials certification within 4 to 8 weeks from project commencement. The timeline depends on your organisation's starting posture, size, and IT complexity. Organisations with significant gaps in documentation or technical controls may take up to 10–12 weeks. ICFC provides a clear project timeline and milestone schedule at project inception. For HIMS vendors with urgent MOH procurement deadlines, ICFC offers an accelerated track."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "What is the difference between CSA Cyber Essentials and ISO 27001?"
                }
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "The CSA Cyber Essentials Mark is a Singapore-specific baseline certification covering five foundational cybersecurity control domains, assessed via a self-assessment questionnaire. ISO/IEC 27001:2022 is an internationally recognised Information Security Management System (ISMS) standard that addresses a much broader set of 93 controls across 4 themes and requires third-party certification body audit. Cyber Essentials is faster, lighter, and lower cost — making it the ideal starting point for SMEs. ICFC's integrated programme achieves both in a single engagement."
            }
          </AccordionItem>
        </div>
      </div>
    </div>
  );
}

function ContainerSection5() {
  return (
    <div className="container">
      <div
        className="bg-dark text-white p-5 rounded-4 text-center"
        style={{ background: "linear-gradient(135deg, #1a2a3a, #0f1a24)" }}
      >
        <h3>{"中文服务 · CSA 网络安全基本标志认证 · ICFC新加坡"}</h3>
        <p className="mt-3">
          {
            "ICFC为新加坡各类企业提供全面的CSA网络安全基本标志（Cyber Essentials Mark）认证服务，涵盖医疗信息管理系统（HIMS）供应商、ICT供应商及健康信息法（HIA）实体的合规需求。我们的服务覆盖三大核心支柱：审核（Audit）、咨询（Consulting）、培训（Training），从差距评估到认证取得，全程管理，一站式服务。提供中英双语服务，帮助企业在符合IMDA、EMA、HSA、MOH及HIA监管框架的同时，申请ESG补助金及企业发展补助金（EDG），最高获得50%费用补贴。"
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
        <div className="col-md-3">
          <div className="text-center p-3 border rounded-4">
            <span className="badge bg-danger mb-2">{"🔐"}</span>
            <h5>{"ISO 27001:2022"}</h5>
            <p>
              {
                "International ISMS standard. Integrates seamlessly with Cyber Essentials."
              }
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center p-3 border rounded-4">
            <span className="badge bg-danger mb-2">{"🏅"}</span>
            <h5>{"Cyber Trust Mark"}</h5>
            <p>
              {
                "Advanced tier — 5 Pillars, 200+ controls. Mandatory pathway for CII operators."
              }
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center p-3 border rounded-4">
            <span className="badge bg-danger mb-2">{"🤖"}</span>
            <h5>{"ISO 42001 AIMS"}</h5>
            <p>
              {
                "World's first AI governance standard. MAS AI guidelines aligned."
              }
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="text-center p-3 border rounded-4">
            <span className="badge bg-danger mb-2">{"📋"}</span>
            <h5>{"PDPA Compliance"}</h5>
            <p>
              {
                "Singapore data protection. Integrates with Cyber Essentials data governance."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection7() {
  return (
    <div className="container section-space-bottom">
      <div
        className="text-center p-5 rounded-4"
        style={{ background: "#0a3b33" }}
      >
        <h3 className="text-white">
          {"Start your CSA Cyber Essentials journey today"}
        </h3>
        <p className="text-white-50">
          {
            "Free 30-minute cybersecurity readiness assessment. Honest gap analysis against CSA Cyber Essentials. ESG/EDG grant eligibility check included. HIMS vendor, HIA entity, and ICT vendor specialists. No obligation."
          }
        </p>
        <div className="mt-4">
          <SiteLink className="rs-btn has-bg-white" href="/contact-us.html">
            {"Book free assessment →"}
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

function SeoKeywordsSection() {
  return (
    <div className="seo-keywords">
      <div className="seo-label">{"🔍 Related searches & keywords"}</div>
      <div className="keywords-list">
        <span>{"CSA Cyber Essentials Mark Singapore"}</span>
        <span>{"cybersecurity certification Singapore 2026"}</span>
        <span>{"HIMS vendor certification MOH"}</span>
        <span>{"HIA entity cybersecurity Singapore"}</span>
        <span>{"ICT vendor Cyber Essentials"}</span>
        <span>{"ESG grant cybersecurity Singapore"}</span>
        <span>{"EDG grant Cyber Essentials"}</span>
        <span>{"best cybersecurity consultant Singapore"}</span>
        <span>{"budget-friendly Cyber Essentials"}</span>
        <span>{"CII cybersecurity Singapore"}</span>
        <span>{"Cyber Trust Mark Singapore"}</span>
        <span>{"CSA Cyber Essentials audit"}</span>
        <span>{"CSA certification healthcare Singapore"}</span>
        <span>{"fintech cybersecurity MAS Singapore"}</span>
        <span>{"data centre cybersecurity certification"}</span>
        <span>{"IMDA ICT vendor compliance"}</span>
        <span>{"construction cybersecurity Singapore"}</span>
        <span>{"logistics cyber essentials"}</span>
        <span>{"manufacturing OT cybersecurity SG"}</span>
        <span>{"新加坡网络安全认证"}</span>
        <span>{"CSA网络安全基本标志"}</span>
        <span>{"新加坡最佳网络安全顾问"}</span>
      </div>
    </div>
  );
}
