import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Framework = () => {
  const { content } = useLanguage();
  const { framework } = content;

  return (
    <section id="framework" className="bg-[#F3EFE9] py-16 sm:py-24 border-b border-[#D8CFBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 pb-12 border-b border-[#D8CFBF]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-[#9E6B1D]">
              {framework.sectionNum}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B]">
              {framework.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            {framework.title}
          </h2>
          <p className="text-base text-[#64748B]">
            {framework.subtitle}
          </p>
        </div>

        {/* Vertical Numbered Sequence with Connecting Line */}
        <div className="relative mt-12 pl-4 sm:pl-8 border-l-2 border-[#D8CFBF] space-y-10 sm:space-y-12">
          {framework.steps.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Connecting Circle/Badge */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 bg-[#0B1727] text-white text-xs font-serif font-bold w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 border-[#F3EFE9]">
                {item.step}
              </div>

              {/* Content Box */}
              <div className="bg-white p-6 sm:p-8 border border-[#D8CFBF] shadow-sm hover:border-[#0B1727] transition-colors ml-4 sm:ml-6 space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                  {item.title}
                </h3>
                <p className="text-base text-[#334155] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
