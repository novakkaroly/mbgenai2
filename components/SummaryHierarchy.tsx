import React from 'react';
import { Heart, Brain, Cpu, ArrowRight } from './Icons';

export const SummaryHierarchy: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">A 21. Századi Tanulási Modell</h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          
          {/* Stage 1 */}
          <div className="flex-1 bg-orange-50 rounded-2xl p-6 border border-orange-100 flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Heart size={100} className="text-maslow" />
            </div>
            <div className="w-12 h-12 bg-maslow rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-500/30">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold text-maslow-dark mb-2">1. Az Ember (Alap)</h3>
            <p className="text-sm text-slate-600 mb-4 font-medium italic">"Biztonságban vagyok."</p>
            <ul className="space-y-2 mt-auto text-sm text-slate-700">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-maslow"></div>Szabályozott idegrendszer</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-maslow"></div>Érzelmi biztonság</li>
            </ul>
          </div>

          <div className="hidden md:flex items-center justify-center text-slate-300">
            <ArrowRight size={32} />
          </div>

          {/* Stage 2 */}
          <div className="flex-1 bg-blue-50 rounded-2xl p-6 border border-blue-100 flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Brain size={100} className="text-bloom" />
            </div>
             <div className="w-12 h-12 bg-bloom rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-bold text-bloom-dark mb-2">2. Az Értelem (Állványzat)</h3>
            <p className="text-sm text-slate-600 mb-4 font-medium italic">"Tudok gondolkodni."</p>
            <ul className="space-y-2 mt-auto text-sm text-slate-700">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-bloom"></div>Kritikus gondolkodás</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-bloom"></div>Kognitív függetlenség</li>
            </ul>
          </div>

          <div className="hidden md:flex items-center justify-center text-slate-300">
             <ArrowRight size={32} />
          </div>

          {/* Stage 3 */}
          <div className="flex-1 bg-purple-50 rounded-2xl p-6 border border-purple-100 flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={100} className="text-genai" />
            </div>
             <div className="w-12 h-12 bg-genai rounded-lg flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-500/30">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold text-genai-dark mb-2">3. Az Eszköz (Kiterjesztés)</h3>
            <p className="text-sm text-slate-600 mb-4 font-medium italic">"Felerősítem a tudásom."</p>
            <ul className="space-y-2 mt-auto text-sm text-slate-700">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-genai"></div>Kognitív tőkeáttétel</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-genai"></div>Gyors prototípus-készítés</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};