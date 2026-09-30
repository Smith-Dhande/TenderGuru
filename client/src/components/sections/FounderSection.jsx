import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote, CheckCircle2, Award } from 'lucide-react';

export const FounderSection = () => {
  const { t, language } = useLanguage();
  const highlights = t('founder.highlights');

  return (
    <section id="founder" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Frame */}
        <div className="bg-[#FAF8F5] border border-[#E2DDD5] p-6 sm:p-10 lg:p-12 rounded-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Founder Photograph Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 border-2 border-[#93622A]/30 rounded-xs pointer-events-none transform translate-x-2 translate-y-2" />
                
                {/* Authentic Founder Image */}
                <div className="relative bg-[#0B1628] rounded-xs overflow-hidden border border-[#E2DDD5] aspect-[4/5] shadow-md">
                  <img
                    src="/owner&founder/image copy.png"
                    alt="Harshad Barge - Founder eTender Guru"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to alternate copy if any issue
                      e.currentTarget.src = "/owner&founder/image.png";
                    }}
                  />
                  
                  {/* Subtle Name Tag Overlay on Image */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1628] via-[#0B1628]/80 to-transparent p-4 text-white">
                    <p className={`font-bold text-lg ${language === 'mr' ? 'font-mr' : 'font-sans'}`}>
                      {t('founder.name')}
                    </p>
                    <p className="text-xs text-amber-300 font-medium">
                      {language === 'mr' ? '१५+ वर्षे शासकीय कंत्राटदार अनुभव' : '15+ Years Active Contractor'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Biography Column */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
                {t('founder.tag')}
              </span>
              
              <h2 className={`text-3xl sm:text-4xl text-[#0B1628] font-bold mt-2 mb-2 ${
                language === 'mr' ? 'font-mr font-semibold' : 'font-editorial font-normal'
              }`}>
                {t('founder.name')}
              </h2>
              
              <p className="text-sm font-semibold text-[#93622A] mb-6">
                {t('founder.role')}
              </p>

              {/* Mission Quote Box */}
              <div className="bg-[#F2EFE9] border-l-4 border-[#0B1628] p-5 mb-6 rounded-xs relative">
                <Quote className="w-8 h-8 text-[#93622A]/20 absolute top-3 right-3" />
                <p className={`text-base sm:text-lg text-[#0B1628] font-medium italic ${
                  language === 'mr' ? 'font-mr text-lg sm:text-xl' : 'font-editorial'
                }`}>
                  "{t('founder.quote')}"
                </p>
              </div>

              {/* Bio Paragraph */}
              <p className={`text-slate-700 leading-relaxed mb-6 text-sm sm:text-base ${
                language === 'mr' ? 'font-mr text-base' : 'font-sans'
              }`}>
                {t('founder.bio')}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-4 border-t border-[#E2DDD5]">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-sm font-medium text-[#16243B]">
                    <CheckCircle2 className="w-4 h-4 text-[#93622A] shrink-0" />
                    <span className={language === 'mr' ? 'font-mr' : 'font-sans'}>{item}</span>
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
