import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogIso27701VsPdpaSingaporePageContent() {
  return (
    <SitePageTemplate route="blog_ISO27701_vs_PDPA_Singapore">
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
      title="ISO 27701 vs PDPA: Which Comes First for Singapore Businesses?"
      description="Strategic privacy management: understanding the overlap between PDPA obligations and ISO 27701:2025"
      background="/assets/bg/breadcrumb-bg-thumb-01.webp"
    />
  );
}

function PostboxAreaSection() {
  return (
    <section className="pt-[120px] max-[480px]:pt-[60px] min-[480px]:max-[767px]:pt-[70px] min-[767px]:max-[991px]:pt-[100px] pb-[120px] max-[480px]:pb-[60px] min-[480px]:max-[767px]:pb-[70px] min-[767px]:max-[991px]:pb-[100px]">
      <div className="w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mr-[auto] ml-[auto] max-w-[1310px] min-[576px]:max-[768px]:max-w-[540px] min-[768px]:max-[992px]:max-w-[720px] min-[992px]:max-[1200px]:max-w-[960px] min-[1200px]:max-[1400px]:max-w-[1140px] min-[1400px]:max-[1441px]:max-w-[1320px]">
        <div className="flex flex-wrap mt-[calc(-1_*_3rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
          <div className="[flex-shrink:0] w-[66.66666667%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[58.33333333%] max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
            <div>
              <div>
                <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] flex gap-[20px] items-center max-[1600px]:flex-wrap">
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <span className="">
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                          className="[vertical-align:middle] max-w-full w-[40px] h-[40px] rounded-full"
                        />
                      </span>
                      <span className="">
                        {"By "}
                        <SiteLink
                          href="/contact-us"
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"ICFC Pte Ltd"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        className="[vertical-align:middle] w-[15px] h-[15px]"
                      >
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335ZM9.66781 3.8335C9.39447 3.8335 9.16781 3.60683 9.16781 3.3335V1.3335C9.16781 1.06016 9.39447 0.833496 9.66781 0.833496C9.94114 0.833496 10.1678 1.06016 10.1678 1.3335V3.3335C10.1678 3.60683 9.94114 3.8335 9.66781 3.8335Z"
                          fill="white"
                          className="[fill:#AB052D]"
                        ></path>
                        <path
                          d="M9.66667 15.1668H4.33333C1.9 15.1668 0.5 13.7668 0.5 11.3335V5.66683C0.5 3.2335 1.9 1.8335 4.33333 1.8335H9.66667C12.1 1.8335 13.5 3.2335 13.5 5.66683V11.3335C13.5 13.7668 12.1 15.1668 9.66667 15.1668Z"
                          fill="white"
                          className="[fill:#AB052D]"
                        ></path>
                      </svg>
                      <span className="">{"April 2026"}</span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-[8px] text-[13px]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        className="[vertical-align:middle] w-[15px] h-[15px]"
                      >
                        <path
                          d="M11.2512 8.6658C12.4108 7.03884 12.2336 4.80982 10.6497 3.35784C9.92602 2.69445 9.00345 2.28145 8.00686 2.16612C8.00067 2.15836 7.99415 2.15087 7.98734 2.14366C7.12036 1.24308 5.8748 0.726562 4.57003 0.726562C2.08709 0.726562 0 2.57655 0 4.94531C0 5.77582 0.257977 6.57197 0.748031 7.25955L0.0634453 9.40891C0.0423969 9.47497 0.0413532 9.54579 0.0604455 9.61244C0.0795378 9.67909 0.117913 9.73861 0.170746 9.78351C0.223578 9.82841 0.288507 9.85668 0.357367 9.86477C0.426226 9.87286 0.495941 9.86041 0.557742 9.82898L2.63963 8.77038C3.06717 8.95448 3.52055 9.07528 3.99005 9.13024C4.89572 10.0826 6.14801 10.5703 7.42922 10.5703C8.09522 10.5703 8.7588 10.4346 9.35953 10.1766L11.4415 11.2353C11.4908 11.2604 11.5454 11.2734 11.6008 11.2734C11.838 11.2734 12.0081 11.0422 11.9358 10.8152L11.2512 8.6658ZM2.78152 8.06299C2.73294 8.03992 2.67972 8.0283 2.62595 8.02903C2.57218 8.02976 2.5193 8.04281 2.47137 8.06719L0.988547 8.82117L1.47277 7.30087C1.49013 7.24636 1.49393 7.18843 1.48383 7.13211C1.47373 7.0758 1.45004 7.0228 1.4148 6.97772C0.949195 6.3817 0.703078 5.67893 0.703078 4.94531C0.703078 3.0068 2.43778 1.42969 4.57003 1.42969C5.42869 1.42969 6.25531 1.68982 6.92583 2.15827C4.66767 2.38533 2.85919 4.14909 2.85919 6.35156C2.85919 7.03659 3.03478 7.69608 3.36584 8.28694C3.1656 8.2274 2.97025 8.15253 2.78152 8.06299ZM9.52788 9.47341C9.47995 9.44904 9.42706 9.43599 9.37329 9.43527C9.31952 9.43455 9.26631 9.44617 9.21773 9.46924C8.66965 9.72959 8.0512 9.86719 7.42922 9.86719C5.29697 9.86719 3.56227 8.29008 3.56227 6.35156C3.56227 4.41305 5.29697 2.83594 7.42922 2.83594C9.56147 2.83594 11.2962 4.41305 11.2962 6.35156C11.2962 7.08518 11.0501 7.78795 10.5844 8.38395C10.5492 8.42903 10.5255 8.48203 10.5154 8.53834C10.5053 8.59466 10.5091 8.65259 10.5265 8.7071L11.0107 10.2274L9.52788 9.47341Z"
                          fill="#616C74"
                          className="[fill:#AB052D]"
                        ></path>
                      </svg>
                      <span className="">{"11 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"Published by ICFC Pte Ltd"}
                  </strong>
                  {
                    " | April 2026 | Categories: ISO 27701 · PDPA · Privacy management · Singapore compliance"
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Most Singapore businesses approach privacy compliance backwards. They wait for a PDPA enforcement action, a client audit request, or a data breach to trigger action — and then scramble. The result is reactive, fragmented, and impossible to demonstrate to an external auditor."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {"This article answers: "}
                  <em>
                    {
                      "do I comply with PDPA first, then pursue ISO 27701 certification? Or build the ISO management system and get PDPA compliance as a result?"
                    }
                  </em>
                  {
                    " For most organisations, ISO 27701 addresses the majority of PDPA's accountability requirements — and implementing the standard is the most efficient, auditable path to compliance."
                  }
                </p>
                <h2 className="mt-[30px] mb-[15px] font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"What is the PDPA, and what does it actually require?"}
                </h2>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "The Personal Data Protection Act 2012 (PDPA) governs how private sector organisations collect, use, disclose, and protect personal data in Singapore. Administered by the PDPC, the 2020 amendments introduced mandatory breach notification, enhanced consent, and stronger enforcement. Core obligations include Consent, Purpose Limitation, Notification, Access & Correction, Protection, Retention Limitation, Transfer Limitation, Accountability, and Data Breach Notification (within 3 calendar days)."
                  }
                </p>
                <h2 className="mt-[30px] mb-[15px] font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"What is ISO 27701, and what changed in 2025?"}
                </h2>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO/IEC 27701 is the international standard for Privacy Information Management Systems (PIMS). The "
                  }
                  <strong className="[font-weight:bolder]">
                    {"ISO 27701:2025"}
                  </strong>
                  {" edition, published October 2025, is now a "}
                  <strong className="[font-weight:bolder]">
                    {"standalone standard"}
                  </strong>
                  {
                    " — no longer requiring ISO 27001 first. It introduces the High Level Structure, focuses on 29 key privacy controls, and formalises privacy risk management. This makes privacy certification more accessible for Singapore businesses."
                  }
                </p>
                <h2 className="mt-[30px] mb-[15px] font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"How ISO 27701 maps to the PDPA's obligations"}
                </h2>
                <table className="[caption-side:bottom] [border-collapse:collapse] mt-[25px] mr-[0] mb-[25px] ml-[0] w-full [background:#f8f9fa] rounded-[12px] overflow-hidden">
                  <thead className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] [background:#AB052D] text-[white] font-semibold max-[768px]:text-[14px]">
                        {"PDPA Obligation"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] [background:#AB052D] text-[white] font-semibold max-[768px]:text-[14px]">
                        {"ISO 27701 Coverage"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] [border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] [background:#AB052D] text-[white] font-semibold max-[768px]:text-[14px]">
                        {"Gap / Note"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[border-color:inherit] [border-style:solid] [border-width:0]">
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Consent"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Annex A controls for obtaining, recording, managing consent, withdrawal procedures"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Singapore-specific deemed consent & legitimate interests not defined; must layer local rules"
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Purpose Limitation"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Clause 5 & Annex A: documented processing purposes, alignment of activities"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Direct mapping; processing activity register provides backbone"
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Notification"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Privacy notices under Annex A – purposes, data categories, retention, rights"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Content must align with PDPC advisory guidelines"}
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Access & Correction"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Controls for managing data subject rights, response timeframes"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          'PDPA requires "reasonable timeframe" (typically 30 days); specify in procedures'
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Protection"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Technical & organisational measures, access control, encryption, incident response"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Certification provides independent evidence of “reasonable arrangements”"
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Retention Limitation"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Retention policies, schedules, secure disposal"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Forces explicit retention decisions – PDPC scrutiny area"
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Transfer Limitation"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Cross-border controls, due diligence, contractual protections"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Must implement PDPC-approved mechanisms (e.g., BCRs, clauses)"
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Accountability"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Entire management system (Clauses 4-10): policies, roles, training, internal audit, review"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Certification is independently verified proof of accountability"
                        }
                      </td>
                    </tr>
                    <tr className="[border-color:inherit] [border-style:solid] [border-width:0]">
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {"Data Breach Notification"}
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "Incident management controls for detection, assessment, notification"
                        }
                      </td>
                      <td className="[border-color:inherit] [border-style:solid] [border-width:0] pt-[12px] max-[768px]:pt-[8px] pr-[16px] max-[768px]:pr-[10px] pb-[12px] max-[768px]:pb-[8px] pl-[16px] max-[768px]:pl-[10px] [border:1px_solid_#e0e4e8] [vertical-align:top] max-[768px]:text-[14px]">
                        {
                          "PDPA requires 3 calendar days to PDPC – ISO does not prescribe this timeline"
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-[20px] mr-[0] mb-[20px] ml-[0] pt-[15px] pr-[20px] pb-[15px] pl-[20px] [background:#fff3e0] [border-left:4px_solid_#AB052D] rounded-[8px]">
                  <strong className="[font-weight:bolder]">
                    {"⚠️ PDPA obligations that ISO 27701 does NOT fully cover:"}
                  </strong>
                  <br />
                  {
                    "\n            • Singapore-specific consent mechanics (deemed consent by notification/contractual necessity)"
                  }
                  <br />
                  {
                    "\n            • DPO registration with PDPC (mandatory from 1 June 2025)"
                  }
                  <br />
                  {"\n            • Do Not Call (DNC) Registry provisions"}
                  <br />
                  {
                    "\n            • NRIC number authentication phase-out (enforcement from 2027)"
                  }
                  <br />
                  {
                    "\n            • PDPC advisory guidelines and enforcement case law interpretations.\n            "
                  }
                </div>
                <h2 className="mt-[30px] mb-[15px] font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"So: which comes first? The practical answer"}
                </h2>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {
                      "For most Singapore organisations, building toward ISO 27701 certification is the most effective way to achieve PDPA compliance — provided you layer Singapore-specific requirements on top of the ISO foundation."
                    }
                  </strong>
                </p>
                <h4 className="mt-[20px] mb-[0] font-semibold leading-[1.33] text-[#AB052D] text-[18px] [word-break:break-word]">
                  {"If you have no privacy programme today"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Start with a PDPA gap analysis to establish your legal baseline. Then implement ISO 27701 as the management system that operationalises your compliance."
                  }
                </p>
                <h4 className="mt-[20px] mb-[0] font-semibold leading-[1.33] text-[#AB052D] text-[18px] [word-break:break-word]">
                  {"If you are already ISO 27001 certified"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Adding ISO 27701 (even as standalone now) is fast – typical timeline 8–12 weeks for integrated audit. You already have the governance infrastructure."
                  }
                </p>
                <h4 className="mt-[20px] mb-[0] font-semibold leading-[1.33] text-[#AB052D] text-[18px] [word-break:break-word]">
                  {"If your driver is a client contract or enforcement risk"}
                </h4>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "Address the immediate requirement first, but concurrently build the PIMS foundation."
                  }
                </p>
                <h2 className="mt-[30px] mb-[15px] font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"Why certification matters beyond legal compliance"}
                </h2>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  {
                    "ISO 27701 certification delivers cross-border data flow acceptance (maps to GDPR), enterprise procurement qualification, alignment with PDPC's Data Protection Trustmark (DPTM), and demonstrable accountability in enforcement proceedings."
                  }
                </p>
                <h2 className="mt-[30px] mb-[15px] font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"Practical implementation roadmap"}
                </h2>
                <div className="mb-[12px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] [background:#f4f7fc] rounded-[12px]">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 1 – Dual gap analysis (weeks 1-3):"}
                  </strong>
                  {
                    " Map current practices against PDPA + ISO 27701:2025 simultaneously."
                  }
                </div>
                <div className="mb-[12px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] [background:#f4f7fc] rounded-[12px]">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 2 – Data mapping & PII inventory (weeks 2-5):"}
                  </strong>
                  {
                    " Document data categories, purposes, retention, third parties."
                  }
                </div>
                <div className="mb-[12px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] [background:#f4f7fc] rounded-[12px]">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 3 – Policy & notice development (weeks 4-8):"}
                  </strong>
                  {
                    " Create PDPA-aligned privacy notices, consent forms, breach response plan."
                  }
                </div>
                <div className="mb-[12px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] [background:#f4f7fc] rounded-[12px]">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 4 – Management system implementation (weeks 6-14):"}
                  </strong>
                  {
                    " Build privacy objectives, risk assessment, internal audit, management review."
                  }
                </div>
                <div className="mb-[12px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] [background:#f4f7fc] rounded-[12px]">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 5 – Training & awareness (weeks 8-14):"}
                  </strong>
                  {" Staff training on PDPA and PIMS responsibilities."}
                </div>
                <div className="mb-[12px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] [background:#f4f7fc] rounded-[12px]">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 6 – Internal audit & readiness (weeks 14-18):"}
                  </strong>
                  {
                    " Full internal audit against ISO 27701:2025 and PDPA readiness."
                  }
                </div>
                <div className="mb-[12px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] [background:#f4f7fc] rounded-[12px]">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 7 – Certification audit:"}
                  </strong>
                  {
                    " Stage 1 (documentation) and Stage 2 (implementation) by accredited body."
                  }
                </div>
                <h2 className="mt-[30px] mb-[15px] font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"Frequently asked questions"}
                </h2>
                <div className="mb-[20px] pb-[15px] [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-[8px] text-[#AB052D] text-[18px] block">
                    {"Can I be PDPA compliant without ISO 27701 certification?"}
                  </strong>
                  {
                    " Yes – compliance is mandatory; certification is voluntary demonstration. Certification provides systematic, auditable defensibility."
                  }
                </div>
                <div className="mb-[20px] pb-[15px] [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-[8px] text-[#AB052D] text-[18px] block">
                    {"Is ISO 27701 accepted by the PDPC as evidence?"}
                  </strong>
                  {
                    " It is recognised as strong evidence of accountability and a pathway to DPTM, but PDPC assesses compliance directly under PDPA."
                  }
                </div>
                <div className="mb-[20px] pb-[15px] [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-[8px] text-[#AB052D] text-[18px] block">
                    {"Do I need ISO 27001 for ISO 27701 now?"}
                  </strong>
                  {
                    " No – ISO 27701:2025 is standalone. For FinTech/healthcare, combined approach still efficient."
                  }
                </div>
                <div className="mb-[20px] pb-[15px] [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-[8px] text-[#AB052D] text-[18px] block">
                    {"How does ISO 27701 help with cross-border transfers?"}
                  </strong>
                  {
                    " It maps to international standards and provides documented governance, but must be paired with PDPC-approved transfer mechanisms."
                  }
                </div>
                <div className="mb-[20px] pb-[15px] [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-[8px] text-[#AB052D] text-[18px] block">
                    {
                      "We have a registered DPO. Does that mean we are compliant?"
                    }
                  </strong>
                  {
                    " No – DPO registration satisfies one sub-requirement. You need policies, activity register, consent management, breach response, and training. ISO 27701 provides that infrastructure."
                  }
                </div>
                <div className="mt-[20px] mr-[0] mb-[20px] ml-[0] pt-[15px] pr-[20px] pb-[15px] pl-[20px] [background:#e8f0fe]! [border-left:4px_solid_#AB052D] rounded-[8px]">
                  <strong className="[font-weight:bolder]">
                    {"The bottom line:"}
                  </strong>
                  {
                    " PDPA compliance and ISO 27701 certification are complementary. Start with a PDPA gap analysis, implement ISO 27701 as the management system that operationalises those obligations, and layer Singapore-specific requirements on top. The result is an independently certified proof of privacy accountability — visible to regulators and credible to enterprise clients."
                  }
                </div>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <strong className="[font-weight:bolder]">
                    {"About ICFC Pte Ltd"}
                  </strong>
                  <br />
                  {
                    "Since 2014, ICFC has been Singapore's ISO certification partner. We provide ISO consultation, third-party audit, and training across 25 industries. Privacy practice covers ISO/IEC 27701 (Privacy / PDPA), ISO 27001, ISO 42001 (AI governance), and integrated systems. Contact: admin@icfc.com.sg | +65 8601 7001."
                  }
                </p>
                <p className="mt-[0] mb-[30px] text-[17px] [font-weight:normal] text-[#616C74] leading-[28px]">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only and does not constitute legal advice. PDPA and ISO requirements subject to change. Refer to official PDPC and ISO sources."
                    }
                  </em>
                </p>
                <div className="pt-[20px] pb-[20px] items-center justify-between flex gap-[30px] flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                  <div className="items-center flex flex-wrap gap-[12px]">
                    <span className="font-semibold [padding-inline-end:10px] text-[#2B3944]">
                      {"Tags:"}
                    </span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"ISO 27701"}
                    </SiteLink>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"PDPA"}
                    </SiteLink>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"Singapore Compliance"}
                    </SiteLink>
                    <SiteLink
                      href="/privacy-policy"
                      className="text-[#2B3944] [text-decoration:none] mb-[0px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] [margin-inline-end:0px] rounded-[6px] text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"Privacy Management"}
                    </SiteLink>
                  </div>
                  <div>
                    <span className="font-semibold [padding-inline-end:10px] text-[#2B3944]">
                      {"Social:"}
                    </span>
                    <div className="gap-[15px]">
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Icon
                          name="facebook"
                          className="inline-block [font-style:normal]"
                        />
                      </SiteLink>
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Icon
                          name="x"
                          className="inline-block [font-style:normal]"
                        />
                      </SiteLink>
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Icon
                          name="linkedin"
                          className="inline-block [font-style:normal]"
                        />
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="mt-[25px] mb-[12px] font-semibold leading-[1.46] text-[#2B3944] text-[22px] [word-break:break-word]">
                      {"Leave a Comment"}
                    </h3>
                  </div>
                  <EmailForm>
                    <div className="flex flex-wrap mt-[calc(-1_*_1.5rem)] mr-[calc(-.5_*_3rem)] ml-[calc(-.5_*_3rem)]">
                      <div className="[flex-shrink:0] w-[50%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                        <div className="mb-[20px]">
                          <input
                            type="text"
                            placeholder="Your Name"
                            aria-label="Your Name"
                            className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                      </div>
                      <div className="[flex-shrink:0] w-[50%] max-[1200px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                        <div className="mb-[20px]">
                          <input
                            type="email"
                            placeholder="Your Email"
                            aria-label="Your Email"
                            className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                      </div>
                      <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                        <textarea
                          placeholder="Write Message"
                          defaultValue=""
                          className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [resize:vertical] pt-[14px] pr-[24px] pb-[14px] pl-[24px] bg-[transparent] h-[50px] w-full [border:1px_solid_#DBDEE1] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:25px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        />
                      </div>
                      <div className="[flex-shrink:0] w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[1.5rem] [flex:0_0_auto]">
                        <button
                          type="submit"
                          className="rounded-[50px] mt-[0] mr-[0] mb-[0] ml-[0] text-[17px] leading-[inherit] [text-transform:none] pt-[14px] pr-[26px] pb-[14px] pl-[26px] text-[#FFFFFF] [border:none] [background:#AB052D] inline-flex items-center justify-center font-medium relative z-[1] overflow-hidden hover:[background:#2B3944] hover:text-[#FFFFFF] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
                        >
                          {"Post Comment"}
                        </button>
                      </div>
                    </div>
                  </EmailForm>
                </div>
              </div>
            </div>
          </div>
          <div className="[flex-shrink:0] w-[33.33333333%] max-[992px]:w-full max-w-full pr-[calc(3rem_*_.5)] pl-[calc(3rem_*_.5)] mt-[3rem] [flex:0_0_auto]">
            <div>
              <div className="mb-[30px] pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Search"}
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Searching..."
                        aria-label="Searching..."
                        className="mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] bg-[transparent] h-[60px] w-full [border:1px_solid_#ddd] rounded-[6px] text-[#000] [padding-inline-start:25px] [padding-inline-end:50px] focus:[border-color:#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,_30,_30,_0.4)] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                      <button
                        type="submit"
                        className="rounded-[0] mt-[0] mr-[0] mb-[0] ml-[0] text-[16px] leading-[inherit] [text-transform:none] text-[#000] [border:none] [background:transparent] absolute top-[50%] [inset-inline-end:25px] [transform:translateY(-50%)] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          className="[vertical-align:middle]"
                        >
                          <path
                            d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                          <path
                            d="M16.9995 17L13.1328 13.1333"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </EmailForm>
                </div>
              </div>
              <div className="mb-[30px] pt-[30px] max-[1199px]:pt-[20px] pr-[30px] max-[1199px]:pr-[20px] pb-[40px] max-[1199px]:pb-[20px] pl-[30px] max-[1199px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Categories"}
                </h5>
                <div>
                  <ul className="pl-[0px] mt-[0px] mb-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px]">
                    <li className="mb-[12px] list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"ISO Standards "}
                        <span className="">{"(12)"}</span>
                      </SiteLink>
                    </li>
                    <li className="mb-[12px] list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"PDPA "}
                        <span className="">{"(8)"}</span>
                      </SiteLink>
                    </li>
                    <li className="mb-[12px] list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"Data Protection "}
                        <span className="">{"(15)"}</span>
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-[inherit] [text-decoration:none] pt-[12px] pr-[20px] pb-[12px] pl-[20px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,_1,_1,_0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-[6px] text-[17px] hover:[background:#AB052D] hover:[border-color:#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"Singapore Compliance "}
                        <span className="">{"(9)"}</span>
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-[30px] pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Recent Posts"}
                </h5>
                <div>
                  <div className="mb-[20px] pb-[20px] flex max-[480px]:grid items-center gap-[20px] max-[480px]:[grid-template-columns:auto] [border-bottom:1px_solid_#DBDEE1] group/sidebar-blog-item">
                    <div className="overflow-hidden [flex:0_0_auto] w-[85px] max-[480px]:w-full rounded-[4px]">
                      <SiteLink
                        href="/contact-us"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <SiteImage
                          src="/assets/images/logo/logo.png"
                          alt=""
                          className="[vertical-align:middle] max-w-full group-hover/sidebar-blog-item:[transform:scale3d(1.07,_1.07,_1.07)] w-full rounded-[4px] [transition:all_1s_cubic-bezier(0,_0,_0.2,_1)] motion-reduce:transition-none"
                        />
                      </SiteLink>
                    </div>
                    <div>
                      <div className="mb-[10px] text-[16px] flex items-center gap-[10px]">
                        <Icon
                          name="calendar"
                          className="inline-block [font-style:normal] text-[#AB052D]"
                        />
                        <span className="">{"April 2026"}</span>
                      </div>
                      <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                        <SiteLink
                          href="/contact-us"
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"ISO 27701 vs PDPA: Which comes first?"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                  <div className="flex max-[480px]:grid items-center gap-[20px] max-[480px]:[grid-template-columns:auto] group/sidebar-blog-item">
                    <div className="overflow-hidden [flex:0_0_auto] w-[85px] max-[480px]:w-full rounded-[4px]">
                      <SiteLink
                        href="/contact-us"
                        className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[inherit] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <SiteImage
                          src="/assets/images/logo/logo.png"
                          alt=""
                          className="[vertical-align:middle] max-w-full group-hover/sidebar-blog-item:[transform:scale3d(1.07,_1.07,_1.07)] w-full rounded-[4px] [transition:all_1s_cubic-bezier(0,_0,_0.2,_1)] motion-reduce:transition-none"
                        />
                      </SiteLink>
                    </div>
                    <div>
                      <div className="mb-[10px] text-[16px] flex items-center gap-[10px]">
                        <Icon
                          name="calendar"
                          className="inline-block [font-style:normal] text-[#AB052D]"
                        />
                        <span className="">{"March 2026"}</span>
                      </div>
                      <h6 className="mt-[0px] mb-[0] [font-weight:600] leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                        <SiteLink
                          href="/contact-us"
                          className="text-[inherit] [text-decoration:none] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"Understanding ISO 42001 for AI Governance"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-[30px] max-[480px]:pt-[10px] min-[480px]:max-[991px]:pt-[20px] min-[991px]:max-[1600px]:pt-[10px] pr-[30px] max-[480px]:pr-[20px] min-[991px]:max-[1600px]:pr-[20px] pb-[38px] max-[480px]:pb-[20px] min-[480px]:max-[991px]:pb-[30px] min-[991px]:max-[1600px]:pb-[20px] pl-[30px] max-[480px]:pl-[20px] min-[991px]:max-[1600px]:pl-[20px] relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-[8px]">
                <h5 className="mt-[0px] mb-[30px] [font-weight:600] leading-[1.4] text-[#2B3944] text-[22px] pb-[12px] [word-break:break-word] relative before:[content:''] before:w-[20px] before:h-[2px] before:absolute before:[inset-inline-start:0px] before:bottom-[0] before:[background:#2B3944] after:[content:''] after:w-[65px] after:h-[2px] after:absolute after:[inset-inline-start:30px] after:bottom-[0] after:[background:#AB052D]">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-[12px]">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"ISO 27701"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"PDPA"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"PDPC"}
                  </SiteLink>
                  <SiteLink
                    href="/privacy-policy"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Privacy by Design"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Data Breach"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-[7px] max-[480px]:pt-[6px] pr-[15px] max-[480px]:pr-[13px] pb-[7px] max-[480px]:pb-[6px] pl-[15px] max-[480px]:pl-[13px] focus:[text-decoration:none] focus:text-[inherit] hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-[6px] hover:bg-[#AB052D] hover:[border-color:#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"DPO"}
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
