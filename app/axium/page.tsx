export default function AxiumPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold tracking-tighter text-center mb-4">AXIUM</h1>
        <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Her samler vi de vigtigste kilder og genveje til de konkrete områder.<br />
          Fakta, statistik og officielle rapporter – ét klik væk.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Boligstøtte */}
          <a href="https://www.dst.dk/da/Statistik/emner/levevilkaar/boligforhold/boligstoette" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Boligstøtte</h3>
            <p className="text-gray-600 mb-6">Ca. 592.000 husstande modtager boligstøtte for milliarder årligt.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">
              Danmarks Statistik <span className="text-xl">↗</span>
            </div>
          </a>

          {/* Energi */}
          <a href="https://ens.dk/" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Energi</h3>
            <p className="text-gray-600 mb-6">Lokal produktion vs. central infrastruktur og nettab.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">
              Energistyrelsen <span className="text-xl">↗</span>
            </div>
          </a>

          {/* Sundhed */}
          <a href="https://www.sst.dk/" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Sundhed</h3>
            <p className="text-gray-600 mb-6">280 mia. kr. årligt – fokus på behandling frem for forebyggelse.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">
              Sundhedsstyrelsen <span className="text-xl">↗</span>
            </div>
          </a>

          {/* Rent drikkevand */}
          <a href="https://www.geus.dk/" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Rent drikkevand</h3>
            <p className="text-gray-600 mb-6">Pesticider i grundvandet – beskyttelse vs. oprensning.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">
              GEUS – Geologisk Undersøgelse <span className="text-xl">↗</span>
            </div>
          </a>

          {/* Udlændingepolitik */}
          <a href="https://uibm.dk/" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Udlændingepolitik</h3>
            <p className="text-gray-600 mb-6">Samlede omkostninger og incitamenter på lang sigt.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">
              Udlændinge- og Integrationsministeriet <span className="text-xl">↗</span>
            </div>
          </a>

          {/* Offentlig administration */}
          <a href="https://rigsrevisionen.dk/" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Offentlig administration</h3>
            <p className="text-gray-600 mb-6">Hvor stor en del går til proces og kontrol frem for reel værdi?</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">
              Rigsrevisionen <span className="text-xl">↗</span>
            </div>
          </a>

        </div>

        <div className="text-center mt-16 text-sm text-gray-500">
          Flere genveje og dybdegående kilder tilføjes løbende
        </div>
      </div>
    </div>
  );
}