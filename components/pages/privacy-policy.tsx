import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";

export function PrivacyPolicyPageContent() {
  return (
    <SitePageTemplate route="privacy-policy.html">
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
    />
  );
}

function PolicyAreaSection() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 justify-center">
          <div className="w-full shrink-0 px-3 xl:w-[83.33333333333334%]">
            <div className="z-[1] relative p-[50px_50px_50px_50px] bg-[#FFFFFF] shadow-[0px_4px_80px_rgba(0,_0,_0,_0.12)] max-[767px]:p-[40px_40px] max-[575px]:p-[30px_20px]">
              <div className="mb-[25px]">
                <h4 className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold">
                  {"Introduction"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Thank you for visiting Icfc - Business Consulting Website. This Privacy Policy outlines\n                                    how we collect, use, disclose,\n                                    and manage your personal information. By using our website, you agree to the terms\n                                    of this\n                                    Privacy Policy."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold">
                  {"Information We Collect"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "We collect personal information that you voluntarily provide to us when you use our\n                                    website,\n                                    including but not limited to your name, email address, phone number, and property\n                                    preferences."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold">
                  {"How We Use Your Information"}
                </h4>
                <p className="leading-relaxed mb-[10px]">
                  {"We may use your personal information to:"}
                </p>
                <ul>
                  <li className="text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full mb-[5px]">
                    {"Provide and personalize our blog news services"}
                  </li>
                  <li className="text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full mb-[5px]">
                    {
                      "Communicate with you about property listings, inquiries, or transactions"
                    }
                  </li>
                  <li className="text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full mb-[5px]">
                    {"Improve our website and services"}
                  </li>
                  <li className="text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full mb-[5px]">
                    {"Process your inquiries and facilitate transactions"}
                  </li>
                  <li className="text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full">
                    {"Comply with legal obligations"}
                  </li>
                </ul>
              </div>
              <div className="mb-[25px]">
                <h4 className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold">
                  {"How We Share Your Information"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "We do not sell, trade, or otherwise transfer your personal information to third\n                                    parties without your consent,\n                                    except as described in this Privacy Policy or as required by law."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold">
                  {"Cookies and Tracking Technologies"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "We use cookies and similar tracking technologies to analyze trends, administer our\n                                    website, track users’\n                                    movements around the site, and gather demographic information about our user base.\n                                "
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold">
                  {"Third-Party Links"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Our website may contain links to third-party websites. We have no control over the\n                                    content or privacy practices\n                                    of these sites and are not responsible for their content or privacy policies."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold">
                  {"Security"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "We take reasonable measures to protect your personal information from unauthorized\n                                    access, disclosure,\n                                    alteration, or destruction. However, no method of transmission over the internet or\n                                    electronic storage is 100%\n                                    secure."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold">
                  {"Children’s Privacy"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "Our website is not intended for children under the age of 13, and we do not knowingly\n                                    collect personal\n                                    information from children under the age of 13. If you are a parent or guardian and\n                                    believe that your child has\n                                    provided us with personal information, please contact us."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold">
                  {"Changes to this Privacy Policy"}
                </h4>
                <p className="leading-relaxed mb-4">
                  {
                    "We reserve the right to modify this Privacy Policy at any time. If we make material\n                                    changes to this policy, we\n                                    will notify you here or by means of a notice on our website."
                  }
                </p>
              </div>
              <div>
                <h4
                  className="mb-[10px] text-[28px] max-[575px]:text-[22px] font-bold"
                  data-i18n="page.contact_title"
                >
                  {"Contact Us"}
                </h4>
                <p className="leading-relaxed mb-[10px]">
                  {
                    "If you have any questions or concerns about our Privacy Policy, please\n                                    contact us at:"
                  }
                </p>
                <ul className="mb-[10px]">
                  <li className="list-none text-[16px] text-[#000]">
                    {"Email: "}
                    <span>
                      <SiteLink
                        href="mailto:consulting@.com"
                        className="transition-colors hover:text-[#AB052D] hover:text-[#AB052D]"
                      >
                        {"consulting@.com"}
                      </SiteLink>
                    </span>
                  </li>
                </ul>
                <div>
                  <p className="leading-relaxed mb-[0] text-[16px] leading-[1.5]">
                    <SiteLink
                      href="/contact-us.html"
                      className="transition-colors hover:text-[#AB052D]"
                    >
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
