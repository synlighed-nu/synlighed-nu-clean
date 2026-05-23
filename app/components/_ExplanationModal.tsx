'use client';

import React from 'react';
import Nav from './_Nav';
import Hero from './_Hero';
import WhySection from './_WhySection';
import VotingSection from './_VotingSection';
import BigMoves from './_BigMoves';
import ConcreteAreas from './_ConcreteAreas';
import Footer from './_Footer';
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