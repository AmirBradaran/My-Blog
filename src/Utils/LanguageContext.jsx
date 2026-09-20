import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("lang") || "fa";
    } catch {
      return "fa";
    }
  });

  useEffect(() => {
    const dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem("lang", language);
    } catch {
      /* ignore */
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === "en" ? "fa" : "en";
      document.documentElement.lang = next;
      document.documentElement.dir = next === "fa" ? "rtl" : "ltr";
      return next;
    });
  }, []);

  const setLang = useCallback((lang) => {
    if (lang === "fa" || lang === "en") setLanguage(lang);
  }, []);

  const toLocalDigits = useCallback(
    (input) => {
      const str = input?.toString() ?? "";
      if (language !== "fa") return str;
      const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return str.replace(/\d/g, (d) => faDigits[d]);
    },
    [language]
  );

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLang, toLocalDigits, isFa: language === "fa" }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
