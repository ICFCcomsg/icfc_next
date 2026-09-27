import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsohmsPageContent() {
  return (
    <SitePageTemplate route="services-detailsohms.html">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[100%]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 45001 OHSMS"
                  className="max-w-full h-auto w-full rounded-[6px]"
                />
              </div>
              <p className="leading-relaxed mt-[30px] mb-4">
                {
                  "ISO 45001:2018 (SS ISO 45001) is the world's leading Occupational Health and Safety Management System standard — with over 540,000 certificates issued globally. In Singapore, it is the most strategic safety investment a business can make: it satisfies the MOM SHMS mandatory audit requirement, provides direct fast-track entry to bizSAFE STAR (bypassing Levels 1–4), and aligns your entire safety governance with Singapore's WSH Act and 102 Approved Codes of Practice. ICFC delivers OHSMS audit, consultation, and training with SkillsFuture and PSG funding support managed in every engagement."
                }
              </p>
              <div className="flex flex-wrap gap-[25px] justify-center m-[40px_0]">
                <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[130px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
                  <div className="text-[44px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
                    {"540K+"}
                  </div>
                  <div>{"Certificates issued globally"}</div>
                </div>
                <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[130px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
                  <div className="text-[44px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
                    {"★"}
                  </div>
                  <div>{"bizSAFE STAR direct pathway"}</div>
                  <small>{"bypass Levels 1–4"}</small>
                </div>
                <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[130px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
                  <div className="text-[44px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
                    {"MOM"}
                  </div>
                  <div>{"SHMS mandatory audit satisfied"}</div>
                </div>
                <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[130px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
                  <div className="text-[44px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
                    {"102"}
                  </div>
                  <div>{"WSH Approved CoPs aligned"}</div>
                </div>
                <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[130px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
                  <div className="text-[44px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
                    {"25+"}
                  </div>
                  <div>{"Industries served"}</div>
                </div>
                <div className="[background:#f8f9fc] rounded-[20px] p-[25px_20px] text-center [flex:1] min-w-[130px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
                  <div className="text-[44px] font-extrabold text-[#AB052D] leading-[1] mb-[8px]">
                    {"90%"}
                  </div>
                  <div>{"SFEC training funding"}</div>
                </div>
              </div>
              <div className="[background:#f0f4f1] rounded-[32px] p-[30px] m-[30px_0]">
                <div className="-mx-3 flex flex-wrap gap-y-6 items-center">
                  <div className="w-full shrink-0 px-3 lg:w-[58.333333333333336%]">
                    <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                      {
                        "⭐ ISO 45001 = bizSAFE STAR — the single most strategic safety decision"
                      }
                    </h3>
                    <p className="leading-relaxed mb-4">
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
                  <div className="w-full shrink-0 px-3 lg:w-[41.66666666666667%]">
                    <div className="bg-white p-4">
                      <div className="flex justify-between flex-wrap">
                        <span>{"CEO Workshop"}</span>
                        <span>{"→"}</span>
                        <span>{"RM Champion"}</span>
                        <span>{"→"}</span>
                        <span>{"RM Audit"}</span>
                        <span>{"→"}</span>
                        <span>{"WSHMS Plan"}</span>
                        <span>{"→"}</span>
                        <span className="font-bold text-green-700">
                          {"bizSAFE STAR"}
                        </span>
                      </div>
                      <div className="text-center">
                        <span className="[background:#AB052D] bg-green-700">
                          {"ISO 45001 direct entry ↗"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[10px] font-bold">
                {
                  "What is ISO 45001 OHSMS? Singapore's occupational safety certification — the strategic case for ISO 45001"
                }
              </h3>
              <p className="leading-relaxed mb-4">
                {
                  "For Singaporean businesses, the journey to ISO 45001 certification is a process of unification — unifying global best practice with the stringent legal obligations of the WSH Act, transforming compliance from a reactive checklist into a proactive, integrated system. It aligns the goal of a robust internal OHSMS with the powerful commercial imperative of achieving bizSAFE STAR status. SS ISO 45001 is Singapore's national standard — a direct adoption of ISO 45001:2018 replacing SS 506 Part 1 (based on OHSAS 18001)."
                }
              </p>
              <div className="-mx-3 flex flex-wrap gap-y-6 mb-[5px]">
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
                    <span className="text-[42px]">{"🔍"}</span>
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"OHSMS Audit"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Gap analysis · MOM SHMS mandatory audit · Pre-certification readiness · Surveillance/renewal · Internal audit co-sourcing."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#AB052D] [background:transparent] text-[#AB052D] hover:[background:#AB052D] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                    >
                      {"Explore audit →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
                    <span className="text-[42px]">{"🦺"}</span>
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"OHSMS Consultation"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Full implementation · bizSAFE STAR upgrade · Integrated IMS (45001+9001+14001) · HIRAC development · Incident investigation · Psychosocial risk."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#AB052D] [background:transparent] text-[#AB052D] hover:[background:#AB052D] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                    >
                      {"Explore consulting →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="[background:#ffffff] rounded-[28px] p-[32px_24px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
                    <span className="text-[42px]">{"🎓"}</span>
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"WSH Training"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "CQI/IRCA lead auditor · Internal auditor · Implementation practitioner · Board governance · Worker awareness (multi-language)."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#AB052D] [background:transparent] text-[#AB052D] hover:[background:#AB052D] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                    >
                      {"Explore training →"}
                    </SiteLink>
                  </div>
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Singapore WSH legal framework — ISO 45001 alignment"}
              </h3>
              <div className="grid [grid-template-columns:repeat(auto-fill,_minmax(280px,1fr))] gap-[20px] m-[30px_0]">
                <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong>{"📋 WSH Act (Cap. 354A)"}</strong>
                  <br />
                  {
                    "Employers must ensure workplace safety as far as reasonably practicable. Risk assessments mandatory for all work activities."
                  }
                </div>
                <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong>{"⚠️ MOM mandatory SHMS audit"}</strong>
                  <br />
                  {
                    "Mandatory for: construction ≥S$30M; shipyards ≥200 workers; metalworking/pharma factories above thresholds. ISO 45001 satisfies requirement."
                  }
                </div>
                <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong>{"📊 WSH (Risk Management) Regulations"}</strong>
                  <br />
                  {
                    "All employers must conduct risk assessments, review every 3 years or after incidents, and document controls."
                  }
                </div>
                <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong>{"📞 WSH (Incident Reporting) Regulations"}</strong>
                  <br />
                  {
                    "Notify MOM within 10 days for injuries causing >3-day MC; immediately for fatal/dangerous occurrences."
                  }
                </div>
                <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong>{"📖 WSH Approved Codes of Practice (ACOPs)"}</strong>
                  <br />
                  {
                    "102 ACOPs effective from January 2025 providing sector-specific safety guidance — court-admissible as standard of care."
                  }
                </div>
                <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong>{"⭐ bizSAFE programme (WSHC)"}</strong>
                  <br />
                  {
                    "Government and enterprise procurement requires bizSAFE Level 3 or above. bizSAFE STAR requires ISO 45001 + RM Audit Report."
                  }
                </div>
                <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong>{"🔥 SCDF Fire Safety Act"}</strong>
                  <br />
                  {
                    "Fire safety requirements for workplaces — emergency procedures, fire warden appointments, evacuation plans."
                  }
                </div>
                <div className="[background:#fff] [border-left:4px_solid_#AB052D] p-[14px_18px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <strong>{"🌿 NEA environmental-health interface"}</strong>
                  <br />
                  {
                    "Workplace air quality, noise limits, hazardous chemicals — overlapping occupational and environmental obligations."
                  }
                </div>
              </div>
              <div className="mb-[5px] [background:linear-gradient(135deg,_#1a3a2a_0%,_#0e2a1c_100%)] rounded-[32px] p-[40px] text-[white]">
                <div className="-mx-3 flex flex-wrap gap-y-6 items-center">
                  <div className="w-full shrink-0 px-3 lg:w-[66.66666666666666%]">
                    <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
                      {
                        "💰 SFEC & PSG funding available for ISO 45001 training and OHSMS software"
                      }
                    </h3>
                    <p className="leading-relaxed mb-4">
                      {
                        "SkillsFuture Enterprise Credit (SFEC) covers up to 90% of qualifying ISO 45001 training costs for eligible employers (up to S$10,000). The Productivity Solutions Grant (PSG) may support pre-approved OHSMS management software. Integrated IMS projects (ISO 45001 + ISO 9001 or ISO 14001) may qualify for EDG co-funding on the non-basic standards components."
                      }
                    </p>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none]"
                    >
                      {"Check funding eligibility →"}
                    </SiteLink>
                  </div>
                  <div className="w-full shrink-0 px-3 lg:w-[33.33333333333333%] text-center">
                    <Icon
                      name="building"
                      className="text-[60px] opacity-[0.5] text-[white]"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"ICFC's OHSMS audit process — HIRAC to bizSAFE STAR"}
              </h3>
              <div className="-mx-3 flex flex-wrap gap-y-6 mb-[5px] text-center">
                <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
                  <div className="p-4 bg-slate-50 rounded-md">
                    <div className="[background:#AB052D] text-[white] w-[40px] h-[40px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold] mx-auto">
                      {"01"}
                    </div>
                    <p className="leading-relaxed mb-[0]">{"Free briefing"}</p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
                  <div className="p-4 bg-slate-50 rounded-md">
                    <div className="[background:#AB052D] text-[white] w-[40px] h-[40px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold] mx-auto">
                      {"02"}
                    </div>
                    <p className="leading-relaxed mb-[0]">{"HIRAC review"}</p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
                  <div className="p-4 bg-slate-50 rounded-md">
                    <div className="[background:#AB052D] text-[white] w-[40px] h-[40px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold] mx-auto">
                      {"03"}
                    </div>
                    <p className="leading-relaxed mb-[0]">{"Gap analysis"}</p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
                  <div className="p-4 bg-slate-50 rounded-md">
                    <div className="[background:#AB052D] text-[white] w-[40px] h-[40px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold] mx-auto">
                      {"04"}
                    </div>
                    <p className="leading-relaxed mb-[0]">{"Funding setup"}</p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
                  <div className="p-4 bg-slate-50 rounded-md">
                    <div className="[background:#AB052D] text-[white] w-[40px] h-[40px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold] mx-auto">
                      {"05"}
                    </div>
                    <p className="leading-relaxed mb-[0]">{"Pre-cert audit"}</p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
                  <div className="p-4 bg-slate-50 rounded-md">
                    <div className="[background:#AB052D] text-[white] w-[40px] h-[40px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold] mx-auto">
                      {"06"}
                    </div>
                    <p className="leading-relaxed mb-[0]">{"Certification"}</p>
                  </div>
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Client outcomes · Singapore"}
              </h3>
              <div className="-mx-3 flex flex-wrap gap-y-6 mb-[5px]">
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#AB052D]">
                    <p className="leading-relaxed mb-4">
                      {
                        '"ICFC helped us achieve ISO 45001 certification and bizSAFE STAR in under six months — starting from bizSAFE Level 3. We submitted our RM Implementation Audit Report on the same day as ISO certificate — both approved within the week. This directly opened a S$45M government tender."'
                      }
                    </p>
                    <strong>{"— PM, Building contractor, Singapore"}</strong>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#AB052D]">
                    <p className="leading-relaxed mb-4">
                      {
                        '"Integrated ISO 9001 + ISO 45001 + ISO 14001 IMS in one engagement. SFEC covered training costs, EDG grant covered 50% of consultation fees. Incident rate dropped 60% in first year."'
                      }
                    </p>
                    <strong>
                      {"— OD, Precision engineering SME, Singapore"}
                    </strong>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#AB052D]">
                    <p className="leading-relaxed mb-4">
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
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"Frequently asked questions — ISO 45001 OHSMS"}
              </h3>
              <div id="faqAccordion">
                <AccordionItem
                  title={
                    <>{"Does ISO 45001 automatically give us bizSAFE STAR?"}</>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "ISO 45001 is currently undergoing revision. While ISO has not announced a firm publication date, the revision process is ongoing. ICFC closely monitors developments from ISO and SAC. For organisations currently certified or in the process of certification, we recommend proceeding with ISO 45001:2018 — the current edition — as any new edition will come with a transition window (typically 3 years)."
                  }
                </AccordionItem>
              </div>
              <div className="mt-[40px] [background:rgba(30,92,59,0.05)] rounded-[24px] p-12 text-center">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {
                    "新加坡ISO 45001职业健康与安全管理体系（OHSMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "ICFC提供新加坡ISO 45001职业健康与安全管理体系全程认证服务，包括危害识别与风险评估（HIRAC）、WSH法案及102项《认可操作规程》合规、bizSAFE星级认证直通路径（绕过1–4级）、MOM强制性安全健康管理体系（SHMS）审核及员工培训，涵盖建筑、船厂、制造、物流等25大行业。SFEC资助可支付高达90%培训费用。提供中英双语服务。"
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#AB052D] text-[#fff] hover:[background:#15472d] hover:[transform:translateY(-2px)]"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div className="mt-[40px] [background:linear-gradient(135deg,_#f0f4f1,_#ffffff)] text-center p-12">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {"Start your ISO 45001 OHSMS journey today"}
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "Free 30-minute safety assessment. Honest gap analysis against ISO 45001 and WSH Act. bizSAFE STAR pathway review. SFEC/PSG funding check. No obligation."
                  }
                </p>
                <div className="flex flex-wrap justify-center">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#AB052D] text-[#fff] hover:[background:#15472d] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free OHSMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#AB052D] [background:transparent] text-[#AB052D] hover:[background:#AB052D] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                  >
                    {"Check funding eligibility →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#AB052D] [background:transparent] text-[#AB052D] hover:[background:#AB052D] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                  >
                    {"bizSAFE STAR pathway →"}
                  </SiteLink>
                </div>
              </div>
              <div className="mt-[40px] text-slate-500 text-sm">
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
    <div className="mt-[-70px] relative z-[2] [overflow-x:clip]">
      <div className="w-full px-6 !mx-0 [&>*]:!px-0">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[100%]">
            <div className="[background:radial-gradient(174.58%_135.27%_at_35.14%_-15.53%,_rgba(47,_62,_75,_0.6)_0%,_rgba(47,_62,_75,_0.036)_100%)] [backdrop-filter:blur(21px)] flex items-center gap-[15px] justify-center pt-[21px] pb-[21px] [padding-inline:15px]">
              <span className="bg-[#FFFFFF] w-[17px] min-w-[17px] h-[24px] flex items-center justify-center rounded-[4px] max-[575px]:hidden">
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
              <div className="text-[14px] font-medium">
                <p className="leading-relaxed text-[rgba(255,_255,_255,_0.8)] text-[14px] font-medium max-[575px]:text-center mb-4">
                  {
                    "ISO 45001 OHSMS certification — WSH Act aligned, bizSAFE STAR ready. "
                  }
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] [text-decoration:underline] inline-block hover:text-[#AB052D]"
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
