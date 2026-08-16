import React from 'react';
import { ChevronRight } from 'lucide-react';

const Navbar = ({ activeBike, bikes, onSelectBike }) => {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between z-50 relative">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectBike(0)}>
        <div 
          className="w-3 h-8 rounded-full transition-all duration-500" 
          style={{ backgroundColor: activeBike.accentColor, boxShadow: `0 0 15px ${activeBike.accentColor}` }}
        />
        <span className="font-orbitron font-extrabold text-2xl tracking-[0.2em] text-white">
          SPECTRA
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 bg-zinc-900/60 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/10 text-sm font-medium">
        {bikes.map((bike, idx) => (
          <button
            key={bike.id}
            onClick={() => onSelectBike(idx)}
            className={`transition-all duration-300 relative py-1 px-3 rounded-full text-xs font-orbitron tracking-wider ${
              activeBike.id === bike.id 
                ? 'text-white font-bold' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {bike.name}
            {activeBike.id === bike.id && (
              <span 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full" 
                style={{ backgroundColor: activeBike.accentColor }} 
              />
            )}
          </button>
        ))}
        <span className="w-px h-4 bg-white/15" />
        <a href="#technology" className="text-zinc-400 hover:text-white transition-colors text-xs tracking-wide">Technology</a>
        <a href="#about" className="text-zinc-400 hover:text-white transition-colors text-xs tracking-wide">About</a>
        <a href="#support" className="text-zinc-400 hover:text-white transition-colors text-xs tracking-wide">Support</a>
      </div>

      {/* Action Button */}
      <button 
        className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-orbitron font-semibold tracking-wider border border-white/20 hover:border-white/40 transition-all duration-300 bg-white/5 hover:bg-white/10 group"
        style={{ borderColor: `${activeBike.accentColor}60` }}
      >
        <span>Pre-order Now</span>
        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" style={{ color: activeBike.accentColor }} />
      </button>
    </nav>
  );
};

export default Navbar;
