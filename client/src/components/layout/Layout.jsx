import React from 'react';
import { LanguageProvider } from '../../context/LanguageContext';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col font-sans selection:bg-[#93622A] selection:text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};
