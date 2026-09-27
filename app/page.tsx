import { SitePageTemplate } from "@/components/templates/site-page-template";
import { readSitePage } from "@/lib/site-pages";

export default async function Home() {
  const source = await readSitePage("index.html");
  return source ? <SitePageTemplate source={source} route="index.html" /> : null;
}
