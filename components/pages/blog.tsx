import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";

export function BlogPageContent() {
  return (
    <SitePageTemplate
      route="blog.html"
      stylesheets={[
        "/assets/css/vendor/bootstrap.min.css",
        "/assets/css/vendor/animate.min.css",
        "/assets/css/plugins/swiper.min.css",
        "/assets/css/plugins/nice-select.css",
        "/assets/css/plugins/flatpickr.min.css",
        "/assets/css/plugins/nouislider.min.css",
        "/assets/css/vendor/magnific-popup.css",
        "/assets/css/vendor/odometer.min.css",
        "/assets/css/vendor/spacing.css",
        "https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css",
        "/assets/css/main.css?v=20260503",
        "/assets/css/whatsapp-float.css",
        "/styles/pages/blog.css",
      ]}
    >
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
      className="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space"
    />
  );
}

function RowSection() {
  return (
    <div className="row g-5">
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="rs-blog-item">
          <div className="rs-blog-thumb">
            <SiteLink href="/blogcybersecurity.html">
              <SiteImage
                src="/assets/images/blog/blog-thumb-01.webp"
                alt="image"
              />
            </SiteLink>
            <div className="rs-blog-meta">
              <div className="rs-blog-meta-inner">
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <span>
                    <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
                  </span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-price-tag-3-line"></i>
                  </div>
                  <span>{"Cybersecurity"}</span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>{"March 15, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-blog-content">
            <h5 className="rs-blog-title">
              <SiteLink href="/blogcybersecurity.html">
                {
                  "Singapore Cybersecurity Act 2024 amendments: what CII operators need to certify now"
                }
              </SiteLink>
            </h5>
            <p className="rs-blog-desc">
              {
                "Understand the latest amendments and mandatory CTM Level 5 requirements for CII operators by 2027. Complete guide to compliance."
              }
            </p>
            <div className="rs-blog-btn">
              <SiteLink
                className="rs-btn has-icon has-text has-text-underline fw-5"
                href="/blogcybersecurity.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="rs-blog-item">
          <div className="rs-blog-thumb">
            <SiteLink href="/blogedg.html">
              <SiteImage
                src="/assets/images/blog/blog-thumb-04.webp"
                alt="image"
              />
            </SiteLink>
            <div className="rs-blog-meta">
              <div className="rs-blog-meta-inner">
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <span>
                    <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
                  </span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-price-tag-3-line"></i>
                  </div>
                  <span>{"Funding"}</span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>{"March 10, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-blog-content">
            <h5 className="rs-blog-title">
              <SiteLink href="/blogedg.html">
                {
                  "How to apply for the Enterprise Singapore EDG grant for ISO certification in Singapore (2026 guide)"
                }
              </SiteLink>
            </h5>
            <p className="rs-blog-desc">
              {
                "Step-by-step guide to EDG grant application, eligibility criteria, and how ICFC helps maximise your co-funding for ISO certifications."
              }
            </p>
            <div className="rs-blog-btn">
              <SiteLink
                className="rs-btn has-icon has-text has-text-underline fw-5"
                href="/blogedg.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="rs-blog-item">
          <div className="rs-blog-thumb">
            <SiteLink href="/blogGreenPlan2030.html">
              <SiteImage
                src="/assets/images/blog/blog-thumb-08.webp"
                alt="image"
              />
            </SiteLink>
            <div className="rs-blog-meta">
              <div className="rs-blog-meta-inner">
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <span>
                    <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
                  </span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-price-tag-3-line"></i>
                  </div>
                  <span>{"Sustainability"}</span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>{"March 5, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-blog-content">
            <h5 className="rs-blog-title">
              <SiteLink href="/blogGreenPlan2030.html">
                {
                  "Singapore Green Plan 2030 and ISO 14001: what manufacturers need to do now"
                }
              </SiteLink>
            </h5>
            <p className="rs-blog-desc">
              {
                "Align your environmental management system with Singapore's national sustainability targets and ESG reporting requirements."
              }
            </p>
            <div className="rs-blog-btn">
              <SiteLink
                className="rs-btn has-icon has-text has-text-underline fw-5"
                href="/blogGreenPlan2030.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="rs-blog-item">
          <div className="rs-blog-thumb">
            <SiteLink href="/blog_ISO42001_AI.html">
              <SiteImage
                src="/assets/images/blog/blog-thumb-05.webp"
                alt="image"
              />
            </SiteLink>
            <div className="rs-blog-meta">
              <div className="rs-blog-meta-inner">
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <span>
                    <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
                  </span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-price-tag-3-line"></i>
                  </div>
                  <span>{"AI Governance"}</span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>{"February 28, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-blog-content">
            <h5 className="rs-blog-title">
              <SiteLink href="/blog_ISO42001_AI.html">
                {
                  "ISO/IEC 42001: what Singapore AI companies need to know in 2026"
                }
              </SiteLink>
            </h5>
            <p className="rs-blog-desc">
              {
                "First international AI management system standard — alignment with IMDA AI Verify, MAS AI guidelines, and EDG grant."
              }
            </p>
            <div className="rs-blog-btn">
              <SiteLink
                className="rs-btn has-icon has-text has-text-underline fw-5"
                href="/blog_ISO42001_AI.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="rs-blog-item">
          <div className="rs-blog-thumb">
            <SiteLink href="/blog_ISO27701_vs_PDPA_Singapore.html">
              <SiteImage
                src="/assets/images/blog/blog-thumb-04.webp"
                alt="image"
              />
            </SiteLink>
            <div className="rs-blog-meta">
              <div className="rs-blog-meta-inner">
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <span>
                    <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
                  </span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-price-tag-3-line"></i>
                  </div>
                  <span>{"Data Privacy"}</span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>{"February 20, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-blog-content">
            <h5 className="rs-blog-title">
              <SiteLink href="/blog_ISO27701_vs_PDPA_Singapore.html">
                {
                  "ISO 27701 vs PDPA compliance: which comes first for Singapore businesses?"
                }
              </SiteLink>
            </h5>
            <p className="rs-blog-desc">
              {
                "Compare international privacy certification and Singapore's PDPA — sequencing recommendations and integrated approach."
              }
            </p>
            <div className="rs-blog-btn">
              <SiteLink
                className="rs-btn has-icon has-text has-text-underline fw-5"
                href="/blog_ISO27701_vs_PDPA_Singapore.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="rs-blog-item">
          <div className="rs-blog-thumb">
            <SiteLink href="/blog_LeadAuditor_vs_InternalAuditor.html">
              <SiteImage
                src="/assets/images/blog/blog-thumb-05.webp"
                alt="image"
              />
            </SiteLink>
            <div className="rs-blog-meta">
              <div className="rs-blog-meta-inner">
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <span>
                    <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
                  </span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-price-tag-3-line"></i>
                  </div>
                  <span>{"Training"}</span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>{"February 15, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-blog-content">
            <h5 className="rs-blog-title">
              <SiteLink href="/blog_LeadAuditor_vs_InternalAuditor.html">
                {
                  "Lead auditor vs internal auditor training: which course does your team need?"
                }
              </SiteLink>
            </h5>
            <p className="rs-blog-desc">
              {
                "Difference between CQI/IRCA lead auditor and internal auditor certifications — who needs which and SkillsFuture funding."
              }
            </p>
            <div className="rs-blog-btn">
              <SiteLink
                className="rs-btn has-icon has-text has-text-underline fw-5"
                href="/blog_LeadAuditor_vs_InternalAuditor.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="rs-blog-item">
          <div className="rs-blog-thumb">
            <SiteLink href="/blog_ISO27701.html">
              <SiteImage
                src="/assets/images/blog/blog-thumb-01.webp"
                alt="image"
              />
            </SiteLink>
            <div className="rs-blog-meta">
              <div className="rs-blog-meta-inner">
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <span>
                    <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
                  </span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-price-tag-3-line"></i>
                  </div>
                  <span>{"Cybersecurity"}</span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>{"February 10, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-blog-content">
            <h5 className="rs-blog-title">
              <SiteLink href="/blog_ISO27701.html">
                {
                  "ISO 27001 certification for cloud migration: what Singapore enterprises need to know"
                }
              </SiteLink>
            </h5>
            <p className="rs-blog-desc">
              {
                "How to maintain ISMS compliance while migrating legacy systems to AWS, Azure, or GCP."
              }
            </p>
            <div className="rs-blog-btn">
              <SiteLink
                className="rs-btn has-icon has-text has-text-underline fw-5"
                href="/blog_LegacyToCloud_ISO27001.html"
              >
                {"Read More"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="rs-blog-item">
          <div className="rs-blog-thumb">
            <SiteLink href="/blog_mas.html">
              <SiteImage
                src="/assets/images/blog/blog-thumb-08.webp"
                alt="image"
              />
            </SiteLink>
            <div className="rs-blog-meta">
              <div className="rs-blog-meta-inner">
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-user-line"></i>
                  </div>
                  <span>
                    <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
                  </span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-price-tag-3-line"></i>
                  </div>
                  <span>{"Financial Services"}</span>
                </div>
                <div className="rs-blog-meta-item">
                  <div className="rs-blog-meta-icon">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <span>{"February 5, 2026"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rs-blog-content">
            <h5 className="rs-blog-title">
              <SiteLink href="/blog_mas.html">
                {
                  "MAS Technology Risk Management Guidelines and ISO 27001: aligning compliance for financial institutions"
                }
              </SiteLink>
            </h5>
            <p className="rs-blog-desc">
              {
                "How Singapore banks, insurers, and FinTech can satisfy MAS TRM requirements through ISO 27001 certification."
              }
            </p>
            <div className="rs-blog-btn">
              <SiteLink
                className="rs-btn has-icon has-text has-text-underline fw-5"
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
    <div className="rs-blog-item">
      <div className="rs-blog-thumb">
        <SiteLink href="/blog_wsh_mom.html">
          <SiteImage src="/assets/images/blog/blog-thumb-04.webp" alt="image" />
        </SiteLink>
        <div className="rs-blog-meta">
          <div className="rs-blog-meta-inner">
            <div className="rs-blog-meta-item">
              <div className="rs-blog-meta-icon">
                <i className="ri-user-line"></i>
              </div>
              <span>
                <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
              </span>
            </div>
            <div className="rs-blog-meta-item">
              <div className="rs-blog-meta-icon">
                <i className="ri-price-tag-3-line"></i>
              </div>
              <span>{"E-Waste"}</span>
            </div>
            <div className="rs-blog-meta-item">
              <div className="rs-blog-meta-icon">
                <i className="ri-calendar-line"></i>
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
    <SiteLink href="/blog_wsh_mom.html">
      {
        "MOM WSH Act and ISO 45001: a practical integration guide for Singapore contractors"
      }
      <div className="rs-blog-btn"></div>
    </SiteLink>
  );
}

function BtnSection() {
  return (
    <SiteLink
      className="rs-btn has-icon has-text has-text-underline fw-5"
      href="/contact-us.html"
    >
      {"Read More"}
    </SiteLink>
  );
}

function ColXl4Section() {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="rs-blog-item">
        <div className="rs-blog-thumb">
          <SiteLink href="/blog_bizsafe.html">
            <SiteImage
              src="/assets/images/blog/blog-thumb-05.webp"
              alt="image"
            />
          </SiteLink>
          <div className="rs-blog-meta">
            <div className="rs-blog-meta-inner">
              <div className="rs-blog-meta-item">
                <div className="rs-blog-meta-icon">
                  <i className="ri-user-line"></i>
                </div>
                <span>
                  <SiteLink href="/contact-us.html">{"ICFC"}</SiteLink>
                </span>
              </div>
              <div className="rs-blog-meta-item">
                <div className="rs-blog-meta-icon">
                  <i className="ri-price-tag-3-line"></i>
                </div>
                <span>{"Workplace Safety"}</span>
              </div>
              <div className="rs-blog-meta-item">
                <div className="rs-blog-meta-icon">
                  <i className="ri-calendar-line"></i>
                </div>
                <span>{"January 20, 2026"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rs-blog-content">
          <h5 className="rs-blog-title">
            <SiteLink href="/blog_bizsafe.html">
              {
                "bizSAFE STAR and ISO 45001: the direct pathway for Singapore contractors"
              }
            </SiteLink>
          </h5>
          <p className="rs-blog-desc">
            {
              "How ISO 45001 certification gives you direct entry to bizSAFE STAR, bypassing Levels 1–4."
            }
          </p>
          <div className="rs-blog-btn">
            <SiteLink
              className="rs-btn has-icon has-text has-text-underline fw-5"
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
