import React, { createContext, useContext, useState } from "react";

// ایجاد Context زبان
const LanguageContext = createContext();

// ارائه Context به تمام اپلیکیشن
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fa"); // زبان پیش‌فرض فارسی

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  };

  // تابع تبدیل عدد به عدد محلی بر اساس زبان
  const toLocalDigits = (input) => {
    const str = input?.toString() ?? "";
    if (language === "fa") {
      const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return str.replace(/\d/g, (d) => faDigits[d]);
    }
    return str;
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, toLocalDigits }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// هُوک برای دسترسی به Context
export const useLanguage = () => useContext(LanguageContext);
