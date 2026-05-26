'use client';

import React from 'react';

import Nav from './components/_Nav';
import Axioms from './components/_Axioms';
import WhySection from './components/_WhySection';
import VotingSection from './components/_VotingSection';
import BigMoves from './components/_BigMoves';
import ConcreteAreas from './components/_ConcreteAreas';
import Footer from './components/_Footer';

export default function SynlighedNu() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav />

      {/* === UNIVERSAL TOP – HOVEDINDLEDNING === */}
      <div className="text-center pt-20 pb-16 px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
          Synlighed først.
        </h1>
        <p className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 text-[#002B5B]">
          Hurtigere. Bedre. Billigere.
        </p>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed">
          Det er det modsatte af, hvordan tingene ofte fungerer i det offentlige i dag – 
          hvor processer bliver langsommere, dyrere og dårligere.
        </p>
      </div>

      <Axioms />
      <WhySection />
      <VotingSection />
      <BigMoves />
      <ConcreteAreas />

      {/* Demokrati 2.0 */}
      <section id="demokrati-2-0" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">VISION</span>
        </div>
        <h2 className="text-4xl font-bold text-center tracking-tighter mb-6">Demokrati 2.0</h2>
        <div className="prose prose-lg max-w-none text-gray-700 text-center">
          <p className="text-2xl font-semibold text-[#002B5B]">Det gamle demokrati er blevet misbrugt, fordi vi ikke har udviklet det.</p>
          <p className="mt-8">Uden løbende forbedring bevæger vi os mod idiokrati eller kontrol. Vi skal opgradere det med fuld synlighed, agil reasoning og klare axiom’er.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}