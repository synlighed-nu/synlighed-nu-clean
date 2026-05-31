'use client';

import React from 'react';

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => {
        // Her åbner du senere din cookie-banner / modal
        alert('Cookie-indstillinger åbner her (skal erstattes med din rigtige banner)');
        // Senere: window.dispatchEvent(new Event('openCookieBanner'));
      }}
      className="fixed bottom-6 left-6 z-[100] flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-300 bg-white shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all active:scale-95"
      title="Cookie-indstillinger"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#002B5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.058 11H1M12 3v2m0 16v2m9-9H15m-6 0a8 8 0 01-7.714-6.314M12 3a8 8 0 00-7.714 6.314" />
        <circle cx="18" cy="18" r="2" fill="#E30613" />
        <circle cx="9" cy="9" r="2" fill="#002B5B" />
        <circle cx="15" cy="12" r="1.5" fill="#002B5B" />
      </svg>
    </button>
  );
}