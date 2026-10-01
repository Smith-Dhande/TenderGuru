import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Video, CheckCircle, ArrowRight, ShieldAlert } from 'lucide-react';

export const WebinarSection = () => {
  const { t, language } = useLanguage();
  const features = t('webinar.features');

  return (
    <section id="webinars" className="py-12 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Box */}
        <div className="bg-[#FAF8F5] border-2 border-[#93622A]/30 p-4 sm:p-10 lg:p-12 rounded-xs shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Column - Content */}
            <div className="lg:col-span-8">
              <div className="mb-3">
                <span className="text-xs font-semibold tracking-widest text-[#93622A] uppercase font-sans">
                  {t('webinar.tag')}
                </span>
              </div>

              <h2 className={`text-xl sm:text-3xl lg:text-4xl text-[#0B1628] font-bold mb-2.5 ${
                language === 'mr' ? 'font-mr font-semibold text-2xl sm:text-3xl' : 'font-editorial font-normal'
              }`}>
                {t('webinar.title')}
              </h2>

              <p className={`text-xs sm:text-lg text-slate-700 leading-relaxed mb-5 ${
                language === 'mr' ? 'font-mr text-xs sm:text-base' : 'font-sans'
              }`}>
                {t('webinar.subtitle')}
              </p>

              <div className="bg-[#F2EFE9] border-l-4 border-[#93622A] p-3.5 sm:p-4 mb-5 rounded-xs">
                <p className={`text-xs sm:text-sm font-semibold text-[#0B1628] ${
                  language === 'mr' ? 'font-mr text-sm sm:text-base' : 'font-sans'
                }`}>
                  {t('webinar.presenter')}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                  {t('webinar.badge')}
                </p>
              </div>

              {/* Bullet Features (Hidden on mobile, visible on desktop) */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-[#16243B]">
                    <CheckCircle className="w-4 h-4 text-[#93622A] shrink-0" />
                    <span className={language === 'mr' ? 'font-mr' : 'font-sans'}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Pricing & Action */}
            <div className="lg:col-span-4 bg-[#0B1628] text-white p-5 sm:p-8 rounded-xs border border-[#16243B] flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] sm:text-xs font-semibold text-amber-300 uppercase tracking-widest block mb-1">
                  {language === 'mr' ? 'वेबिनार नोंदणी' : 'Live Registration'}
                </span>
                <p className="text-lg sm:text-xl font-bold text-white mb-3">
                  {t('webinar.pricing')}
                </p>
                <div className="h-[1px] bg-slate-700 my-3" />
                <div className="flex items-start space-x-2 text-[11px] sm:text-xs text-slate-300 mb-5">
                  <ShieldAlert className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <p className={language === 'mr' ? 'font-mr text-xs' : 'font-sans'}>
                    {t('webinar.note')}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center bg-[#93622A] hover:bg-[#7A501F] text-white px-5 py-3 rounded-md text-xs sm:text-sm font-bold shadow-xs transition-colors ${
                  language === 'mr' ? 'font-mr text-sm sm:text-base' : 'font-sans'
                }`}
              >
                <span>{t('webinar.cta')}</span>
                <ArrowRight className="ml-2 w-4 h-4 text-amber-300" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
