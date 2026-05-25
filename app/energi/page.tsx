import Nav from '../components/_Nav';
import Link from 'next/link';

export default function EnergiPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Energi</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Lokal produktion fjerner unødvendige tab i elnettet og central infrastruktur.
          </p>
          <p>
            I et ideelt samfund med lokal energi ville vi skulle producere ca. 25 % mindre energi samlet set.
          </p>
          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Store centrale projekter skaber høje omkostninger og afhængighed</li>
            <li>Tab i elnettet spilder op til 25 % af energien</li>
            <li>Subsidier til central infrastruktur går forud for lokal produktion</li>
          </ul>
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a href="https://ens.dk/" target="_blank" className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3">
              Energistyrelsen <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}