import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Phone } from 'lucide-react';

export const Hero = () => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section className="bg-[#FAF8F5] text-[#0F172A] pt-16 sm:pt-24 pb-16 border-b border-[#E7E1D7] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
        
        {/* Refined Eyebrow Label */}
        <div className="inline-flex items-center justify-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E6B1D]">
            {hero.eyebrow}
          </span>
        </div>

        {/* Editorial Display Headline (Centered, 2-3 lines max) */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.18] tracking-tight max-w-4xl mx-auto">
          {hero.title}
        </h1>

        {/* Centered Supporting Copy (600-750px max width) */}
        <p className="text-lg sm:text-xl text-[#334155] leading-relaxed max-w-2xl mx-auto font-normal">
          {hero.subtitle}
        </p>

        {/* Single Strong Primary CTA + Secondary Link */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#training"
            className="bg-[#0B1727] hover:bg-[#1B365D] text-white font-semibold text-base px-8 py-3.5 rounded-[2px] transition-colors inline-flex items-center gap-2.5 shadow-sm"
          >
            <span>{hero.primaryCta}</span>
            <ArrowRight size={16} className="text-[#C58B2B]" />
          </a>

          <a
            href={`tel:${hero.phoneCta.replace(/\s+/g, '')}`}
            className="text-base font-semibold text-[#0B1727] hover:text-[#9E6B1D] transition-colors inline-flex items-center gap-2"
          >
            <Phone size={16} className="text-[#9E6B1D]" />
            <span>{hero.secondaryCta}: {hero.phoneCta}</span>
          </a>
        </div>

        {/* Editorial Founder Photograph (POSITIONED BELOW THE HERO MESSAGE) */}
        <div className="pt-10 max-w-3xl mx-auto">
          <div className="bg-white p-3 sm:p-4 border border-[#D8CFBF] shadow-sm">
            <div className="overflow-hidden bg-[#F3EFE9]">
              <img
                src="/owner&founder/image.png"
                alt="eTender Guru Founder & Advisory Board"
                className="w-full h-auto max-h-[520px] object-cover object-top"
              />
            </div>
            <div className="pt-3 pb-1 text-center border-t border-[#E7E1D7] mt-3">
              <span className="text-xs font-serif font-bold text-[#0F172A] tracking-wide block">
                {hero.founderCaption}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
