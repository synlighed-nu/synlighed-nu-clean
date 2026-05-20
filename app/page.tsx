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
               className="bg-[#002B5B] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#001a3d] transition">
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
          Vi bruger hundreder af milliarder af skattekroner hvert eneste år.<br />
          Alligevel ved de fleste danskere ikke, hvor pengene går hen — eller hvad vi reelt får for dem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#deja-vu" className="bg-[#002B5B] text-white px-8 py-3 rounded-2xl font-semibold text-lg hover:bg-[#001a3d] transition">
            Se problemerne
          </a>
          <a href="#bliv-med" className="border border-[#002B5B] px-8 py-3 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition">
            Bliv en del af det
          </a>
        </div>
      </div>

      {/* HVORFOR SYNLIGHED? */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Hvorfor Synlighed?</h2>
        <div className="space-y-5 text-lg text-gray-700">
          <p>
            Vi bruger hundreder af milliarder af skattekroner hvert eneste år. 
            Penge der kommer fra din og min løn, fra virksomheder og fra vores fælles velfærd.
          </p>
          <p>Alligevel ved de fleste danskere ikke:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hvor præcist pengene går hen</li>
            <li>Hvad vi reelt får for dem</li>
            <li>Hvilke alternativer og trade-offs der findes</li>
            <li>Hvem der reelt tjener på beslutningerne</li>
          </ul>
          <p>
            Det skaber et system, hvor politikere og embedsmænd kan gemme sig bag fine ord, 
            symbolpolitik og uigennemsigtige kompromisser — mens de rigtige problemer vokser.
          </p>
          <p className="font-medium text-[#002B5B]">
            Synlighed.nu er et initiativ for fuld offentlig gennemsigtighed over alle offentlige udgifter.
          </p>
        </div>
      </div>

      {/* DÉJÀ VU */}
      <div id="deja-vu" className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[#E30613] font-semibold tracking-[3px] text-sm mb-2">DÉJÀ VU</div>
            <h2 className="text-4xl font-bold">Vi har hørt det før</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">De samme problemer. De samme løfter. År efter år.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Billig strøm", desc: "En stor motorvej af elkabler skaber ikke billig el. Lokal produktion kan give op til 25% besparelse." },
              { title: "Rent drikkevand", desc: "Pesticidrester findes i over halvdelen af boringerne. Vi renser i stedet for at beskytte grundvandet." },
              { title: "Billige boliger", desc: "Boligstøtte holder priserne kunstigt høje. De unge uden velhavende forældre holdes ude af markedet." },
              { title: "Billig transport", desc: "DSB køber strøm på markedet i stedet for at producere den lokalt. Det gør transporten unødvendigt dyr." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border">
                <div className="text-2xl mb-3">⚠️</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOLIGSTØTTE */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-5">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">BOLIG</div>
            <h3 className="text-3xl font-bold leading-tight">Boligstøtte – en skrue uden ende</h3>
          </div>
          <div className="md:col-span-7 text-gray-700 space-y-4 text-[15px] leading-relaxed">
            <p>Ca. 592.000 husstande modtager boligstøtte for milliarder af kroner årligt. På overfladen lyder det som en god ordning. Men mekanismen bag er et klassisk eksempel på, hvordan gode intentioner kan forstærke det problem, de skulle løse.</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Støtten holder efterspørgslen kunstigt høj</li>
              <li>Høj efterspørgsel driver priserne yderligere op</li>
              <li>De unge uden velhavende forældre bliver holdt ude af markedet</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ENERGI */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t bg-gray-50">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-5">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">ENERGI</div>
            <h3 className="text-3xl font-bold leading-tight">En stor motorvej af elkabler skaber ikke billig el</h3>
          </div>
          <div className="md:col-span-7 text-gray-700 space-y-4 text-[15px] leading-relaxed">
            <p>Når strømmen skal transporteres over lange afstande, går der betydelige mængder tabt i nettet. Ved at producere strømmen lokalt kan vi reducere det samlede energibehov med op til 25 %.</p>
            <p>Alligevel prioriterer vi massive centraliserede projekter. Vi erstatter robust, lokal infrastruktur med centraliseret, sårbar og dyr infrastruktur.</p>
          </div>
        </div>
      </div>

      {/* SUNDHED */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-5">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">SUNDHED</div>
            <h3 className="text-3xl font-bold leading-tight">280 milliarder kr. om året – behandling frem for forebyggelse</h3>
          </div>
          <div className="md:col-span-7 text-gray-700 space-y-4 text-[15px] leading-relaxed">
            <p>Offentlige sundhedsudgifter ligger på ca. 280 milliarder kroner årligt. Alligevel går langt størstedelen til behandling, når sygdommen først er opstået — ikke til reel forebyggelse.</p>
            <p>Vi har skabt et system, der er ekstremt dygtigt til at behandle sygdom, men kun middelmådigt til at forebygge den.</p>
          </div>
        </div>
      </div>

      {/* REKLAME OG SYGDOM */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t bg-gray-50">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-5">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">REKLAME & SYGDOM</div>
            <h3 className="text-3xl font-bold leading-tight">Vi forbyder cigaretter – men ikke ultraforarbejdet mad</h3>
          </div>
          <div className="md:col-span-7 text-gray-700 space-y-4 text-[15px] leading-relaxed">
            <p>Vi forbyder reklame for cigaretter og alkohol, men tillader massiv markedsføring af ultraforarbejdede produkter fyldt med sukker, salt og fedt.</p>
            <p>Vi behandler symptomerne med 280 milliarder kroner årligt, mens vi samtidig giver industrien fri adgang til at skabe efterspørgsel efter de produkter, der gør os syge.</p>
          </div>
        </div>
      </div>

      {/* RENT DRIKKEVAND */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-5">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">DRIKKEVAND</div>
            <h3 className="text-3xl font-bold leading-tight">Vi forurener vores egen kilde</h3>
          </div>
          <div className="md:col-span-7 text-gray-700 space-y-4 text-[15px] leading-relaxed">
            <p>Pesticidrester findes i over halvdelen af alle undersøgte boringer. Vi bruger milliarder på at rense vand, mens vi samtidig tillader massiv sprøjtning, der forurener grundvandet.</p>
            <p>Vi betaler dobbelt: Først for at forurene kilden, bagefter for at rense det op.</p>
          </div>
        </div>
      </div>

      {/* OFFENTLIG TRANSPORT */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t bg-gray-50">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-5">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">TRANSPORT</div>
            <h3 className="text-3xl font-bold leading-tight">Vi gør offentlig transport dyrere – ikke billigere</h3>
          </div>
          <div className="md:col-span-7 text-gray-700 space-y-4 text-[15px] leading-relaxed">
            <p>Vi mangler fokus på det mest grundlæggende: Hvordan gør vi offentlig transport billigere – ikke dyrere?</p>
            <p>DSB køber strøm på det volatile elmarked i stedet for at producere en stor del lokalt. Lokal strømproduktion er den eneste realistiske vej til reel billigere transport.</p>
          </div>
        </div>
      </div>

      {/* KREATIVITET / UDDANNELSE */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-5">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">UDDANNELSE</div>
            <h3 className="text-3xl font-bold leading-tight">Vi uddanner kreativiteten ud af børnene</h3>
          </div>
          <div className="md:col-span-7 text-gray-700 space-y-4 text-[15px] leading-relaxed">
            <p>Ca. 90 % af børn i børnehavealderen scorer på genius-niveau i divergent tænkning. Når de når gymnasiet, er det kun ca. 10 %. Som voksne er tallet under 2 %.</p>
            <p>Skolesystemet belønner én rigtig svar-kultur og konformitet frem for fri leg, eksperimenteren og kritisk tænkning.</p>
            <p className="font-medium">Kreativitet er ikke en luksus. Det er en forudsætning for et frit og funktionelt demokrati.</p>
          </div>
        </div>
      </div>

      {/* MEDIERNES ROLLE */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t bg-gray-50">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-5">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">MEDIERNE</div>
            <h3 className="text-3xl font-bold leading-tight">Uden synlighed bliver det svært at stille de rigtige spørgsmål</h3>
          </div>
          <div className="md:col-span-7 text-gray-700 space-y-4 text-[15px] leading-relaxed">
            <p>Når store beslutninger og milliarder af kroner forbliver uigennemsigtige, risikerer den politiske journalistik at blive præget af gentagelser frem for reel kontrol.</p>
            <p className="font-medium">Synlighed er en forudsætning for god journalistik. Uden adgang til klare data bliver det svært at stille de rigtige spørgsmål.</p>
          </div>
        </div>
      </div>

      {/* DEMOKRATI 2.0 */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-start">
          <div className="md:col-span-5">
            <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">DEMOKRATI</div>
            <h3 className="text-3xl font-bold leading-tight">Demokrati 2.0 – vi må udvikle det, ellers taber vi det</h3>
          </div>
          <div className="md:col-span-7 text-gray-700 space-y-4 text-[15px] leading-relaxed">
            <p>Det gamle demokrati er blevet misbrugt, fordi vi har ladet det stå stille. Vi har brug for at opgradere det med synlighed, agil reasoning og klare grundprincipper.</p>
            <p>Uden denne udvikling risikerer vi at glide videre mod idiokrati – et samfund styret af laveste fællesnævner og kortsigtede interesser.</p>
          </div>
        </div>
      </div>

      {/* FØRSTE SKRIDT */}
      <div className="max-w-5xl mx-auto px-6 py-16 border-t bg-gray-50">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-[#E30613] font-semibold tracking-widest text-sm mb-2">FØRSTE SKRIDT</div>
          <h3 className="text-3xl font-bold">En åben platform for fuld synlighed</h3>
        </div>
        <div className="max-w-4xl mx-auto bg-white border rounded-3xl p-8">
          <h4 className="font-semibold text-xl mb-4">AI som neutral medspiller</h4>
          <p className="text-gray-700">Platformen skal ikke kun vise tal. Den skal fungere som en neutral hjælper, hvor du kan stille spørgsmål som:</p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
            <li>“Hvor meget bruger vi på X, og hvad får vi egentlig for det?”</li>
            <li>“Hvad sker der, hvis vi flytter penge fra Y til Z?”</li>
          </ul>
        </div>
      </div>

      {/* CTA - BLIV EN DEL AF DET */}
      <div id="bliv-med" className="bg-[#002B5B] text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Vil du være med?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Hvis du også er træt af, at vi ikke kan gennemskue, hvor pengene går hen – så følg med.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://x.com/SynlighedNu" target="_blank" className="bg-white text-[#002B5B] px-8 py-3.5 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">Følg på X</a>
            <a href="https://opencollective.com/synlighed-nu" target="_blank" className="border border-white px-8 py-3.5 rounded-2xl font-semibold text-lg hover:bg-white/10 transition">Støt projektet</a>
          </div>
          <p className="mt-8 text-sm text-gray-400">Hurtigere. Bedre. Billigere. — Det er ikke bare et slogan.</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-gray-500 border-t">
        Synlighed.nu — Et borgerdrevet initiativ for mere gennemsigtighed i det offentlige.
      </footer>
    </div>
  );
}