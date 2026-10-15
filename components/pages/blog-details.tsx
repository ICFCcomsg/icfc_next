import { CalendarIcon } from "@/components/icons/calendar-icon";
import { ClockIcon } from "@/components/icons/clock-icon";
import { CommentIcon } from "@/components/icons/comment-icon";
import { QuoteIcon } from "@/components/icons/quote-icon";
import { SearchIcon } from "@/components/icons/search-icon";
import { Tx } from "@/components/atoms/tx";
import { Icon } from "@/components/icons/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";
import { Container } from "@/components/atoms/container";

export function BlogDetailsPageContent() {
  return (
    <SitePageTemplate route="blog-details">
      <main>
        <BreadcrumbAreaSection />
        <PostboxAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title={<Tx ns="blog-details">{"Blog Details"}</Tx>}
      description={<Tx ns="blog-details">{"Position your agency bridge between a client’s big picture"}</Tx>}
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <Container>
        <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[58.33333333%] max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div>
              <div>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 flex gap-5 items-center max-[1600px]:flex-wrap">
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <span className="">
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                          className="align-middle max-w-full w-10 h-10 rounded-full"
                        />
                      </span>
                      <span className="">
                        <Tx ns="blog-details">{"\n                                                By\n                                                "}</Tx>
                        <SiteLink
                          href="/contact-us"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-details">{"Icfc"}</Tx>
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <CalendarIcon className="align-middle w-3.75 h-3.75" />
                      <span className=""><Tx ns="blog-details">{"Jan 20, 2025"}</Tx></span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <CommentIcon className="align-middle w-3.75 h-3.75" />
                      <span className=""><Tx ns="blog-details">{"0 Comments"}</Tx></span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <ClockIcon className="align-middle w-3.75 h-3.75" />
                      <span className=""><Tx ns="blog-details">{"1 Minute Read"}</Tx></span>
                    </span>
                  </li>
                </ul>
              </div>
              <h3 className="mt-5 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[30px] max-[1199px]:text-[25px] [word-break:break-word]">
                <Tx ns="blog-details">{"Insights That Drive Business Smarter Forward"}</Tx>
              </h3>
              <div>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-details">{"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of\n                                    magna\n                                    aliqua. Ut enim ad minim the veniam, made of owl the quis nostrud exercitation\n                                    ullamco\n                                    laboris nisi ut aliquip dea dolor commodo consequat duis aute irure and dolor in\n                                    reprehenderit faucibus at malesuada sagittis placerat eros sed istincidunt."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-details">{"The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In\n                                    hac\n                                    habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at\n                                    malesuada\n                                    sagittis placerat eros sed istincidunt.\n                                "}</Tx>
                </p>
                <div className="mb-7.5">
                  <SiteImage
                    src="/assets/images/blog/details/blog-details-01.webp"
                    alt="image"
                    className="align-middle max-w-full w-full rounded-md"
                  />
                </div>
                <h3 className="mt-5 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[30px] max-[1199px]:text-[25px] [word-break:break-word]">
                  <Tx ns="blog-details">{"Smarter Thinking for Smarter Business Solutions\n                                "}</Tx>
                </h3>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-details">{"The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu\n                                    the In hac\n                                    habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at\n                                    malesuada\n                                    sagittis placerat eros sed istincidunt augue ac rutrum sed the is sodales augue\n                                    consequat.\n                                "}</Tx>
                </p>
                <div className="mb-7.5 relative max-[575px]:mt-12.5">
                  <blockquote className="mt-0 mr-0 mb-4 ml-0 pt-7.5 max-[575px]:pt-3.75 min-[575px]:max-[1199px]:pt-5 pb-7.5 max-[575px]:pb-6.25 [background:#F8F8F9] rounded-md ps-10 max-[575px]:ps-6.25 min-[575px]:max-[1199px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1199px]:pe-7.5">
                    <p className="mt-0 mb-7.75 max-[1199px]:mb-5 text-[16px] font-medium text-[#2B3944] leading-7 italic">
                      <Tx ns="blog-details">{"“Pellentesque sollicitudin congue dolor non aliquam. Morbi\n                                            volutpat, nisi vel ultricies\n                                            urnacondimentum, sapien neque lobortis tortor, quis efficitur mi ipsum eu\n                                            metus.\n                                            Praesent\n                                            eleifend orci sit amet est vehicula”"}</Tx>
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                      <cite className="uppercase not-italic text-black font-medium relative ps-14.25 before:[content:''] before:[background:#AB052D] before:h-0.5 before:w-10.5 before:absolute before:top-[50%] before:left-0 before:transform-[translateY(-50%)]">
                        <Tx ns="blog-details">{"Leslie Alexander"}</Tx>
                      </cite>
                      <div>
                        <QuoteIcon className="align-middle w-9" />
                      </div>
                    </div>
                  </blockquote>
                </div>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-details">{"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of\n                                    magna\n                                    aliqua. Ut enim ad minim sand veniam, made of owl the quis nostrud exercitation\n                                    ullamco\n                                    laboris nisi ut aliquip ex ea dolor commodo consequat aute irure and dolor in\n                                    reprehenderit.\n                                "}</Tx>
                </p>
                <div className="pt-5 pb-5 items-center justify-between flex gap-7.5 flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                  <div className="items-center flex flex-wrap gap-3">
                    <span className="font-semibold pe-2.5 text-[#2B3944]">
                      <Tx ns="blog-details">{"Tags:"}</Tx>
                    </span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-details">{"Business"}</Tx>
                    </SiteLink>
                    <SiteLink
                      href="/services"
                      className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-details">{"Consulting"}</Tx>
                    </SiteLink>
                    <SiteLink
                      href="/services"
                      className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-details">{"Services"}</Tx>
                    </SiteLink>
                  </div>
                  <div>
                    <span className="font-semibold pe-2.5 text-[#2B3944]">
                      <Tx ns="blog-details">{"Social:"}</Tx>
                    </span>
                    <div className="inline-flex gap-3.75 items-center">
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] flex items-center justify-center w-[unset] h-[unset] text-[16px] bg-[#AB052D] rounded-none hover:[background:#2B3944] [transition:0.5s] motion-reduce:transition-none"
                      >
                        <Icon
                          name="facebook"
                          className="inline-block not-italic"
                        />
                      </SiteLink>
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] flex items-center justify-center w-[unset] h-[unset] text-[16px] bg-[#AB052D] rounded-none hover:[background:#2B3944] [transition:0.5s] motion-reduce:transition-none"
                      >
                        <Icon
                          name="x"
                          className="inline-block not-italic"
                        />
                      </SiteLink>
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] flex items-center justify-center w-[unset] h-[unset] text-[16px] bg-[#AB052D] rounded-none hover:[background:#2B3944] [transition:0.5s] motion-reduce:transition-none"
                      >
                        <Icon
                          name="linkedin"
                          className="inline-block not-italic"
                        />
                      </SiteLink>
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] flex items-center justify-center w-[unset] h-[unset] text-[16px] bg-[#AB052D] rounded-none hover:[background:#2B3944] [transition:0.5s] motion-reduce:transition-none"
                      >
                        <Icon
                          name="play"
                          className="inline-block not-italic"
                        />
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-8.75 mb-6.25">
                    <h3 className="mt-5 mb-5 font-semibold leading-[1.46] text-[#2B3944] text-[30px] max-[1199px]:text-[25px] [word-break:break-word]">
                      <Tx ns="blog-details">{"Leave a Comment"}</Tx>
                    </h3>
                  </div>
                  <EmailForm>
                    <div className="flex flex-wrap -mt-6 -mr-6 -ml-6">
                      <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                        <div className="mb-5">
                          <div>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Your Name"
                              aria-label="Your Name"
                              className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-14 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-5 pe-5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                        <div className="mb-5">
                          <div>
                            <input
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              aria-label="Your Email"
                              type="email"
                              className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-14 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-5 pe-5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                        <div className="mb-5">
                          <div>
                            <textarea
                              id="message"
                              name="message"
                              placeholder="Write Message"
                              defaultValue=""
                              className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] resize-y pt-3.5 pr-6 pb-3.5 pl-6 bg-transparent h-50 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-5 pe-5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                        <div>
                          <button
                            type="submit"
                            className="rounded-[50px] mt-0 mr-0 mb-0 ml-0 text-[17px] leading-[inherit] normal-case pt-3.5 pr-6.5 pb-3.5 pl-6.5 text-[#FFFFFF] [border:none] [background:#AB052D] inline-flex items-center justify-center font-medium relative z-1 overflow-hidden hover:[background:#2B3944] hover:text-[#FFFFFF] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                          >
                            <Tx ns="blog-details">{"\n                                                        Post Comment\n                                                    "}</Tx>
                          </button>
                        </div>
                      </div>
                    </div>
                  </EmailForm>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="sticky max-[991px]:relative top-27.5 max-[991px]:top-[unset]">
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  <Tx ns="blog-details">{"Search"}</Tx>
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Searching..."
                        aria-label="Searching..."
                        className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-15 w-full [border:1px_solid_#ddd] rounded-md text-black ps-6.25 pe-12.5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                      <button
                        type="submit"
                        className="rounded-none mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] normal-case text-black [border:none] [background:transparent] absolute top-[50%] inset-e-6.25 transform-[translateY(-50%)] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <SearchIcon fill="none" className="align-middle" />
                      </button>
                    </div>
                  </EmailForm>
                </div>
              </div>
              <div className="mb-7.5 pt-7.5 max-[1199px]:pt-5 pr-7.5 max-[1199px]:pr-5 pb-10 max-[1199px]:pb-5 pl-7.5 max-[1199px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  <Tx ns="blog-details">{"Categories"}</Tx>
                </h5>
                <div>
                  <div>
                    <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-details">{"\n                                                    Business\n                                                    "}</Tx>
                          <span className="">{"(5)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-details">{"\n                                                    Corporate\n                                                    "}</Tx>
                          <span className="">{"(4)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-details">{"\n                                                    Consulting\n                                                    "}</Tx>
                          <span className="">{"(7)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-details">{"\n                                                    AI Technology\n                                                    "}</Tx>
                          <span className="">{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-details">{"\n                                                    Oil & Gas Energy\n                                                    "}</Tx>
                          <span className="">{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li className="list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-details">{"\n                                                    IT Solutions\n                                                    "}</Tx>
                          <span className="">{"(6)"}</span>
                        </SiteLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  <Tx ns="blog-details">{"Recent Posts"}</Tx>
                </h5>
                <div>
                  <div>
                    <div className="mb-5 pb-5 flex max-[480px]:grid items-center gap-5 max-[480px]:grid-cols-[auto] [border-bottom:1px_solid_#DBDEE1] group/sidebar-blog-item">
                      <div className="overflow-hidden flex-[0_0_auto] w-21.25 max-[480px]:w-full rounded-sm">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <SiteImage
                            src="/assets/images/logo/logo.webp"
                            alt="image"
                            className="align-middle max-w-full group-hover/sidebar-blog-item:transform-[scale3d(1.07,1.07,1.07)] w-full rounded-sm [transition:all_1s_cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none"
                          />
                        </SiteLink>
                      </div>
                      <div>
                        <div className="mb-2.5 text-[16px] flex items-center gap-2.5">
                          <Icon
                            name="calendar"
                            className="inline-block not-italic text-[#AB052D]"
                          />
                          <span className=""><Tx ns="blog-details">{"May 20, 2024"}</Tx></span>
                        </div>
                        <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                          <SiteLink
                            href="/blog-details"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            <Tx ns="blog-details">{" Insights That Drive Business Smarter\n                                                        Forward"}</Tx>
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="mb-5 pb-5 flex max-[480px]:grid items-center gap-5 max-[480px]:grid-cols-[auto] [border-bottom:1px_solid_#DBDEE1] group/sidebar-blog-item">
                      <div className="overflow-hidden flex-[0_0_auto] w-21.25 max-[480px]:w-full rounded-sm">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <SiteImage
                            src="/assets/images/logo/logo.webp"
                            alt="image"
                            className="align-middle max-w-full group-hover/sidebar-blog-item:transform-[scale3d(1.07,1.07,1.07)] w-full rounded-sm [transition:all_1s_cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none"
                          />
                        </SiteLink>
                      </div>
                      <div>
                        <div className="mb-2.5 text-[16px] flex items-center gap-2.5">
                          <Icon
                            name="calendar"
                            className="inline-block not-italic text-[#AB052D]"
                          />
                          <span className=""><Tx ns="blog-details">{"May 20, 2024"}</Tx></span>
                        </div>
                        <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                          <SiteLink
                            href="/blog-details"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            <Tx ns="blog-details">{"\n                                                        From the Minds of Business Growth Strategists "}</Tx>
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="flex max-[480px]:grid items-center gap-5 max-[480px]:grid-cols-[auto] group/sidebar-blog-item">
                      <div className="overflow-hidden flex-[0_0_auto] w-21.25 max-[480px]:w-full rounded-sm">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <SiteImage
                            src="/assets/images/logo/logo.webp"
                            alt="image"
                            className="align-middle max-w-full group-hover/sidebar-blog-item:transform-[scale3d(1.07,1.07,1.07)] w-full rounded-sm [transition:all_1s_cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none"
                          />
                        </SiteLink>
                      </div>
                      <div>
                        <div className="mb-2.5 text-[16px] flex items-center gap-2.5">
                          <Icon
                            name="calendar"
                            className="inline-block not-italic text-[#AB052D]"
                          />
                          <span className=""><Tx ns="blog-details">{"May 20, 2024"}</Tx></span>
                        </div>
                        <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                          <SiteLink
                            href="/blog-details"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            <Tx ns="blog-details">{"\n                                                        Smarter Thinking for Smarter Business Solutions "}</Tx>
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  <Tx ns="blog-details">{"Popular Tags"}</Tx>
                </h5>
                <div className="flex flex-wrap gap-3">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-details">{"Technology"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-details">{"Business"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-details">{"Video"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-details">{"Agency"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/services"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-details">{"Consulting"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-details">{"Financial"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-details">{"Corporate"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-details">{"Marketing"}</Tx>
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
