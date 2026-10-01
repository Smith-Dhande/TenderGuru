import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Calendar } from 'lucide-react';

export const Hero = () => {
  const { t, language } = useLanguage();
  const isMarathi = language === 'mr';
  const [bgIndex, setBgIndex] = useState(0);

  // Alternating background image timer every 3 seconds (3000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] min-h-screen flex items-center justify-center py-10 sm:py-16 border-b border-[#E8E2D5]">
      
      {/* Background Image Overlay Container with 3s Crossfade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Mobile View: Image 1 (Existing Mobile Hero) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center sm:hidden transform scale-100 filter contrast-105 saturate-110 transition-opacity duration-1000 ${
            bgIndex === 0 ? 'opacity-90' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('/hero_bg_mobile.jpg')` }}
        />

        {/* Mobile View: Image 2 (hero_bg_alt) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center sm:hidden transform scale-100 filter contrast-105 saturate-110 transition-opacity duration-1000 ${
            bgIndex === 1 ? 'opacity-90' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('/hero_bg_alt.png')` }}
        />

        {/* Desktop View: Image 1 (Existing Desktop Hero) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center hidden sm:block transform scale-100 filter contrast-105 saturate-110 transition-opacity duration-1000 ${
            bgIndex === 0 ? 'opacity-90' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('/hero_bg.png')` }}
        />

        {/* Desktop View: Image 2 (hero_bg_alt) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center hidden sm:block transform scale-100 filter contrast-105 saturate-110 transition-opacity duration-1000 ${
            bgIndex === 1 ? 'opacity-90' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('/hero_bg_alt.png')` }}
        />
        
        {/* Mobile Contrast Gradients */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-[#FAF8F5]/90 via-[#FAF8F5]/65 to-[#FAF8F5]/95 z-10" />
        <div className="absolute inset-0 sm:hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#FAF8F5]/45 to-[#FAF8F5]/90 z-10" />

        {/* Desktop Contrast Gradients */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/55 via-transparent to-[#FAF8F5]/85 z-10" />
        <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FAF8F5]/35 via-transparent to-[#FAF8F5]/70 z-10" />
      </div>

      {/* Main Centered Content Container */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full my-auto z-10">
        
        {/* Top Center Logo & Official Brand Display */}
        <div className="flex flex-col items-center justify-center mb-5 sm:mb-6">
          <a href="#home" className="flex flex-col items-center group">
            <img
              src="/navbar_logo.png"
              alt="eTender Guru"
              className="h-14 sm:h-18 md:h-20 w-auto object-contain mb-2 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = "/logoTenderGuru.png";
              }}
            />
            <div className="text-center">
              <span className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1628] tracking-tight leading-none drop-shadow-xs">
                eTender <span className="text-[#93622A] italic font-semibold">Guru</span>
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#7A501F]/80 font-bold block mt-2.5 font-sans">
                {isMarathi ? 'शासकीय निविदा मार्गदर्शक व सल्लागार' : 'Tender Consultancy & Education'}
              </span>
            </div>
          </a>
        </div>

        {/* Reduced Headline Size */}
        <div className="mb-3 sm:mb-4 max-w-2xl mx-auto">
          <h1 
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0B1628] font-bold tracking-tight leading-snug drop-shadow-xs ${
              isMarathi ? 'font-mr font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl' : 'font-editorial'
            }`}
          >
            {t('hero.title')}
          </h1>
        </div>

        {/* Reduced Supporting Description */}
        <p 
          className={`max-w-xl mx-auto text-xs sm:text-sm md:text-base text-slate-700 font-medium leading-relaxed mb-6 sm:mb-8 px-2 ${
            isMarathi ? 'font-mr text-xs sm:text-sm md:text-base' : 'font-sans'
          }`}
        >
          {t('hero.subtitle')}
        </p>

        {/* Compact Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 max-w-xs sm:max-w-sm mx-auto w-full">
          {/* Primary CTA */}
          <a
            href="#courses"
            className={`w-full sm:w-auto inline-flex items-center justify-center bg-[#0B1628] hover:bg-[#16243B] text-white px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-md border border-[#0B1628] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer ${
              isMarathi ? 'font-mr text-xs font-bold' : 'font-sans'
            }`}
          >
            <span>{t('hero.primaryCta')}</span>
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 text-amber-300 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#webinars"
            className={`w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#FAF8F5] text-[#0B1628] hover:text-[#93622A] px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-md border border-[#93622A] text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer ${
              isMarathi ? 'font-mr text-xs font-bold' : 'font-sans'
            }`}
          >
            <Calendar className="mr-1.5 w-3.5 h-3.5 text-[#7A501F]" />
            <span>{t('hero.secondaryCta')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
