'use client';

import Nav from '../components/common/_Nav';
import SpeakerButton from '../components/common/_SpeakerButton';

export default function SundhedPage() {
  const pageText = `
    Vi bruger ca. 280 milliarder kroner årligt på sundhed.
    Stort fokus på medicin og behandling – meget lidt på at forebygge sygdom.
    Vi reparerer mennesker, vi kunne have holdt sunde.

    Et bedre alternativ:
    Over de næste 5 år kan vi gradvist flytte ressourcer fra behandling til reel forebyggelse:
    bedre mad- og måltidsvaner i dagtilbud, skoler og på arbejdspladser,
    tidlig opsporing hos ældre og stærkere fokus på fysisk og mental sundhed.

    Forebyggelse er både billigere og bedre end behandling – og det er den eneste måde at bryde den negative spiral på.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        {/* Titel + højtaler-knap på samme linje */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-5xl font-bold tracking-tighter">Sundhed</h1>
          <SpeakerButton text={pageText} />
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

          <h3 className="text-2xl font-semibold mt-12 mb-6">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi gradvist flytte ressourcer fra behandling til reel forebyggelse: 
            bedre mad- og måltidsvaner i dagtilbud, skoler og på arbejdspladser, tidlig opsporing hos ældre og stærkere fokus på fysisk og mental sundhed.
          </p>

          <p>
            Forebyggelse er både billigere og bedre end behandling – og det er den eneste måde at bryde den negative spiral på.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Penge bruges primært på at reparere frem for at forebygge</li>
            <li>Medicinindustrien har stor indflydelse på prioriteringer</li>
            <li>Forebyggelse giver både bedre sundhed og store langsigtede besparelser</li>
            <li>Systemet belønner behandling frem for sundhed</li>
          </ul>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a 
              href="https://www.sst.dk/vidensbase/forebyggelse/forebyggelsespakker-og-undersoegelser/forebyggelses-pakker-til-kommunerne" 
              target="_blank"
              className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3"
            >
              Sundhedsstyrelsen – Forebyggelsespakker <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}