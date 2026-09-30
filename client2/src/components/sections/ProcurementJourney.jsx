import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Search, FileText, ShoppingBag, CreditCard, CheckCircle2 } from 'lucide-react';

export const ProcurementJourney = () => {
  const { language } = useLanguage();
  const isMarathi = language === 'mr';

  const journeySteps = [
    {
      num: '01',
      icon: Search,
      titleEn: 'Tender Search & Discovery',
      titleMr: 'निविदा शोध व निवड',
      descEn: 'Identifying high-probability Central, State & Portal tenders.',
      descMr: 'केंद्र व राज्य सरकारच्या योग्य निविदांचे वर्गीकरण व शोध.'
    },
    {
      num: '02',
      icon: FileText,
      titleEn: 'Eligibility & Documentation',
      titleMr: 'पात्रता व कागदपत्रे',
      descEn: 'PWD registration, Class-1 license, MSME & tax compliance.',
      descMr: 'PWD नोंदणी, परवाने आणि आवश्यक प्रमाणपत्रे संकलित करणे.'
    },
    {
      num: '03',
      icon: ShoppingBag,
      titleEn: 'GeM Portal Onboarding',
      titleMr: 'GeM पोर्टल नोंदणी',
      descEn: 'Product listing, brand approval, L1 bidding & reverse auctions.',
      descMr: 'GeM वर उत्पादन यादी, L1 बोली आणि ऑनलाईन लिलाव प्रक्रिया.'
    },
    {
      num: '04',
      icon: CreditCard,
      titleEn: 'Commercial & Financial Bid',
      titleMr: 'आर्थिक व व्यावसायिक बोली',
      descEn: 'EMD, Bank Guarantees, tender fees & pricing strategy.',
      descMr: 'EMD सुरक्षा ठेव, बँक हमी आणि अचूक दर निश्चिती.'
    },
    {
      num: '05',
      icon: CheckCircle2,
      titleEn: 'DSC Submission & Execution',
      titleMr: 'DSC सबमिशन व काम मिळवणे',
      descEn: 'Digital Signature Certificate signing & final tender upload.',
      descMr: 'डिजिटल स्वाक्षरीद्वारे ऑनलाईन निविदा सादर करणे.'
    }
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#FAF7F2] border-b border-[#E8E2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#93622A] uppercase block mb-2">
            {isMarathi ? '५-टप्प्यांची निविदा प्रक्रिया' : 'THE 5-STAGE PUBLIC TENDER ECOSYSTEM'}
          </span>
          <h2 className={`text-2xl sm:text-4xl text-[#0B1628] font-bold tracking-tight leading-tight ${
            isMarathi ? 'font-mr font-semibold' : 'font-editorial'
          }`}>
            {isMarathi ? 'शासकीय निविदा प्रक्रियेचा टप्पा-निहाय प्रवास' : 'The Roadmap to Winning Public Procurement Bids'}
          </h2>
        </div>

        {/* 5-Step Horizontal Timeline Track (Desktop & Mobile Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
          
          {/* Background Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1.5px] bg-[#C89B53]/30 z-0" />

          {journeySteps.map((step, idx) => {
            const IconComponent = step.icon;

            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Step Circle Badge */}
                <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border-2 border-[#C89B53] text-[#93622A] flex items-center justify-center shadow-xs group-hover:bg-[#93622A] group-hover:text-white transition-all duration-300 mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Step Index Number */}
                <span className="text-[10px] font-mono font-bold text-[#93622A] tracking-wider uppercase mb-1">
                  STAGE {step.num}
                </span>

                {/* Step Title */}
                <h3 className={`text-sm sm:text-base font-bold text-[#0B1628] mb-1.5 group-hover:text-[#93622A] transition-colors ${
                  isMarathi ? 'font-mr font-bold text-base' : 'font-sans'
                }`}>
                  {isMarathi ? step.titleMr : step.titleEn}
                </h3>

                {/* Step Description */}
                <p className={`text-xs text-slate-600 leading-relaxed max-w-[200px] ${
                  isMarathi ? 'font-mr text-xs' : 'font-sans'
                }`}>
                  {isMarathi ? step.descMr : step.descEn}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
