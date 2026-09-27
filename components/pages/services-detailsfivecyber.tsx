import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteLink } from "@/components/atoms/site-link";
import { AccordionItem } from "@/components/molecules/accordion-item";

export function ServicesDetailsfivecyberPageContent() {
  return (
    <SitePageTemplate route="services-detailsfivecyber.html">
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
    <section className="relative z-[1] [overflow-x:clip] [background:#0a3b33]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 min-h-[70vh] items-center">
          <div className="w-full shrink-0 px-3 xl:w-[66.66666666666666%]">
            <div className="relative z-[1] pt-[110px] [padding-inline-start:200px] pb-[330px] max-[1600px]:[padding-inline-start:100px] max-[1600px]:pb-[295px] max-[1199px]:[padding-inline-start:15px] max-[1199px]:[padding-inline-end:15px] max-[1199px]:pb-[110px] max-[991px]:pt-[95px] max-[991px]:pb-[100px] max-[767px]:pt-[75px] max-[767px]:pb-[80px]">
              <span className="text-[14px] font-medium tracking-[2.4px] uppercase text-[#6bc2b0] mb-[15px] inline-block">
                {
                  "CSA Cyber Essentials Mark · Singapore Cybersecurity Framework"
                }
              </span>
              <h1 className="font-bold leading-tight text-[#2B3944] text-4xl md:text-6xl text-[#FFFFFF] font-medium leading-[1.12]">
                {"Cyber Essentials Mark —"}
                <br className="max-[480px]:hidden" />
                {"certified, compliant, and grant-supported"}
              </h1>
              <p className="leading-relaxed text-[rgba(255,_255,_255,_0.8)] font-medium tracking-[0.02em] max-w-[580px] mb-[40px] max-[575px]:max-w-full">
                {
                  "Mandated for HIMS vendors, ICT vendors, HIA entities. ESG/EDG grant up to 50%. Audit, consultation & training. ICFC since 2014."
                }
              </p>
              <div>
                <SiteLink
                  className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF] gap-[8px]"
                  href="/contact-us.html"
                >
                  {"Book free assessment →"}
                  <span className="overflow-hidden relative inline-flex [transform:rotate(-45deg)]">
                    <svg
                      className="in-hover:[transform:translateX(150%)] w-[17px]"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.0743 8.70831L0.916528 8.70831L0.916528 6.87526L12.0737 6.87461L7.15722 1.95816L8.45358 0.661793L15.5836 7.79179L8.45358 14.9218L7.15722 13.6254L12.0743 8.70831Z"
                        fill="white"
                        className="[fill:#2B3944] in-hover:[fill:#FFFFFF]"
                      ></path>
                    </svg>
                  </span>
                </SiteLink>
                <SiteLink
                  className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#AB052D] hover:text-[#FFFFFF] gap-[8px] [border:1px_solid_rgba(255,_255,_255,_0.15)]"
                  href="#grant"
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] max-[991px]:pt-[100px] max-[767px]:pt-[70px] max-[480px]:pt-[60px]">
      <div className="flex flex-wrap gap-[20px] justify-center m-[40px_0]">
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[36px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"11+"}
          </div>
          <div>{"Years expertise"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[36px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"25+"}
          </div>
          <div>{"Industries served"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[36px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"3"}
          </div>
          <div>{"Service pillars"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[36px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"50%"}
          </div>
          <div>{"Max grant co-fund"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[36px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
            {"100%"}
          </div>
          <div>{"CSA-aligned"}</div>
        </div>
        <div className="[background:#f8f9fc] rounded-[20px] p-[20px_15px] text-center [flex:1] min-w-[100px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:[transform:translateY(-5px)]">
          <div className="text-[36px] font-extrabold text-[#AB052D] leading-[1] mb-[5px]">
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
      <div className="[background:#fff3e0] mb-4 rounded-md border p-4 border-amber-200 bg-amber-50 text-amber-900 border-0 p-6">
        <h4 className="font-bold leading-tight text-[#2B3944] text-2xl text-slate-900">
          {
            "🛡️ Why Singapore organisations must certify now — 2026 regulatory pressure is intensifying"
          }
        </h4>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <strong>{"MOH HIMS vendors & HIA entities:"}</strong>
            {
              " Health Information Act mandates baseline cybersecurity — Cyber Essentials is accepted pathway."
            }
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <strong>{"IMDA Telecom & ICT vendors:"}</strong>
            {" Technical specifications require demonstrable cyber hygiene."}
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <strong>{"EMA Energy & utilities CII:"}</strong>
            {
              " EMA Cyber Security Code requires Cyber Essentials as minimum baseline."
            }
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <strong>{"CSA Cyber Trust Mark:"}</strong>
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center">
          <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
            {"Singapore's national baseline cybersecurity certification"}
          </span>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"What is the CSA Cyber Essentials Mark?"}
          </h2>
          <p className="leading-relaxed mb-4">
            {
              "5 foundational domains — mandatory for HIMS vendors, HIA entities & ICT vendors"
            }
          </p>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="text-[32px]">{"🔒"}</div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Asset Management (AM)"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Inventory and classification of hardware, software, and data assets. Know what you have before you protect it."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="text-[32px]">{"🔐"}</div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Secure Configuration (SC)"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Hardening of devices, systems, and services. Removing default credentials, disabling unnecessary services."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="text-[32px]">{"🌐"}</div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Software Security (SS)"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Patch management, vulnerability remediation, and secure software deployment across the organisation."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="text-[32px]">{"🛡️"}</div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Access Control (AC)"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Principle of least privilege, multi-factor authentication (MFA), and privileged account management."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)]">
              <div className="text-[32px]">{"📡"}</div>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Malware Protection (MP)"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Anti-malware deployment, endpoint detection, and protection of email and web gateways from threats."
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:white] rounded-[20px] p-[20px] h-full [border-left:4px_solid_#AB052D] shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:[transform:translateX(5px)] bg-slate-50">
              <div className="text-[32px]">{"🏥"}</div>
              <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                {"HIMS Vendor & HIA Entity requirement"}
              </h5>
              <p className="leading-relaxed mb-4">
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
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center">
          <span className="text-[13px] font-medium leading-[28px] uppercase text-[#2B3944] mb-[10px] inline-block tracking-[2.5px]">
            {"Service pillars"}
          </span>
          <h2 className="font-bold leading-tight text-[#2B3944] text-3xl md:text-[52px]">
            {"Audit · Consulting · Training"}
          </h2>
          <p className="leading-relaxed mb-4">
            {"5 CSA domains · HIMS/HIA specialist · ESG/EDG grant managed"}
          </p>
        </div>
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"🔍"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Audits"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Baseline gap assessment · Network & infrastructure audit · HIMS/HIA compliance audit · ICT vendor audit · Pre-cert readiness."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore audit →"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"🏗️"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Consulting"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Full certification · HIMS vendor/HIA support · Cyber Trust Mark upgrade · Policy suite · ISO 27001 integration · Annual renewal."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
              >
                {"Explore consulting →"}
              </SiteLink>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[33.33333333333333%]">
            <div className="[background:#ffffff] rounded-[28px] p-[28px_22px] shadow-[0_20px_35px_-12px_rgba(0,0,0,0.08)] h-full hover:[transform:translateY(-8px)]">
              <span className="text-[42px]">{"🎓"}</span>
              <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
                {"Training"}
              </h4>
              <p className="leading-relaxed mb-4">
                {
                  "Staff awareness (English/中文) · Technical workshop · Leadership governance · Industry-specific programmes."
                }
              </p>
              <SiteLink
                href="/contact-us.html"
                className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[0] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#AB052D] w-[unset] h-[unset]"
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <div className="border-0 shadow-sm overflow-hidden">
        <div className="bg-white border-0">
          <h4 className="font-bold leading-tight text-[#2B3944] text-2xl">
            {"Cyber Essentials vs Cyber Trust Mark — which is right for you?"}
          </h4>
        </div>
        <div>
          <div className="w-full overflow-x-auto">
            <table className="[border:1px_solid_#DBDEE1] max-[991px]:w-[900px] w-full border-collapse text-left [&_th]:border-b [&_th]:border-slate-300 [&_th]:bg-slate-50 [&_th]:p-3 [&_td]:border-b [&_td]:border-slate-200 [&_td]:p-3 [&_td]:border [&_th]:border">
              <thead>
                <tr>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Criteria"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"CSA Cyber Essentials Mark"}
                  </th>
                  <th className="[border:none] p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"CSA Cyber Trust Mark"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Target organisations"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"SMEs, HIMS vendors, ICT vendors, HIA entities"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {
                      "Large enterprises, CII operators, complex IT/OT environments"
                    }
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Assessment method"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {
                      "Self-Assessment Questionnaire (SAQ) with CSA-approved assessor review"
                    }
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {
                      "Independent third-party assessment across 5 Pillars, 200+ controls"
                    }
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Coverage domains"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"5 domains: AM, SC, SS, AC, MP"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"5 Pillars: Asset, Govern, Identify, Protect, Respond"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Mandatory for HIMS vendors"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Required by MOH"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Optional — advanced pathway"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Mandatory for HIA entities"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Required under HIA framework"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Optional — advanced pathway"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"ESG/EDG grant eligible"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Yes — up to 50%"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"✓ Yes — up to 50%"}
                  </td>
                </tr>
                <tr>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"Typical timeline"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"4–8 weeks"}
                  </td>
                  <td className="p-[12px] [border-bottom:1px_solid_#eef2f6] text-[14px] [vertical-align:top]">
                    {"3–6 months"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="leading-relaxed mb-4">
            <strong>{"ICFC recommendation:"}</strong>
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
      className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]"
    >
      <div className="[background:linear-gradient(135deg,_#0a3b33_0%,_#05261f_100%)] rounded-[32px] p-[40px] text-[white] max-[768px]:p-[28px]">
        <div className="-mx-3 flex flex-wrap gap-y-6 items-center">
          <div className="w-full shrink-0 px-3 lg:w-[66.66666666666666%]">
            <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
              {
                "50% ESG / EDG grant co-funding — up to 50% of Cyber Essentials consultation costs"
              }
            </h3>
            <p className="leading-relaxed mb-4">
              {
                "Enterprise Singapore's EDG and PSG cover qualifying cybersecurity consultation fees for eligible SMEs. ICFC manages your grant application before project commencement. Integrated engagements maximise total co-funding. Transparent fixed pricing."
              }
            </p>
            <SiteLink
              className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
              href="/contact-us.html"
            >
              {"Check grant eligibility →"}
            </SiteLink>
          </div>
          <div className="w-full shrink-0 px-3 lg:w-[33.33333333333333%] text-center">
            <Icon
              name="building"
              className="text-[60px] opacity-[0.5] text-[white]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionSpaceSection3() {
  return (
    <section className="pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px] [background:#2B3944]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="-mx-3 flex flex-wrap gap-y-6">
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#AB052D]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Chief Financial Officer"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Regional Private Clinic Group · Healthcare"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  '"ICFC guided our clinic group through full Cyber Essentials certification including HIA compliance in under 6 weeks. Their HIMS vendor expertise is unmatched, and they managed our ESG grant seamlessly."'
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[50%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#AB052D]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Director of Technology"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"ICT Solutions Vendor · Government Technology"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
                {
                  '"Cyber Essentials was non-negotiable for our procurement qualification. ICFC delivered in 5 weeks, helped us claim 50% via EDG grant, and upskilled our IT team. Truly budget-friendly."'
                }
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 px-3 md:w-[100%]">
            <div className="[background:#fff] rounded-[20px] p-[24px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] m-[15px_0] [border-left:4px_solid_#AB052D]">
              <div className="flex">
                <div>
                  <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
                    {"Head of Compliance"}
                  </h5>
                  <p className="leading-relaxed text-slate-500 mb-4">
                    {"Colocation Data Centre Operator · Data Centres"}
                  </p>
                </div>
                <div className="ml-auto">{"★★★★★"}</div>
              </div>
              <p className="leading-relaxed mb-4">
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
    <div className="[background:#f8faff] rounded-[32px] p-[60px_40px] m-[50px_0] max-[768px]:p-[30px_20px]">
      <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
        <div className="text-center mb-[50px]">
          <h2 className="text-[3.5rem] font-extrabold text-[#1a2a3a] mb-[15px]">
            {"FAQs — CSA Cyber Essentials Mark"}
          </h2>
          <p className="leading-relaxed text-[1.5rem] text-[#5a6a7a] max-w-[600px] m-[0_auto]">
            {
              "Everything Singapore organisations need to know about Cyber Essentials certification, grants, and ICFC's services"
            }
          </p>
        </div>
        <div id="ceFaq">
          <AccordionItem
            title={
              <>
                {
                  "What is the CSA Cyber Essentials Mark and is it mandatory in Singapore?"
                }
              </>
            }
            className="[border:none] [background:transparent] mb-[20px]"
            defaultOpen={false}
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
            className="[border:none] [background:transparent] mb-[20px]"
            defaultOpen={false}
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
            className="[border:none] [background:transparent] mb-[20px]"
            defaultOpen={false}
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
            className="[border:none] [background:transparent] mb-[20px]"
            defaultOpen={false}
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
            className="[border:none] [background:transparent] mb-[20px]"
            defaultOpen={false}
          >
            {" "}
            {
              "The CSA Cyber Essentials Mark is a Singapore-specific baseline certification covering five foundational cybersecurity control domains, assessed via a self-assessment questionnaire. ISO/IEC 27001:2022 is an internationally recognised Information Security Management System (ISMS) standard that addresses a much broader set of 93 controls across 4 themes and requires third-party certification body audit. Cyber Essentials is faster, lighter, and lower cost — making it the ideal starting point for SMEs. ICFC's integrated programme achieves both in a single engagement."
            }
          </AccordionItem>
        </div>
      </div>
    </div>
  );
}

