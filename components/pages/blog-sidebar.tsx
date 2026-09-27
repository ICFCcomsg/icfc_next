import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogSidebarPageContent() {
  return (
    <SitePageTemplate route="blog-sidebar.html">
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
      title="Blog Sidebar"
      description="Position your agency bridge between a client’s big picture"
      background="/assets/images/logo/logo.png"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 xl:w-[66.66666666666666%] lg:w-[66.66666666666666%] relative z-[1]">
            <div className="-mx-3 flex flex-wrap gap-y-6">
              <div className="w-full shrink-0 px-3 xl:w-[50%] lg:w-[50%] md:w-[50%]">
                <div>
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="max-w-full h-auto w-full [transform:scale(1.02)] in-hover:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="in-hover:[background:#AB052D] [background:#2B3944] flex pt-[13px] pb-[13px] [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="user" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us.html"
                              className="transition-colors hover:text-[#AB052D] hover:text-[#2B3944]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="tag" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="calendar" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] pt-[30px] pb-[35px] [padding-inline-start:35px] [padding-inline-end:40px] [border-top:0] max-[1600px]:pb-[30px] max-[1600px]:[padding-inline-start:30px] max-[1600px]:[padding-inline-end:30px] max-[1199px]:pt-[20px] max-[1199px]:pb-[20px] max-[1199px]:[padding-inline-start:20px] max-[1199px]:[padding-inline-end:20px] max-[575px]:pt-[25px] max-[575px]:pb-[25px] max-[575px]:[padding-inline-start:25px] max-[575px]:[padding-inline-end:25px]">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl after:in-hover:w-full relative mb-[20px] pb-[20px] hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details.html"
                        className="transition-colors hover:text-[#AB052D]"
                      >
                        {
                          "Smarter Thinking for Smarter\n                                                Business\n                                                Solutions"
                        }
                      </SiteLink>
                    </h5>
                    <p className="leading-relaxed mb-[15px]">
                      {
                        "This retains a dynamic action oriented feel and aligns with\n                                            consulting core."
                      }
                    </p>
                    <div>
                      <SiteLink
                        className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                        href="/blog-details.html"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 xl:w-[50%] lg:w-[50%] md:w-[50%]">
                <div>
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="max-w-full h-auto w-full [transform:scale(1.02)] in-hover:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="in-hover:[background:#AB052D] [background:#2B3944] flex pt-[13px] pb-[13px] [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="user" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us.html"
                              className="transition-colors hover:text-[#AB052D] hover:text-[#2B3944]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="tag" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="calendar" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] pt-[30px] pb-[35px] [padding-inline-start:35px] [padding-inline-end:40px] [border-top:0] max-[1600px]:pb-[30px] max-[1600px]:[padding-inline-start:30px] max-[1600px]:[padding-inline-end:30px] max-[1199px]:pt-[20px] max-[1199px]:pb-[20px] max-[1199px]:[padding-inline-start:20px] max-[1199px]:[padding-inline-end:20px] max-[575px]:pt-[25px] max-[575px]:pb-[25px] max-[575px]:[padding-inline-start:25px] max-[575px]:[padding-inline-end:25px]">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl after:in-hover:w-full relative mb-[20px] pb-[20px] hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details.html"
                        className="transition-colors hover:text-[#AB052D]"
                      >
                        {
                          "From the Minds of Business Growth\n                                                Strategists"
                        }
                      </SiteLink>
                    </h5>
                    <p className="leading-relaxed mb-[15px]">
                      {
                        "Consulting empowers businesses with data-driven strategies and\n                                            innovative solutions"
                      }
                    </p>
                    <div>
                      <SiteLink
                        className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                        href="/blog-details.html"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 xl:w-[50%] lg:w-[50%] md:w-[50%]">
                <div>
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="max-w-full h-auto w-full [transform:scale(1.02)] in-hover:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="in-hover:[background:#AB052D] [background:#2B3944] flex pt-[13px] pb-[13px] [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="user" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us.html"
                              className="transition-colors hover:text-[#AB052D] hover:text-[#2B3944]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="tag" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="calendar" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] pt-[30px] pb-[35px] [padding-inline-start:35px] [padding-inline-end:40px] [border-top:0] max-[1600px]:pb-[30px] max-[1600px]:[padding-inline-start:30px] max-[1600px]:[padding-inline-end:30px] max-[1199px]:pt-[20px] max-[1199px]:pb-[20px] max-[1199px]:[padding-inline-start:20px] max-[1199px]:[padding-inline-end:20px] max-[575px]:pt-[25px] max-[575px]:pb-[25px] max-[575px]:[padding-inline-start:25px] max-[575px]:[padding-inline-end:25px]">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl after:in-hover:w-full relative mb-[20px] pb-[20px] hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details.html"
                        className="transition-colors hover:text-[#AB052D]"
                      >
                        {
                          "Insights That Drive Business\n                                                Smarter\n                                                Forward"
                        }
                      </SiteLink>
                    </h5>
                    <p className="leading-relaxed mb-[15px]">
                      {
                        "Consulting empowers businesses with data-driven strategies and\n                                            innovative solutions"
                      }
                    </p>
                    <div>
                      <SiteLink
                        className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                        href="/blog-details.html"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 xl:w-[50%] lg:w-[50%] md:w-[50%]">
                <div>
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="max-w-full h-auto w-full [transform:scale(1.02)] in-hover:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="in-hover:[background:#AB052D] [background:#2B3944] flex pt-[13px] pb-[13px] [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="user" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us.html"
                              className="transition-colors hover:text-[#AB052D] hover:text-[#2B3944]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="tag" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="calendar" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] pt-[30px] pb-[35px] [padding-inline-start:35px] [padding-inline-end:40px] [border-top:0] max-[1600px]:pb-[30px] max-[1600px]:[padding-inline-start:30px] max-[1600px]:[padding-inline-end:30px] max-[1199px]:pt-[20px] max-[1199px]:pb-[20px] max-[1199px]:[padding-inline-start:20px] max-[1199px]:[padding-inline-end:20px] max-[575px]:pt-[25px] max-[575px]:pb-[25px] max-[575px]:[padding-inline-start:25px] max-[575px]:[padding-inline-end:25px]">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl after:in-hover:w-full relative mb-[20px] pb-[20px] hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details.html"
                        className="transition-colors hover:text-[#AB052D]"
                      >
                        {
                          "Actionable Insights for Real World\n                                                Results"
                        }
                      </SiteLink>
                    </h5>
                    <p className="leading-relaxed mb-[15px]">
                      {
                        "Helping companies thrive through expert consulting, smart\n                                            strategies,\n                                        "
                      }
                    </p>
                    <div>
                      <SiteLink
                        className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                        href="/blog-details.html"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 xl:w-[50%] lg:w-[50%] md:w-[50%]">
                <div>
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="max-w-full h-auto w-full [transform:scale(1.02)] in-hover:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="in-hover:[background:#AB052D] [background:#2B3944] flex pt-[13px] pb-[13px] [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="user" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us.html"
                              className="transition-colors hover:text-[#AB052D] hover:text-[#2B3944]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="tag" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="calendar" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] pt-[30px] pb-[35px] [padding-inline-start:35px] [padding-inline-end:40px] [border-top:0] max-[1600px]:pb-[30px] max-[1600px]:[padding-inline-start:30px] max-[1600px]:[padding-inline-end:30px] max-[1199px]:pt-[20px] max-[1199px]:pb-[20px] max-[1199px]:[padding-inline-start:20px] max-[1199px]:[padding-inline-end:20px] max-[575px]:pt-[25px] max-[575px]:pb-[25px] max-[575px]:[padding-inline-start:25px] max-[575px]:[padding-inline-end:25px]">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl after:in-hover:w-full relative mb-[20px] pb-[20px] hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details.html"
                        className="transition-colors hover:text-[#AB052D]"
                      >
                        {
                          "Mastering Markets, Models &\n                                                Momentum"
                        }
                      </SiteLink>
                    </h5>
                    <p className="leading-relaxed mb-[15px]">
                      {
                        "We help businesses unlock potential with clear strategies, expert\n                                        "
                      }
                    </p>
                    <div>
                      <SiteLink
                        className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                        href="/blog-details.html"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0 px-3 xl:w-[50%] lg:w-[50%] md:w-[50%]">
                <div>
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="max-w-full h-auto w-full [transform:scale(1.02)] in-hover:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="in-hover:[background:#AB052D] [background:#2B3944] flex pt-[13px] pb-[13px] [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="user" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us.html"
                              className="transition-colors hover:text-[#AB052D] hover:text-[#2B3944]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="tag" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon name="calendar" />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] pt-[30px] pb-[35px] [padding-inline-start:35px] [padding-inline-end:40px] [border-top:0] max-[1600px]:pb-[30px] max-[1600px]:[padding-inline-start:30px] max-[1600px]:[padding-inline-end:30px] max-[1199px]:pt-[20px] max-[1199px]:pb-[20px] max-[1199px]:[padding-inline-start:20px] max-[1199px]:[padding-inline-end:20px] max-[575px]:pt-[25px] max-[575px]:pb-[25px] max-[575px]:[padding-inline-start:25px] max-[575px]:[padding-inline-end:25px]">
                    <h5 className="font-bold leading-tight text-[#2B3944] text-xl after:in-hover:w-full relative mb-[20px] pb-[20px] hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details.html"
                        className="transition-colors hover:text-[#AB052D]"
                      >
                        {
                          "Strategic Thinking for a Changing\n                                                World"
                        }
                      </SiteLink>
                    </h5>
                    <p className="leading-relaxed mb-[15px]">
                      {
                        "From insights to execution, we guide businesses to smarter"
                      }
                    </p>
                    <div>
                      <SiteLink
                        className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                        href="/blog-details.html"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%]">
            <div className="sticky top-[110px] max-[991px]:relative max-[991px]:top-[unset]">
              <div className="relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] p-[30px_30px_38px_30px] rounded-[8px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px] mb-[30px]">
                <h5 className="mb-[30px] relative text-[22px] pb-[12px] before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D] font-bold">
                  {"Search"}
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Searching..."
                        aria-label="Searching..."
                        className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AB052D] [padding-inline-end:50px] [background:#FFFFFF] [border:1px_solid_#ddd] h-[60px]"
                      />
                      <button
                        type="submit"
                        className="absolute top-[50%] [inset-inline-end:25px] text-[#000] text-[16px] [transform:translateY(-50%)] hover:text-[#AB052D]"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M16.9995 17L13.1328 13.1333"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </EmailForm>
                </div>
              </div>
              <div className="relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] p-[30px_30px_40px_30px] rounded-[8px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px] max-[1199px]:p-[20px_20px_20px_20px] mb-[30px]">
                <h5 className="mb-[30px] relative text-[22px] pb-[12px] before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D] font-bold">
                  {"Categories"}
                </h5>
                <div>
                  <div>
                    <ul>
                      <li className="list-none mb-[12px]">
                        <SiteLink
                          href="/blog-details.html"
                          className="transition-colors hover:text-[#AB052D] flex items-center justify-between [border:1px_solid_rgba(2,_1,_1,_0.09)] p-[12px_20px] [background:#FFFFFF] font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF]"
                        >
                          {
                            "\n                                                    Business\n                                                    "
                          }
                          <span>{"(5)"}</span>
                        </SiteLink>
                      </li>
                      <li className="list-none mb-[12px]">
                        <SiteLink
                          href="/blog-details.html"
                          className="transition-colors hover:text-[#AB052D] flex items-center justify-between [border:1px_solid_rgba(2,_1,_1,_0.09)] p-[12px_20px] [background:#FFFFFF] font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF]"
                        >
                          {
                            "\n                                                    Corporate\n                                                    "
                          }
                          <span>{"(4)"}</span>
                        </SiteLink>
                      </li>
                      <li className="list-none mb-[12px]">
                        <SiteLink
                          href="/blog-details.html"
                          className="transition-colors hover:text-[#AB052D] flex items-center justify-between [border:1px_solid_rgba(2,_1,_1,_0.09)] p-[12px_20px] [background:#FFFFFF] font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF]"
                        >
                          {
                            "\n                                                    Consulting\n                                                    "
                          }
                          <span>{"(7)"}</span>
                        </SiteLink>
                      </li>
                      <li className="list-none mb-[12px]">
                        <SiteLink
                          href="/blog-details.html"
                          className="transition-colors hover:text-[#AB052D] flex items-center justify-between [border:1px_solid_rgba(2,_1,_1,_0.09)] p-[12px_20px] [background:#FFFFFF] font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF]"
                        >
                          {
                            "\n                                                    AI Technology\n                                                    "
                          }
                          <span>{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li className="list-none mb-[12px]">
                        <SiteLink
                          href="/blog-details.html"
                          className="transition-colors hover:text-[#AB052D] flex items-center justify-between [border:1px_solid_rgba(2,_1,_1,_0.09)] p-[12px_20px] [background:#FFFFFF] font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF]"
                        >
                          {
                            "\n                                                    Oil & Gas Energy\n                                                    "
                          }
                          <span>{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li className="list-none">
                        <SiteLink
                          href="/blog-details.html"
                          className="transition-colors hover:text-[#AB052D] flex items-center justify-between [border:1px_solid_rgba(2,_1,_1,_0.09)] p-[12px_20px] [background:#FFFFFF] font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF]"
                        >
                          {
                            "\n                                                    IT Solutions\n                                                    "
                          }
                          <span>{"(6)"}</span>
                        </SiteLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] p-[30px_30px_38px_30px] rounded-[8px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px] mb-[30px]">
                <h5 className="mb-[30px] relative text-[22px] pb-[12px] before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D] font-bold">
                  {"Recent Posts"}
                </h5>
                <div>
                  <div>
                    <div className="flex items-center gap-[20px] max-[480px]:grid max-[480px]:[grid-template-columns:auto] mb-[20px] [border-bottom:1px_solid_#DBDEE1] pb-[20px]">
                      <div className="overflow-hidden [flex:0_0_auto] w-[85px] rounded-[4px] max-[480px]:w-full">
                        <SiteLink
                          href="/blog-details.html"
                          className="transition-colors hover:text-[#AB052D]"
                        >
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                            className="max-w-full h-auto in-hover:[transform:scale3d(1.07,_1.07,_1.07)] w-full rounded-[4px]"
                          />
                        </SiteLink>
                      </div>
                      <div>
                        <div className="text-[16px] flex items-center gap-[10px] mb-[10px]">
                          <Icon name="calendar" className="text-[#AB052D]" />
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="text-[18px] max-[1199px]:text-[16px] font-bold">
                          <SiteLink
                            href="/blog-details.html"
                            className="transition-colors hover:text-[#AB052D] hover:text-[#AB052D]"
                          >
                            {" Insights That Drive Business Smarter Forward"}
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center gap-[20px] max-[480px]:grid max-[480px]:[grid-template-columns:auto] mb-[20px] [border-bottom:1px_solid_#DBDEE1] pb-[20px]">
                      <div className="overflow-hidden [flex:0_0_auto] w-[85px] rounded-[4px] max-[480px]:w-full">
                        <SiteLink
                          href="/blog-details.html"
                          className="transition-colors hover:text-[#AB052D]"
                        >
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                            className="max-w-full h-auto in-hover:[transform:scale3d(1.07,_1.07,_1.07)] w-full rounded-[4px]"
                          />
                        </SiteLink>
                      </div>
                      <div>
                        <div className="text-[16px] flex items-center gap-[10px] mb-[10px]">
                          <Icon name="calendar" className="text-[#AB052D]" />
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="text-[18px] max-[1199px]:text-[16px] font-bold">
                          <SiteLink
                            href="/blog-details.html"
                            className="transition-colors hover:text-[#AB052D] hover:text-[#AB052D]"
                          >
                            {
                              "\n                                                        From the Minds of Business Growth Strategists "
                            }
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center gap-[20px] max-[480px]:grid max-[480px]:[grid-template-columns:auto]">
                      <div className="overflow-hidden [flex:0_0_auto] w-[85px] rounded-[4px] max-[480px]:w-full">
                        <SiteLink
                          href="/blog-details.html"
                          className="transition-colors hover:text-[#AB052D]"
                        >
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                            className="max-w-full h-auto in-hover:[transform:scale3d(1.07,_1.07,_1.07)] w-full rounded-[4px]"
                          />
                        </SiteLink>
                      </div>
                      <div>
                        <div className="text-[16px] flex items-center gap-[10px] mb-[10px]">
                          <Icon name="calendar" className="text-[#AB052D]" />
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="text-[18px] max-[1199px]:text-[16px] font-bold">
                          <SiteLink
                            href="/blog-details.html"
                            className="transition-colors hover:text-[#AB052D] hover:text-[#AB052D]"
                          >
                            {
                              "\n                                                        Smarter Thinking for Smarter Business Solutions "
                            }
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] p-[30px_30px_38px_30px] rounded-[8px] max-[1600px]:p-[10px_20px_20px_20px] max-[991px]:p-[20px_30px_30px_30px] max-[480px]:p-[10px_20px_20px_20px]">
                <h5 className="mb-[30px] relative text-[22px] pb-[12px] before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D] font-bold">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-[12px]">
                  <SiteLink
                    href="/blog-details.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Technology"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Business"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Video"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Agency"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Consulting"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Financial"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Corporate"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details.html"
                    className="transition-colors hover:text-[#AB052D] text-[16px] [border:1px_solid_#DBDEE1] p-[7px_15px] relative font-medium [background:#FFFFFF] rounded-[6px] text-[#2B3944] max-[480px]:text-[14px] max-[480px]:p-[6px_13px] hover:text-[#FFFFFF] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Marketing"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6 justify-center">
          <div className="w-full shrink-0 px-3 xl:w-[50%]">
            <div className="mt-[40px]">
              <div className="mt-[45px] text-left">
                <nav>
                  <ul className="inline-flex gap-[10px]">
                    <li className="list-none">
                      <SiteLink
                        className="transition-colors hover:text-[#AB052D] w-[40px] h-[40px] flex items-center justify-center [border:none] text-[#FFFFFF] rounded-full relative [background:#AB052D] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF]"
                        href="/contact-us.html"
                      >
                        {"1"}
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us.html"
                        className="transition-colors hover:text-[#AB052D] w-[40px] h-[40px] flex items-center justify-center [border:1px_solid_#DBDEE1] text-[#000] rounded-full relative [background:#F8F8F9] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF]"
                      >
                        {"2"}
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us.html"
                        className="transition-colors hover:text-[#AB052D] w-[40px] h-[40px] flex items-center justify-center [border:1px_solid_#DBDEE1] text-[#000] rounded-full relative [background:#F8F8F9] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF]"
                      >
                        {"3"}
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        className="transition-colors hover:text-[#AB052D] w-[40px] h-[40px] flex items-center justify-center [border:1px_solid_#DBDEE1] text-[#000] rounded-full relative [background:#F8F8F9] hover:[background:#AB052D] hover:[border-color:#AB052D] hover:text-[#FFFFFF] before:absolute before:text-[16px] before:leading-[1] before:opacity-[1] before:left-[50%] before:top-[50%] before:[transform:translate(-50%,_-50%)]"
                        href="/contact-us.html"
                      ></SiteLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
