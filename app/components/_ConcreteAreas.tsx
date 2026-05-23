'use client';

import React from 'react';

interface ConcreteAreasProps {
  showExplanation: (title: string, text: string) => void;
}

export default function ConcreteAreas({ showExplanation }: ConcreteAreasProps) {
  const areas = [
    { 
      title: "Boligstøtte", 
      desc: "Ca. 592.000 husstande modtager boligstøtte for milliarder årligt. Den hjælper mange i dag, men holder samtidig boligpriserne kunstigt høje og gør det svært for unge og førstegangskøbere at komme ind på markedet. Vi vil skabe et sundere boligmarked, hvor færre har brug for støtte – uden at straffe dem, der allerede er afhængige af den."
    },
    { 
      title: "Energi", 
      desc: "Lokal produktion fjerner unødvendige tab i elnettet og central infrastruktur. I et ideelt samfund med lokal energi ville vi skulle producere ca. 25 % mindre energi samlet set." 
    },
    { 
      title: "Sundhed", 
      desc: "280 mia. kr. årligt. Stort fokus på medicin og behandling – meget lidt på reel forebyggelse." 
    },
    { 
      title: "Rent drikkevand", 
      desc: "Pesticidrester findes i over halvdelen af boringerne. Vi renser i stedet for at beskytte." 
    },
    { 
      title: "Udlændingepolitik", 
      desc: "Hvad koster den samlede politik reelt – og hvilke incitamenter skaber den på lang sigt?" 
    },
    { 
      title: "Offentlig administration", 
      desc: "Hvor stor en del af pengene går til proces, kontrol og administration frem for reel værdi?" 
    }
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
            className="group border rounded-3xl p-6 hover:border-[#002B5B] hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-lg pr-4 group-hover:text-[#002B5B]">{item.title}</h4>
              <span className="text-[#002B5B] text-xl flex-shrink-0">→</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            <div className="mt-4 text-sm font-medium text-[#002B5B] flex items-center gap-1">
              Læs mere <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}