'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function Demokrati20Page() {
  const pageText = `
    Det gamle demokrati er ikke dårligt i sig selv – det er bare blevet misbrugt og ikke opdateret i over 250 år.
    Uden løbende forbedring bevæger vi os langsomt mod en blanding af idiokrati og kontrol.

    I filmen Idiokrati bliver samfundet dumt, fordi ingen længere tænker kritisk.
    I George Orwells 1984 bliver samfundet kontrolleret og livløst, fordi kreativiteten og den frie tanke er systematisk udryddet.

    Begge dystopier er advarsler om det samme: et samfund uden kritisk tænkning og kreativitet kollapser.

    Derfor er Demokrati 2.0 ikke en mulighed – det er en nødvendighed.
    Vi skal opgradere demokratiet med fuld synlighed, agil reasoning og klare, urokkelige axioms.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-5xl font-bold tracking-tighter">Demokrati 2.0</h1>
          <SpeakerButton text={pageText} endingAxiomIndex={3} />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl leading-relaxed">
            Det gamle demokrati er ikke dårligt i sig selv – det er bare blevet misbrugt og ikke opdateret i over 250 år.
          </p>
          <p className="mt-8">
            Uden løbende forbedring bevæger vi os langsomt mod en blanding af <strong>Idiokrati</strong> og <strong>1984</strong>.
          </p>

          <p className="mt-8">
            I filmen <strong>Idiokrati</strong> bliver samfundet dumt, fordi ingen længere tænker kritisk. 
            I George Orwells <strong>1984</strong> bliver samfundet kontrolleret og livløst, fordi kreativiteten og den frie tanke er systematisk udryddet.
          </p>

          <p className="text-2xl font-semibold text-[#002B5B] mt-12">
            Derfor er Demokrati 2.0 ikke en mulighed – det er en nødvendighed.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white border border-gray-200 rounded-3xl p-6">
              <h4 className="font-semibold mb-2">Fuld synlighed</h4>
              <p className="text-gray-600">Så alle kan se, hvor skattekronerne går hen og hvilke konsekvenser beslutningerne har.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6">
              <h4 className="font-semibold mb-2">Agil reasoning</h4>
              <p className="text-gray-600">Evnen til at handle hurtigt og fornuftigt, når virkeligheden er kendt.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6">
              <h4 className="font-semibold mb-2">Axiom</h4>
              <p className="text-gray-600">Nogle få grundlæggende regler der aldrig må forhandles væk.</p>
            </div>
          </div>
        </div>

        {/* Genvej til Inspiration */}
        <div className="mt-20 text-center">
          <Link 
            href="/inspiration"
            className="inline-flex items-center gap-3 text-[#002B5B] hover:text-[#001B3D] font-medium text-lg"
          >
            Se flere inspirerende initiativer og projekter 
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}