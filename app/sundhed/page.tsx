import Nav from '../components/_Nav';

export default function SundhedPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Sundhed</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Offentlige sundhedsudgifter ligger på ca. <strong>280 milliarder kroner årligt</strong>.
          </p>
          
          <p>
            Der er stort fokus på medicin og behandling – men meget lidt på reel forebyggelse af sygdom.
          </p>

          <p className="text-xl font-semibold text-[#E30613]">
            Vi bruger milliarder på at reparere mennesker, vi kunne have holdt sunde.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kunne vi gradvist flytte en større del af ressourcerne fra behandling til forebyggelse. 
            Det betyder bl.a. bedre mad- og måltidsvaner i dagtilbud, skoler og på arbejdspladser, tidlig opsporing af ernæringsproblemer hos ældre og stærkere fokus på fysisk aktivitet og mentale helbred.
          </p>

          <p>
            Forebyggelse er både billigere og bedre end behandling – og det er den eneste måde at bryde den negative spiral på.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Penge bruges primært på at reparere i stedet for at forebygge</li>
            <li>Medicinindustrien har stor indflydelse på prioriteringer</li>
            <li>Forebyggelse giver både bedre sundhed og store langsigtede besparelser</li>
            <li>Systemet belønner behandling frem for sundhed</li>
          </ul>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a 
              href="https://www.sst.dk/vidensbase/forebyggelse/forebyggelsespakker-og-undersoegelser/forebyggelses-pakker-til-kommunerne" 
              target="_blank"
              className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3"
            >
              Sundhedsstyrelsen – Forebyggelsespakker <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}