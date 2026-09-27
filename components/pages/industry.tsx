import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";
import { SiteImage } from "@/components/atoms/site-image";
import { IndustryExplorer } from "@/components/organisms/industry-explorer";
import { EmailForm } from "@/components/molecules/email-form";

export function IndustryPageContent() {
  return (
    <SitePageTemplate
      route="industry.html"
      stylesheets={[
        "/assets/css/vendor/bootstrap.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        "/assets/css/plugins/swiper.min.css",
        "/assets/css/plugins/nice-select.css",
        "/assets/css/plugins/flatpickr.min.css",
        "/assets/css/plugins/nouislider.min.css",
        "/assets/css/vendor/magnific-popup.css",
        "/assets/css/vendor/odometer.min.css",
        "/assets/css/vendor/spacing.css",
        "https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css",
        "/assets/css/main.css",
        "/assets/css/whatsapp-float.css",
        "/styles/pages/industry.css",
      ]}
    >
      <main>
        <BreadcrumbAreaSection />
        <WorkingAreaSection />
        <IndustrySectionSection />
        <FeatureAreaSection />
        <TeamAreaSection />
        <ContactAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="Industry"
      description="Position your agency bridge between a client's big picture"
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
      className="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space"
    />
  );
}

function WorkingAreaSection() {
  return (
    <section className="rs-working-area rs-working-seven section-space">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-working-wrapper">
              <div className="rs-working-content-wrapper">
                <div className="section-title-wrapper">
                  <span className="section-subtitle">
                    {"Best BUSINESS Strategy"}
                  </span>
                  <h2 className="section-title rs-split-text-enable split-in-left mb-20">
                    {"Welcome to ICFC team"}
                  </h2>
                  <p className="rs-section-desc">
                    {
                      "Position your agency as the bridge between a client's big-picture vision and achievable action plans. data-driven strategies and your track."
                    }
                  </p>
                </div>
                <div className="rs-working-list-wrapper">
                  <div className="rs-working-list-item">
                    <div className="rs-working-list-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                    <p className="rs-working-list-desc">
                      {" Regulatory Investigations "}
                    </p>
                  </div>
                  <div className="rs-working-list-item">
                    <div className="rs-working-list-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                    <p className="rs-working-list-desc">
                      {" Competitive Work Analysis "}
                    </p>
                  </div>
                  <div className="rs-working-list-item">
                    <div className="rs-working-list-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                    <p className="rs-working-list-desc">
                      {" Anit- Competitive Conduct "}
                    </p>
                  </div>
                  <div className="rs-working-list-item">
                    <div className="rs-working-list-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          d="M5.53798 9.63481C5.50614 9.6348 5.47466 9.62821 5.4455 9.61545C5.41633 9.60269 5.39013 9.58404 5.36852 9.56066L0.799591 4.61839C0.769134 4.58544 0.748942 4.54433 0.741488 4.50008C0.734034 4.45584 0.73964 4.41038 0.757622 4.36927C0.775603 4.32816 0.805178 4.29318 0.842729 4.26862C0.880279 4.24406 0.924175 4.23098 0.969045 4.23098H3.16828C3.2013 4.23098 3.23393 4.23807 3.26398 4.25176C3.29403 4.26545 3.32079 4.28542 3.34246 4.31034L4.86941 6.06705C5.03444 5.71429 5.35389 5.12694 5.91448 4.41123C6.74321 3.35315 8.28471 1.79705 10.922 0.392315C10.973 0.36517 11.0323 0.358125 11.0882 0.372571C11.1441 0.387016 11.1926 0.421903 11.2241 0.470342C11.2555 0.51878 11.2676 0.57725 11.2581 0.634205C11.2485 0.69116 11.218 0.742461 11.1724 0.777976C11.1624 0.785846 10.1455 1.58662 8.97521 3.05336C7.89817 4.40313 6.46643 6.61021 5.76191 9.45951C5.74954 9.50957 5.72075 9.55404 5.68015 9.58583C5.63955 9.61762 5.58947 9.6349 5.53791 9.6349L5.53798 9.63481Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                    <p className="rs-working-list-desc">
                      {"Global Expansion Planning"}
                    </p>
                  </div>
                </div>
                <div className="rs-working-btn">
                  <SiteLink
                    className="rs-btn has-icon hover-secondary"
                    href="/contact-us.html"
                  >
                    {"Join a global team "}
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div
                className="rs-working-thumb rs-image scroll_reveal"
                data-dir="reveal_right"
              >
                <SiteImage
                  src="/assets/images/work/working-thumb-09.webp"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustrySectionSection() {
  return <IndustryExplorer />;
}

function FeatureAreaSection() {
  return (
    <section className="rs-feature-area rs-feature-thirteen section-space-bottom">
      <div
        className="rs-feature-bg-thumb include-bg"
        style={{
          backgroundImage: 'url("/assets/bg/feature-bg-thumb-05.webp")',
        }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-10">
            <div className="section-title-wrapper text-center section-title-space">
              <span className="section-subtitle">
                {
                  "\n                        All-Industry IT Solutions\n                     "
                }
              </span>
              <h2 className="section-title rs-split-text-enable split-in-left mb-15">
                {
                  "Solving IT Challenges Everywhere\n                            "
                }
              </h2>
              <p className="section-desc">
                {
                  "Position your agency as the bridge between a client's big-picture vision\n                                and achievable\n                            "
                }
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div
              className="rs-feature-wrapper  fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-05.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">
                      {"Advanced Manufacturing"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-06.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/services.html">
                      {"Financial Services "}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-07.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">
                      {"Energy & Natural Resources"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-08.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">{"Government"}</SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-09.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">
                      {" Healthcare & Life Sciences "}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-08.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">{"Government"}</SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-13.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">
                      {"Cybersecurity in Finance"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-14.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">
                      {"Financial Data Analytics"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-10.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">
                      {"Agribusiness"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-15.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">
                      {"Payment Processing"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-16.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">
                      {"FinTech Solutions"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
              <div className="rs-feature-item">
                <div className="rs-feature-info">
                  <div className="rs-feature-thumb">
                    <SiteImage
                      src="/assets/images/feature/feature-thumb-13.webp"
                      alt="image"
                    />
                  </div>
                  <h6 className="rs-feature-title">
                    <SiteLink href="/contact-us.html">
                      {"Digital Banking"}
                    </SiteLink>
                  </h6>
                </div>
                <div className="rs-feature-btn">
                  <SiteLink
                    className="rs-btn has-icon has-text"
                    href="/contact-us.html"
                  >
                    <span className="icon-box">
                      <svg
                        className="icon-first"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        className="icon-second"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamAreaSection() {
  return (
    <section className="rs-team-area section-space rs-team-one">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-title-wrapper text-center section-title-space">
              <span className="section-subtitle">
                {
                  "\n                        The expert teams member\n                     "
                }
              </span>
              <h2 className="section-title rs-split-text-enable split-in-left">
                {"Meet with consultant expert"}
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-xl-12">
            <div className="rs-team-wrapper">
              <div
                className="rs-team-item  fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="rs-team-thumb">
                  <SiteLink href="/contact-us.html">
                    <SiteImage
                      src="/assets/images/team/team-thumb-01.webp"
                      alt="image"
                    />
                  </SiteLink>
                </div>
                <div className="rs-team-content-wrapper">
                  <div className="rs-team-content-info">
                    <h5 className="rs-team-title">
                      <SiteLink href="/contact-us.html">
                        {
                          "Leslie\n                                                Alexander"
                        }
                      </SiteLink>
                    </h5>
                    <span className="rs-team-designation">
                      {"Sr. Analyst Finance"}
                    </span>
                  </div>
                  <div className="rs-team-btn">
                    <SiteLink
                      className="rs-btn has-icon has-text"
                      href="/contact-us.html"
                    >
                      <span className="icon-box">
                        <svg
                          className="icon-first"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                          ></path>
                        </svg>
                        <svg
                          className="icon-second"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div
                className="rs-team-item  fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <div className="rs-team-thumb">
                  <SiteLink href="/contact-us.html">
                    <SiteImage
                      src="/assets/images/team/team-thumb-02.webp"
                      alt="image"
                    />
                  </SiteLink>
                </div>
                <div className="rs-team-content-wrapper">
                  <div className="rs-team-content-info">
                    <h5 className="rs-team-title">
                      <SiteLink href="/contact-us.html">
                        {"Cameron Williamson"}
                      </SiteLink>
                    </h5>
                    <span className="rs-team-designation">{"HR-Adviseur"}</span>
                  </div>
                  <div className="rs-team-btn">
                    <SiteLink
                      className="rs-btn has-icon has-text"
                      href="/contact-us.html"
                    >
                      <span className="icon-box">
                        <svg
                          className="icon-first"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                          ></path>
                        </svg>
                        <svg
                          className="icon-second"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div
                className="rs-team-item  fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                <div className="rs-team-thumb">
                  <SiteLink href="/contact-us.html">
                    <SiteImage
                      src="/assets/images/team/team-thumb-03.webp"
                      alt="image"
                    />
                  </SiteLink>
                </div>
                <div className="rs-team-content-wrapper">
                  <div className="rs-team-content-info">
                    <h5 className="rs-team-title">
                      <SiteLink href="/contact-us.html">
                        {"Darrell Steward"}
                      </SiteLink>
                    </h5>
                    <span className="rs-team-designation">
                      {"Product Manager"}
                    </span>
                  </div>
                  <div className="rs-team-btn">
                    <SiteLink
                      className="rs-btn has-icon has-text"
                      href="/contact-us.html"
                    >
                      <span className="icon-box">
                        <svg
                          className="icon-first"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                          ></path>
                        </svg>
                        <svg
                          className="icon-second"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </SiteLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactAreaSection() {
  return (
    <section className="rs-contact-area rs-contact-us">
      <div
        className="rs-contact-bg-thumb include-bg"
        style={{
          backgroundImage: 'url("/assets/bg/contact-bg-thumb-01.webp")',
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-contact-wrapper">
              <div className="rs-contact-left">
                <div className="section-title-wrapper">
                  <span className="section-subtitle is-white">
                    {
                      "\n                              Contact with us now\n                           "
                    }
                  </span>
                  <h2 className="section-title rs-split-text-enable split-in-left is-white mb-10">
                    {
                      "Let's Collaborate\n                                        with Us!"
                    }
                  </h2>
                  <p className="rs-section-desc">
                    {
                      "read and update the latest news from us. done eu magna quis felis.\n                                    "
                    }
                  </p>
                </div>
                <div className="rs-contact-form">
                  <EmailForm id="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Full name*"
                              aria-label="Full name*"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="email"
                              name="email"
                              placeholder="Email Address*"
                              aria-label="Email Address*"
                              type="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="phone"
                              name="phone"
                              type="text"
                              placeholder="Phone Number*"
                              aria-label="Phone Number*"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <select id="subject" name="subject">
                              <option>{"Your Business"}</option>
                              <option value="one">{"Business Strategy"}</option>
                              <option value="two">{"Market Analysis"}</option>
                              <option value="three">
                                {"Financial Planing"}
                              </option>
                              <option value="four">{"Risk Management"}</option>
                              <option value="five">
                                {"Digital Transformation"}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <textarea
                              id="message"
                              name="message"
                              placeholder="Message*"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="rs-contact-btn">
                          <button
                            type="submit"
                            className="rs-btn has-sm-radius has-theme-secondary w-100"
                          >
                            {
                              "\n                                                        Send Massage\n                                                    "
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  </EmailForm>
                </div>
              </div>
              <div className="rs-contact-right">
                <div className="rs-contact-item-wrapper">
                  <div className="rs-contact-item">
                    <span className="rs-contact-title">{"Email: "}</span>
                    <SiteLink href="mailto:admin@icfc.com.sg">
                      {"admin@icfc.com.sg"}
                    </SiteLink>
                  </div>
                  <div className="rs-contact-item">
                    <span className="rs-contact-title">
                      {"Contact Number:"}
                    </span>
                    <SiteLink href="tel:+65 8601 7001">
                      {"+65 8601 7001"}
                    </SiteLink>
                  </div>
                </div>
                <div className="rs-contact-thumb">
                  <SiteImage
                    src="/assets/images/contact/map-thumb-01.webp"
                    alt="image"
                  />
                  <div className="rs-contact-ripple-wrapper">
                    <div className="rs-ripple-item ripple-1">
                      <div className="rs-ripple-figure">
                        <div className="rs-ripple-thumb">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-06.webp"
                            alt="image"
                          />
                        </div>
                        <div className="ripple-content">
                          <div className="pre-title">
                            <h6 className="title">{" Corporate Growth "}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="pre-circle-ripple">
                        <div className="ripple-line"></div>
                      </div>
                    </div>
                    <div className="mobile_item">
                      <i className="remove-icon ri-close-line"></i>
                      <div className="pre-title">
                        <h6 className="title">{" Corporate Growth "}</h6>
                      </div>
                    </div>
                    <div className="rs-ripple-item ripple-2">
                      <div className="rs-ripple-figure">
                        <div className="rs-ripple-thumb">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-07.webp"
                            alt="image"
                          />
                        </div>
                        <div className="ripple-content">
                          <div className="pre-title">
                            <h6 className="title">{" Risk Management "}</h6>
                          </div>
                        </div>
                      </div>
                      <div className="pre-circle-ripple">
                        <div className="ripple-line"></div>
                      </div>
                    </div>
                    <div className="mobile_item">
                      <i className="remove-icon ri-close-line"></i>
                      <div className="pre-title">
                        <h6 className="title">{" Risk Management "}</h6>
                      </div>
                      <div className="ripple-desc"></div>
                    </div>
                    <div className="rs-ripple-item ripple-3">
                      <div className="rs-ripple-figure">
                        <div className="rs-ripple-thumb">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-08.webp"
                            alt="image"
                          />
                        </div>
                        <div className="ripple-content">
                          <div className="pre-title">
                            <h6 className="title">{" Financial Advisory "}</h6>
                          </div>
                          <div className="ripple-desc"></div>
                        </div>
                      </div>
                      <div className="pre-circle-ripple">
                        <div className="ripple-line"></div>
                      </div>
                    </div>
                    <div className="mobile_item">
                      <i className="remove-icon ri-close-line"></i>
                      <div className="pre-title">
                        <h6 className="title">{" Financial Advisory "}</h6>
                      </div>
                    </div>
                    <div className="rs-ripple-item ripple-4">
                      <div className="rs-ripple-figure">
                        <div className="rs-ripple-thumb">
                          <SiteImage
                            src="/assets/images/contact/contact-thumb-09.webp"
                            alt="image"
                          />
                        </div>
                        <div className="ripple-content">
                          <div className="pre-title">
                            <h6 className="title">{" Business Strategy "}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mobile_item">
                      <i className="remove-icon ri-close-line"></i>
                      <div className="ripple-desc"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
