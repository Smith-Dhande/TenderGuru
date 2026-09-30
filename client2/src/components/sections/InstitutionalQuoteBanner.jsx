import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Quote } from 'lucide-react';

export const InstitutionalQuoteBanner = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <section className="py-16 sm:py-24 bg-[#0B1628] text-white relative overflow-hidden border-y border-[#16243B]">
      
      {/* Background Architectural Image Accent with Dark Tint */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <img
          src="/hero_bg.png"
          alt="Government Architectural Landmark"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Quote Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#93622A]/20 text-[#C89B53] border border-[#C89B53]/30 mb-6">
          <Quote className="w-6 h-6" />
        </div>

        {/* Big Editorial Quote Statement */}
        <blockquote className={`text-lg sm:text-2xl md:text-3xl font-medium text-slate-100 leading-snug sm:leading-relaxed max-w-4xl mx-auto mb-6 ${
          isMarathi ? 'font-mr font-semibold text-xl sm:text-3xl' : 'font-editorial'
        }`}>
          {isMarathi
            ? '“शासकीय निविदा प्रक्रियेतील पारदर्शकता आणि अचूक मार्गदर्शनामुळे महाराष्ट्रातील हजारो MSME, कंत्राटदार आणि तरुण अभियंत्यांना व्यवसायाच्या नवीन संधी उपलब्ध होत आहेत.”'
            : '“Transparency and structured guidance in government procurement open unprecedented doors for MSMEs, engineers, and emerging contractors across Maharashtra and India.”'}
        </blockquote>

        <div className="w-12 h-[2px] bg-[#C89B53] mx-auto mb-4" />

        {/* Attribution */}
        <p className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#C89B53] uppercase">
          {isMarathi ? 'eTender Guru सल्लागार मंडळ व अभ्यासक्रम पथक' : 'eTender Guru Advisory Board & Curriculum Directorate'}
        </p>

      </div>
    </section>
  );
};
