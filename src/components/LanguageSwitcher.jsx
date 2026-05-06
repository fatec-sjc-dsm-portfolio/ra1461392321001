import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const LanguageSwitcher = () => {
  const { language, setLanguageToEn, setLanguageToPt } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    if (newLanguage === "en") {
      setLanguageToEn();
    } else if (newLanguage === "pt") {
      setLanguageToPt();
    }
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("pt")}>Português</button>
    </div>
  );
};

export default LanguageSwitcher;