function ContainerSection5() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px]">
      <div className="[background:linear-gradient(135deg,_#1a2a3a,_#0f1a24)] bg-slate-900 text-white p-12 text-center">
        <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl">
          {"中文服务 · CSA 网络安全基本标志认证 · ICFC新加坡"}
        </h3>
        <p className="leading-relaxed mb-4">
          {
            "ICFC为新加坡各类企业提供全面的CSA网络安全基本标志（Cyber Essentials Mark）认证服务，涵盖医疗信息管理系统（HIMS）供应商、ICT供应商及健康信息法（HIA）实体的合规需求。我们的服务覆盖三大核心支柱：审核（Audit）、咨询（Consulting）、培训（Training），从差距评估到认证取得，全程管理，一站式服务。提供中英双语服务，帮助企业在符合IMDA、EMA、HSA、MOH及HIA监管框架的同时，申请ESG补助金及企业发展补助金（EDG），最高获得50%费用补贴。"
          }
        </p>
        <SiteLink
          href="/contact-us.html"
          className="transition-colors hover:text-[#AB052D]"
        >
          {"中文咨询 · 免费评估 →"}
        </SiteLink>
      </div>
    </div>
  );
}

function ContainerSection6() {
  return (
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pt-[120px] pb-[120px] max-[991px]:pt-[100px] max-[991px]:pb-[100px] max-[767px]:pt-[70px] max-[767px]:pb-[70px] max-[480px]:pt-[60px] max-[480px]:pb-[60px]">
      <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-center">
        {"Related services"}
      </h3>
      <div className="-mx-3 flex flex-wrap gap-y-6">
        <div className="w-full shrink-0 px-3 md:w-[25%]">
          <div className="text-center p-4 border border-slate-200">
            <span className="bg-red-700">{"🔐"}</span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"ISO 27001:2022"}
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "International ISMS standard. Integrates seamlessly with Cyber Essentials."
              }
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[25%]">
          <div className="text-center p-4 border border-slate-200">
            <span className="bg-red-700">{"🏅"}</span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"Cyber Trust Mark"}
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "Advanced tier — 5 Pillars, 200+ controls. Mandatory pathway for CII operators."
              }
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[25%]">
          <div className="text-center p-4 border border-slate-200">
            <span className="bg-red-700">{"🤖"}</span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"ISO 42001 AIMS"}
            </h5>
            <p className="leading-relaxed mb-4">
              {
                "World's first AI governance standard. MAS AI guidelines aligned."
              }
            </p>
          </div>
        </div>
        <div className="w-full shrink-0 px-3 md:w-[25%]">
          <div className="text-center p-4 border border-slate-200">
            <span className="bg-red-700">{"📋"}</span>
            <h5 className="font-bold leading-tight text-[#2B3944] text-xl">
              {"PDPA Compliance"}
            </h5>
            <p className="leading-relaxed mb-4">
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
    <div className="mx-auto w-full max-w-[1310px] px-6 min-[1441px]:max-w-[1310px] pb-[120px] max-[991px]:pb-[100px] max-[767px]:pb-[70px] max-[480px]:pb-[60px]">
      <div className="[background:#0a3b33] text-center p-12">
        <h3 className="font-bold leading-tight text-[#2B3944] text-2xl md:text-4xl text-white">
          {"Start your CSA Cyber Essentials journey today"}
        </h3>
        <p className="leading-relaxed mb-4">
          {
            "Free 30-minute cybersecurity readiness assessment. Honest gap analysis against CSA Cyber Essentials. ESG/EDG grant eligibility check included. HIMS vendor, HIA entity, and ICT vendor specialists. No obligation."
          }
        </p>
        <div>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#2B3944] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:#FFFFFF] hover:[background:#AB052D] hover:text-[#FFFFFF]"
            href="/contact-us.html"
          >
            {"Book free assessment →"}
          </SiteLink>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] text-white ml-4"
            href="/contact-us.html"
          >
            {"Check grant eligibility →"}
          </SiteLink>
          <SiteLink
            className="transition-colors hover:text-[#AB052D] text-[17px] text-[#FFFFFF] inline-flex items-center justify-center p-[14px_26px] rounded-[50px] font-medium relative z-[1] overflow-hidden [background:transparent] hover:[background:#2B3944] hover:text-[#FFFFFF] [border:1px_solid_rgba(255,_255,_255,_0.15)] text-white ml-4"
            href="/contact-us.html"
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
    <div className="m-[50px_0_30px] p-[25px_20px] [background:#f0f4f8] rounded-[20px] text-center">
      <div className="text-[1.4rem] font-bold text-[#AB052D] inline-block mb-[15px] tracking-[1px]">
        {"🔍 Related searches & keywords"}
      </div>
      <div className="text-[1.4rem] text-[#2c3e50] leading-[1.8] [word-break:break-word]">
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"CSA Cyber Essentials Mark Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"cybersecurity certification Singapore 2026"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"HIMS vendor certification MOH"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"HIA entity cybersecurity Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"ICT vendor Cyber Essentials"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"ESG grant cybersecurity Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"EDG grant Cyber Essentials"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"best cybersecurity consultant Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"budget-friendly Cyber Essentials"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"CII cybersecurity Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"Cyber Trust Mark Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"CSA Cyber Essentials audit"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"CSA certification healthcare Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"fintech cybersecurity MAS Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"data centre cybersecurity certification"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"IMDA ICT vendor compliance"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"construction cybersecurity Singapore"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"logistics cyber essentials"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"manufacturing OT cybersecurity SG"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"新加坡网络安全认证"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"CSA网络安全基本标志"}
        </span>
        <span className="inline-block [background:white] p-[5px_12px] m-[4px] rounded-[30px] text-[1.5rem] text-[#1a2a3a] hover:[background:#AB052D] hover:text-[white] max-[768px]:text-[0.75rem] max-[768px]:p-[4px_10px]">
          {"新加坡最佳网络安全顾问"}
        </span>
      </div>
    </div>
  );
}
