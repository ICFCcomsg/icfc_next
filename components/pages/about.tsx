import {
  AnimatedCounter,
  AnimatedElement,
} from "@/components/atoms/animated-element";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { ContentCarousel } from "@/components/molecules/content-carousel";

export function AboutPageContent() {
  return (
    <SitePageTemplate route="about">
      <main>
        <BreadcrumbAreaSection />
        <AboutAreaSection />
        <JourneyExpertiseSectionSection />
        <ServicesAreaSection />
        <WhyChooseAreaSection />
        <CounterAreaSection />
        <FeatureAreaSection />
        <FeatureAreaSection2 />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="About ICFC"
      description="Position your agency bridge between a client's big picture"
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}

function AboutAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[repeat(2,1fr)] max-[991px]:grid-cols-[repeat(1,1fr)] gap-[30px_90px] max-[1600px]:gap-[30px_30px]">
              <div>
                <div>
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    {"Best Business Strategy"}
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-5 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {"Build for business growth"}
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "Position your agency as the bridge between a client's big-picture vision and achievable action plans. data-driven strategies and your track."
                    }
                  </p>
                </div>
                <div className="mt-7.5 mb-8.75 grid grid-cols-[repeat(2,1fr)] max-[575px]:grid-cols-[repeat(1,1fr)] gap-[15px_0] w-142.5 max-[767px]:w-full">
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
                      {" Customized Strategy Solutions "}
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
                      {" Industry-Specific Insights "}
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
                      {" SME & Enterprise Support "}
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
                      {" Global Expansion Planning "}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-6.25 relative overflow-hidden">
                    <div className="mb-4.25">
                      <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                        {"Training"}
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
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></AnimatedElement>
                    </div>
                  </div>
                  <div className="mb-6.25 relative overflow-hidden">
                    <div className="mb-4.25">
                      <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                        {"Audit"}
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
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></AnimatedElement>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="mb-4.25">
                      <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                        {"Consultancy"}
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
                    {"We ensure fastest management team -work"}
                  </p>
                  <div>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#AB052D] [text-decoration:none] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-2 group/btn group/has-text [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                    >
                      {"Join Now"}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyExpertiseSectionSection() {
  return (
    <section className="pt-20 pr-0 pb-20 pl-0 bg-[#ffffff]">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            {"Best business strategy · Est. 2014"}
          </div>
          <h1 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[38px] max-[768px]:text-[28px] [word-break:break-word]">
            {"Built on a decade of trust."}
            <br />
            {"Driven by your compliance success."}
          </h1>
          <p className="mt-0 mb-5 text-[16px] [font-weight:normal] text-[#5a5a5a] leading-[1.6]">
            {
              "ICFC Pte Ltd was founded in Singapore in 2014 with a single purpose: to make international standards achievable for every organisation — from growing SMEs to established enterprises. Over more than a decade, we have guided hundreds of Singapore businesses through ISO certification, audit, and training, becoming one of the most trusted names in management system consulting in the region."
            }
          </p>
          <p className="mt-0 mb-5 text-[16px] [font-weight:normal] text-[#5a5a5a] leading-[1.6]">
            {
              "We are not a generalist consultancy. ISO standards are all we do — and we do them with depth, precision, and a genuine commitment to your long-term operational resilience."
            }
          </p>
          <div className="mt-5! flex! gap-4! flex-wrap!">
            <SiteLink
              href="/contact-us"
              className="text-white [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:#AB052D] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:[background:#8a0424] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              {"Get to know us ↗"}
            </SiteLink>
            <SiteLink
              href="/services"
              className="text-[#111] [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:1px_solid_#e0e0e0] [background:transparent] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:border-[#AB052D] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              {"Our services"}
            </SiteLink>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            {"By the numbers"}
          </div>
          <div className="mt-7.5 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-7.5 max-[768px]:gap-3.75">
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"12"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                {"Years"}
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"250+"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                {"Clients"}
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"25"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                {"Industries served"}
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"500+"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                {"Audits supported"}
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"20+"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                {"ISO standards portfolio"}
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F8F8F9] rounded-3xl text-center [border:1px_solid_#f0f0f0] hover:transform-[translateY(-5px)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-2 text-[42px] font-bold text-[#AB052D] leading-none">
                {"100+"}
              </div>
              <div className="text-[14px] text-[#4a4a4a] font-medium">
                {"Trainees"}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            {"Our three service pillars"}
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            {"Everything you need, under one roof"}
          </h2>
          <p className="mt-0 mb-5 text-[16px] [font-weight:normal] text-[#5a5a5a] leading-[1.6]">
            {
              "Whether you are pursuing your first ISO certificate, preparing for a surveillance audit, or building internal capability, ICFC delivers end-to-end support without the complexity of managing multiple vendors."
            }
          </p>
          <div className="mt-10 mr-0 mb-5 ml-0 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7.5 max-[768px]:gap-5">
            <div className="pt-7.5 pr-6.25 pb-7.5 pl-6.25 [background:#fff] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] [border:1px_solid_#ebebeb] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:border-[#AB052D20] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-3.75 text-[36px] font-bold text-[#AB052D] opacity-[0.7]">
                {"01"}
              </div>
              <div className="mb-3.75 text-[22px] font-semibold text-[#111]">
                {"ISO Consultation"}
              </div>
              <p className="mt-0 mb-5 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                {
                  "From gap analysis and documentation to full system implementation — tailored to your business context."
                }
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Gap analysis"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Documentation"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Implementation"}
                </span>
              </div>
            </div>
            <div className="pt-7.5 pr-6.25 pb-7.5 pl-6.25 [background:#fff] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] [border:1px_solid_#ebebeb] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:border-[#AB052D20] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-3.75 text-[36px] font-bold text-[#AB052D] opacity-[0.7]">
                {"02"}
              </div>
              <div className="mb-3.75 text-[22px] font-semibold text-[#111]">
                {"Third-party & certification audit"}
              </div>
              <p className="mt-0 mb-5 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                {
                  "Independent assessments against ISO standards, preparing you for certification body audits or serving as the audit itself."
                }
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Stage 1 & 2 audits"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Surveillance"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Recertification"}
                </span>
              </div>
            </div>
            <div className="pt-7.5 pr-6.25 pb-7.5 pl-6.25 [background:#fff] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] [border:1px_solid_#ebebeb] hover:shadow-[0_20px_35px_rgba(0,0,0,0.08)] hover:border-[#AB052D20] [transition:all_0.3s_ease] motion-reduce:transition-none">
              <div className="mb-3.75 text-[36px] font-bold text-[#AB052D] opacity-[0.7]">
                {"03"}
              </div>
              <div className="mb-3.75 text-[22px] font-semibold text-[#111]">
                {"Training programmes"}
              </div>
              <p className="mt-0 mb-5 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                {
                  "Accredited courses to build lasting internal competence — lead auditor, internal auditor, implementation, and awareness."
                }
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Lead auditor"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Internal auditor"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Awareness"}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5!">
            <div className="mb-2.5! pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
              {"Standards we specialise in"}
            </div>
            <div className="mt-3.75 flex flex-wrap gap-2 justify-start!">
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                {"ISO/IEC 27001"}
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                {"ISO/IEC 42001"}
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                {"ISO 9001"}
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                {"ISO 14001"}
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                {"ISO 45001"}
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                {"ISO 37001"}
              </span>
              <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                {"ISO 22301"}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            {"Our journey"}
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            {"A decade of deliberate growth"}
          </h2>
          <div className="mt-10 mr-0 mb-0 ml-0">
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2014"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  {"ICFC Pte Ltd founded in Singapore"}
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  {
                    "Started with ISO 9001 and ISO 14001 consultation for manufacturing and logistics clients."
                  }
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2016"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  {"Expanded into information security"}
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  {
                    "Added ISO/IEC 27001 as Singapore's financial and tech sectors accelerated demand."
                  }
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2018"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  {"Launched formal training division"}
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  {
                    "Introduced accredited lead auditor courses, training over 300 professionals in two years."
                  }
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2020"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  {"Adapted for remote consultation & audit"}
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  {
                    "Maintained 100% client continuity with zero project delays during COVID-19."
                  }
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2022"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  {"PDPA and privacy management practice"}
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  {
                    "Launched ISO 27701 and PDPA advisory services for Singapore's regulatory landscape."
                  }
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2024"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  {"ISO 42001 AI management practice launched"}
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  {
                    "Among the first consultancies in Singapore to offer ISO/IEC 42001 consultation."
                  }
                </p>
              </div>
            </div>
            <div className="pt-5 pr-0 pb-5 pl-0 flex gap-6.25 [border-bottom:1px_solid_#efefef]">
              <div className="text-[18px] font-bold text-[#AB052D] min-w-20">
                {"2025+"}
              </div>
              <div>
                <h4 className="mt-0 mb-1.5 font-semibold leading-[1.33] text-[#2B3944] text-[18px] [word-break:break-word]">
                  {"Serving 25 high-growth industries"}
                </h4>
                <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-7">
                  {
                    "Helping SMEs and enterprises understand EDGE Grant support (subject to eligibility and approval) alongside ISO projects."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            {"Our values"}
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            {"How we show up for every client"}
          </h2>
          <div className="mt-8.75 mr-0 mb-0 ml-0 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6.25">
            <div className="pt-6.25 pr-6.25 pb-6.25 pl-6.25 [background:#FCFCFC] rounded-[20px] [border:1px_solid_#eee]">
              <div className="mb-5 w-13.75 h-13.75 [background:#AB052D10] rounded-[18px] flex items-center justify-center text-[26px] text-[#AB052D]">
                {"⚖️"}
              </div>
              <div className="mb-2.5 text-[18px] font-semibold">
                {"Honest advice"}
              </div>
              <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                {
                  "We tell you what your business genuinely needs — not the largest engagement."
                }
              </p>
            </div>
            <div className="pt-6.25 pr-6.25 pb-6.25 pl-6.25 [background:#FCFCFC] rounded-[20px] [border:1px_solid_#eee]">
              <div className="mb-5 w-13.75 h-13.75 [background:#AB052D10] rounded-[18px] flex items-center justify-center text-[26px] text-[#AB052D]">
                {"📊"}
              </div>
              <div className="mb-2.5 text-[18px] font-semibold">
                {"Practical outcomes"}
              </div>
              <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                {
                  "Every deliverable is designed for your team to own and sustain — not just to pass the audit."
                }
              </p>
            </div>
            <div className="pt-6.25 pr-6.25 pb-6.25 pl-6.25 [background:#FCFCFC] rounded-[20px] [border:1px_solid_#eee]">
              <div className="mb-5 w-13.75 h-13.75 [background:#AB052D10] rounded-[18px] flex items-center justify-center text-[26px] text-[#AB052D]">
                {"🏭"}
              </div>
              <div className="mb-2.5 text-[18px] font-semibold">
                {"Industry depth"}
              </div>
              <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                {
                  "Our consultants bring sector-specific experience beyond just the ISO standard."
                }
              </p>
            </div>
            <div className="pt-6.25 pr-6.25 pb-6.25 pl-6.25 [background:#FCFCFC] rounded-[20px] [border:1px_solid_#eee]">
              <div className="mb-5 w-13.75 h-13.75 [background:#AB052D10] rounded-[18px] flex items-center justify-center text-[26px] text-[#AB052D]">
                {"🤝"}
              </div>
              <div className="mb-2.5 text-[18px] font-semibold">
                {"Long-term partnership"}
              </div>
              <p className="mt-0 mb-0 text-[15px] [font-weight:normal] text-[#5a5a5a] leading-normal">
                {
                  "We stay with clients through surveillance cycles, recertification, and new standards adoption."
                }
              </p>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            {"Expert team"}
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            {"Meet the people behind your certification"}
          </h2>
          <div className="mt-8.75 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7.5">
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F9F9FB] rounded-3xl text-center">
              <div className="mt-0 mr-auto mb-4.5 ml-auto w-21.25 h-21.25 [background:#0C447C]! rounded-full flex items-center justify-center text-[28px] font-semibold text-[white]">
                {"LC"}
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Lead consultant"}
              </h4>
              <p className="mt-0 mb-7.5 text-[13px]! [font-weight:normal] text-[#666]! leading-7">
                {"Information security & AI governance"}
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2 justify-center!">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"ISO 27001"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"ISO 42001"}
                </span>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F9F9FB] rounded-3xl text-center">
              <div className="mt-0 mr-auto mb-4.5 ml-auto w-21.25 h-21.25 [background:#AB052D]! rounded-full flex items-center justify-center text-[28px] font-semibold text-[white]">
                {"SA"}
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Senior auditor"}
              </h4>
              <p className="mt-0 mb-7.5 text-[13px]! [font-weight:normal] text-[#666]! leading-7">
                {"Quality & environmental management"}
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2 justify-center!">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"ISO 9001"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"ISO 14001"}
                </span>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F9F9FB] rounded-3xl text-center">
              <div className="mt-0 mr-auto mb-4.5 ml-auto w-21.25 h-21.25 [background:#27500A]! rounded-full flex items-center justify-center text-[28px] font-semibold text-[white]">
                {"TC"}
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Training director"}
              </h4>
              <p className="mt-0 mb-7.5 text-[13px]! [font-weight:normal] text-[#666]! leading-7">
                {"Lead auditor & implementation courses"}
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2 justify-center!">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"Lead auditor"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"ISO 9001"}
                </span>
              </div>
            </div>
            <div className="pt-6.25 pr-5 pb-6.25 pl-5 [background:#F9F9FB] rounded-3xl text-center">
              <div className="mt-0 mr-auto mb-4.5 ml-auto w-21.25 h-21.25 [background:#633806]! rounded-full flex items-center justify-center text-[28px] font-semibold text-[white]">
                {"BC"}
              </div>
              <h4 className="mt-0 mb-0 font-semibold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Business consultant"}
              </h4>
              <p className="mt-0 mb-7.5 text-[13px]! [font-weight:normal] text-[#666]! leading-7">
                {"EDGE Grant guidance"}
              </p>
              <div className="mt-3.75 flex flex-wrap gap-2 justify-center!">
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"EDGE Grant"}
                </span>
                <span className="pt-1.25 pr-3 pb-1.25 pl-3 [background:#F2F2F2] rounded-[30px] text-[12px] font-medium text-[#333]">
                  {"ISO 37001"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-15 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            {"EDGE Grant"}
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            {"Funding your ISO journey"}
          </h2>
          <div className="mt-7.5 mr-0 mb-5 ml-0 pt-8.75 pr-10 pb-8.75 pl-10 [background:linear-gradient(135deg,#FDF8F0_0%,#FFF5E6_100%)] rounded-[28px] [border:1px_solid_#FFE0B5]">
            <p className="mt-0 mb-2.5! text-[18px]! font-semibold! text-[#616C74] leading-7">
              {"How we support EDGE projects"}
            </p>
            <p className="mt-0 mb-5! text-[17px] [font-weight:normal] text-[#616C74] leading-7">
              {
                "Our consultancy is led by SS 680:2021 certified consultants. We prepare the proposal, quotation and consultant details EDGE asks for; you apply yourself on the Business Grants Portal. Support is subject to eligibility and Enterprise Singapore's approval."
              }
            </p>
            <SiteLink
              href="/contact-us"
              className="text-white [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:#AB052D] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:[background:#8a0424] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              {"Check EDGE eligibility ↗"}
            </SiteLink>
          </div>
        </div>
        <div className="mb-0 pt-0 pr-0 pb-0 pl-0 [border-bottom:none]">
          <div className="mb-4 pt-1 pr-3.5 pb-1 pl-3.5 text-[12px] font-medium tracking-widest uppercase text-[#AB052D] [background:rgba(171,5,45,0.08)] inline-block rounded-[30px]">
            {"Ready to begin?"}
          </div>
          <h2 className="mt-0 mb-5 font-semibold leading-[1.2] text-[#111111] text-[32px]! [word-break:break-word]">
            {"Let's build your certification roadmap"}
          </h2>
          <p className="mt-0 mb-5 text-[16px] [font-weight:normal] text-[#5a5a5a] leading-[1.6]">
            {
              "Whether you know exactly which standard you need or are still exploring options, our consultants will give you an honest, no-obligation assessment."
            }
          </p>
          <div>
            <SiteLink
              href="/contact-us"
              className="text-white [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:#AB052D] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:[background:#8a0424] hover:transform-[translateY(-2px)] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              {"Book a free consultation ↗"}
            </SiteLink>
            <SiteLink
              href="/industry"
              className="text-[#111] [text-decoration:none] pt-3 pr-7 pb-3 pl-7 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:1px_solid_#e0e0e0] [background:transparent] rounded-[40px] text-[14px] font-semibold inline-flex items-center gap-2 hover:border-[#AB052D] [transition:all_0.3s_ease] motion-reduce:transition-none"
            >
              {"Explore our industries"}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 [background:#2B3944]">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[58.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[75%] min-[992px]:max-[1200px]:w-[66.66666667%] max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="text-center! mb-11.25">
              <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                {"Your Business Our Expertise"}
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-0 mb-2.5 font-semibold leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                {"Services for Your Business Growth"}
              </AnimatedElement>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[rgba(255,255,255,0.8)] leading-7">
                {
                  "We deliver tailored solutions that help businesses grow, scale, and succeed in a competitive market."
                }
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
                          {"Founded in Singapore"}
                        </h4>
                      </div>
                      <div>
                        <span className="text-[white] tracking-[1.2px] text-[40px] max-[575px]:text-[35px] font-bold leading-[0.95]">
                          {"01"}
                        </span>
                      </div>
                    </div>
                    <p className="mt-0 mb-0 text-[20px] max-[575px]:text-[18px] [font-weight:normal] text-[white] leading-normal italic">
                      {
                        "We help businesses establish a strong foundation with strategic planning, branding, and market entry solutions."
                      }
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
                          {"ISO Management Systems"}
                        </h4>
                      </div>
                      <div>
                        <span className="text-[white] tracking-[1.2px] text-[40px] max-[575px]:text-[35px] font-bold leading-[0.95]">
                          {"02"}
                        </span>
                      </div>
                    </div>
                    <p className="mt-0 mb-0 text-[20px] max-[575px]:text-[18px] [font-weight:normal] text-[white] leading-normal italic">
                      {
                        "Our expert strategies drive business growth by improving operations, increasing efficiency, and maximizing ROI."
                      }
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
                          {"Cybersecurity & Data Protection"}
                        </h4>
                      </div>
                      <div>
                        <span className="text-[white] tracking-[1.2px] text-[40px] max-[575px]:text-[35px] font-bold leading-[0.95]">
                          {"03"}
                        </span>
                      </div>
                    </div>
                    <p className="mt-0 mb-0 text-[20px] max-[575px]:text-[18px] [font-weight:normal] text-[white] leading-normal italic">
                      {
                        "We provide smart financial solutions, investment planning, and risk assessment to ensure long-term stability."
                      }
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
                          {"Risk Management"}
                        </h4>
                      </div>
                      <div>
                        <span className="text-[white] tracking-[1.2px] text-[40px] max-[575px]:text-[35px] font-bold leading-[0.95]">
                          {"04"}
                        </span>
                      </div>
                    </div>
                    <p className="mt-0 mb-0 text-[20px] max-[575px]:text-[18px] [font-weight:normal] text-[white] leading-normal italic">
                      {
                        "We identify potential risks and implement proactive strategies to protect your business and ensure sustainable growth."
                      }
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
                    {"Why choose us ICFC"}
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-5 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {"Scaling new heights with strategic excellence."}
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "We provide the best services, ensuring your outstanding growth, lorem ipsum dolor sit amet. Nulla ultrices vitae neque non sodales."
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
                    href="/about"
                    className="text-[#FFFFFF] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#AB052D] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] gap-2 group/btn [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    {"Get Start Now"}
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
                        {"Businesss & Industry Management"}
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
              <div className="mb-8.75 max-[1199px]:mb-0 relative me-8.75 max-[1199px]:me-0">
                <SiteImage
                  src="/assets/images/services/services-thumb-30.webp"
                  alt="image"
                  className="align-middle max-w-full w-full rounded-md"
                />
                <div className="pt-8.75 max-[1199px]:pt-6.25 min-[1199px]:max-[1600px]:pt-7.5 pr-8.75 max-[1199px]:pr-6.25 min-[1199px]:max-[1600px]:pr-7.5 pb-8.75 max-[1199px]:pb-6.25 min-[1199px]:max-[1600px]:pb-7.5 pl-8.75 max-[1199px]:pl-6.25 min-[1199px]:max-[1600px]:pl-7.5 [background:#F8F8F9] rounded-md absolute max-[480px]:[position:unset] -bottom-8.75 max-[1199px]:bottom-0 -inset-e-8.75 max-[1199px]:inset-e-0 w-70.75 max-[480px]:w-full max-[480px]:mt-7.5">
                  <div>
                    <SiteImage
                      src="/assets/images/services/services-thumb-33.webp"
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
                      {"Join Now"}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterAreaSection() {
  return (
    <div className="pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[repeat(4,1fr)] max-[480px]:grid-cols-[repeat(1,1fr)] min-[480px]:max-[767px]:grid-cols-[repeat(2,1fr)] min-[767px]:max-[1199px]:grid-cols-[repeat(3,1fr)] gap-7.5">
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
                className="pt-7.5 max-[1600px]:pt-5 pr-7.5 max-[1600px]:pr-5 pb-7.5 max-[1600px]:pb-5 pl-7.5 max-[1600px]:pl-5 flex [border:1px_solid_#DBDEE1] gap-5 rounded-md [background:#F8F8F9] max-[991px]:flex-wrap"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 38"
                    className="align-middle w-11.25 h-11.25"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5959 36.5456C10.0034 36.5456 9.52067 36.0625 9.52067 35.4686C9.52067 34.8755 10.0034 34.3925 10.5959 34.3925C11.1884 34.3925 11.6758 34.8756 11.6758 35.4686C11.6758 36.0626 11.1884 36.5456 10.5959 36.5456ZM10.5959 1.45436C11.1884 1.45436 11.6758 1.93651 11.6758 2.53042C11.6758 3.12345 11.1884 3.60657 10.5959 3.60657C10.0034 3.60657 9.52067 3.12345 9.52067 2.53042C9.52067 1.93651 10.0034 1.45436 10.5959 1.45436ZM10.5959 33.2605C9.97941 33.2605 9.42519 33.5147 9.02373 33.9232L1.98989 29.9241V8.07486L9.02373 4.07676C9.4251 4.48481 9.97941 4.73861 10.5959 4.73861C11.8144 4.73861 12.8035 3.74755 12.8035 2.53051C12.8035 1.3125 11.8144 0.322415 10.5959 0.322415C9.13189 0.322415 8.09401 1.71968 8.45992 3.09248L1.14413 7.25303C1.05726 7.30259 0.985011 7.3742 0.934672 7.46062C0.884332 7.54704 0.857686 7.64521 0.857422 7.74521V30.2539C0.857515 30.354 0.884089 30.4522 0.934446 30.5387C0.984803 30.6251 1.05715 30.6967 1.14413 30.7461L8.45992 34.9067C8.09401 36.2795 9.13215 37.6777 10.5959 37.6777C11.8144 37.6777 12.8035 36.6867 12.8035 35.4687C12.8035 34.2515 11.8143 33.2605 10.5959 33.2605ZM25.3994 36.5456C24.8069 36.5456 24.3242 36.0625 24.3242 35.4686C24.3242 34.8755 24.8068 34.3925 25.3994 34.3925C25.992 34.3925 26.4746 34.8756 26.4746 35.4686C26.4746 36.0626 25.9919 36.5456 25.3994 36.5456ZM25.3994 3.60657C24.8069 3.60657 24.3242 3.12345 24.3242 2.53042C24.3242 1.93651 24.8068 1.45436 25.3994 1.45436C25.992 1.45436 26.4746 1.93651 26.4746 2.53042C26.4746 3.12345 25.9919 3.60657 25.3994 3.60657ZM34.8511 7.25294L27.5353 3.09239C27.9013 1.72012 26.8636 0.322327 25.3994 0.322327C24.1809 0.322327 23.1917 1.31241 23.1917 2.53042C23.1917 3.74746 24.1809 4.73852 25.3994 4.73852C26.0158 4.73852 26.5749 4.48481 26.9763 4.07667L34.0101 8.07477V29.9241L26.9763 33.9232C26.5749 33.5146 26.0158 33.2605 25.3994 33.2605C24.1809 33.2605 23.1917 34.2515 23.1917 35.4686C23.1917 36.6866 24.1809 37.6776 25.3994 37.6776C26.8634 37.6776 27.9013 36.279 27.5353 34.9066L34.8511 30.746C34.9394 30.6977 35.013 30.6265 35.0643 30.5399C35.1155 30.4533 35.1426 30.3545 35.1426 30.2539V7.74513C35.1426 7.54202 35.0327 7.35423 34.8511 7.25294ZM17.9976 30.2194L6.72535 24.6507L11.1693 22.4564L17.7491 25.7063C17.9045 25.785 18.0931 25.7837 18.2509 25.7063L24.826 22.4564L29.2699 24.6507L17.9976 30.2194ZM6.72535 18.9997L11.1693 16.8054L17.7491 20.0547C17.9063 20.1339 18.0918 20.1324 18.2509 20.0547L24.826 16.8054L29.2699 18.9997L17.9976 24.5676L6.72535 18.9997ZM6.72535 13.3483L17.9976 7.78041L29.2699 13.3483L17.9976 18.9161L6.72535 13.3483ZM31.1144 24.6507C31.1144 24.8667 30.9901 25.0626 30.799 25.1587L18.2509 31.3582C18.0922 31.4346 17.9059 31.4361 17.7491 31.3572L5.19617 25.1587C4.77782 24.9503 4.77677 24.3517 5.19617 24.1437L9.8886 21.8252L5.19617 19.5072C4.77756 19.2992 4.77668 18.7008 5.19617 18.4918L9.8886 16.1738L5.19617 13.8553C4.77729 13.6476 4.77729 13.049 5.19617 12.8414L17.7491 6.64187C17.8271 6.60323 17.913 6.58313 18 6.58313C18.087 6.58313 18.1729 6.60323 18.2509 6.64187L30.799 12.8414C31.2179 13.0491 31.2179 13.6476 30.799 13.8553L26.1066 16.1738L30.799 18.4918C31.2185 18.7008 31.2176 19.2992 30.799 19.5072L26.1066 21.8252L30.799 24.1437C30.9901 24.2388 31.1144 24.4356 31.1144 24.6507Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="mb-3 flex items-center">
                    <AnimatedCounter
                      value={25.5}
                      className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]"
                    />
                    <span className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]">
                      {"K"}
                    </span>
                  </div>
                  <span className="">{"Projects Completed"}</span>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.5}
                duration={1}
                data-wow-delay=".5s"
                className="pt-7.5 max-[1600px]:pt-5 pr-7.5 max-[1600px]:pr-5 pb-7.5 max-[1600px]:pb-5 pl-7.5 max-[1600px]:pl-5 flex [border:1px_solid_#DBDEE1] gap-5 rounded-md [background:#F8F8F9] max-[991px]:flex-wrap"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 42"
                    className="align-middle w-11.25 h-11.25"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2804 37.4735C10.3637 37.5929 10.3963 37.7405 10.3708 37.8839C10.3454 38.0272 10.2641 38.1546 10.1447 38.238C10.0253 38.3214 9.87774 38.3539 9.73438 38.3285C9.59101 38.3031 9.46363 38.2217 9.38024 38.1023L9.34698 38.0548C9.26515 37.9354 9.2338 37.7885 9.25974 37.6461C9.28568 37.5037 9.36681 37.3772 9.48549 37.2943C9.60417 37.2114 9.75078 37.1788 9.89343 37.2034C10.0361 37.2281 10.1632 37.3081 10.2472 37.426L10.2804 37.4735ZM17.1957 31.0585C17.0552 31.0191 16.9361 30.9255 16.8647 30.7982C16.7932 30.671 16.7752 30.5206 16.8146 30.3801C16.854 30.2396 16.9476 30.1205 17.0748 30.0491C17.202 29.9776 17.3524 29.9595 17.4929 29.999L24.5166 31.9891C24.9679 32.1176 25.4516 32.0646 25.8644 31.8415C26.0649 31.7338 26.2421 31.5876 26.3858 31.4112C26.5295 31.2348 26.6369 31.0317 26.7017 30.8136C26.7174 30.7609 26.7304 30.708 26.7409 30.6551C26.7421 30.6478 26.7435 30.6405 26.745 30.6333C26.8221 30.2087 26.7402 29.7706 26.515 29.4026C26.2898 29.0345 25.937 28.7622 25.5239 28.6375C23.522 28.0418 21.5543 27.3344 19.6314 26.5187C16.1449 25.0778 15.9232 24.9873 8.99232 28.6527L13.501 35.1588L13.5879 35.0284L13.5895 35.0295L13.5901 35.0284C13.7665 34.7602 14.0256 34.5569 14.3281 34.4495C14.6306 34.342 14.9599 34.3363 15.2659 34.4332L23.6119 37.0182C25.8737 37.719 31.0783 33.8692 34.6205 31.2492C35.6292 30.5031 36.5085 29.8527 37.1512 29.4312C37.7487 29.0392 37.9579 28.6163 37.8999 28.2408C37.8609 28.0287 37.7658 27.831 37.6245 27.6682C37.4375 27.4493 37.2111 27.2675 36.957 27.1322C36.4282 26.8491 35.8325 26.7146 35.2333 26.7431C34.6341 26.7716 34.0539 26.9621 33.5544 27.2942L27.7686 31.0891C27.7649 31.1022 27.7612 31.1153 27.7573 31.1283C27.651 31.4854 27.4751 31.8179 27.2397 32.1067C27.0044 32.3954 26.7142 32.6348 26.3859 32.8109C25.7224 33.1698 24.9449 33.255 24.2194 33.0484L17.1957 31.0585ZM8.36137 27.7413L8.01031 27.2343C7.78531 26.9105 7.44116 26.689 7.05322 26.6184C6.66529 26.5478 6.26518 26.6338 5.94051 26.8575L1.62533 29.8481C1.30152 30.0731 1.08006 30.4173 1.00945 30.8052C0.93884 31.1932 1.02482 31.5933 1.24858 31.9179L7.59163 41.0713C7.81666 41.3951 8.16084 41.6166 8.5488 41.6872C8.93677 41.7578 9.3369 41.6718 9.6616 41.4481L13.9768 38.4574C14.3006 38.2324 14.5221 37.8883 14.5927 37.5003C14.6633 37.1123 14.5773 36.7122 14.3534 36.3875L14.1766 36.1324L14.5056 35.639L14.504 35.638C14.5497 35.5671 14.6177 35.5135 14.6973 35.4855C14.7768 35.4575 14.8635 35.4567 14.9435 35.4833L23.2894 38.0684C26.0802 38.933 31.5518 34.8858 35.2755 32.1313C36.2531 31.4082 37.1052 30.7779 37.7546 30.3524C38.7717 29.6853 39.1118 28.8617 38.9899 28.0723C38.9198 27.6652 38.7414 27.2844 38.4733 26.9701C38.198 26.6427 37.8634 26.3702 37.487 26.167C36.9023 25.8497 36.2526 25.6703 35.5878 25.6428C37.3848 23.2549 38.4701 20.4076 38.7185 17.4294C38.967 14.4513 38.3685 11.4635 36.992 8.81085C35.6156 6.15819 33.5173 3.94867 30.9392 2.43716C28.3611 0.925658 25.4083 0.173748 22.4212 0.26817C19.4342 0.362591 16.5347 1.2995 14.0573 2.97081C11.5798 4.64212 9.62523 6.97976 8.41907 9.71406C7.21292 12.4484 6.80431 15.4679 7.24036 18.4245C7.67641 21.381 8.93937 24.154 10.8835 26.4237C10.1445 26.801 9.31081 27.2387 8.36137 27.7413ZM11.8986 25.9144C10.0116 23.7915 8.77776 21.1687 8.34542 18.3614C7.91308 15.5541 8.30063 12.6816 9.46149 10.0892C10.6223 7.49686 12.5071 5.29487 14.8893 3.74789C17.2715 2.20091 20.0497 1.37476 22.8902 1.36872C25.7306 1.36269 28.5123 2.17703 30.901 3.71387C33.2898 5.25072 35.1839 7.44468 36.3558 10.0321C37.5276 12.6195 37.9274 15.4903 37.507 18.2994C37.0866 21.1086 35.8639 23.7365 33.9859 25.8675C33.621 25.9907 33.2734 26.1602 32.9517 26.3719L27.8152 29.7406C27.7102 29.2363 27.4711 28.7696 27.1232 28.3897C26.7753 28.0098 26.3313 27.7307 25.8381 27.5819C23.8711 26.9972 21.9383 26.3027 20.049 25.5015C16.8364 24.1739 16.0803 23.8622 11.8986 25.9144ZM13.0854 36.4877L13.0768 36.4773L13.0742 36.4734C13.0595 36.4543 13.046 36.4342 13.034 36.4132L7.10591 27.8589C7.07705 27.8173 7.04024 27.7817 6.99761 27.7543C6.95497 27.7269 6.90735 27.7082 6.85746 27.6993C6.80701 27.69 6.75523 27.6908 6.70509 27.7016C6.65495 27.7125 6.60744 27.7331 6.56527 27.7623L2.25009 30.7529C2.20842 30.7817 2.17286 30.8185 2.14544 30.8612C2.11803 30.9038 2.0993 30.9514 2.09034 31.0013C2.0811 31.0518 2.0819 31.1036 2.09271 31.1537C2.10352 31.2038 2.12412 31.2514 2.15333 31.2935L8.49689 40.4477C8.52577 40.4893 8.56257 40.5248 8.60519 40.5521C8.64781 40.5795 8.6954 40.5982 8.74525 40.6072C8.7957 40.6164 8.84748 40.6156 8.89762 40.6048C8.94776 40.594 8.99527 40.5734 9.03744 40.5442L13.3527 37.5535C13.3944 37.5247 13.4299 37.4879 13.4573 37.4453C13.4847 37.4026 13.5034 37.355 13.5124 37.3051C13.5216 37.2547 13.5208 37.2029 13.51 37.1527C13.4992 37.1026 13.4787 37.0551 13.4495 37.0129L13.0854 36.4877ZM27.7782 9.34516C28.2816 9.34509 28.7695 9.51957 29.1587 9.83889C29.5479 10.1582 29.8143 10.6026 29.9126 11.0964C30.0109 11.5901 29.9349 12.1026 29.6976 12.5466C29.4603 12.9907 29.0764 13.3387 28.6114 13.5313C28.1463 13.724 27.6287 13.7495 27.147 13.6034C26.6652 13.4573 26.249 13.1486 25.9693 12.7301C25.6896 12.3115 25.5637 11.8089 25.613 11.3079C25.6624 10.8069 25.8839 10.3385 26.2399 9.98248C26.4417 9.78015 26.6814 9.61969 26.9454 9.51032C27.2094 9.40095 27.4924 9.34482 27.7782 9.34516ZM28.5373 10.762C28.713 10.9376 28.8224 11.1688 28.8468 11.416C28.8712 11.6632 28.8091 11.9113 28.6712 12.1179C28.5332 12.3245 28.3278 12.4769 28.0901 12.549C27.8524 12.6212 27.597 12.6087 27.3675 12.5137C27.1379 12.4186 26.9484 12.2469 26.8313 12.0278C26.7141 11.8088 26.6766 11.5558 26.725 11.3122C26.7735 11.0685 26.9049 10.8491 27.0969 10.6915C27.289 10.5339 27.5297 10.4478 27.7782 10.4477C27.9192 10.4475 28.0588 10.4752 28.1891 10.5291C28.3193 10.5831 28.4377 10.6622 28.5373 10.762ZM17.5659 9.34516C18.0693 9.34509 18.5572 9.51957 18.9464 9.83889C19.3356 10.1582 19.602 10.6026 19.7003 11.0964C19.7986 11.5901 19.7226 12.1026 19.4853 12.5466C19.248 12.9907 18.8641 13.3387 18.3991 13.5313C17.934 13.724 17.4164 13.7495 16.9347 13.6034C16.4529 13.4573 16.0367 13.1486 15.757 12.7301C15.4773 12.3115 15.3514 11.8089 15.4007 11.3079C15.4501 10.8069 15.6716 10.3385 16.0276 9.98248C16.2294 9.78016 16.4692 9.6197 16.7331 9.51033C16.9971 9.40096 17.2801 9.34483 17.5659 9.34516ZM18.3249 10.762C18.5006 10.9376 18.61 11.1687 18.6344 11.4159C18.6588 11.6632 18.5967 11.9112 18.4587 12.1178C18.3208 12.3244 18.1154 12.4767 17.8777 12.5489C17.64 12.621 17.3846 12.6085 17.1551 12.5135C16.9256 12.4184 16.7361 12.2467 16.619 12.0277C16.5019 11.8086 16.4643 11.5557 16.5128 11.312C16.5612 11.0684 16.6927 10.8491 16.8847 10.6915C17.0767 10.5339 17.3175 10.4477 17.5659 10.4477C17.7069 10.4475 17.8465 10.4752 17.9767 10.5291C18.107 10.5831 18.2253 10.6622 18.3249 10.762ZM30.1032 19.2377C30.1832 19.116 30.3082 19.0311 30.4507 19.0016C30.5933 18.9722 30.7417 19.0005 30.8634 19.0805C30.985 19.1604 31.0699 19.2854 31.0994 19.428C31.1289 19.5705 31.1005 19.719 31.0206 19.8406C30.1397 21.1845 28.9383 22.288 27.5245 23.0517C26.1108 23.8154 24.5293 24.2152 22.9224 24.2152C21.3156 24.2152 19.7341 23.8154 18.3203 23.0517C16.9066 22.288 15.7052 21.1845 14.8243 19.8406C14.7443 19.719 14.716 19.5705 14.7455 19.428C14.775 19.2854 14.8599 19.1604 14.9815 19.0805C15.1032 19.0005 15.2516 18.9722 15.3942 19.0016C15.5367 19.0311 15.6617 19.116 15.7417 19.2377C16.5233 20.4286 17.5888 21.4064 18.8423 22.083C20.0958 22.7597 21.498 23.114 22.9224 23.114C24.3469 23.114 25.749 22.7597 27.0026 22.083C28.2561 21.4064 29.3216 20.4286 30.1032 19.2377Z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="mb-3 flex items-center">
                    <AnimatedCounter
                      value={10.5}
                      className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]"
                    />
                    <span className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]">
                      {"K"}
                    </span>
                  </div>
                  <span className="">{"Customer Satisfaction"}</span>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.7}
                duration={1}
                data-wow-delay=".7s"
                className="pt-7.5 max-[1600px]:pt-5 pr-7.5 max-[1600px]:pr-5 pb-7.5 max-[1600px]:pb-5 pl-7.5 max-[1600px]:pl-5 flex [border:1px_solid_#DBDEE1] gap-5 rounded-md [background:#F8F8F9] max-[991px]:flex-wrap"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 44"
                    className="align-middle w-11.25 h-11.25"
                  >
                    <path d="M34.3153 13.6218C35.6433 12.327 34.9107 10.0681 33.0762 9.79935L25.8828 8.74077C25.7429 8.72011 25.6101 8.66588 25.4958 8.58274C25.3814 8.49959 25.2889 8.38999 25.2261 8.26331L22.0103 1.74469C21.1881 0.0786182 18.8118 0.0792197 17.9899 1.74469L14.7727 8.26331C14.7103 8.3899 14.6182 8.49948 14.5041 8.58264C14.3901 8.6658 14.2576 8.72006 14.118 8.74077L6.92393 9.79935C5.089 10.0681 4.35707 12.3272 5.6848 13.6218L10.8901 18.698C10.9916 18.7967 11.0675 18.9185 11.1113 19.0531C11.1551 19.1877 11.1655 19.3309 11.1416 19.4704L9.9125 26.6076C9.5953 28.4413 11.5237 29.8327 13.1611 28.9742L17.5488 26.6773C17.4082 29.8743 16.9644 32.9448 14.9519 35.6373H14.0659C12.5552 35.6373 11.3268 36.8658 11.3268 38.3764V42.1352H9.43838C9.05991 42.1352 8.75363 42.4415 8.75363 42.82C8.75363 43.1984 9.05991 43.5047 9.43838 43.5047H30.5618C30.9403 43.5047 31.2466 43.1984 31.2466 42.82C31.2466 42.4415 30.9403 42.1352 30.5618 42.1352H28.6733V38.3764C28.6733 36.8658 27.445 35.6373 25.9343 35.6373H25.0482C23.0358 32.9448 22.5919 29.8743 22.4513 26.6773L26.839 28.9742C28.4822 29.8371 30.404 28.4364 30.0876 26.6076L28.8591 19.4704C28.8351 19.331 28.8453 19.1878 28.889 19.0532C28.9327 18.9186 29.0085 18.7967 29.1099 18.698L34.3153 13.6218ZM27.3038 38.3764V42.1352H12.6964V38.3764C12.6964 37.6214 13.3109 37.0069 14.0659 37.0069H25.9343C26.6893 37.0068 27.3038 37.6214 27.3038 38.3764ZM23.3785 35.6373H16.6217C18.525 32.6335 18.8411 29.3388 18.9474 25.9452L19.5955 25.6059C19.7204 25.5407 19.8592 25.5066 20.0001 25.5066C20.141 25.5066 20.2798 25.5407 20.4047 25.6059L21.0528 25.9452C21.1591 29.3388 21.4752 32.6335 23.3785 35.6373ZM27.5098 19.7031L28.7383 26.8403C28.8606 27.5515 28.1211 28.0966 27.4744 27.7612L21.0393 24.3928C20.7186 24.2248 20.3619 24.137 19.9998 24.137C19.6378 24.137 19.2811 24.2248 18.9603 24.3928L12.5259 27.7612C11.8807 28.0973 11.1397 27.5518 11.2621 26.8403L12.4911 19.7031C12.5529 19.3447 12.5264 18.9767 12.4141 18.6308C12.3018 18.2849 12.107 17.9715 11.8465 17.7177L6.64111 12.6415C6.12317 12.1363 6.40762 11.2598 7.12322 11.1542L14.318 10.0957C14.6769 10.0427 15.0175 9.90346 15.3107 9.68984C15.6039 9.47622 15.8408 9.19463 16.0012 8.86925L19.2177 2.35063C19.5388 1.70138 20.4612 1.70077 20.7826 2.35063L23.9984 8.86994C24.1593 9.1951 24.3966 9.47645 24.69 9.68991C24.9833 9.90337 25.324 10.0426 25.6829 10.0957L32.877 11.1542C33.5929 11.2598 33.8769 12.1365 33.3591 12.6415L28.1538 17.7177C27.8934 17.9716 27.6988 18.285 27.5866 18.6309C27.4744 18.9768 27.4481 19.3448 27.5098 19.7031Z"></path>
                    <path d="M22.7037 38.8866H17.2965C16.918 38.8866 16.6118 39.1929 16.6118 39.5714C16.6118 39.9498 16.918 40.2561 17.2965 40.2561H22.7038C23.0822 40.2561 23.3885 39.9498 23.3885 39.5714C23.3885 39.1929 23.0822 38.8866 22.7037 38.8866ZM36.6645 8.1069L35.8915 9.11529C35.6614 9.41556 35.7189 9.8449 36.0192 10.0749C36.3183 10.3044 36.7496 10.2482 36.9788 9.94717L37.7518 8.93878C37.9818 8.63851 37.9243 8.20917 37.6241 7.9792C37.3253 7.74974 36.8933 7.80663 36.6645 8.1069ZM36.9394 11.946C36.9394 12.0359 36.957 12.125 36.9914 12.2081C37.0258 12.2912 37.0763 12.3667 37.1399 12.4303C37.2035 12.4939 37.279 12.5443 37.3621 12.5787C37.4452 12.6131 37.5342 12.6308 37.6242 12.6307H38.8941C39.2725 12.6307 39.5788 12.3245 39.5788 11.946C39.5788 11.5675 39.2725 11.2612 38.8941 11.2612H37.6242C37.5342 11.2612 37.4452 11.2789 37.3621 11.3133C37.279 11.3477 37.2035 11.3981 37.1399 11.4617C37.0763 11.5253 37.0258 11.6008 36.9914 11.6839C36.957 11.767 36.9394 11.8561 36.9394 11.946ZM35.8915 14.776L36.6645 15.7844C36.8936 16.0853 37.3248 16.1418 37.6241 15.9121C37.9243 15.682 37.9818 15.2527 37.7518 14.9525L36.9788 13.9441C36.7501 13.6439 36.3188 13.587 36.0192 13.8164C35.719 14.0465 35.6614 14.4757 35.8915 14.776ZM4.10871 9.11529L3.3357 8.1069C3.10702 7.80663 2.6763 7.74983 2.37612 7.9792C2.07586 8.20925 2.01836 8.63851 2.24842 8.93878L3.02143 9.94717C3.25054 10.248 3.68177 10.3046 3.981 10.0749C4.28118 9.8449 4.33876 9.41556 4.10871 9.11529ZM0.421387 11.946C0.421342 12.0359 0.439022 12.125 0.473418 12.2081C0.507814 12.2912 0.558251 12.3667 0.621845 12.4303C0.685439 12.4939 0.760943 12.5443 0.844041 12.5787C0.927139 12.6131 1.0162 12.6308 1.10614 12.6307H2.37604C2.7545 12.6307 3.06079 12.3245 3.06079 11.946C3.06079 11.5675 2.7545 11.2612 2.37604 11.2612H1.10614C1.0162 11.2612 0.927139 11.2789 0.844041 11.3133C0.760943 11.3477 0.685439 11.3981 0.621845 11.4617C0.558251 11.5253 0.507814 11.6008 0.473418 11.6839C0.439022 11.767 0.421342 11.8561 0.421387 11.946ZM3.02134 13.9441L2.24833 14.9525C2.01828 15.2528 2.07577 15.6821 2.37604 15.9121C2.6751 16.1416 3.10642 16.0854 3.33561 15.7844L4.10862 14.776C4.33868 14.4757 4.28118 14.0464 3.98092 13.8164C3.68271 13.587 3.25071 13.6439 3.02134 13.9441Z"></path>
                  </svg>
                </div>
                <div>
                  <div className="mb-3 flex items-center">
                    <AnimatedCounter
                      value={1.5}
                      className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]"
                    />
                    <span className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]">
                      {"K"}
                    </span>
                  </div>
                  <span className="">{"Consulting Award"}</span>
                </div>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.9}
                duration={1}
                data-wow-delay=".9s"
                className="pt-7.5 max-[1600px]:pt-5 pr-7.5 max-[1600px]:pr-5 pb-7.5 max-[1600px]:pb-5 pl-7.5 max-[1600px]:pl-5 flex [border:1px_solid_#DBDEE1] gap-5 rounded-md [background:#F8F8F9] max-[991px]:flex-wrap"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 42 38"
                    className="align-middle w-11.25 h-11.25"
                  >
                    <path d="M28.7586 31.3881C27.724 31.9585 26.6291 32.4122 25.4941 32.7407C25.4779 32.7454 25.4637 32.7552 25.4537 32.7688C25.4437 32.7824 25.4385 32.799 25.4389 32.8158V37.2317C25.4385 37.3764 25.3808 37.515 25.2785 37.6173C25.1761 37.7195 25.0374 37.7771 24.8927 37.7773H17.1068C16.9621 37.777 16.8234 37.7194 16.7211 37.6171C16.6188 37.5148 16.5612 37.3761 16.5608 37.2314V32.8158C16.5613 32.799 16.5561 32.7824 16.5461 32.7688C16.5361 32.7553 16.5219 32.7454 16.5057 32.7407C15.3707 32.4122 14.2758 31.9585 13.2412 31.3881C13.2264 31.3797 13.2093 31.3765 13.1925 31.3789C13.1757 31.3813 13.1602 31.3892 13.1483 31.4013L10.0254 34.5243C9.92242 34.6261 9.78346 34.6832 9.63866 34.6832C9.49386 34.6832 9.3549 34.6261 9.25194 34.5243L3.74601 29.0188C3.6441 28.9163 3.58689 28.7776 3.58689 28.6331C3.58689 28.4885 3.6441 28.3499 3.74601 28.2474L6.87164 25.1244C6.88331 25.1123 6.89086 25.0968 6.89324 25.0802C6.89562 25.0635 6.89269 25.0465 6.88488 25.0316C6.31336 23.9974 5.8595 22.9024 5.53179 21.7672C5.52738 21.7507 5.51762 21.7361 5.50403 21.7257C5.49044 21.7153 5.47379 21.7097 5.45668 21.7098H1.03855C0.966856 21.7098 0.895857 21.6957 0.829613 21.6683C0.76337 21.6409 0.703179 21.6007 0.652483 21.55C0.601787 21.4993 0.56158 21.4391 0.534159 21.3728C0.506738 21.3066 0.492642 21.2356 0.492676 21.1639V17.2716C0.492994 17.1269 0.550607 16.9883 0.65291 16.886C0.755213 16.7837 0.893874 16.7261 1.03855 16.7257H4.67654C4.69706 16.7257 4.71673 16.7176 4.73123 16.7031C4.74574 16.6886 4.75389 16.6689 4.75389 16.6484V14.0979C4.75731 12.9221 5.22607 11.7955 6.05769 10.9643C6.88931 10.133 8.01617 9.66487 9.19196 9.66203H12.894C13.4984 9.66327 14.0962 9.78802 14.6507 10.0286C15.2052 10.2692 15.7047 10.6205 16.1185 11.0611C16.1318 11.0742 16.1492 11.0822 16.1678 11.0837C16.1864 11.0853 16.2049 11.0803 16.2202 11.0697C17.0238 10.5188 17.9755 10.2245 18.9497 10.2254H23.0496C24.0239 10.2245 24.9756 10.5188 25.7792 11.0697C25.7945 11.0803 25.813 11.0852 25.8316 11.0836C25.8501 11.0821 25.8675 11.0741 25.8808 11.0611C26.2947 10.6205 26.7942 10.2691 27.3487 10.0286C27.9032 9.78797 28.501 9.66324 29.1055 9.66203H32.8076C33.9833 9.66491 35.1102 10.1331 35.9418 10.9643C36.7734 11.7955 37.2421 12.9221 37.2456 14.0979V16.6484C37.2456 16.6689 37.2537 16.6886 37.2682 16.7031C37.2827 16.7176 37.3024 16.7257 37.3229 16.7257H40.9609C41.1056 16.7261 41.2442 16.7837 41.3465 16.886C41.4488 16.9883 41.5065 17.1269 41.5068 17.2716V21.1638C41.5068 21.2355 41.4927 21.3065 41.4653 21.3728C41.4379 21.439 41.3977 21.4992 41.347 21.5499C41.2963 21.6006 41.2361 21.6408 41.1698 21.6682C41.1036 21.6956 41.0326 21.7097 40.9609 21.7097H36.5429C36.5257 21.7096 36.5091 21.7152 36.4955 21.7256C36.4818 21.7359 36.4721 21.7506 36.4677 21.7671C36.1402 22.9024 35.6865 23.9974 35.1151 25.0316C35.1073 25.0465 35.1043 25.0635 35.1067 25.0802C35.1091 25.0968 35.1166 25.1123 35.1283 25.1244L38.2513 28.2474C38.3022 28.2979 38.3427 28.3579 38.3703 28.4241C38.3979 28.4903 38.4121 28.5614 38.4121 28.6331C38.4121 28.7048 38.3979 28.7758 38.3703 28.842C38.3427 28.9082 38.3022 28.9683 38.2513 29.0188L32.7479 34.5243C32.645 34.6261 32.506 34.6832 32.3612 34.6832C32.2164 34.6832 32.0775 34.6261 31.9745 34.5243L28.8515 31.4013C28.8397 31.3892 28.8242 31.3813 28.8074 31.3789C28.7906 31.3765 28.7734 31.3797 28.7586 31.3881ZM5.92521 16.7257H14.0189C14.0393 16.7255 14.0589 16.7173 14.0733 16.7028C14.0878 16.6884 14.096 16.6688 14.0962 16.6484V15.0792C14.0955 13.9031 14.5247 12.7672 15.3031 11.8855C15.3156 11.8705 15.3222 11.8515 15.3218 11.832C15.3214 11.8125 15.3139 11.7938 15.3008 11.7794C14.99 11.4541 14.6165 11.1953 14.2027 11.0187C13.789 10.842 13.3437 10.7512 12.8939 10.7516H9.19196C8.30544 10.7548 7.45613 11.1083 6.82926 11.7352C6.2024 12.362 5.84885 13.2114 5.84572 14.0979V16.6484C5.84611 16.6692 5.85468 16.689 5.86959 16.7035C5.88449 16.7179 5.90443 16.726 5.92521 16.7257ZM26.6963 11.8855C27.4746 12.7672 27.9038 13.9031 27.903 15.0792V16.6484C27.9033 16.6688 27.9115 16.6884 27.926 16.7028C27.9404 16.7172 27.96 16.7255 27.9804 16.7257H36.074C36.0948 16.726 36.1148 16.7179 36.1297 16.7035C36.1446 16.689 36.1532 16.6692 36.1536 16.6484V14.0979C36.1505 13.2114 35.7969 12.3621 35.1701 11.7352C34.5433 11.1084 33.6941 10.7548 32.8076 10.7516H29.1056C28.6557 10.7512 28.2105 10.842 27.7968 11.0187C27.383 11.1953 27.0095 11.4541 26.6987 11.7794C26.6851 11.7935 26.6772 11.8123 26.6768 11.832C26.6764 11.8517 26.6833 11.8708 26.6963 11.8855ZM30.9554 0.659992C31.71 0.659788 32.4478 0.883373 33.0754 1.30247C33.703 1.72157 34.1922 2.31737 34.4812 3.01451C34.7702 3.71165 34.8459 4.47883 34.6989 5.21903C34.5519 5.95923 34.1886 6.63921 33.6552 7.17297C33.1217 7.70674 32.4419 8.07032 31.7018 8.21774C30.9616 8.36515 30.1944 8.28978 29.4971 8.00116C28.7998 7.71254 28.2038 7.22363 27.7844 6.59626C27.3649 5.96889 27.141 5.23123 27.1408 4.47656C27.1406 3.46458 27.5424 2.49396 28.2578 1.77818C28.9732 1.0624 29.9434 0.660402 30.9554 0.659992ZM32.8826 2.54967C32.5016 2.16864 32.0162 1.90914 31.4878 1.80399C30.9593 1.69884 30.4115 1.75276 29.9137 1.95894C29.4159 2.16512 28.9904 2.51429 28.6911 2.96229C28.3917 3.4103 28.2319 3.93701 28.2319 4.47583C28.2319 5.01465 28.3917 5.54137 28.6911 5.98937C28.9904 6.43738 29.4159 6.78655 29.9137 6.99272C30.4115 7.1989 30.9593 7.25282 31.4878 7.14767C32.0162 7.04252 32.5016 6.78302 32.8826 6.40199C33.3932 5.89099 33.68 5.19819 33.68 4.47583C33.68 3.75348 33.3932 3.06067 32.8826 2.54967ZM11.044 0.659992C11.7986 0.660264 12.5361 0.884254 13.1634 1.30364C13.7906 1.72303 14.2795 2.31899 14.5681 3.01618C14.8567 3.71336 14.9321 4.48046 14.7848 5.2205C14.6375 5.96055 14.2741 6.6403 13.7405 7.17382C13.2069 7.70735 12.5271 8.07069 11.7871 8.21791C11.047 8.36513 10.2799 8.28963 9.58278 8.00094C8.88563 7.71224 8.28973 7.22333 7.87041 6.59601C7.45109 5.96869 7.22718 5.23112 7.227 4.47656C7.22683 3.97526 7.32544 3.47884 7.5172 3.01567C7.70897 2.5525 7.99012 2.13166 8.3446 1.77719C8.69907 1.42272 9.11992 1.14158 9.5831 0.949824C10.0463 0.758071 10.5427 0.659812 11.044 0.659992ZM12.969 2.54967C12.588 2.16864 12.1026 1.90914 11.5742 1.80399C11.0457 1.69884 10.4979 1.75276 10.0001 1.95894C9.5023 2.16512 9.07681 2.51429 8.77745 2.96229C8.47809 3.4103 8.31831 3.93701 8.31831 4.47583C8.31831 5.01465 8.47809 5.54137 8.77745 5.98937C9.07681 6.43738 9.5023 6.78655 10.0001 6.99272C10.4979 7.1989 11.0457 7.25282 11.5742 7.14767C12.1026 7.04252 12.588 6.78302 12.969 6.40199C13.4796 5.89099 13.7664 5.19819 13.7664 4.47583C13.7664 3.75348 13.4796 3.06067 12.969 2.54967ZM15.2654 16.7257H26.734C26.7545 16.7255 26.774 16.7172 26.7884 16.7028C26.8029 16.6884 26.8111 16.6688 26.8114 16.6484V15.0792C26.8081 14.0825 26.4107 13.1276 25.706 12.4228C25.0013 11.718 24.0464 11.3206 23.0497 11.3172H18.9498C17.9531 11.3202 16.998 11.7175 16.2932 12.4223C15.5884 13.1271 15.1911 14.0822 15.1881 15.0789V16.6481C15.1883 16.6686 15.1966 16.6881 15.211 16.7025C15.2255 16.717 15.245 16.7255 15.2654 16.7257ZM20.9987 0.222656C21.8555 0.222656 22.693 0.476737 23.4054 0.952767C24.1178 1.4288 24.6731 2.10539 25.0009 2.89699C25.3288 3.68859 25.4145 4.55963 25.2473 5.39997C25.0801 6.2403 24.6675 7.01217 24.0616 7.61798C23.4557 8.22378 22.6837 8.63631 21.8434 8.80338C21.003 8.97045 20.132 8.88456 19.3404 8.55659C18.5489 8.22861 17.8724 7.67326 17.3964 6.96079C16.9205 6.24832 16.6666 5.41071 16.6667 4.55391C16.6674 3.40528 17.124 2.3039 17.9363 1.49176C18.7486 0.679623 19.85 0.223157 20.9987 0.222656ZM23.2906 2.26487C22.8375 1.81176 22.2602 1.50319 21.6318 1.37817C21.0033 1.25315 20.3519 1.31731 19.7598 1.56252C19.1678 1.80773 18.6618 2.22299 18.3058 2.75578C17.9498 3.28857 17.7598 3.91497 17.7598 4.55575C17.7598 5.19654 17.9498 5.82293 18.3058 6.35573C18.6618 6.88852 19.1678 7.30378 19.7598 7.54899C20.3519 7.7942 21.0033 7.85836 21.6318 7.73334C22.2602 7.60832 22.8375 7.29974 23.2906 6.84663C23.5917 6.54595 23.8306 6.18885 23.9936 5.79576C24.1566 5.40266 24.2405 4.9813 24.2405 4.55575C24.2405 4.13021 24.1566 3.70884 23.9936 3.31575C23.8306 2.92266 23.5917 2.56556 23.2906 2.26487ZM1.58443 17.8949V20.5405C1.58442 20.5509 1.58649 20.5611 1.59052 20.5706C1.59455 20.5802 1.60044 20.5888 1.60786 20.596C1.61528 20.6032 1.62408 20.6089 1.63372 20.6126C1.64336 20.6164 1.65366 20.6182 1.664 20.6179H5.92968C6.05879 20.6182 6.18365 20.664 6.28229 20.7474C6.38092 20.8307 6.44702 20.9461 6.46894 21.0733V21.0819C6.81858 22.4097 7.34804 23.6835 8.04263 24.868C8.17961 25.1023 8.17523 25.363 7.97852 25.5597L4.95936 28.5789C4.95203 28.5859 4.94619 28.5943 4.94221 28.6036C4.93822 28.6129 4.93616 28.623 4.93616 28.6331C4.93616 28.6432 4.93822 28.6532 4.94221 28.6625C4.94619 28.6718 4.95203 28.6802 4.95936 28.6872L9.5828 33.3107C9.59 33.318 9.5986 33.3239 9.60809 33.3278C9.61758 33.3318 9.62777 33.3339 9.63806 33.3339C9.64835 33.3339 9.65854 33.3318 9.66803 33.3278C9.67752 33.3239 9.68611 33.318 9.69332 33.3107L12.7102 30.2937C12.9069 30.097 13.1699 30.0904 13.4043 30.2275C14.5881 30.9233 15.862 31.4528 17.1902 31.8011C17.1925 31.8011 17.1947 31.8033 17.1969 31.8033C17.3242 31.8244 17.4398 31.8899 17.5232 31.9883C17.6067 32.0867 17.6524 32.2114 17.6524 32.3404V36.6086C17.6527 36.629 17.6609 36.6486 17.6753 36.663C17.6898 36.6775 17.7093 36.6857 17.7298 36.6859H24.2696C24.29 36.6857 24.3096 36.6775 24.324 36.663C24.3385 36.6486 24.3467 36.629 24.3469 36.6086V32.3407H24.3491C24.3493 32.2201 24.3896 32.103 24.4636 32.0078C24.5377 31.9126 24.6412 31.8446 24.758 31.8147C26.1044 31.4663 27.3957 30.9322 28.5948 30.2277C28.8291 30.0907 29.0899 30.0973 29.2866 30.294L32.3058 33.3109C32.313 33.3183 32.3216 33.3241 32.3311 33.3281C32.3405 33.332 32.3507 33.3341 32.361 33.3341C32.3713 33.3341 32.3815 33.332 32.3909 33.3281C32.4004 33.3241 32.409 33.3183 32.4162 33.3109L37.0397 28.6875C37.0535 28.6729 37.0613 28.6535 37.0613 28.6333C37.0613 28.6132 37.0535 28.5938 37.0397 28.5792L34.021 25.5598C33.8243 25.3631 33.8198 25.1023 33.9548 24.8681C34.6517 23.6837 35.182 22.4089 35.5306 21.0797V21.0731C35.5525 20.9458 35.6186 20.8304 35.7173 20.7471C35.8159 20.6638 35.9407 20.6179 36.0699 20.6176H40.3357C40.3461 20.6179 40.3563 20.6161 40.366 20.6124C40.3756 20.6086 40.3844 20.603 40.3918 20.5958C40.3993 20.5885 40.4052 20.5799 40.4092 20.5704C40.4132 20.5608 40.4153 20.5506 40.4153 20.5403V17.8949C40.4149 17.8741 40.4064 17.8543 40.3914 17.8398C40.3765 17.8254 40.3565 17.8174 40.3357 17.8176H32.1957C32.1761 17.818 32.1573 17.8256 32.143 17.8391C32.1287 17.8526 32.1199 17.8709 32.1184 17.8905C31.9601 20.7322 30.7197 23.4054 28.652 25.3612C26.5843 27.317 23.8462 28.4068 21.0001 28.4068C18.1539 28.4068 15.4158 27.317 13.3481 25.3612C11.2804 23.4054 10.04 20.7322 9.88178 17.8905C9.88026 17.8709 9.8715 17.8525 9.8572 17.8391C9.84289 17.8256 9.82408 17.8179 9.80443 17.8176H1.66383C1.64305 17.8174 1.62303 17.8254 1.60812 17.8399C1.59322 17.8544 1.58481 17.8741 1.58443 17.8949ZM30.9467 17.8176H11.0528C11.0423 17.8176 11.0319 17.8198 11.0223 17.824C11.0126 17.8282 11.0039 17.8343 10.9967 17.8419C10.9895 17.8496 10.9839 17.8586 10.9802 17.8684C10.9766 17.8783 10.975 17.8888 10.9755 17.8993C11.1347 20.4498 12.2601 22.8437 14.1225 24.5935C15.9849 26.3433 18.4443 27.3174 20.9998 27.3174C23.5552 27.3174 26.0146 26.3433 27.877 24.5935C29.7394 22.8437 30.8648 20.4498 31.024 17.8993C31.0246 17.8888 31.0229 17.8783 31.0193 17.8684C31.0157 17.8586 31.01 17.8496 31.0028 17.8419C30.9956 17.8343 30.9869 17.8282 30.9772 17.824C30.9676 17.8198 30.9572 17.8176 30.9467 17.8176Z"></path>
                  </svg>
                </div>
                <div>
                  <div className="mb-3 flex items-center">
                    <AnimatedCounter
                      value={4.5}
                      className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]"
                    />
                    <span className="text-[40px] max-[1600px]:text-[30px] text-[#2B3944] font-semibold leading-[0.8]">
                      {"K"}
                    </span>
                  </div>
                  <span className="">{"Strategic Partners"}</span>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureAreaSection() {
  return (
    <section className="mb-40 pt-81.25 max-[1199px]:pt-37.5 min-[1199px]:max-[1600px]:pt-62.5 relative z-1">
      <div className="bg-center bg-cover bg-no-repeat absolute w-full h-full top-0 left-0 z-[-1] bg-[url('/assets/bg/feature-bg-thumb-01.webp')]!"></div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="-mb-40 pt-12.5 max-[575px]:pt-7.5 min-[575px]:max-[1600px]:pt-10 pb-10 max-[575px]:pb-5 min-[575px]:max-[1600px]:pb-7.5 [background:#AB052D] ps-25 max-[575px]:ps-7.5 min-[575px]:max-[1600px]:ps-10 pe-25 max-[575px]:pe-7.5 min-[575px]:max-[1600px]:pe-10 grid grid-cols-[repeat(3,1fr)] max-[767px]:grid-cols-[repeat(1,1fr)] min-[767px]:max-[991px]:grid-cols-[repeat(2,1fr)] gap-[30px_120px] max-[1600px]:gap-[30px_30px] rounded-md">
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
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
                      d="M35.8847 11.5495C35.5146 11.5495 35.1463 11.5762 34.7833 11.6289C34.8477 7.02454 29.8368 4.18955 25.9611 6.46509C24.6953 2.65196 21.1546 0.0604248 17.0599 0.0604248C11.8811 0.0604248 7.66792 4.2736 7.66792 9.45219C7.66792 10.1662 7.74732 10.8695 7.90459 11.5524C3.81104 11.6669 0.516113 15.0302 0.516113 19.1481C0.516113 23.3382 3.92732 26.747 8.12012 26.747L10.5092 26.6906C10.6421 32.9156 15.7436 37.9394 21.9999 37.9394C25.054 37.9394 27.9275 36.7581 30.0912 34.6125C30.1495 34.5547 30.1959 34.4859 30.2277 34.4101C30.2594 34.3344 30.276 34.2531 30.2763 34.1709C30.2767 34.0887 30.2608 34.0073 30.2297 33.9313C30.1985 33.8552 30.1527 33.7861 30.0949 33.7277C30.037 33.6694 29.9682 33.623 29.8925 33.5912C29.8167 33.5595 29.7354 33.5429 29.6532 33.5426C29.571 33.5422 29.4896 33.5581 29.4136 33.5892C29.3375 33.6204 29.2684 33.6662 29.21 33.724C27.2826 35.6353 24.7219 36.6879 22 36.6879C16.3506 36.6879 11.7545 32.0918 11.7545 26.4425C11.7545 20.7931 16.3506 16.197 22 16.197C27.6493 16.197 32.2454 20.7931 32.2454 26.4425C32.2454 28.129 31.8271 29.7981 31.0353 31.2687C30.9589 31.4146 30.9432 31.5848 30.9914 31.7422C31.0397 31.8997 31.1481 32.0318 31.2931 32.1099C31.4381 32.1879 31.6081 32.2057 31.7661 32.1593C31.9241 32.1129 32.0575 32.006 32.1372 31.8619C32.9826 30.2915 33.4439 28.5205 33.4882 26.7237C34.748 26.7521 35.9633 26.7464 36.1052 26.747L36.0604 26.745C40.1697 26.651 43.4837 23.2794 43.4837 19.1481C43.4837 14.9583 40.0749 11.5495 35.8847 11.5495ZM35.8847 25.4956C35.821 25.4959 34.7021 25.4907 33.4566 25.5197C32.9844 19.6105 28.0284 14.9457 21.9999 14.9457C15.9601 14.9457 10.9969 19.6281 10.5407 25.5529L8.12012 25.4957C4.61722 25.4957 1.76762 22.6483 1.76762 19.1483C1.76762 15.3704 5.0696 12.4679 8.67605 12.8285C9.1298 12.8714 9.47536 12.4362 9.3315 12.007C9.05813 11.1915 8.91943 10.3318 8.91943 9.45236C8.91943 4.96385 12.5712 1.31202 17.0599 1.31202C20.8738 1.31202 24.1334 3.90621 24.9864 7.62078C25.0899 8.07126 25.6326 8.25955 25.9928 7.96461C29.2307 5.31241 34.1685 8.04746 33.4688 12.3089C33.3952 12.76 33.8126 13.1313 34.2481 13.0147C34.7819 12.8724 35.3321 12.8005 35.8846 12.8011C39.3846 12.8011 42.232 15.6485 42.232 19.1483C42.2322 22.6482 39.3848 25.4956 35.8847 25.4956Z"
                      className="group-hover/feature-item:fill-[#2B3944] fill-[#FFFFFF] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"
                    ></path>
                    <path
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
                    " We provide a antenna base on facts hype, to help improve returns your."
                  }
                </p>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.5}
                duration={1}
                data-wow-delay=".5s"
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
                    " Our mission is to empower businesses with the insight structure and tools."
                  }
                </p>
              </AnimatedElement>
              <AnimatedElement
                as="div"
                effect="fade"
                delay={0.7}
                duration={1}
                data-wow-delay=".7s"
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
                      d="M5.29375 29.5969L3.67812 30.1194L2.30312 25.9119L0.996875 26.3381L2.37188 30.5387C2.48188 30.8894 2.72938 31.1781 3.0525 31.3431C3.37563 31.5081 3.74687 31.5425 4.10437 31.4256L5.72 30.9031C6.47625 32.285 7.40437 33.5706 8.4975 34.7325L7.50062 36.1075C7.28062 36.4031 7.19125 36.7675 7.24625 37.125C7.30125 37.4894 7.50063 37.8125 7.79625 38.0325L11.1306 40.4525C11.4331 40.6725 11.7975 40.7619 12.1619 40.7C12.5262 40.645 12.8425 40.4456 13.0556 40.15L14.0594 38.7819C15.4894 39.4694 17.0019 39.9575 18.5556 40.2463V41.9444C18.5556 42.7006 19.1744 43.3194 19.9306 43.3194H24.0556C24.8119 43.3194 25.4306 42.7006 25.4306 41.9444V40.2463C26.9844 39.9575 28.4969 39.4625 29.9338 38.775L30.9237 40.1431C31.1369 40.4456 31.4531 40.6381 31.8175 40.7C32.1887 40.7619 32.5531 40.6725 32.8487 40.4525L36.1831 38.0325C36.4856 37.8125 36.6781 37.4894 36.7331 37.125C36.7881 36.7606 36.6987 36.4031 36.4856 36.1075L35.4956 34.7256C36.5819 33.5775 37.5169 32.2919 38.2663 30.8962L39.8819 31.4256C40.2325 31.5356 40.6038 31.5081 40.9338 31.3431C41.2638 31.1712 41.5044 30.8894 41.6144 30.5387L42.9894 26.3312L41.6831 25.905L40.3081 30.1194L38.6925 29.59C38.0737 29.3838 37.3931 29.6588 37.0563 30.2431C36.357 31.5264 35.4951 32.7142 34.4919 33.7769C34.0312 34.265 33.9831 35.0075 34.375 35.53L35.3719 36.905L32.0375 39.325L31.0338 37.9431C30.8431 37.6854 30.5687 37.502 30.2577 37.4242C29.9467 37.3465 29.6183 37.3792 29.3288 37.5169C28.0019 38.1494 26.6063 38.6031 25.1831 38.8713C24.53 38.995 24.0487 39.5588 24.0487 40.2188V41.9169H19.9237V40.2188C19.9237 39.5588 19.4494 38.9881 18.7894 38.8713C17.3594 38.6031 15.9637 38.1494 14.63 37.51C14.025 37.235 13.3237 37.4069 12.9319 37.9431L11.935 39.3181L8.60063 36.8981L9.59062 35.53C9.98938 35.0006 9.94125 34.2581 9.47375 33.77C8.46719 32.7034 7.60293 31.511 6.9025 30.2225C6.5725 29.6519 5.89188 29.3769 5.27313 29.5831L5.29375 29.5969Z"
                      className="group-hover/feature-item:fill-[#2B3944] fill-[#FFFFFF] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"
                    ></path>
                    <path
                      d="M22 36.4375C28.3456 36.4375 33.88 32.3744 35.7706 26.3312L34.4575 25.9188C32.7456 31.3844 27.7406 35.0625 21.9931 35.0625C16.2456 35.0625 11.2406 31.3913 9.52875 25.9188L8.21562 26.3312C10.1062 32.3744 15.6406 36.4375 21.9862 36.4375H22ZM0.6875 23.375H43.3125V24.75H0.6875V23.375ZM40.5625 22V12.375C40.5625 11.9969 40.2531 11.6875 39.875 11.6875H34.375V1.375C34.375 0.996875 34.0656 0.6875 33.6875 0.6875H25.4375C25.0594 0.6875 24.75 0.996875 24.75 1.375V8.25H19.25V5.5C19.25 5.29375 19.1606 5.10125 19.0025 4.97062L14.8775 1.53313C14.7541 1.42985 14.5984 1.37326 14.4375 1.37326C14.2766 1.37326 14.1209 1.42985 13.9975 1.53313L9.8725 4.97062C9.71437 5.10125 9.625 5.29375 9.625 5.5V11H4.125C3.74688 11 3.4375 11.3094 3.4375 11.6875V22H4.8125V12.375H9.625V22H11V5.82313L14.4375 2.95625L17.875 5.82313V22H19.25V9.625H24.75V22H26.125V2.0625H33V22H34.375V13.0625H39.1875V22H40.5625Z"
                      className="group-hover/feature-item:fill-[#2B3944] fill-[#FFFFFF] [transition:all_0.5s_ease-in-out] motion-reduce:transition-none"
                    ></path>
                    <path
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
                    " We begin by understanding your current state goals challenges. "
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

function FeatureAreaSection2() {
  return (
    <section className="pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[430px_auto] max-[991px]:grid-cols-[auto] min-[991px]:max-[1199px]:grid-cols-[300px_auto] min-[1199px]:max-[1366px]:grid-cols-[350px_auto] gap-[30px_80px] max-[1600px]:gap-[30px_30px] items-center">
              <div>
                <div>
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    {"Build Your Industries"}
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-2.5 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {"Industries we help"}
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "We support businesses in tech, retail, real estate, finance, healthcare, and more providing custom strategies that work in your world."
                    }
                  </p>
                </div>
                <div className="mt-10.5 max-[991px]:mt-7.5">
                  <SiteLink
                    href="/industry"
                    className="text-[#FFFFFF] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#AB052D] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] gap-2 group/btn [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    {"View All Industries"}
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
                        {"Advanced Manufacturing"}
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
                        {"Financial Services "}
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
                        {"Energy & Natural Resources"}
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
                        {"Government"}
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
                        {" Healthcare & Life Sciences "}
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
                        {"Agribusiness"}
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
      </div>
    </section>
  );
}
