import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsbcmsPageContent() {
  return (
    <SitePageTemplate route="services-detailsbcms.html">
      <main>
        <BannerAreaSection />
        <ContainerSection />
        <ContainerSection2 />
        <SectionSpaceSection />
        <SectionSpaceSection2 />
        <SectionSpaceSection3 />
        <SectionSpaceSection4 />
        <ContainerSection3 />
        <SectionSpaceSection5 />
        <SectionSpaceSection6 />
        <SectionSpaceSection7 />
        <ContainerSection4 />
        <ContainerSection5 />
        <ContainerSection6 />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section className="relative z-[1] [overflow-x:clip] [background:#0a2e3b]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 min-h-[70vh] items-center">
          <div className="w-full shrink-0 px-3 xl:w-[66.66666666666666%]">
            <div className="relative z-[1] pt-[110px] [padding-inline-start:200px] pb-[330px] max-[1600px]:[padding-inline-start:100px] max-[1600px]:pb-[295px] max-[1199px]:[padding-inline-start:15px] max-[1199px]:[padding-inline-end:15px] max-[1199px]:pb-[110px] max-[991px]:pt-[95px] max-[991px]:pb-[100px] max-[767px]:pt-[75px] max-[767px]:pb-[80px]">
              <span className="text-[14px] font-medium tracking-[2.4px] uppercase text-[#6bc2e8] mb-[15px] inline-block">
                {
                  "ISO 22301:2019 · Business Continuity Management System · Singapore"
                }
              </span>
              <h1 className="font-bold leading-tight text-[#2B3944] text-4xl md:text-6xl text-[#FFFFFF] font-medium leading-[1.12]">
                {"Business continuity —"}
                <br className="max-[480px]:hidden" />
                {"certified, resilient, and grant-funded"}
              </h1>
              <p className="leading-relaxed text-[rgba(255,_255,_255,_0.8)] font-medium tracking-[0.02em] max-w-[580px] mb-[40px] max-[575px]:max-w-full">
                {
                  "ISO 22301 BCMS certification. BIA, gap analysis, implementation & training. EDG/MASA grant up to 50%. MAS TRM aligned. ICFC since 2014."
                }
              </p>
              <div>
                <SiteLink
                  className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF] gap-[8px]"
                  href="/contact-us.html"
                >
                  {"Book free BCMS assessment →"}
                  <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                    <svg
                      className="in-hover:[transform:translateX(150%)] w-[17px]"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                        fill="white"
                        className="[fill:#2B3944] in-hover:[fill:#FFFFFF]"
                      ></path>
                    </svg>
                  </span>
                </SiteLink>
                <SiteLink
                  className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#AB052D] hover:text-[#FFFFFF] gap-[8px] [border:1px_solid_rgba(255,_255,_255,_0.15)]"
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] max-[991px]:pt-[100px] max-[767px]:pt-[70px] max-[480px]:pt-[60px]">
      <div className="flex flex-wrap gap-[20px] justify-center m-[40px_0]">
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="text-[36px] font-extrabold text-[#1a4d7a] leading-[1] mb-[5px]">
            {"4–6"}
          </div>
          <div>{"Months typical BCMS timeline"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="text-[36px] font-extrabold text-[#1a4d7a] leading-[1] mb-[5px]">
            {"50%"}
          </div>
          <div>{"EDG grant co-fund"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="text-[36px] font-extrabold text-[#1a4d7a] leading-[1] mb-[5px]">
            {"98%"}
          </div>
          <div>{"First-attempt rate"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="text-[36px] font-extrabold text-[#1a4d7a] leading-[1] mb-[5px]">
            {"25+"}
          </div>
          <div>{"Industries served"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="text-[36px] font-extrabold text-[#1a4d7a] leading-[1] mb-[5px]">
            {"11+"}
          </div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)]">
          <div className="text-[36px] font-extrabold text-[#1a4d7a] leading-[1] mb-[5px]">
            {"MAS"}
          </div>
          <div>{"TRM & BCM aligned"}</div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection2() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
      <div className="[background:#e8f4f8] mb-4 rounded-md border p-4 border-blue-200 bg-blue-50 text-blue-900 border-0">
        <strong>{"📋 2024 Climate Action Amendment to ISO 22301:2019."}</strong>
        {
          " An amendment was adopted in 2024 integrating climate change considerations. ICFC's BCMS implementation includes this amendment as standard — ensuring your BIA and risk assessment address climate-related disruption scenarios."
        }
      </div>
    </div>
  );
}

