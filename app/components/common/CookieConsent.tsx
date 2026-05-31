'use client';

import React, { useState } from 'react';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  const openBanner = () => setIsOpen(true);
  const closeBanner = () => setIsOpen(false);

  return (
    <>
      {/* Den lille knap nederst til venstre på alle sider */}
      <button
        onClick={openBanner}
        className="fixed bottom-6 left-6 z-[9999] flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-300 bg-white shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all active:scale-95"
        title="Cookie-indstillinger"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#002B5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.058 11H1M12 3v2m0 16v2m9-9H15" />
          <circle cx="18" cy="18" r="2" fill="#E30613" />
          <circle cx="9" cy="9" r="2" fill="#002B5B" />
        </svg>
      </button>

      {/* Cookie Banner / Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[10000] flex items-end md:items-center justify-center">
          <div className="bg-white w-full max-w-lg mx-4 md:mx-0 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold tracking-tighter mb-4">Cookie-indstillinger</h2>
              <p className="text-gray-600 mb-8">
                Vi bruger cookies til at forbedre din oplevelse på siden. 
                Du kan vælge hvilke typer du accepterer.
              </p>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Nødvendige cookies</p>
                    <p className="text-sm text-gray-500">Kræves for at siden fungerer</p>
                  </div>
                  <div className="text-green-600 font-medium">Aktiveret</div>
                </div>

                <div className="flex items-center justify-between">
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