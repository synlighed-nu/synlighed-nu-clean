import Nav from '../components/common/_Nav';
import SpeakerButton from '../components/common/_SpeakerButton';

export default function Demokrati20Page() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Demokrati 2.0</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl text-center mb-10">
            Vi ved, hvor det nuværende demokrati ender, hvis vi ikke udvikler det.
          </p>

          <p>
            I filmen <strong>
              <a href="https://da.wikipedia.org/wiki/Idiokrati" target="_blank" className="underline hover:text-[#E30613]">
                Idiokrati (2006)
              </a>
            </strong> bliver samfundet dumt, fordi ingen længere tænker kritisk.
          </p>

          <p>
            I <strong>
              <a href="https://da.wikipedia.org/wiki/1984_(roman)" target="_blank" className="underline hover:text-[#E30613]">
                George Orwells 1984 (1949)
              </a>
            </strong> bliver samfundet kontrolleret og livløst, fordi kreativiteten og den frie tanke er systematisk udryddet.
          </p>

          <p className="text-2xl font-semibold text-center my-12 text-[#002B5B]">
            Begge er advarsler om det samme.<br />
            Derfor er Demokrati 2.0 ikke en mulighed – det er en nødvendighed.
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-6">Demokrati 2.0 bygger på tre grundpiller</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold">1. Fuld synlighed</h4>
              <p className="text-gray-600">Så alle kan se, hvor skattekronerne går hen og hvilke konsekvenser beslutningerne har.</p>
            </div>
            <div>
              <h4 className="font-semibold">2. Agil reasoning</h4>
              <p className="text-gray-600">Evnen til at handle hurtigt og fornuftigt, når virkeligheden er kendt.</p>
            </div>
            <div>
              <h4 className="font-semibold">3. Axiom</h4>
              <p className="text-gray-600">Nogle få grundlæggende regler der aldrig må forhandles væk.</p>
            </div>
          </div>
        </div>
      </div>

      <SpeakerButton />
    </div>
  );
}