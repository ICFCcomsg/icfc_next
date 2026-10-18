import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { AnimatedElement } from "@/components/atoms/animated-element";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";

export function FeaturesSection() {
  return (
    <section className="pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 relative z-1">
      <div className="bg-center bg-cover bg-no-repeat h-117.5 absolute w-full bottom-0 left-0 z-[-1]"></div>
      <Container>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[75%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[83.33333333%] max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="text-center! mb-11.25">
              <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                <Tx ns="industry">{"\n                        All-Industry IT Solutions\n                     "}</Tx>
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-0 mb-3.75 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                <Tx ns="industry">{"Solving IT Challenges Everywhere\n                            "}</Tx>
              </AnimatedElement>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                <Tx ns="industry">{"Position your agency as the bridge between a client's big-picture vision\n                                and achievable\n                            "}</Tx>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <AnimatedElement
              as="div"
              effect="up"
              delay={0.3}
              duration={1}
              data-wow-delay=".3s"
              data-wow-duration="1s"
              className="pt-15 max-[480px]:pt-6.25 min-[480px]:max-[991px]:pt-7.5 min-[991px]:max-[1600px]:pt-10 pb-15 max-[480px]:pb-6.25 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-10 grid grid-cols-[repeat(3,1fr)] max-[767px]:grid-cols-[repeat(1,1fr)] min-[767px]:max-[991px]:grid-cols-[repeat(2,1fr)] gap-[0_30px] items-center [background:#F8F8F9] ps-15 max-[480px]:ps-6.25 min-[480px]:max-[991px]:ps-7.5 min-[991px]:max-[1600px]:ps-10 pe-15 max-[480px]:pe-6.25 min-[480px]:max-[991px]:pe-7.5 min-[991px]:max-[1600px]:pe-10 rounded-md"
            >
              <div className="mb-3.75 pt-3.75 pb-3.75 max-[991px]:pb-0 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] max-[991px]:[border-bottom:0] gap-3.75 [border-top:1px_solid_#DBDEE1] group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-manufacturing.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Advanced Manufacturing"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-3.75 max-[991px]:mb-0 pt-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] max-[767px]:[border-bottom:0] gap-3.75 [border-top:1px_solid_#DBDEE1] group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-banking.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/services"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Financial Services "}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-3.75 pt-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 [border-top:1px_solid_#DBDEE1] group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-energy.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Energy & Natural Resources"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-3.75 max-[991px]:mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-public-sector.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Government"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[767px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-healthcare.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{" Healthcare & Life Sciences "}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[767px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-public-sector.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Government"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[991px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-banking.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Cybersecurity in Finance"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[767px]:pt-0 min-[767px]:max-[991px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-technology.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Financial Data Analytics"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-food.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Agribusiness"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-0 max-[991px]:mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-retail.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Payment Processing"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-technology.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"FinTech Solutions"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[767px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/icfc/icon-industry-banking.svg"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"Digital Banking"}</Tx>
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                      <ArrowRightIcon className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none" />
                    </span>
                  </SiteLink>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </Container>
    </section>
  );
}
