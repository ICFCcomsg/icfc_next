import { AboutPageContent } from "@/components/pages/about";
import { GrantsEdgePageContent } from "@/components/pages/grants-edge";
import { Ss680PageContent } from "@/components/pages/ss-680";
import { TrainingPageContent } from "@/components/pages/training";
import { TrainingCalendarPageContent } from "@/components/pages/training-calendar";
import { TrainingFundingPageContent } from "@/components/pages/training-funding";
import { BlogDetailsPageContent } from "@/components/pages/blog-details";
import { BlogSidebarPageContent } from "@/components/pages/blog-sidebar";
import { BlogPageContent } from "@/components/pages/blog";
import { Bloggreenplan2030PageContent } from "@/components/pages/bloggreenplan2030";
import { BlogIso27701PageContent } from "@/components/pages/blog-iso27701";
import { BlogIso27701VsPdpaSingaporePageContent } from "@/components/pages/blog-iso27701-vs-pdpa-singapore";
import { BlogIso42001AiPageContent } from "@/components/pages/blog-iso42001-ai";
import { BlogLeadauditorVsInternalauditorPageContent } from "@/components/pages/blog-leadauditor-vs-internalauditor";
import { BlogLegacytocloudIso27001PageContent } from "@/components/pages/blog-legacytocloud-iso27001";
import { BlogBizsafePageContent } from "@/components/pages/blog-bizsafe";
import { BlogMasPageContent } from "@/components/pages/blog-mas";
import { BlogWshMomPageContent } from "@/components/pages/blog-wsh-mom";
import { BlogcybersecurityPageContent } from "@/components/pages/blogcybersecurity";
import { BlogedgPageContent } from "@/components/pages/blogedg";
import { IndustryPageContent } from "@/components/pages/industry";
import { MarketingPreferencesPageContent } from "@/components/pages/marketing-preferences";
import { CookieNoticePageContent } from "@/components/pages/cookie-notice";
import { LmsTermsPageContent } from "@/components/pages/lms-terms";
import { PrivacyPolicyPageContent } from "@/components/pages/privacy-policy";
import { ServicesPageContent } from "@/components/pages/services";
import { ContactUsPageContent } from "@/components/pages/contact-us";
import { VersionIndexPageContent } from "@/components/pages/version-index";

type SitePage = {
  component: () => React.ReactNode;
  title?: string;
  description?: string;
  /** Path of the original when this page duplicates another. */
  canonical?: string;
  noindex?: boolean;
};

