'use client';

import Nav from '../components/common/_Nav';
import SpeakerButton from '../components/common/_SpeakerButton';

export default function RentDrikkevandPage() {
  const pageText = `
    Pesticidrester findes i over halvdelen af alle boringer.
    Vi bruger milliarder af kroner på oprensning og nye boringer i stedet for at beskytte grundvandet mod sprøjtning.
    Vi forurener vores egen drikkevands-kilde – og betaler dyrt for at rense den bagefter.

    Et bedre alternativ:
    Over de næste 5 år kan vi gradvist indføre strengere beskyttelse af grundvandet og reducere brugen af pesticider.

    Axiom: Beskyttelse af grundvandet er ikke til forhandling.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        {/* Titel + højtaler-knap på samme linje */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-5xl font-bold tracking-tighter">Rent drikkevand</h1>
          <SpeakerButton text={pageText} />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          
          <p className="text-2xl font-medium">
            Pesticidrester findes i over halvdelen af alle boringer.
          </p>
          
          <p>
            Vi bruger milliarder af kroner på oprensning og nye boringer i stedet for at beskytte grundvandet mod sprøjtning.
          </p>

          <p className="text-xl font-semibold text-[#E30613]">
            Vi forurener vores egen drikkevands-kilde – og betaler dyrt for at rense den bagefter.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-6">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi gradvist indføre strengere beskyttelse af grundvandet og reducere brugen af pesticider.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Pesticider forurener vores drikkevand</li>
            <li>Vi renser i stedet for at forebygge</li>
            <li>Det koster milliarder i oprensning og nye boringer</li>
            <li>Vi risikerer langsigtede helbredseffekter for befolkningen</li>
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