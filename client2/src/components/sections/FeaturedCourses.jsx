import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CourseCard } from './Courses/CourseCard';

export const FeaturedCourses = () => {
  const { t, language } = useLanguage();
  const coursesList = t('courses.items');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? coursesList : coursesList.slice(0, 4);

  return (
    <section id="courses" className="py-14 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1628] tracking-tight leading-tight mb-3 ${language === 'mr' ? 'font-mr font-semibold' : 'font-editorial font-normal'
            }`}>
            {t('courses.title')}
          </h2>

          <p className={`text-xs sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto ${language === 'mr' ? 'font-mr text-xs sm:text-base' : 'font-sans'
            }`}>
            {t('courses.subtitle')}
          </p>
        </div>

        {/* 2-Column Mobile & 4-Column Desktop Course Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
          {visibleCourses.map((course, idx) => (
            <CourseCard
              key={course.id || idx}
              course={course}
              onSelect={setSelectedCourse}
              language={language}
              t={t}
            />
          ))}
        </div>

        {/* View More Courses CTA Button */}
        <div className="mt-10 sm:mt-14 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`inline-flex items-center justify-center bg-[#0B1628] hover:bg-[#16243B] text-white px-8 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer ${language === 'mr' ? 'font-mr text-sm font-bold' : 'font-sans'
              }`}
          >
            <span>{showAll ? t('Show Less') : t('View More')}</span>
            {/* <span className="ml-2 text-amber-300 font-mono text-sm">{showAll ? '▲' : '▼'}</span> */}
          </button>
        </div>

      </div>

      {/* Course Details Modal Popup */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div
            className="bg-white border-2 border-[#93622A] max-w-2xl w-full rounded-none shadow-2xl overflow-hidden max-h-[90vh] flex flex-col relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Banner Header */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#0B1628]">
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-[#0B1628]/40 to-transparent" />

              {/* Close Button Top Right */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-3 right-3 bg-[#0B1628]/80 hover:bg-[#0B1628] text-white text-xs font-mono font-bold px-3 py-1.5 rounded-none border border-white/20 transition-colors"
              >
                {t('courses.close')} [X]
              </button>

              {/* Title on Banner */}
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 bg-[#0B1628]/90 px-3 py-1 rounded-none border border-amber-300/30 inline-block mb-2">
                  {selectedCourse.tag}
                </span>
                <h3 className={`text-xl sm:text-2xl font-bold leading-tight ${language === 'mr' ? 'font-mr text-2xl font-bold' : 'font-editorial font-normal'
                  }`}>
                  {selectedCourse.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-5">

              {/* Description */}
              <div>
                <p className={`text-slate-800 text-sm sm:text-base leading-relaxed ${language === 'mr' ? 'font-mr text-sm sm:text-base' : 'font-sans'
                  }`}>
                  {selectedCourse.desc}
                </p>
              </div>

              {/* Course Meta Info Strip */}
              <div className="grid grid-cols-2 gap-3 bg-[#FAF8F5] p-3.5 rounded-none border border-[#E2DDD5] text-xs">
                <div>
                  <span className="text-slate-500 font-mono uppercase text-[10px] block">
                    {language === 'mr' ? 'कालावधी' : 'Duration'}
                  </span>
                  <span className="font-bold text-[#0B1628] font-mono">
                    {selectedCourse.duration}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 font-mono uppercase text-[10px] block">
                    {language === 'mr' ? 'पात्रता स्तर' : 'Eligibility Level'}
                  </span>
                  <span className="font-bold text-[#0B1628] font-mono">
                    {selectedCourse.level}
                  </span>
                </div>
              </div>

              {/* Curriculum Modules */}
              {selectedCourse.modules && (
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider text-[#93622A] mb-3 font-mono ${language === 'mr' ? 'font-mr text-sm font-bold' : 'font-sans'
                    }`}>
                    {t('courses.syllabusTitle')}
                  </h4>

                  <ul className="space-y-2">
                    {selectedCourse.modules.map((mod, idx) => (
                      <li
                        key={idx}
                        className={`text-xs sm:text-sm text-[#0B1628] flex items-start space-x-2.5 p-2 rounded-none bg-[#FAF8F5] border-l-2 border-[#93622A] ${language === 'mr' ? 'font-mr text-xs sm:text-sm' : 'font-sans'
                          }`}
                      >
                        <span className="font-mono font-bold text-[#93622A] text-xs shrink-0">0{idx + 1}.</span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Modal Footer Action */}
            <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#E2DDD5] flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0B1628] transition-colors"
              >
                {t('courses.close')}
              </button>

              <a
                href="#webinars"
                onClick={() => setSelectedCourse(null)}
                className={`inline-flex items-center justify-center bg-[#93622A] hover:bg-[#7A501F] text-white px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors shadow-sm ${language === 'mr' ? 'font-mr text-xs font-bold' : 'font-sans'
                  }`}
              >
                <span>{t('courses.enrollNow')}</span>
                <span className="ml-1.5 text-amber-200">→</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
