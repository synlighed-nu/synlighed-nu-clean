'use client';

import Nav from '../components/common/_Nav';

export default function PersondatapolitikPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-10">Persondatapolitik</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Vi tager dit privatliv alvorligt – og vi holder det simpelt.
          </p>

          <p>
            På Synlighed.nu indsamler vi kun de absolut nødvendige oplysninger, og vi gør det så gennemsigtigt som muligt. 
            Vi sælger aldrig dine data, og vi deler dem ikke med tredjeparter til markedsføringsformål.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Hvad indsamler vi?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tekniske data (IP-adresse, browser-type, tidspunkt for besøg) via statistik-cookies. Dette bruges kun til at forbedre siden.</li>
            <li>Dine valg på Axioms-siden (hvilke Axioms du har liket) – gemmes lokalt i din browser (localStorage). Disse data forlader aldrig din egen enhed.</li>
            <li>Forslag du sender via formularen på Axioms-siden – kun den tekst du selv skriver.</li>
          </ul>

          <p className="mt-8">
            Vi opbevarer ingen personlige profiler, e-mailadresser, navne eller andre følsomme oplysninger om dig.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Cookies</h3>
          <p>
            Vi bruger kun to typer cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Nødvendige cookies</strong> – for at siden kan fungere korrekt.</li>
            <li><strong>Statistiske cookies</strong> – for at se, hvordan siden bliver brugt, så vi kan forbedre den.</li>
          </ul>

          <p className="mt-8">
            Du kan altid ændre eller trække dit samtykke tilbage via den lille cookie-knap nederst til venstre på alle sider.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Dine rettigheder</h3>
          <p>
            Du har til enhver tid ret til at få indsigt i de data vi har om dig, få dem slettet eller trække dit samtykke tilbage.
          </p>

          <h3 className="text-2xl font-semibold mt-12 mb-4">Kontakt</h3>
          <p>
            Har du spørgsmål til, hvordan vi behandler dine data, er du altid velkommen til at kontakte os på X: 
            <a href="https://x.com/SynlighedNu" target="_blank" className="text-[#002B5B] hover:underline">@SynlighedNu</a>
          </p>

          <p className="text-sm text-gray-500 mt-16">
            Senest opdateret: 1. juni 2026
          </p>
        </div>
      </div>
    </div>
  );
}