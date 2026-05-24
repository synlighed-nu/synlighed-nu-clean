'use client';

import React, { useState } from 'react';

import Nav from './components/_Nav';
import Hero from './components/_Hero';
import WhySection from './components/_WhySection';
import VotingSection from './components/_VotingSection';
import BigMoves from './components/_BigMoves';
import ConcreteAreas from './components/_ConcreteAreas';
import Footer from './components/_Footer';

export default function SynlighedNu() {
  const [modal, setModal] = useState<{ title: string; text: string } | null>(null);

  const showExplanation = (title: string, text: string) => {
    setModal({ title, text });
  };

  return (
    <div className="min-h-screen bg-white text-[#002B5B] pt-20">
      <Nav />
      <Hero />

      <WhySection />
      <VotingSection />
      <BigMoves />

      {/* KREATIVITET */}
      <section id="kreativitet" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200 bg-white print:break-before-page">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">KRITISK OMRÅDE</span>
        </div>
        <h2 className="text-4xl font-bold text-center tracking-tighter mb-6 text-[#002B5B]">Kreativitet</h2>
        {/* resten af kreativitet-sektionen som før */}
        <div className="prose prose-lg max-w-none text-gray-700 text-center">
          <p className="text-2xl font-semibold mb-8">
            Fra ca. 98 % kreative i børnehaven<br />
            til kun ca. 10 % i gymnasiet<br />
            og helt ned til 2 % som voksne.
          </p>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Vores uddannelsessystem kvæler systematisk divergent tænkning og kreativitet. 
            Det er ikke kun et uddannelsesproblem – det er et samfundsproblem.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 bg-white border border-gray-300 hover:border-[#E30613] px-8 py-5 rounded-3xl transition-all group">
            <span className="text-[#E30613] text-3xl">▶</span>
            <a href="https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" target="_blank" className="font-semibold text-[#002B5B] group-hover:text-[#E30613]">
              Se Sir Ken Robinsons TED Talk<br />
              <span className="text-sm font-normal text-gray-500">"Do schools kill creativity?" (2006)</span>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-12">
            Kilde: George Land &amp; Beth Jarman (1968–1992), longitudinal studie med 1.600 børn.
          </p>
        </div>
      </section>

      <ConcreteAreas showExplanation={showExplanation} />

      {/* DEMOKRATI 2.0 */}
      <section id="demokrati-2-0" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 print:break-before-page">
        {/* hele demokrati 2.0 indhold som før */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">VISION</span>
        </div>
        <h2 className="text-4xl font-bold text-center tracking-tighter mb-6">Demokrati 2.0</h2>
        {/* ... resten af teksten ... */}
      </section>

      {/* Støt projektet */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 bg-white print:break-before-page">
        <div className="bg-[#002B5B] text-white rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-semibold mb-3">Vil du hjælpe med at gøre Danmark mere gennemsigtigt?</h3>
          <p className="text-[#E30613] text-xl mb-8">Støt projektet med det beløb du synes er rigtigt</p>
          <a href="https://opencollective.com/synlighed-nu" target="_blank" className="inline-block bg-white text-[#002B5B] hover:bg-[#E30613] hover:text-white px-10 py-5 rounded-2xl text-2xl font-semibold transition-colors">
            Støt projektet nu →
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