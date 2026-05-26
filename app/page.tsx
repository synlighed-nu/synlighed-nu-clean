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

      {/* KREATIVITET */}
      <section id="kreativitet" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-white">
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
        </div>
      </section>

      <ConcreteAreas />

      {/* DEMOKRATI 2.0 */}
      <section id="demokrati-2-0" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-white">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">VISION</span>
        </div>
        <h2 className="text-4xl font-bold text-center tracking-tighter mb-6">Demokrati 2.0</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl text-center mb-10">
            Vi ved, hvor det nuværende demokrati ender, hvis vi ikke udvikler det.
          </p>
          <p className="font-semibold">
            Det gamle demokrati er ikke dårligt i sig selv – det er bare blevet misbrugt og ikke opdateret i over 250 år.
          </p>
          <p className="text-2xl font-semibold text-center my-10 text-[#002B5B]">
            Derfor er Demokrati 2.0 ikke en mulighed – det er en nødvendighed.
          </p>
        </div>
      </section>

      {/* Simpel og diskret blå boks i bunden */}
      <div className="bg-[#002B5B] text-white py-10 text-center">
        <div className="max-w-4xl mx-auto px-6 text-sm">
          <p className="font-medium">
            Synlighed.nu © 2026 – Vi gør det offentlige gennemsigtigt
          </p>
          <p className="text-white/80 mt-1">
            Hurtigere. Bedre. Billigere. med agil reasoning og fuld synlighed.
          </p>
          <p className="mt-6">
            <a href="/bliv-frivillig" className="text-white/70 hover:text-white underline text-xs">
              Bliv frivillig →
            </a>
          </p>
          <p className="text-white/60 text-xs mt-8">
            @SynlighedNu
          </p>
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