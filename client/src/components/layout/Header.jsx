import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export const Header = () => {
  const { language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF8F5]/90 backdrop-blur-xl shadow-md border-b border-[#E2DDD5]/80' 
        : 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D5]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>

          {/* Official Logo Brand (Shown on Mobile & Desktop) */}
          <a href="#home" className="flex items-center space-x-3 group py-1 shrink-0">
            {/* Logo Graphic */}
            <img
              src="/navbar_logo.png"
              alt="eTender Guru"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'h-9 sm:h-10' : 'h-10 sm:h-12'
              }`}
              onError={(e) => {
                e.currentTarget.src = "/logoTenderGuru.png";
              }}
            />

            {/* Brand Text Name & Subtitle (Hidden on Mobile) */}
            <div className="hidden sm:flex flex-col">
              <span className={`font-brand-display font-bold text-[#0B1628] tracking-tight leading-none transition-all duration-300 ${
                isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
              }`}>
                eTender <span className="text-[#93622A]">Guru</span>
              </span>
              <span className={`tracking-widest uppercase text-slate-500 font-medium transition-all duration-300 ${
                isScrolled ? 'text-[9px] mt-0.5' : 'text-[10px] mt-1'
              }`}>
                {language === 'mr' ? 'शासकीय निविदा मार्गदर्शक' : 'Tender Consultancy & Education'}
              </span>
            </div>
          </a>

          {/* Language Toggle (ONLY item on the right) */}
          <div className="flex items-center shrink-0">
            <LanguageSwitcher />
          </div>

        </div>
      </div>
    </header>
  );
};
