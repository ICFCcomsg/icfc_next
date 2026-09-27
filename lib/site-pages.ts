import { readFile } from "node:fs/promises";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const sourceRoot = join(process.cwd(), "doc/icfc.com.sg/public_html");
const sitePages = [
  ...readdirSync(sourceRoot)
    .filter((name) => name.endsWith(".html") && !name.startsWith("._") && name !== "${getBgImg}.html")
    .map((name) => name),
  "contact-us.html",
  "Version/index.html",
];

export async function readSitePage(route: string) {
  if (!sitePages.includes(route)) return null;
  const source = route === "contact-us.html" ? "contact-us.php" : route;
  return readFile(join(sourceRoot, source), "utf8");
}

export function sitePageRoutes() {
  return sitePages;
}

export function getPageTitle(source: string) {
  return source.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "ICFC PTE LTD";
}