function SectionSpaceSection() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center">
          <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
            {"BCMS services"}
          </span>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"Audit · Consultation · Training"}
          </h2>
          <p className="leading-relaxed mb-4">
            {"BIA · ISO 22301 · MAS TRM · EDG grant managed"}
          </p>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"🔍"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"BCMS Audit"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Gap analysis · Stage 1/Stage 2 · Pre-cert mock audit · Surveillance · Internal audit co-sourcing."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore audit →"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"📋"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"BCMS Consultation"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Full implementation · BIA facilitation · MAS TRM aligned · IMS integration · Crisis management · Post-cert retainer."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore consulting →"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"🎓"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"BCMS Training"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Lead auditor (CQI/IRCA) · Internal auditor · Implementation practitioner · Staff awareness · Tabletop exercises."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"The BCMS framework — six core components ICFC implements"}
          </h2>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"📊 BIA"}
              </h4>
              <h6 className="font-bold leading-tight text-[#2B3944] text-lg">
                {"Business Impact Analysis"}
              </h6>
              <p className="leading-relaxed mb-4">
                {
                  "Identify critical processes, quantify disruption impact, set RTO and RPO for every key activity."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"⚠️ RA"}
              </h4>
              <h6 className="font-bold leading-tight text-[#2B3944] text-lg">
                {"Risk Assessment"}
              </h6>
              <p className="leading-relaxed mb-4">
                {
                  "Identify threats and vulnerabilities — cyber, climate, supply chain, pandemic."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"🎯 BC Strat"}
              </h4>
              <h6 className="font-bold leading-tight text-[#2B3944] text-lg">
                {"Continuity Strategies"}
              </h6>
              <p className="leading-relaxed mb-4">
                {
                  "Design strategies for people, technology, facilities, data, supply chain covering all disruption scenarios."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"📄 BCP"}
              </h4>
              <h6 className="font-bold leading-tight text-[#2B3944] text-lg">
                {"Business Continuity Plans"}
              </h6>
              <p className="leading-relaxed mb-4">
                {
                  "Documented, tested response and recovery procedures — crisis comms, escalation paths, recovery actions."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"🏋️ Exercise"}
              </h4>
              <h6 className="font-bold leading-tight text-[#2B3944] text-lg">
                {"Testing & Exercises"}
              </h6>
              <p className="leading-relaxed mb-4">
                {
                  "Desktop exercises, simulations, and live drills — validating plans work before incidents occur."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-bottom:3px_solid_#1a4d7a] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"🔄 PDCA"}
              </h4>
              <h6 className="font-bold leading-tight text-[#2B3944] text-lg">
                {"Continual Improvement"}
              </h6>
              <p className="leading-relaxed mb-4">
                {
                  "Internal audit, management review, and ongoing BCMS refinement as threats evolve."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection3() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"What is ISO 22301 BCMS? Singapore's resilience standard"}
          </h2>
        </div>
        <p className="leading-relaxed mb-4">
          {
            "ISO 22301:2019 is the internationally recognised standard for Business Continuity Management Systems. It provides a framework for organisations to prepare for, respond to, and recover from disruptive incidents — whether cyberattacks, pandemics, supply chain failures, or natural disasters. In Singapore's position as a global business hub, disruptions carry outsized impact. Several Singapore regulators now require or strongly recommend certified BCMS."
          }
        </p>
        <p className="leading-relaxed mb-4">
          {
            "The 2024 Climate Action Amendment to ISO 22301:2019 integrates climate change considerations into BCMS requirements. ICFC includes this as standard in every implementation."
          }
        </p>
      </div>
    </section>
  );
}

