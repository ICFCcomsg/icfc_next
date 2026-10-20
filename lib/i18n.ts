import languages from "@/lib/i18n/languages.json";

export const SITE_URL = "https://icfc.com.sg";

/** Route segment for a language: "en" internally (no URL prefix), otherwise the prefix without "/" (e.g. "zh-hans"). */
export const LANGS = languages.map((l) => ({
  ...l,
  segment: l.prefix ? l.prefix.slice(1) : "en",
}));
export type Lang = (typeof LANGS)[number];
export const DEFAULT_SEGMENT = "en";

/**
 * Languages that are live: indexed, listed in hreflang and sitemaps.
 * Add a segment here only after its content is translated and passes native-speaker review.
 */
export const PUBLISHED_SEGMENTS = ["en"];

export function getLang(segment: string) {
  return LANGS.find((l) => l.segment === segment);
}

export function isPublished(segment: string) {
  return PUBLISHED_SEGMENTS.includes(segment);
}

/** Public URL path for a page path ("/services/x") in a language. */
export function localizedPath(segment: string, path: string) {
  const prefix = getLang(segment)?.prefix ?? "";
  return prefix + (path === "/" && prefix ? "" : path);
}

/** Per-page title, description, canonical/hreflang and social tags (OG/Twitter don't inherit the page title). */
export function pageMetadata(segment: string, path: string, title?: string, description?: string) {
  const alternates = alternatesFor(segment, path);
  const og = { title, description, url: alternates.canonical, siteName: "ICFC Pte Ltd", type: "website" as const, images: ["/images/icfc/og-image-default.png"] };
  return { title, description, alternates, openGraph: og, twitter: { card: "summary_large_image" as const, title, description } };
}

/** Next.js metadata alternates: canonical plus hreflang for published languages only. */
export function alternatesFor(segment: string, path: string) {
  const languages: Record<string, string> = {};
  for (const l of LANGS.filter((l) => isPublished(l.segment))) {
    languages[l.hreflang] = SITE_URL + localizedPath(l.segment, path);
  }
  languages["x-default"] = SITE_URL + path;
  return { canonical: SITE_URL + localizedPath(segment, path), languages };
}
