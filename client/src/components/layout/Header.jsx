import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, Menu, X, Globe, ArrowRight } from 'lucide-react';

export const Header = () => {
  const { lang, toggleLanguage, content } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav } = content;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#091E36]/95 backdrop-blur-md border-b border-[#173B66] shadow-xl py-2.5' 
        : 'bg-[#091E36] border-b border-[#0F2A4A] py-3.5'
    }`}>
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-2 mb-2 border-b border-[#173B66]/60 hidden md:flex items-center justify-between text-xs text-[#94A3B8]">
        <div className="flex items-center gap-6">
          <a href={`tel:${nav.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors">
            <Phone size={13} className="text-[#F59E0B]" />
            <span className="font-medium">{nav.phone}</span>
          </a>
          <a href={`mailto:${nav.email}`} className="flex items-center gap-2 hover:text-[#F59E0B] transition-colors">
            <Mail size={13} className="text-[#F59E0B]" />
            <span className="font-medium">{nav.email}</span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[#64748B]">{nav.address}</span>
          <button
            onClick={() => toggleLanguage(lang === 'mr' ? 'en' : 'mr')}
            className="flex items-center gap-1.5 bg-[#173B66] hover:bg-[#2563EB] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
          >
            <Globe size={13} className="text-[#F59E0B]" />
            <span>{nav.langSwitch}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <img
            src="/logoTenderGuru.png"
            alt="eTender Guru Logo"
            className="h-11 sm:h-12 w-auto object-contain bg-white/95 p-1 rounded transition-transform duration-300 group-hover:scale-105"
          />
          <div className="border-l border-[#173B66] pl-3 py-0.5">
            <span className="block font-display text-lg sm:text-xl font-bold text-white tracking-tight">
              eTender Guru
            </span>
            <span className="block text-[10px] text-[#F59E0B] font-semibold tracking-widest uppercase">
              {lang === 'mr' ? 'शासकीय निविदा सल्लागार' : 'Procurement Advisory'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-semibold text-[#CBD5E1] hover:text-white hover:text-[#F59E0B] py-1 transition-colors relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F59E0B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => toggleLanguage(lang === 'mr' ? 'en' : 'mr')}
            className="flex items-center gap-1.5 bg-[#173B66] hover:bg-[#2563EB] text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
          >
            <Globe size={13} className="text-[#F59E0B]" />
            <span>{nav.langSwitch}</span>
          </button>
          
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white text-sm font-bold px-5 py-2.5 rounded-md transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>{nav.cta}</span>
            <ArrowRight size={15} className="text-[#F59E0B]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => toggleLanguage(lang === 'mr' ? 'en' : 'mr')}
            className="flex items-center gap-1 bg-[#173B66] text-white px-2.5 py-1 rounded-full text-xs font-bold uppercase"
          >
            <Globe size={12} className="text-[#F59E0B]" />
            <span>{nav.langSwitch}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:bg-[#173B66] rounded transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#091E36] border-b border-[#173B66] px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#E2E8F0] py-2 border-b border-[#0F2A4A] hover:text-[#F59E0B] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white font-bold py-3 rounded-md text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{nav.cta}</span>
              <ArrowRight size={16} className="text-[#F59E0B]" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
