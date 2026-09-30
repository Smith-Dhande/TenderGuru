import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  const { t, language } = useLanguage();
  const items = t('testimonials.items');
  const [centerIndex, setCenterIndex] = useState(0); // Center active card index

  const handlePrev = () => {
    setCenterIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Helper to determine index for Left, Center, Right slots
  const leftIndex = (centerIndex - 1 + items.length) % items.length;
  const rightIndex = (centerIndex + 1) % items.length;

  const displaySlots = [
    { item: items[leftIndex], realIdx: leftIndex, pos: 'left' },
    { item: items[centerIndex], realIdx: centerIndex, pos: 'center' },
    { item: items[rightIndex], realIdx: rightIndex, pos: 'right' }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E2DDD5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs font-bold tracking-widest text-[#93622A] uppercase font-sans">
            {t('testimonials.tag')}
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#0B1628] font-extrabold mt-2 leading-tight ${
            language === 'mr' ? 'font-mr' : 'font-editorial'
          }`}>
            {t('testimonials.title')}
          </h2>
        </div>

        {/* 3D Focus Stage (Center Card Always Largest) */}
        <div className="relative max-w-5xl mx-auto px-2">
          
          {/* 3 Slot Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 sm:gap-6 min-h-[360px] py-6">
            {displaySlots.map(({ item, realIdx, pos }) => {
              const isCenter = pos === 'center';

              return (
                <div
                  key={realIdx}
                  onClick={() => !isCenter && setCenterIndex(realIdx)}
                  className={`rounded-xs flex flex-col justify-between transition-all duration-500 ease-out ${
                    isCenter
                      ? 'scale-100 sm:scale-105 lg:scale-115 z-30 opacity-100 bg-[#FAF8F5] border-2 border-[#93622A] shadow-2xl p-7 sm:p-8'
                      : 'scale-90 z-10 opacity-50 bg-[#F2EFE9] border border-[#E2DDD5] shadow-xs p-6 cursor-pointer hover:opacity-80 transition-opacity hidden md:flex'
                  }`}
                >
                  <div>
                    {/* Header Rating & Quote */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1 text-[#93622A]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`fill-[#93622A] ${isCenter ? 'w-4 h-4' : 'w-3.5 h-3.5'}`} />
                        ))}
                      </div>

                      <Quote className={isCenter ? 'w-7 h-7 text-[#93622A]/30' : 'w-5 h-5 text-slate-400/20'} />
                    </div>

                    {/* Testimonial Quote Text */}
                    <p className={`leading-relaxed mb-6 ${
                      isCenter 
                        ? 'text-[#0B1628] text-base sm:text-lg font-medium drop-shadow-2xs' 
                        : 'text-slate-600 text-xs sm:text-sm line-clamp-4'
                    } ${language === 'mr' ? 'font-mr' : 'font-sans'}`}>
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Metadata */}
                  <div className={`pt-4 border-t ${isCenter ? 'border-[#93622A]/20' : 'border-[#E2DDD5]'}`}>
                    <div className="flex items-center space-x-1.5">
                      <p className={`font-bold ${isCenter ? 'text-[#0B1628] text-lg' : 'text-slate-800 text-base'} ${
                        language === 'mr' ? 'font-mr' : 'font-sans'
                      }`}>
                        {item.name}
                      </p>
                      {isCenter && <CheckCircle2 className="w-4 h-4 text-[#93622A]" />}
                    </div>

                    <p className={isCenter ? 'text-[#93622A] font-semibold text-xs mt-0.5' : 'text-slate-500 text-xs'}>
                      {item.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrow Controls & Dots */}
          <div className="flex items-center justify-center space-x-4 mt-10">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-[#FAF8F5] border border-[#93622A]/40 text-[#0B1628] hover:bg-[#0B1628] hover:text-white hover:border-[#0B1628] transition-all duration-200 shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCenterIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === centerIndex
                      ? 'w-8 bg-[#93622A]'
                      : 'w-2.5 bg-[#C5BDB0] hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3.5 rounded-full bg-[#FAF8F5] border border-[#93622A]/40 text-[#0B1628] hover:bg-[#0B1628] hover:text-white hover:border-[#0B1628] transition-all duration-200 shadow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
