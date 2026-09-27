import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsfourPageContent() {
  return (
    <SitePageTemplate
      route="services-detailsfour.html"
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
        "/styles/pages/services-detailsfour.css",
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
      title="ISO 14001:2026 · Environmental Management System · NEA · Singapore Green Plan 2030"
      description="Environmental Management System — ISO 14001:2026 certified, Green Plan aligned, grant-funded"
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
                  alt="ISO 14001:2026 Environmental Management System"
                />
              </div>
              <p className="mt-30">
                {
                  "ISO 14001:2026 — published 15 April 2026 — is the world's most widely used environmental management standard, trusted by more than 670,000 certified organisations globally. The 2026 edition introduces stronger alignment with climate change, biodiversity, resource efficiency, and supply chain lifecycle thinking. In Singapore, it is essential for SGX sustainability reporting, Carbon Pricing Act compliance, NEA and EPMA regulatory alignment, and Green Plan 2030 commitments. ICFC delivers EMS gap analysis, full ISO 14001:2026 implementation, 2015-to-2026 transition support, and training — with EDG grant management built in."
                }
              </p>
              <div className="grid-4">
                <div className="stat-box">
                  <div className="stat-number">{"Apr 2026"}</div>
                  <p className="mb-0">{"ISO 14001:2026 published"}</p>
                  <small>{"start transition now"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"May 2029"}</div>
                  <p className="mb-0">{"2015 certificates expire"}</p>
                  <small>{"3-year transition window"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"S$45"}</div>
                  <p className="mb-0">{"/tCO₂e carbon tax 2026"}</p>
                  <small>{"S$50–80 by 2030"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"670K+"}</div>
                  <p className="mb-0">{"Organisations certified"}</p>
                  <small>{"globally"}</small>
                </div>
              </div>
              <div
                className="service-block"
                style={{
                  background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)",
                }}
              >
                <h3 className="mb-15">
                  {
                    "🌿 ISO 14001:2026 — what changed and what it means for Singapore organisations"
                  }
                </h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="key-change-card">
                      <strong>{"📅 Published"}</strong>
                      <br />
                      {
                        "ISO 14001:2026 published 15 April 2026 — replaces ISO 14001:2015 including the 2024 climate change amendment"
                      }
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="key-change-card">
                      <strong>{"⏰ Transition"}</strong>
                      <br />
                      {
                        "3-year transition window — all ISO 14001:2015 certificates must transition to 2026 edition by May 2029"
                      }
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="key-change-card">
                      <strong>{"🌍 Climate"}</strong>
                      <br />
                      {
                        "Climate change, biodiversity, and natural resource use now explicitly required in Clause 4 context analysis"
                      }
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="key-change-card">
                      <strong>{"🔗 Supply chain"}</strong>
                      <br />
                      {
                        "Much greater focus on supply chain lifecycle thinking — upstream and downstream environmental impacts"
                      }
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="key-change-card">
                      <strong>{"👔 Leadership"}</strong>
                      <br />
                      {
                        "Top management accountability extended to all relevant roles — not just management roles"
                      }
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <SiteLink href="/contact-us.html" className="btn btn-primary">
                    {"Book free EMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-outline-primary ms-2"
                  >
                    {"2026 transition support"}
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
                    "EDG / MASA grant — up to 50% co-funding for EMS consultation"
                  }
                </h5>
                <p className="mb-0">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 14001 consultation fees for eligible Singapore SMEs. Enhanced rates applied for sustainability standards. ICFC manages your application before project commencement. Integrated IMS projects (14001 + 50001 + 45001) qualify for EDG co-funding in a single application."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn btn-success mt-3"
                >
                  {"Check eligibility →"}
                </SiteLink>
              </div>
              <div className="grid-4">
                <div className="text-center">
                  <div className="stat-number">{"25+"}</div>
                  <p className="mb-0">{"Singapore industries"}</p>
                  <small>{"ICFC serves"}</small>
                </div>
                <div className="text-center">
                  <div className="stat-number">{"50%"}</div>
                  <p className="mb-0">{"EDG grant co-funding"}</p>
                  <small>{"for qualifying SMEs"}</small>
                </div>
                <div className="text-center">
                  <div className="stat-number">{"NEA"}</div>
                  <p className="mb-0">{"EPMA & CPA aligned"}</p>
                  <small>{"legal register"}</small>
                </div>
                <div className="text-center">
                  <div className="stat-number">{"Green"}</div>
                  <p className="mb-0">{"Plan 2030 aligned"}</p>
                  <small>{"objectives framework"}</small>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-10">
                {
                  "What is ISO 14001:2026 EMS? Singapore's environmental certification standard — why ISO 14001:2026 matters urgently"
                }
              </h3>
              <p>
                {
                  "ISO 14001:2026 provides a framework for organisations to manage, improve, and demonstrate their environmental performance. The 2026 edition reinforces what matters most: environmental protection and business outcomes, with significantly stronger alignment with today's environmental priorities — climate change, biodiversity, and resource efficiency. For Singapore organisations, it is the cornerstone of Green Plan 2030 alignment, SGX ESG reporting, and Carbon Pricing Act compliance."
                }
              </p>
              <p>
                {
                  "ISO 14001:2026 was published on 15 April 2026. From April 15, 2026, organisations certified to ISO 14001:2015 have three years to transition to the revised standard — all ISO 14001:2015 certificates will expire in May 2029. ICFC recommends starting your transition gap analysis immediately."
                }
              </p>
              <h3 className="mt-40 mb-20">
                {
                  "ISO 14001:2026 key changes — what ICFC addresses in every engagement"
                }
              </h3>
              <div className="grid-2">
                <div className="bg-light p-3 rounded">
                  <strong>{"Clause 4 — Context"}</strong>
                  <br />
                  {
                    "Climate, biodiversity & resources now explicit. Climate change, biodiversity loss, and natural resource use must now be explicitly considered in the organisational context analysis."
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"Clause 5 — Leadership"}</strong>
                  <br />
                  {
                    "Leadership accountability extended to all roles. Top management must support all relevant roles across the organisation's hierarchy."
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"Clause 6 — Planning"}</strong>
                  <br />
                  {
                    "New: planning and managing of changes. Organisations must plan and manage changes that affect intended EMS outcomes."
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"Clause 8 — Operation"}</strong>
                  <br />
                  {
                    "Lifecycle and supply chain focus strengthened. Broader scope from operations to full value chain, including sourcing and procurement decisions."
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"Clause 9 — Evaluation"}</strong>
                  <br />
                  {
                    "Explicit EMS effectiveness evaluation required. Internal audits must define objectives — not just scope and criteria."
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"Clause 10 — Improvement"}</strong>
                  <br />
                  {
                    "Structured nonconformity and improvement linkage. Clear linkage between Clause 9 findings and continual improvement tracking."
                  }
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {
                  "Singapore environmental regulatory framework — ISO 14001:2026 alignment"
                }
              </h3>
              <table className="regulatory-table">
                <thead>
                  <tr>
                    <th>{"Regulation / Framework"}</th>
                    <th>{"Key obligation"}</th>
                    <th>{"Sectors"}</th>
                    <th>{"ISO 14001:2026 alignment"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"Carbon Pricing Act (CPA)"}</td>
                    <td>
                      {
                        "S$45/tCO₂e carbon tax 2026 — S$50–80/tCO₂e by 2030. Facilities emitting ≥25,000 tCO₂e must report."
                      }
                    </td>
                    <td>
                      {"Manufacturing, energy, chemicals, aviation, maritime"}
                    </td>
                    <td className="check-yes">
                      {"✓ Clause 4 context + GHG monitoring controls"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"EPMA — Environmental Protection and Management Act"}
                    </td>
                    <td>
                      {
                        "Regulates industrial pollution — air, water, land, noise. Licences, permit conditions, scheduled waste management."
                      }
                    </td>
                    <td>
                      {"Manufacturing, construction, chemicals, logistics"}
                    </td>
                    <td className="check-yes">
                      {"✓ Legal register + operational controls"}
                    </td>
                  </tr>
                  <tr>
                    <td>{"NEA regulations"}</td>
                    <td>
                      {
                        "Waste management, scheduled waste, hazardous chemicals, ambient noise, air quality standards."
                      }
                    </td>
                    <td>
                      {"All industries handling waste, chemicals, or emissions"}
                    </td>
                    <td className="check-yes">
                      {"✓ Compliance evaluation + aspect assessment"}
                    </td>
                  </tr>
                  <tr>
                    <td>{"Singapore Green Plan 2030"}</td>
                    <td>
                      {
                        "Net zero by 2050. 30x30 food security. Green economy pillar. Energy Reset pillar."
                      }
                    </td>
                    <td>{"All sectors"}</td>
                    <td className="check-yes">
                      {
                        "✓ Environmental objectives aligned to Green Plan targets"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>{"SGX Sustainability Reporting (ISSB)"}</td>
                    <td>
                      {
                        "SGX-listed companies must report Scope 1 & 2 GHG from FY2025. STI constituents: Scope 3 from FY2026."
                      }
                    </td>
                    <td>{"All SGX-listed companies"}</td>
                    <td className="check-yes">
                      {
                        "✓ GHG monitoring data + environmental performance evidence"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>{"Energy Conservation Act (ECA)"}</td>
                    <td>
                      {
                        "Facilities consuming ≥54 TJ/year must implement mandatory Energy Management System."
                      }
                    </td>
                    <td>{"Large manufacturing, data centres"}</td>
                    <td className="check-yes">{"✓ ISO 50001 integration"}</td>
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
                    <h4>{"🔍 EMS Audit Services"}</h4>
                    <p>
                      {
                        "Gap analysis, 2026 transition, Stage 1 & 2, pre-certification, internal audit. EDG eligible."
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
                    <h4>{"🌿 EMS Consultation"}</h4>
                    <p>
                      {
                        "Full implementation, 2015→2026 transition, IMS integration, EDG grant managed."
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
                    <h4>{"🎓 EMS Training"}</h4>
                    <p>
                      {
                        "Lead Auditor (CQI/IRCA), Internal Auditor, Implementer, 2026 transition course. SkillsFuture eligible."
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
                    '"ICFC\'s integrated ISO 9001 + ISO 14001 + ISO 45001 IMS approach was exactly right for our manufacturing operation. One gap analysis, one internal audit programme, one EDG grant application — and we achieved triple certification simultaneously."'
                  }
                </p>
                <strong>{"— OD, Precision manufacturer, Singapore"}</strong>
              </div>
              <div className="testimonial-card">
                <p>
                  {
                    '"ICFC\'s GHG monitoring procedure implementation within our ISO 14001 EMS was the most practically valuable work we have done this year. Our carbon tax liability was S$850,000 for 2025 — the EMS now gives us the systematic data to identify reductions."'
                  }
                </p>
                <strong>
                  {"— HSE manager, Chemical manufacturer, Jurong Island"}
                </strong>
              </div>
              <div className="testimonial-card">
                <p>
                  {
                    '"ICFC\'s combined ISO 14001 + ISO 50001 implementation gives us the systematic energy and GHG monitoring framework that satisfies customer requirements, ECA obligations, and the carbon tax simultaneously."'
                  }
                </p>
                <strong>{"— GM, Data centre operator, Singapore"}</strong>
              </div>
              <h3 className="mt-40 mb-20">
                {
                  "ICFC's EMS audit process — environmental aspect mapping to certificate"
                }
              </h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">{"01"}</div>
                  {"Free briefing"}
                </div>
                <div className="step">
                  <div className="step-number">{"02"}</div>
                  {"Env. aspects"}
                </div>
                <div className="step">
                  <div className="step-number">{"03"}</div>
                  {"2026 gap analysis"}
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
                  {"Certification → certificate"}
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {
                  "EMS consultation — from environmental aspect mapping to ISO 14001:2026 certificate"
                }
              </h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">{"01"}</div>
                  {"Free assessment"}
                </div>
                <div className="step">
                  <div className="step-number">{"02"}</div>
                  {"Grant application"}
                </div>
                <div className="step">
                  <div className="step-number">{"03"}</div>
                  {"Aspect mapping"}
                </div>
                <div className="step">
                  <div className="step-number">{"04"}</div>
                  {"Legal register"}
                </div>
                <div className="step">
                  <div className="step-number">{"05"}</div>
                  {"EMS build"}
                </div>
                <div className="step">
                  <div className="step-number">{"06"}</div>
                  {"Internal audit"}
                </div>
                <div className="step">
                  <div className="step-number">{"07"}</div>
                  {"Certification"}
                </div>
              </div>
              <h3 className="mt-40 mb-20">{"Related services"}</h3>
              <div className="related-services">
                <div className="related-card">
                  <span className="badge-red">{"⚡ ISO 50001"}</span>
                  <p>{"ECA mandatory EMS + ISO 14001 integration"}</p>
                </div>
                <div className="related-card">
                  <span className="badge-red">{"✅ ISO 9001"}</span>
                  <p>{"IMS integration — 20–30% saving combined"}</p>
                </div>
                <div className="related-card">
                  <span className="badge-red">{"🦺 ISO 45001"}</span>
                  <p>{"Triple IMS: quality, environment, safety"}</p>
                </div>
              </div>
              <div className="lang-section">
                <h3>
                  {
                    "新加坡ISO 14001:2026环境管理体系（EMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p>
                  {
                    "ICFC提供新加坡ISO 14001:2026环境管理体系全程认证服务，包括差距分析、2015至2026版过渡支持、环境因素识别、NEA/EPMA法规合规、碳税（CPA）温室气体监测、绿色计划2030目标设定及员工培训，涵盖制造、建筑、物流、数据中心等25大行业。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务。"
                  }
                </p>
                <p>
                  <strong>{"关键词："}</strong>
                  {
                    "ISO 14001新加坡 · 环境管理体系 · EMS认证 · 绿色计划2030 · 碳税合规 · NEA合规 · EDG补助金 · 最佳EMS顾问"
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
                <h3>{"Start your ISO 14001:2026 EMS journey today"}</h3>
                <p>
                  {
                    "Free 30-minute environmental management assessment. Honest gap analysis against ISO 14001:2026. 2015-to-2026 transition timeline. NEA and EPMA regulatory alignment review. EDG grant eligibility check. No obligation."
                  }
                </p>
                <div className="flex-between justify-content-center gap-3 mt-3">
                  <SiteLink href="/contact-us.html" className="btn btn-primary">
                    {"Book free EMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-outline-primary"
                  >
                    {"2026 transition support"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-outline-primary"
                  >
                    {"Check grant eligibility"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-20 mt-40">
                {"Frequently asked questions — ISO 14001:2026 EMS"}
              </h3>
              <div className="accordion" id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "What are the key differences between ISO 14001:2015 and ISO 14001:2026?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "ISO 14001:2026 is an evolution, not a rewrite. Key changes: Clause 4 now explicitly requires climate change, biodiversity context; Clause 5 extends leadership accountability to all roles; Clause 6 adds change management requirement; Clause 8 strengthens supply chain lifecycle focus; Clause 9 requires explicit EMS effectiveness evaluation; Clause 10 has more structured corrective action approach."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How much time do we have to transition from ISO 14001:2015 to 2026?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "The 3-year transition window opened on 15 April 2026 — all ISO 14001:2015 certificates must be transitioned by May 2029. ICFC recommends starting your transition gap analysis immediately to avoid scrambling in 2028."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How does ISO 14001:2026 help with Singapore's carbon tax obligations?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Singapore's carbon tax is S$45/tCO₂e (2026) rising to S$50–80/tCO₂e by 2030. ISO 14001:2026 explicitly requires climate change in Clause 4 context and Clause 9 performance evaluation. ICFC implements CPA-compliant GHG monitoring procedures within your EMS."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Can we integrate ISO 14001 with ISO 9001 and ISO 45001?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Yes — ICFC strongly recommends IMS. ISO 14001:2026 maintains Annex SL High Level Structure, reducing total cost by 20–30% with a single EDG grant application covering all standards."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "We are not in manufacturing. Does ISO 14001:2026 apply to us?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Yes — office-based services have waste and energy impacts; data centres have significant energy and cooling impacts. The 2026 edition's supply chain lifecycle thinking also applies to any organisation with procurement activity."
                  }
                </AccordionItem>
              </div>
              <div className="mt-40 text-muted small">
                <strong>{"Page optimised for:"}</strong>
                {
                  " ISO 14001:2026 Singapore · EMS certification SG · Green Plan 2030 · carbon tax compliance · EDG grant ISO 14001 · best EMS consultant SG · 2015 to 2026 transition · NEA compliance · SGX ESG reporting"
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
                    "ISO 14001:2026 EMS certification — NEA aligned, Green Plan 2030 ready. "
                  }
                  <SiteLink href="/contact-us.html">
                    {"Start your environmental management journey today →"}
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
