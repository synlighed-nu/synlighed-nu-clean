'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function UdlaendingepolitikPage() {
  const pageText = `
Hvad koster den samlede udlændingepolitik og ulandshjælp reelt – og hvilke incitamenter skaber den på lang sigt?

Vi bruger milliarder på systemer, der ofte er ineffektive og skaber afhængighed.

Fokus: Når staten og de etablerede systemer skal løse problemer, starter de sjældent med virkeligheden. De starter med deres egen overbevisning. Resultatet er, at en stor del af pengene bliver i Danmark hos konsulenter, NGO’er og administrative lag – mens de mennesker, det handler om, får meget lidt indflydelse på, hvordan pengene bruges.

Et bedre alternativ: Over de næste 5 år kan vi bevæge os væk fra tunge, topstyrede systemer og i stedet satse mere på direkte støtte og lokale løsninger, hvor dem der kender problemet bedst, også har reel indflydelse.

Hvorfor er det et problem i dag? De samlede omkostninger er uigennemsigtige. Mange projekter er ineffektive og skaber afhængighed. Incitamenterne belønner ofte det modsatte af integration og bæredygtighed. Der er for lidt fokus på reel årsagsbehandling.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Udlændingepolitik & ulandshjælp</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={3} 
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Hvad koster den samlede udlændingepolitik og ulandshjælp reelt – og hvilke incitamenter skaber den på lang sigt?
          </p>

          <p className="text-xl font-semibold text-[#E30613] mt-6">
            Vi bruger milliarder på systemer, der ofte er ineffektive og skaber afhængighed.
          </p>

          {/* FOKUS BOKS */}
          <div className="mt-12 bg-[#002B5B] text-white rounded-3xl p-8">
            <div className="uppercase tracking-[2px] text-sm font-semibold mb-3 text-white/70">
              Fokus
            </div>
            <p className="text-2xl font-semibold leading-tight">
              Når staten og de etablerede systemer skal løse problemer, starter de sjældent med virkeligheden. De starter med deres egen overbevisning.
            </p>
            <p className="mt-4 text-white/90">
              Resultatet er, at en stor del af pengene bliver i Danmark hos konsulenter, NGO’er og administrative lag – 
              mens de mennesker, det handler om, får meget lidt indflydelse på, hvordan pengene bruges.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi bevæge os væk fra tunge, topstyrede systemer og i stedet satse mere på 
            direkte støtte og lokale løsninger, hvor dem der kender problemet bedst, også har reel indflydelse.
          </p>

          {/* Rory Stewart eksempel */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 my-10">
            <p className="font-medium mb-4">Et konkret eksempel:</p>
            <p className="mb-4">
              Den tidligere britiske minister for ulandshjælp, Rory Stewart, har fortalt om et toilet-projekt, 
              der kostede 48.000 dollars at gennemføre gennem det officielle system. 
              Lokalbefolkningen selv kunne have bygget ordentlige toiletter for et par hundrede kroner pr. stk.
            </p>
            <a 
              href="https://www.ted.com/talks/rory_stewart_to_end_extreme_poverty_give_cash_not_advice" 
              target="_blank"
              className="inline-flex items-center gap-2 text-[#002B5B] hover:underline font-medium"
            >
              Se Rory Stewarts TED Talk <span className="text-xl">↗</span>
            </a>
          </div>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>De samlede økonomiske omkostninger er uigennemsigtige</li>
            <li>En stor del af pengene bliver i administrative og konsulent-lag</li>
            <li>Incitamentstrukturen belønner ofte det modsatte af integration og bæredygtighed</li>
            <li>Dem der har problemet, har sjældent reel indflydelse på løsningen</li>
          </ul>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a 
              href="https://uibm.dk/" 
              target="_blank"
              className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3"
            >
              Udlændinge- og Integrationsministeriet <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}