'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function BlivFrivilligPage() {
  const pageText = `
    Bliv frivillig.

    Du behøver ikke være ekspert. Du skal bare have lyst til at gøre noget ved det.

    Vi leder ikke efter flere talere eller mødedeltagere.
    Vi leder efter mennesker, der er trætte af at se skattekroner blive spildt, 
    og som gerne vil bruge deres tid, viden eller energi på at skabe reel forandring.

    Vi leder efter folk der vil hjælpe med:
    - Research og data
    - Skrivning og formidling
    - Teknisk hjælp

    Ingen forpligtelse. Ingen mødepligt. Kun lyst til at gøre en forskel.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        {/* Titel + højtaler-knap på samme linje */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Bliv frivillig</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={6} 
          />
        </div>
        
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Du behøver ikke være ekspert.<br />
          Du skal bare have lyst til at gøre noget ved det.
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 mb-12 text-center">
          <p>
            Vi leder ikke efter flere talere eller mødedeltagere.<br />
            Vi leder efter mennesker, der er trætte af at se skattekroner blive spildt, 
            og som gerne vil bruge deres tid, viden eller energi på at skabe reel forandring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-[#002B5B] transition-colors">
            <h4 className="font-semibold text-lg mb-3">Research &amp; data</h4>
            <p className="text-gray-600">Grave tal frem, analysere rapporter, finde kilder og dokumentere ineffektivitet.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-[#002B5B] transition-colors">
            <h4 className="font-semibold text-lg mb-3">Skrivning &amp; formidling</h4>
            <p className="text-gray-600">Gøre tekster skarpere, skrive opslag, lave tråde på X eller hjælpe med hjemmesiden.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:border-[#002B5B] transition-colors">
            <h4 className="font-semibold text-lg mb-3">Teknisk hjælp</h4>
            <p className="text-gray-600">Bygge værktøjer, forbedre hjemmesiden, lave visualiseringer eller automatisere data.</p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://x.com/SynlighedNu" 
            target="_blank"
            className="inline-block bg-[#002B5B] hover:bg-[#001B3D] text-white px-10 py-5 rounded-3xl font-semibold text-lg transition"
          >
            Skriv til os på X
          </a>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Ingen forpligtelse. Ingen mødepligt. Kun lyst til at gøre en forskel.
        </p>
      </div>
    </div>
  );
}