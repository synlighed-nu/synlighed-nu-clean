'use client';

import React, { useState } from 'react';

const areas = [
  "Boligstøtte – omkostninger og konsekvenser",
  "Energi – lokal vs. central produktion",
  "Sundhed – behandling vs. forebyggelse",
  "Rent drikkevand – beskyttelse vs. oprensning",
  "Udlændingepolitik – omkostninger og incitamenter",
  "Kreativitet og uddannelse",
  "Offentlig administration – incitamenter og effektivitet"
];

export default function VotingSection() {
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
    <div id="afstemning" className="max-w-5xl mx-auto px-6 py-16 border-t bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-1">AFSTEMNING • RUNDE 1</div>
            <h2 className="text-4xl font-bold tracking-tight">Hvad mener du er vigtigst?</h2>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Lukker om</div>
            <div className="text-3xl font-semibold text-[#002B5B]">58 dage</div>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-3xl">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">1.248 stemmer afgivet i denne runde</span>
          </div>
        </div>

        <p className="text-gray-600 mb-8 text-center md:text-left">
          Vælg dine 3 vigtigste områder. Du kan ikke vælge det samme emne flere gange.
        </p>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-sm">
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
      </div>
    </div>
  );
}