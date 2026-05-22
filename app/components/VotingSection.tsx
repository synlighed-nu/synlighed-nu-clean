'use client';

import React from 'react';

export default function VotingSection() {
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