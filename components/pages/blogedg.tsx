import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogedgPageContent() {
  return (
    <SitePageTemplate
      route="blogedg.html"
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
        "/assets/css/vendor/remixicon.css",
        "/assets/css/main.css",
        "/assets/css/whatsapp-float.css",
        "/styles/pages/blogedg.css",
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
      title="How to apply for the Enterprise Singapore EDG grant for ISO certification in Singapore (2026 guide)"
      description="Step-by-step EDG grant application, up to 50-70% co-funding for ISO standards, and EDGE grant 2026 updates."
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
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335ZM9.66781 3.8335C9.39447 3.8335 9.16781 3.60683 9.16781 3.3335V1.3335C9.16781 1.06016 9.39447 0.833496 9.66781 0.833496C9.94114 0.833496 10.1678 1.06016 10.1678 1.3335V3.3335C10.1678 3.60683 9.94114 3.8335 9.66781 3.8335Z"
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
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12ZM6 0.799987C8.86799 0.799987 11.2 3.13198 11.2 6C11.2 8.86802 8.86802 11.2 6 11.2C3.13198 11.2 0.799987 8.86802 0.799987 6C0.799987 3.13198 3.13201 0.799987 6 0.799987Z"
                          fill="#616C74"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                        ></path>
                      </svg>
                      <span>{"10 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rs-postbox-details-content">
                <p>
                  <strong>{"Published by ICFC Pte Ltd"}</strong>
                  {" | April 2026 | 10 min read"}
                  <br />
                  <strong>{"Categories:"}</strong>
                  {
                    " Grant funding · ISO certification · Singapore SME · Standards adoption"
                  }
                </p>
                <hr />
                <p>
                  {
                    "ISO certification opens doors — to enterprise contracts, government procurement panels, overseas markets, and multinational supply chains. But for many Singapore SMEs, the upfront cost of consultation and certification can feel like a barrier. It doesn't have to be."
                  }
                </p>
                <p>
                  {"Enterprise Singapore's "}
                  <strong>{"Enterprise Development Grant (EDG)"}</strong>
                  {
                    " — administered under the Market Access pillar — provides co-funding for Singapore companies adopting internationally recognised ISO standards. For qualifying SMEs, up to "
                  }
                  <strong>{"50% of eligible project costs"}</strong>
                  {
                    " can be offset. For sustainability-related standards such as ISO 14001 and ISO 50001, the enhanced rate of "
                  }
                  <strong>{"up to 70% applied until 31 March 2026"}</strong>
                  {"."}
                </p>
                <div className="postbox-highlight-box">
                  <strong>{"📌 Important note:"}</strong>
                  {
                    " Grant terms, funding rates, and eligible standards are set by Enterprise Singapore and subject to change. All information accurate as of April 2026. Always verify current requirements on the Enterprise Singapore website or through a certified consultant before applying.\n                                "
                  }
                </div>
                <h4>
                  {
                    "What is the EDG grant — and what does it have to do with ISO?"
                  }
                </h4>
                <p>
                  {
                    "The Enterprise Development Grant supports Singapore companies upgrading operations, innovating, or expanding overseas across three pillars: Core Capabilities, Innovation & Productivity, and "
                  }
                  <strong>{"Market Access"}</strong>
                  {". ISO certification falls under "}
                  <strong>{"Market Access — Standards Adoption"}</strong>
                  {
                    ". The rationale: international standards like ISO 27001, ISO 9001, ISO 14001 are often prerequisites for overseas tenders, government procurement, and global supply chains."
                  }
                </p>
                <h4>{"How much funding can my company receive?"}</h4>
                <table className="table-grant">
                  <thead>
                    <tr>
                      <th>{"Company type"}</th>
                      <th>{"Standard support level"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {"SME (≤200 employees OR ≤S$100M annual turnover)"}
                      </td>
                      <td>
                        {"Up to "}
                        <strong>{"50%"}</strong>
                        {" of qualifying costs"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Non-SME (large enterprise)"}</td>
                      <td>
                        {"Up to "}
                        <strong>{"30%"}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>{"SME — sustainability (ISO 14001, ISO 50001)"}</td>
                      <td>
                        {"Up to "}
                        <strong>{"70%"}</strong>
                        {" until 31 March 2026"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  {
                    "The grant operates on a reimbursement basis — fund the project upfront, then claim. Disbursement typically takes 6–8 weeks. No fixed min/max grant amount; Enterprise Singapore assesses based on project scope and financial viability."
                  }
                </p>
                <h4>{"Which ISO standards qualify?"}</h4>
                <p>
                  <strong>{"Information security & cybersecurity:"}</strong>
                  {" ISO/IEC 27001, ISO 27032, ISO 27701, ISO 42001."}
                  <br />
                  <strong>{"Quality & operations:"}</strong>
                  {" ISO 22301, ISO 37001."}
                  <br />
                  <strong>{"Sustainability:"}</strong>
                  {" ISO 14001, ISO 50001 (enhanced rate), ISO 45001."}
                  <br />
                  <strong>{"Exclusions:"}</strong>
                  {
                    " Annual surveillance audits, recertification of existing standards, local regulatory compliance, basic commodity standards."
                  }
                </p>
                <h4>
                  {"Step-by-step: How to apply for EDG for ISO certification"}
                </h4>
                <p>
                  <strong>{"Step 1 – Confirm eligibility:"}</strong>
                  {
                    " Local equity ≥30%, financially viable, project not commenced."
                  }
                  <br />
                  <strong>
                    {"Step 2 – Select ISO standard & define scope."}
                  </strong>
                  <br />
                  <strong>
                    {"Step 3 – Engage a certified consultant (TR 43 / SS 680)."}
                  </strong>
                  <br />
                  <strong>{"Step 4 – Prepare application documents:"}</strong>
                  {
                    " ACRA profile, financial statements, detailed project proposal, consultant credentials."
                  }
                  <br />
                  <strong>
                    {"Step 5 – Submit via Business Grants Portal (CorpPass)."}
                  </strong>
                  {" Processing ~8–12 weeks."}
                  <br />
                  <strong>
                    {"Step 6 – Receive Letter of Offer, then commence project."}
                  </strong>
                  <br />
                  <strong>
                    {"Step 7 – Complete ISO project (typically 12–18 months)."}
                  </strong>
                  <br />
                  <strong>{"Step 8 – Submit claim"}</strong>
                  {
                    " with completion report, invoices, and pre-qualified auditor report."
                  }
                </p>
                <div className="postbox-highlight-box">
                  <strong>{"⚠️ Most common mistake:"}</strong>
                  {
                    " Starting any chargeable work before grant approval. Do not sign contracts, make payments, or begin gap assessments until you receive the Letter of Offer.\n                                "
                  }
                </div>
                <h4>{"What costs can I claim?"}</h4>
                <p>
                  <strong>{"1. Third-party consultancy fees"}</strong>
                  {
                    " (TR43/SS680 certified) – gap analysis, documentation, implementation."
                  }
                  <br />
                  <strong>{"2. Internal manpower costs"}</strong>
                  {
                    " – incremental salary of employees directly involved in ISO implementation."
                  }
                  <br />
                  <strong>{"3. Equipment/software"}</strong>
                  {
                    " – QMS platform, security tooling required for the standard."
                  }
                </p>
                <h4>{"The EDGE grant — what's coming in 2H 2026"}</h4>
                <p>
                  {
                    "Budget 2026 announced the merger of EDG, PSG, and MRA into a unified "
                  }
                  <strong>
                    {"EDGE – Enterprise Development and Growth for Enterprises"}
                  </strong>
                  {
                    " (launching 2H 2026). Key features: single application, open to all Singapore-registered businesses, enhanced overseas support. "
                  }
                  <strong>
                    {"Recommendation: apply now under current EDG"}
                  </strong>
                  {
                    " rather than waiting, as processing times are 8–12 weeks and EDGE's standards adoption scope is not yet fully detailed."
                  }
                </p>
                <h4>{"How ICFC helps you maximise your EDG grant"}</h4>
                <p>
                  {
                    "ICFC integrates grant management into your ISO project from eligibility assessment, proposal co-authoring, through project implementation and claim submission. We align milestones to grant conditions and coordinate with pre-qualified auditors to ensure a smooth reimbursement process."
                  }
                </p>
                <h4>{"Frequently asked questions"}</h4>
                <p>
                  <strong>
                    {"Can I apply for EDG for multiple ISO standards together?"}
                  </strong>
                  {
                    " Yes – integrated management system (IMS) projects covering two or more standards in one application are possible and often more efficient."
                  }
                </p>
                <p>
                  <strong>{"What if my EDG application is rejected?"}</strong>
                  {
                    " Resubmit after reviewing reasons. ICFC can assist with rejection analysis and resubmission."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "Can I use SkillsFuture Enterprise Credit (SFEC) alongside EDG?"
                    }
                  </strong>
                  {
                    " Yes, SFEC can stack with EDG for eligible training components such as internal auditor courses."
                  }
                </p>
                <p>
                  <strong>{"Is EDG worth it for non-SMEs?"}</strong>
                  {
                    " Yes, up to 30% of qualifying costs – significant for larger implementations."
                  }
                </p>
                <h4>{"The bottom line"}</h4>
                <p>
                  {
                    "The Enterprise Development Grant is the most accessible funding pathway for Singapore SMEs seeking ISO certification. With EDGE consolidation coming in late 2026, now is the time to apply. The process is clear: apply before starting any work, engage a certified consultant, and present a specific, outcome-focused proposal."
                  }
                </p>
                <p>
                  {
                    "ICFC offers a complimentary eligibility assessment as part of our initial consultation."
                  }
                </p>
                <hr />
                <p>
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "Singapore's ISO certification partner since 2014. We provide ISO consultation, third-party audit, training, and integrated grant management. Contact: "
                  }
                  <SiteLink href="mailto:admin@icfc.com.sg">
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p>
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only and does not constitute professional grant advice. Grant terms subject to change. Verify at enterprisesg.gov.sg."
                    }
                  </em>
                </p>
              </div>
              <div className="rs-postbox-details-social mt-40">
                <div className="rs-postbox-details-tags tagcloud">
                  <span>{"Tags:"}</span>
                  <SiteLink href="/contact-us.html">{"EDG Grant"}</SiteLink>
                  <SiteLink href="/contact-us.html">
                    {"ISO Certification"}
                  </SiteLink>
                  <SiteLink href="/contact-us.html">
                    {"Enterprise Singapore"}
                  </SiteLink>
                  <SiteLink href="/contact-us.html">{"SME Funding"}</SiteLink>
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
                      {"Grant Funding "}
                      <span>{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"ISO 27001 "}
                      <span>{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"SME Resources "}
                      <span>{"(5)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h5>{"Popular Tags"}</h5>
                <div className="tagcloud">
                  <SiteLink href="/contact-us.html">{"EDG"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"EDGE Grant"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"ISO 9001"}</SiteLink>
                  <SiteLink href="/contact-us.html">
                    {"Enterprise Singapore"}
                  </SiteLink>
                  <SiteLink href="/contact-us.html">{"Co-funding"}</SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
