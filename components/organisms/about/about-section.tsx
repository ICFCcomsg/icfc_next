import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { TickIcon } from "@/components/icons/tick-icon";
import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { AnimatedElement } from "@/components/atoms/animated-element";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";

export function AboutSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <Container>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[repeat(2,1fr)] max-[991px]:grid-cols-[repeat(1,1fr)] gap-[30px_90px] max-[1600px]:gap-[30px_30px]">
              <div>
                <div>
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    <Tx ns="about">{"Best Business Strategy"}</Tx>
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-5 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    <Tx ns="about">{"Build for business growth"}</Tx>
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    <Tx ns="about">{"Position your agency as the bridge between a client's big-picture vision and achievable action plans. data-driven strategies and your track."}</Tx>
                  </p>
                </div>
                <div className="mt-7.5 mb-8.75 grid grid-cols-[repeat(2,1fr)] max-[575px]:grid-cols-[repeat(1,1fr)] gap-[15px_0] w-142.5 max-[767px]:w-full">
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <TickIcon className="align-middle w-3.5 h-3.5" />
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      <Tx ns="about">{" Customized Strategy Solutions "}</Tx>
                    </p>
                  </div>
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <TickIcon className="align-middle w-3.5 h-3.5" />
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      <Tx ns="about">{" Industry-Specific Insights "}</Tx>
                    </p>
                  </div>
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <TickIcon className="align-middle w-3.5 h-3.5" />
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      <Tx ns="about">{" SME & Enterprise Support "}</Tx>
                    </p>
                  </div>
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <TickIcon className="align-middle w-3.5 h-3.5" />
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      <Tx ns="about">{" Global Expansion Planning "}</Tx>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-6.25 relative overflow-hidden">
                    <div className="mb-4.25">
                      <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                        <Tx ns="about">{"Training"}</Tx>
                      </h6>
                      <span className="absolute text-[16px] top-0 inset-e-0 z-1 font-medium text-[#2B3944]">
                        {"95%"}
                      </span>
                    </div>
                    <div className="flex h-3.5 overflow-visible text-[0.75rem] bg-[#F8F8F9] rounded-none pt-0.75 pr-0.75 pb-0.75 pl-0.75 leading-3.5 [border:1px_solid_#DBDEE1]">
                      <AnimatedElement
                        as="div"
                        effect="left"
                        delay={0.3}
                        duration={1}
                        className="flex flex-col justify-center overflow-visible text-white text-center whitespace-nowrap bg-[#2B3944] rounded-none w-[95%]! h-full"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        aria-label="Skill level"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></AnimatedElement>
                    </div>
                  </div>
                  <div className="mb-6.25 relative overflow-hidden">
                    <div className="mb-4.25">
                      <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                        <Tx ns="about">{"Audit"}</Tx>
                      </h6>
                      <span className="absolute text-[16px] top-0 inset-e-0 z-1 font-medium text-[#2B3944]">
                        {"92%"}
                      </span>
                    </div>
                    <div className="flex h-3.5 overflow-visible text-[0.75rem] bg-[#F8F8F9] rounded-none pt-0.75 pr-0.75 pb-0.75 pl-0.75 leading-3.5 [border:1px_solid_#DBDEE1]">
                      <AnimatedElement
                        as="div"
                        effect="left"
                        delay={0.3}
                        duration={1}
                        className="flex flex-col justify-center overflow-visible text-white text-center whitespace-nowrap bg-[#2B3944] rounded-none w-[95%]! h-full"
                        data-wow-duration="1s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        aria-label="Skill level"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></AnimatedElement>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="mb-4.25">
                      <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                        <Tx ns="about">{"Consultancy"}</Tx>
                      </h6>
                      <span className="absolute text-[16px] top-0 inset-e-0 z-1 font-medium text-[#2B3944]">
                        {"90%"}
                      </span>
                    </div>
                    <div className="flex h-3.5 overflow-visible text-[0.75rem] bg-[#F8F8F9] rounded-none pt-0.75 pr-0.75 pb-0.75 pl-0.75 leading-3.5 [border:1px_solid_#DBDEE1]">
                      <AnimatedElement
                        as="div"
                        effect="left"
                        delay={0.5}
                        duration={1}
                        className="flex flex-col justify-center overflow-visible text-white text-center whitespace-nowrap bg-[#2B3944] rounded-none w-[90%]! h-full"
                        data-wow-duration="1s"
                        data-wow-delay=".5s"
                        role="progressbar"
                        aria-label="Skill level"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></AnimatedElement>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <SiteImage
                  src="/assets/images/about/about-thumb-01.webp"
                  alt="image"
                  className="align-middle max-w-full w-full h-full max-[480px]:h-auto object-cover rounded-md"
                />
                <div className="pt-8.75 max-[1199px]:pt-6.25 min-[1199px]:max-[1600px]:pt-7.5 pr-8.75 max-[1199px]:pr-6.25 min-[1199px]:max-[1600px]:pr-7.5 pb-8.75 max-[1199px]:pb-6.25 min-[1199px]:max-[1600px]:pb-7.5 pl-8.75 max-[1199px]:pl-6.25 min-[1199px]:max-[1600px]:pl-7.5 [background:#F8F8F9] rounded-md absolute max-[480px]:[position:unset] bottom-6.25 inset-e-6.25 w-70.75 max-[480px]:w-full max-[480px]:mt-7.5">
                  <div>
                    <SiteImage
                      src="/assets/images/about/about-thumb-09.webp"
                      alt="image"
                      className="align-middle max-w-full w-12.5 h-full max-[480px]:h-auto object-cover rounded-md"
                    />
                  </div>
                  <p className="mt-6.25 mb-6.25 text-[24px] max-[1600px]:text-[22px] font-medium text-[#2B3944] leading-[1.33]">
                    <Tx ns="about">{"We ensure fastest management team -work"}</Tx>
                  </p>
                  <div>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#AB052D] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      <Tx ns="about">{"Join Now"}</Tx>
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" pathClassName="group-hover/has-text:fill-[#AB052D] fill-[#AB052D]" />
                        <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" pathClassName="group-hover/has-text:fill-[#AB052D] fill-[#AB052D]" />
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
