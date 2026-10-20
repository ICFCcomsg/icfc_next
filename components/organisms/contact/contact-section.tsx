/* eslint-disable @next/next/no-img-element */
import { EmailLink } from "@/components/atoms/email-link";
import { EnvelopeIcon } from "@/components/icons/envelope-icon";
import { PhoneIcon } from "@/components/icons/phone-icon";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { Tx } from "@/components/atoms/tx";
import { AnimatedElement } from "@/components/atoms/animated-element";
import { EmailForm } from "@/components/molecules/email-form";
import { SiteLink } from "@/components/atoms/site-link";
import { Container } from "@/components/atoms/container";

export function ContactSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 relative z-1">
      <Container>
        <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="grid grid-cols-[805px_auto] max-[991px]:grid-cols-[auto] min-[991px]:max-[1199px]:grid-cols-[auto_auto] min-[1199px]:max-[1600px]:grid-cols-[680px_auto] gap-[30px_40px] max-[1600px]:gap-[30px_30px]">
              <div className="pt-12.5 max-[1199px]:pt-5 min-[1199px]:max-[1600px]:pt-7.5 pb-15 max-[1199px]:pb-7.5 min-[1199px]:max-[1600px]:pb-10 pe-15 max-[1199px]:pe-7.5 min-[1199px]:max-[1600px]:pe-10 ps-15 max-[1199px]:ps-7.5 min-[1199px]:max-[1600px]:ps-10 [background:#F8F8F9] rounded-md">
                <div className="mb-7.5">
                  <span className="mb-2.5 text-[14px]! font-semibold! leading-7 uppercase! text-[#AB052D]! inline-block tracking-wider!">
                    <Tx ns="contact-us">{"Start Your Journey Today"}</Tx>
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-2.5 font-bold! leading-[1.2]! text-[#111]! text-[28px]! [word-break:break-word]"
                  >
                    <Tx ns="contact-us">{"Let's Discuss your Option"}</Tx>
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
                            aria-label="Industry"
                            name="subject"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-14.5 normal-case [word-wrap:normal] w-full h-15 pt-0 pr-5 pb-0 pl-5 font-normal text-[#6D6D6D] bg-white [border:1px_solid_#E5E5E5] rounded-[5px] appearance-none bg-no-repeat! bg-position-[right_20px_center]! focus:border-[#AB052D] focus:text-[#111] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_ease-in-out] motion-reduce:transition-none"
                          >
                            <option value="">
                              <Tx ns="contact-us">{"— Select your industry —"}</Tx>
                            </option>
                            <optgroup
                              label="Digital & Technology"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option>
                                <Tx ns="contact-us">{"Financial Technology (FinTech)"}</Tx>
                              </option>
                              <option><Tx ns="contact-us">{"Cybersecurity"}</Tx></option>
                              <option>
                                <Tx ns="contact-us">{"Artificial Intelligence & Data Analytics"}</Tx>
                              </option>
                              <option><Tx ns="contact-us">{"E-Commerce & Digital Retail"}</Tx></option>
                              <option>
                                <Tx ns="contact-us">{"Telecommunications & Connectivity"}</Tx>
                              </option>
                              <option>
                                <Tx ns="contact-us">{"Government Technology (GovTech)"}</Tx>
                              </option>
                              <option><Tx ns="contact-us">{"Media, Gaming & Creative Tech"}</Tx></option>
                              <option><Tx ns="contact-us">{"Education Technology (EdTech)"}</Tx></option>
                            </optgroup>
                            <optgroup
                              label="Health & Life Sciences"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option><Tx ns="contact-us">{"Healthcare & MedTech"}</Tx></option>
                              <option><Tx ns="contact-us">{"Biomedical Sciences & Pharma"}</Tx></option>
                            </optgroup>
                            <optgroup
                              label="Manufacturing & Industry"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option><Tx ns="contact-us">{"Advanced Manufacturing"}</Tx></option>
                              <option><Tx ns="contact-us">{"Logistics & Supply Chain"}</Tx></option>
                              <option>
                                <Tx ns="contact-us">{"Food & Beverage / Agri-Food Tech"}</Tx>
                              </option>
                              <option><Tx ns="contact-us">{"Maritime & Port Services"}</Tx></option>
                              <option><Tx ns="contact-us">{"Aerospace & Aviation"}</Tx></option>
                              <option><Tx ns="contact-us">{"Chemicals & Energy"}</Tx></option>
                            </optgroup>
                            <optgroup
                              label="Professional & Business Services"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option><Tx ns="contact-us">{"Professional & Legal Services"}</Tx></option>
                              <option>
                                <Tx ns="contact-us">{"HR Technology & Workforce Solutions"}</Tx>
                              </option>
                              <option><Tx ns="contact-us">{"Insurance & Risk Management"}</Tx></option>
                              <option><Tx ns="contact-us">{"Tourism, MICE & Hospitality"}</Tx></option>
                              <option><Tx ns="contact-us">{"Retail & Consumer Goods"}</Tx></option>
                              <option><Tx ns="contact-us">{"Social Services & Non-Profit"}</Tx></option>
                            </optgroup>
                            <optgroup
                              label="Sustainability & Infrastructure"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option>
                                <Tx ns="contact-us">{"Green Technology & Sustainability"}</Tx>
                              </option>
                              <option>
                                <Tx ns="contact-us">{"Water, Utilities & Smart Infrastructure"}</Tx>
                              </option>
                              <option><Tx ns="contact-us">{"Construction & Real Estate"}</Tx></option>
                            </optgroup>
                            <option value="other">
                              <Tx ns="contact-us">{"Other / Not listed"}</Tx>
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
                            aria-label="Topic"
                            name="topic"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-14.5 normal-case [word-wrap:normal] w-full h-15 pt-0 pr-5 pb-0 pl-5 font-normal text-[#6D6D6D] bg-white [border:1px_solid_#E5E5E5] rounded-[5px] appearance-none bg-no-repeat! bg-position-[right_20px_center]! focus:border-[#AB052D] focus:text-[#111] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_ease-in-out] motion-reduce:transition-none"
                          >
                            <option value=""><Tx ns="contact-us">{"— Area of interest * —"}</Tx></option>
                            <optgroup
                              label="ISO Consultation"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="consult-iso27001">
                                <Tx ns="contact-us">{"ISO/IEC 27001 — Information security consultation"}</Tx>
                              </option>
                              <option value="consult-iso27032">
                                <Tx ns="contact-us">{"ISO/IEC 27032 — Cybersecurity consultation"}</Tx>
                              </option>
                              <option value="consult-iso42001">
                                <Tx ns="contact-us">{"ISO/IEC 42001 — AI management system consultation"}</Tx>
                              </option>
                              <option value="consult-iso27701">
                                <Tx ns="contact-us">{"ISO/IEC 27701 / PDPA — Privacy management consultation"}</Tx>
                              </option>
                              <option value="consult-iso9001">
                                <Tx ns="contact-us">{"ISO 9001 — Quality management consultation"}</Tx>
                              </option>
                              <option value="consult-iso14001">
                                <Tx ns="contact-us">{"ISO 14001 — Environmental management consultation"}</Tx>
                              </option>
                              <option value="consult-iso45001">
                                <Tx ns="contact-us">{"ISO 45001 — Occupational health & safety consultation"}</Tx>
                              </option>
                              <option value="consult-iso37001">
                                <Tx ns="contact-us">{"ISO 37001 — Anti-bribery management consultation"}</Tx>
                              </option>
                              <option value="consult-iso22301">
                                <Tx ns="contact-us">{"ISO 22301 — Business continuity consultation"}</Tx>
                              </option>
                              <option value="consult-iso50001">
                                <Tx ns="contact-us">{"ISO 50001 — Energy management consultation"}</Tx>
                              </option>
                              <option value="consult-multi">
                                <Tx ns="contact-us">{"Integrated / multi-standard consultation"}</Tx>
                              </option>
                            </optgroup>
                            <optgroup
                              label="Audit Services"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="audit-gap">
                                <Tx ns="contact-us">{"Gap audit (pre-certification readiness assessment)"}</Tx>
                              </option>
                              <option value="audit-internal">
                                <Tx ns="contact-us">{"Internal audit support / co-sourcing"}</Tx>
                              </option>
                              <option value="audit-stage1">
                                <Tx ns="contact-us">{"Stage 1 audit (documentation review)"}</Tx>
                              </option>
                              <option value="audit-stage2">
                                <Tx ns="contact-us">{"Stage 2 audit (certification audit)"}</Tx>
                              </option>
                              <option value="audit-surveillance">
                                <Tx ns="contact-us">{"Surveillance or recertification audit"}</Tx>
                              </option>
                              <option value="audit-supplier">
                                <Tx ns="contact-us">{"Supplier / third-party audit"}</Tx>
                              </option>
                            </optgroup>
                            <optgroup
                              label="Training Programmes"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="train-lead-27001">
                                <Tx ns="contact-us">{"Lead auditor course — ISO/IEC 27001"}</Tx>
                              </option>
                              <option value="train-lead-9001">
                                <Tx ns="contact-us">{"Lead auditor course — ISO 9001"}</Tx>
                              </option>
                              <option value="train-lead-42001">
                                <Tx ns="contact-us">{"Lead auditor course — ISO/IEC 42001"}</Tx>
                              </option>
                              <option value="train-internal">
                                <Tx ns="contact-us">{"Internal auditor course (any standard)"}</Tx>
                              </option>
                              <option value="train-implementation">
                                <Tx ns="contact-us">{"Implementation course (any standard)"}</Tx>
                              </option>
                              <option value="train-awareness">
                                <Tx ns="contact-us">{"Staff awareness training (any standard)"}</Tx>
                              </option>
                              <option value="train-custom">
                                <Tx ns="contact-us">{"Custom in-house training programme"}</Tx>
                              </option>
                            </optgroup>
                            <optgroup
                              label="EDGE Grant (Enterprise Singapore)"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="grant-eligibility">
                                <Tx ns="contact-us">{"Check my EDGE Grant eligibility"}</Tx>
                              </option>
                              <option value="grant-application">
                                <Tx ns="contact-us">{"EDGE proposal and quotation"}</Tx>
                              </option>
                              <option value="grant-milestone">
                                <Tx ns="contact-us">{"EDGE project deliverables support"}</Tx>
                              </option>
                            </optgroup>
                            <optgroup
                              label="General Enquiries"
                              className="mt-0 mr-0 mb-0 ml-0 text-inherit leading-[inherit]"
                            >
                              <option value="general-quote">
                                <Tx ns="contact-us">{"Request a fee quotation"}</Tx>
                              </option>
                              <option value="general-scope">
                                <Tx ns="contact-us">{"Understand which standard is right for me"}</Tx>
                              </option>
                              <option value="general-timeline">
                                <Tx ns="contact-us">{"Understand certification timelines"}</Tx>
                              </option>
                              <option value="general-partnership">
                                <Tx ns="contact-us">{"Partnership / referral enquiry"}</Tx>
                              </option>
                              <option value="general-other">
                                <Tx ns="contact-us">{"Other enquiry"}</Tx>
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
                          <Tx ns="contact-us">{"Send Message"}</Tx>
                        </button>
                      </div>
                    </div>
                  </div>
                </EmailForm>
                <div id="form-messages"></div>
              </div>
              <div>
              <img src="/images/icfc/sketch-contact.svg" alt="" className="mb-6 w-full h-auto rounded-md" loading="lazy" />
              <ul className="pl-10 max-[1600px]:pl-7.5 mt-0 mb-0 mr-0 ml-0 pt-10 max-[1600px]:pt-7.5 pr-10 max-[1600px]:pr-7.5 pb-10 max-[1600px]:pb-7.5 [border:1px_solid_#DBDEE1] rounded-md">
                <li className="mb-8.75 pb-8.75 list-none flex items-center gap-6.25 flex-wrap [border-bottom:1px_solid_#DBDEE1]">
                  <div className="w-20 min-w-20 h-20 [background:#F8F8F9] rounded-full flex items-center justify-center">
                    <span className="">
                      <EnvelopeIcon className="align-middle w-8 h-8" />
                    </span>
                  </div>
                  <div>
                    <span className="mb-1.25 text-[24px] max-[767px]:text-[20px] min-[767px]:max-[1199px]:text-[22px] block text-[#2B3944] font-semibold">
                      <Tx ns="contact-us">{"Email Support"}</Tx>
                    </span>
                    <EmailLink className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none" />
                  </div>
                </li>
                <li className="mb-8.75 pb-8.75 list-none flex items-center gap-6.25 flex-wrap [border-bottom:1px_solid_#DBDEE1] visible!">
                  <div className="w-20 min-w-20 h-20 [background:#F8F8F9] rounded-full flex items-center justify-center">
                    <span className="">
                      <PhoneIcon className="align-middle w-8 h-8" />
                    </span>
                  </div>
                  <div>
                    <span className="mb-1.25 text-[24px] max-[767px]:text-[20px] min-[767px]:max-[1199px]:text-[22px] block text-[#2B3944] font-semibold">
                      <Tx ns="contact-us">{"Call Our Office"}</Tx>
                    </span>
                    <SiteLink
                      href="tel:+6586017001"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      {"+65 8601 7001"}
                    </SiteLink>
                  </div>
                </li>
                <li className="list-none flex items-center gap-6.25 flex-wrap">
                  <div className="w-20 min-w-20 h-20 [background:#F8F8F9] rounded-full flex items-center justify-center">
                    <span className="">
                      <WhatsappIcon className="align-middle w-8 h-8" />
                    </span>
                  </div>
                  <div>
                    <span className="mb-1.25 text-[24px] max-[767px]:text-[20px] min-[767px]:max-[1199px]:text-[22px] block text-[#2B3944] font-semibold">
                      <Tx ns="contact-us">{"WhatsApp Support"}</Tx>
                    </span>
                    <SiteLink
                      href="https://wa.me/6586017001"
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
      </Container>
    </section>
  );
}
