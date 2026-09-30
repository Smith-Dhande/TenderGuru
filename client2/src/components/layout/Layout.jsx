import React from 'react';
import { LanguageProvider } from '../../context/LanguageContext';
import { FloatingLanguageSwitcher } from '../ui/FloatingLanguageSwitcher';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col font-sans selection:bg-[#93622A] selection:text-white relative">
        {/* Floating Language Switcher Hover Button on Top Right */}
        <FloatingLanguageSwitcher />

        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};
