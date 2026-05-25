import Nav from '../components/_Nav';
import Link from 'next/link';

export default function SundhedPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-[#002B5B] hover:text-[#001B3D] font-medium mb-8 group">
          ← Tilbage til forsiden
        </Link>
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Sundhed</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            280 mia. kr. årligt. Stort fokus på medicin og behandling.
          </p>
          <p>
            Meget lidt på reel forebyggelse af sygdom.
          </p>
          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Penge bruges primært på at reparere i stedet for at forebygge</li>
            <li>Medicinindustrien har stor indflydelse på prioriteringer</li>
            <li>Forebyggelse giver både bedre sundhed og store besparelser</li>
          </ul>
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a href="https://www.sst.dk/vidensbase/forebyggelse/forebyggelsespakker-og-undersoegelser/forebyggelses-pakker-til-kommunerne" target="_blank" className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3">
              Sundhedsstyrelsen – Forebyggelsespakker <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}