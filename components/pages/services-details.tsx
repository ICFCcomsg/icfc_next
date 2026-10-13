import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsPageContent() {
  return (
    <SitePageTemplate route="services-details">
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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="APEC PRP Privacy Recognition for Processors"
                  className="align-middle max-w-full w-full rounded-md"
                />
              </div>
              <p className="mt-7.5 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "The APEC Privacy Recognition for Processors (PRP) is a voluntary international accountability framework designed specifically for data processors — organisations that process personal data on behalf of client controllers across APEC economies. It operates alongside the APEC Cross-Border Privacy Rules (CBPR) system, covering 21 APEC member economies including Singapore, the United States, Japan, South Korea, Australia, Mexico, the Philippines, and Canada. ICFC — Singapore's trusted APEC PRP specialist since 2014 — delivers audit, consultation, and training with a clear explanation of which funding scheme, if any, applies."
                }
              </p>
              <div className="mt-5 mr-0 mb-5 ml-0 grid grid-cols-[repeat(4,1fr)] max-[768px]:grid-cols-[1fr] gap-5">
                <div className="pt-6 pr-6 pb-6 pl-6 [background:#f8f9fa] rounded-2xl text-center [border:1px_solid_#e9ecef] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="text-[2rem] font-extrabold text-[#1A4D8C] leading-[1.2]">
                    {"9"}
                  </div>
                  <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"APEC privacy principles"}
                  </p>
                  <small className="text-[.875em]">{"covered"}</small>
                </div>
                <div className="pt-6 pr-6 pb-6 pl-6 [background:#f8f9fa] rounded-2xl text-center [border:1px_solid_#e9ecef] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="text-[2rem] font-extrabold text-[#1A4D8C] leading-[1.2]">
                    {"250+"}
                  </div>
                  <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"Clients"}
                  </p>
                  <small className="text-[.875em]">{"in Singapore"}</small>
                </div>
                <div className="pt-6 pr-6 pb-6 pl-6 [background:#f8f9fa] rounded-2xl text-center [border:1px_solid_#e9ecef] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="text-[2rem] font-extrabold text-[#1A4D8C] leading-[1.2]">
                    {"21"}
                  </div>
                  <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"APEC economies"}
                  </p>
                  <small className="text-[.875em]">
                    {"in CBPR/PRP system"}
                  </small>
                </div>
                <div className="pt-6 pr-6 pb-6 pl-6 [background:#f8f9fa] rounded-2xl text-center [border:1px_solid_#e9ecef] hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="text-[2rem] font-extrabold text-[#1A4D8C] leading-[1.2]">
                    {"500+"}
                  </div>
                  <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {"Audits supported"}
                  </p>
                  <small className="text-[.875em]">
                    {"certification success"}
                  </small>
                </div>
              </div>
              <div className="mb-6! mt-5 mr-0 ml-0 grid grid-cols-[repeat(2,1fr)] max-[768px]:grid-cols-[1fr] gap-5">
                <div className="pt-6! pr-6! pb-6! pl-6! rounded-md! [background:#e3f2fd]!">
                  <h4 className="mt-0 mb-2! font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                    {"📋 APEC CBPR"}
                  </h4>
                  <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    <strong className="[font-weight:bolder]">
                      {"For Data Controllers"}
                    </strong>
                    {
                      " — Organisations that determine the purposes and means of processing personal data. CBPR certifies that the controller's privacy policies meet APEC privacy principles across their cross-border data flow ecosystem."
                    }
                  </p>
                </div>
                <div className="pt-6! pr-6! pb-6! pl-6! rounded-md! [background:#e8f5e9]!">
                  <h4 className="mt-0 mb-2! font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                    {"🔒 APEC PRP"}
                  </h4>
                  <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    <strong className="[font-weight:bolder]">
                      {"For Data Processors"}
                    </strong>
                    {
                      " — Organisations that process personal data on behalf of client controllers — cloud service providers, BPO firms, payroll processors, data analytics companies, IT managed services. PRP certifies privacy-protective practices satisfying controller's APEC CBPR obligations."
                    }
                  </p>
                </div>
              </div>
              <h3 className="mt-0 mb-2.5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "What is APEC PRP? Singapore's cross-border data processor certification — why it matters in 2025"
                }
              </h3>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "The APEC Privacy Recognition for Processors (PRP) is a voluntary international accountability framework designed specifically for data processors — organisations that process personal data on behalf of client controllers across APEC economies. It operates alongside the APEC Cross-Border Privacy Rules (CBPR) system, which applies to data controllers. Together they form the only internationally recognised cross-border privacy accountability framework covering 21 APEC member economies including Singapore, the United States, Japan, South Korea, Australia, Mexico, the Philippines, and Canada."
                }
              </p>
              <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Singapore's PDPA establishes a Transfer Limitation Obligation requiring organisations to ensure comparable protection when transferring personal data overseas. APEC PRP certification provides the structured accountability mechanism that satisfies both Singapore's PDPA transfer requirements and the data privacy laws of 20 other APEC economies simultaneously — making it the most efficient cross-border data compliance tool available to Singapore-based processors serving multinational clients."
                }
              </p>
              <div className="relative pt-4! pr-4! pb-4! pl-4! mb-6! text-[#055160] bg-[#cff4fc] [border:0]! rounded-md [background:#e8f4fd]!">
                <Icon
                  name="info"
                  className="mr-2! inline-block not-italic"
                />
                <strong className="[font-weight:bolder]">{"中文说明："}</strong>
                {
                  ' APEC"数据处理者隐私认证"（PRP）是专为数据处理者（如云服务商、外包服务商、数据分析公司等）设计的国际隐私问责框架，覆盖21个亚太经济体。取得APEC PRP认证，可向您的企业客户证明您具备符合APEC标准的隐私保护能力。ICFC提供全程辅导，并说明适用的资助计划（如有）。'
                }
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Nine privacy principles — what APEC PRP covers"}
              </h3>
              <div className="mt-5 mr-0 mb-5 ml-0 grid grid-cols-[repeat(3,1fr)] max-[768px]:grid-cols-[1fr] gap-5">
                <div className="mb-3.75 pt-3.75 pr-3.75 pb-3.75 pl-3.75 [background:#f8f9fa] rounded-xl [border-left:3px_solid_#1A4D8C]">
                  <strong className="[font-weight:bolder]">
                    {"🔒 Preventing Harm"}
                  </strong>
                  <br />
                  {
                    "Identify and mitigate privacy-related harms from processing activities"
                  }
                </div>
                <div className="mb-3.75 pt-3.75 pr-3.75 pb-3.75 pl-3.75 [background:#f8f9fa] rounded-xl [border-left:3px_solid_#1A4D8C]">
                  <strong className="[font-weight:bolder]">
                    {"📋 Notice"}
                  </strong>
                  <br />
                  {
                    "Documentation of processing activities, data types, retention, sub-processors"
                  }
                </div>
                <div className="mb-3.75 pt-3.75 pr-3.75 pb-3.75 pl-3.75 [background:#f8f9fa] rounded-xl [border-left:3px_solid_#1A4D8C]">
                  <strong className="[font-weight:bolder]">
                    {"🎯 Collection Limitation"}
                  </strong>
                  <br />
                  {
                    "Limit collection strictly to controller instructions — no secondary use"
                  }
                </div>
                <div className="mb-3.75 pt-3.75 pr-3.75 pb-3.75 pl-3.75 [background:#f8f9fa] rounded-xl [border-left:3px_solid_#1A4D8C]">
                  <strong className="[font-weight:bolder]">
                    {"📂 Uses of Personal Information"}
                  </strong>
                  <br />
                  {
                    "Process only for authorised purposes with documented controls"
                  }
                </div>
                <div className="mb-3.75 pt-3.75 pr-3.75 pb-3.75 pl-3.75 [background:#f8f9fa] rounded-xl [border-left:3px_solid_#1A4D8C]">
                  <strong className="[font-weight:bolder]">
                    {"✅ Choice"}
                  </strong>
                  <br />
                  {
                    "Respect data subject choices — opt-outs, requests, consent preferences"
                  }
                </div>
                <div className="mb-3.75 pt-3.75 pr-3.75 pb-3.75 pl-3.75 [background:#f8f9fa] rounded-xl [border-left:3px_solid_#1A4D8C]">
                  <strong className="[font-weight:bolder]">
                    {"🔐 Integrity of Information"}
                  </strong>
                  <br />
                  {
                    "Data accuracy, completeness, and currency through quality processes"
                  }
                </div>
                <div className="mb-3.75 pt-3.75 pr-3.75 pb-3.75 pl-3.75 [background:#f8f9fa] rounded-xl [border-left:3px_solid_#1A4D8C]">
                  <strong className="[font-weight:bolder]">
                    {"🛡️ Security Safeguards"}
                  </strong>
                  <br />
                  {
                    "Technical, administrative, physical controls — CSA/ISO 27001 aligned"
                  }
                </div>
                <div className="mb-3.75 pt-3.75 pr-3.75 pb-3.75 pl-3.75 [background:#f8f9fa] rounded-xl [border-left:3px_solid_#1A4D8C]">
                  <strong className="[font-weight:bolder]">
                    {"🌐 Access & Correction"}
                  </strong>
                  <br />
                  {
                    "Support controller clients in handling data subject requests"
                  }
                </div>
                <div className="mb-3.75 pt-3.75 pr-3.75 pb-3.75 pl-3.75 [background:#f8f9fa] rounded-xl [border-left:3px_solid_#1A4D8C]">
                  <strong className="[font-weight:bolder]">
                    {"📊 Accountability"}
                  </strong>
                  <br />
                  {
                    "Governance structures, training, sub-processor vetting, programme reviews"
                  }
                </div>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Three service pillars — End-to-end APEC PRP support"}
              </h3>
              <div className="mt-5 mr-0 mb-5 ml-0 grid grid-cols-[repeat(3,1fr)] max-[768px]:grid-cols-[1fr] gap-5">
                <div className="pt-6! pr-6! pb-6! pl-6! rounded-2xl [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:transform-[translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none">
                  <Icon
                    name="survey"
                    className="text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]! inline-block not-italic text-[#1A4D8C]!"
                  />
                  <h4 className="mt-2! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                    {"🔍 Audit Services"}
                  </h4>
                  <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "Gap audits, accountability agent readiness assessments, pre-certification reviews, data processing activity audits, sub-processor vetting audits, surveillance support."
                    }
                  </p>
                  <SiteLink
                    href="/services"
                    className="text-white [text-decoration:none] mt-2! pt-2.5 pr-6 pb-2.5 pl-6 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-white [border:none] [background:#1A4D8C] inline-flex items-center gap-2 rounded-[50px] text-[13px] font-semibold hover:[background:#0E3359] hover:transform-[translateX(5px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Explore audit →"}
                  </SiteLink>
                </div>
                <div className="pt-6! pr-6! pb-6! pl-6! rounded-2xl [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:transform-[translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none">
                  <Icon
                    name="file"
                    className="text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]! inline-block not-italic text-[#1A4D8C]!"
                  />
                  <h4 className="mt-2! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                    {"📝 Consulting"}
                  </h4>
                  <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "Full implementation, controller-processor agreements, data processing inventory, nine-principle controls, sub-processor management, PDPA integration, CSA alignment, funding scheme guidance."
                    }
                  </p>
                  <SiteLink
                    href="/services"
                    className="text-white [text-decoration:none] mt-2! pt-2.5 pr-6 pb-2.5 pl-6 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-white [border:none] [background:#1A4D8C] inline-flex items-center gap-2 rounded-[50px] text-[13px] font-semibold hover:[background:#0E3359] hover:transform-[translateX(5px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Explore consulting →"}
                  </SiteLink>
                </div>
                <div className="pt-6! pr-6! pb-6! pl-6! rounded-2xl [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:transform-[translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none">
                  <Icon
                    name="user"
                    className="text-[2.5rem]! max-[1200px]:text-[calc(1.375rem+1.5vw)]! inline-block not-italic text-[#1A4D8C]!"
                  />
                  <h4 className="mt-2! mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                    {"🎓 Training"}
                  </h4>
                  <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "Foundation awareness, lead implementer, internal auditor, DPO privacy essentials, controller-processor contract training, cross-border transfer masterclass, executive briefing."
                    }
                  </p>
                  <SiteLink
                    href="/services"
                    className="text-white [text-decoration:none] mt-2! pt-2.5 pr-6 pb-2.5 pl-6 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-white [border:none] [background:#1A4D8C] inline-flex items-center gap-2 rounded-[50px] text-[13px] font-semibold hover:[background:#0E3359] hover:transform-[translateX(5px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Explore training →"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {
                  "Singapore regulatory alignment — APEC PRP within Singapore's legal framework"
                }
              </h3>
              <div className="mt-5 mr-0 mb-5 ml-0 grid grid-cols-[repeat(2,1fr)] max-[768px]:grid-cols-[1fr] gap-5">
                <div className="pt-4! pr-4! pb-4! pl-4! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"🇸🇬 PDPA — Transfer Limitation Obligation"}
                  </strong>
                  <br />
                  {
                    "APEC PRP certification satisfies the Transfer Limitation Obligation for data processors handling cross-border flows."
                  }
                </div>
                <div className="pt-4! pr-4! pb-4! pl-4! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"🏦 MAS — Technology Risk Management"}
                  </strong>
                  <br />
                  {
                    "MAS-regulated entities require PRP from their processor service providers."
                  }
                </div>
                <div className="pt-4! pr-4! pb-4! pl-4! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"🛡️ CSA — Cybersecurity Act"}
                  </strong>
                  <br />
                  {
                    "Security safeguards principle complements CSA obligations for CII sector data processors."
                  }
                </div>
                <div className="pt-4! pr-4! pb-4! pl-4! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"📊 SGX — ESG Data & Sustainability"}
                  </strong>
                  <br />
                  {
                    "PRP provides auditable evidence of responsible data stewardship for ESG reporting."
                  }
                </div>
                <div className="pt-4! pr-4! pb-4! pl-4! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"🏥 HSA — Healthcare Data Processors"}
                  </strong>
                  <br />
                  {
                    "CROs, clinical data managers, health analytics processors handling patient data across APEC economies."
                  }
                </div>
                <div className="pt-4! pr-4! pb-4! pl-4! bg-[#f8f9fa]! rounded-md! hover:transform-[translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"💼 MOM — Workforce Data Processors"}
                  </strong>
                  <br />
                  {
                    "HR technology providers, payroll processors handling employee data across APEC jurisdictions."
                  }
                </div>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Industry coverage — 25+ sectors"}
              </h3>
              <div className="mb-6!">
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Fintech & Payment Processing"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Telecommunications"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Cloud & IT Services"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Data Centre & Colocation"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Critical Infrastructure (CII)"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Banking & Financial Services"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Healthcare & Clinical Data"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Pharmaceutical & Life Sciences"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Logistics & Supply Chain"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Manufacturing & Industry 4.0"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"HR Technology & Payroll"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Marketing Technology & Analytics"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Business Process Outsourcing"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Insurance & InsurTech"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Aviation & Aerospace"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Retail & E-commerce"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Education & EdTech"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Government & Public Sector ICT"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Professional Services"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Transport & Mobility"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"Cybersecurity & MSSPs"}
                </span>
                <span className="mt-0.75 mr-0.75 mb-0.75 ml-0.75 pt-1.25 pr-3 pb-1.25 pl-3 [background:#e9ecef] rounded-[20px] text-[12px] inline-block">
                  {"ESG Data & Sustainability"}
                </span>
                <p className="mt-4! mb-0 text-[rgba(33,37,41,0.75)]! text-[17px] [font-weight:normal] leading-7">
                  <small className="text-[.875em]">
                    {
                      "My sector is not listed — ICFC can still help across all industries."
                    }
                  </small>
                </p>
              </div>
              <div className="relative pt-6! pr-6! pb-6! pl-6! mb-6! text-[#0a3622] bg-[#d1e7dd] [border:0]! rounded-lg! [background:linear-gradient(135deg,#EAF3DE,#d4edbd)] [border-left:5px_solid_#2E7D32]">
                <Icon
                  name="star"
                  className="float-left! mr-4! text-[1.75rem]! max-[1200px]:text-[calc(1.3rem+.6vw)]! inline-block not-italic text-[#2E7D32]!"
                />
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[rgba(33,37,41,1)]! text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {
                    "💰 Funding — we explain which scheme, if any, applies to APEC PRP"
                  }
                </h5>
                <p className="mt-0 mb-0! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "IMDA indicates possible support for some APEC PRP costs, and Enterprise Singapore's EDGE Grant may apply to eligible activities, subject to eligibility and Enterprise Singapore's approval. We explain which scheme, if any, applies; any application is made by you, not by ICFC."
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-white [text-decoration:none] inline-flex pt-2.5! pr-6! pb-2.5! pl-6! text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:none] rounded-lg bg-[#198754] hover:text-white hover:bg-[#157347] hover:border-[#146c43] focus-visible:text-white focus-visible:bg-[#157347] focus-visible:border-[#146c43] focus-visible:shadow-[0_0_0_0.25rem_rgba(60,153,110,.5)] active:text-white active:bg-[#146c43] active:border-[#13653f] active:shadow-[0_0_0_0.25rem_rgba(60,153,110,.5)] mt-4! focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:#2E7D32]! items-center justify-center gap-2.5 hover:[background:#1B5E20] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                >
                  {"Check funding options →"}
                </SiteLink>
              </div>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Frequently asked questions — APEC PRP"}
              </h3>
              <AccordionGroup id="faqAccordion">
                <AccordionItem
                  title={<>{"What is APEC PRP and who needs it?"}</>}

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] rounded-tl-md rounded-tr-md mb-4 rounded-xl overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] mb-4 rounded-xl overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] mb-4 rounded-xl overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] mb-4 rounded-xl overflow-hidden"
                >
                  {" "}
                  {
                    "A typical APEC PRP programme takes 3–6 months from kickoff to accountability agent assessment readiness, depending on the volume of your processing activities, maturity of existing privacy controls, and number of APEC economies in your cross-border data flows."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Can ICFC explain funding options for APEC PRP certification?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] mb-4 rounded-xl overflow-hidden"
                >
                  {" "}
                  {
                    "Yes. We explain which scheme, if any, applies to your PRP project. IMDA indicates possible support for some costs, and EDGE may apply to eligible activities, subject to eligibility and Enterprise Singapore's approval. Any application is made by you; ICFC does not apply for, manage, pay or claim grants on your behalf."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>{"How does APEC PRP relate to ISO 27001 and PDPA?"}</>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-white [border:1px_solid_#e2e8f0] [border-top:0] rounded-br-md rounded-bl-md mb-4 rounded-xl overflow-hidden"
                >
                  {" "}
                  {
                    "These frameworks are complementary and can be integrated. APEC PRP addresses cross-border data processor privacy accountability. ISO 27001 addresses information security management. PDPA addresses Singapore data protection law. ICFC designs integrated programmes — controls, documentation, and audit evidence serve multiple certifications simultaneously."
                  }
                </AccordionItem>
              </AccordionGroup>
              <h3 className="mt-10 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {
                  "APEC PRP认证如何帮助新加坡数据处理者满足跨境数据传输合规要求？"
                }
              </h3>
              <div className="pt-6! pr-6! pb-6! pl-6! rounded-md! [background:#1a1a2e]! text-[white]!">
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    'APEC"数据处理者隐私认证"（PRP）是专为代表客户企业处理个人数据的机构（即数据处理者）设计的国际隐私问责认证框架，覆盖21个亚太经济体，包括新加坡、美国、日本、韩国、澳大利亚、加拿大及菲律宾等。取得APEC PRP认证，可向您的企业客户（数据控制者）证明您符合APEC隐私框架九项原则的要求，同时满足新加坡《个人资料保护法》（PDPA）跨境传输义务中对数据处理者的合规要求。ICFC Pte Ltd 提供全程辅导，包括数据处理活动清单、控制者-处理者协议框架、九项原则实施、下游处理者审查及员工培训，并说明适用的资助计划（如有）。'
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-white [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:none] rounded-lg bg-[#0d6efd] hover:text-white hover:bg-[#0b5ed7] hover:border-[#0a58ca] focus-visible:text-white focus-visible:bg-[#0b5ed7] focus-visible:border-[#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] active:text-white active:bg-[#0a58ca] active:border-[#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] mt-2! focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:#1A4D8C]! items-center justify-center gap-2.5 hover:[background:#0E3359] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div className="pt-12! pr-12! pb-12! pl-12! text-center! rounded-2xl! mt-10 [background:linear-gradient(135deg,#e8f4fd,#f8f9fa)]!">
                <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {"Start your APEC PRP certification with ICFC Pte Ltd"}
                </h3>
                <p className="mt-0 mb-4! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Whether you are responding to a client requirement, satisfying a regulatory obligation, or proactively building cross-border privacy accountability — ICFC gives you a practical, honest, and budget-friendly path to APEC PRP certification backed by 12 years of Singapore compliance expertise."
                  }
                </p>
                <div className="flex! flex-wrap! justify-center! gap-4!">
                  <SiteLink
                    href="/contact-us"
                    className="text-white [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:none] rounded-lg bg-[#0d6efd] hover:text-white hover:bg-[#0b5ed7] hover:border-[#0a58ca] focus-visible:text-white focus-visible:bg-[#0b5ed7] focus-visible:border-[#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] active:text-white active:bg-[#0a58ca] active:border-[#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,.5)] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:#1A4D8C] items-center justify-center gap-2.5 hover:[background:#0E3359] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Book a free consultation →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#1A4D8C] [text-decoration:none] inline-flex pt-3 pr-7 pb-3 pl-7 text-[14px] font-semibold leading-normal text-center align-middle [user-select:none] [border:2px_solid_#1A4D8C] rounded-lg bg-transparent hover:text-white hover:bg-[#0d6efd] hover:border-[#0d6efd] focus-visible:text-white focus-visible:bg-[#0d6efd] focus-visible:border-[#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] active:text-white active:bg-[#0d6efd] active:border-[#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,.5)] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] [background:transparent] items-center justify-center gap-2.5 hover:[background:#1A4D8C] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Get a quote + grant check →"}
                  </SiteLink>
                </div>
              </div>
              <div className="text-[.875em] text-[rgba(33,37,41,0.75)]! mt-10">
                <strong className="[font-weight:bolder]">
                  {"Page optimised for:"}
                </strong>
                {
                  " best APEC PRP consultant Singapore · affordable APEC PRP certification SG · APEC PRP audit 2025 · data processor privacy certification · cross-border data transfer PDPA · EDGE Grant data privacy SG · APEC PRP funding · CBPR PRP consultant SG · APEC CBPR system Singapore · APEC数据处理者认证新加坡 · 跨境隐私认证辅导"
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
                    "APEC PRP certification — cross-border privacy accountability, funding guidance available. "
                  }
                  <SiteLink
                    href="/contact-us"
                    className="text-inherit [text-decoration:underline] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] inline-block [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
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
