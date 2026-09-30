import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BookOpen, Laptop, Store, Award, ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export const WhatWeDo = () => {
  const { t, language } = useLanguage();
  const features = t('whatWeDo.features');
  const [activeTab, setActiveTab] = useState(0);

  const icons = [BookOpen, Laptop, Store, Award];

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-12 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
            {t('whatWeDo.tag')}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl text-[#0B1628] font-bold mt-1.5 mb-3 leading-tight ${language === 'mr' ? 'font-mr font-semibold text-2.5xl sm:text-3.5xl' : 'font-editorial font-normal'
            }`}>
            {t('whatWeDo.title')}
          </h2>
          <p className={`text-xs sm:text-base md:text-lg text-slate-700 leading-relaxed ${language === 'mr' ? 'font-mr text-xs sm:text-base' : 'font-sans'
            }`}>
            {t('whatWeDo.subtitle')}
          </p>
        </div>

        {/* Mobile View: Testimonial-Style Slider with Arrows on the Upper Side */}
        <div className="lg:hidden flex flex-col space-y-3">

          {/* Upper Navigation Control Bar */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0B1628] text-amber-300 shadow-xs">
                Pillar 0{activeTab + 1} / 0{features.length}
              </span>
            </div>

            {/* Upper Arrow Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-2.5 bg-[#0B1628] text-amber-300 hover:bg-[#16243B] active:scale-95 rounded-full transition-all shadow-xs flex items-center justify-center"
                aria-label="Previous Feature"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 bg-[#0B1628] text-amber-300 hover:bg-[#16243B] active:scale-95 rounded-full transition-all shadow-xs flex items-center justify-center"
                aria-label="Next Feature"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Feature Showcase Card Below Upper Arrow Bar */}
          <div className="bg-[#F4F0E8] border-2 border-[#93622A]/30 p-5 rounded-xs shadow-sm flex flex-col justify-between min-h-[240px]">
            <div>
              {/* Card Header Title & Icon */}
              <div className="flex items-center space-x-3 pb-3 mb-3.5 border-b border-[#E2DDD5]">
                {/* <div className="w-9 h-9 bg-[#0B1628] text-amber-300 flex items-center justify-center rounded-xs shrink-0 shadow-xs">
                  {React.createElement(icons[activeTab % icons.length], { className: "w-4.5 h-4.5" })}
                </div> */}
                <h4 className={`text-base font-bold text-[#0B1628] leading-tight ${language === 'mr' ? 'font-mr text-base font-bold' : 'font-editorial font-normal'
                  }`}>
                  {features[activeTab].title}
                </h4>
              </div>

              {/* Description */}
              <p className={`text-slate-800 text-xs sm:text-sm leading-relaxed mb-4 ${language === 'mr' ? 'font-mr text-xs sm:text-sm' : 'font-sans'
                }`}>
                {features[activeTab].desc}
              </p>
            </div>

            {/* Card Footer */}
            <div className="pt-3 border-t border-[#E2DDD5] flex items-center justify-between gap-2">
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#7A501F]">
                <Check className="w-3.5 h-3.5 text-[#93622A] shrink-0" />
                <span className={language === 'mr' ? 'font-mr text-xs' : 'font-sans'}>
                  {language === 'mr' ? 'व्यावहारिक मार्गदर्शन' : 'Practical Guidance'}
                </span>
              </div>

              <a
                href="#webinars"
                className={`inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B1628] hover:text-[#93622A] transition-colors shrink-0 ${language === 'mr' ? 'font-mr text-xs font-semibold' : 'font-sans'
                  }`}
              >
                <span>{language === 'mr' ? 'सविस्तर माहिती' : 'Explore'}</span>
                <ArrowRight className="ml-1 w-3.5 h-3.5 text-[#93622A]" />
              </a>
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center space-x-2 pt-1">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${activeTab === idx ? 'w-6 bg-[#0B1628]' : 'w-2 bg-[#E2DDD5] hover:bg-[#93622A]/40'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Desktop View: Editorial Split Layout (UNTOUCHED) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">

          {/* Desktop Left Column: Numbered Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {features.map((feature, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-xs transition-all duration-200 border flex items-center justify-between space-x-3 ${isActive
                    ? 'bg-[#0B1628] text-white border-[#0B1628] shadow-md'
                    : 'bg-[#F2EFE9] text-[#16243B] border-[#E2DDD5] hover:bg-[#EAE5DA]'
                    }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-xs shrink-0 ${isActive ? 'bg-amber-300 text-[#0B1628]' : 'bg-[#93622A]/15 text-[#93622A]'
                      }`}>
                      0{idx + 1}
                    </span>

                    <h3 className={`font-bold text-lg truncate ${isActive ? 'text-white' : 'text-[#0B1628]'
                      } ${language === 'mr' ? 'font-mr text-xl' : 'font-sans'}`}>
                      {feature.title}
                    </h3>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-amber-300 translate-x-1' : 'text-slate-400 opacity-60'
                    }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Feature Showcase Card */}
          <div className="lg:col-span-7 bg-[#F4F0E8] border-2 border-[#93622A]/30 p-8 rounded-xs flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E2DDD5]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#0B1628] text-amber-300 flex items-center justify-center rounded-xs shrink-0 shadow-xs">
                    {React.createElement(icons[activeTab % icons.length], { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <span className="text-xs font-bold font-mono text-[#93622A] uppercase tracking-wider">
                      Pillar 0{activeTab + 1}
                    </span>
                    <h4 className={`text-2xl font-bold text-[#0B1628] leading-tight ${language === 'mr' ? 'font-mr text-2xl font-bold' : 'font-editorial font-normal'
                      }`}>
                      {features[activeTab].title}
                    </h4>
                  </div>
                </div>
              </div>

              <p className={`text-slate-800 text-base md:text-lg leading-relaxed mb-6 ${language === 'mr' ? 'font-mr text-base md:text-lg' : 'font-sans font-normal'
                }`}>
                {features[activeTab].desc}
              </p>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-4 border-t border-[#E2DDD5] flex flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#7A501F]">
                <Check className="w-4 h-4 text-[#93622A] shrink-0" />
                <span className={language === 'mr' ? 'font-mr text-sm' : 'font-sans'}>
                  {language === 'mr' ? 'व्यावहारिक प्रशिक्षण व मार्गदर्शन' : 'Practical Hands-on Guidance'}
                </span>
              </div>

              <a
                href="#webinars"
                className={`inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0B1628] hover:text-[#93622A] transition-colors shrink-0 ${language === 'mr' ? 'font-mr text-xs font-semibold' : 'font-sans'
                  }`}
              >
                <span>{language === 'mr' ? 'सविस्तर माहिती पहा' : 'Explore Modules'}</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 text-[#93622A]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
