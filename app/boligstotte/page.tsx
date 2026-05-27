'use client';

import Nav from '../components/common/_Nav';
import SpeakerButton from '../components/common/_SpeakerButton';

export default function BoligstottePage() {
  const pageText = `
    Vi bruger 18 milliarder kroner om året. Men vi løser ikke problemet.
    592.000 husstande modtager støtte. Det hjælper mange i dag.
    Men holder samtidig priserne oppe.
    Så vi gør noget mærkeligt: Vi betaler for høje priser. Og derefter betaler vi for at kompensere for dem.
    Resultatet er et system, der har brug for støtten for at fungere.
    Det svarer til næsten én hel Øresundsbro hvert eneste år.

    Et bedre alternativ:
    Over de næste 5 år kan vi gradvist afvikle boligstøtten samtidig med, at vi bygger et stort antal nye, 100 % selvforsynende boliger med sol, vind og batterier.
    På den måde sænker vi både de løbende boligomkostninger og boligpriserne gennem øget udbud.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        {/* Titel + højtaler-knap på samme linje */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-5xl font-bold tracking-tighter">Boligstøtte</h1>
          
          <SpeakerButton text={pageText} />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          
          <p className="text-2xl font-medium">
            Vi bruger 18 milliarder kroner om året.
          </p>
          <p className="text-2xl font-medium">
            Men vi løser ikke problemet.
          </p>

          <p className="text-xl mt-8">
            592.000 husstande modtager støtte.
          </p>
          <p className="text-xl">
            Det hjælper mange i dag.
          </p>
          <p className="text-xl font-semibold text-[#E30613]">
            Men holder samtidig priserne oppe.
          </p>

          <p className="text-2xl font-medium mt-10">
            Så vi gør noget mærkeligt:
          </p>
          <p className="text-2xl font-medium text-[#E30613]">
            Vi betaler for høje priser.
          </p>
          <p className="text-2xl font-medium text-[#E30613]">
            Og derefter betaler vi for at kompensere for dem.
          </p>

          <p className="text-xl font-semibold mt-8">
            Resultatet er et system, der har brug for støtten for at fungere.
          </p>

          <p className="mt-12 text-2xl font-semibold text-[#E30613]">
            Det svarer til næsten én hel Øresundsbro hvert eneste år.
          </p>

          <h3 className="text-2xl font-semibold mt-16 mb-6">Et bedre alternativ</h3>
          <p className="text-xl">
            Over de næste 5 år kan vi gradvist afvikle boligstøtten samtidig med, at vi bygger et stort antal nye, 100 % selvforsynende boliger (sol, vind og batterier).
          </p>
          <p className="text-xl">
            På den måde sænker vi både de løbende boligomkostninger og boligpriserne gennem øget udbud.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Holder boligpriserne kunstigt høje</li>
            <li>Gør det sværere for unge at komme ind på boligmarkedet</li>
            <li>Bruger milliarder uden at løse det underliggende problem</li>
            <li>Skaber et system, der er afhængigt af støtte for at fungere</li>
          </ul>
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
          <a 
            href="https://www.dst.dk/da/Statistik/emner/sociale-forhold/social-stoette/boligstoette" 
            target="_blank"
            className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3"
          >
            Danmarks Statistik – Boligstøtte <span className="text-xl">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}