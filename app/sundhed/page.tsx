'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Nav from '../components/common/_Nav';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function SundhedPage() {
  const pageText = `
Vi bruger ca. 280 milliarder kroner årligt på sundhed.
Stort fokus på medicin og behandling – meget lidt på at forebygge sygdom.

Vi reparerer mennesker, vi kunne have holdt sunde.

Et bedre alternativ: Over de næste 5 år kan vi gradvist flytte ressourcer fra behandling til reel forebyggelse.
  `.trim();

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Sundhed</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={5} 
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Vi bruger ca. <strong>280 milliarder kroner årligt</strong> på sundhed.
          </p>
          <p>
            Stort fokus på medicin og behandling – meget lidt på at forebygge sygdom.
          </p>
          <p className="text-xl font-semibold text-[#E30613]">
            Vi reparerer mennesker, vi kunne have holdt sunde.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>Over de næste 5 år kan vi gradvist flytte ressourcer fra behandling til reel forebyggelse.</p>
        </div>
      </div>
    </div>
  );
}