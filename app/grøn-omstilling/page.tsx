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

    Fokus: Den nuværende grønne omstilling forstærker de problemer, den skal løse.
    Vi bygger store centrale anlæg, lange elkabler og tunge reguleringssystemer – i stedet for at satse på lokal og decentral produktion.
    Resultatet er højere elpriser, større sårbarhed, større indgreb i landskabet og mindre innovation.

    Når vi griber ind i markedet med støtte og regulering, kan vi enten skabe bedre løsninger eller låse os fast i dårligere løsninger.

    Et klart eksempel: Når regeringen vil have flere vindmøller, og der ikke er nogen der byder på forslaget, er det et tegn på at noget er fundamentalt galt. Løsningen er ikke mere tilskud.

    Et andet konkret eksempel er din elregning. Du betaler næsten halvdelen af regningen til systemet omkring strømmen – ikke til selve energien.

    Derudover gør store centrale energisystemer os mere sårbare i krise og krig. Lange elkabler og få store anlæg kræver militær beskyttelse.

    Endelig pynter store elkabler og vindmølleparker ikke ligefrem på landskabet – hverken på land eller til havs.
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

          {/* === NY FOKUS-BOKS === */}
          <div className="mt-12 bg-[#002B5B] text-white rounded-3xl p-8">
            <div className="uppercase tracking-[2px] text-sm font-semibold mb-3 text-white/70">
              Fokus
            </div>
            <p className="text-2xl font-semibold leading-tight">
              Den nuværende grønne omstilling forstærker de problemer, den skal løse.
            </p>
            <p className="mt-4 text-white/90">
              Vi bygger store centrale anlæg, lange elkabler og tunge reguleringssystemer – 
              i stedet for at satse på lokal og decentral produktion.
            </p>

            <ul className="mt-6 space-y-2 text-white/90">
              <li>• Højere elpriser (fordi vi betaler for systemet, ikke kun energien)</li>
              <li>• Større sårbarhed i krise og krig</li>
              <li>• Større indgreb i landskab og natur</li>
              <li>• Mindre innovation og reel konkurrence</li>
            </ul>

            <p className="mt-6 text-sm text-white/70">
              Vi siger, vi vil det grønne – men vi gentager det samme gamle systemdesign, bare i grøn indpakning.
            </p>
          </div>

          <p className="mt-10 text-xl font-semibold text-[#E30613]">
            Hvis støtte og regulering ikke er designet rigtigt, risikerer vi, at nogle løsninger bliver beskyttet, konkurrencen svækkes, og innovationen går langsommere.
          </p>

          <p className="mt-8">
            Så vinder ikke nødvendigvis den bedste løsning – men den, der passer bedst ind i systemet.
          </p>

          {/* Eksempel 1: Vindmøller */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Et klart eksempel:</p>
            <p className="mt-3">
              Når regeringen vil have flere vindmøller, og der ikke er nogen der byder på forslaget, 
              er det et tegn på at noget er fundamentalt galt. 
              Løsningen er ikke mere tilskud.
            </p>
          </div>

          {/* Elregning */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">Et andet konkret eksempel: Din elregning viser problemet</h2>
            
            <p>
              Tag denne rigtige elregning fra februar 2026 (Andel Energi). Den afslører præcis det samme mønster:
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-2xl overflow-hidden text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Post</th>
                    <th className="text-right px-6 py-4 font-semibold">Beløb</th>
                    <th className="text-right px-6 py-4 font-semibold">Andel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Ren strøm (288 kWh)</td>
                    <td className="px-6 py-4 text-right">349,96 kr</td>
                    <td className="px-6 py-4 text-right">~55 %</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Transport + afgifter</td>
                    <td className="px-6 py-4 text-right">189,72 kr</td>
                    <td className="px-6 py-4 text-right">~30 %</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Abonnementer</td>
                    <td className="px-6 py-4 text-right">98,68 kr</td>
                    <td className="px-6 py-4 text-right">~15 %</td>
                  </tr>
                  <tr className="font-medium bg-gray-50">
                    <td className="px-6 py-4">I alt</td>
                    <td className="px-6 py-4 text-right">638,36 kr</td>
                    <td className="px-6 py-4 text-right">100 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 font-medium">
              Du betaler næsten halvdelen af regningen til <span className="text-[#E30613]">systemet omkring strømmen</span> – ikke til selve energien.
            </p>

            <p className="mt-4">
              Når vi laver grøn omstilling ved at bygge flere store centrale anlæg og lange elkabler, 
              forstærker vi netop den del af regningen, der allerede er alt for stor. 
              Lokal produktion og forbrug ville skære en stor del af transport, tab og administration væk.
            </p>
          </div>

          {/* Sårbarhed */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">En tredje skjult pris: Øget sårbarhed</h2>
            
            <p>
              Store centrale energisystemer med lange elkabler og få store anlæg gør samfundet mere sårbart i krise og krig. 
              Kritisk infrastruktur skal beskyttes, og det kræver ekstra militære ressourcer. 
              De omkostninger ender hos borgerne – enten direkte via skat eller indirekte gennem højere forsvarsbudgetter.
            </p>
          </div>

          {/* Landskab */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">En fjerde skjult pris: Landskab og natur</h2>
            
            <p>
              Store elkabler – både på land og til havs – og store vindmølleparker har en markant visuel påvirkning på landskabet. 
              Det er ikke kun et spørgsmål om æstetik. Det handler også om, hvordan vi behandler naturen og folks oplevelse af deres lokalområde.
            </p>

            <p className="mt-4">
              Når energiproduktionen koncentreres i få store anlæg, kræver det omfattende infrastruktur, der ændrer landskabet permanent. 
              Decentral og lokal energiproduktion har typisk et væsentligt mindre fodaftryk og kan integreres mere skånsomt i omgivelserne.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}