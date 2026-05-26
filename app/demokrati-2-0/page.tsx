import Nav from '../components/_Nav';
import SpeakerButton from '../components/_SpeakerButton';

export default function Demokrati20Page() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Demokrati 2.0</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-xl text-center mb-10">
            Det gamle demokrati er ikke dårligt i sig selv.<br />
            Det er bare blevet misbrugt og ikke opdateret i over 250 år.
          </p>

          <p>
            Hvis vi ikke udvikler det, ender vi i en blanding af to dystopier:
          </p>
          <p>
            <strong>Idiokrati</strong> – hvor samfundet bliver dumt.<br />
            <strong>1984</strong> – hvor samfundet bliver kontrolleret og livløst.
          </p>

          <p className="text-2xl font-semibold text-center my-12 text-[#002B5B]">
            Derfor er Demokrati 2.0 ikke en mulighed.<br />
            Det er en nødvendighed.
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