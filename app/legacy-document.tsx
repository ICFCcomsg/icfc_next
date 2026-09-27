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

function attribute(tag: string, name: string) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1];
}

export function LegacyDocument({ source, route }: { source: string; route: string }) {
  const normalized = source.replace(/\r\n?/g, "\n");
  const head = normalized.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  let body = normalized.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? normalized;
  body = body.replaceAll("contact-us.php", "contact-us.html");

  if (route === "contact-us.html") {
    body = body.replace(
      '<form id="contact-form" action="contact-us.html" method="POST">',
      '<form id="contact-form-mail" action="mailto:admin@icfc.com.sg" method="POST" enctype="text/plain">',
    );
  }

  const links = [...head.matchAll(/<link\b[^>]*>/gi)]
    .map(([tag]) => ({ rel: attribute(tag, "rel"), href: attribute(tag, "href") }))
    .filter((link): link is { rel: string; href: string } => Boolean(link.rel && link.href));
  const styles = [...head.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(([, css]) => css);

  return (
    <>
      {links.map(({ rel, href }) => <link key={`${rel}:${href}`} rel={rel} href={href} />)}
      {styles.map((css, index) => (
        <style key={index} dangerouslySetInnerHTML={{ __html: css }} />
      ))}
      {/* ponytail: keep trusted source markup; convert sections when they need React behavior. */}
      <div className="legacy-site" dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
