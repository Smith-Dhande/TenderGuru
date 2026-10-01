import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Plus, Minus, HelpCircle, Phone, ArrowRight } from 'lucide-react';

export const FaqSection = () => {
  const { t, language } = useLanguage();
  const items = t('faq.items');
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleIndex = (idx) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Section Title & Direct Contact Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center space-x-2 bg-[#93622A]/10 text-[#7A501F] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#93622A]" />
              <span>{t('faq.tag')}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#0B1628] font-extrabold mb-4 leading-tight ${language === 'mr' ? 'font-mr' : 'font-editorial'
              }`}>
              {t('faq.title')}
            </h2>

            <p className={`text-slate-600 text-base leading-relaxed mb-8 ${language === 'mr' ? 'font-mr' : 'font-sans'
              }`}>
              {language === 'mr'
                ? 'शासकीय निविदा, ई-प्रोक्योरमेंट आणि वेबिनारसंबंधी वारंवार विचारले जाणारे शंका व उत्तरे.'
                : 'Get clear, straightforward answers to essential questions about government tendering, workshops, and eligibility.'}
            </p>

            {/* Direct Helpline Assistance Box */}
            <div className="bg-[#FAF8F5] border border-[#E2DDD5] p-6 rounded-xs shadow-sm">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-9 h-9 bg-[#0B1628] text-amber-300 rounded-xs flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    {language === 'mr' ? 'अद्याप शंका आहे?' : 'Have more questions?'}
                  </span>
                  <p className="font-bold text-[#0B1628] text-sm sm:text-base">
                    +91 99759 17001
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center bg-[#0B1628] hover:bg-[#16243B] text-white py-2.5 px-4 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors mt-2 ${language === 'mr' ? 'font-mr text-sm font-semibold normal-case' : 'font-sans'
                  }`}
              >
                <span>{language === 'mr' ? 'चौकशी संदेश पाठवा' : 'Send An Enquiry'}</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Numbered Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              const numberStr = (idx + 1).toString().padStart(2, '0');

              return (
                <div
                  key={idx}
                  className={`rounded-xs transition-all duration-300 border ${isOpen
                    ? 'bg-[#FAF8F5] border-[#93622A] shadow-md border-l-4 border-l-[#93622A]'
                    : 'bg-[#FAF8F5] border-[#E2DDD5] hover:border-[#93622A]/50 shadow-2xs'
                    }`}
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-xs ${isOpen ? 'bg-[#0B1628] text-amber-300' : 'bg-[#93622A]/10 text-[#93622A]'
                        }`}>
                        {numberStr}
                      </span>

                      <span className={`font-bold text-base sm:text-lg ${isOpen ? 'text-[#0B1628]' : 'text-slate-800 group-hover:text-[#93622A]'
                        } ${language === 'mr' ? 'font-mr text-lg' : 'font-sans'}`}>
                        {item.q}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#0B1628] text-amber-300 rotate-180' : 'bg-[#F2EFE9] text-[#0B1628]'
                      }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-slate-700 border-t border-[#E2DDD5]/60 bg-[#FAF8F5]">
                      <p className={`text-sm sm:text-base leading-relaxed ${language === 'mr' ? 'font-mr text-base' : 'font-sans'
                        }`}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
