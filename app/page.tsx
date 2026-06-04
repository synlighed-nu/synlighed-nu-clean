'use client';

import React from 'react';

import Nav from './components/common/_Nav';
import Axioms from './components/sections/_Axioms';
import WhySection from './components/sections/_WhySection';
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
      <BigMoves />

      {/* ØKONOMI */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
        <a href="/økonomi" className="block group">
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

      {/* GRØN OMSTILLING */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <a href="/grøn-omstilling" className="block group">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#002B5B]/40 transition-all flex items-center justify-between">
            <div>
              <div className="inline-block px-5 py-1.5 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full mb-4">
                GRØN OMSTILLING
              </div>
              <h2 className="text-3xl font-bold tracking-tighter group-hover:text-[#001B3D]">
                Den grønne omstilling handler ikke kun om mål
              </h2>
              <p className="text-gray-600 mt-3 max-w-md">
                Den handler om, hvordan vi når dem – og om vi skaber bedre eller dårligere løsninger.
              </p>
            </div>
            <span className="text-4xl text-gray-300 group-hover:text-[#002B5B] transition-colors">→</span>
          </div>
        </a>
      </div>

      <section id="de-konkrete-omrader" className="max-w-5xl mx-auto px-6 py-16">
        <ConcreteAreas />
      </section>

      {/* KRITISKE OMRÅDER */}
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
          <p className="text-gray-600">Det gamle demokrati er ikke blevet opdateret i over 250 år. Det er på tide at tage det næste skridt.</p>
        </a>
      </div>

      {/* AFSTEMNING – teaser */}
      <div className="max-w-4xl mx-auto px-6 pb-8">
        <a href="/afstemning" className="block group">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#002B5B]/40 transition-all flex items-center justify-between">
            <div>
              <div className="inline-block px-5 py-1.5 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full mb-4">
                AFSTEMNING
              </div>
              <h2 className="text-3xl font-bold tracking-tighter group-hover:text-[#001B3D]">
                Hvad mener du er vigtigst?
              </h2>
              <p className="text-gray-600 mt-3 max-w-md">
                Vælg de 3 områder, du mener bør prioriteres først. Din stemme tæller.
              </p>
            </div>
            <span className="text-4xl text-gray-300 group-hover:text-[#002B5B] transition-colors">→</span>
          </div>
        </a>
      </div>

      {/* VORES GRUNDLAG – teaser */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <a 
          href="/vores-grundlag" 
          className="block group"
        >
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#002B5B]/40 transition-all flex items-center justify-between">
            <div>
              <div className="inline-block px-5 py-1.5 bg-[#002B5B] text-white text-sm font-semibold tracking-widest rounded-full mb-4">
                VORES GRUNDLAG
              </div>
              <h2 className="text-3xl font-bold tracking-tighter group-hover:text-[#001B3D]">
                Demokrati 2.0 er ikke en endestation
              </h2>
              <p className="text-gray-600 mt-3 max-w-md">
                Det er det næste naturlige skridt i udviklingen af demokratiet.<br />
                Synlighed først. Agil reasoning. Klare axiom.
              </p>
            </div>
            <span className="text-4xl text-gray-300 group-hover:text-[#002B5B] transition-colors">→</span>
          </div>
        </a>
      </div>

      <Footer />
    </div>
  );
}