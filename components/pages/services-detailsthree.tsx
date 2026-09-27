import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsthreePageContent() {
  return (
    <SitePageTemplate route="services-detailsthree">
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
      title="ISO/IEC 42001:2023 · AI Management System · Singapore"
      description="AI governance — certified, responsible, and grant-funded"
      background="/assets/images/services/services-thumb-30.webp"
    />
  );
}

function ServicesAreaSection() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 42001 AI Management System"
                  className="[vertical-align:middle] max-w-full w-full rounded-[6px]"
                />
              </div>
              <p className="mt-[30px] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO/IEC 42001:2023 is the world's first international standard for Artificial Intelligence Management Systems (AIMS). In Singapore, it is increasingly mandated by enterprise procurement, aligned with IMDA's AI governance frameworks, required by MAS AI Risk Management Guidelines (finalised 2026), and the foundation for CSA's Cyber Trust Mark AI security pillar. ICFC — Singapore's first dedicated ISO 42001 consultancy — delivers AIMS audit, consultation, and training with EDG grant management built in."
                }
              </p>
              <div className="mt-[20px] mr-[0] mb-[20px] ml-[0] grid [grid-template-columns:repeat(4,_1fr)] max-[768px]:[grid-template-columns:1fr] gap-[20px]">
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"Dec 2023"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"ISO 42001 published"}
                  </p>
                  <small className="text-[.875em]">
                    {"world's first AI MSS"}
                  </small>
                </div>
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"2024"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"SAC accreditation launched"}
                  </p>
                  <small className="text-[.875em]">
                    {"SG accreditation programme"}
                  </small>
                </div>
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"4–6 mo"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Typical implementation"}
                  </p>
                  <small className="text-[.875em]">
                    {"AI inventory to certified"}
                  </small>
                </div>
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"25+"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Singapore industries"}
                  </p>
                  <small className="text-[.875em]">{"served"}</small>
                </div>
              </div>
              <div className="mt-[25px] mr-[0] mb-[25px] ml-[0] pt-[25px] pr-[25px] pb-[25px] pl-[25px] [background:linear-gradient(135deg,_#fff5f5,_#fff)]! rounded-[20px]">
                <h3 className="mt-[0px] mb-[15px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {
                    "🤖 Why Singapore AI companies must act now — 2026 is the tipping point"
                  }
                </h3>
                <div className="flex flex-wrap mt-[calc(-1_*_1rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <strong className="[font-weight:bolder]">
                      {"MAS AI Risk Management Guidelines:"}
                    </strong>
                    {
                      " finalised 2026, supervisory expectations for all MAS-regulated FIs"
                    }
                  </div>
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <strong className="[font-weight:bolder]">
                      {"CTM Cyber Trust Mark AI security pillar (SS 712:2025):"}
                    </strong>
                    {" new mandatory control domain for CII operators"}
                  </div>
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <strong className="[font-weight:bolder]">
                      {"EU AI Act high-risk AI enforcement:"}
                    </strong>
                    {
                      " August 2025 onset — ISO 42001 is the primary conformity pathway"
                    }
                  </div>
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <strong className="[font-weight:bolder]">
                      {"Procurement:"}
                    </strong>
                    {
                      " Enterprise RFPs now routinely include AI governance certification requirements"
                    }
                  </div>
                </div>
                <div className="mt-[1.5rem]!">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#0d6efd] hover:text-[#fff] hover:bg-[#0b5ed7] hover:[border-color:#0a58ca] focus-visible:text-[#fff] focus-visible:bg-[#0b5ed7] focus-visible:[border-color:#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] active:text-[#fff] active:bg-[#0a58ca] active:[border-color:#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#C8102E] items-center justify-center gap-[10px] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free AIMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] ml-[.5rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)]"
                  >
                    {"Get free quote"}
                  </SiteLink>
                </div>
              </div>
              <div className="relative pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! mb-[1.5rem]! text-[#0a3622] bg-[#d1e7dd] [border:0]! rounded-[0.5rem]!">
                <Icon
                  name="star"
                  className="[float:left]! mr-[1rem]! text-[1.75rem]! max-[1200px]:text-[calc(1.3rem_+_.6vw)]! inline-block [font-style:normal] text-[#3B6D11]!"
                />
                <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[rgba(33,37,41,1)]! text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {
                    "EDG / MASA grant — up to 50% co-funding for ISO 42001 consultation"
                  }
                </h5>
                <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 42001 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. Integrated AIMS + ISO 27001 engagements can maximise total grant co-funding across both standards."
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#198754] hover:text-[#fff] hover:bg-[#157347] hover:[border-color:#146c43] focus-visible:text-[#fff] focus-visible:bg-[#157347] focus-visible:[border-color:#146c43] focus-visible:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] active:text-[#fff] active:bg-[#146c43] active:[border-color:#13653f] active:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] mt-[1rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#3B6D11] items-center justify-center gap-[10px] hover:[background:#2D550D] hover:[transform:translateY(-2px)]"
                >
                  {"Check grant eligibility →"}
                </SiteLink>
              </div>
              <div className="mt-[20px] mr-[0] mb-[20px] ml-[0] grid [grid-template-columns:repeat(4,_1fr)] max-[768px]:[grid-template-columns:1fr] gap-[20px]">
                <div className="text-center!">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"IMDA"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"AI Verify crosswalk"}
                  </p>
                  <small className="text-[.875em]">
                    {"published June 2024"}
                  </small>
                </div>
                <div className="text-center!">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"50%"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"EDG grant co-funding"}
                  </p>
                  <small className="text-[.875em]">
                    {"for qualifying SMEs"}
                  </small>
                </div>
                <div className="text-center!">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"SAC"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Accreditation programme"}
                  </p>
                  <small className="text-[.875em]">{"launched 2025"}</small>
                </div>
                <div className="text-center!">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"SS"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"ISO/IEC 42001:2024"}
                  </p>
                  <small className="text-[.875em]">
                    {"Singapore national standard"}
                  </small>
                </div>
              </div>
              <h3 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "What is ISO 42001 AIMS? Singapore's AI governance standard — why ISO 42001 certification matters in 2026"
                }
              </h3>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO/IEC 42001:2023 is the world's first international standard for Artificial Intelligence Management Systems. It provides a framework for organisations to establish policies and processes for the responsible development, provision, and use of AI systems — covering governance, risk management, transparency, human oversight, and ethical AI across the entire AI lifecycle. Singapore has nationally adopted ISO 42001 as SS ISO/IEC 42001:2024. The Singapore Accreditation Council (SAC) launched its ISO/IEC 42001 AIMS accreditation programme in early 2025. ISO 42001 is a management system standard — not a product standard. Certification confirms that your organisation has a robust, auditable system for governing AI."
                }
              </p>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {
                  "ISO 42001 AIMS — eight core governance components ICFC implements"
                }
              </h3>
              <div className="mt-[30px] mr-[0] mb-[30px] ml-[0] grid [grid-template-columns:repeat(2,_1fr)] max-[768px]:[grid-template-columns:1fr] gap-[20px]">
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"📋 AI policy framework"}
                  </strong>
                  <br />
                  {
                    "Board-endorsed AI policy covering values, risk appetite, human oversight, and accountability structures"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"🗂️ AI use case register"}
                  </strong>
                  <br />
                  {
                    "Inventory of all AI systems — purpose, data used, decisions influenced, risk level, and ownership"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"⚖️ AI risk assessment"}
                  </strong>
                  <br />
                  {
                    "Risk assessment across the AI lifecycle — bias, transparency, security, data quality, and misuse risks"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"👁️ Human oversight controls"}
                  </strong>
                  <br />
                  {
                    "Documented human review, override, and intervention procedures for AI-driven decisions (Annex A.6)"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"📊 Performance monitoring"}
                  </strong>
                  <br />
                  {
                    "AI accuracy, fairness, bias, and performance metrics — measured continuously post-deployment"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"🔗 Third-party AI governance"}
                  </strong>
                  <br />
                  {
                    "Supplier and CSP AI assessment (Annex A.9) — for Microsoft Copilot, Salesforce AI, LLM API use"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"🚨 AI incident management"}
                  </strong>
                  <br />
                  {
                    "Detection, escalation, and response procedures for AI failures, bias incidents, and unexpected outputs"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"🔄 Continual improvement"}
                  </strong>
                  <br />
                  {
                    "PDCA-driven AIMS improvement as AI systems evolve, regulations change, and new AI is deployed"
                  }
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Singapore's AI governance regulatory landscape — 2026"}
              </h3>
              <table className="[caption-side:bottom] [border-collapse:collapse] mt-[20px] mr-[0] mb-[20px] ml-[0] w-full text-[14px]">
                <thead className="[border-color:inherit] [border-style:solid] [border-width:0]">
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <th className="text-left [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Framework / Regulator"}
                    </th>
                    <th className="text-left [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Requirement"}
                    </th>
                    <th className="text-left [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Sectors"}
                    </th>
                    <th className="text-left [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"ISO 42001 alignment"}
                    </th>
                  </tr>
                </thead>
                <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"MAS AI Risk Management Guidelines (2026)"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "Board-level AI oversight, 3-LOD AI governance, AI inventory, full lifecycle controls"
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"All MAS-regulated FIs"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Direct alignment"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"IMDA Model AI Governance Framework 2.0"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "Voluntary framework — AI Verify crosswalk published June 2024"
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"All industries"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Direct alignment"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"IMDA Agentic AI Framework (Jan 2026)"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "Governance for autonomous AI agents — human accountability mandated"
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"All deploying agentic AI"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Strong alignment"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"CSA Cyber Trust Mark (SS 712:2025)"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "AI security pillar — new mandatory control domain for CII operators"
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"CII operators"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ CTM AI pillar aligned"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"EU AI Act (Aug 2025 enforcement)"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "High-risk AI system requirements — conformity mechanism"
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"EU citizen data processors"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Primary conformity pathway"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"PDPC / PDPA"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "Purpose limitation, data minimisation, automated decision accountability"
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"All organisations"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"≈ Annex A.7 data governance"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"SGX sustainability reporting (ISSB)"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"AI-related ESG disclosures — governance of AI systems"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"SGX-listed companies"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"≈ Partial alignment"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"GovTech tender criteria"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "AI governance certification increasingly weighted for vendors"
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"Government suppliers"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Certification expected"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-wrap mt-[1.5rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] mb-[5px]!">
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[0.375rem]!">
                    <div className="mb-[1rem]!">
                      <Icon
                        name="survey"
                        className="text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]! inline-block [font-style:normal] text-[#C8102E]!"
                      />
                    </div>
                    <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"🔍 AIMS Audit Services"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Gap analysis, Stage 1 & 2, pre-certification, surveillance. EDG eligible."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#fff] [text-decoration:none] pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] inline-flex items-center gap-[8px] rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:[transform:translateX(5px)]"
                    >
                      {"Explore audit →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[0.375rem]!">
                    <div className="mb-[1rem]!">
                      <Icon
                        name="file"
                        className="text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]! inline-block [font-style:normal] text-[#C8102E]!"
                      />
                    </div>
                    <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"🤖 AIMS Consultation"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Full implementation, ISO 27001 integration, MAS AI alignment, EDG grant managed."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#fff] [text-decoration:none] pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] inline-flex items-center gap-[8px] rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:[transform:translateX(5px)]"
                    >
                      {"Explore consulting →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[0.375rem]!">
                    <div className="mb-[1rem]!">
                      <Icon
                        name="user"
                        className="text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]! inline-block [font-style:normal] text-[#C8102E]!"
                      />
                    </div>
                    <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"🎓 AIMS Training"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Lead Auditor (PECB pathway), Internal Auditor, Implementer, Board governance. SkillsFuture eligible."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#fff] [text-decoration:none] pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] inline-flex items-center gap-[8px] rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:[transform:translateX(5px)]"
                    >
                      {"Explore training →"}
                    </SiteLink>
                  </div>
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Client outcomes · Singapore"}
              </h3>
              <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#C8102E]">
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    '"ICFC was the first consultant in Singapore to help us implement ISO 42001. Their AI use case register methodology was rigorous and practical — we mapped 23 AI systems in two weeks. The EDG grant covered 50% of the project. Highly recommended."'
                  }
                </p>
                <strong className="[font-weight:bolder]">
                  {"— CTO, AI platform provider, Singapore"}
                </strong>
              </div>
              <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#C8102E]">
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    '"We needed ISO 42001 to satisfy MAS AI Risk Management Guidelines. ICFC\'s integrated ISO 27001 + ISO 42001 approach reduced our total implementation cost by 35% versus doing them separately."'
                  }
                </p>
                <strong className="[font-weight:bolder]">
                  {"— CISO, Digital bank, Singapore"}
                </strong>
              </div>
              <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#C8102E]">
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "\"ICFC's agentic AI governance framework — built on ISO 42001 and aligned to IMDA's January 2026 framework — gave us exactly what we needed to win an enterprise healthcare contract.\""
                  }
                </p>
                <strong className="[font-weight:bolder]">
                  {"— VP Product & Compliance, HealthTech company, Singapore"}
                </strong>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"ICFC's ISO 42001 audit process — AI inventory to certificate"}
              </h3>
              <div className="mt-[25px] mr-[0] mb-[25px] ml-[0] flex flex-wrap gap-[15px]">
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"01"}
                  </div>
                  {"Free briefing"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"02"}
                  </div>
                  {"AI inventory"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"03"}
                  </div>
                  {"Gap analysis"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"04"}
                  </div>
                  {"Grant application"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"05"}
                  </div>
                  {"Pre-cert audit"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"06"}
                  </div>
                  {"CB assessment → certificate"}
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Related services"}
              </h3>
              <div className="mt-[30px] mr-[0] mb-[30px] ml-[0] flex flex-wrap gap-[20px]">
                <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:#f8f9fa] rounded-[16px] [flex:1] min-w-[200px] text-center">
                  <span className="mb-[12px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] [background:#C8102E] text-[white] text-[12px] rounded-[20px] inline-block">
                    {"🔒 ISO 27001"}
                  </span>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"30–40% saving via integrated AIMS + ISMS scope"}
                  </p>
                </div>
                <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:#f8f9fa] rounded-[16px] [flex:1] min-w-[200px] text-center">
                  <span className="mb-[12px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] [background:#C8102E] text-[white] text-[12px] rounded-[20px] inline-block">
                    {"🛡️ ISO 27701"}
                  </span>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"AI + personal data governance — Annex A.7 integration"}
                  </p>
                </div>
                <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:#f8f9fa] rounded-[16px] [flex:1] min-w-[200px] text-center">
                  <span className="mb-[12px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] [background:#C8102E] text-[white] text-[12px] rounded-[20px] inline-block">
                    {"🔐 Cyber Trust Mark"}
                  </span>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"SS 712:2025 AI security + ISO 42001 integration"}
                  </p>
                </div>
              </div>
              <div className="mt-[30px] mr-[0] mb-[30px] ml-[0] pt-[30px] pr-[30px] pb-[30px] pl-[30px] [background:#1a1a2e] text-[white] rounded-[20px] text-center">
                <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {
                    "新加坡ISO 42001人工智能管理体系（AIMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ICFC是新加坡首家专注ISO 42001认证的顾问公司，提供人工智能使用清单建立、全面AIMS实施及培训服务，涵盖金融、医疗、物流、制造等25大行业。与IMDA AI Verify框架、MAS AI风险管理指南及CSA网络信任标志AI安全支柱完全对齐。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务。"
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">{"关键词："}</strong>
                  {
                    "ISO 42001新加坡 · 人工智能管理体系 · AIMS认证 · AI治理 · 负责任AI · IMDA AI Verify · MAS AI指南 · EDG补助金 · 最佳AI治理顾问 · 实惠ISO 42001认证"
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#0d6efd] hover:text-[#fff] hover:bg-[#0b5ed7] hover:[border-color:#0a58ca] focus-visible:text-[#fff] focus-visible:bg-[#0b5ed7] focus-visible:[border-color:#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] active:text-[#fff] active:bg-[#0a58ca] active:[border-color:#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] mt-[.5rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#C8102E] items-center justify-center gap-[10px] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div className="mt-[1.5rem]! text-center! mr-[0] mb-[25px] ml-[0] pt-[25px] pr-[25px] pb-[25px] pl-[25px] [background:#f8f9fa] rounded-[20px]">
                <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {"Start your ISO 42001 AIMS journey today"}
                </h3>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Free 30-minute AI governance assessment. Honest gap analysis of your AI systems against ISO 42001:2023. EDG grant eligibility check. MAS AI Guidelines alignment review. No obligation."
                  }
                </p>
                <div className="justify-center! mt-[1rem]! gap-[1rem]! flex flex-wrap">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#0d6efd] hover:text-[#fff] hover:bg-[#0b5ed7] hover:[border-color:#0a58ca] focus-visible:text-[#fff] focus-visible:bg-[#0b5ed7] focus-visible:[border-color:#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] active:text-[#fff] active:bg-[#0a58ca] active:[border-color:#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#C8102E] items-center justify-center gap-[10px] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free AIMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)]"
                  >
                    {"Check grant eligibility"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)]"
                  >
                    {"Get free quote"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Frequently asked questions — ISO 42001 AIMS"}
              </h3>
              <AccordionGroup id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "How is ISO 42001 different from IMDA's Model AI Governance Framework?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top-left-radius:0.375rem] [border-top-right-radius:0.375rem] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "IMDA's Framework is voluntary and principles-based. ISO 42001 is a certifiable international management system standard — an accredited third-party verifies your AI governance. A formal crosswalk mapping AI Verify to ISO 42001 was published in June 2024."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "We use third-party AI tools (Microsoft Copilot, OpenAI API). Do we need to certify those?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "No — ISO 42001 certifies your organisation's AI management system, not the tools. However, Annex A.9 requires you to assess third-party AI risks. Microsoft 365 Copilot has achieved ISO 42001 certification, so you can leverage their certification evidence as part of your own governance documentation."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How much does ISO 42001 consultation cost after grants?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "Typical fees S$15,000–S$40,000 depending on AI systems in scope. EDG covers up to 50% for eligible SMEs. Integrated ISO 27001 + ISO 42001 projects save 30–40%."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Is ISO 42001 required by MAS for financial institutions?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "The MAS AI Risk Management Guidelines (2026) establish supervisory expectations — ISO 42001 is the most efficient framework for demonstrating compliance."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"We are a small AI startup. Is ISO 42001 appropriate?"}
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] [border-bottom-right-radius:0.375rem] [border-bottom-left-radius:0.375rem] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "Yes — a focused initial scope covering one to two AI systems is both achievable and commercially valuable. The EDG grant significantly reduces the financial barrier."
                  }
                </AccordionItem>
              </AccordionGroup>
              <div className="text-[.875em] text-[rgba(33,_37,_41,_0.75)]! mt-[40px]">
                <strong className="[font-weight:bolder]">
                  {"Page optimised for:"}
                </strong>
                {
                  " ISO 42001 Singapore · AIMS certification SG · AI governance 2026 · EDG grant ISO 42001 · best ISO 42001 consultant SG · budget AI governance · 新加坡ISO 42001 · 人工智能管理体系 · AIMS认证"
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
      <div className="w-full pr-[calc(0_*_.5)] pl-[calc(0_*_.5)] mr-[auto] ml-[auto]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="pt-[21px] pb-[21px] [background:radial-gradient(174.58%_135.27%_at_35.14%_-15.53%,_rgba(47,_62,_75,_0.6)_0%,_rgba(47,_62,_75,_0.036)_100%)] [backdrop-filter:blur(21px)] flex items-center gap-[15px] justify-center [padding-inline:15px]">
              <span className="bg-[#FFFFFF] w-[17px] min-w-[17px] h-[24px] flex max-[575px]:hidden items-center justify-center rounded-[4px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  className="[vertical-align:middle]"
                >
                  <path
                    d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                    fill="#AB052D"
                  ></path>
                </svg>
              </span>
              <div className="text-[14px] font-medium">
                <p className="mt-[0] mb-[0] text-[14px] font-medium text-[rgba(255,_255,_255,_0.8)] leading-[28px] max-[575px]:text-center">
                  {
                    "ISO 42001 AIMS certification — Singapore's first dedicated consultancy. "
                  }
                  <SiteLink
                    href="/contact-us"
                    className="text-[inherit] [text-decoration:underline] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] inline-block"
                  >
                    {"Start your AI governance journey today →"}
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
