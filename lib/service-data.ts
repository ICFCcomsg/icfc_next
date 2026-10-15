import services from "@/lib/services.json";

export type Service = (typeof services)[number];
export { services };

export const SERVICE_GROUP_ICONS: Record<string, string> = {
  "Cybersecurity, IT and Data Protection": "icon-group-cyber",
  "ISO Management Systems": "icon-group-iso",
  "Singapore Standards and Schemes": "icon-group-ss",
  "Sustainability and Supply Chain": "icon-group-sus",
};
export const SERVICE_GROUPS = Object.keys(SERVICE_GROUP_ICONS);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Read from the English data so translated "Not offered" headings can't slip through (TISAX has no audit; the sustainability course is training only).
export function offers(slug: string) {
  const s = getService(slug)!;
  const has = (items: { heading: string }[]) => items.length > 0 && items[0].heading !== "Not offered";
  return { audit: has(s.audit), consultation: has(s.consultation), training: has(s.training) };
}

// Sketches named in the guide for SOC, HIPAA, GDPR and CMMI; other services use a group sketch.
const SKETCH_BY_SLUG: Record<string, string> = {
  "soc-1-soc-2-attestation-readiness": "sketch-soc-attestation",
  "hipaa-compliance": "sketch-hipaa-health-data",
  "gdpr-compliance": "sketch-gdpr-privacy",
  "cmmi-compliance": "sketch-cmmi-maturity",
};
const SKETCH_BY_GROUP: Record<string, string> = {
  "Cybersecurity, IT and Data Protection": "sketch-audit",
  "ISO Management Systems": "sketch-integrated-audit",
  "Singapore Standards and Schemes": "sketch-ss680-consultant",
  "Sustainability and Supply Chain": "sketch-regional-reach",
};

export function serviceSketch(s: { slug: string; group: string }) {
  return `/images/icfc/${SKETCH_BY_SLUG[s.slug] ?? SKETCH_BY_GROUP[s.group]}.svg`;
}

/** Anchor id of a group's section on /services, e.g. "iso-management-systems". */
export const groupAnchor = (group: string) => group.toLowerCase().replace(/[^a-z]+/g, "-");
