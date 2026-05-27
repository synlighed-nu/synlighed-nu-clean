'use client';

import React from 'react';
import Nav from '../components/common/_Nav';

export default function EnergiPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-5xl font-bold tracking-tighter mb-2">Energi</h1>
        
        <div className="prose prose-lg text-gray-700">
          <p className="text-2xl leading-relaxed">
            Lokal produktion fjerner unødvendige tab i elnettet og central infrastruktur.
          </p>
          <p>
            I et ideelt samfund med lokal energi ville vi skulle producere ca. <strong>25 % mindre energi</strong> samlet set.
          </p>

          <p className="text-red-600 font-medium mt-8">
            Alligevel prioriteres massive centraliserede projekter og milliarder i subsidier.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-4">Et bedre alternativ</h2>
          <p>
            Over de næste 5 år kan vi gradvist flytte til lokal energiproduktion 
            (sol, vind og batterier) samtidig med at vi afvikler de dyre centrale projekter.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Hvorfor er det et problem i dag?</h2>
          <ul className="space-y-4 text-lg">
            <li>• Store tab i elnettet spilder op til 25 % af energien</li>
            <li>• Centraliserede projekter skaber høje omkostninger og afhængighed</li>
            <li>• Subsidier går forud for den billigste løsning: lokal produktion</li>
          </ul>

          <div className="mt-16 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="text-sm font-medium text-gray-500 mb-2">Officiel kilde:</p>
            <a 
              href="https://ens.dk/" 
              target="_blank"
              className="inline-flex items-center gap-2 text-[#002B5B] hover:underline"
            >
              Energistyrelsen 
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}