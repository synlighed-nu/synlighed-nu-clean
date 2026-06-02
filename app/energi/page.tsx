'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function EnergiPage() {
  const pageText = `
    Lokal produktion fjerner unødvendige tab i elnettet og central infrastruktur.
    I et ideelt samfund med lokal energi ville vi skulle producere ca. 25 % mindre energi samlet set.

    Alligevel prioriterer vi massive centraliserede projekter og milliarder i subsidier.

    Fokus: Vi bygger et dyrt, tabsgivende og sårbart energisystem – i stedet for at satse på lokal produktion, der er billigere, mere robust og kræver mindre infrastruktur.

    Et bedre alternativ: Over de næste 5 år kan vi gradvist flytte til lokal energiproduktion (sol, vind og batterier) samtidig med at vi afvikler de dyre centrale projekter.

    Hvorfor er det et problem i dag?
    Store tab i elnettet spilder op til 25 % af energien.
    Centraliserede projekter skaber høje omkostninger og afhængighed.
    Subsidier går forud for den billigste løsning: lokal produktion.
    Vi gør os samtidig mere sårbare og belaster landskabet unødvendigt.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        {/* Titel + højtaler */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Energi</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={5} 
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl leading-relaxed">
            Lokal produktion fjerner unødvendige tab i elnettet og central infrastruktur.
          </p>
          <p>
            I et ideelt samfund med lokal energi ville vi skulle producere ca. <strong>25 % mindre energi</strong> samlet set.
          </p>

          {/* === FOKUS BOKS === */}
          <div className="mt-12 bg-[#002B5B] text-white rounded-3xl p-8">
            <div className="uppercase tracking-[2px] text-sm font-semibold mb-3 text-white/70">
              Fokus
            </div>
            <p className="text-2xl font-semibold leading-tight">
              Vi bygger et dyrt, tabsgivende og sårbart energisystem –<br />
              i stedet for at satse på lokal produktion.
            </p>
            <p className="mt-4 text-white/90">
              Vi prioriterer massive centrale projekter og milliarder i subsidier, 
              selvom lokal produktion ville give lavere priser, mindre sårbarhed og mindre belastning af landskabet.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-4">Et bedre alternativ</h2>
          <p>
            Over de næste 5 år kan vi gradvist flytte til lokal energiproduktion 
            (sol, vind og batterier) samtidig med at vi afvikler de dyre centrale projekter.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Hvorfor er det et problem i dag?</h2>
          <ul className="space-y-4 text-lg">
            <li>• Store tab i elnettet spilder op til 25 % af energien</li>
            <li>• Centraliserede projekter skaber høje omkostninger og afhængighed</li>
            <li>• Subsidier går forud for den billigste løsning: lokal produktion</li>
            <li>• Vi gør samfundet mere sårbart og belaster landskabet unødvendigt</li>
          </ul>

          <div className="mt-16 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="text-sm font-medium text-gray-500 mb-2">Officiel kilde:</p>
            <a 
              href="https://ens.dk/" 
              target="_blank"
              className="inline-flex items-center gap-2 text-[#002B5B] hover:underline"
            >
              Energistyrelsen 
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}