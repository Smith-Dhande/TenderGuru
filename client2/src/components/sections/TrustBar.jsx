import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const TrustBar = () => {
  const { t, language } = useLanguage();
  const groups = t('trust.groups');
  const isMarathi = language === 'mr';

  return (
    <section className="bg-[#FAF8F5] py-10 sm:py-16 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header at Top */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#93622A] uppercase block mb-1.5">
            {t('trust.tag')}
          </span>
          <h2 className={`text-xl sm:text-3xl md:text-4xl font-bold text-[#0B1628] tracking-tight leading-tight ${
            isMarathi ? 'font-mr font-semibold text-2xl sm:text-3xl' : 'font-editorial'
          }`}>
            {t('trust.title')}
          </h2>
        </div>

        {/* Mobile View: Horizontally Scrollable Single Row Track */}
        <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-none pt-3">
          {groups.map((item, idx) => (
            <div 
              key={idx}
              className="relative w-[82vw] shrink-0 snap-center bg-white border border-[#E2DDD5] p-5 rounded-none shadow-xs flex flex-col justify-between group mt-2"
            >
              {/* Paper Tape Strip Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#E5DDD0]/80 border-l border-r border-[#D3C8B5]/60 shadow-[0_1px_2px_rgba(0,0,0,0.06)] rotate-[-1.5deg] pointer-events-none z-10 flex items-center justify-center">
                <div className="w-full h-full border-t border-b border-white/50" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-3 pt-1">
                  <span className="text-xs font-mono font-bold text-[#93622A] bg-[#93622A]/10 px-2 py-0.5 rounded-none">
                    {item.num}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase font-mono">
                    {isMarathi ? 'स्तंभ' : 'PILLAR'} {idx + 1} OF 4
                  </span>
                </div>

                <h3 className={`text-base font-bold text-[#0B1628] mb-1 ${
                  isMarathi ? 'font-mr text-lg' : 'font-sans'
                }`}>
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-[#7A501F] mb-2.5">
                  {item.subtitle}
                </p>

                <p className={`text-xs text-slate-700 leading-relaxed ${
                  isMarathi ? 'font-mr text-xs' : 'font-sans'
                }`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop / Tablet View: SINGLE ROW 4-COLUMN GRID */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-3">
          {groups.map((item, idx) => {
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
                className={`relative bg-white border border-[#E2DDD5] hover:border-[#93622A] p-5 sm:p-6 rounded-none shadow-xs hover:shadow-md transition-all duration-300 transform ${cardTilt} hover:rotate-0 hover:-translate-y-1 group flex flex-col justify-between mt-2`}
              >
                {/* Paper Tape Strip Accent */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4.5 bg-[#E6DEC6]/85 backdrop-blur-[1px] border-l border-r border-[#D3C8AF] shadow-[0_1px_2px_rgba(0,0,0,0.06)] rotate-[-1.5deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 pointer-events-none z-10 flex items-center justify-center">
                  <div className="w-full h-full border-t border-b border-white/50" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3 pt-1">
                    <span className="text-xs font-mono font-bold text-[#93622A] bg-[#93622A]/10 px-2 py-0.5 rounded-none">
                      {item.num}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono font-bold tracking-wider uppercase">
                      {isMarathi ? 'क्षेत्र गट' : 'PILLAR'}
                    </span>
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold text-[#0B1628] mb-1 group-hover:text-[#93622A] transition-colors leading-snug ${
                    isMarathi ? 'font-mr text-lg sm:text-xl' : 'font-sans'
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#7A501F] mb-2.5">
                    {item.subtitle}
                  </p>

                  <p className={`text-xs text-slate-700 leading-relaxed ${
                    isMarathi ? 'font-mr text-xs sm:text-sm' : 'font-sans'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
