import { notFound } from "next/navigation";
import { PUBLISHED_SEGMENTS, SITE_URL, alternatesFor, localizedPath } from "@/lib/i18n";
import { services } from "@/lib/service-data";
import { getSitePage, sitePageRoutes } from "@/lib/site-pages";
import { getSiteFlags } from "@/lib/frappe";

export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLISHED_SEGMENTS.map((id) => ({ file: `${id}.xml` }));
}

const paths = [
  "/",
  ...sitePageRoutes()
    // Skip noindex pages and duplicates that canonicalize elsewhere.
    .filter((r) => !getSitePage(r)?.noindex && !getSitePage(r)?.canonical)
    .map((r) => `/${r}`),
  ...services.map((s) => `/services/${s.slug}`),
];

const esc = (s: string) => s.replace(/&/g, "&amp;");

/** One sitemap per published language at /sitemap/{segment}.xml, with hreflang alternates. */
export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const segment = (await params).file.replace(/\.xml$/, "");
  if (!PUBLISHED_SEGMENTS.includes(segment)) notFound();
  const { enable_online_course } = await getSiteFlags();
  const urls = paths
    .filter((path) => enable_online_course || path !== "/training/calendar")
    .map((path) => {
      const links = Object.entries(alternatesFor(segment, path).languages)
        .map(([hreflang, href]) => `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${esc(href)}"/>`)
        .join("");
      return `<url><loc>${esc(SITE_URL + localizedPath(segment, path))}</loc>${links}</url>`;
    })
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
}
