import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { AnimatedElement } from "@/components/atoms/animated-element";
import { SiteImage } from "@/components/atoms/site-image";

export function ServicesSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 [background:#2B3944]">
      <Container>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[58.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[75%] min-[992px]:max-[1200px]:w-[66.66666667%] max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="text-center! mb-11.25">
              <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                <Tx ns="about">{"Your Business Our Expertise"}</Tx>
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-0 mb-2.5 font-semibold leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                <Tx ns="about">{"Services for Your Business Growth"}</Tx>
              </AnimatedElement>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[rgba(255,255,255,0.8)] leading-7">
                <Tx ns="about">{"We deliver tailored solutions that help businesses grow, scale, and succeed in a competitive market."}</Tx>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div
              id="rs-timeline-wrapper"
              className="mt-0 mr-auto mb-0 ml-auto w-275 max-[1199px]:w-full relative max-[991px]:ps-7.5"
            >
              <div className="flex flex-col gap-25 max-[991px]:gap-7.5 min-[991px]:max-[1199px]:gap-15 min-[1199px]:max-[1366px]:gap-20">
                <div className="flex items-center gap-[30px_225px] max-[991px]:gap-0 min-[991px]:max-[1600px]:gap-[30px_130px] opacity-[0.25] max-[991px]:flex-wrap max-[991px]:flex-col-reverse">
                  <div className="pt-8.25 max-[575px]:pt-4.5 min-[575px]:max-[1600px]:pt-5.75 pb-8 max-[575px]:pb-4.25 min-[575px]:max-[1600px]:pb-5.5 bg-[#2F3E4B] ps-10 max-[575px]:ps-6.25 min-[575px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1600px]:pe-7.5 rounded-md">
                    <div className="mb-3.75 flex [align-items:start] justify-between gap-7.5 max-[575px]:gap-5 max-[575px]:flex-wrap">
                      <div>
                        <span className="mb-3.75 text-[15px] tracking-[0.02em] inline-block text-[white]">
                          {"2014"}
                        </span>
                        <h4 className="mt-0 mb-0 font-medium leading-[1.33] text-[#FFFFFF] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                          <Tx ns="about">{"Founded in Singapore"}</Tx>
                        </h4>
                      </div>
                      <div>
                        <span className="text-[white] tracking-[1.2px] text-[40px] max-[575px]:text-[35px] font-bold leading-[0.95]">
                          {"01"}
                        </span>
                      </div>
                    </div>
                    <p className="mt-0 mb-0 text-[20px] max-[575px]:text-[18px] [font-weight:normal] text-[white] leading-normal italic">
                      <Tx ns="about">{"We help businesses establish a strong foundation with strategic planning, branding, and market entry solutions."}</Tx>
                    </p>
                  </div>
                  <div className="min-w-111.75 max-[991px]:min-w-full min-[991px]:max-[1199px]:min-w-100">
                    <SiteImage
                      src="/assets/images/services/services-thumb-36.webp"
                      alt="image"
                      className="align-middle max-w-full w-full rounded-[137px] max-[991px]:rounded-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[30px_225px] max-[991px]:gap-0 min-[991px]:max-[1600px]:gap-[30px_130px] opacity-[0.25] max-[991px]:flex-wrap">
                  <div className="min-w-111.75 max-[991px]:min-w-full min-[991px]:max-[1199px]:min-w-100">
                    <SiteImage
                      src="/assets/images/services/services-thumb-35.webp"
                      alt="image"
                      className="align-middle max-w-full w-full rounded-[137px] max-[991px]:rounded-none"
                    />
                  </div>
                  <div className="pt-8.25 max-[575px]:pt-4.5 min-[575px]:max-[1600px]:pt-5.75 pb-8 max-[575px]:pb-4.25 min-[575px]:max-[1600px]:pb-5.5 bg-[#2F3E4B] ps-10 max-[575px]:ps-6.25 min-[575px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1600px]:pe-7.5 rounded-md">
                    <div className="mb-3.75 flex [align-items:start] justify-between gap-7.5 max-[575px]:gap-5 max-[575px]:flex-wrap">
                      <div>
                        <span className="mb-3.75 text-[15px] tracking-[0.02em] inline-block text-[white]">
                          {"2016 - 2019"}
                        </span>
                        <h4 className="mt-0 mb-0 font-medium leading-[1.33] text-[#FFFFFF] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                          <Tx ns="about">{"ISO Management Systems"}</Tx>
                        </h4>
                      </div>
                      <div>
                        <span className="text-[white] tracking-[1.2px] text-[40px] max-[575px]:text-[35px] font-bold leading-[0.95]">
                          {"02"}
                        </span>
                      </div>
                    </div>
                    <p className="mt-0 mb-0 text-[20px] max-[575px]:text-[18px] [font-weight:normal] text-[white] leading-normal italic">
                      <Tx ns="about">{"Our expert strategies drive business growth by improving operations, increasing efficiency, and maximizing ROI."}</Tx>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[30px_225px] max-[991px]:gap-0 min-[991px]:max-[1600px]:gap-[30px_130px] opacity-[0.25] max-[991px]:flex-wrap max-[991px]:flex-col-reverse">
                  <div className="pt-8.25 max-[575px]:pt-4.5 min-[575px]:max-[1600px]:pt-5.75 pb-8 max-[575px]:pb-4.25 min-[575px]:max-[1600px]:pb-5.5 bg-[#2F3E4B] ps-10 max-[575px]:ps-6.25 min-[575px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1600px]:pe-7.5 rounded-md">
                    <div className="mb-3.75 flex [align-items:start] justify-between gap-7.5 max-[575px]:gap-5 max-[575px]:flex-wrap">
                      <div>
                        <span className="mb-3.75 text-[15px] tracking-[0.02em] inline-block text-[white]">
                          {"2019 - 2022"}
                        </span>
                        <h4 className="mt-0 mb-0 font-medium leading-[1.33] text-[#FFFFFF] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                          <Tx ns="about">{"Cybersecurity & Data Protection"}</Tx>
                        </h4>
                      </div>
                      <div>
                        <span className="text-[white] tracking-[1.2px] text-[40px] max-[575px]:text-[35px] font-bold leading-[0.95]">
                          {"03"}
                        </span>
                      </div>
                    </div>
                    <p className="mt-0 mb-0 text-[20px] max-[575px]:text-[18px] [font-weight:normal] text-[white] leading-normal italic">
                      <Tx ns="about">{"We provide smart financial solutions, investment planning, and risk assessment to ensure long-term stability."}</Tx>
                    </p>
                  </div>
                  <div className="min-w-111.75 max-[991px]:min-w-full min-[991px]:max-[1199px]:min-w-100">
                    <SiteImage
                      src="/assets/images/services/services-thumb-34.webp"
                      alt="image"
                      className="align-middle max-w-full w-full rounded-[137px] max-[991px]:rounded-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[30px_225px] max-[991px]:gap-0 min-[991px]:max-[1600px]:gap-[30px_130px] opacity-[0.25] max-[991px]:flex-wrap">
                  <div className="min-w-111.75 max-[991px]:min-w-full min-[991px]:max-[1199px]:min-w-100">
                    <SiteImage
                      src="/assets/images/services/services-thumb-33.webp"
                      alt="image"
                      className="align-middle max-w-full w-full rounded-[137px] max-[991px]:rounded-none"
                    />
                  </div>
                  <div className="pt-8.25 max-[575px]:pt-4.5 min-[575px]:max-[1600px]:pt-5.75 pb-8 max-[575px]:pb-4.25 min-[575px]:max-[1600px]:pb-5.5 bg-[#2F3E4B] ps-10 max-[575px]:ps-6.25 min-[575px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1600px]:pe-7.5 rounded-md">
                    <div className="mb-3.75 flex [align-items:start] justify-between gap-7.5 max-[575px]:gap-5 max-[575px]:flex-wrap">
                      <div>
                        <span className="mb-3.75 text-[15px] tracking-[0.02em] inline-block text-[white]">
                          {"2022 - 2026"}
                        </span>
                        <h4 className="mt-0 mb-0 font-medium leading-[1.33] text-[#FFFFFF] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                          <Tx ns="about">{"Risk Management"}</Tx>
                        </h4>
                      </div>
                      <div>
                        <span className="text-[white] tracking-[1.2px] text-[40px] max-[575px]:text-[35px] font-bold leading-[0.95]">
                          {"04"}
                        </span>
                      </div>
                    </div>
                    <p className="mt-0 mb-0 text-[20px] max-[575px]:text-[18px] [font-weight:normal] text-[white] leading-normal italic">
                      <Tx ns="about">{"We identify potential risks and implement proactive strategies to protect your business and ensure sustainable growth."}</Tx>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute w-2.5 h-full left-[50%] max-[991px]:left-0 top-0 transform-[translateX(-50%)] z-1 before:[content:''] before:[border:1px_solid_#AB052D] before:rounded-[10px] before:absolute before:inset-0 before:border-solid before:[border-width:1px_1px_1px_1px] before:border-[rgba(255,255,255,0.1)]">
                <span className="absolute left-0 top-0 w-full h-0 bg-[#AB052D] z-1 rounded-[10px]"></span>
                <span className="absolute left-[50%] top-0 transform-[translate(-50%,-50%)] w-6.25 h-6.25 rounded-full z-2 bg-[#FFFFFF] [border:3px_solid_#AB052D]"></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
