'use client';

import React, { useState } from 'react';
import Nav from '../components/common/_Nav';

const areas = [
  "Boligstøtte – omkostninger og konsekvenser",
  "Energi – lokal vs. central produktion",
  "Sundhed – behandling vs. forebyggelse",
  "Rent drikkevand – beskyttelse vs. oprensning",
  "Udlændingepolitik – omkostninger og incitamenter",
  "Kreativitet og uddannelse",
  "Offentlig administration – incitamenter og effektivitet"
];

export default function AfstemningPage() {
  const [selection1, setSelection1] = useState('');
  const [selection2, setSelection2] = useState('');
  const [selection3, setSelection3] = useState('');

  const getAvailableOptions = (exclude1: string, exclude2: string, exclude3: string) => {
    return areas.filter(area => 
      area !== exclude1 && area !== exclude2 && area !== exclude3
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selection1 || !selection2 || !selection3) {
      alert("Du skal vælge 3 forskellige områder");
      return;
    }
    console.log("Stemmer afgivet:", { selection1, selection2, selection3 });
    alert("Tak for din stemme! (Demo – i den rigtige version gemmes den anonymt)");
  };

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">AFSTEMNING • RUNDE 1</div>
          <h1 className="text-5xl font-bold tracking-tighter">Hvad mener du er vigtigst?</h1>
          <p className="mt-4 text-xl text-gray-600">
            Vælg de 3 områder, du mener er vigtigst at tage fat på først. 
            Dine stemmer er med til at vise, hvor der er størst behov for forandring.
          </p>
        </div>

        <div className="mt-10 bg-white border border-gray-200 rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              {/* 1. Vigtigst */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">1. Vigtigst</label>
                <select 
                  value={selection1}
                  onChange={(e) => setSelection1(e.target.value)}
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg focus:outline-none focus:border-[#002B5B]"
                >
                  <option value="">Vælg område...</option>
                  {getAvailableOptions(selection2, selection3, '').map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* 2. Næst-vigtigst */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">2. Næst-vigtigst</label>
                <select 
                  value={selection2}
                  onChange={(e) => setSelection2(e.target.value)}
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg focus:outline-none focus:border-[#002B5B]"
                >
                  <option value="">Vælg område...</option>
                  {getAvailableOptions(selection1, selection3, '').map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              {/* 3. Tredje-vigtigst */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">3. Tredje-vigtigst</label>
                <select 
                  value={selection3}
                  onChange={(e) => setSelection3(e.target.value)}
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg focus:outline-none focus:border-[#002B5B]"
                >
                  <option value="">Vælg område...</option>
                  {getAvailableOptions(selection1, selection2, '').map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#002B5B] hover:bg-[#001f3d] text-white py-5 rounded-3xl font-semibold text-xl transition active:scale-95"
            >
              Afgiv din stemme
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Denne afstemning er anonym. Resultaterne vil blive offentliggjort løbende.
        </p>
      </div>
    </div>
  );
}