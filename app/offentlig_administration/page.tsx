import Nav from '../components/_Nav';

export default function OffentligAdministrationPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Offentlig administration</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            En stor del af de offentlige udgifter går til proces, kontrol og administration – frem for reel værdi til borgerne.
          </p>

          <p className="text-xl font-semibold text-[#E30613]">
            Vi har skabt et embed-værk i stedet for et reasoning-værk.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi gradvist ændre incitamenterne i den offentlige sektor, 
            så der belønnes resultater og reel værdiskabelse frem for proces og kontrol.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>En stor del af skattekronerne går til administration og kontrol</li>
            <li>Systemet belønner proces frem for resultater</li>
            <li>Det skaber ineffektivitet og unødvendig bureaukrati</li>
            <li>Borgerne oplever langsommelighed og ringe værdi for pengene</li>
          </ul>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a 
              href="https://rigsrevisionen.dk/" 
              target="_blank"
              className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3"
            >
              Rigsrevisionen <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}