import React, { createContext, useContext, useState, useEffect } from 'react';
import { mrData } from '../data/mr/landingData';
import { enData } from '../data/en/landingData';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Marathi is default language as specified in requirements
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('etender_lang') || 'mr';
  });

  useEffect(() => {
    localStorage.setItem('etender_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = (newLang) => {
    setLang(newLang);
  };

  const content = lang === 'mr' ? mrData : enData;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
