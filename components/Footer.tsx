import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4 text-lg font-serif italic text-slate-300">
          "Biztosítsd az embert, építsd fel az értelmet, majd erősítsd fel a potenciált."
        </p>
        <p className="text-sm">
          Az oldal az "Oktatási hármas" cikk alapján készült. | Powered by Google Gemini
        </p>
      </div>
    </footer>
  );
};