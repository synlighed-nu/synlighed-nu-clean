'use client';

import React from 'react';

import Nav from './components/common/_Nav';
import Axioms from './components/sections/_Axioms';
import WhySection from './components/sections/_WhySection';
import VotingSection from './components/sections/_VotingSection';
import BigMoves from './components/sections/_BigMoves';
import ConcreteAreas from './components/sections/_ConcreteAreas';
import Footer from './components/common/_Footer';

export default function SynlighedNu() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav />

      {/* HERO */}
      <div className="text-center pt-24 pb-16 px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
          Synlighed først.
        </h1>
        <p className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 text-[#002B5B]">
          Hurtigere. Bedre. Billigere.
        </p>
      </div>

      <Axioms />
      <WhySection />
      <VotingSection />
      <BigMoves />

      {/* ØKONOMI som klikbart badge */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <a 
          href="/økonomi"
          className="block group"
        >
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#002B5B]/40 transition-all flex items-center justify-between">
            <div>
              <div className="inline-block px-5 py-1.5 bg-[#002B5B] text-white text-sm font-semibold tracking-widest rounded-full mb-4">
                ØKONOMI
              </div>
              <h2 className="text-3xl font-bold tracking-tighter group-hover:text-[#001B3D]">
                Andre folks penge på andre folk
              </h2>
              <p className="text-gray-600 mt-3 max-w-md">
                Hvorfor bliver offentlige projekter ofte meget dyrere end nødvendigt?
              </p>
            </div>
            <span className="text-4xl text-gray-300 group-hover:text-[#002B5B] transition-colors">→</span>
          </div>
        </a>
      </div>

      <section id="de-konkrete-omrader" className="max-w-5xl mx-auto px-6 py-16">
        <ConcreteAreas />
      </section>

      {/* Kritisk område bokse */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <a href="/kreativitet" className="group block border-2 border-gray-200 hover:border-[#E30613] rounded-3xl p-8 transition-all">
          <div className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full mb-4">
            KRITISK OMRÅDE
          </div>
          <h3 className="text-3xl font-bold mb-3">Kreativitet</h3>
          <p className="text-gray-600">Fra 90 % kreative i børnehaven til kun 10 % i gymnasiet. Systemet kvæler divergent tænkning.</p>
        </a>

        <a href="/demokrati-2-0" className="group block border-2 border-gray-200 hover:border-[#E30613] rounded-3xl p-8 transition-all">
          <div className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full mb-4">
            KRITISK OMRÅDE
          </div>
          <h3 className="text-3xl font-bold mb-3">Demokrati 2.0</h3>
          <p className="text-gray-600">Det gamle demokrati er blevet misbrugt fordi vi ikke har udviklet det. Vi risikerer at ende i idiokrati.</p>
        </a>
      </div>

      <Footer />
    </div>
  );
}