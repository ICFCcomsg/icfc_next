import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteLink } from "@/components/atoms/site-link";

export function PrivacyPolicyPageContent() {
  return (
    <SitePageTemplate route="privacy-policy">
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
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] justify-center!">
          <div className="[flex-shrink:0] w-[83.33333333%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="z-[1] relative pt-[50px] max-[575px]:pt-[30px] min-[575px]:max-[767px]:pt-[40px] pr-[50px] max-[575px]:pr-[20px] min-[575px]:max-[767px]:pr-[40px] pb-[50px] max-[575px]:pb-[30px] min-[575px]:max-[767px]:pb-[40px] pl-[50px] max-[575px]:pl-[20px] min-[575px]:max-[767px]:pl-[40px] bg-[#FFFFFF] shadow-[0px_4px_80px_rgba(0,_0,_0,_0.12)]">
              <div className="mb-[25px]">
                <h4 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]">
                  {"Introduction"}
                </h4>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Thank you for visiting Icfc - Business Consulting Website. This Privacy Policy outlines\n                                    how we collect, use, disclose,\n                                    and manage your personal information. By using our website, you agree to the terms\n                                    of this\n                                    Privacy Policy."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]">
                  {"Information We Collect"}
                </h4>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "We collect personal information that you voluntarily provide to us when you use our\n                                    website,\n                                    including but not limited to your name, email address, phone number, and property\n                                    preferences."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]">
                  {"How We Use Your Information"}
                </h4>
                <p className="mt-[0] mb-[10px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {"We may use your personal information to:"}
                </p>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li className="mb-[5px] text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full">
                    {"Provide and personalize our blog news services"}
                  </li>
                  <li className="mb-[5px] text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full">
                    {
                      "Communicate with you about property listings, inquiries, or transactions"
                    }
                  </li>
                  <li className="mb-[5px] text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full">
                    {"Improve our website and services"}
                  </li>
                  <li className="mb-[5px] text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full">
                    {"Process your inquiries and facilitate transactions"}
                  </li>
                  <li className="text-[16px] relative [padding-inline-start:15px] list-none after:absolute after:[content:''] after:[inset-inline-start:0] after:top-[8px] after:w-[6px] after:h-[6px] after:bg-[#AB052D] after:rounded-full">
                    {"Comply with legal obligations"}
                  </li>
                </ul>
              </div>
              <div className="mb-[25px]">
                <h4 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]">
                  {"How We Share Your Information"}
                </h4>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "We do not sell, trade, or otherwise transfer your personal information to third\n                                    parties without your consent,\n                                    except as described in this Privacy Policy or as required by law."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]">
                  {"Cookies and Tracking Technologies"}
                </h4>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "We use cookies and similar tracking technologies to analyze trends, administer our\n                                    website, track users’\n                                    movements around the site, and gather demographic information about our user base.\n                                "
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]">
                  {"Third-Party Links"}
                </h4>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Our website may contain links to third-party websites. We have no control over the\n                                    content or privacy practices\n                                    of these sites and are not responsible for their content or privacy policies."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]">
                  {"Security"}
                </h4>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "We take reasonable measures to protect your personal information from unauthorized\n                                    access, disclosure,\n                                    alteration, or destruction. However, no method of transmission over the internet or\n                                    electronic storage is 100%\n                                    secure."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]">
                  {"Children’s Privacy"}
                </h4>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Our website is not intended for children under the age of 13, and we do not knowingly\n                                    collect personal\n                                    information from children under the age of 13. If you are a parent or guardian and\n                                    believe that your child has\n                                    provided us with personal information, please contact us."
                  }
                </p>
              </div>
              <div className="mb-[25px]">
                <h4 className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]">
                  {"Changes to this Privacy Policy"}
                </h4>
                <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "We reserve the right to modify this Privacy Policy at any time. If we make material\n                                    changes to this policy, we\n                                    will notify you here or by means of a notice on our website."
                  }
                </p>
              </div>
              <div>
                <h4
                  data-i18n="page.contact_title"
                  className="mt-[0px] mb-[10px] [font-weight:600] leading-[1.33] text-[#2B3944] text-[28px] max-[575px]:text-[22px] [word-break:break-word]"
                >
                  {"Contact Us"}
                </h4>
                <p className="mt-[0] mb-[10px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "If you have any questions or concerns about our Privacy Policy, please\n                                    contact us at:"
                  }
                </p>
                <ul className="pl-[0px] mt-[0px] mb-[10px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                  <li className="list-none text-[16px] text-[#000]">
                    {"Email: "}
                    <span className="">
                      <SiteLink
                        href="mailto:consulting@.com"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"consulting@.com"}
                      </SiteLink>
                    </span>
                  </li>
                </ul>
                <div>
                  <p className="mt-[0] mb-[0]! text-[16px] [font-weight:normal] text-[#616C74] leading-[1.5]">
                    <SiteLink
                      href="/contact-us"
                      className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
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
