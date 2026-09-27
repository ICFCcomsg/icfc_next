// One-time source migration. The running app imports only the generated TSX.
const fs = require("node:fs");
const path = require("node:path");
const { parse } = require("next/dist/compiled/node-html-parser");
const sourceRoot = path.join(process.cwd(), "doc/icfc.com.sg/public_html");
const outputRoot = path.join(process.cwd(), "components/pages");
const voidTags = new Set(
  "area base br col embed hr img input link meta param source track wbr".split(
    " ",
  ),
);
const booleanAttrs = new Set(
  "allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden inert ismap itemscope loop multiple muted nomodule novalidate open playsinline readonly required reversed selected".split(
    " ",
  ),
);
const names = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  colspan: "colSpan",
  rowspan: "rowSpan",
  frameborder: "frameBorder",
  allowfullscreen: "allowFullScreen",
  autofocus: "autoFocus",
  autocomplete: "autoComplete",
  srcset: "srcSet",
  crossorigin: "crossOrigin",
  referrerpolicy: "referrerPolicy",
  enctype: "encType",
  acceptcharset: "acceptCharset",
  "accept-charset": "acceptCharset",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  usemap: "useMap",
  datetime: "dateTime",
  viewbox: "viewBox",
  preserveaspectratio: "preserveAspectRatio",
  playsinline: "playsInline",
  itemprop: "itemProp",
  itemscope: "itemScope",
  itemtype: "itemType",
  hreflang: "hrefLang",
  contenteditable: "contentEditable",
  spellcheck: "spellCheck",
  accesskey: "accessKey",
  "xlink:href": "xlinkHref",
  "xml:space": "xmlSpace",
  charset: "charSet",
  http_equiv: "httpEquiv",
  "http-equiv": "httpEquiv",
  fetchpriority: "fetchPriority",
};
const files = fs
  .readdirSync(sourceRoot)
  .filter(
    (name) =>
      name.endsWith(".html") &&
      !name.startsWith("._") &&
      name !== "${getBgImg}.html",
  )
  .sort()
  .concat("contact-us.php", "Version/index.html");
