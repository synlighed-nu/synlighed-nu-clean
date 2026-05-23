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
            <ConcreteAreas />
      {/* Støt projektet – stor CTA i bunden (bedre på mobil) */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 bg-white">
        <div className="bg-[#002B5B] text-white rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-semibold mb-3">Vil du hjælpe med at gøre Danmark mere gennemsigtigt?</h3>
          <p className="text-[#E30613] text-xl mb-8">Støt projektet med det beløb du synes er rigtigt</p>
          <a 
            href="https://opencollective.com/synlighed-nu" 
            target="_blank"
            className="inline-block bg-white text-[#002B5B] hover:bg-[#E30613] hover:text-white px-10 py-5 rounded-2xl text-2xl font-semibold transition-colors"
          >
            Støt projektet nu →
          </a>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {modal && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setModal(null)}
        >
          <div 
            className="bg-white max-w-md w-full mx-4 rounded-3xl p-8 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
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