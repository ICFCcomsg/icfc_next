import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogSidebarPageContent() {
  return (
    <SitePageTemplate route="blog-sidebar">
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_3rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto] relative z-[1]">
            <div className="flex flex-wrap mt-[calc(-1_*_3rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="[vertical-align:middle] max-w-full w-full [transform:scale(1.02)] group-hover/blog-item:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="pt-[13px] pb-[13px] group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[30px] max-[575px]:pt-[25px] min-[575px]:max-[1199px]:pt-[20px] pb-[35px] max-[575px]:pb-[25px] min-[575px]:max-[1199px]:pb-[20px] min-[1199px]:max-[1600px]:pb-[30px] [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] [padding-inline-start:35px] max-[575px]:[padding-inline-start:25px] min-[575px]:max-[1199px]:[padding-inline-start:20px] min-[1199px]:max-[1600px]:[padding-inline-start:30px] [padding-inline-end:40px] max-[575px]:[padding-inline-end:25px] min-[575px]:max-[1199px]:[padding-inline-end:20px] min-[1199px]:max-[1600px]:[padding-inline-end:30px] [border-top:0]">
                    <h5 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-[20px] [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                      >
                        {
                          "Smarter Thinking for Smarter\n                                                Business\n                                                Solutions"
                        }
                      </SiteLink>
                    </h5>
                    <p className="mt-[0] mb-[15px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "This retains a dynamic action oriented feel and aligns with\n                                            consulting core."
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="[vertical-align:middle] max-w-full w-full [transform:scale(1.02)] group-hover/blog-item:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="pt-[13px] pb-[13px] group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[30px] max-[575px]:pt-[25px] min-[575px]:max-[1199px]:pt-[20px] pb-[35px] max-[575px]:pb-[25px] min-[575px]:max-[1199px]:pb-[20px] min-[1199px]:max-[1600px]:pb-[30px] [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] [padding-inline-start:35px] max-[575px]:[padding-inline-start:25px] min-[575px]:max-[1199px]:[padding-inline-start:20px] min-[1199px]:max-[1600px]:[padding-inline-start:30px] [padding-inline-end:40px] max-[575px]:[padding-inline-end:25px] min-[575px]:max-[1199px]:[padding-inline-end:20px] min-[1199px]:max-[1600px]:[padding-inline-end:30px] [border-top:0]">
                    <h5 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-[20px] [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                      >
                        {
                          "From the Minds of Business Growth\n                                                Strategists"
                        }
                      </SiteLink>
                    </h5>
                    <p className="mt-[0] mb-[15px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Consulting empowers businesses with data-driven strategies and\n                                            innovative solutions"
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="[vertical-align:middle] max-w-full w-full [transform:scale(1.02)] group-hover/blog-item:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="pt-[13px] pb-[13px] group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[30px] max-[575px]:pt-[25px] min-[575px]:max-[1199px]:pt-[20px] pb-[35px] max-[575px]:pb-[25px] min-[575px]:max-[1199px]:pb-[20px] min-[1199px]:max-[1600px]:pb-[30px] [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] [padding-inline-start:35px] max-[575px]:[padding-inline-start:25px] min-[575px]:max-[1199px]:[padding-inline-start:20px] min-[1199px]:max-[1600px]:[padding-inline-start:30px] [padding-inline-end:40px] max-[575px]:[padding-inline-end:25px] min-[575px]:max-[1199px]:[padding-inline-end:20px] min-[1199px]:max-[1600px]:[padding-inline-end:30px] [border-top:0]">
                    <h5 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-[20px] [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                      >
                        {
                          "Insights That Drive Business\n                                                Smarter\n                                                Forward"
                        }
                      </SiteLink>
                    </h5>
                    <p className="mt-[0] mb-[15px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Consulting empowers businesses with data-driven strategies and\n                                            innovative solutions"
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="[vertical-align:middle] max-w-full w-full [transform:scale(1.02)] group-hover/blog-item:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="pt-[13px] pb-[13px] group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[30px] max-[575px]:pt-[25px] min-[575px]:max-[1199px]:pt-[20px] pb-[35px] max-[575px]:pb-[25px] min-[575px]:max-[1199px]:pb-[20px] min-[1199px]:max-[1600px]:pb-[30px] [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] [padding-inline-start:35px] max-[575px]:[padding-inline-start:25px] min-[575px]:max-[1199px]:[padding-inline-start:20px] min-[1199px]:max-[1600px]:[padding-inline-start:30px] [padding-inline-end:40px] max-[575px]:[padding-inline-end:25px] min-[575px]:max-[1199px]:[padding-inline-end:20px] min-[1199px]:max-[1600px]:[padding-inline-end:30px] [border-top:0]">
                    <h5 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-[20px] [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                      >
                        {
                          "Actionable Insights for Real World\n                                                Results"
                        }
                      </SiteLink>
                    </h5>
                    <p className="mt-[0] mb-[15px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "Helping companies thrive through expert consulting, smart\n                                            strategies,\n                                        "
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="[vertical-align:middle] max-w-full w-full [transform:scale(1.02)] group-hover/blog-item:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="pt-[13px] pb-[13px] group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[30px] max-[575px]:pt-[25px] min-[575px]:max-[1199px]:pt-[20px] pb-[35px] max-[575px]:pb-[25px] min-[575px]:max-[1199px]:pb-[20px] min-[1199px]:max-[1600px]:pb-[30px] [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] [padding-inline-start:35px] max-[575px]:[padding-inline-start:25px] min-[575px]:max-[1199px]:[padding-inline-start:20px] min-[1199px]:max-[1600px]:[padding-inline-start:30px] [padding-inline-end:40px] max-[575px]:[padding-inline-end:25px] min-[575px]:max-[1199px]:[padding-inline-end:20px] min-[1199px]:max-[1600px]:[padding-inline-end:30px] [border-top:0]">
                    <h5 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-[20px] [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                      >
                        {
                          "Mastering Markets, Models &\n                                                Momentum"
                        }
                      </SiteLink>
                    </h5>
                    <p className="mt-[0] mb-[15px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "We help businesses unlock potential with clear strategies, expert\n                                        "
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
                      >
                        {
                          "Read\n                                                More\n                                            "
                        }
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.png"
                        alt="image"
                        className="[vertical-align:middle] max-w-full w-full [transform:scale(1.02)] group-hover/blog-item:[transform:scale3d(1.1,_1.1,_1)]"
                      />
                    </SiteLink>
                    <div className="absolute bottom-[0]">
                      <div className="pt-[13px] pb-[13px] group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex [padding-inline-start:16px] [padding-inline-end:16px] items-center gap-[12px] flex-wrap">
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent]"
                            >
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" Corporate "}
                          </span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block [font-style:normal]"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            {" August 20, 2025"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-[30px] max-[575px]:pt-[25px] min-[575px]:max-[1199px]:pt-[20px] pb-[35px] max-[575px]:pb-[25px] min-[575px]:max-[1199px]:pb-[20px] min-[1199px]:max-[1600px]:pb-[30px] [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] [padding-inline-start:35px] max-[575px]:[padding-inline-start:25px] min-[575px]:max-[1199px]:[padding-inline-start:20px] min-[1199px]:max-[1600px]:[padding-inline-start:30px] [padding-inline-end:40px] max-[575px]:[padding-inline-end:25px] min-[575px]:max-[1199px]:[padding-inline-end:20px] min-[1199px]:max-[1600px]:[padding-inline-end:30px] [border-top:0]">
                    <h5 className="mt-[0px] mb-[20px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-[20px] [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-[0] before:h-[1px] after:absolute after:[content:''] after:w-[70px] after:[background:#000] after:[inset-inline-start:0] after:h-[1px] after:bottom-[0]">
                      <SiteLink
                        href="/blog-details"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                      >
                        {
                          "Strategic Thinking for a Changing\n                                                World"
                        }
                      </SiteLink>
                    </h5>
                    <p className="mt-[0] mb-[15px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                      {
                        "From insights to execution, we guide businesses to smarter"
                      }
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
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
          <div className="[flex-shrink:0] w-[33.33333333%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
            <div className="sticky max-[991px]:relative top-[110px] max-[991px]:top-[unset]">
              <div className="mb-[30px] pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Search"}
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Searching..."
                        aria-label="Searching..."
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[60px] w-full [border:1px_solid_#ddd] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:50px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [background:#FFFFFF]"
                      />
                      <button
                        type="submit"
                        className="rounded-[0] mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [text-transform:none] text-[#000] [border:none] [background:transparent] absolute top-[50%] [inset-inline-end:25px] [transform:translateY(-50%)] hover:text-[#AB052D]"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="[vertical-align:middle]"
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
              <div className="mb-[30px] pt-[30px] max-[1199px]:pt-[20px] pr-[30px] max-[1199px]:pr-[20px] pb-[40px] max-[1199px]:pb-[20px] pl-[30px] max-[1199px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Categories"}
                </h5>
                <div>
                  <div>
                    <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                      <li className="mb-[12px] list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D]"
                        >
                          {
                            "\n                                                    Business\n                                                    "
                          }
                          <span>{"(5)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-[12px] list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D]"
                        >
                          {
                            "\n                                                    Corporate\n                                                    "
                          }
                          <span>{"(4)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-[12px] list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D]"
                        >
                          {
                            "\n                                                    Consulting\n                                                    "
                          }
                          <span>{"(7)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-[12px] list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D]"
                        >
                          {
                            "\n                                                    AI Technology\n                                                    "
                          }
                          <span>{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-[12px] list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D]"
                        >
                          {
                            "\n                                                    Oil & Gas Energy\n                                                    "
                          }
                          <span>{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li className="list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D]"
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
              <div className="mb-[30px] pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Recent Posts"}
                </h5>
                <div>
                  <div>
                    <div className="mb-[20px] pb-[20px] flex max-[480px]:grid items-center gap-[20px] max-[480px]:[grid-template-columns:auto] [border-bottom:1px_solid_#DBDEE1] group/sidebar-blog-item">
                      <div className="overflow-hidden [flex:0_0_auto] w-[85px] max-[480px]:w-full rounded-[4px]">
                        <SiteLink
                          href="/blog-details"
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                        >
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                            className="[vertical-align:middle] max-w-full group-hover/sidebar-blog-item:[transform:scale3d(1.07,_1.07,_1.07)] w-full rounded-[4px]"
                          />
                        </SiteLink>
                      </div>
                      <div>
                        <div className="mb-[10px] text-[16px] flex items-center gap-[10px]">
                          <Icon
                            name="calendar"
                            className="inline-block [font-style:normal] text-[#AB052D]"
                          />
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                          <SiteLink
                            href="/blog-details"
                            className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent]"
                          >
                            {" Insights That Drive Business Smarter Forward"}
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="mb-[20px] pb-[20px] flex max-[480px]:grid items-center gap-[20px] max-[480px]:[grid-template-columns:auto] [border-bottom:1px_solid_#DBDEE1] group/sidebar-blog-item">
                      <div className="overflow-hidden [flex:0_0_auto] w-[85px] max-[480px]:w-full rounded-[4px]">
                        <SiteLink
                          href="/blog-details"
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                        >
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                            className="[vertical-align:middle] max-w-full group-hover/sidebar-blog-item:[transform:scale3d(1.07,_1.07,_1.07)] w-full rounded-[4px]"
                          />
                        </SiteLink>
                      </div>
                      <div>
                        <div className="mb-[10px] text-[16px] flex items-center gap-[10px]">
                          <Icon
                            name="calendar"
                            className="inline-block [font-style:normal] text-[#AB052D]"
                          />
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                          <SiteLink
                            href="/blog-details"
                            className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent]"
                          >
                            {
                              "\n                                                        From the Minds of Business Growth Strategists "
                            }
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="flex max-[480px]:grid items-center gap-[20px] max-[480px]:[grid-template-columns:auto] group/sidebar-blog-item">
                      <div className="overflow-hidden [flex:0_0_auto] w-[85px] max-[480px]:w-full rounded-[4px]">
                        <SiteLink
                          href="/blog-details"
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                        >
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                            className="[vertical-align:middle] max-w-full group-hover/sidebar-blog-item:[transform:scale3d(1.07,_1.07,_1.07)] w-full rounded-[4px]"
                          />
                        </SiteLink>
                      </div>
                      <div>
                        <div className="mb-[10px] text-[16px] flex items-center gap-[10px]">
                          <Icon
                            name="calendar"
                            className="inline-block [font-style:normal] text-[#AB052D]"
                          />
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                          <SiteLink
                            href="/blog-details"
                            className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent]"
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
              <div className="pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-[12px]">
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Technology"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Business"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Video"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Agency"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Consulting"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Financial"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Corporate"}
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D]"
                  >
                    {"Marketing"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] justify-center!">
          <div className="[flex-shrink:0] w-[50%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="mt-[40px]">
              <div className="text-left! mt-[45px]">
                <nav>
                  <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] inline-flex gap-[10px]">
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#AB052D] w-[40px] h-[40px] flex items-center justify-center rounded-full relative hover:[background:#AB052D] hover:[border-color:#AB052D]"
                      >
                        {"1"}
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-[#000] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#F8F8F9] w-[40px] h-[40px] flex items-center justify-center rounded-full relative hover:[background:#AB052D] hover:[border-color:#AB052D]"
                      >
                        {"2"}
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-[#000] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#F8F8F9] w-[40px] h-[40px] flex items-center justify-center rounded-full relative hover:[background:#AB052D] hover:[border-color:#AB052D]"
                      >
                        {"3"}
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-[#000] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#F8F8F9] w-[40px] h-[40px] flex items-center justify-center rounded-full relative hover:[background:#AB052D] hover:[border-color:#AB052D] before:absolute before:text-[16px] before:leading-[1] before:opacity-[1] before:left-[50%] before:top-[50%] before:[transform:translate(-50%,_-50%)]"
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
