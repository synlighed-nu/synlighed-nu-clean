import Nav from '../components/common/_Nav';

export default function UdlaendingepolitikPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Udlændingepolitik & ulandshjælp</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Hvad koster den samlede udlændingepolitik og ulandshjælp reelt – og hvilke incitamenter skaber den på lang sigt?
          </p>

          <p className="text-xl font-semibold text-[#E30613]">
            Vi bruger milliarder på projekter, der ofte er ineffektive og skaber afhængighed.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi skifte fra dyre, topstyrede projekter til mere effektive løsninger – 
            bl.a. direkte kontantoverførsler og støtte til lokale initiativer.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 my-10">
            <p className="font-medium mb-4">Et stærkt eksempel fra Rory Stewart (tidl. britisk minister for ulandshjælp):</p>
            <a 
              href="https://www.ted.com/talks/rory_stewart_to_end_extreme_poverty_give_cash_not_advice" 
              target="_blank"
              className="block text-[#002B5B] hover:underline"
            >
              <strong>Se TED Talk:</strong> "To end extreme poverty, give cash — not advice" <span className="text-xl">↗</span>
            </a>
            <p className="text-sm text-gray-600 mt-2">
              Han fortæller bl.a. om et toilet-projekt, der kostede 48.000 dollars – mens lokalbefolkningen selv kunne have lavet ordentlige toiletter for få hundrede kroner.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>De samlede økonomiske omkostninger er uigennemsigtige</li>
            <li>Mange projekter er ineffektive og skaber afhængighed</li>
            <li>Incitamentstrukturen belønner ofte det modsatte af integration og bæredygtighed</li>
            <li>Der er for lidt fokus på reel årsagsbehandling</li>
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