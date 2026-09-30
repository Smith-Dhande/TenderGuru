import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BookOpen, Laptop, Store, Award, ArrowRight, Check } from 'lucide-react';

export const WhatWeDo = () => {
  const { t, language } = useLanguage();
  const features = t('whatWeDo.features');
  const [activeTab, setActiveTab] = useState(0);

  const icons = [BookOpen, Laptop, Store, Award];

  return (
    <section id="about" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
            {t('whatWeDo.tag')}
          </span>
          <h2 className={`text-3xl sm:text-4xl text-[#0B1628] font-bold mt-2 mb-4 leading-tight ${language === 'mr' ? 'font-mr font-semibold' : 'font-editorial font-normal'
            }`}>
            {t('whatWeDo.title')}
          </h2>
          <p className={`text-base sm:text-lg text-slate-700 leading-relaxed ${language === 'mr' ? 'font-mr' : 'font-sans'
            }`}>
            {t('whatWeDo.subtitle')}
          </p>
        </div>

        {/* Editorial Split Layout (Left: Pillar Selector, Right: In-depth Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Numbered List Navigation (4 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {features.map((feature, idx) => {
              const Icon = icons[idx % icons.length];
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xs transition-all duration-200 border flex items-start space-x-4 ${isActive
                      ? 'bg-[#0B1628] text-white border-[#0B1628] shadow-md'
                      : 'bg-[#F2EFE9] text-[#16243B] border-[#E2DDD5] hover:bg-[#EAE5DA]'
                    }`}
                >
                  <span className={`text-sm font-mono font-bold px-2 py-0.5 rounded-xs ${isActive ? 'bg-amber-300 text-[#0B1628]' : 'bg-[#93622A]/15 text-[#93622A]'
                    }`}>
                    0{idx + 1}
                  </span>

                  <div className="flex-1">
                    <h3 className={`font-bold text-base sm:text-lg ${isActive ? 'text-white' : 'text-[#0B1628]'
                      } ${language === 'mr' ? 'font-mr text-lg sm:text-xl' : 'font-sans'}`}>
                      {feature.title}
                    </h3>
                  </div>

                  <ArrowRight className={`w-4 h-4 mt-1 transition-transform ${isActive ? 'text-amber-300 translate-x-1' : 'text-slate-400 opacity-0 group-hover:opacity-100'
                    }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Editorial Feature Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#F4F0E8] border-2 border-[#93622A]/30 p-6 sm:p-8 rounded-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E2DDD5]">
                <div className="flex items-center space-x-3">
                  {/* <div className="w-10 h-10 bg-[#0B1628] text-amber-300 flex items-center justify-center rounded-xs">
                    {React.createElement(icons[activeTab % icons.length], { className: "w-5 h-5" })}
                  </div> */}
                  <div>
                    <span className="text-xs font-bold font-mono text-[#93622A] uppercase tracking-wider">
                      Pillar 0{activeTab + 1}
                    </span>
                    <h4 className={`text-xl sm:text-2xl font-bold text-[#0B1628] ${language === 'mr' ? 'font-mr text-2xl' : 'font-editorial font-normal'
                      }`}>
                      {features[activeTab].title}
                    </h4>
                  </div>
                </div>
              </div>

              <p className={`text-slate-800 text-base sm:text-lg leading-relaxed mb-6 ${language === 'mr' ? 'font-mr text-lg' : 'font-sans font-normal'
                }`}>
                {features[activeTab].desc}
              </p>
            </div>

            {/* Bottom Callout in Active Card */}
            <div className="pt-6 border-t border-[#E2DDD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#7A501F]">
                <Check className="w-4 h-4 text-[#93622A]" />
                <span className={language === 'mr' ? 'font-mr text-sm' : 'font-sans'}>
                  {language === 'mr' ? 'व्यवहारिक प्रशिक्षण व मार्गदर्शन' : 'Practical Hands-on Guidance'}
                </span>
              </div>

              <a
                href="#training"
                className={`inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B1628] hover:text-[#93622A] transition-colors ${language === 'mr' ? 'font-mr text-sm font-semibold' : 'font-sans'
                  }`}
              >
                <span>{language === 'mr' ? 'सविस्तर माहिती पहा' : 'Explore Modules'}</span>
                <ArrowRight className="ml-1.5 w-4 h-4 text-[#93622A]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
