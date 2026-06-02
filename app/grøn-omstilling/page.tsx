'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function GrønOmstillingPage() {
  const pageText = `
    Den grønne omstilling handler ikke kun om mål.
    Den handler om, hvordan vi når dem.

    Når vi griber ind i markedet med støtte og regulering, kan vi enten skabe bedre løsninger eller låse os fast i dårligere løsninger.

    Hvis støtte og regulering ikke er designet rigtigt, risikerer vi, at nogle løsninger bliver beskyttet, konkurrencen svækkes, og innovationen går langsommere.

    Så vinder ikke nødvendigvis den bedste løsning, men den der passer bedst ind i systemet.

    Et klart eksempel: Når regeringen vil have flere vindmøller, og der ikke er nogen der byder på forslaget, er det et tegn på at noget er fundamentalt galt. Løsningen er ikke mere tilskud.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Grøn omstilling</h1>
          <SpeakerButton 
            text={pageText} 
            endingAxiomIndex={4} 
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Den grønne omstilling handler ikke kun om mål.<br />
            Den handler om, hvordan vi når dem.
          </p>

          <p className="mt-8">
            Når vi griber ind i markedet med støtte og regulering, kan vi enten:
          </p>

          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>Skabe bedre løsninger</li>
            <li>Eller låse os fast i dårligere løsninger</li>
          </ul>

          <p className="mt-10 text-xl font-semibold text-[#E30613]">
            Hvis støtte og regulering ikke er designet rigtigt, risikerer vi, at nogle løsninger bliver beskyttet, konkurrencen svækkes, og innovationen går langsommere.
          </p>

          <p className="mt-8">
            Så vinder ikke nødvendigvis den bedste løsning – men den, der passer bedst ind i systemet.
          </p>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Et klart eksempel:</p>
            <p className="mt-3">
              Når regeringen vil have flere vindmøller, og der ikke er nogen der byder på forslaget, 
              er det et tegn på at noget er fundamentalt galt. 
              Løsningen er ikke mere tilskud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}