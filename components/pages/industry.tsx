import { AnimatedElement } from "@/components/atoms/animated-element";
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] relative z-[1] [overflow-x:clip]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="pt-[30px] pb-[30px] grid [grid-template-columns:1fr_522px] max-[991px]:[grid-template-columns:repeat(1,_1fr)] min-[991px]:max-[1600px]:[grid-template-columns:repeat(2,_1fr)] [background:#F8F8F9] [padding-inline-start:60px] max-[1600px]:[padding-inline-start:30px] [padding-inline-end:30px] gap-[30px_90px] max-[1600px]:gap-[30px_30px] rounded-[6px]">
              <div>
                <div>
                  <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                    {"Best BUSINESS Strategy"}
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
                  >
                    {"Welcome to ICFC team"}
                  </AnimatedElement>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                    {
                      "Position your agency as the bridge between a client's big-picture vision and achievable action plans. data-driven strategies and your track."
                    }
                  </p>
                </div>
                <div className="mt-[30px] mb-[50px] max-[991px]:mb-[40px] grid [grid-template-columns:repeat(2,_1fr)] max-[767px]:[grid-template-columns:repeat(1,_1fr)] min-[991px]:max-[1199px]:[grid-template-columns:repeat(1,_1fr)] gap-[15px_0] w-[515px] max-[767px]:w-full min-[991px]:max-[1600px]:w-full">
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[26px] min-w-[26px] h-[26px] [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="[vertical-align:middle] w-[14px] h-[14px]"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="[fill:#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-[0] mb-[0] text-[16px] font-medium text-[#2B3944] leading-[28px]">
                      {" Regulatory Investigations "}
                    </p>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[26px] min-w-[26px] h-[26px] [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="[vertical-align:middle] w-[14px] h-[14px]"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="[fill:#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-[0] mb-[0] text-[16px] font-medium text-[#2B3944] leading-[28px]">
                      {" Competitive Work Analysis "}
                    </p>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[26px] min-w-[26px] h-[26px] [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="[vertical-align:middle] w-[14px] h-[14px]"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="[fill:#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-[0] mb-[0] text-[16px] font-medium text-[#2B3944] leading-[28px]">
                      {" Anit- Competitive Conduct "}
                    </p>
                  </div>
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[26px] min-w-[26px] h-[26px] [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="[vertical-align:middle] w-[14px] h-[14px]"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="[fill:#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-[0] mb-[0] text-[16px] font-medium text-[#2B3944] leading-[28px]">
                      {"Global Expansion Planning"}
                    </p>
                  </div>
                </div>
                <div>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#AB052D] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] gap-[8px] group/btn"
                  >
                    {"Join a global team "}
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[17px] group-hover/icon-box:[transform:translateX(150%)]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="[fill:#FFFFFF]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[17px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="[fill:#FFFFFF]"
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
                className="relative z-[1] visible overflow-hidden"
              >
                <SiteImage
                  src="/assets/images/work/working-thumb-09.webp"
                  alt="image"
                  className="[vertical-align:middle] max-w-full rounded-[6px] w-full h-full object-cover"
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
    <section className="pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] relative z-[1]">
      <div className="bg-center bg-cover bg-no-repeat bg-[url('/assets/bg/feature-bg-thumb-05.webp')]! h-[470px] absolute w-full bottom-[0] left-[0] z-[-1]"></div>
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] justify-center!">
          <div className="[flex-shrink:0] w-[75%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[83.33333333%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="text-center! mb-[45px]">
              <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                {
                  "\n                        All-Industry IT Solutions\n                     "
                }
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-[0px] mb-[15px] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                {
                  "Solving IT Challenges Everywhere\n                            "
                }
              </AnimatedElement>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Position your agency as the bridge between a client's big-picture vision\n                                and achievable\n                            "
                }
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <AnimatedElement
              as="div"
              effect="up"
              delay={0.3}
              duration={1}
              data-wow-delay=".3s"
              data-wow-duration="1s"
              className="pt-[60px] max-[480px]:pt-[25px] min-[480px]:max-[991px]:pt-[30px] min-[991px]:max-[1600px]:pt-[40px] pb-[60px] max-[480px]:pb-[25px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[40px] grid [grid-template-columns:repeat(3,_1fr)] max-[767px]:[grid-template-columns:repeat(1,_1fr)] min-[767px]:max-[991px]:[grid-template-columns:repeat(2,_1fr)] gap-[0_30px] items-center [background:#F8F8F9] [padding-inline-start:60px] max-[480px]:[padding-inline-start:25px] min-[480px]:max-[991px]:[padding-inline-start:30px] min-[991px]:max-[1600px]:[padding-inline-start:40px] [padding-inline-end:60px] max-[480px]:[padding-inline-end:25px] min-[480px]:max-[991px]:[padding-inline-end:30px] min-[991px]:max-[1600px]:[padding-inline-end:40px] rounded-[6px]"
            >
              <div className="mb-[15px] pt-[15px] pb-[15px] max-[991px]:pb-[0px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] max-[991px]:[border-bottom:0] gap-[15px] [border-top:1px_solid_#DBDEE1] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-05.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Advanced Manufacturing"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[15px] max-[991px]:mb-[0] pt-[15px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] max-[767px]:[border-bottom:0] gap-[15px] [border-top:1px_solid_#DBDEE1] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-06.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/services"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Financial Services "}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[15px] pt-[15px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] [border-top:1px_solid_#DBDEE1] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-07.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Energy & Natural Resources"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[15px] max-[991px]:mb-[0] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-08.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Government"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[0px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] max-[767px]:pt-[15px] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-09.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {" Healthcare & Life Sciences "}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[0px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] max-[767px]:pt-[15px] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-08.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Government"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[15px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] max-[991px]:pt-[15px] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-13.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Cybersecurity in Finance"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[15px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] max-[767px]:pt-[0px] min-[767px]:max-[991px]:pt-[15px] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-14.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Financial Data Analytics"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[15px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-10.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Agribusiness"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[0px] max-[991px]:mb-[15px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-15.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Payment Processing"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[0px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-16.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"FinTech Solutions"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="mb-[0px] pb-[15px] flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] gap-[15px] max-[767px]:pt-[15px] group/feature-item">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-13.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full group-hover/feature-item:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="mt-[0px] mb-[0] font-medium leading-[1.44] text-[#2B3944] text-[20px] max-[1199px]:text-[18px] [word-break:break-word] group-hover/feature-item:text-[#AB052D] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"Digital Banking"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[18px] group-hover/icon-box:[transform:translateX(150%)] group-hover/feature-item:[transform:translateX(150%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[18px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/feature-item:[transform:translateX(0%)] h-[18px]"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/feature-item:[fill:#AB052D]"
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] justify-center!">
          <div className="[flex-shrink:0] w-[58.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[83.33333333%] min-[992px]:max-[1200px]:w-[66.66666667%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="text-center! mb-[45px]">
              <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
                {
                  "\n                        The expert teams member\n                     "
                }
              </span>
              <AnimatedElement
                as="h2"
                effect="split"
                delay={0}
                duration={0.8}
                className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]"
              >
                {"Meet with consultant expert"}
              </AnimatedElement>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-[calc(-1_*_3rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
            <div className="grid [grid-template-columns:repeat(3,_1fr)] max-[767px]:[grid-template-columns:repeat(1,_1fr)] min-[767px]:max-[991px]:[grid-template-columns:repeat(2,_1fr)] gap-[30px]">
              <AnimatedElement
                as="div"
                effect="up"
                delay={0.3}
                duration={1}
                data-wow-delay=".3s"
                data-wow-duration="1s"
                className="group/team-item"
              >
                <div className="mb-[21px] relative overflow-hidden rounded-[6px]">
                  <SiteLink
                    href="/contact-us"
                    className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                  >
                    <SiteImage
                      src="/assets/images/team/team-thumb-01.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full w-full [transform:scale(1.02)] group-hover/team-item:[transform:scale3d(1.1,_1.1,_1)]"
                    />
                  </SiteLink>
                </div>
                <div className="pb-[25px] after:group-hover/team-item:w-full after:group-hover/team-item:[inset-inline-start:0] flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-[1px] before:[background:#DBDEE1] before:bottom-[0] before:[inset-inline-end:0] after:absolute after:[content:''] after:w-[0] after:h-[1px] after:[background:#AB052D] after:bottom-[0] after:[inset-inline-end:0]">
                  <div>
                    <h5 className="mt-[0px] mb-[5px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] tracking-[0.01em] hover:text-[#AB052D]">
                      <SiteLink
                        href="/contact-us"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
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
                      className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                    >
                      <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[17px] group-hover/icon-box:[transform:translateX(150%)] group-hover/team-item:[transform:translateX(150%)]"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/team-item:[fill:#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[17px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/team-item:[transform:translateX(0%)]"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/team-item:[fill:#AB052D]"
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
                <div className="mb-[21px] relative overflow-hidden rounded-[6px]">
                  <SiteLink
                    href="/contact-us"
                    className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                  >
                    <SiteImage
                      src="/assets/images/team/team-thumb-02.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full w-full [transform:scale(1.02)] group-hover/team-item:[transform:scale3d(1.1,_1.1,_1)]"
                    />
                  </SiteLink>
                </div>
                <div className="pb-[25px] after:group-hover/team-item:w-full after:group-hover/team-item:[inset-inline-start:0] flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-[1px] before:[background:#DBDEE1] before:bottom-[0] before:[inset-inline-end:0] after:absolute after:[content:''] after:w-[0] after:h-[1px] after:[background:#AB052D] after:bottom-[0] after:[inset-inline-end:0]">
                  <div>
                    <h5 className="mt-[0px] mb-[5px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] tracking-[0.01em] hover:text-[#AB052D]">
                      <SiteLink
                        href="/contact-us"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
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
                      className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                    >
                      <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[17px] group-hover/icon-box:[transform:translateX(150%)] group-hover/team-item:[transform:translateX(150%)]"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/team-item:[fill:#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[17px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/team-item:[transform:translateX(0%)]"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/team-item:[fill:#AB052D]"
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
                <div className="mb-[21px] relative overflow-hidden rounded-[6px]">
                  <SiteLink
                    href="/contact-us"
                    className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                  >
                    <SiteImage
                      src="/assets/images/team/team-thumb-03.webp"
                      alt="image"
                      className="[vertical-align:middle] max-w-full w-full [transform:scale(1.02)] group-hover/team-item:[transform:scale3d(1.1,_1.1,_1)]"
                    />
                  </SiteLink>
                </div>
                <div className="pb-[25px] after:group-hover/team-item:w-full after:group-hover/team-item:[inset-inline-start:0] flex items-center justify-between relative before:absolute before:[content:''] before:w-full before:h-[1px] before:[background:#DBDEE1] before:bottom-[0] before:[inset-inline-end:0] after:absolute after:[content:''] after:w-[0] after:h-[1px] after:[background:#AB052D] after:bottom-[0] after:[inset-inline-end:0]">
                  <div>
                    <h5 className="mt-[0px] mb-[5px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word] tracking-[0.01em] hover:text-[#AB052D]">
                      <SiteLink
                        href="/contact-us"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
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
                      className="text-[#FFFFFF] [text-decoration:none] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px] group/btn group/has-text"
                    >
                      <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[17px] group-hover/icon-box:[transform:translateX(150%)] group-hover/team-item:[transform:translateX(150%)]"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/team-item:[fill:#AB052D]"
                          ></path>
                        </svg>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="[vertical-align:middle] group-hover/btn:[transform:translateX(0%)] w-[17px] group-hover/icon-box:[transform:translateX(0%)] absolute [transform:translateX(-150%)] group-hover/team-item:[transform:translateX(0%)]"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="group-hover/has-text:[fill:#AB052D] [fill:#2B3944] group-hover/team-item:[fill:#AB052D]"
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
    <section className="[overflow-x:clip] relative z-[1] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] min-[991px]:max-[1199px]:pb-[120px]">
      <div className="bg-center bg-cover bg-no-repeat absolute w-full h-[512px] max-[767px]:h-[380px] bottom-[0] left-[0] z-[-1] bg-[url('/assets/bg/contact-bg-thumb-01.webp')]!"></div>
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="grid [grid-template-columns:740px_851px] max-[1199px]:[grid-template-columns:auto] min-[1199px]:max-[1366px]:[grid-template-columns:450px_851px] min-[1366px]:max-[1600px]:[grid-template-columns:550px_851px]">
              <div>
                <div className="pt-[50px] max-[1600px]:pt-[30px] pb-[55px] max-[1600px]:pb-[30px] [background:#AB052D] [padding-inline-start:60px] max-[1600px]:[padding-inline-start:30px] [padding-inline-end:60px] max-[1600px]:[padding-inline-end:30px]">
                  <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                    {
                      "\n                              Contact with us now\n                           "
                    }
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[991px]:text-[30px] min-[991px]:max-[1366px]:text-[35px] min-[1366px]:max-[1600px]:text-[40px] [word-break:break-word]"
                  >
                    {
                      "Let's Collaborate\n                                        with Us!"
                    }
                  </AnimatedElement>
                  <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#FFFFFF] leading-[28px]">
                    {
                      "read and update the latest news from us. done eu magna quis felis.\n                                    "
                    }
                  </p>
                </div>
                <div className="pt-[62px] max-[1366px]:pt-[35px] pb-[62px] max-[1366px]:pb-[35px] [background:#FFFFFF] [padding-inline-start:60px] max-[1199px]:[padding-inline-start:0px] min-[1199px]:max-[1366px]:[padding-inline-start:30px] min-[1366px]:max-[1600px]:[padding-inline-start:40px] [padding-inline-end:40px] max-[1199px]:[padding-inline-end:0px] min-[1199px]:max-[1366px]:[padding-inline-end:30px]">
                  <EmailForm id="contact-form">
                    <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
                      <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                        <div className="mb-[20px]">
                          <div>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Full name*"
                              aria-label="Full name*"
                              className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[100px] text-[#000] [padding-inline-start:20px] [padding-inline-end:20px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                        <div className="mb-[20px]">
                          <div>
                            <input
                              id="email"
                              name="email"
                              placeholder="Email Address*"
                              aria-label="Email Address*"
                              type="email"
                              className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[100px] text-[#000] [padding-inline-start:20px] [padding-inline-end:20px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                        <div className="mb-[20px]">
                          <div>
                            <input
                              id="phone"
                              name="phone"
                              type="text"
                              placeholder="Phone Number*"
                              aria-label="Phone Number*"
                              className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[100px] text-[#000] [padding-inline-start:20px] [padding-inline-end:20px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                        <div className="mb-[20px]">
                          <div>
                            <select
                              id="subject"
                              name="subject"
                              className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [text-transform:none] [word-wrap:normal] w-full h-[60px] max-[767px]:h-[50px] pt-[0] pr-[20px] pb-[0] pl-[20px] font-normal text-[#6D6D6D] bg-[#fff] [border:1px_solid_#E5E5E5] rounded-[5px] [appearance:none] bg-no-repeat [background-position:right_20px_center] focus:[border-color:#AB052D] focus:text-[#111] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)]"
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
                      <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                        <div className="mb-[20px]">
                          <div>
                            <textarea
                              id="message"
                              name="message"
                              placeholder="Message*"
                              defaultValue=""
                              className="mt-[0] max-[767px]:mt-[20px] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [resize:vertical] pt-[15px] pr-[20px] pb-[15px] pl-[20px] bg-[transparent] h-[174px] w-full [border:1px_solid_#DBDEE1] rounded-[16px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[#2B3944] [background:#FFFFFF]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
                        <div>
                          <button
                            type="submit"
                            className="rounded-[16px] mt-[0] mr-[0] mb-[0] ml-[0] text-[17px] leading-[inherit] [text-transform:none] w-full! pt-[14px] pr-[26px] pb-[14px] pl-[26px] text-[#FFFFFF] [border:none] [background:#2B3944] inline-flex items-center justify-center font-medium relative z-[1] overflow-hidden hover:[background:#AB052D] hover:text-[#FFFFFF]"
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
                <div className="pt-[88px] max-[1199px]:pt-[30px] min-[1199px]:max-[1600px]:pt-[60px] pb-[85px] max-[1199px]:pb-[30px] min-[1199px]:max-[1600px]:pb-[60px] [background:#2B3944] [padding-inline-start:60px] max-[1600px]:[padding-inline-start:30px] [padding-inline-end:60px] max-[1600px]:[padding-inline-end:30px] flex items-center gap-[30px_70px] max-[1199px]:gap-[30px_30px] flex-wrap">
                  <div>
                    <span className="mb-[12px] text-[rgba(255,_255,_255,_0.31)] text-[24px] max-[767px]:text-[20px] block leading-[1.15]">
                      {"Email: "}
                    </span>
                    <SiteLink
                      href="mailto:admin@icfc.com.sg"
                      className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[20px]"
                    >
                      {"admin@icfc.com.sg"}
                    </SiteLink>
                  </div>
                  <div>
                    <span className="mb-[12px] text-[rgba(255,_255,_255,_0.31)] text-[24px] max-[767px]:text-[20px] block leading-[1.15]">
                      {"Contact Number:"}
                    </span>
                    <SiteLink
                      href="tel:+65 8601 7001"
                      className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[20px]"
                    >
                      {"+65 8601 7001"}
                    </SiteLink>
                  </div>
                </div>
                <div className="relative max-[1199px]:h-auto">
                  <SiteImage
                    src="/assets/images/contact/map-thumb-01.webp"
                    alt="image"
                    className="[vertical-align:middle] max-w-full w-full h-full object-cover"
                  />
                  <div>
                    <div className="absolute [inset-inline-start:17%] max-[991px]:[inset-inline-start:24%] top-[30%] group/ripple-item">
                      <div className="pt-[8px] pr-[8px] pb-[8px] pl-[8px] group-hover/ripple-item:opacity-[1] group-hover/ripple-item:[transform:translate3d(-50%,_-35px,_0)] group-hover/ripple-item:[visibility:visible] flex max-[767px]:hidden [background:#F8F8F9] rounded-[6px] gap-[20px] shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.5)] min-w-[370px] absolute bottom-[0] left-[8px] z-[99] opacity-[0] [transform:translate3d(-50%,_-70px,_0)] [visibility:hidden] before:[content:''] before:absolute before:left-[0] before:bottom-[0] before:w-[0] before:h-[0] before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-[100%] before:right-[0] before:mt-[0] before:mr-[auto] before:mb-[0] before:ml-[auto]">
                        <div className="w-[130px] min-w-[130px]">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-06.webp"
                            alt="image"
                            className="[vertical-align:middle] max-w-full w-full h-full object-cover rounded-[6px]"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                              {" Corporate Growth "}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="before:group-hover/ripple-item:opacity-[1] relative before:[content:''] before:absolute before:top-[7px] before:left-[7px] before:h-[20px] before:w-[20px] before:rounded-full before:[background:#2B3944] before:[transform-origin:center_center] before:z-[1] before:opacity-[0] before:[pointer-events:none] after:[content:''] after:absolute after:top-[3px] after:left-[3px] after:h-[8px] after:w-[8px] after:rounded-full after:[background:rgba(255,_255,_255,_0.7607843137)] after:z-[9] after:[border:1px_solid_#2B3944]">
                        <div className="absolute left-[7px] bottom-[-19px] w-[1px] h-[8px] [background:#2B3944]"></div>
                      </div>
                    </div>
                    <div className="pt-[30px] max-[767px]:pt-[15px] pr-[30px] max-[767px]:pr-[15px] pb-[30px] max-[767px]:pb-[15px] pl-[30px] max-[767px]:pl-[15px] hidden max-[767px]:block! absolute left-[50%] top-[40%] [transform:translate(-50%,_-50%)] w-full max-w-[280px] text-[#000] [background:#FFFFFF] rounded-[5px] opacity-[0] [visibility:hidden] z-[10] text-center shadow-[0_0_40px_rgba(0,_0,_0,_0.08)]">
                      <Icon
                        name="close"
                        className="mt-[0] mr-[auto] mb-[10px] ml-[auto] flex [font-style:normal] [border:1px_solid_#d5d5d5] w-[30px] h-[30px] items-center justify-center text-center rounded-full"
                      />
                      <div>
                        <h6 className="mt-[0px] mb-[6px] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                          {" Corporate Growth "}
                        </h6>
                      </div>
                    </div>
                    <div className="absolute [inset-inline-start:50%] top-[22%] group/ripple-item">
                      <div className="pt-[8px] pr-[8px] pb-[8px] pl-[8px] group-hover/ripple-item:opacity-[1] group-hover/ripple-item:[transform:translate3d(-50%,_-35px,_0)] group-hover/ripple-item:[visibility:visible] flex max-[767px]:hidden [background:#F8F8F9] rounded-[6px] gap-[20px] shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.5)] min-w-[370px] absolute bottom-[0] left-[8px] z-[99] opacity-[0] [transform:translate3d(-50%,_-70px,_0)] [visibility:hidden] before:[content:''] before:absolute before:left-[0] before:bottom-[0] before:w-[0] before:h-[0] before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-[100%] before:right-[0] before:mt-[0] before:mr-[auto] before:mb-[0] before:ml-[auto]">
                        <div className="w-[130px] min-w-[130px]">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-07.webp"
                            alt="image"
                            className="[vertical-align:middle] max-w-full w-full h-full object-cover rounded-[6px]"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                              {" Risk Management "}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="before:group-hover/ripple-item:opacity-[1] relative before:[content:''] before:absolute before:top-[7px] before:left-[7px] before:h-[20px] before:w-[20px] before:rounded-full before:[background:#2B3944] before:[transform-origin:center_center] before:z-[1] before:opacity-[0] before:[pointer-events:none] after:[content:''] after:absolute after:top-[3px] after:left-[3px] after:h-[8px] after:w-[8px] after:rounded-full after:[background:rgba(255,_255,_255,_0.7607843137)] after:z-[9] after:[border:1px_solid_#2B3944]">
                        <div className="absolute left-[7px] bottom-[-19px] w-[1px] h-[8px] [background:#2B3944]"></div>
                      </div>
                    </div>
                    <div className="pt-[30px] max-[767px]:pt-[15px] pr-[30px] max-[767px]:pr-[15px] pb-[30px] max-[767px]:pb-[15px] pl-[30px] max-[767px]:pl-[15px] hidden max-[767px]:block! absolute left-[50%] top-[40%] [transform:translate(-50%,_-50%)] w-full max-w-[280px] text-[#000] [background:#FFFFFF] rounded-[5px] opacity-[0] [visibility:hidden] z-[10] text-center shadow-[0_0_40px_rgba(0,_0,_0,_0.08)]">
                      <Icon
                        name="close"
                        className="mt-[0] mr-[auto] mb-[10px] ml-[auto] flex [font-style:normal] [border:1px_solid_#d5d5d5] w-[30px] h-[30px] items-center justify-center text-center rounded-full"
                      />
                      <div>
                        <h6 className="mt-[0px] mb-[6px] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                          {" Risk Management "}
                        </h6>
                      </div>
                      <div></div>
                    </div>
                    <div className="absolute [inset-inline-start:55%] top-[46%] group/ripple-item">
                      <div className="pt-[8px] pr-[8px] pb-[8px] pl-[8px] group-hover/ripple-item:opacity-[1] group-hover/ripple-item:[transform:translate3d(-50%,_-35px,_0)] group-hover/ripple-item:[visibility:visible] flex max-[767px]:hidden [background:#F8F8F9] rounded-[6px] gap-[20px] shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.5)] min-w-[370px] absolute bottom-[0] left-[8px] z-[99] opacity-[0] [transform:translate3d(-50%,_-70px,_0)] [visibility:hidden] before:[content:''] before:absolute before:left-[0] before:bottom-[0] before:w-[0] before:h-[0] before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-[100%] before:right-[0] before:mt-[0] before:mr-[auto] before:mb-[0] before:ml-[auto]">
                        <div className="w-[130px] min-w-[130px]">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-08.webp"
                            alt="image"
                            className="[vertical-align:middle] max-w-full w-full h-full object-cover rounded-[6px]"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                              {" Financial Advisory "}
                            </h6>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div className="before:group-hover/ripple-item:opacity-[1] relative before:[content:''] before:absolute before:top-[7px] before:left-[7px] before:h-[20px] before:w-[20px] before:rounded-full before:[background:#2B3944] before:[transform-origin:center_center] before:z-[1] before:opacity-[0] before:[pointer-events:none] after:[content:''] after:absolute after:top-[3px] after:left-[3px] after:h-[8px] after:w-[8px] after:rounded-full after:[background:rgba(255,_255,_255,_0.7607843137)] after:z-[9] after:[border:1px_solid_#2B3944]">
                        <div className="absolute left-[7px] bottom-[-19px] w-[1px] h-[8px] [background:#2B3944]"></div>
                      </div>
                    </div>
                    <div className="pt-[30px] max-[767px]:pt-[15px] pr-[30px] max-[767px]:pr-[15px] pb-[30px] max-[767px]:pb-[15px] pl-[30px] max-[767px]:pl-[15px] hidden max-[767px]:block! absolute left-[50%] top-[40%] [transform:translate(-50%,_-50%)] w-full max-w-[280px] text-[#000] [background:#FFFFFF] rounded-[5px] opacity-[0] [visibility:hidden] z-[10] text-center shadow-[0_0_40px_rgba(0,_0,_0,_0.08)]">
                      <Icon
                        name="close"
                        className="mt-[0] mr-[auto] mb-[10px] ml-[auto] flex [font-style:normal] [border:1px_solid_#d5d5d5] w-[30px] h-[30px] items-center justify-center text-center rounded-full"
                      />
                      <div>
                        <h6 className="mt-[0px] mb-[6px] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                          {" Financial Advisory "}
                        </h6>
                      </div>
                    </div>
                    <div className="absolute [inset-inline-start:37%] bottom-[33%] group/ripple-item">
                      <div className="pt-[8px] pr-[8px] pb-[8px] pl-[8px] group-hover/ripple-item:opacity-[1] group-hover/ripple-item:[transform:translate3d(-50%,_-35px,_0)] group-hover/ripple-item:[visibility:visible] flex max-[767px]:hidden [background:#F8F8F9] rounded-[6px] gap-[20px] shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.5)] min-w-[370px] absolute bottom-[0] left-[8px] z-[99] opacity-[0] [transform:translate3d(-50%,_-70px,_0)] [visibility:hidden] before:[content:''] before:absolute before:left-[0] before:bottom-[0] before:w-[0] before:h-[0] before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-[100%] before:right-[0] before:mt-[0] before:mr-[auto] before:mb-[0] before:ml-[auto]">
                        <div className="w-[130px] min-w-[130px]">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-09.webp"
                            alt="image"
                            className="[vertical-align:middle] max-w-full w-full h-full object-cover rounded-[6px]"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] [word-break:break-word]">
                              {" Business Strategy "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-[30px] max-[767px]:pt-[15px] pr-[30px] max-[767px]:pr-[15px] pb-[30px] max-[767px]:pb-[15px] pl-[30px] max-[767px]:pl-[15px] hidden max-[767px]:block! absolute left-[50%] top-[40%] [transform:translate(-50%,_-50%)] w-full max-w-[280px] text-[#000] [background:#FFFFFF] rounded-[5px] opacity-[0] [visibility:hidden] z-[10] text-center shadow-[0_0_40px_rgba(0,_0,_0,_0.08)]">
                      <Icon
                        name="close"
                        className="mt-[0] mr-[auto] mb-[10px] ml-[auto] flex [font-style:normal] [border:1px_solid_#d5d5d5] w-[30px] h-[30px] items-center justify-center text-center rounded-full"
                      />
                      <div></div>
                    </div>
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
