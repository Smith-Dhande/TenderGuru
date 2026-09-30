import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Streamlined navigation items
  const navItems = [
    { key: 'home', href: '#home', label: t('nav.home') },
    { key: 'about', href: '#about', label: t('nav.about') },
    { key: 'services', href: '#services', label: t('nav.services') },
    { key: 'framework', href: '#framework', label: t('nav.framework') },
    { key: 'webinars', href: '#webinars', label: t('nav.webinars') },
    { key: 'contact', href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      {/* Top subtle bar for authority & contact quick note */}
      <div className="hidden lg:block bg-[#0B1628] text-[#E2E8F0] text-xs py-1.5 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center space-x-4">
            <span className={language === 'mr' ? 'font-mr' : 'font-sans'}>
              {language === 'mr'
                ? 'शासकीय निविदा, e-Procurement व GeM चे अधिकृत प्रशिक्षण व सल्लागार केंद्र'
                : 'Official Advisory & Training Center for Government Tenders, e-Procurement & GeM'}
            </span>
          </div>
          <div className="flex items-center space-x-6 text-xs">
            <span className="text-amber-300/90 font-medium">
              {language === 'mr' ? 'हेल्पलाइन:' : 'Helpline:'} +91 99759 17001
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Official Logo Brand */}
          <a href="#home" className="flex items-center space-x-3 group py-1 shrink-0">
            {/* Logo graphic on both mobile & desktop */}
            <img
              src="/navbar_logo.png"
              alt="eTender Guru"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              onError={(e) => {
                e.currentTarget.src = "/logoTenderGuru.png";
              }}
            />

            {/* Brand text name: HIDDEN on mobile, SHOWN ONLY on desktop (lg:flex) */}
            <div className="hidden lg:flex flex-col">
              <span className="font-brand-display font-bold text-xl sm:text-2xl text-[#0B1628] tracking-tight leading-none">
                eTender <span className="text-[#93622A]">Guru</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-500 font-medium mt-1">
                {language === 'mr' ? 'शासकीय निविदा मार्गदर्शक' : 'Tender Consultancy & Education'}
              </span>
            </div>
          </a>

          {/* Right-Aligned Streamlined Navigation & Language Switcher */}
          <div className="hidden lg:flex items-center justify-end flex-1 space-x-6 xl:space-x-8 ml-6">
            <nav className="flex items-center space-x-4 xl:space-x-7">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors hover:text-[#93622A] text-[#16243B] py-2 relative group whitespace-nowrap ${
                    language === 'mr' ? 'font-mr text-sm xl:text-base' : 'font-sans'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#93622A] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Language Switcher */}
            <div className="pl-4 border-l border-[#E2DDD5] shrink-0">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Toggle & Language Switcher */}
          <div className="flex lg:hidden items-center space-x-2.5">
            <LanguageSwitcher />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#0B1628] hover:bg-[#F2EFE9] border border-[#E2DDD5] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E2D5] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 text-base font-semibold text-[#16243B] hover:text-[#93622A] hover:bg-[#F2EFE9] rounded-sm transition-colors ${
                  language === 'mr' ? 'font-mr' : 'font-sans'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
