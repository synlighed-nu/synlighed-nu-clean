'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Nav from '../components/common/_Nav';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function BoligstottePage() {
  const pageText = `
Vi bruger 18 milliarder kroner om året.
Men vi løser ikke problemet.

592.000 husstande modtager støtte.
Det hjælper mange i dag.
Men holder samtidig priserne oppe.

Så vi gør noget mærkeligt:
Vi betaler for høje priser.
Og derefter betaler vi for at kompensere for dem.

Resultatet er et system, der har brug for støtten for at fungere.

Et bedre alternativ:
Over de næste 5 år kan vi gradvist afvikle boligstøtten samtidig med, at vi bygger et stort antal nye, 100 % selvforsynende boliger med sol, vind og batterier.
På den måde sænker vi både de løbende boligomkostninger og boligpriserne gennem øget udbud.
  `.trim();

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Boligstøtte</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={2}   // ← prøver Axiom nr. 3 (tæller fra 0)
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">Vi bruger 18 milliarder kroner om året.</p>
          <p className="text-2xl font-medium">Men vi løser ikke problemet.</p>

          <p className="text-xl mt-8">592.000 husstande modtager støtte.</p>
          <p className="text-xl">Det hjælper mange i dag.</p>
          <p className="text-xl font-semibold text-[#E30613]">Men holder samtidig priserne oppe.</p>

          <p className="text-2xl font-medium mt-10">Så vi gør noget mærkeligt:</p>
          <p className="text-2xl font-medium text-[#E30613]">Vi betaler for høje priser.</p>
          <p className="text-2xl font-medium text-[#E30613]">Og derefter betaler vi for at kompensere for dem.</p>

          <p className="text-xl font-semibold mt-8">Resultatet er et system, der har brug for støtten for at fungere.</p>

          <h3 className="text-2xl font-semibold mt-16 mb-4">Et bedre alternativ</h3>
          <p>Over de næste 5 år kan vi gradvist afvikle boligstøtten samtidig med, at vi bygger et stort antal nye, 100 % selvforsynende boliger med sol, vind og batterier.</p>
          <p>På den måde sænker vi både de løbende boligomkostninger og boligpriserne gennem øget udbud.</p>
        </div>
      </div>
    </div>
  );
}