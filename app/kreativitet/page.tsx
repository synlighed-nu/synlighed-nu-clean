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
            I børnehaven er næsten 98 procent af børnene kreative på "genius-niveau".
          </p>
          
          <p>
            Når de forlader gymnasiet, er det kun omkring 10 procent.<br />
            Som voksne er det nede på cirka 2 procent.
          </p>

          <p className="text-xl font-semibold text-[#E30613] mt-10">
            Vores uddannelsessystem kvæler kreativiteten systematisk.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Undersøgelsen</h3>
          <p>
            Dette stammer fra en berømt longitudinal undersøgelse af George Land og Beth Jarman.<br />
            I 1968 testede de 1.600 børn på 4-5 år i divergent tænkning.<br />
            98 procent scorede på "genius-niveau".
          </p>
          <p>
            De fulgte børnene gennem skolesystemet – og gentog testen.
          </p>

          <p className="mt-8">
            Resultatet er nedslående: Skolesystemet straffer divergent tænkning og belønner konvergent tænkning (én rigtig løsning).
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