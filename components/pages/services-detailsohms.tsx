import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsohmsPageContent() {
  return (
    <SitePageTemplate
      route="services-detailsohms.html"
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
        "/styles/pages/services-detailsohms.css",
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
      title="ISO 45001:2018 · SS ISO 45001 · OHSMS · WSH Act · Singapore"
      description="Occupational Health & Safety — ISO 45001 certified, WSH Act aligned, bizSAFE STAR pathway. MOM SHMS mandatory audit satisfied | SFEC/PSG funding available"
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
                  alt="ISO 45001 OHSMS"
                />
              </div>
              <p className="mt-30">
                {
                  "ISO 45001:2018 (SS ISO 45001) is the world's leading Occupational Health and Safety Management System standard — with over 540,000 certificates issued globally. In Singapore, it is the most strategic safety investment a business can make: it satisfies the MOM SHMS mandatory audit requirement, provides direct fast-track entry to bizSAFE STAR (bypassing Levels 1–4), and aligns your entire safety governance with Singapore's WSH Act and 102 Approved Codes of Practice. ICFC delivers OHSMS audit, consultation, and training with SkillsFuture and PSG funding support managed in every engagement."
                }
              </p>
              <div className="iso-stats-grid">
                <div className="iso-stat-card">
                  <div className="iso-stat-number">{"540K+"}</div>
                  <div>{"Certificates issued globally"}</div>
                </div>
                <div className="iso-stat-card">
                  <div className="iso-stat-number">{"★"}</div>
                  <div>{"bizSAFE STAR direct pathway"}</div>
                  <small>{"bypass Levels 1–4"}</small>
                </div>
                <div className="iso-stat-card">
                  <div className="iso-stat-number">{"MOM"}</div>
                  <div>{"SHMS mandatory audit satisfied"}</div>
                </div>
                <div className="iso-stat-card">
                  <div className="iso-stat-number">{"102"}</div>
                  <div>{"WSH Approved CoPs aligned"}</div>
                </div>
                <div className="iso-stat-card">
                  <div className="iso-stat-number">{"25+"}</div>
                  <div>{"Industries served"}</div>
                </div>
                <div className="iso-stat-card">
                  <div className="iso-stat-number">{"90%"}</div>
                  <div>{"SFEC training funding"}</div>
                </div>
              </div>
              <div className="bizsafe-pathway">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <h3>
                      {
                        "⭐ ISO 45001 = bizSAFE STAR — the single most strategic safety decision"
                      }
                    </h3>
                    <p>
                      {
                        "Fast track ISO 45001 certification bypasses bizSAFE Levels 1, 2, 3, and 4 — direct entry to bizSAFE STAR. Satisfies MOM's mandatory SHMS audit for construction (≥S$30M), shipyards (≥200 workers), and metalworking factories. Opens government, GLC, and enterprise procurement doors. "
                      }
                      <strong>
                        {
                          "Risk: If ISO 45001 expires, bizSAFE STAR status immediately becomes invalid — renewal planning is critical."
                        }
                      </strong>
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <div className="bg-white p-3 rounded-4">
                      <div className="d-flex justify-content-between flex-wrap">
                        <span>{"CEO Workshop"}</span>
                        <span>{"→"}</span>
                        <span>{"RM Champion"}</span>
                        <span>{"→"}</span>
                        <span>{"RM Audit"}</span>
                        <span>{"→"}</span>
                        <span>{"WSHMS Plan"}</span>
                        <span>{"→"}</span>
                        <span className="fw-bold text-success">
                          {"bizSAFE STAR"}
                        </span>
                      </div>
                      <div className="text-center mt-2">
                        <span
                          className="badge bg-success"
                          style={{ background: "#AB052D" }}
                        >
                          {"ISO 45001 direct entry ↗"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-10">
                {
                  "What is ISO 45001 OHSMS? Singapore's occupational safety certification — the strategic case for ISO 45001"
                }
              </h3>
              <p>
                {
                  "For Singaporean businesses, the journey to ISO 45001 certification is a process of unification — unifying global best practice with the stringent legal obligations of the WSH Act, transforming compliance from a reactive checklist into a proactive, integrated system. It aligns the goal of a robust internal OHSMS with the powerful commercial imperative of achieving bizSAFE STAR status. SS ISO 45001 is Singapore's national standard — a direct adoption of ISO 45001:2018 replacing SS 506 Part 1 (based on OHSAS 18001)."
                }
              </p>
              <div className="row g-4 mt-4 mb-5">
                <div className="col-md-4">
                  <div className="pillar-card">
                    <span style={{ fontSize: "42px" }}>{"🔍"}</span>
                    <h4 className="mt-3">{"OHSMS Audit"}</h4>
                    <p>
                      {
                        "Gap analysis · MOM SHMS mandatory audit · Pre-certification readiness · Surveillance/renewal · Internal audit co-sourcing."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="btn btn-outline-primary btn-sm mt-2"
                    >
                      {"Explore audit →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pillar-card">
                    <span style={{ fontSize: "42px" }}>{"🦺"}</span>
                    <h4 className="mt-3">{"OHSMS Consultation"}</h4>
                    <p>
                      {
                        "Full implementation · bizSAFE STAR upgrade · Integrated IMS (45001+9001+14001) · HIRAC development · Incident investigation · Psychosocial risk."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="btn btn-outline-primary btn-sm mt-2"
                    >
                      {"Explore consulting →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pillar-card">
                    <span style={{ fontSize: "42px" }}>{"🎓"}</span>
                    <h4 className="mt-3">{"WSH Training"}</h4>
                    <p>
                      {
                        "CQI/IRCA lead auditor · Internal auditor · Implementation practitioner · Board governance · Worker awareness (multi-language)."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="btn btn-outline-primary btn-sm mt-2"
                    >
                      {"Explore training →"}
                    </SiteLink>
                  </div>
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {"Singapore WSH legal framework — ISO 45001 alignment"}
              </h3>
              <div className="regulatory-grid">
                <div className="reg-item">
                  <strong>{"📋 WSH Act (Cap. 354A)"}</strong>
                  <br />
                  {
                    "Employers must ensure workplace safety as far as reasonably practicable. Risk assessments mandatory for all work activities."
                  }
                </div>
                <div className="reg-item">
                  <strong>{"⚠️ MOM mandatory SHMS audit"}</strong>
                  <br />
                  {
                    "Mandatory for: construction ≥S$30M; shipyards ≥200 workers; metalworking/pharma factories above thresholds. ISO 45001 satisfies requirement."
                  }
                </div>
                <div className="reg-item">
                  <strong>{"📊 WSH (Risk Management) Regulations"}</strong>
                  <br />
                  {
                    "All employers must conduct risk assessments, review every 3 years or after incidents, and document controls."
                  }
                </div>
                <div className="reg-item">
                  <strong>{"📞 WSH (Incident Reporting) Regulations"}</strong>
                  <br />
                  {
                    "Notify MOM within 10 days for injuries causing >3-day MC; immediately for fatal/dangerous occurrences."
                  }
                </div>
                <div className="reg-item">
                  <strong>{"📖 WSH Approved Codes of Practice (ACOPs)"}</strong>
                  <br />
                  {
                    "102 ACOPs effective from January 2025 providing sector-specific safety guidance — court-admissible as standard of care."
                  }
                </div>
                <div className="reg-item">
                  <strong>{"⭐ bizSAFE programme (WSHC)"}</strong>
                  <br />
                  {
                    "Government and enterprise procurement requires bizSAFE Level 3 or above. bizSAFE STAR requires ISO 45001 + RM Audit Report."
                  }
                </div>
                <div className="reg-item">
                  <strong>{"🔥 SCDF Fire Safety Act"}</strong>
                  <br />
                  {
                    "Fire safety requirements for workplaces — emergency procedures, fire warden appointments, evacuation plans."
                  }
                </div>
                <div className="reg-item">
                  <strong>{"🌿 NEA environmental-health interface"}</strong>
                  <br />
                  {
                    "Workplace air quality, noise limits, hazardous chemicals — overlapping occupational and environmental obligations."
                  }
                </div>
              </div>
              <div className="grant-banner mb-5">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3 className="text-white">
                      {
                        "💰 SFEC & PSG funding available for ISO 45001 training and OHSMS software"
                      }
                    </h3>
                    <p>
                      {
                        "SkillsFuture Enterprise Credit (SFEC) covers up to 90% of qualifying ISO 45001 training costs for eligible employers (up to S$10,000). The Productivity Solutions Grant (PSG) may support pre-approved OHSMS management software. Integrated IMS projects (ISO 45001 + ISO 9001 or ISO 14001) may qualify for EDG co-funding on the non-basic standards components."
                      }
                    </p>
                    <SiteLink
                      href="/contact-us.html"
                      className="btn btn-light mt-2"
                    >
                      {"Check funding eligibility →"}
                    </SiteLink>
                  </div>
                  <div className="col-lg-4 text-center">
                    <i
                      className="ri-government-line"
                      style={{
                        fontSize: "60px",
                        opacity: "0.5",
                        color: "white",
                      }}
                    ></i>
                  </div>
                </div>
              </div>
              <h3 className="mt-40 mb-20">
                {"ICFC's OHSMS audit process — HIRAC to bizSAFE STAR"}
              </h3>
              <div className="row g-4 text-center mb-5">
                <div className="col-md-2">
                  <div className="p-3 bg-light rounded">
                    <div className="step-circle d-inline-flex mx-auto">
                      {"01"}
                    </div>
                    <p className="mb-0 mt-2">{"Free briefing"}</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="p-3 bg-light rounded">
                    <div className="step-circle d-inline-flex mx-auto">
                      {"02"}
                    </div>
                    <p className="mb-0 mt-2">{"HIRAC review"}</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="p-3 bg-light rounded">
                    <div className="step-circle d-inline-flex mx-auto">
                      {"03"}
                    </div>
                    <p className="mb-0 mt-2">{"Gap analysis"}</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="p-3 bg-light rounded">
                    <div className="step-circle d-inline-flex mx-auto">
                      {"04"}
                    </div>
                    <p className="mb-0 mt-2">{"Funding setup"}</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="p-3 bg-light rounded">
                    <div className="step-circle d-inline-flex mx-auto">
                      {"05"}
                    </div>
                    <p className="mb-0 mt-2">{"Pre-cert audit"}</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="p-3 bg-light rounded">
                    <div className="step-circle d-inline-flex mx-auto">
                      {"06"}
                    </div>
                    <p className="mb-0 mt-2">{"Certification"}</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-40 mb-20">{"Client outcomes · Singapore"}</h3>
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <div className="testimonial-card">
                    <p>
                      {
                        '"ICFC helped us achieve ISO 45001 certification and bizSAFE STAR in under six months — starting from bizSAFE Level 3. We submitted our RM Implementation Audit Report on the same day as ISO certificate — both approved within the week. This directly opened a S$45M government tender."'
                      }
                    </p>
                    <strong>{"— PM, Building contractor, Singapore"}</strong>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial-card">
                    <p>
                      {
                        '"Integrated ISO 9001 + ISO 45001 + ISO 14001 IMS in one engagement. SFEC covered training costs, EDG grant covered 50% of consultation fees. Incident rate dropped 60% in first year."'
                      }
                    </p>
                    <strong>
                      {"— OD, Precision engineering SME, Singapore"}
                    </strong>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial-card">
                    <p>
                      {
                        '"As a shipyard operator, our SHMS audit by MOM was a legal requirement. ICFC\'s ISO 45001 implementation satisfied this requirement through SAC-accredited certification — and simultaneously gave us bizSAFE STAR."'
                      }
                    </p>
                    <strong>
                      {"— HSE manager, Shipyard operator, Singapore"}
                    </strong>
                  </div>
                </div>
              </div>
              <h3 className="rs-services-details-title mb-20 mt-40">
                {"Frequently asked questions — ISO 45001 OHSMS"}
              </h3>
              <div className="accordion" id="faqAccordion">
                <AccordionItem
                  title={
                    <>{"Does ISO 45001 automatically give us bizSAFE STAR?"}</>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Not automatically — but it is the most direct route. With effect from 1 April 2021, companies certified to ISO 45001 (SAC-accredited) need to submit the Risk Management Implementation Audit Report along with the certification to apply or renew bizSAFE STAR. ICFC prepares the RM Implementation Audit Report as part of the pre-certification readiness audit — so both applications can be submitted simultaneously on certification day. Critically, if your ISO 45001 certificate expires or is revoked, bizSAFE STAR status immediately becomes invalid."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>{"Is ISO 45001 mandatory for Singapore companies?"}</>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "ISO 45001 itself is not universally mandatory — but it is effectively mandatory for specific circumstances. Legally mandatory: construction worksites (≥S$30M contract sum), shipyards (≥200 workers), and qualifying metalworking, petrochemical, and pharmaceutical factories must conduct a formal SHMS audit — and ISO 45001 from a SAC-accredited CB satisfies this requirement. Commercially mandatory: any company tendering for Singapore government or GLC contracts must hold at least bizSAFE Level 3 — and many now require bizSAFE STAR, which requires ISO 45001."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"What funding is available for ISO 45001 in Singapore?"}
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "(1) SkillsFuture Enterprise Credit (SFEC) — covers up to 90% of qualifying ISO 45001 training costs for eligible employers (up to S$10,000); (2) Productivity Solutions Grant (PSG) — may support pre-approved OHSMS management software; (3) EDG/MASA grant — if you pursue ISO 45001 as part of an integrated IMS with ISO 9001 or ISO 14001, the non-basic standards components may qualify for EDG co-funding of up to 50%. ICFC conducts a free funding assessment before any engagement begins."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "We already have bizSAFE Level 3. What do we need for ISO 45001?"
                      }
                    </>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "bizSAFE Level 3 is excellent preparation for ISO 45001. Your existing Risk Management Plan, which was developed for Level 3, forms the foundation of your ISO 45001 HIRAC process. ICFC's transition programme takes your Level 3 RM Plan and extends it to full ISO 45001 compliance — adding policy, objectives, operational controls, permit-to-work systems, emergency preparedness, incident investigation, internal audit, and management review. Typically 3–5 months to certification."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>{"When will the new edition of ISO 45001 be released?"}</>
                  }
                  className="accordion-item"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "ISO 45001 is currently undergoing revision. While ISO has not announced a firm publication date, the revision process is ongoing. ICFC closely monitors developments from ISO and SAC. For organisations currently certified or in the process of certification, we recommend proceeding with ISO 45001:2018 — the current edition — as any new edition will come with a transition window (typically 3 years)."
                  }
                </AccordionItem>
              </div>
              <div className="bg-soft-green p-5 rounded-4 mt-40 text-center">
                <h3>
                  {
                    "新加坡ISO 45001职业健康与安全管理体系（OHSMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p className="mt-3">
                  {
                    "ICFC提供新加坡ISO 45001职业健康与安全管理体系全程认证服务，包括危害识别与风险评估（HIRAC）、WSH法案及102项《认可操作规程》合规、bizSAFE星级认证直通路径（绕过1–4级）、MOM强制性安全健康管理体系（SHMS）审核及员工培训，涵盖建筑、船厂、制造、物流等25大行业。SFEC资助可支付高达90%培训费用。提供中英双语服务。"
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
                className="text-center p-5 rounded-4 mt-40"
                style={{
                  background: "linear-gradient(135deg, #f0f4f1, #ffffff)",
                }}
              >
                <h3>{"Start your ISO 45001 OHSMS journey today"}</h3>
                <p className="mb-3">
                  {
                    "Free 30-minute safety assessment. Honest gap analysis against ISO 45001 and WSH Act. bizSAFE STAR pathway review. SFEC/PSG funding check. No obligation."
                  }
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <SiteLink href="/contact-us.html" className="btn btn-primary">
                    {"Book free OHSMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-outline-primary"
                  >
                    {"Check funding eligibility →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="btn btn-outline-primary"
                  >
                    {"bizSAFE STAR pathway →"}
                  </SiteLink>
                </div>
              </div>
              <div className="mt-40 text-muted small">
                <strong>{"Page optimised for:"}</strong>
                {
                  " ISO 45001 Singapore 2026 · bizSAFE STAR ISO 45001 · SHMS audit MOM Singapore · WSH Act compliance · best OHSMS consultant SG · affordable ISO 45001 · budget OHSMS certification · SFEC ISO 45001 · PSG OHSMS Singapore · 新加坡ISO 45001职业健康安全管理"
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
                    "ISO 45001 OHSMS certification — WSH Act aligned, bizSAFE STAR ready. "
                  }
                  <SiteLink href="/contact-us.html">
                    {"Start your safety management journey today →"}
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
