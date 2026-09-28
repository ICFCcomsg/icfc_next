import {
  AnimatedCounter,
  AnimatedElement,
} from "@/components/atoms/animated-element";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { ContentCarousel } from "@/components/molecules/content-carousel";
import { ContentTabs } from "@/components/molecules/content-tabs";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";
import { EmailForm } from "@/components/molecules/email-form";

export function IndexPageContent() {
  return (
    <SitePageTemplate route="index">
      <main>
        <BannerAreaSection />
        <FeatureAreaSection />
        <AboutAreaSection />
        <BrandAreaSection />
        <ServicesAreaSection />
        <WorkingAreaSection />
        <TextSlideAreaSection />
        <PortfolioAreaSection />
        <WhyChooseAreaSection />
        <FaqAreaSection />
        <FeatureAreaSection2 />
        <TeamAreaSection />
        <FeatureAreaSection3 />
        <TestimonialAreaSection />
        <CtaAreaSection />
        <BlogAreaSection />
        <ContactAreaSection />
        <VideoAreaSection />
        <CtaAreaSection2 />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section className="relative z-1 overflow-x-clip">
      <div className="bg-position-[top_center] max-[767px]:bg-position-[top_left] bg-cover bg-no-repeat absolute w-full h-full top-0 left-0 z-[-1] before:absolute before:[content:''] before:w-full before:h-full before:top-0 before:left-0 before:[background:linear-gradient(90deg,#192C3B_0%,rgba(19,30,38,0)_90.29%)] before:z-1 bg-[url('https://images.pexels.com/photos/36765718/pexels-photo-36765718.jpeg')]!"></div>
      <div className="absolute bottom-32.5 transform-[rotate(90deg)] inset-s-35 z-2 max-[1199px]:hidden">
        <AnimatedElement
          as="SiteLink"
          effect="right"
          delay={1.1}
          duration={1.3}
          data-wow-delay="1.1s"
          data-wow-duration="1.3s"
          href="#about"
          className="text-[#FFFFFF] [text-decoration:none] pt-1.75 pr-6.5 pb-1.75 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,255,255,0.15)] [background:transparent] text-[16px] inline-flex items-center justify-center rounded-[50px] font-normal relative z-1 overflow-hidden hover:[background:#AB052D] gap-2 group/btn"
        >
          {"Scroll Now\n                    "}
          <span className="overflow-hidden relative inline-flex transform-[rotate(0)] group/icon-box">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
            >
              <path
                d="M12.8787 15.8392H11.6863C11.458 11.5303 14.0517 9.27028 15.3623 8.6095L0 8.6095L0 7.28824L15.3623 7.28824C12.2169 5.51604 11.4417 2.08514 11.6879 -1.71661e-05H12.8687C12.3579 5.1427 17.617 7.28167 19.8664 7.28824V8.59723C13.3406 9.37014 12.6195 14.1959 12.8787 15.8392Z"
                fill="white"
                className="fill-[#FFFFFF]"
              ></path>
            </svg>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
            >
              <path
                d="M12.8787 15.8392H11.6863C11.458 11.5303 14.0517 9.27028 15.3623 8.6095L0 8.6095L0 7.28824L15.3623 7.28824C12.2169 5.51604 11.4417 2.08514 11.6879 -1.71661e-05H12.8687C12.3579 5.1427 17.617 7.28167 19.8664 7.28824V8.59723C13.3406 9.37014 12.6195 14.1959 12.8787 15.8392Z"
                fill="white"
                className="fill-[#FFFFFF]"
              ></path>
            </svg>
          </span>
        </AnimatedElement>
      </div>
      <div className="w-full pr-0 pl-0 mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-[50%] max-[992px]:w-full min-[992px]:max-[1400px]:w-[58.33333333%] max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="pt-27.5 max-[767px]:pt-18.75 min-[767px]:max-[991px]:pt-23.75 pb-82.5 max-[767px]:pb-20 min-[767px]:max-[991px]:pb-25 min-[991px]:max-[1199px]:pb-27.5 min-[1199px]:max-[1600px]:pb-73.75 relative z-1 ps-50 max-[1199px]:ps-3.75 min-[1199px]:max-[1600px]:ps-25 max-[1199px]:pe-3.75">
              <div>
                <AnimatedElement
                  as="span"
                  effect="up"
                  delay={0.3}
                  duration={0.5}
                  data-wow-delay=".3s"
                  data-wow-duration=".5s"
                  className="mb-3.75 text-[14px] font-medium tracking-[2.4px] uppercase text-[#FFFFFF] inline-block"
                >
                  {
                    "\n                                    ICFC PTE LTD Business Consulting\n                                "
                  }
                </AnimatedElement>
                <AnimatedElement
                  as="h1"
                  effect="up"
                  delay={0.5}
                  duration={0.7}
                  data-wow-delay=".5s"
                  data-wow-duration=".7s"
                  className="mt-0 mb-0 font-medium leading-[1.12] text-[#FFFFFF] text-[66px] max-[480px]:text-[40px] min-[480px]:max-[575px]:text-[45px] min-[575px]:max-[767px]:text-[50px] min-[767px]:max-[991px]:text-[55px] min-[991px]:max-[1600px]:text-[60px] [word-break:break-word]"
                >
                  {
                    "\n                                    Innovative\n                                    Solutions "
                  }
                  <br className="max-[480px]:hidden" />
                  {" For Lasting Impact\n                                "}
                </AnimatedElement>
                <span className="mt-9.25 mb-6.5 w-145.75 max-[767px]:w-full relative inline-block border-[rgba(255,255,255,0.15)] border-solid [border-width:0px_0px_1px_0px] after:absolute after:[content:''] after:w-36.25 after:[background:#FFFFFF] after:inset-s-0 after:h-0.5 after:top-[50%] after:transform-[translateY(-50%)]"></span>
                <AnimatedElement
                  as="p"
                  effect="up"
                  delay={0.7}
                  duration={0.9}
                  data-wow-delay=".7s"
                  data-wow-duration=".9s"
                  className="mt-0 mb-10 text-[17px] font-medium text-[rgba(255,255,255,0.8)] leading-7 tracking-[0.02em] max-w-145 max-[575px]:max-w-full"
                >
                  {
                    "we\n                                    believe\n                                    that every business is unique our approach is\n                                    never one size fits all We tailor our strategies to fit your goals hub."
                  }
                </AnimatedElement>
                <AnimatedElement
                  as="div"
                  effect="up"
                  delay={0.9}
                  duration={1.1}
                  data-wow-delay=".9s"
                  data-wow-duration="1.1s"
                >
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] gap-2 group/btn group/has-bg-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    {
                      "Free\n                                        Consultation\n                                        "
                    }
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="fill-[#2B3944] group-hover/has-bg-white:fill-[#FFFFFF]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="fill-[#2B3944] group-hover/has-bg-white:fill-[#FFFFFF]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureAreaSection() {
  return (
    <div className="-mt-82.5 max-[1199px]:mt-0 min-[1199px]:max-[1600px]:-mt-73.75 overflow-x-clip">
      <div className="w-full pr-0 pl-0 mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-end!">
          <div className="shrink-0 w-[58.33333333%] max-[1200px]:w-full min-[1200px]:max-[1400px]:w-[66.66666667%] max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <AnimatedElement
              as="div"
              effect="up"
              delay={1.3}
              duration={1.5}
              data-wow-delay="1.3s"
              data-wow-duration="1.5s"
              className="pt-12.5 max-[1600px]:pt-10 pb-15 max-[1600px]:pb-10 relative z-1 [background:#2B3944] ps-15 max-[991px]:ps-3.75 min-[991px]:max-[1600px]:ps-7.5 pe-15 max-[991px]:pe-3.75 min-[991px]:max-[1600px]:pe-7.5 grid grid-cols-[487px_auto] max-[991px]:grid-cols-[repeat(1,1fr)] min-[991px]:max-[1199px]:grid-cols-[repeat(2,1fr)] min-[1199px]:max-[1700px]:grid-cols-[390px_auto] gap-[30px_100px] max-[1366px]:gap-[30px_40px] min-[1366px]:max-[1800px]:gap-[30px_50px] rounded-[6px_0_0_0] max-[1199px]:rounded-none"
            >
              <div className="flex flex-col">
                <SiteLink
                  href="/services"
                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] flex items-center justify-between relative flex-1 overflow-hidden gap-7.5 max-[480px]:gap-3.75 flex-wrap max-[991px]:pt-3.75 max-[991px]:pb-3.75 before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.2)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 hover:flex-[1.15] hover:after:w-full hover:after:inset-s-0 group/feature-info-list-item [transition:all_0.3s_ease-in-out] motion-reduce:transition-none after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none"
                >
                  <div className="flex items-center gap-[30px_40px] max-[575px]:gap-[30px_20px] min-[575px]:max-[767px]:gap-[30px_30px]">
                    <span className="group-hover/feature-info-list-item:text-[#FFFFFF] font-medium text-[rgba(255,255,255,0.3)] text-[20px] max-[575px]:text-[17px] tracking-[0.01em] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                      {"01"}
                    </span>
                    <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[rgba(255,255,255,0.3)] text-[20px] max-[480px]:text-[17px] min-[480px]:max-[575px]:text-[18px] [word-break:break-word] group-hover/feature-info-list-item:text-[#FFFFFF] tracking-[0.01em] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                      {
                        "\n                                            Professional Training Programs\n                                        "
                      }
                    </h6>
                  </div>
                  <div>
                    <div className="pt-[unset] pr-[unset] pb-[unset] pl-[unset] text-[18px] inline-flex items-center justify-center h-7.5 rounded-xs font-medium relative z-1 overflow-hidden [background:transparent] gap-2.5 hover:[background:transparent] group/has-icon [transition:all_0.3s_linear] motion-reduce:transition-none">
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/has-icon:transform-[translateX(150%)] group-hover/feature-info-list-item:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <g>
                            <path
                              d="M17.532 12.6445L1.33082 12.6445L1.33081 9.98291L17.531 9.98196L10.3923 2.84325L12.2746 0.960927L22.6274 11.3137L12.2746 21.6665L10.3923 19.7842L17.532 12.6445Z"
                              className="fill-[rgba(255,255,255,0.3)] group-hover/feature-info-list-item:fill-[#AB052D]"
                            ></path>
                          </g>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/has-icon:transform-[translateX(0%)] group-hover/feature-info-list-item:transform-[translateX(0%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <g>
                            <path
                              d="M17.532 12.6445L1.33082 12.6445L1.33081 9.98291L17.531 9.98196L10.3923 2.84325L12.2746 0.960927L22.6274 11.3137L12.2746 21.6665L10.3923 19.7842L17.532 12.6445Z"
                              className="fill-[rgba(255,255,255,0.3)] group-hover/feature-info-list-item:fill-[#AB052D]"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </SiteLink>
                <SiteLink
                  href="/services"
                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] flex items-center justify-between relative flex-1 overflow-hidden gap-7.5 max-[480px]:gap-3.75 flex-wrap max-[991px]:pt-3.75 max-[991px]:pb-3.75 before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.2)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 hover:flex-[1.15] hover:after:w-full hover:after:inset-s-0 group/feature-info-list-item [transition:all_0.3s_ease-in-out] motion-reduce:transition-none after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none"
                >
                  <div className="flex items-center gap-[30px_40px] max-[575px]:gap-[30px_20px] min-[575px]:max-[767px]:gap-[30px_30px]">
                    <span className="group-hover/feature-info-list-item:text-[#FFFFFF] font-medium text-[rgba(255,255,255,0.3)] text-[20px] max-[575px]:text-[17px] tracking-[0.01em] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                      {"02"}
                    </span>
                    <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[rgba(255,255,255,0.3)] text-[20px] max-[480px]:text-[17px] min-[480px]:max-[575px]:text-[18px] [word-break:break-word] group-hover/feature-info-list-item:text-[#FFFFFF] tracking-[0.01em] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                      {
                        "\n                                            Consultancy Services\n                                        "
                      }
                    </h6>
                  </div>
                  <div>
                    <div className="pt-[unset] pr-[unset] pb-[unset] pl-[unset] text-[18px] inline-flex items-center justify-center h-7.5 rounded-xs font-medium relative z-1 overflow-hidden [background:transparent] gap-2.5 hover:[background:transparent] group/has-icon [transition:all_0.3s_linear] motion-reduce:transition-none">
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/has-icon:transform-[translateX(150%)] group-hover/feature-info-list-item:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <g>
                            <path
                              d="M17.532 12.6445L1.33082 12.6445L1.33081 9.98291L17.531 9.98196L10.3923 2.84325L12.2746 0.960927L22.6274 11.3137L12.2746 21.6665L10.3923 19.7842L17.532 12.6445Z"
                              className="fill-[rgba(255,255,255,0.3)] group-hover/feature-info-list-item:fill-[#AB052D]"
                            ></path>
                          </g>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/has-icon:transform-[translateX(0%)] group-hover/feature-info-list-item:transform-[translateX(0%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <g>
                            <path
                              d="M17.532 12.6445L1.33082 12.6445L1.33081 9.98291L17.531 9.98196L10.3923 2.84325L12.2746 0.960927L22.6274 11.3137L12.2746 21.6665L10.3923 19.7842L17.532 12.6445Z"
                              className="fill-[rgba(255,255,255,0.3)] group-hover/feature-info-list-item:fill-[#AB052D]"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </SiteLink>
                <SiteLink
                  href="/services"
                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] flex items-center justify-between relative flex-1 overflow-hidden gap-7.5 max-[480px]:gap-3.75 flex-wrap max-[991px]:pt-3.75 max-[991px]:pb-3.75 before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.2)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 hover:flex-[1.15] hover:after:w-full hover:after:inset-s-0 group/feature-info-list-item [transition:all_0.3s_ease-in-out] motion-reduce:transition-none after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none"
                >
                  <div className="flex items-center gap-[30px_40px] max-[575px]:gap-[30px_20px] min-[575px]:max-[767px]:gap-[30px_30px]">
                    <span className="group-hover/feature-info-list-item:text-[#FFFFFF] font-medium text-[rgba(255,255,255,0.3)] text-[20px] max-[575px]:text-[17px] tracking-[0.01em] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                      {"03"}
                    </span>
                    <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[rgba(255,255,255,0.3)] text-[20px] max-[480px]:text-[17px] min-[480px]:max-[575px]:text-[18px] [word-break:break-word] group-hover/feature-info-list-item:text-[#FFFFFF] tracking-[0.01em] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                      {
                        "\n                                            Audit & Compliance Solutions\n                                        "
                      }
                    </h6>
                  </div>
                  <div>
                    <div className="pt-[unset] pr-[unset] pb-[unset] pl-[unset] text-[18px] inline-flex items-center justify-center h-7.5 rounded-xs font-medium relative z-1 overflow-hidden [background:transparent] gap-2.5 hover:[background:transparent] group/has-icon [transition:all_0.3s_linear] motion-reduce:transition-none">
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/has-icon:transform-[translateX(150%)] group-hover/feature-info-list-item:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <g>
                            <path
                              d="M17.532 12.6445L1.33082 12.6445L1.33081 9.98291L17.531 9.98196L10.3923 2.84325L12.2746 0.960927L22.6274 11.3137L12.2746 21.6665L10.3923 19.7842L17.532 12.6445Z"
                              className="fill-[rgba(255,255,255,0.3)] group-hover/feature-info-list-item:fill-[#AB052D]"
                            ></path>
                          </g>
                        </svg>
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/has-icon:transform-[translateX(0%)] group-hover/feature-info-list-item:transform-[translateX(0%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <g>
                            <path
                              d="M17.532 12.6445L1.33082 12.6445L1.33081 9.98291L17.531 9.98196L10.3923 2.84325L12.2746 0.960927L22.6274 11.3137L12.2746 21.6665L10.3923 19.7842L17.532 12.6445Z"
                              className="fill-[rgba(255,255,255,0.3)] group-hover/feature-info-list-item:fill-[#AB052D]"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </SiteLink>
              </div>
              <div>
                <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  {
                    "Unlock Your Potential Growth With Strategic Consulting\n                                    Help"
                  }
                </h5>
                <div className="mt-10 max-[991px]:mt-7.5">
                  <div>
                    <div className="mb-1.25 flex items-center">
                      <AnimatedCounter
                        value={98}
                        className="text-[90px] max-[767px]:text-[70px] text-[#FFFFFF] font-medium leading-[0.8]"
                      />
                      <span className="text-[90px] max-[767px]:text-[70px] text-[#AB052D] font-medium leading-[0.8]">
                        {"%"}
                      </span>
                    </div>
                    <span className="text-[16px] font-medium text-[#FFFFFF]">
                      {"Business Growth Rate"}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutAreaSection() {
  return (
    <section
      id="about"
      className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 overflow-x-clip"
    >
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="grid grid-cols-[auto_475px] max-[991px]:grid-cols-[auto] min-[991px]:max-[1199px]:grid-cols-[auto_340px] min-[1199px]:max-[1600px]:grid-cols-[auto_430px] gap-[30px_50px] max-[1199px]:gap-[30px_30px]">
              <div>
                <div>
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    {
                      "\n                                        Welcome TO ICFC PTE LTD\n                                    "
                    }
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {
                      "Driving innovation\n                                        through\n                                        strategic consulting"
                    }
                  </AnimatedElement>
                </div>
                <div className="mt-5 flex items-center max-[1800px]:[align-items:start] max-[767px]:flex-wrap max-[767px]:gap-5">
                  <div className="pe-16.25 max-[767px]:pe-0 min-[767px]:max-[1199px]:pe-7.5 min-[1199px]:max-[1600px]:pe-10 me-16.25 max-[767px]:me-0 min-[767px]:max-[1199px]:me-7.5 min-[1199px]:max-[1600px]:me-10 relative before:absolute before:[content:''] max-[767px]:before:content-none before:w-full before:h-[calc(100%-29px)] before:top-4.75 before:inset-e-0 before:[border-inline-end:1px_solid_#DBDEE1]">
                    <div>
                      <div className="flex [align-items:start]">
                        <AnimatedCounter
                          value={12}
                          className="text-[225px] max-[575px]:text-[70px] min-[575px]:max-[767px]:text-[80px] min-[767px]:max-[991px]:text-[90px] min-[991px]:max-[1199px]:text-[100px] min-[1199px]:max-[1366px]:text-[160px] min-[1366px]:max-[1600px]:text-[180px] text-[#2B3944] font-normal leading-[0.8]"
                        />
                        <span className="text-[35px] font-normal text-[#2B3944]">
                          {"+"}
                        </span>
                      </div>
                      <span className="text-[22px] max-[1199px]:text-[18px] text-[#2B3944] font-medium ms-7.5 max-[1600px]:ms-0 inline-block max-[767px]:mt-1.25">
                        {"Years Of Experience"}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="mt-0 mb-10 max-[1366px]:mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7 max-w-81 max-[767px]:max-w-full">
                      {
                        "We believe that every business is unique our approach\n                                            is never\n                                            one\n                                            size fits all. We tailor our strategies to fit your goals hub is culture,\n                                            and industry\n                                            dynamics."
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/about"
                        className="text-[#AB052D] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#AB052D] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#AB052D] gap-2 group/btn group/border-red [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        {
                          "Explore More\n                                                "
                        }
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
                              className="fill-[#AB052D] group-hover/border-red:fill-[#FFFFFF]"
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
                              className="fill-[#AB052D] group-hover/border-red:fill-[#FFFFFF]"
                            ></path>
                          </svg>
                        </span>
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <AnimatedElement
                as="div"
                effect="reveal-right"
                delay={0}
                duration={1}
                data-dir="reveal_right"
                className="overflow-hidden visible"
              >
                <SiteImage
                  decoding="async"
                  src="/assets/images/about/about-thumb-01.webp"
                  alt="image"
                  className="align-middle max-w-full w-full rounded-md h-full object-cover object-[top_center]"
                />
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandAreaSection() {
  return (
    <div className="overflow-x-clip">
      <div className="w-full pr-0 pl-0 mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 [border-top:1px_solid_#DBDEE1]">
            <ContentCarousel items={6}>
              <div>
                <AnimatedElement
                  as="div"
                  effect="none"
                  className="h-30 flex items-center justify-center [border-inline-start:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1] group/brand-item"
                >
                  <div className="relative overflow-hidden">
                    <AnimatedElement
                      as="SiteImage"
                      effect="logo"
                      src="/assets/images/brand/brand-thumb-01.webp"
                      alt="image"
                      className="align-middle max-w-full filter-[brightness(100%)_contrast(100%)_saturate(0%)_blur(0px)_hue-rotate(0deg)] opacity-[0.7] w-45 max-[1366px]:w-37.5 group-hover/brand-item:filter-[brightness(100%)_contrast(150%)_saturate(100%)_blur(0px)_hue-rotate(0deg)] group-hover/brand-item:opacity-[1]"
                    />
                  </div>
                </AnimatedElement>
              </div>
              <div>
                <AnimatedElement
                  as="div"
                  effect="none"
                  className="h-30 flex items-center justify-center [border-inline-start:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1] group/brand-item"
                >
                  <div className="relative overflow-hidden">
                    <AnimatedElement
                      as="SiteImage"
                      effect="logo"
                      src="/assets/images/brand/brand-thumb-02.webp"
                      alt="image"
                      className="align-middle max-w-full filter-[brightness(100%)_contrast(100%)_saturate(0%)_blur(0px)_hue-rotate(0deg)] opacity-[0.7] w-45 max-[1366px]:w-37.5 group-hover/brand-item:filter-[brightness(100%)_contrast(150%)_saturate(100%)_blur(0px)_hue-rotate(0deg)] group-hover/brand-item:opacity-[1]"
                    />
                  </div>
                </AnimatedElement>
              </div>
              <div>
                <AnimatedElement
                  as="div"
                  effect="none"
                  className="h-30 flex items-center justify-center [border-inline-start:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1] group/brand-item"
                >
                  <div className="relative overflow-hidden">
                    <AnimatedElement
                      as="SiteImage"
                      effect="logo"
                      src="/assets/images/brand/brand-thumb-03.webp"
                      alt="image"
                      className="align-middle max-w-full filter-[brightness(100%)_contrast(100%)_saturate(0%)_blur(0px)_hue-rotate(0deg)] opacity-[0.7] w-45 max-[1366px]:w-37.5 group-hover/brand-item:filter-[brightness(100%)_contrast(150%)_saturate(100%)_blur(0px)_hue-rotate(0deg)] group-hover/brand-item:opacity-[1]"
                    />
                  </div>
                </AnimatedElement>
              </div>
              <div>
                <AnimatedElement
                  as="div"
                  effect="none"
                  className="h-30 flex items-center justify-center [border-inline-start:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1] group/brand-item"
                >
                  <div className="relative overflow-hidden">
                    <AnimatedElement
                      as="SiteImage"
                      effect="logo"
                      src="/assets/images/brand/brand-thumb-04.webp"
                      alt="image"
                      className="align-middle max-w-full filter-[brightness(100%)_contrast(100%)_saturate(0%)_blur(0px)_hue-rotate(0deg)] opacity-[0.7] w-45 max-[1366px]:w-37.5 group-hover/brand-item:filter-[brightness(100%)_contrast(150%)_saturate(100%)_blur(0px)_hue-rotate(0deg)] group-hover/brand-item:opacity-[1]"
                    />
                  </div>
                </AnimatedElement>
              </div>
              <div>
                <AnimatedElement
                  as="div"
                  effect="none"
                  className="h-30 flex items-center justify-center [border-inline-start:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1] group/brand-item"
                >
                  <div className="relative overflow-hidden">
                    <AnimatedElement
                      as="SiteImage"
                      effect="logo"
                      src="/assets/images/brand/brand-thumb-05.webp"
                      alt="image"
                      className="align-middle max-w-full filter-[brightness(100%)_contrast(100%)_saturate(0%)_blur(0px)_hue-rotate(0deg)] opacity-[0.7] w-45 max-[1366px]:w-37.5 group-hover/brand-item:filter-[brightness(100%)_contrast(150%)_saturate(100%)_blur(0px)_hue-rotate(0deg)] group-hover/brand-item:opacity-[1]"
                    />
                  </div>
                </AnimatedElement>
              </div>
              <div>
                <AnimatedElement
                  as="div"
                  effect="none"
                  className="h-30 flex items-center justify-center [border-inline-start:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1] group/brand-item"
                >
                  <div className="relative overflow-hidden">
                    <AnimatedElement
                      as="SiteImage"
                      effect="logo"
                      src="/assets/images/brand/brand-thumb-06.webp"
                      alt="image"
                      className="align-middle max-w-full filter-[brightness(100%)_contrast(100%)_saturate(0%)_blur(0px)_hue-rotate(0deg)] opacity-[0.7] w-45 max-[1366px]:w-37.5 group-hover/brand-item:filter-[brightness(100%)_contrast(150%)_saturate(100%)_blur(0px)_hue-rotate(0deg)] group-hover/brand-item:opacity-[1]"
                    />
                  </div>
                </AnimatedElement>
              </div>
              <div>
                <AnimatedElement
                  as="div"
                  effect="none"
                  className="h-30 flex items-center justify-center [border-inline-start:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1] group/brand-item"
                >
                  <div className="relative overflow-hidden">
                    <AnimatedElement
                      as="SiteImage"
                      effect="logo"
                      src="/assets/images/brand/brand-thumb-01.webp"
                      alt="image"
                      className="align-middle max-w-full filter-[brightness(100%)_contrast(100%)_saturate(0%)_blur(0px)_hue-rotate(0deg)] opacity-[0.7] w-45 max-[1366px]:w-37.5 group-hover/brand-item:filter-[brightness(100%)_contrast(150%)_saturate(100%)_blur(0px)_hue-rotate(0deg)] group-hover/brand-item:opacity-[1]"
                    />
                  </div>
                </AnimatedElement>
              </div>
            </ContentCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesAreaSection() {
  return (
    <section className="mb-41.25 pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 relative z-1 overflow-x-clip">
      <div className="bg-center bg-cover bg-no-repeat absolute w-full h-full top-0 left-0 z-[-1] bg-[url('/assets/bg/services-bg-thumb-01.webp')]!"></div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[75%] max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="text-center! mb-11.25">
              <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                {
                  "\n                                Explore Our Core Feature\n                            "
                }
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-0 mb-0 font-semibold leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                {
                  "Revolutionize your\n                                operations\n                                with our digital expertise"
                }
              </AnimatedElement>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="-mb-41.25 grid grid-cols-[repeat(3,1fr)] max-[767px]:grid-cols-[repeat(1,1fr)] min-[767px]:max-[991px]:grid-cols-[repeat(2,1fr)] rounded-md max-[991px]:gap-7.5">
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
                data-wow-duration="1s"
                className="pt-11.25 max-[1600px]:pt-6.25 pb-12.5 max-[1600px]:pb-7.5 ps-10 max-[1600px]:ps-7.5 pe-10 max-[1600px]:pe-7.5 relative z-1 overflow-hidden [background:#2B3944] group/services-item"
              >
                <div className="bg-position-[-621px_654px] bg-cover bg-no-repeat group-hover/services-item:opacity-[1] group-hover/services-item:bg-bottom-left group-hover/services-item:pointer-events-auto absolute w-77 h-61 bottom-0 inset-s-0 opacity-[0] pointer-events-none z-1 bg-[url('/assets/bg/services-bg-thumb-01.webp')]! [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"></div>
                <div className="pb-2.5 text-[24px] text-[#FFFFFF] font-medium [border-bottom:1px_solid_#FFFFFF] inline-flex leading-[1.16] tracking-[1.5px]">
                  {
                    "\n                                    01\n                                "
                  }
                </div>
                <h4 className="mt-10 max-[767px]:mt-7.5 mb-3.75 font-semibold leading-[1.33] text-[#FFFFFF] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Industries"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[rgba(255,255,255,0.8)] leading-7">
                  {
                    " Helping retailers and online businesses to increase sales\n                                    improve\n                                    supply chains. "
                  }
                </p>
                <div className="mb-8.75">
                  <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 flex flex-wrap gap-2.5">
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Government "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Manufacturing "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Health "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Energy & Utilities "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Banking "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Retail "}
                    </li>
                  </ul>
                </div>
                <div>
                  <SiteLink
                    href="/industry"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-1 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-none font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 border-solid [border-width:0px_0px_1px_0px] border-[rgba(255,255,255,0.31)] group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    {
                      "Explore All\n                                        Industries\n                                        "
                    }
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] group-hover/services-item:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:fill-[#FFFFFF] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/services-item:transform-[translateX(0%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:fill-[#FFFFFF] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.5}
                duration={1}
                data-wow-delay=".5s"
                data-wow-duration="1s"
                className="pt-11.25 max-[1600px]:pt-6.25 pb-12.5 max-[1600px]:pb-7.5 ps-10 max-[1600px]:ps-7.5 pe-10 max-[1600px]:pe-7.5 relative z-1 overflow-hidden [background:#AB052D] hover:[background:#9D0026] group/services-item"
              >
                <div className="bg-position-[-621px_654px] bg-cover bg-no-repeat group-hover/services-item:opacity-[1] group-hover/services-item:bg-bottom-left group-hover/services-item:pointer-events-auto hidden absolute w-77 h-61 bottom-0 inset-s-0 opacity-[0] pointer-events-none z-1 bg-[url('/assets/images/services/services-thumb-07.webp')]! [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"></div>
                <div className="pb-2.5 text-[24px] text-[#FFFFFF] font-medium [border-bottom:1px_solid_#FFFFFF] inline-flex leading-[1.16] tracking-[1.5px]">
                  {
                    "\n                                    02\n                                "
                  }
                </div>
                <h4 className="mt-10 max-[767px]:mt-7.5 mb-3.75 font-semibold leading-[1.33] text-[#FFFFFF] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {" Services"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[rgba(255,255,255,0.8)] leading-7">
                  {
                    " Our experts provide financial planning ensure budgeting,\n                                    tax\n                                    advisory, cost optimization. "
                  }
                </p>
                <div className="mb-8.75">
                  <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 flex flex-wrap gap-2.5">
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 border-[rgba(255,255,255,0.14)] list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Consulting "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 border-[rgba(255,255,255,0.14)] list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Human Resource "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 border-[rgba(255,255,255,0.14)] list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Operations "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 border-[rgba(255,255,255,0.14)] list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Marketing "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 border-[rgba(255,255,255,0.14)] list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Financial "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 border-[rgba(255,255,255,0.14)] list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Technology "}
                    </li>
                  </ul>
                </div>
                <div>
                  <SiteLink
                    href="/services"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-1 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-none font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 border-solid [border-width:0px_0px_1px_0px] border-[rgba(255,255,255,0.31)] group/btn group/has-text group/is-white group/has-icon [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    {
                      "Explore All\n                                        Services\n                                        "
                    }
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] group-hover/services-item:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:fill-[#FFFFFF] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/has-icon:fill-[#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/services-item:transform-[translateX(0%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:fill-[#FFFFFF] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/has-icon:fill-[#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.7}
                duration={1}
                data-wow-delay=".7s"
                data-wow-duration="1s"
                className="pt-11.25 max-[1600px]:pt-6.25 pb-12.5 max-[1600px]:pb-7.5 ps-10 max-[1600px]:ps-7.5 pe-10 max-[1600px]:pe-7.5 relative z-1 overflow-hidden [background:#2B3944] group/services-item group/item-three"
              >
                <div className="bg-position-[800px_800px] bg-cover bg-no-repeat group-hover/services-item:opacity-[1] group-hover/services-item:bg-bottom-left group-hover/services-item:pointer-events-auto group-hover/item-three:bg-position-[bottom_right] inset-e-0 [inset-inline-start:auto] absolute w-77 h-61 bottom-0 opacity-[0] pointer-events-none z-1 bg-[url('/assets/images/services/services-thumb-08.webp')]! [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"></div>
                <div className="pb-2.5 text-[24px] text-[#FFFFFF] font-medium [border-bottom:1px_solid_#FFFFFF] inline-flex leading-[1.16] tracking-[1.5px]">
                  {
                    "\n                                    03\n                                "
                  }
                </div>
                <h4 className="mt-10 max-[767px]:mt-7.5 mb-3.75 font-semibold leading-[1.33] text-[#FFFFFF] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  {"Solutions"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[rgba(255,255,255,0.8)] leading-7">
                  {
                    " We believe that every business is unique our approach is\n                                    never\n                                    one size fits all. "
                  }
                </p>
                <div className="mb-8.75">
                  <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 flex flex-wrap gap-2.5">
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Strategy "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Growth "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Process "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Sales "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Training "}
                    </li>
                    <li className="pt-0 pr-2.5 pb-0 pl-2.5 list-none text-[14px] text-[#FFFFFF] font-medium [border:1px_solid_rgba(255,255,255,0.1)] rounded-[50px] flex items-center justify-center">
                      {" Transformation "}
                    </li>
                  </ul>
                </div>
                <div>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-1 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-none font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 border-solid [border-width:0px_0px_1px_0px] border-[rgba(255,255,255,0.31)] group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    {
                      "Explore All Solutions\n                                        "
                    }
                    <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] group-hover/services-item:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:fill-[#FFFFFF] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/services-item:transform-[translateX(0%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:fill-[#FFFFFF] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
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
    </section>
  );
}

function WorkingAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 overflow-x-clip">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[418px_auto] max-[991px]:grid-cols-[auto] min-[991px]:max-[1600px]:grid-cols-[370px_auto] gap-[30px_75px] max-[1600px]:gap-[30px_30px]">
              <AnimatedElement
                as="div"
                effect="reveal-left"
                delay={0}
                duration={1}
                data-dir="left"
                className="overflow-hidden visible max-[991px]:relative min-[991px]:max-[1199px]:sticky max-[991px]:top-[unset] min-[991px]:max-[1199px]:top-27.5 max-[991px]:[align-self:unset] min-[991px]:max-[1199px]:self-start"
              >
                <SiteImage
                  decoding="async"
                  src="/assets/images/work/working-thumb-01.webp"
                  alt="image"
                  className="align-middle max-w-full w-full rounded-md h-full max-[1199px]:h-[unset] object-cover"
                />
              </AnimatedElement>
              <div>
                <div className="mb-11.25">
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    {
                      "\n                                        Easy step to get success\n                                    "
                    }
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {
                      "Transforming challenges\n                                        into\n                                        opportunities for growth"
                    }
                  </AnimatedElement>
                </div>
                <div className="grid grid-cols-[repeat(2,1fr)] max-[1199px]:grid-cols-[repeat(1,1fr)] gap-[0_50px] max-[1199px]:gap-[0_30px]">
                  <AnimatedElement
                    as="div"
                    effect="fade"
                    delay={0.1}
                    duration={1}
                    data-wow-delay=".1s"
                    data-wow-duration="1s"
                    className="mb-10 max-[1199px]:mb-7.5 pb-8.25 max-[1199px]:pb-6.25 flex gap-7.5 relative max-[480px]:flex-wrap after:hover:w-full after:hover:inset-s-0 before:absolute before:[content:''] before:w-full before:h-px before:[background:#DBDEE1] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none"
                  >
                    <div className="w-17.5 h-17.5 min-w-17.5 [background:#F8F8F9] flex items-center justify-center">
                      <AnimatedElement
                        as="svg"
                        effect="skew"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 36 42"
                        className="align-middle w-10 h-10"
                      >
                        <path
                          d="M32.8483 25.1542V15.1923C34.4425 14.944 35.6671 13.5612 35.6671 11.8984C35.6671 10.0602 34.1718 8.56484 32.3327 8.56484C31.286 8.56484 30.3518 9.04953 29.74 9.80664L21.1101 4.82313C21.2545 4.45016 21.3344 4.04625 21.3344 3.62344C21.3344 1.78437 19.8382 0.289062 18 0.289062C16.1618 0.289062 14.6657 1.78438 14.6657 3.62258C14.6657 4.04539 14.7456 4.45016 14.89 4.82227L6.26012 9.80492C5.64824 9.04867 4.71324 8.56312 3.66738 8.56312C1.82918 8.56312 0.333008 10.0584 0.333008 11.8966C0.333008 13.5595 1.55676 14.9423 3.15176 15.1906V25.1525C1.55762 25.4009 0.333008 26.7836 0.333008 28.4465C0.333008 30.2847 1.82832 31.7809 3.66738 31.7809C4.7141 31.7809 5.64824 31.2962 6.26012 30.5391L12.2182 33.9783V36.1319H12.0953C11.1843 36.1319 10.4436 36.8727 10.4436 37.7836V38.4041H9.3573C9.07285 38.4041 8.84168 38.6352 8.84168 38.9197V41.1953C8.84168 41.4798 9.07285 41.7109 9.3573 41.7109H26.4382C26.7227 41.7109 26.9539 41.4798 26.9539 41.1953V38.9223C26.9539 38.6378 26.7227 38.4066 26.4382 38.4066H25.352V37.7862C25.352 36.8812 24.6207 36.1448 23.7183 36.1353V34.0178L29.7408 30.5408C30.3527 31.297 31.2877 31.7826 32.3336 31.7826C34.1718 31.7826 35.6679 30.2873 35.6679 28.4482C35.6671 26.7853 34.4425 25.4026 32.8483 25.1542ZM32.3327 9.59523C33.602 9.59523 34.6358 10.6282 34.6358 11.8975C34.6358 13.1677 33.6029 14.2006 32.3327 14.2006C31.0625 14.2006 30.0296 13.1677 30.0296 11.8975C30.0296 10.6282 31.0634 9.59523 32.3327 9.59523ZM18 1.32031C19.2693 1.32031 20.3032 2.35328 20.3032 3.62258C20.3032 4.89273 19.2702 5.9257 18 5.9257C16.7299 5.9257 15.6969 4.89273 15.6969 3.62258C15.6969 2.35328 16.7307 1.32031 18 1.32031ZM1.36426 11.8984C1.36426 10.6291 2.39723 9.59609 3.66738 9.59609C4.93668 9.59609 5.97051 10.6291 5.97051 11.8984C5.97051 13.1685 4.93754 14.2015 3.66738 14.2015C2.39723 14.2006 1.36426 13.1677 1.36426 11.8984ZM3.66738 30.7505C2.39723 30.7505 1.36426 29.7175 1.36426 28.4473C1.36426 27.1772 2.39723 26.1442 3.66738 26.1442C4.93668 26.1442 5.97051 27.1772 5.97051 28.4473C5.97051 29.7175 4.93668 30.7505 3.66738 30.7505ZM12.2577 30.9868L11.0013 29.7304C10.5759 29.305 10.3516 28.8023 10.3155 28.1955L10.0568 23.8007C10.0646 18.8361 14.1698 14.4842 18.8491 14.4842C20.8179 14.4842 22.7223 15.1425 24.2657 16.3465L22.7438 18.1795L21.5596 17.1715C21.343 16.9867 21.0173 17.0134 20.8325 17.2299C20.6478 17.4465 20.6744 17.7722 20.891 17.957L25.2609 21.6763C25.8229 22.1541 26.1134 22.8253 26.1263 23.6709C26.1375 24.4427 25.8736 25.1138 25.3417 25.6647C25.3047 25.7034 25.2704 25.7171 25.2171 25.7137C25.1638 25.7102 25.1311 25.6939 25.0985 25.6509L24.087 24.3352C23.8472 24.0233 23.4983 23.848 23.1047 23.8394L18.2733 23.744C17.8479 23.7354 17.5016 23.3822 17.5016 22.9568V22.4463C17.5016 22.1619 17.2704 21.9307 16.986 21.9307C16.7015 21.9307 16.4704 22.1619 16.4704 22.4463V22.9568C16.4704 23.9399 17.2704 24.7555 18.2527 24.7752L19.705 24.8036V27.8183C18.6377 27.2743 17.4062 26.9538 16.0003 26.8515C15.7158 26.8309 15.4692 27.0448 15.4486 27.3284C15.4279 27.612 15.6419 27.8595 15.9255 27.8802C18.9978 28.1027 21.1282 29.4949 22.4387 32.1349C22.6089 32.477 22.6845 32.7992 22.6845 33.1816V36.1327H13.2494V33.3793C13.2494 32.4503 12.916 31.6451 12.2577 30.9868ZM25.9226 40.6797H9.87207V39.4379H25.9218L25.9226 40.6797ZM24.3199 37.7862V38.4066H11.4748V37.7862C11.4748 37.4441 11.7532 37.1657 12.0953 37.1657H23.6994C24.0414 37.1648 24.3199 37.4433 24.3199 37.7862ZM23.7003 32.8362C23.6616 32.4314 23.5525 32.0567 23.3643 31.6769C22.6854 30.3096 21.8139 29.2388 20.738 28.4534V24.8242L23.085 24.8706C23.1657 24.8723 23.2207 24.8998 23.2697 24.9634L24.2812 26.2791C24.4961 26.5584 24.808 26.7226 25.1595 26.7423C25.1827 26.7441 25.2059 26.7441 25.2291 26.7441C25.5548 26.7441 25.8556 26.616 26.0842 26.3788C26.8112 25.6243 27.1721 24.7082 27.1575 23.6546C27.1412 22.5151 26.7167 21.5595 25.9295 20.89L23.5293 18.8464L25.3889 16.606C25.5677 16.3912 25.5419 16.0732 25.3322 15.8893C23.5384 14.3172 21.2343 13.4507 18.8491 13.4513C16.2443 13.4513 13.7719 14.5727 11.8856 16.6095C10.068 18.5731 9.02473 21.1994 9.02473 23.8145C9.02473 23.8248 9.02473 23.8351 9.02559 23.8445L9.28512 28.2548C9.33582 29.1134 9.66754 29.855 10.2708 30.4583L11.5272 31.7147C11.8314 32.0189 12.0325 32.3584 12.1357 32.7408L6.77574 29.6462C6.92012 29.2732 7.00004 28.8693 7.00004 28.4465C7.00004 26.7836 5.77629 25.4009 4.18129 25.1525V15.1923C5.77543 14.944 7.00004 13.5612 7.00004 11.8984C7.00004 11.4755 6.92012 11.0708 6.77574 10.6987L15.4056 5.71602C16.0175 6.47227 16.9525 6.95781 17.9983 6.95781C19.0442 6.95781 19.9792 6.47312 20.5911 5.71602L29.2209 10.6987C29.0725 11.0812 28.9965 11.488 28.9966 11.8984C28.9966 13.5612 30.2204 14.944 31.8154 15.1923V25.1542C30.2212 25.4026 28.9966 26.7853 28.9966 28.4482C28.9966 28.871 29.0765 29.2758 29.2209 29.6479L23.7003 32.8362ZM32.3327 30.7505C31.0625 30.7505 30.0296 29.7175 30.0296 28.4473C30.0296 27.1772 31.0625 26.1442 32.3327 26.1442C33.602 26.1442 34.6358 27.1772 34.6358 28.4473C34.6358 29.7175 33.6029 30.7505 32.3327 30.7505ZM12.8653 22.7884C12.8546 22.9171 12.7959 23.0372 12.7009 23.1247C12.6059 23.2122 12.4814 23.2609 12.3522 23.261C12.3376 23.261 12.3239 23.2602 12.3093 23.2593C12.2418 23.2538 12.1761 23.235 12.1159 23.2041C12.0557 23.1731 12.0022 23.1306 11.9585 23.079C11.9147 23.0273 11.8816 22.9676 11.861 22.9031C11.8404 22.8386 11.8327 22.7707 11.8383 22.7033C12.1142 19.3706 14.7258 16.6773 18.0482 16.2992C18.3309 16.2674 18.587 16.4702 18.6188 16.753C18.6506 17.0357 18.4478 17.2909 18.165 17.3236C15.3291 17.6467 13.1007 19.9447 12.8653 22.7884Z"
                          className="fill-[#2B3944]"
                        ></path>
                      </AnimatedElement>
                    </div>
                    <div>
                      <h5 className="mt-0 mb-2.5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                        {"Marketing Strategy"}
                      </h5>
                      <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                        {
                          " Our marketing strategy focuses on building\n                                                brand\n                                                awareness "
                        }
                      </p>
                    </div>
                  </AnimatedElement>
                  <AnimatedElement
                    as="div"
                    effect="fade"
                    delay={0.3}
                    duration={1}
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                    className="mb-10 max-[1199px]:mb-7.5 pb-8.25 max-[1199px]:pb-6.25 flex gap-7.5 relative max-[480px]:flex-wrap after:hover:w-full after:hover:inset-s-0 before:absolute before:[content:''] before:w-full before:h-px before:[background:#DBDEE1] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none"
                  >
                    <div className="w-17.5 h-17.5 min-w-17.5 [background:#F8F8F9] flex items-center justify-center">
                      <AnimatedElement
                        as="svg"
                        effect="skew"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        className="align-middle w-10 h-10"
                      >
                        <path
                          d="M32.1852 24.9574C28.1952 24.9574 24.9607 28.1919 24.9607 32.1819C24.9607 36.1719 28.1952 39.4063 32.1852 39.4063C36.1752 39.4063 39.4096 36.1719 39.4096 32.1819C39.4048 28.1938 36.1733 24.9623 32.1852 24.9574ZM32.1852 38.0928C28.9206 38.0928 26.2743 35.4465 26.2743 32.1819C26.2743 28.9173 28.9206 26.271 32.1852 26.271C35.4498 26.271 38.0961 28.9173 38.0961 32.1819C38.0926 35.4449 35.4482 38.0893 32.1852 38.0928ZM13.7957 24.9574H7.88475V18.0049L9.82238 19.9422C10.0798 20.1914 10.4897 20.1876 10.743 19.9342C10.8648 19.8125 10.9339 19.6478 10.9354 19.4757C10.9369 19.3035 10.8707 19.1376 10.7511 19.0138L7.69232 15.955C7.56912 15.832 7.40211 15.7629 7.22798 15.7629C7.05386 15.7629 6.88685 15.832 6.76365 15.955L3.70524 19.0137C3.58564 19.1376 3.51945 19.3034 3.52094 19.4755C3.52243 19.6477 3.59147 19.8123 3.71321 19.934C3.83494 20.0559 3.99968 20.125 4.17191 20.1265C4.34414 20.128 4.51007 20.0618 4.63391 19.9421L6.57122 18.0049V24.9573H0.660299C0.486113 24.9573 0.319061 25.0265 0.195893 25.1497C0.0727252 25.2729 0.00353013 25.4399 0.00353013 25.6141V38.7495C0.00353013 38.9237 0.0727252 39.0907 0.195893 39.2139C0.319061 39.3371 0.486113 39.4062 0.660299 39.4062H13.7957C13.9699 39.4062 14.1369 39.3371 14.2601 39.2139C14.3832 39.0907 14.4524 38.9237 14.4524 38.7495V25.6141C14.4524 25.4399 14.3832 25.2729 14.2601 25.1497C14.1369 25.0265 13.9699 24.9574 13.7957 24.9574ZM13.1389 38.0928H1.31707V26.271H13.1389V38.0928ZM19.7396 3.7016C19.6585 3.61782 19.5567 3.55711 19.4444 3.5257C19.3321 3.49428 19.2135 3.49329 19.1008 3.52283C18.988 3.55237 18.8851 3.61137 18.8027 3.69378C18.7202 3.77619 18.6612 3.87905 18.6316 3.99181C18.6021 4.10457 18.6032 4.22317 18.6347 4.33539C18.6662 4.44762 18.727 4.54943 18.8109 4.63035L20.7481 6.5679H14.4191C14.0679 2.72194 10.7539 -0.168084 6.89582 0.00760134C3.03772 0.183287 0 3.36262 0 7.22467C0 11.0867 3.03756 14.266 6.89574 14.4417C10.7539 14.6174 14.0679 11.7275 14.419 7.88144H20.7481L18.8109 9.81907C18.727 9.89998 18.6662 10.0018 18.6347 10.114C18.6032 10.2262 18.6021 10.3448 18.6316 10.4575C18.6612 10.5703 18.7203 10.6732 18.8027 10.7556C18.8852 10.8381 18.988 10.8971 19.1008 10.9267C19.2136 10.9562 19.3322 10.9551 19.4445 10.9236C19.5567 10.8921 19.6586 10.8313 19.7396 10.7474L22.7981 7.689C22.8591 7.62804 22.9075 7.55565 22.9405 7.47598C22.9735 7.3963 22.9905 7.31091 22.9905 7.22467C22.9905 7.13843 22.9735 7.05303 22.9405 6.97336C22.9075 6.89369 22.8591 6.8213 22.7981 6.76033L19.7396 3.7016ZM7.22798 13.1356C3.96335 13.1356 1.31707 10.4893 1.31707 7.22467C1.31707 3.96012 3.96335 1.31375 7.22798 1.31375C10.4926 1.31375 13.1389 3.96012 13.1389 7.22467C13.1354 10.4877 10.491 13.1321 7.22798 13.1356ZM39.7591 6.71641L32.6002 0.87117C32.4829 0.775205 32.3361 0.722773 32.1846 0.722773C32.0331 0.722773 31.8862 0.775205 31.769 0.87117L24.6102 6.71641C24.5348 6.77797 24.4741 6.8555 24.4324 6.94341C24.3907 7.03131 24.3691 7.12738 24.3691 7.22467C24.3691 7.32197 24.3907 7.41806 24.4324 7.50597C24.4741 7.59389 24.5348 7.67144 24.6102 7.73301L31.5284 13.3812V21.4017L29.5911 19.464C29.4674 19.3439 29.3013 19.2772 29.1287 19.2785C28.9562 19.2797 28.7911 19.3488 28.6691 19.4708C28.5472 19.5928 28.4781 19.7579 28.4768 19.9304C28.4756 20.103 28.5422 20.269 28.6624 20.3928L31.7209 23.4515C31.8441 23.5745 32.0111 23.6436 32.1852 23.6436C32.3593 23.6436 32.5263 23.5745 32.6495 23.4515L35.7083 20.3928C35.8285 20.269 35.8951 20.103 35.8939 19.9304C35.8926 19.7579 35.8236 19.5928 35.7016 19.4708C35.5796 19.3488 35.4145 19.2797 35.242 19.2785C35.0695 19.2772 34.9034 19.3439 34.7796 19.464L32.842 21.4017V13.3812L39.7592 7.73301C39.8345 7.67137 39.8951 7.5938 39.9367 7.5059C39.9784 7.41799 40 7.32194 40 7.22467C40 7.12741 39.9784 7.03137 39.9367 6.94348C39.8951 6.85559 39.8344 6.77804 39.7591 6.71641ZM32.1852 12.2213L26.0655 7.22467L32.1852 2.22805L38.3049 7.22467L32.1852 12.2213Z"
                          className="fill-[#2B3944]"
                        ></path>
                      </AnimatedElement>
                    </div>
                    <div>
                      <h5 className="mt-0 mb-2.5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                        {" Workflow Optimization"}
                      </h5>
                      <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                        {
                          " Workflow optimization is the process of\n                                                analyzing,\n                                                redesigning "
                        }
                      </p>
                    </div>
                  </AnimatedElement>
                  <AnimatedElement
                    as="div"
                    effect="fade"
                    delay={0.5}
                    duration={1}
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                    className="mb-0 max-[1199px]:mb-7.5 pb-8.25 max-[1199px]:pb-6.25 flex gap-7.5 relative max-[480px]:flex-wrap after:hover:w-full after:hover:inset-s-0 before:absolute before:[content:''] before:w-full before:h-px before:[background:#DBDEE1] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none"
                  >
                    <div className="w-17.5 h-17.5 min-w-17.5 [background:#F8F8F9] flex items-center justify-center">
                      <AnimatedElement
                        as="svg"
                        effect="skew"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 38 39"
                        className="align-middle w-10 h-10"
                      >
                        <path
                          d="M30.2733 38.8637H27.6824C27.5557 38.8637 27.4325 38.8219 27.3319 38.7448C27.2314 38.6677 27.1591 38.5595 27.1262 38.4371L24.2475 27.6992C24.2245 27.6139 24.2215 27.5244 24.2386 27.4376C24.2558 27.3509 24.2927 27.2693 24.3465 27.1992C24.4003 27.1291 24.4695 27.0722 24.5488 27.0331C24.628 26.994 24.7152 26.9737 24.8036 26.9737H27.3945C27.5213 26.9739 27.6444 27.0158 27.7448 27.0931C27.8453 27.1703 27.9175 27.2785 27.9501 27.401L30.8289 38.1388C30.8518 38.2241 30.8548 38.3135 30.8376 38.4001C30.8204 38.4867 30.7835 38.5682 30.7298 38.6382C30.6761 38.7083 30.607 38.7651 30.5278 38.8042C30.4487 38.8433 30.3616 38.8636 30.2733 38.8637ZM28.124 37.7122H29.5231L26.9529 28.1258H25.5538L28.124 37.7122ZM10.3176 38.8637H7.72667C7.63839 38.8636 7.55131 38.8433 7.47216 38.8042C7.39301 38.7651 7.32391 38.7083 7.27021 38.6382C7.2165 38.5682 7.17963 38.4867 7.16244 38.4001C7.14525 38.3135 7.1482 38.2241 7.17106 38.1388L10.0498 27.401C10.0827 27.2785 10.155 27.1704 10.2555 27.0933C10.3561 27.0161 10.4793 26.9743 10.606 26.9743H13.1969C13.2852 26.9743 13.3723 26.9946 13.4515 27.0337C13.5306 27.0727 13.5998 27.1294 13.6535 27.1994C13.7073 27.2694 13.7442 27.3509 13.7615 27.4374C13.7788 27.524 13.7759 27.6134 13.7531 27.6986L10.8743 38.4365C10.8416 38.559 10.7694 38.6673 10.6688 38.7446C10.5682 38.8218 10.4444 38.8637 10.3176 38.8637ZM8.47746 37.7122H9.87655L12.4467 28.1258H11.0476L8.47746 37.7122ZM20.2955 35.674H17.7045C17.5518 35.674 17.4054 35.6134 17.2974 35.5054C17.1894 35.3974 17.1288 35.251 17.1288 35.0983V27.5501C17.1288 27.3974 17.1894 27.2509 17.2974 27.143C17.4054 27.035 17.5518 26.9743 17.7045 26.9743H20.2955C20.4482 26.9743 20.5946 27.035 20.7026 27.143C20.8106 27.2509 20.8712 27.3974 20.8712 27.5501V35.0983C20.8712 35.251 20.8106 35.3974 20.7026 35.5054C20.5946 35.6134 20.4482 35.674 20.2955 35.674ZM18.2803 34.5225H19.7197V28.1258H18.2803V34.5225ZM2.52182 25.2453C2.36912 25.2453 2.22267 25.1847 2.1147 25.0767C2.00672 24.9687 1.94606 24.8223 1.94606 24.6696V3.4529C1.94606 3.3002 2.00672 3.15376 2.1147 3.04578C2.22267 2.93781 2.36912 2.87715 2.52182 2.87715C2.67452 2.87715 2.82097 2.93781 2.92894 3.04578C3.03692 3.15376 3.09758 3.3002 3.09758 3.4529V24.6696C3.09758 24.8223 3.03692 24.9687 2.92894 25.0767C2.82097 25.1847 2.67452 25.2453 2.52182 25.2453ZM35.4782 25.2471C35.3255 25.2471 35.179 25.1864 35.0711 25.0784C34.9631 24.9704 34.9024 24.824 34.9024 24.6713V3.45463C34.9024 3.30193 34.9631 3.15548 35.0711 3.04751C35.179 2.93953 35.3255 2.87887 35.4782 2.87887C35.6309 2.87887 35.7773 2.93953 35.8853 3.04751C35.9933 3.15548 36.0539 3.30193 36.0539 3.45463V24.6713C36.0539 24.824 35.9933 24.9704 35.8853 25.0784C35.7773 25.1864 35.6309 25.2471 35.4782 25.2471Z"
                          className="fill-[#2B3944]"
                        ></path>
                        <path
                          d="M36.2727 4.0303H1.72727C0.77497 4.0303 0 3.25533 0 2.30303V1.72727C0 0.77497 0.77497 0 1.72727 0H36.2727C37.225 0 38 0.77497 38 1.72727V2.30303C38 3.25533 37.225 4.0303 36.2727 4.0303ZM1.72727 1.15152C1.41003 1.15152 1.15152 1.40945 1.15152 1.72727V2.30303C1.15152 2.62085 1.41003 2.87879 1.72727 2.87879H36.2727C36.59 2.87879 36.8485 2.62085 36.8485 2.30303V1.72727C36.8485 1.40945 36.59 1.15152 36.2727 1.15152H1.72727ZM36.2727 28.1258H1.72727C0.77497 28.1258 0 27.3508 0 26.3985V25.8227C0 24.8698 0.77497 24.0955 1.72727 24.0955H36.2727C37.225 24.0955 38 24.8698 38 25.8227V26.3985C38 27.3508 37.225 28.1258 36.2727 28.1258ZM1.72727 25.247C1.41003 25.247 1.15152 25.5049 1.15152 25.8227V26.3985C1.15152 26.7157 1.41003 26.9742 1.72727 26.9742H36.2727C36.59 26.9742 36.8485 26.7157 36.8485 26.3985V25.8227C36.8485 25.5049 36.59 25.247 36.2727 25.247H1.72727ZM20.2074 20.5666C20.0599 20.5659 19.9183 20.5087 19.8118 20.4066C19.7053 20.3046 19.642 20.1656 19.635 20.0183C19.628 19.871 19.6778 19.7266 19.7741 19.6149C19.8704 19.5032 20.0059 19.4327 20.1527 19.418C25.6074 18.8964 29.72 14.3686 29.7206 8.88567V6.39264C29.7206 6.23994 29.7813 6.09349 29.8892 5.98551C29.9972 5.87754 30.1437 5.81688 30.2964 5.81688C30.4491 5.81688 30.5955 5.87754 30.7035 5.98551C30.8115 6.09349 30.8721 6.23994 30.8721 6.39264V8.88567C30.8721 14.9657 26.3104 19.9857 20.2626 20.5638C20.2443 20.5658 20.2258 20.5668 20.2074 20.5666Z"
                          className="fill-[#2B3944]"
                        ></path>
                        <path
                          d="M18.4628 22.3106C17.8476 22.3098 17.2579 22.0651 16.8229 21.6301C16.3879 21.1952 16.1432 20.6054 16.1425 19.9903C16.1425 18.711 17.1846 17.67 18.4628 17.67C19.078 17.6706 19.6678 17.9152 20.1028 18.3503C20.5378 18.7853 20.7825 19.3751 20.7831 19.9903C20.7825 20.6055 20.5378 21.1953 20.1028 21.6303C19.6678 22.0653 19.078 22.31 18.4628 22.3106ZM18.4628 18.8215C17.8185 18.8215 17.294 19.3454 17.294 19.9903C17.294 20.6346 17.8179 21.1591 18.4628 21.1591C19.1076 21.1591 19.6315 20.6351 19.6315 19.9903C19.6315 19.3454 19.1076 18.8215 18.4628 18.8215ZM32.5993 9.27141C32.5237 9.27149 32.4488 9.25662 32.379 9.22767C32.3091 9.19872 32.2457 9.15626 32.1923 9.10271L30.2963 7.20674L28.4003 9.10213C28.3472 9.15713 28.2837 9.20099 28.2134 9.23116C28.1432 9.26134 28.0677 9.27722 27.9912 9.27789C27.9148 9.27855 27.8389 9.26398 27.7682 9.23503C27.6974 9.20608 27.6331 9.16333 27.5791 9.10927C27.525 9.05521 27.4823 8.99093 27.4533 8.92017C27.4244 8.84941 27.4098 8.7736 27.4105 8.69715C27.4111 8.6207 27.427 8.54515 27.4572 8.4749C27.4874 8.40466 27.5312 8.34113 27.5862 8.28801L29.8892 5.98551C29.9972 5.87754 30.1437 5.81688 30.2964 5.81688C30.4491 5.81688 30.5955 5.87754 30.7035 5.98551L33.0064 8.28801C33.0871 8.3685 33.1421 8.47113 33.1644 8.5829C33.1867 8.69467 33.1754 8.81055 33.1318 8.91586C33.0882 9.02117 33.0143 9.11117 32.9195 9.17446C32.8247 9.23776 32.7133 9.2715 32.5993 9.27141ZM32.5993 20.7745H29.4125C29.2598 20.7745 29.1134 20.7138 29.0054 20.6058C28.8974 20.4979 28.8368 20.3514 28.8368 20.1987C28.8368 20.046 28.8974 19.8996 29.0054 19.7916C29.1134 19.6836 29.2598 19.623 29.4125 19.623H32.5993C32.752 19.623 32.8985 19.6836 33.0065 19.7916C33.1144 19.8996 33.1751 20.046 33.1751 20.1987C33.1751 20.3514 33.1144 20.4979 33.0065 20.6058C32.8985 20.7138 32.752 20.7745 32.5993 20.7745Z"
                          className="fill-[#2B3944]"
                        ></path>
                        <path
                          d="M31.0057 22.3681C30.853 22.3681 30.7065 22.3075 30.5986 22.1995C30.4906 22.0915 30.4299 21.9451 30.4299 21.7924V18.6056C30.4299 18.4529 30.4906 18.3064 30.5986 18.1984C30.7065 18.0905 30.853 18.0298 31.0057 18.0298C31.1584 18.0298 31.3048 18.0905 31.4128 18.1984C31.5208 18.3064 31.5814 18.4529 31.5814 18.6056V21.7924C31.5814 21.9451 31.5208 22.0915 31.4128 22.1995C31.3048 22.3075 31.1584 22.3681 31.0057 22.3681ZM23.4719 11.647H20.2839C20.1312 11.647 19.9848 11.5863 19.8768 11.4783C19.7688 11.3703 19.7082 11.2239 19.7082 11.0712C19.7082 10.9185 19.7688 10.772 19.8768 10.6641C19.9848 10.5561 20.1312 10.4954 20.2839 10.4954H23.4713C23.624 10.4954 23.7705 10.5561 23.8784 10.6641C23.9864 10.772 24.0471 10.9185 24.0471 11.0712C24.0471 11.2239 23.9864 11.3703 23.8784 11.4783C23.7705 11.5863 23.6246 11.647 23.4719 11.647Z"
                          className="fill-[#2B3944]"
                        ></path>
                        <path
                          d="M21.8782 13.2402C21.7255 13.2402 21.579 13.1795 21.4711 13.0716C21.3631 12.9636 21.3024 12.8171 21.3024 12.6644V9.47762C21.3024 9.32492 21.3631 9.17848 21.4711 9.0705C21.579 8.96253 21.7255 8.90187 21.8782 8.90187C22.0309 8.90187 22.1773 8.96253 22.2853 9.0705C22.3933 9.17848 22.4539 9.32492 22.4539 9.47762V12.6644C22.4539 12.8171 22.3933 12.9636 22.2853 13.0716C22.1773 13.1795 22.0309 13.2402 21.8782 13.2402ZM10.663 19.7365C7.44451 19.7365 4.82481 17.1173 4.82481 13.8983C4.82481 10.6792 7.44451 8.06068 10.663 8.06068C10.8157 8.06068 10.9621 8.12134 11.0701 8.22932C11.1781 8.3373 11.2388 8.48374 11.2388 8.63644V13.3231H15.9254C16.0781 13.3231 16.2246 13.3838 16.3325 13.4917C16.4405 13.5997 16.5012 13.7462 16.5012 13.8989C16.5012 17.1173 13.8821 19.7365 10.663 19.7365ZM10.0872 9.2479C7.77384 9.53232 5.97633 11.5095 5.97633 13.8989C5.97633 16.4829 8.07899 18.5855 10.663 18.5855C13.0524 18.5855 15.0295 16.788 15.3151 14.4746H10.663C10.5103 14.4746 10.3638 14.414 10.2559 14.306C10.1479 14.198 10.0872 14.0516 10.0872 13.8989V9.2479Z"
                          className="fill-[#2B3944]"
                        ></path>
                      </AnimatedElement>
                    </div>
                    <div>
                      <h5 className="mt-0 mb-2.5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                        {"Growth Planning"}
                      </h5>
                      <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                        {
                          " Growth planning is the strategic process of\n                                                setting\n                                                clear "
                        }
                      </p>
                    </div>
                  </AnimatedElement>
                  <AnimatedElement
                    as="div"
                    effect="fade"
                    delay={0.7}
                    duration={1}
                    data-wow-delay=".7s"
                    data-wow-duration="1s"
                    className="mb-0 pb-8.25 max-[1199px]:pb-0 flex gap-7.5 relative max-[480px]:flex-wrap before:[content:''] max-[1199px]:before:content-none after:[content:''] max-[1199px]:after:content-none after:hover:w-full after:hover:inset-s-0 before:absolute before:w-full before:h-px before:[background:#DBDEE1] before:bottom-0 before:inset-e-0 after:absolute after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none"
                  >
                    <div className="w-17.5 h-17.5 min-w-17.5 [background:#F8F8F9] flex items-center justify-center">
                      <AnimatedElement
                        as="svg"
                        effect="skew"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        className="align-middle w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M27.9059 19.3622L30.0736 23.1145H25.7383L27.9059 19.3622ZM24.7116 24.3005H31.1001C31.5435 24.3005 31.8415 23.8062 31.6084 23.4134L28.4192 17.8821C28.1977 17.4949 27.6195 17.4859 27.3927 17.8821L24.1984 23.4134C23.9679 23.8107 24.2684 24.3005 24.7116 24.3005ZM26.396 10.243C26.5938 10.0439 26.8291 9.88597 27.0882 9.77817C27.3473 9.67037 27.6252 9.61487 27.9059 9.61487C28.1865 9.61487 28.4644 9.67037 28.7235 9.77817C28.9827 9.88597 29.2179 10.0439 29.4158 10.243C30.248 11.0752 30.248 12.4257 29.4158 13.2578C28.5836 14.09 27.2282 14.09 26.396 13.2578C25.5638 12.4256 25.5638 11.0751 26.396 10.243ZM27.9059 15.0666C28.753 15.0666 29.6052 14.7427 30.2529 14.0949C31.5435 12.8043 31.5435 10.6965 30.2529 9.40577C28.9573 8.11015 26.8544 8.11015 25.5588 9.40577C24.2682 10.6964 24.2682 12.8043 25.5588 14.0949C26.2066 14.7428 27.0538 15.0666 27.9059 15.0666ZM20.755 13.8458H16.5692V9.65499H20.755V13.8458ZM21.348 8.47394H15.9762C15.8982 8.47371 15.821 8.48889 15.749 8.5186C15.6769 8.54832 15.6115 8.59199 15.5564 8.64709C15.5013 8.7022 15.4576 8.76766 15.4279 8.8397C15.3982 8.91175 15.383 8.98895 15.3832 9.06689V14.4337C15.383 14.5117 15.3982 14.5889 15.4279 14.6609C15.4576 14.733 15.5013 14.7984 15.5564 14.8535C15.6115 14.9086 15.6769 14.9523 15.749 14.982C15.821 15.0117 15.8982 15.0269 15.9762 15.0267H21.348C21.672 15.0267 21.941 14.7626 21.941 14.4337V9.06689C21.941 8.73803 21.6719 8.47394 21.348 8.47394ZM0.926918 9.95393C0.926918 10.2779 1.19101 10.5419 1.51995 10.5419C1.84388 10.5419 2.10797 10.2779 2.10797 9.95393V1.91108H29.1218C29.1997 1.91131 29.2769 1.89613 29.349 1.86642C29.421 1.8367 29.4865 1.79304 29.5416 1.73793C29.5967 1.68283 29.6404 1.61737 29.6701 1.54532C29.6998 1.47328 29.715 1.39607 29.7148 1.31813C29.715 1.24019 29.6999 1.16296 29.6702 1.0909C29.6404 1.01884 29.5968 0.953368 29.5416 0.898252C29.4865 0.843135 29.4211 0.799462 29.349 0.769745C29.2769 0.740029 29.1997 0.724857 29.1218 0.725101H1.51995C1.442 0.724857 1.36478 0.740029 1.29272 0.769745C1.22066 0.799462 1.15519 0.843135 1.10007 0.898252C1.04495 0.953368 1.00128 1.01884 0.971563 1.0909C0.941847 1.16296 0.926674 1.24019 0.926918 1.31813V9.95393ZM39.5166 6.02226C39.5166 5.69332 39.2475 5.42923 38.9236 5.42923C38.8457 5.42898 38.7685 5.44416 38.6964 5.47387C38.6244 5.50359 38.5589 5.54726 38.5038 5.60238C38.4487 5.6575 38.405 5.72297 38.3753 5.79503C38.3455 5.86709 38.3304 5.94431 38.3306 6.02226V33.031H25.8927C25.5688 33.031 25.3047 33.3002 25.3047 33.6241C25.3047 33.9529 25.5688 34.2171 25.8927 34.2171H38.9236C39.2476 34.2171 39.5166 33.953 39.5166 33.6241V6.02226ZM20.7351 25.5014C21.8065 25.5014 22.6736 26.4283 22.6736 27.5645V29.1491H32.5303C33.7512 29.1491 34.7478 28.1525 34.7478 26.9316V7.74143C34.7478 6.52052 33.7512 5.52392 32.5303 5.52392H7.48987C6.26896 5.52392 5.27236 6.52052 5.27236 7.74143V12.5901H10.9083C11.9548 12.5901 12.8069 13.4422 12.8069 14.4887V15.4554C13.8035 15.5402 14.5859 16.4321 14.5859 17.5135V23.0697C15.6844 22.5789 16.8969 23.2318 17.2071 24.4052C18.2857 23.8553 19.579 24.4826 19.903 25.7008C20.1607 25.5695 20.4459 25.5011 20.7351 25.5014ZM21.4476 30.7786C21.2034 36.29 19.6636 38.1387 15.3382 38.0889C10.8832 38.0441 10.5993 35.6124 10.1707 31.9347C10.1258 31.5511 10.081 31.1524 10.0312 30.7537C10.0312 30.7437 10.0262 30.7387 10.0262 30.7288C9.72718 28.9698 8.86514 27.7438 7.39509 26.9814C5.52861 26.0116 5.70708 24.7888 6.93661 24.7888C7.25051 24.7888 7.61932 24.8735 8.01796 25.0678L10.9979 26.7222C11.3983 26.9416 11.8799 26.6444 11.8799 26.204L11.8899 17.5134C11.8899 17.035 12.2387 16.6314 12.6473 16.6314C13.0609 16.6314 13.4047 17.035 13.4047 17.5134V24.9732C13.4047 25.2971 13.6688 25.5612 13.9976 25.5612C14.3216 25.5612 14.5857 25.2971 14.5857 24.9732C14.5857 24.4948 14.9345 24.0911 15.3431 24.0911C15.7567 24.0911 16.1005 24.4948 16.1005 24.9732V26.2688C16.1003 26.3467 16.1154 26.4239 16.1452 26.496C16.1749 26.568 16.2186 26.6335 16.2737 26.6886C16.3288 26.7437 16.3943 26.7874 16.4663 26.8171C16.5384 26.8468 16.6156 26.862 16.6935 26.8617C17.0175 26.8617 17.2815 26.5976 17.2815 26.2688C17.2815 25.7904 17.6304 25.3868 18.039 25.3868C18.4526 25.3868 18.7964 25.7904 18.7964 26.2688V27.5644C18.7961 27.6423 18.8113 27.7195 18.841 27.7916C18.8708 27.8636 18.9144 27.9291 18.9695 27.9842C19.0246 28.0393 19.0901 28.083 19.1621 28.1127C19.2342 28.1424 19.3114 28.1576 19.3893 28.1573C19.7132 28.1573 19.9773 27.8933 19.9773 27.5644C19.9773 27.086 20.3262 26.6824 20.7348 26.6824C21.1433 26.6824 21.4922 27.086 21.4922 27.5644C21.4925 28.5383 21.5079 29.423 21.4476 30.7786ZM2.382 33.9629C1.98837 33.9629 1.66445 33.639 1.66445 33.2403V14.4887C1.66445 14.0949 1.98837 13.7711 2.382 13.7711H10.9082C11.3019 13.7711 11.6258 14.095 11.6258 14.4887V15.7594C11.0776 16.1281 10.7089 16.7759 10.7089 17.5135L10.694 25.2025L8.58107 24.0264C8.57113 24.0214 8.56611 24.0214 8.55617 24.0165C6.88179 23.1893 5.48153 23.7324 5.00818 24.6644C4.5248 25.6162 4.90848 27.0213 6.84694 28.028C7.98311 28.6209 8.62094 29.5379 8.86012 30.9183C8.90993 31.307 8.95481 31.6956 8.9996 32.0694C9.06938 32.7122 9.14409 33.35 9.2438 33.963L2.382 33.9629ZM32.5302 30.3351C34.4039 30.3351 35.9287 28.8053 35.9287 26.9316V7.74143C35.9287 5.86773 34.4039 4.34287 32.5302 4.34287H7.48978C5.61609 4.34287 4.09122 5.86773 4.09122 7.74143V12.5901H2.382C1.3355 12.5901 0.483398 13.4422 0.483398 14.4887V33.2403C0.483398 34.2917 1.3355 35.1439 2.382 35.1439H9.488C10.1145 37.567 11.5138 39.275 15.4728 39.275C21.3509 39.275 22.4911 35.5511 22.6486 30.3352L32.5302 30.3351Z"
                          className="fill-[#2B3944]"
                        ></path>
                      </AnimatedElement>
                    </div>
                    <div>
                      <h5 className="mt-0 mb-2.5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                        {"Brand Development"}
                      </h5>
                      <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                        {
                          " Brand development is the strategic process\n                                                of\n                                                creating, defining "
                        }
                      </p>
                    </div>
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextSlideAreaSection() {
  return (
    <div className="pt-6.5 pb-6.5 overflow-x-clip [background:#AB052D] relative z-1">
      <div className="flex justify-center items-center overflow-hidden text-center">
        <div>
          <AnimatedElement
            distance={1000}
            duration={20}
            effect="marquee"
            className="min-w-max flex items-center gap-[0px_30px]"
          >
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"ICFC PTE LTD Consultancy"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/bg/banner-bg-thumb-01.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Business Solutions"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Business Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Marketing Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Business Strategy"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Corporate Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Financial Advisor"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Visa Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"It Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Insurance Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Consulting Business"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Consultancy"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Business Solutions"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Business Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Marketing Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Business Strategy"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Corporate Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Financial Advisor"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Visa Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"It Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Insurance Consulting"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
            <div className="inline-flex items-center gap-[0px_30px]">
              <h5 className="mt-0 mb-0 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] relative inline-flex items-center justify-center">
                {"Consulting Business"}
              </h5>
              <div>
                <SiteImage
                  src="/assets/images/shape/multi-line-shape.webp"
                  alt="image"
                  className="align-middle max-w-full w-6"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}

function PortfolioAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 [background:#2B3944] relative z-1 overflow-x-clip">
      <AnimatedElement
        startAt={5}
        as="div"
        effect="move"
        delay={0}
        duration={0.8}
        distance={100}
        axis="y"
        className="absolute inset-e-0 top-0 max-[767px]:hidden"
      ></AnimatedElement>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[75%] max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="text-center! mb-11.25">
              <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                {
                  "\n                                OUR FEATURED IndustriesS\n                            "
                }
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-0 mb-0 font-semibold leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                {
                  "Highlighted examples\n                                of our\n                                work"
                }
              </AnimatedElement>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <ContentTabs
            items={[
              {
                label: "All Industries",
                content: (
                  <>
                    <div>
                      <ContentCarousel items={3}>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-01.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Online\n                                                                    Invoicing & Billing Platform"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-02.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Market\n                                                                    Penetration Strategy"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-03.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Integrated\n                                                                    Innovations"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-04.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "MIntegrated\n                                                                    Innovations"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-05.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Bank Credit\n                                                                    Collection System"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-06.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Business\n                                                                    Development Planning"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-07.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Differentiated\n                                                                    Performance"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-08.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Market\n                                                                    Penetration Strategy"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-09.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Bank Credit\n                                                                    Collection System"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-10.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Differentiated\n                                                                    Performance"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-11.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Online\n                                                                    Invoicing & Billing Platform"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-12.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Market\n                                                                    Penetration Strategy"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-13.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Business\n                                                                    Development Planning"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-14.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Integrated\n                                                                    Innovations"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-15.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Differentiated\n                                                                    Performance"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ContentCarousel>
                    </div>
                  </>
                ),
              },
              {
                label: "Consulting (04)",
                content: (
                  <>
                    <div>
                      <ContentCarousel items={3}>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-01.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Online\n                                                                    Invoicing & Billing Platform"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-02.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Market\n                                                                    Penetration Strategy"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-03.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Integrated\n                                                                    Innovations"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-04.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "MIntegrated\n                                                                    Innovations"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-05.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Bank Credit\n                                                                    Collection System"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-06.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Business\n                                                                    Development Planning"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ContentCarousel>
                    </div>
                  </>
                ),
              },
              {
                label: "Training (04)",
                content: (
                  <>
                    <div>
                      <ContentCarousel items={3}>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-08.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Market\n                                                                    Penetration Strategy"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-09.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Bank Credit\n                                                                    Collection System"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-10.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Differentiated\n                                                                    Performance"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-11.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Online\n                                                                    Invoicing & Billing Platform"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-12.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Market\n                                                                    Penetration Strategy"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-13.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Business\n                                                                    Development Planning"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-14.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Integrated\n                                                                    Innovations"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-15.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Differentiated\n                                                                    Performance"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ContentCarousel>
                    </div>
                  </>
                ),
              },
              {
                label: "Audit (04)",
                content: (
                  <>
                    <div>
                      <ContentCarousel items={3}>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-01.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Online\n                                                                    Invoicing & Billing Platform"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-02.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Market\n                                                                    Penetration Strategy"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-03.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Integrated\n                                                                    Innovations"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-04.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "MIntegrated\n                                                                    Innovations"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-05.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Bank Credit\n                                                                    Collection System"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="group/portfolio-tab-item">
                            <div className="overflow-hidden rounded-md">
                              <SiteLink
                                href="/contact-us"
                                className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                              >
                                <SiteImage
                                  src="/assets/images/portfolio/portfolio-thumb-06.webp"
                                  alt="image"
                                  className="align-middle max-w-full group-hover/portfolio-tab-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                                />
                              </SiteLink>
                            </div>
                            <div className="mt-7.5 pb-7.5 after:group-hover/portfolio-tab-item:w-full after:group-hover/portfolio-tab-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                              <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                                <SiteLink
                                  href="/contact-us"
                                  className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                                >
                                  {
                                    "Business\n                                                                    Development Planning"
                                  }
                                </SiteLink>
                              </h5>
                              <div>
                                <SiteLink
                                  href="/contact-us"
                                  className="text-[#FFFFFF] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text group/is-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                                >
                                  <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(150%)] w-5 group-hover/icon-box:transform-[translateX(150%)] group-hover/portfolio-tab-item:transform-[translateX(150%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="align-middle group-hover/btn:transform-[translateX(0%)] w-5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/portfolio-tab-item:transform-[translateX(0%)] h-5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                                    >
                                      <path
                                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                                        fill="white"
                                        className="group-hover/has-text:fill-[#AB052D] fill-[#FFFFFF] group-hover/is-white:fill-[#AB052D] group-hover/btn:fill-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                                      ></path>
                                    </svg>
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ContentCarousel>
                    </div>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function WhyChooseAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[repeat(2,1fr)] max-[991px]:grid-cols-[repeat(1,1fr)] gap-[30px_80px] max-[1600px]:gap-[30px_30px]">
              <div>
                <div>
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    {
                      "\n                                        Why choose ICFC\n                                    "
                    }
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-5 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {
                      "Scaling new\n                                        heights with\n                                        strategic excellence."
                    }
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "We provide the best services, ensuring your outstanding\n                                        growth,\n                                        lorem ipsum dolor sit amet. Nulla ultrices vitae neque non sodales."
                    }
                  </p>
                </div>
                <div className="mt-7.5 grid grid-cols-[repeat(2,1fr)] max-[575px]:grid-cols-[repeat(1,1fr)] gap-[15px_0] w-127.5 max-[767px]:w-full">
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="align-middle w-3.5 h-3.5"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="fill-[#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      {" Regulatory Investigations "}
                    </p>
                  </div>
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="align-middle w-3.5 h-3.5"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="fill-[#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      {" Competitive Work Analysis "}
                    </p>
                  </div>
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="align-middle w-3.5 h-3.5"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="fill-[#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      {" Anit- Competitive Conduct "}
                    </p>
                  </div>
                  <div className="flex items-center gap-3.75">
                    <div className="w-6.5 min-w-6.5 h-6.5 [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="align-middle w-3.5 h-3.5"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="fill-[#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-0 mb-0 text-[16px] font-medium text-[#2B3944] leading-7">
                      {" Innovation. Strategy. Success. "}
                    </p>
                  </div>
                </div>
                <div className="mt-11.25 mb-11.25">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#AB052D] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] gap-2 group/btn [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    {"Get Start Now\n                                        "}
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
                <div>
                  <div className="relative overflow-hidden">
                    <div className="mb-4.25">
                      <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                        {"Consulting"}
                      </h6>
                      <span className="absolute text-[16px] top-0 inset-e-0 z-1 font-medium text-[#2B3944]">
                        {"90%"}
                      </span>
                    </div>
                    <div className="flex h-3.5 overflow-visible text-[0.75rem] bg-[#F8F8F9] rounded-none pt-0.75 pr-0.75 pb-0.75 pl-0.75 leading-3.5 [border:1px_solid_#DBDEE1]">
                      <AnimatedElement
                        as="div"
                        effect="left"
                        delay={0.3}
                        duration={0.8}
                        className="flex flex-col justify-center overflow-visible text-white text-center whitespace-nowrap bg-[#2B3944] rounded-none w-[90%]! h-full"
                        data-wow-duration="0.8s"
                        data-wow-delay=".3s"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></AnimatedElement>
                    </div>
                  </div>
                </div>
              </div>
              <AnimatedElement
                as="div"
                effect="right"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
                data-wow-duration="1s"
                className="mb-8.75 max-[1199px]:mb-0 relative me-8.75 max-[1199px]:me-0"
              >
                <SiteImage
                  src="/assets/images/why-choose/why-choose-thumb-01.webp"
                  alt="image"
                  className="align-middle max-w-full w-full rounded-md"
                />
                <div className="pt-8.75 max-[1199px]:pt-6.25 min-[1199px]:max-[1600px]:pt-7.5 pr-8.75 max-[1199px]:pr-6.25 min-[1199px]:max-[1600px]:pr-7.5 pb-8.75 max-[1199px]:pb-6.25 min-[1199px]:max-[1600px]:pb-7.5 pl-8.75 max-[1199px]:pl-6.25 min-[1199px]:max-[1600px]:pl-7.5 [background:#F8F8F9] rounded-md absolute max-[480px]:[position:unset] -bottom-8.75 max-[1199px]:bottom-0 -inset-e-8.75 max-[1199px]:inset-e-0 w-70.75 max-[480px]:w-full max-[480px]:mt-7.5">
                  <div>
                    <SiteImage
                      src="/assets/images/favicon.webp"
                      alt="image"
                      className="align-middle max-w-full w-12.5 rounded-md"
                    />
                  </div>
                  <p className="mt-6.25 mb-6.25 text-[24px] max-[1600px]:text-[22px] font-medium text-[#2B3944] leading-[1.33]">
                    {"We ensure fastest management team -work"}
                  </p>
                  <div>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#AB052D] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      {
                        "Join\n                                            Now\n                                            "
                      }
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
                            className="group-hover/has-text:fill-[#AB052D] fill-[#AB052D]"
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
                            className="group-hover/has-text:fill-[#AB052D] fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 [background:#2B3944]">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[650px_auto] max-[991px]:grid-cols-[auto] min-[991px]:max-[1199px]:grid-cols-[450px_auto] min-[1199px]:max-[1600px]:grid-cols-[630px_auto] items-center gap-[30px_85px] max-[1600px]:gap-[30px_30px]">
              <div>
                <div>
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                    {
                      "\n                                        Frequently asked questions\n                                    "
                    }
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-5 font-semibold leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {
                      "\n                                        Frequently Asked\n                                        Question"
                    }
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#FFFFFF] leading-7">
                    {
                      "Find answers to our question about our consulting\n                                        coverage\n                                        options."
                    }
                  </p>
                </div>
                <div className="mt-20 max-[1199px]:mt-12.5 pt-8 max-[1199px]:pt-5.5 pb-8.75 max-[1199px]:pb-7.5 [background:#AB052D] rounded-md px-10 max-[1199px]:px-7.5 flex items-center justify-between flex-wrap gap-7.5">
                  <div>
                    <h5 className="mt-0 mb-2.5 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"Still Have Questions?"}
                    </h5>
                    <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#FFFFFF] leading-7">
                      {"We’re here to help you!"}
                    </p>
                  </div>
                  <div>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#2B3944] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] gap-2 group/btn group/has-bg-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      {
                        "Contact Us\n                                            "
                      }
                      <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="fill-[#2B3944] group-hover/has-bg-white:fill-[#FFFFFF]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="fill-[#2B3944] group-hover/has-bg-white:fill-[#FFFFFF]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="[border:1px_solid_rgba(255,255,255,0.062)] rounded-md overflow-hidden">
                    <AccordionGroup dark id="accordionExampleOne">
                      <AccordionItem
                        title={
                          <>
                            {
                              "\n                                                        How do your startups with product\n                                                        "
                            }
                            <span className=""></span>
                          </>
                        }

                        defaultOpen={true}
                        className="rounded-none bg-transparent [border-bottom:1px_solid_rgba(255,255,255,0.062)]"
                      >
                        {" "}
                        {
                          "Launching a startup begins with more\n                                                        than just an\n                                                        idea it starts with creating a product that solves a real\n                                                        problem.\n                                                    "
                        }
                      </AccordionItem>
                      <AccordionItem
                        title={
                          <>
                            {
                              "\n                                                        Can your with fundraising investor\n                                                        "
                            }
                            <span className=""></span>
                          </>
                        }

                        defaultOpen={false}
                        className="rounded-none bg-transparent [border-bottom:1px_solid_rgba(255,255,255,0.062)]"
                      >
                        {" "}
                        {
                          "Securing the right investment is\n                                                        essential for\n                                                        fueling growth and scaling a business. Our fundraising approach\n                                                        is designed\n                                                    "
                        }
                      </AccordionItem>
                      <AccordionItem
                        title={
                          <>
                            {
                              "\n                                                        What makes startup consulting\n                                                        "
                            }
                            <span className=""></span>
                          </>
                        }

                        defaultOpen={false}
                        className="rounded-none bg-transparent [border-bottom:1px_solid_rgba(255,255,255,0.062)]"
                      >
                        {" "}
                        {
                          "Startup consulting helps entrepreneurs\n                                                        turn ideas\n                                                        into thriving businesses. By combining market insights,\n                                                        strategy, and\n                                                        execution"
                        }
                      </AccordionItem>
                      <AccordionItem
                        title={
                          <>
                            {
                              "\n                                                        Do you provide financial planning\n                                                        "
                            }
                            <span className=""></span>
                          </>
                        }

                        defaultOpen={false}
                        className="rounded-none bg-transparent"
                      >
                        {" "}
                        {
                          "Financial planning is the foundation of\n                                                        long-term\n                                                        stability and growth. It helps businesses and individuals make\n                                                        informed"
                        }
                      </AccordionItem>
                    </AccordionGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureAreaSection2() {
  return (
    <section className="mb-40 pt-81.25 max-[1199px]:pt-37.5 min-[1199px]:max-[1600px]:pt-62.5 relative z-1">
      <div className="bg-center bg-cover bg-no-repeat absolute w-full h-full top-0 left-0 z-[-1] bg-[url('/assets/bg/feature-bg-thumb-02.webp')]!"></div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="-mb-40 pt-12.5 max-[575px]:pt-7.5 min-[575px]:max-[1600px]:pt-10 pb-10 max-[575px]:pb-5 min-[575px]:max-[1600px]:pb-7.5 [background:#AB052D] ps-25 max-[575px]:ps-7.5 min-[575px]:max-[1600px]:ps-10 pe-25 max-[575px]:pe-7.5 min-[575px]:max-[1600px]:pe-10 grid grid-cols-[repeat(3,1fr)] max-[767px]:grid-cols-[repeat(1,1fr)] min-[767px]:max-[991px]:grid-cols-[repeat(2,1fr)] gap-[30px_120px] max-[1600px]:gap-[30px_30px] rounded-md">
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
                data-wow-duration="1s"
                className="group/feature-item"
              >
                <div className="mb-5 group-hover/feature-item:[background:#FFFFFF] [background:#9D0026] w-17.5 h-17.5 flex items-center justify-center rounded-[3px] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none">
                  <AnimatedElement
                    as="svg"
                    effect="skew"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 44 38"
                    className="align-middle w-11 h-10"
                  >
                    <path
                      fill="white"
                      d="M35.8847 11.5495C35.5146 11.5495 35.1463 11.5762 34.7833 11.6289C34.8477 7.02454 29.8368 4.18955 25.9611 6.46509C24.6953 2.65196 21.1546 0.0604248 17.0599 0.0604248C11.8811 0.0604248 7.66792 4.2736 7.66792 9.45219C7.66792 10.1662 7.74732 10.8695 7.90459 11.5524C3.81104 11.6669 0.516113 15.0302 0.516113 19.1481C0.516113 23.3382 3.92732 26.747 8.12012 26.747L10.5092 26.6906C10.6421 32.9156 15.7436 37.9394 21.9999 37.9394C25.054 37.9394 27.9275 36.7581 30.0912 34.6125C30.1495 34.5547 30.1959 34.4859 30.2277 34.4101C30.2594 34.3344 30.276 34.2531 30.2763 34.1709C30.2767 34.0887 30.2608 34.0073 30.2297 33.9313C30.1985 33.8552 30.1527 33.7861 30.0949 33.7277C30.037 33.6694 29.9682 33.623 29.8925 33.5912C29.8167 33.5595 29.7354 33.5429 29.6532 33.5426C29.571 33.5422 29.4896 33.5581 29.4136 33.5892C29.3375 33.6204 29.2684 33.6662 29.21 33.724C27.2826 35.6353 24.7219 36.6879 22 36.6879C16.3506 36.6879 11.7545 32.0918 11.7545 26.4425C11.7545 20.7931 16.3506 16.197 22 16.197C27.6493 16.197 32.2454 20.7931 32.2454 26.4425C32.2454 28.129 31.8271 29.7981 31.0353 31.2687C30.9589 31.4146 30.9432 31.5848 30.9914 31.7422C31.0397 31.8997 31.1481 32.0318 31.2931 32.1099C31.4381 32.1879 31.6081 32.2057 31.7661 32.1593C31.9241 32.1129 32.0575 32.006 32.1372 31.8619C32.9826 30.2915 33.4439 28.5205 33.4882 26.7237C34.748 26.7521 35.9633 26.7464 36.1052 26.747L36.0604 26.745C40.1697 26.651 43.4837 23.2794 43.4837 19.1481C43.4837 14.9583 40.0749 11.5495 35.8847 11.5495ZM35.8847 25.4956C35.821 25.4959 34.7021 25.4907 33.4566 25.5197C32.9844 19.6105 28.0284 14.9457 21.9999 14.9457C15.9601 14.9457 10.9969 19.6281 10.5407 25.5529L8.12012 25.4957C4.61722 25.4957 1.76762 22.6483 1.76762 19.1483C1.76762 15.3704 5.0696 12.4679 8.67605 12.8285C9.1298 12.8714 9.47536 12.4362 9.3315 12.007C9.05813 11.1915 8.91943 10.3318 8.91943 9.45236C8.91943 4.96385 12.5712 1.31202 17.0599 1.31202C20.8738 1.31202 24.1334 3.90621 24.9864 7.62078C25.0899 8.07126 25.6326 8.25955 25.9928 7.96461C29.2307 5.31241 34.1685 8.04746 33.4688 12.3089C33.3952 12.76 33.8126 13.1313 34.2481 13.0147C34.7819 12.8724 35.3321 12.8005 35.8846 12.8011C39.3846 12.8011 42.232 15.6485 42.232 19.1483C42.2322 22.6482 39.3848 25.4956 35.8847 25.4956Z"
                      className="group-hover/feature-item:fill-[#2B3944] fill-[#FFFFFF] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"
                    ></path>
                    <path
                      fill="white"
                      d="M29.3726 26.4432C29.3726 26.7889 29.6527 27.0689 29.9983 27.0689C30.3439 27.0689 30.624 26.7889 30.624 26.4432C30.624 21.6879 26.7551 17.819 21.9997 17.819C21.6541 17.819 21.374 18.099 21.374 18.4447C21.374 18.7903 21.6541 19.0704 21.9997 19.0704C26.0652 19.0704 29.3726 22.3777 29.3726 26.4432ZM21.9997 33.816C17.9343 33.816 14.6269 30.5087 14.6269 26.4431C14.6269 26.0975 14.3468 25.8174 14.0012 25.8174C13.6556 25.8174 13.3755 26.0975 13.3755 26.4431C13.3755 31.1985 17.2444 35.0674 21.9997 35.0674C22.0819 35.0674 22.1633 35.0512 22.2392 35.0198C22.3151 34.9884 22.3841 34.9423 22.4422 34.8842C22.5003 34.8261 22.5464 34.7571 22.5778 34.6812C22.6093 34.6052 22.6255 34.5239 22.6255 34.4417C22.6255 34.3595 22.6093 34.2781 22.5778 34.2022C22.5464 34.1263 22.5003 34.0573 22.4422 33.9992C22.3841 33.9411 22.3151 33.895 22.2392 33.8636C22.1633 33.8321 22.0819 33.816 21.9997 33.816ZM22.6267 30.8637C23.9871 30.8269 25.0833 29.7113 25.0833 28.3422C25.0833 26.9499 23.9505 25.8174 22.5583 25.8174H21.4413C20.7392 25.8174 20.1678 25.2461 20.1678 24.5439C20.1678 23.8418 20.7391 23.2707 21.4413 23.2707H22.5026C23.2047 23.2707 23.7758 23.8418 23.7758 24.5439C23.7758 24.8896 24.0559 25.1696 24.4015 25.1696C24.7472 25.1696 25.0272 24.8896 25.0272 24.5439C25.0272 23.1936 23.9611 22.0908 22.6267 22.0254V21.2649C22.6267 20.9193 22.3467 20.6392 22.001 20.6392C21.6554 20.6392 21.3753 20.9193 21.3753 21.2649V22.0225C20.0138 22.0579 18.9164 23.1742 18.9164 24.5442C18.9164 25.9365 20.0491 27.0689 21.4413 27.0689H22.5583C23.2604 27.0689 23.8318 27.6401 23.8318 28.3422C23.8318 29.0443 23.2605 29.6157 22.5583 29.6157H21.497C20.7949 29.6157 20.2238 29.0444 20.2238 28.3422C20.2238 27.9965 19.9437 27.7165 19.5981 27.7165C19.2524 27.7165 18.9723 27.9965 18.9723 28.3422C18.9723 29.6933 20.0398 30.7968 21.3753 30.861V31.6215C21.3753 31.9671 21.6554 32.2472 22.001 32.2472C22.3467 32.2472 22.6267 31.9671 22.6267 31.6215V30.8637Z"
                      className="group-hover/feature-item:fill-[#2B3944] fill-[#FFFFFF] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"
                    ></path>
                  </AnimatedElement>
                </div>
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] tracking-[0.01em]">
                  {" Cost-Effectiveness"}
                </h5>
                <span className="mt-4.75 mb-2.5 w-36.25 max-[1199px]:w-full relative inline-block border-[rgba(255,255,255,0.14)] border-solid [border-width:0px_0px_1px_0px] after:absolute after:[content:''] after:w-17.5 after:[background:#FFFFFF] after:inset-s-0 after:h-0.5 after:top-[50%] after:transform-[translateY(-50%)]"></span>
                <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[rgba(255,255,255,0.8)] leading-7">
                  {
                    " We provide a antenna base on facts hype, to help improve\n                                    returns\n                                    your.\n                                "
                  }
                </p>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.5}
                duration={1}
                data-wow-delay=".5s"
                data-wow-duration="1s"
                className="group/feature-item"
              >
                <div className="mb-5 group-hover/feature-item:[background:#FFFFFF] [background:#9D0026] w-17.5 h-17.5 flex items-center justify-center rounded-[3px] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none">
                  <AnimatedElement
                    as="svg"
                    effect="skew"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 38"
                    className="align-middle w-11 h-10"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5959 36.5456C10.0034 36.5456 9.52067 36.0625 9.52067 35.4686C9.52067 34.8755 10.0034 34.3925 10.5959 34.3925C11.1884 34.3925 11.6758 34.8756 11.6758 35.4686C11.6758 36.0626 11.1884 36.5456 10.5959 36.5456ZM10.5959 1.45436C11.1884 1.45436 11.6758 1.93651 11.6758 2.53042C11.6758 3.12345 11.1884 3.60657 10.5959 3.60657C10.0034 3.60657 9.52067 3.12345 9.52067 2.53042C9.52067 1.93651 10.0034 1.45436 10.5959 1.45436ZM10.5959 33.2605C9.97941 33.2605 9.42519 33.5147 9.02373 33.9232L1.98989 29.9241V8.07486L9.02373 4.07676C9.4251 4.48481 9.97941 4.73861 10.5959 4.73861C11.8144 4.73861 12.8035 3.74755 12.8035 2.53051C12.8035 1.3125 11.8144 0.322415 10.5959 0.322415C9.13189 0.322415 8.09401 1.71968 8.45992 3.09248L1.14413 7.25303C1.05726 7.30259 0.985011 7.3742 0.934672 7.46062C0.884332 7.54704 0.857686 7.64521 0.857422 7.74521V30.2539C0.857515 30.354 0.884089 30.4522 0.934446 30.5387C0.984803 30.6251 1.05715 30.6967 1.14413 30.7461L8.45992 34.9067C8.09401 36.2795 9.13215 37.6777 10.5959 37.6777C11.8144 37.6777 12.8035 36.6867 12.8035 35.4687C12.8035 34.2515 11.8143 33.2605 10.5959 33.2605ZM25.3994 36.5456C24.8069 36.5456 24.3242 36.0625 24.3242 35.4686C24.3242 34.8755 24.8068 34.3925 25.3994 34.3925C25.992 34.3925 26.4746 34.8756 26.4746 35.4686C26.4746 36.0626 25.9919 36.5456 25.3994 36.5456ZM25.3994 3.60657C24.8069 3.60657 24.3242 3.12345 24.3242 2.53042C24.3242 1.93651 24.8068 1.45436 25.3994 1.45436C25.992 1.45436 26.4746 1.93651 26.4746 2.53042C26.4746 3.12345 25.9919 3.60657 25.3994 3.60657ZM34.8511 7.25294L27.5353 3.09239C27.9013 1.72012 26.8636 0.322327 25.3994 0.322327C24.1809 0.322327 23.1917 1.31241 23.1917 2.53042C23.1917 3.74746 24.1809 4.73852 25.3994 4.73852C26.0158 4.73852 26.5749 4.48481 26.9763 4.07667L34.0101 8.07477V29.9241L26.9763 33.9232C26.5749 33.5146 26.0158 33.2605 25.3994 33.2605C24.1809 33.2605 23.1917 34.2515 23.1917 35.4686C23.1917 36.6866 24.1809 37.6776 25.3994 37.6776C26.8634 37.6776 27.9013 36.279 27.5353 34.9066L34.8511 30.746C34.9394 30.6977 35.013 30.6265 35.0643 30.5399C35.1155 30.4533 35.1426 30.3545 35.1426 30.2539V7.74513C35.1426 7.54202 35.0327 7.35423 34.8511 7.25294ZM17.9976 30.2194L6.72535 24.6507L11.1693 22.4564L17.7491 25.7063C17.9045 25.785 18.0931 25.7837 18.2509 25.7063L24.826 22.4564L29.2699 24.6507L17.9976 30.2194ZM6.72535 18.9997L11.1693 16.8054L17.7491 20.0547C17.9063 20.1339 18.0918 20.1324 18.2509 20.0547L24.826 16.8054L29.2699 18.9997L17.9976 24.5676L6.72535 18.9997ZM6.72535 13.3483L17.9976 7.78041L29.2699 13.3483L17.9976 18.9161L6.72535 13.3483ZM31.1144 24.6507C31.1144 24.8667 30.9901 25.0626 30.799 25.1587L18.2509 31.3582C18.0922 31.4346 17.9059 31.4361 17.7491 31.3572L5.19617 25.1587C4.77782 24.9503 4.77677 24.3517 5.19617 24.1437L9.8886 21.8252L5.19617 19.5072C4.77756 19.2992 4.77668 18.7008 5.19617 18.4918L9.8886 16.1738L5.19617 13.8553C4.77729 13.6476 4.77729 13.049 5.19617 12.8414L17.7491 6.64187C17.8271 6.60323 17.913 6.58313 18 6.58313C18.087 6.58313 18.1729 6.60323 18.2509 6.64187L30.799 12.8414C31.2179 13.0491 31.2179 13.6476 30.799 13.8553L26.1066 16.1738L30.799 18.4918C31.2185 18.7008 31.2176 19.2992 30.799 19.5072L26.1066 21.8252L30.799 24.1437C30.9901 24.2388 31.1144 24.4356 31.1144 24.6507Z"
                      className="group-hover/feature-item:fill-[#2B3944] fill-[#FFFFFF] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"
                    ></path>
                  </AnimatedElement>
                </div>
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] tracking-[0.01em]">
                  {" Innovative Technology"}
                </h5>
                <span className="mt-4.75 mb-2.5 w-36.25 max-[1199px]:w-full relative inline-block border-[rgba(255,255,255,0.14)] border-solid [border-width:0px_0px_1px_0px] after:absolute after:[content:''] after:w-17.5 after:[background:#FFFFFF] after:inset-s-0 after:h-0.5 after:top-[50%] after:transform-[translateY(-50%)]"></span>
                <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[rgba(255,255,255,0.8)] leading-7">
                  {
                    " Our mission is to empower businesses with the insight\n                                    structure and\n                                    tools."
                  }
                </p>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.7}
                duration={1}
                data-wow-delay=".7s"
                data-wow-duration="1s"
                className="group/feature-item"
              >
                <div className="mb-5 group-hover/feature-item:[background:#FFFFFF] [background:#9D0026] w-17.5 h-17.5 flex items-center justify-center rounded-[3px] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none">
                  <AnimatedElement
                    as="svg"
                    effect="skew"
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    className="align-middle w-11 h-10"
                  >
                    <path
                      fill="white"
                      d="M5.29375 29.5969L3.67812 30.1194L2.30312 25.9119L0.996875 26.3381L2.37188 30.5387C2.48188 30.8894 2.72938 31.1781 3.0525 31.3431C3.37563 31.5081 3.74687 31.5425 4.10437 31.4256L5.72 30.9031C6.47625 32.285 7.40437 33.5706 8.4975 34.7325L7.50062 36.1075C7.28062 36.4031 7.19125 36.7675 7.24625 37.125C7.30125 37.4894 7.50063 37.8125 7.79625 38.0325L11.1306 40.4525C11.4331 40.6725 11.7975 40.7619 12.1619 40.7C12.5262 40.645 12.8425 40.4456 13.0556 40.15L14.0594 38.7819C15.4894 39.4694 17.0019 39.9575 18.5556 40.2463V41.9444C18.5556 42.7006 19.1744 43.3194 19.9306 43.3194H24.0556C24.8119 43.3194 25.4306 42.7006 25.4306 41.9444V40.2463C26.9844 39.9575 28.4969 39.4625 29.9338 38.775L30.9237 40.1431C31.1369 40.4456 31.4531 40.6381 31.8175 40.7C32.1887 40.7619 32.5531 40.6725 32.8487 40.4525L36.1831 38.0325C36.4856 37.8125 36.6781 37.4894 36.7331 37.125C36.7881 36.7606 36.6987 36.4031 36.4856 36.1075L35.4956 34.7256C36.5819 33.5775 37.5169 32.2919 38.2663 30.8962L39.8819 31.4256C40.2325 31.5356 40.6038 31.5081 40.9338 31.3431C41.2638 31.1712 41.5044 30.8894 41.6144 30.5387L42.9894 26.3312L41.6831 25.905L40.3081 30.1194L38.6925 29.59C38.0737 29.3838 37.3931 29.6588 37.0563 30.2431C36.357 31.5264 35.4951 32.7142 34.4919 33.7769C34.0312 34.265 33.9831 35.0075 34.375 35.53L35.3719 36.905L32.0375 39.325L31.0338 37.9431C30.8431 37.6854 30.5687 37.502 30.2577 37.4242C29.9467 37.3465 29.6183 37.3792 29.3288 37.5169C28.0019 38.1494 26.6063 38.6031 25.1831 38.8713C24.53 38.995 24.0487 39.5588 24.0487 40.2188V41.9169H19.9237V40.2188C19.9237 39.5588 19.4494 38.9881 18.7894 38.8713C17.3594 38.6031 15.9637 38.1494 14.63 37.51C14.025 37.235 13.3237 37.4069 12.9319 37.9431L11.935 39.3181L8.60063 36.8981L9.59062 35.53C9.98938 35.0006 9.94125 34.2581 9.47375 33.77C8.46719 32.7034 7.60293 31.511 6.9025 30.2225C6.5725 29.6519 5.89188 29.3769 5.27313 29.5831L5.29375 29.5969Z"
                      className="group-hover/feature-item:fill-[#2B3944] fill-[#FFFFFF] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"
                    ></path>
                    <path
                      fill="white"
                      d="M22 36.4375C28.3456 36.4375 33.88 32.3744 35.7706 26.3312L34.4575 25.9188C32.7456 31.3844 27.7406 35.0625 21.9931 35.0625C16.2456 35.0625 11.2406 31.3913 9.52875 25.9188L8.21562 26.3312C10.1062 32.3744 15.6406 36.4375 21.9862 36.4375H22ZM0.6875 23.375H43.3125V24.75H0.6875V23.375ZM40.5625 22V12.375C40.5625 11.9969 40.2531 11.6875 39.875 11.6875H34.375V1.375C34.375 0.996875 34.0656 0.6875 33.6875 0.6875H25.4375C25.0594 0.6875 24.75 0.996875 24.75 1.375V8.25H19.25V5.5C19.25 5.29375 19.1606 5.10125 19.0025 4.97062L14.8775 1.53313C14.7541 1.42985 14.5984 1.37326 14.4375 1.37326C14.2766 1.37326 14.1209 1.42985 13.9975 1.53313L9.8725 4.97062C9.71437 5.10125 9.625 5.29375 9.625 5.5V11H4.125C3.74688 11 3.4375 11.3094 3.4375 11.6875V22H4.8125V12.375H9.625V22H11V5.82313L14.4375 2.95625L17.875 5.82313V22H19.25V9.625H24.75V22H26.125V2.0625H33V22H34.375V13.0625H39.1875V22H40.5625Z"
                      className="group-hover/feature-item:fill-[#2B3944] fill-[#FFFFFF] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"
                    ></path>
                    <path
                      fill="white"
                      d="M27.5 4.125H28.875V5.5H27.5V4.125ZM30.25 4.125H31.625V5.5H30.25V4.125ZM27.5 7.5625H28.875V8.9375H27.5V7.5625ZM30.25 7.5625H31.625V8.9375H30.25V7.5625ZM27.5 11H28.875V12.375H27.5V11ZM30.25 11H31.625V12.375H30.25V11ZM12.375 6.875H16.5V8.25H12.375V6.875ZM12.375 10.3125H16.5V11.6875H12.375V10.3125Z"
                      className="group-hover/feature-item:fill-[#2B3944] fill-[#FFFFFF] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"
                    ></path>
                  </AnimatedElement>
                </div>
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] tracking-[0.01em]">
                  {" Industry Expertise"}
                </h5>
                <span className="mt-4.75 mb-2.5 w-36.25 max-[1199px]:w-full relative inline-block border-[rgba(255,255,255,0.14)] border-solid [border-width:0px_0px_1px_0px] after:absolute after:[content:''] after:w-17.5 after:[background:#FFFFFF] after:inset-s-0 after:h-0.5 after:top-[50%] after:transform-[translateY(-50%)]"></span>
                <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[rgba(255,255,255,0.8)] leading-7">
                  {
                    " We begin by understanding your current state goals\n                                    challenges. "
                  }
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[58.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[83.33333333%] min-[992px]:max-[1200px]:w-[66.66666667%] max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="text-center! mb-11.25">
              <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                {
                  "\n                                The expert teams member\n                            "
                }
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                {"Meet with consultant expert\n                            "}
              </AnimatedElement>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="grid grid-cols-[repeat(3,1fr)] max-[767px]:grid-cols-[repeat(1,1fr)] min-[767px]:max-[991px]:grid-cols-[repeat(2,1fr)] gap-7.5">
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
                data-wow-duration="1s"
                className="group/team-item"
              >
                <div className="mb-5.25 relative overflow-hidden rounded-md">
                  <SiteLink
                    href="/contact-us"
                    className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    <SiteImage
                      src="/assets/images/team/team-thumb-01.webp"
                      alt="image"
                      className="align-middle max-w-full w-full transform-[scale(1.02)] group-hover/team-item:transform-[scale3d(1.1,1.1,1)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </SiteLink>
                </div>
                <div className="pb-6.25 after:group-hover/team-item:w-full after:group-hover/team-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:#DBDEE1] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                  <div>
                    <h5 className="mt-0 mb-1.25 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] tracking-[0.01em] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {
                          "Leslie\n                                                Alexander"
                        }
                      </SiteLink>
                    </h5>
                    <span className="text-[16px] font-medium tracking-[0.01em]">
                      {"Sr. Analyst Finance"}
                    </span>
                  </div>
                  <div>
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
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] group-hover/team-item:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/team-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/team-item:transform-[translateX(0%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/team-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.5}
                duration={1}
                data-wow-delay=".5s"
                data-wow-duration="1s"
                className="group/team-item"
              >
                <div className="mb-5.25 relative overflow-hidden rounded-md">
                  <SiteLink
                    href="/contact-us"
                    className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    <SiteImage
                      src="/assets/images/team/team-thumb-02.webp"
                      alt="image"
                      className="align-middle max-w-full w-full transform-[scale(1.02)] group-hover/team-item:transform-[scale3d(1.1,1.1,1)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </SiteLink>
                </div>
                <div className="pb-6.25 after:group-hover/team-item:w-full after:group-hover/team-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:#DBDEE1] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                  <div>
                    <h5 className="mt-0 mb-1.25 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] tracking-[0.01em] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"Cameron Williamson"}
                      </SiteLink>
                    </h5>
                    <span className="text-[16px] font-medium tracking-[0.01em]">
                      {"HR-Adviseur"}
                    </span>
                  </div>
                  <div>
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
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] group-hover/team-item:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/team-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/team-item:transform-[translateX(0%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/team-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.7}
                duration={1}
                data-wow-delay=".7s"
                data-wow-duration="1s"
                className="group/team-item"
              >
                <div className="mb-5.25 relative overflow-hidden rounded-md">
                  <SiteLink
                    href="/contact-us"
                    className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    <SiteImage
                      src="/assets/images/team/team-thumb-03.webp"
                      alt="image"
                      className="align-middle max-w-full w-full transform-[scale(1.02)] group-hover/team-item:transform-[scale3d(1.1,1.1,1)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </SiteLink>
                </div>
                <div className="pb-6.25 after:group-hover/team-item:w-full after:group-hover/team-item:inset-s-0 flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-px before:[background:#DBDEE1] before:bottom-0 before:inset-e-0 after:absolute after:[content:''] after:w-0 after:h-px after:[background:#AB052D] after:bottom-0 after:inset-e-0 after:[transition:all_0.5s_ease-in-out] after:motion-reduce:transition-none">
                  <div>
                    <h5 className="mt-0 mb-1.25 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] tracking-[0.01em] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"Darrell Steward"}
                      </SiteLink>
                    </h5>
                    <span className="text-[16px] font-medium tracking-[0.01em]">
                      {"Product Manager"}
                    </span>
                  </div>
                  <div>
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
                          className="align-middle group-hover/btn:transform-[translateX(150%)] w-4.25 group-hover/icon-box:transform-[translateX(150%)] group-hover/team-item:transform-[translateX(150%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/team-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle group-hover/btn:transform-[translateX(0%)] w-4.25 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] group-hover/team-item:transform-[translateX(0%)] [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:fill-[#AB052D] fill-[#2B3944] group-hover/team-item:fill-[#AB052D]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureAreaSection3() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 relative z-1">
      <div className="bg-center bg-cover bg-no-repeat bg-[url('/assets/bg/feature-bg-thumb-02.webp')]! h-full absolute w-full top-0 left-0 z-[-1]"></div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[repeat(2,1fr)] max-[991px]:grid-cols-[1fr] min-[991px]:max-[1199px]:grid-cols-[410px_1fr] gap-7.5 items-center">
              <div>
                <div className="mb-6.25">
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                    {
                      "\n                                        Building Trust, Delivering Excellence.\n                                    "
                    }
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-0 font-semibold leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {
                      "Building\n                                        trust,\n                                        delivering\n                                        excellence."
                    }
                  </AnimatedElement>
                </div>
                <div className="w-117.5 max-[575px]:w-full">
                  <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 grid grid-cols-[repeat(2,1fr)] max-[575px]:grid-cols-[repeat(1,1fr)] min-[991px]:max-[1199px]:grid-cols-[repeat(1,1fr)] gap-[20px_5px]">
                    <li className="list-none text-[rgba(255,255,255,0.9)] inline-flex items-center gap-3.25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="align-middle w-3 h-3 min-w-3"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="fill-[#FFFFFF]"
                        ></path>
                      </svg>
                      {
                        "\n                                            Regulatory Investigations\n                                        "
                      }
                    </li>
                    <li className="list-none text-[rgba(255,255,255,0.9)] inline-flex items-center gap-3.25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="align-middle w-3 h-3 min-w-3"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="fill-[#FFFFFF]"
                        ></path>
                      </svg>
                      {
                        "\n                                            Competitive Work Analysis\n                                        "
                      }
                    </li>
                    <li className="list-none text-[rgba(255,255,255,0.9)] inline-flex items-center gap-3.25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="align-middle w-3 h-3 min-w-3"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="fill-[#FFFFFF]"
                        ></path>
                      </svg>
                      {
                        "\n                                            Anit- Competitive Conduct\n                                        "
                      }
                    </li>
                    <li className="list-none text-[rgba(255,255,255,0.9)] inline-flex items-center gap-3.25">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="align-middle w-3 h-3 min-w-3"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="fill-[#FFFFFF]"
                        ></path>
                      </svg>
                      {
                        "\n                                            Innovation, Strategy, Success.\n                                        "
                      }
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-7.5 [justify-content:end] max-[991px]:[justify-content:start]">
                  <AnimatedElement
                    as="div"
                    effect="fade"
                    delay={0.1}
                    duration={1}
                    data-wow-delay=".1s"
                    data-wow-duration="1s"
                    className="pt-3.75 pb-3.75 inline-flex items-center gap-5 ps-4 pe-4.5 [border:1px_solid_rgba(255,255,255,0.14)] [backdrop-filter:blur(10px)] rounded-[100px] [background:rgba(255,255,255,0.1)] hover:[background:#AB052D] hover:border-[#AB052D] hover:[backdrop-filter:unset]"
                  >
                    <div>
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-01.webp"
                        alt="image"
                        className="align-middle max-w-full w-16 max-[991px]:w-13.75 min-w-16 max-[991px]:min-w-13.75 h-16 max-[991px]:h-13.75 rounded-[100px]"
                      />
                    </div>
                    <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"integrity"}
                    </h5>
                  </AnimatedElement>
                  <AnimatedElement
                    as="div"
                    effect="fade"
                    delay={0.3}
                    duration={1}
                    data-wow-delay=".3s"
                    data-wow-duration="1s"
                    className="pt-3.75 pb-3.75 inline-flex items-center gap-5 ps-4 pe-4.5 [border:1px_solid_rgba(255,255,255,0.14)] [backdrop-filter:blur(10px)] rounded-[100px] [background:rgba(255,255,255,0.1)] hover:[background:#AB052D] hover:border-[#AB052D] hover:[backdrop-filter:unset]"
                  >
                    <div>
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-02.webp"
                        alt="image"
                        className="align-middle max-w-full w-16 max-[991px]:w-13.75 min-w-16 max-[991px]:min-w-13.75 h-16 max-[991px]:h-13.75 rounded-[100px]"
                      />
                    </div>
                    <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {" Responsibility"}
                    </h5>
                  </AnimatedElement>
                  <AnimatedElement
                    as="div"
                    effect="fade"
                    delay={0.5}
                    duration={1}
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                    className="pt-3.75 pb-3.75 inline-flex items-center gap-5 ps-4 pe-4.5 [border:1px_solid_rgba(255,255,255,0.14)] [backdrop-filter:blur(10px)] rounded-[100px] [background:rgba(255,255,255,0.1)] hover:[background:#AB052D] hover:border-[#AB052D] hover:[backdrop-filter:unset]"
                  >
                    <div>
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-03.webp"
                        alt="image"
                        className="align-middle max-w-full w-16 max-[991px]:w-13.75 min-w-16 max-[991px]:min-w-13.75 h-16 max-[991px]:h-13.75 rounded-[100px]"
                      />
                    </div>
                    <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"Accessibility"}
                    </h5>
                  </AnimatedElement>
                  <AnimatedElement
                    as="div"
                    effect="fade"
                    delay={0.7}
                    duration={1}
                    data-wow-delay=".7s"
                    data-wow-duration="1s"
                    className="pt-3.75 pb-3.75 inline-flex items-center gap-5 ps-4 pe-4.5 [border:1px_solid_rgba(255,255,255,0.14)] [backdrop-filter:blur(10px)] rounded-[100px] [background:rgba(255,255,255,0.1)] hover:[background:#AB052D] hover:border-[#AB052D] hover:[backdrop-filter:unset]"
                  >
                    <div>
                      <SiteImage
                        src="/assets/images/feature/feature-thumb-04.webp"
                        alt="image"
                        className="align-middle max-w-full w-16 max-[991px]:w-13.75 min-w-16 max-[991px]:min-w-13.75 h-16 max-[991px]:h-13.75 rounded-[100px]"
                      />
                    </div>
                    <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      {"Excellence"}
                    </h5>
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 relative z-1 overflow-x-clip [background:#2B3944]">
      <div className="bg-center bg-cover bg-no-repeat absolute w-full h-full top-0 left-0 z-[-1] bg-[url('/assets/bg/testimonial-bg-thumb-02.webp')]!"></div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
          <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full min-[992px]:max-[1400px]:w-[41.66666667%] max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="relative me-7.5 max-[1199px]:me-0 before:absolute before:[content:''] before:w-full before:h-full before:[background:linear-gradient(180deg,rgba(43,57,68,0)_36.01%,#2B3944_89.31%)] before:top-0 before:left-0 before:z-1">
              <SiteImage
                src="/assets/images/testimonial/testimonial-thumb-01.webp"
                alt="image"
                className="align-middle max-w-full w-full"
              />
            </div>
          </div>
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full min-[992px]:max-[1400px]:w-[58.33333333%] max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
              <div className="mb-11.25">
                <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                  {
                    "\n                                    Our Clients testimonials\n                                "
                  }
                </span>
                <AnimatedElement
                  as="h2"
                  effect="split"
                  delay={0}
                  duration={0.8}
                  className="mt-0 mb-0 font-semibold leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                >
                  {
                    "What our customers\n                                    say?\n                                "
                  }
                </AnimatedElement>
              </div>
              <div className="-me-103.75 max-[991px]:me-0 min-[991px]:max-[1600px]:-me-82.5">
                <ContentCarousel variant="testimonials" items={3}>
                  <div>
                    <div className="pt-8.75 max-[1600px]:pt-6.25 pb-8.75 max-[1600px]:pb-6.25 [background:#2F3E4B] [border:1px_solid_rgba(255,255,255,0.1)] rounded-md shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] ps-10 max-[1600px]:ps-7.5 pe-10 max-[1600px]:pe-7.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="mt-0 mb-1.25 font-semibold leading-[1.4] text-[#FFFFFF] text-[20px] [word-break:break-word] tracking-[0.16px]">
                            {"Abdur Rashid"}
                          </h5>
                          <span className="text-[16px] text-[#FFFFFF] font-medium tracking-[0.16px]">
                            {
                              "Founder &\n                                                            CEO"
                            }
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="44"
                            viewBox="0 0 60 44"
                            fill="none"
                            className="align-middle w-15"
                          >
                            <path
                              d="M12.7244 28.0195C11.6004 34.2343 9.70513 38.7081 8.20652 41.485C7.61148 42.5648 8.82362 43.777 9.88146 43.1599C22.4434 35.8431 27.953 25.1765 28.6362 16.6036C29.2312 9.22068 24.1844 1.61742 16.5591 0.229C8.9338 -1.15942 1.61704 3.90943 0.228614 11.5347C-1.22592 19.5347 4.41591 27.2261 12.7244 28.0195Z"
                              fill="#3D4C57"
                              className="fill-[#3D4C57]"
                            ></path>
                            <path
                              d="M44.0406 28.0195C42.9166 34.2343 41.0213 38.7081 39.5227 41.485C38.9277 42.5648 40.1398 43.777 41.1976 43.1599C53.7595 35.8431 59.2692 25.1765 59.9524 16.6036C60.5474 9.22068 55.5006 1.61742 47.8753 0.229C40.25 -1.15942 32.9332 3.90943 31.5448 11.5347C30.0902 19.5347 35.7321 27.2261 44.0406 28.0195Z"
                              fill="#3D4C57"
                              className="fill-[#3D4C57]"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="mt-13.75 mb-8.75 flex items-center gap-4.5">
                        <span className="text-[60px] max-[575px]:text-[40px] min-[575px]:max-[1600px]:text-[50px] font-semibold text-[#FFFFFF] leading-[0.9]">
                          {"5.0"}
                        </span>
                        <div>
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                        </div>
                      </div>
                      <p className="mt-0 mb-0 text-[20px] max-[991px]:text-[18px] [font-weight:normal] text-[rgba(255,255,255,0.7)] leading-8 italic tracking-[0.32px]">
                        {
                          " Outstanding support and expertise! Our\n                                                    startup\n                                                    achieved\n                                                    significant growth thanks to their guidance. Truly professional.\n                                                "
                        }
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="pt-8.75 max-[1600px]:pt-6.25 pb-8.75 max-[1600px]:pb-6.25 [background:#2F3E4B] [border:1px_solid_rgba(255,255,255,0.1)] rounded-md shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] ps-10 max-[1600px]:ps-7.5 pe-10 max-[1600px]:pe-7.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="mt-0 mb-1.25 font-semibold leading-[1.4] text-[#FFFFFF] text-[20px] [word-break:break-word] tracking-[0.16px]">
                            {"Ronald Richards"}
                          </h5>
                          <span className="text-[16px] text-[#FFFFFF] font-medium tracking-[0.16px]">
                            {
                              "Industries\n                                                            Manager"
                            }
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="44"
                            viewBox="0 0 60 44"
                            fill="none"
                            className="align-middle w-15"
                          >
                            <path
                              d="M12.7244 28.0195C11.6004 34.2343 9.70513 38.7081 8.20652 41.485C7.61148 42.5648 8.82362 43.777 9.88146 43.1599C22.4434 35.8431 27.953 25.1765 28.6362 16.6036C29.2312 9.22068 24.1844 1.61742 16.5591 0.229C8.9338 -1.15942 1.61704 3.90943 0.228614 11.5347C-1.22592 19.5347 4.41591 27.2261 12.7244 28.0195Z"
                              fill="#3D4C57"
                              className="fill-[#3D4C57]"
                            ></path>
                            <path
                              d="M44.0406 28.0195C42.9166 34.2343 41.0213 38.7081 39.5227 41.485C38.9277 42.5648 40.1398 43.777 41.1976 43.1599C53.7595 35.8431 59.2692 25.1765 59.9524 16.6036C60.5474 9.22068 55.5006 1.61742 47.8753 0.229C40.25 -1.15942 32.9332 3.90943 31.5448 11.5347C30.0902 19.5347 35.7321 27.2261 44.0406 28.0195Z"
                              fill="#3D4C57"
                              className="fill-[#3D4C57]"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="mt-13.75 mb-8.75 flex items-center gap-4.5">
                        <span className="text-[60px] max-[575px]:text-[40px] min-[575px]:max-[1600px]:text-[50px] font-semibold text-[#FFFFFF] leading-[0.9]">
                          {"4.5"}
                        </span>
                        <div>
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                        </div>
                      </div>
                      <p className="mt-0 mb-0 text-[20px] max-[991px]:text-[18px] [font-weight:normal] text-[rgba(255,255,255,0.7)] leading-8 italic tracking-[0.32px]">
                        {
                          " Exceptional service from start to\n                                                    finish. They\n                                                    understood our needs, delivered on time, and exceeded expectations.\n                                                    Highly\n                                                    recommend!\n                                                "
                        }
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="pt-8.75 max-[1600px]:pt-6.25 pb-8.75 max-[1600px]:pb-6.25 [background:#2F3E4B] [border:1px_solid_rgba(255,255,255,0.1)] rounded-md shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] ps-10 max-[1600px]:ps-7.5 pe-10 max-[1600px]:pe-7.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="mt-0 mb-1.25 font-semibold leading-[1.4] text-[#FFFFFF] text-[20px] [word-break:break-word] tracking-[0.16px]">
                            {"Leslie Alexander"}
                          </h5>
                          <span className="text-[16px] text-[#FFFFFF] font-medium tracking-[0.16px]">
                            {
                              "President of\n                                                            Sales"
                            }
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="44"
                            viewBox="0 0 60 44"
                            fill="none"
                            className="align-middle w-15"
                          >
                            <path
                              d="M12.7244 28.0195C11.6004 34.2343 9.70513 38.7081 8.20652 41.485C7.61148 42.5648 8.82362 43.777 9.88146 43.1599C22.4434 35.8431 27.953 25.1765 28.6362 16.6036C29.2312 9.22068 24.1844 1.61742 16.5591 0.229C8.9338 -1.15942 1.61704 3.90943 0.228614 11.5347C-1.22592 19.5347 4.41591 27.2261 12.7244 28.0195Z"
                              fill="#3D4C57"
                              className="fill-[#3D4C57]"
                            ></path>
                            <path
                              d="M44.0406 28.0195C42.9166 34.2343 41.0213 38.7081 39.5227 41.485C38.9277 42.5648 40.1398 43.777 41.1976 43.1599C53.7595 35.8431 59.2692 25.1765 59.9524 16.6036C60.5474 9.22068 55.5006 1.61742 47.8753 0.229C40.25 -1.15942 32.9332 3.90943 31.5448 11.5347C30.0902 19.5347 35.7321 27.2261 44.0406 28.0195Z"
                              fill="#3D4C57"
                              className="fill-[#3D4C57]"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="mt-13.75 mb-8.75 flex items-center gap-4.5">
                        <span className="text-[60px] max-[575px]:text-[40px] min-[575px]:max-[1600px]:text-[50px] font-semibold text-[#FFFFFF] leading-[0.9]">
                          {"5.0"}
                        </span>
                        <div>
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                        </div>
                      </div>
                      <p className="mt-0 mb-0 text-[20px] max-[991px]:text-[18px] [font-weight:normal] text-[rgba(255,255,255,0.7)] leading-8 italic tracking-[0.32px]">
                        {
                          " We believe that every business is\n                                                    unique our\n                                                    approach never one size fits all. We tailor our strategies to fit\n                                                    your goals is\n                                                    and industry.\n                                                "
                        }
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="pt-8.75 max-[1600px]:pt-6.25 pb-8.75 max-[1600px]:pb-6.25 [background:#2F3E4B] [border:1px_solid_rgba(255,255,255,0.1)] rounded-md shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] ps-10 max-[1600px]:ps-7.5 pe-10 max-[1600px]:pe-7.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="mt-0 mb-1.25 font-semibold leading-[1.4] text-[#FFFFFF] text-[20px] [word-break:break-word] tracking-[0.16px]">
                            {"Nayeem"}
                          </h5>
                          <span className="text-[16px] text-[#FFFFFF] font-medium tracking-[0.16px]">
                            {
                              "HR\n                                                            Manager"
                            }
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="44"
                            viewBox="0 0 60 44"
                            fill="none"
                            className="align-middle w-15"
                          >
                            <path
                              d="M12.7244 28.0195C11.6004 34.2343 9.70513 38.7081 8.20652 41.485C7.61148 42.5648 8.82362 43.777 9.88146 43.1599C22.4434 35.8431 27.953 25.1765 28.6362 16.6036C29.2312 9.22068 24.1844 1.61742 16.5591 0.229C8.9338 -1.15942 1.61704 3.90943 0.228614 11.5347C-1.22592 19.5347 4.41591 27.2261 12.7244 28.0195Z"
                              fill="#3D4C57"
                              className="fill-[#3D4C57]"
                            ></path>
                            <path
                              d="M44.0406 28.0195C42.9166 34.2343 41.0213 38.7081 39.5227 41.485C38.9277 42.5648 40.1398 43.777 41.1976 43.1599C53.7595 35.8431 59.2692 25.1765 59.9524 16.6036C60.5474 9.22068 55.5006 1.61742 47.8753 0.229C40.25 -1.15942 32.9332 3.90943 31.5448 11.5347C30.0902 19.5347 35.7321 27.2261 44.0406 28.0195Z"
                              fill="#3D4C57"
                              className="fill-[#3D4C57]"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="mt-13.75 mb-8.75 flex items-center gap-4.5">
                        <span className="text-[60px] max-[575px]:text-[40px] min-[575px]:max-[1600px]:text-[50px] font-semibold text-[#FFFFFF] leading-[0.9]">
                          {"4.5"}
                        </span>
                        <div>
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                          <Icon
                            name="star"
                            className="inline-block not-italic text-[#FF8E2B] text-[17px]"
                          />
                        </div>
                      </div>
                      <p className="mt-0 mb-0 text-[20px] max-[991px]:text-[18px] [font-weight:normal] text-[rgba(255,255,255,0.7)] leading-8 italic tracking-[0.32px]">
                        {
                          " Professional, knowledgeable, and\n                                                    responsive. Their\n                                                    solutions transformed our operations, making our workflows seamless.\n                                                "
                        }
                      </p>
                    </div>
                  </div>
                </ContentCarousel>
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
    <div className="relative z-1">
      <div className="w-full pr-0 pl-0 mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 mr-0 ml-0">
          <div className="shrink-0 w-full max-w-full pr-0 pl-0 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[auto_auto] max-[991px]:grid-cols-[auto]">
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.1}
                duration={1}
                data-wow-delay=".1s"
                data-wow-duration="1s"
                className="pt-9.5 pb-9.5 flex items-center gap-3.75 [justify-content:end] max-[991px]:justify-center ps-3.75 pe-32.5 max-[1199px]:pe-3.75 [background:#AB052D]"
              >
                <span className="bg-[#FFFFFF] w-4.25 min-w-4.25 h-6 flex items-center justify-center rounded-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="11"
                    viewBox="0 0 6 11"
                    fill="none"
                    className="align-middle"
                  >
                    <path
                      d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                      fill="#AB052D"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="mt-0 mb-0 text-[16px] font-medium text-[#FFFFFF] leading-7">
                    {
                      "Facing obstacles in business growth?\n                                        "
                    }
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:underline] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"Connect with us for guidance"}
                    </SiteLink>
                  </p>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
                data-wow-duration="1s"
                className="pt-9.5 pb-9.5 flex items-center gap-3.75 [justify-content:start] max-[991px]:justify-center ps-32.5 max-[1199px]:ps-3.75 pe-3.75 [background:#F8F8F9]"
              >
                <span className="bg-[#FFFFFF] w-4.25 min-w-4.25 h-6 flex items-center justify-center rounded-sm [border:1px_solid_#DBDEE1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="11"
                    viewBox="0 0 6 11"
                    fill="none"
                    className="align-middle"
                  >
                    <path
                      d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                      fill="#AB052D"
                    ></path>
                  </svg>
                </span>
                <div>
                  <p className="mt-0 mb-0 text-[16px] font-medium text-[#616C74] leading-7">
                    {
                      "Join the 14k + Businesses Using ICFC\n                                    "
                    }
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[58.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="text-center! mb-11.25">
              <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                {
                  "\n                                Read Our Blog & News\n                            "
                }
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-0 mb-3.75 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                {"Featured news and\n                                insights"}
              </AnimatedElement>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Read and update the latest news from us. donec eu magna quis felis.\n                            "
                }
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[repeat(3,1fr)] max-[767px]:grid-cols-[repeat(1,1fr)] min-[767px]:max-[1199px]:grid-cols-[repeat(2,1fr)] gap-7.5">
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
                data-wow-duration="1s"
                className="relative group/blog-item"
              >
                <div className="h-141.25 max-[991px]:h-125 rounded-md overflow-hidden relative z-1 before:absolute before:[content:''] before:w-full before:h-full before:top-0 before:left-0 before:[background:linear-gradient(180deg,rgba(43,57,68,0)_0%,#2B3944_92.33%)] before:z-1">
                  <SiteImage
                    src="/assets/images/blog/blog-thumb-01.webp"
                    alt="image"
                    className="align-middle max-w-full group-hover/blog-item:transform-[scale3d(1.1,1.1,1)] w-full h-full object-cover [transition:all_0.8s_ease] motion-reduce:transition-none"
                  />
                </div>
                <div className="w-full">
                  <div className="pt-8.75 pr-8.75 pb-8.75 pl-8.75 absolute top-0 left-0 z-2">
                    <SiteLink
                      href="/blog-details"
                      className="text-[#FFFFFF] [text-decoration:none] pt-1.5 pr-3 pb-1.5 pl-3 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:#2B3944] group-hover/blog-item:[background:#FFFFFF] group-hover/blog-item:text-[#2B3944] text-[14px] rounded-[3px] inline-flex items-center justify-center font-medium hover:[background:#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"September 23, 2025 "}
                    </SiteLink>
                  </div>
                  <div className="pt-8.75 pb-7.5 absolute bottom-0 left-0 ps-8.75 max-[575px]:ps-7.5 min-[575px]:max-[991px]:ps-6.25 pe-8.75 max-[575px]:pe-7.5 min-[575px]:max-[991px]:pe-6.25 z-1">
                    <div className="mb-4.25 flex items-center gap-5">
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="user"
                            className="inline-block not-italic"
                          />
                          <SiteLink
                            href="/contact-us"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            {
                              "\n                                                        ICFC\n                                                    "
                            }
                          </SiteLink>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="tag"
                            className="inline-block not-italic"
                          />
                          {
                            "\n                                                    Corporate"
                          }
                        </span>
                      </div>
                    </div>
                    <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {
                          " Insights That Driven Business Smarter\n                                                Forward"
                        }
                      </SiteLink>
                    </h5>
                  </div>
                </div>
                <div className="group-hover/blog-item:opacity-[1] group-hover/blog-item:visible absolute w-full h-full top-0 left-0 [background:#AB052D] z-1 rounded-md opacity-[0] invisible [transition:0.5s] motion-reduce:transition-none">
                  <div className="pt-28.75 pb-7.5 relative bottom-0 left-0 ps-8.75 max-[575px]:ps-7.5 min-[575px]:max-[991px]:ps-6.25 pe-8.75 max-[575px]:pe-7.5 min-[575px]:max-[991px]:pe-6.25 z-1 h-full">
                    <div className="mb-4.25 flex items-center gap-5">
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="user"
                            className="inline-block not-italic"
                          />
                          <SiteLink
                            href="/contact-us"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            {
                              "\n                                                        ICFC\n                                                    "
                            }
                          </SiteLink>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="tag"
                            className="inline-block not-italic"
                          />
                          {
                            "\n                                                    Corporate"
                          }
                        </span>
                      </div>
                    </div>
                    <h5 className="mt-0 mb-6.75 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-6.75 [word-break:break-word] [border-bottom:1px_solid_rgba(255,255,255,0.1254901961)]">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {
                          " Insights That Driven Business Smarter\n                                                Forward"
                        }
                      </SiteLink>
                    </h5>
                    <p className="mt-0 mb-38.25 max-[767px]:mb-20 min-[767px]:max-[991px]:mb-25 text-[17px] [font-weight:normal] text-[#FFFFFF] leading-7">
                      {
                        "Consulting empowers businesses with data-driven\n                                            strategies and\n                                            innovative solutions to achieve sustainable..."
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#FFFFFF] [text-decoration:underline] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-black [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-visible hover:[background:#2B3944] w-[unset] h-[unset] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        {
                          "Read More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.5}
                duration={1}
                data-wow-delay=".5s"
                data-wow-duration="1s"
                className="relative group/blog-item"
              >
                <div className="h-141.25 max-[991px]:h-125 rounded-md overflow-hidden relative z-1 before:absolute before:[content:''] before:w-full before:h-full before:top-0 before:left-0 before:[background:linear-gradient(180deg,rgba(43,57,68,0)_0%,#2B3944_92.33%)] before:z-1">
                  <SiteImage
                    src="/assets/images/blog/blog-thumb-02.webp"
                    alt="image"
                    className="align-middle max-w-full group-hover/blog-item:transform-[scale3d(1.1,1.1,1)] w-full h-full object-cover [transition:all_0.8s_ease] motion-reduce:transition-none"
                  />
                </div>
                <div className="w-full">
                  <div className="pt-8.75 pr-8.75 pb-8.75 pl-8.75 absolute top-0 left-0 z-2">
                    <SiteLink
                      href="/blog-details"
                      className="text-[#FFFFFF] [text-decoration:none] pt-1.5 pr-3 pb-1.5 pl-3 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:#2B3944] group-hover/blog-item:[background:#FFFFFF] group-hover/blog-item:text-[#2B3944] text-[14px] rounded-[3px] inline-flex items-center justify-center font-medium hover:[background:#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"August 26, 2025"}
                    </SiteLink>
                  </div>
                  <div className="pt-8.75 pb-7.5 absolute bottom-0 left-0 ps-8.75 max-[575px]:ps-7.5 min-[575px]:max-[991px]:ps-6.25 pe-8.75 max-[575px]:pe-7.5 min-[575px]:max-[991px]:pe-6.25 z-1">
                    <div className="mb-4.25 flex items-center gap-5">
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="user"
                            className="inline-block not-italic"
                          />
                          <SiteLink
                            href="/contact-us"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            {
                              "\n                                                        ICFC\n                                                    "
                            }
                          </SiteLink>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="tag"
                            className="inline-block not-italic"
                          />
                          {
                            "\n                                                    Consulting"
                          }
                        </span>
                      </div>
                    </div>
                    <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {
                          " How Strategic Planning Drives Business\n                                                Success"
                        }
                      </SiteLink>
                    </h5>
                  </div>
                </div>
                <div className="group-hover/blog-item:opacity-[1] group-hover/blog-item:visible absolute w-full h-full top-0 left-0 [background:#AB052D] z-1 rounded-md opacity-[0] invisible [transition:0.5s] motion-reduce:transition-none">
                  <div className="pt-28.75 pb-7.5 relative bottom-0 left-0 ps-8.75 max-[575px]:ps-7.5 min-[575px]:max-[991px]:ps-6.25 pe-8.75 max-[575px]:pe-7.5 min-[575px]:max-[991px]:pe-6.25 z-1 h-full">
                    <div className="mb-4.25 flex items-center gap-5">
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="user"
                            className="inline-block not-italic"
                          />
                          <SiteLink
                            href="/contact-us"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            {
                              "\n                                                        ICFC\n                                                    "
                            }
                          </SiteLink>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="tag"
                            className="inline-block not-italic"
                          />
                          {
                            "\n                                                    Corporate"
                          }
                        </span>
                      </div>
                    </div>
                    <h5 className="mt-0 mb-6.75 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-6.75 [word-break:break-word] [border-bottom:1px_solid_rgba(255,255,255,0.1254901961)]">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {
                          " How Strategic Planning Drives Business\n                                                Success"
                        }
                      </SiteLink>
                    </h5>
                    <p className="mt-0 mb-38.25 max-[767px]:mb-20 min-[767px]:max-[991px]:mb-25 text-[17px] [font-weight:normal] text-[#FFFFFF] leading-7">
                      {
                        "From insights to execution, we guide businesses to\n                                            smarter\n                                            decisions and better..."
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#FFFFFF] [text-decoration:underline] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-black [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-visible hover:[background:#2B3944] w-[unset] h-[unset] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        {
                          "Read More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.7}
                duration={1}
                data-wow-delay=".7s"
                data-wow-duration="1s"
                className="relative group/blog-item"
              >
                <div className="h-141.25 max-[991px]:h-125 rounded-md overflow-hidden relative z-1 before:absolute before:[content:''] before:w-full before:h-full before:top-0 before:left-0 before:[background:linear-gradient(180deg,rgba(43,57,68,0)_0%,#2B3944_92.33%)] before:z-1">
                  <SiteImage
                    src="/assets/images/blog/blog-thumb-03.webp"
                    alt="image"
                    className="align-middle max-w-full group-hover/blog-item:transform-[scale3d(1.1,1.1,1)] w-full h-full object-cover [transition:all_0.8s_ease] motion-reduce:transition-none"
                  />
                </div>
                <div className="w-full">
                  <div className="pt-8.75 pr-8.75 pb-8.75 pl-8.75 absolute top-0 left-0 z-2">
                    <SiteLink
                      href="/blog-details"
                      className="text-[#FFFFFF] [text-decoration:none] pt-1.5 pr-3 pb-1.5 pl-3 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:#2B3944] group-hover/blog-item:[background:#FFFFFF] group-hover/blog-item:text-[#2B3944] text-[14px] rounded-[3px] inline-flex items-center justify-center font-medium hover:[background:#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"Feb 17, 2025"}
                    </SiteLink>
                  </div>
                  <div className="pt-8.75 pb-7.5 absolute bottom-0 left-0 ps-8.75 max-[575px]:ps-7.5 min-[575px]:max-[991px]:ps-6.25 pe-8.75 max-[575px]:pe-7.5 min-[575px]:max-[991px]:pe-6.25 z-1">
                    <div className="mb-4.25 flex items-center gap-5">
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="user"
                            className="inline-block not-italic"
                          />
                          <SiteLink
                            href="/contact-us"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            {
                              "\n                                                        ICFC\n                                                    "
                            }
                          </SiteLink>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="tag"
                            className="inline-block not-italic"
                          />
                          {
                            "\n                                                    Corporate"
                          }
                        </span>
                      </div>
                    </div>
                    <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {" Planning Your Business for Long-Term Growth"}
                      </SiteLink>
                    </h5>
                  </div>
                </div>
                <div className="group-hover/blog-item:opacity-[1] group-hover/blog-item:visible absolute w-full h-full top-0 left-0 [background:#AB052D] z-1 rounded-md opacity-[0] invisible [transition:0.5s] motion-reduce:transition-none">
                  <div className="pt-28.75 pb-7.5 relative bottom-0 left-0 ps-8.75 max-[575px]:ps-7.5 min-[575px]:max-[991px]:ps-6.25 pe-8.75 max-[575px]:pe-7.5 min-[575px]:max-[991px]:pe-6.25 z-1 h-full">
                    <div className="mb-4.25 flex items-center gap-5">
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="user"
                            className="inline-block not-italic"
                          />
                          <SiteLink
                            href="/contact-us"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            {
                              "\n                                                        ICFC\n                                                    "
                            }
                          </SiteLink>
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[14px] font-medium leading-[1.1em] flex items-center gap-2.5 text-[#FFFFFF]">
                          <Icon
                            name="tag"
                            className="inline-block not-italic"
                          />
                          {
                            "\n                                                    Corporate"
                          }
                        </span>
                      </div>
                    </div>
                    <h5 className="mt-0 mb-6.75 font-semibold leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-6.75 [word-break:break-word] [border-bottom:1px_solid_rgba(255,255,255,0.1254901961)]">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {" Planning Your Business for Long-Term Growth"}
                      </SiteLink>
                    </h5>
                    <p className="mt-0 mb-38.25 max-[767px]:mb-20 min-[767px]:max-[991px]:mb-25 text-[17px] [font-weight:normal] text-[#FFFFFF] leading-7">
                      {
                        "Consulting transforms challenges into opportunities with\n                                            tailored\n                                            solutions and proven expertise."
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#FFFFFF] [text-decoration:underline] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-black [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-visible hover:[background:#2B3944] w-[unset] h-[unset] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        {
                          "Read More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactAreaSection() {
  return (
    <section className="pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 relative z-1 overflow-x-clip before:absolute before:[content:''] before:w-full before:h-[calc(100%-290px)] before:bottom-0 before:left-0 before:[background:#F8F8F9] before:z-[-1]">
      <div className="absolute inset-e-0 bottom-0 z-[-1]"></div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[490px_auto] max-[991px]:grid-cols-[auto] min-[991px]:max-[1366px]:grid-cols-[440px_auto] min-[1366px]:max-[1600px]:grid-cols-[470px_auto] items-center gap-0 [background:#FFFFFF] rounded-md [border:1px_solid_#DBDEE1]">
              <div className="h-full w-full relative">
                <SiteImage
                  src="/assets/images/contact/contact-thumb-01.webp"
                  alt="contact image"
                  className="align-middle max-w-full w-full h-full object-cover rounded-[6px_0_0_6px] max-[991px]:rounded-[6px_6px_0_0px]"
                />
                <div className="pt-7.5 pr-7.5 pb-7.5 pl-7.5 absolute w-full bottom-0">
                  <div className="pt-3.75 pr-5 pb-3.75 max-[480px]:pb-4.5 pl-5 [background:#AB052D] flex items-center justify-between rounded-md flex-wrap gap-5">
                    <div className="flex items-center gap-2.5">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          className="align-middle w-4 h-4"
                        >
                          <path
                            d="M12.1641 10.5834C11.6414 10.0673 10.9888 10.0673 10.4694 10.5834C10.0732 10.9762 9.67699 11.3691 9.28744 11.7686C9.1809 11.8785 9.091 11.9018 8.96115 11.8286C8.70479 11.6887 8.43177 11.5755 8.18539 11.4224C7.03673 10.6999 6.07452 9.77097 5.22218 8.72552C4.79934 8.20613 4.42312 7.65011 4.16009 7.02417C4.10682 6.89765 4.11681 6.81442 4.22002 6.7112C4.61622 6.32832 5.00244 5.93544 5.39198 5.54257C5.93469 4.99654 5.93469 4.35728 5.38866 3.80792C5.07902 3.49495 4.76938 3.18865 4.45974 2.87568C4.14011 2.55605 3.82381 2.23309 3.50086 1.9168C2.97813 1.40739 2.32556 1.40739 1.80617 1.92012C1.40663 2.313 1.02375 2.71586 0.617555 3.10208C0.241327 3.45833 0.0515486 3.89449 0.0115952 4.40389C-0.0516643 5.23293 0.151432 6.01535 0.437765 6.77779C1.02375 8.35595 1.91604 9.75765 2.99811 11.0428C4.45974 12.7808 6.20437 14.1558 8.24532 15.148C9.16425 15.5942 10.1165 15.9371 11.1519 15.9937C11.8644 16.0337 12.4837 15.8539 12.9798 15.2979C13.3194 14.9183 13.7023 14.572 14.0619 14.2091C14.5946 13.6697 14.5979 13.0172 14.0685 12.4845C13.4359 11.8485 12.8 11.2159 12.1641 10.5834Z"
                            className="fill-[#FFFFFF]"
                          ></path>
                          <path
                            d="M11.5271 7.92979L12.7557 7.72003C12.5625 6.59135 12.0298 5.56921 11.2208 4.75682C10.3651 3.90116 9.28304 3.36178 8.0911 3.19531L7.91797 4.43054C8.84023 4.56039 9.67925 4.97657 10.3418 5.63913C10.9677 6.26506 11.3773 7.05747 11.5271 7.92979Z"
                            className="fill-[#FFFFFF]"
                          ></path>
                          <path
                            d="M13.4493 2.59031C12.0309 1.17197 10.2363 0.276344 8.25531 0L8.08218 1.23523C9.79352 1.47495 11.345 2.25071 12.5703 3.47262C13.7323 4.63459 14.4947 6.10288 14.771 7.71766L15.9996 7.50791C15.6767 5.63676 14.7943 3.93874 13.4493 2.59031Z"
                            className="fill-[#FFFFFF]"
                          ></path>
                        </svg>
                      </span>
                      <div className="text-[#FFFFFF]">
                        <span className="">{"Call us:"}</span>
                        <SiteLink
                          href="tel:+6586017001"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"+65 8601 7001"}
                        </SiteLink>
                      </div>
                    </div>
                    <div>
                      <SiteLink
                        href="/contact-us"
                        className="text-[#2B3944] [text-decoration:none] pt-1.75 pr-4 pb-1.75 pl-4 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[14px] inline-flex items-center justify-center rounded-[3px] font-normal relative z-1 overflow-hidden hover:[background:#2B3944] gap-2 group/btn group/has-bg-white [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        {
                          "Let's' Talk\n                                                "
                        }
                        <span className="overflow-hidden relative inline-flex transform-[rotate(-45deg)] group/icon-box">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            className="align-middle group-hover/btn:transform-[translateX(150%)] w-3.5 group-hover/icon-box:transform-[translateX(150%)] h-3.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                          >
                            <path
                              d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                              fill="white"
                              className="fill-[#2B3944] group-hover/has-bg-white:fill-[#FFFFFF]"
                            ></path>
                          </svg>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            className="align-middle group-hover/btn:transform-[translateX(0%)] w-3.5 group-hover/icon-box:transform-[translateX(0%)] absolute transform-[translateX(-150%)] h-3.5 [transition:all_0.3s_ease-out_0s] motion-reduce:transition-none"
                          >
                            <path
                              d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                              fill="white"
                              className="fill-[#2B3944] group-hover/has-bg-white:fill-[#FFFFFF]"
                            ></path>
                          </svg>
                        </span>
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-17.5 max-[1366px]:pt-7.5 min-[1366px]:max-[1600px]:pt-12.5 pb-20 max-[1366px]:pb-7.5 min-[1366px]:max-[1600px]:pb-12.5 pe-20 max-[1366px]:pe-7.5 min-[1366px]:max-[1600px]:pe-12.5 ps-20 max-[1366px]:ps-7.5 min-[1366px]:max-[1600px]:ps-12.5">
                <div className="mb-7.5">
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    {
                      "\n                                        Contact with Us Now\n                                    "
                    }
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-2.5 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {
                      "Let’s Collaborate\n                                        with Us!\n                                    "
                    }
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "Read and update the latest news from us. done eu magna quis\n                                        felis.\n                                    "
                    }
                  </p>
                </div>
                <EmailForm id="contact-form" crm>
                  <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
                    <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                      <div className="mb-5">
                        <div>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Full name*"
                            aria-label="Full name*"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-[3px] text-black ps-5 pe-5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                      <div className="mb-5">
                        <div>
                          <input
                            id="email"
                            name="email"
                            placeholder="Email Address*"
                            aria-label="Email Address*"
                            type="email"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-[3px] text-black ps-5 pe-5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                      <div className="mb-5">
                        <div>
                          <input
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="Phone Number*"
                            aria-label="Phone Number*"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-[3px] text-black ps-5 pe-5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                      <div className="mb-5">
                        <div>
                          <select
                            id="subject"
                            name="subject"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] normal-case [word-wrap:normal] w-full h-15 max-[767px]:h-12.5 pt-0 pr-5 pb-0 pl-5 font-normal text-[#6D6D6D] bg-white [border:1px_solid_#E5E5E5] rounded-[5px] appearance-none bg-no-repeat bg-position-[right_20px_center] focus:border-[#AB052D] focus:text-[#111] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_ease-in-out] motion-reduce:transition-none"
                          >
                            <option>{"Your Business"}</option>
                            <option value="one">{"Business Strategy"}</option>
                            <option value="two">{"Market Analysis"}</option>
                            <option value="three">{"Financial Planing"}</option>
                            <option value="four">{"Risk Management"}</option>
                            <option value="five">
                              {"Digital Transformation"}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                      <div className="mb-5">
                        <div>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Message*"
                            defaultValue=""
                            className="mt-0 max-[767px]:mt-5 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] resize-y pt-3.75 pr-5 pb-3.75 pl-5 bg-transparent h-43.5 w-full [border:1px_solid_#DBDEE1] rounded-[3px] text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                      <div>
                        <button
                          type="submit"
                          className="rounded-[3px] mt-0 mr-0 mb-0 ml-0 text-[17px] leading-[inherit] normal-case w-full! pt-3.5 pr-6.5 pb-3.5 pl-6.5 text-[#FFFFFF] [border:none] [background:#2B3944] inline-flex items-center justify-center font-medium relative z-1 overflow-hidden hover:[background:#AB052D] hover:text-[#FFFFFF] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                        >
                          {
                            "\n                                                    Send Massage\n                                                "
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                </EmailForm>
                <div id="form-messages"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoAreaSection() {
  return (
    <div className="pt-40 max-[991px]:pt-25 min-[991px]:max-[1600px]:pt-32.5 pb-57.5 max-[991px]:pb-42.5 min-[991px]:max-[1600px]:pb-50 relative z-2 overflow-x-hidden">
      <div className="bg-center bg-cover bg-no-repeat absolute w-full h-full top-0 left-0 z-[-1] bg-[url('/assets/bg/video-bg-thumb-01.webp')]!"></div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[33.33333333%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="text-center!">
              <AnimatedElement as="div" effect="magnetic">
                <AnimatedElement
                  as="SiteLink"
                  effect="pulse"
                  loop
                  href="/contact-us"
                  className="text-[#2B3944] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] w-22.5 h-22.5 text-[30px] inline-flex rounded-full justify-center items-center relative z-1 hover:[background:#AB052D] hover:border-[#AB052D] after:[content:''] after:absolute after:z-1 after:left-[50%] after:top-[50%] after:transform-[translateX(-50%)_translateY(-50%)] after:block after:rounded-full after:[transition:all_200ms] after:motion-reduce:transition-none"
                >
                  <Icon
                    name="play"
                    className="inline-block not-italic"
                  />
                </AnimatedElement>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CtaAreaSection2() {
  return (
    <div className="-mt-17.5 relative z-2 overflow-x-clip">
      <div className="w-full pr-0 pl-0 mr-auto ml-auto">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="pt-5.25 pb-5.25 [background:radial-gradient(174.58%_135.27%_at_35.14%_-15.53%,rgba(47,62,75,0.6)_0%,rgba(47,62,75,0.036)_100%)] [backdrop-filter:blur(21px)] flex items-center gap-3.75 justify-center px-3.75">
              <span className="bg-[#FFFFFF] w-4.25 min-w-4.25 h-6 flex max-[575px]:hidden items-center justify-center rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                  className="align-middle"
                >
                  <path
                    d="M0.50204 0.439454C0.811629 0.16438 1.28548 0.192407 1.56063 0.501954L5.56063 5.00195C5.81308 5.28608 5.81308 5.71392 5.56063 5.99805L1.56063 10.498C1.28548 10.8076 0.811629 10.8356 0.50204 10.5605C0.192493 10.2854 0.164466 9.81154 0.43954 9.50195L3.99618 5.5L0.43954 1.49805C0.164466 1.18846 0.192493 0.714606 0.50204 0.439454Z"
                    fill="#AB052D"
                  ></path>
                </svg>
              </span>
              <div className="text-[14px] font-medium">
                <p className="mt-0 mb-0 text-[14px] font-medium text-[rgba(255,255,255,0.8)] leading-7 max-[575px]:text-center">
                  {
                    "Real Consulting Success: Inspiring Case Studies for Growth & Innovation.\n                                    "
                  }
                  <SiteLink
                    href="/contact-us"
                    className="text-inherit [text-decoration:underline] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] inline-block [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    {"Got A Industries in mind ?"}
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
