import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsfivePageContent() {
  return (
    <SitePageTemplate
      route="services-detailsfive.html"
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
        "/styles/pages/services-detailsfive.css",
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
      title="ISO 9001 QMS"
      description="Quality Management System (QMS) Certification – Audit, Consulting & Training | GeBIZ Tender Ready, ISO 9001:2026 Transition Prepared"
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
                  alt="ISO 9001 Quality Management System"
                />
              </div>
              <p className="mt-30">
                {
                  "ISO 9001 is the world's most widely adopted management system standard — with over one million certificates issued in 190 countries. In Singapore, it is the foundational quality credential that unlocks government tenders, enterprise supply chains, and international contracts. ISO 9001:2026 is expected by September 2026 — ICFC certifies organisations under ISO 9001:2015 today with a seamless upgrade path to the 2026 edition. Every engagement includes EDG grant management at no extra charge."
                }
              </p>
              <div className="grid-4">
                <div className="stat-box">
                  <div className="stat-number">{"1M+"}</div>
                  <p className="mb-0">{"Certificates issued"}</p>
                  <small>{"world's most adopted standard"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"3–6 mo"}</div>
                  <p className="mb-0">{"Typical QMS timeline"}</p>
                  <small>{"certification"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"50%"}</div>
                  <p className="mb-0">{"EDG grant co-funding"}</p>
                  <small>{"for qualifying SMEs"}</small>
                </div>
                <div className="stat-box">
                  <div className="stat-number">{"25+"}</div>
                  <p className="mb-0">{"Singapore industries"}</p>
                  <small>{"served by ICFC"}</small>
                </div>
              </div>
              <div className="alert alert-success border-0 p-4 rounded-3 mb-4">
                <i
                  className="ri-information-line fs-3 me-3 float-start"
                  style={{ color: "#3B6D11" }}
                ></i>
                <h5 className="text-dark">
                  {
                    "📋 ISO 9001:2026 — expected September 2026. Start ISO 9001:2015 now — no benefit to waiting"
                  }
                </h5>
                <p className="mb-0">
                  <strong>{"Status:"}</strong>
                  {
                    " 97% approval at DIS ballot (December 2025). FDIS phase underway. Publication targeted September 2026."
                  }
                  <br />
                  <strong>{"Changes:"}</strong>
                  {
                    " Evolution, not rewrite — Annex SL structure maintained. New focus on quality culture, digitalisation, ethics, and ESG alignment."
                  }
                  <br />
                  <strong>{"Transition:"}</strong>
                  {
                    " 3-year transition window from publication — ISO 9001:2015 certificates valid until ~September 2029."
                  }
                  <br />
                  <strong>{"Strategy:"}</strong>
                  {
                    " Build ISO 9001:2015 now — your investment is future-proof. ICFC includes 2026 upgrade support."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn btn-success mt-3"
                  style={{ background: "#3B6D11", padding: "10px 24px" }}
                >
                  {"ISO 9001:2026 transition →"}
                </SiteLink>
              </div>
              <h3 className="rs-services-details-title mb-10">
                {
                  "What is ISO 9001 QMS? Singapore's quality certification — the commercial case for ISO 9001"
                }
              </h3>
              <p>
                {
                  "ISO 9001 is the internationally recognised standard for Quality Management Systems, based on seven quality management principles. It provides a framework for organisations to ensure they consistently meet customer and regulatory requirements while continually improving their processes. In Singapore, it is the foundational certification that signals quality credibility to government buyers, enterprise clients, and international partners."
                }
              </p>
              <p>
                {
                  "ISO 9001 is the most strategic investment a Singapore SME can make in quality credibility. ISO 9001 certification wins more tenders by qualifying for government and corporate contracts that mandate it, improves efficiency by streamlining processes to reduce errors and rework, boosts customer confidence through internationally recognised proof of quality commitment, and provides built-in framework for identifying and addressing quality issues. For most Singapore companies, the question is not whether to certify — it is when."
                }
              </p>
              <h3 className="mt-40 mb-20">
                {
                  "ISO 9001 — seven quality management principles ICFC embeds in every QMS"
                }
              </h3>
              <div className="grid-2">
                <div className="bg-light p-3 rounded">
                  <strong>{"📋 Principle 1 — Customer focus"}</strong>
                  <br />
                  {
                    "Understanding and meeting customer requirements — the primary focus of quality management"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"👔 Principle 2 — Leadership"}</strong>
                  <br />
                  {
                    "Establishing unity of purpose, direction, and engagement — active commitment from top management"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"👥 Principle 3 — Engagement of people"}</strong>
                  <br />
                  {
                    "Empowering competent, motivated people at all levels — quality depends on everyone"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"🔄 Principle 4 — Process approach"}</strong>
                  <br />
                  {
                    "Managing activities as interconnected processes — foundation of ICFC's QMS design"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"📈 Principle 5 — Improvement"}</strong>
                  <br />
                  {
                    "Ongoing focus on enhancing performance — PDCA cycle driving continual improvement"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>
                    {"📊 Principle 6 — Evidence-based decision making"}
                  </strong>
                  <br />
                  {
                    "Analysing data to drive decisions — quality metrics and performance indicators"
                  }
                </div>
                <div className="bg-light p-3 rounded">
                  <strong>{"🤝 Principle 7 — Relationship management"}</strong>
                  <br />
                  {
                    "Managing relationships with interested parties — suppliers, partners, regulatory bodies"
                  }
                </div>
              </div>
              <div className="row g-4 mt-4 mb-5">
                <div className="col-md-4">
                  <div className="service-card p-4 border rounded h-100 bg-white">
                    <i
                      className="ri-survey-line fs-1"
                      style={{ color: "#C8102E" }}
                    ></i>
                    <h4 className="mt-2">{"🔍 QMS Audit Services"}</h4>
                    <p>
                      {
                        "Gap analysis, Stage 1 & 2 audits, pre-certification, surveillance. EDG eligible."
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
                    <i
                      className="ri-file-copy-line fs-1"
                      style={{ color: "#C8102E" }}
                    ></i>
                    <h4 className="mt-2">{"📋 QMS Consultation"}</h4>
                    <p>
                      {
                        "Full implementation, IMS integration, GeBIZ tender alignment, EDG grant managed."
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
                    <i
                      className="ri-bar-chart-grouped-line fs-1"
                      style={{ color: "#C8102E" }}
                    ></i>
                    <h4 className="mt-2">{"🎓 QMS Training"}</h4>
                    <p>
                      {
                        "Lead Auditor (CQI/IRCA), Internal Auditor, Implementer, Staff awareness, 2026 transition."
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
              <div className="alert alert-success border-0 p-4 rounded-3 mb-4">
                <i
                  className="ri-government-line fs-3 me-3 float-start"
                  style={{ color: "#3B6D11" }}
                ></i>
                <h5 className="text-dark">
                  {
                    "EDG / MASA grant — up to 50% co-funding for ISO 9001 consultation"
                  }
                </h5>
                <p className="mb-0">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 9001 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. Integrated IMS projects (9001 + 14001 + 45001) qualify for EDG co-funding on all standards through a single application — maximising total grant benefit."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn btn-success mt-3"
                  style={{ background: "#3B6D11", padding: "10px 24px" }}
                >
                  {"Check grant eligibility →"}
                </SiteLink>
              </div>
              <div className="grid-4">
                <div className="text-center">
                  <div className="stat-number">{"98%"}</div>
                  <p className="mb-0">{"First-attempt success"}</p>
                  <small>{"certification rate"}</small>
                </div>
                <div className="text-center">
                  <div className="stat-number">{"Sep 2026"}</div>
                  <p className="mb-0">{"ISO 9001:2026"}</p>
                  <small>{"publication target"}</small>
                </div>
                <div className="text-center">
                  <div className="stat-number">{"50%"}</div>
                  <p className="mb-0">{"EDG grant co-funding"}</p>
                  <small>{"for qualifying SMEs"}</small>
                </div>
                <div className="text-center">
                  <div className="stat-number">{"25+"}</div>
                  <p className="mb-0">{"Singapore industries"}</p>
                  <small>{"served by ICFC"}</small>
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {"ICFC's QMS audit process — process mapping to certificate"}
              </h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">{"01"}</div>
                  {"Free briefing"}
                </div>
                <div className="step">
                  <div className="step-number">{"02"}</div>
                  {"Process mapping"}
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
                  {"Certification"}
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {
                  "QMS consultation — from process mapping to ISO 9001 certificate"
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
                  {"Process mapping"}
                </div>
                <div className="step">
                  <div className="step-number">{"04"}</div>
                  {"QMS build"}
                </div>
                <div className="step">
                  <div className="step-number">{"05"}</div>
                  {"Staff training"}
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
              <h3 className="mt-40 mb-20">{"Client outcomes · Singapore"}</h3>
              <div className="testimonial-card">
                <p>
                  {
                    '"ICFC helped us achieve ISO 9001 certification in under three months — starting from scratch. Their process mapping workshop identified four bottlenecks in our service delivery that we had not previously documented. Fixing these reduced our rework rate by 35% in the first quarter after certification. The EDG grant covered 50% of the consultation cost."'
                  }
                </p>
                <strong>{"— MD, IT services company, Singapore"}</strong>
              </div>
              <div className="testimonial-card">
                <p>
                  {
                    "\"We needed ISO 9001 to qualify for a GeBIZ government tender that required it as a prerequisite. ICFC's government tender qualification QMS approach was exactly what we needed — practical, audit-ready documentation that satisfied both the ISO standard and the procurement panel's evidence requirements. We won the tender two months after certification.\""
                  }
                </p>
                <strong>
                  {"— GM, Engineering services provider, Singapore"}
                </strong>
              </div>
              <div className="testimonial-card">
                <p>
                  {
                    '"ICFC\'s integrated ISO 9001 + ISO 14001 + ISO 45001 IMS was the most cost-effective decision we made. One gap analysis, one internal audit programme, one EDG grant application — triple certification in six months. The combined approach saved us approximately S$25,000 versus three separate consultancy engagements."'
                  }
                </p>
                <strong>{"— OD, Construction company, Singapore"}</strong>
              </div>
              <h3 className="mt-40 mb-20">{"Related services"}</h3>
              <div className="related-services">
                <div className="related-card">
                  <span className="badge-red">{"🌿 ISO 14001:2026"}</span>
                  <p>{"IMS integration — 20–30% saving combined"}</p>
                </div>
                <div className="related-card">
                  <span className="badge-red">{"🦺 ISO 45001"}</span>
                  <p>{"Triple IMS: quality, environment, safety"}</p>
                </div>
                <div className="related-card">
                  <span className="badge-red">{"🔒 ISO 27001"}</span>
                  <p>{"IMS + ISMS — comprehensive governance"}</p>
                </div>
              </div>
              <div className="lang-section">
                <h3>
                  {
                    "新加坡ISO 9001质量管理体系（QMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p>
                  {
                    "ICFC提供新加坡ISO 9001:2015质量管理体系全程认证服务，包括流程梳理、差距分析、文件开发、政府招标资格准备、EDG补助金申请管理及员工培训，涵盖建筑、制造、物流、IT等25大行业。ISO 9001:2026过渡支持已涵盖在所有当前项目中。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务，欢迎免费咨询。"
                  }
                </p>
                <p>
                  <strong>{"关键词："}</strong>
                  {
                    "ISO 9001新加坡 · 质量管理体系 · QMS认证 · 政府招标资格 · GeBIZ供应商 · EDG补助金 · 最佳QMS顾问 · 实惠ISO 9001认证 · ISO 9001 2026过渡 · 新加坡质量认证"
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="btn btn-primary mt-2"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div
                className="service-block mt-4 text-center"
                style={{
                  background: "linear-gradient(135deg, #fff5f5, #fff)",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                <h3>{"Start your ISO 9001 QMS journey today"}</h3>
                <p>
                  {
                    "Free 30-minute quality management assessment. Honest gap analysis against ISO 9001:2015. EDG grant eligibility check. ISO 9001:2026 transition strategy. No obligation."
                  }
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                  <SiteLink href="/contact-us.html" className="btn btn-primary">
                    {"Book free QMS assessment →"}
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
                    {"ISO 9001:2026 transition"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-20 mt-40">
                {"Frequently asked questions — ISO 9001 QMS"}
              </h3>
              <div className="accordion" id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "Should we wait for ISO 9001:2026 before getting certified?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "There is absolutely no benefit to waiting. Delaying your certification project means postponing the significant commercial benefits — including government tender qualification and operational efficiency — for over two years. The core requirements will not change — the 2026 edition is an evolution, maintaining the Annex SL structure. Any system built on ISO 9001:2015 today is a direct investment in your future 2026 certification."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"Is ISO 9001 required for Singapore government tenders?"}
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "ISO 9001 is not legally mandated for all government tenders — but it is widely required or weighted in GeBIZ procurement. Many government agencies and statutory boards require ISO 9001 as a prerequisite for supplier qualification. For any company that bids for government contracts, ISO 9001 is effectively a commercial necessity."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"How much does ISO 9001 consultation cost after grants?"}
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Typical ICFC consultation fees range from S$5,000–S$15,000 depending on organisation size and complexity. With EDG grant covering up to 50% for eligible SMEs, the net consultancy cost for a first-time certification is typically S$2,500–S$7,500."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Can we integrate ISO 9001 with ISO 14001 and ISO 45001?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Yes — ISO 9001, ISO 14001, ISO 45001, and ISO 27001 all share the Annex SL High Level Structure. An integrated management system (IMS) reduces total implementation cost by 20–30% and qualifies for a single EDG grant application covering all standards."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How long does ISO 9001 certification take in Singapore?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Most Singapore SMEs achieve ISO 9001 certification in 3–6 months with proper consultancy support. ICFC's typical engagement for an SME with 10–50 employees runs 10–14 weeks from gap analysis to Stage 2 certification audit completion."
                  }
                </AccordionItem>
              </div>
              <div className="mt-40 text-muted small">
                <strong>{"Page optimised for:"}</strong>
                {
                  " ISO 9001 Singapore 2026 · QMS certification SG · ISO 9001:2026 transition · government tender ISO 9001 · best QMS consultant SG · affordable ISO 9001 · budget QMS certification · EDG grant ISO 9001"
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
                    "ISO 9001 QMS certification — tender-ready, EDG grant funded. "
                  }
                  <SiteLink href="/contact-us.html">
                    {"Start your quality management journey today →"}
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
