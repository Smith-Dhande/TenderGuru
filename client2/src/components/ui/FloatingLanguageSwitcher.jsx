import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

export const FloatingLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-3 right-3 sm:top-5 sm:right-6 z-50">
      <div className="bg-[#FAF8F5]/95 backdrop-blur-md border border-[#93622A]/50 shadow-md hover:shadow-lg hover:border-[#93622A] p-1 sm:p-1.5 rounded-full sm:rounded-sm flex items-center space-x-1 sm:space-x-1.5 transition-all duration-300">
        <div className="flex items-center pl-1.5 sm:pl-2 text-[#93622A]">
          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
        </div>
        <div className="flex items-center text-xs font-bold font-mono">
          <button
            onClick={() => setLanguage('mr')}
            className={`px-2.5 py-1 transition-all duration-200 cursor-pointer ${
              language === 'mr'
                ? 'bg-[#0B1628] text-white font-bold shadow-2xs'
                : 'text-slate-700 hover:text-[#0B1628]'
            }`}
            aria-label="Switch to Marathi"
          >
            मराठी
          </button>
          <span className="text-slate-300 font-normal select-none">|</span>
          <button
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 transition-all duration-200 cursor-pointer ${
              language === 'en'
                ? 'bg-[#0B1628] text-white font-bold shadow-2xs'
                : 'text-slate-700 hover:text-[#0B1628]'
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};
