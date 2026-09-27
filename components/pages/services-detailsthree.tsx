import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsthreePageContent() {
  return (
    <SitePageTemplate route="services-detailsthree.html">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[100%]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 42001 AI Management System"
                  className="max-w-full h-auto w-full rounded-[6px]"
                />
              </div>
              <p className="leading-relaxed mt-[30px] mb-4">
                {
                  "ISO/IEC 42001:2023 is the world's first international standard for Artificial Intelligence Management Systems (AIMS). In Singapore, it is increasingly mandated by enterprise procurement, aligned with IMDA's AI governance frameworks, required by MAS AI Risk Management Guidelines (finalised 2026), and the foundation for CSA's Cyber Trust Mark AI security pillar. ICFC — Singapore's first dedicated ISO 42001 consultancy — delivers AIMS audit, consultation, and training with EDG grant management built in."
                }
              </p>
              <div className="grid [grid-template-columns:repeat(4,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"Dec 2023"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"ISO 42001 published"}
                  </p>
                  <small>{"world's first AI MSS"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"2024"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"SAC accreditation launched"}
                  </p>
                  <small>{"SG accreditation programme"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"4–6 mo"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Typical implementation"}
                  </p>
                  <small>{"AI inventory to certified"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"25+"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Singapore industries"}
                  </p>
                  <small>{"served"}</small>
                </div>
              </div>
              <div className="[background:linear-gradient(135deg,_#fff5f5,_#fff)] rounded-[20px] p-[25px] m-[25px_0]">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mb-[15px]">
                  {
                    "🤖 Why Singapore AI companies must act now — 2026 is the tipping point"
                  }
                </h3>
                <div className="-mx-3 flex flex-wrap gap-y-6">
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <strong>{"MAS AI Risk Management Guidelines:"}</strong>
                    {
                      " finalised 2026, supervisory expectations for all MAS-regulated FIs"
                    }
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <strong>
                      {"CTM Cyber Trust Mark AI security pillar (SS 712:2025):"}
                    </strong>
                    {" new mandatory control domain for CII operators"}
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <strong>{"EU AI Act high-risk AI enforcement:"}</strong>
                    {
                      " August 2025 onset — ISO 42001 is the primary conformity pathway"
                    }
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <strong>{"Procurement:"}</strong>
                    {
                      " Enterprise RFPs now routinely include AI governance certification requirements"
                    }
                  </div>
                </div>
                <div>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#C8102E] text-[#fff] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free AIMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#C8102E] [background:transparent] text-[#C8102E] hover:[background:#C8102E] hover:text-[#fff] hover:[transform:translateY(-2px)] ml-2"
                  >
                    {"Get free quote"}
                  </SiteLink>
                </div>
              </div>
              <div className="mb-4 rounded-md border p-4 border-0 p-6 rounded-lg">
                <Icon
                  name="star"
                  className="text-[#3B6D11] text-[28px] mr-4 float-left"
                />
                <h5 className="font-bold leading-tight text-[#2B3944] text-xl text-slate-900">
                  {
                    "EDG / MASA grant — up to 50% co-funding for ISO 42001 consultation"
                  }
                </h5>
                <p className="leading-relaxed mb-[0]">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 42001 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. Integrated AIMS + ISO 27001 engagements can maximise total grant co-funding across both standards."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#3B6D11] text-[#fff] hover:[background:#2D550D] hover:[transform:translateY(-2px)]"
                >
                  {"Check grant eligibility →"}
                </SiteLink>
              </div>
              <div className="grid [grid-template-columns:repeat(4,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="text-center">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"IMDA"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"AI Verify crosswalk"}
                  </p>
                  <small>{"published June 2024"}</small>
                </div>
                <div className="text-center">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"50%"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"EDG grant co-funding"}
                  </p>
                  <small>{"for qualifying SMEs"}</small>
                </div>
                <div className="text-center">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"SAC"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Accreditation programme"}
                  </p>
                  <small>{"launched 2025"}</small>
                </div>
                <div className="text-center">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"SS"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"ISO/IEC 42001:2024"}
                  </p>
                  <small>{"Singapore national standard"}</small>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[10px] font-bold">
                {
                  "What is ISO 42001 AIMS? Singapore's AI governance standard — why ISO 42001 certification matters in 2026"
                }
              </h3>
              <p className="leading-relaxed mb-4">
                {
                  "ISO/IEC 42001:2023 is the world's first international standard for Artificial Intelligence Management Systems. It provides a framework for organisations to establish policies and processes for the responsible development, provision, and use of AI systems — covering governance, risk management, transparency, human oversight, and ethical AI across the entire AI lifecycle. Singapore has nationally adopted ISO 42001 as SS ISO/IEC 42001:2024. The Singapore Accreditation Council (SAC) launched its ISO/IEC 42001 AIMS accreditation programme in early 2025. ISO 42001 is a management system standard — not a product standard. Certification confirms that your organisation has a robust, auditable system for governing AI."
                }
              </p>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {
                  "ISO 42001 AIMS — eight core governance components ICFC implements"
                }
              </h3>
              <div className="grid [grid-template-columns:repeat(2,_1fr)] gap-[20px] m-[30px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"📋 AI policy framework"}</strong>
                  <br />
                  {
                    "Board-endorsed AI policy covering values, risk appetite, human oversight, and accountability structures"
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"🗂️ AI use case register"}</strong>
                  <br />
                  {
                    "Inventory of all AI systems — purpose, data used, decisions influenced, risk level, and ownership"
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"⚖️ AI risk assessment"}</strong>
                  <br />
                  {
                    "Risk assessment across the AI lifecycle — bias, transparency, security, data quality, and misuse risks"
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"👁️ Human oversight controls"}</strong>
                  <br />
                  {
                    "Documented human review, override, and intervention procedures for AI-driven decisions (Annex A.6)"
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"📊 Performance monitoring"}</strong>
                  <br />
                  {
                    "AI accuracy, fairness, bias, and performance metrics — measured continuously post-deployment"
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"🔗 Third-party AI governance"}</strong>
                  <br />
                  {
                    "Supplier and CSP AI assessment (Annex A.9) — for Microsoft Copilot, Salesforce AI, LLM API use"
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"🚨 AI incident management"}</strong>
                  <br />
                  {
                    "Detection, escalation, and response procedures for AI failures, bias incidents, and unexpected outputs"
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"🔄 Continual improvement"}</strong>
                  <br />
                  {
                    "PDCA-driven AIMS improvement as AI systems evolve, regulations change, and new AI is deployed"
                  }
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Singapore's AI governance regulatory landscape — 2026"}
              </h3>
              <table className="w-full [border-collapse:collapse] m-[20px_0] text-[14px]">
                <thead>
                  <tr>
                    <th className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Framework / Regulator"}
                    </th>
                    <th className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Requirement"}
                    </th>
                    <th className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Sectors"}
                    </th>
                    <th className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"ISO 42001 alignment"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"MAS AI Risk Management Guidelines (2026)"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "Board-level AI oversight, 3-LOD AI governance, AI inventory, full lifecycle controls"
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"All MAS-regulated FIs"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Direct alignment"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"IMDA Model AI Governance Framework 2.0"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "Voluntary framework — AI Verify crosswalk published June 2024"
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"All industries"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Direct alignment"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"IMDA Agentic AI Framework (Jan 2026)"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "Governance for autonomous AI agents — human accountability mandated"
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"All deploying agentic AI"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Strong alignment"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"CSA Cyber Trust Mark (SS 712:2025)"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "AI security pillar — new mandatory control domain for CII operators"
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"CII operators"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ CTM AI pillar aligned"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"EU AI Act (Aug 2025 enforcement)"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "High-risk AI system requirements — conformity mechanism"
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"EU citizen data processors"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Primary conformity pathway"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"PDPC / PDPA"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "Purpose limitation, data minimisation, automated decision accountability"
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"All organisations"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"≈ Annex A.7 data governance"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"SGX sustainability reporting (ISSB)"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"AI-related ESG disclosures — governance of AI systems"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"SGX-listed companies"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"≈ Partial alignment"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"GovTech tender criteria"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "AI governance certification increasingly weighted for vendors"
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"Government suppliers"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Certification expected"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="-mx-3 flex flex-wrap gap-y-6 mb-[5px]">
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="p-6 border border-slate-200 rounded-md h-full bg-white">
                    <div>
                      <Icon
                        name="survey"
                        className="text-[#C8102E] text-[40px]"
                      />
                    </div>
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"🔍 AIMS Audit Services"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Gap analysis, Stage 1 & 2, pre-certification, surveillance. EDG eligible."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D] inline-flex items-center gap-[8px] [background:#C8102E] text-[#fff] p-[10px_24px] rounded-[50px] text-[13px] font-semibold [text-decoration:none] [border:none] hover:[background:#8B0A1E] hover:[transform:translateX(5px)] hover:text-[#fff]"
                    >
                      {"Explore audit →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="p-6 border border-slate-200 rounded-md h-full bg-white">
                    <div>
                      <Icon
                        name="file"
                        className="text-[#C8102E] text-[40px]"
                      />
                    </div>
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"🤖 AIMS Consultation"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Full implementation, ISO 27001 integration, MAS AI alignment, EDG grant managed."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D] inline-flex items-center gap-[8px] [background:#C8102E] text-[#fff] p-[10px_24px] rounded-[50px] text-[13px] font-semibold [text-decoration:none] [border:none] hover:[background:#8B0A1E] hover:[transform:translateX(5px)] hover:text-[#fff]"
                    >
                      {"Explore consulting →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="p-6 border border-slate-200 rounded-md h-full bg-white">
                    <div>
                      <Icon
                        name="user"
                        className="text-[#C8102E] text-[40px]"
                      />
                    </div>
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"🎓 AIMS Training"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Lead Auditor (PECB pathway), Internal Auditor, Implementer, Board governance. SkillsFuture eligible."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D] inline-flex items-center gap-[8px] [background:#C8102E] text-[#fff] p-[10px_24px] rounded-[50px] text-[13px] font-semibold [text-decoration:none] [border:none] hover:[background:#8B0A1E] hover:[transform:translateX(5px)] hover:text-[#fff]"
                    >
                      {"Explore training →"}
                    </SiteLink>
                  </div>
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Client outcomes · Singapore"}
              </h3>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#C8102E]">
                <p className="leading-relaxed mb-4">
                  {
                    '"ICFC was the first consultant in Singapore to help us implement ISO 42001. Their AI use case register methodology was rigorous and practical — we mapped 23 AI systems in two weeks. The EDG grant covered 50% of the project. Highly recommended."'
                  }
                </p>
                <strong>{"— CTO, AI platform provider, Singapore"}</strong>
              </div>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#C8102E]">
                <p className="leading-relaxed mb-4">
                  {
                    '"We needed ISO 42001 to satisfy MAS AI Risk Management Guidelines. ICFC\'s integrated ISO 27001 + ISO 42001 approach reduced our total implementation cost by 35% versus doing them separately."'
                  }
                </p>
                <strong>{"— CISO, Digital bank, Singapore"}</strong>
              </div>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#C8102E]">
                <p className="leading-relaxed mb-4">
                  {
                    "\"ICFC's agentic AI governance framework — built on ISO 42001 and aligned to IMDA's January 2026 framework — gave us exactly what we needed to win an enterprise healthcare contract.\""
                  }
                </p>
                <strong>
                  {"— VP Product & Compliance, HealthTech company, Singapore"}
                </strong>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"ICFC's ISO 42001 audit process — AI inventory to certificate"}
              </h3>
              <div className="flex flex-wrap gap-[15px] m-[25px_0]">
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"01"}
                  </div>
                  {"Free briefing"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"02"}
                  </div>
                  {"AI inventory"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"03"}
                  </div>
                  {"Gap analysis"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"04"}
                  </div>
                  {"Grant application"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"05"}
                  </div>
                  {"Pre-cert audit"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"06"}
                  </div>
                  {"CB assessment → certificate"}
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Related services"}
              </h3>
              <div className="flex flex-wrap gap-[20px] m-[30px_0]">
                <div className="[background:#f8f9fa] rounded-[16px] p-[20px] [flex:1] min-w-[200px] text-center">
                  <span className="[background:#C8102E] text-[white] text-[12px] p-[4px_10px] rounded-[20px] inline-block mb-[12px]">
                    {"🔒 ISO 27001"}
                  </span>
                  <p className="leading-relaxed mb-4">
                    {"30–40% saving via integrated AIMS + ISMS scope"}
                  </p>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[20px] [flex:1] min-w-[200px] text-center">
                  <span className="[background:#C8102E] text-[white] text-[12px] p-[4px_10px] rounded-[20px] inline-block mb-[12px]">
                    {"🛡️ ISO 27701"}
                  </span>
                  <p className="leading-relaxed mb-4">
                    {"AI + personal data governance — Annex A.7 integration"}
                  </p>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[20px] [flex:1] min-w-[200px] text-center">
                  <span className="[background:#C8102E] text-[white] text-[12px] p-[4px_10px] rounded-[20px] inline-block mb-[12px]">
                    {"🔐 Cyber Trust Mark"}
                  </span>
                  <p className="leading-relaxed mb-4">
                    {"SS 712:2025 AI security + ISO 42001 integration"}
                  </p>
                </div>
              </div>
              <div className="[background:#1a1a2e] text-[white] p-[30px] rounded-[20px] m-[30px_0] text-center">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {
                    "新加坡ISO 42001人工智能管理体系（AIMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "ICFC是新加坡首家专注ISO 42001认证的顾问公司，提供人工智能使用清单建立、全面AIMS实施及培训服务，涵盖金融、医疗、物流、制造等25大行业。与IMDA AI Verify框架、MAS AI风险管理指南及CSA网络信任标志AI安全支柱完全对齐。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务。"
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"关键词："}</strong>
                  {
                    "ISO 42001新加坡 · 人工智能管理体系 · AIMS认证 · AI治理 · 负责任AI · IMDA AI Verify · MAS AI指南 · EDG补助金 · 最佳AI治理顾问 · 实惠ISO 42001认证"
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#C8102E] text-[#fff] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div className="[background:#f8f9fa] rounded-[20px] p-[25px] m-[25px_0] text-center">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {"Start your ISO 42001 AIMS journey today"}
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "Free 30-minute AI governance assessment. Honest gap analysis of your AI systems against ISO 42001:2023. EDG grant eligibility check. MAS AI Guidelines alignment review. No obligation."
                  }
                </p>
                <div className="flex justify-between flex-wrap gap-[20px] justify-center">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#C8102E] text-[#fff] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free AIMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#C8102E] [background:transparent] text-[#C8102E] hover:[background:#C8102E] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                  >
                    {"Check grant eligibility"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#C8102E] [background:transparent] text-[#C8102E] hover:[background:#C8102E] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                  >
                    {"Get free quote"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"Frequently asked questions — ISO 42001 AIMS"}
              </h3>
              <div id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "How is ISO 42001 different from IMDA's Model AI Governance Framework?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Yes — a focused initial scope covering one to two AI systems is both achievable and commercially valuable. The EDG grant significantly reduces the financial barrier."
                  }
                </AccordionItem>
              </div>
              <div className="mt-[40px] text-slate-500 text-sm">
                <strong>{"Page optimised for:"}</strong>
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
                    "ISO 42001 AIMS certification — Singapore's first dedicated consultancy. "
                  }
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] [text-decoration:underline] inline-block hover:text-[#AB052D]"
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
