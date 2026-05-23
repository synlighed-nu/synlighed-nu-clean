'use client';

import React, { useState } from 'react';

export default function WhySection() {
  const [modal, setModal] = useState<{ title: string; text: string } | null>(null);

  const showExplanation = (title: string, text: string) => {
    setModal({ title, text });
  };

  return (
    <>
      {/* HVORFOR SYNLIGHED */}
      <div className="max-w-3xl mx-auto px-6 py-16 text-center bg-white">
        <p className="text-lg text-gray-600 leading-relaxed">
          Vi bruger milliarder af skattekroner hver dag – men de fleste kan ikke se, hvor pengene går hen, hvad vi får for dem, eller hvilke konsekvenser der følger med.
        </p>
      </div>

      {/* HVORFOR X + AXIUM */}
      <div className="max-w-3xl mx-auto px-6 pb-12 text-center bg-white">
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Vi bruger primært <strong>X</strong> som platform, fordi det giver den mest direkte og ufiltrerede dialog. 
          Det passer perfekt til projektets formål: fuld synlighed,{' '}
          <span className="inline-flex items-center gap-1">
            agil reasoning
            <span 
              onClick={() => showExplanation("Agil reasoning", "At tænke og handle hurtigt og fornuftigt. I stedet for at bruge måneder på at diskutere noget, tager vi beslutninger hurtigt – men altid med god begrundelse. Som en god håndværker, der løser problemer på stedet i stedet for at vente på en stor rapport.")}
              className="cursor-pointer text-[#E30613] font-bold text-lg leading-none hover:text-red-600"
            >
              ?
            </span>
          </span> og{' '}
          <span className="inline-flex items-center gap-1">
            axium
            <span 
              onClick={() => showExplanation("Axium", "Axium er de få, helt grundlæggende regler vi aldrig går på kompromis med. Eksempel: Rent drikkevand er et axium – det skal altid prioriteres, uanset hvad der ellers sker. Det er fundamentet hele systemet bygger på.")}
              className="cursor-pointer text-[#E30613] font-bold text-lg leading-none hover:text-red-600"
            >
              ?
            </span>
          </span>.
        </p>
      </div>

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]" onClick={() => setModal(null)}>
          <div 
            className="bg-white max-w-md w-full mx-4 rounded-3xl p-8 shadow-xl" 
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-3">{modal.title}</h3>
            <p className="text-gray-600 leading-relaxed">{modal.text}</p>
            <button 
              onClick={() => setModal(null)}
              className="mt-6 w-full py-3 bg-[#002B5B] text-white rounded-2xl font-medium"
            >
              Luk
            </button>
          </div>
        </div>
      )}
    </>
  );
}