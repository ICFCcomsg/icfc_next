import { CalendarIcon } from "@/components/icons/calendar-icon";
import { ClockIcon } from "@/components/icons/clock-icon";
import type { ReactNode } from "react";
import { Tx } from "@/components/atoms/tx";
import { Icon } from "@/components/icons/icon";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { Container } from "@/components/atoms/container";

export type BlogMeta = { authorImage: string; by: string; author: string; date: string; readTime: string };

/**
 * Article page: breadcrumb, meta line, the post body (children), tags and share bar,
 * comment form, and a sticky sidebar. `ns` is the post's translation namespace.
 */
export function BlogPostTemplate({
  route,
  ns,
  title,
  description,
  background = "/assets/bg/breadcrumb-bg-thumb-01.webp",
  meta,
  tags,
  sidebar,
  children,
}: {
  route: string;
  ns: string;
  title: string;
  description: string;
  background?: string;
  meta: BlogMeta;
  tags: [label: string, href: string][];
  sidebar?: ReactNode;
  children: ReactNode;
}) {
  return (
    <SitePageTemplate route={route}>
      <main>
        <SiteBreadcrumb
          title={<Tx ns={ns}>{title}</Tx>}
          description={<Tx ns={ns}>{description}</Tx>}
          background={background}
        />
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
                              src={meta.authorImage}
                              alt=""
                              className="align-middle max-w-full w-10 h-10 rounded-full"
                            />
                          </span>
                          <span className="">
                            <Tx ns={ns}>{meta.by}</Tx>
                            <SiteLink
                              href="/contact-us"
                              className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                            >
                              <Tx ns={ns}>{meta.author}</Tx>
                            </SiteLink>
                          </span>
                        </span>
                      </li>
                      <li className="list-none">
                        <span className="flex items-center gap-2 text-[13px]">
                          <CalendarIcon className="align-middle w-3.75 h-3.75" />
                          <span className=""><Tx ns={ns}>{meta.date}</Tx></span>
                        </span>
                      </li>
                      <li className="list-none">
                        <span className="flex items-center gap-2 text-[13px]">
                          <ClockIcon className="align-middle w-3.75 h-3.75" />
                          <span className=""><Tx ns={ns}>{meta.readTime}</Tx></span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  {children}
                  <div className="mt-10 pt-5 pb-5 items-center justify-between flex gap-7.5 flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                    <div className="items-center flex flex-wrap gap-3">
                      <span className="font-semibold pe-2.5 text-[#2B3944]">
                        <Tx ns={ns}>{"Tags:"}</Tx>
                      </span>
                      {tags.map(([label, href]) => (
                        <SiteLink
                          key={label}
                          href={href}
                          className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                        >
                          <Tx ns={ns}>{label}</Tx>
                        </SiteLink>
                      ))}
                    </div>
                    <div>
                      <span className="font-semibold pe-2.5 text-[#2B3944]">
                        <Tx ns={ns}>{"Share:"}</Tx>
                      </span>
                      <div className="gap-3.75">
                        <SiteLink
                          href="/contact-us"
                          className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Icon
                            name="facebook"
                            className="inline-block not-italic"
                          />
                        </SiteLink>
                        <SiteLink
                          href="/contact-us"
                          className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Icon
                            name="x"
                            className="inline-block not-italic"
                          />
                        </SiteLink>
                        <SiteLink
                          href="/contact-us"
                          className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Icon
                            name="linkedin"
                            className="inline-block not-italic"
                          />
                        </SiteLink>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                      <Tx ns={ns}>{"Leave a Comment"}</Tx>
                    </h3>
                    <EmailForm>
                      <div className="flex flex-wrap -mt-6 -mr-6 -ml-6">
                        <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                          <input
                            type="text"
                            placeholder="Your Name"
                            aria-label="Your Name"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                        <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                          <input
                            type="email"
                            placeholder="Your Email"
                            aria-label="Your Email"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                        <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                          <textarea
                            placeholder="Write Message"
                            defaultValue=""
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] resize-y pt-3.5 pr-6 pb-3.5 pl-6 bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                        <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                          <button
                            type="submit"
                            className="rounded-[50px] mt-0 mr-0 mb-0 ml-0 text-[17px] leading-[inherit] normal-case pt-3.5 pr-6.5 pb-3.5 pl-6.5 text-[#FFFFFF] [border:none] [background:#AB052D] inline-flex items-center justify-center font-medium relative z-1 overflow-hidden hover:[background:#2B3944] hover:text-[#FFFFFF] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                          >
                            <Tx ns={ns}>{"Post Comment"}</Tx>
                          </button>
                        </div>
                      </div>
                    </EmailForm>
                  </div>
                </div>
              </div>
              {sidebar && (
              <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
                <div className="sticky max-[991px]:relative top-27.5 max-[991px]:top-[unset]">
                  {sidebar}
                </div>
              </div>
              )}
            </div>
          </Container>
        </section>
      </main>
    </SitePageTemplate>
  );
}
