import Nav from '../components/_Nav';
import Link from 'next/link';

export default function EnergiPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-[#002B5B] hover:text-[#001B3D] font-medium mb-8 group">← Tilbage til forsiden</Link>
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Energi</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">Lokal produktion fjerner unødvendige tab i elnettet og central infrastruktur.</p>
          <p>I et ideelt samfund med lokal energi ville vi skulle producere ca. 25 % mindre energi samlet set.</p>
          <p className="text-xl font-semibold text-[#E30613]">Alligevel prioriteres massive centraliserede projekter og milliarder i subsidier.</p>
          <h3 className="text-xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>Over de næste 5 år kan vi gradvist flytte til lokal energiproduktion (sol, vind, batterier) samtidig med at vi afvikler de dyre centrale projekter.</p>
          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Store tab i elnettet spilder op til 25 % af energien</li>
            <li>Centraliserede projekter skaber høje omkostninger og afhængighed</li>
            <li>Subsidier går forud for den billigste løsning: lokal produktion</li>
          </ul>
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a href="https://ens.dk/" target="_blank" className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3">Energistyrelsen <span className="text-xl">↗</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}