export const sitePages = {
  "grants/edge": {
    component: GrantsEdgePageContent,
    title: "Grants (EDGE) for Standards Projects | ICFC Pte Ltd",
    description: "What EDGE covers, eligibility, step-by-step application, standards listed under EDGE, other schemes.",
  },
  "training": {
    component: TrainingPageContent,
    title: "Training and LMS | ICFC Pte Ltd",
    description: "Learn at your pace or in class: public classroom sessions, in-house sessions for your team, and online courses on the ICFC Digital LMS.",
  },
  "training/calendar": {
    component: TrainingCalendarPageContent,
    title: "Course Calendar | ICFC Pte Ltd",
    description: "Upcoming ICFC courses by month with mode, duration, fee and seats left. Book through the ICFC Digital LMS.",
  },
  "training/funding": {
    component: TrainingFundingPageContent,
    title: "Training Funding and Discounts | ICFC Pte Ltd",
    description: "How course funding, training discounts and course fees work at ICFC. Fees are in Singapore dollars and no GST is charged.",
  },
  "about/ss-680-certified-consultancy": {
    component: Ss680PageContent,
    title: "SS 680 Certified Consultancy | ICFC Pte Ltd",
    description: "SS 680:2021 is the Singapore Standard for management consultants. ICFC's consultancy is led by consultants who hold SS 680:2021 certification.",
  },
  "about": {
    component: AboutPageContent,
    title: "About ICFC | Audit, Consulting and Training Singapore",
    description: "ICFC Pte Ltd is a Singapore firm providing audit, consulting and training for ISO management systems, cybersecurity, data protection and sustainability.",
  },
  "blog-details": {
    component: BlogDetailsPageContent,
    title: "Insights | ICFC Pte Ltd",
    description: "",
    noindex: true,
  },
  "blog-sidebar": {
    component: BlogSidebarPageContent,
    title: "Insights | ICFC Pte Ltd",
    description: "",
    noindex: true,
  },
  "blog": {
    component: BlogPageContent,
    title:
      "Blog - ICFC Pte Ltd | Business Consulting & Certification Singapore",
    description:
      "Latest insights on ISO certifications, cybersecurity, sustainability, and business compliance in Singapore.",
  },
  "blogGreenPlan2030": {
    component: Bloggreenplan2030PageContent,
    title: "Singapore Green Plan 2030 and ISO 14001 for Manufacturers | ICFC",
    description:
      "Carbon tax S$45/t, mandatory energy management, waste reduction targets – ISO 14001 framework for Singapore manufacturers. Green Plan 2030 compliance roadmap.",
  },
  "blog_ISO27701": {
    component: BlogIso27701PageContent,
    // ponytail: same article as blogGreenPlan2030; point search engines at the original.
    canonical: "/blogGreenPlan2030",
    title: "Singapore Green Plan 2030 and ISO 14001 for Manufacturers | ICFC",
    description:
      "Carbon tax S$45/t, mandatory energy management, waste reduction targets – ISO 14001 framework for Singapore manufacturers. Green Plan 2030 compliance roadmap.",
  },
  "blog_ISO27701_vs_PDPA_Singapore": {
    component: BlogIso27701VsPdpaSingaporePageContent,
    title: "ISO 27701 vs PDPA Compliance: Which Comes First? | ICFC Singapore",
    description:
      "Understanding ISO 27701:2025 and Singapore PDPA compliance. Which framework should your business prioritise? Expert insights from ICFC Pte Ltd.",
  },
  "blog_ISO42001_AI": {
    component: BlogIso42001AiPageContent,
    title: "ISO/IEC 42001 for AI Companies Singapore | ICFC",
    description:
      "ISO 42001 AI Management System: what Singapore AI companies need in 2026. IMDA AI Verify crosswalk, PDPA alignment, EDGE Grant, certification roadmap.",
  },
  "blog_LeadAuditor_vs_InternalAuditor": {
    component: BlogLeadauditorVsInternalauditorPageContent,
    title:
      "Lead auditor vs internal auditor training: which course does your team need?",
    description: "Lead auditor or internal auditor training? A practical guide to matching ISO training to the job your team actually needs to do.",
  },
  "blog_LegacyToCloud_ISO27001": {
    component: BlogLegacytocloudIso27001PageContent,
    // ponytail: same article as blog_ISO42001_AI; point search engines at the original.
    canonical: "/blog_ISO42001_AI",
    title:
      "ISO/IEC 42001: What Singapore AI Companies Need to Know in 2026 | ICFC",
    description:
      "ISO/IEC 42001 AI Management System standard: requirements, Singapore AI Verify mapping, PDPA alignment, implementation roadmap and EDGE Grant information for AI companies.",
  },
  "blog_bizsafe": {
    component: BlogBizsafePageContent,
    title: "WSH Act, CoP, bizSAFE and ISO 45001 Integration | ICFC",
    description:
      "Four-layer Singapore workplace safety framework: WSH Act, Approved Codes of Practice, bizSAFE, ISO 45001. Integrated roadmap for all industries.",
  },
  "blog_mas": {
    component: BlogMasPageContent,
    title: "MAS TRM and ISO 27001 Overlap for Financial Institutions | ICFC",
    description:
      "MAS TRM Guidelines vs ISO 27001: governance, risk, incident response, third-party risk. Integrated compliance roadmap for Singapore banks, fintechs and insurers.",
  },
  "blog_wsh_mom": {
    component: BlogWshMomPageContent,
    title: "MOM WSH Act and ISO 45001 Integration Guide for Contractors | ICFC",
    description:
      "Practical integration guide for Singapore contractors: WSH Act obligations mapped to ISO 45001 clauses, bizSAFE STAR pathway, SHMS audit requirements, and implementation roadmap.",
  },
  "blogcybersecurity": {
    component: BlogcybersecurityPageContent,
    title:
      "Singapore Cybersecurity Act 2024 – What CII Operators Must Certify Now | ICFC",
    description:
      "Mandatory Cyber Trust Mark Level 5 by end-2027, 2-hour APT reporting, 3PO CII obligations, and ISO 27001 integration for Singapore CII operators.",
  },
  "blogedg": {
    component: BlogedgPageContent,
    title: "Enterprise Singapore EDGE Grant for ISO Certification 2026 | ICFC",
    description:
      "Step-by-step guide: How to apply for the Enterprise Singapore EDGE Grant for ISO certification. Up to 50% for most standards for SMEs, subject to eligibility and approval.",
  },
  "industry": {
    component: IndustryPageContent,
    title: "Industry Expertise - ICFC PTE LTD",
    description:
      "Explore ICFC PTE LTD's specialized ISO solutions across 25+ high-growth industries in Singapore, from Manufacturing to Digital Banking.",
  },
  "privacy-policy": {
    component: PrivacyPolicyPageContent,
    title: "Privacy Policy | ICFC Pte Ltd",
    description:
      "How ICFC Pte Ltd collects, uses, discloses and protects personal data under Singapore's PDPA, including marketing consent and Do Not Call rules.",
  },
  "marketing-preferences": {
    component: MarketingPreferencesPageContent,
    title: "Marketing preferences | ICFC Pte Ltd",
    description: "Choose whether ICFC may contact you with marketing.",
  },
  "cookie-notice": {
    component: CookieNoticePageContent,
    title: "Cookie Notice | ICFC Pte Ltd",
    description:
      "The cookies and similar technologies ICFC uses on icfc.com.sg, their categories and how to change your cookie settings.",
  },
  "training/lms-terms": {
    component: LmsTermsPageContent,
    title: "ICFC Digital LMS Terms and Conditions | ICFC Pte Ltd",
    description:
      "Terms and conditions for learners using the ICFC Digital learning platform at icfc.digital.",
  },
  "services": {
    component: ServicesPageContent,
    title: "Services | Audit, Consulting and Training | ICFC Pte Ltd",
    description: "ISO certification consulting, internal and supplier audits, and training for ISO 9001, 14001, 27001, 45001, 42001 and more in Singapore.",
  },
  "contact-us": {
    component: ContactUsPageContent,
    title: "Contact ICFC Pte Ltd",
    description: "Contact ICFC Pte Ltd in Singapore for ISO audit, consulting and training enquiries.",
  },
  "Version/index": {
    component: VersionIndexPageContent,
    title: "This Page Does Not Exist",
    description: "Oops, looks like the page is lost.",
    noindex: true,
  },
} satisfies Record<string, SitePage>;

export type SiteRoute = keyof typeof sitePages;

export function getSitePage(route: string) {
  return Object.hasOwn(sitePages, route) ? (sitePages[route as SiteRoute] as SitePage) : null;
}

export function sitePageRoutes() {
  return Object.keys(sitePages);
}
