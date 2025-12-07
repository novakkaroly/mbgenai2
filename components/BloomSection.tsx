import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Brain, Layers, AlertTriangle } from './Icons';

const bloomSteps = [
  { step: 1, title: 'Emlékezés', desc: 'Ismeretek felidézése', risk: 'Az AI azonnal megcsinálja helyetted.' },
  { step: 2, title: 'Megértés', desc: 'Jelentés konstruálása', risk: 'Felszínes tudás veszélye.' },
  { step: 3, title: 'Alkalmazás', desc: 'Ismeret használata új helyzetben', risk: 'Gépies végrehajtás.' },
  { step: 4, title: 'Elemzés', desc: 'Részekre bontás, kapcsolatok', risk: 'A prompt-íráshoz elengedhetetlen!' },
  { step: 5, title: 'Értékelés', desc: 'Ítéletalkotás kritériumok alapján', risk: 'A hallucinációk kiszűréséhez kritikus!' },
  { step: 6, title: 'Teremtés', desc: 'Új egész létrehozása', risk: 'Valódi innováció vagy csak remix?' },
];

export const BloomSection: React.FC = () => {
  return (
    <SectionWrapper id="bloom" className="bg-white rounded-3xl my-10 shadow-sm border border-slate-100">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-4">
          {bloomSteps.map((step) => (
            <div key={step.step} className="group relative">
              <div className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg
                 ${step.step >= 4 ? 'border-bloom bg-blue-50' : 'border-slate-200 bg-white'}`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full font-bold
                      ${step.step >= 4 ? 'bg-bloom text-white' : 'bg-slate-200 text-slate-600'}`}>
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800">{step.title}</h4>
                      <p className="text-sm text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                  {step.step >= 4 && <Brain size={20} className="text-bloom" />}
                </div>
              </div>
              
              {/* Tooltip for AI Context */}
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 hidden md:block">
                <div className="bg-slate-800 text-white text-xs p-3 rounded-lg shadow-xl relative">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-800"></div>
                  <strong className="block mb-1 text-yellow-400">AI Kockázat/Szükséglet:</strong>
                  {step.risk}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="order-1 md:order-2">
           <div className="inline-flex items-center space-x-2 bg-bloom-light/30 text-bloom-dark px-3 py-1 rounded-full text-sm font-semibold mb-4">
            <Layers size={16} />
            <span>2. Lépcső: Az Értelem</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Bloom a GenAI Előtt</h2>
          <blockquote className="text-xl italic text-slate-600 border-l-4 border-bloom pl-4 mb-6">
            "Nem tudsz hatékonyan irányítani olyasmit, amit nem értesz."
          </blockquote>
          <p className="text-lg text-slate-700 mb-6">
            Ha a diákok átugorják a Bloom-lépcsőket (különösen a Megértést és Értékelést), és rögtön az AI-val generáltatnak (Teremtés), az az <strong>"Üres Kompetencia"</strong> csapdájához vezet.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl flex items-start space-x-4">
            <AlertTriangle className="text-amber-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-amber-800 mb-1">Miért kell Bloom az AI-hoz?</h4>
              <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
                <li><strong>Prompt-írás</strong> = Elemzés (probléma lebontása).</li>
                <li><strong>Tényellenőrzés</strong> = Értékelés (hallucinációk kiszűrése).</li>
                <li><strong>Kreativitás</strong> = Szintézis (emberi szikra + gépi erő).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};