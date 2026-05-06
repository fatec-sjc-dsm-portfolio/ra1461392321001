import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");
  const texts = {
    en: {
      greeting: "Hello!",
      buttonText: "Change Language"
    },
    pt: {
      greeting: "Olá!",
      buttonText: "Mudar Idioma"
    }
  };

  const setLanguageToEn = () => {
    setLanguage("en");
  };

  const setLanguageToPt = () => {
    setLanguage("pt");
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguageToEn, setLanguageToPt, texts }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};