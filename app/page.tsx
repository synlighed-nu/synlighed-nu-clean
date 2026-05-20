import React from 'react';

export default function SynlighedNu() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* NYT: Bruger det rene øje-logo */}
            <img 
              src="/images/logo-eye.png" 
              alt="Synlighed.nu" 
              className="h-10 w-10 object-contain"
            />
            <div>
              <div className="font-bold text-xl tracking-tighter">Synlighed.nu</div>
              <div className="text-[10px] text-gray-500 -mt-1">Hurtigere. Bedre. Billigere.</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#afstemning" className="hover:underline">Afstemning</a>
            <a href="#de-store-greb" className="hover:underline">De store greb</a>
            <a href="https://x.com/SynlighedNu" target="_blank" className="hover:underline">X</a>
            <a 
              href="https://opencollective.com/synlighed-nu" 
              target="_blank"
              className="bg-[#002B5B] hover:bg-[#001f3d] text-white px-5 py-2 rounded-xl text-sm font-semibold transition"
            >
              Støt projektet
            </a>
          </div>
        </div>
      </nav>

      {/* HERO - Bruger det fulde logo */}
      <div className="pt-20 pb-16 px-6 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/images/logo-full.png" 
            alt="Synlighed.nu - Hurtigere. Bedre. Billigere." 
            className="h-20 md:h-24 w-auto object-contain"
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-3">
          Synlighed først.
        </h1>
        
        <p className="text-2xl text-gray-600 mb-10">
          Hurtigere. Bedre. Billigere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#afstemning" className="bg-[#002B5B] hover:bg-[#001f3d] text-white px-9 py-4 rounded-2xl font-semibold text-lg transition">
            Stem på det vigtigste
          </a>
          <a href="#de-store-greb" className="border border-[#002B5B] hover:bg-gray-50 px-9 py-4 rounded-2xl font-semibold text-lg transition">
            Se de store greb
          </a>
        </div>
      </div>

      {/* Resten af siden (uændret) */}
      {/* HVORFOR SYNLIGHED? */}
      <div className="max-w-3xl mx-auto px-6 pb-16 text-center">
        <p className="text-lg text-gray-600">
          Vi bruger milliarder af skattekroner hver dag – men de fleste kan ikke se, hvor pengene går hen, 
          hvad vi får for dem, eller hvilke konsekvenser der følger med.
        </p>
      </div>

      {/* HVORFOR X? */}
      <div className="max-w-3xl mx-auto px-6 pb-12 text-center">
        <p className="text-sm text-gray-500">
          Vi bruger primært <strong>X</strong> som platform, fordi det giver den mest direkte, 
          offentlige og ufiltrerede dialog. Her kan alle se, hvad der bliver sagt – uden lukkede algoritmer. 
          Det passer bedst til projektets formål: fuld synlighed og åben reasoning.
        </p>
      </div>

      {/* AKTUEL AFSTEMNING */}
      <div id="afstemning" className="max-w-5xl mx-auto px-6 py-16 border-t">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
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

          <p className="text-gray-600 mb-8 text-center">
            Vælg dine 3 vigtigste områder. Din stemme er anonym.
          </p>

          <div className="bg-white border rounded-3xl p-8">
            <form className="space-y-6">
              {/* ... (Top 3 afstemning - uændret) ... */}
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
              {/* Gentag for 2. og 3. */}
              {/* ... (resten af formularen er uændret) ... */}
            </form>
          </div>
        </div>
      </div>

      {/* Resten af siden fortsætter som før... */}
      {/* (De store greb, De konkrete områder, Feedback, Bliv en del af det, Footer) */}

      {/* Jeg har beholdt resten af koden som i den forrige version for at holde det overskueligt */}
      {/* Hvis du vil have hele koden igen med alt, så sig bare til */}

    </div>
  );
}