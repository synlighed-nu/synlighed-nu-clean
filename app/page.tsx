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

      {/* === UNIVERSAL TOP === */}
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

      {/* === TO KRITISKE BOKSE I BUNDEN === */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        
        {/* Kreativitet boks */}
        <a href="/kreativitet" className="group block">
          <div className="text-center mb-4">
            <span className="inline-block px-5 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">KRITISK OMRÅDE</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#E30613] transition-all h-full">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Kreativitet</h2>
            <p className="text-gray-600">Fra 90 % kreative i børnehaven til kun ca. 10 % i gymnasiet. Systemet kvæler divergent tænkning.</p>
            <div className="mt-6 text-[#E30613] font-medium flex items-center gap-2">
              Læs mere <span className="text-xl">→</span>
            </div>
          </div>
        </a>

        {/* Demokrati 2.0 boks */}
        <a href="/demokrati-2-0" className="group block">
          <div className="text-center mb-4">
            <span className="inline-block px-5 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">KRITISK OMRÅDE</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#E30613] transition-all h-full">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Demokrati 2.0</h2>
            <p className="text-gray-600">Det gamle demokrati er blevet misbrugt, fordi vi ikke har udviklet det. Uden forbedring ender vi i idiokrati.</p>
            <div className="mt-6 text-[#E30613] font-medium flex items-center gap-2">
              Læs mere <span className="text-xl">→</span>
            </div>
          </div>
        </a>
      </div>

      <Footer />
    </div>
  );
}