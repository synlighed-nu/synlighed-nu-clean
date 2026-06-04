'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function RentDrikkevandPage() {
  const pageText = `
Pesticidrester findes i over halvdelen af alle boringer i Danmark. 
Vi bruger milliarder af kroner på at rense grundvandet og lave nye boringer, i stedet for at beskytte det mod sprøjtning.

Vi forurener vores egen drikkevands-kilde – og betaler dyrt for at rense den bagefter.

Fokus: Vi vælger at forurene vores drikkevand med pesticider og betaler derefter milliarder for at rense det op. I stedet for at beskytte grundvandet, vælger vi at forurene det og så betale for oprensning bagefter. Det er et grundlæggende Axiom-brud.

Et bedre alternativ er at indføre en langt stærkere beskyttelse af grundvandet og reducere brugen af pesticider markant over de næste fem år.

Hvorfor er det et problem i dag? Fordi vi systematisk ødelægger vores egen drikkevandsforsyning, vi renser i stedet for at forebygge, det koster milliarder i oprensning og nye boringer, og vi risikerer langsigtede helbredseffekter for befolkningen. Rent drikkevand er et af de grundlæggende Axiomer, der aldrig må forhandles væk.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Rent drikkevand</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={4} 
          />
        </div>

        {/* FOKUS BOKS */}
        <div className="bg-[#002B5B] text-white rounded-3xl p-8 mb-12">
          <div className="uppercase tracking-[2px] text-sm font-semibold mb-3 text-white/70">
            Fokus
          </div>
          <p className="text-2xl font-semibold leading-tight">
            Vi vælger at forurene vores drikkevand med pesticider<br />
            og betaler derefter milliarder for at rense det op.
          </p>
          <p className="mt-4 text-white/90">
            I stedet for at beskytte grundvandet, forurener vi det og betaler bagefter for oprensning. 
            Det er et grundlæggende Axiom-brud.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Pesticidrester findes i over halvdelen af alle boringer i Danmark.
          </p>
          
          <p>
            Vi bruger milliarder af kroner på oprensning og nye boringer i stedet for at beskytte grundvandet mod sprøjtning.
          </p>

          <p className="text-xl font-semibold text-[#E30613] mt-6">
            Vi forurener vores egen drikkevands-kilde – og betaler dyrt for at rense den bagefter.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi gradvist indføre en langt stærkere beskyttelse af grundvandet 
            og reducere brugen af pesticider markant. Rent drikkevand er en grundlæggende ressource, 
            der ikke bør kompromitteres af kortsigtede hensyn.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Vi ødelægger systematisk vores egen drikkevandsforsyning</li>
            <li>Vi renser i stedet for at forebygge – det er dyrt og ineffektivt</li>
            <li>Det koster milliarder i oprensning og nye boringer</li>
            <li>Vi risikerer langsigtede helbredseffekter for befolkningen</li>
            <li>Det er i strid med et af vores grundlæggende Axiomer: Vi må ikke ødelægge vores drikkevand</li>
          </ul>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a 
              href="https://www.geus.dk/vandressourcer/vandkvalitet/grundvandskvalitet/opgoerelser" 
              target="_blank"
              className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3"
            >
              GEUS – Opgørelser over pesticider i grundvand <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}