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
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav />
      <Hero />
      <WhySection />
      <VotingSection />
      <BigMoves />
      <ConcreteAreas />
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