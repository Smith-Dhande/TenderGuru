import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar, Clock, Video, CheckCircle2, ArrowRight } from 'lucide-react';

export const Webinars = () => {
  const { content } = useLanguage();
  const { webinars } = content;
  const { nextWebinar } = webinars;

  return (
    <section id="webinars" className="bg-[#F3EFE9] py-16 sm:py-24 border-b border-[#D8CFBF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-10 border-b border-[#D8CFBF] space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-[#9E6B1D]">
              {webinars.sectionNum}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#64748B]">
              {webinars.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            {webinars.title}
          </h2>
        </div>

        {/* Date-led Webinar Banner Container */}
        <div className="mt-10 bg-white border border-[#D8CFBF] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Date & Time Column (4 cols) */}
          <div className="lg:col-span-4 bg-[#FAF8F5] p-6 border border-[#D8CFBF] space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#F9F1E2] text-[#9E6B1D] text-xs font-semibold px-3 py-1 rounded-[2px] border border-[#C58B2B]/30">
              <Video size={14} />
              <span>{nextWebinar.mode}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#0F172A] font-serif font-bold text-xl sm:text-2xl">
                <Calendar size={22} className="text-[#9E6B1D]" />
                <span>{nextWebinar.date}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#64748B] text-sm font-medium">
                <Clock size={18} className="text-[#9E6B1D]" />
                <span>{nextWebinar.time}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E7E1D7]">
              <span className="text-xs text-[#64748B] block font-medium uppercase tracking-wider">नोंदणी शुल्क</span>
              <span className="text-base font-bold text-[#0F172A]">{nextWebinar.fee}</span>
            </div>
          </div>

          {/* Agenda & Registration Details (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] leading-tight">
              {nextWebinar.topic}
            </h3>

            <div className="space-y-3">
              <span className="text-xs uppercase font-semibold text-[#64748B] tracking-wider block">
                कार्यशाळेची प्रमुख वैशिष्ट्ये (Agenda):
              </span>
              <ul className="space-y-2">
                {nextWebinar.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base text-[#334155]">
                    <CheckCircle2 size={18} className="text-[#9E6B1D] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="bg-[#0B1727] hover:bg-[#1B365D] text-white font-semibold text-base px-8 py-3.5 rounded-[2px] transition-colors flex items-center justify-center gap-2 text-center"
              >
                <span>{nextWebinar.cta}</span>
                <ArrowRight size={18} className="text-[#C58B2B]" />
              </a>
              <span className="text-xs text-[#64748B] text-center sm:text-left self-center">
                मर्यादित जागा उपलब्ध • थेट शंका निरसन सत्राचा समावेश
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
