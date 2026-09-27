import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogBizsafePageContent() {
  return (
    <SitePageTemplate
      route="blog_bizsafe.html"
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
        "/styles/pages/blog-bizsafe.css",
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
      title="WSH Act, CoP, bizSAFE and ISO 45001: a practical integration guide for Singapore companies across all industries"
      description="Four-layer workplace safety framework: legal foundation, approved codes, capability programme, international OHSMS standard"
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
                      <span>{"13 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rs-postbox-details-content">
                <p>
                  <strong>{"Published by ICFC Pte Ltd"}</strong>
                  {" | April 2026 | 13 min read"}
                  <br />
                  <strong>{"Categories:"}</strong>
                  {
                    " ISO 45001 · WSH Act · bizSAFE · Codes of Practice · Occupational safety · Singapore · All industries"
                  }
                </p>
                <hr />
                <p>
                  {
                    "If you run a company in Singapore — any company, in any industry — you are subject to the Workplace Safety and Health Act. Not just construction firms. Not just factories. Every employer, every occupier, every principal across every sector bears duties under the WSHA and its subsidiary legislation."
                  }
                </p>
                <p>
                  {
                    "Most business leaders are aware of this in principle. Far fewer have sat down and mapped exactly how Singapore's four-layer workplace safety framework — the WSH Act, the Approved Codes of Practice (ACOPs), the bizSAFE programme, and ISO 45001 — fits together and what it means for their specific operations."
                  }
                </p>
                <p>
                  {
                    "This article is that map. It is written for Singapore employers across all industries — manufacturing, healthcare, logistics, retail, professional services, F&B, hospitality, and beyond — who want to understand the full framework, where the layers overlap, and how to build one coherent safety management system rather than managing each element in isolation."
                  }
                </p>
                <div className="postbox-highlight-box">
                  <strong>{"📌 Key insight:"}</strong>
                  {" The WSH Act applies to "}
                  <strong>{"ALL"}</strong>
                  {
                    " Singapore workplaces — offices, restaurants, retail, healthcare, manufacturing, logistics. Director personal liability (Section 48) means senior management cannot delegate safety responsibility. Integration of ACOPs + bizSAFE + ISO 45001 is the most efficient compliance path.\n                                "
                  }
                </div>
                <h4>
                  {
                    "Layer 1 — The WSH Act: the legal foundation for every Singapore workplace"
                  }
                </h4>
                <p>
                  {
                    "The Workplace Safety and Health Act 2006, as amended most recently by Act 30 of 2024 (effective 1 January 2025), is Singapore's primary workplace safety legislation. It covers employers, employees, supervisors, contractors, occupiers, and visitors. Key obligations applicable to all employers: risk assessment (WSH RM Regulations), incident reporting (notifiable accidents to MOM), safe plant and systems of work, information/training/supervision, and "
                  }
                  <strong>
                    {
                      "personal liability for company directors under Section 48(1)"
                    }
                  </strong>
                  {"."}
                </p>
                <p>
                  <strong>{"Penalty escalation:"}</strong>
                  {
                    " As of 1 June 2024, maximum fines for safety breaches increased from S$20,000 to S$50,000 for first convictions. Corporate fines can reach S$500,000, with personal imprisonment for gross negligence."
                  }
                </p>
                <h4>
                  {
                    "Layer 2 — The Approved Codes of Practice: translating the Act"
                  }
                </h4>
                <p>
                  {
                    "WSH Council publishes 102+ ACOPs (as of January 2025). They are not legislation but carry significant legal weight — if an accident occurs, the relevant ACOP becomes the benchmark. Key cross-industry ACOPs: WSH Risk Management (2021), Chief Executives' and Board of Directors' WSH Duties (2022), Working Safely at Heights (2013), Safe Lifting Operations (2014)."
                  }
                </p>
                <h4>
                  {
                    "Layer 3 — bizSAFE: Singapore's progressive capability-building programme"
                  }
                </h4>
                <p>
                  {
                    "Five-level programme: Level 1 (CEO commitment), Level 2 (Risk Management Champion), Level 3 (RM Implementation Audit — minimum for government tenders), Level 4 (Safety Management System), Level 5/bizSAFE Star (ISO 45001 certification). bizSAFE Level 3 or higher is effectively mandatory for government procurement and major private sector contracts."
                  }
                </p>
                <h4>
                  {"Layer 4 — ISO 45001: the international OHSMS standard"}
                </h4>
                <p>
                  {
                    "ISO 45001:2018 (SS ISO 45001 in Singapore) provides a risk-based Plan-Do-Check-Act framework. Certification by SAC-accredited body grants direct entry to bizSAFE Star. For higher-risk workplaces (construction ≥S$30M, shipyards ≥200 persons), MOM requires formal SHMS audits — ISO 45001 certification satisfies this requirement."
                  }
                </p>
                <h4>
                  {
                    "Core overlap: where WSH Act meets ISO 45001 clause by clause"
                  }
                </h4>
                <table className="overlap-table">
                  <tbody>
                    <tr>
                      <th>{"WSH Requirement"}</th>
                      <th>{"ISO 45001 Clause"}</th>
                      <th>{"Integration note"}</th>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        {
                          "Risk Management Regulations (3‑year review, post‑incident trigger)"
                        }
                      </td>
                      <td>{"Clause 6.1 (HIRAC)"}</td>
                      <td>
                        {
                          "Explicitly add SG‑specific review triggers into HIRAC procedure"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        {
                          "Director liability (Section 48) + CoP on Directors' Duties"
                        }
                      </td>
                      <td>{"Clause 5 (Leadership)"}</td>
                      <td>
                        {
                          "Document board walkabouts, management reviews, OH&S reporting to board"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        {"Incident Reporting Regulations (MOM timelines)"}
                      </td>
                      <td>
                        {
                          "Clause 10.2 (Incident investigation & corrective action)"
                        }
                      </td>
                      <td>
                        {
                          "Embed MOM notification categories & deadlines into incident procedure"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>
                        {"Competence (WSHO/CSOC/work-at-height certificates)"}
                      </td>
                      <td>{"Clause 7.2 (Competence)"}</td>
                      <td>
                        {
                          "Training matrix must track MOM‑mandated registrations & expiry dates"
                        }
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>{"Worker participation (safety committees)"}</td>
                      <td>{"Clause 5.4 (Consultation & participation)"}</td>
                      <td>
                        {
                          "Toolbox meetings, safety committee minutes = ISO evidence"
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="postbox-highlight-box">
                  <strong>
                    {"⚠️ Critical Singapore-specific gaps in ISO 45001:"}
                  </strong>
                  <br />
                  {
                    "\n                                    • MOM incident notification timelines & report formats (not defined in ISO)"
                  }
                  <br />
                  {
                    "\n                                    • Three‑year risk assessment review cycle & post‑incident review trigger"
                  }
                  <br />
                  {
                    "\n                                    • Registration of WSH Officers (WSHO), WSH Coordinators (WSHC), CSOC for construction"
                  }
                  <br />
                  {
                    "\n                                    • Mandatory SHMS audit thresholds (construction ≥S$30M, shipyards ≥200 persons)\n                                "
                  }
                </div>
                <h4>{"Industry‑specific considerations"}</h4>
                <p>
                  <strong>{"Manufacturing:"}</strong>
                  {
                    " WSH (Factories) Regulations, machinery guarding, noise control. ACOPs: machinery safety (SS ISO 12100:2024), noise control (CP 99)."
                  }
                </p>
                <p>
                  <strong>{"Healthcare:"}</strong>
                  {
                    " Patient handling, sharps injuries, biological hazards, psychosocial risks. WSH Council healthcare guidelines."
                  }
                </p>
                <p>
                  <strong>{"Logistics:"}</strong>
                  {
                    " Forklift safety, work at heights (racking), loading docks, pedestrian‑vehicle separation."
                  }
                </p>
                <p>
                  <strong>{"F&B/Hospitality:"}</strong>
                  {
                    " Slip resistance (SS 485:2022), heat stress (WSHC advisory March 2026), manual handling."
                  }
                </p>
                <p>
                  <strong>{"Professional services/offices:"}</strong>
                  {
                    " Ergonomics, psychosocial hazards (stress, workload), fire evacuation, remote work safety."
                  }
                </p>
                <h4>
                  {
                    "Strategic decision: which level is right for your organisation?"
                  }
                </h4>
                <ul>
                  <li>
                    <strong>{"Start with bizSAFE Level 3:"}</strong>
                    {
                      " Smaller orgs (\u003c30 staff), need govt tenders, lower risk profile."
                    }
                  </li>
                  <li>
                    <strong>{"Pursue bizSAFE Level 4 → ISO 45001:"}</strong>
                    {
                      " Medium‑large orgs (30‑200 staff), higher risk industry, approaching SHMS threshold."
                    }
                  </li>
                  <li>
                    <strong>{"ISO 45001 directly:"}</strong>
                    {
                      " Already on ISO 9001/14001, international clients require ISO 45001, SHMS audit threshold applies."
                    }
                  </li>
                </ul>
                <h4>
                  {"Building the integrated system: ICFC practical approach"}
                </h4>
                <ul>
                  <li>
                    <strong>{"Step 1:"}</strong>
                    {
                      " Legal register + ACOP identification (list all applicable WSHA provisions & sector ACOPs)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 2:"}</strong>
                    {
                      " HIRAC covering all work activities (include 3‑year review & post‑incident triggers)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 3:"}</strong>
                    {
                      " Incident management with MOM notification built in (categories, timelines, report formats)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 4:"}</strong>
                    {
                      " Competence framework with Singapore‑specific roles (WSHO, WSHC, CSOC, etc.)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 5:"}</strong>
                    {
                      " Director & management engagement documentation (CoP on Directors' Duties alignment)"
                    }
                  </li>
                  <li>
                    <strong>{"Step 6:"}</strong>
                    {
                      " Internal audit programme covering ISO 45001 clauses + WSH Act/ACOP obligations"
                    }
                  </li>
                </ul>
                <h4>{"Frequently asked questions"}</h4>
                <p>
                  <strong>
                    {
                      "Does my company need to be in a high‑risk industry for the WSH Act to apply?"
                    }
                  </strong>
                  {
                    " No. It applies to all workplaces — offices, shops, restaurants, clinics. The extent scales with risk, but no employer is exempt."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "We are not in construction or manufacturing. Do we need bizSAFE?"
                    }
                  </strong>
                  {
                    " Not legally mandatory, but commercially necessary for government contracts and large enterprise clients. Contact ICFC to confirm your specific situation."
                  }
                </p>
                <p>
                  <strong>
                    {
                      "Can we skip straight to ISO 45001 without bizSAFE levels 1‑4?"
                    }
                  </strong>
                  {
                    " Yes. ISO 45001 certification provides direct entry to bizSAFE Star."
                  }
                </p>
                <p>
                  <strong>
                    {"What is the difference between an ACOP and a guideline?"}
                  </strong>
                  {
                    ' ACOP is formally approved by MOM and can be cited in court as benchmark for "reasonably practicable". Guidelines do not carry the same legal weight.'
                  }
                </p>
                <p>
                  <strong>
                    {"How does director personal liability work?"}
                  </strong>
                  {
                    " Under Section 48(1), a director may be convicted if they did not exercise due diligence. Demonstrating engagement consistent with the CoP on Directors' WSH Duties (2022) is the primary defence."
                  }
                </p>
                <h4>{"The bottom line"}</h4>
                <p>
                  {
                    "Singapore's workplace safety framework is a coherent, multi‑layered system. The Act creates legal obligations. ACOPs translate into industry‑specific standards. bizSAFE provides a progressive pathway. ISO 45001 delivers the internationally recognised management system that brings it all together."
                  }
                </p>
                <p>
                  {
                    "ICFC offers a complimentary WSH Act and ISO 45001 gap assessment as part of our free initial consultation — for companies of all sizes and across all sectors."
                  }
                </p>
                <hr />
                <p>
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. Occupational health & safety practice: ISO 45001, integrated management systems (ISO 9001+14001+45001), bizSAFE advisory, WSH Act alignment. Contact: "
                  }
                  <SiteLink href="mailto:admin@icfc.com.sg">
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p>
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. WSH Act obligations, penalties, and ACOP content subject to change. Refer to official MOM and WSH Council sources."
                    }
                  </em>
                </p>
              </div>
              <div className="rs-postbox-details-social mt-40">
                <div className="rs-postbox-details-tags tagcloud">
                  <span>{"Tags:"}</span>
                  <SiteLink href="/contact-us.html">{"WSH Act"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"ISO 45001"}</SiteLink>
                  <SiteLink href="/contact-us.html">{"bizSAFE"}</SiteLink>
                  <SiteLink href="/contact-us.html">
                    {"Workplace Safety"}
                  </SiteLink>
                  <SiteLink href="/contact-us.html">{"ACOP"}</SiteLink>
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
                      {"ISO 45001 "}
                      <span>{"(10)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"WSH Act "}
                      <span>{"(7)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"bizSAFE "}
                      <span>{"(5)"}</span>
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/contact-us.html">
                      {"Workplace Safety "}
                      <span>{"(12)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="sidebar-widget">
                <h5>{"Popular Tags"}</h5>
                <div className="tagcloud">
                  <SiteLink href="/contact-us.html">
                    {"ISO 45001:2018"}
                  </SiteLink>
                  <SiteLink href="/contact-us.html">
                    {"bizSAFE Level 3"}
                  </SiteLink>
                  <SiteLink href="/services.html">{"SHMS Audit"}</SiteLink>
                  <SiteLink href="/contact-us.html">
                    {"Director Liability"}
                  </SiteLink>
                  <SiteLink href="/contact-us.html">
                    {"Risk Assessment"}
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
