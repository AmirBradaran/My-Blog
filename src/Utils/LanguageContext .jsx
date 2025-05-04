import React, { createContext, useContext, useState } from "react";

// ایجاد Context زبان
const LanguageContext = createContext();

// ارائه Context به تمام اپلیکیشن
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // زبان پیش‌فرض انگلیسی

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// هُوک برای دسترسی به Context
export const useLanguage = () => useContext(LanguageContext);
