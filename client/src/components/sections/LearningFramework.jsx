import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, ArrowRight } from 'lucide-react';

export const LearningFramework = () => {
  const { t, language } = useLanguage();
  const steps = t('framework.steps');

  // Exact color tones matching reference image
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
    <section id="framework" className="py-16 sm:py-24 bg-[#F2F2F4] border-b border-[#E2DDD5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#93622A]/10 text-[#7A501F] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#93622A]" />
            <span>{t('framework.tag')}</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#0B1628] font-extrabold mb-4 tracking-tight leading-tight ${
            language === 'mr' ? 'font-mr' : 'font-editorial'
          }`}>
            {t('framework.title')}
          </h2>
          
          <p className={`text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto ${
            language === 'mr' ? 'font-mr' : 'font-sans'
          }`}>
            {t('framework.subtitle')}
          </p>
        </div>

        {/* 7 Steps in 1 Single Horizontal Row (Half Up & Half Hidden in Slit Pocket) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 lg:gap-4 items-start pt-6">
          {steps.map((step, idx) => {
            const color = stepColors[idx % stepColors.length];
            const numberStr = (idx + 1).toString().padStart(2, '0');

            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                
                {/* Slit Pocket Container - Top Half Visible, Bottom Half Hidden */}
                <div className="relative w-full h-16 sm:h-20 lg:h-24 overflow-hidden flex items-end justify-center mb-6">
                  {/* Subtle Inset Slit Baseline Line */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#D1D5DB] shadow-sm z-10" />
                  
                  {/* Big Number (Half Up, Half Hidden inside pocket) */}
                  <span 
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter ${color.text} select-none leading-none transform translate-y-[38%] transition-transform duration-300 group-hover:translate-y-[22%] z-0`}
                    style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                  >
                    {numberStr}
                  </span>
                </div>

                {/* Step / Shape Title */}
                <h3 className={`text-xs sm:text-sm font-extrabold text-[#0B1628] mb-2 uppercase tracking-wider leading-snug px-1 group-hover:text-[#93622A] transition-colors ${
                  language === 'mr' ? 'font-mr text-sm sm:text-base font-bold normal-case' : 'font-sans'
                }`}>
                  {step.title}
                </h3>

                {/* Description Text */}
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
        <div className="mt-16 text-center">
          <a
            href="#webinars"
            className={`inline-flex items-center justify-center bg-[#0B1628] hover:bg-[#16243B] text-white px-8 py-4 rounded-sm text-sm sm:text-base font-bold shadow-md transition-all duration-200 group ${
              language === 'mr' ? 'font-mr text-base' : 'font-sans uppercase tracking-wider'
            }`}
          >
            <span>{language === 'mr' ? '७-टप्प्यांच्या वेबिनारसाठी नाव नोंदवा' : 'Register For 7-Step Live Webinar'}</span>
            <ArrowRight className="ml-2.5 w-4 h-4 text-amber-300 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
