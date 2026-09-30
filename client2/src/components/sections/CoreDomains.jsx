import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export const CoreDomains = () => {
  const { t, language } = useLanguage();
  const items = t('domains.items');

  return (
    <section id="services" className="py-12 sm:py-18 bg-[#FAF8F5] text-[#0B1628] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
            {t('domains.tag')}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl text-[#0B1628] font-bold mt-1.5 leading-tight ${
            language === 'mr' ? 'font-mr font-semibold text-2.5xl sm:text-3.5xl' : 'font-editorial font-normal'
          }`}>
            {t('domains.title')}
          </h2>
        </div>

        {/* Mobile View: Horizontally Scrollable Cards Track */}
        <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-none">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[82vw] shrink-0 snap-center flex flex-col justify-between p-5 bg-white border border-[#E2DDD5] rounded-none shadow-sm"
            >
              <div>
                <span className="text-2xl font-bold text-[#93622A] font-mono mb-2 block">
                  {item.code}
                </span>
                <h3 className={`text-base font-bold text-[#0B1628] mb-2 ${
                  language === 'mr' ? 'font-mr text-lg' : 'font-sans'
                }`}>
                  {item.name}
                </h3>
                <p className={`text-slate-600 text-xs leading-relaxed mb-4 ${
                  language === 'mr' ? 'font-mr text-xs' : 'font-sans'
                }`}>
                  {item.desc}
                </p>
              </div>

              <a 
                href="#contact"
                className="inline-flex items-center text-xs font-semibold text-[#93622A] hover:text-[#0B1628] uppercase tracking-wider transition-colors pt-3 border-t border-[#E8E2D5]"
              >
                <span>{language === 'mr' ? 'अधिक जाणून घ्या' : 'Learn More'}</span>
                <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Desktop View: 3-Column Grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6 lg:gap-8 border-t border-[#E8E2D5] pt-6 sm:pt-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between p-5 sm:p-6 bg-white border border-[#E2DDD5] rounded-none hover:border-[#93622A] shadow-xs transition-colors">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[#93622A] font-mono mb-3 block">
                  {item.code}
                </span>
                <h3 className={`text-lg sm:text-xl font-bold text-[#0B1628] mb-2.5 ${
                  language === 'mr' ? 'font-mr text-xl sm:text-2xl' : 'font-sans'
                }`}>
                  {item.name}
                </h3>
                <p className={`text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 ${
                  language === 'mr' ? 'font-mr text-sm sm:text-base' : 'font-sans'
                }`}>
                  {item.desc}
                </p>
              </div>

              <a 
                href="#contact"
                className="inline-flex items-center text-xs font-semibold text-[#93622A] hover:text-[#0B1628] uppercase tracking-wider transition-colors pt-3 border-t border-[#E8E2D5]"
              >
                <span>{language === 'mr' ? 'अधिक जाणून घ्या' : 'Learn More'}</span>
                <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
