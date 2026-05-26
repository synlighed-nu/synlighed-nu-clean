'use client';

import React from 'react';

interface ConcreteAreasProps {
  showExplanation: (title: string, text: string) => void;
}

export default function ConcreteAreas({ showExplanation }: ConcreteAreasProps) {
  const areas = [
    { title: "Boligstøtte", desc: "Ca. 592.000 husstande modtager boligstøtte for milliarder årligt. Det holder priserne kunstigt høje." },
    { title: "Energi", desc: "Lokal produktion fjerner unødvendige tab. I et ideelt samfund ville vi producere ca. 25 % mindre energi." },
    { title: "Sundhed", desc: "280 mia. kr. årligt. Stort fokus på behandling – for lidt på forebyggelse." },
    { title: "Rent drikkevand", desc: "Pesticidrester i over halvdelen af boringerne. Vi renser i stedet for at beskytte." },
    { title: "Udlændingepolitik", desc: "Hvad koster den samlede politik reelt, og hvilke incitamenter skaber den?" },
    { title: "Offentlig administration", desc: "Hvor stor en del går til proces og kontrol frem for reel værdi?" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">De konkrete områder</h2>
        <p className="text-gray-600 mt-2">Tryk på et område for at læse mere.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {areas.map((item, i) => (
          <div
            key={i}
            onClick={() => showExplanation(item.title, item.desc)}
            className="group border rounded-2xl p-6 hover:border-[#002B5B] hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-lg pr-4 group-hover:text-[#002B5B]">{item.title}</h4>
              <span className="text-[#002B5B] text-xl flex-shrink-0">→</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}