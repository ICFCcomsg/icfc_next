import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import {
  AccordionItem,
  AccordionGroup,
} from "@/components/molecules/accordion-item";

export function ServicesDetailsfivecyberPageContent() {
  return (
    <SitePageTemplate route="services-detailsfivecyber">
      <main>
        <BannerAreaSection />
        <ContainerSection />
        <ContainerSection2 />
        <SectionSpaceSection />
        <SectionSpaceSection2 />
        <ContainerSection3 />
        <ContainerSection4 />
        <SectionSpaceSection3 />
        <FaqModernSection />
        <ContainerSection5 />
        <ContainerSection6 />
        <ContainerSection7 />
        <SeoKeywordsSection />
      </main>
    </SitePageTemplate>
  );
}

function BannerAreaSection() {
  return (
    <section className="relative z-[1] [overflow-x:clip] [background:#0a3b33]!">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center! min-h-[70vh]!">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <div className="pt-[110px] max-[767px]:pt-[75px] min-[767px]:max-[991px]:pt-[95px] pb-[330px] max-[767px]:pb-[80px] min-[767px]:max-[991px]:pb-[100px] min-[991px]:max-[1199px]:pb-[110px] min-[1199px]:max-[1600px]:pb-[295px] relative z-[1] [padding-inline-start:200px] max-[1199px]:[padding-inline-start:15px] min-[1199px]:max-[1600px]:[padding-inline-start:100px] max-[1199px]:[padding-inline-end:15px]">
              <span className="mb-[15px] text-[14px] font-medium tracking-[2.4px] uppercase text-[#6bc2b0]! inline-block">
                {
                  "CSA Cyber Essentials Mark · Singapore Cybersecurity Framework"
                }
              </span>
              <h1 className="mt-[0px] mb-[0] font-medium leading-[1.12] text-[#FFFFFF] text-[66px] max-[480px]:text-[40px] min-[480px]:max-[575px]:text-[45px] min-[575px]:max-[767px]:text-[50px] min-[767px]:max-[991px]:text-[55px] min-[991px]:max-[1600px]:text-[60px] [word-break:break-word]">
                {"Cyber Essentials Mark —"}
                <br className="max-[480px]:hidden" />
                {"certified, compliant, and grant-supported"}
              </h1>
              <p className="mt-[0] mb-[40px] text-[17px] font-medium text-[rgba(255,_255,_255,_0.8)] leading-[28px] tracking-[0.02em] max-w-[580px] max-[575px]:max-w-full">
                {
                  "Mandated for HIMS vendors, ICT vendors, HIA entities. ESG/EDG grant up to 50%. Audit, consultation & training. ICFC since 2014."
                }
              </p>
              <div>
                <SiteLink
                  href="/contact-us"
                  className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D] gap-[8px] group/btn group/has-bg-white"
                >
                  {"Book free assessment →"}
                  <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)] group/icon-box">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="[vertical-align:middle] group-hover/btn:[transform:translateX(150%)] w-[17px] group-hover/icon-box:[transform:translateX(150%)]"
                    >
                      <path
                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                        fill="white"
                        className="[fill:#2B3944] group-hover/has-bg-white:[fill:#FFFFFF]"
                      ></path>
                    </svg>
                  </span>
                </SiteLink>
                <SiteLink
                  href="#grant"
                  className="text-[#FFFFFF] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D] gap-[8px]"
                >
                  {"Check grant eligibility →"}
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px]">
      <div className="mt-[40px] mr-[0] mb-[40px] ml-[0] flex flex-wrap gap-[20px] justify-center">
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#AB052D] leading-[1]">
            {"11+"}
          </div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#AB052D] leading-[1]">
            {"25+"}
          </div>
          <div>{"Industries served"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#AB052D] leading-[1]">
            {"3"}
          </div>
          <div>{"Service pillars"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#AB052D] leading-[1]">
            {"50%"}
          </div>
          <div>{"Max grant co-fund"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#AB052D] leading-[1]">
            {"100%"}
          </div>
          <div>{"CSA-aligned"}</div>
        </div>
        <div className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] [background:#f8f9fc] rounded-[20px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="mb-[5px] text-[36px] font-extrabold text-[#AB052D] leading-[1]">
            {"5★"}
          </div>
          <div>{"Client rated"}</div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection2() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
      <div className="relative pt-[1.5rem]! pr-[1.5rem]! pb-[1.5rem]! pl-[1.5rem]! mb-[1rem] text-[#664d03] bg-[#fff3cd] [border:0]! rounded-[1rem]! [background:#fff3e0]!">
        <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[rgba(33,37,41,1)]! text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
          {
            "🛡️ Why Singapore organisations must certify now — 2026 regulatory pressure is intensifying"
          }
        </h4>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"MOH HIMS vendors & HIA entities:"}
            </strong>
            {
              " Health Information Act mandates baseline cybersecurity — Cyber Essentials is accepted pathway."
            }
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"IMDA Telecom & ICT vendors:"}
            </strong>
            {" Technical specifications require demonstrable cyber hygiene."}
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"EMA Energy & utilities CII:"}
            </strong>
            {
              " EMA Cyber Security Code requires Cyber Essentials as minimum baseline."
            }
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
            <strong className="[font-weight:bolder]">
              {"CSA Cyber Trust Mark:"}
            </strong>
            {
              " Cyber Essentials is mandatory foundational level for all applicants."
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="text-center!">
          <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"Singapore's national baseline cybersecurity certification"}
          </span>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"What is the CSA Cyber Essentials Mark?"}
          </h2>
          <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            {
              "5 foundational domains — mandatory for HIMS vendors, HIA entities & ICT vendors"
            }
          </p>
        </div>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="mb-[.5rem]! text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]!">
                {"🔒"}
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Asset Management (AM)"}
              </h4>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Inventory and classification of hardware, software, and data assets. Know what you have before you protect it."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="mb-[.5rem]! text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]!">
                {"🔐"}
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Secure Configuration (SC)"}
              </h4>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Hardening of devices, systems, and services. Removing default credentials, disabling unnecessary services."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="mb-[.5rem]! text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]!">
                {"🌐"}
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Software Security (SS)"}
              </h4>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Patch management, vulnerability remediation, and secure software deployment across the organisation."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="mb-[.5rem]! text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]!">
                {"🛡️"}
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Access Control (AC)"}
              </h4>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Principle of least privilege, multi-factor authentication (MFA), and privileged account management."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="mb-[.5rem]! text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]!">
                {"📡"}
              </div>
              <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Malware Protection (MP)"}
              </h4>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Anti-malware deployment, endpoint detection, and protection of email and web gateways from threats."
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="bg-[rgba(248,249,250,1)]! pt-[20px] pr-[20px] pb-[20px] pl-[20px] [background:white] rounded-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="mb-[.5rem]! text-[2rem]! max-[1200px]:text-[calc(1.325rem_+_.9vw)]!">
                {"🏥"}
              </div>
              <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                {"HIMS Vendor & HIA Entity requirement"}
              </h5>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "The Ministry of Health (MOH) and Health Sciences Authority (HSA) have designated CSA Cyber Essentials as accepted baseline for HIMS vendors and HIA entities. Non-certified vendors risk disqualification from government healthcare procurement panels."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionSpaceSection2() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] [background:#2B3944]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="text-center!">
          <span className="mb-[10px] text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] inline-block tracking-[2.5px]">
            {"Service pillars"}
          </span>
          <h2 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.19] text-[#2B3944] text-[52px] max-[575px]:text-[27px] min-[575px]:max-[767px]:text-[32px] min-[767px]:max-[991px]:text-[37px] min-[991px]:max-[1199px]:text-[42px] min-[1199px]:max-[1366px]:text-[47px] min-[1366px]:max-[1600px]:text-[50px] [word-break:break-word]">
            {"Audit · Consulting · Training"}
          </h2>
          <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            {"5 CSA domains · HIMS/HIA specialist · ESG/EDG grant managed"}
          </p>
        </div>
        <div className="flex flex-wrap mt-[1rem]! mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[28px] pr-[22px] pb-[28px] pl-[22px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]!">{"🔍"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Audits"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Baseline gap assessment · Network & infrastructure audit · HIMS/HIA compliance audit · ICT vendor audit · Pre-cert readiness."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[.5rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore audit →"}
              </SiteLink>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[28px] pr-[22px] pb-[28px] pl-[22px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]!">{"🏗️"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Consulting"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Full certification · HIMS vendor/HIA support · Cyber Trust Mark upgrade · Policy suite · ISO 27001 integration · Annual renewal."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[.5rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore consulting →"}
              </SiteLink>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
            <div className="pt-[28px] pr-[22px] pb-[28px] pl-[22px] [background:#ffffff] rounded-[28px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]!">{"🎓"}</span>
              <h4 className="mt-[1rem]! mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                {"Training"}
              </h4>
              <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "Staff awareness (English/中文) · Technical workshop · Leadership governance · Industry-specific programmes."
                }
              </p>
              <SiteLink
                href="/contact-us"
                className="text-[#FFFFFF] [text-decoration:none] mt-[.5rem]! pt-[0] pr-[0] pb-[0] pl-[0] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] w-[unset] h-[unset]"
              >
                {"Explore training →"}
              </SiteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContainerSection3() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[0]! pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="relative flex [flex-direction:column] min-w-[0] h-[_] text-[#212529] [word-wrap:break-word] bg-[#fff] [background-clip:border-box] [border:0]! rounded-[1rem]! overflow-hidden! shadow-[0_0.125rem_0.25rem_rgba(0,_0,_0,_0.075)]!">
        <div className="pt-[1.5rem]! pr-[1rem] pb-[0.5rem] pl-[1rem] mb-[0] text-[_] bg-[rgba(255,255,255,1)]! [border-bottom:1px_solid_rgba(0,_0,_0,_0.175)] rounded-[calc(0.375rem_-_(1px))_calc(0.375rem_-_(1px))_0_0] [border:0]!">
          <h4 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
            {"Cyber Essentials vs Cyber Trust Mark — which is right for you?"}
          </h4>
        </div>
        <div className="[flex:1_1_auto] pt-[1rem] pr-[1rem] pb-[1rem] pl-[1rem] text-[_]">
          <div className="[overflow-x:auto]">
            <table className="[caption-side:bottom] [border-collapse:collapse] w-full max-[991px]:w-[900px] mb-[1rem] [vertical-align:top] [border-color:#dee2e6] [border:1px_solid_#DBDEE1]">
              <thead className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:bottom]">
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Criteria"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"CSA Cyber Essentials Mark"}
                  </th>
                  <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border:none] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"CSA Cyber Trust Mark"}
                  </th>
                </tr>
              </thead>
              <tbody className="[border-color:inherit] [border-style:solid] [border-width:0] [vertical-align:inherit]">
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Target organisations"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"SMEs, HIMS vendors, ICT vendors, HIA entities"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {
                      "Large enterprises, CII operators, complex IT/OT environments"
                    }
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Assessment method"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {
                      "Self-Assessment Questionnaire (SAQ) with CSA-approved assessor review"
                    }
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {
                      "Independent third-party assessment across 5 Pillars, 200+ controls"
                    }
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Coverage domains"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"5 domains: AM, SC, SS, AC, MP"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"5 Pillars: Asset, Govern, Identify, Protect, Respond"}
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Mandatory for HIMS vendors"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Required by MOH"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Optional — advanced pathway"}
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Mandatory for HIA entities"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Required under HIA framework"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Optional — advanced pathway"}
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"ESG/EDG grant eligible"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Yes — up to 50%"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Yes — up to 50%"}
                  </td>
                </tr>
                <tr className="[border-color:inherit] [border-style:solid] [border-width:1px_0]">
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Typical timeline"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"4–8 weeks"}
                  </td>
                  <td className="[border-color:inherit] [border-style:solid] [border-width:0_1px] pt-[.5rem] pr-[.5rem] pb-[.5rem] pl-[.5rem] text-[initial] bg-[#fff] [border-bottom-width:1px] shadow-[inset_0_0_0_9999px_initial] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"3–6 months"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-[1rem]! mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
            <strong className="[font-weight:bolder]">
              {"ICFC recommendation:"}
            </strong>
            {
              " Most Singapore SMEs, HIMS vendors, ICT vendors, and HIA entities should start with Cyber Essentials. CII operators and large enterprises targeting CTM directly — ICFC's integrated programme ensures Cyber Essentials work never wasted."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

function ContainerSection4() {
  return (
    <div
      id="grant"
      className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]"
    >
      <div className="pt-[40px] max-[768px]:pt-[28px] pr-[40px] max-[768px]:pr-[28px] pb-[40px] max-[768px]:pb-[28px] pl-[40px] max-[768px]:pl-[28px] [background:linear-gradient(135deg,_#0a3b33_0%,_#05261f_100%)] rounded-[32px] text-[white]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)] items-center!">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto]">
            <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
              {
                "50% ESG / EDG grant co-funding — up to 50% of Cyber Essentials consultation costs"
              }
            </h3>
            <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Enterprise Singapore's EDG and PSG cover qualifying cybersecurity consultation fees for eligible SMEs. ICFC manages your grant application before project commencement. Integrated engagements maximise total co-funding. Transparent fixed pricing."
              }
            </p>
            <SiteLink
              href="/contact-us"
              className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D]"
            >
              {"Check grant eligibility →"}
            </SiteLink>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] text-center!">
            <Icon
              name="building"
              className="inline-block [font-style:normal] text-[60px]! opacity-[0.5]! text-[white]!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection3() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px] [background:#2B3944]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] mb-[1.5rem]!">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#AB052D]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Chief Financial Officer"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Regional Private Clinic Group · Healthcare"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  '"ICFC guided our clinic group through full Cyber Essentials certification including HIA compliance in under 6 weeks. Their HIMS vendor expertise is unmatched, and they managed our ESG grant seamlessly."'
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[50%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[0] [flex:0_0_auto] mb-[1.5rem]!">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#AB052D]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Director of Technology"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"ICT Solutions Vendor · Government Technology"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  '"Cyber Essentials was non-negotiable for our procurement qualification. ICFC delivered in 5 weeks, helped us claim 50% via EDG grant, and upskilled our IT team. Truly budget-friendly."'
                }
              </p>
            </div>
          </div>
          <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[.5rem]! [flex:0_0_auto]">
            <div className="mt-[15px] mr-[0] mb-[15px] ml-[0] pt-[24px] pr-[24px] pb-[24px] pl-[24px] [background:#fff] rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] [border-left:4px_solid_#AB052D]">
              <div className="flex! gap-[1rem]!">
                <div>
                  <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                    {"Head of Compliance"}
                  </h5>
                  <p className="mt-[0] mb-[0] text-[rgba(33,_37,_41,_0.75)]! text-[17px] [font-weight:normal] leading-[28px]">
                    {"Colocation Data Centre Operator · Data Centres"}
                  </p>
                </div>
                <div className="ml-[auto]!">{"★★★★★"}</div>
              </div>
              <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                {
                  "\"We needed both Cyber Essentials and ISO 27001 for our data centre customers. ICFC's integrated programme achieved both certifications in a single engagement — saving us time, cost, and admin burden. The team's bilingual capability was a huge bonus for our Chinese-speaking leadership.\""
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqModernSection() {
  return (
    <div className="mt-[50px] mr-[0] mb-[50px] ml-[0] pt-[60px] max-[768px]:pt-[30px] pr-[40px] max-[768px]:pr-[20px] pb-[60px] max-[768px]:pb-[30px] pl-[40px] max-[768px]:pl-[20px] [background:#f8faff] rounded-[32px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="mb-[50px] text-center">
          <h2 className="mt-[0px] mb-[15px] font-extrabold leading-[1.19] text-[#1a2a3a] text-[3.5rem] [word-break:break-word]">
            {"FAQs — CSA Cyber Essentials Mark"}
          </h2>
          <p className="mt-[0] mb-[0] mr-[auto] ml-[auto] text-[1.5rem] [font-weight:normal] text-[#5a6a7a] leading-[28px] max-w-[600px]">
            {
              "Everything Singapore organisations need to know about Cyber Essentials certification, grants, and ICFC's services"
            }
          </p>
        </div>
        <AccordionGroup id="ceFaq">
          <AccordionItem
            title={
              <>
                {
                  "What is the CSA Cyber Essentials Mark and is it mandatory in Singapore?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:none] [border-top-left-radius:0.375rem] [border-top-right-radius:0.375rem] mb-[20px] [background:transparent]"
          >
            {" "}
            {
              "The CSA Cyber Essentials Mark is Singapore's nationally recognised baseline cybersecurity certification, administered by the Cyber Security Agency of Singapore (CSA). It certifies that an organisation has implemented foundational controls across five cybersecurity domains. It is mandatory for HIMS vendors under MOH's HIMS vendor qualification framework and for HIA entities under the Health Information Act. It is increasingly required by government procurement, enterprise RFPs, and is mandatory for organisations applying for the Cyber Trust Mark."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "Is Cyber Essentials mandatory for HIMS vendors and HIA entities?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:none] [border-top:0] mb-[20px] [background:transparent]"
          >
            {" "}
            {
              "Yes. The Ministry of Health (MOH) has designated the CSA Cyber Essentials Mark as the required baseline cybersecurity certification for Health Information Management System (HIMS) vendors seeking inclusion in MOH procurement panels. Similarly, entities subject to the Health Information Act (HIA), including healthcare providers handling National Electronic Health Record (NEHR) data, are required to demonstrate Cyber Essentials-level cybersecurity controls. ICFC's HIMS/HIA consultation track addresses both requirements in a single engagement."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "Can I get an ESG grant or EDG grant for CSA Cyber Essentials certification?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:none] [border-top:0] mb-[20px] [background:transparent]"
          >
            {" "}
            {
              "Yes. Enterprise Singapore's Enterprise Development Grant (EDG) covers up to 50% of qualifying cybersecurity consultancy fees for eligible Singapore-registered SMEs. The Productivity Solutions Grant (PSG) also covers some pre-approved cybersecurity solutions. ICFC manages your grant application before project commencement, ensuring grant eligibility is confirmed and costs are maximised. Integrated Cyber Essentials + ISO 27001 engagements can combine grant claims for greater co-funding. Contact ICFC for a free grant eligibility check."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>{"How long does CSA Cyber Essentials certification take?"}</>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:none] [border-top:0] mb-[20px] [background:transparent]"
          >
            {" "}
            {
              "With ICFC's support, most organisations achieve CSA Cyber Essentials certification within 4 to 8 weeks from project commencement. The timeline depends on your organisation's starting posture, size, and IT complexity. Organisations with significant gaps in documentation or technical controls may take up to 10–12 weeks. ICFC provides a clear project timeline and milestone schedule at project inception. For HIMS vendors with urgent MOH procurement deadlines, ICFC offers an accelerated track."
            }
          </AccordionItem>
          <AccordionItem
            title={
              <>
                {
                  "What is the difference between CSA Cyber Essentials and ISO 27001?"
                }
              </>
            }

            defaultOpen={false}
            className="text-[#212529] bg-[#fff] [border:none] [border-top:0] [border-bottom-right-radius:0.375rem] [border-bottom-left-radius:0.375rem] mb-[20px] [background:transparent]"
          >
            {" "}
            {
              "The CSA Cyber Essentials Mark is a Singapore-specific baseline certification covering five foundational cybersecurity control domains, assessed via a self-assessment questionnaire. ISO/IEC 27001:2022 is an internationally recognised Information Security Management System (ISMS) standard that addresses a much broader set of 93 controls across 4 themes and requires third-party certification body audit. Cyber Essentials is faster, lighter, and lower cost — making it the ideal starting point for SMEs. ICFC's integrated programme achieves both in a single engagement."
            }
          </AccordionItem>
        </AccordionGroup>
      </div>
    </div>
  );
}

function ContainerSection5() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
      <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! text-[rgba(255,255,255,1)]! bg-[rgba(33,37,41,1)]! rounded-[1rem]! [background:linear-gradient(135deg,_#1a2a3a,_#0f1a24)]!">
        <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"中文服务 · CSA 网络安全基本标志认证 · ICFC新加坡"}
        </h3>
        <p className="mt-[1rem]! mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
          {
            "ICFC为新加坡各类企业提供全面的CSA网络安全基本标志（Cyber Essentials Mark）认证服务，涵盖医疗信息管理系统（HIMS）供应商、ICT供应商及健康信息法（HIA）实体的合规需求。我们的服务覆盖三大核心支柱：审核（Audit）、咨询（Consulting）、培训（Training），从差距评估到认证取得，全程管理，一站式服务。提供中英双语服务，帮助企业在符合IMDA、EMA、HSA、MOH及HIA监管框架的同时，申请ESG补助金及企业发展补助金（EDG），最高获得50%费用补贴。"
          }
        </p>
        <SiteLink
          href="/contact-us"
          className="text-[#f8f9fa] [text-decoration:none] inline-block pt-[0.375rem] pr-[0.75rem] pb-[0.375rem] pl-[0.75rem] text-[1rem] [font-weight:400] leading-[1.5] text-center [vertical-align:middle] [user-select:none] [border:1px_solid_#f8f9fa] rounded-[0.375rem] bg-[transparent] hover:text-[#000] hover:bg-[#f8f9fa] hover:[border-color:#f8f9fa] focus-visible:text-[#000] focus-visible:bg-[#f8f9fa] focus-visible:[border-color:#f8f9fa] focus-visible:shadow-[0_0_0_0.25rem_rgba(248,249,250,_.5)] active:text-[#000] active:bg-[#f8f9fa] active:[border-color:#f8f9fa] active:shadow-[0_0_0_0.25rem_rgba(248,249,250,_.5)] mt-[.5rem]! focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] [background:transparent]"
        >
          {"中文咨询 · 免费评估 →"}
        </SiteLink>
      </div>
    </div>
  );
}

function ContainerSection6() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <h3 className="mt-[0px] mb-[1.5rem]! [font-weight:600] leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] text-center! [word-break:break-word]">
        {"Related services"}
      </h3>
      <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
        <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[rgba(220,53,69,1)]!">
              {"🔐"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 27001:2022"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "International ISMS standard. Integrates seamlessly with Cyber Essentials."
              }
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[rgba(220,53,69,1)]!">
              {"🏅"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"Cyber Trust Mark"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Advanced tier — 5 Pillars, 200+ controls. Mandatory pathway for CII operators."
              }
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[rgba(220,53,69,1)]!">
              {"🤖"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "World's first AI governance standard. MAS AI guidelines aligned."
              }
            </p>
          </div>
        </div>
        <div className="[flex-shrink:0] w-[25%] max-[768px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
          <div className="[border:1px_solid_#dee2e6]! pt-[1rem]! pr-[1rem]! pb-[1rem]! pl-[1rem]! text-center! rounded-[1rem]!">
            <span className="hidden pt-[0.35em] pr-[0.65em] pb-[0.35em] pl-[0.65em] text-[0.75em] [font-weight:700] leading-[1] text-[#fff] text-center whitespace-nowrap [vertical-align:baseline] rounded-[0.375rem] mb-[.5rem]! bg-[rgba(220,53,69,1)]!">
              {"📋"}
            </span>
            <h5 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
              {"PDPA Compliance"}
            </h5>
            <p className="mt-[0] mb-[0] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
              {
                "Singapore data protection. Integrates with Cyber Essentials data governance."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerSection7() {
  return (
    <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="pt-[3rem]! pr-[3rem]! pb-[3rem]! pl-[3rem]! text-center! rounded-[1rem]! [background:#0a3b33]!">
        <h3 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.46] text-[rgba(255,255,255,1)]! text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
          {"Start your CSA Cyber Essentials journey today"}
        </h3>
        <p className="mt-[0] mb-[30px] text-[rgba(255,255,255,.5)]! text-[17px] [font-weight:normal] leading-[28px]">
          {
            "Free 30-minute cybersecurity readiness assessment. Honest gap analysis against CSA Cyber Essentials. ESG/EDG grant eligibility check included. HIMS vendor, HIA entity, and ICT vendor specialists. No obligation."
          }
        </p>
        <div className="mt-[1.5rem]!">
          <SiteLink
            href="/contact-us"
            className="text-[#2B3944] [text-decoration:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:none] [background:#FFFFFF] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#AB052D]"
          >
            {"Book free assessment →"}
          </SiteLink>
          <SiteLink
            href="/contact-us"
            className="text-[rgba(255,255,255,1)]! [text-decoration:none] ml-[1rem]! pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944]"
          >
            {"Check grant eligibility →"}
          </SiteLink>
          <SiteLink
            href="/contact-us"
            className="text-[rgba(255,255,255,1)]! [text-decoration:none] ml-[1rem]! pt-[14px] pr-[26px] pb-[14px] pl-[26px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] [background:transparent] text-[17px] inline-flex items-center justify-center rounded-[50px] font-medium relative z-[1] overflow-hidden hover:[background:#2B3944]"
          >
            {"Get free quote →"}
          </SiteLink>
        </div>
      </div>
    </div>
  );
}

function SeoKeywordsSection() {
  return (
    <div className="mt-[50px] mr-[0] mb-[30px] ml-[0] pt-[25px] pr-[20px] pb-[25px] pl-[20px] [background:#f0f4f8] rounded-[20px] text-center">
      <div className="mb-[15px] text-[1.4rem] font-bold text-[#AB052D] inline-block tracking-[1px]">
        {"🔍 Related searches & keywords"}
      </div>
      <div className="text-[1.4rem] text-[#2c3e50] leading-[1.8] [word-break:break-word]">
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"CSA Cyber Essentials Mark Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"cybersecurity certification Singapore 2026"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"HIMS vendor certification MOH"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"HIA entity cybersecurity Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"ICT vendor Cyber Essentials"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"ESG grant cybersecurity Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"EDG grant Cyber Essentials"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"best cybersecurity consultant Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"budget-friendly Cyber Essentials"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"CII cybersecurity Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"Cyber Trust Mark Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"CSA Cyber Essentials audit"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"CSA certification healthcare Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"fintech cybersecurity MAS Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"data centre cybersecurity certification"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"IMDA ICT vendor compliance"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"construction cybersecurity Singapore"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"logistics cyber essentials"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"manufacturing OT cybersecurity SG"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"新加坡网络安全认证"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"CSA网络安全基本标志"}
        </span>
        <span className="mt-[4px] mr-[4px] mb-[4px] ml-[4px] pt-[5px] max-[768px]:pt-[4px] pr-[12px] max-[768px]:pr-[10px] pb-[5px] max-[768px]:pb-[4px] pl-[12px] max-[768px]:pl-[10px] inline-block [background:white] rounded-[30px] text-[1.5rem] max-[768px]:text-[0.75rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white]">
          {"新加坡最佳网络安全顾问"}
        </span>
      </div>
    </div>
  );
}
