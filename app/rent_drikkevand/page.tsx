import Nav from '../components/_Nav';

export default function RentDrikkevandPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B]">
      <Nav simple />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Rent drikkevand</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-2xl font-medium">
            Pesticidrester findes i over halvdelen af alle boringer.
          </p>
          
          <p>
            Vi bruger milliarder af kroner på oprensning og nye boringer i stedet for at beskytte grundvandet mod sprøjtning.
          </p>

          <p className="text-xl font-semibold text-[#E30613]">
            Vi forurener vores egen drikkevands-kilde – og betaler dyrt for at rense den bagefter.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Et bedre alternativ</h3>
          <p>
            Over de næste 5 år kan vi gradvist indføre strengere beskyttelse af grundvandet og reducere brugen af pesticider, 
            samtidig med at vi sikrer bedre lokal håndtering af drikkevand.
          </p>

          <h3 className="text-xl font-semibold mt-12 mb-4">Hvorfor er det et problem i dag?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Pesticider forurener vores drikkevand</li>
            <li>Vi renser i stedet for at forebygge</li>
            <li>Det koster milliarder i oprensning og nye boringer</li>
            <li>Vi risikerer langsigtede helbredseffekter for befolkningen</li>
          </ul>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8">
            <p className="font-medium text-[#002B5B]">Officiel kilde:</p>
            <a 
              href="https://www.geus.dk/" 
              target="_blank"
              className="text-[#002B5B] hover:underline flex items-center gap-2 mt-3"
            >
              GEUS – Geologisk Undersøgelse <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}