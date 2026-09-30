import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TestimonialCard } from './Testimonials/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
  const { t, language } = useLanguage();
  const items = t('testimonials.items');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const total = items.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay functionality (5.5s interval, pauses on hover / focus / reduced motion)
  useEffect(() => {
    if (isHovered) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  // Helper to compute continuous visual offset (-1 for left side, 0 for center active, 1 for right side)
  const getOffset = (index) => {
    let diff = index - activeIndex;
    if (diff < -1) diff += total;
    if (diff > 1) diff -= total;
    return diff;
  };

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#93622A] uppercase">
            {t('testimonials.tag')}
          </span>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl text-[#0B1628] font-bold mt-1.5 leading-tight ${
            language === 'mr' ? 'font-mr font-semibold' : 'font-editorial font-normal'
          }`}>
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Animated Carousel Track Area */}
        <div
          ref={carouselRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className="relative max-w-5xl mx-auto focus:outline-none"
          aria-label="Participant Testimonials Carousel"
        >
          {/* Stage Container with responsive height */}
          <div className="relative h-[310px] xs:h-[280px] sm:h-[310px] md:h-[310px] w-full flex items-center justify-center">
            {items.map((item, idx) => {
              const offset = getOffset(idx);
              const isActive = offset === 0;

              // Calculate responsive transform offset values for both mobile and desktop
              let transformStyle = '';
              let opacityStyle = 0;
              let zIndexStyle = 0;
              let pointerEventsStyle = 'none';

              if (offset === 0) {
                transformStyle = 'translate3d(0%, 0, 0) scale(1)';
                opacityStyle = 1;
                zIndexStyle = 30;
                pointerEventsStyle = 'auto';
              } else if (offset === 1) {
                transformStyle = 'translate3d(68%, 0, 0) scale(0.85)';
                opacityStyle = 0.5;
                zIndexStyle = 10;
                pointerEventsStyle = 'auto';
              } else if (offset === -1) {
                transformStyle = 'translate3d(-68%, 0, 0) scale(0.85)';
                opacityStyle = 0.5;
                zIndexStyle = 10;
                pointerEventsStyle = 'auto';
              } else {
                transformStyle = offset > 0 ? 'translate3d(120%, 0, 0) scale(0.7)' : 'translate3d(-120%, 0, 0) scale(0.7)';
                opacityStyle = 0;
                zIndexStyle = 0;
              }

              return (
                <div
                  key={idx}
                  style={{
                    transform: transformStyle,
                    opacity: opacityStyle,
                    zIndex: zIndexStyle,
                    pointerEvents: pointerEventsStyle,
                    transition: 'all 600ms cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                  className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[82%] sm:w-[68%] lg:w-[58%] max-w-2xl flex flex-col justify-between"
                >
                  <TestimonialCard
                    item={item}
                    isActive={isActive}
                    language={language}
                    onClick={() => !isActive && setActiveIndex(idx)}
                  />
                </div>
              );
            })}
          </div>

          {/* Refined Navigation Bar (Anchored Right Below Carousel) */}
          <div className="flex items-center justify-center space-x-5 mt-6 sm:mt-8">
            {/* Prev Arrow Button */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-none bg-white border border-[#93622A]/50 text-[#0B1628] hover:bg-[#0B1628] hover:text-white hover:border-[#0B1628] transition-all duration-300 flex items-center justify-center shadow-2xs cursor-pointer group"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Compact Pagination Bar */}
            <div className="flex items-center space-x-2 bg-white/90 border border-[#E8E2D5] px-3.5 py-2 rounded-none shadow-2xs">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-none transition-all duration-500 cursor-pointer ${
                    idx === activeIndex
                      ? 'w-7 bg-[#93622A]'
                      : 'w-2 bg-[#D8CFBF] hover:bg-[#93622A]/60'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-none bg-white border border-[#93622A]/50 text-[#0B1628] hover:bg-[#0B1628] hover:text-white hover:border-[#0B1628] transition-all duration-300 flex items-center justify-center shadow-2xs cursor-pointer group"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
