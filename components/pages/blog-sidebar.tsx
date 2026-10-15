import { Tx } from "@/components/atoms/tx";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { EmailForm } from "@/components/molecules/email-form";
import { Container } from "@/components/atoms/container";

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
      title={<Tx ns="blog-sidebar">{"Blog Sidebar"}</Tx>}
      description={<Tx ns="blog-sidebar">{"Position your agency bridge between a client’s big picture"}</Tx>}
      background="/assets/images/logo/logo.webp"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <Container>
        <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto] relative z-1">
            <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.webp"
                        alt="image"
                        className="align-middle max-w-full w-full transform-[scale(1.02)] group-hover/blog-item:transform-[scale3d(1.1,1.1,1)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </SiteLink>
                    <div className="absolute bottom-0">
                      <div className="pt-3.25 pb-3.25 group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex ps-4 pe-4 items-center gap-3 flex-wrap [transition:0.5s] motion-reduce:transition-none">
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            >
                              <Tx ns="blog-sidebar">{"Icfc"}</Tx>
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" Corporate "}</Tx>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" August 20, 2025"}</Tx>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-7.5 max-[575px]:pt-6.25 min-[575px]:max-[1199px]:pt-5 pb-8.75 max-[575px]:pb-6.25 min-[575px]:max-[1199px]:pb-5 min-[1199px]:max-[1600px]:pb-7.5 [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] ps-8.75 max-[575px]:ps-6.25 min-[575px]:max-[1199px]:ps-5 min-[1199px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1199px]:pe-5 min-[1199px]:max-[1600px]:pe-7.5 [border-top:0]">
                    <h5 className="mt-0 mb-5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-5 [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-0 before:h-px after:absolute after:[content:''] after:w-17.5 after:[background:#000] after:inset-s-0 after:h-px after:bottom-0 [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none after:[transition:0.6s] after:motion-reduce:transition-none">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Smarter Thinking for Smarter\n                                                Business\n                                                Solutions"}</Tx>
                      </SiteLink>
                    </h5>
                    <p className="mt-0 mb-3.75 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      <Tx ns="blog-sidebar">{"This retains a dynamic action oriented feel and aligns with\n                                            consulting core."}</Tx>
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-visible hover:[background:#2B3944] w-[unset] h-[unset] gap-2 [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Read\n                                                More\n                                            "}</Tx>
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.webp"
                        alt="image"
                        className="align-middle max-w-full w-full transform-[scale(1.02)] group-hover/blog-item:transform-[scale3d(1.1,1.1,1)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </SiteLink>
                    <div className="absolute bottom-0">
                      <div className="pt-3.25 pb-3.25 group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex ps-4 pe-4 items-center gap-3 flex-wrap [transition:0.5s] motion-reduce:transition-none">
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            >
                              <Tx ns="blog-sidebar">{"Icfc"}</Tx>
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" Corporate "}</Tx>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" August 20, 2025"}</Tx>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-7.5 max-[575px]:pt-6.25 min-[575px]:max-[1199px]:pt-5 pb-8.75 max-[575px]:pb-6.25 min-[575px]:max-[1199px]:pb-5 min-[1199px]:max-[1600px]:pb-7.5 [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] ps-8.75 max-[575px]:ps-6.25 min-[575px]:max-[1199px]:ps-5 min-[1199px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1199px]:pe-5 min-[1199px]:max-[1600px]:pe-7.5 [border-top:0]">
                    <h5 className="mt-0 mb-5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-5 [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-0 before:h-px after:absolute after:[content:''] after:w-17.5 after:[background:#000] after:inset-s-0 after:h-px after:bottom-0 [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none after:[transition:0.6s] after:motion-reduce:transition-none">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"From the Minds of Business Growth\n                                                Strategists"}</Tx>
                      </SiteLink>
                    </h5>
                    <p className="mt-0 mb-3.75 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      <Tx ns="blog-sidebar">{"Consulting empowers businesses with data-driven strategies and\n                                            innovative solutions"}</Tx>
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-visible hover:[background:#2B3944] w-[unset] h-[unset] gap-2 [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Read\n                                                More\n                                            "}</Tx>
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.webp"
                        alt="image"
                        className="align-middle max-w-full w-full transform-[scale(1.02)] group-hover/blog-item:transform-[scale3d(1.1,1.1,1)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </SiteLink>
                    <div className="absolute bottom-0">
                      <div className="pt-3.25 pb-3.25 group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex ps-4 pe-4 items-center gap-3 flex-wrap [transition:0.5s] motion-reduce:transition-none">
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            >
                              <Tx ns="blog-sidebar">{"Icfc"}</Tx>
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" Corporate "}</Tx>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" August 20, 2025"}</Tx>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-7.5 max-[575px]:pt-6.25 min-[575px]:max-[1199px]:pt-5 pb-8.75 max-[575px]:pb-6.25 min-[575px]:max-[1199px]:pb-5 min-[1199px]:max-[1600px]:pb-7.5 [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] ps-8.75 max-[575px]:ps-6.25 min-[575px]:max-[1199px]:ps-5 min-[1199px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1199px]:pe-5 min-[1199px]:max-[1600px]:pe-7.5 [border-top:0]">
                    <h5 className="mt-0 mb-5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-5 [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-0 before:h-px after:absolute after:[content:''] after:w-17.5 after:[background:#000] after:inset-s-0 after:h-px after:bottom-0 [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none after:[transition:0.6s] after:motion-reduce:transition-none">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Insights That Drive Business\n                                                Smarter\n                                                Forward"}</Tx>
                      </SiteLink>
                    </h5>
                    <p className="mt-0 mb-3.75 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      <Tx ns="blog-sidebar">{"Consulting empowers businesses with data-driven strategies and\n                                            innovative solutions"}</Tx>
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-visible hover:[background:#2B3944] w-[unset] h-[unset] gap-2 [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Read\n                                                More\n                                            "}</Tx>
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.webp"
                        alt="image"
                        className="align-middle max-w-full w-full transform-[scale(1.02)] group-hover/blog-item:transform-[scale3d(1.1,1.1,1)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </SiteLink>
                    <div className="absolute bottom-0">
                      <div className="pt-3.25 pb-3.25 group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex ps-4 pe-4 items-center gap-3 flex-wrap [transition:0.5s] motion-reduce:transition-none">
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            >
                              <Tx ns="blog-sidebar">{"Icfc"}</Tx>
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" Corporate "}</Tx>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" August 20, 2025"}</Tx>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-7.5 max-[575px]:pt-6.25 min-[575px]:max-[1199px]:pt-5 pb-8.75 max-[575px]:pb-6.25 min-[575px]:max-[1199px]:pb-5 min-[1199px]:max-[1600px]:pb-7.5 [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] ps-8.75 max-[575px]:ps-6.25 min-[575px]:max-[1199px]:ps-5 min-[1199px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1199px]:pe-5 min-[1199px]:max-[1600px]:pe-7.5 [border-top:0]">
                    <h5 className="mt-0 mb-5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-5 [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-0 before:h-px after:absolute after:[content:''] after:w-17.5 after:[background:#000] after:inset-s-0 after:h-px after:bottom-0 [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none after:[transition:0.6s] after:motion-reduce:transition-none">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Actionable Insights for Real World\n                                                Results"}</Tx>
                      </SiteLink>
                    </h5>
                    <p className="mt-0 mb-3.75 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      <Tx ns="blog-sidebar">{"Helping companies thrive through expert consulting, smart\n                                            strategies,\n                                        "}</Tx>
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-visible hover:[background:#2B3944] w-[unset] h-[unset] gap-2 [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Read\n                                                More\n                                            "}</Tx>
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.webp"
                        alt="image"
                        className="align-middle max-w-full w-full transform-[scale(1.02)] group-hover/blog-item:transform-[scale3d(1.1,1.1,1)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </SiteLink>
                    <div className="absolute bottom-0">
                      <div className="pt-3.25 pb-3.25 group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex ps-4 pe-4 items-center gap-3 flex-wrap [transition:0.5s] motion-reduce:transition-none">
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            >
                              <Tx ns="blog-sidebar">{"Icfc"}</Tx>
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" Corporate "}</Tx>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" August 20, 2025"}</Tx>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-7.5 max-[575px]:pt-6.25 min-[575px]:max-[1199px]:pt-5 pb-8.75 max-[575px]:pb-6.25 min-[575px]:max-[1199px]:pb-5 min-[1199px]:max-[1600px]:pb-7.5 [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] ps-8.75 max-[575px]:ps-6.25 min-[575px]:max-[1199px]:ps-5 min-[1199px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1199px]:pe-5 min-[1199px]:max-[1600px]:pe-7.5 [border-top:0]">
                    <h5 className="mt-0 mb-5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-5 [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-0 before:h-px after:absolute after:[content:''] after:w-17.5 after:[background:#000] after:inset-s-0 after:h-px after:bottom-0 [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none after:[transition:0.6s] after:motion-reduce:transition-none">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Mastering Markets, Models &\n                                                Momentum"}</Tx>
                      </SiteLink>
                    </h5>
                    <p className="mt-0 mb-3.75 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      <Tx ns="blog-sidebar">{"We help businesses unlock potential with clear strategies, expert\n                                        "}</Tx>
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-visible hover:[background:#2B3944] w-[unset] h-[unset] gap-2 [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Read\n                                                More\n                                            "}</Tx>
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-[50%] max-[768px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
                <div className="group/blog-item">
                  <div className="relative overflow-hidden rounded-[6px_6px_0_0]">
                    <SiteLink
                      href="/blog-details"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <SiteImage
                        src="/assets/images/logo/logo.webp"
                        alt="image"
                        className="align-middle max-w-full w-full transform-[scale(1.02)] group-hover/blog-item:transform-[scale3d(1.1,1.1,1)] [transition:all_0.8s_ease] motion-reduce:transition-none"
                      />
                    </SiteLink>
                    <div className="absolute bottom-0">
                      <div className="pt-3.25 pb-3.25 group-hover/blog-item:[background:#AB052D] [background:#2B3944] flex ps-4 pe-4 items-center gap-3 flex-wrap [transition:0.5s] motion-reduce:transition-none">
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="user"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <SiteLink
                              href="/contact-us"
                              className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#2B3944] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            >
                              <Tx ns="blog-sidebar">{"Icfc"}</Tx>
                            </SiteLink>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="tag"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" Corporate "}</Tx>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-[14px] text-[#FFFFFF]">
                            <Icon
                              name="calendar"
                              className="inline-block not-italic"
                            />
                          </div>
                          <span className="text-[#FFFFFF] text-[14px] font-medium">
                            <Tx ns="blog-sidebar">{" August 20, 2025"}</Tx>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-7.5 max-[575px]:pt-6.25 min-[575px]:max-[1199px]:pt-5 pb-8.75 max-[575px]:pb-6.25 min-[575px]:max-[1199px]:pb-5 min-[1199px]:max-[1600px]:pb-7.5 [background:#FFFFFF] [border:1px_solid_#DBDEE1] rounded-[0_0_6px_6px] ps-8.75 max-[575px]:ps-6.25 min-[575px]:max-[1199px]:ps-5 min-[1199px]:max-[1600px]:ps-7.5 pe-10 max-[575px]:pe-6.25 min-[575px]:max-[1199px]:pe-5 min-[1199px]:max-[1600px]:pe-7.5 [border-top:0]">
                    <h5 className="mt-0 mb-5 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] pb-5 [word-break:break-word] after:group-hover/blog-item:w-full relative hover:text-[#AB052D] before:absolute before:[content:''] before:w-full before:[background:#DBDEE1] before:bottom-0 before:h-px after:absolute after:[content:''] after:w-17.5 after:[background:#000] after:inset-s-0 after:h-px after:bottom-0 [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none after:[transition:0.6s] after:motion-reduce:transition-none">
                      <SiteLink
                        href="/blog-details"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Strategic Thinking for a Changing\n                                                World"}</Tx>
                      </SiteLink>
                    </h5>
                    <p className="mt-0 mb-3.75 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                      <Tx ns="blog-sidebar">{"From insights to execution, we guide businesses to smarter"}</Tx>
                    </p>
                    <div>
                      <SiteLink
                        href="/blog-details"
                        className="text-[#2B3944] [text-decoration:underline] pt-0 pr-0 pb-0 pl-0 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-1 overflow-visible hover:[background:#2B3944] w-[unset] h-[unset] gap-2 [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                      >
                        <Tx ns="blog-sidebar">{"Read\n                                                More\n                                            "}</Tx>
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="sticky max-[991px]:relative top-27.5 max-[991px]:top-[unset]">
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  <Tx ns="blog-sidebar">{"Search"}</Tx>
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
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="align-middle"
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
              <div className="mb-7.5 pt-7.5 max-[1199px]:pt-5 pr-7.5 max-[1199px]:pr-5 pb-10 max-[1199px]:pb-5 pl-7.5 max-[1199px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  <Tx ns="blog-sidebar">{"Categories"}</Tx>
                </h5>
                <div>
                  <div>
                    <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-sidebar">{"\n                                                    Business\n                                                    "}</Tx>
                          <span className="">{"(5)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-sidebar">{"\n                                                    Corporate\n                                                    "}</Tx>
                          <span className="">{"(4)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-sidebar">{"\n                                                    Consulting\n                                                    "}</Tx>
                          <span className="">{"(7)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-sidebar">{"\n                                                    AI Technology\n                                                    "}</Tx>
                          <span className="">{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li className="mb-3 list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-sidebar">{"\n                                                    Oil & Gas Energy\n                                                    "}</Tx>
                          <span className="">{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li className="list-none">
                        <SiteLink
                          href="/blog-details"
                          className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-sidebar">{"\n                                                    IT Solutions\n                                                    "}</Tx>
                          <span className="">{"(6)"}</span>
                        </SiteLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  <Tx ns="blog-sidebar">{"Recent Posts"}</Tx>
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
                          <span className=""><Tx ns="blog-sidebar">{"May 20, 2024"}</Tx></span>
                        </div>
                        <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                          <SiteLink
                            href="/blog-details"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            <Tx ns="blog-sidebar">{" Insights That Drive Business Smarter Forward"}</Tx>
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
                          <span className=""><Tx ns="blog-sidebar">{"May 20, 2024"}</Tx></span>
                        </div>
                        <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                          <SiteLink
                            href="/blog-details"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            <Tx ns="blog-sidebar">{"\n                                                        From the Minds of Business Growth Strategists "}</Tx>
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
                          <span className=""><Tx ns="blog-sidebar">{"May 20, 2024"}</Tx></span>
                        </div>
                        <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                          <SiteLink
                            href="/blog-details"
                            className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          >
                            <Tx ns="blog-sidebar">{"\n                                                        Smarter Thinking for Smarter Business Solutions "}</Tx>
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  <Tx ns="blog-sidebar">{"Popular Tags"}</Tx>
                </h5>
                <div className="flex flex-wrap gap-3">
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-sidebar">{"Technology"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-sidebar">{"Business"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-sidebar">{"Video"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-sidebar">{"Agency"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-sidebar">{"Consulting"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-sidebar">{"Financial"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-sidebar">{"Corporate"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/blog-details"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-sidebar">{"Marketing"}</Tx>
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-0 -mr-6 -ml-6 justify-center!">
          <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-0 flex-[0_0_auto]">
            <div className="mt-10">
              <div className="text-left! mt-11.25">
                <nav>
                  <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 inline-flex gap-2.5">
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-[#FFFFFF] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#AB052D] w-10 h-10 flex items-center justify-center rounded-full relative hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"1"}
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-black [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#F8F8F9] w-10 h-10 flex items-center justify-center rounded-full relative hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"2"}
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-black [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#F8F8F9] w-10 h-10 flex items-center justify-center rounded-full relative hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"3"}
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-black [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#F8F8F9] w-10 h-10 flex items-center justify-center rounded-full relative hover:[background:#AB052D] hover:border-[#AB052D] before:absolute before:text-[16px] before:leading-none before:opacity-[1] before:left-[50%] before:top-[50%] before:transform-[translate(-50%,-50%)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      ></SiteLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
