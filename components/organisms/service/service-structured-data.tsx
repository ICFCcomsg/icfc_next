import { getDictionary, type ServiceContent } from "@/lib/dictionary";
import { breadcrumbJsonLd, faqJsonLd, jsonLdHtml, serviceJsonLd } from "@/lib/jsonld";

/** Service, FAQPage and BreadcrumbList JSON-LD for a service page. */
export async function ServiceStructuredData({ service: s }: { service: ServiceContent }) {
  const L = (await getDictionary()).service;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLdHtml([
          serviceJsonLd({ ...s, path: `/services/${s.slug}` }),
          faqJsonLd(s.faqs),
          breadcrumbJsonLd([
            { name: L.breadcrumb_home, path: "/" },
            { name: L.breadcrumb_services, path: "/services" },
            { name: s.name, path: `/services/${s.slug}` },
          ]),
        ]),
      }}
    />
  );
}
