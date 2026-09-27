import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogMasPageContent() {
  return (
    <SitePageTemplate
      route="blog_mas.html"
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
        "/assets/css/main.css",
        "/assets/css/whatsapp-float.css",
        "/styles/pages/blog-mas.css",
      ]}
    >
      <main>
        <BreadcrumbAreaSection />
        <PostboxAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="MAS TRM and ISO 27001: understanding the overlap for Singapore financial institutions"
      description="Governance, risk, incident response and third-party risk — how to build one management system that satisfies both MAS TRM and ISO/IEC 27001."
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
      className="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="rs-postbox-area section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-8 col-lg-7">
            <div className="rs-postbox-details-wrapper">
              <div className="rs-post-meta">
                <ul>
                  <li>
                    <span className="rs-meta">
                      <span className="rs-meta-thumb">
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                        />
                      </span>
                      <span className="rs-meta-content">
                        {"By "}
                        <SiteLink href="/contact-us.html">
                          {"ICFC Pte Ltd"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li>
                    <span className="rs-meta">
                      <svg width="14" height="16">
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span>{"April 2026"}</span>
                    </span>
                  </li>
                  <li>
                    <span className="rs-meta">
                      <svg width="12" height="12">
                        <path
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12Z"
                          fill="#616C74"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                        ></path>
                      </svg>
                      <span>{"12 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rs-postbox-details-content">
                <p>
                  <strong>{"Published by ICFC Pte Ltd"}</strong>
                  {" | April 2026 | 12 min read"}
                  <br />
                  <strong>{"Categories:"}</strong>
                  {
                    " ISO 27001 · MAS TRM · Financial services · Cybersecurity · Singapore compliance"
                  }
                </p>
                <hr />
                <p>
                  {
                    "If you are a compliance officer, CISO, or technology risk manager at a Singapore financial institution, you are almost certainly managing two sets of information security obligations simultaneously: the Monetary Authority of Singapore's Technology Risk Management (TRM) Guidelines, and the growing expectation — from enterprise clients, group headquarters, and your own board — that your organisation hold ISO/IEC 27001 certification."
                  }
                </p>
                <p>
                  {
                    "The good news: these two frameworks share far more common ground than most financial institutions realise. A well-structured ISO 27001 implementation addresses a significant majority of MAS TRM requirements. The practical challenge is knowing exactly where the overlap lies, where the gaps are, and how to build one management system that satisfies both — without running two parallel compliance programmes."
                  }
                </p>
                <p>{"This article provides that map."}</p>
                <div className="postbox-highlight-box">
                  <strong>{"📌 Key insight:"}</strong>
                  {
                    " MAS TRM Guidelines (supervisory expectations with legal teeth) and ISO 27001 (independent certification) share ~70-80% control overlap. A single ISMS can satisfy both with targeted supplementary controls for incident reporting thresholds, online financial services security, and MAS-specific governance.\n                                "
                  }
                </div>
                <h4>{"Understanding the two frameworks"}</h4>
                <p>
                  <strong>{"MAS TRM Guidelines"}</strong>
                  {
                    " – comprehensive risk management principles, last revised January 2021. Apply to all MAS-regulated entities (banks, insurers, payment firms). Not strictly legally binding but enforced through supervisory exams; functionally equivalent to regulation. Supplemented by legally binding MAS Cyber Hygiene Notice (May 2024)."
                  }
                </p>
                <p>
                  <strong>{"ISO/IEC 27001"}</strong>
                  {
                    " – international ISMS standard, Annex A 93 controls (2022 version). Risk-based framework, third-party accredited certification. Recognised globally by regulators and procurement panels."
                  }
                </p>
                <h4>{"Where the frameworks converge: key overlap areas"}</h4>
                <ul>
                  <li>
                    <strong>{"Governance & accountability"}</strong>
                    {
                      " – Board-level oversight (Clause 5 & TRM Sections 3-4). Both require documented security roles and management commitment."
                    }
                  </li>
                  <li>
                    <strong>{"Risk management"}</strong>
                    {
                      " – Systematic risk assessment processes (Clause 6.1 vs TRM risk identification/mitigation)."
                    }
                  </li>
                  <li>
                    <strong>{"Access control & MFA"}</strong>
                    {
                      " – Annex A.5.15–A.5.18 aligns with MAS Cyber Hygiene Notice and privileged access rules."
                    }
                  </li>
                  <li>
                    <strong>{"Vulnerability & patch management"}</strong>
                    {
                      " – Annex A.8.8 directly maps to TRM vulnerability assessment and patching expectations."
                    }
                  </li>
                  <li>
                    <strong>{"Incident management (partial)"}</strong>
                    {
                      " – Annex A.5.24–A.5.28 covers operational incident response; MAS-specific notification thresholds remain gap."
                    }
                  </li>
                  <li>
                    <strong>{"Third-party risk"}</strong>
                    {
                      " – Annex A.5.19–A.5.22 (supplier relationships) aligns with TRM's vendor due diligence and contractual requirements."
                    }
                  </li>
                </ul>
                <div className="postbox-highlight-box">
                  <strong>
                    {
                      "⚠️ Where ISO 27001 alone is not sufficient (MAS TRM Gaps)"
                    }
                  </strong>
                  <br />
                  {"\n                                    • "}
                  <strong>{"MAS incident reporting thresholds:"}</strong>
                  {
                    " Quantitative system unavailability, data breach, transaction criteria – not defined in ISO 27001."
                  }
                  <br />
                  {"\n                                    • "}
                  <strong>{"Online financial services security:"}</strong>
                  {
                    " Section 14 requirements (2FA for customers, fraud monitoring) – no direct ISO equivalent."
                  }
                  <br />
                  {"\n                                    • "}
                  <strong>{"Board-level TRM governance:"}</strong>
                  {
                    " Specific committee terms, risk appetite – ISO 27001 leadership clause is less prescriptive."
                  }
                  <br />
                  {"\n                                    • "}
                  <strong>{"Material outsourcing notification:"}</strong>
                  {
                    " Pre-notification to MAS for material outsourced functions – beyond Annex A supplier controls."
                  }
                  <br />
                  {"\n                                    • "}
                  <strong>{"Quantitative resilience targets:"}</strong>
                  {
                    " TRM sets RTO/RPO thresholds; ISO 27001 only requires defined objectives, not numerical levels.\n                                "
                  }
                </div>
                <h4>{"Three scenarios: banks, FinTechs, and vendors"}</h4>
                <p>
                  <strong>{"Banks & major FIs with ISO 27001:"}</strong>
                  {
                    " Gap analysis + explicit integration of MAS-specific controls into existing ISMS documentation."
                  }
                </p>
                <p>
                  <strong>{"FinTechs applying for MAS licence:"}</strong>
                  {
                    " Pursue ISO 27001 first – certification demonstrates auditable TRM alignment, speeds up licence review, and satisfies banking client due diligence."
                  }
                </p>
                <p>
                  <strong>{"Vendors/TPs to FIs:"}</strong>
                  {
                    " ISO 27001 is commercial necessity; widely accepted as evidence during MAS-regulated vendor due diligence."
                  }
                </p>
                <h4>{"Building one integrated system: ICFC approach"}</h4>
                <ul>
                  <li>
                    <strong>{"Dual-framework gap analysis"}</strong>
                    {" – single roadmap labelled ISO-only, TRM-only, common."}
                  </li>
                  <li>
                    <strong>{"Unified scope definition"}</strong>
                    {" – ensure all MAS-regulated systems inside ISMS scope."}
                  </li>
                  <li>
                    <strong>{"Integrated policy framework"}</strong>
                    {
                      " – cross-reference TRM sections within ISMS documents for clear traceability."
                    }
                  </li>
                  <li>
                    <strong>{"TRM supplementary controls module"}</strong>
                    {
                      " – incident reporting thresholds, online security, material outsourcing notification."
                    }
                  </li>
                  <li>
                    <strong>{"Single internal audit programme"}</strong>
                    {" – covers ISO clauses + TRM sections simultaneously."}
                  </li>
                  <li>
                    <strong>{"Examination-ready evidence packages"}</strong>
                    {
                      " – structured for ISO surveillance audits and MAS thematic reviews."
                    }
                  </li>
                </ul>
                <h4>{"What MAS examiners look for"}</h4>
                <ul>
                  <li>{"Board minutes / technology risk committee terms"}</li>
                  <li>
                    {"Complete technology risk assessments and action logs"}
                  </li>
                  <li>
                    {"Incident records including timeliness of MAS reporting"}
                  </li>
                  <li>
                    {
                      "Vendor due diligence files for all material third parties"
                    }
                  </li>
                  <li>
                    {
                      "Penetration testing schedules, findings, remediation evidence"
                    }
                  </li>
                  <li>{"DR test results and gap closure plans"}</li>
                </ul>
                <p>
                  {
                    "ISO 27001's documentation architecture naturally creates exactly this evidence trail."
                  }
                </p>
                <h4>{"MAS AI Risk Management Guidelines (coming 2026)"}</h4>
                <p>
                  {
                    "MAS released AI Risk Management Guidelines (Nov 2025 consultation) – expected finalisation 2026. Built on FEAT principles (Fairness, Ethics, Accountability, Transparency). Institutions with ISO 27001 ISMS can extend to ISO/IEC 42001 (AI Management System) efficiently rather than building standalone AI governance."
                  }
                </p>
                <h4>{"Frequently Asked Questions"}</h4>
                <p>
                  <strong>{"Does ISO 27001 satisfy MAS TRM?"}</strong>
                  {
                    " Not entirely, but covers majority. Need to address gap areas (incident thresholds, online security, material outsourcing notification, resilience targets)."
                  }
                </p>
                <p>
                  <strong>
                    {"Can I show ISO 27001 certificate to MAS examiners?"}
                  </strong>
                  {
                    " Recognised as strong evidence but does not substitute direct TRM compliance assessment."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "Our ISMS scope excludes some MAS-regulated systems – is that an issue?"
                    }
                  </strong>
                  {
                    " Yes – scope misalignment is a significant examination risk. Alignment between ISO 27001 and TRM scope must be explicit."
                  }
                </p>
                <p>
                  <strong>
                    {"How long does integrated implementation take?"}
                  </strong>
                  {
                    " Typically 4–8 months (SMEs) to 8–12 months (complex institutions). ICFC scoping assessment provides realistic timeline."
                  }
                </p>
                <h4>{"The bottom line"}</h4>
                <p>
                  {
                    "MAS TRM and ISO 27001 are complementary, not competing. A single integrated ISMS is more efficient and produces a more defensible posture for board, MAS examiners, and enterprise clients. ICFC has supported Singapore financial institutions — from licensed FinTechs to insurers — since 2014."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "Complimentary dual-framework gap assessment available as part of free initial consultation."
                    }
                  </strong>
                </p>
                <hr />
                <p>
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. Financial services practice: ISO/IEC 27001, ISO/IEC 27701, ISO/IEC 42001, ISO 22301, and MAS TRM alignment. Contact: "
                  }
                  <SiteLink href="mailto:admin@icfc.com.sg">
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p>
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. MAS Guidelines and ISO standards subject to change. Always refer to official sources."
                    }
                  </em>
                </p>
              </div>
              <div className="rs-postbox-details-social mt-40">
                <div className="rs-postbox-details-tags tagcloud">
                  <span>{"Tags:"}</span>
                  <SiteLink href="/contact-us.html">{"MAS TRM"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"ISO 27001"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"Cyber Hygiene"}</SiteLink>
                  <SiteLink href="/services.html">
                    {"Financial Services"}
                  </SiteLink>
                </div>
                <div className="rs-postbox-social">
                  <span>{"Share:"}</span>
                  <div className="rs-theme-social">
                    <SiteLink href="/contact-us.html">
                      <i className="ri-facebook-fill"></i>
                    </SiteLink>
                    <SiteLink href="/contact-us.html">
                      <i className="ri-twitter-x-fill"></i>
                    </SiteLink>
                    <SiteLink href="/contact-us.html">
                      <i className="ri-linkedin-fill"></i>
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div className="rs-postbox-comment-form">
                <h3>{"Leave a Comment"}</h3>
                <EmailForm>
                  <div className="row g-4">
                    <div className="col-xl-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        aria-label="Your Name"
                      />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                      />
                    </div>
                    <div className="col-xl-12">
                      <textarea placeholder="Write Message" defaultValue="" />
                    </div>
                    <div className="col-xl-12">
                      <button type="submit" className="rs-btn">
                        {"Post Comment"}
                      </button>
                    </div>
                  </div>
                </EmailForm>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="rs-sidebar-wrapper rs-sidebar-sticky">
              <div className="sidebar-widget mb-30">
                <h5>{"Search"}</h5>
                <div className="sidebar-search">
                  <EmailForm>
                    <div className="sidebar-search-input">
                      <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search..."
                      />
                      <button>
                        <svg width="18" height="18">
                          <path
                            d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M16.9995 17L13.1328 13.1333"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </EmailForm>
                </div>
              </div>
              <div className="sidebar-widget mb-30">
                <h5>{"Categories"}</h5>
                <ul>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"ISO 27001 "}
                      <span>{"(12)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"MAS Compliance "}
                      <span>{"(8)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/services.html">
                      {"Financial Services "}
                      <span>{"(9)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"Third-party Risk "}
                      <span>{"(5)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h5>{"Popular Tags"}</h5>
                <div className="tagcloud">
                  <SiteLink href="/contact-us.html">{"MAS TRM 2021"}</SiteLink>
                  <SiteLink href="/contact-us.html">
                    {"Cyber Hygiene Notice"}
                  </SiteLink>
                  <SiteLink href="/contact-us.html">{"ISMS"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"EDG Grant"}</SiteLink>
                  <SiteLink href="/contact-us.html">
                    {"Incident Response"}
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
