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

  // Hjælpefunktion til at filtrere allerede valgte emner
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
    alert("Tak for din stemme! (Dette er demo – i rigtig version gemmes den anonymt)");
  };

  return (
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

        <p className="text-gray-600 mb-8">Vælg dine 3 vigtigste områder. Du kan ikke vælge det samme emne flere gange.</p>

        <div className="bg-white border rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Vigtigst */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">1. Vigtigst</label>
              <select 
                value={selection1}
                onChange={(e) => setSelection1(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
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
                className="w-full border border-gray-300 rounded-2xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
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
                className="w-full border border-gray-300 rounded-2xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]"
              >
                <option value="">Vælg område...</option>
                {getAvailableOptions(selection1, selection2, '').map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full bg-[#002B5B] hover:bg-[#001f3d] text-white py-4 rounded-2xl font-semibold text-lg transition active:scale-[0.985]"
            >
              Afgiv din stemme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}