import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsPageContent() {
  return (
    <SitePageTemplate
      route="services-details.html"
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
        "/styles/pages/services-details.css",
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
      title="APEC Privacy Recognition for Processors (PRP)"
      description="Cross-border Privacy Accountability Framework – Audit, Consulting & Training | APEC CBPR System, PDPA Transfer Obligation Aligned"
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
                  alt="APEC PRP Privacy Recognition for Processors"
                />
              </div>
              <p className="mt-30">
                {
                  "The APEC Privacy Recognition for Processors (PRP) is a voluntary international accountability framework designed specifically for data processors — organisations that process personal data on behalf of client controllers across APEC economies. It operates alongside the APEC Cross-Border Privacy Rules (CBPR) system, covering 21 APEC member economies including Singapore, the United States, Japan, South Korea, Australia, Mexico, the Philippines, and Canada. ICFC — Singapore's trusted APEC PRP specialist since 2014 — delivers audit, consultation, and training with ESG MASA grant management built in."
                }
              </p>
              <div className="grid-4">
                <div className="stat-box">
                  <div className="stat-number">{"9"}</div>
                  <p className="mb-0">{"APEC privacy principles"}</p>
                  <small>{"covered"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"25+"}</div>
                  <p className="mb-0">{"Industries served"}</p>
                  <small>{"in Singapore"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"21"}</div>
                  <p className="mb-0">{"APEC economies"}</p>
                  <small>{"in CBPR/PRP system"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"98%"}</div>
                  <p className="mb-0">{"First-attempt rate"}</p>
                  <small>{"certification success"}</small>
                </div>
              </div>
              <div className="grid-2 mb-4">
                <div className="p-4 rounded" style={{ background: "#e3f2fd" }}>
                  <h4 className="mb-2">{"📋 APEC CBPR"}</h4>
                  <p className="mb-0">
                    <strong>{"For Data Controllers"}</strong>
                    {
                      " — Organisations that determine the purposes and means of processing personal data. CBPR certifies that the controller's privacy policies meet APEC privacy principles across their cross-border data flow ecosystem."
                    }
                  </p>
                </div>
                <div className="p-4 rounded" style={{ background: "#e8f5e9" }}>
                  <h4 className="mb-2">{"🔒 APEC PRP"}</h4>
                  <p className="mb-0">
                    <strong>{"For Data Processors"}</strong>
                    {
                      " — Organisations that process personal data on behalf of client controllers — cloud service providers, BPO firms, payroll processors, data analytics companies, IT managed services. PRP certifies privacy-protective practices satisfying controller's APEC CBPR obligations."
                    }
                  </p>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-10">
                {
                  "What is APEC PRP? Singapore's cross-border data processor certification — why it matters in 2025"
                }
              </h3>
              <p>
                {
                  "The APEC Privacy Recognition for Processors (PRP) is a voluntary international accountability framework designed specifically for data processors — organisations that process personal data on behalf of client controllers across APEC economies. It operates alongside the APEC Cross-Border Privacy Rules (CBPR) system, which applies to data controllers. Together they form the only internationally recognised cross-border privacy accountability framework covering 21 APEC member economies including Singapore, the United States, Japan, South Korea, Australia, Mexico, the Philippines, and Canada."
                }
              </p>
              <p>
                {
                  "Singapore's PDPA establishes a Transfer Limitation Obligation requiring organisations to ensure comparable protection when transferring personal data overseas. APEC PRP certification provides the structured accountability mechanism that satisfies both Singapore's PDPA transfer requirements and the data privacy laws of 20 other APEC economies simultaneously — making it the most efficient cross-border data compliance tool available to Singapore-based processors serving multinational clients."
                }
              </p>
              <div
                className="alert alert-info border-0 p-3 mb-4"
                style={{ background: "#e8f4fd" }}
              >
                <i className="ri-information-line me-2"></i>
                <strong>{"中文说明："}</strong>
                {
                  ' APEC"数据处理者隐私认证"（PRP）是专为数据处理者（如云服务商、外包服务商、数据分析公司等）设计的国际隐私问责框架，覆盖21个亚太经济体。取得APEC PRP认证，可向您的企业客户证明您具备符合APEC标准的隐私保护能力。ICFC提供全程辅导，并协助申请ESG MASA资助，最高可补贴70%费用。'
                }
              </div>
              <h3 className="mt-40 mb-20">
                {"Nine privacy principles — what APEC PRP covers"}
              </h3>
              <div className="grid-3">
                <div className="principle-card">
                  <strong>{"🔒 Preventing Harm"}</strong>
                  <br />
                  {
                    "Identify and mitigate privacy-related harms from processing activities"
                  }
                </div>
                <div className="principle-card">
                  <strong>{"📋 Notice"}</strong>
                  <br />
                  {
                    "Documentation of processing activities, data types, retention, sub-processors"
                  }
                </div>
                <div className="principle-card">
                  <strong>{"🎯 Collection Limitation"}</strong>
                  <br />
                  {
                    "Limit collection strictly to controller instructions — no secondary use"
                  }
                </div>
                <div className="principle-card">
                  <strong>{"📂 Uses of Personal Information"}</strong>
                  <br />
                  {
                    "Process only for authorised purposes with documented controls"
                  }
                </div>
                <div className="principle-card">
                  <strong>{"✅ Choice"}</strong>
                  <br />
                  {
                    "Respect data subject choices — opt-outs, requests, consent preferences"
                  }
                </div>
                <div className="principle-card">
                  <strong>{"🔐 Integrity of Information"}</strong>
                  <br />
                  {
                    "Data accuracy, completeness, and currency through quality processes"
                  }
                </div>
                <div className="principle-card">
                  <strong>{"🛡️ Security Safeguards"}</strong>
                  <br />
                  {
                    "Technical, administrative, physical controls — CSA/ISO 27001 aligned"
                  }
                </div>
                <div className="principle-card">
                  <strong>{"🌐 Access & Correction"}</strong>
                  <br />
                  {
                    "Support controller clients in handling data subject requests"
                  }
                </div>
                <div className="principle-card">
                  <strong>{"📊 Accountability"}</strong>
                  <br />
                  {
                    "Governance structures, training, sub-processor vetting, programme reviews"
                  }
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {"Three service pillars — End-to-end APEC PRP support"}
              </h3>
              <div className="grid-3">
                <div className="service-card p-4">
                  <i
                    className="ri-survey-line fs-1"
                    style={{ color: "#1A4D8C" }}
                  ></i>
                  <h4 className="mt-2">{"🔍 Audit Services"}</h4>
                  <p>
                    {
                      "Gap audits, accountability agent readiness assessments, pre-certification reviews, data processing activity audits, sub-processor vetting audits, surveillance support."
                    }
                  </p>
                  <SiteLink
                    href="/services.html"
                    className="service-card-btn mt-2"
                  >
                    {"Explore audit →"}
                  </SiteLink>
                </div>
                <div className="service-card p-4">
                  <i
                    className="ri-file-copy-line fs-1"
                    style={{ color: "#1A4D8C" }}
                  ></i>
                  <h4 className="mt-2">{"📝 Consulting"}</h4>
                  <p>
                    {
                      "Full implementation, controller-processor agreements, data processing inventory, nine-principle controls, sub-processor management, PDPA integration, CSA alignment, MASA grant advisory."
                    }
                  </p>
                  <SiteLink
                    href="/services.html"
                    className="service-card-btn mt-2"
                  >
                    {"Explore consulting →"}
                  </SiteLink>
                </div>
                <div className="service-card p-4">
                  <i
                    className="ri-bar-chart-grouped-line fs-1"
                    style={{ color: "#1A4D8C" }}
                  ></i>
                  <h4 className="mt-2">{"🎓 Training"}</h4>
                  <p>
                    {
                      "Foundation awareness, lead implementer, internal auditor, DPO privacy essentials, controller-processor contract training, cross-border transfer masterclass, executive briefing."
                    }
                  </p>
                  <SiteLink
                    href="/services.html"
                    className="service-card-btn mt-2"
                  >
                    {"Explore training →"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {
                  "Singapore regulatory alignment — APEC PRP within Singapore's legal framework"
                }
              </h3>
              <div className="grid-2">
                <div className="p-3 bg-light rounded">
                  <strong>{"🇸🇬 PDPA — Transfer Limitation Obligation"}</strong>
                  <br />
                  {
                    "APEC PRP certification satisfies the Transfer Limitation Obligation for data processors handling cross-border flows."
                  }
                </div>
                <div className="p-3 bg-light rounded">
                  <strong>{"🏦 MAS — Technology Risk Management"}</strong>
                  <br />
                  {
                    "MAS-regulated entities require PRP from their processor service providers."
                  }
                </div>
                <div className="p-3 bg-light rounded">
                  <strong>{"🛡️ CSA — Cybersecurity Act"}</strong>
                  <br />
                  {
                    "Security safeguards principle complements CSA obligations for CII sector data processors."
                  }
                </div>
                <div className="p-3 bg-light rounded">
                  <strong>{"📊 SGX — ESG Data & Sustainability"}</strong>
                  <br />
                  {
                    "PRP provides auditable evidence of responsible data stewardship for ESG reporting."
                  }
                </div>
                <div className="p-3 bg-light rounded">
                  <strong>{"🏥 HSA — Healthcare Data Processors"}</strong>
                  <br />
                  {
                    "CROs, clinical data managers, health analytics processors handling patient data across APEC economies."
                  }
                </div>
                <div className="p-3 bg-light rounded">
                  <strong>{"💼 MOM — Workforce Data Processors"}</strong>
                  <br />
                  {
                    "HR technology providers, payroll processors handling employee data across APEC jurisdictions."
                  }
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {"Industry coverage — 25+ sectors"}
              </h3>
              <div className="mb-4">
                <span className="industry-tag">
                  {"Fintech & Payment Processing"}
                </span>
                <span className="industry-tag">{"Telecommunications"}</span>
                <span className="industry-tag">{"Cloud & IT Services"}</span>
                <span className="industry-tag">
                  {"Data Centre & Colocation"}
                </span>
                <span className="industry-tag">
                  {"Critical Infrastructure (CII)"}
                </span>
                <span className="industry-tag">
                  {"Banking & Financial Services"}
                </span>
                <span className="industry-tag">
                  {"Healthcare & Clinical Data"}
                </span>
                <span className="industry-tag">
                  {"Pharmaceutical & Life Sciences"}
                </span>
                <span className="industry-tag">
                  {"Logistics & Supply Chain"}
                </span>
                <span className="industry-tag">
                  {"Manufacturing & Industry 4.0"}
                </span>
                <span className="industry-tag">
                  {"HR Technology & Payroll"}
                </span>
                <span className="industry-tag">
                  {"Marketing Technology & Analytics"}
                </span>
                <span className="industry-tag">
                  {"Business Process Outsourcing"}
                </span>
                <span className="industry-tag">{"Insurance & InsurTech"}</span>
                <span className="industry-tag">{"Aviation & Aerospace"}</span>
                <span className="industry-tag">{"Retail & E-commerce"}</span>
                <span className="industry-tag">{"Education & EdTech"}</span>
                <span className="industry-tag">
                  {"Government & Public Sector ICT"}
                </span>
                <span className="industry-tag">{"Professional Services"}</span>
                <span className="industry-tag">{"Transport & Mobility"}</span>
                <span className="industry-tag">{"Cybersecurity & MSSPs"}</span>
                <span className="industry-tag">
                  {"ESG Data & Sustainability"}
                </span>
                <p className="mt-3 text-muted">
                  <small>
                    {
                      "My sector is not listed — ICFC can still help across all industries."
                    }
                  </small>
                </p>
              </div>
              <div className="alert alert-success border-0 p-4 rounded-3 mb-4">
                <i
                  className="ri-government-line fs-3 me-3 float-start"
                  style={{ color: "#2E7D32" }}
                ></i>
                <h5 className="text-dark">
                  {
                    "💰 ESG MASA grant — up to 70% co-funding for APEC PRP certification"
                  }
                </h5>
                <p className="mb-0">
                  {
                    "Enterprise Singapore's Market Access Standards Adoption (MASA) programme supports qualifying Singapore SMEs in adopting internationally recognised frameworks — including APEC PRP certification. Eligible companies can recover a significant share of ICFC's consultation fees and assessor costs. We assess your eligibility upfront, prepare all required documentation, manage milestone claims, and coordinate with your accountability agent — adding zero delay to your project timeline."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn btn-success mt-3"
                  style={{ background: "#2E7D32", padding: "10px 24px" }}
                >
                  {"Check MASA grant eligibility →"}
                </SiteLink>
              </div>
              <h3 className="mt-40 mb-20">{"Client testimonials"}</h3>
              <div className="testimonial-card">
                <p>
                  {
                    "\"ICFC's team understood the nuances of the APEC PRP framework — particularly how it interacts with Singapore's PDPA Transfer Limitation Obligation and our US and Japan client requirements. They designed our processor accountability programme so a single framework satisfied PRP, PDPA, and our MAS clients' third-party risk management requirements. The MASA grant advisory was handled entirely by ICFC with zero impact on our project timeline.\""
                  }
                </p>
                <strong>
                  {
                    "— Head of data governance & privacy, Cloud managed services provider"
                  }
                </strong>
              </div>
              <div className="testimonial-card">
                <p>
                  {
                    '"As a clinical trial data management company processing patient data across Singapore, Japan, Australia, and the US, APEC PRP was the only framework that addressed all our cross-border obligations efficiently. ICFC built our entire privacy programme from ground up — controller-processor agreements, sub-processor vetting, the nine-principle controls, and staff training — in under four months."'
                  }
                </p>
                <strong>
                  {"— Chief privacy officer, Contract research organisation"}
                </strong>
              </div>
              <div className="testimonial-card">
                <p>
                  {
                    '"The APEC PRP internal auditor training ICFC ran for our DPO and privacy team was the most practically useful privacy training we have attended. It was tailored specifically to our payroll processing environment — including cross-border employee data flows to our APEC clients — and gave our team the confidence to manage PRP surveillance cycles independently."'
                  }
                </p>
                <strong>
                  {
                    "— DPO & compliance director, Regional payroll processing company"
                  }
                </strong>
              </div>
              <h3 className="rs-services-details-title mb-20 mt-40">
                {"Frequently asked questions — APEC PRP"}
              </h3>
              <div className="accordion" id="faqAccordion">
                <AccordionItem
                  title={<>{"What is APEC PRP and who needs it?"}</>}
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "APEC PRP is an international accountability certification for data processors — cloud service providers, BPO companies, payroll processors, data analytics platforms, clinical trial data managers, marketing technology firms, and IT managed service providers with clients in multiple APEC economies (US, Japan, South Korea, Australia, Canada, Mexico, Philippines)."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How does APEC PRP satisfy Singapore's PDPA Transfer Limitation Obligation?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "For data processors receiving data from Singapore controllers, APEC PRP certification demonstrates that the processor implements privacy protections meeting APEC Privacy Framework standards across all nine principles — providing the accountability mechanism that satisfies the Transfer Limitation Obligation. It also supports Singapore controller clients in demonstrating due diligence."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"What is the difference between APEC CBPR and APEC PRP?"}
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "APEC CBPR applies to data controllers (organisations that determine purposes and means of processing). APEC PRP applies to data processors (organisations processing on behalf of controllers). The two systems work together to create an end-to-end accountability chain across APEC cross-border data flows. ICFC advises which your organisation needs."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"How long does APEC PRP certification take with ICFC?"}
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "A typical APEC PRP programme takes 3–6 months from kickoff to accountability agent assessment readiness, depending on the volume of your processing activities, maturity of existing privacy controls, and number of APEC economies in your cross-border data flows. ICFC's 98% first-attempt success rate means you are unlikely to face costly rework."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Can ICFC help combine MASA grant funding with APEC PRP certification?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Yes. ICFC is an experienced MASA grant advisory partner. We assess eligibility upfront, prepare all documentation, manage milestone claims, and coordinate with your accountability agent — running the grant process in parallel with your PRP implementation. Qualifying Singapore SMEs can recover up to 70% of eligible consultation and assessment costs."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>{"How does APEC PRP relate to ISO 27001 and PDPA?"}</>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "These frameworks are complementary and can be integrated. APEC PRP addresses cross-border data processor privacy accountability. ISO 27001 addresses information security management. PDPA addresses Singapore data protection law. ICFC designs integrated programmes — controls, documentation, and audit evidence serve multiple certifications simultaneously."
                  }
                </AccordionItem>
              </div>
              <h3 className="mt-40 mb-20">
                {
                  "APEC PRP认证如何帮助新加坡数据处理者满足跨境数据传输合规要求？"
                }
              </h3>
              <div
                className="p-4 rounded"
                style={{ background: "#1a1a2e", color: "white" }}
              >
                <p>
                  {
                    'APEC"数据处理者隐私认证"（PRP）是专为代表客户企业处理个人数据的机构（即数据处理者）设计的国际隐私问责认证框架，覆盖21个亚太经济体，包括新加坡、美国、日本、韩国、澳大利亚、加拿大及菲律宾等。取得APEC PRP认证，可向您的企业客户（数据控制者）证明您符合APEC隐私框架九项原则的要求，同时满足新加坡《个人资料保护法》（PDPA）跨境传输义务中对数据处理者的合规要求。ICFC Pte Ltd 提供全程辅导，包括数据处理活动清单、控制者-处理者协议框架、九项原则实施、下游处理者审查及员工培训，并协助申请企业发展局（ESG）MASA资助，最高可补贴70%费用。'
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn btn-primary mt-2"
                  style={{ background: "#1A4D8C" }}
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div
                className="p-5 rounded-4 mt-40 text-center"
                style={{
                  background: "linear-gradient(135deg, #e8f4fd, #f8f9fa)",
                }}
              >
                <h3>{"Start your APEC PRP certification with ICFC Pte Ltd"}</h3>
                <p className="mb-3">
                  {
                    "Whether you are responding to a client requirement, satisfying a regulatory obligation, or proactively building cross-border privacy accountability — ICFC gives you a practical, honest, and budget-friendly path to APEC PRP certification backed by 11 years of Singapore compliance expertise and a 98% first-attempt success rate."
                  }
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <SiteLink href="/contact-us.html" className="btn btn-primary">
                    {"Book a free consultation →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-outline-primary"
                  >
                    {"Get a quote + grant check →"}
                  </SiteLink>
                </div>
              </div>
              <div className="mt-40 text-muted small">
                <strong>{"Page optimised for:"}</strong>
                {
                  " best APEC PRP consultant Singapore · affordable APEC PRP certification SG · APEC PRP audit 2025 · data processor privacy certification · cross-border data transfer PDPA · ESG grant data privacy SG · MASA grant APEC PRP · CBPR PRP consultant SG · APEC CBPR system Singapore · APEC数据处理者认证新加坡 · 跨境隐私认证辅导"
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
                    "APEC PRP certification — cross-border privacy accountability, MASA grant funded. "
                  }
                  <SiteLink href="/contact-us.html">
                    {"Start your privacy certification journey today →"}
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
