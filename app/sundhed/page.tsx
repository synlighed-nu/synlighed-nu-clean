'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function SundhedPage() {
  const pageText = `
Vi bruger cirka 280 milliarder kroner om året på sundhed i Danmark. 
Stort fokus på medicin og behandling – meget lidt på at forebygge sygdom.

Vi reparerer mennesker, vi kunne have holdt sunde.

Fokus: Vi bruger enorme summer på at behandle sygdomme, vi i mange tilfælde kunne have forebygget. Systemet belønner behandling frem for forebyggelse, og medicinindustrien har stor indflydelse på prioriteringerne.

Et bedre alternativ er at flytte ressourcer fra behandling til reel forebyggelse over de næste fem år – blandt andet gennem bedre madvaner i institutioner, tidligere opsporing og stærkere fokus på fysisk og mental sundhed.

Hvorfor er det et problem i dag? Fordi vi primært betaler for at reparere i stedet for at forebygge, systemet belønner sygdom frem for sundhed, forebyggelse giver både bedre livskvalitet og store langsigtede besparelser, og borgerne bliver syge af et system, der ikke prioriterer at holde dem sunde.
  `;

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

        {/* FOKUS BOKS */}
        <div className="bg-[#002B5B] text-white rounded-3xl p-8 mb-12">
          <div className="uppercase tracking-[2px] text-sm font-semibold mb-3 text-white/70">
            Fokus
          </div>
          <p className="text-2xl font-semibold leading-tight">
            Vi bruger enorme summer på at behandle sygdomme,<br />
            vi i mange tilfælde kunne have forebygget.
          </p>
          <p className="mt-4 text-white/90">
            Systemet belønner behandling frem for forebyggelse, og medicinindustrien har stor indflydelse på prioriteringerne.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Vi bruger ca. <strong>280 milliarder kroner årligt</strong> på sundhed.
          </p>
          <p>
            Stort fokus på medicin og behandling – meget lidt på at forebygge sygdom.
          </p>
          <p className="text-xl font-semibold text-[#E30613] mt-6">
            Vi reparerer mennesker, vi kunne have holdt sunde.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi gradvist flytte ressourcer fra behandling til reel forebyggelse. 
            Det handler blandt andet om bedre mad- og måltidsvaner i dagtilbud og skoler, tidligere opsporing hos ældre, 
            og et stærkere fokus på fysisk og mental sundhed i hverdagen.
          </p>
          <p className="mt-4">
            Forebyggelse er både billigere og bedre end behandling – og det er den eneste måde at bryde den negative spiral på.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Penge bruges primært på at reparere frem for at forebygge</li>
            <li>Medicinindustrien har stor indflydelse på prioriteringer</li>
            <li>Forebyggelse giver både bedre sundhed og store langsigtede besparelser</li>
            <li>Systemet belønner sygdom frem for sundhed</li>
          </ul>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a 
              href="https://www.sst.dk/vidensbase/forebyggelse/forebyggelsespakker-og-undersoegninger/forebyggelses-pakker-til-kommunerne" 
              target="_blank"
              className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3"
            >
              Sundhedsstyrelsen – Forebyggelsespakker til kommunerne <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}