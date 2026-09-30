import React from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/hero/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { FeaturedCourses } from './components/sections/FeaturedCourses';
import { WhatWeDo } from './components/sections/WhatWeDo';
import { LearningFramework } from './components/sections/LearningFramework';
import { WebinarSection } from './components/sections/WebinarSection';
import { VideoShowcase } from './components/sections/VideoShowcase';
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
      <FeaturedCourses />
      <WhatWeDo />
      <LearningFramework />
      <WebinarSection />
      <VideoShowcase />
      <FounderSection />
      <Testimonials />
      <ResourcesSection />
      <FaqSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
