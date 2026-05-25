'use client';

import React, { useState } from 'react';

import Nav from './components/_Nav';
import Hero from './components/_Hero';
import WhySection from './components/_WhySection';
import VotingSection from './components/_VotingSection';
import BigMoves from './components/_BigMoves';
import ConcreteAreas from './components/_ConcreteAreas';
import Footer from './components/_Footer';
import Axioms from './components/_Axioms';

export default function SynlighedNu() {
  const [modal, setModal] = useState<{ title: string; text: string } | null>(null);

  const showExplanation = (title: string, text: string) => {
    setModal({ title, text });
  };

  return (
    <div className="min-h-screen bg-white text-[#002B5B] pt-28">
      <Nav />
      <Hero />

      {/* AXIOMS */}
      <Axioms />

      <WhySection />
      <VotingSection />
      <BigMoves />

            {/* === KREATIVITET – KRITISK OMRÅDE === */}
      <section id="kreativitet" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-white print:break-before-page">
        <div className="text-center mb-8">
          <span className="inline-block px-5 py-1.5 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">KRITISK OMRÅDE</span>
        </div>
        
        <h2 className="text-4xl font-bold text-center tracking-tighter mb-8">Kreativitet</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium text-center mb-10">
            Fra ca. 98 % kreative i børnehaven<br />
            til kun ca. 10 % i gymnasiet<br />
            og helt ned til 2 % som voksne.
          </p>
          
          <p className="text-center mb-12">
            Vores uddannelsessystem kvæler systematisk divergent tænkning og kreativitet.<br />
            Det er ikke kun et uddannelsesproblem – det er et samfundsproblem.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 text-center mb-10">
            <a 
              href="https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" 
              target="_blank"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-300 rounded-2xl px-8 py-6 text-left transition group"
            >
              <div className="w-12 h-12 bg-[#002B5B] text-white rounded-2xl flex items-center justify-center flex-shrink-0 group-active:scale-95 transition">
                ▶
              </div>
              <div>
                <div className="font-semibold">Se Sir Ken Robinsons TED Talk</div>
                <div className="text-sm text-gray-600">"Do schools kill creativity?" (2006)</div>
              </div>
            </a>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Kilde: George Land & Beth Jarman (1968–1992), longitudinal studie med 1.600 børn.
          </p>
        </div>
      </section>
      
      <ConcreteAreas />

                  {/* === DEMOKRATI 2.0 – EGEN SEKTION === */}
      <section id="demokrati-2-0" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200 bg-white print:break-before-page">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">VISION</span>
        </div>
        
        <h2 className="text-4xl font-bold text-center tracking-tighter mb-6">
          Demokrati 2.0
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl text-center mb-10">
            Vi ved, hvor det nuværende demokrati ender, hvis vi ikke udvikler det.
          </p>
          
          <p>
            I filmen <strong><a href="https://en.wikipedia.org/wiki/Idiocracy" target="_blank" className="underline hover:text-[#E30613] transition-colors">Idiokrati</a></strong> bliver samfundet dumt, fordi ingen længere tænker kritisk. 
            I George Orwells <strong><a href="https://da.wikipedia.org/wiki/1984_(roman)" target="_blank" className="underline hover:text-[#E30613] transition-colors">1984</a></strong> bliver samfundet kontrolleret og livløst, fordi kreativiteten og den frie tanke er systematisk udryddet.
          </p>
          
          <p>
            Begge dystopier er advarsler om det samme: et samfund uden kritisk tænkning og kreativitet kollapser – enten i dumhed eller i total kontrol.
          </p>
          
          <p className="font-semibold">
            Det gamle demokrati er ikke dårligt i sig selv – det er bare blevet misbrugt og ikke opdateret i over 250 år. 
            Uden løbende forbedring bevæger vi os langsomt mod en blanding af begge dystopier.
          </p>
          
          <p className="text-2xl font-semibold text-center my-10 text-[#002B5B]">
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
      </section>

      {/* Støt projektet */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 bg-white print:break-before-page">
        <div className="bg-[#002B5B] text-white rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-semibold mb-3">Vil du hjælpe med at gøre Danmark mere gennemsigtigt?</h3>
          <p className="text-[#E30613] text-xl mb-8">Støt projektet med det beløb du synes er rigtigt</p>
          <a href="https://opencollective.com/synlighed-nu" target="_blank" className="inline-block bg-white text-[#002B5B] hover:bg-[#E30613] hover:text-white px-10 py-5 rounded-2xl text-2xl font-semibold transition-colors">
            Støt projektet nu →
          </a>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setModal(null)}>
          <div className="bg-white max-w-md w-full mx-4 rounded-3xl p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-semibold mb-4">{modal.title}</h3>
            <p className="text-gray-600 leading-relaxed">{modal.text}</p>
            <button onClick={() => setModal(null)} className="mt-8 w-full py-4 bg-[#002B5B] text-white rounded-2xl font-medium hover:bg-[#001B3D]">
              Luk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}