'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function OffentligAdministrationPage() {
  const pageText = `
En stor del af de offentlige udgifter går til proces, kontrol og administration frem for reel værdi til borgerne.

Vi har skabt et embed-værk i stedet for et reasoning-værk.

Fokus: En stor del af skattekronerne går ikke til borgerne, men til administration, kontrol og bureaukrati. Systemet belønner proces frem for resultater, og det skaber unødvendigt bureaukrati og ineffektivitet.

Et bedre alternativ er at ændre incitamenterne i den offentlige sektor over de næste fem år, så der belønnes resultater og reel værdiskabelse frem for proces og kontrol. For at give tryghed under en sådan omstilling kan man give medarbejdere, der har været ansat i mange år, en ordentlig overgangsordning.

Hvorfor er det et problem i dag? Fordi en stor del af skattekronerne går til administration og kontrol, systemet belønner proces frem for resultater, det skaber unødvendigt bureaukrati og ineffektivitet, og borgerne oplever langsommelighed og ringe værdi for pengene.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold tracking-tighter">Offentlig administration</h1>
          <SpeakerButton text={pageText} endingAxiomIndex={3} />
        </div>

        {/* FOKUS BOKS */}
        <div className="bg-[#002B5B] text-white rounded-3xl p-8 mb-12">
          <div className="uppercase tracking-[2px] text-sm font-semibold mb-3 text-white/70">
            Fokus
          </div>
          <p className="text-2xl font-semibold leading-tight">
            En stor del af skattekronerne går ikke til borgerne,<br />
            men til administration, kontrol og bureaukrati.
          </p>
          <p className="mt-4 text-white/90">
            Systemet belønner proces frem for resultater – og det skaber unødvendigt bureaukrati og ineffektivitet.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            En stor del af de offentlige udgifter går til proces, kontrol og administration – frem for reel værdi til borgerne.
          </p>

          <p className="text-xl font-semibold text-[#E30613] mt-6">
            Vi har skabt et embed-værk i stedet for et reasoning-værk.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi ændre incitamenterne i den offentlige sektor, så der belønnes 
            resultater og reel værdiskabelse frem for proces og kontrol.
          </p>
          <p className="mt-4">
            For at give tryghed under en sådan omstilling kan man give medarbejdere, der har været ansat i mange år, 
            en ordentlig overgangsordning – så de ikke bliver tabere i en nødvendig modernisering.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>En stor del af skattekronerne går til administration og kontrol i stedet for borgerne</li>
            <li>Systemet belønner proces og dokumentation frem for resultater</li>
            <li>Det skaber unødvendigt bureaukrati og ineffektivitet</li>
            <li>Borgerne oplever langsommelighed og ringe værdi for pengene</li>
          </ul>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officielle kilder:</p>
            <div className="mt-4 space-y-3">
              <a 
                href="https://www.kl.dk/media/ugjnkfvp/benspaend-fra-staten-skaber-unoedvendigt-bureaukrati-i-kommunerne-maj2023.pdf" 
                target="_blank"
                className="block text-[#002B5B] hover:underline"
              >
                KL – Benspænd fra staten skaber unødvendigt bureaukrati
              </a>
              <a 
                href="https://www.rigsrevisionen.dk/" 
                target="_blank"
                className="block text-[#002B5B] hover:underline"
              >
                Rigsrevisionen – Revision af statens administration
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}