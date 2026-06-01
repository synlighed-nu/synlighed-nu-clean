'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function ØkonomiPage() {
  const pageText = `
    Andre folks penge på andre folk.

    Milton Friedman beskrev det præcist: Der findes fire måder at bruge penge på. Den fjerde og farligste er: 
    "At bruge andre folks penge på andre folk."

    Det er præcis, hvad der sker, når staten, regioner eller kommuner bygger stort. 
    Det er ikke politikerens eller embedsmandens egne penge. Det er heller ikke deres egne børn eller naboer, der skal bruge det færdige byggeri. 
    Det er skatteborgernes penge, der bruges på projekter til borgerne.

    Når ingen af de involverede har deres egen hud i spillet, forsvinder den sunde økonomiske nærrighed og den naturlige omtanke, som vi alle har, når vi bruger vores egne penge.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Økonomi</h1>
          <SpeakerButton text={pageText} endingAxiomIndex={2} />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-3xl font-semibold mb-6">Andre folks penge på andre folk</h2>
          
          <p className="text-xl">
            Milton Friedman beskrev det præcist: Der findes fire måder at bruge penge på. Den fjerde og farligste er:
          </p>
          <p className="text-2xl font-medium text-[#E30613] my-8">
            „At bruge andre folks penge på andre folk.“
          </p>

          <p>
            Det er præcis, hvad der sker, når staten, regioner eller kommuner bygger stort. 
            Det er ikke politikerens eller embedsmandens egne penge. Det er heller ikke deres egne børn eller naboer, der skal bruge det færdige byggeri. 
            Det er <strong>skatteborgernes penge</strong>, der bruges på projekter til borgerne.
          </p>

          <p>
            Når ingen af de involverede har deres egen hud i spillet, forsvinder den sunde økonomiske nærrighed og den naturlige omtanke, som vi alle har, når vi bruger vores egne penge.
          </p>

          <h3 className="text-2xl font-semibold mt-14 mb-6">Hvorfor det går galt</h3>
          <p>
            I et privat byggeri står håndværkeren ansigt til ansigt med kunden. Fejl og ekstraregninger har direkte konsekvenser for hans rygte og fremtidige ordrer.
          </p>
          <p>
            I et stort offentligt byggeri forsvinder dette ansvar næsten fuldstændigt. Ansvaret bliver spredt ud i et bureaukratisk vakuum, hvor alle kan pege på hinanden.
          </p>

          <p className="mt-8">
            Derudover belønner systemet ofte det modsatte af sund fornuft: Hvis en offentlig afdeling ikke bruger hele sit budget, risikerer den at få mindre næste år. 
            Derfor er der et indbygget incitament til at bruge pengene op – selv når det er unødvendigt.
          </p>

          <h3 className="text-2xl font-semibold mt-14 mb-6">Et lysende modstykke</h3>
          <p>
            Da man byggede Øresundsbroen, valgte man en helt anden model: et lukket, kommercielt konsortium, der lånte pengene på det private marked og skulle betale dem tilbage gennem broafgifter. 
            De havde rigtige penge på spil og stod ansigt til ansigt med både banker og fremtidige brugere.
          </p>

          <p className="mt-8 text-gray-500">
            De fleste offentlige sygehusbyggerier er blevet bygget efter den stik modsatte logik.
          </p>

          <div className="mt-16 border-t border-gray-200 pt-12">
            <p className="text-center text-gray-600">
              Når vi fjerner det personlige ansvar og den direkte forbindelse mellem dem, der bruger pengene, og dem, der betaler, ødelægger vi den naturlige feedback-loop, der ellers ville sikre, at de bedste løsninger vinder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}