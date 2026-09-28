import { SitePageTemplate } from "@/components/templates/site-page-template";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { BlogCard, type BlogPost } from "@/components/molecules/blog-card";

const posts: BlogPost[] = [
  {
    href: "/blogcybersecurity",
    image: "/assets/images/blog/blog-thumb-01.webp",
    category: "Cybersecurity",
    date: "March 15, 2026",
    title:
      "Singapore Cybersecurity Act 2024 amendments: what CII operators need to certify now",
    description:
      "Understand the latest amendments and mandatory CTM Level 5 requirements for CII operators by 2027. Complete guide to compliance.",
  },
  {
    href: "/blogedg",
    image: "/assets/images/blog/blog-thumb-04.webp",
    category: "Funding",
    date: "March 10, 2026",
    title:
      "How to apply for the Enterprise Singapore EDG grant for ISO certification in Singapore (2026 guide)",
    description:
      "Step-by-step guide to EDG grant application, eligibility criteria, and how ICFC helps maximise your co-funding for ISO certifications.",
  },
  {
    href: "/blogGreenPlan2030",
    image: "/assets/images/blog/blog-thumb-08.webp",
    category: "Sustainability",
    date: "March 5, 2026",
    title:
      "Singapore Green Plan 2030 and ISO 14001: what manufacturers need to do now",
    description:
      "Align your environmental management system with Singapore's national sustainability targets and ESG reporting requirements.",
  },
  {
    href: "/blog_ISO42001_AI",
    image: "/assets/images/blog/blog-thumb-05.webp",
    category: "AI Governance",
    date: "February 28, 2026",
    title: "ISO/IEC 42001: what Singapore AI companies need to know in 2026",
    description:
      "First international AI management system standard — alignment with IMDA AI Verify, MAS AI guidelines, and EDG grant.",
  },
  {
    href: "/blog_ISO27701_vs_PDPA_Singapore",
    image: "/assets/images/blog/blog-thumb-04.webp",
    category: "Data Privacy",
    date: "February 20, 2026",
    title:
      "ISO 27701 vs PDPA compliance: which comes first for Singapore businesses?",
    description:
      "Compare international privacy certification and Singapore's PDPA — sequencing recommendations and integrated approach.",
  },
  {
    href: "/blog_LeadAuditor_vs_InternalAuditor",
    image: "/assets/images/blog/blog-thumb-05.webp",
    category: "Training",
    date: "February 15, 2026",
    title:
      "Lead auditor vs internal auditor training: which course does your team need?",
    description:
      "Difference between CQI/IRCA lead auditor and internal auditor certifications — who needs which and SkillsFuture funding.",
  },
  {
    href: "/blog_ISO27701",
    image: "/assets/images/blog/blog-thumb-01.webp",
    category: "Cybersecurity",
    date: "February 10, 2026",
    title:
      "ISO 27001 certification for cloud migration: what Singapore enterprises need to know",
    description:
      "How to maintain ISMS compliance while migrating legacy systems to AWS, Azure, or GCP.",
  },
  {
    href: "/blog_mas",
    image: "/assets/images/blog/blog-thumb-08.webp",
    category: "Financial Services",
    date: "February 5, 2026",
    title:
      "MAS Technology Risk Management Guidelines and ISO 27001: aligning compliance for financial institutions",
    description:
      "How Singapore banks, insurers, and FinTech can satisfy MAS TRM requirements through ISO 27001 certification.",
  },
  {
    href: "/blog_wsh_mom",
    image: "/assets/images/blog/blog-thumb-04.webp",
    category: "E-Waste",
    date: "January 28, 2026",
    title:
      "MOM WSH Act and ISO 45001: a practical integration guide for Singapore contractors",
    description: "",
  },
  {
    href: "/blog_bizsafe",
    image: "/assets/images/blog/blog-thumb-05.webp",
    category: "Workplace Safety",
    date: "January 20, 2026",
    title:
      "bizSAFE STAR and ISO 45001: the direct pathway for Singapore contractors",
    description:
      "How ISO 45001 certification gives you direct entry to bizSAFE STAR, bypassing Levels 1–4.",
  },
];

export function BlogPageContent() {
  return (
    <SitePageTemplate route="blog">
      <main>
        <SiteBreadcrumb
          title="Blog"
          description="Latest insights on ISO certifications, cybersecurity, sustainability, and business compliance in Singapore"
          background="/assets/bg/breadcrumb-bg-thumb-01.webp"
        />
        <section
          aria-label="Latest articles"
          className="relative py-[120px] max-[991px]:py-[100px] max-[767px]:py-[70px] max-[480px]:py-[60px]"
        >
          <div className="mx-auto w-full px-6 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] min-[1441px]:max-w-[1310px]">
            <div className="grid grid-cols-1 gap-12 min-[768px]:grid-cols-2 min-[992px]:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.href} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </SitePageTemplate>
  );
}
