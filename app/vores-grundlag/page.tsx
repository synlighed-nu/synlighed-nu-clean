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

Det nuværende system gentager de samme fejl år efter år, fordi ingen rigtig kan se konsekvenserne af vores beslutninger. Vi løser problemer ved at kompensere for dem i stedet for at fjerne årsagerne.

Derfor er vores grundlag simpelt:

Synlighed først – alle skal kunne se, hvor pengene går hen og hvilke trade-offs der bliver truffet.

Agil reasoning – når virkeligheden er kendt, skal vi kunne handle hurtigt og fornuftigt.

Axiom – nogle få grundlæggende regler der aldrig må forhandles væk.

Hurtigere. Bedre. Billigere. er ikke bare en slogan. Det er et værktøj til at vurdere, om en løsning faktisk forbedrer systemet på en holdbar måde.

Vi ser Demokrati 2.0 som det næste naturlige skridt i udviklingen af demokratiet. Ikke som en endelig model, men som en nødvendig opgradering af det system, vi har arvet. Uden løbende udvikling bevæger vi os mod idiokrati.

Vi er ikke bedrevidende. Vi er nysgerrige. Vi vil ikke erstatte det gamle system – vi vil gøre det gennemsigtigt, så det kan blive bedre.
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
            Det nuværende system gentager de samme fejl år efter år, fordi vi ikke kan se konsekvenserne af vores beslutninger. 
            Vi løser problemer ved at kompensere for dem i stedet for at fjerne årsagerne.
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Derfor er vores grundlag simpelt</h2>
          
          <ul className="space-y-6 text-xl">
            <li><strong>Synlighed først</strong> – alle skal kunne se, hvor pengene går hen og hvilke trade-offs der bliver truffet.</li>
            <li><strong>Agil reasoning</strong> – når virkeligheden er kendt, skal vi kunne handle hurtigt og fornuftigt.</li>
            <li><strong>Axiom</strong> – nogle få grundlæggende regler der aldrig må forhandles væk.</li>
          </ul>

          {/* NYT AXIOM */}
          <div className="mt-10 border-l-4 border-[#002B5B] pl-6">
            <p className="font-semibold text-xl">Et af de vigtigste Axiomer:</p>
            <p className="mt-2 text-xl font-medium text-[#002B5B]">
              Vi ødelægger ikke vores drikkevand, vores natur eller de næste generationers evne til at tænke selv.
            </p>
          </div>

          {/* NYT AFSNIT: GENERATIONER */}
          <section className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Et fælles sprog på tværs af generationer</h2>
            
            <div className="prose prose-lg text-gray-700">
              <p>
                De unge er ofte mere agile og hurtigere til at se nye muligheder. De ældre har derimod lært at navigere i det system, der er – og har tilpasset sig dets begrænsninger over tid. Begge perspektiver har værdi.
              </p>
              
              <p>
                Problemet opstår, når de to generationer ikke forstår hinandens udgangspunkt. Så bliver debatten let til enten forsvar for status quo eller krav om afvikling.
              </p>

              <p className="font-semibold">
                Agil reasoning og klare Axiomer kan fungere som et fælles sprog på tværs af alder. 
                De tvinger os til at stille de samme grundlæggende spørgsmål: Hvad er synligt? Hvad virker i praksis? Hvad er ikke til forhandling?
              </p>

              <p>
                På den måde kan vi bevæge os væk fra polariseringen mellem "bevar alt" og "riv det hele ned" – og i stedet arbejde med reel udvikling af det, vi allerede har.
              </p>
            </div>
          </section>

          {/* Ny kort forklaring af sloganet */}
          <div className="mt-10">
            <p className="text-xl font-semibold">
              "Hurtigere. Bedre. Billigere." er ikke bare en slogan.
            </p>
            <p className="mt-2 text-lg text-gray-700">
              Det er et værktøj til at vurdere, om en løsning faktisk forbedrer systemet på en holdbar måde. 
              Hvis noget kun bliver bedre på én parameter, mens de to andre forværres, er det sjældent en reel forbedring – det er blot en forskydning af problemet.
            </p>
          </div>

          <p className="mt-12 text-2xl font-semibold">
            Vi ser Demokrati 2.0 som det næste naturlige skridt i udviklingen af demokratiet.
          </p>
          <p className="text-xl">
            Ikke som en endelig model, men som en nødvendig opgradering af det system, vi har arvet. 
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