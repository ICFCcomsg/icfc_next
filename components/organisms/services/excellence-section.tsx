import { Tx } from "@/components/atoms/tx";
import { AnimatedElement } from "@/components/atoms/animated-element";
import { Icon } from "@/components/icons/icon";
import { Container } from "@/components/atoms/container";

export function ExcellenceSection() {
  return (
    <section className="bg-[rgba(248,249,250,1)]! mt-17.5 pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <Container>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[66.66666667%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto] text-center! mb-11.25">
            <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
              <Tx ns="services">{"Excellence Guaranteed"}</Tx>
            </span>
            <AnimatedElement
              as="h2"
              effect="split"
              delay={0}
              duration={0.8}
              className="mt-0 mb-3.75 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
            >
              <Tx ns="services">{"Providing Standard & "}</Tx>
              <span className="text-[#AB052D]!"><Tx ns="services">{"Premium Services"}</Tx></span>
            </AnimatedElement>
            <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              <Tx ns="services">{"We offer specialized compliance and management system solutions extracted directly from our expert training modules."}</Tx>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mt-6 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-11.25 pr-8.75 pb-11.25 pl-8.75 [background:#fff] rounded-3xl h-full [border:1px_solid_rgba(0,0,0,0.05)] relative overflow-hidden z-1 hover:transform-[translateY(-12px)] hover:border-[#AB052D] hover:shadow-[0_30px_60px_rgba(171,5,45,0.15)] hover:[background:rgba(255,255,255,0.95)] hover:[backdrop-filter:blur(10px)] group/service-category-card [transition:all_0.5s_cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none">
              <span className="mb-6.25 pt-1.5 pr-4.5 pb-1.5 pl-4.5 [background:linear-gradient(90deg,#AB052D,#d40638)] text-white rounded-[50px] text-[11px] font-bold uppercase tracking-[1.5px] inline-block shadow-[0_4px_15px_rgba(171,5,45,0.2)]">
                <Icon
                  name="star"
                  className="mr-1.5! inline-block not-italic"
                />
                <Tx ns="services">{" Global Accreditation"}</Tx>
              </span>
              <div className="mb-7.5 w-20 h-20 [background:#fdf2f4] rounded-3xl flex items-center justify-center relative shadow-[0_10px_20px_rgba(171,5,45,0.08)] after:[content:''] after:absolute after:w-full after:h-full after:[background:#AB052D] after:filter-[blur(20px)] after:opacity-[0] after:z-[-1] group-hover/service-category-card:[background:#AB052D] group-hover/service-category-card:transform-[rotateY(180deg)_scale(1.1)] group-hover/service-category-card:shadow-[0_15px_30px_rgba(171,5,45,0.3)] after:group-hover/service-category-card:opacity-[0.3] [transition:0.4s] motion-reduce:transition-none after:[transition:0.4s] after:motion-reduce:transition-none">
                <Icon
                  name="check"
                  className="text-[42px] text-[#AB052D] group-hover/service-category-card:text-white group-hover/service-category-card:transform-[rotateY(-180deg)] [transition:0.4s] motion-reduce:transition-none"
                />
              </div>
              <h4 className="mt-0 mb-4! font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                <Tx ns="services">{"Audit & Certification"}</Tx>
              </h4>
              <p className="mt-0 mb-6! text-[.875em] text-[rgba(33,37,41,0.75)]! [font-weight:normal] leading-7">
                <Tx ns="services">{"Independent verification for global recognition."}</Tx>
              </p>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 list-none">
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 9001:2015 Quality Management"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 14001:2015 Environmental"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 45001:2018 Health & Safety"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 13485:2016 Medical Devices"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 50001:2018 Energy Audit"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:none] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 41001:2018 Facility Management"}</Tx>
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-11.25 pr-8.75 pb-11.25 pl-8.75 [background:#fff] rounded-3xl h-full [border:1px_solid_rgba(0,0,0,0.05)] relative overflow-hidden z-1 hover:transform-[translateY(-12px)] hover:border-[#AB052D] hover:shadow-[0_30px_60px_rgba(171,5,45,0.15)] hover:[background:rgba(255,255,255,0.95)] hover:[backdrop-filter:blur(10px)] group/service-category-card [transition:all_0.5s_cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none">
              <span className="mb-6.25 pt-1.5 pr-4.5 pb-1.5 pl-4.5 [background:linear-gradient(90deg,#AB052D,#d40638)] text-white rounded-[50px] text-[11px] font-bold uppercase tracking-[1.5px] inline-block shadow-[0_4px_15px_rgba(171,5,45,0.2)]">
                <Icon
                  name="bulb"
                  className="mr-1.5! inline-block not-italic"
                />
                <Tx ns="services">{" Tailored Strategy"}</Tx>
              </span>
              <div className="mb-7.5 w-20 h-20 [background:#fdf2f4] rounded-3xl flex items-center justify-center relative shadow-[0_10px_20px_rgba(171,5,45,0.08)] after:[content:''] after:absolute after:w-full after:h-full after:[background:#AB052D] after:filter-[blur(20px)] after:opacity-[0] after:z-[-1] group-hover/service-category-card:[background:#AB052D] group-hover/service-category-card:transform-[rotateY(180deg)_scale(1.1)] group-hover/service-category-card:shadow-[0_15px_30px_rgba(171,5,45,0.3)] after:group-hover/service-category-card:opacity-[0.3] [transition:0.4s] motion-reduce:transition-none after:[transition:0.4s] after:motion-reduce:transition-none">
                <Icon
                  name="briefcase"
                  className="text-[42px] text-[#AB052D] group-hover/service-category-card:text-white group-hover/service-category-card:transform-[rotateY(-180deg)] [transition:0.4s] motion-reduce:transition-none"
                />
              </div>
              <h4 className="mt-0 mb-4! font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                <Tx ns="services">{"Specialist Consulting"}</Tx>
              </h4>
              <p className="mt-0 mb-6! text-[.875em] text-[rgba(33,37,41,0.75)]! [font-weight:normal] leading-7">
                <Tx ns="services">{"Strategic advisory for regulatory landscapes."}</Tx>
              </p>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 list-none">
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" bizSAFE Level 1,2,3 & Star"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" GDPMD Singapore Consultancy"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 42001 AI Management"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" Cybersecurity & Data Privacy"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 37001 Anti-Bribery Path"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:none] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 27701 Privacy Information"}</Tx>
                </li>
              </ul>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
            <div className="pt-11.25 pr-8.75 pb-11.25 pl-8.75 [background:#fff] rounded-3xl h-full [border:1px_solid_rgba(0,0,0,0.05)] relative overflow-hidden z-1 hover:transform-[translateY(-12px)] hover:border-[#AB052D] hover:shadow-[0_30px_60px_rgba(171,5,45,0.15)] hover:[background:rgba(255,255,255,0.95)] hover:[backdrop-filter:blur(10px)] group/service-category-card [transition:all_0.5s_cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none">
              <span className="mb-6.25 pt-1.5 pr-4.5 pb-1.5 pl-4.5 [background:linear-gradient(90deg,#AB052D,#d40638)] text-white rounded-[50px] text-[11px] font-bold uppercase tracking-[1.5px] inline-block shadow-[0_4px_15px_rgba(171,5,45,0.2)]">
                <Icon
                  name="presentation"
                  className="mr-1.5! inline-block not-italic"
                />
                <Tx ns="services">{" Skill Mastery"}</Tx>
              </span>
              <div className="mb-7.5 w-20 h-20 [background:#fdf2f4] rounded-3xl flex items-center justify-center relative shadow-[0_10px_20px_rgba(171,5,45,0.08)] after:[content:''] after:absolute after:w-full after:h-full after:[background:#AB052D] after:filter-[blur(20px)] after:opacity-[0] after:z-[-1] group-hover/service-category-card:[background:#AB052D] group-hover/service-category-card:transform-[rotateY(180deg)_scale(1.1)] group-hover/service-category-card:shadow-[0_15px_30px_rgba(171,5,45,0.3)] after:group-hover/service-category-card:opacity-[0.3] [transition:0.4s] motion-reduce:transition-none after:[transition:0.4s] after:motion-reduce:transition-none">
                <Icon
                  name="user"
                  className="text-[42px] text-[#AB052D] group-hover/service-category-card:text-white group-hover/service-category-card:transform-[rotateY(-180deg)] [transition:0.4s] motion-reduce:transition-none"
                />
              </div>
              <h4 className="mt-0 mb-4! font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                <Tx ns="services">{"Professional Training"}</Tx>
              </h4>
              <p className="mt-0 mb-6! text-[.875em] text-[rgba(33,37,41,0.75)]! [font-weight:normal] leading-7">
                <Tx ns="services">{"Empowering workforces with knowledge."}</Tx>
              </p>
              <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 list-none">
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 9001 Training Excellence"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 14001 Essential Courses"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" DPTM Training & Certification"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" GDPMD Internal Auditor"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:1px_solid_rgba(0,0,0,0.03)] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" ISO 45001 Safety Awareness"}</Tx>
                </li>
                <li className="pt-3 pr-0 pb-3 pl-0 [border-bottom:none] flex items-center gap-3.5 text-[14px] font-medium text-[#333]">
                  <Icon
                    name="check"
                    className="w-5.5 h-5.5 [background:#fdf2f4] rounded-md text-[#AB052D] flex items-center justify-center text-[10px] font-black"
                  />
                  <Tx ns="services">{" Mastery ISO 42001 / 27001"}</Tx>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
