import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";

export function BlogPageContent() {
  return (
    <SitePageTemplate route="blog.html">
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
    <div className="-mx-3 flex flex-wrap gap-y-6">
      <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%] md:w-[50%]">
        <div>
          <div>
            <SiteLink
              href="/blogcybersecurity.html"
              className="transition-colors hover:text-[#AB052D]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-01.webp"
                alt="image"
                className="max-w-full h-auto"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon name="user" />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon name="tag" />
                  </div>
                  <span>{"Cybersecurity"}</span>
                </div>
                <div>
                  <div>
                    <Icon name="calendar" />
                  </div>
                  <span>{"March 15, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              <SiteLink
                href="/blogcybersecurity.html"
                className="transition-colors hover:text-[#AB052D]"
              >
                {
                  "Singapore Cybersecurity Act 2024 amendments: what CII operators need to certify now"
                }
              </SiteLink>
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "Understand the latest amendments and mandatory CTM Level 5 requirements for CII operators by 2027. Complete guide to compliance."
              }
            </p>
            <div>
              <SiteLink
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                href="/blogcybersecurity.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%] md:w-[50%]">
        <div>
          <div>
            <SiteLink
              href="/blogedg.html"
              className="transition-colors hover:text-[#AB052D]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-04.webp"
                alt="image"
                className="max-w-full h-auto"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon name="user" />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon name="tag" />
                  </div>
                  <span>{"Funding"}</span>
                </div>
                <div>
                  <div>
                    <Icon name="calendar" />
                  </div>
                  <span>{"March 10, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              <SiteLink
                href="/blogedg.html"
                className="transition-colors hover:text-[#AB052D]"
              >
                {
                  "How to apply for the Enterprise Singapore EDG grant for ISO certification in Singapore (2026 guide)"
                }
              </SiteLink>
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "Step-by-step guide to EDG grant application, eligibility criteria, and how ICFC helps maximise your co-funding for ISO certifications."
              }
            </p>
            <div>
              <SiteLink
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                href="/blogedg.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%] md:w-[50%]">
        <div>
          <div>
            <SiteLink
              href="/blogGreenPlan2030.html"
              className="transition-colors hover:text-[#AB052D]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-08.webp"
                alt="image"
                className="max-w-full h-auto"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon name="user" />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon name="tag" />
                  </div>
                  <span>{"Sustainability"}</span>
                </div>
                <div>
                  <div>
                    <Icon name="calendar" />
                  </div>
                  <span>{"March 5, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              <SiteLink
                href="/blogGreenPlan2030.html"
                className="transition-colors hover:text-[#AB052D]"
              >
                {
                  "Singapore Green Plan 2030 and ISO 14001: what manufacturers need to do now"
                }
              </SiteLink>
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "Align your environmental management system with Singapore's national sustainability targets and ESG reporting requirements."
              }
            </p>
            <div>
              <SiteLink
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                href="/blogGreenPlan2030.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%] md:w-[50%]">
        <div>
          <div>
            <SiteLink
              href="/blog_ISO42001_AI.html"
              className="transition-colors hover:text-[#AB052D]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-05.webp"
                alt="image"
                className="max-w-full h-auto"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon name="user" />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon name="tag" />
                  </div>
                  <span>{"AI Governance"}</span>
                </div>
                <div>
                  <div>
                    <Icon name="calendar" />
                  </div>
                  <span>{"February 28, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              <SiteLink
                href="/blog_ISO42001_AI.html"
                className="transition-colors hover:text-[#AB052D]"
              >
                {
                  "ISO/IEC 42001: what Singapore AI companies need to know in 2026"
                }
              </SiteLink>
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "First international AI management system standard — alignment with IMDA AI Verify, MAS AI guidelines, and EDG grant."
              }
            </p>
            <div>
              <SiteLink
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                href="/blog_ISO42001_AI.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%] md:w-[50%]">
        <div>
          <div>
            <SiteLink
              href="/blog_ISO27701_vs_PDPA_Singapore.html"
              className="transition-colors hover:text-[#AB052D]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-04.webp"
                alt="image"
                className="max-w-full h-auto"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon name="user" />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon name="tag" />
                  </div>
                  <span>{"Data Privacy"}</span>
                </div>
                <div>
                  <div>
                    <Icon name="calendar" />
                  </div>
                  <span>{"February 20, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              <SiteLink
                href="/blog_ISO27701_vs_PDPA_Singapore.html"
                className="transition-colors hover:text-[#AB052D]"
              >
                {
                  "ISO 27701 vs PDPA compliance: which comes first for Singapore businesses?"
                }
              </SiteLink>
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "Compare international privacy certification and Singapore's PDPA — sequencing recommendations and integrated approach."
              }
            </p>
            <div>
              <SiteLink
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                href="/blog_ISO27701_vs_PDPA_Singapore.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%] md:w-[50%]">
        <div>
          <div>
            <SiteLink
              href="/blog_LeadAuditor_vs_InternalAuditor.html"
              className="transition-colors hover:text-[#AB052D]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-05.webp"
                alt="image"
                className="max-w-full h-auto"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon name="user" />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon name="tag" />
                  </div>
                  <span>{"Training"}</span>
                </div>
                <div>
                  <div>
                    <Icon name="calendar" />
                  </div>
                  <span>{"February 15, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              <SiteLink
                href="/blog_LeadAuditor_vs_InternalAuditor.html"
                className="transition-colors hover:text-[#AB052D]"
              >
                {
                  "Lead auditor vs internal auditor training: which course does your team need?"
                }
              </SiteLink>
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "Difference between CQI/IRCA lead auditor and internal auditor certifications — who needs which and SkillsFuture funding."
              }
            </p>
            <div>
              <SiteLink
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                href="/blog_LeadAuditor_vs_InternalAuditor.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%] md:w-[50%]">
        <div>
          <div>
            <SiteLink
              href="/blog_ISO27701.html"
              className="transition-colors hover:text-[#AB052D]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-01.webp"
                alt="image"
                className="max-w-full h-auto"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon name="user" />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon name="tag" />
                  </div>
                  <span>{"Cybersecurity"}</span>
                </div>
                <div>
                  <div>
                    <Icon name="calendar" />
                  </div>
                  <span>{"February 10, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              <SiteLink
                href="/blog_ISO27701.html"
                className="transition-colors hover:text-[#AB052D]"
              >
                {
                  "ISO 27001 certification for cloud migration: what Singapore enterprises need to know"
                }
              </SiteLink>
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "How to maintain ISMS compliance while migrating legacy systems to AWS, Azure, or GCP."
              }
            </p>
            <div>
              <SiteLink
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                href="/blog_LegacyToCloud_ISO27001.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%] md:w-[50%]">
        <div>
          <div>
            <SiteLink
              href="/blog_mas.html"
              className="transition-colors hover:text-[#AB052D]"
            >
              <SiteImage
                src="/assets/images/blog/blog-thumb-08.webp"
                alt="image"
                className="max-w-full h-auto"
              />
            </SiteLink>
            <div>
              <div>
                <div>
                  <div>
                    <Icon name="user" />
                  </div>
                  <span>
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
                      {"ICFC"}
                    </SiteLink>
                  </span>
                </div>
                <div>
                  <div>
                    <Icon name="tag" />
                  </div>
                  <span>{"Financial Services"}</span>
                </div>
                <div>
                  <div>
                    <Icon name="calendar" />
                  </div>
                  <span>{"February 5, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              <SiteLink
                href="/blog_mas.html"
                className="transition-colors hover:text-[#AB052D]"
              >
                {
                  "MAS Technology Risk Management Guidelines and ISO 27001: aligning compliance for financial institutions"
                }
              </SiteLink>
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "How Singapore banks, insurers, and FinTech can satisfy MAS TRM requirements through ISO 27001 certification."
              }
            </p>
            <div>
              <SiteLink
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
                href="/blog_mas.html"
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
          href="/blog_wsh_mom.html"
          className="transition-colors hover:text-[#AB052D]"
        >
          <SiteImage
            src="/assets/images/blog/blog-thumb-04.webp"
            alt="image"
            className="max-w-full h-auto"
          />
        </SiteLink>
        <div>
          <div>
            <div>
              <div>
                <Icon name="user" />
              </div>
              <span>
                <SiteLink
                  href="/contact-us.html"
                  className="transition-colors hover:text-[#AB052D]"
                >
                  {"ICFC"}
                </SiteLink>
              </span>
            </div>
            <div>
              <div>
                <Icon name="tag" />
              </div>
              <span>{"E-Waste"}</span>
            </div>
            <div>
              <div>
                <Icon name="calendar" />
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
      href="/blog_wsh_mom.html"
      className="transition-colors hover:text-[#AB052D]"
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
      className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
      href="/contact-us.html"
    >
      {"Read More"}
    </SiteLink>
  );
}

