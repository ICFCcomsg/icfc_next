import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsctmPageContent() {
  return (
    <SitePageTemplate
      route="services-detailsctm.html"
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
        "/styles/pages/services-detailsctm.css",
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
        <ContainerSection5 />
        <SectionSpaceSection5 />
        <ContainerSection6 />
        <SeoKeywordsSection />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section
      className="rs-banner-area rs-banner-one"
      style={{ background: "#0a2a3b" }}
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
                  "CSA Cyber Trust Mark · Five Preparedness Tiers · Cloud · OT · AI Security · Singapore"
                }
              </span>
              <h1 className="rs-banner-title  fadeInUp">
                {
                  "Cyber Trust Mark — advanced cybersecurity, certified at every tier"
                }
              </h1>
              <p className="rs-banner-desc">
                {
                  "5 preparedness tiers · 22 domains · Cloud Security · OT Security · AI Security. Mandatory for CII operators. ESG/EDG grant up to 50%. ICFC Singapore since 2014."
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
      <div className="ctm-stats-grid">
        <div className="ctm-stat-card">
          <div className="ctm-stat-number">{"5"}</div>
          <div>{"Tiers"}</div>
        </div>
        <div className="ctm-stat-card">
          <div className="ctm-stat-number">{"22"}</div>
          <div>{"Domains"}</div>
        </div>
        <div className="ctm-stat-card">
          <div className="ctm-stat-number">{"3"}</div>
          <div>{"Specialisations"}</div>
        </div>
        <div className="ctm-stat-card">
          <div className="ctm-stat-number">{"25+"}</div>
          <div>{"Industries"}</div>
        </div>
        <div className="ctm-stat-card">
          <div className="ctm-stat-number">{"50%"}</div>
          <div>{"Grant"}</div>
        </div>
        <div className="ctm-stat-card">
          <div className="ctm-stat-number">{"11+"}</div>
          <div>{"Years"}</div>
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
            "🏅 Why Singapore organisations must act now — 2026 CTM enforcement is accelerating"
          }
        </h4>
        <div className="row mt-3">
          <div className="col-md-6">
            <strong>{"CII operators:"}</strong>
            {
              " CSA has communicated CTM Level 5 as target by end-2027 for all 11 CII sectors."
            }
          </div>
          <div className="col-md-6">
            <strong>{"Cloud Security:"}</strong>
            {
              " IMDA cloud governance requires third-party certification for government workloads."
            }
          </div>
          <div className="col-md-6 mt-2">
            <strong>{"AI Security (SS 712:2025):"}</strong>
            {" New mandatory control domain — procurement requirement."}
          </div>
          <div className="col-md-6 mt-2">
            <strong>{"OT Security:"}</strong>
            {
              " EMA Cybersecurity Code maps directly to CTM OT domain requirements."
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
          <span className="section-subtitle">{"CTM services"}</span>
          <h2>{"Audit · Consultation · Training"}</h2>
          <p>
            {"Five tiers · Cloud · OT · AI Security · ESG/EDG grant managed"}
          </p>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="pillar-card">
              <span style={{ fontSize: "42px" }}>{"🔍"}</span>
              <h4 className="mt-3">{"Audits"}</h4>
              <p>
                {
                  "Baseline gap assessment · Cloud Security audit · OT/ICS audit · AI Security audit · Pre-certification readiness audit."
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
                  "Full certification · Cloud track · OT/ICS track · AI Security + ISO 42001 · Tier upgrade · Integrated CTM+ISO27001."
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
                  "Awareness (EN/中文) · Cloud & OT technical workshop · Board governance · AI Security domain training."
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
          <h2>{"Framework — Five Preparedness Tiers"}</h2>
          <p>{"CSA Cyber Trust Mark: five tiers, 10–22 domains."}</p>
        </div>
        <div className="row g-4 mt-2">
          <div className="col-md-4">
            <div className="tier-card">
              <span className="tier-badge">{"Tier 1 — Entry"}</span>
              <h5>{"Essential Cyber Hygiene (10 Domains)"}</h5>
              <ul className="domain-list">
                <li>{"Asset Management"}</li>
                <li>{"Secure Configuration"}</li>
                <li>{"Software Security"}</li>
                <li>{"Access Control"}</li>
                <li>{"Malware Protection"}</li>
                <li>{"Network Security"}</li>
                <li>{"Security Policies"}</li>
                <li>{"Staff Awareness"}</li>
                <li>{"Incident Response"}</li>
                <li>{"Backup & Recovery"}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tier-card">
              <span className="tier-badge">{"Tier 2 — Developing"}</span>
              <h5>{"Managed Controls (13 Domains)"}</h5>
              <ul className="domain-list">
                <li>{"+ Identity & Access Mgmt"}</li>
                <li>{"+ Vulnerability Management"}</li>
                <li>{"+ Supplier Risk Management"}</li>
                <li>{"+ Business Continuity"}</li>
                <li>{"+ Security Governance"}</li>
                <li>{"+ Compliance Management"}</li>
                <li>{"+ Security Training"}</li>
                <li>{"+ Security Monitoring"}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tier-card">
              <span className="tier-badge">{"Tier 3 — Established"}</span>
              <h5>{"Advanced Cyber Risk Mgmt (16 Domains)"}</h5>
              <ul className="domain-list">
                <li>{"+ Penetration Testing"}</li>
                <li>{"+ Application Security"}</li>
                <li>{"+ Threat Intelligence"}</li>
                <li>{"☁️ Cloud Security (Track A)"}</li>
                <li>{"⚙️ OT Security (Track B)"}</li>
                <li>{"+ SIEM Monitoring"}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="tier-card">
              <span className="tier-badge">{"Tier 4 — Proficient"}</span>
              <h5>{"Proactive & Resilient (19 Domains)"}</h5>
              <ul className="domain-list">
                <li>{"+ Red Team Exercises"}</li>
                <li>{"+ Zero Trust Architecture"}</li>
                <li>{"+ Supply Chain Security"}</li>
                <li>{"🤖 AI Security (Track C)"}</li>
                <li>{"+ Cyber Crisis Management"}</li>
                <li>{"+ Digital Forensics"}</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="tier-card border border-primary">
              <span className="tier-badge" style={{ background: "#e67e22" }}>
                {"Tier 5 — Exemplary"}
              </span>
              <h5>{"Excellence in Cyber Governance (22 Domains)"}</h5>
              <ul className="domain-list">
                <li>{"+ Cloud Security (Full Track)"}</li>
                <li>{"+ OT Security (IEC 62443)"}</li>
                <li>{"+ AI Security (SS 712:2025)"}</li>
                <li>{"+ Board-Level Cyber Governance"}</li>
                <li>{"+ Cyber Threat Intelligence"}</li>
              </ul>
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
        <div className="section-title-wrapper text-center">
          <h2>{"Three Specialisation Tracks"}</h2>
          <p>
            {
              "Cloud Security · OT Security · AI Security — unlocked at Tier 3 and above"
            }
          </p>
        </div>
        <div className="row g-4 mt-3">
          <div className="col-md-4">
            <div className="specialisation-card">
              <div className="fs-1 mb-2">{"☁️"}</div>
              <h4>{"Cloud Security"}</h4>
              <p>
                {
                  "Cloud governance, IAM/PAM, encryption, container security, MAS TRM aligned."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="rs-btn has-text mt-2"
              >
                {"Explore Cloud Security →"}
              </SiteLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="specialisation-card">
              <div className="fs-1 mb-2">{"⚙️"}</div>
              <h4>{"OT Security"}</h4>
              <p>
                {
                  "OT asset inventory, Purdue segmentation, OT patch mgmt, IEC 62443 alignment, EMA Cybersecurity Code."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="rs-btn has-text mt-2"
              >
                {"Explore OT Security →"}
              </SiteLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="specialisation-card">
              <div className="fs-1 mb-2">{"🤖"}</div>
              <h4>{"AI Security"}</h4>
              <p>
                {
                  "AI risk assessment, adversarial ML, model security, SS 712:2025 + ISO 42001 integration."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="rs-btn has-text mt-2"
              >
                {"Explore AI Security →"}
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
    <div id="grant" className="container section-space">
      <div className="grant-banner">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h3 className="text-white">
              {
                "50% ESG / EDG grant co-funding — up to 50% of CTM consultation costs"
              }
            </h3>
            <p>
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying cybersecurity consultancy fees for eligible Singapore SMEs. ICFC manages your grant application before project commencement. Combined CTM + Cyber Essentials + ISO 27001 engagements maximise total co-funding."
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

function ContainerSection4() {
  return (
    <div className="container section-space pt-0">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-white border-0 pt-4">
          <h4>{"CSA Cyber Trust Mark — tier comparison at a glance"}</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered comparison-table">
              <thead>
                <tr>
                  <th>{"Criteria"}</th>
                  <th>{"Tier 1"}</th>
                  <th>{"Tier 2"}</th>
                  <th>{"Tier 3"}</th>
                  <th>{"Tier 4"}</th>
                  <th>{"Tier 5"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{"Domains covered"}</td>
                  <td>{"10"}</td>
                  <td>{"13"}</td>
                  <td>{"16"}</td>
                  <td>{"19"}</td>
                  <td>{"22"}</td>
                </tr>
                <tr>
                  <td>{"Assessment method"}</td>
                  <td>{"SAQ + assessor"}</td>
                  <td>{"3rd-party"}</td>
                  <td>{"Independent"}</td>
                  <td>{"Rigorous independent"}</td>
                  <td>{"Regulator-informed"}</td>
                </tr>
                <tr>
                  <td>{"Cloud Security track"}</td>
                  <td>{"–"}</td>
                  <td>{"–"}</td>
                  <td>{"✓"}</td>
                  <td>{"✓"}</td>
                  <td>{"✓"}</td>
                </tr>
                <tr>
                  <td>{"OT Security track"}</td>
                  <td>{"–"}</td>
                  <td>{"–"}</td>
                  <td>{"✓"}</td>
                  <td>{"✓"}</td>
                  <td>{"✓"}</td>
                </tr>
                <tr>
                  <td>{"AI Security track"}</td>
                  <td>{"–"}</td>
                  <td>{"–"}</td>
                  <td>{"–"}</td>
                  <td>{"✓"}</td>
                  <td>{"✓"}</td>
                </tr>
                <tr>
                  <td>{"Typical ICFC timeline"}</td>
                  <td>{"4–8 wks"}</td>
                  <td>{"6–10 wks"}</td>
                  <td>{"3–5 mo"}</td>
                  <td>{"4–7 mo"}</td>
                  <td>{"6–12 mo"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection4() {
  return (
    <section className="section-space theme-secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"Head of Technology"}</h5>
                  <p className="text-muted">{"Colocation Data Centre"}</p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  '"ICFC guided our data centre through CTM Tier 4 including Cloud Security and AI Security tracks in under 5 months. Their depth across all 22 domains is exceptional."'
                }
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <div className="d-flex gap-3">
                <div>
                  <h5>{"Group CISO"}</h5>
                  <p className="text-muted">{"Energy CII Operator"}</p>
                </div>
                <div className="ms-auto">{"★★★★★"}</div>
              </div>
              <p>
                {
                  '"CTM Tier 5 with OT Security was non-negotiable. ICFC delivered OT domain alongside EMA Cybersecurity Code in a single engagement — outstanding value."'
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
        <h3>{"中文服务 · CSA网络信任标志认证 · ICFC新加坡"}</h3>
        <p className="mt-3">
          {
            "ICFC为新加坡各类企业提供全面的CSA网络信任标志（Cyber Trust Mark）认证服务，涵盖五级网络安全准备层级、22个领域，专注三大高价值专业轨道：云安全（Cloud Security）、运营技术安全（OT Security）及人工智能安全（AI Security）。提供中英双语服务，帮助企业申请ESG补助金及EDG，最高获得50%费用补贴。"
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

function SectionSpaceSection5() {
  return (
    <section className="section-space faq-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2>{"FAQs — CSA Cyber Trust Mark"}</h2>
        </div>
        <div className="accordion" id="ctmFaq">
          <AccordionItem
            title={
              <>
                {
                  "What is the CSA Cyber Trust Mark and how does it differ from Cyber Essentials?"
                }
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "The CTM is Singapore's advanced, independently verified cybersecurity certification covering five preparedness tiers, up to 22 domains, including Cloud, OT, and AI Security specialisations. Cyber Essentials Mark is the baseline (self-assessed, 5 domains) and a prerequisite. CTM requires third-party independent assessment from Tier 2 upwards — significantly more rigorous."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Which CTM tier should my organisation target?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "CII operators target Tier 5 by end-2027. Large enterprises with cloud/OT environments should target Tier 3–4. SMEs and ICT vendors seeking procurement differentiation should start at Tier 1–2. ICFC provides free tier scoping consultation including grant optimisation."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {"Can I get ESG/EDG grant for Cyber Trust Mark certification?"}
              </>
            }
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "Yes. Enterprise Singapore's EDG covers up to 50% of qualifying cybersecurity consultancy fees for eligible SMEs. ICFC manages your grant application before project commencement. Combined CTM + Cyber Essentials + ISO 27001 engagements can combine grant claims."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"Is CTM mandatory for CII operators?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "CSA has communicated Cyber Trust Mark Level 5 as the target certification standard for all 11 CII sectors (energy, water, banking, finance, transport, healthcare, infocomm, etc.) by end-2027. Non-CII organisations face growing procurement and cyber insurance pressure."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"How does AI Security integrate with CTM?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "The new AI Security pillar (SS 712:2025) becomes mandatory for CTM Tier 4 and above. It includes AI asset inventory, model threat modelling, adversarial robustness testing, and AI incident response. ICFC provides integrated AI security audit aligned with both CTM and ISO 42001 frameworks."
            }
          </AccordionItem>
          <AccordionItem
            title={<>{"What is the typical timeline for CTM Tier 5?"}</>}
            className="accordion-item"
            defaultOpen={false}
          >
            {" "}
            {
              "For an average-sized CII organisation, the end-to-end journey from gap assessment to certification is 6–12 months, depending on existing security maturity. ICFC compresses this with parallel workstreams (Cloud, OT, AI) and grant management."
            }
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}

function ContainerSection6() {
  return (
    <div className="container section-space-bottom">
      <div
        className="text-center p-5 rounded-4"
        style={{ background: "#0a2a3b" }}
      >
        <h3 className="text-white">
          {"Start your Cyber Trust Mark journey today"}
        </h3>
        <p className="text-white-50">
          {
            "Free 30-minute CTM readiness assessment. Tier selection guidance. Cloud, OT & AI Security track scoping. ESG/EDG grant eligibility check included. CII, FinTech, Data Centre specialists."
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
        <span>{"CSA Cyber Trust Mark Singapore"}</span>
        <span>{"Cyber Trust Mark 5 tiers"}</span>
        <span>{"Cyber Trust Mark certification 2026"}</span>
        <span>{"Cyber Trust Mark audit Singapore"}</span>
        <span>{"best Cyber Trust Mark consultant SG"}</span>
        <span>{"budget-friendly CTM consultant"}</span>
        <span>{"ESG grant Cyber Trust Mark"}</span>
        <span>{"EDG grant cybersecurity certification"}</span>
        <span>{"cloud security certification Singapore"}</span>
        <span>{"OT ICS cybersecurity Singapore"}</span>
        <span>{"AI security governance Singapore"}</span>
        <span>{"SS 712 2025 AI security"}</span>
        <span>{"CII cybersecurity Cyber Trust Mark"}</span>
        <span>{"IMDA cloud security certification"}</span>
        <span>{"EMA cybersecurity code OT"}</span>
        <span>{"data centre Cyber Trust Mark"}</span>
        <span>{"SaaS PaaS cybersecurity certification SG"}</span>
        <span>{"fintech Cyber Trust Mark MAS"}</span>
        <span>{"manufacturing OT cybersecurity Singapore"}</span>
        <span>{"ISO 27001 Cyber Trust Mark integrated"}</span>
        <span>{"ISO 42001 AI security CTM"}</span>
        <span>{"ICFC Cyber Trust Mark consultant"}</span>
        <span>{"CSA网络信任标志新加坡"}</span>
        <span>{"网络信任标志认证"}</span>
        <span>{"云安全认证新加坡"}</span>
        <span>{"OT网络安全顾问"}</span>
      </div>
    </div>
  );
}
