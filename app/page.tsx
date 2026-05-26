'use client';

import React, { useState } from 'react';

import Nav from './components/_Nav';
import Hero from './components/_Hero';
import WhySection from './components/_WhySection';
import VotingSection from './components/_VotingSection';
import BigMoves from './components/_BigMoves';
import ConcreteAreas from './components/_ConcreteAreas';
import Footer from './components/_Footer';
import Axioms from './components/_Axioms';

export default function SynlighedNu() {
  const [modal, setModal] = useState<{ title: string; text: string } | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#002B5B] pt-28">
      <Nav />

      <Hero />
      <Axioms />
      <WhySection />
      <VotingSection />
      <BigMoves />

      <ConcreteAreas />

      {/* Teaser til de to store dedikerede sider */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Kreativitet teaser */}
          <a href="/kreativitet" className="group block bg-gray-50 border border-gray-200 hover:border-[#E30613] rounded-3xl p-8 transition-all">
            <span className="inline-block px-5 py-1.5 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full mb-4">KRITISK OMRÅDE</span>
            <h3 className="text-3xl font-bold tracking-tighter mb-3 group-hover:text-[#E30613]">Kreativitet</h3>
            <p className="text-gray-600">
              Fra 90 % kreative i børnehaven til kun 2 % som voksne. Hvorfor kvæler vores system kreativiteten?
            </p>
          </a>

          {/* Demokrati 2.0 teaser */}
          <a href="/demokrati-2-0" className="group block bg-gray-50 border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <span className="inline-block px-5 py-1.5 bg-[#002B5B] text-white text-sm font-semibold tracking-widest rounded-full mb-4">VISION</span>
            <h3 className="text-3xl font-bold tracking-tighter mb-3 group-hover:text-[#002B5B]">Demokrati 2.0</h3>
            <p className="text-gray-600">
              Det gamle demokrati er blevet misbrugt. Vi er nødt til at opgradere det, før vi ender i idiokrati.
            </p>
          </a>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setModal(null)}>
          <div className="bg-white max-w-md w-full mx-4 rounded-3xl p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-semibold mb-4">{modal.title}</h3>
            <p className="text-gray-600 leading-relaxed">{modal.text}</p>
            <button onClick={() => setModal(null)} className="mt-8 w-full py-4 bg-[#002B5B] text-white rounded-2xl font-medium hover:bg-[#001B3D]">
              Luk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}