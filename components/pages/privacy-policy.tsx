import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";

export function PrivacyPolicyPageContent() {
  return (
    <SitePageTemplate
      route="privacy-policy.html"
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
        "/styles/pages/privacy-policy.css",
      ]}
    >
      <main>
        <BreadcrumbAreaSection />
        <PolicyAreaSection />
      </main>
    </SitePageTemplate>
  );
}

function BreadcrumbAreaSection() {
  return (
    <SiteBreadcrumb
      title="Privacy & Policy"
      description="Position your agency bridge between a client’s big picture"
      background="/assets/images/logo/logo.png"
      className="rs-breadcrumb-area rs-breadcrumb-one p-relative section-space"
    />
  );
}

function PolicyAreaSection() {
  return (
    <section className="policy-area section-space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy-wrapper policy-translate p-relative z-index-1">
              <div className="policy-item">
                <h4 className="policy-title">{"Introduction"}</h4>
                <p>
                  {
                    "Thank you for visiting Icfc - Business Consulting Website. This Privacy Policy outlines\n                                    how we collect, use, disclose,\n                                    and manage your personal information. By using our website, you agree to the terms\n                                    of this\n                                    Privacy Policy."
                  }
                </p>
              </div>
              <div className="policy-item">
                <h4 className="policy-title">{"Information We Collect"}</h4>
                <p>
                  {
                    "We collect personal information that you voluntarily provide to us when you use our\n                                    website,\n                                    including but not limited to your name, email address, phone number, and property\n                                    preferences."
                  }
                </p>
              </div>
              <div className="policy-item">
                <h4 className="policy-title">
                  {"How We Use Your Information"}
                </h4>
                <p className="mb-10">
                  {"We may use your personal information to:"}
                </p>
                <ul>
                  <li>{"Provide and personalize our blog news services"}</li>
                  <li>
                    {
                      "Communicate with you about property listings, inquiries, or transactions"
                    }
                  </li>
                  <li>{"Improve our website and services"}</li>
                  <li>
                    {"Process your inquiries and facilitate transactions"}
                  </li>
                  <li>{"Comply with legal obligations"}</li>
                </ul>
              </div>
              <div className="policy-item">
                <h4 className="policy-title">
                  {"How We Share Your Information"}
                </h4>
                <p>
                  {
                    "We do not sell, trade, or otherwise transfer your personal information to third\n                                    parties without your consent,\n                                    except as described in this Privacy Policy or as required by law."
                  }
                </p>
              </div>
              <div className="policy-item">
                <h4 className="policy-title">
                  {"Cookies and Tracking Technologies"}
                </h4>
                <p>
                  {
                    "We use cookies and similar tracking technologies to analyze trends, administer our\n                                    website, track users’\n                                    movements around the site, and gather demographic information about our user base.\n                                "
                  }
                </p>
              </div>
              <div className="policy-item">
                <h4 className="policy-title">{"Third-Party Links"}</h4>
                <p>
                  {
                    "Our website may contain links to third-party websites. We have no control over the\n                                    content or privacy practices\n                                    of these sites and are not responsible for their content or privacy policies."
                  }
                </p>
              </div>
              <div className="policy-item">
                <h4 className="policy-title">{"Security"}</h4>
                <p>
                  {
                    "We take reasonable measures to protect your personal information from unauthorized\n                                    access, disclosure,\n                                    alteration, or destruction. However, no method of transmission over the internet or\n                                    electronic storage is 100%\n                                    secure."
                  }
                </p>
              </div>
              <div className="policy-item">
                <h4 className="policy-title">{"Children’s Privacy"}</h4>
                <p>
                  {
                    "Our website is not intended for children under the age of 13, and we do not knowingly\n                                    collect personal\n                                    information from children under the age of 13. If you are a parent or guardian and\n                                    believe that your child has\n                                    provided us with personal information, please contact us."
                  }
                </p>
              </div>
              <div className="policy-item">
                <h4 className="policy-title">
                  {"Changes to this Privacy Policy"}
                </h4>
                <p>
                  {
                    "We reserve the right to modify this Privacy Policy at any time. If we make material\n                                    changes to this policy, we\n                                    will notify you here or by means of a notice on our website."
                  }
                </p>
              </div>
              <div className="policy-contact">
                <h4 className="policy-title" data-i18n="page.contact_title">
                  {"Contact Us"}
                </h4>
                <p className="mb-10">
                  {
                    "If you have any questions or concerns about our Privacy Policy, please\n                                    contact us at:"
                  }
                </p>
                <ul>
                  <li>
                    {"Email: "}
                    <span>
                      <SiteLink href="mailto:consulting@.com">
                        {"consulting@.com"}
                      </SiteLink>
                    </span>
                  </li>
                </ul>
                <div className="policy-address">
                  <p className="mb-0">
                    <SiteLink href="/contact-us.html">
                      {
                        "374 William S Canning Blvd, Fall River MA Road 2721, USA"
                      }
                    </SiteLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
