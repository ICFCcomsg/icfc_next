import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsohmsPageContent() {
  return (
    <SitePageTemplate route="services-detailsohms">
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
    />
  );
}

function ServicesAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 45001 OHSMS"
                  className="align-middle max-w-full w-full rounded-md"
                />
              </div>
              <p className="mt-7.5 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "ISO 45001:2018 (SS ISO 45001) is the world's leading Occupational Health and Safety Management System standard — with over 540,000 certificates issued globally. In Singapore, it is the most strategic safety investment a business can make: it satisfies the MOM SHMS mandatory audit requirement, provides direct fast-track entry to bizSAFE STAR (bypassing Levels 1–4), and aligns your entire safety governance with Singapore's WSH Act and 102 Approved Codes of Practice. ICFC delivers OHSMS audit, consultation, and training with SkillsFuture and PSG funding support managed in every engagement."
                }
              </p>
              <div className="mt-10 mr-0 mb-10 ml-0 flex flex-wrap gap-6.25 justify-center">
                <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-32.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="mb-2 text-[44px] font-extrabold text-[#AB052D] leading-none">
                    {"540K+"}
                  </div>
                  <div>{"Certificates issued globally"}</div>
                </div>
                <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-32.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="mb-2 text-[44px] font-extrabold text-[#AB052D] leading-none">
                    {"★"}
                  </div>
                  <div>{"bizSAFE STAR direct pathway"}</div>
                  <small className="text-[.875em]">{"bypass Levels 1–4"}</small>
                </div>
                <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-32.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="mb-2 text-[44px] font-extrabold text-[#AB052D] leading-none">
                    {"MOM"}
                  </div>
                  <div>{"SHMS mandatory audit satisfied"}</div>
                </div>
                <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-32.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="mb-2 text-[44px] font-extrabold text-[#AB052D] leading-none">
                    {"102"}
                  </div>
                  <div>{"WSH Approved CoPs aligned"}</div>
                </div>
                <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-32.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="mb-2 text-[44px] font-extrabold text-[#AB052D] leading-none">
                    {"25+"}
                  </div>
                  <div>{"Industries served"}</div>
                </div>
                <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#f8f9fc] rounded-[20px] text-center flex-1 min-w-32.5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="mb-2 text-[44px] font-extrabold text-[#AB052D] leading-none">
                    {"90%"}
                  </div>
                  <div>{"SFEC training funding"}</div>
                </div>
              </div>
              <div className="mt-7.5 mr-0 mb-7.5 ml-0 pt-7.5 pr-7.5 pb-7.5 pl-7.5 [background:#f0f4f1] rounded-4xl">
                <div className="flex flex-wrap mt-0 -mr-6 -ml-6 items-center!">
                  <div className="shrink-0 w-[58.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                    <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                      {
                        "⭐ ISO 45001 = bizSAFE STAR — the single most strategic safety decision"
                      }
                    </h3>
                    <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        "Fast track ISO 45001 certification bypasses bizSAFE Levels 1, 2, 3, and 4 — direct entry to bizSAFE STAR. Satisfies MOM's mandatory SHMS audit for construction (≥S$30M), shipyards (≥200 workers), and metalworking factories. Opens government, GLC, and enterprise procurement doors. "
                      }
                      <strong className="[font-weight:bolder]">
                        {
                          "Risk: If ISO 45001 expires, bizSAFE STAR status immediately becomes invalid — renewal planning is critical."
                        }
                      </strong>
                    </p>
                  </div>
                  <div className="shrink-0 w-[41.66666667%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                    <div className="pt-4! pr-4! pb-4! pl-4! bg-[rgba(255,255,255,1)]! rounded-2xl!">
                      <div className="flex! flex-wrap! justify-between!">
                        <span className="">{"CEO Workshop"}</span>
                        <span className="">{"→"}</span>
                        <span className="">{"RM Champion"}</span>
                        <span className="">{"→"}</span>
                        <span className="">{"RM Audit"}</span>
                        <span className="">{"→"}</span>
                        <span className="">{"WSHMS Plan"}</span>
                        <span className="">{"→"}</span>
                        <span className="font-bold! text-[rgba(25,135,84,1)]!">
                          {"bizSAFE STAR"}
                        </span>
                      </div>
                      <div className="mt-2! text-center!">
                        <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] font-bold leading-none text-white text-center whitespace-nowrap align-baseline rounded-md bg-[rgba(25,135,84,1)]! [background:#AB052D]!">
                          {"ISO 45001 direct entry ↗"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-0 mb-2.5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "What is ISO 45001 OHSMS? Singapore's occupational safety certification — the strategic case for ISO 45001"
                }
              </h3>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "For Singaporean businesses, the journey to ISO 45001 certification is a process of unification — unifying global best practice with the stringent legal obligations of the WSH Act, transforming compliance from a reactive checklist into a proactive, integrated system. It aligns the goal of a robust internal OHSMS with the powerful commercial imperative of achieving bizSAFE STAR status. SS ISO 45001 is Singapore's national standard — a direct adoption of ISO 45001:2018 replacing SS 506 Part 1 (based on OHSAS 18001)."
                }
              </p>
              <div className="flex flex-wrap mt-6! -mr-6 -ml-6 mb-1.25!">
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-8 pr-6 pb-8 pl-6 [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:transform-[translateY(-8px)] [transition:all_0.3s] motion-reduce:transition-none">
                    <span className="text-[42px]!">{"🔍"}</span>
                    <h4 className="mt-4! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"OHSMS Audit"}
                    </h4>
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        "Gap analysis · MOM SHMS mandatory audit · Pre-certification readiness · Surveillance/renewal · Internal audit co-sourcing."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#AB052D] [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:2px_solid_#AB052D] rounded-lg bg-transparent hover:text-white hover:bg-[#0d6efd] hover:border-[#0d6efd] focus-visible:text-white focus-visible:bg-[#0d6efd] focus-visible:border-[#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] active:text-white active:bg-[#0d6efd] active:border-[#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] mt-2! focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] items-center justify-center gap-2.5 hover:[background:#AB052D] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Explore audit →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-8 pr-6 pb-8 pl-6 [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:transform-[translateY(-8px)] [transition:all_0.3s] motion-reduce:transition-none">
                    <span className="text-[42px]!">{"🦺"}</span>
                    <h4 className="mt-4! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"OHSMS Consultation"}
                    </h4>
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        "Full implementation · bizSAFE STAR upgrade · Integrated IMS (45001+9001+14001) · HIRAC development · Incident investigation · Psychosocial risk."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#AB052D] [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:2px_solid_#AB052D] rounded-lg bg-transparent hover:text-white hover:bg-[#0d6efd] hover:border-[#0d6efd] focus-visible:text-white focus-visible:bg-[#0d6efd] focus-visible:border-[#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] active:text-white active:bg-[#0d6efd] active:border-[#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] mt-2! focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] items-center justify-center gap-2.5 hover:[background:#AB052D] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Explore consulting →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-8 pr-6 pb-8 pl-6 [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:transform-[translateY(-8px)] [transition:all_0.3s] motion-reduce:transition-none">
                    <span className="text-[42px]!">{"🎓"}</span>
                    <h4 className="mt-4! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"WSH Training"}
                    </h4>
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        "CQI/IRCA lead auditor · Internal auditor · Implementation practitioner · Board governance · Worker awareness (multi-language)."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#AB052D] [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:2px_solid_#AB052D] rounded-lg bg-transparent hover:text-white hover:bg-[#0d6efd] hover:border-[#0d6efd] focus-visible:text-white focus-visible:bg-[#0d6efd] focus-visible:border-[#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] active:text-white active:bg-[#0d6efd] active:border-[#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] mt-2! focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] items-center justify-center gap-2.5 hover:[background:#AB052D] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Explore training →"}
                    </SiteLink>
                  </div>
                </div>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Singapore WSH legal framework — ISO 45001 alignment"}
              </h3>
              <div className="mt-7.5 mr-0 mb-7.5 ml-0 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
                <div className="pt-3.5 pr-4.5 pb-3.5 pl-4.5 [background:#fff] [border-left:4px_solid_#AB052D] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong className="[font-weight:bolder]">
                    {"📋 WSH Act (Cap. 354A)"}
                  </strong>
                  <br />
                  {
                    "Employers must ensure workplace safety as far as reasonably practicable. Risk assessments mandatory for all work activities."
                  }
                </div>
                <div className="pt-3.5 pr-4.5 pb-3.5 pl-4.5 [background:#fff] [border-left:4px_solid_#AB052D] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong className="[font-weight:bolder]">
                    {"⚠️ MOM mandatory SHMS audit"}
                  </strong>
                  <br />
                  {
                    "Mandatory for: construction ≥S$30M; shipyards ≥200 workers; metalworking/pharma factories above thresholds. ISO 45001 satisfies requirement."
                  }
                </div>
                <div className="pt-3.5 pr-4.5 pb-3.5 pl-4.5 [background:#fff] [border-left:4px_solid_#AB052D] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong className="[font-weight:bolder]">
                    {"📊 WSH (Risk Management) Regulations"}
                  </strong>
                  <br />
                  {
                    "All employers must conduct risk assessments, review every 3 years or after incidents, and document controls."
                  }
                </div>
                <div className="pt-3.5 pr-4.5 pb-3.5 pl-4.5 [background:#fff] [border-left:4px_solid_#AB052D] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong className="[font-weight:bolder]">
                    {"📞 WSH (Incident Reporting) Regulations"}
                  </strong>
                  <br />
                  {
                    "Notify MOM within 10 days for injuries causing >3-day MC; immediately for fatal/dangerous occurrences."
                  }
                </div>
                <div className="pt-3.5 pr-4.5 pb-3.5 pl-4.5 [background:#fff] [border-left:4px_solid_#AB052D] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong className="[font-weight:bolder]">
                    {"📖 WSH Approved Codes of Practice (ACOPs)"}
                  </strong>
                  <br />
                  {
                    "102 ACOPs effective from January 2025 providing sector-specific safety guidance — court-admissible as standard of care."
                  }
                </div>
                <div className="pt-3.5 pr-4.5 pb-3.5 pl-4.5 [background:#fff] [border-left:4px_solid_#AB052D] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong className="[font-weight:bolder]">
                    {"⭐ bizSAFE programme (WSHC)"}
                  </strong>
                  <br />
                  {
                    "Government and enterprise procurement requires bizSAFE Level 3 or above. bizSAFE STAR requires ISO 45001 + RM Audit Report."
                  }
                </div>
                <div className="pt-3.5 pr-4.5 pb-3.5 pl-4.5 [background:#fff] [border-left:4px_solid_#AB052D] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong className="[font-weight:bolder]">
                    {"🔥 SCDF Fire Safety Act"}
                  </strong>
                  <br />
                  {
                    "Fire safety requirements for workplaces — emergency procedures, fire warden appointments, evacuation plans."
                  }
                </div>
                <div className="pt-3.5 pr-4.5 pb-3.5 pl-4.5 [background:#fff] [border-left:4px_solid_#AB052D] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong className="[font-weight:bolder]">
                    {"🌿 NEA environmental-health interface"}
                  </strong>
                  <br />
                  {
                    "Workplace air quality, noise limits, hazardous chemicals — overlapping occupational and environmental obligations."
                  }
                </div>
              </div>
              <div className="mb-1.25! pt-10 pr-10 pb-10 pl-10 [background:linear-gradient(135deg,#1a3a2a_0%,#0e2a1c_100%)] rounded-4xl text-[white]">
                <div className="flex flex-wrap mt-0 -mr-6 -ml-6 items-center!">
                  <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                    <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                      {
                        "💰 SFEC & PSG funding available for ISO 45001 training and OHSMS software"
                      }
                    </h3>
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        "SkillsFuture Enterprise Credit (SFEC) covers up to 90% of qualifying ISO 45001 training costs for eligible employers (up to S$10,000). The Productivity Solutions Grant (PSG) may support pre-approved OHSMS management software. Integrated IMS projects (ISO 45001 + ISO 9001 or ISO 14001) may qualify for EDG co-funding on the non-basic standards components."
                      }
                    </p>
                    <SiteLink
                      href="/contact-us"
                      className="text-black [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:none] rounded-lg bg-[#f8f9fa] hover:text-black hover:bg-[#d3d4d5] hover:border-[#c6c7c8] focus-visible:text-black focus-visible:bg-[#d3d4d5] focus-visible:border-[#c6c7c8] focus-visible:shadow-[0_0_0_0.25rem_rgba(211,212,213,.5)] active:text-black active:bg-[#c6c7c8] active:border-[#babbbc] active:shadow-[0_0_0_0.25rem_rgba(211,212,213,.5)] mt-2! focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] items-center justify-center gap-2.5 [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Check funding eligibility →"}
                    </SiteLink>
                  </div>
                  <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto] text-center!">
                    <Icon
                      name="building"
                      className="inline-block not-italic text-[60px]! opacity-[0.5]! text-[white]!"
                    />
                  </div>
                </div>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"ICFC's OHSMS audit process — HIRAC to bizSAFE STAR"}
              </h3>
              <div className="flex flex-wrap -mt-6 -mr-6 -ml-6 mb-1.25! text-center!">
                <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-md!">
                    <div className="inline-flex! mr-auto! ml-auto! mb-2.5 [background:#AB052D] text-[white] w-10 h-10 items-center justify-center rounded-full [font-weight:bold]">
                      {"01"}
                    </div>
                    <p className="mt-2! mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"Free briefing"}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-md!">
                    <div className="inline-flex! mr-auto! ml-auto! mb-2.5 [background:#AB052D] text-[white] w-10 h-10 items-center justify-center rounded-full [font-weight:bold]">
                      {"02"}
                    </div>
                    <p className="mt-2! mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"HIRAC review"}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-md!">
                    <div className="inline-flex! mr-auto! ml-auto! mb-2.5 [background:#AB052D] text-[white] w-10 h-10 items-center justify-center rounded-full [font-weight:bold]">
                      {"03"}
                    </div>
                    <p className="mt-2! mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"Gap analysis"}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-md!">
                    <div className="inline-flex! mr-auto! ml-auto! mb-2.5 [background:#AB052D] text-[white] w-10 h-10 items-center justify-center rounded-full [font-weight:bold]">
                      {"04"}
                    </div>
                    <p className="mt-2! mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"Funding setup"}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-md!">
                    <div className="inline-flex! mr-auto! ml-auto! mb-2.5 [background:#AB052D] text-[white] w-10 h-10 items-center justify-center rounded-full [font-weight:bold]">
                      {"05"}
                    </div>
                    <p className="mt-2! mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"Pre-cert audit"}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 w-[16.66666667%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="pt-4! pr-4! pb-4! pl-4! bg-[rgba(248,249,250,1)]! rounded-md!">
                    <div className="inline-flex! mr-auto! ml-auto! mb-2.5 [background:#AB052D] text-[white] w-10 h-10 items-center justify-center rounded-full [font-weight:bold]">
                      {"06"}
                    </div>
                    <p className="mt-2! mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {"Certification"}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Client outcomes · Singapore"}
              </h3>
              <div className="flex flex-wrap -mt-6 -mr-6 -ml-6 mb-1.25!">
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="mt-3.75 mr-0 mb-3.75 ml-0 pt-6 pr-6 pb-6 pl-6 [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#AB052D]">
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        '"ICFC helped us achieve ISO 45001 certification and bizSAFE STAR in under six months — starting from bizSAFE Level 3. We submitted our RM Implementation Audit Report on the same day as ISO certificate — both approved within the week. This directly opened a S$45M government tender."'
                      }
                    </p>
                    <strong className="[font-weight:bolder]">
                      {"— PM, Building contractor, Singapore"}
                    </strong>
                  </div>
                </div>
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="mt-3.75 mr-0 mb-3.75 ml-0 pt-6 pr-6 pb-6 pl-6 [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#AB052D]">
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        '"Integrated ISO 9001 + ISO 45001 + ISO 14001 IMS in one engagement. SFEC covered training costs, EDG grant covered 50% of consultation fees. Incident rate dropped 60% in first year."'
                      }
                    </p>
                    <strong className="[font-weight:bolder]">
                      {"— OD, Precision engineering SME, Singapore"}
                    </strong>
                  </div>
                </div>
                <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                  <div className="mt-3.75 mr-0 mb-3.75 ml-0 pt-6 pr-6 pb-6 pl-6 [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#AB052D]">
                    <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      {
                        '"As a shipyard operator, our SHMS audit by MOM was a legal requirement. ICFC\'s ISO 45001 implementation satisfied this requirement through SAC-accredited certification — and simultaneously gave us bizSAFE STAR."'
                      }
                    </p>
                    <strong className="[font-weight:bolder]">
                      {"— HSE manager, Shipyard operator, Singapore"}
                    </strong>
                  </div>
                </div>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Frequently asked questions — ISO 45001 OHSMS"}
              </h3>
              <AccordionGroup id="faqAccordion">
                <AccordionItem
                  title={
                    <>{"Does ISO 45001 automatically give us bizSAFE STAR?"}</>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] rounded-tl-md rounded-tr-md mb-4 rounded-xl overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] mb-4 rounded-xl overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] mb-4 rounded-xl overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] mb-4 rounded-xl overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] rounded-br-md rounded-bl-md mb-4 rounded-xl overflow-hidden"
                >
                  {" "}
                  {
                    "ISO 45001 is currently undergoing revision. While ISO has not announced a firm publication date, the revision process is ongoing. ICFC closely monitors developments from ISO and SAC. For organisations currently certified or in the process of certification, we recommend proceeding with ISO 45001:2018 — the current edition — as any new edition will come with a transition window (typically 3 years)."
                  }
                </AccordionItem>
              </AccordionGroup>
              <div className="pt-12! pr-12! pb-12! pl-12! text-center! rounded-2xl! mt-10 [background:rgba(30,92,59,0.05)]">
                <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {
                    "新加坡ISO 45001职业健康与安全管理体系（OHSMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p className="mt-4! mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "ICFC提供新加坡ISO 45001职业健康与安全管理体系全程认证服务，包括危害识别与风险评估（HIRAC）、WSH法案及102项《认可操作规程》合规、bizSAFE星级认证直通路径（绕过1–4级）、MOM强制性安全健康管理体系（SHMS）审核及员工培训，涵盖建筑、船厂、制造、物流等25大行业。SFEC资助可支付高达90%培训费用。提供中英双语服务。"
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-white [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:none] rounded-lg bg-[#0d6efd] hover:text-white hover:bg-[#0b5ed7] hover:border-[#0a58ca] focus-visible:text-white focus-visible:bg-[#0b5ed7] focus-visible:border-[#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] active:text-white active:bg-[#0a58ca] active:border-[#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] mt-2! focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:#AB052D] items-center justify-center gap-2.5 hover:[background:#15472d] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div className="pt-12! pr-12! pb-12! pl-12! text-center! rounded-2xl! mt-10 [background:linear-gradient(135deg,#f0f4f1,#ffffff)]!">
                <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {"Start your ISO 45001 OHSMS journey today"}
                </h3>
                <p className="mt-0 mb-4! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Free 30-minute safety assessment. Honest gap analysis against ISO 45001 and WSH Act. bizSAFE STAR pathway review. SFEC/PSG funding check. No obligation."
                  }
                </p>
                <div className="flex! flex-wrap! justify-center! gap-4!">
                  <SiteLink
                    href="/contact-us"
                    className="text-white [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:none] rounded-lg bg-[#0d6efd] hover:text-white hover:bg-[#0b5ed7] hover:border-[#0a58ca] focus-visible:text-white focus-visible:bg-[#0b5ed7] focus-visible:border-[#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] active:text-white active:bg-[#0a58ca] active:border-[#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:#AB052D] items-center justify-center gap-2.5 hover:[background:#15472d] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Book free OHSMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#AB052D] [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:2px_solid_#AB052D] rounded-lg bg-transparent hover:text-white hover:bg-[#0d6efd] hover:border-[#0d6efd] focus-visible:text-white focus-visible:bg-[#0d6efd] focus-visible:border-[#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] active:text-white active:bg-[#0d6efd] active:border-[#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] items-center justify-center gap-2.5 hover:[background:#AB052D] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Check funding eligibility →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#AB052D] [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:2px_solid_#AB052D] rounded-lg bg-transparent hover:text-white hover:bg-[#0d6efd] hover:border-[#0d6efd] focus-visible:text-white focus-visible:bg-[#0d6efd] focus-visible:border-[#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] active:text-white active:bg-[#0d6efd] active:border-[#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] items-center justify-center gap-2.5 hover:[background:#AB052D] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"bizSAFE STAR pathway →"}
                  </SiteLink>
                </div>
              </div>
              <div className="text-[.875em] text-[rgba(33,37,41,0.75)]! mt-10">
                <strong className="[font-weight:bolder]">
                  {"Page optimised for:"}
                </strong>
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
    <div className="-mt-17.5 relative z-2 overflow-x-clip">
      <div className="w-full pr-0 pl-0 mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="pt-5.25 pb-5.25 [background:radial-gradient(174.58%_135.27%_at_35.14%_-15.53%,rgba(47,62,75,0.6)_0%,rgba(47,62,75,0.036)_100%)] [backdrop-filter:blur(21px)] flex items-center gap-3.75 justify-center px-3.75">
              <span className="bg-[#FFFFFF] w-4.25 min-w-4.25 h-6 flex max-[575px]:hidden items-center justify-center rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  className="align-middle"
                >
                  <path
                    d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                    fill="#AB052D"
                  ></path>
                </svg>
              </span>
              <div className="text-[14px] font-medium">
                <p className="mt-0 mb-0 text-[14px] font-medium text-[rgba(255,255,255,0.8)] leading-7 max-[575px]:text-center">
                  {
                    "ISO 45001 OHSMS certification — WSH Act aligned, bizSAFE STAR ready. "
                  }
                  <SiteLink
                    href="/contact-us"
                    className="text-inherit [text-decoration:underline] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] inline-block [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
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
