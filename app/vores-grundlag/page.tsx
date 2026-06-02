'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function VoresGrundlagPage() {
  const pageText = `
Vores grundlag handler om tre ting: Synlighed først, Agil reasoning og klare Axiom.

Vi tror på et samfund hvor alle kan se, hvad der egentlig sker med vores fælles penge. Hvor beslutninger ikke bliver truffet i lukkede rum. Hvor man ikke bare skal betale regningen uden at vide, hvad man egentlig betaler for.

Det nuværende system gentager de samme fejl år efter år, fordi ingen rigtig kan se konsekvenserne af vores beslutninger. Vi løser problemer ved at kompensere for dem i stedet for at fjerne årsagerne. Derfor bliver tingene dyrere, langsommere og dårligere – selv når vi siger, at vi vil det modsatte.

Derfor er vores grundlag simpelt:

Synlighed først – alle skal kunne se, hvor pengene går hen og hvilke trade-offs der bliver truffet.

Agil reasoning – når virkeligheden er kendt, skal vi kunne handle hurtigt og fornuftigt.

Axiom – nogle få grundlæggende regler der aldrig må forhandles væk.

Demokrati 2.0 er ikke en mulighed. Det er en nødvendighed. Uden løbende udvikling bevæger vi os mod idiokrati.

Vi er ikke bedrevidende. Vi er nysgerrige. Vi vil ikke erstatte det gamle system – vi vil gøre det gennemsigtigt, så det kan blive bedre.

Du behøver ikke at acceptere, at det er sådan det er. Du kan kræve at se regnskabet. Du kan stille de rigtige spørgsmål. Og du kan være med til at bygge noget, der er hurtigere, bedre og billigere – for alle.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Vores grundlag</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={2} 
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-2xl font-medium">
            Vi tror på et samfund, hvor alle kan se, hvad der sker med vores fælles ressourcer.
          </p>
          <p className="text-2xl font-medium">
            Vi tror på hurtigere, bedre og billigere løsninger – ikke gennem mere bureaukrati, men gennem gennemsigtighed, agil reasoning og klare principper.
          </p>

          <p className="mt-10">
            Det nuværende system gentager de samme fejl år efter år, fordi vi ikke kan se konsekvenserne af vores beslutninger. Vi løser problemer ved at kompensere for dem i stedet for at fjerne årsagerne.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Derfor er vores grundlag simpelt</h2>
          <ul className="space-y-6 text-xl">
            <li><strong>Synlighed først</strong> – alle skal kunne se, hvor pengene går hen og hvilke trade-offs der bliver truffet.</li>
            <li><strong>Agil reasoning</strong> – når virkeligheden er kendt, skal vi kunne handle hurtigt og fornuftigt.</li>
            <li><strong>Axiom</strong> – nogle få grundlæggende regler der aldrig må forhandles væk.</li>
          </ul>

          <p className="mt-12 text-2xl font-semibold">
            Demokrati 2.0 er ikke en mulighed. Det er en nødvendighed.
          </p>
          <p className="text-xl">
            Uden løbende udvikling bevæger vi os mod idiokrati.
          </p>

          <p className="mt-10 italic text-gray-600">
            Vi er ikke bedrevidende. Vi er nysgerrige.<br />
            Vi vil ikke erstatte det gamle system – vi vil gøre det gennemsigtigt, så det kan blive bedre.
          </p>
        </div>
      </div>
    </div>
  );
}