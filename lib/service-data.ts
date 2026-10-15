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
