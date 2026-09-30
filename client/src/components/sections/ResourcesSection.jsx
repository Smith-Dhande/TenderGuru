import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FileText, ArrowRight, Video, Download, ShieldCheck } from 'lucide-react';

export const ResourcesSection = () => {
  const { t, language } = useLanguage();

  const resourcesList = [
    {
      code: "01",
      tag: language === 'mr' ? 'कागदपत्रे तपासणी' : 'Primary Document Checklist',
      title: language === 'mr' ? 'टेंडरसाठी आवश्यक १० प्राथमिक कागदपत्रे' : '10 Essential Primary Documents for Tender Eligibility',
      desc: language === 'mr' ? 'शासकीय निविदेत भाग घेण्यापूर्वी कोणती कागदपत्रे तयार असावीत याची अचूक यादी.' : 'Comprehensive checklist of mandatory registration certificates and financial documents.',
    },
    {
      code: "02",
      tag: language === 'mr' ? 'GeM नोंदणी' : 'GeM Seller Registration',
      title: language === 'mr' ? 'GeM (गव्हर्नमेंट ई-मार्केटप्लेस) मार्गदर्शक' : 'GeM Portal Vendor Registration & Cataloging',
      desc: language === 'mr' ? 'केंद्र व राज्य शासनाच्या GeM पोर्टलवर मोफत विक्रेता नोंदणी कशी करावी.' : 'Step-by-step orientation on cataloging goods & services on the central GeM portal.',
    },
    {
      code: "03",
      tag: language === 'mr' ? 'ई-प्रोक्योरमेंट' : 'e-Procurement Bidding',
      title: language === 'mr' ? 'ई-निविदा बोली भरण्याची प्रक्रिया' : 'e-Tender Bidding & DSC Submission Guide',
      desc: language === 'mr' ? 'डिजिटल स्वाक्षरी (DSC) वापरून ऑनलाइन तांत्रिक व आर्थिक बोली भरण्याच्या अचूक पद्धती.' : 'Practical walkthrough of uploading technical and financial bids using DSC.',
    }
  ];

  return (
    <section id="resources" className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#93622A]/10 text-[#7A501F] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            <Video className="w-3.5 h-3.5 text-[#93622A]" />
            <span>{t('resources.tag')}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl text-[#0B1628] font-extrabold mb-3 leading-tight ${
            language === 'mr' ? 'font-mr' : 'font-editorial'
          }`}>
            {t('resources.title')}
          </h2>

          <p className={`text-base sm:text-lg text-slate-600 leading-relaxed ${
            language === 'mr' ? 'font-mr' : 'font-sans'
          }`}>
            {t('resources.desc')}
          </p>
        </div>

        {/* Video & Knowledge Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Direct HTML5 Video Player (No Poster Thumbnail Image) */}
          <div className="lg:col-span-6 bg-[#0B1628] rounded-xs border border-[#16243B] overflow-hidden shadow-lg flex flex-col justify-between">
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video 
                controls 
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="/owner&founder/ownertalk.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="p-5 sm:p-6 text-white bg-[#0B1628] flex justify-between items-center border-t border-slate-800">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 font-mono block mb-1">
                  {language === 'mr' ? 'अधिकृत व्हिडिओ सत्र' : 'Official Educational Video'}
                </span>
                <p className={`font-bold text-base sm:text-lg ${language === 'mr' ? 'font-mr' : 'font-sans'}`}>
                  {language === 'mr' ? 'शासकीय निविदा मार्गदर्शक सत्र' : 'Government Tender Advisory Session'}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'mr' ? 'मार्गदर्शक: हर्षद बर्गे (संस्थापक, ई-टेंडर गुरु)' : 'Presenter: Harshad Barge (Founder, eTender Guru)'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Redesigned Knowledge Hub Resource Items */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {resourcesList.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF8F5] border border-[#E2DDD5] p-5 sm:p-6 rounded-xs hover:border-[#93622A] transition-all duration-200 shadow-2xs group flex items-start space-x-4"
              >
                <div className="w-10 h-10 bg-[#0B1628] text-amber-300 rounded-xs flex items-center justify-center shrink-0 font-mono font-bold text-sm mt-0.5">
                  {item.code}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#93622A] bg-[#93622A]/10 px-2 py-0.5 rounded-xs">
                      {item.tag}
                    </span>
                    <FileText className="w-4 h-4 text-slate-400 group-hover:text-[#93622A] transition-colors" />
                  </div>

                  <h4 className={`text-base sm:text-lg font-bold text-[#0B1628] mb-1 group-hover:text-[#93622A] transition-colors ${
                    language === 'mr' ? 'font-mr text-lg sm:text-xl' : 'font-sans'
                  }`}>
                    {item.title}
                  </h4>

                  <p className={`text-xs sm:text-sm text-slate-600 leading-relaxed ${
                    language === 'mr' ? 'font-mr' : 'font-sans'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Action Link */}
            <div className="pt-2">
              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center bg-[#0B1628] hover:bg-[#16243B] text-white py-3.5 px-6 rounded-xs text-sm font-bold shadow-md transition-colors ${
                  language === 'mr' ? 'font-mr text-base' : 'font-sans uppercase tracking-wider'
                }`}
              >
                <span>{t('resources.cta')}</span>
                <ArrowRight className="ml-2 w-4 h-4 text-amber-300" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
