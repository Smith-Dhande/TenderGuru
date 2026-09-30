import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Award, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export const WhyUs = () => {
  const { t, language } = useLanguage();
  const reasons = t('whyUs.reasons');
  const icons = [Award, ShieldCheck, HeartHandshake, Sparkles];

  return (
    <section className="py-12 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
            {t('whyUs.tag')}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl text-[#0B1628] font-bold mt-1.5 leading-tight ${
            language === 'mr' ? 'font-mr font-semibold text-2.5xl sm:text-3.5xl' : 'font-editorial font-normal'
          }`}>
            {t('whyUs.title')}
          </h2>
        </div>

        {/* Mobile View: Horizontally Scrollable Cards Track */}
        <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-none">
          {reasons.map((reason, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="w-[82vw] shrink-0 snap-center flex items-start space-x-3.5 bg-[#F2EFE9] border border-[#E2DDD5] p-5 rounded-xs shadow-2xs"
              >
                <div className="w-9 h-9 bg-[#0B1628] text-amber-300 flex items-center justify-center rounded-xs shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className={`text-base font-bold text-[#0B1628] mb-1 ${
                    language === 'mr' ? 'font-mr text-lg' : 'font-sans'
                  }`}>
                    {reason.title}
                  </h3>
                  <p className={`text-xs text-slate-700 leading-relaxed ${
                    language === 'mr' ? 'font-mr text-xs' : 'font-sans'
                  }`}>
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: UNCHANGED 2-Column Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="flex items-start space-x-4 bg-[#F2EFE9] border border-[#E2DDD5] p-6 rounded-xs hover:border-[#93622A]/60 transition-colors"
              >
                <div className="w-10 h-10 bg-[#0B1628] text-amber-300 flex items-center justify-center rounded-xs shrink-0 mt-1">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold text-[#0B1628] mb-1.5 ${
                    language === 'mr' ? 'font-mr text-xl' : 'font-sans'
                  }`}>
                    {reason.title}
                  </h3>
                  <p className={`text-sm text-slate-700 leading-relaxed ${
                    language === 'mr' ? 'font-mr text-base' : 'font-sans'
                  }`}>
                    {reason.desc}
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
