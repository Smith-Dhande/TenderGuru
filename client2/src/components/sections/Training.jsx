import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, Video, Languages, GraduationCap, ChevronDown, ChevronUp, Check } from 'lucide-react';

export const Training = () => {
  const { content } = useLanguage();
  const { training } = content;
  const [openModule, setOpenModule] = useState(0);

  const toggleModule = (idx) => {
    setOpenModule(openModule === idx ? null : idx);
  };

  return (
    <section id="training" className="bg-[#FAF8F5] py-16 sm:py-24 border-b border-[#D8CFBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-[#D8CFBF] space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-[#9E6B1D]">
              {training.sectionNum}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B]">
              {training.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            {training.title}
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-10">
          
          {/* Particulars Panel (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-[#D8CFBF] p-6 sm:p-8 space-y-6 sticky top-28 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#0F172A] pb-4 border-b border-[#E7E1D7]">
                प्रशिक्षण तपशील (Particulars)
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <Clock size={18} className="text-[#9E6B1D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">कालावधी (Duration)</span>
                    <span className="text-base font-medium text-[#0F172A]">{training.particulars.duration}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Video size={18} className="text-[#9E6B1D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">स्वरूप (Format)</span>
                    <span className="text-base font-medium text-[#0F172A]">{training.particulars.mode}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Languages size={18} className="text-[#9E6B1D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">माध्यम (Language)</span>
                    <span className="text-base font-medium text-[#0F172A]">{training.particulars.language}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <GraduationCap size={18} className="text-[#9E6B1D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block">पात्रता (Eligibility)</span>
                    <span className="text-base font-medium text-[#0F172A]">{training.particulars.eligibility}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E1D7]">
                <a
                  href="#contact"
                  className="w-full bg-[#0B1727] hover:bg-[#1B365D] text-white font-semibold text-center py-3 px-4 rounded-[2px] block transition-colors text-sm"
                >
                  प्रशिक्षणासाठी नोंदणी करा
                </a>
              </div>
            </div>
          </div>

          {/* Syllabus Modules (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-6">
              अभ्यासक्रम (Syllabus Structure)
            </h3>

            <div className="divide-y divide-[#D8CFBF] border border-[#D8CFBF] bg-white">
              {training.syllabus.map((item, idx) => {
                const isOpen = openModule === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#9E6B1D] block">
                          {item.module}
                        </span>
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A]">
                          {item.title}
                        </h4>
                      </div>
                      <div className="text-[#0F172A] p-1.5 border border-[#D8CFBF] rounded-full shrink-0">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-base text-[#334155] leading-relaxed border-t border-[#F3EFE9] bg-[#FAF8F5]/50">
                        <div className="flex items-start gap-3">
                          <Check size={18} className="text-[#9E6B1D] shrink-0 mt-1" />
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
