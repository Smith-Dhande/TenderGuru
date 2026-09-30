import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Award, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export const WhyUs = () => {
  const { t, language } = useLanguage();
  const reasons = t('whyUs.reasons');
  const icons = [Award, ShieldCheck, HeartHandshake, Sparkles];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
            {t('whyUs.tag')}
          </span>
          <h2 className={`text-3xl sm:text-4xl text-[#0B1628] font-bold mt-2 leading-tight ${language === 'mr' ? 'font-mr font-semibold' : 'font-editorial font-normal'
            }`}>
            {t('whyUs.title')}
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="flex items-start space-x-4 bg-[#F2EFE9] border border-[#E2DDD5] p-6 rounded-xs hover:border-[#93622A]/60 transition-colors"
              >
                {/* <div className="w-10 h-10 bg-[#0B1628] text-amber-300 flex items-center justify-center rounded-xs shrink-0 mt-1">
                  <Icon className="w-5 h-5" />
                </div> */}
                <div>
                  <h3 className={`text-lg font-bold text-[#0B1628] mb-1.5 ${language === 'mr' ? 'font-mr text-xl' : 'font-sans'
                    }`}>
                    {reason.title}
                  </h3>
                  <p className={`text-sm text-slate-700 leading-relaxed ${language === 'mr' ? 'font-mr text-base' : 'font-sans'
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
