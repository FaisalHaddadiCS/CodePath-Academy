import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { en } from '../i18n/en';
import { ar } from '../i18n/ar';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('codepath_language');
    if (saved === 'ar' || saved === 'en') return saved;
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('codepath_language', language);
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    const dict = language === 'ar' ? ar : en;
    const parts = key.split('.');
    let val: any = dict;
    for (const p of parts) {
      val = val[p];
      if (val === undefined) break;
    }
    if (typeof val === 'string') return val;
    
    val = en;
    for (const p of parts) {
      val = (val as any)[p];
      if (val === undefined) break;
    }
    if (typeof val === 'string') return val;
    
    // Fallback if key completely missing: humanize the last part
    const fallback = key.split('.').pop() || key;
    return fallback.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
