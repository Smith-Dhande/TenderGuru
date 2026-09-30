import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin, ShieldAlert } from 'lucide-react';

export const Footer = () => {
  const { content } = useLanguage();
  const { footer, nav } = content;

  return (
    <footer className="bg-[#051329] text-[#94A3B8] pt-16 pb-12 border-t border-[#173B66]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logoTenderGuru.png"
                alt="eTender Guru Logo"
                className="h-10 w-auto object-contain bg-white/95 p-1 rounded"
              />
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                eTender Guru
              </span>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md">
              शासकीय निविदा (e-Procurement) व सरकारी ई-मार्केटप्लेस (GeM) संदर्भात अचूक संस्थात्मक मार्गदर्शन व प्रत्यक्ष बिडिंग सहाय्य देणारी अग्रणी संस्था.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#F59E0B]" />
                <a href={`tel:${nav.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{nav.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#F59E0B]" />
                <a href={`mailto:${nav.email}`} className="hover:text-white transition-colors">{nav.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#F59E0B]" />
                <span>{nav.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-white border-b border-[#173B66] pb-2">
              मुख्य विभाग (Navigation)
            </h4>
            <ul className="space-y-2 text-sm">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#F59E0B] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer (4 cols) */}
          <div className="lg:col-span-4 space-y-3 bg-[#0F2A4A] p-6 border border-[#173B66] rounded-xl">
            <div className="flex items-center gap-2 text-[#F59E0B] font-bold text-sm">
              <ShieldAlert size={16} />
              <span>संस्थात्मक पारदर्शकता (Disclaimer)</span>
            </div>
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              {footer.disclaimer}
            </p>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#173B66] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">प्रायव्हसी पॉलिसी</a>
            <a href="#about" className="hover:text-white transition-colors">अटी व शर्ती</a>
            <a href="#contact" className="hover:text-white transition-colors">सल्लागार केंद्र</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
