"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SiteDictionary } from "@/lib/dictionary";
import siteEn from "@/lib/i18n/site/en.json";

type I18n = { segment: string; prefix: string; dict: SiteDictionary };

const I18nContext = createContext<I18n>({ segment: "en", prefix: "", dict: siteEn });

/** Makes the current language and site dictionary available to Client Components. */
export function I18nProvider({ value, children }: { value: I18n; children: ReactNode }) {
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
