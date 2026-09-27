import { LegacyDocument, readSitePage } from "./legacy-document";

export default async function Home() {
  const source = await readSitePage("index.html");
  return source ? <LegacyDocument source={source} route="index.html" /> : null;
}
