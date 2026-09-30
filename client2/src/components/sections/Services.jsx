import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowUpRight, Check } from 'lucide-react';

export const Services = () => {
  const { content } = useLanguage();
  const { services } = content;

  return (
    <section id="services" className="bg-[#F3EFE9] py-16 sm:py-24 border-b border-[#D8CFBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D8CFBF]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl font-bold text-[#9E6B1D]">
                {services.sectionNum}
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B]">
                {services.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
              {services.title}
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9E6B1D] hover:text-[#0F172A] transition-colors group"
          >
            <span>सर्व सेवांसाठी संपर्क करा</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Large Numbered Service Index Rows */}
        <div className="divide-y divide-[#D8CFBF]">
          {services.list.map((service, idx) => (
            <div
              key={idx}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 hover:bg-[#FAF8F5] px-4 -mx-4 transition-colors"
            >
              {/* Row Number */}
              <div className="lg:col-span-2 flex items-start">
                <span className="font-serif text-3xl font-bold text-[#9E6B1D]">
                  {service.num}
                </span>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-6 space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                  {service.title}
                </h3>
                <p className="text-base text-[#334155] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Key Deliverables & Action */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-semibold text-[#64748B] tracking-wider block">
                    प्रमुख घटक (Deliverables):
                  </span>
                  <ul className="space-y-1">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#334155] flex items-center gap-2">
                        <Check size={14} className="text-[#9E6B1D] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F172A] hover:text-[#9E6B1D] transition-colors"
                  >
                    <span>चौकशी करा</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
