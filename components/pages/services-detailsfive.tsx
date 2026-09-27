import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsfivePageContent() {
  return (
    <SitePageTemplate route="services-detailsfive.html">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[100%]">
            <div>
              <div>
                <SiteImage
                  src="/assets/images/banner/services-details-01.webp"
                  alt="ISO 9001 Quality Management System"
                  className="max-w-full h-auto w-full rounded-[6px]"
                />
              </div>
              <p className="leading-relaxed mt-[30px] mb-4">
                {
                  "ISO 9001 is the world's most widely adopted management system standard — with over one million certificates issued in 190 countries. In Singapore, it is the foundational quality credential that unlocks government tenders, enterprise supply chains, and international contracts. ISO 9001:2026 is expected by September 2026 — ICFC certifies organisations under ISO 9001:2015 today with a seamless upgrade path to the 2026 edition. Every engagement includes EDG grant management at no extra charge."
                }
              </p>
              <div className="grid [grid-template-columns:repeat(4,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"1M+"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Certificates issued"}
                  </p>
                  <small>{"world's most adopted standard"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"3–6 mo"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Typical QMS timeline"}
                  </p>
                  <small>{"certification"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"50%"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"EDG grant co-funding"}
                  </p>
                  <small>{"for qualifying SMEs"}</small>
                </div>
                <div className="[background:#f8f9fa] rounded-[16px] p-[1.5rem] text-center [border:1px_solid_#e9ecef] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:[background:#fff]">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"25+"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Singapore industries"}
                  </p>
                  <small>{"served by ICFC"}</small>
                </div>
              </div>
              <div className="[background:linear-gradient(135deg,_#EAF3DE,_#d4edbd)] [border-left:5px_solid_#3B6D11] rounded-[16px] mb-4 rounded-md border p-4 border-0 p-6 rounded-lg">
                <Icon
                  name="star"
                  className="text-[#3B6D11] text-[28px] mr-4 float-left"
                />
                <h5 className="font-bold leading-tight text-[#2B3944] text-xl text-slate-900">
                  {
                    "📋 ISO 9001:2026 — expected September 2026. Start ISO 9001:2015 now — no benefit to waiting"
                  }
                </h5>
                <p className="leading-relaxed mb-[0]">
                  <strong>{"Status:"}</strong>
                  {
                    " 97% approval at DIS ballot (December 2025). FDIS phase underway. Publication targeted September 2026."
                  }
                  <br />
                  <strong>{"Changes:"}</strong>
                  {
                    " Evolution, not rewrite — Annex SL structure maintained. New focus on quality culture, digitalisation, ethics, and ESG alignment."
                  }
                  <br />
                  <strong>{"Transition:"}</strong>
                  {
                    " 3-year transition window from publication — ISO 9001:2015 certificates valid until ~September 2029."
                  }
                  <br />
                  <strong>{"Strategy:"}</strong>
                  {
                    " Build ISO 9001:2015 now — your investment is future-proof. ICFC includes 2026 upgrade support."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[10px_24px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#3B6D11] text-[#fff] hover:[background:#2D550D] hover:[transform:translateY(-2px)]"
                >
                  {"ISO 9001:2026 transition →"}
                </SiteLink>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mb-[10px] font-bold">
                {
                  "What is ISO 9001 QMS? Singapore's quality certification — the commercial case for ISO 9001"
                }
              </h3>
              <p className="leading-relaxed mb-4">
                {
                  "ISO 9001 is the internationally recognised standard for Quality Management Systems, based on seven quality management principles. It provides a framework for organisations to ensure they consistently meet customer and regulatory requirements while continually improving their processes. In Singapore, it is the foundational certification that signals quality credibility to government buyers, enterprise clients, and international partners."
                }
              </p>
              <p className="leading-relaxed mb-4">
                {
                  "ISO 9001 is the most strategic investment a Singapore SME can make in quality credibility. ISO 9001 certification wins more tenders by qualifying for government and corporate contracts that mandate it, improves efficiency by streamlining processes to reduce errors and rework, boosts customer confidence through internationally recognised proof of quality commitment, and provides built-in framework for identifying and addressing quality issues. For most Singapore companies, the question is not whether to certify — it is when."
                }
              </p>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {
                  "ISO 9001 — seven quality management principles ICFC embeds in every QMS"
                }
              </h3>
              <div className="grid [grid-template-columns:repeat(2,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-slate-50 p-4 rounded-md">
                  <strong>{"📋 Principle 1 — Customer focus"}</strong>
                  <br />
                  {
                    "Understanding and meeting customer requirements — the primary focus of quality management"
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-slate-50 p-4 rounded-md">
                  <strong>{"👔 Principle 2 — Leadership"}</strong>
                  <br />
                  {
                    "Establishing unity of purpose, direction, and engagement — active commitment from top management"
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-slate-50 p-4 rounded-md">
                  <strong>{"👥 Principle 3 — Engagement of people"}</strong>
                  <br />
                  {
                    "Empowering competent, motivated people at all levels — quality depends on everyone"
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-slate-50 p-4 rounded-md">
                  <strong>{"🔄 Principle 4 — Process approach"}</strong>
                  <br />
                  {
                    "Managing activities as interconnected processes — foundation of ICFC's QMS design"
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-slate-50 p-4 rounded-md">
                  <strong>{"📈 Principle 5 — Improvement"}</strong>
                  <br />
                  {
                    "Ongoing focus on enhancing performance — PDCA cycle driving continual improvement"
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-slate-50 p-4 rounded-md">
                  <strong>
                    {"📊 Principle 6 — Evidence-based decision making"}
                  </strong>
                  <br />
                  {
                    "Analysing data to drive decisions — quality metrics and performance indicators"
                  }
                </div>
                <div className="bg-[#f8f9fa] rounded-[12px] hover:[transform:translateY(-5px)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] bg-slate-50 p-4 rounded-md">
                  <strong>{"🤝 Principle 7 — Relationship management"}</strong>
                  <br />
                  {
                    "Managing relationships with interested parties — suppliers, partners, regulatory bodies"
                  }
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap gap-y-6 mb-[5px]">
                <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
                  <div className="rounded-[16px] [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] p-6 border border-slate-200 rounded-md bg-white">
                    <Icon
                      name="survey"
                      className="text-[#C8102E] text-[40px]"
                    />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"🔍 QMS Audit Services"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Gap analysis, Stage 1 & 2 audits, pre-certification, surveillance. EDG eligible."
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
                  <div className="rounded-[16px] [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] p-6 border border-slate-200 rounded-md bg-white">
                    <Icon name="file" className="text-[#C8102E] text-[40px]" />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"📋 QMS Consultation"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Full implementation, IMS integration, GeBIZ tender alignment, EDG grant managed."
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
                  <div className="rounded-[16px] [background:#fff] [border:1px_solid_#e2e8f0] h-full hover:[transform:translateY(-8px)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] p-6 border border-slate-200 rounded-md bg-white">
                    <Icon name="user" className="text-[#C8102E] text-[40px]" />
                    <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                      {"🎓 QMS Training"}
                    </h4>
                    <p className="leading-relaxed mb-4">
                      {
                        "Lead Auditor (CQI/IRCA), Internal Auditor, Implementer, Staff awareness, 2026 transition."
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
              <div className="[background:linear-gradient(135deg,_#EAF3DE,_#d4edbd)] [border-left:5px_solid_#3B6D11] rounded-[16px] mb-4 rounded-md border p-4 border-0 p-6 rounded-lg">
                <Icon
                  name="star"
                  className="text-[#3B6D11] text-[28px] mr-4 float-left"
                />
                <h5 className="font-bold leading-tight text-[#2B3944] text-xl text-slate-900">
                  {
                    "EDG / MASA grant — up to 50% co-funding for ISO 9001 consultation"
                  }
                </h5>
                <p className="leading-relaxed mb-[0]">
                  {
                    "Enterprise Singapore's EDG covers up to 50% of qualifying ISO 9001 consultation fees for eligible Singapore SMEs. ICFC manages your application before project commencement. Integrated IMS projects (9001 + 14001 + 45001) qualify for EDG co-funding on all standards through a single application — maximising total grant benefit."
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[10px_24px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#3B6D11] text-[#fff] hover:[background:#2D550D] hover:[transform:translateY(-2px)]"
                >
                  {"Check grant eligibility →"}
                </SiteLink>
              </div>
              <div className="grid [grid-template-columns:repeat(4,_1fr)] gap-[20px] m-[20px_0] max-[768px]:[grid-template-columns:1fr]">
                <div className="text-center">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"98%"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"First-attempt success"}
                  </p>
                  <small>{"certification rate"}</small>
                </div>
                <div className="text-center">
                  <div className="text-[2rem] font-extrabold text-[#C8102E] leading-[1.2]">
                    {"Sep 2026"}
                  </div>
                  <p className="leading-relaxed mb-[0]">{"ISO 9001:2026"}</p>
                  <small>{"publication target"}</small>
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
                    {"25+"}
                  </div>
                  <p className="leading-relaxed mb-[0]">
                    {"Singapore industries"}
                  </p>
                  <small>{"served by ICFC"}</small>
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"ICFC's QMS audit process — process mapping to certificate"}
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
                  {"Process mapping"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"03"}
                  </div>
                  {"Gap analysis"}
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
                  {"Certification"}
                </div>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {
                  "QMS consultation — from process mapping to ISO 9001 certificate"
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
                  {"Process mapping"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"04"}
                  </div>
                  {"QMS build"}
                </div>
                <div className="[flex:1] min-w-[100px] text-center p-[15px] [background:#f8f9fa] rounded-[12px]">
                  <div className="[background:#C8102E] text-[white] w-[30px] h-[30px] inline-flex items-center justify-center rounded-full mb-[10px] [font-weight:bold]">
                    {"05"}
                  </div>
                  {"Staff training"}
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
                {"Client outcomes · Singapore"}
              </h3>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#C8102E]">
                <p className="leading-relaxed mb-4">
                  {
                    '"ICFC helped us achieve ISO 9001 certification in under three months — starting from scratch. Their process mapping workshop identified four bottlenecks in our service delivery that we had not previously documented. Fixing these reduced our rework rate by 35% in the first quarter after certification. The EDG grant covered 50% of the consultation cost."'
                  }
                </p>
                <strong>{"— MD, IT services company, Singapore"}</strong>
              </div>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#C8102E]">
                <p className="leading-relaxed mb-4">
                  {
                    "\"We needed ISO 9001 to qualify for a GeBIZ government tender that required it as a prerequisite. ICFC's government tender qualification QMS approach was exactly what we needed — practical, audit-ready documentation that satisfied both the ISO standard and the procurement panel's evidence requirements. We won the tender two months after certification.\""
                  }
                </p>
                <strong>
                  {"— GM, Engineering services provider, Singapore"}
                </strong>
              </div>
              <div className="[background:#fff] rounded-[16px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#C8102E]">
                <p className="leading-relaxed mb-4">
                  {
                    '"ICFC\'s integrated ISO 9001 + ISO 14001 + ISO 45001 IMS was the most cost-effective decision we made. One gap analysis, one internal audit programme, one EDG grant application — triple certification in six months. The combined approach saved us approximately S$25,000 versus three separate consultancy engagements."'
                  }
                </p>
                <strong>{"— OD, Construction company, Singapore"}</strong>
              </div>
              <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl mt-[40px] mb-[20px]">
                {"Related services"}
              </h3>
              <div className="flex flex-wrap gap-[20px] m-[30px_0]">
                <div className="[background:#f8f9fa] rounded-[16px] p-[20px] [flex:1] min-w-[200px] text-center">
                  <span className="[background:#C8102E] text-[white] text-[12px] p-[4px_10px] rounded-[20px] inline-block mb-[12px]">
                    {"🌿 ISO 14001:2026"}
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
                <div className="[background:#f8f9fa] rounded-[16px] p-[20px] [flex:1] min-w-[200px] text-center">
                  <span className="[background:#C8102E] text-[white] text-[12px] p-[4px_10px] rounded-[20px] inline-block mb-[12px]">
                    {"🔒 ISO 27001"}
                  </span>
                  <p className="leading-relaxed mb-4">
                    {"IMS + ISMS — comprehensive governance"}
                  </p>
                </div>
              </div>
              <div className="[background:#1a1a2e] text-[white] p-[30px] rounded-[20px] m-[30px_0] text-center">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {
                    "新加坡ISO 9001质量管理体系（QMS）认证 · ICFC Pte Ltd（2014年创立）"
                  }
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "ICFC提供新加坡ISO 9001:2015质量管理体系全程认证服务，包括流程梳理、差距分析、文件开发、政府招标资格准备、EDG补助金申请管理及员工培训，涵盖建筑、制造、物流、IT等25大行业。ISO 9001:2026过渡支持已涵盖在所有当前项目中。EDG/MASA补助金最高资助50%咨询费用。提供中英双语服务，欢迎免费咨询。"
                  }
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>{"关键词："}</strong>
                  {
                    "ISO 9001新加坡 · 质量管理体系 · QMS认证 · 政府招标资格 · GeBIZ供应商 · EDG补助金 · 最佳QMS顾问 · 实惠ISO 9001认证 · ISO 9001 2026过渡 · 新加坡质量认证"
                  }
                </p>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#C8102E] text-[#fff] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                >
                  {"中文咨询 · 免费评估 →"}
                </SiteLink>
              </div>
              <div className="[background:linear-gradient(135deg,_#fff5f5,_#fff)] p-[30px] rounded-[20px] text-center">
                <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
                  {"Start your ISO 9001 QMS journey today"}
                </h3>
                <p className="leading-relaxed mb-4">
                  {
                    "Free 30-minute quality management assessment. Honest gap analysis against ISO 9001:2015. EDG grant eligibility check. ISO 9001:2026 transition strategy. No obligation."
                  }
                </p>
                <div className="flex flex-wrap justify-center">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] inline-flex items-center justify-center gap-[10px] p-[12px_28px] text-[14px] font-semibold rounded-[8px] [text-decoration:none] [border:none] [background:#C8102E] text-[#fff] hover:[background:#8B0A1E] hover:[transform:translateY(-2px)]"
                  >
                    {"Book free QMS assessment →"}
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
                    {"ISO 9001:2026 transition"}
                  </SiteLink>
                </div>
              </div>
              <h3 className="text-[45px] max-[1199px]:text-[40px] max-[991px]:text-[37px] max-[767px]:text-[32px] max-[575px]:text-[27px] mt-[40px] mb-[20px] font-bold">
                {"Frequently asked questions — ISO 9001 QMS"}
              </h3>
              <div id="faqAccordion">
                <AccordionItem
                  title={
                    <>
                      {
                        "Should we wait for ISO 9001:2026 before getting certified?"
                      }
                    </>
                  }
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
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
                  className="[border:1px_solid_#e2e8f0] rounded-[12px] mb-[16px] overflow-hidden"
                  defaultOpen={false}
                >
                  {" "}
                  {
                    "Most Singapore SMEs achieve ISO 9001 certification in 3–6 months with proper consultancy support. ICFC's typical engagement for an SME with 10–50 employees runs 10–14 weeks from gap analysis to Stage 2 certification audit completion."
                  }
                </AccordionItem>
              </div>
              <div className="mt-[40px] text-slate-500 text-sm">
                <strong>{"Page optimised for:"}</strong>
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
                    "ISO 9001 QMS certification — tender-ready, EDG grant funded. "
                  }
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D] [text-decoration:underline] inline-block hover:text-[#AB052D]"
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
