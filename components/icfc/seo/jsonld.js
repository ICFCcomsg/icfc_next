/** Structured data builders. Render the result inside <script type="application/ld+json"> in the page head. */
const SITE = "https://icfc.com.sg";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org", "@type": "ProfessionalService", "@id": SITE + "/#org",
    name: "ICFC Pte Ltd", url: SITE, logo: SITE + "/assets/images/logo/logo.png", foundingDate: "2014",
    telephone: "+65 8601 7001", email: "admin@icfc.com.sg",
    areaServed: ["Singapore", "Malaysia", "China", "Hong Kong", "India"],
    identifier: { "@type": "PropertyValue", propertyID: "UEN", value: "201402439E" },
    knowsAbout: ["ISO management systems", "Cyber Trust mark", "Data Protection Trustmark", "Integrated management system audits", "SOC 1 and SOC 2 readiness", "HIPAA compliance", "GDPR compliance", "CMMI"],
    // No address on purpose: ICFC does not publish office addresses.
  };
}

export function serviceJsonLd(s) {
  return {
    "@context": "https://schema.org", "@type": "Service", name: s.name, serviceType: s.group, description: s.summary,
    url: SITE + s.path, provider: { "@id": SITE + "/#org" }, areaServed: "Singapore",
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function courseJsonLd(c) {
  return {
    "@context": "https://schema.org", "@type": "Course", name: c.title, description: c.service,
    provider: { "@id": SITE + "/#org" },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: c.mode === "Classroom" ? "Onsite" : "Online", startDate: c.start, endDate: c.end },
    offers: c.feeSGD != null ? { "@type": "Offer", price: c.feeSGD, priceCurrency: "SGD", url: c.url, category: "Paid" } : undefined,
  };
}

export function breadcrumbJsonLd(items) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: SITE + it.path })) };
}

/** hreflang alternates for Next.js metadata: alternates: { languages: hreflangMap(path, languages) } */
export function hreflangMap(path, languages) {
  const map = {};
  languages.forEach((l) => { map[l.hreflang] = SITE + (l.prefix || "") + path; });
  map["x-default"] = SITE + path;
  return map;
}
