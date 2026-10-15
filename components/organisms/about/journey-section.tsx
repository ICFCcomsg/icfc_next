import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { SiteLink } from "@/components/atoms/site-link";

export function JourneySection() {
  return (
    <section className="pt-20 pr-0 pb-20 pl-0 bg-[#ffffff]">
      <Container>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            <Tx ns="about">{"Best business strategy · Est. 2014"}</Tx>
          </div>
          <h1 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[38px] max-[768px]:text-[28px] [word-break:break-word]">
            <Tx ns="about">{"Built on a decade of trust."}</Tx>
            <br />
            <Tx ns="about">{"Driven by your compliance success."}</Tx>
          </h1>
          <p className="mt-0 mb-5 text-[16px] [font-weight:normal] text-[#5a5a5a] leading-[1.6]">
            <Tx ns="about">{"ICFC Pte Ltd was founded in Singapore in 2014 with a single purpose: to make international standards achievable for every organisation — from growing SMEs to established enterprises. Over more than a decade, we have guided hundreds of Singapore businesses through ISO certification, audit, and training, becoming one of the most trusted names in management system consulting in the region."}</Tx>
          </p>
          <p className="mt-0 mb-5 text-[16px] [font-weight:normal] text-[#5a5a5a] leading-[1.6]">
            <Tx ns="about">{"We are not a generalist consultancy. ISO standards are all we do — and we do them with depth, precision, and a genuine commitment to your long-term operational resilience."}</Tx>
          </p>
          <div className="mt-5! flex! gap-4! flex-wrap!">
            <SiteLink
              href="/contact-us"
              className="text-white [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:#AB052D] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:[background:#8a0424] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              <Tx ns="about">{"Get to know us ↗"}</Tx>
            </SiteLink>
            <SiteLink
              href="/services"
              className="text-[#111] [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:1px_solid_#e0e0e0] [background:transparent] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:border-[#AB052D] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              <Tx ns="about">{"Our services"}</Tx>
            </SiteLink>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            <Tx ns="about">{"By the numbers"}</Tx>
          </div>
          <div className="mt-7.5 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-7.5 max-[768px]:gap-3.75">
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"12"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                <Tx ns="about">{"Years"}</Tx>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"250+"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                <Tx ns="about">{"Clients"}</Tx>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"25"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                <Tx ns="about">{"Industries served"}</Tx>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"500+"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                <Tx ns="about">{"Audits supported"}</Tx>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"20+"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                <Tx ns="about">{"ISO standards portfolio"}</Tx>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"100+"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                <Tx ns="about">{"Trainees"}</Tx>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            <Tx ns="about">{"Our three service pillars"}</Tx>
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            <Tx ns="about">{"Everything you need, under one roof"}</Tx>
          </h2>
          <p className="mt-0 mb-5 text-[16px] [font-weight:normal] text-[#5a5a5a] leading-[1.6]">
            <Tx ns="about">{"Whether you are pursuing your first ISO certificate, preparing for a surveillance audit, or building internal capability, ICFC delivers end-to-end support without the complexity of managing multiple vendors."}</Tx>
          </p>
          <div className="mt-10 mr-0 mb-5 ml-0 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7.5 max-[768px]:gap-5">
            <div className="pt-7.5 pr-6.25 pb-7.5 pl-6.25 [background:#fff] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] [border:1px_solid_#ebebeb] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:border-[#AB052D20] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-3.75 text-[36px] font-bold text-[#AB052D] opacity-[0.7]">
                {"01"}
              </div>
              <div className="mb-3.75 text-[22px] font-semibold text-[#111]">
                <Tx ns="about">{"ISO Consultation"}</Tx>
              </div>
              <p className="mt-0 mb-5 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                <Tx ns="about">{"From gap analysis and documentation to full system implementation — tailored to your business context."}</Tx>
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Gap analysis"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Documentation"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Implementation"}</Tx>
                </span>
              </div>
            </div>
            <div className="pt-7.5 pr-6.25 pb-7.5 pl-6.25 [background:#fff] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] [border:1px_solid_#ebebeb] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:border-[#AB052D20] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-3.75 text-[36px] font-bold text-[#AB052D] opacity-[0.7]">
                {"02"}
              </div>
              <div className="mb-3.75 text-[22px] font-semibold text-[#111]">
                <Tx ns="about">{"Third-party & certification audit"}</Tx>
              </div>
              <p className="mt-0 mb-5 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                <Tx ns="about">{"Independent assessments against ISO standards, preparing you for certification body audits or serving as the audit itself."}</Tx>
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Stage 1 & 2 audits"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Surveillance"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Recertification"}</Tx>
                </span>
              </div>
            </div>
            <div className="pt-7.5 pr-6.25 pb-7.5 pl-6.25 [background:#fff] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] [border:1px_solid_#ebebeb] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:border-[#AB052D20] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-3.75 text-[36px] font-bold text-[#AB052D] opacity-[0.7]">
                {"03"}
              </div>
              <div className="mb-3.75 text-[22px] font-semibold text-[#111]">
                <Tx ns="about">{"Training programmes"}</Tx>
              </div>
              <p className="mt-0 mb-5 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                <Tx ns="about">{"Accredited courses to build lasting internal competence — lead auditor, internal auditor, implementation, and awareness."}</Tx>
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Lead auditor"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Internal auditor"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Awareness"}</Tx>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5!">
            <div className="mb-2.5! pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
              <Tx ns="about">{"Standards we specialise in"}</Tx>
            </div>
            <div className="mt-3.75 flex flex-wrap gap-2 justify-start!">
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                <Tx ns="about">{"ISO/IEC 27001"}</Tx>
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                <Tx ns="about">{"ISO/IEC 42001"}</Tx>
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                <Tx ns="about">{"ISO 9001"}</Tx>
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                <Tx ns="about">{"ISO 14001"}</Tx>
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                <Tx ns="about">{"ISO 45001"}</Tx>
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                <Tx ns="about">{"ISO 37001"}</Tx>
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                <Tx ns="about">{"ISO 22301"}</Tx>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            <Tx ns="about">{"Our journey"}</Tx>
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            <Tx ns="about">{"A decade of deliberate growth"}</Tx>
          </h2>
          <div className="mt-10 mr-0 mb-0 ml-0">
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2014"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  <Tx ns="about">{"ICFC Pte Ltd founded in Singapore"}</Tx>
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  <Tx ns="about">{"Started with ISO 9001 and ISO 14001 consultation for manufacturing and logistics clients."}</Tx>
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2016"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  <Tx ns="about">{"Expanded into information security"}</Tx>
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  <Tx ns="about">{"Added ISO/IEC 27001 as Singapore's financial and tech sectors accelerated demand."}</Tx>
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2018"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  <Tx ns="about">{"Launched formal training division"}</Tx>
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  <Tx ns="about">{"Introduced accredited lead auditor courses, training over 300 professionals in two years."}</Tx>
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2020"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  <Tx ns="about">{"Adapted for remote consultation & audit"}</Tx>
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  <Tx ns="about">{"Maintained 100% client continuity with zero project delays during COVID-19."}</Tx>
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2022"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  <Tx ns="about">{"PDPA and privacy management practice"}</Tx>
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  <Tx ns="about">{"Launched ISO 27701 and PDPA advisory services for Singapore's regulatory landscape."}</Tx>
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2024"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  <Tx ns="about">{"ISO 42001 AI management practice launched"}</Tx>
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  <Tx ns="about">{"Among the first consultancies in Singapore to offer ISO/IEC 42001 consultation."}</Tx>
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2025+"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  <Tx ns="about">{"Serving 25 high-growth industries"}</Tx>
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  <Tx ns="about">{"Helping SMEs and enterprises understand EDGE Grant support (subject to eligibility and approval) alongside ISO projects."}</Tx>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            <Tx ns="about">{"Our values"}</Tx>
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            <Tx ns="about">{"How we show up for every client"}</Tx>
          </h2>
          <div className="mt-8.75 mr-0 mb-0 ml-0 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6.25">
            <div className="pt-6.25 pr-6.25 pb-6.25 pl-6.25 [background:#FCFCFC] rounded-[20px] [border:1px_solid_#eee]">
              <div className="mb-5 w-13.75 h-13.75 [background:#AB052D10] rounded-[18px] flex items-center justify-center text-[26px] text-[#AB052D]">
                {"⚖️"}
              </div>
              <div className="mb-2.5 text-[18px] font-semibold">
                <Tx ns="about">{"Honest advice"}</Tx>
              </div>
              <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                <Tx ns="about">{"We tell you what your business genuinely needs — not the largest engagement."}</Tx>
              </p>
            </div>
            <div className="pt-6.25 pr-6.25 pb-6.25 pl-6.25 [background:#FCFCFC] rounded-[20px] [border:1px_solid_#eee]">
              <div className="mb-5 w-13.75 h-13.75 [background:#AB052D10] rounded-[18px] flex items-center justify-center text-[26px] text-[#AB052D]">
                {"📊"}
              </div>
              <div className="mb-2.5 text-[18px] font-semibold">
                <Tx ns="about">{"Practical outcomes"}</Tx>
              </div>
              <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                <Tx ns="about">{"Every deliverable is designed for your team to own and sustain — not just to pass the audit."}</Tx>
              </p>
            </div>
            <div className="pt-6.25 pr-6.25 pb-6.25 pl-6.25 [background:#FCFCFC] rounded-[20px] [border:1px_solid_#eee]">
              <div className="mb-5 w-13.75 h-13.75 [background:#AB052D10] rounded-[18px] flex items-center justify-center text-[26px] text-[#AB052D]">
                {"🏭"}
              </div>
              <div className="mb-2.5 text-[18px] font-semibold">
                <Tx ns="about">{"Industry depth"}</Tx>
              </div>
              <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                <Tx ns="about">{"Our consultants bring sector-specific experience beyond just the ISO standard."}</Tx>
              </p>
            </div>
            <div className="pt-6.25 pr-6.25 pb-6.25 pl-6.25 [background:#FCFCFC] rounded-[20px] [border:1px_solid_#eee]">
              <div className="mb-5 w-13.75 h-13.75 [background:#AB052D10] rounded-[18px] flex items-center justify-center text-[26px] text-[#AB052D]">
                {"🤝"}
              </div>
              <div className="mb-2.5 text-[18px] font-semibold">
                <Tx ns="about">{"Long-term partnership"}</Tx>
              </div>
              <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                <Tx ns="about">{"We stay with clients through surveillance cycles, recertification, and new standards adoption."}</Tx>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            <Tx ns="about">{"Expert team"}</Tx>
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            <Tx ns="about">{"Meet the people behind your certification"}</Tx>
          </h2>
          <div className="mt-8.75 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7.5">
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F9F9FB] rounded-3xl text-center">
              <div className="mt-0 mr-auto mb-4.5 ml-auto w-21.25 h-21.25 [background:#0C447C]! rounded-full flex items-center justify-center text-[28px] font-semibold text-[white]">
                <Tx ns="about">{"LC"}</Tx>
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                <Tx ns="about">{"Lead consultant"}</Tx>
              </h4>
              <p className="mt-0 mb-7.5 text-[13px]! [font-weight:normal] text-[#666]! leading-7">
                <Tx ns="about">{"Information security & AI governance"}</Tx>
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2 justify-center!">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"ISO 27001"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"ISO 42001"}</Tx>
                </span>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F9F9FB] rounded-3xl text-center">
              <div className="mt-0 mr-auto mb-4.5 ml-auto w-21.25 h-21.25 [background:#AB052D]! rounded-full flex items-center justify-center text-[28px] font-semibold text-[white]">
                <Tx ns="about">{"SA"}</Tx>
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                <Tx ns="about">{"Senior auditor"}</Tx>
              </h4>
              <p className="mt-0 mb-7.5 text-[13px]! [font-weight:normal] text-[#666]! leading-7">
                <Tx ns="about">{"Quality & environmental management"}</Tx>
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2 justify-center!">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"ISO 9001"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"ISO 14001"}</Tx>
                </span>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F9F9FB] rounded-3xl text-center">
              <div className="mt-0 mr-auto mb-4.5 ml-auto w-21.25 h-21.25 [background:#27500A]! rounded-full flex items-center justify-center text-[28px] font-semibold text-[white]">
                <Tx ns="about">{"TC"}</Tx>
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                <Tx ns="about">{"Training director"}</Tx>
              </h4>
              <p className="mt-0 mb-7.5 text-[13px]! [font-weight:normal] text-[#666]! leading-7">
                <Tx ns="about">{"Lead auditor & implementation courses"}</Tx>
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2 justify-center!">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"Lead auditor"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"ISO 9001"}</Tx>
                </span>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F9F9FB] rounded-3xl text-center">
              <div className="mt-0 mr-auto mb-4.5 ml-auto w-21.25 h-21.25 [background:#633806]! rounded-full flex items-center justify-center text-[28px] font-semibold text-[white]">
                <Tx ns="about">{"BC"}</Tx>
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                <Tx ns="about">{"Business consultant"}</Tx>
              </h4>
              <p className="mt-0 mb-7.5 text-[13px]! [font-weight:normal] text-[#666]! leading-7">
                <Tx ns="about">{"EDGE Grant guidance"}</Tx>
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2 justify-center!">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"EDGE Grant"}</Tx>
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  <Tx ns="about">{"ISO 37001"}</Tx>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            <Tx ns="about">{"EDGE Grant"}</Tx>
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            <Tx ns="about">{"Funding your ISO journey"}</Tx>
          </h2>
          <div className="mt-7.5 mr-0 mb-5 ml-0 pt-8.75 pr-10 pb-8.75 pl-10 [background:linear-gradient(135deg,#FDF8F0_0%,#FFF5E6_100%)] rounded-[28px] [border:1px_solid_#FFE0B5]">
            <p className="mt-0 mb-2.5! text-[18px]! font-semibold! text-[#616C74] leading-7">
              <Tx ns="about">{"How we support EDGE projects"}</Tx>
            </p>
            <p className="mt-0 mb-5! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              <Tx ns="about">{"Our consultancy is led by SS 680:2021 certified consultants. We prepare the proposal, quotation and consultant details EDGE asks for; you apply yourself on the Business Grants Portal. Support is subject to eligibility and Enterprise Singapore's approval."}</Tx>
            </p>
            <SiteLink
              href="/contact-us"
              className="text-white [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:#AB052D] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:[background:#8a0424] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              <Tx ns="about">{"Check EDGE eligibility ↗"}</Tx>
            </SiteLink>
          </div>
        </div>
        <div className="mb-0 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            <Tx ns="about">{"Ready to begin?"}</Tx>
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            <Tx ns="about">{"Let's build your certification roadmap"}</Tx>
          </h2>
          <p className="mt-0 mb-5 text-[16px] [font-weight:normal] text-[#5a5a5a] leading-[1.6]">
            <Tx ns="about">{"Whether you know exactly which standard you need or are still exploring options, our consultants will give you an honest, no-obligation assessment."}</Tx>
          </p>
          <div>
            <SiteLink
              href="/contact-us"
              className="text-white [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:#AB052D] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:[background:#8a0424] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              <Tx ns="about">{"Book a free consultation ↗"}</Tx>
            </SiteLink>
            <SiteLink
              href="/industry"
              className="text-[#111] [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:1px_solid_#e0e0e0] [background:transparent] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:border-[#AB052D] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              <Tx ns="about">{"Explore our industries"}</Tx>
            </SiteLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
