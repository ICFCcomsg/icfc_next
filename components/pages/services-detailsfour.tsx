import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsfourPageContent() {
  return (
    <SitePageTemplate route="services-detailsfour">
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 14001:2026 Environmental Management System"
                  className="[vertical-align:middle] max-w-full w-full rounded-[6px]"
                />
              </div>
              <p className="mt-[30px] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO 14001:2026 — published 15 April 2026 — is the world's most widely used environmental management standard, trusted by more than 670,000 certified organisations globally. The 2026 edition introduces stronger alignment with climate change, biodiversity, resource efficiency, and supply chain lifecycle thinking. In Singapore, it is essential for SGX sustainability reporting, Carbon Pricing Act compliance, NEA and EPMA regulatory alignment, and Green Plan 2030 commitments. ICFC delivers EMS gap analysis, full ISO 14001:2026 implementation, 2015-to-2026 transition support, and training — with EDG grant management built in."
                }
              </p>
              <div className="mt-[20px] mr-[0] mb-[20px] ml-[0] grid [grid-template-columns:repeat(4,_1fr)] max-[768px]:[grid-template-columns:1fr] gap-[20px]">
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"Apr 2026"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"ISO 14001:2026 published"}
                  </p>
                  <small className="text-[.875em]">
                    {"start transition now"}
                  </small>
                </div>
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"May 2029"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"2015 certificates expire"}
                  </p>
                  <small className="text-[.875em]">
                    {"3-year transition window"}
                  </small>
                </div>
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"S$45"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"/tCO₂e carbon tax 2026"}
                  </p>
                  <small className="text-[.875em]">{"S$50–80 by 2030"}</small>
                </div>
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"670K+"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Organisations certified"}
                  </p>
                  <small className="text-[.875em]">{"globally"}</small>
                </div>
              </div>
              <div className="mt-[25px] mr-[0] mb-[25px] ml-[0] pt-[25px] pr-[25px] pb-[25px] pl-[25px] [background:linear-gradient(135deg,_#e8f5e9,_#f1f8e9)]! rounded-[20px]">
                <h3 className="mt-[0px] mb-[15px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {
                    "🌿 ISO 14001:2026 — what changed and what it means for Singapore organisations"
                  }
                </h3>
                <div className="flex flex-wrap mt-[calc(-1_*_1rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="mb-[15px] pt-[15px] pr-[15px] pb-[15px] pl-[15px] [background:#fff] rounded-[12px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong className="[font-weight:bolder]">
                        {"📅 Published"}
                      </strong>
                      <br />
                      {
                        "ISO 14001:2026 published 15 April 2026 — replaces ISO 14001:2015 including the 2024 climate change amendment"
                      }
                    </div>
                  </div>
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="mb-[15px] pt-[15px] pr-[15px] pb-[15px] pl-[15px] [background:#fff] rounded-[12px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong className="[font-weight:bolder]">
                        {"⏰ Transition"}
                      </strong>
                      <br />
                      {
                        "3-year transition window — all ISO 14001:2015 certificates must transition to 2026 edition by May 2029"
                      }
                    </div>
                  </div>
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="mb-[15px] pt-[15px] pr-[15px] pb-[15px] pl-[15px] [background:#fff] rounded-[12px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong className="[font-weight:bolder]">
                        {"🌍 Climate"}
                      </strong>
                      <br />
                      {
                        "Climate change, biodiversity, and natural resource use now explicitly required in Clause 4 context analysis"
                      }
                    </div>
                  </div>
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="mb-[15px] pt-[15px] pr-[15px] pb-[15px] pl-[15px] [background:#fff] rounded-[12px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong className="[font-weight:bolder]">
                        {"🔗 Supply chain"}
                      </strong>
                      <br />
                      {
                        "Much greater focus on supply chain lifecycle thinking — upstream and downstream environmental impacts"
                      }
                    </div>
                  </div>
                  <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1rem] [flex:0_0_auto]">
                    <div className="mb-[15px] pt-[15px] pr-[15px] pb-[15px] pl-[15px] [background:#fff] rounded-[12px] [border-left:4px_solid_#C8102E] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                      <strong className="[font-weight:bolder]">
                        {"👔 Leadership"}
                      </strong>
                      <br />
                      {
                        "Top management accountability extended to all relevant roles — not just management roles"
                      }
                    </div>
                  </div>
                </div>
                <div className="mt-[1rem]!">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#0d6efd] hover:text-[#fff] hover:bg-[#0b5ed7] hover:[border-color:#0a58ca] focus-visible:text-[#fff] focus-visible:bg-[#0b5ed7] focus-visible:[border-color:#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] active:text-[#fff] active:bg-[#0a58ca] active:[border-color:#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#C8102E] items-center justify-center gap-[10px] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free EMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] ml-[.5rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)]"
                  >
                    {"2026 transition support"}
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
                    "EDG / MASA grant — up to 50% co-funding for EMS consultation"
                  }
                </h5>
                <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 14001 consultation fees for eligible Singapore SMEs. Enhanced rates applied for sustainability standards. ICFC manages your application before project commencement. Integrated IMS projects (14001 + 50001 + 45001) qualify for EDG co-funding in a single application."
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#198754] hover:text-[#fff] hover:bg-[#157347] hover:[border-color:#146c43] focus-visible:text-[#fff] focus-visible:bg-[#157347] focus-visible:[border-color:#146c43] focus-visible:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] active:text-[#fff] active:bg-[#146c43] active:[border-color:#13653f] active:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] mt-[1rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#3B6D11] items-center justify-center gap-[10px] hover:[background:#2D550D] hover:[transform:translateY(-2px)]"
                >
                  {"Check eligibility →"}
                </SiteLink>
              </div>
              <div className="mt-[20px] mr-[0] mb-[20px] ml-[0] grid [grid-template-columns:repeat(4,_1fr)] max-[768px]:[grid-template-columns:1fr] gap-[20px]">
                <div className="text-center!">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"25+"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Singapore industries"}
                  </p>
                  <small className="text-[.875em]">{"ICFC serves"}</small>
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
                    {"NEA"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"EPMA & CPA aligned"}
                  </p>
                  <small className="text-[.875em]">{"legal register"}</small>
                </div>
                <div className="text-center!">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"Green"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Plan 2030 aligned"}
                  </p>
                  <small className="text-[.875em]">
                    {"objectives framework"}
                  </small>
                </div>
              </div>
              <h3 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "What is ISO 14001:2026 EMS? Singapore's environmental certification standard — why ISO 14001:2026 matters urgently"
                }
              </h3>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO 14001:2026 provides a framework for organisations to manage, improve, and demonstrate their environmental performance. The 2026 edition reinforces what matters most: environmental protection and business outcomes, with significantly stronger alignment with today's environmental priorities — climate change, biodiversity, and resource efficiency. For Singapore organisations, it is the cornerstone of Green Plan 2030 alignment, SGX ESG reporting, and Carbon Pricing Act compliance."
                }
              </p>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO 14001:2026 was published on 15 April 2026. From April 15, 2026, organisations certified to ISO 14001:2015 have three years to transition to the revised standard — all ISO 14001:2015 certificates will expire in May 2029. ICFC recommends starting your transition gap analysis immediately."
                }
              </p>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {
                  "ISO 14001:2026 key changes — what ICFC addresses in every engagement"
                }
              </h3>
              <div className="mt-[30px] mr-[0] mb-[30px] ml-[0] grid [grid-template-columns:repeat(2,_1fr)] max-[768px]:[grid-template-columns:1fr] gap-[20px]">
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"Clause 4 — Context"}
                  </strong>
                  <br />
                  {
                    "Climate, biodiversity & resources now explicit. Climate change, biodiversity loss, and natural resource use must now be explicitly considered in the organisational context analysis."
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"Clause 5 — Leadership"}
                  </strong>
                  <br />
                  {
                    "Leadership accountability extended to all roles. Top management must support all relevant roles across the organisation's hierarchy."
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"Clause 6 — Planning"}
                  </strong>
                  <br />
                  {
                    "New: planning and managing of changes. Organisations must plan and manage changes that affect intended EMS outcomes."
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"Clause 8 — Operation"}
                  </strong>
                  <br />
                  {
                    "Lifecycle and supply chain focus strengthened. Broader scope from operations to full value chain, including sourcing and procurement decisions."
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"Clause 9 — Evaluation"}
                  </strong>
                  <br />
                  {
                    "Explicit EMS effectiveness evaluation required. Internal audits must define objectives — not just scope and criteria."
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[rgba(248,249,250,1)]! rounded-[0.375rem]!">
                  <strong className="[font-weight:bolder]">
                    {"Clause 10 — Improvement"}
                  </strong>
                  <br />
                  {
                    "Structured nonconformity and improvement linkage. Clear linkage between Clause 9 findings and continual improvement tracking."
                  }
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {
                  "Singapore environmental regulatory framework — ISO 14001:2026 alignment"
                }
              </h3>
              <table className="[caption-side:bottom] [border-collapse:collapse] mt-[20px] mr-[0] mb-[20px] ml-[0] w-full text-[14px]">
                <thead className="[border-color:inherit] [border-style:solid] [border-width:0]">
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <th className="text-left [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Regulation / Framework"}
                    </th>
                    <th className="text-left [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Key obligation"}
                    </th>
                    <th className="text-left [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"Sectors"}
                    </th>
                    <th className="text-left [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] [vertical-align:top] [background:#f8f9fa] text-[#C8102E]">
                      {"ISO 14001:2026 alignment"}
                    </th>
                  </tr>
                </thead>
                <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"Carbon Pricing Act (CPA)"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "S$45/tCO₂e carbon tax 2026 — S$50–80/tCO₂e by 2030. Facilities emitting ≥25,000 tCO₂e must report."
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"Manufacturing, energy, chemicals, aviation, maritime"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Clause 4 context + GHG monitoring controls"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"EPMA — Environmental Protection and Management Act"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "Regulates industrial pollution — air, water, land, noise. Licences, permit conditions, scheduled waste management."
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"Manufacturing, construction, chemicals, logistics"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Legal register + operational controls"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"NEA regulations"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "Waste management, scheduled waste, hazardous chemicals, ambient noise, air quality standards."
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"All industries handling waste, chemicals, or emissions"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ Compliance evaluation + aspect assessment"}
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"Singapore Green Plan 2030"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "Net zero by 2050. 30x30 food security. Green economy pillar. Energy Reset pillar."
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"All sectors"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {
                        "✓ Environmental objectives aligned to Green Plan targets"
                      }
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"SGX Sustainability Reporting (ISSB)"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "SGX-listed companies must report Scope 1 & 2 GHG from FY2025. STI constituents: Scope 3 from FY2026."
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"All SGX-listed companies"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {
                        "✓ GHG monitoring data + environmental performance evidence"
                      }
                    </td>
                  </tr>
                  <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"Energy Conservation Act (ECA)"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {
                        "Facilities consuming ≥54 TJ/year must implement mandatory Energy Management System."
                      }
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top]">
                      {"Large manufacturing, data centres"}
                    </td>
                    <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] pr-[12px] pb-[12px] pl-[12px] [border:1px_solid_#e2e8f0] text-left [vertical-align:top] text-[#3B6D11] [font-weight:bold]">
                      {"✓ ISO 50001 integration"}
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
                      {"🔍 EMS Audit Services"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Gap analysis, 2026 transition, Stage 1 & 2, pre-certification, internal audit. EDG eligible."
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
                      {"🌿 EMS Consultation"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Full implementation, 2015→2026 transition, IMS integration, EDG grant managed."
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
                      {"🎓 EMS Training"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Lead Auditor (CQI/IRCA), Internal Auditor, Implementer, 2026 transition course. SkillsFuture eligible."
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
                    '"ICFC\'s integrated ISO 9001 + ISO 14001 + ISO 45001 IMS approach was exactly right for our manufacturing operation. One gap analysis, one internal audit programme, one EDG grant application — and we achieved triple certification simultaneously."'
                  }
                </p>
                <strong className="[font-weight:bolder]">
                  {"— OD, Precision manufacturer, Singapore"}
                </strong>
              </div>
              <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#C8102E]">
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    '"ICFC\'s GHG monitoring procedure implementation within our ISO 14001 EMS was the most practically valuable work we have done this year. Our carbon tax liability was S$850,000 for 2025 — the EMS now gives us the systematic data to identify reductions."'
                  }
                </p>
                <strong className="[font-weight:bolder]">
                  {"— HSE manager, Chemical manufacturer, Jurong Island"}
                </strong>
              </div>
              <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#C8102E]">
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    '"ICFC\'s combined ISO 14001 + ISO 50001 implementation gives us the systematic energy and GHG monitoring framework that satisfies customer requirements, ECA obligations, and the carbon tax simultaneously."'
                  }
                </p>
                <strong className="[font-weight:bolder]">
                  {"— GM, Data centre operator, Singapore"}
                </strong>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {
                  "ICFC's EMS audit process — environmental aspect mapping to certificate"
                }
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
                  {"Env. aspects"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"03"}
                  </div>
                  {"2026 gap analysis"}
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
                  {"Certification → certificate"}
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {
                  "EMS consultation — from environmental aspect mapping to ISO 14001:2026 certificate"
                }
              </h3>
              <div className="mt-[25px] mr-[0] mb-[25px] ml-[0] flex flex-wrap gap-[15px]">
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"01"}
                  </div>
                  {"Free assessment"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"02"}
                  </div>
                  {"Grant application"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"03"}
                  </div>
                  {"Aspect mapping"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"04"}
                  </div>
                  {"Legal register"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"05"}
                  </div>
                  {"EMS build"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"06"}
                  </div>
                  {"Internal audit"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"07"}
                  </div>
                  {"Certification"}
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Related services"}
              </h3>
              <div className="mt-[30px] mr-[0] mb-[30px] ml-[0] flex flex-wrap gap-[20px]">
                <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:#f8f9fa] rounded-[16px] [flex:1] min-w-[200px] text-center">
                  <span className="mb-[12px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] [background:#C8102E] text-[white] text-[12px] rounded-[20px] inline-block">
                    {"⚡ ISO 50001"}
                  </span>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"ECA mandatory EMS + ISO 14001 integration"}
                  </p>
                </div>
                <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:#f8f9fa] rounded-[16px] [flex:1] min-w-[200px] text-center">
                  <span className="mb-[12px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] [background:#C8102E] text-[white] text-[12px] rounded-[20px] inline-block">
                    {"✅ ISO 9001"}
                  </span>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"IMS integration — 20–30% saving combined"}
                  </p>
                </div>
                <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:#f8f9fa] rounded-[16px] [flex:1] min-w-[200px] text-center">
                  <span className="mb-[12px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] [background:#C8102E] text-[white] text-[12px] rounded-[20px] inline-block">
                    {"🦺 ISO 45001"}
                  </span>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Triple IMS: quality, environment, safety"}
                  </p>
                </div>
              </div>
              <div className="mt-[30px] mr-[0] mb-[30px] ml-[0] pt-[30px] pr-[30px] pb-[30px] pl-[30px] [background:#1a1a2e] text-[white] rounded-[20px] text-center">
                <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {
                    "新加坡ISO 14001:2026环境管理体系（EMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ICFC提供新加坡ISO 14001:2026环境管理体系全程认证服务，包括差距分析、2015至2026版过渡支持、环境因素识别、NEA/EPMA法规合规、碳税（CPA）温室气体监测、绿色计划2030目标设定及员工培训，涵盖制造、建筑、物流、数据中心等25大行业。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务。"
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">{"关键词："}</strong>
                  {
                    "ISO 14001新加坡 · 环境管理体系 · EMS认证 · 绿色计划2030 · 碳税合规 · NEA合规 · EDG补助金 · 最佳EMS顾问"
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
                  {"Start your ISO 14001:2026 EMS journey today"}
                </h3>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Free 30-minute environmental management assessment. Honest gap analysis against ISO 14001:2026. 2015-to-2026 transition timeline. NEA and EPMA regulatory alignment review. EDG grant eligibility check. No obligation."
                  }
                </p>
                <div className="justify-center! mt-[1rem]! gap-[1rem]! flex flex-wrap">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#0d6efd] hover:text-[#fff] hover:bg-[#0b5ed7] hover:[border-color:#0a58ca] focus-visible:text-[#fff] focus-visible:bg-[#0b5ed7] focus-visible:[border-color:#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] active:text-[#fff] active:bg-[#0a58ca] active:[border-color:#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#C8102E] items-center justify-center gap-[10px] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free EMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)]"
                  >
                    {"2026 transition support"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)]"
                  >
                    {"Check grant eligibility"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Frequently asked questions — ISO 14001:2026 EMS"}
              </h3>
              <AccordionGroup id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "What are the key differences between ISO 14001:2015 and ISO 14001:2026?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top-left-radius:0.375rem] [border-top-right-radius:0.375rem] mb-[16px] rounded-[12px] overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
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

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] [border-bottom-right-radius:0.375rem] [border-bottom-left-radius:0.375rem] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "Yes — office-based services have waste and energy impacts; data centres have significant energy and cooling impacts. The 2026 edition's supply chain lifecycle thinking also applies to any organisation with procurement activity."
                  }
                </AccordionItem>
              </AccordionGroup>
              <div className="text-[.875em] text-[rgba(33,_37,_41,_0.75)]! mt-[40px]">
                <strong className="[font-weight:bolder]">
                  {"Page optimised for:"}
                </strong>
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
                    "ISO 14001:2026 EMS certification — NEA aligned, Green Plan 2030 ready. "
                  }
                  <SiteLink
                    href="/contact-us"
                    className="text-[inherit] [text-decoration:underline] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] inline-block"
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
