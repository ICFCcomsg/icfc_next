import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { NewsletterForm } from "@/components/molecules/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="[background:#2B3944] relative z-[1] overflow-hidden">
      <div className="absolute bottom-[0] [inset-inline-start:0] max-[767px]:hidden">
        <SiteImage
          src="/assets/images/shape/footer-shape-01.webp"
          alt="image"
          className="max-w-full h-auto"
        />
      </div>
      <div className="absolute bottom-[0] [inset-inline-end:0] max-[767px]:hidden">
        <SiteImage
          src="/assets/images/shape/footer-shape-02.webp"
          alt="image"
          className="max-w-full h-auto"
        />
      </div>
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[100%]">
            <div className="grid [grid-template-columns:500px_auto] max-[1600px]:[grid-template-columns:400px_auto] max-[1199px]:[grid-template-columns:330px_auto] max-[991px]:[grid-template-columns:auto] max-[991px]:gap-[30px] max-[991px]:pb-[90px] max-[767px]:pb-[75px]">
              <div className="pt-[100px] pb-[230px] [border-inline-end:1px_solid_rgba(255,_255,_255,_0.082)] [padding-inline-end:100px] [margin-inline-end:115px] max-[1600px]:[padding-inline-end:70px] max-[1600px]:[margin-inline-end:70px] max-[1199px]:[padding-inline-end:40px] max-[1199px]:[margin-inline-end:40px] max-[991px]:[padding-inline-end:0px] max-[991px]:[margin-inline-end:0px] max-[991px]:[border-inline-end:0] max-[991px]:pb-[0] max-[767px]:pt-[80px]">
                <div>
                  <div>
                    <SiteLink
                      className="transition-colors hover:text-[#AB052D]"
                      href="/index.html"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="logo"
                        className="max-w-full h-auto w-[150px]"
                      />
                    </SiteLink>
                    <SiteLink
                      className="transition-colors hover:text-[#AB052D] hidden"
                      href="/index.html"
                    ></SiteLink>
                  </div>
                  <div>
                    <p className="leading-relaxed text-[rgba(255,_255,_255,_0.43)] mb-[0px] mt-[30px]">
                      {
                        "\r\n                                        ICFC PTE LTD specializes in helping startups and enterprises craft strategic\r\n                                        solutions.\r\n                                    "
                      }
                    </p>
                    <div className="mb-[45px] mt-[35px] max-[767px]:mb-[35px] max-[767px]:mt-[25px]">
                      <div className="mb-[18px]">
                        <span className="text-[16px] text-[rgba(255,_255,_255,_0.4392156863)]">
                          {"Call us:"}
                        </span>
                        <SiteLink
                          href="tel:+6586017001"
                          className="transition-colors hover:text-[#AB052D] text-[16px] text-[rgba(255,_255,_255,_0.4392156863)] hover:text-[#AB052D]"
                        >
                          {"+65 8601 7001"}
                        </SiteLink>
                      </div>
                      <div className="mb-[18px]">
                        <span className="text-[16px] text-[rgba(255,_255,_255,_0.4392156863)]">
                          {"Email:"}
                        </span>
                        <SiteLink
                          href="mailto:admin@icfc.com.sg"
                          className="transition-colors hover:text-[#AB052D] text-[16px] text-[rgba(255,_255,_255,_0.4392156863)] hover:text-[#AB052D]"
                        >
                          {"admin@icfc.com.sg"}
                        </SiteLink>
                      </div>
                      <div>
                        <span className="text-[16px] text-[rgba(255,_255,_255,_0.4392156863)]">
                          {"Hours: Mon-Fri: 8.00am - 18.00pm"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="inline-flex gap-[12px] items-center">
                        <SiteLink
                          href="/contact-us.html"
                          className="transition-colors hover:text-[#AB052D] text-[#FFFFFF] flex items-center justify-center w-[42px] h-[42px] text-[18px] bg-[#AB052D] rounded-full hover:[background:#AB052D] [border:1px_solid_#DBDEE1] [background:transparent] [border-color:rgba(255,_255,_255,_0.06)]"
                        >
                          <svg
                            width="14"
                            height="22"
                            viewBox="0 0 14 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[16px] h-[16px]"
                          >
                            <path
                              d="M11.624 11.9541L12.193 8.54137L8.63572 8.54137V6.32676C8.63572 5.39311 9.13264 4.48303 10.7258 4.48303H12.343V1.57748C12.343 1.57748 10.8755 1.34692 9.47233 1.34692C6.54282 1.34692 4.62796 2.98146 4.62796 5.94041L4.62796 8.54137H1.37158L1.37158 11.9541H4.62796L4.62796 20.2041H8.63572L8.63572 11.9541H11.624Z"
                              fill="white"
                              className="in-hover:[fill:#FFFFFF]"
                            ></path>
                          </svg>
                        </SiteLink>
                        <SiteLink
                          href="/contact-us.html"
                          className="transition-colors hover:text-[#AB052D] text-[#FFFFFF] flex items-center justify-center w-[42px] h-[42px] text-[18px] bg-[#AB052D] rounded-full hover:[background:#AB052D] [border:1px_solid_#DBDEE1] [background:transparent] [border-color:rgba(255,_255,_255,_0.06)]"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[16px] h-[16px]"
                          >
                            <path
                              d="M17.6045 5.45036C17.5641 4.53485 17.4161 3.9055 17.204 3.3601C16.9852 2.78121 16.6486 2.26294 16.2077 1.83208C15.7768 1.39452 15.2551 1.0545 14.6829 0.839154C14.1344 0.627106 13.5083 0.479009 12.5928 0.438686C11.6705 0.394863 11.3777 0.384766 9.03843 0.384766C6.69917 0.384766 6.40637 0.394863 5.48747 0.435253C4.57199 0.475643 3.94261 0.623808 3.39738 0.835721C2.81832 1.0545 2.30005 1.39108 1.86919 1.83208C1.43163 2.26291 1.09178 2.78461 0.876264 3.3568C0.664216 3.9055 0.516152 4.53148 0.475796 5.44692C0.432006 6.36927 0.421875 6.66206 0.421875 9.00132C0.421875 11.3406 0.432006 11.6334 0.472363 12.5523C0.512753 13.4678 0.660917 14.0971 0.872999 14.6425C1.09178 15.2214 1.43163 15.7397 1.86919 16.1706C2.30005 16.6081 2.82175 16.9481 3.39395 17.1635C3.94258 17.3755 4.56856 17.5236 5.4842 17.564C6.40294 17.6045 6.6959 17.6144 9.03516 17.6144C11.3744 17.6144 11.6672 17.6045 12.5861 17.564C13.5016 17.5236 14.131 17.3756 14.6762 17.1635C15.2489 16.9421 15.7689 16.6035 16.2031 16.1693C16.6372 15.7352 16.9759 15.2152 17.1973 14.6425C17.4092 14.0939 17.5574 13.4678 17.5978 12.5523C17.6382 11.6334 17.6483 11.3406 17.6483 9.00132C17.6483 6.66206 17.6449 6.36923 17.6045 5.45036ZM16.0529 12.485C16.0159 13.3264 15.8745 13.7808 15.7567 14.0837C15.4672 14.8343 14.8715 15.4301 14.1208 15.7196C13.8179 15.8374 13.3603 15.9787 12.5221 16.0157C11.6133 16.0562 11.3408 16.0662 9.04186 16.0662C6.74296 16.0662 6.46699 16.0562 5.56148 16.0157C4.72002 15.9787 4.26563 15.8374 3.96271 15.7196C3.5892 15.5815 3.24922 15.3628 2.97322 15.0767C2.68712 14.7973 2.46834 14.4607 2.33027 14.0872C2.21247 13.7842 2.07114 13.3264 2.03421 12.4884C1.99369 11.5796 1.98373 11.3069 1.98373 9.00802C1.98373 6.70911 1.99369 6.43315 2.03421 5.5278C2.07114 4.68634 2.21247 4.23196 2.33027 3.92903C2.46834 3.55535 2.68712 3.21544 2.97665 2.93937C3.25588 2.65328 3.59246 2.4345 3.96614 2.2966C4.26907 2.17879 4.72689 2.03743 5.56491 2.00037C6.47369 1.95998 6.74639 1.94988 9.04513 1.94988C11.3475 1.94988 11.62 1.95998 12.5255 2.00037C13.367 2.03746 13.8214 2.17876 14.1243 2.29656C14.4978 2.4345 14.8378 2.65328 15.1138 2.93937C15.3999 3.21877 15.6186 3.55535 15.7567 3.92903C15.8745 4.23196 16.0159 4.68961 16.0529 5.5278C16.0933 6.43658 16.1034 6.70911 16.1034 9.00802C16.1034 11.3069 16.0933 11.5762 16.0529 12.485Z"
                              fill="white"
                              className="in-hover:[fill:#FFFFFF]"
                            ></path>
                            <path
                              d="M9.0335 4.57741C6.58997 4.57741 4.60742 6.55982 4.60742 9.00349C4.60742 11.4472 6.58997 13.4296 9.0335 13.4296C11.4771 13.4296 13.4596 11.4472 13.4596 9.00349C13.4596 6.55982 11.4771 4.57741 9.0335 4.57741ZM9.0335 11.8746C7.44826 11.8746 6.16237 10.5889 6.16237 9.00349C6.16237 7.41811 7.44826 6.13243 9.03347 6.13243C10.6188 6.13243 11.9046 7.41811 11.9046 9.00349C11.9046 10.5889 10.6188 11.8746 9.0335 11.8746ZM14.668 4.40239C14.668 4.97303 14.2053 5.4357 13.6345 5.4357C13.0639 5.4357 12.6013 4.97303 12.6013 4.40239C12.6013 3.83167 13.0639 3.36914 13.6346 3.36914C14.2053 3.36914 14.668 3.83164 14.668 4.40239Z"
                              fill="white"
                              className="in-hover:[fill:#FFFFFF]"
                            ></path>
                          </svg>
                        </SiteLink>
                        <SiteLink
                          href="/contact-us.html"
                          className="transition-colors hover:text-[#AB052D] text-[#FFFFFF] flex items-center justify-center w-[42px] h-[42px] text-[18px] bg-[#AB052D] rounded-full hover:[background:#AB052D] [border:1px_solid_#DBDEE1] [background:transparent] [border-color:rgba(255,_255,_255,_0.06)]"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[16px] h-[16px]"
                          >
                            <path
                              d="M9.35332 6.88729L14.6472 0.733521H13.3928L8.79603 6.07675L5.12465 0.733521H0.890137L6.44199 8.81343L0.890137 15.2666H2.1447L6.99896 9.62397L10.8762 15.2666H15.1107L9.35332 6.88729ZM7.63502 8.88462L7.0725 8.08004L2.59674 1.67793H4.52367L8.13567 6.84464L8.69818 7.64922L13.3933 14.3651H11.4664L7.63502 8.88462Z"
                              fill="white"
                              className="in-hover:[fill:#FFFFFF]"
                            ></path>
                          </svg>
                        </SiteLink>
                        <SiteLink
                          href="/contact-us.html"
                          className="transition-colors hover:text-[#AB052D] text-[#FFFFFF] flex items-center justify-center w-[42px] h-[42px] text-[18px] bg-[#AB052D] rounded-full hover:[background:#AB052D] [border:1px_solid_#DBDEE1] [background:transparent] [border-color:rgba(255,_255,_255,_0.06)]"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[16px] h-[16px]"
                          >
                            <path
                              d="M17.7973 17.7992V11.3532C17.7973 8.18522 17.1153 5.76522 13.4193 5.76522C11.6373 5.76522 10.4493 6.73322 9.96527 7.65722H9.92126V6.05122H6.42326V17.7992H10.0753V11.9692C10.0753 10.4292 10.3613 8.95522 12.2533 8.95522C14.1233 8.95522 14.1453 10.6932 14.1453 12.0572V17.7772H17.7973V17.7992ZM0.483266 6.05122H4.13527V17.7992H0.483266V6.05122ZM2.30927 0.199219C1.14327 0.199219 0.197266 1.14522 0.197266 2.31122C0.197266 3.47722 1.14327 4.44522 2.30927 4.44522C3.47527 4.44522 4.42127 3.47722 4.42127 2.31122C4.42127 1.14522 3.47527 0.199219 2.30927 0.199219Z"
                              fill="white"
                              className="in-hover:[fill:#FFFFFF]"
                            ></path>
                          </svg>
                        </SiteLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[100px] max-[991px]:pt-[0]">
                <div className="grid [grid-template-columns:repeat(3,_1fr)] items-center gap-[20px] max-[767px]:[grid-template-columns:repeat(2,_1fr)] max-[767px]:gap-[30px] max-[575px]:[grid-template-columns:repeat(1,_1fr)]">
                  <div>
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl text-[#FFFFFF] mb-[20px] font-medium inline-block relative pb-[20px] before:absolute before:[content:''] before:w-[148px] before:h-[1px] before:[background:rgba(255,_255,_255,_0.15)] before:bottom-[0] after:absolute after:[content:''] after:w-[70px] after:h-[2px] after:[background:#FFFFFF] after:[inset-inline-start:0] after:bottom-[0px]">
                      {"Industries​"}
                    </h5>
                    <div>
                      <ul>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"FinTech"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"HealthTech"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Logistics"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Manufacturing"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Construction"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"E-Commerce"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"SaaS Platforms"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Food & Beverage"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Education Services"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Professional Consulting"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Renewable Energy"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="[margin-inline-start:30px] max-[1199px]:[margin-inline-start:0px]">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl text-[#FFFFFF] mb-[20px] font-medium inline-block relative pb-[20px] before:absolute before:[content:''] before:w-[148px] before:h-[1px] before:[background:rgba(255,_255,_255,_0.15)] before:bottom-[0] after:absolute after:[content:''] after:w-[70px] after:h-[2px] after:[background:#FFFFFF] after:[inset-inline-start:0] after:bottom-[0px]">
                      {"Services"}
                    </h5>
                    <div>
                      <ul>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"PIMS"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"ABMS"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"APEC PRP"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"BCMS"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"CTM"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"DPTM"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"EMS"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"MTCS"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"OHMS"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"QMS"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"EOL"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl text-[#FFFFFF] mb-[20px] font-medium inline-block relative pb-[20px] before:absolute before:[content:''] before:w-[148px] before:h-[1px] before:[background:rgba(255,_255,_255,_0.15)] before:bottom-[0] after:absolute after:[content:''] after:w-[70px] after:h-[2px] after:[background:#FFFFFF] after:[inset-inline-start:0] after:bottom-[0px]">
                      {"Quick Links"}
                    </h5>
                    <div>
                      <ul>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/about.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"About ICFC"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Our Services"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Our Industries"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/contact-us.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Contact Us"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/blog.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Blogs"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/industry.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Industries"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/services.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Services"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/privacy-policy.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Privacy Policy"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/contact-us.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Resources"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)] mb-[15px]">
                          <SiteLink
                            href="/privacy-policy.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Terms & Conditions"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,_255,_255,_0.43)]">
                          <SiteLink
                            href="/contact-us.html"
                            className="transition-colors hover:text-[#AB052D] relative hover:text-[#AB052D] hover:[padding-inline-start:20px] before:hover:opacity-[1] before:hover:[visibility:visible] before:[content:'\\f2e5'] before:text-[#AB052D] before:text-[18px] before:m-[0] before:font-normal before:inline-block before:absolute before:[inset-inline-start:0] before:opacity-[0]"
                          >
                            {"Expert Teams"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <NewsletterForm />
                <div className="flex justify-center gap-[30px_55px] mt-[42px] items-center max-[575px]:flex-wrap max-[575px]:gap-[30px_30px]">
                  <div>
                    <SiteImage
                      src="/assets/images/brand/brand-thumb-07.webp"
                      alt="image"
                      className="max-w-full h-auto opacity-[0.5] in-hover:opacity-[1]"
                    />
                  </div>
                  <div>
                    <SiteImage
                      src="/assets/images/brand/brand-thumb-08.webp"
                      alt="image"
                      className="max-w-full h-auto opacity-[0.5] in-hover:opacity-[1]"
                    />
                  </div>
                  <div>
                    <SiteImage
                      src="/assets/images/brand/brand-thumb-09.webp"
                      alt="image"
                      className="max-w-full h-auto opacity-[0.5] in-hover:opacity-[1]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative [border-top:1px_solid_rgba(255,_255,_255,_0.082)]">
        <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
          <div className="-mx-3 flex flex-wrap gap-y-6">
            <div className="w-full shrink-0 px-3 xl:w-[100%]">
              <div className="flex justify-between items-center flex-wrap gap-[10px] pt-[22px] pb-[22px] max-[767px]:justify-center">
                <div className="flex items-center gap-[28px]">
                  <div>
                    <div>
                      <SiteLink
                        href="/privacy-policy.html"
                        className="transition-colors hover:text-[#AB052D] text-[16px] text-[#BFC4C7] hover:text-[#AB052D]"
                      >
                        {"Terms & Agreements"}
                      </SiteLink>
                    </div>
                  </div>
                  <div>
                    <div>
                      <SiteLink
                        href="/privacy-policy.html"
                        className="transition-colors hover:text-[#AB052D] text-[16px] text-[#BFC4C7] hover:text-[#AB052D]"
                      >
                        {"Privacy policy"}
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <p className="leading-relaxed text-[#BFC4C7] text-center mb-4">
                        {"Copyright © "}
                        <span id="year">{"2026"}</span>
                        {" ICFC PTE LTD"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
