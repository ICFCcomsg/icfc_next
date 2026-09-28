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
    <section className="pt-30 max-[480px]:pt-15 min-[480px]:max-[767px]:pt-17.5 min-[767px]:max-[991px]:pt-25 pb-30 max-[480px]:pb-15 min-[480px]:max-[767px]:pb-17.5 min-[767px]:max-[991px]:pb-25">
      <div className="w-full pr-6 pl-6 mr-auto ml-auto max-w-327.5 min-[576px]:max-[768px]:max-w-135 min-[768px]:max-[992px]:max-w-180 min-[992px]:max-[1200px]:max-w-240 min-[1200px]:max-[1400px]:max-w-285 min-[1400px]:max-[1441px]:max-w-330">
        <div className="flex flex-wrap -mt-12 -mr-6 -ml-6">
          <div className="shrink-0 w-[66.66666667%] max-[992px]:w-full min-[992px]:max-[1200px]:w-[58.33333333%] max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div>
              <div>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0 flex gap-5 items-center max-[1600px]:flex-wrap">
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <span className="">
                        <SiteImage
                          src="/assets/images/blog/details/blog-details-01.webp"
                          alt=""
                          className="align-middle max-w-full w-10 h-10 rounded-full"
                        />
                      </span>
                      <span className="">
                        {"By "}
                        <SiteLink
                          href="/contact-us"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"ICFC Pte Ltd"}
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        className="align-middle w-3.75 h-3.75"
                      >
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335ZM9.66781 3.8335C9.39447 3.8335 9.16781 3.60683 9.16781 3.3335V1.3335C9.16781 1.06016 9.39447 0.833496 9.66781 0.833496C9.94114 0.833496 10.1678 1.06016 10.1678 1.3335V3.3335C10.1678 3.60683 9.94114 3.8335 9.66781 3.8335Z"
                          fill="white"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M9.66667 15.1668H4.33333C1.9 15.1668 0.5 13.7668 0.5 11.3335V5.66683C0.5 3.2335 1.9 1.8335 4.33333 1.8335H9.66667C12.1 1.8335 13.5 3.2335 13.5 5.66683V11.3335C13.5 13.7668 12.1 15.1668 9.66667 15.1668Z"
                          fill="white"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                      <span className="">{"April 2026"}</span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        className="align-middle w-3.75 h-3.75"
                      >
                        <path
                          d="M11.2512 8.6658C12.4108 7.03884 12.2336 4.80982 10.6497 3.35784C9.92602 2.69445 9.00345 2.28145 8.00686 2.16612C8.00067 2.15836 7.99415 2.15087 7.98734 2.14366C7.12036 1.24308 5.8748 0.726562 4.57003 0.726562C2.08709 0.726562 0 2.57655 0 4.94531C0 5.77582 0.257977 6.57197 0.748031 7.25955L0.0634453 9.40891C0.0423969 9.47497 0.0413532 9.54579 0.0604455 9.61244C0.0795378 9.67909 0.117913 9.73861 0.170746 9.78351C0.223578 9.82841 0.288507 9.85668 0.357367 9.86477C0.426226 9.87286 0.495941 9.86041 0.557742 9.82898L2.63963 8.77038C3.06717 8.95448 3.52055 9.07528 3.99005 9.13024C4.89572 10.0826 6.14801 10.5703 7.42922 10.5703C8.09522 10.5703 8.7588 10.4346 9.35953 10.1766L11.4415 11.2353C11.4908 11.2604 11.5454 11.2734 11.6008 11.2734C11.838 11.2734 12.0081 11.0422 11.9358 10.8152L11.2512 8.6658ZM2.78152 8.06299C2.73294 8.03992 2.67972 8.0283 2.62595 8.02903C2.57218 8.02976 2.5193 8.04281 2.47137 8.06719L0.988547 8.82117L1.47277 7.30087C1.49013 7.24636 1.49393 7.18843 1.48383 7.13211C1.47373 7.0758 1.45004 7.0228 1.4148 6.97772C0.949195 6.3817 0.703078 5.67893 0.703078 4.94531C0.703078 3.0068 2.43778 1.42969 4.57003 1.42969C5.42869 1.42969 6.25531 1.68982 6.92583 2.15827C4.66767 2.38533 2.85919 4.14909 2.85919 6.35156C2.85919 7.03659 3.03478 7.69608 3.36584 8.28694C3.1656 8.2274 2.97025 8.15253 2.78152 8.06299ZM9.52788 9.47341C9.47995 9.44904 9.42706 9.43599 9.37329 9.43527C9.31952 9.43455 9.26631 9.44617 9.21773 9.46924C8.66965 9.72959 8.0512 9.86719 7.42922 9.86719C5.29697 9.86719 3.56227 8.29008 3.56227 6.35156C3.56227 4.41305 5.29697 2.83594 7.42922 2.83594C9.56147 2.83594 11.2962 4.41305 11.2962 6.35156C11.2962 7.08518 11.0501 7.78795 10.5844 8.38395C10.5492 8.42903 10.5255 8.48203 10.5154 8.53834C10.5053 8.59466 10.5091 8.65259 10.5265 8.7071L11.0107 10.2274L9.52788 9.47341Z"
                          fill="#616C74"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                      <span className="">{"11 min read"}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"Published by ICFC Pte Ltd"}
                  </strong>
                  {
                    " | April 2026 | Categories: ISO 27701 · PDPA · Privacy management · Singapore compliance"
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Most Singapore businesses approach privacy compliance backwards. They wait for a PDPA enforcement action, a client audit request, or a data breach to trigger action — and then scramble. The result is reactive, fragmented, and impossible to demonstrate to an external auditor."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
                <h2 className="mt-7.5 mb-3.75 font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"What is the PDPA, and what does it actually require?"}
                </h2>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "The Personal Data Protection Act 2012 (PDPA) governs how private sector organisations collect, use, disclose, and protect personal data in Singapore. Administered by the PDPC, the 2020 amendments introduced mandatory breach notification, enhanced consent, and stronger enforcement. Core obligations include Consent, Purpose Limitation, Notification, Access & Correction, Protection, Retention Limitation, Transfer Limitation, Accountability, and Data Breach Notification (within 3 calendar days)."
                  }
                </p>
                <h2 className="mt-7.5 mb-3.75 font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"What is ISO 27701, and what changed in 2025?"}
                </h2>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
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
                <h2 className="mt-7.5 mb-3.75 font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"How ISO 27701 maps to the PDPA's obligations"}
                </h2>
                <table className="caption-bottom border-collapse mt-6.25 mr-0 mb-6.25 ml-0 w-full [background:#f8f9fa] rounded-xl overflow-hidden">
                  <thead className="border-inherit border-solid [border-width:0]">
                    <tr className="border-inherit border-solid [border-width:0]">
                      <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top [background:#AB052D] text-[white] font-semibold max-[768px]:text-[14px]">
                        {"PDPA Obligation"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top [background:#AB052D] text-[white] font-semibold max-[768px]:text-[14px]">
                        {"ISO 27701 Coverage"}
                      </th>
                      <th className="[text-align:-webkit-match-parent] border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top [background:#AB052D] text-[white] font-semibold max-[768px]:text-[14px]">
                        {"Gap / Note"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-inherit border-solid [border-width:0]">
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Consent"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Annex A controls for obtaining, recording, managing consent, withdrawal procedures"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Singapore-specific deemed consent & legitimate interests not defined; must layer local rules"
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Purpose Limitation"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Clause 5 & Annex A: documented processing purposes, alignment of activities"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Direct mapping; processing activity register provides backbone"
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Notification"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Privacy notices under Annex A – purposes, data categories, retention, rights"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Content must align with PDPC advisory guidelines"}
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Access & Correction"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Controls for managing data subject rights, response timeframes"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          'PDPA requires "reasonable timeframe" (typically 30 days); specify in procedures'
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Protection"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Technical & organisational measures, access control, encryption, incident response"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Certification provides independent evidence of “reasonable arrangements”"
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Retention Limitation"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Retention policies, schedules, secure disposal"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Forces explicit retention decisions – PDPC scrutiny area"
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Transfer Limitation"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Cross-border controls, due diligence, contractual protections"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Must implement PDPC-approved mechanisms (e.g., BCRs, clauses)"
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Accountability"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Entire management system (Clauses 4-10): policies, roles, training, internal audit, review"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Certification is independently verified proof of accountability"
                        }
                      </td>
                    </tr>
                    <tr className="border-inherit border-solid [border-width:0]">
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {"Data Breach Notification"}
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "Incident management controls for detection, assessment, notification"
                        }
                      </td>
                      <td className="border-inherit border-solid [border-width:0] pt-3 max-[768px]:pt-2 pr-4 max-[768px]:pr-2.5 pb-3 max-[768px]:pb-2 pl-4 max-[768px]:pl-2.5 [border:1px_solid_#e0e4e8] align-top max-[768px]:text-[14px]">
                        {
                          "PDPA requires 3 calendar days to PDPC – ISO does not prescribe this timeline"
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-5 mr-0 mb-5 ml-0 pt-3.75 pr-5 pb-3.75 pl-5 [background:#fff3e0] [border-left:4px_solid_#AB052D] rounded-lg">
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
                <h2 className="mt-7.5 mb-3.75 font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"So: which comes first? The practical answer"}
                </h2>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {
                      "For most Singapore organisations, building toward ISO 27701 certification is the most effective way to achieve PDPA compliance — provided you layer Singapore-specific requirements on top of the ISO foundation."
                    }
                  </strong>
                </p>
                <h4 className="mt-5 mb-0 font-semibold leading-[1.33] text-[#AB052D] text-[18px] [word-break:break-word]">
                  {"If you have no privacy programme today"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Start with a PDPA gap analysis to establish your legal baseline. Then implement ISO 27701 as the management system that operationalises your compliance."
                  }
                </p>
                <h4 className="mt-5 mb-0 font-semibold leading-[1.33] text-[#AB052D] text-[18px] [word-break:break-word]">
                  {"If you are already ISO 27001 certified"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Adding ISO 27701 (even as standalone now) is fast – typical timeline 8–12 weeks for integrated audit. You already have the governance infrastructure."
                  }
                </p>
                <h4 className="mt-5 mb-0 font-semibold leading-[1.33] text-[#AB052D] text-[18px] [word-break:break-word]">
                  {"If your driver is a client contract or enforcement risk"}
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "Address the immediate requirement first, but concurrently build the PIMS foundation."
                  }
                </p>
                <h2 className="mt-7.5 mb-3.75 font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"Why certification matters beyond legal compliance"}
                </h2>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  {
                    "ISO 27701 certification delivers cross-border data flow acceptance (maps to GDPR), enterprise procurement qualification, alignment with PDPC's Data Protection Trustmark (DPTM), and demonstrable accountability in enforcement proceedings."
                  }
                </p>
                <h2 className="mt-7.5 mb-3.75 font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"Practical implementation roadmap"}
                </h2>
                <div className="mb-3 pt-3.75 pr-5 pb-3.75 pl-5 [background:#f4f7fc] rounded-xl">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 1 – Dual gap analysis (weeks 1-3):"}
                  </strong>
                  {
                    " Map current practices against PDPA + ISO 27701:2025 simultaneously."
                  }
                </div>
                <div className="mb-3 pt-3.75 pr-5 pb-3.75 pl-5 [background:#f4f7fc] rounded-xl">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 2 – Data mapping & PII inventory (weeks 2-5):"}
                  </strong>
                  {
                    " Document data categories, purposes, retention, third parties."
                  }
                </div>
                <div className="mb-3 pt-3.75 pr-5 pb-3.75 pl-5 [background:#f4f7fc] rounded-xl">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 3 – Policy & notice development (weeks 4-8):"}
                  </strong>
                  {
                    " Create PDPA-aligned privacy notices, consent forms, breach response plan."
                  }
                </div>
                <div className="mb-3 pt-3.75 pr-5 pb-3.75 pl-5 [background:#f4f7fc] rounded-xl">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 4 – Management system implementation (weeks 6-14):"}
                  </strong>
                  {
                    " Build privacy objectives, risk assessment, internal audit, management review."
                  }
                </div>
                <div className="mb-3 pt-3.75 pr-5 pb-3.75 pl-5 [background:#f4f7fc] rounded-xl">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 5 – Training & awareness (weeks 8-14):"}
                  </strong>
                  {" Staff training on PDPA and PIMS responsibilities."}
                </div>
                <div className="mb-3 pt-3.75 pr-5 pb-3.75 pl-5 [background:#f4f7fc] rounded-xl">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 6 – Internal audit & readiness (weeks 14-18):"}
                  </strong>
                  {
                    " Full internal audit against ISO 27701:2025 and PDPA readiness."
                  }
                </div>
                <div className="mb-3 pt-3.75 pr-5 pb-3.75 pl-5 [background:#f4f7fc] rounded-xl">
                  <strong className="[font-weight:bolder] text-[#AB052D]">
                    {"Phase 7 – Certification audit:"}
                  </strong>
                  {
                    " Stage 1 (documentation) and Stage 2 (implementation) by accredited body."
                  }
                </div>
                <h2 className="mt-7.5 mb-3.75 font-bold leading-[1.19] text-[#0a0a0a] text-[28px] max-[768px]:text-[24px] [word-break:break-word]">
                  {"Frequently asked questions"}
                </h2>
                <div className="mb-5 pb-3.75 [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-2 text-[#AB052D] text-[18px] block">
                    {"Can I be PDPA compliant without ISO 27701 certification?"}
                  </strong>
                  {
                    " Yes – compliance is mandatory; certification is voluntary demonstration. Certification provides systematic, auditable defensibility."
                  }
                </div>
                <div className="mb-5 pb-3.75 [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-2 text-[#AB052D] text-[18px] block">
                    {"Is ISO 27701 accepted by the PDPC as evidence?"}
                  </strong>
                  {
                    " It is recognised as strong evidence of accountability and a pathway to DPTM, but PDPC assesses compliance directly under PDPA."
                  }
                </div>
                <div className="mb-5 pb-3.75 [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-2 text-[#AB052D] text-[18px] block">
                    {"Do I need ISO 27001 for ISO 27701 now?"}
                  </strong>
                  {
                    " No – ISO 27701:2025 is standalone. For FinTech/healthcare, combined approach still efficient."
                  }
                </div>
                <div className="mb-5 pb-3.75 [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-2 text-[#AB052D] text-[18px] block">
                    {"How does ISO 27701 help with cross-border transfers?"}
                  </strong>
                  {
                    " It maps to international standards and provides documented governance, but must be paired with PDPC-approved transfer mechanisms."
                  }
                </div>
                <div className="mb-5 pb-3.75 [border-bottom:1px_solid_#eee]">
                  <strong className="[font-weight:bolder] mb-2 text-[#AB052D] text-[18px] block">
                    {
                      "We have a registered DPO. Does that mean we are compliant?"
                    }
                  </strong>
                  {
                    " No – DPO registration satisfies one sub-requirement. You need policies, activity register, consent management, breach response, and training. ISO 27701 provides that infrastructure."
                  }
                </div>
                <div className="mt-5 mr-0 mb-5 ml-0 pt-3.75 pr-5 pb-3.75 pl-5 [background:#e8f0fe]! [border-left:4px_solid_#AB052D] rounded-lg">
                  <strong className="[font-weight:bolder]">
                    {"The bottom line:"}
                  </strong>
                  {
                    " PDPA compliance and ISO 27701 certification are complementary. Start with a PDPA gap analysis, implement ISO 27701 as the management system that operationalises those obligations, and layer Singapore-specific requirements on top. The result is an independently certified proof of privacy accountability — visible to regulators and credible to enterprise clients."
                  }
                </div>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    {"About ICFC Pte Ltd"}
                  </strong>
                  <br />
                  {
                    "Since 2014, ICFC has been Singapore's ISO certification partner. We provide ISO consultation, third-party audit, and training across 25 industries. Privacy practice covers ISO/IEC 27701 (Privacy / PDPA), ISO 27001, ISO 42001 (AI governance), and integrated systems. Contact: admin@icfc.com.sg | +65 8601 7001."
                  }
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <em>
                    {
                      "© 2026 ICFC Pte Ltd. This article is for informational purposes only and does not constitute legal advice. PDPA and ISO requirements subject to change. Refer to official PDPC and ISO sources."
                    }
                  </em>
                </p>
                <div className="pt-5 pb-5 items-center justify-between flex gap-7.5 flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                  <div className="items-center flex flex-wrap gap-3">
                    <span className="font-semibold pe-2.5 text-[#2B3944]">
                      {"Tags:"}
                    </span>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"ISO 27701"}
                    </SiteLink>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"PDPA"}
                    </SiteLink>
                    <SiteLink
                      href="/contact-us"
                      className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"Singapore Compliance"}
                    </SiteLink>
                    <SiteLink
                      href="/privacy-policy"
                      className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                    >
                      {"Privacy Management"}
                    </SiteLink>
                  </div>
                  <div>
                    <span className="font-semibold pe-2.5 text-[#2B3944]">
                      {"Social:"}
                    </span>
                    <div className="gap-3.75">
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Icon
                          name="facebook"
                          className="inline-block not-italic"
                        />
                      </SiteLink>
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Icon
                          name="x"
                          className="inline-block not-italic"
                        />
                      </SiteLink>
                      <SiteLink
                        href="/contact-us"
                        className="text-[#616C74] [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] text-[16px] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <Icon
                          name="linkedin"
                          className="inline-block not-italic"
                        />
                      </SiteLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="mt-6.25 mb-3 font-semibold leading-[1.46] text-[#2B3944] text-[22px] [word-break:break-word]">
                      {"Leave a Comment"}
                    </h3>
                  </div>
                  <EmailForm>
                    <div className="flex flex-wrap -mt-6 -mr-6 -ml-6">
                      <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                        <div className="mb-5">
                          <input
                            type="text"
                            placeholder="Your Name"
                            aria-label="Your Name"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                      </div>
                      <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                        <div className="mb-5">
                          <input
                            type="email"
                            placeholder="Your Email"
                            aria-label="Your Email"
                            className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                          />
                        </div>
                      </div>
                      <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                        <textarea
                          placeholder="Write Message"
                          defaultValue=""
                          className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] resize-y pt-3.5 pr-6 pb-3.5 pl-6 bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        />
                      </div>
                      <div className="shrink-0 w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                        <button
                          type="submit"
                          className="rounded-[50px] mt-0 mr-0 mb-0 ml-0 text-[17px] leading-[inherit] normal-case pt-3.5 pr-6.5 pb-3.5 pl-6.5 text-[#FFFFFF] [border:none] [background:#AB052D] inline-flex items-center justify-center font-medium relative z-1 overflow-hidden hover:[background:#2B3944] hover:text-[#FFFFFF] [transition:all_0.4s_ease-out_0s] motion-reduce:transition-none"
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
          <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div>
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  {"Search"}
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Searching..."
                        aria-label="Searching..."
                        className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-15 w-full [border:1px_solid_#ddd] rounded-md text-black ps-6.25 pe-12.5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                      <button
                        type="submit"
                        className="rounded-none mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] normal-case text-black [border:none] [background:transparent] absolute top-[50%] inset-e-6.25 transform-[translateY(-50%)] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          className="align-middle"
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
              <div className="mb-7.5 pt-7.5 max-[1199px]:pt-5 pr-7.5 max-[1199px]:pr-5 pb-10 max-[1199px]:pb-5 pl-7.5 max-[1199px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  {"Categories"}
                </h5>
                <div>
                  <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                    <li className="mb-3 list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"ISO Standards "}
                        <span className="">{"(12)"}</span>
                      </SiteLink>
                    </li>
                    <li className="mb-3 list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"PDPA "}
                        <span className="">{"(8)"}</span>
                      </SiteLink>
                    </li>
                    <li className="mb-3 list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"Data Protection "}
                        <span className="">{"(15)"}</span>
                      </SiteLink>
                    </li>
                    <li className="list-none">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] pt-3 pr-5 pb-3 pl-5 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_rgba(2,1,1,0.09)] [background:#FFFFFF] flex items-center justify-between font-medium rounded-md text-[17px] hover:[background:#AB052D] hover:border-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        {"Singapore Compliance "}
                        <span className="">{"(9)"}</span>
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  {"Recent Posts"}
                </h5>
                <div>
                  <div className="mb-5 pb-5 flex max-[480px]:grid items-center gap-5 max-[480px]:grid-cols-[auto] [border-bottom:1px_solid_#DBDEE1] group/sidebar-blog-item">
                    <div className="overflow-hidden flex-[0_0_auto] w-21.25 max-[480px]:w-full rounded-sm">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <SiteImage
                          src="/assets/images/logo/logo.png"
                          alt=""
                          className="align-middle max-w-full group-hover/sidebar-blog-item:transform-[scale3d(1.07,1.07,1.07)] w-full rounded-sm [transition:all_1s_cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none"
                        />
                      </SiteLink>
                    </div>
                    <div>
                      <div className="mb-2.5 text-[16px] flex items-center gap-2.5">
                        <Icon
                          name="calendar"
                          className="inline-block not-italic text-[#AB052D]"
                        />
                        <span className="">{"April 2026"}</span>
                      </div>
                      <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                        <SiteLink
                          href="/contact-us"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"ISO 27701 vs PDPA: Which comes first?"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                  <div className="flex max-[480px]:grid items-center gap-5 max-[480px]:grid-cols-[auto] group/sidebar-blog-item">
                    <div className="overflow-hidden flex-[0_0_auto] w-21.25 max-[480px]:w-full rounded-sm">
                      <SiteLink
                        href="/contact-us"
                        className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      >
                        <SiteImage
                          src="/assets/images/logo/logo.png"
                          alt=""
                          className="align-middle max-w-full group-hover/sidebar-blog-item:transform-[scale3d(1.07,1.07,1.07)] w-full rounded-sm [transition:all_1s_cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none"
                        />
                      </SiteLink>
                    </div>
                    <div>
                      <div className="mb-2.5 text-[16px] flex items-center gap-2.5">
                        <Icon
                          name="calendar"
                          className="inline-block not-italic text-[#AB052D]"
                        />
                        <span className="">{"March 2026"}</span>
                      </div>
                      <h6 className="mt-0 mb-0 font-semibold leading-[1.44] text-[#2B3944] text-[18px] max-[1199px]:text-[16px] [word-break:break-word]">
                        <SiteLink
                          href="/contact-us"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#AB052D] [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          {"Understanding ISO 42001 for AI Governance"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-7.5 font-semibold leading-[1.4] text-[#2B3944] text-[22px] pb-3 [word-break:break-word] relative before:[content:''] before:w-5 before:h-0.5 before:absolute before:inset-s-0 before:bottom-0 before:[background:#2B3944] after:[content:''] after:w-16.25 after:h-0.5 after:absolute after:inset-s-7.5 after:bottom-0 after:[background:#AB052D]">
                  {"Popular Tags"}
                </h5>
                <div className="flex flex-wrap gap-3">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"ISO 27701"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"PDPA"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"PDPC"}
                  </SiteLink>
                  <SiteLink
                    href="/privacy-policy"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Privacy by Design"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    {"Data Breach"}
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
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
