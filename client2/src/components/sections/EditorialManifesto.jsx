import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Award, Landmark, ShieldCheck } from 'lucide-react';

export const EditorialManifesto = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  return (
    <section className="py-12 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Editorial Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Big Editorial Statement */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#93622A] uppercase block mb-3">
              {isMarathi ? 'संस्थेचे ध्येय व उद्दिष्टे' : 'INSTITUTIONAL PURPOSE & VISION'}
            </span>

            <h2 className={`text-2xl sm:text-4xl lg:text-4xl text-[#0B1628] font-bold leading-tight tracking-tight mb-5 ${
              isMarathi ? 'font-mr font-semibold' : 'font-editorial'
            }`}>
              {isMarathi 
                ? 'शासकीय निविदा व ई-प्रोक्योरमेंट प्रक्रियेत भारतीय उद्योजकांना सक्षम व सुसज्ज करणे.'
                : 'Demystifying Public Procurement for Indian Enterprise & Government Contractors.'}
            </h2>

            <div className="w-16 h-[2px] bg-[#C89B53] mb-6" />

            <p className={`text-sm sm:text-lg text-slate-700 leading-relaxed ${
              isMarathi ? 'font-mr text-base sm:text-lg' : 'font-sans'
            }`}>
              {isMarathi
                ? 'निविदा प्रक्रियेतील गुंतागुंत दूर करून MSME, कंत्राटदार आणि सुशिक्षित अभियंत्यांना GeM पोर्टल, e-Procurement व शासकीय कंत्राटांमध्ये थेट यश मिळवून देण्यासाठी व्यावहारिक शिक्षण व तज्ज्ञ मार्गदर्शन.'
                : 'Providing structured education, strategic GeM integration, and practical compliance frameworks to help businesses bid with confidence and scale in public sector contracts.'}
            </p>
          </div>

          {/* Right Column - 3 Editorial Pillar Indicators (Non-card, Pure Layout) */}
          <div className="lg:col-span-5 space-y-6 pt-2 lg:pt-8 lg:border-l lg:border-[#E8E2D5] lg:pl-10">
            
            {/* Pillar 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#93622A]/10 text-[#93622A] flex items-center justify-center shrink-0 mt-0.5">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-sm font-bold text-[#0B1628] uppercase tracking-wider mb-1 ${
                  isMarathi ? 'font-mr text-base font-bold normal-case' : 'font-sans'
                }`}>
                  {isMarathi ? 'शासकीय निविदा सुलभता' : 'Public Sector Access'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isMarathi ? 'शासकीय खात्यांच्या निविदा आणि नियमावलीचे सुलभ स्पष्टीकरण.' : 'Simplifying complex tender guidelines and government portal rules.'}
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#93622A]/10 text-[#93622A] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-sm font-bold text-[#0B1628] uppercase tracking-wider mb-1 ${
                  isMarathi ? 'font-mr text-base font-bold normal-case' : 'font-sans'
                }`}>
                  {isMarathi ? 'GeM व e-Procurement कौशल्य' : 'GeM & e-Procurement Expertise'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isMarathi ? 'गव्हर्नमेंट ई-मार्केटप्लेस व महाटेंडर्स पोर्टलचे थेट प्रात्यक्षिक.' : 'Step-by-step practical training on GeM cataloging and online bidding.'}
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#93622A]/10 text-[#93622A] flex items-center justify-center shrink-0 mt-0.5">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-sm font-bold text-[#0B1628] uppercase tracking-wider mb-1 ${
                  isMarathi ? 'font-mr text-base font-bold normal-case' : 'font-sans'
                }`}>
                  {isMarathi ? 'व्यावसायिक समृद्धी व यश' : 'Sustainable Business Growth'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isMarathi ? 'नवीन व्यावसायिकांना शासकीय कंत्राटांतून शाश्वत उत्पन्न मिळवून देणे.' : 'Empowering contractors and MSMEs to win recurring government contracts.'}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
