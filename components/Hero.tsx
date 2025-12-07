import React from 'react';
import { Layers } from './Icons';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white pb-20 pt-32 px-4 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-maslow rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-bloom rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s'}}></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-genai rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 animate-fadeIn">
          <Layers size={18} className="text-bloom-light" />
          <span className="text-sm font-medium tracking-wide">Az új pedagógiai "műveleti sorrend"</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight font-serif">
          <span className="text-maslow-light">Maslow</span>, <br className="md:hidden" />
          <span className="text-bloom-light">Bloom</span> és a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-genai-light to-purple-400">GenAI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
          Hogyan integráljuk a Mesterséges Intelligenciát anélkül, hogy elveszítenénk az Embert és az Értelmet?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('maslow')}
            className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-lg cursor-pointer"
          >
            Kezdés az Alapoknál
          </button>
          <button 
            onClick={() => scrollToSection('genai')}
            className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-lg font-bold hover:bg-white/10 transition-colors backdrop-blur-sm cursor-pointer"
          >
            Ugrás az AI Demóhoz
          </button>
        </div>
      </div>
    </div>
  );
};