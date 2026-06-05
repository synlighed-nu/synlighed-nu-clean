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
Det gamle demokrati er ikke dårligt i sig selv. Det er bare ikke blevet opdateret i over 250 år.

Demokrati har altid udviklet sig. Fra enevælde til repræsentativt demokrati. Fra almindelig stemmeret til kvinders stemmeret. Hver gang har det været et svar på tidens udfordringer.

I dag står vi over for nye problemer: manglende gennemsigtighed, langsommelighed og beslutninger, der ikke længere afspejler virkeligheden. Derfor er Demokrati 2.0 ikke en færdig løsning – det er det næste naturlige skridt.

De unge er ofte mere agile og hurtigere til at se nye muligheder. De ældre har lært at navigere i det system, der er – og har tilpasset sig dets begrænsninger over tid. Begge perspektiver har værdi.

Når de to generationer ikke forstår hinandens udgangspunkt, bliver debatten let til enten forsvar for status quo eller krav om afvikling.

Agil reasoning og klare Axiomer kan fungere som et fælles sprog på tværs af alder. De tvinger os til at stille de samme grundlæggende spørgsmål: Hvad er synligt? Hvad virker i praksis? Hvad er ikke til forhandling?

På den måde kan vi bevæge os væk fra polariseringen mellem "bevar alt" og "riv det hele ned" – og i stedet arbejde med reel udvikling af demokratiet.

Uden løbende udvikling risikerer vi at bevæge os mod en blanding af idiokrati og kontrol. Derfor har vi brug for tre grundlæggende opgraderinger: fuld synlighed, agil reasoning og klare, urokkelige axioms.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Demokrati 2.0</h1>
          <SpeakerButton text={pageText} endingAxiomIndex={3} />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl leading-relaxed">
            Det gamle demokrati er ikke dårligt i sig selv. Det er bare ikke blevet opdateret i over 250 år.
          </p>

          <p className="mt-6 text-xl">
            Demokrati har altid udviklet sig. Fra enevælde til repræsentativt demokrati. 
            Fra almindelig stemmeret til kvinders stemmeret. Hver gang har det været et svar på tidens udfordringer.
          </p>

          <p className="mt-8 text-xl">
            I dag står vi over for nye problemer: manglende gennemsigtighed, langsommelighed og beslutninger, 
            der ikke længere afspejler virkeligheden.
          </p>

          <p className="mt-10 text-2xl font-semibold text-[#002B5B]">
            Derfor er Demokrati 2.0 ikke en færdig løsning.<br />
            Det er det næste naturlige skridt.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
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

          {/* NYT AFSNIT: GENERATIONER */}
          <section className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Et fælles sprog på tværs af generationer</h2>
            
            <div className="prose prose-lg text-gray-700">
              <p>
                De unge er ofte mere agile og hurtigere til at se nye muligheder. De ældre har lært at navigere i det system, der er – og har tilpasset sig dets begrænsninger over tid. Begge perspektiver har værdi.
              </p>
              
              <p>
                Når de to generationer ikke forstår hinandens udgangspunkt, bliver debatten let til enten forsvar for status quo eller krav om afvikling.
              </p>

              <p className="font-semibold">
                Agil reasoning og klare Axiomer kan fungere som et fælles sprog på tværs af alder. 
                De tvinger os til at stille de samme grundlæggende spørgsmål: Hvad er synligt? Hvad virker i praksis? Hvad er ikke til forhandling?
              </p>

              <p>
                På den måde kan vi bevæge os væk fra polariseringen mellem "bevar alt" og "riv det hele ned" – og i stedet arbejde med reel udvikling af demokratiet.
              </p>
            </div>
          </section>

          <p className="mt-12 text-lg text-gray-600">
            Uden løbende udvikling bevæger vi os langsomt mod en blanding af <strong>Idiokrati</strong> og <strong>1984</strong> – 
            enten et samfund, der bliver for dumt til at styre sig selv, eller et samfund, der bliver for kontrolleret til at være frit.
          </p>
        </div>

        {/* Genvej til Inspiration */}
        <div className="mt-16 text-center">
          <Link 
            href="/inspiration" 
            className="inline-flex items-center gap-3 text-[#002B5B] hover:text-[#001B3D] font-medium text-lg"
          >
            Se eksempler på initiativer, der allerede arbejder på denne måde 
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}