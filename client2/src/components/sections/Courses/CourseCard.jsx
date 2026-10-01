import React from 'react';
import { Calendar, BarChart2, ArrowRight } from 'lucide-react';

export const CourseCard = ({ course, onSelect, language }) => {
  const isMarathi = language === 'mr';

  const titleFontClass = isMarathi
    ? 'font-mr font-bold text-[11px] sm:text-sm text-[#0B1628]'
    : 'font-editorial font-semibold text-[11px] sm:text-sm text-[#0B1628]';

  const categoryText = (course.tag || 'FOUNDATION').toUpperCase();

  return (
    <div
      onClick={() => onSelect(course)}
      className="bg-[#FAF7F2] border border-[#C89B53]/50 hover:border-[#C89B53] rounded-2xl sm:rounded-[28px] transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer shadow-2xs hover:shadow-lg hover:-translate-y-1 relative"
    >
      <div>
        {/* Banner Section Container */}
        <div className="relative">
          {/* Top Image Banner with Rounded Top Corners */}
          <div className="relative w-full h-32 sm:h-56 overflow-hidden rounded-t-2xl sm:rounded-t-[28px]">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Wave Layer 1: Subtle Low-Opacity Accent Wave (Behind) */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none opacity-40">
              <svg
                className="relative block w-full h-6 sm:h-12 text-[#C89B53]"
                viewBox="0 0 500 100"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,20 C180,80 320,5 500,30 L500,100 L0,100 Z"
                />
              </svg>
            </div>

            {/* Wave Layer 2: Main Solid Background Matching Wave (Front) */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
              <svg
                className="relative block w-full h-5 sm:h-10 text-[#FAF7F2]"
                viewBox="0 0 500 100"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,40 C150,90 350,10 500,50 L500,100 L0,100 Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="pt-2.5 sm:pt-4 px-2.5 sm:px-5 pb-2 sm:pb-3 flex flex-col">
          {/* Category Label */}
          <span className="text-[8px] sm:text-[11px] font-mono font-semibold tracking-wider text-[#A67B40] uppercase mb-0.5">
            {categoryText}
          </span>

          {/* Course Title */}
          <h3 className={`leading-tight group-hover:text-[#93622A] transition-colors line-clamp-2 min-h-[2rem] sm:min-h-[2.2rem] ${titleFontClass}`}>
            {course.title}
          </h3>

          {/* Short Gold Underline Divider (Hidden on mobile, visible on desktop) */}
          <div className="hidden sm:block w-6 sm:w-9 h-[1.5px] sm:h-[2px] bg-[#C89B53]/70 my-1.5 sm:my-2 group-hover:w-12 transition-all duration-300" />

          {/* Duration & Level Metadata Row */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 text-slate-600 text-[9px] sm:text-xs font-medium flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A67B40] shrink-0" />
              <span>{course.duration}</span>
            </div>
            <span className="text-[#C89B53]/40 font-light hidden sm:inline">|</span>
            <div className="flex items-center gap-1">
              <BarChart2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A67B40] shrink-0" />
              <span>{course.level}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Anchor Tag CTA Footer (Right-aligned) */}
      <div className="p-2.5 sm:p-5 pt-1 sm:pt-1.5 pb-2.5 sm:pb-4 flex items-center justify-end">
        <a
          href={`#course-${course.id || 'details'}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onSelect(course);
          }}
          className={`inline-flex items-center gap-1 text-[10px] sm:text-sm font-bold tracking-wide text-[#93622A] hover:text-[#0B1628] transition-colors group/link cursor-pointer ${isMarathi ? 'font-mr font-bold' : 'font-sans'
            }`}
        >
          <span>{isMarathi ? 'अभ्यासक्रम पहा' : 'View Course'}</span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};





