import React from 'react';
import { ArrowRight, BarChart2, Cpu, MapPin, Radio } from 'lucide-react';

interface HeroProps {
  setView: (view: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Frequency AI v3.0 Live
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white">
            Amplify Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-300 to-brand-500">Frequency.</span> <br />
            Dominate <span className="text-brand-500">Search.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            San Antonio's #1 AI Marketing Agency. We use <strong>Frequency AI</strong> to synchronize your brand's signal with high-intent customers, delivering SEO dominance and automated lead generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => setView('contact')}
              className="group px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)]"
            >
              Try Frequency AI
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setView('contact')}
              className="px-8 py-4 glass-card text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Book Strategy Call
            </button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 text-slate-500 text-sm font-medium border-t border-white/5">
            <span className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-500" /> Proprietary AI Models
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-500" /> San Antonio HQ
            </span>
            <span className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-brand-500" /> High-Frequency SEO
            </span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative hidden lg:block perspective-1000">
          <div className="relative z-10 glass-card rounded-2xl p-1 border border-white/10 shadow-2xl shadow-brand-500/10 animate-float">
             <div className="bg-slate-950 rounded-xl overflow-hidden relative">
                {/* Header of fake app */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-slate-900/50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="text-[10px] text-brand-500 font-mono tracking-widest uppercase">Frequency_AI_Main_Dash</div>
                </div>
                
                {/* Body of fake app */}
                <div className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-1 p-4 rounded-lg bg-brand-900/20 border border-brand-500/20">
                       <div className="text-xs text-slate-400 mb-1">Local Visibility</div>
                       <div className="text-2xl font-bold text-white">+428%</div>
                       <div className="h-1 w-full bg-brand-900/50 mt-2 rounded-full overflow-hidden">
                         <div className="h-full bg-brand-500 w-3/4"></div>
                       </div>
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-slate-800/50 border border-white/5">
                       <div className="text-xs text-slate-400 mb-1">AI Interactions</div>
                       <div className="text-2xl font-bold text-white">12.5k</div>
                    </div>
                  </div>

                  <div className="h-48 rounded-lg bg-gradient-to-br from-slate-900 to-brand-950 border border-white/5 p-4 relative overflow-hidden group">
                     {/* Animated Chart Line */}
                     <svg className="absolute bottom-0 left-0 w-full h-full text-brand-500 opacity-20" preserveAspectRatio="none">
                       <path d="M0,100 L20,80 L40,90 L60,40 L80,50 L100,10 L100,100 Z" fill="currentColor" />
                     </svg>
                     <svg className="absolute bottom-0 left-0 w-full h-full text-brand-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" preserveAspectRatio="none">
                       <path d="M0,100 L20,80 L40,90 L60,40 L80,50 L100,10" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                     </svg>
                     
                     <div className="absolute top-4 left-4 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                       <span className="text-xs font-mono text-brand-300">LIVE DATA FEED</span>
                     </div>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-12 -right-8 w-40 glass-card p-4 rounded-xl border-l-4 border-brand-500 animate-[float_5s_ease-in-out_infinite] shadow-xl">
             <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Market Share</div>
             <div className="text-2xl font-bold text-white">Dominant</div>
          </div>
          
          <div className="absolute -bottom-8 -left-8 glass-card p-4 rounded-xl flex items-center gap-3 animate-[float_7s_ease-in-out_infinite] shadow-xl" style={{ animationDelay: '1s' }}>
             <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
               <Cpu className="w-5 h-5" />
             </div>
             <div>
               <div className="text-sm font-bold text-white">AI Active</div>
               <div className="text-xs text-brand-300">Processing...</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};