import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { AnimatedElement } from "@/components/atoms/animated-element";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";

export function IndustriesSection() {
  return (
    <section className="pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <Container>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[430px_auto] max-[991px]:grid-cols-[auto] min-[991px]:max-[1199px]:grid-cols-[300px_auto] min-[1199px]:max-[1366px]:grid-cols-[350px_auto] gap-[30px_80px] max-[1600px]:gap-[30px_30px] items-center">
              <div>
                <div>
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    <Tx ns="about">{"Build Your Industries"}</Tx>
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-2.5 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    <Tx ns="about">{"Industries we help"}</Tx>
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    <Tx ns="about">{"We support businesses in tech, retail, real estate, finance, healthcare, and more providing custom strategies that work in your world."}</Tx>
                  </p>
                </div>
                <div className="mt-10.5 max-[991px]:mt-7.5">
                  <SiteLink
                    href="/industry"
                    className="text-[#FFFFFF] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#AB052D] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] gap-2 group/btn [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    <Tx ns="about">{"View All Industries"}</Tx>
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="fill-[#FFFFFF]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="fill-[#FFFFFF]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="grid grid-cols-[repeat(2,1fr)] max-[767px]:grid-cols-[repeat(1,1fr)] gap-[0_30px]">
                <AnimatedElement
                  as="div"
                  effect="fade"
                  delay={0.1}
                  duration={1}
                  data-wow-delay=".1s"
                  className="mb-3.75 max-[767px]:mb-0 pt-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] max-[767px]:[border-bottom:0] gap-3.75 [border-top:1px_solid_#DBDEE1] group/feature-item"
                >
                  <div className="flex items-center gap-6.25">
                    <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-01.webp"
                        alt="image"
                        className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </div>
                    <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="about">{"Advanced Manufacturing"}</Tx>
                      </SiteLink>
                    </h6>
                  </div>
                  <div className="flex items-center">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </AnimatedElement>
                <AnimatedElement
                  as="div"
                  effect="fade"
                  delay={0.2}
                  duration={1}
                  data-wow-delay=".2s"
                  className="mb-3.75 pt-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 [border-top:1px_solid_#DBDEE1] group/feature-item"
                >
                  <div className="flex items-center gap-6.25">
                    <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-02.webp"
                        alt="image"
                        className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </div>
                    <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                      <SiteLink
                        href="/services"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="about">{"Financial Services "}</Tx>
                      </SiteLink>
                    </h6>
                  </div>
                  <div className="flex items-center">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </AnimatedElement>
                <AnimatedElement
                  as="div"
                  effect="fade"
                  delay={0.3}
                  duration={1}
                  data-wow-delay=".3s"
                  className="mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item"
                >
                  <div className="flex items-center gap-6.25">
                    <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-03.webp"
                        alt="image"
                        className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </div>
                    <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="about">{"Energy & Natural Resources"}</Tx>
                      </SiteLink>
                    </h6>
                  </div>
                  <div className="flex items-center">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </AnimatedElement>
                <AnimatedElement
                  as="div"
                  effect="fade"
                  delay={0.4}
                  duration={1}
                  data-wow-delay=".4s"
                  className="mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item"
                >
                  <div className="flex items-center gap-6.25">
                    <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-04.webp"
                        alt="image"
                        className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </div>
                    <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="about">{"Government"}</Tx>
                      </SiteLink>
                    </h6>
                  </div>
                  <div className="flex items-center">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </AnimatedElement>
                <AnimatedElement
                  as="div"
                  effect="fade"
                  delay={0.5}
                  duration={1}
                  data-wow-delay=".5s"
                  className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item"
                >
                  <div className="flex items-center gap-6.25">
                    <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-05.webp"
                        alt="image"
                        className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </div>
                    <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="about">{" Healthcare & Life Sciences "}</Tx>
                      </SiteLink>
                    </h6>
                  </div>
                  <div className="flex items-center">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </AnimatedElement>
                <AnimatedElement
                  as="div"
                  effect="fade"
                  delay={0.6}
                  duration={1}
                  data-wow-delay=".6s"
                  className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[767px]:pt-3.75 group/feature-item"
                >
                  <div className="flex items-center gap-6.25">
                    <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-06.webp"
                        alt="image"
                        className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </div>
                    <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[575px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="about">{"Agribusiness"}</Tx>
                      </SiteLink>
                    </h6>
                  </div>
                  <div className="flex items-center">
                    <SiteLink
                      href="/contact-us"
                      className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.5 group-hover/icon-box:transform-[translateX(150%)] group-hover/feature-item:transform-[translateX(150%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/feature-item:transform-[translateX(0%)] h-4.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/feature-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
