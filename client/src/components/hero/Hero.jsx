import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Calendar, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] min-h-[calc(100svh-80px)] flex items-center justify-center pt-8 pb-10 sm:pt-14 sm:pb-16 md:pt-16 md:pb-16 border-b border-[#E8E2D5]">
      
      {/* High-Clarity Responsive Background Image Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Mobile View: Vertical Portrait Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center sm:hidden transform scale-100 filter contrast-105 saturate-110 opacity-90 transition-all duration-300"
          style={{ backgroundImage: `url('/hero_bg_mobile.jpg')` }}
        />

        {/* Desktop/Tablet View: Landscape Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center hidden sm:block transform scale-100 filter contrast-105 saturate-110 opacity-90 transition-all duration-300"
          style={{ backgroundImage: `url('/hero_bg.png')` }}
        />
        
        {/* Mobile-Only Dedicated Visibility Contrast Overlay */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-[#FAF8F5]/75 via-[#FAF8F5]/50 to-[#FAF8F5]/90" />
        <div className="absolute inset-0 sm:hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#FAF8F5]/40 to-[#FAF8F5]/80" />

        {/* Desktop Overlay - UNCHANGED */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/40 via-transparent to-[#FAF8F5]/75" />
        <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FAF8F5]/30 via-transparent to-[#FAF8F5]/60" />
      </div>

      {/* Main Centered Content Container */}
      <div className="relative max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center w-full my-auto">
        
        {/* Eyebrow / Credibility Statement (HIDDEN on Mobile as requested, SHOWN on Desktop) */}
        <div className="hidden sm:inline-flex items-center space-x-2 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#93622A]/50 px-4 py-1.5 rounded-xs text-[#7A501F] text-xs md:text-sm font-semibold tracking-wide mb-5 shadow-xs max-w-full">
          <ShieldCheck className="w-4 h-4 text-[#93622A] shrink-0" />
          <span className={`text-center leading-snug ${language === 'mr' ? 'font-mr' : 'font-sans'}`}>
            {t('hero.eyebrow')}
          </span>
        </div>

        {/* Responsive Headline */}
        <div className="mb-4 sm:mb-5">
          <h1 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0B1628] font-extrabold tracking-tight leading-[1.18] sm:leading-[1.14] drop-shadow-sm inline-block ${
              language === 'mr' ? 'font-mr text-2.5xl sm:text-3.5xl md:text-4.5xl' : 'font-editorial'
            }`}
          >
            {t('hero.title')}
          </h1>
        </div>

        {/* Supporting Description */}
        <p 
          className={`max-w-2xl mx-auto text-xs xs:text-sm sm:text-base md:text-lg text-[#0B1628] font-semibold leading-relaxed mb-6 sm:mb-8 drop-shadow-xs px-1 ${
            language === 'mr' ? 'font-mr text-xs xs:text-sm sm:text-base md:text-lg' : 'font-sans'
          }`}
        >
          {t('hero.subtitle')}
        </p>

        {/* Mobile Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-xs sm:max-w-md md:max-w-lg mx-auto w-full px-1 sm:px-0">
          {/* Primary CTA */}
          <a
            href="#training"
            className={`w-full sm:w-auto inline-flex items-center justify-center bg-[#0B1628] active:bg-[#16243B] hover:bg-[#16243B] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-sm border border-[#0B1628] text-xs sm:text-sm font-semibold shadow-md transition-all duration-200 group ${
              language === 'mr' ? 'font-mr text-sm sm:text-base' : 'font-sans'
            }`}
          >
            <span>{t('hero.primaryCta')}</span>
            <ArrowRight className="ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#webinars"
            className={`w-full sm:w-auto inline-flex items-center justify-center bg-[#FAF8F5]/95 active:bg-[#F2EFE9] hover:bg-[#F2EFE9] text-[#0B1628] hover:text-[#93622A] px-6 py-3 sm:px-7 sm:py-3.5 rounded-sm border border-[#93622A] text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200 ${
              language === 'mr' ? 'font-mr text-sm sm:text-base' : 'font-sans'
            }`}
          >
            <Calendar className="mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7A501F]" />
            <span>{t('hero.secondaryCta')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
