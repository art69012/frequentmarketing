import React from 'react';
import { Search, MapPin, TrendingUp, CheckCircle, Globe, Zap, Database } from 'lucide-react';

interface SeoPageProps {
  setView: (view: string) => void;
}

export const SeoPage: React.FC<SeoPageProps> = ({ setView }) => {
  return (
    <div className="pt-32 pb-24 bg-brand-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-bold uppercase mb-6">
            San Antonio Local SEO
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Own the <span className="gradient-text">Search Results</span> in the 210.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            We don't just "do SEO." We use AI to map your business to high-intent local search frequencies, ensuring you're seen by customers from Stone Oak to Southtown.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: MapPin,
              title: "Local Map Dominance",
              desc: "Get your business in the Google Map Pack and stay there. We optimize for 'Near Me' intent."
            },
            {
              icon: TrendingUp,
              title: "Semantic AI Content",
              desc: "Our AI generates high-authority content that search engines love and humans actually read."
            },
            {
              icon: Database,
              title: "Technical Audits",
              desc: "Deep-dive technical SEO that fixes core web vitals and ensures 100% crawlability."
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border border-white/10 group hover:border-brand-500/40 transition-all">
              <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-10 md:p-16 border border-brand-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/5 blur-[100px] rounded-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Why AI SEO is Different.
              </h2>
              <div className="space-y-6">
                {[
                  "Predictive keyword analysis for emerging trends",
                  "Automated schema markup for every page",
                  "Local competitor gap analysis in real-time",
                  "High-velocity backlink acquisition strategies"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    <span className="text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setView('contact')}
                className="mt-10 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-full transition-all shadow-lg shadow-brand-500/20"
              >
                Get a Free Local SEO Audit
              </button>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-6 border border-white/5 shadow-2xl">
               <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-3">
                   <Globe className="w-5 h-5 text-brand-500" />
                   <span className="text-sm font-bold text-white font-mono">SERP_TRACKER_V1.2</span>
                 </div>
                 <span className="text-[10px] text-green-400 font-mono animate-pulse">UPDATING...</span>
               </div>
               
               <div className="space-y-4">
                 {[
                   { kw: "San Antonio Roofing", rank: "#1", change: "+12" },
                   { kw: "Best Coffee Downtown", rank: "#2", change: "+4" },
                   { kw: "Emergency Plumber SA", rank: "#1", change: "+8" },
                   { kw: "AI Marketing Agency", rank: "#1", change: "+15" },
                 ].map((row, i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-slate-800/50 rounded border border-white/5">
                     <span className="text-xs text-slate-300">{row.kw}</span>
                     <div className="flex items-center gap-4">
                       <span className="text-xs font-bold text-brand-500">{row.rank}</span>
                       <span className="text-[10px] text-green-400 font-bold">{row.change}</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};