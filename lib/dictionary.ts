import { lang } from "next/root-params";
import { getLang } from "@/lib/i18n";
import siteEn from "@/lib/i18n/site/en.json";
import servicesEn from "@/lib/services.json";
import type { LegalBlock } from "@/components/templates/legal-page-template";

export type SiteDictionary = typeof siteEn;
export type ServiceContent = (typeof servicesEn)[number];
export type LegalDoc = "privacy-policy" | "cookie-notice" | "lms-terms";

/** Current language (from the root [lang] segment). Server Components only. */
export async function getCurrentLang() {
  return getLang(await lang()) ?? getLang("en")!;
}

// Translations fall back to English until a language's file exists.
async function load<T>(code: string, path: string, fallback: T): Promise<T> {
  if (code === "en") return fallback;
  try {
    return (await import(`@/lib/i18n/${path.replace("{code}", code)}`)).default as T;
  } catch {
    return fallback;
  }
}

export async function getDictionary() {
  const { code } = await getCurrentLang();
  return load<SiteDictionary>(code, "site/{code}.json", siteEn);
}

export async function getServices() {
  const { code } = await getCurrentLang();
  const list = await load<ServiceContent[]>(code, "content/{code}/services.json", servicesEn);
  // Fields not yet translated (e.g. funding) fall back to English.
  return list.map((s) => ({ ...servicesEn.find((e) => e.slug === s.slug), ...s }));
}

export async function getService(slug: string) {
  return (await getServices()).find((s) => s.slug === slug);
}

export async function getLegal(doc: LegalDoc) {
  const { code } = await getCurrentLang();
  const en = (await import(`@/lib/legal/${doc}.json`)).default as LegalBlock[];
  return load<LegalBlock[]>(code, `content/{code}/legal/${doc}.json`, en);
}

/** English text → translation for a hand-coded page (lib/i18n/pages/{code}/{ns}.json). Missing entries stay English. */
export async function getPageStrings(ns: string) {
  const { code } = await getCurrentLang();
  return load<Record<string, string>>(code, `pages/{code}/${ns}.json`, {});
}

/** Blog listing cards with category, title and description translated (dictionary ns "blog-posts"). */
export async function translatePosts<T extends { category: string; title: string; description: string }>(posts: T[]) {
  const t = await getPageStrings("blog-posts");
  return posts.map((p) => ({
    ...p,
    category: t[p.category] ?? p.category,
    title: t[p.title] ?? p.title,
    description: t[p.description] ?? p.description,
  }));
}
