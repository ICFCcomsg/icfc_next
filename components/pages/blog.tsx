import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";

export function BlogPageContent() {
  return (
    <SitePageTemplate route="blog">
      <main>
        <BreadcrumbAreaSection />
        <RowSection />
        <BlogItemSection />
        <ASection />
        <BtnSection />
        <ColXl4Section />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="Blog"
      description="Latest insights on ISO certifications, cybersecurity, sustainability, and business compliance in Singapore"
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}

function RowSection() {
  return (
    <div className="flex flex-wrap mt-[calc(-1_*_3rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
      <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
        <div>
          <div>
            <SiteLink
              href="/blogcybersecurity"
              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-01.webp"
                alt="image"
                className="[vertical-align:middle] max-w-full"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon
                      name="user"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="tag"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"Cybersecurity"}</span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="calendar"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"March 15, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              <SiteLink
                href="/blogcybersecurity"
                className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
              >
                {
                  "Singapore Cybersecurity Act 2024 amendments: what CII operators need to certify now"
                }
              </SiteLink>
            </h5>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Understand the latest amendments and mandatory CTM Level 5 requirements for CII operators by 2027. Complete guide to compliance."
              }
            </p>
            <div>
              <SiteLink
                href="/blogcybersecurity"
                className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
        <div>
          <div>
            <SiteLink
              href="/blogedg"
              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-04.webp"
                alt="image"
                className="[vertical-align:middle] max-w-full"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon
                      name="user"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="tag"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"Funding"}</span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="calendar"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"March 10, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              <SiteLink
                href="/blogedg"
                className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
              >
                {
                  "How to apply for the Enterprise Singapore EDG grant for ISO certification in Singapore (2026 guide)"
                }
              </SiteLink>
            </h5>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Step-by-step guide to EDG grant application, eligibility criteria, and how ICFC helps maximise your co-funding for ISO certifications."
              }
            </p>
            <div>
              <SiteLink
                href="/blogedg"
                className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
        <div>
          <div>
            <SiteLink
              href="/blogGreenPlan2030"
              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-08.webp"
                alt="image"
                className="[vertical-align:middle] max-w-full"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon
                      name="user"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="tag"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"Sustainability"}</span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="calendar"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"March 5, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              <SiteLink
                href="/blogGreenPlan2030"
                className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
              >
                {
                  "Singapore Green Plan 2030 and ISO 14001: what manufacturers need to do now"
                }
              </SiteLink>
            </h5>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Align your environmental management system with Singapore's national sustainability targets and ESG reporting requirements."
              }
            </p>
            <div>
              <SiteLink
                href="/blogGreenPlan2030"
                className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
        <div>
          <div>
            <SiteLink
              href="/blog_ISO42001_AI"
              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-05.webp"
                alt="image"
                className="[vertical-align:middle] max-w-full"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon
                      name="user"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="tag"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"AI Governance"}</span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="calendar"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"February 28, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              <SiteLink
                href="/blog_ISO42001_AI"
                className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
              >
                {
                  "ISO/IEC 42001: what Singapore AI companies need to know in 2026"
                }
              </SiteLink>
            </h5>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "First international AI management system standard — alignment with IMDA AI Verify, MAS AI guidelines, and EDG grant."
              }
            </p>
            <div>
              <SiteLink
                href="/blog_ISO42001_AI"
                className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
        <div>
          <div>
            <SiteLink
              href="/blog_ISO27701_vs_PDPA_Singapore"
              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-04.webp"
                alt="image"
                className="[vertical-align:middle] max-w-full"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon
                      name="user"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="tag"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"Data Privacy"}</span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="calendar"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"February 20, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              <SiteLink
                href="/blog_ISO27701_vs_PDPA_Singapore"
                className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
              >
                {
                  "ISO 27701 vs PDPA compliance: which comes first for Singapore businesses?"
                }
              </SiteLink>
            </h5>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Compare international privacy certification and Singapore's PDPA — sequencing recommendations and integrated approach."
              }
            </p>
            <div>
              <SiteLink
                href="/blog_ISO27701_vs_PDPA_Singapore"
                className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
        <div>
          <div>
            <SiteLink
              href="/blog_LeadAuditor_vs_InternalAuditor"
              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-05.webp"
                alt="image"
                className="[vertical-align:middle] max-w-full"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon
                      name="user"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="tag"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"Training"}</span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="calendar"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"February 15, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              <SiteLink
                href="/blog_LeadAuditor_vs_InternalAuditor"
                className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
              >
                {
                  "Lead auditor vs internal auditor training: which course does your team need?"
                }
              </SiteLink>
            </h5>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Difference between CQI/IRCA lead auditor and internal auditor certifications — who needs which and SkillsFuture funding."
              }
            </p>
            <div>
              <SiteLink
                href="/blog_LeadAuditor_vs_InternalAuditor"
                className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
        <div>
          <div>
            <SiteLink
              href="/blog_ISO27701"
              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-01.webp"
                alt="image"
                className="[vertical-align:middle] max-w-full"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon
                      name="user"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="tag"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"Cybersecurity"}</span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="calendar"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"February 10, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              <SiteLink
                href="/blog_ISO27701"
                className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
              >
                {
                  "ISO 27001 certification for cloud migration: what Singapore enterprises need to know"
                }
              </SiteLink>
            </h5>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "How to maintain ISMS compliance while migrating legacy systems to AWS, Azure, or GCP."
              }
            </p>
            <div>
              <SiteLink
                href="/blog_LegacyToCloud_ISO27001"
                className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full min-[768px]:max-[992px]:w-[50%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
        <div>
          <div>
            <SiteLink
              href="/blog_mas"
              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-08.webp"
                alt="image"
                className="[vertical-align:middle] max-w-full"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon
                      name="user"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="tag"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"Financial Services"}</span>
                </div>
                <div>
                  <div>
                    <Icon
                      name="calendar"
                      className="inline-block [font-style:normal]"
                    />
                  </div>
                  <span>{"February 5, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              <SiteLink
                href="/blog_mas"
                className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
              >
                {
                  "MAS Technology Risk Management Guidelines and ISO 27001: aligning compliance for financial institutions"
                }
              </SiteLink>
            </h5>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "How Singapore banks, insurers, and FinTech can satisfy MAS TRM requirements through ISO 27001 certification."
              }
            </p>
            <div>
              <SiteLink
                href="/blog_mas"
                className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogItemSection() {
  return (
    <div>
      <div>
        <SiteLink
          href="/blog_wsh_mom"
          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
        >
          <SiteImage
            src="/assets/images/blog/blog-thumb-04.webp"
            alt="image"
            className="[vertical-align:middle] max-w-full"
          />
        </SiteLink>
        <div>
          <div>
            <div>
              <div>
                <Icon
                  name="user"
                  className="inline-block [font-style:normal]"
                />
              </div>
              <span>
                <SiteLink
                  href="/contact-us"
                  className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                >
                  {"ICFC"}
                </SiteLink>
              </span>
            </div>
            <div>
              <div>
                <Icon name="tag" className="inline-block [font-style:normal]" />
              </div>
              <span>{"E-Waste"}</span>
            </div>
            <div>
              <div>
                <Icon
                  name="calendar"
                  className="inline-block [font-style:normal]"
                />
              </div>
              <span>{"January 28, 2026"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ASection() {
  return (
    <SiteLink
      href="/blog_wsh_mom"
      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
    >
      {
        "MOM WSH Act and ISO 45001: a practical integration guide for Singapore contractors"
      }
      <div></div>
    </SiteLink>
  );
}

function BtnSection() {
  return (
    <SiteLink
      href="/contact-us"
      className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
    >
      {"Read More"}
    </SiteLink>
  );
}

function ColXl4Section() {
  return (
    <div className="[flex:0_0_auto] w-[33.33333333%] min-[768px]:max-[992px]:w-[50%]">
      <div>
        <div>
          <SiteLink
            href="/blog_bizsafe"
            className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
          >
            <SiteImage
              src="/assets/images/blog/blog-thumb-05.webp"
              alt="image"
              className="[vertical-align:middle] max-w-full"
            />
          </SiteLink>
          <div>
            <div>
              <div>
                <div>
                  <Icon
                    name="user"
                    className="inline-block [font-style:normal]"
                  />
                </div>
                <span>
                  <SiteLink
                    href="/contact-us"
                    className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
                  >
                    {"ICFC"}
                  </SiteLink>
                </span>
              </div>
              <div>
                <div>
                  <Icon
                    name="tag"
                    className="inline-block [font-style:normal]"
                  />
                </div>
                <span>{"Workplace Safety"}</span>
              </div>
              <div>
                <div>
                  <Icon
                    name="calendar"
                    className="inline-block [font-style:normal]"
                  />
                </div>
                <span>{"January 20, 2026"}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
            <SiteLink
              href="/blog_bizsafe"
              className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent]"
            >
              {
                "bizSAFE STAR and ISO 45001: the direct pathway for Singapore contractors"
              }
            </SiteLink>
          </h5>
          <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            {
              "How ISO 45001 certification gives you direct entry to bizSAFE STAR, bypassing Levels 1–4."
            }
          </p>
          <div>
            <SiteLink
              href="/contact-us"
              className="text-[#2B3944] [text-decoration:underline] pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] hover:[background:#2B3944] w-[unset] h-[unset] gap-[8px]"
            >
              {"Read More"}
            </SiteLink>
          </div>
        </div>
      </div>
    </div>
  );
}
