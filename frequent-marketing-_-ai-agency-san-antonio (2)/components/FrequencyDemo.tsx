import React, { useState, useEffect } from 'react';
import { Sparkles, Send, Loader2, MapPin, User, Building2, BarChart3, AlertCircle, Clock, Lock, Mail, Phone, Unlock, CheckCircle, ArrowLeft, CheckSquare, Square } from 'lucide-react';
import { generateMarketingStrategy } from '../services/geminiService';
import { AiToolResponse } from '../types';

interface FrequencyDemoProps {
  isFullPage?: boolean;
  setView?: (view: string) => void;
}

export const FrequencyDemo: React.FC<FrequencyDemoProps> = ({ isFullPage, setView }) => {
  const [customerName, setCustomerName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  
  // Lead Capture State
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState<{ [key: string]: boolean }>({
    seo: false,
    ai_info: false,
    new_website: false,
    ai_teaching: false,
    consulting: false
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<AiToolResponse | null>(null);
  
  // Locking Logic State
  const [timeLeft, setTimeLeft] = useState(15);
  const [isLocked, setIsLocked] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Timer Effect
  useEffect(() => {
    let interval: any;
    
    if (result && !isUnlocked && !isLocked) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsLocked(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [result, isUnlocked, isLocked]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !businessType || !customerName) return;

    setIsLoading(true);
    setResult(null);
    setIsLocked(false);
    setIsUnlocked(false);
    setTimeLeft(15);

    const response = await generateMarketingStrategy(businessName, businessType, customerName);
    setResult(response);
    setIsLoading(false);
  };

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !customerName) return;

    setIsSubmitting(true);

    const selectedServices = Object.entries(services)
      .filter(([_, value]) => value)
      .map(([key, _]) => key.replace('_', ' ').toUpperCase())
      .join(', ');

    try {
      const response = await fetch('https://formspree.io/f/mgowobgo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: customerName,
          email: email,
          phone: phone,
          business: businessName,
          industry: businessType,
          interested_services: selectedServices || 'None selected',
          _subject: `New Frequency AI Lead: ${customerName}`
        })
      });

      if (response.ok) {
        setIsUnlocked(true);
        setIsLocked(false);
      } else {
        // Fallback for demo purposes if fetch fails
        setIsUnlocked(true);
        setIsLocked(false);
      }
    } catch (error) {
      setIsUnlocked(true);
      setIsLocked(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleService = (id: string) => {
    setServices(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const serviceOptions = [
    { id: 'seo', label: 'SEO Services' },
    { id: 'ai_info', label: 'More info about AI' },
    { id: 'new_website', label: 'New Website Build' },
    { id: 'ai_teaching', label: 'AI Training / Education' },
    { id: 'consulting', label: 'Business Consulting' },
  ];

  return (
    <section id="ai-demo" className={`${isFullPage ? 'py-12 md:py-24' : 'py-24'} relative bg-slate-900/50`}>
      <div className="container mx-auto px-6">
        {isFullPage && setView && (
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-slate-500 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </button>
        )}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Generate Audit <span className="gradient-text">& Strategy</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            See how our proprietary AI analyzes your San Antonio business niche to generate high-conversion strategies in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Input Panel */}
          <div className="glass-card p-8 rounded-2xl border border-brand-500/20 h-fit shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-display">
              <Sparkles className="text-brand-500" />
              Intelligence Input
            </h3>
            
            <form onSubmit={handleGenerate} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Business Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g., Alamo Heights Coffee"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Industry / Niche</label>
                <div className="relative">
                  <BarChart3 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g., Artisan Coffee Shop"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-slate-800/50 p-3 rounded-xl border border-white/5 font-mono">
                 <MapPin className="w-3 h-3 text-brand-500" />
                 Target Region: <span className="text-brand-300">San Antonio, TX</span>
              </div>

              <button
                type="submit"
                disabled={isLoading || !businessName || !businessType || !customerName}
                className="w-full bg-gradient-to-r from-brand-600 to-brand-accent hover:from-brand-500 hover:to-brand-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-500/25 group text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Crunching Local Data...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Run Frequency Audit
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Output Panel */}
          <div className="relative min-h-[600px]">
             {!result && !isLoading && (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 border-2 border-dashed border-slate-700 rounded-2xl bg-slate-800/20 px-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-sm font-display uppercase tracking-widest">Awaiting Engine Input</p>
                  <p className="text-xs mt-2 max-w-[250px]">Complete the form to generate your AI-powered marketing roadmap for the San Antonio market.</p>
               </div>
             )}

             {isLoading && (
               <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-slate-800/20 border border-slate-700">
                  <div className="w-full max-w-xs space-y-6 px-8">
                    <div className="flex justify-between text-xs text-brand-400 uppercase tracking-widest font-bold font-display">
                      <span>Analyzing San Antonio</span>
                      <span className="animate-pulse">Active...</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-mono">
                          <span>Competitor Mapping</span>
                          <span>68%</span>
                        </div>
                        <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-500 animate-[width_1.5s_ease-in-out_infinite]" style={{width: '60%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-mono">
                          <span>Ad Saturation</span>
                          <span>42%</span>
                        </div>
                        <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-accent animate-[width_2s_ease-in-out_infinite] delay-100" style={{width: '40%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
             )}

             {result && (
               <div className="relative h-full">
                 <div className={`h-full glass-card p-6 md:p-8 rounded-2xl border border-brand-500/30 overflow-y-auto animate-[fadeIn_0.5s_ease-out] flex flex-col gap-6 transition-all duration-500 ${isLocked ? 'blur-md opacity-50 select-none overflow-hidden' : ''} shadow-2xl`}>
                   
                   <div className="border-b border-white/10 pb-4 flex justify-between items-start">
                     <div>
                       <h3 className="text-2xl font-display font-bold text-white">
                         Hello, <span className="text-brand-400">{customerName}</span>.
                       </h3>
                       <p className="text-slate-400 text-sm mt-1">Audit complete for <span className="text-white font-bold">{businessName}</span>.</p>
                     </div>
                     {!isUnlocked && (
                       <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold border ${timeLeft < 5 ? 'bg-red-500/10 border-red-500 text-red-400 animate-pulse' : 'bg-brand-500/10 border-brand-500/30 text-brand-400'}`}>
                         <Clock className="w-3 h-3" />
                         {timeLeft}s
                       </div>
                     )}
                     {isUnlocked && (
                       <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-green-500/10 border border-green-500/30 text-green-400">
                         <Unlock className="w-3 h-3" />
                         PERMANENT UNLOCK
                       </div>
                     )}
                   </div>

                   <div className="bg-slate-800/40 p-5 rounded-xl border border-white/5">
                     <h4 className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-brand-500 font-bold mb-3">
                       <AlertCircle className="w-3 h-3" />
                       Market Intelligence
                     </h4>
                     <p className="text-sm text-slate-300 leading-relaxed font-light">{result.oversight}</p>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-brand-900/20 p-4 rounded-xl border border-brand-500/20">
                        <div className="text-[10px] text-brand-300 uppercase tracking-widest font-bold mb-1">Local Competition</div>
                        <div className="text-2xl font-bold text-white">{result.competitor_count}</div>
                        <div className="text-[10px] text-slate-500 mt-1 uppercase">Businesses Indexed</div>
                      </div>
                      <div className="bg-brand-accent/10 p-4 rounded-xl border border-brand-accent/20">
                        <div className="text-[10px] text-purple-300 uppercase tracking-widest font-bold mb-1">Ad Saturation</div>
                        <div className="text-sm font-medium text-white leading-tight mt-1">{result.paid_ad_insights}</div>
                      </div>
                   </div>

                   <div>
                     <h4 className="text-[10px] uppercase tracking-[0.2em] text-brand-500 font-bold mb-2">AI Strategy Protocol</h4>
                     <p className="text-white leading-relaxed font-medium">{result.strategy}</p>
                   </div>

                   <div className="space-y-4 pt-2">
                     <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Ad Headlines (High-CTR)</h4>
                        <div className="space-y-2">
                          {result.headlines.map((headline, i) => (
                            <div key={i} className="px-3 py-2 bg-slate-900/80 rounded-lg border-l-2 border-brand-500 text-xs md:text-sm text-slate-200">
                              "{headline}"
                            </div>
                          ))}
                        </div>
                     </div>

                     <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">Semantic Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.keywords.map((kw, i) => (
                            <span key={i} className="px-2 py-1 bg-white/5 text-slate-300 text-[10px] rounded-lg border border-white/10 font-mono">
                              #{kw.replace(/\s+/g, '_')}
                            </span>
                          ))}
                        </div>
                     </div>
                   </div>
                 </div>

                 {isLocked && (
                   <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
                     <div className="bg-slate-900/95 backdrop-blur-xl border border-brand-500/50 p-8 rounded-3xl shadow-2xl w-full max-w-md text-center transform scale-100 animate-[fadeIn_0.3s_ease-out] overflow-y-auto max-h-[90vh]">
                       <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                         <Lock className="w-8 h-8 text-brand-500" />
                         <div className="absolute top-0 right-0 w-4 h-4 bg-brand-glow rounded-full animate-pulse border-2 border-slate-900"></div>
                       </div>
                       
                       <h3 className="text-2xl font-display font-bold text-white mb-2">Audit Session Expired</h3>
                       <p className="text-slate-400 mb-6 text-sm">
                         To unlock your full roadmap and choose your growth services, please complete your profile.
                       </p>

                       <form onSubmit={handleUnlock} className="space-y-4 text-left">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Full Name</label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input 
                                  required
                                  type="text" 
                                  value={customerName}
                                  onChange={(e) => setCustomerName(e.target.value)}
                                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:border-brand-500 outline-none"
                                />
                              </div>
                           </div>
                           <div>
                              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Work Email</label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input 
                                  required
                                  type="email" 
                                  placeholder="name@company.com"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:border-brand-500 outline-none"
                                />
                              </div>
                           </div>
                         </div>
                         
                         <div>
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Direct Phone</label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                              <input 
                                required
                                type="tel" 
                                placeholder="(210) 555-0123"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:border-brand-500 outline-none"
                              />
                            </div>
                         </div>

                         <div className="space-y-3 pt-2">
                            <label className="text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-2 block">I am interested in:</label>
                            <div className="grid grid-cols-1 gap-2">
                               {serviceOptions.map((opt) => (
                                 <button
                                   key={opt.id}
                                   type="button"
                                   onClick={() => toggleService(opt.id)}
                                   className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-left text-xs ${
                                     services[opt.id] 
                                       ? 'bg-brand-600/20 border-brand-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.1)]' 
                                       : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600'
                                   }`}
                                 >
                                   {services[opt.id] ? <CheckSquare className="w-4 h-4 text-brand-400" /> : <Square className="w-4 h-4" />}
                                   {opt.label}
                                 </button>
                               ))}
                            </div>
                         </div>

                         <button 
                           type="submit"
                           disabled={isSubmitting}
                           className="w-full mt-4 bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg shadow-brand-500/20"
                         >
                           {isSubmitting ? (
                             <Loader2 className="animate-spin w-4 h-4" />
                           ) : (
                             <Unlock className="w-4 h-4" />
                           )}
                           {isSubmitting ? 'Processing Requirements...' : 'Generate Final Audit & Strategy'}
                         </button>
                         
                         <p className="text-[10px] text-center text-slate-600 mt-4 font-mono uppercase">
                           Direct submission to arthurval210@gmail.com
                         </p>
                       </form>
                     </div>
                   </div>
                 )}
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};