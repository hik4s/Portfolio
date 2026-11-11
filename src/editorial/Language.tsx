import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Locale = "pt" | "en";
const Language = createContext({
  locale: "pt" as Locale,
  setLocale: (_: Locale) => {},
  t: (pt: string, _en: string) => pt,
});
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    try {
      return localStorage.getItem("kauan-language") === "en" ? "en" : "pt";
    } catch {
      return "pt";
    }
  });
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    document.title =
      locale === "pt"
        ? "Kauan Inacio · Desenvolvimento & Automação"
        : "Kauan Inacio · Software & Automation";
    try {
      localStorage.setItem("kauan-language", locale);
    } catch {
      /* Reading remains available without storage. */
    }
  }, [locale]);
  return (
    <Language.Provider
      value={{ locale, setLocale, t: (pt, en) => (locale === "pt" ? pt : en) }}
    >
      {children}
    </Language.Provider>
  );
}
export function useLanguage() {
  return useContext(Language);
}
