import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Zap, Brain, CheckCircle, AlertTriangle, Cpu, User } from './Icons';
import { GoogleGenAI } from '@google/genai';

export const GenAISection: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [bloomChecklist, setBloomChecklist] = useState({
    analyzed: false,
    evaluated: false,
    synthesized: false
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkApiKey = async () => {
      if ((window as any).aistudio && (window as any).aistudio.hasSelectedApiKey) {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        setHasApiKey(hasKey);
      } else {
        // Fallback for environments where window.aistudio might not be defined immediately
        setHasApiKey(!!process.env.API_KEY);
      }
    };
    checkApiKey();
  }, []);

  const handleApiKeySelect = async () => {
    if ((window as any).aistudio && (window as any).aistudio.openSelectKey) {
      await (window as any).aistudio.openSelectKey();
      // Assume success after closing the dialog to mitigate race conditions
      setHasApiKey(true);
    }
  };

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    setGeneratedContent(null);
    setBloomChecklist({ analyzed: false, evaluated: false, synthesized: false });

    try {
      // Re-instantiate client to ensure we have the latest key from the environment/browser session
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key hiányzik. Kérlek, csatlakoztasd a Gemini fiókodat.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Készíts egy nagyon rövid (max 3 mondat) órai aktivitás ötletet a következő témában: "${topic}". Legyen inspiráló, de tartalmazzon egy szándékos, apró tárgyi tévedést vagy vitatható állítást, amit a tanárnak észre kell vennie (ez a gyakorlat része). Ne jelezd külön, hogy hiba van benne, csak írd le a szöveget.`,
      });

      setGeneratedContent(response.text || "Nem érkezett válasz.");
    } catch (err) {
      setError("Hiba történt a generálás során. Kérlek, próbáld újra, vagy ellenőrizd az API kulcs jogosultságait.");
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const allChecked = bloomChecklist.analyzed && bloomChecklist.evaluated && bloomChecklist.synthesized;

  return (
    <SectionWrapper id="genai" className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl my-10 shadow-2xl overflow-hidden">
      <div className="relative z-10 p-8 md:p-12">
        <div className="inline-flex items-center space-x-2 bg-genai-light/20 text-genai-light px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-genai-light/30">
          <Cpu size={16} />
          <span>3. Lépcső: A Kiterjesztés</span>
        </div>
        
        <h2 className="text-4xl font-bold mb-6">Az Integrált Hierarchia Demo</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl">
          Próbáld ki a helyes sorrendet! Kérj az AI-tól egy órai aktivitás ötletet, de ne feledd: 
          <strong> az AI generál, de TE értékelsz.</strong>
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Area */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 relative overflow-hidden">
            
            {/* Auth Wall Overlay */}
            {!hasApiKey && (
              <div className="absolute inset-0 z-20 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
                <AlertTriangle className="text-yellow-400 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">Gemini Fiók Szükséges</h3>
                <p className="text-slate-300 mb-6 max-w-xs">
                  A funkció használatához be kell jelentkezned a Gemini API-ba. A generálás az Ön saját fiókját használja.
                </p>
                <button 
                  onClick={handleApiKeySelect}
                  className="bg-genai hover:bg-genai-dark text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-purple-500/30 flex items-center gap-2"
                >
                  <User size={18} />
                  Fiók Összekapcsolása
                </button>
                <div className="mt-4 text-xs text-slate-500">
                  <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 underline">
                    Információ a számlázásról
                  </a>
                </div>
              </div>
            )}

            <label className="block text-sm font-medium text-slate-300 mb-2">Téma (pl. A Fotoszintézis, A Római Birodalom)</label>
            <div className="flex gap-2 mb-4">
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={!hasApiKey || isGenerating}
                placeholder="Írj be egy témát..."
                className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-genai focus:outline-none disabled:opacity-30"
              />
              <button 
                onClick={handleGenerate}
                disabled={!hasApiKey || isGenerating || !topic}
                className="bg-genai hover:bg-genai-dark disabled:opacity-30 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-bold transition-all flex items-center space-x-2"
              >
                {isGenerating ? <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"/> : <Zap size={20} />}
                <span>Generálás</span>
              </button>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            
            <p className="text-xs text-slate-400 mt-4 border-t border-white/10 pt-4">
              A demó a Google Gemini 2.5 Flash modellt használja. A generált tartalom tartalmazhat hibákat (ez a demó célja is!).
            </p>
          </div>

          {/* Output & Evaluation Area */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-700 relative min-h-[300px]">
             {!generatedContent ? (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                 <Brain size={48} className="mb-4 opacity-20" />
                 <p>Írj be egy témát az AI aktiválásához.</p>
               </div>
             ) : (
               <div className="space-y-6 animate-fadeIn">
                 <div>
                   <h3 className="text-genai-light text-xs uppercase font-bold tracking-widest mb-2">AI Asszisztens (Gemini)</h3>
                   <p className="text-slate-200 leading-relaxed italic bg-slate-900/50 p-4 rounded-lg border-l-2 border-genai">
                     "{generatedContent}"
                   </p>
                 </div>

                 <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                   <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                     <AlertTriangle size={18} className="text-yellow-400" />
                     Pedagógus Ellenőrző Lista (Bloom)
                   </h4>
                   <p className="text-xs text-slate-300 mb-3">Az AI szándékosan tehetett hibát a szövegbe. Ellenőrizd!</p>
                   
                   <div className="space-y-2">
                     <label className="flex items-center space-x-3 cursor-pointer group">
                       <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${bloomChecklist.analyzed ? 'bg-green-500 border-green-500' : 'border-slate-500'}`}>
                         {bloomChecklist.analyzed && <CheckCircle size={14} className="text-white" />}
                       </div>
                       <input type="checkbox" className="hidden" onChange={() => setBloomChecklist(prev => ({...prev, analyzed: !prev.analyzed}))} />
                       <span className="text-sm text-slate-300 group-hover:text-white transition-colors"><strong>Elemzés:</strong> A téma releváns a tantervhez?</span>
                     </label>

                     <label className="flex items-center space-x-3 cursor-pointer group">
                       <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${bloomChecklist.evaluated ? 'bg-green-500 border-green-500' : 'border-slate-500'}`}>
                         {bloomChecklist.evaluated && <CheckCircle size={14} className="text-white" />}
                       </div>
                       <input type="checkbox" className="hidden" onChange={() => setBloomChecklist(prev => ({...prev, evaluated: !prev.evaluated}))} />
                       <span className="text-sm text-slate-300 group-hover:text-white transition-colors"><strong>Értékelés:</strong> Tényszerű és mentes a hallucinációtól?</span>
                     </label>

                     <label className="flex items-center space-x-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${bloomChecklist.synthesized ? 'bg-green-500 border-green-500' : 'border-slate-500'}`}>
                         {bloomChecklist.synthesized && <CheckCircle size={14} className="text-white" />}
                       </div>
                       <input type="checkbox" className="hidden" onChange={() => setBloomChecklist(prev => ({...prev, synthesized: !prev.synthesized}))} />
                       <span className="text-sm text-slate-300 group-hover:text-white transition-colors"><strong>Szintézis:</strong> Hozzáadtam a saját pedagógiai stílusomat?</span>
                     </label>
                   </div>

                   <div className={`mt-4 text-center p-2 rounded transition-all ${allChecked ? 'bg-green-500/20 text-green-300' : 'bg-slate-800 text-slate-500'}`}>
                     {allChecked ? "Készen áll az órai használatra! ✅" : "Végezd el a kognitív ellenőrzést az AI használata előtt."}
                   </div>
                 </div>
               </div>
             )}
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-genai rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
    </SectionWrapper>
  );
};