'use client';
import React, { useState } from 'react';

import Nav from './common/_Nav';
import Hero from './sections/_Hero';
import WhySection from './sections/_WhySection';
import VotingSection from './sections/_VotingSection';
import BigMoves from './sections/_BigMoves';
import ConcreteAreas from './sections/_ConcreteAreas';
import Footer from './common/_Footer';

export default function SynlighedNu() {
  const [modal, setModal] = useState<{ title: string; text: string } | null>(null);

  const showExplanation = (title: string, text: string) => {
    setModal({ title, text });
  };

  return (
    <div className="min-h-screen bg-white text-[#002B5B] pt-20">
      <Nav />
      <Hero />
      <WhySection />
      <VotingSection />
      <BigMoves />

      {/* Kreativitet sektion */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200 bg-white">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[#E30613] text-white text-sm font-semibold tracking-widest rounded-full">KRITISK OMRÅDE</span>
        </div>
        
        <h2 className="text-4xl font-bold text-center tracking-tighter mb-6 text-[#002B5B]">
          Kreativitet
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 text-center">
          <p className="text-2xl font-semibold mb-8">
            Fra ca. 90 % kreative i børnehaven<br />
            til kun ca. 10 % i gymnasiet<br />
            og helt ned til 2 % som voksne.
          </p>
          
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Vores uddannelsessystem kvæler systematisk divergent tænkning og kreativitet. 
            Det er ikke kun et uddannelsesproblem – det er et samfundsproblem.
          </p>
          
          <p className="text-sm text-gray-500 mt-10">
            Kilde: George Land &amp; Beth Jarman (1968–1992), longitudinal studie med 1.600 børn.<br />
            Populært formidlet af Sir Ken Robinson i hans TED Talk “Do schools kill creativity?” (2006).
          </p>
        </div>
      </section>

      <ConcreteAreas />

      {/* Demokrati 2.0 sektion */}
      <section id="demokrati-2-0" className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-200">
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
            I filmen <strong>Idiokrati</strong> bliver samfundet dumt, fordi ingen længere tænker kritisk. 
            I George Orwells <strong>1984</strong> bliver samfundet kontrolleret og livløst, fordi kreativiteten og den frie tanke er systematisk udryddet.
          </p>
          
          <p className="font-semibold text-center text-lg my-8 text-[#002B5B]">
            Vi prioriterer der, hvor ændringer skaber mest effekt – ikke bare mest opmærksomhed.
          </p>
          
          <p>
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
              <h4 className="font-semibold mb-2">Axium</h4>
              <p className="text-gray-600">Nogle få grundlæggende regler der aldrig må forhandles væk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Støt projektet */}
      <div className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100 bg-white">
        <div className="bg-[#002B5B] text-white rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-semibold mb-3">Vil du hjælpe med at gøre Danmark mere gennemsigtigt?</h3>
          <p className="text-[#E30613] text-xl mb-8">Støt projektet med det beløb du synes er rigtigt</p>
          <a 
            href="https://opencollective.com/synlighed-nu" 
            target="_blank"
            className="inline-block bg-white text-[#002B5B] hover:bg-[#E30613] hover:text-white px-10 py-5 rounded-2xl text-2xl font-semibold transition-colors"
          >
            Støt projektet nu →
          </a>
        </div>
      </div>

      <Footer />

      {/* Modal */}
      {modal && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setModal(null)}
        >
          <div 
            className="bg-white max-w-md w-full mx-4 rounded-3xl p-8 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-4">{modal.title}</h3>
            <p className="text-gray-600 leading-relaxed">{modal.text}</p>
            <button 
              onClick={() => setModal(null)}
              className="mt-8 w-full py-4 bg-[#002B5B] text-white rounded-2xl font-medium hover:bg-[#001B3D]"
            >
              Luk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}