import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsfourPageContent() {
  return (
    <SitePageTemplate route="services-detailsfour.html">
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
      title="ISO 14001:2026 · Environmental Management System · NEA · Singapore Green Plan 2030"
      description="Environmental Management System — ISO 14001:2026 certified, Green Plan aligned, grant-funded"
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
                  alt="ISO 14001:2026 Environmental Management System"
                  className="max-w-full h-auto w-full rounded-[6px]"
                />
              </div>
              <p className="leading-relaxed mt-[30px] mb-4">
                {
                  "ISO 14001:2026 — published 15 April 2026 — is the world's most widely used environmental management standard, trusted by more than 670,000 certified organisations globally. The 2026 edition introduces stronger alignment with climate change, biodiversity, resource efficiency, and supply chain lifecycle thinking. In Singapore, it is essential for SGX sustainability reporting, Carbon Pricing Act compliance, NEA and EPMA regulatory alignment, and Green Plan 2030 commitments. ICFC delivers EMS gap analysis, full ISO 14001:2026 implementation, 2015-to-2026 transition support, and training — with EDG grant management built in."
                }
              </p>
              <div className="grid [grid-template-columns:repeat(4,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"Apr 2026"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"ISO 14001:2026 published"}
                  </p>
                  <small>{"start transition now"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"May 2029"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"2015 certificates expire"}
                  </p>
                  <small>{"3-year transition window"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"S$45"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"/tCO₂e carbon tax 2026"}
                  </p>
                  <small>{"S$50–80 by 2030"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"670K+"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Organisations certified"}
                  </p>
                  <small>{"globally"}</small>
                </div>
              </div>
              <div className="[background:linear-gradient(135deg,_#e8f5e9,_#f1f8e9)] rounded-[20px] p-[25px] m-[25px_0]">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mb-[15px]">
                  {
                    "🌿 ISO 14001:2026 — what changed and what it means for Singapore organisations"
                  }
                </h3>
                <div className="-mx-3 flex flex-wrap gap-y-6">
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="[background:#fff] rounded-[12px] p-[15px] mb-[15px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong>{"📅 Published"}</strong>
                      <br />
                      {
                        "ISO 14001:2026 published 15 April 2026 — replaces ISO 14001:2015 including the 2024 climate change amendment"
                      }
                    </div>
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="[background:#fff] rounded-[12px] p-[15px] mb-[15px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong>{"⏰ Transition"}</strong>
                      <br />
                      {
                        "3-year transition window — all ISO 14001:2015 certificates must transition to 2026 edition by May 2029"
                      }
                    </div>
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="[background:#fff] rounded-[12px] p-[15px] mb-[15px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong>{"🌍 Climate"}</strong>
                      <br />
                      {
                        "Climate change, biodiversity, and natural resource use now explicitly required in Clause 4 context analysis"
                      }
                    </div>
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="[background:#fff] rounded-[12px] p-[15px] mb-[15px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong>{"🔗 Supply chain"}</strong>
                      <br />
                      {
                        "Much greater focus on supply chain lifecycle thinking — upstream and downstream environmental impacts"
                      }
                    </div>
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="[background:#fff] rounded-[12px] p-[15px] mb-[15px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong>{"👔 Leadership"}</strong>
                      <br />
                      {
                        "Top management accountability extended to all relevant roles — not just management roles"
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#C8102E] text-[#fff] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free EMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#C8102E] [background:transparent] text-[#C8102E] hover:[background:#C8102E] hover:text-[#fff] hover:[transform:translateY(-2px)] ml-2"
                  >
                    {"2026 transition support"}
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
                    "EDG / MASA grant — up to 50% co-funding for EMS consultation"
                  }
                </h5>
                <p className="leading-relaxed mb-[0]">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 14001 consultation fees for eligible Singapore SMEs. Enhanced rates applied for sustainability standards. ICFC manages your application before project commencement. Integrated IMS projects (14001 + 50001 + 45001) qualify for EDG co-funding in a single application."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#3B6D11] text-[#fff] hover:[background:#2D550D] hover:[transform:translateY(-2px)]"
                >
                  {"Check eligibility →"}
                </SiteLink>
              </div>
              <div className="grid [grid-template-columns:repeat(4,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="text-center">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"25+"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Singapore industries"}
                  </p>
                  <small>{"ICFC serves"}</small>
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
                    {"NEA"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"EPMA & CPA aligned"}
                  </p>
                  <small>{"legal register"}</small>
                </div>
                <div className="text-center">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"Green"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Plan 2030 aligned"}
                  </p>
                  <small>{"objectives framework"}</small>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[10px] font-bold">
                {
                  "What is ISO 14001:2026 EMS? Singapore's environmental certification standard — why ISO 14001:2026 matters urgently"
                }
              </h3>
              <p className="leading-relaxed mb-4">
                {
                  "ISO 14001:2026 provides a framework for organisations to manage, improve, and demonstrate their environmental performance. The 2026 edition reinforces what matters most: environmental protection and business outcomes, with significantly stronger alignment with today's environmental priorities — climate change, biodiversity, and resource efficiency. For Singapore organisations, it is the cornerstone of Green Plan 2030 alignment, SGX ESG reporting, and Carbon Pricing Act compliance."
                }
              </p>
              <p className="leading-relaxed mb-4">
                {
                  "ISO 14001:2026 was published on 15 April 2026. From April 15, 2026, organisations certified to ISO 14001:2015 have three years to transition to the revised standard — all ISO 14001:2015 certificates will expire in May 2029. ICFC recommends starting your transition gap analysis immediately."
                }
              </p>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {
                  "ISO 14001:2026 key changes — what ICFC addresses in every engagement"
                }
              </h3>
              <div className="grid [grid-template-columns:repeat(2,_1fr)] gap-[20px] m-[30px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"Clause 4 — Context"}</strong>
                  <br />
                  {
                    "Climate, biodiversity & resources now explicit. Climate change, biodiversity loss, and natural resource use must now be explicitly considered in the organisational context analysis."
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"Clause 5 — Leadership"}</strong>
                  <br />
                  {
                    "Leadership accountability extended to all roles. Top management must support all relevant roles across the organisation's hierarchy."
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"Clause 6 — Planning"}</strong>
                  <br />
                  {
                    "New: planning and managing of changes. Organisations must plan and manage changes that affect intended EMS outcomes."
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"Clause 8 — Operation"}</strong>
                  <br />
                  {
                    "Lifecycle and supply chain focus strengthened. Broader scope from operations to full value chain, including sourcing and procurement decisions."
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"Clause 9 — Evaluation"}</strong>
                  <br />
                  {
                    "Explicit EMS effectiveness evaluation required. Internal audits must define objectives — not just scope and criteria."
                  }
                </div>
                <div className="bg-slate-50 p-4 rounded-md">
                  <strong>{"Clause 10 — Improvement"}</strong>
                  <br />
                  {
                    "Structured nonconformity and improvement linkage. Clear linkage between Clause 9 findings and continual improvement tracking."
                  }
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {
                  "Singapore environmental regulatory framework — ISO 14001:2026 alignment"
                }
              </h3>
              <table className="w-full [border-collapse:collapse] m-[20px_0] text-[14px]">
                <thead>
                  <tr>
                    <th className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Regulation / Framework"}
                    </th>
                    <th className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Key obligation"}
                    </th>
                    <th className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Sectors"}
                    </th>
                    <th className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"ISO 14001:2026 alignment"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"Carbon Pricing Act (CPA)"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "S$45/tCO₂e carbon tax 2026 — S$50–80/tCO₂e by 2030. Facilities emitting ≥25,000 tCO₂e must report."
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"Manufacturing, energy, chemicals, aviation, maritime"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Clause 4 context + GHG monitoring controls"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"EPMA — Environmental Protection and Management Act"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "Regulates industrial pollution — air, water, land, noise. Licences, permit conditions, scheduled waste management."
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"Manufacturing, construction, chemicals, logistics"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Legal register + operational controls"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"NEA regulations"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "Waste management, scheduled waste, hazardous chemicals, ambient noise, air quality standards."
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"All industries handling waste, chemicals, or emissions"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Compliance evaluation + aspect assessment"}
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"Singapore Green Plan 2030"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "Net zero by 2050. 30x30 food security. Green economy pillar. Energy Reset pillar."
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"All sectors"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {
                        "✓ Environmental objectives aligned to Green Plan targets"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"SGX Sustainability Reporting (ISSB)"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "SGX-listed companies must report Scope 1 & 2 GHG from FY2025. STI constituents: Scope 3 from FY2026."
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"All SGX-listed companies"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {
                        "✓ GHG monitoring data + environmental performance evidence"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"Energy Conservation Act (ECA)"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {
                        "Facilities consuming ≥54 TJ/year must implement mandatory Energy Management System."
                      }
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top]">
                      {"Large manufacturing, data centres"}
                    </td>
                    <td className="[border:1px_solid_#e2e8f0] p-[12px] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ ISO 50001 integration"}
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
                      {"🔍 EMS Audit Services"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Gap analysis, 2026 transition, Stage 1 & 2, pre-certification, internal audit. EDG eligible."
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
                      {"🌿 EMS Consultation"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Full implementation, 2015→2026 transition, IMS integration, EDG grant managed."
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
                      {"🎓 EMS Training"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Lead Auditor (CQI/IRCA), Internal Auditor, Implementer, 2026 transition course. SkillsFuture eligible."
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
                    '"ICFC\'s integrated ISO 9001 + ISO 14001 + ISO 45001 IMS approach was exactly right for our manufacturing operation. One gap analysis, one internal audit programme, one EDG grant application — and we achieved triple certification simultaneously."'
                  }
                </p>
                <strong>{"— OD, Precision manufacturer, Singapore"}</strong>
              </div>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#C8102E]">
                <p className="leading-relaxed mb-4">
                  {
                    '"ICFC\'s GHG monitoring procedure implementation within our ISO 14001 EMS was the most practically valuable work we have done this year. Our carbon tax liability was S$850,000 for 2025 — the EMS now gives us the systematic data to identify reductions."'
                  }
                </p>
                <strong>
                  {"— HSE manager, Chemical manufacturer, Jurong Island"}
                </strong>
              </div>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#C8102E]">
                <p className="leading-relaxed mb-4">
                  {
                    '"ICFC\'s combined ISO 14001 + ISO 50001 implementation gives us the systematic energy and GHG monitoring framework that satisfies customer requirements, ECA obligations, and the carbon tax simultaneously."'
                  }
                </p>
                <strong>{"— GM, Data centre operator, Singapore"}</strong>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {
                  "ICFC's EMS audit process — environmental aspect mapping to certificate"
                }
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
                  {"Env. aspects"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"03"}
                  </div>
                  {"2026 gap analysis"}
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
                  {"Certification → certificate"}
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {
                  "EMS consultation — from environmental aspect mapping to ISO 14001:2026 certificate"
                }
              </h3>
              <div className="flex flex-wrap gap-[15px] m-[25px_0]">
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"01"}
                  </div>
                  {"Free assessment"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"02"}
                  </div>
                  {"Grant application"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"03"}
                  </div>
                  {"Aspect mapping"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"04"}
                  </div>
                  {"Legal register"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"05"}
                  </div>
                  {"EMS build"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"06"}
                  </div>
                  {"Internal audit"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"07"}
                  </div>
                  {"Certification"}
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Related services"}
              </h3>
              <div className="flex flex-wrap gap-[20px] m-[30px_0]">
                <div className="[background:#f8f9fa] rounded-[16px] p-[20px] [flex:1] min-w-[200px] text-center">
                  <span className="[background:#C8102E] text-[white] text-[12px] p-[4px_10px] rounded-[20px] inline-block mb-[12px]">
                    {"⚡ ISO 50001"}
                  </span>
                  <p className="leading-relaxed mb-4">
                    {"ECA mandatory EMS + ISO 14001 integration"}
                  </p>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[20px] [flex:1] min-w-[200px] text-center">
                  <span className="[background:#C8102E] text-[white] text-[12px] p-[4px_10px] rounded-[20px] inline-block mb-[12px]">
                    {"✅ ISO 9001"}
                  </span>
                  <p className="leading-relaxed mb-4">
                    {"IMS integration — 20–30% saving combined"}
                  </p>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[20px] [flex:1] min-w-[200px] text-center">
                  <span className="[background:#C8102E] text-[white] text-[12px] p-[4px_10px] rounded-[20px] inline-block mb-[12px]">
                    {"🦺 ISO 45001"}
                  </span>
                  <p className="leading-relaxed mb-4">
                    {"Triple IMS: quality, environment, safety"}
                  </p>
                </div>
              </div>
              <div className="[background:#1a1a2e] text-[white] p-[30px] rounded-[20px] m-[30px_0] text-center">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {
                    "新加坡ISO 14001:2026环境管理体系（EMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "ICFC提供新加坡ISO 14001:2026环境管理体系全程认证服务，包括差距分析、2015至2026版过渡支持、环境因素识别、NEA/EPMA法规合规、碳税（CPA）温室气体监测、绿色计划2030目标设定及员工培训，涵盖制造、建筑、物流、数据中心等25大行业。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务。"
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"关键词："}</strong>
                  {
                    "ISO 14001新加坡 · 环境管理体系 · EMS认证 · 绿色计划2030 · 碳税合规 · NEA合规 · EDG补助金 · 最佳EMS顾问"
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
                  {"Start your ISO 14001:2026 EMS journey today"}
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "Free 30-minute environmental management assessment. Honest gap analysis against ISO 14001:2026. 2015-to-2026 transition timeline. NEA and EPMA regulatory alignment review. EDG grant eligibility check. No obligation."
                  }
                </p>
                <div className="flex justify-between flex-wrap gap-[20px] justify-center">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#C8102E] text-[#fff] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free EMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#C8102E] [background:transparent] text-[#C8102E] hover:[background:#C8102E] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                  >
                    {"2026 transition support"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#C8102E] [background:transparent] text-[#C8102E] hover:[background:#C8102E] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                  >
                    {"Check grant eligibility"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"Frequently asked questions — ISO 14001:2026 EMS"}
              </h3>
              <div id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "What are the key differences between ISO 14001:2015 and ISO 14001:2026?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "ISO 14001:2026 is an evolution, not a rewrite. Key changes: Clause 4 now explicitly requires climate change, biodiversity context; Clause 5 extends leadership accountability to all roles; Clause 6 adds change management requirement; Clause 8 strengthens supply chain lifecycle focus; Clause 9 requires explicit EMS effectiveness evaluation; Clause 10 has more structured corrective action approach."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How much time do we have to transition from ISO 14001:2015 to 2026?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "The 3-year transition window opened on 15 April 2026 — all ISO 14001:2015 certificates must be transitioned by May 2029. ICFC recommends starting your transition gap analysis immediately to avoid scrambling in 2028."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How does ISO 14001:2026 help with Singapore's carbon tax obligations?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Singapore's carbon tax is S$45/tCO₂e (2026) rising to S$50–80/tCO₂e by 2030. ISO 14001:2026 explicitly requires climate change in Clause 4 context and Clause 9 performance evaluation. ICFC implements CPA-compliant GHG monitoring procedures within your EMS."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Can we integrate ISO 14001 with ISO 9001 and ISO 45001?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Yes — ICFC strongly recommends IMS. ISO 14001:2026 maintains Annex SL High Level Structure, reducing total cost by 20–30% with a single EDG grant application covering all standards."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "We are not in manufacturing. Does ISO 14001:2026 apply to us?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Yes — office-based services have waste and energy impacts; data centres have significant energy and cooling impacts. The 2026 edition's supply chain lifecycle thinking also applies to any organisation with procurement activity."
                  }
                </AccordionItem>
              </div>
              <div className="mt-[40px] text-slate-500 text-sm">
                <strong>{"Page optimised for:"}</strong>
                {
                  " ISO 14001:2026 Singapore · EMS certification SG · Green Plan 2030 · carbon tax compliance · EDG grant ISO 14001 · best EMS consultant SG · 2015 to 2026 transition · NEA compliance · SGX ESG reporting"
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
                    "ISO 14001:2026 EMS certification — NEA aligned, Green Plan 2030 ready. "
                  }
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] [text-decoration:underline] inline-block hover:text-[#AB052D]"
                  >
                    {"Start your environmental management journey today →"}
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
