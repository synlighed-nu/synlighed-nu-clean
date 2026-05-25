import Nav from '../components/_Nav';

export default function UdlaendingepolitikPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Udlændingepolitik</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Hvad koster den samlede udlændingepolitik reelt – og hvilke incitamenter skaber den på lang sigt?
          </p>

          <p className="text-xl font-semibold text-[#E30613]">
            Vi diskuterer symptombehandling, men sjældent de økonomiske og strukturelle konsekvenser.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi skifte fra reaktiv symptombehandling til en mere konsekvent og økonomisk bæredygtig politik, 
            hvor incitamenter og konsekvenser er klare for både Danmark og dem, der kommer hertil.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>De samlede økonomiske omkostninger er uigennemsigtige</li>
            <li>Incitamentstrukturen belønner ofte det modsatte af integration</li>
            <li>Politikken skaber både menneskelige og økonomiske problemer på lang sigt</li>
            <li>Der er for lidt fokus på reel årsagsbehandling og for meget på symptombehandling</li>
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