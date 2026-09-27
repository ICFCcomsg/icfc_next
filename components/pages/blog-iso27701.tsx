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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[66.66666666666666%] lg:w-[58.333333333333336%]">
            <div>
              <div>
                <ul className="flex gap-[20px] items-center max-[1600px]:flex-wrap">
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <span>
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                          className="max-w-full h-auto w-[40px] h-[40px] rounded-full"
                        />
                      </span>
                      <span>
                        {"By "}
                        <SiteLink
                          href="/contact-us.html"
                          className="transition-colors hover:text-[#AB052D]"
                        >
                          {"ICFC Pte Ltd"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <svg width="14" height="16" className="w-[15px] h-[15px]">
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
                      <svg width="12" height="12" className="w-[15px] h-[15px]">
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
                <p className="leading-relaxed mb-4">
                  <strong>{"Published by ICFC Pte Ltd"}</strong>
                  {" | April 2026 | 12 min read"}
                  <br />
                  <strong>{"Categories:"}</strong>
                  {
                    " ISO 14001 · Green Plan 2030 · Manufacturing · Sustainability · Carbon tax · Singapore compliance"
                  }
                </p>
                <hr />
                <p className="leading-relaxed mb-4">
                  {
                    "Singapore's manufacturers are operating in a fundamentally changed regulatory environment. What was voluntary two years ago is now either mandatory or on a firm legislative path to becoming so. Carbon taxes are rising sharply. SGX climate disclosure requirements are expanding. Supply chains are under sustained pressure from multinational buyers demanding Scope 3 emissions data. And the Singapore Green Plan 2030 — five years into its ten-year arc — is accelerating, not slowing."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "For manufacturers in Singapore, the question is no longer whether to take environmental management seriously. It is whether the system you currently have in place is structured, measurable, and defensible — to your regulators, your customers, and your investors."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "ISO 14001 is the international framework that makes environmental management systematic. This article explains exactly what Singapore manufacturers need to understand about the regulatory landscape, what ISO 14001 requires, where the two frameworks converge, and — most importantly — what you need to do now."
                  }
                </p>
                <div className="[background:#f0f9f4] [border-left:4px_solid_#2e7d32] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong>{"📌 Carbon tax alert (2026):"}</strong>
                  {
                    " S$45 per tonne of CO₂e from 1 Jan 2026 (up from S$25). Facilities emitting ≥25,000 tCO₂e are directly liable. Impact cascades through supply chains. ISO 14001 provides the systematic framework to measure, manage and reduce emissions.\n                                "
                  }
                </div>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "The regulatory landscape: what has changed and what is coming"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>{"Singapore Green Plan 2030"}</strong>
                  {
                    " – launched in February 2021, targeting net-zero by 2050. For manufacturers, the Green Economy and Energy Reset pillars are key: reduce energy intensity, resource efficiency, cut waste to Semakau Landfill by 30% by 2030."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Carbon tax: S$45 per tonne from 1 January 2026"}
                  </strong>
                  {
                    " – up 80% from 2024's S$25, moving to S$50–80 by 2030. Creates direct liability for high emitters and cascading cost pressure on all manufacturers via energy prices and supply chain qualification."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"SGX mandatory climate disclosure in force"}</strong>
                  {
                    " – Listed companies report Scope 1 & 2 from FY2025, STI constituents Scope 3 from FY2026. Non-listed large companies will follow from 2030. Manufacturers in supply chains of listed firms are already asked for emissions data."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Energy Conservation Act (ECA)"}</strong>
                  {
                    " – Facilities consuming ≥54 TJ/year (≈15,000 MWh) must implement structured Energy Management System aligning with ISO 50001."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Waste reduction obligations"}</strong>
                  {
                    " – target 30% reduction to Semakau Landfill by 2030, with packaging/resource efficiency regulations tightening."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "What is ISO 14001, and why does it matter for Singapore manufacturers?"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "ISO 14001:2015 is the international standard for Environmental Management Systems (EMS). It provides a risk-based Plan-Do-Check-Act framework to identify significant environmental aspects, set objectives, implement controls, and drive continual improvement. Certification is independent and audited – a credible signal to customers, regulators and partners."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Who needs ISO 14001 in Singapore manufacturing?"}
                </h4>
                <ul className="mb-[1.2rem] pl-[1.5rem]">
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
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"How ISO 14001 maps to Singapore's Green Plan obligations"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Clause 6.1 – Environmental aspects → carbon tax & emissions:"
                    }
                  </strong>
                  {
                    " ISO 14001 requires identification of significant aspects (GHG emissions, energy, waste). This creates baseline data for Carbon Pricing Act reports and SGX disclosures."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Clause 6.2 – Environmental objectives → decarbonisation plans:"
                    }
                  </strong>
                  {
                    " Set measurable targets aligned with Green Plan, forming auditable evidence of climate governance."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Annex A controls – waste, chemicals, NEA compliance:"}
                  </strong>
                  {
                    " Documented procedures for waste segregation, scheduled waste consignment, spill response – directly mapping to EPMA regulations."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {
                      "Clause 9 – Performance evaluation → SGX sustainability data:"
                    }
                  </strong>
                  {
                    " Monitoring and internal audit infrastructure provides reliable Scope 1 & 2 data for disclosure and customer reporting."
                  }
                </p>
                <div className="[background:#f0f9f4] [border-left:4px_solid_#2e7d32] p-[1.5rem_1.8rem] m-[1.8rem_0] rounded-[0_16px_16px_0]">
                  <strong>
                    {"⚠️ Where ISO 14001 alone is not sufficient:"}
                  </strong>
                  {
                    " Carbon Pricing Act requires NEA-specific measurement methodology; ECA demands formal energy efficiency opportunity assessments; NEA scheduled waste documentation (consignment notes) must be embedded; Scope 3 supply chain data requires separate methodology. ICFC bridges these gaps.\n                                "
                  }
                </div>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Three scenarios: why act now"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>{"1. Directly liable for carbon tax"}</strong>
                  {
                    " – Paying S$45/tCO₂e (rising further). ISO 14001 gives systematic framework to identify emission reductions, set targets, and track progress; aligns with ICC usage up to 5% offset."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"2. Supplier to SGX-listed or multinational brands"}
                  </strong>
                  {
                    " – ISO 14001 demonstrates audited environmental management, provides reliable Scope 1 & 2 data for customers' Scope 3, and is becoming baseline expectation for procurement panels."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"3. Bidding for government contracts"}</strong>
                  {
                    " – GreenGov.SG embeds sustainability criteria. ISO 14001 certification is increasingly weighted or mandatory."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {
                    "ISO 14001 + ISO 50001: the efficient combination for manufacturers"
                  }
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "For ECA-liable manufacturers, integrated ISO 14001 & ISO 50001 implementation reduces duplication by ~30-40%: shared High Level Structure, single internal audit and management review. ISO 50001 directly addresses energy performance improvement to cut carbon tax exposure."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"ISO 14001 implementation roadmap (typical 4–6 months)"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>{"Phase 1:"}</strong>
                  {" Environmental review & gap analysis (weeks 1-3)"}
                  <br />
                  <strong>{"Phase 2:"}</strong>
                  {" Legal register & compliance baseline (weeks 2-5)"}
                  <br />
                  <strong>{"Phase 3:"}</strong>
                  {" Environmental objectives & targets (weeks 3-7)"}
                  <br />
                  <strong>{"Phase 4:"}</strong>
                  {" Documentation & operational controls (weeks 5-12)"}
                  <br />
                  <strong>{"Phase 5:"}</strong>
                  {" Monitoring programme (weeks 8-14)"}
                  <br />
                  <strong>{"Phase 6:"}</strong>
                  {" Internal audit & management review (weeks 12-17)"}
                  <br />
                  <strong>{"Phase 7:"}</strong>
                  {" Certification audit (Stage 1 & 2)"}
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Funding your ISO 14001 implementation"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Enterprise Singapore EDG (Standards Adoption) covers up to 50% qualifying costs for SMEs, with enhanced 70% for sustainability standards until 31 March 2026 (ISO 14001, ISO 50001). Qualifying costs include consultant fees (TR43/SS680 certified), internal manpower, and relevant software. "
                  }
                  <strong>{"Critical:"}</strong>
                  {
                    " apply before any project work commences. Enterprise Sustainability Programme (ESP) also links to bank ESG programmes (DBS, UOB, OCBC) providing financing benefits alongside certification."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"Frequently asked questions"}
                </h4>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Does ISO 14001 satisfy Carbon Pricing Act reporting?"}
                  </strong>
                  {
                    " Not directly – CPA requires NEA's methodology. But ISO 14001 provides the monitoring and data collection infrastructure. ICFC implements CPA-aligned procedures within EMS."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"Is ISO 14001 mandatory for manufacturers?"}</strong>
                  {
                    " Not by law for most, but ECA mandates EMS for large energy users, government procurement increasingly requires it, and supply chain pressure makes it commercial necessity."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>
                    {"Can a small manufacturer implement ISO 14001?"}
                  </strong>
                  {
                    " Yes – scalable. ICFC has implemented for 10-person workshops to multinational chemical plants."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"ISO 14001 + ISO 50001 together?"}</strong>
                  {
                    " Highly recommended for ECA-liable manufacturers. Integrated system reduces total effort by ~30–40%."
                  }
                </p>
                <h4 className="font-bold leading-tight text-[#2B3944] text-2xl mt-[1.8rem] mb-[0.8rem] font-bold">
                  {"The bottom line"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Singapore Green Plan 2030 is reshaping manufacturing through carbon tax escalation, mandatory reporting, waste reduction, and procurement requirements. ISO 14001 gives manufacturers the management system to respond systematically – identify risks, set credible targets, implement controls, monitor performance and demonstrate accountability. Carbon tax at S$45/t is already here. Act proactively."
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  {
                    "ICFC offers a complimentary gap assessment for manufacturers to map current practices against ISO 14001 and Green Plan obligations."
                  }
                </p>
                <hr />
                <p className="leading-relaxed mb-4">
                  <strong>{"About ICFC Pte Ltd"}</strong>
                  <br />
                  {
                    "Since 2014, Singapore's ISO certification partner. We provide ISO consultation, third-party audit, and training across 25 industries. Environmental & sustainability practice: ISO 14001, ISO 50001, ISO 14064, integrated management systems. Contact: "
                  }
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="transition-colors hover:text-[#AB052D]"
                  >
                    {"admin@icfc.com.sg"}
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p className="leading-relaxed mb-4">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only. Regulatory requirements, carbon tax rates, and grant terms subject to change. Refer to NEA, MSE, Enterprise Singapore official sources."
                    }
                  </em>
                </p>
              </div>
              <div className="items-center justify-between flex gap-[30px] flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1] pt-[20px] pb-[20px] mt-[40px]">
                <div className="items-center flex flex-wrap gap-[12px]">
                  <span className="font-semibold [padding-inline-end:10px] text-[#2B3944]">
                    {"Tags:"}
                  </span>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[13px] relative font-medium [background:#eef2f6] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] hover:[background:#AB052D]"
                  >
                    {"Green Plan 2030"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[13px] relative font-medium [background:#eef2f6] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] hover:[background:#AB052D]"
                  >
                    {"ISO 14001"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[13px] relative font-medium [background:#eef2f6] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] hover:[background:#AB052D]"
                  >
                    {"Carbon Tax"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] p-[6px_15px] mb-[0px] [margin-inline-end:0px] [border:1px_solid_#DBDEE1] rounded-[6px] text-[13px] relative font-medium [background:#eef2f6] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] hover:[background:#AB052D]"
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
                      className="transition-colors hover:text-[#AB052D] text-[#616C74] text-[16px]"
                    >
                      <Icon name="facebook" />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#616C74] text-[16px]"
                    >
                      <Icon name="x" />
                    </SiteLink>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#616C74] text-[16px]"
                    >
                      <Icon name="linkedin" />
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {"Leave a Comment"}
                </h3>
                <EmailForm>
                  <div className="-mx-3 flex flex-wrap gap-y-6">
                    <div className="w-full shrink-0 px-3 xl:w-[50%]">
                      <input
                        type="text"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D]"
                      />
                    </div>
                    <div className="w-full shrink-0 px-3 xl:w-[50%]">
                      <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D]"
                      />
                    </div>
                    <div className="w-full shrink-0 px-3 xl:w-[100%]">
                      <textarea
                        placeholder="Write Message"
                        defaultValue=""
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D]"
                      />
                    </div>
                    <div className="w-full shrink-0 px-3 xl:w-[100%]">
                      <button
                        type="submit"
                        className="text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#AB052D] hover:[background:#2B3944] hover:text-[#FFFFFF]"
                      >
                        {"Post Comment"}
                      </button>
                    </div>
                  </div>
                </EmailForm>
              </div>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[41.66666666666667%]">
            <div className="sticky top-[110px] max-[991px]:relative max-[991px]:top-[unset]">
              <div className="relative [background:#f8f9fa] [border:1px_solid_#DBDEE1] p-[25px] rounded-[12px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px] mb-[30px]">
                <h5 className="text-[1.25rem] font-bold mb-[20px] [border-left:3px_solid_#AB052D] pl-[12px]">
                  {"Search"}
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search..."
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D] [padding-inline-end:50px] [background:#FFFFFF] [border:1px_solid_#e0e0e0] h-[60px] w-full p-[12px_45px_12px_15px] rounded-[8px]"
                      />
                      <button className="absolute top-[50%] [inset-inline-end:25px] text-[#000] text-[16px] [transform:translateY(-50%)] hover:text-[#AB052D] right-[10px] [background:none] [border:none]">
                        <svg width="18" height="18" viewBox="0 0 18 18">
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
              <div className="relative [background:#f8f9fa] [border:1px_solid_#DBDEE1] p-[25px] rounded-[12px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px] mb-[30px]">
                <h5 className="text-[1.25rem] font-bold mb-[20px] [border-left:3px_solid_#AB052D] pl-[12px]">
                  {"Categories"}
                </h5>
                <ul className="list-none pl-[0]">
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"Sustainability "}
                      <span className="[float:right]">{"(8)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"ISO 14001 "}
                      <span className="[float:right]">{"(6)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"Manufacturing "}
                      <span className="[float:right]">{"(5)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"Carbon Tax "}
                      <span className="[float:right]">{"(4)"}</span>
                    </SiteLink>
                  </li>
                  <li className="mb-[10px]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D] text-[#333]"
                    >
                      {"Green Plan 2030 "}
                      <span className="[float:right]">{"(7)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="relative [background:#f8f9fa] [border:1px_solid_#DBDEE1] p-[25px] rounded-[12px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px] mb-[30px]">
                <h5 className="text-[1.25rem] font-bold mb-[20px] [border-left:3px_solid_#AB052D] pl-[12px]">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-[12px]">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[13px] [border:1px_solid_#DBDEE1] p-[6px_15px] relative font-medium [background:#eef2f6] rounded-[30px] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] mb-[10px] hover:[background:#AB052D]"
                  >
                    {"Green Plan"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[13px] [border:1px_solid_#DBDEE1] p-[6px_15px] relative font-medium [background:#eef2f6] rounded-[30px] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] mb-[10px] hover:[background:#AB052D]"
                  >
                    {"ISO 14001:2015"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[13px] [border:1px_solid_#DBDEE1] p-[6px_15px] relative font-medium [background:#eef2f6] rounded-[30px] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] mb-[10px] hover:[background:#AB052D]"
                  >
                    {"EMS"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[13px] [border:1px_solid_#DBDEE1] p-[6px_15px] relative font-medium [background:#eef2f6] rounded-[30px] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] mb-[10px] hover:[background:#AB052D]"
                  >
                    {"EDG Grant"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[13px] [border:1px_solid_#DBDEE1] p-[6px_15px] relative font-medium [background:#eef2f6] rounded-[30px] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] mb-[10px] hover:[background:#AB052D]"
                  >
                    {"Energy Efficiency"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[13px] [border:1px_solid_#DBDEE1] p-[6px_15px] relative font-medium [background:#eef2f6] rounded-[30px] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] mb-[10px] hover:[background:#AB052D]"
                  >
                    {"Carbon Tax"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[13px] [border:1px_solid_#DBDEE1] p-[6px_15px] relative font-medium [background:#eef2f6] rounded-[30px] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] mb-[10px] hover:[background:#AB052D]"
                  >
                    {"Sustainability"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] text-[13px] [border:1px_solid_#DBDEE1] p-[6px_15px] relative font-medium [background:#eef2f6] rounded-[30px] text-[#333] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#fff] hover:bg-[#AB052D] hover:[border-color:#AB052D] inline-block mr-[8px] mb-[10px] hover:[background:#AB052D]"
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
