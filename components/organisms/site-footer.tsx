import { CookieSettingsLink } from "@/components/atoms/cookie-settings-link";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { NewsletterForm } from "@/components/molecules/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="[background:#2B3944] relative z-1 overflow-hidden">
      <div className="absolute bottom-0 inset-s-0 max-[767px]:hidden">
        <SiteImage
          src="/assets/images/shape/footer-shape-01.webp"
          alt="image"
          className="align-middle max-w-full"
        />
      </div>
      <div className="absolute bottom-0 inset-e-0 max-[767px]:hidden">
        <SiteImage
          src="/assets/images/shape/footer-shape-02.webp"
          alt="image"
          className="align-middle max-w-full"
        />
      </div>
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="grid grid-cols-[500px_auto] max-[991px]:grid-cols-[auto] min-[991px]:max-[1199px]:grid-cols-[330px_auto] min-[1199px]:max-[1600px]:grid-cols-[400px_auto] gap-7.5 max-[767px]:pb-18.75 min-[767px]:max-[991px]:pb-22.5 flex-wrap justify-between max-[991px]:flex-col">
              <div className="pt-25 max-[767px]:pt-20 pb-57.5 max-[991px]:pb-0 [border-inline-end:1px_solid_rgba(255,255,255,0.082)] max-[991px]:[border-inline-end:0] pe-25 max-[991px]:pe-0 min-[991px]:max-[1199px]:pe-10 min-[1199px]:max-[1600px]:pe-17.5 me-28.75 max-[991px]:me-0 min-[991px]:max-[1199px]:me-10 min-[1199px]:max-[1600px]:me-17.5 flex-[0_0_280px]">
                <div>
                  <div>
                    <SiteLink
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      href="/"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="logo"
                        className="align-middle max-w-full"
                      />
                    </SiteLink>
                    <SiteLink
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      href="/"
                    ></SiteLink>
                  </div>
                  <div>
                    <p className="mt-7.5 mb-0 text-[17px] [font-weight:normal] text-[rgba(255,255,255,0.43)] leading-7">
                      {
                        "ICFC provides audit, consulting and training for ISO management systems, cybersecurity, data protection and sustainability standards in Singapore."
                      }
                    </p>
                    <div className="mt-8.75 max-[767px]:mt-6.25 mb-11.25 max-[767px]:mb-8.75">
                      <div className="mb-4.5">
                        <span className="text-[16px] text-[rgba(255,255,255,0.4392156863)]">
                          {"Call us:"}
                        </span>
                        <SiteLink
                          href="tel:+6586017001"
                          className="text-[rgba(255,255,255,0.4392156863)] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"+65 8601 7001"}
                        </SiteLink>
                      </div>
                      <div className="mb-4.5">
                        <span className="text-[16px] text-[rgba(255,255,255,0.4392156863)]">
                          {"Email:"}
                        </span>
                        <SiteLink
                          href="mailto:admin@icfc.com.sg"
                          className="text-[rgba(255,255,255,0.4392156863)] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"admin@icfc.com.sg"}
                        </SiteLink>
                      </div>
                      <div>
                        <span className="text-[16px] text-[rgba(255,255,255,0.4392156863)]">
                          {"Hours: Mon-Fri: 8.00am - 18.00pm"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="inline-flex gap-3 items-center">
                        <SiteLink
                          href="/contact-us"
                          className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:1px_solid_#DBDEE1] [background:transparent] flex items-center justify-center w-10.5 h-10.5 text-[18px] bg-[#AB052D] rounded-full hover:[background:#AB052D] border-[rgba(255,255,255,0.06)] group/a [transition:0.5s] motion-reduce:transition-none"
                        >
                          <svg
                            width="14"
                            height="22"
                            viewBox="0 0 14 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="align-middle w-4 h-4"
                          >
                            <path
                              d="M11.624 11.9541L12.193 8.54137L8.63572 8.54137V6.32676C8.63572 5.39311 9.13264 4.48303 10.7258 4.48303H12.343V1.57748C12.343 1.57748 10.8755 1.34692 9.47233 1.34692C6.54282 1.34692 4.62796 2.98146 4.62796 5.94041L4.62796 8.54137H1.37158L1.37158 11.9541H4.62796L4.62796 20.2041H8.63572L8.63572 11.9541H11.624Z"
                              fill="white"
                              className="group-hover/a:fill-[#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                            ></path>
                          </svg>
                        </SiteLink>
                        <SiteLink
                          href="/contact-us"
                          className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:1px_solid_#DBDEE1] [background:transparent] flex items-center justify-center w-10.5 h-10.5 text-[18px] bg-[#AB052D] rounded-full hover:[background:#AB052D] border-[rgba(255,255,255,0.06)] group/a [transition:0.5s] motion-reduce:transition-none"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="align-middle w-4 h-4"
                          >
                            <path
                              d="M17.6045 5.45036C17.5641 4.53485 17.4161 3.9055 17.204 3.3601C16.9852 2.78121 16.6486 2.26294 16.2077 1.83208C15.7768 1.39452 15.2551 1.0545 14.6829 0.839154C14.1344 0.627106 13.5083 0.479009 12.5928 0.438686C11.6705 0.394863 11.3777 0.384766 9.03843 0.384766C6.69917 0.384766 6.40637 0.394863 5.48747 0.435253C4.57199 0.475643 3.94261 0.623808 3.39738 0.835721C2.81832 1.0545 2.30005 1.39108 1.86919 1.83208C1.43163 2.26291 1.09178 2.78461 0.876264 3.3568C0.664216 3.9055 0.516152 4.53148 0.475796 5.44692C0.432006 6.36927 0.421875 6.66206 0.421875 9.00132C0.421875 11.3406 0.432006 11.6334 0.472363 12.5523C0.512753 13.4678 0.660917 14.0971 0.872999 14.6425C1.09178 15.2214 1.43163 15.7397 1.86919 16.1706C2.30005 16.6081 2.82175 16.9481 3.39395 17.1635C3.94258 17.3755 4.56856 17.5236 5.4842 17.564C6.40294 17.6045 6.6959 17.6144 9.03516 17.6144C11.3744 17.6144 11.6672 17.6045 12.5861 17.564C13.5016 17.5236 14.131 17.3756 14.6762 17.1635C15.2489 16.9421 15.7689 16.6035 16.2031 16.1693C16.6372 15.7352 16.9759 15.2152 17.1973 14.6425C17.4092 14.0939 17.5574 13.4678 17.5978 12.5523C17.6382 11.6334 17.6483 11.3406 17.6483 9.00132C17.6483 6.66206 17.6449 6.36923 17.6045 5.45036ZM16.0529 12.485C16.0159 13.3264 15.8745 13.7808 15.7567 14.0837C15.4672 14.8343 14.8715 15.4301 14.1208 15.7196C13.8179 15.8374 13.3603 15.9787 12.5221 16.0157C11.6133 16.0562 11.3408 16.0662 9.04186 16.0662C6.74296 16.0662 6.46699 16.0562 5.56148 16.0157C4.72002 15.9787 4.26563 15.8374 3.96271 15.7196C3.5892 15.5815 3.24922 15.3628 2.97322 15.0767C2.68712 14.7973 2.46834 14.4607 2.33027 14.0872C2.21247 13.7842 2.07114 13.3264 2.03421 12.4884C1.99369 11.5796 1.98373 11.3069 1.98373 9.00802C1.98373 6.70911 1.99369 6.43315 2.03421 5.5278C2.07114 4.68634 2.21247 4.23196 2.33027 3.92903C2.46834 3.55535 2.68712 3.21544 2.97665 2.93937C3.25588 2.65328 3.59246 2.4345 3.96614 2.2966C4.26907 2.17879 4.72689 2.03743 5.56491 2.00037C6.47369 1.95998 6.74639 1.94988 9.04513 1.94988C11.3475 1.94988 11.62 1.95998 12.5255 2.00037C13.367 2.03746 13.8214 2.17876 14.1243 2.29656C14.4978 2.4345 14.8378 2.65328 15.1138 2.93937C15.3999 3.21877 15.6186 3.55535 15.7567 3.92903C15.8745 4.23196 16.0159 4.68961 16.0529 5.5278C16.0933 6.43658 16.1034 6.70911 16.1034 9.00802C16.1034 11.3069 16.0933 11.5762 16.0529 12.485Z"
                              fill="white"
                              className="group-hover/a:fill-[#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                            ></path>
                            <path
                              d="M9.0335 4.57741C6.58997 4.57741 4.60742 6.55982 4.60742 9.00349C4.60742 11.4472 6.58997 13.4296 9.0335 13.4296C11.4771 13.4296 13.4596 11.4472 13.4596 9.00349C13.4596 6.55982 11.4771 4.57741 9.0335 4.57741ZM9.0335 11.8746C7.44826 11.8746 6.16237 10.5889 6.16237 9.00349C6.16237 7.41811 7.44826 6.13243 9.03347 6.13243C10.6188 6.13243 11.9046 7.41811 11.9046 9.00349C11.9046 10.5889 10.6188 11.8746 9.0335 11.8746ZM14.668 4.40239C14.668 4.97303 14.2053 5.4357 13.6345 5.4357C13.0639 5.4357 12.6013 4.97303 12.6013 4.40239C12.6013 3.83167 13.0639 3.36914 13.6346 3.36914C14.2053 3.36914 14.668 3.83164 14.668 4.40239Z"
                              fill="white"
                              className="group-hover/a:fill-[#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                            ></path>
                          </svg>
                        </SiteLink>
                        <SiteLink
                          href="/contact-us"
                          className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:1px_solid_#DBDEE1] [background:transparent] flex items-center justify-center w-10.5 h-10.5 text-[18px] bg-[#AB052D] rounded-full hover:[background:#AB052D] border-[rgba(255,255,255,0.06)] group/a [transition:0.5s] motion-reduce:transition-none"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="align-middle w-4 h-4"
                          >
                            <path
                              d="M9.35332 6.88729L14.6472 0.733521H13.3928L8.79603 6.07675L5.12465 0.733521H0.890137L6.44199 8.81343L0.890137 15.2666H2.1447L6.99896 9.62397L10.8762 15.2666H15.1107L9.35332 6.88729ZM7.63502 8.88462L7.0725 8.08004L2.59674 1.67793H4.52367L8.13567 6.84464L8.69818 7.64922L13.3933 14.3651H11.4664L7.63502 8.88462Z"
                              fill="white"
                              className="group-hover/a:fill-[#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                            ></path>
                          </svg>
                        </SiteLink>
                        <SiteLink
                          href="/contact-us"
                          className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:1px_solid_#DBDEE1] [background:transparent] flex items-center justify-center w-10.5 h-10.5 text-[18px] bg-[#AB052D] rounded-full hover:[background:#AB052D] border-[rgba(255,255,255,0.06)] group/a [transition:0.5s] motion-reduce:transition-none"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="align-middle w-4 h-4"
                          >
                            <path
                              d="M17.7973 17.7992V11.3532C17.7973 8.18522 17.1153 5.76522 13.4193 5.76522C11.6373 5.76522 10.4493 6.73322 9.96527 7.65722H9.92126V6.05122H6.42326V17.7992H10.0753V11.9692C10.0753 10.4292 10.3613 8.95522 12.2533 8.95522C14.1233 8.95522 14.1453 10.6932 14.1453 12.0572V17.7772H17.7973V17.7992ZM0.483266 6.05122H4.13527V17.7992H0.483266V6.05122ZM2.30927 0.199219C1.14327 0.199219 0.197266 1.14522 0.197266 2.31122C0.197266 3.47722 1.14327 4.44522 2.30927 4.44522C3.47527 4.44522 4.42127 3.47722 4.42127 2.31122C4.42127 1.14522 3.47527 0.199219 2.30927 0.199219Z"
                              fill="white"
                              className="group-hover/a:fill-[#FFFFFF] [transition:0.3s] motion-reduce:transition-none"
                            ></path>
                          </svg>
                        </SiteLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-25 max-[991px]:pt-0 flex-1">
                <div className="grid grid-cols-[repeat(3,1fr)] max-[575px]:grid-cols-[repeat(1,1fr)] min-[575px]:max-[767px]:grid-cols-[repeat(2,1fr)] items-center gap-5 max-[767px]:gap-7.5 flex-wrap justify-between">
                  <div className="flex-1 max-[767px]:flex-[0_0_100%] min-[767px]:max-[991px]:flex-[0_0_calc(33.33%-30px)] min-w-40">
                    <h5 className="mt-0 mb-5 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-5 [word-break:break-word] inline-block relative before:absolute before:[content:''] before:w-37 before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 after:absolute after:[content:''] after:w-17.5 after:h-0.5 after:[background:#FFFFFF] after:inset-s-0 after:bottom-0">
                      {"Industries​"}
                    </h5>
                    <div>
                      <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"FinTech"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"HealthTech"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Logistics"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Manufacturing"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Construction"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"E-Commerce"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"SaaS Platforms"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Food & Beverage"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Education Services"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Professional Consulting"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Renewable Energy"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ms-7.5 max-[1199px]:ms-0 flex-1 max-[767px]:flex-[0_0_100%] min-[767px]:max-[991px]:flex-[0_0_calc(33.33%-30px)] min-w-40">
                    <h5 className="mt-0 mb-5 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-5 [word-break:break-word] inline-block relative before:absolute before:[content:''] before:w-37 before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 after:absolute after:[content:''] after:w-17.5 after:h-0.5 after:[background:#FFFFFF] after:inset-s-0 after:bottom-0">
                      {"Services"}
                    </h5>
                    <div>
                      <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"PIMS"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"ABMS"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"APEC PRP"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"BCMS"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"CTM"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"DPTM"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"EMS"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"MTCS"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"OHMS"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"QMS"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"EOL"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-1 max-[767px]:flex-[0_0_100%] min-[767px]:max-[991px]:flex-[0_0_calc(33.33%-30px)] min-w-40">
                    <h5 className="mt-0 mb-5 font-medium leading-[1.4] text-[#FFFFFF] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-5 [word-break:break-word] inline-block relative before:absolute before:[content:''] before:w-37 before:h-px before:[background:rgba(255,255,255,0.15)] before:bottom-0 after:absolute after:[content:''] after:w-17.5 after:h-0.5 after:[background:#FFFFFF] after:inset-s-0 after:bottom-0">
                      {"Quick Links"}
                    </h5>
                    <div>
                      <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/about"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"About ICFC"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Our Services"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Our Industries"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/contact-us"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Contact Us"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/blog"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Blogs"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/industry"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Industries"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/services"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Services"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/privacy-policy"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Privacy Policy"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)] hover:text-[#AB052D]">
                          <CookieSettingsLink />
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/contact-us"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Resources"}
                          </SiteLink>
                        </li>
                        <li className="mb-3.75 list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/training/lms-terms"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"LMS Terms & Conditions"}
                          </SiteLink>
                        </li>
                        <li className="list-none font-normal text-[rgba(255,255,255,0.43)]">
                          <SiteLink
                            href="/contact-us"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] relative hover:ps-5 hover:before:opacity-[1] hover:before:visible before:[content:'\\\\f2e5'] before:text-[#AB052D] before:text-[18px] before:mt-0 before:mr-0 before:mb-0 before:ml-0 before:font-normal before:inline-block before:absolute before:inset-s-0 before:opacity-[0] before:invisible [transition:0.5s] motion-reduce:transition-none before:[transition:0.5s] before:motion-reduce:transition-none"
                          >
                            {"Expert Teams"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative [border-top:1px_solid_rgba(255,255,255,0.082)]">
        <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
          <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
            <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
              <div className="pt-5.5 pb-5.5 flex justify-between max-[767px]:justify-center items-center flex-wrap gap-2.5">
                <div className="flex items-center gap-7">
                  <div>
                    <div>
                      <SiteLink
                        href="/cookie-notice"
                        className="text-[#BFC4C7] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"Cookie Notice"}
                      </SiteLink>
                    </div>
                  </div>
                  <div>
                    <div>
                      <SiteLink
                        href="/privacy-policy"
                        className="text-[#BFC4C7] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"Privacy policy"}
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#BFC4C7] leading-7 text-center">
                        {"Copyright © "}
                        <span id="year" className="">
                          {"2026"}
                        </span>
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
