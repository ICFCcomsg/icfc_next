import { Container } from "@/components/atoms/container";
import { Tx } from "@/components/atoms/tx";
import { AnimatedElement, RotatingHotspots } from "@/components/atoms/animated-element";
import { Icon } from "@/components/atoms/icon";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { EmailForm } from "@/components/molecules/email-form";

export function ContactSection() {
  return (
    <section className="overflow-x-clip relative z-1 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25 min-[991px]:max-[1199px]:pb-30">
      <div className="bg-center bg-cover bg-no-repeat absolute w-full h-128 max-[767px]:h-95 bottom-0 left-0 z-[-1] bg-[url('/assets/bg/contact-bg-thumb-01.webp')]!"></div>
      <Container>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6">
          <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <RotatingHotspots className="grid grid-cols-[740px_851px] max-[1199px]:grid-cols-[auto] min-[1199px]:max-[1366px]:grid-cols-[450px_851px] min-[1366px]:max-[1600px]:grid-cols-[550px_851px]">
              <div>
                <div className="pt-12.5 max-[1600px]:pt-7.5 pb-13.75 max-[1600px]:pb-7.5 [background:#AB052D] ps-15 max-[1600px]:ps-7.5 pe-15 max-[1600px]:pe-7.5">
                  <span className="mb-2.5 text-[13px] font-medium leading-7 uppercase text-[#FFFFFF] inline-block tracking-[2.5px]">
                    <Tx ns="industry">{"\n                              Contact with us now\n                           "}</Tx>
                  </span>
                  <AnimatedElement
                    as="h2"
                    effect="split"
                    delay={0}
                    duration={0.8}
                    className="mt-0 mb-2.5 font-semibold leading-[1.19] text-[#FFFFFF] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[991px]:text-[30px] min-[991px]:max-[1366px]:text-[35px] min-[1366px]:max-[1600px]:text-[40px] [word-break:break-word]"
                  >
                    <Tx ns="industry">{"Let's Collaborate\n                                        with Us!"}</Tx>
                  </AnimatedElement>
                  <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#FFFFFF] leading-7">
                    <Tx ns="industry">{"read and update the latest news from us. done eu magna quis felis.\n                                    "}</Tx>
                  </p>
                </div>
                <div className="pt-15.5 max-[1366px]:pt-8.75 pb-15.5 max-[1366px]:pb-8.75 [background:#FFFFFF] ps-15 max-[1199px]:ps-0 min-[1199px]:max-[1366px]:ps-7.5 min-[1366px]:max-[1600px]:ps-10 pe-10 max-[1199px]:pe-0 min-[1199px]:max-[1366px]:pe-7.5">
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
                              aria-label="Subject"
                              name="subject"
                              className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] normal-case [word-wrap:normal] w-full h-15 max-[767px]:h-12.5 pt-0 pr-5 pb-0 pl-5 font-normal text-[#6D6D6D] bg-white [border:1px_solid_#E5E5E5] rounded-[5px] appearance-none bg-no-repeat bg-position-[right_20px_center] focus:border-[#AB052D] focus:text-[#111] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_ease-in-out] motion-reduce:transition-none"
                            >
                              <option><Tx ns="industry">{"Your Business"}</Tx></option>
                              <option value="one"><Tx ns="industry">{"Business Strategy"}</Tx></option>
                              <option value="two"><Tx ns="industry">{"Market Analysis"}</Tx></option>
                              <option value="three">
                                <Tx ns="industry">{"Financial Planing"}</Tx>
                              </option>
                              <option value="four"><Tx ns="industry">{"Risk Management"}</Tx></option>
                              <option value="five">
                                <Tx ns="industry">{"Digital Transformation"}</Tx>
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
                            <Tx ns="industry">{"\n                                                        Send Massage\n                                                    "}</Tx>
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
                      <Tx ns="industry">{"Email: "}</Tx>
                    </span>
                    <SiteLink
                      href="mailto:admin@icfc.com.sg"
                      className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[20px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="industry">{"admin@icfc.com.sg"}</Tx>
                    </SiteLink>
                  </div>
                  <div>
                    <span className="mb-3 text-[rgba(255,255,255,0.31)] text-[24px] max-[767px]:text-[20px] block leading-[1.15]">
                      <Tx ns="industry">{"Contact Number:"}</Tx>
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
                              <Tx ns="industry">{" Corporate Growth "}</Tx>
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
                          <Tx ns="industry">{" Corporate Growth "}</Tx>
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
                              <Tx ns="industry">{" Risk Management "}</Tx>
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
                          <Tx ns="industry">{" Risk Management "}</Tx>
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
                              <Tx ns="industry">{" Financial Services "}</Tx>
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
                          <Tx ns="industry">{" Financial Services "}</Tx>
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
                              <Tx ns="industry">{" Business Strategy "}</Tx>
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
      </Container>
    </section>
  );
}
