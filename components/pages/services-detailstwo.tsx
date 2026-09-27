import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailstwoPageContent() {
  return (
    <SitePageTemplate route="services-detailstwo.html">
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
      title="ISO 37001:2025 · Anti-Bribery Management System · Singapore · CPIB endorsed"
      description="Anti-bribery management — ISO 37001:2025 certified, PCA-aligned, grant-funded"
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
                  alt="ISO 37001 Anti-Bribery Management System"
                  className="max-w-full h-auto w-full rounded-[6px]"
                />
              </div>
              <p className="leading-relaxed mt-[30px] mb-4">
                {
                  "ISO 37001:2025 is the world's leading standard for Anti-Bribery Management Systems (ABMS). In Singapore, it is nationally adopted as SS ISO 37001 — jointly launched by SPRING Singapore and the Corrupt Practices Investigation Bureau (CPIB) — and aligned to the Prevention of Corruption Act (PCA). The 2025 edition introduces critical updates including climate change risk, enhanced conflicts of interest management, and stronger compliance culture requirements. ICFC delivers full ABMS audit, consultation, and training with EDG grant management built into every engagement, across all 35 major Singapore industries."
                }
              </p>
              <div className="-mx-3 flex flex-wrap gap-y-6 mt-[30px] mb-[40px]">
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"2025"}
                    </div>
                    <p className="leading-relaxed mb-[0]">
                      {"New ISO 37001 edition"}
                    </p>
                    <small>{"climate risk + CoI"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"6–12"}
                    </div>
                    <p className="leading-relaxed mb-[0]">
                      {"Months typical ABMS"}
                    </p>
                    <small>{"certification timeline"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"50%"}
                    </div>
                    <p className="leading-relaxed mb-[0]">
                      {"EDG grant co-funding"}
                    </p>
                    <small>{"for qualifying SMEs"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"35+"}
                    </div>
                    <p className="leading-relaxed mb-[0]">
                      {"Singapore industries"}
                    </p>
                    <small>{"served"}</small>
                  </div>
                </div>
              </div>
              <div className="mb-[40px] [background:rgba(200,16,46,0.05)] rounded-[24px] p-6">
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                  <Icon name="alert" className="mr-2" />
                  {
                    "ISO 37001:2025 — what changed and why it matters for Singapore organisations"
                  }
                </h4>
                <div className="-mx-3 flex flex-wrap gap-y-6">
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="flex">
                      <Icon name="leaf" className="text-xl" />
                      <div>
                        <strong>{"Climate risk"}</strong>
                        {
                          " — Mandatory climate change risk assessment for sustainability projects, carbon trading, and green financing"
                        }
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="flex">
                      <Icon name="heart" className="text-xl" />
                      <div>
                        <strong>{"Conflicts of interest"}</strong>
                        {" — Enhanced CoI guidance and management requirements"}
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="flex">
                      <Icon name="user" className="text-xl" />
                      <div>
                        <strong>{"Compliance culture"}</strong>
                        {
                          " — Stronger compliance culture requirements — tone from the top now formally assessed"
                        }
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="flex">
                      <Icon name="shield" className="text-xl" />
                      <div>
                        <strong>{"Whistleblower"}</strong>
                        {" — Improved whistleblower protection provisions"}
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 px-3 md:w-[50%]">
                    <div className="flex">
                      <Icon name="merge" className="text-xl" />
                      <div>
                        <strong>{"Integration"}</strong>
                        {
                          " — Better integration with ISO 37301 (Compliance MS) and other management standards"
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[15px] mb-[20px] font-bold">
                {
                  "What is ISO 37001 ABMS? Singapore's anti-bribery certification — why ISO 37001:2025 matters in 2026"
                }
              </h3>
              <p className="leading-relaxed mb-4">
                {
                  "ISO 37001 is the international standard dedicated to establishing, implementing, maintaining, and improving an Anti-Bribery Management System. It offers requirements and guidance for preventing, detecting, and responding to bribery — covering direct and indirect bribery across public, private, and non-profit sectors. In Singapore, it is nationally adopted as SS ISO 37001 and aligns directly with the Prevention of Corruption Act."
                }
              </p>
              <p className="leading-relaxed mb-4">
                {
                  "SS ISO 37001 was jointly launched by SPRING Singapore and the Corrupt Practices Investigation Bureau (CPIB). The Singapore Standard (SS) ISO 37001 on anti-bribery management systems is a voluntary standard designed to help companies establish, implement, maintain and improve their anti-bribery compliance programmes. It includes a series of measures which represents globally recognised anti-bribery good practice. Critically, SS ISO 37001 helps in the event of an investigation to provide evidence to the prosecutors or courts that the company had taken reasonable steps to prevent bribery. For Singapore organisations facing CPIB investigations, this evidentiary protection is the most compelling reason to certify."
                }
              </p>
              <p className="leading-relaxed mb-4">
                {
                  "ISO 37001:2025 is now the current edition. Organisations certified under ISO 37001:2016 should plan their transition to the 2025 edition. ICFC manages 2016-to-2025 transition audits alongside new implementation engagements. The 2025 edition adopts the ISO harmonized structure — making integration with ISO 9001, ISO 14001, ISO 27001, and ISO 22301 more efficient than ever before."
                }
              </p>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"ISO 37001:2025 ABMS — eight core components ICFC implements"}
              </h3>
              <div className="-mx-3 flex flex-wrap gap-y-6 mb-[40px]">
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] text-center p-4 bg-slate-50 rounded-md h-full">
                    <Icon name="file" className="text-[32px]" />
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"Anti-bribery policy"}
                    </p>
                    <small>{"Board-endorsed zero tolerance"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] text-center p-4 bg-slate-50 rounded-md h-full">
                    <Icon name="shield" className="text-[32px]" />
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"Bribery risk assessment"}
                    </p>
                    <small>{"Activities, geographies, third parties"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] text-center p-4 bg-slate-50 rounded-md h-full">
                    <Icon name="search" className="text-[32px]" />
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"Due diligence"}
                    </p>
                    <small>{"Third-party, transaction, personnel"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] text-center p-4 bg-slate-50 rounded-md h-full">
                    <Icon name="card" className="text-[32px]" />
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"Financial & non-financial controls"}
                    </p>
                    <small>{"Gift register, expense controls"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] text-center p-4 bg-slate-50 rounded-md h-full">
                    <Icon name="quote" className="text-[32px]" />
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"Whistleblowing channel"}
                    </p>
                    <small>{"Anonymous + protection"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] text-center p-4 bg-slate-50 rounded-md h-full">
                    <Icon name="merge" className="text-[32px]" />
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"Conflicts of interest"}
                    </p>
                    <small>{"Enhanced 2025 CoI management"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] text-center p-4 bg-slate-50 rounded-md h-full">
                    <Icon name="globe" className="text-[32px]" />
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"Climate change risk (new 2025)"}
                    </p>
                    <small>{"Carbon trading, green financing"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] text-center p-4 bg-slate-50 rounded-md h-full">
                    <Icon name="chart" className="text-[32px]" />
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"Monitoring & investigation"}
                    </p>
                    <small>{"Internal audit, management review"}</small>
                  </div>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[20px] font-bold">
                {
                  "Singapore's anti-bribery legal and regulatory framework — ISO 37001 alignment"
                }
              </h3>
              <div className="mb-[40px] w-full overflow-x-auto">
                <table className="[border:1px_solid_#DBDEE1] max-[991px]:w-[900px] w-full border-collapse text-left [&_th]:border-b [&_th]:border-slate-300 [&_th]:bg-slate-50 [&_th]:p-3 [&_td]:border-b [&_td]:border-slate-200 [&_td]:p-3 [&_td]:border [&_th]:border">
                  <thead className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-slate-50">
                    <tr>
                      <th className="[border:none]">
                        {"Framework / Legislation"}
                      </th>
                      <th className="[border:none]">{"Key obligation"}</th>
                      <th className="[border:none]">{"Sectors"}</th>
                      <th className="[border:none]">{"ISO 37001 alignment"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{"Prevention of Corruption Act (PCA)"}</td>
                      <td>
                        {
                          "Criminalises giving and accepting bribes in public and private sectors"
                        }
                      </td>
                      <td>{"All sectors"}</td>
                      <td>
                        {
                          "✓ Direct alignment — ABMS demonstrates reasonable prevention steps"
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>{"CPIB enforcement"}</td>
                      <td>
                        {
                          "CPIB investigates corruption offences. ISO 37001 certification provides evidentiary protection"
                        }
                      </td>
                      <td>{"All sectors"}</td>
                      <td>
                        {
                          "✓ CPIB endorsed SS ISO 37001 provides prosecution mitigation"
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>{"MAS Guidelines on Gifts & Entertainment"}</td>
                      <td>
                        {
                          "Financial institutions must have documented policies on gifts and entertainment"
                        }
                      </td>
                      <td>{"Banks, insurers, FinTech"}</td>
                      <td>
                        {"✓ Gift/hospitality register and financial controls"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"UK Bribery Act (extraterritorial)"}</td>
                      <td>
                        {
                          '"Adequate procedures" defence requires documented ABMS'
                        }
                      </td>
                      <td>
                        {"Professional services, construction, logistics"}
                      </td>
                      <td>
                        {
                          '✓ ISO 37001 satisfies UK "adequate procedures" defence'
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>{"US FCPA (extraterritorial)"}</td>
                      <td>
                        {
                          "Singapore companies listed on US exchanges face FCPA exposure"
                        }
                      </td>
                      <td>{"Listed companies, US-market Singapore firms"}</td>
                      <td>
                        {
                          "✓ ISO 37001 aligns with FCPA compliance programme expectations"
                        }
                      </td>
                    </tr>
                    <tr>
                      <td>{"SGX ESG reporting (sustainability)"}</td>
                      <td>
                        {
                          "Anti-bribery governance is an explicit component under G-pillar"
                        }
                      </td>
                      <td>{"SGX-listed companies"}</td>
                      <td>
                        {
                          "✓ ABMS certification supports ESG governance disclosures"
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="-mx-3 flex flex-wrap gap-y-6 mb-[5px]">
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="rounded-[16px] [background:#fff] [border:1px_solid_#e2e8f0] hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] p-6 border border-slate-200 rounded-md h-full bg-white">
                    <Icon
                      name="survey"
                      className="text-[2.2rem] text-[#C8102E] mb-[1rem] inline-block"
                    />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"ABMS Audit Services"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Gap analysis, Stage 1 & 2 audits, pre-certification, internal audit, 2016→2025 transition."
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
                  <div className="rounded-[16px] [background:#fff] [border:1px_solid_#e2e8f0] hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] p-6 border border-slate-200 rounded-md h-full bg-white">
                    <Icon
                      name="file"
                      className="text-[2.2rem] text-[#C8102E] mb-[1rem] inline-block"
                    />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"ABMS Consultation"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Full implementation, IMS integration, PCA alignment, EDG grant managed."
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
                  <div className="rounded-[16px] [background:#fff] [border:1px_solid_#e2e8f0] hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] p-6 border border-slate-200 rounded-md h-full bg-white">
                    <Icon
                      name="user"
                      className="text-[2.2rem] text-[#C8102E] mb-[1rem] inline-block"
                    />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"ABMS Training"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Lead Auditor (PECB), Internal Auditor, Implementer, Board governance, Staff awareness."
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
              <div className="mb-[5px] [background:linear-gradient(135deg,_#EAF3DE,_#d4edbd)] [border-left:5px_solid_#3B6D11] rounded-[16px] mb-4 rounded-md border p-4 border-0 p-6 rounded-lg">
                <Icon
                  name="star"
                  className="text-[#3B6D11] text-[28px] mr-4 float-left"
                />
                <h5 className="font-bold leading-tight text-[#2B3944] text-xl text-slate-900">
                  {
                    "EDG / MASA grant — up to 50% co-funding for ISO 37001 consultation"
                  }
                </h5>
                <p className="leading-relaxed mb-[0]">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 37001 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. Integrated ABMS + ISO 9001 / ISO 27001 projects can qualify for EDG co-funding across all standards in a single application."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[10px_24px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#3B6D11] text-[#fff] hover:[background:#2D550D] hover:[transform:translateY(-2px)]"
                >
                  {"Check eligibility →"}
                </SiteLink>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {
                  "ICFC's ABMS audit process — bribery risk mapping to certificate"
                }
              </h3>
              <div className="[border-left:3px_solid_#C8102E] pl-[20px] mb-[30px]">
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"01. Free briefing"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"ABMS scope, PCA obligations, grant eligibility"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"02. Bribery risk map"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"Activities, geographies, third parties — risk register"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"03. Gap analysis"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "Full ISO 37001:2025 gap assessment including 2025 updates"
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"04. Grant application"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"EDG submitted and approved before any billable work"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"05. Pre-cert audit"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"Mock audit — close NCPs before SAC-accredited CB"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"06. Certification"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"Stage 1 + Stage 2 CB audit — ISO 37001:2025 certificate"}
                  </p>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {
                  "ABMS consultation — from bribery risk assessment to ISO 37001:2025 certificate"
                }
              </h3>
              <div className="[border-left:3px_solid_#C8102E] pl-[20px] mb-[30px]">
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"01. Free assessment"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"ABMS scope, PCA exposure, grant eligibility check"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"02. Grant application"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"EDG submitted and approved before any work begins"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"03. Bribery risk assessment"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"Activities, geographies, third parties — risk register"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"04. ABMS build"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"Policy, controls, due diligence, whistleblowing, CoI"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"05. 2025 updates"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"Climate risk, enhanced CoI, compliance culture"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"06. Internal audit"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"Mock audit and corrective actions before CB"}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"07. Certification"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {"SAC-accredited CB Stage 1 + Stage 2 — certificate"}
                  </p>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"Client outcomes · Singapore"}
              </h3>
              <div className="-mx-3 flex flex-wrap gap-y-6 mb-[40px]">
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="p-[1.5rem] rounded-[20px] [background:#fff] shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full">
                    <Icon
                      name="quote"
                      className="text-[2rem] text-[#C8102E] opacity-[0.3]"
                    />
                    <p className="leading-relaxed mb-4">
                      {
                        '"ICFC helped us achieve ISO 37001 certification in eight months — from scratch. Their third-party due diligence framework identified three overseas agents who had never been properly assessed for bribery risk."'
                      }
                    </p>
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"— GM, Infrastructure contractor"}
                    </p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="p-[1.5rem] rounded-[20px] [background:#fff] shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full">
                    <Icon
                      name="quote"
                      className="text-[2rem] text-[#C8102E] opacity-[0.3]"
                    />
                    <p className="leading-relaxed mb-4">
                      {
                        '"Integrated ISO 9001 + ISO 37001 approach meant one project, one EDG grant application, and certification to both standards simultaneously. Total cost was significantly less than budgeted."'
                      }
                    </p>
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"— COO, Logistics provider"}
                    </p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="p-[1.5rem] rounded-[20px] [background:#fff] shadow-[0_5px_20px_rgba(0,0,0,0.05)] h-full">
                    <Icon
                      name="quote"
                      className="text-[2rem] text-[#C8102E] opacity-[0.3]"
                    />
                    <p className="leading-relaxed mb-4">
                      {
                        '"ICFC\'s ISO 37001:2025 transition audit identified gaps in conflicts of interest register and climate change risk for renewable energy procurement. We transitioned on first attempt."'
                      }
                    </p>
                    <p className="leading-relaxed mb-[0] font-bold">
                      {"— CCO, Energy company"}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[10px] font-bold">
                {"Frequently asked questions — ISO 37001 ABMS"}
              </h3>
              <div id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "How does ISO 37001 certification help in the event of a CPIB investigation?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "SS ISO 37001 helps provide evidence to prosecutors or courts that the company had taken reasonable steps to prevent bribery. This evidentiary protection is the most compelling reason for Singapore companies to certify under the Prevention of Corruption Act. A company that can demonstrate it had implemented internationally recognised anti-bribery controls is in a significantly stronger legal position than one with no documented anti-bribery management system."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "What are the main differences between ISO 37001:2016 and the 2025 edition?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "The 2025 edition introduces: (1) Climate change risk assessment mandatory for sustainability projects, carbon trading, green financing; (2) Enhanced conflicts of interest management; (3) Stronger compliance culture requirements — tone from the top now formally assessed; (4) Improved whistleblower protections; (5) ISO harmonized structure for better integration with ISO 9001, ISO 27001."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How much does ISO 37001 consultation cost after grants?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Typical ICFC consultation fees S$12,000–S$35,000. EDG covers up to 50% for eligible SMEs. Certification body fees S$4,000–S$9,000. Integrated IMS projects reduce total cost by 20-30%. Small organizations may complete the process in 6-8 months."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Does ISO 37001 satisfy UK Bribery Act and US FCPA requirements?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    'Yes — ISO 37001 is widely recognised as demonstrating "adequate procedures" under the UK Bribery Act and aligns with US DOJ compliance programme expectations for FCPA. ICFC designs ABMS programmes that explicitly address the six principles of the UK Bribery Act and align with US DOJ guidance.'
                  }
                </AccordionItem>
              </div>
              <div className="mt-[50px] [background:rgba(200,16,46,0.05)] rounded-[24px] p-12 text-center">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {"Start your ISO 37001:2025 ABMS journey today"}
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "Free 30-minute anti-bribery assessment. Honest gap analysis against ISO 37001:2025. PCA and CPIB framework alignment review. EDG grant eligibility check. No obligation."
                  }
                </p>
                <div className="flex flex-wrap justify-center">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#C8102E] text-[#fff] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free ABMS assessment →"}
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
                    "ISO 37001:2025 ABMS certification — CPIB endorsed, PCA aligned. "
                  }
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] [text-decoration:underline] inline-block hover:text-[#AB052D]"
                  >
                    {"Start your anti-bribery governance journey today →"}
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
