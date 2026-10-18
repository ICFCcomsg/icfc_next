import type { BlogPost } from "@/components/molecules/blog-card";

// Insights listing, newest first; the home page shows the first three.
export const posts: BlogPost[] = [
  {
    href: "/blogcybersecurity",
    image: "/assets/icfc/sketch-soc-attestation.svg",
    category: "Cybersecurity",
    date: "March 15, 2026",
    title:
      "Singapore Cybersecurity Act 2024 amendments: what CII operators need to certify now",
    description:
      "Understand the latest amendments and mandatory CTM Level 5 requirements for CII operators by 2027. Complete guide to compliance.",
  },
  {
    href: "/blogedg",
    image: "/assets/icfc/sketch-edge-grant.svg",
    category: "Funding",
    date: "March 10, 2026",
    title:
      "How to apply for the Enterprise Singapore EDGE Grant for ISO certification in Singapore (2026 guide)",
    description:
      "Step-by-step guide to the EDGE Grant, eligibility criteria, and the proposal details ICFC prepares for ISO certifications.",
  },
  {
    href: "/blogGreenPlan2030",
    image: "/assets/icfc/sketch-regional-reach.svg",
    category: "Sustainability",
    date: "March 5, 2026",
    title:
      "Singapore Green Plan 2030 and ISO 14001: what manufacturers need to do now",
    description:
      "Align your environmental management system with Singapore's national sustainability targets and ESG reporting requirements.",
  },
  {
    href: "/blog_ISO42001_AI",
    image: "/assets/icfc/sketch-cmmi-maturity.svg",
    category: "AI Governance",
    date: "February 28, 2026",
    title: "ISO/IEC 42001: what Singapore AI companies need to know in 2026",
    description:
      "First international AI management system standard — alignment with IMDA AI Verify, MAS AI guidelines, and EDGE Grant.",
  },
  {
    href: "/blog_ISO27701_vs_PDPA_Singapore",
    image: "/assets/icfc/sketch-gdpr-privacy.svg",
    category: "Data Privacy",
    date: "February 20, 2026",
    title:
      "ISO 27701 vs PDPA compliance: which comes first for Singapore businesses?",
    description:
      "Compare international privacy certification and Singapore's PDPA — sequencing recommendations and integrated approach.",
  },
  {
    href: "/blog_LeadAuditor_vs_InternalAuditor",
    image: "/assets/icfc/sketch-train.svg",
    category: "Training",
    date: "February 15, 2026",
    title:
      "Lead auditor vs internal auditor training: which course does your team need?",
    description:
      "Difference between CQI/IRCA lead auditor and internal auditor certifications — who needs which and SkillsFuture funding.",
  },
  {
    href: "/blog_ISO27701",
    image: "/assets/icfc/sketch-gdpr-privacy.svg",
    category: "Cybersecurity",
    date: "February 10, 2026",
    title:
      "ISO 27001 certification for cloud migration: what Singapore enterprises need to know",
    description:
      "How to maintain ISMS compliance while migrating legacy systems to AWS, Azure, or GCP.",
  },
  {
    href: "/blog_mas",
    image: "/assets/icfc/sketch-audit.svg",
    category: "Financial Services",
    date: "February 5, 2026",
    title:
      "MAS Technology Risk Management Guidelines and ISO 27001: aligning compliance for financial institutions",
    description:
      "How Singapore banks, insurers, and FinTech can satisfy MAS TRM requirements through ISO 27001 certification.",
  },
  {
    href: "/blog_wsh_mom",
    image: "/assets/icfc/sketch-impartiality.svg",
    category: "E-Waste",
    date: "January 28, 2026",
    title:
      "MOM WSH Act and ISO 45001: a practical integration guide for Singapore contractors",
    description: "",
  },
  {
    href: "/blog_bizsafe",
    image: "/assets/icfc/sketch-integrated-audit.svg",
    category: "Workplace Safety",
    date: "January 20, 2026",
    title:
      "bizSAFE STAR and ISO 45001: the direct pathway for Singapore contractors",
    description:
      "How ISO 45001 certification gives you direct entry to bizSAFE STAR, bypassing Levels 1–4.",
  },
];