function SectionSpaceSection4() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"Singapore's BCMS regulatory landscape"}
          </h2>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="[border:1px_solid_#DBDEE1] max-[991px]:w-[900px] w-full border-collapse text-left [&_th]:border-b [&_th]:border-slate-300 [&_th]:bg-slate-50 [&_th]:p-3 [&_td]:border-b [&_td]:border-slate-200 [&_td]:p-3 [&_td]:border [&_th]:border">
            <thead>
              <tr>
                <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8] text-[#1a4d7a]">
                  {"Regulator / Framework"}
                </th>
                <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8] text-[#1a4d7a]">
                  {"Requirement"}
                </th>
                <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8] text-[#1a4d7a]">
                  {"Sectors"}
                </th>
                <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top] [background:#f0f4f8] text-[#1a4d7a]">
                  {"ISO 22301 alignment"}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"MAS TRM Guidelines"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Robust BCM capabilities; scenario testing"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Banks, insurers, FinTech"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Direct alignment"}
                </td>
              </tr>
              <tr>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"MAS Notice 655 / BCM Guidelines"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Documented BCP, RTO/RPO, annual testing"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"All MAS-regulated FIs"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Direct alignment"}
                </td>
              </tr>
              <tr>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"CSA Cybersecurity Act"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"CII operators must have BCPs for critical systems"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Energy, water, transport, banking, telco, healthcare, govt"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Strong alignment"}
                </td>
              </tr>
              <tr>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"MOH guidelines"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Business continuity for essential healthcare services"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Hospitals, clinics, pharma"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Strong alignment"}
                </td>
              </tr>
              <tr>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"BCA requirements"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Business continuity for major projects"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Critical infrastructure contractors"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Framework aligned"}
                </td>
              </tr>
              <tr>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"Government tender criteria"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"ISO 22301 increasingly required or scored"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"All government suppliers"}
                </td>
                <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                  {"✓ Certification required"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ContainerSection3() {
  return (
    <div
      id="grant"
      className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]"
    >
      <div className="[background:linear-gradient(135deg,_#0a2e3b_0%,_#051c26_100%)] rounded-[32px] p-[40px] text-[white] max-[768px]:p-[28px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 items-center">
          <div className="w-full shrink-0 px-3 lg:w-[66.66666666666666%]">
            <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
              {
                "50% EDG / MASA grant co-funding — up to 50% of BCMS consultation costs"
              }
            </h3>
            <p className="leading-relaxed mb-4">
              {
                "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 22301 consultation fees for eligible SMEs. ICFC manages your application before project commencement. Integrated IMS engagements (ISO 22301 + ISO 27001) can stack grant funding across both standards."
              }
            </p>
            <SiteLink
              className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
              href="/contact-us.html"
            >
              {"Check grant eligibility →"}
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
    </div>
  );
}

function SectionSpaceSection5() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"ICFC's BCMS audit process — from first call to certificate"}
          </h2>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6 text-center">
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"01"}</div>
              <p className="leading-relaxed mb-4">{"Free briefing"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"02"}</div>
              <p className="leading-relaxed mb-4">{"Gap analysis"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"03"}</div>
              <p className="leading-relaxed mb-4">{"Grant application"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"04"}</div>
              <p className="leading-relaxed mb-4">{"Pre-cert audit"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"05"}</div>
              <p className="leading-relaxed mb-4">{"CB coordination"}</p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[16.666666666666664%]">
            <div className="p-4">
              <div className="bg-slate-50 rounded-full p-4">{"06"}</div>
              <p className="leading-relaxed mb-4">{"Certificate"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection6() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#1a4d7a]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Chief Risk Officer"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Digital bank, Singapore"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  "\"ICFC's BIA facilitation identified three single-point dependencies we hadn't recognised — including a critical vendor with no sub-contractor. Certification achieved on first attempt with MAS TRM fully addressed.\""
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#1a4d7a]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"IT Director"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Data centre operator"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  '"Achieved ISO 22301 and ISO 27001 dual certification under ICFC\'s integrated IMS approach — saved over S$30,000 compared to separate engagements. EDG grant covered 50% of total cost."'
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[100%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#1a4d7a]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"General Manager"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Pharmaceutical manufacturer"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  '"ICFC\'s tabletop exercise programme changed how our executive team thinks about business continuity. They ran a realistic cyber-incident scenario that exposed gaps in our crisis communication escalation path that no document review would have found."'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection7() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div>
          <h2 className="text-[2.2rem] font-extrabold mb-[2rem] text-[#0a2e3b] max-[768px]:text-[1.7rem]">
            {"FAQs — ISO 22301 BCMS"}
          </h2>
        </div>
        <div id="bcmsFaq">
          <AccordionItem
            title={
              <>
                {
                  "How long does ISO 22301 BCMS certification take in Singapore?"
                }
              </>
            }
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "The typical ISO 22301 certification timeline is 4–6 months from gap analysis to certificate. Organisations with existing ISO 9001 or ISO 27001 certification typically achieve faster timelines through integrated IMS approach as management system infrastructure is already in place."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"How much does ISO 22301 consultation cost in Singapore?"}</>
            }
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "Consultancy fees typically S$5,000–S$20,000 depending on scope. Certification audit fees S$3,000–S$8,000. EDG/MASA grant covers up to 50% of consultancy fees for eligible SMEs — net cost S$2,500–S$10,000. Integrated IMS reduces costs by 20–30%."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "Is ISO 22301 required for MAS-regulated financial institutions?"
                }
              </>
            }
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "MAS does not mandate ISO 22301 by name — but MAS Notice 655, TRM Guidelines, and BCM Guidelines require documented BCM practices aligned with ISO 22301. Certification is widely adopted as most efficient way to demonstrate MAS BCM compliance."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"Can we integrate ISO 22301 with ISO 27001 or ISO 9001?"}</>
            }
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "Yes — ICFC strongly recommends integrated IMS. All three standards share Annex SL structure. Reuses existing policy infrastructure, risk assessment, internal audit programme — reducing total cost by 20–30% with a single EDG grant application."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"What is the 2024 Climate Action Amendment to ISO 22301?"}</>
            }
            className="mb-[1rem] [border:1px_solid_#e9ecef] rounded-[20px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            defaultOpen={false}
          >
            {" "}
            {
              "In 2024, ISO adopted a Climate Action Amendment integrating climate change considerations into BCMS requirements. This requires organisations to consider climate-related threats (flood, extreme heat) in BIA, risk assessment, and BC strategy design. ICFC includes this amendment as standard in every implementation."
            }
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}

