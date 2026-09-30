import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export const GovernmentProcurementEcosystem = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  const portals = [
    {
      num: '01',
      tag: 'MAHATENDERS.GOV.IN',
      titleEn: 'Maharashtra State Tenders',
      titleMr: 'महाराष्ट्र राज्य ई-निविदा प्रणाली',
      descEn: 'Public Works (PWD), Irrigation, Municipal Corporations, Zilla Parishad & State PSUs.',
      descMr: 'सार्वजनिक बांधकाम, सिंचन, महानगरपालिका, जिल्हा परिषद व राज्य सरकारच्या सर्व निविदा.',
      levelEn: 'State Level',
      levelMr: 'राज्य स्तर'
    },
    {
      num: '02',
      tag: 'GEM.GOV.IN',
      titleEn: 'Government e-Marketplace (GeM)',
      titleMr: 'गव्हर्नमेंट ई-मार्केटप्लेस (GeM)',
      descEn: 'Direct goods & services procurement, L1 bidding, reverse auctions & custom bids.',
      descMr: 'थेट वस्तू व सेवा पुरवठा, L1 बोली, रिव्हर्स लिलाव आणि कस्टम बीड्स भरण्याची संपूर्ण प्रक्रिया.',
      levelEn: 'National Portal',
      levelMr: 'राष्ट्रीय पोर्टल'
    },
    {
      num: '03',
      tag: 'EPROCURE.GOV.IN',
      titleEn: 'Central Public Procurement (CPPP)',
      titleMr: 'केंद्र सरकार ई-प्रोक्योरमेंट (CPPP)',
      descEn: 'Central Ministries, Railways, Defense, NHAI, CPWD & Central Public Enterprises.',
      descMr: 'केंद्रीय मंत्रालये, रेल्वे, संरक्षण विभाग, राष्ट्रीय महामार्ग आणि केंद्र सरकारच्या निविदा.',
      levelEn: 'Central Level',
      levelMr: 'केंद्र स्तर'
    },
    {
      num: '04',
      tag: 'STATUTORY COMPLIANCE',
      titleEn: 'Contractor Registration & Licensing',
      titleMr: 'कंत्राटदार नोंदणी व परवाने',
      descEn: 'Unemployed Engineer quotas, PWD Class-1 registration, Joint Ventures & MSME benefits.',
      descMr: 'सुशिक्षित बेरोजगार अभियंता सवलती, PWD वर्ग-१ नोंदणी, पार्टनरशिप व MSME लाभ.',
      levelEn: 'Advisory Focus',
      levelMr: 'सल्लागार केंद्र'
    }
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#FAF7F2] border-y border-[#E8E2D5] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-Column Editorial Grid (Zero Cards / Pure Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading & Editorial Purpose */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#93622A] uppercase block mb-3">
              {isMarathi ? 'शासकीय पोर्टल परिसंस्था' : 'GOVERNMENT PROCUREMENT ECOSYSTEM'}
            </span>

            <h2 className={`text-2xl sm:text-4xl text-[#0B1628] font-bold tracking-tight leading-tight mb-4 ${
              isMarathi ? 'font-mr font-semibold' : 'font-editorial'
            }`}>
              {isMarathi ? 'शासकीय निविदा व ई-प्रोक्योरमेंट पोर्टल मार्गदर्शिका' : 'Mastery Across India’s Public Bidding Platforms'}
            </h2>

            <div className="w-16 h-[2px] bg-[#C89B53] mb-5" />

            <p className={`text-xs sm:text-base text-slate-700 leading-relaxed mb-6 ${
              isMarathi ? 'font-mr text-sm sm:text-base' : 'font-sans'
            }`}>
              {isMarathi
                ? 'महाराष्ट्र राज्य आणि केंद्र सरकारच्या प्रमुख ई-निविदा पोर्टलवर यशस्वीपणे सहभागी होण्यासाठी सखोल प्रात्यक्षिक शिक्षण आणि कायदेशीर नोंदणी मार्गदर्शन.'
                : 'Providing practical execution capability across Central & State portals, GeM product listing, L1 bidding, and statutory contractor registrations.'}
            </p>

            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#93622A] uppercase tracking-wider">
              <span>{isMarathi ? '४ प्रमुख पोर्टल व विभाग' : '4 KEY PORTAL & DEPARTMENTS'}</span>
              <span>◆</span>
            </div>
          </div>

          {/* Right Column: Editorial Row List (No Card Boxes, Clean Hairline Separators) */}
          <div className="lg:col-span-7 divide-y divide-[#E8E2D5]">
            {portals.map((item, idx) => (
              <div 
                key={idx}
                className="py-6 first:pt-0 last:pb-0 group transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                {/* Left: Index + Content */}
                <div className="flex items-start space-x-4">
                  <span className="text-sm font-mono font-bold text-[#93622A] shrink-0 mt-0.5">
                    {item.num}.
                  </span>

                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[10px] font-mono font-bold text-[#93622A] uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold text-[#0B1628] group-hover:text-[#93622A] transition-colors ${
                      isMarathi ? 'font-mr text-lg sm:text-xl font-bold' : 'font-sans'
                    }`}>
                      {isMarathi ? item.titleMr : item.titleEn}
                    </h3>

                    <p className={`text-xs text-slate-600 leading-relaxed mt-1 max-w-lg ${
                      isMarathi ? 'font-mr text-xs sm:text-sm' : 'font-sans'
                    }`}>
                      {isMarathi ? item.descMr : item.descEn}
                    </p>
                  </div>
                </div>

                {/* Right: Level Badge & Arrow */}
                <div className="sm:text-right shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 pt-2 sm:pt-0">
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider bg-[#93622A]/10 px-2.5 py-1 rounded-none">
                    {isMarathi ? item.levelMr : item.levelEn}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#93622A] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
