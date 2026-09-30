import React from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/hero/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { WhatIsTenderGuru } from './components/sections/WhatIsTenderGuru';
import { FeaturedCourses } from './components/sections/FeaturedCourses';
import { LearningFramework } from './components/sections/LearningFramework';
import { WebinarSection } from './components/sections/WebinarSection';
import { VideoShowcase } from './components/sections/VideoShowcase';
import { FounderSection } from './components/sections/FounderSection';
import { InstitutionalQuoteBanner } from './components/sections/InstitutionalQuoteBanner';
import { Testimonials } from './components/sections/Testimonials';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <Layout>
      <div className="relative w-full bg-[#FAF8F5] text-[#1E293B] overflow-x-hidden">
        {/* Continuous Landing Page Story Canvas */}
        <Hero />
        <WhatIsTenderGuru />
        <ResourcesSection />
        <FeaturedCourses />
        <LearningFramework />
        <WebinarSection />
        <VideoShowcase />
        <FounderSection />
        <InstitutionalQuoteBanner />
        <Testimonials />
        <TrustBar />
        <FaqSection />
        <ContactSection />
      </div>
    </Layout>
  );
}

export default App;



