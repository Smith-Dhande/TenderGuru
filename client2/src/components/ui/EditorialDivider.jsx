import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const EditorialDivider = ({ number, titleEn, titleMr }) => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';
  const displayTitle = isMarathi ? titleMr : titleEn;

  return (
    <div className="w-full bg-[#FAF8F5] border-t border-b border-[#E8E2D5]/70 py-3 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#93622A]/80 uppercase">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C89B53]" />
          <span>{number} // {displayTitle}</span>
        </div>
        <div className="hidden md:flex items-center space-x-3 text-[#C89B53]/50 text-[10px]">
          <span>eTENDER GURU INSTITUTIONAL ARCHITECTURE</span>
          <span>◆</span>
        </div>
      </div>
    </div>
  );
};
