import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { IndustryExplorer } from "@/components/organisms/industry-explorer";
import { EmailForm } from "@/components/molecules/email-form";

export function IndustryPageContent() {
  return (
    <SitePageTemplate route="industry.html">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] relative z-[1] [overflow-x:clip]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[100%]">
            <div className="grid [grid-template-columns:1fr_522px] [background:#F8F8F9] pt-[30px] pb-[30px] [padding-inline-start:60px] [padding-inline-end:30px] gap-[30px_90px] rounded-[6px] max-[1600px]:[padding-inline-start:30px] max-[1600px]:[grid-template-columns:repeat(2,_1fr)] max-[1600px]:gap-[30px_30px] max-[991px]:[grid-template-columns:repeat(1,_1fr)]">
              <div>
                <div>
                  <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
                    {"Best BUSINESS Strategy"}
                  </span>
                  <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px] text-[#2B3944] mb-[20px]">
                    {"Welcome to ICFC team"}
                  </h2>
                  <p className="leading-relaxed mb-4">
                    {
                      "Position your agency as the bridge between a client's big-picture vision and achievable action plans. data-driven strategies and your track."
                    }
                  </p>
                </div>
                <div className="grid [grid-template-columns:repeat(2,_1fr)] gap-[15px_0] w-[515px] mt-[30px] mb-[50px] max-[1600px]:w-full max-[1199px]:[grid-template-columns:repeat(1,_1fr)] max-[991px]:mb-[40px] max-[991px]:[grid-template-columns:repeat(2,_1fr)] max-[991px]:w-[515px] max-[767px]:[grid-template-columns:repeat(1,_1fr)] max-[767px]:w-full">
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[26px] min-w-[26px] h-[26px] [border:1px_solid_#DBDEE1] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        className="w-[14px] h-[14px]"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="[fill:#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="leading-relaxed text-[16px] font-medium text-[#2B3944] mb-4">
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
                        className="w-[14px] h-[14px]"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="[fill:#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="leading-relaxed text-[16px] font-medium text-[#2B3944] mb-4">
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
                        className="w-[14px] h-[14px]"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="[fill:#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="leading-relaxed text-[16px] font-medium text-[#2B3944] mb-4">
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
                        className="w-[14px] h-[14px]"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                          className="[fill:#2B3944]"
                        ></path>
                      </svg>
                    </div>
                    <p className="leading-relaxed text-[16px] font-medium text-[#2B3944] mb-4">
                      {"Global Expansion Planning"}
                    </p>
                  </div>
                </div>
                <div>
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#AB052D] hover:[background:#2B3944] hover:text-[#FFFFFF] gap-[8px]"
                    href="/contact-us.html"
                  >
                    {"Join a global team "}
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[17px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="[fill:#FFFFFF]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[17px] absolute [transform:translateX(-150%)]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
              <div
                className="visible relative z-[1] overflow-hidden"
                data-dir="reveal_right"
              >
                <SiteImage
                  src="/assets/images/work/working-thumb-09.webp"
                  alt="image"
                  className="max-w-full h-auto rounded-[6px] w-full h-full object-cover"
                />
              </div>
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
    <section className="pb-[120px] max-[991px]:pb-[100px] max-[767px]:pb-[70px] max-[480px]:pb-[60px] relative z-[1]">
      <div className="bg-center bg-cover bg-no-repeat bg-[url('/assets/bg/feature-bg-thumb-05.webp')] h-[470px] absolute w-full bottom-[0] left-[0] z-[-1]"></div>
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 justify-center">
          <div className="w-full shrink-0 px-3 xl:w-[75%] lg:w-[83.33333333333334%]">
            <div className="mb-[45px] text-center">
              <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
                {
                  "\n                        All-Industry IT Solutions\n                     "
                }
              </span>
              <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px] text-[#2B3944] mb-[15px]">
                {
                  "Solving IT Challenges Everywhere\n                            "
                }
              </h2>
              <p className="leading-relaxed mb-4">
                {
                  "Position your agency as the bridge between a client's big-picture vision\n                                and achievable\n                            "
                }
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[100%]">
            <div
              className="grid [grid-template-columns:repeat(3,_1fr)] gap-[0_30px] items-center [background:#F8F8F9] pt-[60px] pb-[60px] [padding-inline-start:60px] [padding-inline-end:60px] rounded-[6px] max-[1600px]:pt-[40px] max-[1600px]:pb-[40px] max-[1600px]:[padding-inline-start:40px] max-[1600px]:[padding-inline-end:40px] max-[991px]:[grid-template-columns:repeat(2,_1fr)] max-[991px]:pt-[30px] max-[991px]:pb-[30px] max-[991px]:[padding-inline-start:30px] max-[991px]:[padding-inline-end:30px] max-[767px]:[grid-template-columns:repeat(1,_1fr)] max-[480px]:pt-[25px] max-[480px]:pb-[25px] max-[480px]:[padding-inline-start:25px] max-[480px]:[padding-inline-end:25px]"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[15px] pb-[15px] gap-[15px] [border-top:1px_solid_#DBDEE1] pt-[15px] max-[991px]:[border-bottom:0] max-[991px]:mb-[15px] max-[991px]:pb-[0px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-05.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Advanced Manufacturing"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[15px] pb-[15px] gap-[15px] [border-top:1px_solid_#DBDEE1] pt-[15px] max-[991px]:mb-[0] max-[767px]:[border-bottom:0]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-06.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/services.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Financial Services "}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[15px] pb-[15px] gap-[15px] [border-top:1px_solid_#DBDEE1] pt-[15px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-07.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Energy & Natural Resources"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[15px] pb-[15px] gap-[15px] max-[991px]:mb-[0]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-08.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Government"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[0px] pb-[15px] gap-[15px] max-[767px]:pt-[15px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-09.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {" Healthcare & Life Sciences "}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[0px] pb-[15px] gap-[15px] max-[767px]:pt-[15px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-08.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Government"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[15px] pb-[15px] gap-[15px] max-[991px]:pt-[15px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-13.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Cybersecurity in Finance"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[15px] pb-[15px] gap-[15px] max-[991px]:pt-[15px] max-[767px]:pt-[0px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-14.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Financial Data Analytics"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[15px] pb-[15px] gap-[15px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-10.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Agribusiness"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[0px] pb-[15px] gap-[15px] max-[991px]:mb-[15px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-15.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Payment Processing"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[0px] pb-[15px] gap-[15px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-16.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"FinTech Solutions"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="flex items-center justify-between [border-bottom:1px_solid_#DBDEE1] mb-[0px] pb-[15px] gap-[15px] max-[767px]:pt-[15px]">
                <div className="flex items-center gap-[25px]">
                  <div className="w-[64px] h-[64px] min-w-[64px] overflow-hidden rounded-full">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-13.webp"
                      alt="image"
                      className="max-w-full h-auto in-hover:[transform:scale3d(1.1,_1.1,_1)] w-full [transform:scale(1.02)]"
                    />
                  </div>
                  <h6 className="font-bold leading-tight text-[#2B3944] text-lg in-hover:text-[#AB052D] font-medium max-[1199px]:text-[18px] hover:text-[#AB052D]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"Digital Banking"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="flex items-center">
                  <SiteLink
                    className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                    href="/contact-us.html"
                  >
                    <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                      <svg
                        className="in-hover:[transform:translateX(150%)] w-[18px] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                        ></path>
                      </svg>
                      <svg
                        className="in-hover:[transform:translateX(0%)] w-[18px] absolute [transform:translateX(-150%)] h-[18px]"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                          className="in-hover:[fill:#AB052D] [fill:#2B3944]"
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
    </section>
  );
}

function TeamAreaSection() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 justify-center">
          <div className="w-full shrink-0 px-3 xl:w-[58.333333333333336%] lg:w-[66.66666666666666%] md:w-[83.33333333333334%]">
            <div className="mb-[45px] text-center">
              <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
                {
                  "\n                        The expert teams member\n                     "
                }
              </span>
              <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px] text-[#2B3944]">
                {"Meet with consultant expert"}
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[100%]">
            <div className="grid [grid-template-columns:repeat(3,_1fr)] gap-[30px] max-[991px]:[grid-template-columns:repeat(2,_1fr)] max-[767px]:[grid-template-columns:repeat(1,_1fr)]">
              <div data-wow-delay=".3s" data-wow-duration="1s">
                <div className="mb-[21px] relative overflow-hidden rounded-[6px]">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D]"
                  >
                    <SiteImage
                      src="/assets/images/team/team-thumb-01.webp"
                      alt="image"
                      className="max-w-full h-auto w-full [transform:scale(1.02)] in-hover:[transform:scale3d(1.1,_1.1,_1)]"
                    />
                  </SiteLink>
                </div>
                <div className="after:in-hover:w-full after:in-hover:[inset-inline-start:0] flex items-center justify-between relative pb-[25px] before:absolute before:[content:''] before:w-full before:h-[1px] before:[background:#DBDEE1] before:bottom-[0] before:[inset-inline-end:0] after:absolute after:[content:''] after:w-[0] after:h-[1px] after:[background:#AB052D] after:bottom-[0] after:[inset-inline-end:0]">
                  <div>
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl mb-[5px] tracking-[0.01em] hover:text-[#AB052D]">
                      <SiteLink
                        href="/contact-us.html"
                        className="transition-colors hover:text-[#AB052D]"
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
                      className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                      href="/contact-us.html"
                    >
                      <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                        <svg
                          className="in-hover:[transform:translateX(150%)] w-[17px]"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                          ></path>
                        </svg>
                        <svg
                          className="in-hover:[transform:translateX(0%)] w-[17px] absolute [transform:translateX(-150%)]"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div data-wow-delay=".5s" data-wow-duration="1s">
                <div className="mb-[21px] relative overflow-hidden rounded-[6px]">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D]"
                  >
                    <SiteImage
                      src="/assets/images/team/team-thumb-02.webp"
                      alt="image"
                      className="max-w-full h-auto w-full [transform:scale(1.02)] in-hover:[transform:scale3d(1.1,_1.1,_1)]"
                    />
                  </SiteLink>
                </div>
                <div className="after:in-hover:w-full after:in-hover:[inset-inline-start:0] flex items-center justify-between relative pb-[25px] before:absolute before:[content:''] before:w-full before:h-[1px] before:[background:#DBDEE1] before:bottom-[0] before:[inset-inline-end:0] after:absolute after:[content:''] after:w-[0] after:h-[1px] after:[background:#AB052D] after:bottom-[0] after:[inset-inline-end:0]">
                  <div>
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl mb-[5px] tracking-[0.01em] hover:text-[#AB052D]">
                      <SiteLink
                        href="/contact-us.html"
                        className="transition-colors hover:text-[#AB052D]"
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
                      className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                      href="/contact-us.html"
                    >
                      <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                        <svg
                          className="in-hover:[transform:translateX(150%)] w-[17px]"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                          ></path>
                        </svg>
                        <svg
                          className="in-hover:[transform:translateX(0%)] w-[17px] absolute [transform:translateX(-150%)]"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div data-wow-delay=".7s" data-wow-duration="1s">
                <div className="mb-[21px] relative overflow-hidden rounded-[6px]">
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D]"
                  >
                    <SiteImage
                      src="/assets/images/team/team-thumb-03.webp"
                      alt="image"
                      className="max-w-full h-auto w-full [transform:scale(1.02)] in-hover:[transform:scale3d(1.1,_1.1,_1)]"
                    />
                  </SiteLink>
                </div>
                <div className="after:in-hover:w-full after:in-hover:[inset-inline-start:0] flex items-center justify-between relative pb-[25px] before:absolute before:[content:''] before:w-full before:h-[1px] before:[background:#DBDEE1] before:bottom-[0] before:[inset-inline-end:0] after:absolute after:[content:''] after:w-[0] after:h-[1px] after:[background:#AB052D] after:bottom-[0] after:[inset-inline-end:0]">
                  <div>
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl mb-[5px] tracking-[0.01em] hover:text-[#AB052D]">
                      <SiteLink
                        href="/contact-us.html"
                        className="transition-colors hover:text-[#AB052D]"
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
                      className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px]"
                      href="/contact-us.html"
                    >
                      <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                        <svg
                          className="in-hover:[transform:translateX(150%)] w-[17px]"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="in-hover:[fill:#AB052D] [fill:#2B3944]"
                          ></path>
                        </svg>
                        <svg
                          className="in-hover:[transform:translateX(0%)] w-[17px] absolute [transform:translateX(-150%)]"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                            className="in-hover:[fill:#AB052D] [fill:#2B3944]"
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

function ContactAreaSection() {
  return (
    <section className="[overflow-x:clip] relative z-[1] max-[1199px]:pb-[120px] max-[991px]:pb-[100px] max-[767px]:pb-[70px] max-[480px]:pb-[60px]">
      <div className="bg-center bg-cover bg-no-repeat absolute w-full h-[512px] bottom-[0] left-[0] z-[-1] max-[767px]:h-[380px] bg-[url('/assets/bg/contact-bg-thumb-01.webp')]"></div>
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[100%]">
            <div className="grid [grid-template-columns:740px_851px] max-[1600px]:[grid-template-columns:550px_851px] max-[1366px]:[grid-template-columns:450px_851px] max-[1199px]:[grid-template-columns:auto]">
              <div>
                <div className="[background:#AB052D] pt-[50px] [padding-inline-start:60px] pb-[55px] [padding-inline-end:60px] max-[1600px]:pt-[30px] max-[1600px]:[padding-inline-start:30px] max-[1600px]:pb-[30px] max-[1600px]:[padding-inline-end:30px]">
                  <span className="text-[13px] font-medium leading-[28px] uppercase text-[#FFFFFF] mb-[10px] inline-block tracking-[2.5px]">
                    {
                      "\n                              Contact with us now\n                           "
                    }
                  </span>
                  <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px] text-[#FFFFFF] max-[1600px]:text-[40px] max-[1366px]:text-[35px] max-[991px]:text-[30px] max-[575px]:text-[27px] mb-[10px]">
                    {
                      "Let's Collaborate\n                                        with Us!"
                    }
                  </h2>
                  <p className="leading-relaxed text-[#FFFFFF] mb-4">
                    {
                      "read and update the latest news from us. done eu magna quis felis.\n                                    "
                    }
                  </p>
                </div>
                <div className="[background:#FFFFFF] pt-[62px] pb-[62px] [padding-inline-start:60px] [padding-inline-end:40px] max-[1600px]:[padding-inline-start:40px] max-[1366px]:[padding-inline-start:30px] max-[1366px]:pt-[35px] max-[1366px]:pb-[35px] max-[1366px]:[padding-inline-end:30px] max-[1199px]:[padding-inline-start:0px] max-[1199px]:[padding-inline-end:0px]">
                  <EmailForm id="contact-form">
                    <div className="-mx-3 flex flex-wrap gap-y-6">
                      <div className="w-full shrink-0 px-3 md:w-[50%]">
                        <div className="mb-[20px]">
                          <div>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Full name*"
                              aria-label="Full name*"
                              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D] h-[50px] rounded-[100px] [padding-inline-start:20px] [padding-inline-end:20px] [background:#FFFFFF] placeholder:text-[#2B3944]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full shrink-0 px-3 md:w-[50%]">
                        <div className="mb-[20px]">
                          <div>
                            <input
                              id="email"
                              name="email"
                              placeholder="Email Address*"
                              aria-label="Email Address*"
                              type="email"
                              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D] h-[50px] rounded-[100px] [padding-inline-start:20px] [padding-inline-end:20px] [background:#FFFFFF] placeholder:text-[#2B3944]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full shrink-0 px-3 md:w-[50%]">
                        <div className="mb-[20px]">
                          <div>
                            <input
                              id="phone"
                              name="phone"
                              type="text"
                              placeholder="Phone Number*"
                              aria-label="Phone Number*"
                              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D] h-[50px] rounded-[100px] [padding-inline-start:20px] [padding-inline-end:20px] [background:#FFFFFF] placeholder:text-[#2B3944]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full shrink-0 px-3 md:w-[50%]">
                        <div className="mb-[20px]">
                          <div>
                            <select
                              id="subject"
                              name="subject"
                              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D] w-full h-[60px] p-[0_20px] text-[16px] font-normal text-[#6D6D6D] bg-[#fff] [border:1px_solid_#E5E5E5] rounded-[5px] bg-no-repeat [background-position:right_20px_center] focus:[border-color:#AB052D] focus:text-[#111] max-[767px]:h-[50px]"
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
                      <div className="w-full shrink-0 px-3 md:w-[100%]">
                        <div className="mb-[20px]">
                          <div>
                            <textarea
                              id="message"
                              name="message"
                              placeholder="Message*"
                              defaultValue=""
                              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D] h-[174px] rounded-[16px] p-[15px_20px] [background:#FFFFFF] placeholder:text-[#2B3944] max-[767px]:mt-[20px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full shrink-0 px-3 md:w-[100%]">
                        <div>
                          <button
                            type="submit"
                            className="text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[16px] font-medium relative z-[1] overflow-hidden [background:#2B3944] hover:[background:#AB052D] hover:text-[#FFFFFF] w-full"
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
                <div className="[background:#2B3944] pt-[88px] [padding-inline-start:60px] pb-[85px] [padding-inline-end:60px] flex items-center gap-[30px_70px] flex-wrap max-[1600px]:pt-[60px] max-[1600px]:[padding-inline-start:30px] max-[1600px]:pb-[60px] max-[1600px]:[padding-inline-end:30px] max-[1199px]:pt-[30px] max-[1199px]:pb-[30px] max-[1199px]:gap-[30px_30px]">
                  <div>
                    <span className="text-[rgba(255,_255,_255,_0.31)] text-[24px] block leading-[1.15] mb-[12px] max-[767px]:text-[20px]">
                      {"Email: "}
                    </span>
                    <SiteLink
                      href="mailto:admin@icfc.com.sg"
                      className="transition-colors hover:text-[#AB052D] text-[#FFFFFF] text-[20px] hover:text-[#AB052D]"
                    >
                      {"admin@icfc.com.sg"}
                    </SiteLink>
                  </div>
                  <div>
                    <span className="text-[rgba(255,_255,_255,_0.31)] text-[24px] block leading-[1.15] mb-[12px] max-[767px]:text-[20px]">
                      {"Contact Number:"}
                    </span>
                    <SiteLink
                      href="tel:+65 8601 7001"
                      className="transition-colors hover:text-[#AB052D] text-[#FFFFFF] text-[20px] hover:text-[#AB052D]"
                    >
                      {"+65 8601 7001"}
                    </SiteLink>
                  </div>
                </div>
                <div className="relative max-[1199px]:h-auto">
                  <SiteImage
                    src="/assets/images/contact/map-thumb-01.webp"
                    alt="image"
                    className="max-w-full h-auto w-full h-full object-cover"
                  />
                  <div>
                    <div className="absolute [inset-inline-start:17%] top-[30%] max-[991px]:[inset-inline-start:24%]">
                      <div className="in-hover:opacity-[1] in-hover:[transform:translate3d(-50%,_-35px,_0)] in-hover:[visibility:visible] flex [background:#F8F8F9] p-[8px] rounded-[6px] gap-[20px] shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.5)] min-w-[370px] absolute bottom-[0] left-[8px] z-[99] opacity-[0] [transform:translate3d(-50%,_-70px,_0)] max-[767px]:hidden before:[content:''] before:absolute before:left-[0] before:bottom-[0] before:w-[0] before:h-[0] before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-[100%] before:right-[0] before:m-[0_auto]">
                        <div className="w-[130px] min-w-[130px]">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-06.webp"
                            alt="image"
                            className="max-w-full h-auto w-full h-full object-cover rounded-[6px]"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="text-[18px] mb-[10px] font-bold">
                              {" Corporate Growth "}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="before:in-hover:opacity-[1] relative before:[content:''] before:absolute before:top-[7px] before:left-[7px] before:h-[20px] before:w-[20px] before:rounded-full before:[background:#2B3944] before:[transform-origin:center_center] before:z-[1] before:opacity-[0] before:[pointer-events:none] after:[content:''] after:absolute after:top-[3px] after:left-[3px] after:h-[8px] after:w-[8px] after:rounded-full after:[background:rgba(255,_255,_255,_0.7607843137)] after:z-[9] after:[border:1px_solid_#2B3944]">
                        <div className="absolute left-[7px] bottom-[-19px] w-[1px] h-[8px] [background:#2B3944]"></div>
                      </div>
                    </div>
                    <div className="hidden absolute left-[50%] top-[40%] [transform:translate(-50%,_-50%)] w-full max-w-[280px] text-[#000] [background:#FFFFFF] p-[30px] rounded-[5px] opacity-[0] z-[10] text-center shadow-[0_0_40px_rgba(0,_0,_0,_0.08)] max-[767px]:block max-[767px]:p-[15px]">
                      <Icon
                        name="close"
                        className="[border:1px_solid_#d5d5d5] w-[30px] h-[30px] flex items-center m-[0_auto_10px] justify-center text-center rounded-full"
                      />
                      <div>
                        <h6 className="text-[#2B3944] text-[18px] mb-[6px] font-bold">
                          {" Corporate Growth "}
                        </h6>
                      </div>
                    </div>
                    <div className="absolute [inset-inline-start:50%] top-[22%]">
                      <div className="in-hover:opacity-[1] in-hover:[transform:translate3d(-50%,_-35px,_0)] in-hover:[visibility:visible] flex [background:#F8F8F9] p-[8px] rounded-[6px] gap-[20px] shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.5)] min-w-[370px] absolute bottom-[0] left-[8px] z-[99] opacity-[0] [transform:translate3d(-50%,_-70px,_0)] max-[767px]:hidden before:[content:''] before:absolute before:left-[0] before:bottom-[0] before:w-[0] before:h-[0] before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-[100%] before:right-[0] before:m-[0_auto]">
                        <div className="w-[130px] min-w-[130px]">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-07.webp"
                            alt="image"
                            className="max-w-full h-auto w-full h-full object-cover rounded-[6px]"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="text-[18px] mb-[10px] font-bold">
                              {" Risk Management "}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="before:in-hover:opacity-[1] relative before:[content:''] before:absolute before:top-[7px] before:left-[7px] before:h-[20px] before:w-[20px] before:rounded-full before:[background:#2B3944] before:[transform-origin:center_center] before:z-[1] before:opacity-[0] before:[pointer-events:none] after:[content:''] after:absolute after:top-[3px] after:left-[3px] after:h-[8px] after:w-[8px] after:rounded-full after:[background:rgba(255,_255,_255,_0.7607843137)] after:z-[9] after:[border:1px_solid_#2B3944]">
                        <div className="absolute left-[7px] bottom-[-19px] w-[1px] h-[8px] [background:#2B3944]"></div>
                      </div>
                    </div>
                    <div className="hidden absolute left-[50%] top-[40%] [transform:translate(-50%,_-50%)] w-full max-w-[280px] text-[#000] [background:#FFFFFF] p-[30px] rounded-[5px] opacity-[0] z-[10] text-center shadow-[0_0_40px_rgba(0,_0,_0,_0.08)] max-[767px]:block max-[767px]:p-[15px]">
                      <Icon
                        name="close"
                        className="[border:1px_solid_#d5d5d5] w-[30px] h-[30px] flex items-center m-[0_auto_10px] justify-center text-center rounded-full"
                      />
                      <div>
                        <h6 className="text-[#2B3944] text-[18px] mb-[6px] font-bold">
                          {" Risk Management "}
                        </h6>
                      </div>
                      <div></div>
                    </div>
                    <div className="absolute [inset-inline-start:55%] top-[46%]">
                      <div className="in-hover:opacity-[1] in-hover:[transform:translate3d(-50%,_-35px,_0)] in-hover:[visibility:visible] flex [background:#F8F8F9] p-[8px] rounded-[6px] gap-[20px] shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.5)] min-w-[370px] absolute bottom-[0] left-[8px] z-[99] opacity-[0] [transform:translate3d(-50%,_-70px,_0)] max-[767px]:hidden before:[content:''] before:absolute before:left-[0] before:bottom-[0] before:w-[0] before:h-[0] before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-[100%] before:right-[0] before:m-[0_auto]">
                        <div className="w-[130px] min-w-[130px]">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-08.webp"
                            alt="image"
                            className="max-w-full h-auto w-full h-full object-cover rounded-[6px]"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="text-[18px] mb-[10px] font-bold">
                              {" Financial Advisory "}
                            </h6>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <div className="before:in-hover:opacity-[1] relative before:[content:''] before:absolute before:top-[7px] before:left-[7px] before:h-[20px] before:w-[20px] before:rounded-full before:[background:#2B3944] before:[transform-origin:center_center] before:z-[1] before:opacity-[0] before:[pointer-events:none] after:[content:''] after:absolute after:top-[3px] after:left-[3px] after:h-[8px] after:w-[8px] after:rounded-full after:[background:rgba(255,_255,_255,_0.7607843137)] after:z-[9] after:[border:1px_solid_#2B3944]">
                        <div className="absolute left-[7px] bottom-[-19px] w-[1px] h-[8px] [background:#2B3944]"></div>
                      </div>
                    </div>
                    <div className="hidden absolute left-[50%] top-[40%] [transform:translate(-50%,_-50%)] w-full max-w-[280px] text-[#000] [background:#FFFFFF] p-[30px] rounded-[5px] opacity-[0] z-[10] text-center shadow-[0_0_40px_rgba(0,_0,_0,_0.08)] max-[767px]:block max-[767px]:p-[15px]">
                      <Icon
                        name="close"
                        className="[border:1px_solid_#d5d5d5] w-[30px] h-[30px] flex items-center m-[0_auto_10px] justify-center text-center rounded-full"
                      />
                      <div>
                        <h6 className="text-[#2B3944] text-[18px] mb-[6px] font-bold">
                          {" Financial Advisory "}
                        </h6>
                      </div>
                    </div>
                    <div className="absolute [inset-inline-start:37%] bottom-[33%]">
                      <div className="in-hover:opacity-[1] in-hover:[transform:translate3d(-50%,_-35px,_0)] in-hover:[visibility:visible] flex [background:#F8F8F9] p-[8px] rounded-[6px] gap-[20px] shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.5)] min-w-[370px] absolute bottom-[0] left-[8px] z-[99] opacity-[0] [transform:translate3d(-50%,_-70px,_0)] max-[767px]:hidden before:[content:''] before:absolute before:left-[0] before:bottom-[0] before:w-[0] before:h-[0] before:[border-left:15px_solid_transparent] before:[border-right:15px_solid_transparent] before:[border-top:18px_solid_#2B3944] before:top-[100%] before:right-[0] before:m-[0_auto]">
                        <div className="w-[130px] min-w-[130px]">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-09.webp"
                            alt="image"
                            className="max-w-full h-auto w-full h-full object-cover rounded-[6px]"
                          />
                        </div>
                        <div>
                          <div>
                            <h6 className="text-[18px] mb-[10px] font-bold">
                              {" Business Strategy "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden absolute left-[50%] top-[40%] [transform:translate(-50%,_-50%)] w-full max-w-[280px] text-[#000] [background:#FFFFFF] p-[30px] rounded-[5px] opacity-[0] z-[10] text-center shadow-[0_0_40px_rgba(0,_0,_0,_0.08)] max-[767px]:block max-[767px]:p-[15px]">
                      <Icon
                        name="close"
                        className="[border:1px_solid_#d5d5d5] w-[30px] h-[30px] flex items-center m-[0_auto_10px] justify-center text-center rounded-full"
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
