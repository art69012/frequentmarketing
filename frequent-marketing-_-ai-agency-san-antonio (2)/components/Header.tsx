import React, { useState, useEffect } from 'react';
import { Menu, X, Activity, Zap } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Frequency AI', id: 'frequency-ai' },
    { name: 'About', id: 'home' },
    { name: 'San Antonio SEO', id: 'seo' },
  ];

  const handleNav = (id: string) => {
    setView(id);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleNav('home')} className="flex items-center space-x-2 group">
          <div className="bg-brand-500/20 p-2 rounded-lg group-hover:bg-brand-500/40 transition-colors">
            <Activity className="w-8 h-8 text-brand-500" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-white">
            Frequent Marketing<span className="text-brand-500">.</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id)}
              className={`text-sm font-medium transition-colors uppercase tracking-widest ${
                currentView === link.id ? 'text-brand-500' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNav('contact')} 
            className="px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Start Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col space-y-4">
           {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id)}
              className={`text-left text-lg font-medium ${
                currentView === link.id ? 'text-brand-500' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
           <button 
            onClick={() => handleNav('contact')} 
            className="w-full text-center px-6 py-3 bg-brand-600 text-white font-bold rounded-lg"
          >
            Get Audit
          </button>
        </div>
      )}
    </header>
  );
};