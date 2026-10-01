import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-[#0B1628] text-white pt-14 pb-8 border-t border-[#16243B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1 - Brand & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logoTenderGuru.png" 
                alt="eTender Guru" 
                className="h-10 w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <span className="font-brand-display font-bold text-2xl text-white tracking-tight leading-none">
                  eTender <span className="text-amber-300">Guru</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium mt-1">
                  {language === 'mr' ? 'शासकीय निविदा मार्गदर्शक' : 'Tender Consultancy & Education'}
                </span>
              </div>
            </div>

            <p className={`text-slate-300 text-sm leading-relaxed mb-6 max-w-md ${
              language === 'mr' ? 'font-mr text-base' : 'font-sans'
            }`}>
              {t('footer.desc')}
            </p>

            <div className="space-y-1 text-xs text-amber-300/90 font-medium">
              <p>{t('footer.marketedBy')}</p>
              <p className="text-slate-400">{t('footer.isoTag')}</p>
            </div>
          </div>

          {/* Column 2 - Quick Nav Links (Hidden on mobile responsive view) */}
          <div className="hidden md:block md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 font-sans">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#framework" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.framework')}
                </a>
              </li>
              <li>
                <a href="#webinars" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.webinars')}
                </a>
              </li>
              <li>
                <a href="#founder" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.founder')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-300 hover:text-white transition-colors">
                  {t('nav.faq')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Corporate & Legal Info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 font-sans">
              {t('footer.legal')}
            </h4>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p className="font-semibold text-white">
                HARSHADTENDER GURU EDUCATION (OPC) PRIVATE LIMITED
              </p>
              <p>
                {t('contact.info.address')}
              </p>
              <p className="text-slate-400">
                Helpline: +91 99759 17001
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} eTender Guru. {t('footer.rights')}</p>
          <p className="text-slate-500">
            {language === 'mr' ? 'शासकीय निविदा, e-Procurement व GeM चे अधिकृत संस्था' : 'Independent Education & Advisory Platform'}
          </p>
        </div>

      </div>
    </footer>
  );
};
