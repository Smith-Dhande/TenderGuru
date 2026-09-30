import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote, MapPin } from 'lucide-react';

export const Testimonials = () => {
  const { content } = useLanguage();
  const { testimonials } = content;

  return (
    <section id="testimonials" className="bg-[#FAF8F5] py-16 sm:py-24 border-b border-[#D8CFBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-[#D8CFBF] space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-[#9E6B1D]">
              {testimonials.sectionNum}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B]">
              {testimonials.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            {testimonials.title}
          </h2>
        </div>

        {/* Large Editorial Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.list.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-[#D8CFBF] shadow-sm flex flex-col justify-between space-y-6 relative hover:border-[#0B1727] transition-colors"
            >
              <Quote size={32} className="text-[#9E6B1D]/20 absolute top-4 right-4" />
              
              {/* Quote Body */}
              <p className="font-serif text-base sm:text-lg italic text-[#0F172A] leading-relaxed relative z-10">
                "{item.quote}"
              </p>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E7E1D7] space-y-1">
                <h3 className="font-serif font-bold text-base text-[#0F172A]">
                  {item.name}
                </h3>
                <p className="text-xs text-[#64748B] font-medium">
                  {item.role}
                </p>
                <div className="flex items-center gap-1 text-xs text-[#9E6B1D] pt-0.5">
                  <MapPin size={12} />
                  <span>{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
