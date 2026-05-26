import Nav from '../components/_Nav';
import SpeakerButton from '../components/_SpeakerButton';

export default function BoligstottePage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Boligstøtte</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Ca. 592.000 husstande modtager boligstøtte for ca. 18 milliarder kroner årligt.
          </p>
          
          <p className="text-xl font-semibold text-[#E30613]">
            Det svarer til næsten én hel Øresundsbro hvert eneste år.
          </p>

          <p>
            Støtten hjælper mange i dag.
          </p>
          <p>
            Men den holder samtidig boligpriserne kunstigt høje og gør det sværere for unge og førstegangskøbere at komme ind på markedet.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kunne vi gradvist afvikle boligstøtten.
          </p>
          <p>
            Samtidig kan vi bygge et stort antal nye boliger, der er 100 % selvforsynende med sol, vind og batterier.
          </p>
          <p>
            På den måde sænker vi både de løbende boligomkostninger og boligpriserne gennem øget udbud.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Holder boligpriserne kunstigt høje</li>
            <li>Gør det sværere for unge at komme ind på boligmarkedet</li>
            <li>Bruger milliarder uden at løse det underliggende problem</li>
            <li>Skaber afhængighed af offentlig støtte</li>
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

      <SpeakerButton />
    </div>
  );
}