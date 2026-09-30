import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export const CoreDomains = () => {
  const { t, language } = useLanguage();
  const items = t('domains.items');

  return (
    <section id="services" className="py-12 sm:py-18 bg-[#0B1628] text-white border-b border-[#16243B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase font-sans">
            {t('domains.tag')}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-1.5 leading-tight ${
            language === 'mr' ? 'font-mr font-semibold text-2.5xl sm:text-3.5xl' : 'font-editorial font-normal'
          }`}>
            {t('domains.title')}
          </h2>
        </div>

        {/* 3 Domain Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 border-t border-slate-700/60 pt-6 sm:pt-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col justify-between p-5 sm:p-6 bg-slate-900/50 border border-slate-800 rounded-xs hover:border-amber-300/40 transition-colors">
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-amber-300/90 font-mono mb-3 block">
                  {item.code}
                </span>
                <h3 className={`text-lg sm:text-xl font-bold text-white mb-2.5 ${
                  language === 'mr' ? 'font-mr text-xl sm:text-2xl' : 'font-sans'
                }`}>
                  {item.name}
                </h3>
                <p className={`text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 ${
                  language === 'mr' ? 'font-mr text-sm sm:text-base' : 'font-sans'
                }`}>
                  {item.desc}
                </p>
              </div>

              <a 
                href="#contact"
                className="inline-flex items-center text-xs font-semibold text-amber-300 hover:text-white uppercase tracking-wider transition-colors pt-3 border-t border-slate-800"
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
