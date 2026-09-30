import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ = () => {
  const { content } = useLanguage();
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#F3EFE9] py-16 sm:py-24 border-b border-[#D8CFBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-[#D8CFBF] space-y-2 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-[#9E6B1D]">
              {faq.sectionNum}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B]">
              {faq.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            {faq.title}
          </h2>
        </div>

        {/* Full-width Ruled Accordion Container */}
        <div className="mt-10 bg-white border border-[#D8CFBF] divide-y divide-[#D8CFBF]">
          {faq.list.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 sm:p-8 text-left flex items-start justify-between gap-6 hover:bg-[#FAF8F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle size={22} className="text-[#9E6B1D] shrink-0 mt-0.5" />
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                      {item.q}
                    </h3>
                  </div>
                  <div className="text-[#0F172A] p-1.5 border border-[#D8CFBF] rounded-full shrink-0">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 text-base text-[#334155] leading-relaxed border-t border-[#F3EFE9] pl-16">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
