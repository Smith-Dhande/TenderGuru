import React from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/hero/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { WhatWeDo } from './components/sections/WhatWeDo';
import { CoreDomains } from './components/sections/CoreDomains';
import { LearningFramework } from './components/sections/LearningFramework';
import { WebinarSection } from './components/sections/WebinarSection';
import { WhyUs } from './components/sections/WhyUs';
import { FounderSection } from './components/sections/FounderSection';
import { Testimonials } from './components/sections/Testimonials';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <WhatWeDo />
      <CoreDomains />
      <LearningFramework />
      <WebinarSection />
      <WhyUs />
      <FounderSection />
      <Testimonials />
      <ResourcesSection />
      <FaqSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
