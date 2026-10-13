"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useI18n } from "@/components/atoms/i18n-provider";
import { LANGS } from "@/lib/i18n";

const PREFIXES = LANGS.filter((l) => l.prefix).map((l) => l.prefix);

/** Internal page links keep the current language prefix; files, anchors and external links are untouched. */
function localize(href: string, prefix: string) {
  if (!prefix || !href.startsWith("/") || href.startsWith("//")) return href;
  if (/\.[a-z0-9]+($|[?#])/i.test(href) || href.startsWith("/api/")) return href;
  if (PREFIXES.some((p) => href === p || href.startsWith(p + "/") || href.startsWith(p + "#"))) return href;
  return prefix + (href === "/" ? "" : href);
}

export function SiteLink({ href, ...props }: ComponentProps<typeof Link>) {
  const { prefix } = useI18n();
  return <Link href={typeof href === "string" ? localize(href, prefix) : href} {...props} />;
}
