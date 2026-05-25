'use client';

import React from 'react';
import Link from 'next/link';

export default function ConcreteAreas() {
  const areas = [
    { title: "Boligstøtte", desc: "Ca. 592.000 husstande modtager boligstøtte for milliarder årligt. Den hjælper mange i dag, men holder samtidig boligpriserne kunstigt høje.", href: "/boligstotte" },
    { title: "Energi", desc: "Lokal produktion fjerner unødvendige tab i elnettet. I et ideelt samfund ville vi skulle producere ca. 25 % mindre energi samlet set.", href: "/energi" },
    { title: "Sundhed", desc: "280 mia. kr. årligt. Stort fokus på medicin og behandling – meget lidt på reel forebyggelse.", href: "/sundhed" },
    { title: "Rent drikkevand", desc: "Pesticidrester findes i over halvdelen af boringerne. Vi renser i stedet for at beskytte.", href: "/rent_drikkevand" },
    { title: "Udlændingepolitik", desc: "Hvad koster den samlede politik reelt – og hvilke incitamenter skaber den på lang sigt?", href: "/udlaendingepolitik" },
    { title: "Offentlig administration", desc: "Hvor stor en del af pengene går til proces, kontrol og administration frem for reel værdi?", href: "/offentlig_administration" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">De konkrete områder</h2>
        <p className="text-gray-600 mt-2">Tryk på et område for at læse mere.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {areas.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="group border rounded-3xl p-8 hover:border-[#002B5B] hover:shadow-md transition-all block"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-semibold text-xl group-hover:text-[#002B5B]">{item.title}</h4>
              <span className="text-[#002B5B] text-3xl leading-none mt-1">→</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}