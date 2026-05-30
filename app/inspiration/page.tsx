'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function InspirationPage() {
  const pageText = `
    Vi er ikke alene om at ville et mere gennemsigtigt, agilt og fornuftigt samfund. 
    Overalt opstår der initiativer, der eksperimenterer med nye måder at organisere, tænke og finansiere på.

    Her er fire konkrete eksempler på projekter, der arbejder med principper som åbenhed, kreativitet og systemtænkning.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        {/* Titel + højtaler-knap */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Inspiration fra virkeligheden</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={2} 
          />
        </div>
        
        <p className="text-xl text-gray-600 mb-12">
          Vi er ikke alene om at ville et mere gennemsigtigt, agilt og fornuftigt samfund. 
          Overalt opstår der initiativer, der eksperimenterer med nye måder at organisere, tænke og finansiere på.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h4 className="font-semibold mb-3">1. Logseq – Værktøj til sammenhængende tænkning</h4>
            <p className="text-gray-600">
              Et open-source værktøj, der forbinder noter og data på en fleksibel måde, så man kan opdage sammenhænge i stedet for at gemme viden i lukkede mapper.
            </p>
            <a href="https://logseq.com" target="_blank" className="text-[#002B5B] hover:underline text-sm mt-4 inline-block">
              Besøg Logseq →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h4 className="font-semibold mb-3">2. Genopret Kbh – Gennemsigtig økonomi</h4>
            <p className="text-gray-600">
              Et borgerdrevet initiativ, der finansierer sine aktiviteter med fuldstændig åben kassebog via Open Collective.
            </p>
            <a href="https://opencollective.com/genopret-kbh" target="_blank" className="text-[#002B5B] hover:underline text-sm mt-4 inline-block">
              Se deres økonomi →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h4 className="font-semibold mb-3">3. Coding Pirates – Kreativitet i praksis</h4>
            <p className="text-gray-600">
              Frivillige klubber, der giver børn og unge mulighed for at lære at kode, bygge og tænke systematisk gennem leg og skaberglæde.
            </p>
            <a href="https://codingpirates.dk" target="_blank" className="text-[#002B5B] hover:underline text-sm mt-4 inline-block">
              Besøg Coding Pirates →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <h4 className="font-semibold mb-3">4. Jim Lyngvild / Ravnsborg – Personlig agilitet</h4>
            <p className="text-gray-600">
              Et eksempel på, hvordan man kan skabe store kulturelle projekter ved at handle hurtigt og direkte ud fra en klar vision.
            </p>
            <a href="https://ravnsborg.dk" target="_blank" className="text-[#002B5B] hover:underline text-sm mt-4 inline-block">
              Besøg Ravnsborg →
            </a>
          </div>

        </div>

        <p className="text-center text-gray-600 mt-16 max-w-2xl mx-auto">
          Disse projekter viser, at det er muligt at skabe forandring gennem gennemsigtighed, kreativitet og praktisk agilitet. 
          Vi vil gerne lære af dem og bringe de bedste elementer med ind i arbejdet med <strong>Demokrati 2.0</strong>.
        </p>

      </div>
    </div>
  );
}