import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';

export const LearningFramework = () => {
  const { t, language } = useLanguage();
  const steps = t('framework.steps');

  // Exact color tones
  const stepColors = [
    { text: 'text-[#4DB6AC]' }, // 01 Teal
    { text: 'text-[#9FA8DA]' }, // 02 Lavender/Purple
    { text: 'text-[#64B5F6]' }, // 03 Sky Blue
    { text: 'text-[#81C784]' }, // 04 Green
    { text: 'text-[#FFB74D]' }, // 05 Warm Gold
    { text: 'text-[#FF8A65]' }, // 06 Coral
    { text: 'text-[#93622A]' }, // 07 Teak Gold
  ];

  return (
    <section id="framework" className="py-14 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#93622A]/10 text-[#7A501F] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#93622A]" />
            <span>{t('framework.tag')}</span>
          </div>
          
          <h2 className={`text-2xl sm:text-4xl md:text-5xl text-[#0B1628] font-extrabold mb-3 sm:mb-4 tracking-tight leading-tight ${
            language === 'mr' ? 'font-mr' : 'font-editorial'
          }`}>
            {t('framework.title')}
          </h2>
          
          <p className={`text-xs sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto ${
            language === 'mr' ? 'font-mr text-xs sm:text-base' : 'font-sans'
          }`}>
            {t('framework.subtitle')}
          </p>

          {/* Mobile Swipe Guidance Badge */}
          <div className="sm:hidden mt-3 inline-flex items-center space-x-1.5 text-xs text-[#93622A] font-bold">
            <span>{language === 'mr' ? 'सर्व ७ टप्पे पाहण्यासाठी स्वाइप करा' : 'Swipe to explore all 7 steps'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Mobile View: Horizontally Scrollable 7-Step Track with Large Numbers */}
        <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 scrollbar-none items-start pt-2">
          {steps.map((step, idx) => {
            const color = stepColors[idx % stepColors.length];
            const numberStr = (idx + 1).toString().padStart(2, '0');

            return (
              <div 
                key={idx} 
                className="w-[72vw] shrink-0 snap-center flex flex-col items-center text-center bg-[#FAF8F5] border border-[#E2DDD5] p-5 rounded-xs shadow-2xs"
              >
                {/* Large Peek-a-Boo Pocket Number for Mobile */}
                <div className="relative w-full h-20 xs:h-24 overflow-hidden flex items-end justify-center mb-4">
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D1D5DB] shadow-sm z-10" />
                  
                  <span 
                    className={`text-7xl xs:text-8xl font-black tracking-tighter ${color.text} select-none leading-none transform translate-y-[38%] z-0`}
                    style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    {numberStr}
                  </span>
                </div>

                <h3 className={`text-sm font-extrabold text-[#0B1628] mb-1.5 uppercase tracking-wider leading-snug px-1 ${
                  language === 'mr' ? 'font-mr text-base font-bold normal-case' : 'font-sans'
                }`}>
                  {step.title}
                </h3>

                <p className={`text-xs text-slate-600 leading-relaxed px-1 ${
                  language === 'mr' ? 'font-mr text-xs' : 'font-sans'
                }`}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Desktop View: UNCHANGED 7-Step Horizontal Row */}
        <div className="hidden sm:grid sm:grid-cols-4 md:grid-cols-7 gap-4 lg:gap-4 items-start pt-6">
          {steps.map((step, idx) => {
            const color = stepColors[idx % stepColors.length];
            const numberStr = (idx + 1).toString().padStart(2, '0');

            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                
                {/* Slit Pocket Container */}
                <div className="relative w-full h-16 sm:h-20 lg:h-24 overflow-hidden flex items-end justify-center mb-6">
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D1D5DB] shadow-sm z-10" />
                  
                  <span 
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter ${color.text} select-none leading-none transform translate-y-[38%] transition-transform duration-300 group-hover:translate-y-[22%] z-0`}
                    style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    {numberStr}
                  </span>
                </div>

                <h3 className={`text-xs sm:text-sm font-extrabold text-[#0B1628] mb-2 uppercase tracking-wider leading-snug px-1 group-hover:text-[#93622A] transition-colors ${
                  language === 'mr' ? 'font-mr text-sm sm:text-base font-bold normal-case' : 'font-sans'
                }`}>
                  {step.title}
                </h3>

                <p className={`text-[11px] sm:text-xs text-slate-600 leading-relaxed px-1 ${
                  language === 'mr' ? 'font-mr text-xs sm:text-sm' : 'font-sans'
                }`}>
                  {step.desc}
                </p>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#webinars"
            className={`inline-flex items-center justify-center bg-[#0B1628] hover:bg-[#16243B] text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm text-xs sm:text-base font-bold shadow-md transition-all duration-200 group ${
              language === 'mr' ? 'font-mr text-sm sm:text-base' : 'font-sans uppercase tracking-wider'
            }`}
          >
            <span>{language === 'mr' ? '७-टप्प्यांच्या वेबिनारसाठी नाव नोंदवा' : 'Register For 7-Step Live Webinar'}</span>
            <ArrowRight className="ml-2 w-4 h-4 text-amber-300 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
