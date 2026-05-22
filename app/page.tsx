'use client';

import React, { useState } from 'react';

export default function SynlighedNu() {
  const [modal, setModal] = useState<{ title: string; text: string } | null>(null);

  const showExplanation = (title: string, text: string) => {
    setModal({ title, text });
  };

  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-semibold text-2xl tracking-tighter">Synlighed.nu</div>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#afstemning" className="hover:text-[#002B5B]/80 transition">Afstemning</a>
            <a href="#de-store-greb" className="hover:text-[#002B5B]/80 transition">De store greb</a>
            <a href="https://x.com/SynlighedNu" target="_blank" className="hover:text-[#002B5B]/80 transition">X</a>
            <a href="https://opencollective.com/synlighed-nu" target="_blank" className="bg-[#002B5B] hover:bg-[#001f3d] text-white px-5 py-2 rounded-xl text-sm font-semibold transition">
              Støt projektet
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="pt-24 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">Synlighed først.</h1>
          <p className="text-2xl text-gray-600 mb-10">Hurtigere. Bedre. Billigere.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#afstemning" className="bg-[#002B5B] hover:bg-[#001f3d] text-white px-9 py-4 rounded-2xl font-semibold text-lg transition">Stem på det vigtigste</a>
            <a href="#de-store-greb" className="border border-[#002B5B] hover:bg-gray-50 px-9 py-4 rounded-2xl font-semibold text-lg transition">Se de store greb</a>
          </div>
        </div>
      </div>

      {/* HVORFOR SYNLIGHED */}
      <div className="max-w-3xl mx-auto px-6 py-16 text-center bg-white">
        <p className="text-lg text-gray-600 leading-relaxed">
          Vi bruger milliarder af skattekroner hver dag – men de fleste kan ikke se, hvor pengene går hen, hvad vi får for dem, eller hvilke konsekvenser der følger med.
        </p>
      </div>

      {/* HVORFOR X */}
      <div className="max-w-3xl mx-auto px-6 pb-12 text-center bg-white">
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          Vi bruger primært <strong>X</strong> som platform, fordi det giver den mest direkte, offentlige og ufiltrerede dialog. 
          Det passer bedst til projektets formål: fuld synlighed og{' '}
          <span onClick={() => showExplanation("Agil reasoning", "At tænke og handle hurtigt og fornuftigt. I stedet for at bruge måneder på at diskutere noget, tager vi beslutninger hurtigt – men altid med god begrundelse. Som en god håndværker, der løser problemer på stedet i stedet for at vente på en stor rapport.")} className="cursor-pointer text-[#002B5B] underline decoration-dotted hover:text-[#001f3d]">
            agil reasoning
          </span>.
        </p>
      </div>

      {/* AFSTEMNING */}
      <div id="afstemning" className="max-w-5xl mx-auto px-6 py-16 border-t bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-[#E30613] font-semibold tracking-[2px] text-sm mb-1">AFSTEMNING • RUNDE 1</div>
              <h2 className="text-4xl font-bold tracking-tight">Hvad mener du er vigtigst?</h2>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Lukker om</div>
              <div className="text-2xl font-semibold text-[#002B5B]">58 dage</div>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">1.248 stemmer afgivet i denne runde</span>
            </div>
          </div>

          <p className="text-gray-600 mb-8">Vælg dine 3 vigtigste områder. Din stemme er anonym.</p>

          <div className="bg-white border rounded-3xl p-8">
            <form className="space-y-6">
              {/* 1. Vigtigst */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">1. Vigtigst</label>
                <select className="w-full border border-gray-300 rounded-2xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]">
                  <option value="">Vælg område...</option>
                  <option>Boligstøtte – omkostninger og konsekvenser</option>
                  <option>Energi – lokal vs. central produktion</option>
                  <option>Sundhed – behandling vs. forebyggelse</option>
                  <option>Rent drikkevand – beskyttelse vs. oprensning</option>
                  <option>Udlændingepolitik – omkostninger og incitamenter</option>
                  <option>Kreativitet og uddannelse</option>
                  <option>Offentlig administration – incitamenter og effektivitet</option>
                </select>
              </div>

              {/* 2. Næst-vigtigst */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">2. Næst-vigtigst</label>
                <select className="w-full border border-gray-300 rounded-2xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]">
                  <option value="">Vælg område...</option>
                  <option>Boligstøtte – omkostninger og konsekvenser</option>
                  <option>Energi – lokal vs. central produktion</option>
                  <option>Sundhed – behandling vs. forebyggelse</option>
                  <option>Rent drikkevand – beskyttelse vs. oprensning</option>
                  <option>Udlændingepolitik – omkostninger og incitamenter</option>
                  <option>Kreativitet og uddannelse</option>
                  <option>Offentlig administration – incitamenter og effektivitet</option>
                </select>
              </div>

              {/* 3. Tredje-vigtigst */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">3. Tredje-vigtigst</label>
                <select className="w-full border border-gray-300 rounded-2xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]">
                  <option value="">Vælg område...</option>
                  <option>Boligstøtte – omkostninger og konsekvenser</option>
                  <option>Energi – lokal vs. central produktion</option>
                  <option>Sundhed – behandling vs. forebyggelse</option>
                  <option>Rent drikkevand – beskyttelse vs. oprensning</option>
                  <option>Udlændingepolitik – omkostninger og incitamenter</option>
                  <option>Kreativitet og uddannelse</option>
                  <option>Offentlig administration – incitamenter og effektivitet</option>
                </select>
              </div>

              <button type="submit" className="mt-4 w-full bg-[#002B5B] hover:bg-[#001f3d] text-white py-4 rounded-2xl font-semibold text-lg transition active:scale-[0.985]">
                Afgiv din stemme
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* VORES PRIORITERING */}
      <div className="max-w-3xl mx-auto px-6 py-12 border-t text-center bg-white">
        <h3 className="text-xl font-semibold mb-3">Vores nuværende prioritering</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Selvom afstemningen er vigtig, prioriterer vi også ud fra hvor vi kan skabe størst systemisk effekt hurtigst. 
          Vi viser både folkets stemme og vores begrundelse – altid med åben{' '}
          <span onClick={() => showExplanation("Agil reasoning", "At tænke og handle hurtigt og fornuftigt. I stedet for at bruge måneder på at diskutere noget, tager vi beslutninger hurtigt – men altid med god begrundelse.")} className="cursor-pointer text-[#002B5B] underline decoration-dotted">agil reasoning</span>.
        </p>
      </div>

      {/* DE STORE GREB */}
      <div id="de-store-greb" className="max-w-5xl mx-auto px-6 py-16 border-t bg-gray-50">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-[#E30613] font-semibold tracking-[2px] text-sm mb-2">DE STORE GREB</div>
          <h2 className="text-4xl font-bold tracking-tight">De fundamentale problemer</h2>
          <p className="text-gray-600 mt-3">Mange problemer har de samme rodårsager. Her er de store greb, der går igen.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Incitamenter", desc: "Systemet belønner ofte proces og administration frem for resultater." },
            { title: "Centralisering", desc: "Store centrale løsninger skaber afhængighed og høje omkostninger." },
            { title: "Forebyggelse vs. behandling", desc: "Vi bruger langt flere penge på at reparere end på at undgå problemer." },
            { title: "Mangel på synlighed", desc: "Uden klar indsigt i omkostninger og konsekvenser kan vi ikke træffe gode beslutninger." }
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DE KONKRETE OMRÅDER */}
      <div className="max-w-5xl mx-auto px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">De konkrete områder</h2>
          <p className="text-gray-600 mt-2">Tryk på et område for at læse mere.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Boligstøtte", desc: "Ca. 592.000 husstande modtager boligstøtte for milliarder årligt. Det holder priserne kunstigt høje." },
            { title: "Energi", desc: "Lokal produktion fjerner unødvendige tab i elnettet og central infrastruktur. I et ideelt samfund med lokal energi ville vi skulle producere ca. 25 % mindre energi samlet set." },
            { title: "Sundhed", desc: "280 mia. kr. årligt. Stort fokus på medicin og behandling – meget lidt på reel forebyggelse." },
            { title: "Rent drikkevand", desc: "Pesticidrester findes i over halvdelen af boringerne. Vi renser i stedet for at beskytte." },
            { title: "Udlændingepolitik", desc: "Hvad koster den samlede politik reelt – og hvilke incitamenter skaber den på lang sigt?" },
            { title: "Kreativitet & uddannelse", desc: "Fra 90 % kreative i børnehaven til kun ca. 10 % i gymnasiet. Systemet kvæler divergent tænkning." },
            { title: "Offentlig administration", desc: "Hvor stor en del af pengene går til proces, kontrol og administration frem for reel værdi?" }
          ].map((item, i) => (
            <a key={i} href="#" className="group border rounded-2xl p-6 active:bg-gray-50 transition block">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg pr-4 group-active:text-[#002B5B]">{item.title}</h4>
                <span className="text-[#002B5B] text-xl flex-shrink-0">→</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              <div className="mt-4 text-sm font-medium text-[#002B5B] flex items-center gap-1">
                Læs mere <span className="text-lg">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FEEDBACK & DIALOG */}
      <div className="max-w-3xl mx-auto px-6 py-12 border-t text-center bg-white">
        <h3 className="text-xl font-semibold mb-3">Feedback & Dialog</h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto mb-4">
          Alle er velkomne til at give feedback og deltage i dialogen – uanset om du støtter økonomisk eller ej. Skriv direkte til os på X.
        </p>
        <a href="https://x.com/SynlighedNu" target="_blank" className="inline-block border border-[#002B5B] px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
          Skriv til os på X
        </a>
      </div>

      {/* BLIV EN DEL AF DET */}
      <div className="max-w-3xl mx-auto px-6 py-16 border-t text-center bg-white">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Bliv en del af det</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Følg os på X, deltag i afstemningerne og støt projektet, hvis du tror på mere synlighed og bedre beslutninger.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://x.com/SynlighedNu" target="_blank" className="border border-[#002B5B] px-8 py-3.5 rounded-2xl font-semibold hover:bg-gray-50 transition">Følg på X</a>
          <a href="https://opencollective.com/synlighed-nu" target="_blank" className="bg-[#002B5B] text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-[#001f3d] transition">Støt på Open Collective</a>
        </div>
      </div>

      {/* FOOTER MED VERSION */}
      <footer className="border-t py-8 text-center text-xs text-gray-500 bg-white">
        Synlighed.nu — Hurtigere. Bedre. Billigere.<br />
        Initiativ til agil reasoning og fuld offentlig synlighed i Danmark.
        <div className="mt-4 text-[10px] text-gray-400">
          Version: 22. maj 2025 – v2 (med ?-forklaringer)
        </div>
      </footer>

      {/* MODAL TIL ?-FORKLARINGER */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]" onClick={() => setModal(null)}>
          <div className="bg-white max-w-md w-full mx-4 rounded-3xl p-8 shadow-xl" onClick={e => e.stopImmediatePropagation()}>
            <h3 className="text-xl font-semibold mb-3">{modal.title}</h3>
            <p className="text-gray-600 leading-relaxed">{modal.text}</p>
            <button onClick={() => setModal(null)} className="mt-6 w-full py-3 bg-[#002B5B] text-white rounded-2xl font-medium">Luk</button>
          </div>
        </div>
      )}
    </div>
  );
}