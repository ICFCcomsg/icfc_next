import { Tx } from "@/components/atoms/tx";
import { Icon } from "@/components/atoms/icon";
import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { SiteImage } from "@/components/atoms/site-image";
import { SiteLink } from "@/components/atoms/site-link";
import { EmailForm } from "@/components/molecules/email-form";

export function BlogMasPageContent() {
  return (
    <SitePageTemplate route="blog_mas">
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
      title={<Tx ns="blog-mas">{"MAS TRM and ISO 27001: understanding the overlap for Singapore financial institutions"}</Tx>}
      description={<Tx ns="blog-mas">{"Governance, risk, incident response and third-party risk — how to build one management system that satisfies both MAS TRM and ISO/IEC 27001."}</Tx>}
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
                        <Tx ns="blog-mas">{"By "}</Tx>
                        <SiteLink
                          href="/contact-us"
                          className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                        >
                          <Tx ns="blog-mas">{"ICFC Pte Ltd"}</Tx>
                        </SiteLink>
                      </span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <svg
                        width="14"
                        height="16"
                        className="align-middle w-3.75 h-3.75"
                      >
                        <path
                          d="M4.33447 3.8335C4.06114 3.8335 3.83447 3.60683 3.83447 3.3335V1.3335C3.83447 1.06016 4.06114 0.833496 4.33447 0.833496C4.60781 0.833496 4.83447 1.06016 4.83447 1.3335V3.3335C4.83447 3.60683 4.60781 3.8335 4.33447 3.8335Z"
                          fill="white"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                      <span className=""><Tx ns="blog-mas">{"April 2026"}</Tx></span>
                    </span>
                  </li>
                  <li className="list-none">
                    <span className="flex items-center gap-2 text-[13px]">
                      <svg
                        width="12"
                        height="12"
                        className="align-middle w-3.75 h-3.75"
                      >
                        <path
                          d="M6 12C9.30799 12 12 9.30799 12 6C12 2.69201 9.30803 0 6 0C2.69197 0 0 2.69201 0 6C0 9.30799 2.69201 12 6 12Z"
                          fill="#616C74"
                          className="fill-[#AB052D]"
                        ></path>
                        <path
                          d="M7.74961 7.9119C7.82362 7.97189 7.91159 7.99991 7.9996 7.99991C8.05955 8.00003 8.11874 7.9866 8.17277 7.96063C8.22679 7.93465 8.27425 7.89681 8.31159 7.84991C8.44959 7.6779 8.42157 7.4259 8.2496 7.2879L6.3996 5.8079V2.7999C6.3996 2.57989 6.21961 2.3999 5.9996 2.3999C5.7796 2.3999 5.59961 2.57989 5.59961 2.7999V5.99991C5.59961 6.12192 5.65562 6.23591 5.74961 6.31189L7.74961 7.9119Z"
                          fill="#616C74"
                          className="fill-[#AB052D]"
                        ></path>
                      </svg>
                      <span className=""><Tx ns="blog-mas">{"12 min read"}</Tx></span>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Published by ICFC Pte Ltd"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" | April 2026 | 12 min read"}</Tx>
                  <br />
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Categories:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" ISO 27001 · MAS TRM · Financial services · Cybersecurity · Singapore compliance"}</Tx>
                </p>
                <hr className="mt-0 mr-0 mb-0 ml-0 text-inherit [border:none] [border-top:1px_solid] opacity-[1] h-px bg-[#ececec]" />
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-mas">{"If you are a compliance officer, CISO, or technology risk manager at a Singapore financial institution, you are almost certainly managing two sets of information security obligations simultaneously: the Monetary Authority of Singapore's Technology Risk Management (TRM) Guidelines, and the growing expectation — from enterprise clients, group headquarters, and your own board — that your organisation hold ISO/IEC 27001 certification."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-mas">{"The good news: these two frameworks share far more common ground than most financial institutions realise. A well-structured ISO 27001 implementation addresses a significant majority of MAS TRM requirements. The practical challenge is knowing exactly where the overlap lies, where the gaps are, and how to build one management system that satisfies both — without running two parallel compliance programmes."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-mas">{"This article provides that map."}</Tx>
                </p>
                <div className="mt-[1.8rem] mr-0 mb-[1.8rem] ml-0 pt-6 pr-[1.8rem] pb-6 pl-[1.8rem] [background:#f0f9f4] [border-left:4px_solid_#1a5d3c] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"📌 Key insight:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" MAS TRM Guidelines (supervisory expectations with legal teeth) and ISO 27001 (independent certification) share ~70-80% control overlap. A single ISMS can satisfy both with targeted supplementary controls for incident reporting thresholds, online financial services security, and MAS-specific governance.\n                                "}</Tx>
                </div>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"Understanding the two frameworks"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"MAS TRM Guidelines"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" – comprehensive risk management principles, last revised January 2021. Apply to all MAS-regulated entities (banks, insurers, payment firms). Not strictly legally binding but enforced through supervisory exams; functionally equivalent to regulation. Supplemented by legally binding MAS Cyber Hygiene Notice (May 2024)."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"ISO/IEC 27001"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" – international ISMS standard, Annex A 93 controls (2022 version). Risk-based framework, third-party accredited certification. Recognised globally by regulators and procurement panels."}</Tx>
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"Where the frameworks converge: key overlap areas"}</Tx>
                </h4>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Governance & accountability"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – Board-level oversight (Clause 5 & TRM Sections 3-4). Both require documented security roles and management commitment."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Risk management"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – Systematic risk assessment processes (Clause 6.1 vs TRM risk identification/mitigation)."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Access control & MFA"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – Annex A.5.15–A.5.18 aligns with MAS Cyber Hygiene Notice and privileged access rules."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Vulnerability & patch management"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – Annex A.8.8 directly maps to TRM vulnerability assessment and patching expectations."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Incident management (partial)"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – Annex A.5.24–A.5.28 covers operational incident response; MAS-specific notification thresholds remain gap."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Third-party risk"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – Annex A.5.19–A.5.22 (supplier relationships) aligns with TRM's vendor due diligence and contractual requirements."}</Tx>
                  </li>
                </ul>
                <div className="mt-[1.8rem] mr-0 mb-[1.8rem] ml-0 pt-6 pr-[1.8rem] pb-6 pl-[1.8rem] [background:#f0f9f4] [border-left:4px_solid_#1a5d3c] rounded-[0_16px_16px_0]">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"⚠️ Where ISO 27001 alone is not sufficient (MAS TRM Gaps)"}</Tx>
                  </strong>
                  <br />
                  {"\n                                    • "}
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"MAS incident reporting thresholds:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Quantitative system unavailability, data breach, transaction criteria – not defined in ISO 27001."}</Tx>
                  <br />
                  {"\n                                    • "}
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Online financial services security:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Section 14 requirements (2FA for customers, fraud monitoring) – no direct ISO equivalent."}</Tx>
                  <br />
                  {"\n                                    • "}
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Board-level TRM governance:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Specific committee terms, risk appetite – ISO 27001 leadership clause is less prescriptive."}</Tx>
                  <br />
                  {"\n                                    • "}
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Material outsourcing notification:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Pre-notification to MAS for material outsourced functions – beyond Annex A supplier controls."}</Tx>
                  <br />
                  {"\n                                    • "}
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Quantitative resilience targets:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" TRM sets RTO/RPO thresholds; ISO 27001 only requires defined objectives, not numerical levels.\n                                "}</Tx>
                </div>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"Three scenarios: banks, FinTechs, and vendors"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Banks & major FIs with ISO 27001:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Gap analysis + explicit integration of MAS-specific controls into existing ISMS documentation."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"FinTechs applying for MAS licence:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Pursue ISO 27001 first – certification demonstrates auditable TRM alignment, speeds up licence review, and satisfies banking client due diligence."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Vendors/TPs to FIs:"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" ISO 27001 is commercial necessity; widely accepted as evidence during MAS-regulated vendor due diligence."}</Tx>
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"Building one integrated system: ICFC approach"}</Tx>
                </h4>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Dual-framework gap analysis"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – single roadmap labelled ISO-only, TRM-only, common."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Unified scope definition"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – ensure all MAS-regulated systems inside ISMS scope."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Integrated policy framework"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – cross-reference TRM sections within ISMS documents for clear traceability."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"TRM supplementary controls module"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – incident reporting thresholds, online security, material outsourcing notification."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Single internal audit programme"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – covers ISO clauses + TRM sections simultaneously."}</Tx>
                  </li>
                  <li className="">
                    <strong className="[font-weight:bolder]">
                      <Tx ns="blog-mas">{"Examination-ready evidence packages"}</Tx>
                    </strong>
                    <Tx ns="blog-mas">{" – structured for ISO surveillance audits and MAS thematic reviews."}</Tx>
                  </li>
                </ul>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"What MAS examiners look for"}</Tx>
                </h4>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                  <li className="">
                    <Tx ns="blog-mas">{"Board minutes / technology risk committee terms"}</Tx>
                  </li>
                  <li className="">
                    <Tx ns="blog-mas">{"Complete technology risk assessments and action logs"}</Tx>
                  </li>
                  <li className="">
                    <Tx ns="blog-mas">{"Incident records including timeliness of MAS reporting"}</Tx>
                  </li>
                  <li className="">
                    <Tx ns="blog-mas">{"Vendor due diligence files for all material third parties"}</Tx>
                  </li>
                  <li className="">
                    <Tx ns="blog-mas">{"Penetration testing schedules, findings, remediation evidence"}</Tx>
                  </li>
                  <li className="">
                    <Tx ns="blog-mas">{"DR test results and gap closure plans"}</Tx>
                  </li>
                </ul>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-mas">{"ISO 27001's documentation architecture naturally creates exactly this evidence trail."}</Tx>
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"MAS AI Risk Management Guidelines (coming 2026)"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-mas">{"MAS released AI Risk Management Guidelines (Nov 2025 consultation) – expected finalisation 2026. Built on FEAT principles (Fairness, Ethics, Accountability, Transparency). Institutions with ISO 27001 ISMS can extend to ISO/IEC 42001 (AI Management System) efficiently rather than building standalone AI governance."}</Tx>
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"Frequently Asked Questions"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Does ISO 27001 satisfy MAS TRM?"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Not entirely, but covers majority. Need to address gap areas (incident thresholds, online security, material outsourcing notification, resilience targets)."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Can I show ISO 27001 certificate to MAS examiners?"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Recognised as strong evidence but does not substitute direct TRM compliance assessment."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Our ISMS scope excludes some MAS-regulated systems – is that an issue?"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Yes – scope misalignment is a significant examination risk. Alignment between ISO 27001 and TRM scope must be explicit."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"How long does integrated implementation take?"}</Tx>
                  </strong>
                  <Tx ns="blog-mas">{" Typically 4–8 months (SMEs) to 8–12 months (complex institutions). ICFC scoping assessment provides realistic timeline."}</Tx>
                </p>
                <h4 className="mt-[1.8rem] mb-[0.8rem] font-bold leading-[1.33] text-[#2B3944] text-[30px] max-[991px]:text-[22px] min-[991px]:max-[1600px]:text-[24px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"The bottom line"}</Tx>
                </h4>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <Tx ns="blog-mas">{"MAS TRM and ISO 27001 are complementary, not competing. A single integrated ISMS is more efficient and produces a more defensible posture for board, MAS examiners, and enterprise clients. ICFC has supported Singapore financial institutions — from licensed FinTechs to insurers — since 2014."}</Tx>
                </p>
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"Complimentary dual-framework gap assessment available as part of free initial consultation."}</Tx>
                  </strong>
                </p>
                <hr className="mt-0 mr-0 mb-0 ml-0 text-inherit [border:none] [border-top:1px_solid] opacity-[1] h-px bg-[#ececec]" />
                <p className="mt-0 mb-7.5 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <strong className="[font-weight:bolder]">
                    <Tx ns="blog-mas">{"About ICFC Pte Ltd"}</Tx>
                  </strong>
                  <br />
                  <Tx ns="blog-mas">{"Since 2014, Singapore's ISO certification partner. Financial services practice: ISO/IEC 27001, ISO/IEC 27701, ISO/IEC 42001, ISO 22301, and MAS TRM alignment. Contact: "}</Tx>
                  <SiteLink
                    href="mailto:admin@icfc.com.sg"
                    className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"admin@icfc.com.sg"}</Tx>
                  </SiteLink>
                  {" | +65 8601 7001."}
                </p>
                <p className="mt-0 mb-0 text-[17px] [font-weight:normal] text-[#616C74] leading-7">
                  <em>
                    <Tx ns="blog-mas">{"© 2026 ICFC Pte Ltd. This article is for informational purposes only. MAS Guidelines and ISO standards subject to change. Always refer to official sources."}</Tx>
                  </em>
                </p>
              </div>
              <div className="mt-10 pt-5 pb-5 items-center justify-between flex gap-7.5 flex-wrap [border-top:1px_solid_#DBDEE1] [border-bottom:1px_solid_#DBDEE1]">
                <div className="items-center flex flex-wrap gap-3">
                  <span className="font-semibold pe-2.5 text-[#2B3944]">
                    <Tx ns="blog-mas">{"Tags:"}</Tx>
                  </span>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"MAS TRM"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"ISO 27001"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"Cyber Hygiene"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/services"
                    className="text-[#2B3944] [text-decoration:none] mb-0 pt-1.5 pr-3.75 pb-1.5 pl-3.75 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] me-0 rounded-md text-[16px] max-[480px]:text-[14px] relative font-medium hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"Financial Services"}</Tx>
                  </SiteLink>
                </div>
                <div>
                  <span className="font-semibold pe-2.5 text-[#2B3944]">
                    <Tx ns="blog-mas">{"Share:"}</Tx>
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
                <h3 className="mt-0 mb-0 font-semibold leading-[1.46] text-[#2B3944] text-[36px] max-[480px]:text-[20px] min-[480px]:max-[767px]:text-[22px] min-[767px]:max-[991px]:text-[24px] min-[991px]:max-[1600px]:text-[26px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"Leave a Comment"}</Tx>
                </h3>
                <EmailForm>
                  <div className="flex flex-wrap -mt-6 -mr-6 -ml-6">
                    <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                      <input
                        type="text"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                    </div>
                    <div className="shrink-0 w-[50%] max-[1200px]:w-full max-w-full pr-6 pl-6 mt-6 flex-[0_0_auto]">
                      <input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-12.5 w-full [border:1px_solid_#DBDEE1] rounded-md text-black ps-6.25 pe-6.25 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
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
                        <Tx ns="blog-mas">{"Post Comment"}</Tx>
                      </button>
                    </div>
                  </div>
                </EmailForm>
              </div>
            </div>
          </div>
          <div className="shrink-0 w-[33.33333333%] max-[992px]:w-full max-w-full pr-6 pl-6 mt-12 flex-[0_0_auto]">
            <div className="sticky max-[991px]:relative top-27.5 max-[991px]:top-[unset]">
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"Search"}</Tx>
                </h5>
                <div>
                  <EmailForm>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        aria-label="Search..."
                        className="mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] bg-transparent h-15 w-full [border:1px_solid_#ddd] rounded-md text-black ps-6.25 pe-12.5 focus:border-[#AB052D] placeholder:opacity-[1] placeholder:text-[16px] placeholder:font-normal placeholder:text-[rgba(30,30,30,0.4)] [background:#FFFFFF] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                      />
                      <button className="rounded-none mt-0 mr-0 mb-0 ml-0 text-[16px] leading-[inherit] normal-case text-black [border:none] [background:transparent] absolute top-[50%] inset-e-6.25 transform-[translateY(-50%)] hover:text-[#AB052D] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none">
                        <svg
                          width="18"
                          height="18"
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
              <div className="mb-7.5 pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"Categories"}</Tx>
                </h5>
                <ul className="pl-0 mt-0 mb-0 mr-0 ml-0 pt-0 pr-0 pb-0">
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-mas">{"ISO 27001 "}</Tx>
                      <span className="">{"(12)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-mas">{"MAS Compliance "}</Tx>
                      <span className="">{"(8)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/services"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-mas">{"Financial Services "}</Tx>
                      <span className="">{"(9)"}</span>
                    </SiteLink>
                  </li>
                  <li className="">
                    <SiteLink
                      href="/contact-us"
                      className="text-inherit [text-decoration:none] focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-inherit [border:none] [background:transparent] [transition:all_0.3s_0s_ease-out] motion-reduce:transition-none"
                    >
                      <Tx ns="blog-mas">{"Third-party Risk "}</Tx>
                      <span className="">{"(5)"}</span>
                    </SiteLink>
                  </li>
                </ul>
              </div>
              <div className="pt-7.5 max-[480px]:pt-2.5 min-[480px]:max-[991px]:pt-5 min-[991px]:max-[1600px]:pt-2.5 pr-7.5 max-[480px]:pr-5 min-[991px]:max-[1600px]:pr-5 pb-9.5 max-[480px]:pb-5 min-[480px]:max-[991px]:pb-7.5 min-[991px]:max-[1600px]:pb-5 pl-7.5 max-[480px]:pl-5 min-[991px]:max-[1600px]:pl-5 relative [background:#F8F8F9] [border:1px_solid_#DBDEE1] rounded-lg">
                <h5 className="mt-0 mb-0 font-semibold leading-[1.4] text-[#2B3944] text-[24px] max-[575px]:text-[20px] min-[575px]:max-[991px]:text-[22px] min-[991px]:max-[1199px]:text-[20px] min-[1199px]:max-[1600px]:text-[22px] [word-break:break-word]">
                  <Tx ns="blog-mas">{"Popular Tags"}</Tx>
                </h5>
                <div className="flex flex-wrap gap-3">
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"MAS TRM 2021"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"Cyber Hygiene Notice"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"ISMS"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"EDGE Grant"}</Tx>
                  </SiteLink>
                  <SiteLink
                    href="/contact-us"
                    className="text-[#2B3944] [text-decoration:none] pt-1.75 max-[480px]:pt-1.5 pr-3.75 max-[480px]:pr-3.25 pb-1.75 max-[480px]:pb-1.5 pl-3.75 max-[480px]:pl-3.25 focus:[text-decoration:none] focus:text-inherit hover:[text-decoration:none] hover:text-[#FFFFFF] [border:1px_solid_#DBDEE1] [background:#FFFFFF] text-[16px] max-[480px]:text-[14px] relative font-medium rounded-md hover:bg-[#AB052D] hover:border-[#AB052D] [transition:0.3s] motion-reduce:transition-none"
                  >
                    <Tx ns="blog-mas">{"Incident Response"}</Tx>
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
