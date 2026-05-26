import Nav from '../components/_Nav';
import Link from 'next/link';

export default function BoligstottePage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">

        <h1 className="text-5xl font-bold tracking-tighter mb-6">Boligstøtte</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Ca. 592.000 husstande modtager boligstøtte for <strong>ca. 18 milliarder kroner årligt</strong>.
          </p>
          
          <p className="text-xl font-semibold text-[#E30613]">
            Det svarer til næsten én hel Øresundsbro hvert eneste år.
          </p>

          <p>
            Støtten hjælper mange i dag, men holder samtidig boligpriserne kunstigt høje og gør det sværere for unge og førstegangskøbere at komme ind på markedet.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kunne vi gradvist afvikle boligstøtten samtidig med, at vi bygger et stort antal nye boliger, 
            der er 100 % selvforsynende med sol, vind og batterier. 
          </p>
          <p>
            På den måde sænker vi både de løbende boligomkostninger og boligpriserne gennem øget udbud – 
            i stedet for at bruge 18 milliarder kroner om året på at holde priserne oppe.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Holder boligpriserne kunstigt høje</li>
            <li>Skaber afhængighed af offentlig støtte</li>
            <li>Reducerer incitamentet til at bygge flere boliger</li>
            <li>Giver et kunstigt billede af, at markedet fungerer</li>
          </ul>

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
    </div>
  );
}