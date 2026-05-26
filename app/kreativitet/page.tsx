import Nav from '../components/_Nav';
import SpeakerButton from '../components/_SpeakerButton';

export default function KreativitetPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Kreativitet</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            I børnehaven er næsten 90 procent af børnene kreative.
          </p>
          <p>
            Når de forlader gymnasiet, er det kun 10 procent.<br />
            Som voksne er det nede på omkring 2 procent.
          </p>

          <p className="text-xl font-semibold text-[#E30613] mt-10">
            Vores uddannelsessystem kvæler kreativiteten.
          </p>

          <p>
            Det er ikke et lille problem.<br />
            Det er et samfundsproblem.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Et stærkt eksempel</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <a 
              href="https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" 
              target="_blank"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-[#002B5B] text-white rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">▶</div>
              <div>
                <p className="font-semibold group-hover:text-[#002B5B]">Sir Ken Robinson – Do schools kill creativity?</p>
                <p className="text-sm text-gray-600">TED Talk fra 2006</p>
              </div>
            </a>
          </div>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvad kan vi gøre?</h3>
          <p>
            Vi kan ændre skolesystemet, så det belønner kreativ tænkning i stedet for at straffe den.
          </p>
        </div>
      </div>

      <SpeakerButton />
    </div>
  );
}