function ContainerSection4() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
      <div className="[background:linear-gradient(135deg,_#1a2a3a,_#0f1a24)] bg-slate-900 text-white p-12 text-center">
        <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
          {
            "新加坡ISO 22301业务持续性管理体系（BCMS）认证 · ICFC Pte Ltd（2014年创立）"
          }
        </h3>
        <p className="leading-relaxed mb-4">
          {
            "ICFC专注于新加坡ISO 22301:2019业务持续性管理体系认证，提供业务影响分析（BIA）、全面实施及培训服务，涵盖金融、医疗、物流、制造、建筑、航运等25大行业。与MAS TRM指南、MAS业务持续性管理指南完全一致。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务，欢迎免费咨询。"
          }
        </p>
        <p className="leading-relaxed mb-4">
          <strong>{"关键词："}</strong>
          {
            "业务持续性管理 · ISO 22301新加坡 · BCMS认证 · 业务影响分析 · BIA · MAS TRM合规 · EDG补助金 · 最佳BCMS顾问 · 实惠ISO 22301认证"
          }
        </p>
        <SiteLink
          href="/contact-us.html"
          className="transition-colors hover:text-[#AB052D]"
        >
          {"中文咨询 · 免费评估 →"}
        </SiteLink>
      </div>
    </div>
  );
}

function ContainerSection5() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-center">
        {"Related services"}
      </h3>
      <div className="-mx-3 flex flex-wrap gap-y-6">
        <div className="w-full shrink-0 px-3 md:w-[25%]">
          <div className="text-center p-4 border border-slate-200">
            <span className="bg-[#2B3944] [background:#1a4d7a] bg-[#AB052D]">
              {"🔒"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"ISO 27001"}
            </h5>
            <p className="leading-relaxed mb-4">
              {"Annex SL integration — shared policy & audit cycle"}
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[25%]">
          <div className="text-center p-4 border border-slate-200">
            <span className="bg-[#2B3944] [background:#1a4d7a] bg-[#AB052D]">
              {"✅"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"ISO 9001"}
            </h5>
            <p className="leading-relaxed mb-4">
              {"IMS integration · government tender qualification"}
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[25%]">
          <div className="text-center p-4 border border-slate-200">
            <span className="bg-[#2B3944] [background:#1a4d7a] bg-[#AB052D]">
              {"🤖"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="leading-relaxed mb-4">
              {"AI system disruption governance and continuity"}
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[25%]">
          <div className="text-center p-4 border border-slate-200">
            <span className="bg-[#2B3944] [background:#1a4d7a] bg-[#AB052D]">
              {"🛡️"}
            </span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"Cyber Trust Mark"}
            </h5>
            <p className="leading-relaxed mb-4">
              {"CII operator mandatory · CSA + BCMS integration"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection6() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pb-[120px] max-[991px]:pb-[100px] max-[767px]:pb-[70px] max-[480px]:pb-[60px]">
      <div className="[background:#0a2e3b] text-center p-12">
        <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
          {"Start your BCMS certification journey today"}
        </h3>
        <p className="leading-relaxed mb-4">
          {
            "Free 30-minute assessment. Honest gap analysis of your BCP maturity against ISO 22301:2019. EDG grant eligibility check. MAS TRM alignment review. No obligation."
          }
        </p>
        <div>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
            href="/contact-us.html"
          >
            {"Book free BCMS assessment →"}
          </SiteLink>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] text-white ml-4"
            href="/contact-us.html"
          >
            {"Check grant eligibility →"}
          </SiteLink>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] text-white ml-4"
            href="/contact-us.html"
          >
            {"Get free quote →"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
