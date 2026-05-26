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

  const showExplanation = (title: string, text: string) => {
    setModal({ title, text });
  };

  return (
    <div className="min-h-screen bg-white text-[#002B5B] pt-28">
      <Nav />

      <Hero />
      <Axioms />
      <WhySection />
      <VotingSection />
      <BigMoves />

      {/* === KREATIVITET – KRITISK OMRÅDE === */}
      <section id="kreativitet" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-white print:break-before-page">
        <div className="text-center mb-8">
          <span className="inline-block px-5 py-1.5 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">KRITISK OMRÅDE</span>
        </div>
        <h2 className="text-4xl font-bold text-center tracking-tighter mb-8">Kreativitet</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium text-center mb-10">
            Fra ca. 98 % kreative i børnehaven<br />
            til kun ca. 10 % i gymnasiet<br />
            og helt ned til 2 % som voksne.
          </p>
          <p className="text-center mb-12">
            Vores uddannelsessystem kvæler systematisk divergent tænkning og kreativitet.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 text-center mb-10">
            <a 
              href="https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" 
              target="_blank"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-300 rounded-2xl px-8 py-6 text-left transition group"
            >
              <div className="w-12 h-12 bg-[#002B5B] text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-active:scale-95 transition">
                ▶
              </div>
              <div>
                <div className="font-semibold">Se Sir Ken Robinsons TED Talk</div>
                <div className="text-sm text-gray-600">"Do schools kill creativity?" (2006)</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ConcreteAreas />

      {/* === DEMOKRATI 2.0 === */}
      <section id="demokrati-2-0" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-white print:break-before-page">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">VISION</span>
        </div>
        <h2 className="text-4xl font-bold text-center tracking-tighter mb-6">Demokrati 2.0</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl text-center mb-10">
            Vi ved, hvor det nuværende demokrati ender, hvis vi ikke udvikler det.
          </p>
          <p>
            I filmen <strong>Idiokrati</strong> bliver samfundet dumt. 
            I <strong>1984</strong> bliver det kontrolleret og livløst.
          </p>
          <p className="font-semibold">
            Det gamle demokrati er ikke dårligt i sig selv – det er bare blevet misbrugt og ikke opdateret i over 250 år.
          </p>
          <p className="text-2xl font-semibold text-center my-10 text-[#002B5B]">
            Derfor er Demokrati 2.0 ikke en mulighed – det er en nødvendighed.
          </p>
        </div>
      </section>

      {/* Blå genvejsboks – Bliv frivillig */}
      <div className="max-w-4xl mx-auto px-6 py-16 mt-16 bg-[#002B5B] rounded-3xl text-white text-center">
        <h2 className="text-4xl font-bold tracking-tighter mb-4">
          Vi gør det offentlige gennemsigtigt
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto">
          Sammen kan vi skabe synlighed, bedre prioritering og reel forandring.
        </p>
        
        <a 
          href="/bliv-frivillig" 
          className="inline-flex items-center gap-3 bg-white text-[#002B5B] hover:bg-white/90 px-10 py-5 rounded-3xl font-semibold text-lg transition"
        >
          Bliv frivillig nu 
          <span className="text-2xl leading-none">→</span>
        </a>

        <p className="text-white/70 text-sm mt-8">
          Ingen forpligtelse • Kun lyst til at gøre en forskel
        </p>
      </div>

      <Footer />

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setModal(null)}>
          <div className="bg-white max-w-md w-full mx-4 rounded-3xl p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-semibold mb-4">{modal.title}</h3>
            <p className="text-gray-600 leading-relaxed">{modal.text}</p>
            <button 
              onClick={() => setModal(null)} 
              className="mt-8 w-full py-4 bg-[#002B5B] text-white rounded-2xl font-medium hover:bg-[#001B3D]"
            >
              Luk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}