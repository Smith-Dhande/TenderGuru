import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="inline-flex items-center text-xs font-medium text-[#16243B] bg-[#F2EFE9] border border-[#E2DDD5] p-0.5 rounded-sm"
      role="group"
      aria-label="Language selector"
    >
      <button
        onClick={() => setLanguage('mr')}
        className={`px-2.5 py-1 transition-all duration-200 ${
          language === 'mr'
            ? 'bg-[#0B1628] text-white font-bold shadow-xs'
            : 'text-slate-600 hover:text-slate-950 hover:bg-black/5'
        }`}
        aria-pressed={language === 'mr'}
      >
        मराठी
      </button>
      <span className="text-slate-300 select-none px-0.5">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 transition-all duration-200 ${
          language === 'en'
            ? 'bg-[#0B1628] text-white font-bold shadow-xs'
            : 'text-slate-600 hover:text-slate-950 hover:bg-black/5'
        }`}
        aria-pressed={language === 'en'}
      >
        English
      </button>
    </div>
  );
};
