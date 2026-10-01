import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const WhatIsTenderGuru = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  const cards = [
    {
      id: 0,
      tagEn: 'STRUCTURED METHODOLOGY',
      tagMr: 'व्यावहारिक प्रशिक्षण',
      titleEn: 'Structured Tender Mastery',
      titleMr: 'नियोजित व सुलभ निविदा शिक्षण',
      descEn: 'Master step-by-step bidding eligibility, EMD deposits, Digital Signature Certificates (DSC), and live portal submission.',
      descMr: 'शासकीय निविदा प्रक्रियेतील पात्रता अटी, EMD, डिजिटल स्वाक्षरी (DSC) आणि ऑनलाईन निविदा सादर करण्याचे प्रात्यक्षिक शिक्षण.',
      isFirst: true,
      image: '/hero_bg.png'
    },
    {
      id: 1,
      tagEn: '100% PRACTICAL',
      tagMr: 'थेट प्रात्यक्षिक',
      titleEn: 'Live Portal Training',
      titleMr: 'GeM व महाटेंडर्स थेट शिकवणी',
      descEn: 'Direct hands-on training for GeM product listing, L1 bidding, reverse auctions, and MahaTenders uploading.',
      descMr: 'GeM पोर्टलवरील प्रॉडक्ट लिस्टिंग, L1 बिडिंग, रिव्हर्स लिलाव व महाटेंडर्स पोर्टलवर निविदा भरण्याचे थेट प्रात्यक्षिक.',
      isFirst: false,
      image: '/hero_bg_alt.png'
    },
    {
      id: 2,
      tagEn: '14+ SECTORS',
      tagMr: 'व्यापक मार्गदर्शन',
      titleEn: 'Expert Advisory',
      titleMr: 'उद्योजक व कंत्राटदारांसाठी',
      descEn: 'Guiding engineers, Class-1 contractors, MSMEs, women SHGs, and emerging business owners across Maharashtra.',
      descMr: 'अभियंते, कंत्राटदार, MSMEs, महिला बचत गट व नवीन व्यावसायिकांसाठी विशेष मार्गदर्शन.',
      isFirst: false,
      image: '/hero_bg.png'
    }
  ];

  // Track visibility so auto-spin ONLY runs when section is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToCard = (index) => {
    setActiveCard(index);
    if (scrollRef.current && window.innerWidth < 1024) {
      const container = scrollRef.current;
      const targetCard = container.children[index];
      if (targetCard) {
        container.scrollTo({
          left: targetCard.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.children[0]?.offsetWidth || 1;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex >= 0 && newIndex < cards.length && newIndex !== activeCard) {
        setActiveCard(newIndex);
      }
    }
  };

  // Auto-spinning carousel every 2.5s strictly when section is visible in viewport
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      if (window.innerWidth < 1024 && scrollRef.current) {
        setActiveCard((prev) => {
          const next = (prev + 1) % cards.length;
          const container = scrollRef.current;
          const targetCard = container.children[next];
          if (targetCard) {
            container.scrollTo({
              left: targetCard.offsetLeft - container.offsetLeft,
              behavior: 'smooth'
            });
          }
          return next;
        });
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [isVisible, cards.length]);

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-[#FAF7F2] border-y border-[#E8E2D5] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <h2 className={`text-3xl sm:text-5xl text-[#0B1628] font-bold tracking-tight leading-tight ${
              isMarathi ? 'font-mr font-semibold text-3xl sm:text-5xl' : 'font-editorial'
            }`}>
              {isMarathi ? 'eTender Guru म्हणजे काय?' : 'What is eTender Guru?'}
            </h2>
          </div>

          <p className={`text-xs sm:text-base text-slate-700 max-w-lg leading-relaxed ${
            isMarathi ? 'font-mr text-sm sm:text-base' : 'font-sans'
          }`}>
            {isMarathi
              ? 'eTender Guru हे महाराष्ट्र राज्यातील शासकीय निविदा (Tenders), e-Procurement आणि गव्हर्नमेंट ई-मार्केटप्लेस (GeM) मधील व्यावसायिक शिक्षण व तज्ज्ञ मार्गदर्शनाचे प्रमुख केंद्र आहे.'
              : 'eTender Guru is Maharashtra’s premier public procurement & e-tendering guidance organization, empowering contractors, engineers, and MSMEs.'}
          </p>
        </div>

        {/* Dynamic Expanding Card Accordion Grid (Auto Carousel on Mobile, Accordion Flex Grid on Desktop) */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-5 pb-4 -mx-4 px-4 scrollbar-none lg:flex-row lg:gap-5 lg:items-stretch min-h-[240px] sm:min-h-[360px] w-full lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0"
        >
          {cards.map((card, idx) => {
            const isActive = activeCard === idx;

            if (card.isFirst) {
              // Card 1: Warm Paper Card
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveCard(idx)}
                  className={`w-[70vw] sm:w-[340px] lg:w-auto shrink-0 lg:shrink snap-center lg:snap-align-none cursor-pointer transition-all duration-500 ease-out rounded-2xl sm:rounded-3xl p-4.5 sm:p-9 relative overflow-hidden flex flex-col justify-between shadow-xs ${
                    isActive
                      ? 'lg:flex-[2] border-2 border-[#C89B53] shadow-xl scale-[1.01]'
                      : 'lg:flex-[1] border border-[#C89B53]/40 opacity-95 hover:opacity-100'
                  } bg-[#FAF8F5] text-[#0B1628]`}
                >
                  {/* Background Image Crop on Right */}
                  <div className={`absolute right-0 bottom-0 w-1/2 h-full transition-all duration-700 pointer-events-none z-0 ${
                    isActive ? 'opacity-40 scale-105' : 'opacity-25'
                  }`}>
                    <img
                      src={card.image}
                      alt={card.titleEn}
                      className="w-full h-full object-cover object-left"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/70 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <span className="text-[9px] sm:text-xs font-mono font-bold text-[#93622A] uppercase tracking-widest block mb-1 sm:mb-2">
                      {isMarathi ? card.tagMr : card.tagEn}
                    </span>
                    <h3 className={`text-base sm:text-3xl font-bold leading-snug max-w-sm ${
                      isMarathi ? 'font-mr font-bold text-lg sm:text-3xl' : 'font-editorial'
                    }`}>
                      {isMarathi ? card.titleMr : card.titleEn}
                    </h3>
                  </div>

                  <div className="relative z-10 pt-3 sm:pt-10">
                    <p className={`text-[11px] sm:text-sm text-slate-700 max-w-md leading-relaxed ${
                      isMarathi ? 'font-mr' : 'font-sans'
                    }`}>
                      {isMarathi ? card.descMr : card.descEn}
                    </p>
                  </div>
                </div>
              );
            }

            // Cards 2 & 3: Dark Ink Navy Cards
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(idx)}
                className={`w-[70vw] sm:w-[340px] lg:w-auto shrink-0 lg:shrink snap-center lg:snap-align-none cursor-pointer transition-all duration-500 ease-out rounded-2xl sm:rounded-3xl p-4.5 sm:p-9 relative overflow-hidden flex flex-col justify-between shadow-md ${
                  isActive
                    ? 'lg:flex-[2] border-2 border-[#C89B53] shadow-2xl scale-[1.01] bg-[#112038]'
                    : 'lg:flex-[1] border border-[#16243B] bg-[#0B1628] hover:bg-[#0F1C31]'
                } text-white`}
              >
                {/* Background Image Layer */}
                <div className={`absolute inset-0 transition-all duration-700 pointer-events-none z-0 ${
                  isActive ? 'opacity-35 scale-105' : 'opacity-0'
                }`}>
                  <img
                    src={card.image}
                    alt={card.titleEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-[#0B1628]/60 to-transparent" />
                </div>

                <div className="relative z-10">
                  <span className="text-[9px] sm:text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-1 sm:mb-2">
                    {isMarathi ? card.tagMr : card.tagEn}
                  </span>
                  <h3 className={`text-base sm:text-3xl font-bold leading-snug text-[#FAF8F5] ${
                    isMarathi ? 'font-mr font-bold text-lg sm:text-3xl' : 'font-sans'
                  }`}>
                    {isMarathi ? card.titleMr : card.titleEn}
                  </h3>
                </div>

                <div className="relative z-10 pt-3 sm:pt-10 border-t border-slate-700/60">
                  <p className={`text-[11px] sm:text-sm text-slate-300 leading-relaxed ${
                    isMarathi ? 'font-mr' : 'font-sans'
                  }`}>
                    {isMarathi ? card.descMr : card.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Auto-Spinning Carousel Indicator Dots */}
        <div className="flex lg:hidden justify-center items-center space-x-2 mt-3">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCard === idx ? 'w-6 bg-[#93622A]' : 'w-2 bg-[#C89B53]/30'
              }`}
              aria-label={`Go to card ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