const routes = new Set(
  files.map((f) => (f === "contact-us.php" ? "contact-us.html" : f)),
);
const assets = [];
function scan(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.name.startsWith("._")) continue;
    const p = path.join(dir, f.name);
    if (f.isDirectory()) scan(p);
    else assets.push(p.replace(/^public/, ""));
  }
}
scan("public/assets");
const q = (value) => JSON.stringify(value).replace(/</g, "\\u003c");
function asset(value) {
  const imageFallbacks = {
    "/assets/bg/sevices-bg-thumb-02.webp":
      "/assets/bg/services-bg-thumb-01.webp",
    "/assets/images/services/services-thumb-01.webp":
      "/assets/images/services/services-thumb-07.webp",
    "/assets/images/services/services-thumb-02.webp":
      "/assets/images/services/services-thumb-08.webp",
    "/assets/bg/testimonial-bg-thumb-01.webp":
      "/assets/bg/testimonial-bg-thumb-02.webp",
  };
  const key = "/" + value.replace(/^\.?\//, "");
  if (imageFallbacks[key]) return imageFallbacks[key];

  const remoteAsset = value.match(
    /https?:\/\/[^\s]+?\/(assets\/[^?]+)(?:\?.*)?$/,
  )?.[1]?.replaceAll("assets/images/bg/", "assets/bg/");
  if (remoteAsset && fs.existsSync("public/" + remoteAsset))
    value = remoteAsset;
  if (value.replace(/^\.\//, "") === "assets/images/services-details-30.webp")
    return "/assets/images/services/services-thumb-30.webp";
  value = value
    .replace(/^\.\//, "")
    .replaceAll("assets/images/bg/", "assets/bg/")
    .replace(/^ssets\//, "assets/");
  if (value.startsWith("assets/")) {
    const p = "/" + value;
    if (fs.existsSync("public" + p.split("?")[0])) return p;
    const found = assets.filter((a) => path.basename(a) === path.basename(p));
    if (found.length === 1) return found[0];
    return p;
  }
  return value;
}
function href(value, text = "") {
  value = value
    .replace(/^\.\//, "")
    .replace("contact-us.php", "contact-us.html");
  if (value.startsWith("assets/")) return asset(value);
  if (routes.has(value)) return "/" + value;
  if (
    value === "" ||
    value === "#" ||
    value.startsWith("javascript:") ||
    /^(team-|financial-services|portfolio|shop)/.test(value)
  ) {
    if (/privacy|terms/i.test(text)) return "/privacy-policy.html";
    if (/blog/i.test(text)) return "/blog.html";
    if (/industr/i.test(text)) return "/industry.html";
    if (/service|consulting|training|audit/i.test(text))
      return "/services.html";
    return "/contact-us.html";
  }
  const aliases = {
    "blog_ISO42001_Singapore.html": "blog_ISO42001_AI.html",
    "blog_CloudMigration_ISO27001.html": "blog_LegacyToCloud_ISO27001.html",
    "blog_MAS_TRM_ISO27001.html": "blog_mas.html",
    "blog_LeadAuditor_InternalAuditor.html":
      "blog_LeadAuditor_vs_InternalAuditor.html",
    "blog_ISO27701_PDPA.html": "blog_ISO27701_vs_PDPA_Singapore.html",
  };
  if (aliases[value]) return "/" + aliases[value];
  if (/^[^:/#]+\.html(?:#.*)?$/.test(value)) return "/contact-us.html";
  if (value === "mailto:Icfcbusiness@gmail.com")
    return "mailto:admin@icfc.com.sg";
  return value;
}
function styles(value) {
  const result = {};
  for (const declaration of value.split(/;(?![^()]*\))/)) {
    const colon = declaration.indexOf(":");
    if (colon < 0) continue;
    let key = declaration.slice(0, colon).trim(),
      val = declaration
        .slice(colon + 1)
        .trim()
        .replace(/\s*!important\s*$/, "");
    if (!key || !val) continue;
    if (!key.startsWith("--"))
      key = key
        .replace(/^-ms-/, "ms-")
        .replace(/-([a-z])/g, (_, l) => l.toUpperCase());
    result[key] = val.replace(/(?:\.\/)?assets\/images\/bg\//g, "/assets/bg/");
  }
  return result;
}
let used;
function use(name) {
  used.add(name);
  return name;
}
function children(node) {
  if (node.rawTagName?.toLowerCase() !== "table")
    return node.childNodes.map((n) => convert(n)).join("");
  let body = "",
    rows = "";
  for (const child of node.childNodes) {
    if (child.nodeType === 3 && !child.text.trim()) continue;
    if (child.rawTagName?.toLowerCase() === "tr") rows += convert(child);
    else {
      if (rows) {
        body += "<tbody>" + rows + "</tbody>";
        rows = "";
      }
      body += convert(child);
    }
  }
  return body + (rows ? "<tbody>" + rows + "</tbody>" : "");
}
function convert(node) {
  if (node.nodeType === 3) {
    const text = node.text;
    return text.trim() ? `{${q(text)}}` : "";
  }
  if (node.nodeType !== 1) return "";
  let tag = node.rawTagName.toLowerCase();
  const cls = node.getAttribute("class") || "";
  if (
    cls
      .split(/\s+/)
      .some((name) => ["wechat-modal", "fixed-floating-icons"].includes(name))
  )
    return "";
  if (["script", "style", "link", "meta", "base", "noscript"].includes(tag))
    return "";
  if (
    tag === "iframe" &&
    (node.getAttribute("height") === "0" || node.getAttribute("width") === "0")
  )
    return "";
  if (cls.split(/\s+/).includes("rs-breadcrumb-area")) {
    const title = node.querySelector("h1")?.text.trim() || "";
    const description =
      node.querySelector(".rs-breadcrumb-desc")?.text.trim() || "";
    const background = asset(
      node
        .querySelector("[data-background]")
        ?.getAttribute("data-background") ||
        "assets/bg/breadcrumb-bg-thumb-01.webp",
    );
    return `<${use("SiteBreadcrumb")} title=${q(title)} description=${q(description)} background=${q(background)} className=${q(cls)} />`;
  }
  if (cls.split(/\s+/).includes("industry-section"))
    return `<${use("IndustryExplorer")} />`;
  if (cls.split(/\s+/).includes("rs-footer-subscribe-from"))
    return `<${use("NewsletterForm")} />`;
  if (cls.split(/\s+/).includes("rs-portfolio-tab-wrapper")) {
    const buttons = node.querySelectorAll('[data-bs-toggle="pill"]');
    const panes = node.querySelectorAll(".tab-pane");
    const items = buttons.map((button) => {
      const pane = panes.find(
        (p) => "#" + p.id === button.getAttribute("data-bs-target"),
      );
      return `{ label: ${q(button.text.trim().replace("All Industriess", "All Industries"))}, content: <>${pane ? children(pane) : ""}</> }`;
    });
    if (items.length)
      return `<${use("ContentTabs")} items={[${items.join(",")}]} />`;
  }
  if (
    cls
      .split(/\s+/)
      .some((name) => name === "accordion-item" || name === "rs-accordion-item")
  ) {
    const title = node.querySelector(".accordion-button");
    const body = node.querySelector(".accordion-body");
    if (title && body)
      return `<${use("AccordionItem")} title={<>${children(title)}</>} className=${q(cls)} defaultOpen={${title.getAttribute("aria-expanded") === "true"}}> ${children(body)}</AccordionItem>`;
  }
  if (
    cls.split(/\s+/).includes("swiper") &&
    node.querySelector(".swiper-wrapper")
  ) {
    const track = node.querySelector(".swiper-wrapper");
    const items = Number(node.getAttribute("data-item")) || 3;
    return `<${use("ContentCarousel")} items={${Math.min(items, 6)}}>${children(track)}</ContentCarousel>`;
  }
  if (/swiper-button-(next|prev)|rs-testimonial-navigation/.test(cls))
    return "";
  if (
    tag === "button" &&
    node.getAttribute("onclick")?.startsWith("sendPrompt")
  ) {
    const prompt = node.getAttribute("onclick");
    const target = /industr/i.test(prompt)
      ? "/industry.html"
      : /services/i.test(prompt)
        ? "/services.html"
        : "/contact-us.html";
    return `<a className=${q(cls)} href=${q(target)}>${children(node)}</a>`;
  }
  if (tag === "form") tag = use("EmailForm");
  if (tag === "a") tag = use("SiteLink");
  if (tag === "img") {
    const src = node.getAttribute("src");
    if (!src || src.endsWith(".html")) return "";
    tag = use("SiteImage");
  }
  let props = [];
  let style = styles(node.getAttribute("style") || "");
  if (
    tag === "SiteImage" &&
    node.getAttribute("src") === "assets/images/services-details-30.webp"
  ) {
    node.setAttribute("src", "assets/images/services/services-thumb-30.webp");
  }
  if (
    tag === "SiteImage" &&
    node.getAttribute("src")?.includes("/htdocs_error/")
  )
    return "";
  if (
    tag === "SiteImage" &&
    node.getAttribute("src")?.includes("contact-shape-01.webp")
  )
    return "";
  const bg = node.getAttribute("data-background");
  if (bg) style.backgroundImage = `url("${asset(bg)}")`;
  const bgColor = node.getAttribute("data-bg-color");
  if (bgColor) style.backgroundColor = bgColor;
  const width = node.getAttribute("data-width");
  if (width) style.width = width;
  for (let [key, value] of Object.entries(node.attributes)) {
    const lower = key.toLowerCase();
    if (
      lower.startsWith("on") ||
      lower === "style" ||
      lower.startsWith("data-bs-") ||
      lower.startsWith("ng-") ||
      lower === "data-background" ||
      lower === "data-clone-slides" ||
      lower === "xmlns:xlink"
    )
      continue;
    if (tag === "EmailForm" && ["action", "method"].includes(lower)) continue;
    if (tag === "input" && lower === "value") key = "defaultValue";
    else if (tag === "input" && lower === "checked") key = "defaultChecked";
    else if (lower === "selected") continue;
    else
      key =
        names[lower] ||
        (lower.startsWith("data-") || lower.startsWith("aria-")
          ? lower
          : key.replace(/-([a-z])/g, (_, c) => c.toUpperCase()));
    if (lower === "class")
      value = value
        .replace(/\bwow\b|\breveal-active\b|\bgsap-[\w-]+\b/g, "")
        .trim();
    if (lower === "href") value = href(value, node.text.trim());
    if (lower === "src" || lower === "poster") value = asset(value);
    if (lower === "data-bg") value = asset(value);
    if (lower === "target" && value === "_blank")
      props.push('rel="noopener noreferrer"');
    if (key === "rel" && node.getAttribute("target") === "_blank") continue;
    if (booleanAttrs.has(lower)) props.push(`${key}={${value !== "false"}}`);
    else if (
      /^aria-(valuenow|valuemin|valuemax|level|posinset|setsize|colcount|rowcount)$/.test(
        key,
      ) ||
      key === "tabIndex" ||
      key === "colSpan" ||
      key === "rowSpan" ||
      key === "maxLength" ||
      key === "minLength" ||
      key === "start"
    )
      props.push(`${key}={${Number(value) || 0}}`);
    else props.push(`${key}=${q(value)}`);
  }
  if (tag === "SiteLink" && !("href" in node.attributes))
    props.push('href="/contact-us.html"');
  if (tag === "input" && !node.getAttribute("aria-label"))
    props.push(
      `aria-label=${q(node.getAttribute("placeholder") || node.getAttribute("name") || "Input")}`,
    );
  if (tag === "input" && node.getAttribute("name") === "email") {
    props = props.filter((p) => !p.startsWith("type="));
    props.push('type="email"');
  }
  if (tag === "SiteImage" && !node.getAttribute("alt")) props.push('alt=""');
  if (Object.keys(style).length) props.push(`style={${JSON.stringify(style)}}`);
  if (tag === "textarea") props.push(`defaultValue=${q(node.text)}`);
  props = [
    ...new Map(props.map((prop) => [prop.split("=")[0], prop])).values(),
  ];
  const open = `<${tag}${props.length ? " " + props.join(" ") : ""}`;
  if (voidTags.has(node.rawTagName.toLowerCase()) || tag === "textarea")
    return `${open} />`;
  const content =
    node.getAttribute("data-count") || (node.id === "year" ? "2026" : null);
  return `${open}>${content ? `{${q(content)}}` : children(node)}</${tag}>`;
}
const imports = {
  SiteLink: "atoms/site-link",
  SiteBreadcrumb: "molecules/site-breadcrumb",
  SiteImage: "atoms/site-image",
  AccordionItem: "molecules/accordion-item",
  ContentTabs: "molecules/content-tabs",
  ContentCarousel: "molecules/content-carousel",
  EmailForm: "molecules/email-form",
  NewsletterForm: "molecules/newsletter-form",
  IndustryExplorer: "organisms/industry-explorer",
};
const registry = [];
for (const file of files) {
  const route = file === "contact-us.php" ? "contact-us.html" : file;
  const key = route
    .replace(/\.html$/, "")
    .replace(/[^a-zA-Z0-9]/g, "-")
    .toLowerCase();
  const component =
    key
      .split("-")
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join("") + "PageContent";
  const source = fs
    .readFileSync(path.join(sourceRoot, file), "utf8")
    .replace(/\r\n?/g, "\n");
  const head = parse(source.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] || "");
  const body =
    source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ||
    source.replace(/^[\s\S]*?<\/head>/i, "").replace(/<\/html>[\s\S]*$/i, "");
  const mainMatch = body.match(/<main\b[^>]*>[\s\S]*?<\/main>/i);
  let nodes;
  if (mainMatch) nodes = parse(mainMatch[0]).childNodes;
  else if (route === "blog.html")
    nodes = parse(body).querySelectorAll("section");
  else {
    const r = parse(body);
    r.querySelectorAll("header,footer,script,noscript").forEach((n) =>
      n.remove(),
    );
    nodes = r.childNodes;
  }
  used = new Set();
  let sectionFunctions = [];
  let markup;
  if (nodes.length === 1 && nodes[0].rawTagName?.toLowerCase() === "main") {
    const counts = {};
    const sectionNodes = nodes[0].childNodes.filter(
      (n) =>
        n.nodeType === 1 &&
        !["script", "style"].includes(n.rawTagName?.toLowerCase()),
    );
    const references = sectionNodes
      .map((node, index) => {
        const base =
          (node.getAttribute("class") || node.rawTagName)
            .split(/\s+/)[0]
            .replace(/^rs-/, "")
            .replace(/[^a-zA-Z0-9-]/g, "")
            .split("-")
            .map((s) => s[0]?.toUpperCase() + s.slice(1))
            .join("") + "Section";
        counts[base] = (counts[base] || 0) + 1;
        const name = base + (counts[base] > 1 ? counts[base] : "");
        const converted = convert(node);
        if (!converted) return "";
        sectionFunctions.push(`function ${name}() { return (${converted}); }`);
        return `<${name} />`;
      })
      .join("");
    markup = "<main>" + references + "</main>";
  } else markup = nodes.map((n) => convert(n)).join("");
  const links = head
    .querySelectorAll("link")
    .filter((n) => n.getAttribute("rel") === "stylesheet")
    .map((n) => asset(n.getAttribute("href")));
  const css = head
    .querySelectorAll("style")
    .map((n) => n.rawText)
    .join("\n");
  const cssPath = `/styles/pages/${key}.css`;
  fs.writeFileSync(
    "public" + cssPath,
    css.replaceAll("assets/images/bg/", "/assets/bg/"),
  );
  links.push(cssPath);
  const importText = [...used]
    .filter((name) =>
      (markup + sectionFunctions.join("\n")).includes("<" + name),
    )
    .map((name) => `import { ${name} } from "@/components/${imports[name]}";`)
    .join("\n");
  // Split the main content into section components, keeping the original layout.
  fs.writeFileSync(
    path.join(outputRoot, key + ".tsx"),
    `import { SitePageTemplate } from "@/components/templates/site-page-template";\n${importText}\n\nexport function ${component}() {\n  return <SitePageTemplate route=${q(route)} stylesheets={${JSON.stringify([...new Set(links)])}}>${markup}</SitePageTemplate>;\n}\n\n${sectionFunctions.join("\n\n")}\n`,
  );
  const title = head.querySelector("title")?.text.trim() || "ICFC PTE LTD";
  registry.push({
    route,
    key,
    component,
    title,
    description:
      head.querySelector('meta[name="description"]')?.getAttribute("content") ||
      "",
  });
}
used = new Set();
const home = fs.readFileSync(path.join(sourceRoot, "index.html"), "utf8");
const footerMarkup = convert(
  parse(home.match(/<footer\b[^>]*>[\s\S]*?<\/footer>/i)[0]).childNodes[0],
);
fs.writeFileSync(
  "components/organisms/site-footer.tsx",
  [...used]
    .map((name) => `import { ${name} } from "@/components/${imports[name]}";`)
    .join("\n") +
    `\n\nexport function SiteFooter() { return ${footerMarkup}; }\n`,
);
fs.writeFileSync(
  "lib/site-pages.ts",
  registry
    .map((r) => `import { ${r.component} } from "@/components/pages/${r.key}";`)
    .join("\n") +
    `\n\nexport const sitePages = {\n` +
    registry
      .map(
        (r) =>
          `${q(r.route)}: { component: ${r.component}, title: ${q(r.title)}, description: ${q(r.description)} },`,
      )
      .join("\n") +
    "\n};\n\nexport type SiteRoute = keyof typeof sitePages;\n\nexport function getSitePage(route: string) {\n  return Object.hasOwn(sitePages, route) ? sitePages[route as SiteRoute] : null;\n}\n\nexport function sitePageRoutes() { return Object.keys(sitePages); }\n",
);
// Preserve the reference industry data as a typed, checked-in TS module.
const industrySource = fs.readFileSync(
  path.join(sourceRoot, "industry.html"),
  "utf8",
);
const industryData = industrySource.match(
  /const industries = (\[[\s\S]*?\]);/,
)[1];
fs.writeFileSync(
  "lib/industries.ts",
  "export const industries = " + industryData + ";\n",
);
console.log(`Converted ${registry.length} pages into static TSX.`);
