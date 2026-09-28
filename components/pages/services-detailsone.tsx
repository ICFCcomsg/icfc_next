import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";

export function ServicesDetailsonePageContent() {
  return (
    <SitePageTemplate route="services-detailsone">
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 27701 PIMS Certification"
                  className="[vertical-align:middle] max-w-full w-full rounded-[6px]"
                />
              </div>
              <div className="flex flex-wrap mt-[40px] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] mb-[40px]">
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-[8px] text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"35+"}
                    </div>
                    <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"Industries Served"}
                    </p>
                    <small className="text-[.875em]">
                      {"Deep sector expertise"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-[8px] text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"200+"}
                    </div>
                    <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"Organisations Certified"}
                    </p>
                    <small className="text-[.875em]">
                      {"Across Singapore & ASEAN"}
                    </small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-[8px] text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"100%"}
                    </div>
                    <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"PDPA Compliant Framework"}
                    </p>
                    <small className="text-[.875em]">{"PDPC Recognised"}</small>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[25%] max-[768px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-[8px] text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"S$0"}
                    </div>
                    <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"Initial Consultation"}
                    </p>
                    <small className="text-[.875em]">
                      {"Free no-obligation quote"}
                    </small>
                  </div>
                </div>
              </div>
              <h3 className="mt-[15px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Singapore's Premier Privacy Compliance Specialist"}
              </h3>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO/IEC 27701:2019 is the international standard that extends ISO/IEC 27001 to establish, implement, maintain and continually improve a Privacy Information Management System (PIMS). In Singapore's regulatory landscape, PIMS directly supports your obligations under the Personal Data Protection Act (PDPA), providing a structured, auditable framework for personal data governance."
                }
              </p>
              <div className="relative pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! mb-[1.5rem]! text-[#58151c] bg-[#f8d7da] [border:0]! rounded-[24px] mt-[1rem]! [background:rgba(200,16,46,0.05)]">
                <Icon
                  name={
                    "ri-shield-check-fill fs-3 me-2 float-start text-pims-red"
                  }
                  className="[float:left]! mr-[.5rem]! text-[1.75rem]! max-[1200px]:text-[calc(1.3rem_+_.6vw)]! inline-block [font-style:normal] text-[#C8102E]"
                />
                <strong className="[font-weight:bolder]">
                  {"ISO 27701 PIMS certification"}
                </strong>
                {
                  " demonstrates to customers, regulators, and partners that your organisation treats personal data with the rigour it deserves — a competitive differentiator and a regulatory safeguard in Singapore's tightening data privacy environment."
                }
              </div>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Bustar Consulting is Singapore's most trusted, budget-friendly PIMS certification specialist — delivering end-to-end audit, consulting, and training services across all major industries. Our bilingual (English & Mandarin) team ensures seamless adoption whether you're an MNC, SME, or government-linked organisation."
                }
              </p>
              <div className="flex flex-wrap mt-[5px]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[2rem] pr-[2rem] pb-[2rem] pl-[2rem] rounded-[20px] [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:[border-color:#C8102E] [transition:all_0.3s_ease] motion-reduce:transition-none">
                    <Icon
                      name="survey"
                      className="mb-[1.25rem] inline-block [font-style:normal] text-[2.5rem] text-[#C8102E]"
                    />
                    <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"01. PIMS Certification Audit"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Independent, impartial ISO/IEC 27701 gap analysis and certification audit services. Our accredited auditors assess your privacy controls against all 31 privacy-specific clauses and 49 PDPA-mapped controls."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#C8102E] [text-decoration:none] mt-[1rem]! pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:2px_solid_#C8102E] [background:transparent] rounded-[40px] font-semibold inline-flex items-center gap-[8px] hover:[background:#C8102E] hover:[transform:translateY(-2px)] [transition:all_0.3s] motion-reduce:transition-none"
                    >
                      {"Explore Audit "}
                      <Icon
                        name="right"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[2rem] pr-[2rem] pb-[2rem] pl-[2rem] rounded-[20px] [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:[border-color:#C8102E] [transition:all_0.3s_ease] motion-reduce:transition-none">
                    <Icon
                      name="file"
                      className="mb-[1.25rem] inline-block [font-style:normal] text-[2.5rem] text-[#C8102E]"
                    />
                    <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"02. PIMS Implementation Consulting"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "End-to-end consulting to design, implement, and operationalise your Privacy Information Management System. Our Singapore-based consultants bring deep PDPA expertise and pragmatic approach."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#C8102E] [text-decoration:none] mt-[1rem]! pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:2px_solid_#C8102E] [background:transparent] rounded-[40px] font-semibold inline-flex items-center gap-[8px] hover:[background:#C8102E] hover:[transform:translateY(-2px)] [transition:all_0.3s] motion-reduce:transition-none"
                    >
                      {"Explore Consulting "}
                      <Icon
                        name="right"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[2rem] pr-[2rem] pb-[2rem] pl-[2rem] rounded-[20px] [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:[border-color:#C8102E] [transition:all_0.3s_ease] motion-reduce:transition-none">
                    <Icon
                      name="user"
                      className="mb-[1.25rem] inline-block [font-style:normal] text-[2.5rem] text-[#C8102E]"
                    />
                    <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"03. PIMS Awareness & Training"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Industry-leading ISO 27701 training programs designed for Singapore's multi-sector workforce. From C-suite privacy awareness to hands-on implementer boot camps."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#C8102E] [text-decoration:none] mt-[1rem]! pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:2px_solid_#C8102E] [background:transparent] rounded-[40px] font-semibold inline-flex items-center gap-[8px] hover:[background:#C8102E] hover:[transform:translateY(-2px)] [transition:all_0.3s] motion-reduce:transition-none"
                    >
                      {"Explore Training "}
                      <Icon
                        name="right"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                  </div>
                </div>
              </div>
              <h3 className="mt-[50px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"ISO 27701 Audit Process"}
              </h3>
              <div className="mb-[30px] pl-[20px] [border-left:3px_solid_#C8102E]">
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"Step 1: Pre-Audit Scoping & Readiness Review"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Define audit scope, identify PIIs in scope, review existing ISMS documentation, and assess PDPA compliance posture. We identify quick wins and critical gaps before formal audit begins."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"Step 2: Stage 1 - Documentation Audit"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Desk review of your PIMS policies, procedures, risk registers, DPIAs, and legal bases documentation. We verify alignment with ISO 27701 Annex A, B, and all Singapore PDPA obligations."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"Step 3: Stage 2 - On-site Certification Audit"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "In-depth interviews, evidence sampling, and process walk-throughs across your organisation. Assessment against all 31 privacy-specific clauses covering both data controllers and processors."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"Step 4: Non-Conformity Resolution & Corrective Action"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "We work alongside your team to close identified non-conformities, providing remediation guidance, documentation templates, and evidence-gathering support."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"Step 5: Certification Recommendation & Award"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Successful completion results in ISO/IEC 27701 certification valid for 3 years, with annual surveillance audits. Certificate is internationally recognised and accepted by regulators globally."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"Step 6: Surveillance & Recertification (Ongoing)"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Annual surveillance audits maintain certification currency. We support continuous improvement, PDPA regulatory updates, and recertification every 3 years."
                    }
                  </p>
                </div>
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Audit Deliverables"}
              </h4>
              <ul className="pl-[0] mt-[0px] mb-[1.5rem]! mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] list-none">
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"ISO/IEC 27701 Certification Certificate"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Detailed Gap Analysis Report"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Non-conformity Register with remediation roadmap"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"PDPA Obligation Mapping Matrix"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Privacy Risk Assessment Report"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Audit Evidence Package"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Corrective Action Plan (CAP)"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Executive Summary Presentation"}
                </li>
              </ul>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                <strong className="[font-weight:bolder]">
                  {"Typical Audit Timeline:"}
                </strong>
                {
                  " Pre-Audit Scoping (Week 1-2) → Stage 1 Documentation Review (Week 3-4) → Stage 2 On-site Audit (Week 5-7) → NC Closure (Week 8-10) → Certification Award (Week 11-12) → Total Duration 10-14 Weeks"
                }
              </p>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"PIMS Implementation Consulting"}
              </h3>
              <div className="mb-[30px] pl-[20px] [border-left:3px_solid_#C8102E]">
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"1. Organisational Privacy Maturity Assessment"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Baseline assessment of your current privacy practices, data flows, existing policies, and PDPA compliance gaps. Produces a prioritised improvement roadmap with ROI considerations."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"2. Data Inventory, Mapping & ROPA"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Comprehensive mapping of personal data across systems, processes, and third parties. We build your Register of Processing Activities (ROPA) aligned to PDPC requirements."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"3. Privacy Risk Assessment & DPIA/PIA"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Structured Data Protection Impact Assessments for high-risk processing activities, aligned to PDPC's Advisory Guidelines on DPIA and ISO 29134."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"4. Policy, Procedure & Control Development"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "End-to-end drafting of your Privacy Policy, Data Breach Response Plan, Consent Management Framework, Third-party Vendor Management Policy, and all supporting PIMS documentation."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"5. PIMS Implementation & Integration"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Technical and operational implementation of privacy controls, integrated with your existing ISMS (ISO 27001), quality management (ISO 9001), or ESG reporting frameworks."
                    }
                  </p>
                </div>
                <div className="mb-[20px]">
                  <div className="mb-[5px] font-extrabold text-[#C8102E]">
                    {"6. ESG Grant & Funding Application Assistance"}
                  </div>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "We identify applicable government grants (EDG, CTO-as-a-Service, MAS FSTI, IMDA schemes) and prepare your application to maximise funding coverage for PIMS certification."
                    }
                  </p>
                </div>
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Consulting Deliverables"}
              </h4>
              <ul className="pl-[0] mt-[0px] mb-[1.5rem]! mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] list-none">
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Privacy Maturity Assessment Report"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Data Flow Maps & ROPA Documentation"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Privacy Policy Suite (15+ templates)"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"DPIA/PIA Reports for high-risk processes"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Consent Management Framework"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Vendor Privacy Risk Assessment Templates"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"Data Breach Response Playbook"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"PIMS Implementation Roadmap"}
                </li>
                <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                  {"ESG/EDG Grant Application Package"}
                </li>
              </ul>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                <strong className="[font-weight:bolder]">
                  {"Consulting Timeline:"}
                </strong>
                {
                  " Discovery & Assessment (Week 1-3) → Data Mapping & ROPA (Week 3-6) → Policy Development (Week 5-10) → Control Implementation (Week 8-16) → Grant Application Support (Parallel Track) → Certification-Ready in 12-20 Weeks"
                }
              </p>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"PIMS Training Programs"}
              </h3>
              <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] mb-[1.5rem]!">
                <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[1rem]!">
                    <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"ISO 27701 Foundation Course (1 Day)"}
                    </h5>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Introduction to PIMS concepts, ISO 27701 structure, key clauses, PDPA alignment, and the role of DPO. Ideal for all staff needing privacy awareness. Available in English and Mandarin."
                      }
                    </p>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[1rem]!">
                    <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"ISO 27701 Implementer Course (3 Days)"}
                    </h5>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Hands-on training for privacy officers, IT teams, and compliance professionals. Covers PIMS design, DPIA methodology, policy development, and audit preparation techniques."
                      }
                    </p>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[1rem]!">
                    <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"PDPA Staff Awareness Programme (Half Day)"}
                    </h5>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Practical, scenario-based PDPA training for all employees. Covers consent, purpose limitation, access rights, data breach obligations, and do-not-call registry compliance."
                      }
                    </p>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[1rem]!">
                    <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"DPO Certification Preparation (2 Days)"}
                    </h5>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Intensive preparation for PDPC's Data Protection Officer certification. Covers PDPA obligations, privacy risk management, breach notification, and enforcement case studies from Singapore."
                      }
                    </p>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[1rem]!">
                    <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"Executive Privacy Leadership Workshop"}
                    </h5>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Half-day C-suite workshop on privacy governance, board responsibilities, ESG privacy reporting, regulatory enforcement trends, and building privacy-by-design into business strategy."
                      }
                    </p>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[1rem]!">
                    <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"Custom Industry-Specific Training"}
                    </h5>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Bespoke training modules for Fintech (MAS Notice), Healthcare (MOH requirements), Telecommunications (iDA regulations), CII operators, and other regulated sectors."
                      }
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                <strong className="[font-weight:bolder]">
                  {"Training Formats:"}
                </strong>
                {
                  " Public classroom (Singapore CBD), Private on-site corporate sessions, Live virtual (Zoom / Teams), Self-paced e-learning modules, Mandarin-language classes 华语班, SkillsFuture Credit eligible courses."
                }
              </p>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"PDPC Enforcement Statistics (2024–2025)"}
              </h3>
              <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] mb-[1.5rem]!">
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-[8px] text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"S$1M+"}
                    </div>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"Maximum financial penalty per breach"}
                    </p>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-[8px] text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"10%"}
                    </div>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"Annual turnover cap for large enterprises"}
                    </p>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                    <div className="mb-[8px] text-[2.2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                      {"3 Days"}
                    </div>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"Mandatory breach notification window"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-[1.5rem]! pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:#EAF3DE] [border-left:4px_solid_#3B6D11] rounded-[16px]">
                <Icon
                  name="star"
                  className="[float:left]! mr-[1rem]! text-[1.75rem]! max-[1200px]:text-[calc(1.3rem_+_.6vw)]! inline-block [font-style:normal]"
                />
                <h5 className="mt-[0px] mb-[.25rem]! [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {"EDG & ESG Grant Eligible - Up to 70% Co-funding"}
                </h5>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Enterprise Development Grant (EDG) supports SMEs in building business capabilities. PIMS implementation qualifies under Consultancy capability category. MAS FSTI for financial institutions, IMDA Digital Resilience Bonus also available."
                  }
                </p>
                <p className="mt-[.5rem]! mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Why Budget-Friendly Matters:"}
                  </strong>
                  {
                    " Many SMEs believe ISO 27701 certification is out of reach financially. Bustar challenges this assumption with modular, right-sized engagement models. Our SME PIMS Express package — combining gap assessment, essential policy templates, and certification support — is engineered to deliver international-standard privacy governance at a fraction of large consultancy costs. With ESG and EDG grant stacking, many clients achieve net certification costs below S$5,000."
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-[#fff] [text-decoration:none] mt-[.5rem]! pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#3B6D11]! rounded-[40px] font-semibold text-[14px] inline-flex items-center gap-[8px] hover:[background:#8B0A1E] hover:[transform:translateX(5px)] [transition:all_0.3s] motion-reduce:transition-none"
                >
                  {"Check Eligibility "}
                  <Icon
                    name="right"
                    className="inline-block [font-style:normal]"
                  />
                </SiteLink>
              </div>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                <strong className="[font-weight:bolder]">
                  {"PIMS as ESG Currency:"}
                </strong>
                {
                  " ISO 27701 PIMS certification is increasingly recognised as a governance component of ESG (Environmental, Social, Governance) reporting — particularly in the Social dimension. SGX-listed companies and supply chain partners are beginning to require privacy governance evidence from vendors. Early PIMS certification positions your organisation ahead of this curve, supporting both regulatory compliance and ESG-driven supplier qualification."
                }
              </p>
              <h3 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"35+ Industries We Serve"}
              </h3>
              <div className="mb-[40px]">
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🏦 Financial Services & Fintech"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"📡 Telecommunications"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"💻 Information Technology"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🏢 Data Centre Operations"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🛡️ Critical Information Infrastructure"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🏥 Healthcare & Hospitals"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"💊 Pharmaceutical & Biotech"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🏗️ Construction & Real Estate"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"⚓ Marine & Shipping"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🚛 Logistics & Supply Chain"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🏭 Manufacturing & Industry 4.0"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🎓 Education & Training"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🏛️ Government & Statutory Boards"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🛒 Retail & E-Commerce"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🍽️ Food & Beverage / Hospitality"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"✈️ Aviation & Aerospace"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"⚡ Energy & Utilities"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🏠 Property Management"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🎰 Gaming & Entertainment"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"⚖️ Legal & Professional Services"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🚌 Land Transport & Mobility"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🔬 Research & Academic Institutions"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🛡️ Cybersecurity Services"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"📱 Media & Communications"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🧪 Laboratory & Testing Services"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"💰 Insurance"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🌐 Digital Marketing & AdTech"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🧩 Human Resources & Staffing"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🔧 Engineering & Technical Services"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🌱 Environmental & Sustainability (ESG)"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🎨 Creative & Design Industries"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🛳️ Cruise & Tourism"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🧸 Social Services & NGOs"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🧬 MedTech & HealthTech"}
                </span>
                <span className="mt-[5px] mr-[5px] mb-[5px] ml-[5px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] [background:#f1f5f9] rounded-[40px] text-[13px] font-medium text-[#1e293b] inline-block hover:[background:#C8102E] hover:text-[#fff] [transition:all_0.2s] motion-reduce:transition-none">
                  {"🤖 AI / Data Analytics Firms"}
                </span>
                <p className="mt-[1rem]! mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                  <small className="text-[.875em]">
                    {
                      "Don't see your industry? Contact us — we cover all sectors operating in Singapore."
                    }
                  </small>
                </p>
              </div>
              <h3 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"How ISO 27701 Maps to Singapore's PDPA"}
              </h3>
              <div className="[overflow-x:auto] mb-[40px]">
                <table className="[caption-side:bottom] [border-collapse:collapse] w-full max-[991px]:w-[900px] mb-[1rem] [vertical-align:top] [border-color:#dee2e6] [border:1px_solid_#DBDEE1]">
                  <thead className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:bottom] bg-[rgba(248,249,250,1)]!">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"PDPA Obligation"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none]">
                        {"ISO 27701 Control"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:inherit]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Consent & Notification"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Clause 7.2, 7.3 – Purpose and consent management"}
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Access & Correction"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Clause 7.3 – DSAR handling procedures"}
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Protection (Security)"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Annex A / B – Technical & organisational controls"}
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Retention Limitation"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Data lifecycle & retention schedule management"}
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Transfer Limitation"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Third-party management & transfer impact assessments"}
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Data Breach Notification"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Incident response & breach notification procedures"}
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"Accountability"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial]">
                        {"PIMS certification as evidence to PDPC"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! rounded-[1rem]! mb-[40px] [background:rgba(200,16,46,0.05)]">
                <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center!">
                  <div className="[flex-shrink:0] w-[58.33333333%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                    <h3 className="mt-[0px] mb-[1rem]! [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                      {
                        "Why Bustar Consulting? Singapore's Best-Value PIMS Specialist"
                      }
                    </h3>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "200+ organisations certified across Singapore, ASEAN, and Greater China. Bilingual (English & Mandarin) consultants. PDPA-first methodology, not generic templates. Practical, operational experience. Long-term partnership with DPO retainer services."
                      }
                    </p>
                    <ul className="pl-[0] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] list-none">
                      <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                        {
                          "PDPA-First Methodology – Every PIMS engagement starts with Singapore PDPA alignment"
                        }
                      </li>
                      <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                        {
                          "Practical, Not Just Compliant – We build PIMS that actually work in your organisation"
                        }
                      </li>
                      <li className="pt-[6px] pr-[0] pb-[6px] pl-[24px] relative before:[content:'✓'] before:text-[#C8102E] before:[font-weight:bold] before:absolute before:left-[0]">
                        {
                          "Long-Term Partnership – We don't disappear after certification"
                        }
                      </li>
                    </ul>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#fff] [text-decoration:none] mt-[.5rem]! pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] rounded-[40px] font-semibold text-[14px] inline-flex items-center gap-[8px] hover:[background:#8B0A1E] hover:[transform:translateX(5px)] [transition:all_0.3s] motion-reduce:transition-none"
                    >
                      {"Start Your PIMS Journey "}
                      <Icon
                        name="right"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                  </div>
                  <div className="[flex-shrink:0] w-[41.66666667%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] text-center!">
                    <Icon
                      name="star"
                      className="inline-block [font-style:normal] text-[80px]! text-[#C8102E]!"
                    />
                    <h4 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"Trusted by 200+ Orgs"}
                    </h4>
                    <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {"⭐⭐⭐⭐⭐ Singapore's leading PIMS partner"}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Frequently Asked Questions"}
              </h3>
              <div id="faqCustom">
                <div className="mb-[16px] [border-bottom:1px_solid_#e2e8f0]">
                  <div className="mt-[0] mr-[0] mb-[0] ml-[0] pt-[16px] pr-[0] pb-[16px] pl-[0] font-bold text-[18px] text-[#0f172a] flex justify-between items-center">
                    {
                      "What is ISO/IEC 27701 and how does it relate to Singapore's PDPA? "
                    }
                    <Icon
                      name="plus"
                      className="inline-block [font-style:normal] text-[#C8102E]"
                    />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      'ISO/IEC 27701:2019 is the international standard for Privacy Information Management Systems (PIMS). It extends ISO/IEC 27001 (Information Security) by adding specific privacy controls for both Personal Information Controllers (PICs) and Personal Information Processors (PIPs). In Singapore\'s context, PIMS directly supports compliance with the PDPA 2012 (as amended in 2021), and achieving certification demonstrates the "accountability" obligation to the PDPC — potentially serving as a mitigating factor in enforcement actions.'
                    }
                  </div>
                </div>
                <div className="mb-[16px] [border-bottom:1px_solid_#e2e8f0]">
                  <div className="mt-[0] mr-[0] mb-[0] ml-[0] pt-[16px] pr-[0] pb-[16px] pl-[0] font-bold text-[18px] text-[#0f172a] flex justify-between items-center">
                    {"How long does ISO 27701 PIMS certification take? "}
                    <Icon
                      name="plus"
                      className="inline-block [font-style:normal] text-[#C8102E]"
                    />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "For organisations with an existing ISO 27001 ISMS, PIMS certification typically takes 10–14 weeks including gap analysis, policy development, and the two-stage audit process. For organisations starting from scratch, expect 16–24 weeks for a full ISMS + PIMS implementation. Bustar's SME Express pathway can accelerate this to 8–10 weeks for smaller organisations with simpler data processing activities."
                    }
                  </div>
                </div>
                <div className="mb-[16px] [border-bottom:1px_solid_#e2e8f0]">
                  <div className="mt-[0] mr-[0] mb-[0] ml-[0] pt-[16px] pr-[0] pb-[16px] pl-[0] font-bold text-[18px] text-[#0f172a] flex justify-between items-center">
                    {"Is PIMS certification mandatory in Singapore? "}
                    <Icon
                      name="plus"
                      className="inline-block [font-style:normal] text-[#C8102E]"
                    />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "ISO 27701 PIMS certification is currently voluntary in Singapore. However, it is increasingly becoming a de facto requirement in regulated sectors (financial services, healthcare, CII), government procurement, and MNC supply chains. PDPC explicitly recognises PIMS certification as evidence of accountability. With PDPA penalties now reaching up to 10% of annual turnover or S$1 million, the risk-reduction value of certification far outweighs its cost."
                    }
                  </div>
                </div>
                <div className="mb-[16px] [border-bottom:1px_solid_#e2e8f0]">
                  <div className="mt-[0] mr-[0] mb-[0] ml-[0] pt-[16px] pr-[0] pb-[16px] pl-[0] font-bold text-[18px] text-[#0f172a] flex justify-between items-center">
                    {"Can we get ESG grants to fund PIMS certification? "}
                    <Icon
                      name="plus"
                      className="inline-block [font-style:normal] text-[#C8102E]"
                    />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "Yes. Singapore SMEs may be eligible for Enterprise Singapore's Enterprise Development Grant (EDG), which can cover up to 70% of qualifying consultancy and certification costs. Financial sector organisations may access MAS's FSTI scheme. IMDA's Digital Resilience Bonus may also apply for certain sectors. Bustar's grant advisory team will assess your specific eligibility and prepare your application as part of our engagement — at no additional charge for qualifying clients."
                    }
                  </div>
                </div>
                <div className="mb-[16px] [border-bottom:1px_solid_#e2e8f0]">
                  <div className="mt-[0] mr-[0] mb-[0] ml-[0] pt-[16px] pr-[0] pb-[16px] pl-[0] font-bold text-[18px] text-[#0f172a] flex justify-between items-center">
                    {"Do we need ISO 27001 before pursuing ISO 27701? "}
                    <Icon
                      name="plus"
                      className="inline-block [font-style:normal] text-[#C8102E]"
                    />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "ISO 27701 is an extension to ISO 27001, meaning a certified ISMS is technically required as the foundation. In practice, many organisations pursue a combined ISO 27001 + ISO 27701 implementation and certification, which is often more cost-effective and time-efficient than sequential certifications. Bustar offers an integrated implementation pathway and can recommend the optimal approach based on your organisation's starting point."
                    }
                  </div>
                </div>
                <div className="mb-[16px] [border-bottom:1px_solid_#e2e8f0]">
                  <div className="mt-[0] mr-[0] mb-[0] ml-[0] pt-[16px] pr-[0] pb-[16px] pl-[0] font-bold text-[18px] text-[#0f172a] flex justify-between items-center">
                    {
                      "Do you offer Mandarin-language PIMS services? 提供华语服务吗？ "
                    }
                    <Icon
                      name="plus"
                      className="inline-block [font-style:normal] text-[#C8102E]"
                    />
                  </div>
                  <div className="pb-[20px] text-[#475569] leading-[1.6] hidden">
                    {
                      "是的。Bustar Consulting provides fully bilingual ISO 27701 PIMS services in both English and Mandarin (普通话). This includes consulting engagements, training courses, documentation in Chinese, and client communications. We serve Singapore-based companies with Chinese-speaking leadership, as well as Chinese multinationals expanding into Singapore who require PDPA-compliant operations."
                    }
                  </div>
                </div>
                <div className="mb-[16px] [border-bottom:1px_solid_#e2e8f0]">
                  <div className="mt-[0] mr-[0] mb-[0] ml-[0] pt-[16px] pr-[0] pb-[16px] pl-[0] font-bold text-[18px] text-[#0f172a] flex justify-between items-center">
                    {"What is the cost of ISO 27701 PIMS certification? "}
                    <Icon
                      name="plus"
                      className="inline-block [font-style:normal] text-[#C8102E]"
                    />
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
      <div className="w-full pr-[calc(0_*_.5)] pl-[calc(0_*_.5)] mr-[auto] ml-[auto]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="pt-[21px] pb-[21px] [background:radial-gradient(174.58%_135.27%_at_35.14%_-15.53%,_rgba(47,_62,_75,_0.6)_0%,_rgba(47,_62,_75,_0.036)_100%)] [backdrop-filter:blur(21px)] flex items-center gap-[15px] justify-center [padding-inline:15px]">
              <span className="bg-[#FFFFFF] w-[17px] min-w-[17px] h-[24px] flex max-[575px]:hidden items-center justify-center rounded-[4px]">
                <svg
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
                    "Join 200+ Singapore organisations that trust Bustar to navigate ISO 27701, PDPA compliance, and privacy governance — on time, on budget, and with grant support. "
                  }
                  <SiteLink
                    href="/contact-us"
                    className="text-[inherit] [text-decoration:underline] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] inline-block [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
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
