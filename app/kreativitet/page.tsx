'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function KreativitetPage() {
  const pageText = `
I 1968 testede forskerne George Land og Beth Jarman 1.600 børn på 4-5 år. 98 procent af dem scorede på genius-niveau i divergent tænkning.

Da de samme børn forlod gymnasiet, var det kun omkring 10 procent. Som voksne var det nede på cirka 2 procent.

Vores uddannelsessystem kvæler systematisk den kreative og anderledes tænkning, som børnene havde som 4-5-årige.

Fokus: Vi har et uddannelsessystem, der belønner standardiserede svar og straffer divergent tænkning. Det er et grundlæggende Axiom-problem – vi kvæler kreativiteten hos de næste generationer.

Et bedre alternativ er at ændre incitamenterne i uddannelsessystemet, så det belønner nysgerrighed, eksperimenteren og anderledes tænkning i stedet for kun at belønne det ene rigtige svar.

Hvorfor er det et problem i dag? Fordi vi systematisk reducerer børns evne til at tænke kreativt og kritisk, straffer vi fejl i stedet for at se dem som læring, og vi risikerer at uddanne en generation, der er god til at følge instrukser, men dårlig til at løse nye problemer.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Kreativitet</h1>
          <SpeakerButton text={pageText} endingAxiomIndex={7} />
        </div>

        {/* FOKUS BOKS */}
        <div className="bg-[#002B5B] text-white rounded-3xl p-8 mb-12">
          <div className="uppercase tracking-[2px] text-sm font-semibold mb-3 text-white/70">
            Fokus
          </div>
          <p className="text-2xl font-semibold leading-tight">
            Vi har et uddannelsessystem, der belønner standardiserede svar<br />
            og straffer divergent tænkning.
          </p>
          <p className="mt-4 text-white/90">
            Det er et grundlæggende Axiom-problem – vi kvæler kreativiteten hos de næste generationer.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            I 1968 testede forskerne George Land og Beth Jarman 1.600 børn på 4-5 år.<br />
            98 procent af dem scorede på genius-niveau i divergent tænkning.
          </p>
          
          <p className="mt-6">
            Da de samme børn forlod gymnasiet, var det kun omkring 10 procent.<br />
            Som voksne var det nede på cirka 2 procent.
          </p>

          <p className="text-xl font-semibold text-[#E30613] mt-10">
            Vores uddannelsessystem kvæler kreativiteten systematisk.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi ændre incitamenterne i uddannelsessystemet, så det belønner 
            nysgerrighed, eksperimenteren og anderledes tænkning – i stedet for kun at belønne det ene rigtige svar.
          </p>
          <p className="mt-4">
            Fejl skal ikke straffes, men ses som en naturlig del af læring. Eleven bør aldrig straffes for at tænke anderledes, 
            når argumenterne er i orden.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Vi reducerer systematisk børns evne til at tænke kreativt og kritisk</li>
            <li>Systemet straffer fejl i stedet for at se dem som læring</li>
            <li>Vi risikerer at uddanne en generation, der er god til at følge instrukser, men dårlig til at løse nye problemer</li>
            <li>Det er i strid med et af vores grundlæggende Axiomer: Vi må ikke kvæle kreativiteten hos de næste generationer</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mt-12">
            <a 
              href="https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" 
              target="_blank"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-[#002B5B] text-white rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">▶</div>
              <div>
                <p className="font-semibold group-hover:text-[#002B5B]">Se Sir Ken Robinsons TED Talk</p>
                <p className="text-sm text-gray-600">"Do schools kill creativity?" (2006)</p>
              </div>
            </a>
          </div>
        </div>

        {/* Genvej til Inspiration */}
        <div className="mt-16 text-center">
          <Link 
            href="/inspiration" 
            className="inline-flex items-center gap-3 text-[#002B5B] hover:text-[#001B3D] font-medium text-lg"
          >
            Se eksempler på skoler og initiativer, der gør det anderledes 
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}