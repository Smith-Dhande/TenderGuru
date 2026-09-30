import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TrendingUp, FileCheck, Users, ShieldCheck } from 'lucide-react';

export const ProcurementStatsStrip = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  const stats = [
    {
      icon: TrendingUp,
      valEn: '14+ SECTORS',
      valMr: '१४+ व्यवसाय क्षेत्रे',
      labelEn: 'Industries & Contractor Categories',
      labelMr: 'उद्योग, अभियांत्रिकी व कंत्राटदार वर्ग'
    },
    {
      icon: FileCheck,
      valEn: 'GeM & MAHATES',
      valMr: 'GeM व महाटेंडर्स',
      labelEn: 'Official Portal Integration Training',
      labelMr: 'शासकीय पोर्टलचे थेट प्रात्यक्षिक शिक्षण'
    },
    {
      icon: Users,
      valEn: '100% PRACTICAL',
      valMr: '१००% प्रात्यक्षिक',
      labelEn: 'Hands-on Tender Preparation',
      labelMr: 'प्रत्यक्ष निविदा भरणे व दस्तऐवजीकरण'
    },
    {
      icon: ShieldCheck,
      valEn: 'EXPERT-LED',
      valMr: 'तज्ज्ञांचे मार्गदर्शन',
      labelEn: 'Decades of Advisory Experience',
      labelMr: 'दीर्घकालीन निविदा क्षेत्रातील अनुभव'
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#FAF7F2] border-y border-[#E8E2D5] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Horizontal Credibility Grid (Non-card, pure editorial layout) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#E8E2D5]/70">
          
          {stats.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center p-3 ${idx > 0 ? 'pt-4 md:pt-3' : ''}`}
              >
                <div className="w-9 h-9 rounded-full bg-[#93622A]/10 text-[#93622A] flex items-center justify-center mb-2.5">
                  <IconComp className="w-4.5 h-4.5" />
                </div>

                <span className={`text-base sm:text-xl font-extrabold text-[#0B1628] tracking-tight mb-1 ${
                  isMarathi ? 'font-mr font-bold text-lg sm:text-2xl' : 'font-mono'
                }`}>
                  {isMarathi ? item.valMr : item.valEn}
                </span>

                <p className={`text-xs text-slate-600 leading-snug max-w-[180px] ${
                  isMarathi ? 'font-mr text-xs' : 'font-sans'
                }`}>
                  {isMarathi ? item.labelMr : item.labelEn}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
