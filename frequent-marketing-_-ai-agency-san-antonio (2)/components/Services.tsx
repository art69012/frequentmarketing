import React from 'react';
import { Search, Megaphone, Bot, BarChart, Target, ArrowRight, Database, MapPin, Cpu } from 'lucide-react';

interface ServicesProps {
  setView: (view: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ setView }) => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight text-white">
              The <span className="gradient-text">Frequency</span> <br /> Ecosystem.
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              We leverage proprietary <strong>Frequency AI</strong> to vibrate your brand at the exact pitch of your San Antonio audience. This isn't just marketing; it's algorithmic dominance.
            </p>
          </div>
          <button 
            onClick={() => setView('contact')}
            className="hidden md:flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-all backdrop-blur-sm border border-white/10 group"
          >
            Get Full Strategy Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Featured Service: AI Automation (Wide Card) */}
          <div className="md:col-span-2 relative group rounded-3xl p-8 overflow-hidden border border-white/10 bg-slate-900 shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] group-hover:bg-brand-500/20 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-[10px] font-mono text-brand-300 uppercase tracking-wider">
                  Frequency AI Core
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">AI Automation & Scraping</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                Deploy automated scrapers to harvest <strong>Commercial Roofing & Logistics</strong> leads 24/7. Our custom bots extract verified decision-maker data instantly.
              </p>
              <button 
                onClick={() => setView('contact')}
                className="mt-6 px-6 py-2.5 bg-brand-600/20 hover:bg-brand-600 border border-brand-600/30 text-white rounded-full text-sm font-bold transition-all"
              >
                Automate Now
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4 relative z-10">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] text-white">
                     <Database className="w-3 h-3" />
                   </div>
                 ))}
              </div>
              <div className="text-xs text-slate-500">
                <span className="text-brand-500 font-bold">14k+</span> leads processed daily
              </div>
            </div>
          </div>

          {/* Service: San Antonio SEO */}
          <div className="md:col-span-1 glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300 cursor-pointer" onClick={() => setView('seo')}>
            <div>
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">San Antonio SEO</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dominate the 210. We rank local businesses for high-intent keywords using semantic AI analysis.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-brand-500 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              Learn more <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Service: Paid Frequency */}
          <div className="md:col-span-1 glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300 cursor-pointer" onClick={() => setView('contact')}>
            <div>
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">Paid Frequency</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Algorithmic ad management for Google & Meta. Real-time bid frequency adjustments.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-brand-500 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              Optimize Ads <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Service: Predictive Analytics (Wide) */}
          <div className="md:col-span-2 glass-card glass-card-hover rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 group transition-all duration-300 cursor-pointer" onClick={() => setView('contact')}>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Predictive Analytics</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Stop guessing. Our AI predicts customer behavior before it happens, allowing for proactive campaign adjustments and higher ROI.
              </p>
            </div>
             <div className="hidden sm:block w-32 h-32 rounded-full border border-white/10 relative shrink-0">
                 <div className="absolute inset-2 rounded-full border border-dashed border-brand-500/30 animate-spin-slow"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-brand-500 font-mono text-xs">
                   ROI +400%
                 </div>
             </div>
          </div>

          {/* Service: Hyper-Local Targeting (Full Width Bottom) */}
          <div className="md:col-span-3 glass-card glass-card-hover rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 group transition-all duration-300 cursor-pointer" onClick={() => setView('contact')}>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Hyper-Local Targeting</h3>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                From Stone Oak to Southtown, we use geofencing and location-based data frequencies to target customers when they are most likely to buy within the San Antonio metro area.
              </p>
            </div>
            <div className="w-full md:w-64 h-24 rounded-2xl bg-slate-800/50 border border-white/5 relative overflow-hidden flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="w-16 h-16 rounded-full border-2 border-brand-500/30 animate-ping absolute"></div>
              <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center backdrop-blur-sm z-10 text-white">
                <MapPin className="w-4 h-4 text-brand-500" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};