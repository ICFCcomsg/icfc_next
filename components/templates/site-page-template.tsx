import { DocumentResources } from "@/components/molecules/document-resources";
import { LegacyContent } from "@/components/organisms/legacy-content";
import { parseSiteDocument } from "@/lib/parse-site-document";

export function SitePageTemplate({ source, route }: { source: string; route: string }) {
  const { body, links, styles } = parseSiteDocument(source, route);

  return (
    <>
      <DocumentResources links={links} styles={styles} />
      <LegacyContent html={body} />
    </>
  );
}
