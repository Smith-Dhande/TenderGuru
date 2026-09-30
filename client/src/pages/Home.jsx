import React from 'react';
import { Hero } from '../components/sections/Hero';
import { FactSheet } from '../components/sections/FactSheet';
import { Overview } from '../components/sections/Overview';
import { Services } from '../components/sections/Services';
import { Training } from '../components/sections/Training';
import { Framework } from '../components/sections/Framework';
import { Founder } from '../components/sections/Founder';
import { Webinars } from '../components/sections/Webinars';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';

export const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <FactSheet />
      <Overview />
      <Services />
      <Training />
      <Framework />
      <Founder />
      <Webinars />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};
