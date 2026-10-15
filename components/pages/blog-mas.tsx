import { Tx } from "@/components/atoms/tx";
import { SiteLink } from "@/components/atoms/site-link";
import { BlogSidebar } from "@/components/molecules/blog-sidebar";
import { BlogPostTemplate } from "@/components/templates/blog-post-template";

export function BlogMasPageContent() {
  return (
    <BlogPostTemplate
      route="blog_mas"
      ns="blog-mas"
      title="MAS TRM and ISO 27001: understanding the overlap for Singapore financial institutions"
      description="Governance, risk, incident response and third-party risk — how to build one management system that satisfies both MAS TRM and ISO/IEC 27001."
      meta={{
        authorImage: "/assets/images/blog/details/blog-details-01.webp",
        by: "By ",
        author: "ICFC Pte Ltd",
        date: "April 2026",
        readTime: "12 min read",
      }}
      tags={[
        ["MAS TRM", "/contact-us"],
        ["ISO 27001", "/contact-us"],
        ["Cyber Hygiene", "/contact-us"],
        ["Financial Services", "/services"],
      ]}
      sidebar={
        <BlogSidebar
          ns="blog-mas"
          categories={[
            ["ISO 27001 ", 12, "/contact-us"],
            ["MAS Compliance ", 8, "/contact-us"],
            ["Financial Services ", 9, "/services"],
            ["Third-party Risk ", 5, "/contact-us"],
          ]}
          popularTags={[
            ["MAS TRM 2021", "/contact-us"],
            ["Cyber Hygiene Notice", "/contact-us"],
            ["ISMS", "/contact-us"],
            ["EDGE Grant", "/contact-us"],
            ["Incident Response", "/contact-us"],
          ]}
        />
      }
    >
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
    </BlogPostTemplate>
  );
}
