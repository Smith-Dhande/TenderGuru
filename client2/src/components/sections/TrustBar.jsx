import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export const TrustBar = () => {
  const { t, language } = useLanguage();
  const groups = t('trust.groups');

  return (
    <section className="bg-[#FAF8F5] py-12 sm:py-16 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Headline & Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
              {t('trust.tag')}
            </span>
            
            <h2 className={`text-2xl sm:text-3xl text-[#0B1628] font-bold mt-2 mb-4 leading-tight ${
              language === 'mr' ? 'font-mr font-semibold' : 'font-editorial font-normal'
            }`}>
              {t('trust.title')}
            </h2>
            
            <p className={`text-slate-700 text-sm sm:text-base leading-relaxed mb-6 ${
              language === 'mr' ? 'font-mr' : 'font-sans'
            }`}>
              {t('trust.subtitle')}
            </p>

            {/* Subtle Summary Indicator Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#FAF8F5] border border-[#E2DDD5] px-3.5 py-2 rounded-none text-xs font-medium text-[#7A501F]">
              <span className="w-2 h-2 rounded-full bg-[#93622A]" />
              <span className={language === 'mr' ? 'font-mr' : 'font-sans'}>
                {language === 'mr' 
                  ? '१४ मुख्य घटकांचे ४ प्रमुख स्तंभांमध्ये वर्गीकरण'
                  : '14 Participant Categories Grouped in 4 Core Pillars'}
              </span>
            </div>

            {/* Mobile Scroll Prompt Indicator */}
            <div className="sm:hidden mt-4 flex items-center space-x-2 text-xs text-[#93622A] font-semibold">
              <span>{language === 'mr' ? 'उजवीकडे स्वाइप करा' : 'Swipe left to view all pillars'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Right Column - Taped-to-Wall Cards Grid */}
          <div className="lg:col-span-8 pt-2">
            
            {/* Mobile View: Horizontally Scrollable Card Track */}
            <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 -mx-4 px-4 scrollbar-none pt-4">
              {groups.map((item, idx) => (
                <div 
                  key={idx}
                  className="relative w-[82vw] shrink-0 snap-center bg-white border border-[#E2DDD5] p-5 rounded-none shadow-sm flex flex-col justify-between group mt-2"
                >
                  {/* Tape Strip Accent (Taped to Wall) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#E5DDD0]/80 border-l border-r border-[#D3C8B5]/60 shadow-[0_1px_2px_rgba(0,0,0,0.06)] rotate-[-1.5deg] pointer-events-none z-10 flex items-center justify-center">
                    <div className="w-full h-full border-t border-b border-white/50" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3 pt-1">
                      <span className="text-xs font-mono font-bold text-[#93622A] bg-[#93622A]/10 px-2 py-0.5 rounded-none">
                        {item.num}
                      </span>
                      <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase font-mono">
                        {language === 'mr' ? 'स्तंभ' : 'Pillar'} {idx + 1} of 4
                      </span>
                    </div>

                    <h3 className={`text-base font-bold text-[#0B1628] mb-1 ${
                      language === 'mr' ? 'font-mr text-lg' : 'font-sans'
                    }`}>
                      {item.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#7A501F] mb-2.5">
                      {item.subtitle}
                    </p>

                    <p className={`text-xs text-slate-700 leading-relaxed ${
                      language === 'mr' ? 'font-mr text-xs' : 'font-sans'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop / Tablet View: Taped to Wall 2x2 Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-6 lg:gap-7 pt-3">
              {groups.map((item, idx) => {
                // Subtle organic tilt for taped-to-wall paper realism
                const tiltClasses = [
                  'rotate-[-0.7deg]',
                  'rotate-[0.7deg]',
                  'rotate-[0.6deg]',
                  'rotate-[-0.5deg]'
                ];
                const cardTilt = tiltClasses[idx % 4];

                return (
                  <div 
                    key={idx}
                    className={`relative bg-white border border-[#E2DDD5] hover:border-[#93622A] p-6 sm:p-7 rounded-none shadow-xs hover:shadow-md transition-all duration-300 transform ${cardTilt} hover:rotate-0 hover:-translate-y-1 group flex flex-col justify-between mt-2`}
                  >
                    {/* Paper Tape Strip Accent (Taped to Wall) */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#E6DEC6]/85 backdrop-blur-[1px] border-l border-r border-[#D3C8AF] shadow-[0_1px_2px_rgba(0,0,0,0.06)] rotate-[-1.5deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 pointer-events-none z-10 flex items-center justify-center">
                      <div className="w-full h-full border-t border-b border-white/50" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3 pt-1">
                        <span className="text-xs font-mono font-bold text-[#93622A] bg-[#93622A]/10 px-2.5 py-0.5 rounded-none">
                          {item.num}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono font-bold tracking-wider uppercase">
                          {language === 'mr' ? 'क्षेत्र गट' : 'PILLAR'}
                        </span>
                      </div>

                      <h3 className={`text-lg font-bold text-[#0B1628] mb-1 group-hover:text-[#93622A] transition-colors ${
                        language === 'mr' ? 'font-mr text-xl' : 'font-sans'
                      }`}>
                        {item.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#7A501F] mb-3">
                        {item.subtitle}
                      </p>

                      <p className={`text-xs sm:text-sm text-slate-700 leading-relaxed ${
                        language === 'mr' ? 'font-mr text-sm' : 'font-sans'
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
