import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogSidebarPageContent() {
  return (
    <SitePageTemplate
      route="blog-sidebar.html"
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
        "/assets/css/vendor/remixicon.css",
        "/assets/css/main.css",
        "/assets/css/whatsapp-float.css",
        "/styles/pages/blog-sidebar.css",
      ]}
    >
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
      className="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="rs-postbox-area section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-8 col-lg-8 rs-blog-two">
            <div className="row g-5">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="rs-blog-item">
                  <div className="rs-blog-thumb">
                    <SiteLink href="/blog-details.html">
                      <SiteImage
                        src="/assets/images/logo/logo.png"
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
                            <SiteLink href="/contact-us.html">
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-price-tag-3-line"></i>
                          </div>
                          <span>{" Corporate "}</span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-calendar-line"></i>
                          </div>
                          <span>{" August 20, 2025"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rs-blog-content">
                    <h5 className="rs-blog-title">
                      <SiteLink href="/blog-details.html">
                        {
                          "Smarter Thinking for Smarter\n                                                Business\n                                                Solutions"
                        }
                      </SiteLink>
                    </h5>
                    <p className="rs-blog-desc">
                      {
                        "This retains a dynamic action oriented feel and aligns with\n                                            consulting core."
                      }
                    </p>
                    <div className="rs-blog-btn">
                      <SiteLink
                        className="rs-btn has-icon has-text has-text-underline fw-5"
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
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="rs-blog-item">
                  <div className="rs-blog-thumb">
                    <SiteLink href="/blog-details.html">
                      <SiteImage
                        src="/assets/images/logo/logo.png"
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
                            <SiteLink href="/contact-us.html">
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-price-tag-3-line"></i>
                          </div>
                          <span>{" Corporate "}</span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-calendar-line"></i>
                          </div>
                          <span>{" August 20, 2025"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rs-blog-content">
                    <h5 className="rs-blog-title">
                      <SiteLink href="/blog-details.html">
                        {
                          "From the Minds of Business Growth\n                                                Strategists"
                        }
                      </SiteLink>
                    </h5>
                    <p className="rs-blog-desc">
                      {
                        "Consulting empowers businesses with data-driven strategies and\n                                            innovative solutions"
                      }
                    </p>
                    <div className="rs-blog-btn">
                      <SiteLink
                        className="rs-btn has-icon has-text has-text-underline fw-5"
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
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="rs-blog-item">
                  <div className="rs-blog-thumb">
                    <SiteLink href="/blog-details.html">
                      <SiteImage
                        src="/assets/images/logo/logo.png"
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
                            <SiteLink href="/contact-us.html">
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-price-tag-3-line"></i>
                          </div>
                          <span>{" Corporate "}</span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-calendar-line"></i>
                          </div>
                          <span>{" August 20, 2025"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rs-blog-content">
                    <h5 className="rs-blog-title">
                      <SiteLink href="/blog-details.html">
                        {
                          "Insights That Drive Business\n                                                Smarter\n                                                Forward"
                        }
                      </SiteLink>
                    </h5>
                    <p className="rs-blog-desc">
                      {
                        "Consulting empowers businesses with data-driven strategies and\n                                            innovative solutions"
                      }
                    </p>
                    <div className="rs-blog-btn">
                      <SiteLink
                        className="rs-btn has-icon has-text has-text-underline fw-5"
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
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="rs-blog-item">
                  <div className="rs-blog-thumb">
                    <SiteLink href="/blog-details.html">
                      <SiteImage
                        src="/assets/images/logo/logo.png"
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
                            <SiteLink href="/contact-us.html">
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-price-tag-3-line"></i>
                          </div>
                          <span>{" Corporate "}</span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-calendar-line"></i>
                          </div>
                          <span>{" August 20, 2025"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rs-blog-content">
                    <h5 className="rs-blog-title">
                      <SiteLink href="/blog-details.html">
                        {
                          "Actionable Insights for Real World\n                                                Results"
                        }
                      </SiteLink>
                    </h5>
                    <p className="rs-blog-desc">
                      {
                        "Helping companies thrive through expert consulting, smart\n                                            strategies,\n                                        "
                      }
                    </p>
                    <div className="rs-blog-btn">
                      <SiteLink
                        className="rs-btn has-icon has-text has-text-underline fw-5"
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
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="rs-blog-item">
                  <div className="rs-blog-thumb">
                    <SiteLink href="/blog-details.html">
                      <SiteImage
                        src="/assets/images/logo/logo.png"
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
                            <SiteLink href="/contact-us.html">
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-price-tag-3-line"></i>
                          </div>
                          <span>{" Corporate "}</span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-calendar-line"></i>
                          </div>
                          <span>{" August 20, 2025"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rs-blog-content">
                    <h5 className="rs-blog-title">
                      <SiteLink href="/blog-details.html">
                        {
                          "Mastering Markets, Models &\n                                                Momentum"
                        }
                      </SiteLink>
                    </h5>
                    <p className="rs-blog-desc">
                      {
                        "We help businesses unlock potential with clear strategies, expert\n                                        "
                      }
                    </p>
                    <div className="rs-blog-btn">
                      <SiteLink
                        className="rs-btn has-icon has-text has-text-underline fw-5"
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
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="rs-blog-item">
                  <div className="rs-blog-thumb">
                    <SiteLink href="/blog-details.html">
                      <SiteImage
                        src="/assets/images/logo/logo.png"
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
                            <SiteLink href="/contact-us.html">
                              {"Icfc"}
                            </SiteLink>
                          </span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-price-tag-3-line"></i>
                          </div>
                          <span>{" Corporate "}</span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <div className="rs-blog-meta-icon">
                            <i className="ri-calendar-line"></i>
                          </div>
                          <span>{" August 20, 2025"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rs-blog-content">
                    <h5 className="rs-blog-title">
                      <SiteLink href="/blog-details.html">
                        {
                          "Strategic Thinking for a Changing\n                                                World"
                        }
                      </SiteLink>
                    </h5>
                    <p className="rs-blog-desc">
                      {
                        "From insights to execution, we guide businesses to smarter"
                      }
                    </p>
                    <div className="rs-blog-btn">
                      <SiteLink
                        className="rs-btn has-icon has-text has-text-underline fw-5"
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
          <div className="col-xl-4 col-lg-4">
            <div className="rs-sidebar-wrapper rs-sidebar-sticky">
              <div className="sidebar-widget mb-30">
                <h5 className="sidebar-widget-title">{"Search"}</h5>
                <div className="sidebar-search">
                  <EmailForm>
                    <div className="sidebar-search-input">
                      <input
                        type="text"
                        placeholder="Searching..."
                        aria-label="Searching..."
                      />
                      <button type="submit">
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
              <div className="sidebar-widget widget-categories-two mb-30">
                <h5 className="sidebar-widget-title">{"Categories"}</h5>
                <div className="sidebar-widget-content">
                  <div className="list">
                    <ul>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    Business\n                                                    "
                          }
                          <span>{"(5)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    Corporate\n                                                    "
                          }
                          <span>{"(4)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    Consulting\n                                                    "
                          }
                          <span>{"(7)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    AI Technology\n                                                    "
                          }
                          <span>{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
                          {
                            "\n                                                    Oil & Gas Energy\n                                                    "
                          }
                          <span>{"(3)"}</span>
                        </SiteLink>
                      </li>
                      <li>
                        <SiteLink href="/blog-details.html">
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
              <div className="sidebar-widget mb-30">
                <h5 className="sidebar-widget-title">{"Recent Posts"}</h5>
                <div className="sidebar-widget-content">
                  <div className="sidebar-blog-item-wrapper">
                    <div className="sidebar-blog-item">
                      <div className="sidebar-blog-thumb">
                        <SiteLink href="/blog-details.html">
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                          />
                        </SiteLink>
                      </div>
                      <div className="sidebar-blog-content">
                        <div className="sidebar-blog-meta">
                          <i className="ri-calendar-line"></i>
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="sidebar-blog-title">
                          <SiteLink href="/blog-details.html">
                            {" Insights That Drive Business Smarter Forward"}
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="sidebar-blog-item">
                      <div className="sidebar-blog-thumb">
                        <SiteLink href="/blog-details.html">
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                          />
                        </SiteLink>
                      </div>
                      <div className="sidebar-blog-content">
                        <div className="sidebar-blog-meta">
                          <i className="ri-calendar-line"></i>
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="sidebar-blog-title">
                          <SiteLink href="/blog-details.html">
                            {
                              "\n                                                        From the Minds of Business Growth Strategists "
                            }
                          </SiteLink>
                        </h6>
                      </div>
                    </div>
                    <div className="sidebar-blog-item">
                      <div className="sidebar-blog-thumb">
                        <SiteLink href="/blog-details.html">
                          <SiteImage
                            src="/assets/images/logo/logo.png"
                            alt="image"
                          />
                        </SiteLink>
                      </div>
                      <div className="sidebar-blog-content">
                        <div className="sidebar-blog-meta">
                          <i className="ri-calendar-line"></i>
                          <span>{"May 20, 2024"}</span>
                        </div>
                        <h6 className="sidebar-blog-title">
                          <SiteLink href="/blog-details.html">
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
              <div className="sidebar-widget">
                <h5 className="sidebar-widget-title">{"Popular Tags"}</h5>
                <div className="sidebar-widget-content tagcloud">
                  <SiteLink href="/blog-details.html">{"Technology"}</SiteLink>
                  <SiteLink href="/blog-details.html">{"Business"}</SiteLink>
                  <SiteLink href="/blog-details.html">{"Video"}</SiteLink>
                  <SiteLink href="/blog-details.html">{"Agency"}</SiteLink>
                  <SiteLink href="/blog-details.html">{"Consulting"}</SiteLink>
                  <SiteLink href="/blog-details.html">{"Financial"}</SiteLink>
                  <SiteLink href="/blog-details.html">{"Corporate"}</SiteLink>
                  <SiteLink href="/blog-details.html">{"Marketing"}</SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="pagination-wrapper mt-40">
              <div className="common-pagination text-start">
                <nav>
                  <ul>
                    <li>
                      <SiteLink className="current" href="/contact-us.html">
                        {"1"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/contact-us.html">{"2"}</SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/contact-us.html">{"3"}</SiteLink>
                    </li>
                    <li>
                      <SiteLink
                        className="is-next"
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
