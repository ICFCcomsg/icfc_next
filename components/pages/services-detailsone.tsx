import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";

export function ServicesDetailsonePageContent() {
  return (
    <SitePageTemplate route="services-detailsone.html">
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
      title="ISO/IEC 27701 Privacy Information Management System (PIMS)"
      description="Audit · Consulting · Training — Singapore PDPA-Aligned Certification for Every Industry. 隐私信息管理体系认证 · 新加坡个人数据保护合规 · ESG资助申请协助 · 35+行业覆盖"
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
                  alt="ISO 27701 PIMS Certification"
                  className="max-w-full h-auto w-full rounded-[6px]"
                />
              </div>
              <div className="-mx-3 flex flex-wrap gap-y-6 mt-[40px] mb-[40px]">
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"35+"}
                    </div>
                    <p className="leading-relaxed mb-[0]">
                      {"Industries Served"}
                    </p>
                    <small>{"Deep sector expertise"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"200+"}
                    </div>
                    <p className="leading-relaxed mb-[0]">
                      {"Organisations Certified"}
                    </p>
                    <small>{"Across Singapore & ASEAN"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"100%"}
                    </div>
                    <p className="leading-relaxed mb-[0]">
                      {"PDPA Compliant Framework"}
                    </p>
                    <small>{"PDPC Recognised"}</small>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[25%] w-[50%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"S$0"}
                    </div>
                    <p className="leading-relaxed mb-[0]">
                      {"Initial Consultation"}
                    </p>
                    <small>{"Free no-obligation quote"}</small>
                  </div>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[15px] mb-[20px] font-bold">
                {"Singapore's Premier Privacy Compliance Specialist"}
              </h3>
              <p className="leading-relaxed mb-4">
                {
                  "ISO/IEC 27701:2019 is the international standard that extends ISO/IEC 27001 to establish, implement, maintain and continually improve a Privacy Information Management System (PIMS). In Singapore's regulatory landscape, PIMS directly supports your obligations under the Personal Data Protection Act (PDPA), providing a structured, auditable framework for personal data governance."
                }
              </p>
              <div className="[background:rgba(200,16,46,0.05)] rounded-[24px] mb-4 rounded-md border p-4 border-0 p-6">
                <Icon
                  name={
                    "ri-shield-check-fill fs-3 me-2 float-start text-pims-red"
                  }
                  className="text-[#C8102E] text-[28px] mr-2 float-left"
                />
                <strong>{"ISO 27701 PIMS certification"}</strong>
                {
                  " demonstrates to customers, regulators, and partners that your organisation treats personal data with the rigour it deserves — a competitive differentiator and a regulatory safeguard in Singapore's tightening data privacy environment."
                }
              </div>
              <p className="leading-relaxed mb-4">
                {
                  "Bustar Consulting is Singapore's most trusted, budget-friendly PIMS certification specialist — delivering end-to-end audit, consulting, and training services across all major industries. Our bilingual (English & Mandarin) team ensures seamless adoption whether you're an MNC, SME, or government-linked organisation."
                }
              </p>
              <div className="-mx-3 flex flex-wrap gap-y-6 mt-[5px]">
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="rounded-[20px] [background:#fff] [border:1px_solid_#e2e8f0] p-[2rem] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:[border-color:#C8102E]">
                    <Icon
                      name="survey"
                      className="text-[2.5rem] text-[#C8102E] mb-[1.25rem] inline-block"
                    />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"01. PIMS Certification Audit"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Independent, impartial ISO/IEC 27701 gap analysis and certification audit services. Our accredited auditors assess your privacy controls against all 31 privacy-specific clauses and 49 PDPA-mapped controls."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D] [background:transparent] [border:2px_solid_#C8102E] text-[#C8102E] p-[10px_24px] rounded-[40px] font-semibold [text-decoration:none] inline-flex items-center gap-[8px] hover:[background:#C8102E] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                    >
                      {"Explore Audit "}
                      <Icon name="right" />
                    </SiteLink>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="rounded-[20px] [background:#fff] [border:1px_solid_#e2e8f0] p-[2rem] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:[border-color:#C8102E]">
                    <Icon
                      name="file"
                      className="text-[2.5rem] text-[#C8102E] mb-[1.25rem] inline-block"
                    />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"02. PIMS Implementation Consulting"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "End-to-end consulting to design, implement, and operationalise your Privacy Information Management System. Our Singapore-based consultants bring deep PDPA expertise and pragmatic approach."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D] [background:transparent] [border:2px_solid_#C8102E] text-[#C8102E] p-[10px_24px] rounded-[40px] font-semibold [text-decoration:none] inline-flex items-center gap-[8px] hover:[background:#C8102E] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                    >
                      {"Explore Consulting "}
                      <Icon name="right" />
                    </SiteLink>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="rounded-[20px] [background:#fff] [border:1px_solid_#e2e8f0] p-[2rem] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:[border-color:#C8102E]">
                    <Icon
                      name="user"
                      className="text-[2.5rem] text-[#C8102E] mb-[1.25rem] inline-block"
                    />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"03. PIMS Awareness & Training"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Industry-leading ISO 27701 training programs designed for Singapore's multi-sector workforce. From C-suite privacy awareness to hands-on implementer boot camps."
                      }
                    </p>
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D] [background:transparent] [border:2px_solid_#C8102E] text-[#C8102E] p-[10px_24px] rounded-[40px] font-semibold [text-decoration:none] inline-flex items-center gap-[8px] hover:[background:#C8102E] hover:text-[#fff] hover:[transform:translateY(-2px)]"
                    >
                      {"Explore Training "}
                      <Icon name="right" />
                    </SiteLink>
                  </div>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[50px] mb-[20px] font-bold">
                {"ISO 27701 Audit Process"}
              </h3>
              <div className="[border-left:3px_solid_#C8102E] pl-[20px] mb-[30px]">
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"Step 1: Pre-Audit Scoping & Readiness Review"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "Define audit scope, identify PIIs in scope, review existing ISMS documentation, and assess PDPA compliance posture. We identify quick wins and critical gaps before formal audit begins."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"Step 2: Stage 1 - Documentation Audit"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "Desk review of your PIMS policies, procedures, risk registers, DPIAs, and legal bases documentation. We verify alignment with ISO 27701 Annex A, B, and all Singapore PDPA obligations."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"Step 3: Stage 2 - On-site Certification Audit"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "In-depth interviews, evidence sampling, and process walk-throughs across your organisation. Assessment against all 31 privacy-specific clauses covering both data controllers and processors."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"Step 4: Non-Conformity Resolution & Corrective Action"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "We work alongside your team to close identified non-conformities, providing remediation guidance, documentation templates, and evidence-gathering support."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"Step 5: Certification Recommendation & Award"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "Successful completion results in ISO/IEC 27701 certification valid for 3 years, with annual surveillance audits. Certificate is internationally recognised and accepted by regulators globally."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"Step 6: Surveillance & Recertification (Ongoing)"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "Annual surveillance audits maintain certification currency. We support continuous improvement, PDPA regulatory updates, and recertification every 3 years."
                    }
                  </p>
                </div>
              </div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Audit Deliverables"}
              </h4>
              <ul className="list-none pl-[0]">
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"ISO/IEC 27701 Certification Certificate"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Detailed Gap Analysis Report"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Non-conformity Register with remediation roadmap"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"PDPA Obligation Mapping Matrix"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Privacy Risk Assessment Report"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Audit Evidence Package"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Corrective Action Plan (CAP)"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Executive Summary Presentation"}
                </li>
              </ul>
              <p className="leading-relaxed mb-4">
                <strong>{"Typical Audit Timeline:"}</strong>
                {
                  " Pre-Audit Scoping (Week 1-2) → Stage 1 Documentation Review (Week 3-4) → Stage 2 On-site Audit (Week 5-7) → NC Closure (Week 8-10) → Certification Award (Week 11-12) → Total Duration 10-14 Weeks"
                }
              </p>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"PIMS Implementation Consulting"}
              </h3>
              <div className="[border-left:3px_solid_#C8102E] pl-[20px] mb-[30px]">
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"1. Organisational Privacy Maturity Assessment"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "Baseline assessment of your current privacy practices, data flows, existing policies, and PDPA compliance gaps. Produces a prioritised improvement roadmap with ROI considerations."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"2. Data Inventory, Mapping & ROPA"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "Comprehensive mapping of personal data across systems, processes, and third parties. We build your Register of Processing Activities (ROPA) aligned to PDPC requirements."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"3. Privacy Risk Assessment & DPIA/PIA"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "Structured Data Protection Impact Assessments for high-risk processing activities, aligned to PDPC's Advisory Guidelines on DPIA and ISO 29134."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"4. Policy, Procedure & Control Development"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "End-to-end drafting of your Privacy Policy, Data Breach Response Plan, Consent Management Framework, Third-party Vendor Management Policy, and all supporting PIMS documentation."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"5. PIMS Implementation & Integration"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "Technical and operational implementation of privacy controls, integrated with your existing ISMS (ISO 27001), quality management (ISO 9001), or ESG reporting frameworks."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="font-extrabold text-[#C8102E] mb-[5px]">
                    {"6. ESG Grant & Funding Application Assistance"}
                  </div>
                  <p className="leading-relaxed mb-4">
                    {
                      "We identify applicable government grants (EDG, CTO-as-a-Service, MAS FSTI, IMDA schemes) and prepare your application to maximise funding coverage for PIMS certification."
                    }
                  </p>
                </div>
              </div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Consulting Deliverables"}
              </h4>
              <ul className="list-none pl-[0]">
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Privacy Maturity Assessment Report"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Data Flow Maps & ROPA Documentation"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Privacy Policy Suite (15+ templates)"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"DPIA/PIA Reports for high-risk processes"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Consent Management Framework"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Vendor Privacy Risk Assessment Templates"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Data Breach Response Playbook"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"PIMS Implementation Roadmap"}
                </li>
                <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"ESG/EDG Grant Application Package"}
                </li>
              </ul>
              <p className="leading-relaxed mb-4">
                <strong>{"Consulting Timeline:"}</strong>
                {
                  " Discovery & Assessment (Week 1-3) → Data Mapping & ROPA (Week 3-6) → Policy Development (Week 5-10) → Control Implementation (Week 8-16) → Grant Application Support (Parallel Track) → Certification-Ready in 12-20 Weeks"
                }
              </p>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"PIMS Training Programs"}
              </h3>
              <div className="-mx-3 flex flex-wrap gap-y-6">
                <div className="w-full shrink-0 px-3 md:w-[50%]">
                  <div className="bg-slate-50 p-4">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                      {"ISO 27701 Foundation Course (1 Day)"}
                    </h5>
                    <p className="leading-relaxed mb-4">
                      {
                        "Introduction to PIMS concepts, ISO 27701 structure, key clauses, PDPA alignment, and the role of DPO. Ideal for all staff needing privacy awareness. Available in English and Mandarin."
                      }
                    </p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[50%]">
                  <div className="bg-slate-50 p-4">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                      {"ISO 27701 Implementer Course (3 Days)"}
                    </h5>
                    <p className="leading-relaxed mb-4">
                      {
                        "Hands-on training for privacy officers, IT teams, and compliance professionals. Covers PIMS design, DPIA methodology, policy development, and audit preparation techniques."
                      }
                    </p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[50%]">
                  <div className="bg-slate-50 p-4">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                      {"PDPA Staff Awareness Programme (Half Day)"}
                    </h5>
                    <p className="leading-relaxed mb-4">
                      {
                        "Practical, scenario-based PDPA training for all employees. Covers consent, purpose limitation, access rights, data breach obligations, and do-not-call registry compliance."
                      }
                    </p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[50%]">
                  <div className="bg-slate-50 p-4">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                      {"DPO Certification Preparation (2 Days)"}
                    </h5>
                    <p className="leading-relaxed mb-4">
                      {
                        "Intensive preparation for PDPC's Data Protection Officer certification. Covers PDPA obligations, privacy risk management, breach notification, and enforcement case studies from Singapore."
                      }
                    </p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[50%]">
                  <div className="bg-slate-50 p-4">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                      {"Executive Privacy Leadership Workshop"}
                    </h5>
                    <p className="leading-relaxed mb-4">
                      {
                        "Half-day C-suite workshop on privacy governance, board responsibilities, ESG privacy reporting, regulatory enforcement trends, and building privacy-by-design into business strategy."
                      }
                    </p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[50%]">
                  <div className="bg-slate-50 p-4">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                      {"Custom Industry-Specific Training"}
                    </h5>
                    <p className="leading-relaxed mb-4">
                      {
                        "Bespoke training modules for Fintech (MAS Notice), Healthcare (MOH requirements), Telecommunications (iDA regulations), CII operators, and other regulated sectors."
                      }
                    </p>
                  </div>
                </div>
              </div>
              <p className="leading-relaxed mb-4">
                <strong>{"Training Formats:"}</strong>
                {
                  " Public classroom (Singapore CBD), Private on-site corporate sessions, Live virtual (Zoom / Teams), Self-paced e-learning modules, Mandarin-language classes 华语班, SkillsFuture Credit eligible courses."
                }
              </p>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"PDPC Enforcement Statistics (2024–2025)"}
              </h3>
              <div className="-mx-3 flex flex-wrap gap-y-6">
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"S$1M+"}
                    </div>
                    <p className="leading-relaxed mb-4">
                      {"Maximum financial penalty per breach"}
                    </p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"10%"}
                    </div>
                    <p className="leading-relaxed mb-4">
                      {"Annual turnover cap for large enterprises"}
                    </p>
                  </div>
                </div>
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                    <div className="text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2] mb-[8px]">
                      {"3 Days"}
                    </div>
                    <p className="leading-relaxed mb-4">
                      {"Mandatory breach notification window"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="[background:#EAF3DE] [border-left:4px_solid_#3B6D11] p-[20px] rounded-[16px]">
                <Icon name="star" className="text-[28px] float-left mr-4" />
                <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                  {"EDG & ESG Grant Eligible - Up to 70% Co-funding"}
                </h5>
                <p className="leading-relaxed mb-4">
                  {
                    "Enterprise Development Grant (EDG) supports SMEs in building business capabilities. PIMS implementation qualifies under Consultancy capability category. MAS FSTI for financial institutions, IMDA Digital Resilience Bonus also available."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Why Budget-Friendly Matters:"}</strong>
                  {
                    " Many SMEs believe ISO 27701 certification is out of reach financially. Bustar challenges this assumption with modular, right-sized engagement models. Our SME PIMS Express package — combining gap assessment, essential policy templates, and certification support — is engineered to deliver international-standard privacy governance at a fraction of large consultancy costs. With ESG and EDG grant stacking, many clients achieve net certification costs below S$5,000."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] [background:#3B6D11] text-[#fff] p-[10px_24px] rounded-[40px] font-semibold text-[14px] [text-decoration:none] inline-flex items-center gap-[8px] [border:none] hover:[background:#8B0A1E] hover:[transform:translateX(5px)] hover:text-[#fff]"
                >
                  {"Check Eligibility "}
                  <Icon name="right" />
                </SiteLink>
              </div>
              <p className="leading-relaxed mb-4">
                <strong>{"PIMS as ESG Currency:"}</strong>
                {
                  " ISO 27701 PIMS certification is increasingly recognised as a governance component of ESG (Environmental, Social, Governance) reporting — particularly in the Social dimension. SGX-listed companies and supply chain partners are beginning to require privacy governance evidence from vendors. Early PIMS certification positions your organisation ahead of this curve, supporting both regulatory compliance and ESG-driven supplier qualification."
                }
              </p>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[20px] font-bold">
                {"35+ Industries We Serve"}
              </h3>
              <div className="mb-[40px]">
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🏦 Financial Services & Fintech"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"📡 Telecommunications"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"💻 Information Technology"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🏢 Data Centre Operations"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🛡️ Critical Information Infrastructure"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🏥 Healthcare & Hospitals"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"💊 Pharmaceutical & Biotech"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🏗️ Construction & Real Estate"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"⚓ Marine & Shipping"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🚛 Logistics & Supply Chain"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🏭 Manufacturing & Industry 4.0"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🎓 Education & Training"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🏛️ Government & Statutory Boards"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🛒 Retail & E-Commerce"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🍽️ Food & Beverage / Hospitality"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"✈️ Aviation & Aerospace"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"⚡ Energy & Utilities"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🏠 Property Management"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🎰 Gaming & Entertainment"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"⚖️ Legal & Professional Services"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🚌 Land Transport & Mobility"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🔬 Research & Academic Institutions"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🛡️ Cybersecurity Services"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"📱 Media & Communications"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🧪 Laboratory & Testing Services"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"💰 Insurance"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🌐 Digital Marketing & AdTech"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🧩 Human Resources & Staffing"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🔧 Engineering & Technical Services"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🌱 Environmental & Sustainability (ESG)"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🎨 Creative & Design Industries"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🛳️ Cruise & Tourism"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🧸 Social Services & NGOs"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🧬 MedTech & HealthTech"}
                </span>
                <span className="[background:#f1f5f9] p-[8px_16px] rounded-[40px] text-[13px] font-medium text-[#1e293b] m-[5px] inline-block hover:[background:#C8102E] hover:text-[#fff]">
                  {"🤖 AI / Data Analytics Firms"}
                </span>
                <p className="leading-relaxed text-slate-500 mb-4">
                  <small>
                    {
                      "Don't see your industry? Contact us — we cover all sectors operating in Singapore."
                    }
                  </small>
                </p>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[20px] font-bold">
                {"How ISO 27701 Maps to Singapore's PDPA"}
              </h3>
              <div className="mb-[40px] w-full overflow-x-auto">
                <table className="[border:1px_solid_#DBDEE1] max-[991px]:w-[900px] w-full border-collapse text-left [&_th]:border-b [&_th]:border-slate-300 [&_th]:bg-slate-50 [&_th]:p-3 [&_td]:border-b [&_td]:border-slate-200 [&_td]:p-3 [&_td]:border [&_th]:border">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="[border:none]">{"PDPA Obligation"}</th>
                      <th className="[border:none]">{"ISO 27701 Control"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{"Consent & Notification"}</td>
                      <td>
                        {"Clause 7.2, 7.3 – Purpose and consent management"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Access & Correction"}</td>
                      <td>{"Clause 7.3 – DSAR handling procedures"}</td>
                    </tr>
                    <tr>
                      <td>{"Protection (Security)"}</td>
                      <td>
                        {"Annex A / B – Technical & organisational controls"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Retention Limitation"}</td>
                      <td>
                        {"Data lifecycle & retention schedule management"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Transfer Limitation"}</td>
                      <td>
                        {"Third-party management & transfer impact assessments"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Data Breach Notification"}</td>
                      <td>
                        {"Incident response & breach notification procedures"}
                      </td>
                    </tr>
                    <tr>
                      <td>{"Accountability"}</td>
                      <td>{"PIMS certification as evidence to PDPC"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mb-[40px] [background:rgba(200,16,46,0.05)] rounded-[24px] p-12">
                <div className="-mx-3 flex flex-wrap gap-y-6 items-center">
                  <div className="w-full shrink-0 px-3 lg:w-[58.333333333333336%]">
                    <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                      {
                        "Why Bustar Consulting? Singapore's Best-Value PIMS Specialist"
                      }
                    </h3>
                    <p className="leading-relaxed mb-4">
                      {
                        "200+ organisations certified across Singapore, ASEAN, and Greater China. Bilingual (English & Mandarin) consultants. PDPA-first methodology, not generic templates. Practical, operational experience. Long-term partnership with DPO retainer services."
                      }
                    </p>
                    <ul className="list-none pl-[0]">
                      <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                        {
                          "PDPA-First Methodology – Every PIMS engagement starts with Singapore PDPA alignment"
                        }
                      </li>
                      <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                        {
                          "Practical, Not Just Compliant – We build PIMS that actually work in your organisation"
                        }
                      </li>
                      <li className="p-[6px_0] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                        {
                          "Long-Term Partnership – We don't disappear after certification"
                        }
                      </li>
                    </ul>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] [background:#C8102E] text-[#fff] p-[10px_24px] rounded-[40px] font-semibold text-[14px] [text-decoration:none] inline-flex items-center gap-[8px] [border:none] hover:[background:#8B0A1E] hover:[transform:translateX(5px)] hover:text-[#fff]"
                    >
                      {"Start Your PIMS Journey "}
                      <Icon name="right" />
                    </SiteLink>
                  </div>
                  <div className="w-full shrink-0 px-3 lg:w-[41.66666666666667%] text-center">
                    <Icon name="star" className="text-[80px] text-[#C8102E]" />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"Trusted by 200+ Orgs"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {"⭐⭐⭐⭐⭐ Singapore's leading PIMS partner"}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[20px] font-bold">
                {"Frequently Asked Questions"}
              </h3>
              <div id="faqCustom">
                <div className="[border-bottom:1px_solid_#e2e8f0] mb-[16px]">
                  <div className="font-bold text-[18px] text-[#0f172a] p-[16px_0] m-[0] flex justify-between items-center">
                    {
                      "What is ISO/IEC 27701 and how does it relate to Singapore's PDPA? "
                    }
                    <Icon name="plus" className="text-[#C8102E]" />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      'ISO/IEC 27701:2019 is the international standard for Privacy Information Management Systems (PIMS). It extends ISO/IEC 27001 (Information Security) by adding specific privacy controls for both Personal Information Controllers (PICs) and Personal Information Processors (PIPs). In Singapore\'s context, PIMS directly supports compliance with the PDPA 2012 (as amended in 2021), and achieving certification demonstrates the "accountability" obligation to the PDPC — potentially serving as a mitigating factor in enforcement actions.'
                    }
                  </div>
                </div>
                <div className="[border-bottom:1px_solid_#e2e8f0] mb-[16px]">
                  <div className="font-bold text-[18px] text-[#0f172a] p-[16px_0] m-[0] flex justify-between items-center">
                    {"How long does ISO 27701 PIMS certification take? "}
                    <Icon name="plus" className="text-[#C8102E]" />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "For organisations with an existing ISO 27001 ISMS, PIMS certification typically takes 10–14 weeks including gap analysis, policy development, and the two-stage audit process. For organisations starting from scratch, expect 16–24 weeks for a full ISMS + PIMS implementation. Bustar's SME Express pathway can accelerate this to 8–10 weeks for smaller organisations with simpler data processing activities."
                    }
                  </div>
                </div>
                <div className="[border-bottom:1px_solid_#e2e8f0] mb-[16px]">
                  <div className="font-bold text-[18px] text-[#0f172a] p-[16px_0] m-[0] flex justify-between items-center">
                    {"Is PIMS certification mandatory in Singapore? "}
                    <Icon name="plus" className="text-[#C8102E]" />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "ISO 27701 PIMS certification is currently voluntary in Singapore. However, it is increasingly becoming a de facto requirement in regulated sectors (financial services, healthcare, CII), government procurement, and MNC supply chains. PDPC explicitly recognises PIMS certification as evidence of accountability. With PDPA penalties now reaching up to 10% of annual turnover or S$1 million, the risk-reduction value of certification far outweighs its cost."
                    }
                  </div>
                </div>
                <div className="[border-bottom:1px_solid_#e2e8f0] mb-[16px]">
                  <div className="font-bold text-[18px] text-[#0f172a] p-[16px_0] m-[0] flex justify-between items-center">
                    {"Can we get ESG grants to fund PIMS certification? "}
                    <Icon name="plus" className="text-[#C8102E]" />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "Yes. Singapore SMEs may be eligible for Enterprise Singapore's Enterprise Development Grant (EDG), which can cover up to 70% of qualifying consultancy and certification costs. Financial sector organisations may access MAS's FSTI scheme. IMDA's Digital Resilience Bonus may also apply for certain sectors. Bustar's grant advisory team will assess your specific eligibility and prepare your application as part of our engagement — at no additional charge for qualifying clients."
                    }
                  </div>
                </div>
                <div className="[border-bottom:1px_solid_#e2e8f0] mb-[16px]">
                  <div className="font-bold text-[18px] text-[#0f172a] p-[16px_0] m-[0] flex justify-between items-center">
                    {"Do we need ISO 27001 before pursuing ISO 27701? "}
                    <Icon name="plus" className="text-[#C8102E]" />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "ISO 27701 is an extension to ISO 27001, meaning a certified ISMS is technically required as the foundation. In practice, many organisations pursue a combined ISO 27001 + ISO 27701 implementation and certification, which is often more cost-effective and time-efficient than sequential certifications. Bustar offers an integrated implementation pathway and can recommend the optimal approach based on your organisation's starting point."
                    }
                  </div>
                </div>
                <div className="[border-bottom:1px_solid_#e2e8f0] mb-[16px]">
                  <div className="font-bold text-[18px] text-[#0f172a] p-[16px_0] m-[0] flex justify-between items-center">
                    {
                      "Do you offer Mandarin-language PIMS services? 提供华语服务吗？ "
                    }
                    <Icon name="plus" className="text-[#C8102E]" />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "是的。Bustar Consulting provides fully bilingual ISO 27701 PIMS services in both English and Mandarin (普通话). This includes consulting engagements, training courses, documentation in Chinese, and client communications. We serve Singapore-based companies with Chinese-speaking leadership, as well as Chinese multinationals expanding into Singapore who require PDPA-compliant operations."
                    }
                  </div>
                </div>
                <div className="[border-bottom:1px_solid_#e2e8f0] mb-[16px]">
                  <div className="font-bold text-[18px] text-[#0f172a] p-[16px_0] m-[0] flex justify-between items-center">
                    {"What is the cost of ISO 27701 PIMS certification? "}
                    <Icon name="plus" className="text-[#C8102E]" />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "Bustar prides itself on being Singapore's most budget-friendly PIMS specialist without compromising on quality. Indicative pricing for SME PIMS Express (up to 50 employees, simple data processing): from S$8,000–S$15,000 before grants. Mid-size organisations (50–500 employees): S$18,000–S$45,000. Enterprise (500+ employees, complex processing): custom scoping. After EDG grant support (up to 70%), net costs are substantially reduced. Contact us for a free, no-obligation scoping quote."
                    }
                  </div>
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
                <svg width="6" height="11" viewBox="0 0 6 11">
                  <path
                    d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                    fill="#AB052D"
                  ></path>
                </svg>
              </span>
              <div className="text-[14px] font-medium">
                <p className="leading-relaxed text-[rgba(255,_255,_255,_0.8)] text-[14px] font-medium max-[575px]:text-center mb-4">
                  {
                    "Join 200+ Singapore organisations that trust Bustar to navigate ISO 27701, PDPA compliance, and privacy governance — on time, on budget, and with grant support. "
                  }
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] [text-decoration:underline] inline-block hover:text-[#AB052D]"
                  >
                    {"Get Free Quote →"}
                  </SiteLink>
                  {
                    " | Call us: +65 9123 4567 | Email: bustar@bustarconsulting.com | 华语热线: +65 8123 4567"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
