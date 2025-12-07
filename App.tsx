import React from 'react';
import { Hero } from './components/Hero';
import { MaslowSection } from './components/MaslowSection';
import { BloomSection } from './components/BloomSection';
import { SummaryHierarchy } from './components/SummaryHierarchy';
import { GenAISection } from './components/GenAISection';
import { Footer } from './components/Footer';
import { BookOpen } from './components/Icons';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 scroll-smooth">
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 font-serif font-bold text-slate-800">
            <BookOpen className="text-bloom" />
            <span className="hidden sm:inline">Oktatási Hármas</span>
          </div>
          <div className="flex space-x-4 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('maslow')} className="hover:text-maslow transition-colors bg-transparent border-none cursor-pointer">1. Maslow</button>
            <button onClick={() => scrollToSection('bloom')} className="hover:text-bloom transition-colors bg-transparent border-none cursor-pointer">2. Bloom</button>
            <button onClick={() => scrollToSection('genai')} className="hover:text-genai transition-colors bg-transparent border-none cursor-pointer">3. GenAI</button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <SummaryHierarchy />
        <MaslowSection />
        <BloomSection />
        <GenAISection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;