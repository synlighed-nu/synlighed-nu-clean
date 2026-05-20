import React from 'react';

export default function SynlighedNu() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#002B5B] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">👁</span>
            </div>
            <div>
              <div className="font-bold text-xl">Synlighed.nu</div>
              <div className="text-xs text-gray-500 -mt-1">Hurtigere. Bedre. Billigere.</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://x.com/SynlighedNu" target="_blank" className="text-sm font-medium hover:underline">Følg på X</a>
            <a href="https://opencollective.com/synlighed-nu" target="_blank" 
               className="bg-[#002B5B] text-white px-5 py-2 rounded-xl text-sm font-semibold">
              Støt projektet
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="pt-20 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block bg-[#002B5B] text-white text-sm px-4 py-1 rounded-full mb-4">
          Borgerdrevet initiativ
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Synlighed først.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Vi bruger milliarder af skattekroner hver dag — men de fleste kan ikke se, hvor pengene går hen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#deja-vu" className="bg-[#002B5B] text-white px-8 py-3 rounded-2xl font-semibold text-lg hover:bg-[#001a3d] transition">
            Se problemerne
          </a>
          <a href="https://x.com/SynlighedNu" target="_blank" className="border border-[#002B5B] px-8 py-3 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition">
            Følg på X
          </a>
        </div>
      </div>

      {/* DÉJÀ VU */}
      <div id="deja-vu" className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">DÉJÀ VU</div>
            <h2 className="text-4xl font-bold">Vi har hørt det før</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">De samme løfter. De samme problemer. År efter år.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Billig strøm", desc: "Centraliserede elkabler skaber ikke billig el. Lokal produktion kan give op til 25% besparelse." },
              { title: "Rent drikkevand", desc: "Pesticidrester i over halvdelen af boringerne. Vi renser i stedet for at beskytte." },
              { title: "Billige boliger", desc: "Boligstøtte holder priserne kunstigt høje. De unge kommer ikke ind på markedet." },
              { title: "Billig transport", desc: "DSB skal producere sin egen strøm lokalt. Det er den eneste vej til reel billigere transport." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border">
                <div className="text-2xl mb-3">⚠️</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUNDHED */}
      <div className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">SUNDHEDSVÆSENET</div>
            <h2 className="text-4xl font-bold leading-tight">280 milliarder kr. om året</h2>
          </div>
          <div className="md:col-span-3 text-gray-600 text-lg">
            Stort fokus på medicin og behandling, men forholdsvis lidt på forebyggelse. 
            Vi behandler symptomer i stedet for at løse årsagerne.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#002B5B] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Vil du være med?</h2>
        <p className="max-w-md mx-auto mb-8 text-gray-300">Følg med på X og støt projektet, så vi kan gøre offentlig økonomi gennemsigtig.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://x.com/SynlighedNu" target="_blank" className="bg-white text-[#002B5B] px-8 py-3 rounded-2xl font-semibold">Følg på X</a>
          <a href="https://opencollective.com/synlighed-nu" target="_blank" className="border border-white px-8 py-3 rounded-2xl font-semibold">Støt på Open Collective</a>
        </div>
      </div>

      <footer className="text-center py-8 text-sm text-gray-500">
        Synlighed.nu — Et borgerdrevet initiativ for mere gennemsigtighed i det offentlige.
      </footer>
    </div>
  );
}