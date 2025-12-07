import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Heart, Shield, User, AlertTriangle } from './Icons';

const levels = [
  { id: 5, label: 'Önmegvalósítás', desc: 'A bennünk rejlő potenciál elérése.', color: 'bg-maslow-dark text-white' },
  { id: 4, label: 'Elismerés', desc: 'Önbecsülés, tisztelet, státusz.', color: 'bg-orange-600 text-white' },
  { id: 3, label: 'Szeretet/Valahová tartozás', desc: 'Barátság, család, kapcsolódás.', color: 'bg-maslow text-white' },
  { id: 2, label: 'Biztonság', desc: 'Testi biztonság, foglalkoztatás, egészség.', color: 'bg-amber-500 text-white' },
  { id: 1, label: 'Fiziológiai szükségletek', desc: 'Légzés, élelem, víz, alvás.', color: 'bg-maslow-light text-amber-900' },
];

export const MaslowSection: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [isSurvivalMode, setIsSurvivalMode] = useState(false);

  return (
    <SectionWrapper id="maslow" className="relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-maslow-light/30 text-maslow-dark px-3 py-1 rounded-full text-sm font-semibold mb-4">
            <Heart size={16} />
            <span>1. Lépcső: Az Ember</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Maslow Bloom Előtt</h2>
          <blockquote className="text-xl italic text-slate-600 border-l-4 border-maslow pl-4 mb-6">
            "Nem virágozhatsz, ha csak túlélni próbálsz."
          </blockquote>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Ha egy diák éhes, fél vagy traumát él át, az agya "túlélő üzemmódba" kapcsol (harc vagy menekülés). 
            Ebben az állapotban az elülső agykéreg – ami a tanulásért felelős – blokkolva van.
          </p>
          
          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-slate-700">Tanulói Állapot Szimulátor</span>
              <button 
                onClick={() => setIsSurvivalMode(!isSurvivalMode)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${isSurvivalMode ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
              >
                {isSurvivalMode ? 'Túlélő Mód (Stressz)' : 'Biztonságos Mód (Nyugalom)'}
              </button>
            </div>
            
            <div className={`p-4 rounded-lg transition-all duration-500 ${isSurvivalMode ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'} border`}>
              <div className="flex items-start space-x-4">
                {isSurvivalMode ? <AlertTriangle className="text-red-500 mt-1" /> : <User className="text-green-600 mt-1" />}
                <div>
                  <h4 className={`font-bold ${isSurvivalMode ? 'text-red-700' : 'text-green-800'}`}>
                    {isSurvivalMode ? 'Hozzáférés Megtagadva' : 'Kognitív Kapacitás Elérhető'}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    {isSurvivalMode 
                      ? 'Az agy erőforrásai a fenyegetés elhárítására összpontosulnak. A Bloom-taxonómia szintjei elérhetetlenek.' 
                      : 'A fiziológiai és biztonsági szükségletek kielégítve. A diák készen áll a tanulásra és az alkotásra.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 mt-8 md:mt-0">
          <h3 className="text-center font-bold text-slate-400 mb-2 uppercase tracking-widest text-sm">Maslow Piramis</h3>
          {levels.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActiveLevel(lvl.id === activeLevel ? null : lvl.id)}
              className={`w-full transition-all duration-300 transform hover:scale-105 ${lvl.color} 
                ${activeLevel === lvl.id ? 'scale-110 shadow-xl ring-4 ring-offset-2 ring-orange-200' : 'shadow-md'}
                rounded-md flex flex-col items-center justify-center p-3 cursor-pointer`}
              style={{ width: `${25 + (6 - lvl.id) * 15}%` }}
            >
              <span className="font-bold text-sm md:text-base">{lvl.label}</span>
              {activeLevel === lvl.id && (
                <span className="text-xs mt-1 text-center opacity-90 animate-fadeIn">{lvl.desc}</span>
              )}
            </button>
          ))}
          <p className="text-xs text-slate-400 mt-4 text-center max-w-xs">
            Kattints a szintekre a részletekért. Az alapok nélkül a csúcs nem elérhető.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};