import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FrequencyDemo } from './components/FrequencyDemo';
import { Footer } from './components/Footer';
import { SeoPage } from './components/SeoPage';
import { FrequencyAiPage } from './components/FrequencyAiPage';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash.replace('#', '');
      if (path) setCurrentView(path);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'seo':
        return <SeoPage setView={setCurrentView} />;
      case 'frequency-ai':
        return <FrequencyAiPage setView={setCurrentView} />;
      case 'services':
        return (
          <div className="pt-20">
            <Services setView={setCurrentView} />
            <div className="bg-slate-900/50 py-24 border-t border-white/5">
               <div className="container mx-auto px-6 text-center">
                 <h2 className="text-4xl font-display font-bold text-white mb-8">Ready for full automation?</h2>
                 <button onClick={() => setCurrentView('contact')} className="px-10 py-5 bg-brand-600 text-white font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]">Generate Your AI Strategy</button>
               </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="pt-20 bg-brand-dark min-h-screen">
            <FrequencyDemo isFullPage={true} setView={setCurrentView} />
          </div>
        );
      default:
        return (
          <>
            <Hero setView={setCurrentView} />
            <Services setView={setCurrentView} />
            <FrequencyDemo setView={setCurrentView} />
            
            <section id="contact-cta" className="py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
              <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">
                  Ready to increase your <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">marketing frequency?</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                  Join the top 1% of San Antonio businesses using AI to outperform the competition. Book your free audit today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button 
                    onClick={() => setCurrentView('contact')}
                    className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
                  >
                    Start Your Free Audit
                  </button>
                  <a 
                    href="tel:+12104091921"
                    className="px-10 py-5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/5 transition-colors"
                  >
                    Call (210) 409-1921
                  </a>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen text-slate-200 font-sans selection:bg-brand-500/30 selection:text-brand-100 scroll-smooth">
      <Header currentView={currentView} setView={setCurrentView} />
      <main>
        {renderView()}
      </main>
      <Footer setView={setCurrentView} />
    </div>
  );
}

export default App;