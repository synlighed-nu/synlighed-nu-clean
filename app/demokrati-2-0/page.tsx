'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function Demokrati20Page() {
  const pageText = `
    Det gamle demokrati er blevet misbrugt, fordi vi ikke har udviklet det.
    Vi er nødt til at opgradere det med synlighed, agil reasoning og klare grundprincipper.
    Ellers ender vi i idiokrati.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        {/* Titel + højtaler-knap på samme linje */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-5xl font-bold tracking-tighter">Demokrati 2.0</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={3}     // "Systemet er ikke bygget til at lære – det er bygget til at fortsætte."
          />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl leading-relaxed">
            Det gamle demokrati er ikke dårligt i sig selv – det er bare blevet misbrugt og ikke opdateret i over 250 år.
          </p>
          <p className="mt-8">
            Uden løbende forbedring bevæger vi os langsomt mod en blanding af idiokrati og kontrol.
          </p>

          <p className="text-2xl font-semibold text-[#002B5B] mt-12">
            Derfor er Demokrati 2.0 ikke en mulighed – det er en nødvendighed.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white border border-gray-200 rounded-3xl p-6">
              <h4 className="font-semibold mb-2">Fuld synlighed</h4>
              <p className="text-gray-600">Så alle kan se, hvor skattekronerne går hen og hvilke konsekvenser beslutningerne har.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6">
              <h4 className="font-semibold mb-2">Agil reasoning</h4>
              <p className="text-gray-600">Evnen til at handle hurtigt og fornuftigt, når virkeligheden er kendt.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6">
              <h4 className="font-semibold mb-2">Axiom</h4>
              <p className="text-gray-600">Nogle få grundlæggende regler der aldrig må forhandles væk.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}