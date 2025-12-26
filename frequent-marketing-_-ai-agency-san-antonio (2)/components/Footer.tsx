import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Cpu } from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const handleNav = (view: string) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-brand-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <button onClick={() => handleNav('home')} className="flex items-center space-x-2 mb-6 group">
              <div className="bg-brand-500/20 p-2 rounded-lg group-hover:bg-brand-500/40 transition-colors">
                <Cpu className="w-6 h-6 text-brand-500" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-white">
                Frequent Marketing<span className="text-brand-500">.</span>
              </span>
            </button>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              The #1 AI Marketing Agency in San Antonio, Texas. We combine <strong>Frequency AI</strong> technology with elite SEO strategies to help local businesses dominate their market share.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white hover:border-brand-500 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Services</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors">Frequency AI Automation</button></li>
              <li><button onClick={() => handleNav('seo')} className="hover:text-brand-500 transition-colors">San Antonio Local SEO</button></li>
              <li><button onClick={() => handleNav('frequency-ai')} className="hover:text-brand-500 transition-colors">AI Engine Overview</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors">High-Frequency PPC</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><button onClick={() => handleNav('frequency-ai')} className="hover:text-brand-500 transition-colors">About Frequency AI</button></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Client Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>
                  <strong className="text-white block">San Antonio Headquarters</strong>
                  123 Tech District Blvd, Suite 400<br/>San Antonio, TX 78205
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="mailto:arthurval210@gmail.com" className="hover:text-white transition-colors">arthurval210@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="tel:+12104091921" className="hover:text-white transition-colors">(210) 409-1921</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
          <p>&copy; {new Date().getFullYear()} Frequent Marketing. Built with Frequency AI.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};