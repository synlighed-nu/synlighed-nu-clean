'use client';

import React from 'react';

export default function ConcreteAreas({ showExplanation }) {
  const areas = [
    { 
      title: "Boligstøtte", 
      desc: "Ca. 592.000 husstande modtager boligstøtte for milliarder årligt. Det holder priserne kunstigt høje." 
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
      title: "Kreativitet & uddannelse", 
      desc: "Fra 90 % kreative i børnehaven til kun ca. 10 % i gymnasiet. Systemet kvæler divergent tænkning.",
      isClickable: true
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
        {areas.map((item, i) => {
          if (item.isClickable) {
            return (
              <div 
                key={i}
                onClick={() => showExplanation(
                  "Kreativitet & uddannelse",
                  "Fra ca. 90 % kreative i børnehaven til kun ca. 10 % i gymnasiet – og helt ned til 2 % som voksne.\n\n" +
                  "Dette viser, hvordan vores uddannelsessystem systematisk kvæler divergent tænkning og kreativitet.\n\n" +
                  "Kilde: George Land & Beth Jarman (1968–1992), longitudinal studie med 1.600 børn.\n" +
                  "Populært formidlet af Sir Ken Robinson i hans berømte TED Talk \"Do schools kill creativity?\" (2006)."
                )}
                className="group border rounded-2xl p-6 hover:shadow-md hover:border-[#002B5B] transition-all cursor-pointer"
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
            );
          }

          return (
            <a 
              key={i} 
              href="#" 
              className="group border rounded-2xl p-6 active:bg-gray-50 transition block"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg pr-4 group-active:text-[#002B5B]">{item.title}</h4>
                <span className="text-[#002B5B] text-xl flex-shrink-0">→</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              <div className="mt-4 text-sm font-medium text-[#002B5B] flex items-center gap-1">
                Læs mere <span className="text-lg">→</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}