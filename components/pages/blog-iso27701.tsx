import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogIso27701PageContent() {
  return (
    <SitePageTemplate route="blog_ISO27701.html">
      <main>
        <BreadcrumbAreaSection />
        <PostboxAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="Singapore Green Plan 2030 and ISO 14001: what manufacturers need to do now"
      description="Carbon tax S$45/t, mandatory energy management, waste reduction targets – the ISO 14001 roadmap for manufacturers"
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_3rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[58.33333333%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
            <div>
              <div>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] flex gap-[20px] items-center max-[1600px]:flex-wrap">
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <span>
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                          className="[vertical-align:middle] max-w-full w-[40px] h-[40px] rounded-full"
                        />
                      </span>
                      <span>
                        {"By "}
                        <SiteLink
                          href="/contact-us.html"
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                        >
                          {"ICFC Pte Ltd"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <svg
                        width="14"
                        height="16"
                        className="[vertical-align:middle] w-[15px] h-[15px]"
                      >
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335Z"
                          fill="white"
                          className="[fill:#AB052D]"
                        ></path>
                      </svg>
                      <span>{"April 2026"}</span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <svg
                        width="12"
                        height="12"
                        className="[vertical-align:middle] w-[15px] h-[15px]"
                      >
                        <path
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12Z"
                          fill="#616C74"
                          className="[fill:#AB052D]"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                          className="[fill:#AB052D]"
                        ></path>
                      </svg>
                      <span>{"12 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Published by ICFC Pte Ltd"}
                  </strong>
                  {" | April 2026 | 12 min read"}
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Categories:"}
                  </strong>
                  {
                    " ISO 14001 · Green Plan 2030 · Manufacturing · Sustainability · Carbon tax · Singapore compliance"
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Singapore's manufacturers are operating in a fundamentally changed regulatory environment. What was voluntary two years ago is now either mandatory or on a firm legislative path to becoming so. Carbon taxes are rising sharply. SGX climate disclosure requirements are expanding. Supply chains are under sustained pressure from multinational buyers demanding Scope 3 emissions data. And the Singapore Green Plan 2030 — five years into its ten-year arc — is accelerating, not slowing."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "For manufacturers in Singapore, the question is no longer whether to take environmental management seriously. It is whether the system you currently have in place is structured, measurable, and defensible — to your regulators, your customers, and your investors."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO 14001 is the international framework that makes environmental management systematic. This article explains exactly what Singapore manufacturers need to understand about the regulatory landscape, what ISO 14001 requires, where the two frameworks converge, and — most importantly — what you need to do now."
                  }
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#f0f9f4] [border-left:4px_solid_#2e7d32] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"📌 Carbon tax alert (2026):"}
                  </strong>
                  {
                    " S$45 per tonne of CO₂e from 1 Jan 2026 (up from S$25). Facilities emitting ≥25,000 tCO₂e are directly liable. Impact cascades through supply chains. ISO 14001 provides the systematic framework to measure, manage and reduce emissions.\n                                "
                  }
                </div>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "The regulatory landscape: what has changed and what is coming"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Singapore Green Plan 2030"}
                  </strong>
                  {
                    " – launched in February 2021, targeting net-zero by 2050. For manufacturers, the Green Economy and Energy Reset pillars are key: reduce energy intensity, resource efficiency, cut waste to Semakau Landfill by 30% by 2030."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Carbon tax: S$45 per tonne from 1 January 2026"}
                  </strong>
                  {
                    " – up 80% from 2024's S$25, moving to S$50–80 by 2030. Creates direct liability for high emitters and cascading cost pressure on all manufacturers via energy prices and supply chain qualification."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"SGX mandatory climate disclosure in force"}
                  </strong>
                  {
                    " – Listed companies report Scope 1 & 2 from FY2025, STI constituents Scope 3 from FY2026. Non-listed large companies will follow from 2030. Manufacturers in supply chains of listed firms are already asked for emissions data."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Energy Conservation Act (ECA)"}
                  </strong>
                  {
                    " – Facilities consuming ≥54 TJ/year (≈15,000 MWh) must implement structured Energy Management System aligning with ISO 50001."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Waste reduction obligations"}
                  </strong>
                  {
                    " – target 30% reduction to Semakau Landfill by 2030, with packaging/resource efficiency regulations tightening."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "What is ISO 14001, and why does it matter for Singapore manufacturers?"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO 14001:2015 is the international standard for Environmental Management Systems (EMS). It provides a risk-based Plan-Do-Check-Act framework to identify significant environmental aspects, set objectives, implement controls, and drive continual improvement. Certification is independent and audited – a credible signal to customers, regulators and partners."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Who needs ISO 14001 in Singapore manufacturing?"}
                </h4>
                <ul className="pl-[1.5rem] mt-[0px] mb-[1.2rem] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li>
                    {
                      "Manufacturers with direct regulatory obligations under Carbon Pricing Act, ECA or NEA waste rules needing structured compliance management."
                    }
                  </li>
                  <li>
                    {
                      "Suppliers to SGX-listed or multinational firms facing Scope 3 data requests."
                    }
                  </li>
                  <li>
                    {
                      "Bidders for government contracts where green credentials and certified EMS are weighted."
                    }
                  </li>
                </ul>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"How ISO 14001 maps to Singapore's Green Plan obligations"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Clause 6.1 – Environmental aspects → carbon tax & emissions:"
                    }
                  </strong>
                  {
                    " ISO 14001 requires identification of significant aspects (GHG emissions, energy, waste). This creates baseline data for Carbon Pricing Act reports and SGX disclosures."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Clause 6.2 – Environmental objectives → decarbonisation plans:"
                    }
                  </strong>
                  {
                    " Set measurable targets aligned with Green Plan, forming auditable evidence of climate governance."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Annex A controls – waste, chemicals, NEA compliance:"}
                  </strong>
                  {
                    " Documented procedures for waste segregation, scheduled waste consignment, spill response – directly mapping to EPMA regulations."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "Clause 9 – Performance evaluation → SGX sustainability data:"
                    }
                  </strong>
                  {
                    " Monitoring and internal audit infrastructure provides reliable Scope 1 & 2 data for disclosure and customer reporting."
                  }
                </p>
                <div className="mt-[1.8rem] mr-[0] mb-[1.8rem] ml-[0] pt-[1.5rem] pr-[1.8rem] pb-[1.5rem] pl-[1.8rem] [background:#f0f9f4] [border-left:4px_solid_#2e7d32] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    {"⚠️ Where ISO 14001 alone is not sufficient:"}
                  </strong>
                  {
                    " Carbon Pricing Act requires NEA-specific measurement methodology; ECA demands formal energy efficiency opportunity assessments; NEA scheduled waste documentation (consignment notes) must be embedded; Scope 3 supply chain data requires separate methodology. ICFC bridges these gaps.\n                                "
                  }
                </div>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Three scenarios: why act now"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"1. Directly liable for carbon tax"}
                  </strong>
                  {
                    " – Paying S$45/tCO₂e (rising further). ISO 14001 gives systematic framework to identify emission reductions, set targets, and track progress; aligns with ICC usage up to 5% offset."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"2. Supplier to SGX-listed or multinational brands"}
                  </strong>
                  {
                    " – ISO 14001 demonstrates audited environmental management, provides reliable Scope 1 & 2 data for customers' Scope 3, and is becoming baseline expectation for procurement panels."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"3. Bidding for government contracts"}
                  </strong>
                  {
                    " – GreenGov.SG embeds sustainability criteria. ISO 14001 certification is increasingly weighted or mandatory."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {
                    "ISO 14001 + ISO 50001: the efficient combination for manufacturers"
                  }
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "For ECA-liable manufacturers, integrated ISO 14001 & ISO 50001 implementation reduces duplication by ~30-40%: shared High Level Structure, single internal audit and management review. ISO 50001 directly addresses energy performance improvement to cut carbon tax exposure."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"ISO 14001 implementation roadmap (typical 4–6 months)"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">{"Phase 1:"}</strong>
                  {" Environmental review & gap analysis (weeks 1-3)"}
                  <br />
                  <strong className="[font-weight:bolder]">{"Phase 2:"}</strong>
                  {" Legal register & compliance baseline (weeks 2-5)"}
                  <br />
                  <strong className="[font-weight:bolder]">{"Phase 3:"}</strong>
                  {" Environmental objectives & targets (weeks 3-7)"}
                  <br />
                  <strong className="[font-weight:bolder]">{"Phase 4:"}</strong>
                  {" Documentation & operational controls (weeks 5-12)"}
                  <br />
                  <strong className="[font-weight:bolder]">{"Phase 5:"}</strong>
                  {" Monitoring programme (weeks 8-14)"}
                  <br />
                  <strong className="[font-weight:bolder]">{"Phase 6:"}</strong>
                  {" Internal audit & management review (weeks 12-17)"}
                  <br />
                  <strong className="[font-weight:bolder]">{"Phase 7:"}</strong>
                  {" Certification audit (Stage 1 & 2)"}
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Funding your ISO 14001 implementation"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Enterprise Singapore EDG (Standards Adoption) covers up to 50% qualifying costs for SMEs, with enhanced 70% for sustainability standards until 31 March 2026 (ISO 14001, ISO 50001). Qualifying costs include consultant fees (TR43/SS680 certified), internal manpower, and relevant software. "
                  }
                  <strong className="[font-weight:bolder]">
                    {"Critical:"}
                  </strong>
                  {
                    " apply before any project work commences. Enterprise Sustainability Programme (ESP) also links to bank ESG programmes (DBS, UOB, OCBC) providing financing benefits alongside certification."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Frequently asked questions"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Does ISO 14001 satisfy Carbon Pricing Act reporting?"}
                  </strong>
                  {
                    " Not directly – CPA requires NEA's methodology. But ISO 14001 provides the monitoring and data collection infrastructure. ICFC implements CPA-aligned procedures within EMS."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Is ISO 14001 mandatory for manufacturers?"}
                  </strong>
                  {
                    " Not by law for most, but ECA mandates EMS for large energy users, government procurement increasingly requires it, and supply chain pressure makes it commercial necessity."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Can a small manufacturer implement ISO 14001?"}
                  </strong>
                  {
                    " Yes – scalable. ICFC has implemented for 10-person workshops to multinational chemical plants."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"ISO 14001 + ISO 50001 together?"}
                  </strong>
                  {
                    " Highly recommended for ECA-liable manufacturers. Integrated system reduces total effort by ~30–40%."
                  }
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"The bottom line"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Singapore Green Plan 2030 is reshaping manufacturing through carbon tax escalation, mandatory reporting, waste reduction, and procurement requirements. ISO 14001 gives manufacturers the management system to respond systematically – identify risks, set credible targets, implement controls, monitor performance and demonstrate accountability. Carbon tax at S$45/t is already here. Act proactively."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ICFC offers a complimentary gap assessment for manufacturers to map current practices against ISO 14001 and Green Plan obligations."
                  }
                </p>
                <hr className="mt-[0] mr-[0] mb-[0] ml-[0] text-[inherit] [border:none] [border-top:1px_solid] opacity-[1] h-[1px] bg-[#ececec]" />
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"About ICFC Pte Ltd"}
                  </strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. We provide ISO consultation, third-party audit, and training across 25 industries. Environmental & sustainability practice: ISO 14001, ISO 50001, ISO 14064, integrated management systems. Contact: "
                  }
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                  >
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. Regulatory requirements, carbon tax rates, and grant terms subject to change. Refer to NEA, MSE, Enterprise Singapore official sources."
                    }
                  </em>
                </p>
              </div>
              <div className="mt-[40px] pt-[20px] pb-[20px] items-center justify-between flex gap-[30px] flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                <div className="items-center flex flex-wrap gap-[12px]">
                  <span className="font-semibold [padding-inline-end:10px] text-[#2B3944]">
                    {"Tags:"}
                  </span>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] [margin-inline-end:0px] rounded-[6px] text-[13px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"Green Plan 2030"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] [margin-inline-end:0px] rounded-[6px] text-[13px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"ISO 14001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] [margin-inline-end:0px] rounded-[6px] text-[13px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"Carbon Tax"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] [margin-inline-end:0px] rounded-[6px] text-[13px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"Manufacturing"}
                  </SiteLink>
                </div>
                <div>
                  <span className="font-semibold [padding-inline-end:10px] text-[#2B3944]">
                    {"Share:"}
                  </span>
                  <div className="gap-[15px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px]"
                    >
                      <Icon
                        name="facebook"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px]"
                    >
                      <Icon
                        name="x"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px]"
                    >
                      <Icon
                        name="linkedin"
                        className="inline-block [font-style:normal]"
                      />
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {"Leave a Comment"}
                </h3>
                <EmailForm>
                  <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
                    <div className="[flex-shrink:0] w-[50%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <input
                        type="text"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)]"
                      />
                    </div>
                    <div className="[flex-shrink:0] w-[50%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)]"
                      />
                    </div>
                    <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <textarea
                        placeholder="Write Message"
                        defaultValue=""
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [resize:vertical] pt-[14px] pr-[24px] pb-[14px] pl-[24px] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)]"
                      />
                    </div>
                    <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                      <button
                        type="submit"
                        className="rounded-[50px] mt-[0] mr-[0] mb-[0] ml-[0] text-[17px] leading-[inherit] [text-transform:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] text-[#FFFFFF] [border:none] [background:#AB052D] inline-flex items-center justify-center font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] hover:text-[#FFFFFF]"
                      >
                        {"Post Comment"}
                      </button>
                    </div>
                  </div>
                </EmailForm>
              </div>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[41.66666667%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
            <div className="sticky max-[991px]:relative top-[110px] max-[991px]:top-[unset]">
              <div className="mb-[30px] pt-[25px] pr-[25px] pb-[25px] pl-[25px] relative [background:#f8f9fa] [border:1px_solid_#DBDEE1] rounded-[12px]">
                <h5 className="mt-[0px] mb-[20px] font-bold leading-[1.4] text-[#2B3944] text-[1.25rem] pl-[12px] [word-break:break-word] [border-left:3px_solid_#AB052D]">
                  {"Search"}
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search..."
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] pt-[12px] pr-[45px] pb-[12px] pl-[15px] bg-[transparent] h-[60px] w-full [border:1px_solid_#e0e0e0] rounded-[8px] text-[#000] [padding-inline-start:25px] [padding-inline-end:50px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [background:#FFFFFF]"
                      />
                      <button className="rounded-[0] mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [text-transform:none] text-[#000] [border:none] [background:none] absolute top-[50%] [inset-inline-end:25px] [transform:translateY(-50%)] hover:text-[#AB052D] right-[10px]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          className="[vertical-align:middle]"
                        >
                          <path
                            d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M16.9995 17L13.1328 13.1333"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </EmailForm>
                </div>
              </div>
              <div className="mb-[30px] pt-[25px] pr-[25px] pb-[25px] pl-[25px] relative [background:#f8f9fa] [border:1px_solid_#DBDEE1] rounded-[12px]">
                <h5 className="mt-[0px] mb-[20px] font-bold leading-[1.4] text-[#2B3944] text-[1.25rem] pl-[12px] [word-break:break-word] [border-left:3px_solid_#AB052D]">
                  {"Categories"}
                </h5>
                <ul className="pl-[0]! mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] list-none!">
                  <li className="mb-[10px]!">
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Sustainability "}
                      <span className="[float:right]!">{"(8)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]!">
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ISO 14001 "}
                      <span className="[float:right]!">{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]!">
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Manufacturing "}
                      <span className="[float:right]!">{"(5)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]!">
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Carbon Tax "}
                      <span className="[float:right]!">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]!">
                    <SiteLink
                      href="/contact-us.html"
                      className="text-[#333]! [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Green Plan 2030 "}
                      <span className="[float:right]!">{"(7)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="mb-[30px] pt-[25px] pr-[25px] pb-[25px] pl-[25px] relative [background:#f8f9fa] [border:1px_solid_#DBDEE1] rounded-[12px]">
                <h5 className="mt-[0px] mb-[20px] font-bold leading-[1.4] text-[#2B3944] text-[1.25rem] pl-[12px] [word-break:break-word] [border-left:3px_solid_#AB052D]">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-[12px]">
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[10px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] text-[13px] relative font-medium rounded-[30px] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"Green Plan"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[10px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] text-[13px] relative font-medium rounded-[30px] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"ISO 14001:2015"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[10px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] text-[13px] relative font-medium rounded-[30px] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"EMS"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[10px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] text-[13px] relative font-medium rounded-[30px] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"EDG Grant"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[10px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] text-[13px] relative font-medium rounded-[30px] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"Energy Efficiency"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[10px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] text-[13px] relative font-medium rounded-[30px] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"Carbon Tax"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[10px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] text-[13px] relative font-medium rounded-[30px] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"Sustainability"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="text-[#333] [text-decoration:none] mr-[8px] mb-[10px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:1px_solid_#DBDEE1] [background:#eef2f6] text-[13px] relative font-medium rounded-[30px] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block hover:[background:#AB052D]"
                  >
                    {"NEA Compliance"}
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
