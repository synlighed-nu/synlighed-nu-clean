export default function AxiumPage() {
  return (
    <div className="min-h-screen bg-white text-[#002B5B] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold tracking-tighter text-center mb-12">AXIUM</h1>
        <p className="text-center text-xl text-gray-600 mb-16">
          Her samler vi de vigtigste kilder, studier og genveje<br />
          til de emner vi arbejder med.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Du kan udvide med flere kort senere */}
          <a href="https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity" target="_blank" className="block bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition">
            <h3 className="font-semibold text-xl mb-2">Kreativitet & uddannelse</h3>
            <p className="text-gray-600">Sir Ken Robinson – Do schools kill creativity? (2006)</p>
          </a>

          <a href="https://en.wikipedia.org/wiki/Idiocracy" target="_blank" className="block bg-white border border-gray-200 hover:border-[#002B5B] rounded-3xl p-8 transition">
            <h3 className="font-semibold text-xl mb-2">Idiokrati</h3>
            <p className="text-gray-600">Filmen der viser hvad der sker, når kritisk tænkning forsvinder</p>
          </a>
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-gray-500">Flere genveje kommer løbende</p>
        </div>
      </div>
    </div>
  );
}