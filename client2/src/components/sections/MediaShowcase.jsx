import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Film, ShieldCheck } from 'lucide-react';

export const MediaShowcase = () => {
  const { content } = useLanguage();
  const { media } = content;

  if (!media) return null;

  return (
    <section id="media" className="bg-[#0B1727] text-white py-16 sm:py-24 border-b border-[#1B365D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-2 pb-10 border-b border-[#1B365D]">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-[#C58B2B]">
              {media.sectionNum}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#94A3B8]">
              {media.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {media.title}
          </h2>
          <p className="text-base text-[#94A3B8]">
            {media.subtitle}
          </p>
        </div>

        {/* Video Player Box */}
        <div className="mt-10 max-w-4xl mx-auto bg-[#13243B] border border-[#1B365D] p-3 sm:p-4 shadow-xl">
          <div className="relative bg-black aspect-video flex items-center justify-center">
            <video
              controls
              poster={media.poster}
              className="w-full h-full object-cover"
            >
              <source src={media.videoUrl} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>

          <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <Film size={16} className="text-[#C58B2B]" />
              <span>eTender Guru — संस्थात्मक मार्गदर्शन व्हिडिओ</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#C58B2B]" />
              <span>अधिकृत व्हिडिओ सत्र</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
