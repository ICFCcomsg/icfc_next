import { AnimatedElement } from "@/components/atoms/animated-element";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { EmailForm } from "@/components/molecules/email-form";
import { SiteLink } from "@/components/atoms/site-link";

export function ContactUsPageContent() {
  return (
    <SitePageTemplate route="contact-us">
      <main>
        <BreadcrumbAreaSection />
        <ContactAreaSection />
        <ContainerSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="Contact"
      description="Position your agency bridge between a client's big picture"
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}

function ContactAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 relative z-1">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="grid grid-cols-[805px_auto] max-[991px]:grid-cols-[auto] min-[991px]:max-[1199px]:grid-cols-[auto_auto] min-[1199px]:max-[1600px]:grid-cols-[680px_auto] gap-[30px_40px] max-[1600px]:gap-[30px_30px]">
              <div className="pt-12.5 max-[1199px]:pt-5 min-[1199px]:max-[1600px]:pt-7.5 pb-15 max-[1199px]:pb-7.5 min-[1199px]:max-[1600px]:pb-10 pe-15 max-[1199px]:pe-7.5 min-[1199px]:max-[1600px]:pe-10 ps-15 max-[1199px]:ps-7.5 min-[1199px]:max-[1600px]:ps-10 [background:#F8F8F9] rounded-md">
                <div className="mb-7.5">
                  <span className="mb-2.5 text-[14px]! font-semibold! leading-7 uppercase! text-[#AB052D]! inline-block tracking-wider!">
                    {"Start Your Journey Today"}
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-2.5 font-bold! leading-[1.2]! text-[#111]! text-[28px]! [word-break:break-word]"
                  >
                    {"Let's Discuss your Option"}
                  </AnimatedElement>
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
                            defaultValue=""
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
                            defaultValue=""
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
                            defaultValue=""
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
                            id="industry"
                            name="subject"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-14.5 normal-case [word-wrap:normal] w-full h-15 pt-0 pr-5 pb-0 pl-5 font-normal text-[#6D6D6D] bg-white [border:1px_solid_#E5E5E5] rounded-[5px] appearance-none bg-no-repeat! bg-position-[right_20px_center]! focus:border-[#AB052D] focus:text-[#111] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_ease-in-out] motion-reduce:transition-none"
                          >
                            <option value="">
                              {"— Select your industry —"}
                            </option>
                            <optgroup
                              label="Digital & Technology"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option>
                                {"Financial Technology (FinTech)"}
                              </option>
                              <option>{"Cybersecurity"}</option>
                              <option>
                                {"Artificial Intelligence & Data Analytics"}
                              </option>
                              <option>{"E-Commerce & Digital Retail"}</option>
                              <option>
                                {"Telecommunications & Connectivity"}
                              </option>
                              <option>
                                {"Government Technology (GovTech)"}
                              </option>
                              <option>{"Media, Gaming & Creative Tech"}</option>
                              <option>{"Education Technology (EdTech)"}</option>
                            </optgroup>
                            <optgroup
                              label="Health & Life Sciences"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option>{"Healthcare & MedTech"}</option>
                              <option>{"Biomedical Sciences & Pharma"}</option>
                            </optgroup>
                            <optgroup
                              label="Manufacturing & Industry"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option>{"Advanced Manufacturing"}</option>
                              <option>{"Logistics & Supply Chain"}</option>
                              <option>
                                {"Food & Beverage / Agri-Food Tech"}
                              </option>
                              <option>{"Maritime & Port Services"}</option>
                              <option>{"Aerospace & Aviation"}</option>
                              <option>{"Chemicals & Energy"}</option>
                            </optgroup>
                            <optgroup
                              label="Professional & Business Services"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option>{"Professional & Legal Services"}</option>
                              <option>
                                {"HR Technology & Workforce Solutions"}
                              </option>
                              <option>{"Insurance & Risk Management"}</option>
                              <option>{"Tourism, MICE & Hospitality"}</option>
                              <option>{"Retail & Consumer Goods"}</option>
                              <option>{"Social Services & Non-Profit"}</option>
                            </optgroup>
                            <optgroup
                              label="Sustainability & Infrastructure"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option>
                                {"Green Technology & Sustainability"}
                              </option>
                              <option>
                                {"Water, Utilities & Smart Infrastructure"}
                              </option>
                              <option>{"Construction & Real Estate"}</option>
                            </optgroup>
                            <option value="other">
                              {"Other / Not listed"}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
                      <div className="mb-5">
                        <div>
                          <select
                            id="topicSelect"
                            name="topic"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-14.5 normal-case [word-wrap:normal] w-full h-15 pt-0 pr-5 pb-0 pl-5 font-normal text-[#6D6D6D] bg-white [border:1px_solid_#E5E5E5] rounded-[5px] appearance-none bg-no-repeat! bg-position-[right_20px_center]! focus:border-[#AB052D] focus:text-[#111] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_ease-in-out] motion-reduce:transition-none"
                          >
                            <option value="">{"— Area of interest * —"}</option>
                            <optgroup
                              label="ISO Consultation"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="consult-iso27001">
                                {
                                  "ISO/IEC 27001 — Information security consultation"
                                }
                              </option>
                              <option value="consult-iso27032">
                                {"ISO/IEC 27032 — Cybersecurity consultation"}
                              </option>
                              <option value="consult-iso42001">
                                {
                                  "ISO/IEC 42001 — AI management system consultation"
                                }
                              </option>
                              <option value="consult-iso27701">
                                {
                                  "ISO/IEC 27701 / PDPA — Privacy management consultation"
                                }
                              </option>
                              <option value="consult-iso9001">
                                {"ISO 9001 — Quality management consultation"}
                              </option>
                              <option value="consult-iso14001">
                                {
                                  "ISO 14001 — Environmental management consultation"
                                }
                              </option>
                              <option value="consult-iso45001">
                                {
                                  "ISO 45001 — Occupational health & safety consultation"
                                }
                              </option>
                              <option value="consult-iso37001">
                                {
                                  "ISO 37001 — Anti-bribery management consultation"
                                }
                              </option>
                              <option value="consult-iso22301">
                                {"ISO 22301 — Business continuity consultation"}
                              </option>
                              <option value="consult-iso50001">
                                {"ISO 50001 — Energy management consultation"}
                              </option>
                              <option value="consult-multi">
                                {"Integrated / multi-standard consultation"}
                              </option>
                            </optgroup>
                            <optgroup
                              label="Audit Services"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="audit-gap">
                                {
                                  "Gap audit (pre-certification readiness assessment)"
                                }
                              </option>
                              <option value="audit-internal">
                                {"Internal audit support / co-sourcing"}
                              </option>
                              <option value="audit-stage1">
                                {"Stage 1 audit (documentation review)"}
                              </option>
                              <option value="audit-stage2">
                                {"Stage 2 audit (certification audit)"}
                              </option>
                              <option value="audit-surveillance">
                                {"Surveillance or recertification audit"}
                              </option>
                              <option value="audit-supplier">
                                {"Supplier / third-party audit"}
                              </option>
                            </optgroup>
                            <optgroup
                              label="Training Programmes"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="train-lead-27001">
                                {"Lead auditor course — ISO/IEC 27001"}
                              </option>
                              <option value="train-lead-9001">
                                {"Lead auditor course — ISO 9001"}
                              </option>
                              <option value="train-lead-42001">
                                {"Lead auditor course — ISO/IEC 42001"}
                              </option>
                              <option value="train-internal">
                                {"Internal auditor course (any standard)"}
                              </option>
                              <option value="train-implementation">
                                {"Implementation course (any standard)"}
                              </option>
                              <option value="train-awareness">
                                {"Staff awareness training (any standard)"}
                              </option>
                              <option value="train-custom">
                                {"Custom in-house training programme"}
                              </option>
                            </optgroup>
                            <optgroup
                              label="MASA Grant (Enterprise Singapore)"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="grant-eligibility">
                                {"Check my ESG MASA grant eligibility"}
                              </option>
                              <option value="grant-application">
                                {"MASA grant application support"}
                              </option>
                              <option value="grant-milestone">
                                {"MASA grant milestone reporting support"}
                              </option>
                            </optgroup>
                            <optgroup
                              label="General Enquiries"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="general-quote">
                                {"Request a fee quotation"}
                              </option>
                              <option value="general-scope">
                                {"Understand which standard is right for me"}
                              </option>
                              <option value="general-timeline">
                                {"Understand certification timelines"}
                              </option>
                              <option value="general-partnership">
                                {"Partnership / referral enquiry"}
                              </option>
                              <option value="general-other">
                                {"Other enquiry"}
                              </option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div
                      className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto] hidden!"
                      id="contextHint"
                    >
                      <div className="mb-5">
                        <div className="mb-5! pt-3.75! pr-3.75! pb-3.75! pl-3.75! [background:#FCEBEB]! [border-left:4px_solid_#AB052D]! rounded-sm!">
                          <p
                            className="mt-0! mb-0! mr-0! ml-0! text-[14px]! font-medium! text-[#A32D2D]! leading-7"
                            id="hintText"
                          ></p>
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
                          name="submit_contact"
                          className="rounded-[3px] mt-0 mr-0 mb-0 ml-0 text-[17px] leading-[inherit] normal-case w-full! pt-3.5 pr-6.5 pb-3.5 pl-6.5 text-[#FFFFFF] [border:none] [background:#2B3944] inline-flex items-center justify-center font-medium relative z-1 overflow-hidden hover:[background:#AB052D] hover:text-[#FFFFFF] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                        >
                          {"Send Message"}
                        </button>
                      </div>
                    </div>
                  </div>
                </EmailForm>
                <div id="form-messages"></div>
              </div>
              <ul className="pl-10 max-[1600px]:pl-7.5 mt-0 mb-0 mr-0 ml-0 pt-10 max-[1600px]:pt-7.5 pr-10 max-[1600px]:pr-7.5 pb-10 max-[1600px]:pb-7.5 [border:1px_solid_#DBDEE1] rounded-md">
                <li className="mb-8.75 pb-8.75 list-none flex items-center gap-6.25 flex-wrap [border-bottom:1px_solid_#DBDEE1]">
                  <div className="w-20 min-w-20 h-20 [background:#F8F8F9] rounded-full flex items-center justify-center">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        viewBox="0 0 512 512"
                        className="align-middle w-8 h-8"
                      >
                        <path
                          d="M511.228 508.124C511.711 507.147 511.974 506.077 512 504.988V212C511.964 210.973 511.718 209.965 511.28 209.036C510.841 208.107 510.218 207.277 509.448 206.596L436.028 146.156V68.296C436.029 67.3766 435.848 66.4662 435.496 65.6166C435.145 64.7671 434.629 63.9952 433.979 63.3451C433.329 62.695 432.557 62.1794 431.707 61.8278C430.858 61.4762 429.947 61.2955 429.028 61.296H332.964L260.448 1.60005C259.197 0.564602 257.624 -0.00195312 256 -0.00195312C254.376 -0.00195312 252.803 0.564602 251.552 1.60005L179.036 61.296H82.976C82.0566 61.2955 81.1461 61.4762 80.2966 61.8278C79.4471 62.1794 78.6752 62.695 78.0251 63.3451C77.375 63.9952 76.8594 64.7671 76.5078 65.6166C76.1562 66.4662 75.9755 67.3766 75.976 68.296V146.156L2.552 206.612C1.78344 207.29 1.16086 208.117 0.722135 209.044C0.283412 209.97 0.0377178 210.976 0 212V504.972C0.0165764 506.826 0.758522 508.6 2.06692 509.913C3.37531 511.227 5.1461 511.976 7 512H505C506.295 511.994 507.563 511.628 508.663 510.944C509.762 510.259 510.65 509.283 511.228 508.124ZM14 224.84L79.112 266.712L79.188 266.76L185.528 335.16L14 489.284V224.84ZM197.736 343L252.212 378.032C253.35 378.736 254.662 379.109 256 379.109C257.338 379.109 258.65 378.736 259.788 378.032L314.264 342.996L486.736 498H25.264L197.736 343ZM326.472 335.148L432.8 266.76L432.848 266.728L498 224.84V489.284L326.472 335.148ZM493.14 211.32L436.028 248.048V164.288L493.14 211.32ZM256 16.056L310.944 61.296H201.06L256 16.056ZM89.976 75.296H422.028V257.052L256 363.82L89.976 257.052V75.296ZM75.976 248.048L18.86 211.32L75.976 164.288V248.048Z"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M330.456 111.876H397.028C398.885 111.876 400.665 111.139 401.978 109.826C403.291 108.513 404.028 106.733 404.028 104.876C404.028 103.02 403.291 101.239 401.978 99.9263C400.665 98.6135 398.885 97.876 397.028 97.876H330.456C328.599 97.876 326.819 98.6135 325.506 99.9263C324.194 101.239 323.456 103.02 323.456 104.876C323.456 106.733 324.194 108.513 325.506 109.826C326.819 111.139 328.599 111.876 330.456 111.876Z"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M303.376 146.052H397.028C398.885 146.052 400.665 145.315 401.978 144.002C403.291 142.689 404.028 140.909 404.028 139.052C404.028 137.196 403.291 135.415 401.978 134.102C400.665 132.79 398.885 132.052 397.028 132.052H303.376C301.519 132.052 299.739 132.79 298.426 134.102C297.113 135.415 296.376 137.196 296.376 139.052C296.376 140.909 297.113 142.689 298.426 144.002C299.739 145.315 301.519 146.052 303.376 146.052Z"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M148.876 180.232H397.028C398.885 180.232 400.665 179.495 401.978 178.182C403.291 176.869 404.028 175.089 404.028 173.232C404.028 171.376 403.291 169.595 401.978 168.282C400.665 166.97 398.885 166.232 397.028 166.232H148.876C147.019 166.232 145.239 166.97 143.926 168.282C142.613 169.595 141.876 171.376 141.876 173.232C141.876 175.089 142.613 176.869 143.926 178.182C145.239 179.495 147.019 180.232 148.876 180.232Z"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M114.976 214.4H397.028C398.885 214.4 400.665 213.663 401.978 212.35C403.291 211.037 404.028 209.257 404.028 207.4C404.028 205.544 403.291 203.763 401.978 202.45C400.665 201.138 398.885 200.4 397.028 200.4H114.976C113.119 200.4 111.339 201.138 110.026 202.45C108.713 203.763 107.976 205.544 107.976 207.4C107.976 209.257 108.713 211.037 110.026 212.35C111.339 213.663 113.119 214.4 114.976 214.4Z"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M114.976 248.584H397.028C398.885 248.584 400.665 247.847 401.978 246.534C403.291 245.221 404.028 243.441 404.028 241.584C404.028 239.728 403.291 237.947 401.978 236.634C400.665 235.322 398.885 234.584 397.028 234.584H114.976C113.119 234.584 111.339 235.322 110.026 236.634C108.713 237.947 107.976 239.728 107.976 241.584C107.976 243.441 108.713 245.221 110.026 246.534C111.339 247.847 113.119 248.584 114.976 248.584Z"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M337.5 268.76H174.5C172.643 268.76 170.863 269.498 169.55 270.81C168.237 272.123 167.5 273.904 167.5 275.76C167.5 277.617 168.237 279.397 169.55 280.71C170.863 282.023 172.643 282.76 174.5 282.76H337.5C339.357 282.76 341.137 282.023 342.45 280.71C343.762 279.397 344.5 277.617 344.5 275.76C344.5 273.904 343.762 272.123 342.45 270.81C341.137 269.498 339.357 268.76 337.5 268.76Z"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M283.156 302.936H228.844C226.987 302.936 225.207 303.674 223.894 304.986C222.582 306.299 221.844 308.08 221.844 309.936C221.844 311.793 222.582 313.573 223.894 314.886C225.207 316.199 226.987 316.936 228.844 316.936H283.156C285.013 316.936 286.793 316.199 288.106 314.886C289.418 313.573 290.156 311.793 290.156 309.936C290.156 308.08 289.418 306.299 288.106 304.986C286.793 303.674 285.013 302.936 283.156 302.936Z"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span className="mb-1.25 text-[24px] max-[767px]:text-[20px] min-[767px]:max-[1199px]:text-[22px] block text-[#2B3944] font-semibold">
                      {"Email Support"}
                    </span>
                    <SiteLink
                      href="mailto:admin@icfc.com.sg"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"admin@icfc.com.sg"}
                    </SiteLink>
                  </div>
                </li>
                <li className="mb-8.75 pb-8.75 list-none flex items-center gap-6.25 flex-wrap [border-bottom:1px_solid_#DBDEE1] visible!">
                  <div className="w-20 min-w-20 h-20 [background:#F8F8F9] rounded-full flex items-center justify-center">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 34 34"
                        className="align-middle w-8 h-8"
                      >
                        <path
                          d="M10.1748 23.9132C13.2137 26.9397 16.5785 29.6204 20.2075 31.9063C21.3925 32.644 22.7628 33.0295 24.1585 33.0178C25.4283 32.9923 26.6792 32.7056 27.8334 32.1757C28.9877 31.6457 30.0204 30.8839 30.8675 29.9376C32.7575 28.3311 34.04 25.8054 32.0442 23.6488L29.2165 20.8138C27.6258 19.2523 24.9623 19.6776 23.4891 21.4477C23.1949 21.7787 22.8004 22.0043 22.3658 22.0901C21.9313 22.1758 21.4807 22.1169 21.0828 21.9225C17.369 19.7211 14.2714 16.6174 12.0771 12.8994C11.5917 12.126 11.9855 10.9228 12.9181 10.1629C14.4734 8.60812 14.5943 6.19837 13.1881 4.791L10.3604 1.965C8.93108 0.491248 6.38802 0.767998 4.98739 2.23162L3.68127 3.53719C0.825454 6.39412 0.136392 10.6719 2.04439 13.7094C4.36242 17.4053 7.09012 20.8281 10.1748 23.9132ZM4.87433 4.73081L6.18102 3.42412C6.95614 2.6175 8.35789 2.34975 9.16508 3.15581L11.9945 5.98462C12.737 6.72712 12.6245 8.05069 11.747 8.94731C10.1973 10.2782 9.73095 12.306 10.6315 13.7696C12.97 17.7281 16.2697 21.0322 20.225 23.376C20.9528 23.7624 21.7882 23.8966 22.6004 23.7575C23.4126 23.6185 24.1558 23.2141 24.7137 22.6076C25.6345 21.5332 27.0621 21.1221 28.0268 22.0102L30.8506 24.8407C32.2231 26.3882 30.5451 27.9491 29.2812 29.1309C26.9693 31.4428 23.5313 32.0109 21.1075 30.4787C13.9761 25.9904 7.94844 19.9519 3.47314 12.8122C1.98083 10.4346 2.57033 7.03594 4.87433 4.73081Z"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M20.1933 14.6505C20.3041 14.6506 20.4138 14.6287 20.5161 14.5862C20.6185 14.5438 20.7114 14.4815 20.7896 14.403L26.9636 8.22956V10.7079C26.9636 10.9317 27.0525 11.1463 27.2107 11.3046C27.3689 11.4628 27.5835 11.5517 27.8073 11.5517C28.0311 11.5517 28.2457 11.4628 28.4039 11.3046C28.5622 11.1463 28.6511 10.9317 28.6511 10.7079V6.19275C28.6498 6.08281 28.6281 5.97408 28.5869 5.87212C28.5229 5.7179 28.4147 5.58601 28.276 5.49296C28.1374 5.39991 27.9743 5.34983 27.8073 5.349H23.2921C23.0683 5.349 22.8537 5.43789 22.6955 5.59613C22.5373 5.75436 22.4484 5.96897 22.4484 6.19275C22.4484 6.41653 22.5373 6.63114 22.6955 6.78937C22.8537 6.9476 23.0683 7.0365 23.2921 7.0365H25.7705L19.5965 13.2105C19.4813 13.3295 19.4034 13.4796 19.3724 13.6423C19.3414 13.805 19.3587 13.9732 19.422 14.1262C19.4854 14.2792 19.5921 14.4104 19.729 14.5035C19.866 14.5967 20.0277 14.6478 20.1933 14.6505Z"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span className="mb-1.25 text-[24px] max-[767px]:text-[20px] min-[767px]:max-[1199px]:text-[22px] block text-[#2B3944] font-semibold">
                      {"Call Our Office"}
                    </span>
                    <SiteLink
                      href="tel:+990123%20456%20789"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"+65 8601 7001"}
                    </SiteLink>
                  </div>
                </li>
                <li className="list-none flex items-center gap-6.25 flex-wrap">
                  <div className="w-20 min-w-20 h-20 [background:#F8F8F9] rounded-full flex items-center justify-center">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="align-middle w-8 h-8"
                      >
                        <path
                          d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span className="mb-1.25 text-[24px] max-[767px]:text-[20px] min-[767px]:max-[1199px]:text-[22px] block text-[#2B3944] font-semibold">
                      {"WhatsApp Support"}
                    </span>
                    <SiteLink
                      href="tel:+990123%20456%20789"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"+65 8601 7001"}
                    </SiteLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection() {
  return (
    <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330 pt-12! pb-12!">
      <div className="pt-12 pr-0 pb-12 pl-0 [border-bottom:none]">
        <div className="mb-3! pt-1! pr-3! pb-1! pl-3! text-[13px]! font-semibold! tracking-[0.08em]! uppercase! text-[#A32D2D]! [background:#FCEBEB]! inline-block! rounded-[20px]!">
          {"Our mission"}
        </div>
        <div className="grid grid-cols-[1fr_1fr] max-[768px]:grid-cols-[1fr] gap-10 [align-items:start]">
          <div>
            <h1 className="mt-0 mb-0 font-bold! leading-[1.2]! text-[#111]! text-[28px]! [word-break:break-word]">
              {"Mission-driven results."}
              <br />
              {"Standards-led excellence."}
            </h1>
            <p className="mt-0 mb-0 text-[16px]! [font-weight:normal] text-[#555]! leading-[1.7]!">
              {
                "Our mission is to make international standards genuinely work for Singapore businesses."
              }
            </p>
          </div>
          <div>
            <div className="pt-8 pr-8 pb-8 pl-8 [background:#fff] [border:1px_solid_#f0f0f0] shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-2xl">
              <p className="mt-0 mb-7.5 text-[14px]! font-semibold! text-[#AB052D]! leading-7 tracking-wider! uppercase!">
                {"Achieve goals"}
              </p>
              <p className="mt-0 mb-1.5 mr-0 ml-0 text-[18px]! font-semibold! text-[#111]! leading-7">
                {"What success looks like for our clients"}
              </p>
              <div className="mt-3 mr-0 mb-3 ml-0 flex justify-between text-[14px] text-[#4a4a4a] font-medium">
                <span className="">{"Years"}</span>
                <span className="">{"12"}</span>
              </div>
              <div className="mt-3 mr-0 mb-3 ml-0 flex justify-between text-[14px] text-[#4a4a4a] font-medium">
                <span className="">{"Clients"}</span>
                <span className="">{"250+"}</span>
              </div>
              <div className="mt-3 mr-0 mb-3 ml-0 flex justify-between text-[14px] text-[#4a4a4a] font-medium">
                <span className="">{"Audits"}</span>
                <span className="">{"500+"}</span>
              </div>
              <div className="mt-3 mr-0 mb-3 ml-0 flex justify-between text-[14px] text-[#4a4a4a] font-medium">
                <span className="">{"Trainees"}</span>
                <span className="">{"100+"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
