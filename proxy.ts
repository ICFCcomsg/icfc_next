import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_SEGMENT, LANGS } from "@/lib/i18n";

const PREFIXED = new Set(LANGS.filter((l) => l.prefix).map((l) => l.segment));

/**
 * Every page lives under app/[lang]. English has no URL prefix, so unprefixed
 * requests are rewritten to /en/..., and /en/... is redirected to the clean URL.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (first === DEFAULT_SEGMENT) {
    const clean = pathname.slice(DEFAULT_SEGMENT.length + 1) || "/";
    return NextResponse.redirect(new URL(clean + search, request.url), 308);
  }
  if (PREFIXED.has(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_SEGMENT}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals and any file with an extension (images, downloads, llms.txt, sitemaps).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
