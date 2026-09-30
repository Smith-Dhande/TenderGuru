import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const FactSheet = () => {
  const { content } = useLanguage();
  const { factSheet } = content;

  return (
    <section className="bg-[#F3EFE9] border-b border-[#D8CFBF] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#D8CFBF]">
          {factSheet.map((item, index) => (
            <div key={index} className="px-0 md:px-8 first:pl-0 last:pr-0 space-y-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1727] tracking-tight block">
                {item.value}
              </span>
              <h4 className="font-semibold text-sm text-[#0F172A]">
                {item.label}
              </h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
