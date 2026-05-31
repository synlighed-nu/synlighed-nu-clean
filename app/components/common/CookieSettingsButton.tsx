'use client';

import React from 'react';

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => {
        // Senere her åbner du din rigtige cookie-banner/modal
        window.dispatchEvent(new CustomEvent('openCookieBanner'));
      }}
      className="fixed bottom-6 left-6 z-[9999] flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-300 bg-white shadow-md hover:shadow-xl hover:bg-gray-50 transition-all active:scale-95"
      title="Cookie-indstillinger"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 text-[#002B5B]" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.058 11H1M12 3v2m0 16v2m9-9H15" />
        <circle cx="18" cy="18" r="2" fill="#E30613" />
        <circle cx="9" cy="9" r="2" fill="#002B5B" />
      </svg>
    </button>
  );
}