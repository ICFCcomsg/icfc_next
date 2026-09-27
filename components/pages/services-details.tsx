import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsPageContent() {
  return (
    <SitePageTemplate route="services-details.html">
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
      title="APEC Privacy Recognition for Processors (PRP)"
      description="Cross-border Privacy Accountability Framework – Audit, Consulting & Training | APEC CBPR System, PDPA Transfer Obligation Aligned"
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
                  alt="APEC PRP Privacy Recognition for Processors"
                  className="max-w-full h-auto w-full rounded-[6px]"
                />
              </div>
              <p className="leading-relaxed mt-[30px] mb-4">
                {
                  "The APEC Privacy Recognition for Processors (PRP) is a voluntary international accountability framework designed specifically for data processors — organisations that process personal data on behalf of client controllers across APEC economies. It operates alongside the APEC Cross-Border Privacy Rules (CBPR) system, covering 21 APEC member economies including Singapore, the United States, Japan, South Korea, Australia, Mexico, the Philippines, and Canada. ICFC — Singapore's trusted APEC PRP specialist since 2014 — delivers audit, consultation, and training with ESG MASA grant management built in."
                }
              </p>
              <div className="grid [grid-template-columns:repeat(4,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                  <div className="text-[2rem] font-extrabold text-[#1A4D8C] leading-[1.2]">
                    {"9"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"APEC privacy principles"}
                  </p>
                  <small>{"covered"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                  <div className="text-[2rem] font-extrabold text-[#1A4D8C] leading-[1.2]">
                    {"25+"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Industries served"}
                  </p>
                  <small>{"in Singapore"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                  <div className="text-[2rem] font-extrabold text-[#1A4D8C] leading-[1.2]">
                    {"21"}
                  </div>
                  <p className="leading-relaxed mb-[0]">{"APEC economies"}</p>
                  <small>{"in CBPR/PRP system"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                  <div className="text-[2rem] font-extrabold text-[#1A4D8C] leading-[1.2]">
                    {"98%"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"First-attempt rate"}
                  </p>
                  <small>{"certification success"}</small>
                </div>
              </div>
              <div className="grid [grid-template-columns:repeat(2,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="[background:#e3f2fd] p-6 rounded-md">
                  <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                    {"📋 APEC CBPR"}
                  </h4>
                  <p className="leading-relaxed mb-[0]">
                    <strong>{"For Data Controllers"}</strong>
                    {
                      " — Organisations that determine the purposes and means of processing personal data. CBPR certifies that the controller's privacy policies meet APEC privacy principles across their cross-border data flow ecosystem."
                    }
                  </p>
                </div>
                <div className="[background:#e8f5e9] p-6 rounded-md">
                  <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                    {"🔒 APEC PRP"}
                  </h4>
                  <p className="leading-relaxed mb-[0]">
                    <strong>{"For Data Processors"}</strong>
                    {
                      " — Organisations that process personal data on behalf of client controllers — cloud service providers, BPO firms, payroll processors, data analytics companies, IT managed services. PRP certifies privacy-protective practices satisfying controller's APEC CBPR obligations."
                    }
                  </p>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[10px] font-bold">
                {
                  "What is APEC PRP? Singapore's cross-border data processor certification — why it matters in 2025"
                }
              </h3>
              <p className="leading-relaxed mb-4">
                {
                  "The APEC Privacy Recognition for Processors (PRP) is a voluntary international accountability framework designed specifically for data processors — organisations that process personal data on behalf of client controllers across APEC economies. It operates alongside the APEC Cross-Border Privacy Rules (CBPR) system, which applies to data controllers. Together they form the only internationally recognised cross-border privacy accountability framework covering 21 APEC member economies including Singapore, the United States, Japan, South Korea, Australia, Mexico, the Philippines, and Canada."
                }
              </p>
              <p className="leading-relaxed mb-4">
                {
                  "Singapore's PDPA establishes a Transfer Limitation Obligation requiring organisations to ensure comparable protection when transferring personal data overseas. APEC PRP certification provides the structured accountability mechanism that satisfies both Singapore's PDPA transfer requirements and the data privacy laws of 20 other APEC economies simultaneously — making it the most efficient cross-border data compliance tool available to Singapore-based processors serving multinational clients."
                }
              </p>
              <div className="[background:#e8f4fd] mb-4 rounded-md border p-4 border-blue-200 bg-blue-50 text-blue-900 border-0">
                <Icon name="info" className="mr-2" />
                <strong>{"中文说明："}</strong>
                {
                  ' APEC"数据处理者隐私认证"（PRP）是专为数据处理者（如云服务商、外包服务商、数据分析公司等）设计的国际隐私问责框架，覆盖21个亚太经济体。取得APEC PRP认证，可向您的企业客户证明您具备符合APEC标准的隐私保护能力。ICFC提供全程辅导，并协助申请ESG MASA资助，最高可补贴70%费用。'
                }
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Nine privacy principles — what APEC PRP covers"}
              </h3>
              <div className="grid [grid-template-columns:repeat(3,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="[background:#f8f9fa] rounded-[12px] p-[15px] [border-left:3px_solid_#1A4D8C] mb-[15px]">
                  <strong>{"🔒 Preventing Harm"}</strong>
                  <br />
                  {
                    "Identify and mitigate privacy-related harms from processing activities"
                  }
                </div>
                <div className="[background:#f8f9fa] rounded-[12px] p-[15px] [border-left:3px_solid_#1A4D8C] mb-[15px]">
                  <strong>{"📋 Notice"}</strong>
                  <br />
                  {
                    "Documentation of processing activities, data types, retention, sub-processors"
                  }
                </div>
                <div className="[background:#f8f9fa] rounded-[12px] p-[15px] [border-left:3px_solid_#1A4D8C] mb-[15px]">
                  <strong>{"🎯 Collection Limitation"}</strong>
                  <br />
                  {
                    "Limit collection strictly to controller instructions — no secondary use"
                  }
                </div>
                <div className="[background:#f8f9fa] rounded-[12px] p-[15px] [border-left:3px_solid_#1A4D8C] mb-[15px]">
                  <strong>{"📂 Uses of Personal Information"}</strong>
                  <br />
                  {
                    "Process only for authorised purposes with documented controls"
                  }
                </div>
                <div className="[background:#f8f9fa] rounded-[12px] p-[15px] [border-left:3px_solid_#1A4D8C] mb-[15px]">
                  <strong>{"✅ Choice"}</strong>
                  <br />
                  {
                    "Respect data subject choices — opt-outs, requests, consent preferences"
                  }
                </div>
                <div className="[background:#f8f9fa] rounded-[12px] p-[15px] [border-left:3px_solid_#1A4D8C] mb-[15px]">
                  <strong>{"🔐 Integrity of Information"}</strong>
                  <br />
                  {
                    "Data accuracy, completeness, and currency through quality processes"
                  }
                </div>
                <div className="[background:#f8f9fa] rounded-[12px] p-[15px] [border-left:3px_solid_#1A4D8C] mb-[15px]">
                  <strong>{"🛡️ Security Safeguards"}</strong>
                  <br />
                  {
                    "Technical, administrative, physical controls — CSA/ISO 27001 aligned"
                  }
                </div>
                <div className="[background:#f8f9fa] rounded-[12px] p-[15px] [border-left:3px_solid_#1A4D8C] mb-[15px]">
                  <strong>{"🌐 Access & Correction"}</strong>
                  <br />
                  {
                    "Support controller clients in handling data subject requests"
                  }
                </div>
                <div className="[background:#f8f9fa] rounded-[12px] p-[15px] [border-left:3px_solid_#1A4D8C] mb-[15px]">
                  <strong>{"📊 Accountability"}</strong>
                  <br />
                  {
                    "Governance structures, training, sub-processor vetting, programme reviews"
                  }
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Three service pillars — End-to-end APEC PRP support"}
              </h3>
              <div className="grid [grid-template-columns:repeat(3,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="rounded-[16px] [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] p-6">
                  <Icon name="survey" className="text-[#1A4D8C] text-[40px]" />
                  <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                    {"🔍 Audit Services"}
                  </h4>
                  <p className="leading-relaxed mb-4">
                    {
                      "Gap audits, accountability agent readiness assessments, pre-certification reviews, data processing activity audits, sub-processor vetting audits, surveillance support."
                    }
                  </p>
                  <SiteLink
                    href="/services.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center gap-[8px] [background:#1A4D8C] text-[#fff] p-[10px_24px] rounded-[50px] text-[13px] font-semibold [text-decoration:none] [border:none] hover:[background:#0E3359] hover:[transform:translateX(5px)] hover:text-[#fff]"
                  >
                    {"Explore audit →"}
                  </SiteLink>
                </div>
                <div className="rounded-[16px] [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] p-6">
                  <Icon name="file" className="text-[#1A4D8C] text-[40px]" />
                  <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                    {"📝 Consulting"}
                  </h4>
                  <p className="leading-relaxed mb-4">
                    {
                      "Full implementation, controller-processor agreements, data processing inventory, nine-principle controls, sub-processor management, PDPA integration, CSA alignment, MASA grant advisory."
                    }
                  </p>
                  <SiteLink
                    href="/services.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center gap-[8px] [background:#1A4D8C] text-[#fff] p-[10px_24px] rounded-[50px] text-[13px] font-semibold [text-decoration:none] [border:none] hover:[background:#0E3359] hover:[transform:translateX(5px)] hover:text-[#fff]"
                  >
                    {"Explore consulting →"}
                  </SiteLink>
                </div>
                <div className="rounded-[16px] [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] p-6">
                  <Icon name="user" className="text-[#1A4D8C] text-[40px]" />
                  <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                    {"🎓 Training"}
                  </h4>
                  <p className="leading-relaxed mb-4">
                    {
                      "Foundation awareness, lead implementer, internal auditor, DPO privacy essentials, controller-processor contract training, cross-border transfer masterclass, executive briefing."
                    }
                  </p>
                  <SiteLink
                    href="/services.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center gap-[8px] [background:#1A4D8C] text-[#fff] p-[10px_24px] rounded-[50px] text-[13px] font-semibold [text-decoration:none] [border:none] hover:[background:#0E3359] hover:[transform:translateX(5px)] hover:text-[#fff]"
                  >
                    {"Explore training →"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {
                  "Singapore regulatory alignment — APEC PRP within Singapore's legal framework"
                }
              </h3>
              <div className="grid [grid-template-columns:repeat(2,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-4 bg-slate-50 rounded-md">
                  <strong>{"🇸🇬 PDPA — Transfer Limitation Obligation"}</strong>
                  <br />
                  {
                    "APEC PRP certification satisfies the Transfer Limitation Obligation for data processors handling cross-border flows."
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-4 bg-slate-50 rounded-md">
                  <strong>{"🏦 MAS — Technology Risk Management"}</strong>
                  <br />
                  {
                    "MAS-regulated entities require PRP from their processor service providers."
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-4 bg-slate-50 rounded-md">
                  <strong>{"🛡️ CSA — Cybersecurity Act"}</strong>
                  <br />
                  {
                    "Security safeguards principle complements CSA obligations for CII sector data processors."
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-4 bg-slate-50 rounded-md">
                  <strong>{"📊 SGX — ESG Data & Sustainability"}</strong>
                  <br />
                  {
                    "PRP provides auditable evidence of responsible data stewardship for ESG reporting."
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-4 bg-slate-50 rounded-md">
                  <strong>{"🏥 HSA — Healthcare Data Processors"}</strong>
                  <br />
                  {
                    "CROs, clinical data managers, health analytics processors handling patient data across APEC economies."
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] p-4 bg-slate-50 rounded-md">
                  <strong>{"💼 MOM — Workforce Data Processors"}</strong>
                  <br />
                  {
                    "HR technology providers, payroll processors handling employee data across APEC jurisdictions."
                  }
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Industry coverage — 25+ sectors"}
              </h3>
              <div>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Fintech & Payment Processing"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Telecommunications"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Cloud & IT Services"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Data Centre & Colocation"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Critical Infrastructure (CII)"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Banking & Financial Services"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Healthcare & Clinical Data"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Pharmaceutical & Life Sciences"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Logistics & Supply Chain"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Manufacturing & Industry 4.0"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"HR Technology & Payroll"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Marketing Technology & Analytics"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Business Process Outsourcing"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Insurance & InsurTech"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Aviation & Aerospace"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Retail & E-commerce"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Education & EdTech"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Government & Public Sector ICT"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Professional Services"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Transport & Mobility"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"Cybersecurity & MSSPs"}
                </span>
                <span className="[background:#e9ecef] p-[5px_12px] rounded-[20px] text-[12px] m-[3px] inline-block">
                  {"ESG Data & Sustainability"}
                </span>
                <p className="leading-relaxed text-slate-500 mb-4">
                  <small>
                    {
                      "My sector is not listed — ICFC can still help across all industries."
                    }
                  </small>
                </p>
              </div>
              <div className="[background:linear-gradient(135deg,_#EAF3DE,_#d4edbd)] [border-left:5px_solid_#2E7D32] rounded-[16px] mb-4 rounded-md border p-4 border-0 p-6 rounded-lg">
                <Icon
                  name="star"
                  className="text-[#2E7D32] text-[28px] mr-4 float-left"
                />
                <h5 className="font-bold leading-tight text-[#2B3944] text-xl text-slate-900">
                  {
                    "💰 ESG MASA grant — up to 70% co-funding for APEC PRP certification"
                  }
                </h5>
                <p className="leading-relaxed mb-[0]">
                  {
                    "Enterprise Singapore's Market Access Standards Adoption (MASA) programme supports qualifying Singapore SMEs in adopting internationally recognised frameworks — including APEC PRP certification. Eligible companies can recover a significant share of ICFC's consultation fees and assessor costs. We assess your eligibility upfront, prepare all required documentation, manage milestone claims, and coordinate with your accountability agent — adding zero delay to your project timeline."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[10px_24px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#2E7D32] text-[#fff] hover:[background:#1B5E20] hover:[transform:translateY(-2px)]"
                >
                  {"Check MASA grant eligibility →"}
                </SiteLink>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Client testimonials"}
              </h3>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#1A4D8C]">
                <p className="leading-relaxed mb-4">
                  {
                    "\"ICFC's team understood the nuances of the APEC PRP framework — particularly how it interacts with Singapore's PDPA Transfer Limitation Obligation and our US and Japan client requirements. They designed our processor accountability programme so a single framework satisfied PRP, PDPA, and our MAS clients' third-party risk management requirements. The MASA grant advisory was handled entirely by ICFC with zero impact on our project timeline.\""
                  }
                </p>
                <strong>
                  {
                    "— Head of data governance & privacy, Cloud managed services provider"
                  }
                </strong>
              </div>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#1A4D8C]">
                <p className="leading-relaxed mb-4">
                  {
                    '"As a clinical trial data management company processing patient data across Singapore, Japan, Australia, and the US, APEC PRP was the only framework that addressed all our cross-border obligations efficiently. ICFC built our entire privacy programme from ground up — controller-processor agreements, sub-processor vetting, the nine-principle controls, and staff training — in under four months."'
                  }
                </p>
                <strong>
                  {"— Chief privacy officer, Contract research organisation"}
                </strong>
              </div>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#1A4D8C]">
                <p className="leading-relaxed mb-4">
                  {
                    '"The APEC PRP internal auditor training ICFC ran for our DPO and privacy team was the most practically useful privacy training we have attended. It was tailored specifically to our payroll processing environment — including cross-border employee data flows to our APEC clients — and gave our team the confidence to manage PRP surveillance cycles independently."'
                  }
                </p>
                <strong>
                  {
                    "— DPO & compliance director, Regional payroll processing company"
                  }
                </strong>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"Frequently asked questions — APEC PRP"}
              </h3>
              <div id="faqAccordion">
                <AccordionItem
                  title={<>{"What is APEC PRP and who needs it?"}</>}
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "APEC PRP is an international accountability certification for data processors — cloud service providers, BPO companies, payroll processors, data analytics platforms, clinical trial data managers, marketing technology firms, and IT managed service providers with clients in multiple APEC economies (US, Japan, South Korea, Australia, Canada, Mexico, Philippines)."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How does APEC PRP satisfy Singapore's PDPA Transfer Limitation Obligation?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "For data processors receiving data from Singapore controllers, APEC PRP certification demonstrates that the processor implements privacy protections meeting APEC Privacy Framework standards across all nine principles — providing the accountability mechanism that satisfies the Transfer Limitation Obligation. It also supports Singapore controller clients in demonstrating due diligence."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"What is the difference between APEC CBPR and APEC PRP?"}
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "APEC CBPR applies to data controllers (organisations that determine purposes and means of processing). APEC PRP applies to data processors (organisations processing on behalf of controllers). The two systems work together to create an end-to-end accountability chain across APEC cross-border data flows. ICFC advises which your organisation needs."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"How long does APEC PRP certification take with ICFC?"}
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "A typical APEC PRP programme takes 3–6 months from kickoff to accountability agent assessment readiness, depending on the volume of your processing activities, maturity of existing privacy controls, and number of APEC economies in your cross-border data flows. ICFC's 98% first-attempt success rate means you are unlikely to face costly rework."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Can ICFC help combine MASA grant funding with APEC PRP certification?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Yes. ICFC is an experienced MASA grant advisory partner. We assess eligibility upfront, prepare all documentation, manage milestone claims, and coordinate with your accountability agent — running the grant process in parallel with your PRP implementation. Qualifying Singapore SMEs can recover up to 70% of eligible consultation and assessment costs."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>{"How does APEC PRP relate to ISO 27001 and PDPA?"}</>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "These frameworks are complementary and can be integrated. APEC PRP addresses cross-border data processor privacy accountability. ISO 27001 addresses information security management. PDPA addresses Singapore data protection law. ICFC designs integrated programmes — controls, documentation, and audit evidence serve multiple certifications simultaneously."
                  }
                </AccordionItem>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {
                  "APEC PRP认证如何帮助新加坡数据处理者满足跨境数据传输合规要求？"
                }
              </h3>
              <div className="[background:#1a1a2e] text-[white] p-6 rounded-md">
                <p className="leading-relaxed mb-4">
                  {
                    'APEC"数据处理者隐私认证"（PRP）是专为代表客户企业处理个人数据的机构（即数据处理者）设计的国际隐私问责认证框架，覆盖21个亚太经济体，包括新加坡、美国、日本、韩国、澳大利亚、加拿大及菲律宾等。取得APEC PRP认证，可向您的企业客户（数据控制者）证明您符合APEC隐私框架九项原则的要求，同时满足新加坡《个人资料保护法》（PDPA）跨境传输义务中对数据处理者的合规要求。ICFC Pte Ltd 提供全程辅导，包括数据处理活动清单、控制者-处理者协议框架、九项原则实施、下游处理者审查及员工培训，并协助申请企业发展局（ESG）MASA资助，最高可补贴70%费用。'
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#1A4D8C] text-[#fff] hover:[background:#0E3359] hover:[transform:translateY(-2px)]"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div className="mt-[40px] [background:linear-gradient(135deg,_#e8f4fd,_#f8f9fa)] p-12 text-center">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {"Start your APEC PRP certification with ICFC Pte Ltd"}
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "Whether you are responding to a client requirement, satisfying a regulatory obligation, or proactively building cross-border privacy accountability — ICFC gives you a practical, honest, and budget-friendly path to APEC PRP certification backed by 11 years of Singapore compliance expertise and a 98% first-attempt success rate."
                  }
                </p>
                <div className="flex flex-wrap justify-center">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#1A4D8C] text-[#fff] hover:[background:#0E3359] hover:[transform:translateY(-2px)]"
                  >
                    {"Book a free consultation →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:2px_solid_#1A4D8C] [background:transparent] text-[#1A4D8C] hover:[background:#1A4D8C] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                  >
                    {"Get a quote + grant check →"}
                  </SiteLink>
                </div>
              </div>
              <div className="mt-[40px] text-slate-500 text-sm">
                <strong>{"Page optimised for:"}</strong>
                {
                  " best APEC PRP consultant Singapore · affordable APEC PRP certification SG · APEC PRP audit 2025 · data processor privacy certification · cross-border data transfer PDPA · ESG grant data privacy SG · MASA grant APEC PRP · CBPR PRP consultant SG · APEC CBPR system Singapore · APEC数据处理者认证新加坡 · 跨境隐私认证辅导"
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
                    "APEC PRP certification — cross-border privacy accountability, MASA grant funded. "
                  }
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] [text-decoration:underline] inline-block hover:text-[#AB052D]"
                  >
                    {"Start your privacy certification journey today →"}
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
