import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';

export const Header = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF8F5]/90 backdrop-blur-xl shadow-lg border-b border-[#E2DDD5]/80 py-0' 
        : 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D5]'
    }`}>
      {/* Top subtle bar - Smoothly collapses & fades out on desktop scroll */}
      <div 
        className={`hidden lg:block bg-[#0B1628] text-[#E2E8F0] text-xs transition-all duration-300 overflow-hidden border-b border-white/10 ${
          isScrolled ? 'max-h-0 py-0 opacity-0 border-none' : 'max-h-10 py-1.5 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-slate-300">
          <div className="flex items-center space-x-4">
            <span className={language === 'mr' ? 'font-mr' : 'font-sans'}>
              {language === 'mr'
                ? 'शासकीय निविदा, e-Procurement व GeM चे अधिकृत प्रशिक्षण व सल्लागार केंद्र'
                : 'Official Advisory & Training Center for Government Tenders, e-Procurement & GeM'}
            </span>
          </div>
          <div className="flex items-center space-x-6 text-xs">
            <a href="tel:+919975917001" className="text-amber-300/90 hover:text-amber-300 font-medium inline-flex items-center space-x-1.5 transition-colors">
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>{language === 'mr' ? 'हेल्पलाइन:' : 'Helpline:'} +91 99759 17001</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container - Height shrinks dynamically from h-20 to h-16 when scrolled */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>

          {/* Official Logo Brand */}
          <a href="#home" className="flex items-center space-x-3 group py-1 shrink-0">
            {/* Logo graphic on both mobile & desktop */}
            <img
              src="/navbar_logo.png"
              alt="eTender Guru"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'h-9 sm:h-10' : 'h-10 sm:h-12'
              }`}
              onError={(e) => {
                e.currentTarget.src = "/logoTenderGuru.png";
              }}
            />

            {/* Brand text name: HIDDEN on mobile, SHOWN ONLY on desktop (lg:flex) */}
            <div className="hidden lg:flex flex-col">
              <span className={`font-brand-display font-bold text-[#0B1628] tracking-tight leading-none transition-all duration-300 ${
                isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
              }`}>
                eTender <span className="text-[#93622A]">Guru</span>
              </span>
              <span className={`tracking-widest uppercase text-slate-500 font-medium transition-all duration-300 ${
                isScrolled ? 'text-[9px] mt-0.5' : 'text-[10px] mt-1'
              }`}>
                {language === 'mr' ? 'शासकीय निविदा मार्गदर्शक' : 'Tender Consultancy & Education'}
              </span>
            </div>
          </a>

          {/* Right-Aligned Streamlined Navigation, CTA & Language Switcher */}
          <div className="hidden lg:flex items-center justify-end flex-1 space-x-5 xl:space-x-7 ml-6">
            <nav className="flex items-center space-x-1.5 xl:space-x-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`text-sm font-semibold text-[#16243B] hover:text-[#93622A] hover:bg-[#93622A]/8 px-3 py-1.5 rounded-full transition-all duration-200 relative group whitespace-nowrap ${
                    language === 'mr' ? 'font-mr text-sm xl:text-base' : 'font-sans'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Subtle animated bottom glow bar */}
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#93622A] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
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
