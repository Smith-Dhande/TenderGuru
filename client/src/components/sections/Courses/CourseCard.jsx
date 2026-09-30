import React from 'react';

export const CourseCard = ({ course, onSelect, language, t }) => {
  const isMarathi = language === 'mr';
  
  // Title font styling (Prominent & readable)
  const titleFontClass = isMarathi 
    ? 'font-mr font-bold text-sm sm:text-base lg:text-lg text-[#0B1628]' 
    : 'font-editorial font-bold text-sm sm:text-base lg:text-lg text-[#0B1628]';

  return (
    <div
      onClick={() => onSelect(course)}
      className="bg-white border border-[#E8E2D5] hover:border-[#93622A] transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer overflow-hidden shadow-2xs hover:shadow-md"
    >
      <div>
        {/* 1. LARGE IMAGE (Dominant Visual Element) */}
        <div className="relative w-full aspect-[4/3] sm:h-52 lg:h-56 overflow-hidden bg-[#FAF8F5] border-b border-[#E8E2D5]">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* 2. CONTENT BODY (Title & Subtle Audience/Category Label) */}
        <div className="p-3 sm:p-4 md:p-5 flex flex-col space-y-1 sm:space-y-1.5">
          {/* Program Title */}
          <h3 className={`leading-snug group-hover:text-[#93622A] transition-colors line-clamp-2 ${titleFontClass}`}>
            {course.title}
          </h3>

          {/* Small Audience / Category / Level Label */}
          {course.level && (
            <p className="text-[10px] sm:text-xs font-mono text-slate-500 font-medium uppercase tracking-wider line-clamp-1">
              {course.level}
            </p>
          )}
        </div>
      </div>

      {/* 3. DURATION + CTA (Shown ONCE at bottom) */}
      <div className="p-3 sm:p-4 md:p-5 pt-0 mt-auto">
        <div className="pt-2.5 sm:pt-3.5 border-t border-[#E8E2D5] flex items-center justify-between gap-2 text-xs">
          {/* Duration (Displayed ONCE) */}
          <span className="font-mono text-[10px] sm:text-xs font-bold text-[#0B1628] shrink-0">
            {course.duration}
          </span>

          {/* Clear Minimal CTA */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(course);
            }}
            className={`inline-flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#93622A] group-hover:text-[#7A501F] transition-colors ${
              isMarathi ? 'font-mr font-bold' : 'font-sans'
            }`}
          >
            <span>{t('courses.viewCourse')}</span>
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
