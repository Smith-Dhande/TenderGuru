import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Check } from 'lucide-react';

export const Overview = () => {
  const { content } = useLanguage();
  const { overview } = content;

  return (
    <section id="about" className="bg-[#FAF8F5] py-16 sm:py-24 border-b border-[#D8CFBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Margin Note (3 cols desktop) */}
          <div className="lg:col-span-3 space-y-2 border-b lg:border-b-0 border-[#D8CFBF] pb-6 lg:pb-0">
            <span className="font-serif text-3xl font-bold text-[#9E6B1D] block">
              {overview.sectionNum}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B] block">
              {overview.eyebrow}
            </span>
            <div className="h-[2px] w-10 bg-[#9E6B1D] mt-2"></div>
          </div>

          {/* Main Content (9 cols desktop) */}
          <div className="lg:col-span-9 space-y-8">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-snug">
              {overview.title}
            </h2>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-3xl font-normal">
              {overview.description}
            </p>

            {/* Ruled List of Pillars (No rounded cards) */}
            <div className="divide-y divide-[#D8CFBF] border-t border-b border-[#D8CFBF] mt-8">
              {overview.pillars.map((pt, idx) => (
                <div key={idx} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                  <div className="sm:col-span-4 flex items-center gap-2">
                    <Check size={16} className="text-[#9E6B1D] shrink-0" />
                    <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                      {pt.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
