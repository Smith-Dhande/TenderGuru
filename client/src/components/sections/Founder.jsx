import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote, Calendar } from 'lucide-react';

export const Founder = () => {
  const { content } = useLanguage();
  const { founder } = content;

  return (
    <section id="founder" className="bg-[#FAF8F5] py-16 sm:py-24 border-b border-[#D8CFBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-[#D8CFBF] space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-[#9E6B1D]">
              {founder.sectionNum}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B]">
              {founder.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            {founder.name}
          </h2>
        </div>

        {/* Editorial Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Portrait (5 cols desktop) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-4 border border-[#D8CFBF] shadow-sm space-y-4">
              <div className="overflow-hidden bg-[#F3EFE9]">
                <img
                  src="/owner&founder/image copy 2.png"
                  alt="eTender Guru Founder"
                  className="w-full h-auto object-cover max-h-[520px]"
                />
              </div>
              <div className="text-center pb-2 pt-1 border-t border-[#E7E1D7]">
                <h3 className="font-serif text-xl font-bold text-[#0F172A]">
                  {founder.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#9E6B1D] font-semibold mt-1">
                  {founder.role}
                </p>
              </div>
            </div>
          </div>

          {/* Biography & Quote Column (7 cols desktop) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quote Block */}
            <div className="bg-[#F3EFE9] p-6 sm:p-8 border-l-4 border-[#9E6B1D] space-y-3 relative">
              <Quote size={32} className="text-[#9E6B1D]/30 absolute top-4 right-4" />
              <p className="font-serif text-lg sm:text-xl italic text-[#0F172A] leading-relaxed">
                "{founder.quote}"
              </p>
            </div>

            {/* Long-form Biography */}
            <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              <p>{founder.bio}</p>
            </div>

            {/* Ruled Milestone Timeline */}
            <div className="pt-6 border-t border-[#D8CFBF]">
              <h4 className="font-serif text-lg font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-[#9E6B1D]" />
                <span>महत्त्वाचे टप्पे (Institutional Milestones)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {founder.milestones.map((ms, idx) => (
                  <div key={idx} className="bg-white p-4 border border-[#D8CFBF] space-y-1">
                    <span className="font-serif font-bold text-lg text-[#9E6B1D] block">
                      {ms.year}
                    </span>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {ms.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
