function attribute(tag: string, name: string) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1];
}

export function parseSiteDocument(source: string, route: string) {
  const normalized = source.replace(/\r\n?/g, "\n");
  const head = normalized.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  let body = normalized.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? normalized;
  // ponytail: repair stray div closers in trusted legacy markup; use an HTML parser for broader repairs.
  let divDepth = 0;
  body = body.replace(/<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<\/?div\b[^>]*>/gi, (tag) => {
    if (/^<div\b/i.test(tag)) divDepth++;
    if (/^<\/div\b/i.test(tag)) {
      if (divDepth === 0) return "";
      divDepth--;
    }
    return tag;
  });
  body = body.replaceAll("contact-us.php", "contact-us.html");
  body = body.replaceAll("assets/images/bg/", "assets/bg/");
  body = body.replace(/<[^>]+\bdata-background=["'][^"']+["'][^>]*>/gi, (tag) => {
    const background = attribute(tag, "data-background");
    if (!background) return tag;
    const backgroundStyle = `background-image: url(&quot;${background}&quot;);`;
    const style = attribute(tag, "style");
    return style !== undefined
      ? tag.replace(/\bstyle=["'][^"']*["']/i, `style="${style}; ${backgroundStyle}"`)
      : tag.replace(/>$/, ` style="${backgroundStyle}">`);
  });
  body = body.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, (nav) =>
    nav.replace(/<li\b([^>]*)>(\s*(?:<!--[\s\S]*?-->\s*)?<a\b[^>]*>)/gi, (_, attrs: string, link: string) => {
      const href = attribute(link, "href")?.replace(/^\.?\//, "");
      const classes = (attribute(`<li${attrs}>`, "class") ?? "")
        .split(/\s+/).filter((name) => name && name !== "active");
      const selected = href === route || (route === "index.html" && href === "");
      if (selected) classes.push("active");
      const remaining = attrs.replace(/\s+class=["'][^"']*["']/i, "");
      return `<li${remaining} class="${classes.join(" ")}">${selected ? link.replace(/<a\b/i, '<a aria-current="page"') : link}`;
    }),
  );
  body = body.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (_, attrs: string, content: string) => {
    // Legacy scripts run after hydration, when DOMContentLoaded may have fired.
    content = content.replace(
      /document\.addEventListener\(\s*["']DOMContentLoaded["']\s*,/g,
      '((callback) => { if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", callback); else callback(); })(',
    );
    const typeMatch = attrs.match(/\s+type\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const originalType = typeMatch?.[1] ?? typeMatch?.[2] ?? typeMatch?.[3];
    const remainingAttrs = attrs.replace(/\s+type\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/i, "");
    const typeAttr = originalType
      ? ` data-legacy-original-type="${originalType.replaceAll('"', "&quot;")}"`
      : "";
    return `<script${remainingAttrs} data-legacy-script=""${typeAttr} type="application/x-legacy-inert">${content}</script>`;
  });

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

  return { body, links, styles };
}
