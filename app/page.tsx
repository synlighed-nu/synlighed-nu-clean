'use client';

import React, { useState } from 'react';

export default function SynlighedNu() {
  const [modal, setModal] = useState<{ title: string; text: string } | null>(null);

  const showExplanation = (title: string, text: string) => {
    setModal({ title, text });
  };

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-semibold text-2xl tracking-tighter">Synlighed.nu</div>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#afstemning" className="hover:text-[#002B5B]/80 transition">Afstemning</a>
            <a href="#de-store-greb" className="hover:text-[#002B5B]/80 transition">De store greb</a>
            <a href="https://x.com/SynlighedNu" target="_blank" className="hover:text-[#002B5B]/80 transition">X</a>
            <a href="https://opencollective.com/synlighed-nu" target="_blank" className="bg-[#002B5B] hover:bg-[#001f3d] text-white px-5 py-2 rounded-xl text-sm font-semibold transition">
              Støt projektet
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="pt-24 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">Synlighed først.</h1>
          <p className="text-2xl text-gray-600 mb-10">Hurtigere. Bedre. Billigere.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#afstemning" className="bg-[#002B5B] hover:bg-[#001f3d] text-white px-9 py-4 rounded-2xl font-semibold text-lg transition">Stem på det vigtigste</a>
            <a href="#de-store-greb" className="border border-[#002B5B] hover:bg-gray-50 px-9 py-4 rounded-2xl font-semibold text-lg transition">Se de store greb</a>
          </div>
        </div>
      </div>

      {/* HVORFOR SYNLIGHED */}
      <div className="max-w-3xl mx-auto px-6 py-16 text-center bg-white">
        <p className="text-lg text-gray-600 leading-relaxed">
          Vi bruger milliarder af skattekroner hver dag – men de fleste kan ikke se, hvor pengene går hen, hvad vi får for dem, eller hvilke konsekvenser der følger med.
        </p>
      </div>

      {/* HVORFOR X */}
      <div className="max-w-3xl mx-auto px-6 pb-12 text-center bg-white">
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Vi bruger primært <strong>X</strong> som platform, fordi det giver den mest direkte, offentlige og ufiltrerede dialog. 
          Det passer bedst til projektets formål: fuld synlighed og{' '}
          <span onClick={() => showExplanation("Agil reasoning", "At tænke og handle hurtigt og fornuftigt. I stedet for at bruge måneder på at diskutere noget, tager vi beslutninger hurtigt – men altid med god begrundelse. Som en god håndværker, der løser problemer på stedet i stedet for at vente på en stor rapport.")} className="cursor-pointer text-[#002B5B] underline decoration-dotted hover:text-[#001f3d]">
            agil reasoning
          </span>.
        </p>
      </div>

      {/* AFSTEMNING */}
      <div id="afstemning" className="max-w-5xl mx-auto px-6 py-16 border-t bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-[#E30613] font-semibold tracking-[2px] text-sm mb-1">AFSTEMNING • RUNDE 1</div>
              <h2 className="text-4xl font-bold tracking-tight">Hvad mener du er vigtigst?</h2>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Lukker om</div>
              <div className="text-2xl font-semibold text-[#002B5B]">58 dage</div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">1.248 stemmer afgivet i denne runde</span>
            </div>
          </div>

          <p className="text-gray-600 mb-8">Vælg dine 3 vigtigste områder. Din stemme er anonym.</p>

          <div className="bg-white border rounded-3xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">1. Vigtigst</label>
                <select className="w-full border border-gray-300 rounded-2xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]">
                  <option value="">Vælg område...</option>
                  <option>Boligstøtte – omkostninger og konsekvenser</option>
                  <option>Energi – lokal vs. central produktion</option>
                  <option>Sundhed – behandling vs. forebyggelse</option>
                  <option>Rent drikkevand – beskyttelse vs. oprensning</option>
                  <option>Udlændingepolitik – omkostninger og incitamenter</option>
                  <option>Kreativitet og uddannelse</option>
                  <option>Offentlig administration – incitamenter og effektivitet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">2. Næst-vigtigst</label>
                <select className="w-full border border-gray-300 rounded-2xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]">
                  <option value="">Vælg område...</option>
                  <option>Boligstøtte – omkostninger og konsekvenser</option>
                  <option>Energi – lokal vs. central produktion</option>
                  <option>Sundhed – behandling vs. forebyggelse</option>
                  <option>Rent drikkevand – beskyttelse vs. oprensning</option>
                  <option>Udlændingepolitik – omkostninger og incitamenter</option>
                  <option>Kreativitet og uddannelse</option>
                  <option>Offentlig administration – incitamenter og effektivitet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">3. Tredje-vigtigst</label>
                <select className="w-full border border-gray-300 rounded-2xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]">
                  <option value="">Vælg område...</option>
                  <option>Boligstøtte – omkostninger og konsekvenser</option>
                  <option>Energi – lokal vs. central produktion</option>
                  <option>Sundhed – behandling vs. forebyggelse</option>
                  <option>Rent drikkevand – beskyttelse vs. oprensning</option>
                  <option>Udlændingepolitik – omkostninger og incitamenter</option>
                  <option>Kreativitet og uddannelse</option>
                  <option>Offentlig administration – incitamenter og effektivitet</option>
                </select>
              </div>

              <button type="submit" className="mt-4 w-full bg-[#002B5B] hover:bg-[#001f3d] text-white py-4 rounded-2xl font-semibold text-lg transition active:scale-[0.985]">
                Afgiv din stemme
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* VORES PRIORITERING */}
      <div className="max-w-3xl mx-auto px-6 py-12 border-t text-center bg-white">
        <h3 className="text-xl font-semibold mb-3">Vores nuværende prioritering</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Selvom afstemningen er vigtig, prioriterer vi også ud fra hvor vi kan skabe størst systemisk effekt hurtigst. 
          Vi viser både folkets stemme og vores begrundelse – altid med åben{' '}
          <span onClick={() => showExplanation("Agil reasoning", "At tænke og handle hurtigt og fornuftigt. I stedet for at bruge måneder på at diskutere noget, tager vi beslutninger hurtigt – men altid med god begrundelse.")} className="cursor-pointer text-[#002B5B] underline decoration-dotted">agil reasoning</span>.
        </p>
      </div>

      {/* DE STORE GREB, KONKRETE OMRÅDER, FEEDBACK, BLIV EN DEL AF DET og FOOTER er de samme som tidligere */}

      {/* FOOTER MED VERSION */}
      <footer className="border-t py-8 text-center text-xs text-gray-500 bg-white">
        Synlighed.nu — Hurtigere. Bedre. Billigere.<br />
        Initiativ til agil reasoning og fuld offentlig synlighed i Danmark.
        <div className="mt-4 text-[10px] text-gray-400">
          Version: 22. maj 2025 – v2.1 (med ?-forklaringer)
        </div>
      </footer>

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
    </div>
  );
}