function ColXl4Section() {
  return (
    <div className="w-full shrink-0 px-3 xl:w-[33.33333333333333%] lg:w-[33.33333333333333%] md:w-[50%]">
      <div>
        <div>
          <SiteLink
            href="/blog_bizsafe.html"
            className="transition-colors hover:text-[#AB052D]"
          >
            <SiteImage
              src="/assets/images/blog/blog-thumb-05.webp"
              alt="image"
              className="max-w-full h-auto"
            />
          </SiteLink>
          <div>
            <div>
              <div>
                <div>
                  <Icon name="user" />
                </div>
                <span>
                  <SiteLink
                    href="/contact-us.html"
                    className="transition-colors hover:text-[#AB052D]"
                  >
                    {"ICFC"}
                  </SiteLink>
                </span>
              </div>
              <div>
                <div>
                  <Icon name="tag" />
                </div>
                <span>{"Workplace Safety"}</span>
              </div>
              <div>
                <div>
                  <Icon name="calendar" />
                </div>
                <span>{"January 20, 2026"}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
            <SiteLink
              href="/blog_bizsafe.html"
              className="transition-colors hover:text-[#AB052D]"
            >
              {
                "bizSAFE STAR and ISO 45001: the direct pathway for Singapore contractors"
              }
            </SiteLink>
          </h5>
          <p className="leading-relaxed mb-4">
            {
              "How ISO 45001 certification gives you direct entry to bizSAFE STAR, bypassing Levels 1–4."
            }
          </p>
          <div>
            <SiteLink
              className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[0] rounded-[50px] [font-weight:500] relative z-[1] [overflow:visible] [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset] gap-[8px] [text-decoration:underline]"
              href="/contact-us.html"
            >
              {"Read More"}
            </SiteLink>
          </div>
        </div>
      </div>
    </div>
  );
}
