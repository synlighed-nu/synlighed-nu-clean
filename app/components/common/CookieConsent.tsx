'use client';

import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  // Åbn banneret når man klikker på den lille knap
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openCookieBanner', handleOpen);
    return () => window.removeEventListener('openCookieBanner', handleOpen);
  }, []);

  const closeBanner = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[10000] flex items-end md:items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold tracking-tighter mb-4">Cookie-indstillinger</h2>
              <p className="text-gray-600 mb-8">
                Vi bruger cookies til at forbedre din oplevelse. 
                Du kan vælge hvilke du accepterer.
              </p>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Nødvendige cookies</p>
                    <p className="text-sm text-gray-500">Kræves for at siden fungerer</p>
                  </div>
                  <span className="text-green-600 font-medium">AltID aktiveret</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Statistiske cookies</p>
                    <p className="text-sm text-gray-500">Hjælper os med at forbedre siden</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#002B5B]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex border-t">
              <button
                onClick={closeBanner}
                className="flex-1 py-5 text-[#002B5B] font-medium hover:bg-gray-100 transition"
              >
                Afvis alle
              </button>
              <button
                onClick={closeBanner}
                className="flex-1 py-5 bg-[#002B5B] text-white font-medium hover:bg-[#001B3D] transition"
              >
                Accepter alle
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}