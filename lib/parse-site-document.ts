function attribute(tag: string, name: string) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"))?.[1];
}

export function parseSiteDocument(source: string, route: string) {
  const normalized = source.replace(/\r\n?/g, "\n");
  const head = normalized.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  let body = normalized.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? normalized;
  body = body.replaceAll("contact-us.php", "contact-us.html");
  body = body.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (_, attrs: string, content: string) => {
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
