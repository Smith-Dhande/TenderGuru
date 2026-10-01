import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, BookOpen, Sparkles } from 'lucide-react';

export const ResourcesSection = () => {
  const { t, language } = useLanguage();
  const isMarathi = language === 'mr';
  const [activeItem, setActiveItem] = useState(0);

  const resourcesList = [
    {
      code: "01",
      tag: isMarathi ? 'कागदपत्रे तपासणी' : 'Primary Document Checklist',
      format: isMarathi ? 'आवश्यक तपासणी यादी' : 'Mandatory Checklist',
      readTime: isMarathi ? '३ मिनिटे' : '3 Min Read',
      title: isMarathi ? 'टेंडरसाठी आवश्यक १० प्राथमिक कागदपत्रे' : '10 Essential Primary Documents for Tender Eligibility',
      highlights: isMarathi ? [
        'GST नोंदणी व मागील ३ वर्षांचे आयटी रिटर्न (ITR)',
        'बँक सॉल्व्हन्सी व सीए उलाढाल प्रमाणपत्र'
      ] : [
        'GST Reg. & 3 Yrs ITR Returns',
        'Bank Solvency & CA Turnover Cert'
      ]
    },
    {
      code: "02",
      tag: isMarathi ? 'GeM नोंदणी' : 'GeM Seller Registration',
      format: isMarathi ? 'स्टेप-बाय-स्टेप मार्गदर्शक' : 'Step-by-Step Guide',
      readTime: isMarathi ? '५ मिनिटे' : '5 Min Read',
      title: isMarathi ? 'GeM (गव्हर्नमेंट ई-मार्केटप्लेस) विक्रेता नोंदणी' : 'GeM Portal Vendor Registration & Cataloging Guide',
      highlights: isMarathi ? [
        'OEM व रीविक्रेता प्रोफाइल निर्मिती',
        'L1 पर्चेस ऑर्डर व प्रॉडक्ट लिस्टिंग'
      ] : [
        'OEM & Reseller Profile Setup',
        'L1 Orders & Cataloging Protocol'
      ]
    },
    {
      code: "03",
      tag: isMarathi ? 'ई-प्रोक्योरमेंट बोली' : 'e-Procurement Bidding',
      format: isMarathi ? 'तांत्रिक नियमावली' : 'Technical Protocol',
      readTime: isMarathi ? '४ मिनिटे' : '4 Min Read',
      title: isMarathi ? 'ई-निविदा बोली भरण्याची अचूक तांत्रिक प्रक्रिया' : 'e-Tender Technical Bidding & DSC Submission Guide',
      highlights: isMarathi ? [
        'Class-3 DSC टोकन संगणक सेटअप',
        'BOQ Excel शीट एन्क्रिप्शन सबमिशन'
      ] : [
        'Class-3 DSC Token Setup',
        'BOQ Excel Price Envelope Encryption'
      ]
    }
  ];

  const currentActiveResource = resourcesList[activeItem];

  return (
    <section id="resources" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8E2D5] relative overflow-hidden select-none">
      {/* Background Watermark Accent */}
      <div className="absolute top-10 right-4 pointer-events-none opacity-[0.03] text-[8rem] sm:text-[14rem] font-brand-display text-[#0B1628] leading-none whitespace-nowrap hidden lg:block">
        TENDER GURU
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Institutional Section Header (Preserved Exactly As Requested) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-[#E8E2D5] gap-6">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
                {t('resources.tag')}
              </span>
            </div>
            <h2 className={`text-2xl sm:text-4xl lg:text-5xl text-[#0B1628] font-bold tracking-tight leading-tight ${
              isMarathi ? 'font-mr font-bold' : 'font-editorial'
            }`}>
              {t('resources.title')}
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed border-l-2 border-[#C89B53] pl-4 py-1 ${
              isMarathi ? 'font-mr' : 'font-sans'
            }`}>
              {t('resources.desc')}
            </p>
          </div>
        </div>

        {/* Centered YouTube-Style Masterclass Video Theater Showcase */}
        <div className="max-w-4xl mx-auto mb-12">
          
          {/* 16:9 Aspect Video Container (YouTube Theater Frame) */}
          <div className="relative aspect-video bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C89B53]/30">
            <video 
              controls 
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src="/owner&founder/ownertalk.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* YouTube Video Title */}
          <h3 className={`text-lg sm:text-2xl font-bold text-[#0B1628] mt-5 mb-3 leading-snug ${
            isMarathi ? 'font-mr text-xl sm:text-2xl' : 'font-sans'
          }`}>
            {isMarathi ? 'शासकीय निविदा प्रक्रिया आणि यश प्राप्तीचे सूत्र (अधिकृत सत्र)' : 'Government Tender Advisory & Technical Bidding Masterclass'}
          </h3>

          {/* YouTube Channel & Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-y border-[#E8E2D5] gap-4">
            
            {/* Channel Info */}
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-full bg-[#0B1628] border-2 border-[#C89B53] flex items-center justify-center text-amber-300 font-brand-display font-bold text-base shrink-0 shadow-sm">
                TG
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold text-[#0B1628] text-sm sm:text-base">
                    eTender Guru Official
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                </div>
                <span className="text-xs text-slate-500 font-medium block">
                  {isMarathi ? 'मार्गदर्शक: हर्षद बर्गे (संस्थापक)' : 'Presenter: Harshad Barge (Founder)'}
                </span>
              </div>
            </div>

            {/* YouTube Right Action Buttons */}
            <div className="flex items-center justify-end space-x-3 w-full sm:w-auto">
              <span className="text-xs font-mono font-bold text-[#93622A] bg-[#93622A]/10 px-3 py-1.5 rounded-full border border-[#C89B53]/30">
                15 MIN LESSON
              </span>
              
              <a
                href="#contact"
                className={`inline-flex items-center justify-center bg-gradient-to-r from-[#C89B53] to-[#93622A] hover:from-[#93622A] hover:to-[#7A501F] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all ${
                  isMarathi ? 'font-mr' : 'font-sans uppercase tracking-wider'
                }`}
              >
                <span>{t('resources.cta')}</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};



