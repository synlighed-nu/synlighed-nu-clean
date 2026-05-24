export default function AxiomPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold tracking-tighter text-center mb-4">AXIUM</h1>
        <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Her samler vi de vigtigste officielle kilder og genveje.<br />
          Fakta, statistik og rapporter – ét klik væk.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* 1. Boligstøtte */}
          <a href="https://www.dst.dk/da/Statistik/emner/sociale-forhold/social-stoette/boligstoette" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Boligstøtte</h3>
            <p className="text-gray-600 mb-6">Ca. 592.000 husstande modtager boligstøtte for milliarder årligt.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">Danmarks Statistik <span className="text-xl">↗</span></div>
          </a>

          {/* 2. Energi – nu meget mere præcist */}
          <a href="https://ens.dk/analyser-og-statistik/download-faerdige-kort" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Energi</h3>
            <p className="text-gray-600 mb-6">Lokal produktion vs. central infrastruktur og nettab.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">Energistyrelsen – Kort over decentral produktion <span className="text-xl">↗</span></div>
          </a>

          {/* 3. Sundhed */}
          <a href="https://www.sst.dk/vidensbase/forebyggelse/forebyggelsespakker-og-undersoegelser/forebyggelses-pakker-til-kommunerne" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Sundhed</h3>
            <p className="text-gray-600 mb-6">280 mia. kr. årligt. Stort fokus på behandling – meget lidt på reel forebyggelse.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">Sundhedsstyrelsen – Forebyggelsespakker <span className="text-xl">↗</span></div>
          </a>

          {/* 4. Rent drikkevand */}
          <a href="https://www.geus.dk/vandressourcer/vandkvalitet/grundvandskvalitet/opgoerelser" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Rent drikkevand</h3>
            <p className="text-gray-600 mb-6">Pesticidrester i over halvdelen af boringerne.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">GEUS – Opgørelser over pesticider i grundvand <span className="text-xl">↗</span></div>
          </a>

          {/* 5. Udlændingepolitik */}
          <a href="https://uibm.dk/" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Udlændingepolitik</h3>
            <p className="text-gray-600 mb-6">Samlede omkostninger og incitamenter på lang sigt.</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">Udlændinge- og Integrationsministeriet <span className="text-xl">↗</span></div>
          </a>

          {/* 6. Offentlig administration */}
          <a href="https://rigsrevisionen.dk/" target="_blank" 
             className="group bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition-all">
            <h3 className="font-semibold text-2xl mb-3">Offentlig administration</h3>
            <p className="text-gray-600 mb-6">Hvor stor en del går til proces og kontrol frem for reel værdi?</p>
            <div className="text-[#002B5B] font-medium flex items-center gap-2">Rigsrevisionen <span className="text-xl">↗</span></div>
          </a>

        </div>

        <div className="text-center mt-16 text-sm text-gray-500">
          Flere genveje og dybdegående kilder tilføjes løbende
        </div>
      </div>
    </div>
  );
}