import {
  AnimatedElement,
  RotatingHotspots,
} from "@/components/atoms/animated-element";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { IndustryExplorer } from "@/components/organisms/industry-explorer";
import { EmailForm } from "@/components/molecules/email-form";

export function IndustryPageContent() {
  return (
    <SitePageTemplate route="industry">
      <main>
        <BreadcrumbAreaSection />
        <WorkingAreaSection />
        <IndustrySectionSection />
        <FeatureAreaSection />
        <TeamAreaSection />
        <ContactAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="Industry"
      description="Position your agency bridge between a client's big picture"
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}

function WorkingAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 relative z-1 overflow-x-clip">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="pt-7.5 pb-7.5 grid grid-cols-[1fr_522px] max-[991px]:grid-cols-[repeat(1,1fr)] min-[991px]:max-[1600px]:grid-cols-[repeat(2,1fr)] [background:#F8F8F9] ps-15 max-[1600px]:ps-7.5 pe-7.5 gap-[30px_90px] max-[1600px]:gap-[30px_30px] rounded-md">
              <div>
                <div>
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    {"Best BUSINESS Strategy"}
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-5 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {"Welcome to ICFC team"}
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                    {
                      "Position your agency as the bridge between a client's big-picture vision and achievable action plans. data-driven strategies and your track."
                    }
                  </p>
                </div>
                <div className="mt-7.5 mb-12.5 max-[991px]:mb-10 grid grid-cols-[repeat(2,1fr)] max-[767px]:grid-cols-[repeat(1,1fr)] min-[991px]:max-[1199px]:grid-cols-[repeat(1,1fr)] gap-[15px_0] w-128.75 max-[767px]:w-full min-[991px]:max-[1600px]:w-full">
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
                      {"Global Expansion Planning"}
                    </p>
                  </div>
                </div>
                <div>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-3.5 pr-6.5 pb-3.5 pl-6.5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#AB052D] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-hidden hover:[background:#2B3944] gap-2 group/btn [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                  >
                    {"Join a global team "}
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
              <AnimatedElement
                as="div"
                effect="reveal-right"
                delay={0}
                duration={1}
                data-dir="reveal_right"
                className="relative z-1 visible overflow-hidden"
              >
                <SiteImage
                  src="/assets/images/work/working-thumb-09.webp"
                  alt="image"
                  className="align-middle max-w-full rounded-md w-full h-full object-cover"
                />
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustrySectionSection() {
  return <IndustryExplorer />;
}

function FeatureAreaSection() {
  return (
    <section className="pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 relative z-1">
      <div className="bg-center bg-cover bg-no-repeat bg-[url('/assets/bg/feature-bg-thumb-05.webp')]! h-117.5 absolute w-full bottom-0 left-0 z-[-1]"></div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[75%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[83.33333333%] max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="text-center! mb-11.25">
              <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                {
                  "\n                        All-Industry IT Solutions\n                     "
                }
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-0 mb-3.75 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                {
                  "Solving IT Challenges Everywhere\n                            "
                }
              </AnimatedElement>
              <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                {
                  "Position your agency as the bridge between a client's big-picture vision\n                                and achievable\n                            "
                }
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
                      src="/assets/images/feature/feature-thumb-05.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
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
              </div>
              <div className="mb-3.75 max-[991px]:mb-0 pt-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] max-[767px]:[border-bottom:0] gap-3.75 [border-top:1px_solid_#DBDEE1] group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-06.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
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
              </div>
              <div className="mb-3.75 pt-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 [border-top:1px_solid_#DBDEE1] group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-07.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
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
              </div>
              <div className="mb-3.75 max-[991px]:mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-08.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
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
              </div>
              <div className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[767px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-09.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
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
              </div>
              <div className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[767px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-08.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
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
              </div>
              <div className="mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[991px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-13.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"Cybersecurity in Finance"}
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
              </div>
              <div className="mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[767px]:pt-0 min-[767px]:max-[991px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-14.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"Financial Data Analytics"}
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
              </div>
              <div className="mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-10.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
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
              </div>
              <div className="mb-0 max-[991px]:mb-3.75 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-15.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"Payment Processing"}
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
              </div>
              <div className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-16.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"FinTech Solutions"}
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
              </div>
              <div className="mb-0 pb-3.75 flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-3.75 max-[767px]:pt-3.75 group/feature-item">
                <div className="flex items-center gap-6.25">
                  <div className="w-16 h-16 min-w-16 overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-13.webp"
                      alt="image"
                      className="align-middle max-w-full group-hover/feature-item:transform-[scale3d(1.1,1.1,1)] w-full transform-[scale(1.02)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                    />
                  </div>
                  <h6 className="mt-0 mb-0 font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D] [transition:unset] motion-reduce:transition-none">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"Digital Banking"}
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
              </div>
            </AnimatedElement>
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
                  "\n                        The expert teams member\n                     "
                }
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-0 mb-0 font-semibold leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                {"Meet with consultant expert"}
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

function ContactAreaSection() {
  return (
    <section className="overflow-x-clip relative z-1 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 min-[991px]:max-[1199px]:pb-30">
      <div className="bg-center bg-cover bg-no-repeat absolute w-full h-128 max-[767px]:h-95 bottom-0 left-0 z-[-1] bg-[url('/assets/bg/contact-bg-thumb-01.webp')]!"></div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <RotatingHotspots className="grid grid-cols-[740px_851px] max-[1199px]:grid-cols-[auto] min-[1199px]:max-[1366px]:grid-cols-[450px_851px] min-[1366px]:max-[1600px]:grid-cols-[550px_851px]">
              <div>
                <div className="pt-12.5 max-[1600px]:pt-7.5 pb-13.75 max-[1600px]:pb-7.5 [background:#AB052D] ps-15 max-[1600px]:ps-7.5 pe-15 max-[1600px]:pe-7.5">
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                    {
                      "\n                              Contact with us now\n                           "
                    }
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-2.5 font-semibold leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[991px]:text-[30px] min-[991px]:max-[1366px]:text-[35px] min-[1366px]:max-[1600px]:text-[40px] [word-break:break-word]"
                  >
                    {
                      "Let's Collaborate\n                                        with Us!"
                    }
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#FFFFFF] leading-7">
                    {
                      "read and update the latest news from us. done eu magna quis felis.\n                                    "
                    }
                  </p>
                </div>
                <div className="pt-15.5 max-[1366px]:pt-8.75 pb-15.5 max-[1366px]:pb-8.75 [background:#FFFFFF] ps-15 max-[1199px]:ps-0 min-[1199px]:max-[1366px]:ps-7.5 min-[1366px]:max-[1600px]:ps-10 pe-10 max-[1199px]:pe-0 min-[1199px]:max-[1366px]:pe-7.5">
                  <EmailForm id="contact-form">
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
                              className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-[100px] text-black ps-5 pe-5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
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
                              className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-[100px] text-black ps-5 pe-5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
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
                              className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-[100px] text-black ps-5 pe-5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
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
                              <option value="three">
                                {"Financial Planing"}
                              </option>
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
                              className="mt-0 max-[767px]:mt-5 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] resize-y pt-3.75 pr-5 pb-3.75 pl-5 bg-transparent h-43.5 w-full [border:1px_solid_#DBDEE1] rounded-2xl text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                        <div>
                          <button
                            type="submit"
                            className="rounded-2xl mt-0 mr-0 mb-0 ml-0 text-[17px] leading-[inherit] normal-case w-full! pt-3.5 pr-6.5 pb-3.5 pl-6.5 text-[#FFFFFF] [border:none] [background:#2B3944] inline-flex items-center justify-center font-medium relative z-1 overflow-hidden hover:[background:#AB052D] hover:text-[#FFFFFF] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                          >
                            {
                              "\n                                                        Send Massage\n                                                    "
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  </EmailForm>
                </div>
              </div>
              <div>
                <div className="pt-22 max-[1199px]:pt-7.5 min-[1199px]:max-[1600px]:pt-15 pb-21.25 max-[1199px]:pb-7.5 min-[1199px]:max-[1600px]:pb-15 [background:#2B3944] ps-15 max-[1600px]:ps-7.5 pe-15 max-[1600px]:pe-7.5 flex items-center gap-[30px_70px] max-[1199px]:gap-[30px_30px] flex-wrap">
                  <div>
                    <span className="mb-3 text-[rgba(255,255,255,0.31)] text-[24px] max-[767px]:text-[20px] block leading-[1.15]">
                      {"Email: "}
                    </span>
                    <SiteLink
                      href="mailto:admin@icfc.com.sg"
                      className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[20px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"admin@icfc.com.sg"}
                    </SiteLink>
                  </div>
                  <div>
                    <span className="mb-3 text-[rgba(255,255,255,0.31)] text-[24px] max-[767px]:text-[20px] block leading-[1.15]">
                      {"Contact Number:"}
                    </span>
                    <SiteLink
                      href="tel:+65 8601 7001"
                      className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[20px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"+65 8601 7001"}
                    </SiteLink>
                  </div>
                </div>
                <div className="relative max-[1199px]:h-auto">
                  <SiteImage
                    src="/assets/images/contact/map-thumb-01.webp"
                    alt="image"
                    className="align-middle max-w-full w-full h-full object-cover"
                  />
                  <div>
                    <AnimatedElement
                      as="div"
                      effect="hotspot"
                      index={0}
                      className="absolute inset-s-[17%] max-[991px]:inset-s-[24%] top-[30%] group/ripple-item"
                    >
                      <AnimatedElement
                        as="div"
                        effect="figure"
                        className="pt-2 pr-2 pb-2 pl-2 group-hover/ripple-item:opacity-[1] group-hover/ripple-item:transform-[translate3d(-50%,-35px,0)] group-hover/ripple-item:visible flex max-[767px]:hidden [background:#F8F8F9] rounded-md gap-5 shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] min-w-92.5 absolute bottom-0 left-2 z-99 before:[content:''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0 before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-full before:right-0 before:mt-0 before:mr-auto before:mb-0 before:ml-auto"
                      >
                        <div className="w-32.5 min-w-32.5">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-06.webp"
                            alt="image"
                            className="align-middle max-w-full w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="mt-0 mb-2.5 font-semibold leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                              {" Corporate Growth "}
                            </h6>
                          </div>
                        </div>
                      </AnimatedElement>
                      <AnimatedElement
                        as="div"
                        effect="pulse"
                        className="relative after:[content:''] after:absolute after:top-0.75 after:left-0.75 after:h-2 after:w-2 after:rounded-full after:[background:rgba(255,255,255,0.7607843137)] after:z-9 after:[border:1px_solid_#2B3944]"
                      >
                        <div className="absolute left-1.75 -bottom-4.75 w-px h-2 [background:#2B3944]"></div>
                      </AnimatedElement>
                    </AnimatedElement>
                    <div className="pt-7.5 max-[767px]:pt-3.75 pr-7.5 max-[767px]:pr-3.75 pb-7.5 max-[767px]:pb-3.75 pl-7.5 max-[767px]:pl-3.75 hidden max-[767px]:block! absolute left-[50%] top-[40%] transform-[translate(-50%,-50%)] w-full max-w-70 text-black [background:#FFFFFF] rounded-[5px] opacity-[0] invisible z-10 text-center shadow-[0_0_40px_rgba(0,0,0,0.08)]">
                      <Icon
                        name="close"
                        className="mt-0 mr-auto mb-2.5 ml-auto flex not-italic [border:1px_solid_#d5d5d5] w-7.5 h-7.5 items-center justify-center text-center rounded-full"
                      />
                      <div>
                        <h6 className="mt-0 mb-1.5 font-semibold leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                          {" Corporate Growth "}
                        </h6>
                      </div>
                    </div>
                    <AnimatedElement
                      as="div"
                      effect="hotspot"
                      index={1}
                      className="absolute inset-s-[50%] top-[22%] group/ripple-item"
                    >
                      <AnimatedElement
                        as="div"
                        effect="figure"
                        className="pt-2 pr-2 pb-2 pl-2 group-hover/ripple-item:opacity-[1] group-hover/ripple-item:transform-[translate3d(-50%,-35px,0)] group-hover/ripple-item:visible flex max-[767px]:hidden [background:#F8F8F9] rounded-md gap-5 shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] min-w-92.5 absolute bottom-0 left-2 z-99 before:[content:''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0 before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-full before:right-0 before:mt-0 before:mr-auto before:mb-0 before:ml-auto"
                      >
                        <div className="w-32.5 min-w-32.5">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-07.webp"
                            alt="image"
                            className="align-middle max-w-full w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="mt-0 mb-2.5 font-semibold leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                              {" Risk Management "}
                            </h6>
                          </div>
                        </div>
                      </AnimatedElement>
                      <AnimatedElement
                        as="div"
                        effect="pulse"
                        className="relative after:[content:''] after:absolute after:top-0.75 after:left-0.75 after:h-2 after:w-2 after:rounded-full after:[background:rgba(255,255,255,0.7607843137)] after:z-9 after:[border:1px_solid_#2B3944]"
                      >
                        <div className="absolute left-1.75 -bottom-4.75 w-px h-2 [background:#2B3944]"></div>
                      </AnimatedElement>
                    </AnimatedElement>
                    <div className="pt-7.5 max-[767px]:pt-3.75 pr-7.5 max-[767px]:pr-3.75 pb-7.5 max-[767px]:pb-3.75 pl-7.5 max-[767px]:pl-3.75 hidden max-[767px]:block! absolute left-[50%] top-[40%] transform-[translate(-50%,-50%)] w-full max-w-70 text-black [background:#FFFFFF] rounded-[5px] opacity-[0] invisible z-10 text-center shadow-[0_0_40px_rgba(0,0,0,0.08)]">
                      <Icon
                        name="close"
                        className="mt-0 mr-auto mb-2.5 ml-auto flex not-italic [border:1px_solid_#d5d5d5] w-7.5 h-7.5 items-center justify-center text-center rounded-full"
                      />
                      <div>
                        <h6 className="mt-0 mb-1.5 font-semibold leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                          {" Risk Management "}
                        </h6>
                      </div>
                      <div></div>
                    </div>
                    <AnimatedElement
                      as="div"
                      effect="hotspot"
                      index={2}
                      className="absolute inset-s-[55%] top-[46%] group/ripple-item"
                    >
                      <AnimatedElement
                        as="div"
                        effect="figure"
                        className="pt-2 pr-2 pb-2 pl-2 group-hover/ripple-item:opacity-[1] group-hover/ripple-item:transform-[translate3d(-50%,-35px,0)] group-hover/ripple-item:visible flex max-[767px]:hidden [background:#F8F8F9] rounded-md gap-5 shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] min-w-92.5 absolute bottom-0 left-2 z-99 before:[content:''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0 before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-full before:right-0 before:mt-0 before:mr-auto before:mb-0 before:ml-auto"
                      >
                        <div className="w-32.5 min-w-32.5">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-08.webp"
                            alt="image"
                            className="align-middle max-w-full w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="mt-0 mb-2.5 font-semibold leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                              {" Financial Advisory "}
                            </h6>
                          </div>
                          <div></div>
                        </div>
                      </AnimatedElement>
                      <AnimatedElement
                        as="div"
                        effect="pulse"
                        className="relative after:[content:''] after:absolute after:top-0.75 after:left-0.75 after:h-2 after:w-2 after:rounded-full after:[background:rgba(255,255,255,0.7607843137)] after:z-9 after:[border:1px_solid_#2B3944]"
                      >
                        <div className="absolute left-1.75 -bottom-4.75 w-px h-2 [background:#2B3944]"></div>
                      </AnimatedElement>
                    </AnimatedElement>
                    <div className="pt-7.5 max-[767px]:pt-3.75 pr-7.5 max-[767px]:pr-3.75 pb-7.5 max-[767px]:pb-3.75 pl-7.5 max-[767px]:pl-3.75 hidden max-[767px]:block! absolute left-[50%] top-[40%] transform-[translate(-50%,-50%)] w-full max-w-70 text-black [background:#FFFFFF] rounded-[5px] opacity-[0] invisible z-10 text-center shadow-[0_0_40px_rgba(0,0,0,0.08)]">
                      <Icon
                        name="close"
                        className="mt-0 mr-auto mb-2.5 ml-auto flex not-italic [border:1px_solid_#d5d5d5] w-7.5 h-7.5 items-center justify-center text-center rounded-full"
                      />
                      <div>
                        <h6 className="mt-0 mb-1.5 font-semibold leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                          {" Financial Advisory "}
                        </h6>
                      </div>
                    </div>
                    <AnimatedElement
                      as="div"
                      effect="hotspot"
                      index={3}
                      className="absolute inset-s-[37%] bottom-[33%] group/ripple-item"
                    >
                      <AnimatedElement
                        as="div"
                        effect="figure"
                        className="pt-2 pr-2 pb-2 pl-2 group-hover/ripple-item:opacity-[1] group-hover/ripple-item:transform-[translate3d(-50%,-35px,0)] group-hover/ripple-item:visible flex max-[767px]:hidden [background:#F8F8F9] rounded-md gap-5 shadow-[0px_0px_0px_0px_rgba(0,0,0,0.5)] min-w-92.5 absolute bottom-0 left-2 z-99 before:[content:''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0 before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-full before:right-0 before:mt-0 before:mr-auto before:mb-0 before:ml-auto"
                      >
                        <div className="w-32.5 min-w-32.5">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-09.webp"
                            alt="image"
                            className="align-middle max-w-full w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="mt-0 mb-2.5 font-semibold leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                              {" Business Strategy "}
                            </h6>
                          </div>
                        </div>
                      </AnimatedElement>
                    </AnimatedElement>
                    <div className="pt-7.5 max-[767px]:pt-3.75 pr-7.5 max-[767px]:pr-3.75 pb-7.5 max-[767px]:pb-3.75 pl-7.5 max-[767px]:pl-3.75 hidden max-[767px]:block! absolute left-[50%] top-[40%] transform-[translate(-50%,-50%)] w-full max-w-70 text-black [background:#FFFFFF] rounded-[5px] opacity-[0] invisible z-10 text-center shadow-[0_0_40px_rgba(0,0,0,0.08)]">
                      <Icon
                        name="close"
                        className="mt-0 mr-auto mb-2.5 ml-auto flex not-italic [border:1px_solid_#d5d5d5] w-7.5 h-7.5 items-center justify-center text-center rounded-full"
                      />
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </RotatingHotspots>
          </div>
        </div>
      </div>
    </section>
  );
}
