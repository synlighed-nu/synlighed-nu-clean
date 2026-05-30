'use client';

import Nav from '../components/common/_Nav';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const SpeakerButton = dynamic(
  () => import('../components/common/_SpeakerButton'),
  { ssr: false }
);

export default function KreativitetPage() {
  const pageText = `
    I 1968 testede forskerne George Land og Beth Jarman 1.600 børn på 4-5 år. 
    98 procent af dem scorede på genius-niveau i divergent tænkning.

    Da de samme børn forlod gymnasiet, var det kun omkring 10 procent.
    Som voksne var det nede på cirka 2 procent.

    Vores uddannelsessystem kvæler kreativiteten systematisk.
  `;

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-5xl font-bold tracking-tighter">Kreativitet</h1>
          <SpeakerButton text={pageText} endingAxiomIndex={7} />
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            I 1968 testede forskerne George Land og Beth Jarman 1.600 børn på 4-5 år.<br />
            98 procent af dem scorede på genius-niveau i divergent tænkning.
          </p>
          
          <p>
            Da de samme børn forlod gymnasiet, var det kun omkring 10 procent.<br />
            Som voksne var det nede på cirka 2 procent.
          </p>

          <p className="text-xl font-semibold text-[#E30613] mt-10">
            Vores uddannelsessystem kvæler kreativiteten systematisk.
          </p>

          <p>
            Hver dag i danske klasser sker det samme.
          </p>
          <p>
            Læreren stiller en opgave og forventer ét rigtigt svar fra alle.
          </p>
          <p>
            Men mange elever forstår opgaven anderledes og kommer med et andet resultat – selvom deres argumenter er i orden.
          </p>
          <p className="text-xl font-semibold text-[#E30613]">
            Når det sker, bliver det stemplet som forkert.
          </p>

          <p>
            Det er ikke eleven, der fejler.<br />
            Det er systemet, der straffer anderledes tænkning.
          </p>

          <p>
            Fejl er ikke fiasko.<br />
            Fejl er der, hvor vi lærer noget nyt.
          </p>
          <p>
            Hvis vi aldrig begår fejl, stopper al udvikling.
          </p>
          <p>
            Eleven bør aldrig straffes for at tænke anderledes.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mt-12">
            <a 
              href="https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" 
              target="_blank"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-[#002B5B] text-white rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">▶</div>
              <div>
                <p className="font-semibold group-hover:text-[#002B5B]">Se Sir Ken Robinsons TED Talk</p>
                <p className="text-sm text-gray-600">"Do schools kill creativity?" (2006)</p>
              </div>
            </a>
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