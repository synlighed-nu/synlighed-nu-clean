import Nav from '../components/_Nav';
import Link from 'next/link';

export default function UdlaendingepolitikPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-[#002B5B] hover:text-[#001B3D] font-medium mb-8 group">
          ← Tilbage til forsiden
        </Link>
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Udlændingepolitik</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Hvad koster den samlede politik reelt – og hvilke incitamenter skaber den på lang sigt?
          </p>
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a href="https://uibm.dk/" target="_blank" className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3">
              Udlændinge- og Integrationsministeriet <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}