import { PUBLISHED_SEGMENTS, SITE_URL } from "@/lib/i18n";

/** Sitemap index pointing at each published language's sitemap. */
export function GET() {
  const items = PUBLISHED_SEGMENTS.map((id) => `<sitemap><loc>${SITE_URL}/sitemap/${id}.xml</loc></sitemap>`).join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</sitemapindex>`,
    { headers: { "Content-Type": "application/xml" } },
  );
}
