import React from 'react';

export const TestimonialCard = ({ item, isActive, language, onClick }) => {
  const isMarathi = language === 'mr';

  // Extract initials for clean monogram badge
  const initials = item.name
    ? item.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
    : 'TG';

  return (
    <div
      onClick={onClick}
      className={`w-full h-full bg-white border transition-all duration-300 p-4 sm:p-7 lg:p-8 flex flex-col justify-between select-none ${
        isActive
          ? 'border-2 border-[#93622A] shadow-xl relative z-20 cursor-default'
          : 'border border-[#D8CFBF] bg-[#FAF8F5]/90 hover:border-[#93622A]/60 cursor-pointer relative z-10'
      }`}
    >
      <div>
        {/* Editorial Teak Accent Bar */}
        <div
          className={`bg-[#93622A] transition-all duration-500 ${
            isActive ? 'w-8 sm:w-12 h-[3px] mb-3 sm:mb-5' : 'w-5 h-[2px] mb-2 opacity-60'
          }`}
        />

        {/* 1. Testimonial Quote */}
        <blockquote
          className={`leading-relaxed font-normal transition-colors ${
            isActive
              ? 'text-[#0B1628] text-xs xs:text-sm sm:text-lg lg:text-xl mb-3 sm:mb-6'
              : 'text-slate-700 text-[11px] sm:text-sm line-clamp-3 sm:line-clamp-4 mb-2 sm:mb-4'
          } ${isMarathi ? 'font-mr' : 'font-editorial italic'}`}
        >
          “{item.quote}”
        </blockquote>
      </div>

      {/* 2. Identity Block (Name, Designation, Monogram Avatar) */}
      <div
        className={`pt-2.5 sm:pt-4 border-t flex items-center justify-between gap-2 sm:gap-3 mt-auto transition-colors ${
          isActive ? 'border-[#E8E2D5]' : 'border-[#D8CFBF]'
        }`}
      >
        <div>
          <h3
            className={`font-bold tracking-tight text-[#0B1628] ${
              isActive
                ? isMarathi
                  ? 'font-mr text-sm sm:text-lg font-bold'
                  : 'font-sans text-xs sm:text-lg font-bold'
                : isMarathi
                ? 'font-mr text-xs font-bold'
                : 'font-sans text-[11px] sm:text-sm font-bold'
            }`}
          >
            {item.name}
          </h3>
          <p
            className={`font-mono text-[#93622A] font-medium mt-0.5 ${
              isActive ? 'text-[10px] sm:text-sm' : 'text-[9px] sm:text-xs'
            } ${isMarathi ? 'font-mr' : 'font-sans'}`}
          >
            {item.role}
          </p>
        </div>

        {/* Monogram Badge */}
        <div
          className={`rounded-none flex items-center justify-center shrink-0 border transition-all ${
            isActive
              ? 'w-8 h-8 sm:w-10 sm:h-10 bg-[#FAF8F5] border-[#E8E2D5]'
              : 'w-6 h-6 sm:w-8 sm:h-8 bg-[#FAF8F5]/80 border-[#D8CFBF]'
          }`}
        >
          <span
            className={`font-mono font-bold text-[#0B1628] tracking-widest uppercase ${
              isActive ? 'text-[10px] sm:text-xs' : 'text-[9px]'
            }`}
          >
            {initials}
          </span>
        </div>
      </div>
    </div>
  );
};
