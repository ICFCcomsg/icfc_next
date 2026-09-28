import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsfivePageContent() {
  return (
    <SitePageTemplate route="services-detailsfive">
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
      title="ISO 9001 QMS"
      description="Quality Management System (QMS) Certification – Audit, Consulting & Training | GeBIZ Tender Ready, ISO 9001:2026 Transition Prepared"
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
                  alt="ISO 9001 Quality Management System"
                  className="[vertical-align:middle] max-w-full w-full rounded-[6px]"
                />
              </div>
              <p className="mt-[30px] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO 9001 is the world's most widely adopted management system standard — with over one million certificates issued in 190 countries. In Singapore, it is the foundational quality credential that unlocks government tenders, enterprise supply chains, and international contracts. ISO 9001:2026 is expected by September 2026 — ICFC certifies organisations under ISO 9001:2015 today with a seamless upgrade path to the 2026 edition. Every engagement includes EDG grant management at no extra charge."
                }
              </p>
              <div className="mt-[20px] mr-[0] mb-[20px] ml-[0] grid [grid-template-columns:repeat(4,_1fr)] max-[768px]:[grid-template-columns:1fr] gap-[20px]">
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"1M+"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Certificates issued"}
                  </p>
                  <small className="text-[.875em]">
                    {"world's most adopted standard"}
                  </small>
                </div>
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"3–6 mo"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Typical QMS timeline"}
                  </p>
                  <small className="text-[.875em]">{"certification"}</small>
                </div>
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
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
                <div className="pt-[1.5rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] [background:#f8f9fa] rounded-[16px] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff] [transition:all_0.3s] motion-reduce:transition-none">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"25+"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Singapore industries"}
                  </p>
                  <small className="text-[.875em]">{"served by ICFC"}</small>
                </div>
              </div>
              <div className="relative pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! mb-[1.5rem]! text-[#0a3622] bg-[#d1e7dd] [border:0]! rounded-[0.5rem]! [background:linear-gradient(135deg,_#EAF3DE,_#d4edbd)] [border-left:5px_solid_#3B6D11]">
                <Icon
                  name="star"
                  className="[float:left]! mr-[1rem]! text-[1.75rem]! max-[1200px]:text-[calc(1.3rem_+_.6vw)]! inline-block [font-style:normal] text-[#3B6D11]!"
                />
                <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[rgba(33,37,41,1)]! text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {
                    "📋 ISO 9001:2026 — expected September 2026. Start ISO 9001:2015 now — no benefit to waiting"
                  }
                </h5>
                <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">{"Status:"}</strong>
                  {
                    " 97% approval at DIS ballot (December 2025). FDIS phase underway. Publication targeted September 2026."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">{"Changes:"}</strong>
                  {
                    " Evolution, not rewrite — Annex SL structure maintained. New focus on quality culture, digitalisation, ethics, and ESG alignment."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Transition:"}
                  </strong>
                  {
                    " 3-year transition window from publication — ISO 9001:2015 certificates valid until ~September 2029."
                  }
                  <br />
                  <strong className="[font-weight:bolder]">
                    {"Strategy:"}
                  </strong>
                  {
                    " Build ISO 9001:2015 now — your investment is future-proof. ICFC includes 2026 upgrade support."
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-[#fff] [text-decoration:none] inline-flex pt-[10px]! pr-[24px]! pb-[10px]! pl-[24px]! text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#198754] hover:text-[#fff] hover:bg-[#157347] hover:[border-color:#146c43] focus-visible:text-[#fff] focus-visible:bg-[#157347] focus-visible:[border-color:#146c43] focus-visible:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] active:text-[#fff] active:bg-[#146c43] active:[border-color:#13653f] active:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] mt-[1rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#3B6D11]! items-center justify-center gap-[10px] hover:[background:#2D550D] hover:[transform:translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                >
                  {"ISO 9001:2026 transition →"}
                </SiteLink>
              </div>
              <h3 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {
                  "What is ISO 9001 QMS? Singapore's quality certification — the commercial case for ISO 9001"
                }
              </h3>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO 9001 is the internationally recognised standard for Quality Management Systems, based on seven quality management principles. It provides a framework for organisations to ensure they consistently meet customer and regulatory requirements while continually improving their processes. In Singapore, it is the foundational certification that signals quality credibility to government buyers, enterprise clients, and international partners."
                }
              </p>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "ISO 9001 is the most strategic investment a Singapore SME can make in quality credibility. ISO 9001 certification wins more tenders by qualifying for government and corporate contracts that mandate it, improves efficiency by streamlining processes to reduce errors and rework, boosts customer confidence through internationally recognised proof of quality commitment, and provides built-in framework for identifying and addressing quality issues. For most Singapore companies, the question is not whether to certify — it is when."
                }
              </p>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {
                  "ISO 9001 — seven quality management principles ICFC embeds in every QMS"
                }
              </h3>
              <div className="mt-[20px] mr-[0] mb-[20px] ml-[0] grid [grid-template-columns:repeat(2,_1fr)] max-[768px]:[grid-template-columns:1fr] gap-[20px]">
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"📋 Principle 1 — Customer focus"}
                  </strong>
                  <br />
                  {
                    "Understanding and meeting customer requirements — the primary focus of quality management"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"👔 Principle 2 — Leadership"}
                  </strong>
                  <br />
                  {
                    "Establishing unity of purpose, direction, and engagement — active commitment from top management"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"👥 Principle 3 — Engagement of people"}
                  </strong>
                  <br />
                  {
                    "Empowering competent, motivated people at all levels — quality depends on everyone"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"🔄 Principle 4 — Process approach"}
                  </strong>
                  <br />
                  {
                    "Managing activities as interconnected processes — foundation of ICFC's QMS design"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"📈 Principle 5 — Improvement"}
                  </strong>
                  <br />
                  {
                    "Ongoing focus on enhancing performance — PDCA cycle driving continual improvement"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"📊 Principle 6 — Evidence-based decision making"}
                  </strong>
                  <br />
                  {
                    "Analysing data to drive decisions — quality metrics and performance indicators"
                  }
                </div>
                <div className="pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! bg-[#f8f9fa]! rounded-[0.375rem]! hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] [transition:all_0.3s] motion-reduce:transition-none">
                  <strong className="[font-weight:bolder]">
                    {"🤝 Principle 7 — Relationship management"}
                  </strong>
                  <br />
                  {
                    "Managing relationships with interested parties — suppliers, partners, regulatory bodies"
                  }
                </div>
              </div>
              <div className="flex flex-wrap mt-[1.5rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] mb-[5px]!">
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[0.375rem]! [background:#fff] hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none">
                    <Icon
                      name="survey"
                      className="text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]! inline-block [font-style:normal] text-[#C8102E]!"
                    />
                    <h4 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"🔍 QMS Audit Services"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Gap analysis, Stage 1 & 2 audits, pre-certification, surveillance. EDG eligible."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#fff] [text-decoration:none] pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] inline-flex items-center gap-[8px] rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:[transform:translateX(5px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Explore audit →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[0.375rem]! [background:#fff] hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none">
                    <Icon
                      name="file"
                      className="text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]! inline-block [font-style:normal] text-[#C8102E]!"
                    />
                    <h4 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"📋 QMS Consultation"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Full implementation, IMS integration, GeBIZ tender alignment, EDG grant managed."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#fff] [text-decoration:none] pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] inline-flex items-center gap-[8px] rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:[transform:translateX(5px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Explore consulting →"}
                    </SiteLink>
                  </div>
                </div>
                <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                  <div className="[border:1px_solid_#dee2e6]! h-full! pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! bg-[rgba(255,255,255,1)]! rounded-[0.375rem]! [background:#fff] hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] [transition:all_0.3s_ease] motion-reduce:transition-none">
                    <Icon
                      name="user"
                      className="text-[2.5rem]! max-[1200px]:text-[calc(1.375rem_+_1.5vw)]! inline-block [font-style:normal] text-[#C8102E]!"
                    />
                    <h4 className="mt-[.5rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                      {"🎓 QMS Training"}
                    </h4>
                    <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Lead Auditor (CQI/IRCA), Internal Auditor, Implementer, Staff awareness, 2026 transition."
                      }
                    </p>
                    <SiteLink
                      href="/services"
                      className="text-[#fff] [text-decoration:none] pt-[10px] pr-[24px] pb-[10px] pl-[24px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#fff] [border:none] [background:#C8102E] inline-flex items-center gap-[8px] rounded-[50px] text-[13px] font-semibold hover:[background:#8B0A1E] hover:[transform:translateX(5px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                    >
                      {"Explore training →"}
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div className="relative pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! mb-[1.5rem]! text-[#0a3622] bg-[#d1e7dd] [border:0]! rounded-[0.5rem]! [background:linear-gradient(135deg,_#EAF3DE,_#d4edbd)] [border-left:5px_solid_#3B6D11]">
                <Icon
                  name="star"
                  className="[float:left]! mr-[1rem]! text-[1.75rem]! max-[1200px]:text-[calc(1.3rem_+_.6vw)]! inline-block [font-style:normal] text-[#3B6D11]!"
                />
                <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[rgba(33,37,41,1)]! text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {
                    "EDG / MASA grant — up to 50% co-funding for ISO 9001 consultation"
                  }
                </h5>
                <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 9001 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. Integrated IMS projects (9001 + 14001 + 45001) qualify for EDG co-funding on all standards through a single application — maximising total grant benefit."
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-[#fff] [text-decoration:none] inline-flex pt-[10px]! pr-[24px]! pb-[10px]! pl-[24px]! text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#198754] hover:text-[#fff] hover:bg-[#157347] hover:[border-color:#146c43] focus-visible:text-[#fff] focus-visible:bg-[#157347] focus-visible:[border-color:#146c43] focus-visible:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] active:text-[#fff] active:bg-[#146c43] active:[border-color:#13653f] active:shadow-[0_0_0_0.25rem_rgba(60,153,110,_.5)] mt-[1rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#3B6D11]! items-center justify-center gap-[10px] hover:[background:#2D550D] hover:[transform:translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                >
                  {"Check grant eligibility →"}
                </SiteLink>
              </div>
              <div className="mt-[20px] mr-[0] mb-[20px] ml-[0] grid [grid-template-columns:repeat(4,_1fr)] max-[768px]:[grid-template-columns:1fr] gap-[20px]">
                <div className="text-center!">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"98%"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"First-attempt success"}
                  </p>
                  <small className="text-[.875em]">
                    {"certification rate"}
                  </small>
                </div>
                <div className="text-center!">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"Sep 2026"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"ISO 9001:2026"}
                  </p>
                  <small className="text-[.875em]">
                    {"publication target"}
                  </small>
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
                    {"25+"}
                  </div>
                  <p className="mt-[0] mb-[0]! text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"Singapore industries"}
                  </p>
                  <small className="text-[.875em]">{"served by ICFC"}</small>
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"ICFC's QMS audit process — process mapping to certificate"}
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
                  {"Process mapping"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"03"}
                  </div>
                  {"Gap analysis"}
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
                  {"Certification"}
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {
                  "QMS consultation — from process mapping to ISO 9001 certificate"
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
                  {"Process mapping"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"04"}
                  </div>
                  {"QMS build"}
                </div>
                <div className="pt-[15px] pr-[15px] pb-[15px] pl-[15px] [flex:1] min-w-[100px] text-center [background:#f8f9fa] rounded-[12px]">
                  <div className="mb-[10px] [background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full [font-weight:bold]">
                    {"05"}
                  </div>
                  {"Staff training"}
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
                {"Client outcomes · Singapore"}
              </h3>
              <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#C8102E]">
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    '"ICFC helped us achieve ISO 9001 certification in under three months — starting from scratch. Their process mapping workshop identified four bottlenecks in our service delivery that we had not previously documented. Fixing these reduced our rework rate by 35% in the first quarter after certification. The EDG grant covered 50% of the consultation cost."'
                  }
                </p>
                <strong className="[font-weight:bolder]">
                  {"— MD, IT services company, Singapore"}
                </strong>
              </div>
              <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#C8102E]">
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "\"We needed ISO 9001 to qualify for a GeBIZ government tender that required it as a prerequisite. ICFC's government tender qualification QMS approach was exactly what we needed — practical, audit-ready documentation that satisfied both the ISO standard and the procurement panel's evidence requirements. We won the tender two months after certification.\""
                  }
                </p>
                <strong className="[font-weight:bolder]">
                  {"— GM, Engineering services provider, Singapore"}
                </strong>
              </div>
              <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[16px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#C8102E]">
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    '"ICFC\'s integrated ISO 9001 + ISO 14001 + ISO 45001 IMS was the most cost-effective decision we made. One gap analysis, one internal audit programme, one EDG grant application — triple certification in six months. The combined approach saved us approximately S$25,000 versus three separate consultancy engagements."'
                  }
                </p>
                <strong className="[font-weight:bolder]">
                  {"— OD, Construction company, Singapore"}
                </strong>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                {"Related services"}
              </h3>
              <div className="mt-[30px] mr-[0] mb-[30px] ml-[0] flex flex-wrap gap-[20px]">
                <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:#f8f9fa] rounded-[16px] [flex:1] min-w-[200px] text-center">
                  <span className="mb-[12px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] [background:#C8102E] text-[white] text-[12px] rounded-[20px] inline-block">
                    {"🌿 ISO 14001:2026"}
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
                <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:#f8f9fa] rounded-[16px] [flex:1] min-w-[200px] text-center">
                  <span className="mb-[12px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] [background:#C8102E] text-[white] text-[12px] rounded-[20px] inline-block">
                    {"🔒 ISO 27001"}
                  </span>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {"IMS + ISMS — comprehensive governance"}
                  </p>
                </div>
              </div>
              <div className="mt-[30px] mr-[0] mb-[30px] ml-[0] pt-[30px] pr-[30px] pb-[30px] pl-[30px] [background:#1a1a2e] text-[white] rounded-[20px] text-center">
                <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {
                    "新加坡ISO 9001质量管理体系（QMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ICFC提供新加坡ISO 9001:2015质量管理体系全程认证服务，包括流程梳理、差距分析、文件开发、政府招标资格准备、EDG补助金申请管理及员工培训，涵盖建筑、制造、物流、IT等25大行业。ISO 9001:2026过渡支持已涵盖在所有当前项目中。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务，欢迎免费咨询。"
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">{"关键词："}</strong>
                  {
                    "ISO 9001新加坡 · 质量管理体系 · QMS认证 · 政府招标资格 · GeBIZ供应商 · EDG补助金 · 最佳QMS顾问 · 实惠ISO 9001认证 · ISO 9001 2026过渡 · 新加坡质量认证"
                  }
                </p>
                <SiteLink
                  href="/contact-us"
                  className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#0d6efd] hover:text-[#fff] hover:bg-[#0b5ed7] hover:[border-color:#0a58ca] focus-visible:text-[#fff] focus-visible:bg-[#0b5ed7] focus-visible:[border-color:#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] active:text-[#fff] active:bg-[#0a58ca] active:[border-color:#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] mt-[.5rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#C8102E] items-center justify-center gap-[10px] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div className="mt-[1.5rem]! text-center! pt-[30px]! pr-[30px]! pb-[30px]! pl-[30px]! [background:linear-gradient(135deg,_#fff5f5,_#fff)]! rounded-[20px]!">
                <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  {"Start your ISO 9001 QMS journey today"}
                </h3>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Free 30-minute quality management assessment. Honest gap analysis against ISO 9001:2015. EDG grant eligibility check. ISO 9001:2026 transition strategy. No obligation."
                  }
                </p>
                <div className="flex! flex-wrap! justify-center! mt-[1rem]! gap-[1rem]!">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#fff] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:none] rounded-[8px] bg-[#0d6efd] hover:text-[#fff] hover:bg-[#0b5ed7] hover:[border-color:#0a58ca] focus-visible:text-[#fff] focus-visible:bg-[#0b5ed7] focus-visible:[border-color:#0a58ca] focus-visible:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] active:text-[#fff] active:bg-[#0a58ca] active:[border-color:#0a53be] active:shadow-[0_0_0_0.25rem_rgba(49,132,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:#C8102E] items-center justify-center gap-[10px] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Book free QMS assessment →"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"Check grant eligibility"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#C8102E] [text-decoration:none] inline-flex pt-[12px] pr-[28px] pb-[12px] pl-[28px] text-[14px] font-semibold leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:2px_solid_#C8102E] rounded-[8px] bg-[transparent] hover:text-[#fff] hover:bg-[#0d6efd] hover:[border-color:#0d6efd] focus-visible:text-[#fff] focus-visible:bg-[#0d6efd] focus-visible:[border-color:#0d6efd] focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] active:text-[#fff] active:bg-[#0d6efd] active:[border-color:#0d6efd] active:shadow-[0_0_0_0.25rem_rgba(13,110,253,_.5)] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent] items-center justify-center gap-[10px] hover:[background:#C8102E] hover:[transform:translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
                  >
                    {"ISO 9001:2026 transition"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="mt-[40px] mb-[20px] [font-weight:600] leading-[1.46] text-[#2B3944] text-[45px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[40px] [word-break:break-word]">
                {"Frequently asked questions — ISO 9001 QMS"}
              </h3>
              <AccordionGroup id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "Should we wait for ISO 9001:2026 before getting certified?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top-left-radius:0.375rem] [border-top-right-radius:0.375rem] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "There is absolutely no benefit to waiting. Delaying your certification project means postponing the significant commercial benefits — including government tender qualification and operational efficiency — for over two years. The core requirements will not change — the 2026 edition is an evolution, maintaining the Annex SL structure. Any system built on ISO 9001:2015 today is a direct investment in your future 2026 certification."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"Is ISO 9001 required for Singapore government tenders?"}
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "ISO 9001 is not legally mandated for all government tenders — but it is widely required or weighted in GeBIZ procurement. Many government agencies and statutory boards require ISO 9001 as a prerequisite for supplier qualification. For any company that bids for government contracts, ISO 9001 is effectively a commercial necessity."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {"How much does ISO 9001 consultation cost after grants?"}
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "Typical ICFC consultation fees range from S$5,000–S$15,000 depending on organisation size and complexity. With EDG grant covering up to 50% for eligible SMEs, the net consultancy cost for a first-time certification is typically S$2,500–S$7,500."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "Can we integrate ISO 9001 with ISO 14001 and ISO 45001?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "Yes — ISO 9001, ISO 14001, ISO 45001, and ISO 27001 all share the Annex SL High Level Structure. An integrated management system (IMS) reduces total implementation cost by 20–30% and qualifies for a single EDG grant application covering all standards."
                  }
                </AccordionItem>
                <AccordionItem
                  title={
                    <>
                      {
                        "How long does ISO 9001 certification take in Singapore?"
                      }
                    </>
                  }

                  defaultOpen={false}
                  className="text-[#212529] bg-[#fff] [border:1px_solid_#e2e8f0] [border-top:0] [border-bottom-right-radius:0.375rem] [border-bottom-left-radius:0.375rem] mb-[16px] rounded-[12px] overflow-hidden"
                >
                  {" "}
                  {
                    "Most Singapore SMEs achieve ISO 9001 certification in 3–6 months with proper consultancy support. ICFC's typical engagement for an SME with 10–50 employees runs 10–14 weeks from gap analysis to Stage 2 certification audit completion."
                  }
                </AccordionItem>
              </AccordionGroup>
              <div className="text-[.875em] text-[rgba(33,_37,_41,_0.75)]! mt-[40px]">
                <strong className="[font-weight:bolder]">
                  {"Page optimised for:"}
                </strong>
                {
                  " ISO 9001 Singapore 2026 · QMS certification SG · ISO 9001:2026 transition · government tender ISO 9001 · best QMS consultant SG · affordable ISO 9001 · budget QMS certification · EDG grant ISO 9001"
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
                    "ISO 9001 QMS certification — tender-ready, EDG grant funded. "
                  }
                  <SiteLink
                    href="/contact-us"
                    className="text-[inherit] [text-decoration:underline] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] inline-block [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    {"Start your quality management journey today →"}
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
