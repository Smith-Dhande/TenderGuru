import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const VideoShowcase = () => {
  const { language } = useLanguage();

  const videosRow1 = [
    {
      id: 'v1',
      titleEn: 'Government Tender Guidance & Practical Bidding Session',
      titleMr: 'शासकीय निविदा मार्गदर्शक व प्रत्यक्ष सत्राची माहिती',
      url: 'https://www.youtube.com/watch?v=TyAfsIBcaw4',
      thumbnail: '/videos/yt1.jpg',
      duration: '14:20'
    },
    {
      id: 'v2',
      titleEn: 'e-Procurement & DSC Registration Live Orientation',
      titleMr: 'ई-प्रोक्योरमेंट व डिजिटल स्वाक्षरी प्रात्यक्षिक माहिती',
      url: 'https://youtu.be/1VHVoWCrSbA',
      thumbnail: '/videos/yt2.jpg',
      duration: '18:45'
    },
    {
      id: 'v3',
      titleEn: 'GeM Portal Seller Masterclass & Product Cataloging',
      titleMr: 'GeM पोर्टल विक्रेता नोंदणी व प्रॉडक्ट लिस्टिंग मार्गदर्शन',
      url: 'https://youtu.be/HuSZ53r7enc',
      thumbnail: '/videos/yt3.jpg',
      duration: '22:10'
    },
  ];

  const videosRow2 = [
    {
      id: 'v4',
      titleEn: 'PWD Contractor License & Registration Guide',
      titleMr: 'PWD कंत्राटदार परवाना व नोंदणी प्रक्रिया माहिती',
      url: 'https://youtu.be/m0vYNJl6dGU',
      thumbnail: '/videos/yt4.jpg',
      duration: '16:30'
    },
    {
      id: 'v5',
      titleEn: 'Technical Bid Documentation & Eligibility Filing',
      titleMr: 'तांत्रिक निविदा दस्तऐवजीकरण व पात्रता फॉर्म्स',
      url: 'https://youtu.be/w9X0J3kuxGg',
      thumbnail: '/videos/yt5.jpg',
      duration: '25:15'
    },
    {
      id: 'v6',
      titleEn: 'Real-world Government Contracting Insights & Q&A',
      titleMr: 'कंत्राटदार अनुभवातून मिळणारे थेट कायदेशीर मार्गदर्शन',
      url: 'https://youtu.be/ND1fTRNlm9k',
      thumbnail: '/videos/yt6.jpg',
      duration: '19:50'
    },
  ];

  // Repeat items 3x for seamless infinite marquee loop
  const marqueeRow1 = [...videosRow1, ...videosRow1, ...videosRow1];
  const marqueeRow2 = [...videosRow2, ...videosRow2, ...videosRow2];

  return (
    <section id="videos" className="py-14 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold tracking-widest text-[#93622A] uppercase block mb-2">
            {language === 'mr' ? 'युट्यूब व्हिडिओ मार्गदर्शन' : 'YOUTUBE VIDEO KNOWLEDGE'}
          </span>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold text-[#0B1628] tracking-tight leading-tight mb-3 ${
            language === 'mr' ? 'font-mr font-semibold' : 'font-editorial font-normal'
          }`}>
            {language === 'mr' ? 'ग्राहकांचे प्रत्यक्ष व्हिडिओ व मार्गदर्शन सत्रे' : 'Watch Live Training Sessions & Contractor Guidance'}
          </h2>
          <p className={`text-xs sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto ${
            language === 'mr' ? 'font-mr text-xs sm:text-base' : 'font-sans'
          }`}>
            {language === 'mr'
              ? 'अनेक ठेकेदार आणि व्यावसायिकांनी eTender Guru च्या युट्यूब चॅनेलवरील व्हिडिओ पाहून मिळवलेले मोलाचे ज्ञान.'
              : 'Explore real training sessions, e-procurement walkthroughs, and contractor advice directly from our official YouTube channel.'}
          </p>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="space-y-6 sm:space-y-8 relative">
        
        {/* Subtle Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left to Right Infinite Marquee */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-left flex gap-5 sm:gap-6">
            {marqueeRow1.map((video, idx) => (
              <a
                key={`r1-${idx}`}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[300px] sm:w-[380px] shrink-0 bg-white border border-[#E2DDD5] hover:border-[#93622A] rounded-none overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative h-44 sm:h-52 w-full bg-[#0B1628] overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={language === 'mr' ? video.titleMr : video.titleEn}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                    {/* Red YouTube Play Badge Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 group-hover:bg-red-700 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <span className="ml-1 text-lg sm:text-xl font-bold">▶</span>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/85 text-white px-2 py-0.5 rounded-none text-[10px] font-mono font-bold">
                      {video.duration}
                    </div>

                    {/* Channel Tag Badge */}
                    <div className="absolute top-3 left-3 bg-[#0B1628]/90 text-amber-300 px-2.5 py-1 rounded-none text-[10px] font-mono font-bold tracking-wider uppercase border border-amber-300/30">
                      YouTube
                    </div>
                  </div>

                  {/* Video Title Body */}
                  <div className="p-4">
                    <h3 className={`text-sm sm:text-base font-bold text-[#0B1628] group-hover:text-[#93622A] transition-colors leading-snug line-clamp-2 ${
                      language === 'mr' ? 'font-mr text-base font-bold' : 'font-sans'
                    }`}>
                      {language === 'mr' ? video.titleMr : video.titleEn}
                    </h3>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-4 pb-4 pt-0">
                  <div className="pt-2.5 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-bold text-[#93622A] group-hover:text-[#7A501F]">
                    <span>{language === 'mr' ? 'युट्यूबवर पहा' : 'Watch on YouTube'}</span>
                    <span className="text-amber-600 group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left Infinite Marquee */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-right flex gap-5 sm:gap-6">
            {marqueeRow2.map((video, idx) => (
              <a
                key={`r2-${idx}`}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[300px] sm:w-[380px] shrink-0 bg-white border border-[#E2DDD5] hover:border-[#93622A] rounded-none overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative h-44 sm:h-52 w-full bg-[#0B1628] overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={language === 'mr' ? video.titleMr : video.titleEn}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                    {/* Red YouTube Play Badge Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 group-hover:bg-red-700 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <span className="ml-1 text-lg sm:text-xl font-bold">▶</span>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/85 text-white px-2 py-0.5 rounded-none text-[10px] font-mono font-bold">
                      {video.duration}
                    </div>

                    {/* Channel Tag Badge */}
                    <div className="absolute top-3 left-3 bg-[#0B1628]/90 text-amber-300 px-2.5 py-1 rounded-none text-[10px] font-mono font-bold tracking-wider uppercase border border-amber-300/30">
                      YouTube
                    </div>
                  </div>

                  {/* Video Title Body */}
                  <div className="p-4">
                    <h3 className={`text-sm sm:text-base font-bold text-[#0B1628] group-hover:text-[#93622A] transition-colors leading-snug line-clamp-2 ${
                      language === 'mr' ? 'font-mr text-base font-bold' : 'font-sans'
                    }`}>
                      {language === 'mr' ? video.titleMr : video.titleEn}
                    </h3>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-4 pb-4 pt-0">
                  <div className="pt-2.5 border-t border-[#E8E2D5] flex items-center justify-between text-xs font-bold text-[#93622A] group-hover:text-[#7A501F]">
                    <span>{language === 'mr' ? 'युट्यूबवर पहा' : 'Watch on YouTube'}</span>
                    <span className="text-amber-600 group-hover:translate-x-1 transition-transform">↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
