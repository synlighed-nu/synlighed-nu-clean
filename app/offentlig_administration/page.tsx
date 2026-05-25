import Nav from '../components/_Nav';
import Link from 'next/link';

export default function OffentligAdministrationPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Offentlig administration</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Hvor stor en del af pengene går til proces, kontrol og administration frem for reel værdi?
          </p>
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a href="https://rigsrevisionen.dk/" target="_blank" className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3">
              Rigsrevisionen <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}