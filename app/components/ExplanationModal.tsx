'use client';

import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import VotingSection from './components/VotingSection';
import BigMoves from './components/BigMoves';
import ConcreteAreas from './components/ConcreteAreas';
import Footer from './components/Footer';

export default function SynlighedNu() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav />
      <Hero />
      <WhySection />
      <VotingSection />
      <BigMoves />
      <ConcreteAreas />
      <Footer />
    </div>
  );
}