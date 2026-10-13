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
