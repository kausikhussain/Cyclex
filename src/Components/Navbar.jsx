import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Volume2, VolumeX, Sparkles, MapPin } from 'lucide-react';

const Navbar = ({ activeBike, bikes, onSelectBike, onOpenPreOrder, soundEnabled, onToggleSound }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bikes', href: '#bikes' },
    { name: 'Built For India', href: '#built-for-india' },
    { name: 'Engineering', href: '#under-the-hood' },
    { name: 'Technology', href: '#technology' },
    { name: 'Delivery & RSA', href: '#delivery-support' },
    { name: 'Specs', href: '#specs' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand / Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
            onClick={() => onSelectBike(0)}
          >
            <div 
              className="w-2.5 h-7 rounded-full transition-all duration-500 group-hover:scale-y-110"
              style={{ 
                backgroundColor: activeBike.accentColor,
                boxShadow: `0 0 16px ${activeBike.accentColor}`
              }}
            />
            <div className="flex flex-col">
              <span className="font-orbitron font-black text-xl tracking-[0.25em] text-white flex items-center gap-1.5">
                SPECTRA
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeBike.accentColor }} />
              </span>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="text-[8px] font-space tracking-[0.3em] text-zinc-400 uppercase">
                  INDIA DYNAMICS
                </span>
                <span className="text-[8px] font-orbitron font-bold px-1.5 py-0.2 rounded bg-white/10 text-amber-300">
                  ₹ INR
                </span>
              </div>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 bg-zinc-900/60 backdrop-blur-lg px-6 py-2 rounded-full border border-white/10 text-xs font-medium shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors duration-200 font-space tracking-wider uppercase text-[11px] py-1 px-1"
              >
                {link.name}
              </a>
            ))}

            <span className="w-px h-3.5 bg-white/15 mx-1" />

            {/* Model Switcher inside Nav */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/5">
              {bikes.map((b, idx) => (
                <button
                  key={b.id}
                  onClick={() => onSelectBike(idx)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-orbitron font-bold transition-all duration-300 ${
                    activeBike.id === b.id
                      ? 'text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: activeBike.id === b.id ? activeBike.accentColor : 'transparent'
                  }}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            
            {/* Audio Feedback Toggle */}
            <button
              onClick={onToggleSound}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white transition-all text-xs hidden sm:flex items-center justify-center"
              title={soundEnabled ? "Audio UI enabled" : "Audio UI muted"}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-zinc-200" /> : <VolumeX className="w-3.5 h-3.5 text-zinc-500" />}
            </button>

            {/* Pre-Order CTA Button */}
            <button 
              onClick={() => onOpenPreOrder(activeBike)}
              className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-orbitron font-bold tracking-wider text-white border border-white/20 transition-all duration-300 hover:border-white/50 bg-white/5 hover:bg-white/10 shadow-lg"
              style={{
                boxShadow: scrolled ? `0 0 20px ${activeBike.accentColor}25` : 'none'
              }}
            >
              <span className="relative z-10">Pre-order ({activeBike.depositFormatted})</span>
              <ChevronRight 
                className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:translate-x-1" 
                style={{ color: activeBike.accentColor }} 
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: activeBike.accentColor }}
              />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-zinc-900 border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="flex flex-col space-y-4">
            <p className="text-[10px] font-orbitron tracking-widest text-zinc-500 uppercase">Models (India Edition)</p>
            <div className="grid grid-cols-3 gap-2">
              {bikes.map((b, idx) => (
                <button
                  key={b.id}
                  onClick={() => {
                    onSelectBike(idx);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 px-1 rounded-xl font-orbitron text-xs font-bold border transition-all ${
                    activeBike.id === b.id 
                      ? 'border-white text-black' 
                      : 'border-white/10 text-zinc-400'
                  }`}
                  style={{
                    backgroundColor: activeBike.id === b.id ? activeBike.accentColor : 'rgba(255,255,255,0.03)'
                  }}
                >
                  <div>{b.name}</div>
                  <div className="text-[9px] font-space">{b.priceFormatted}</div>
                </button>
              ))}
            </div>

            <p className="text-[10px] font-orbitron tracking-widest text-zinc-500 uppercase pt-4">Navigation</p>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-orbitron font-semibold text-zinc-300 hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPreOrder(activeBike);
            }}
            className="w-full py-4 rounded-2xl font-orbitron text-sm font-bold text-black shadow-2xl flex items-center justify-center gap-2"
            style={{ backgroundColor: activeBike.accentColor }}
          >
            <span>Pre-order {activeBike.name} ({activeBike.priceFormatted})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
