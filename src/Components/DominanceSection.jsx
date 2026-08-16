import React, { useState } from 'react';
import { Heart, Info, Sparkles, X, ChevronRight } from 'lucide-react';

const DominanceSection = ({ activeBike, likesCount, onLike, onOpenPreOrder, onOpenSpecs }) => {
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  return (
    <section id="dominance" className="relative min-h-[90vh] py-20 overflow-hidden flex flex-col justify-center border-t border-white/5">
      
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full blur-[180px] opacity-25 pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: Right-Aligned Editorial Title Matching Reference */}
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right mb-6 sm:mb-2">
          <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500 mb-1">
            ADAPTABLE PERFORMANCE
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            Dominance on Two Wheels
          </h2>
        </div>

        {/* Main Composition: Left Weight Tile + Center Angled Bike + Right Editorial Copy */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[520px] my-6">
          
          {/* Left Floating Card: Coral/Pink Rider Graphic Tile + 32 lbs (14.5 kg) Weight Badge */}
          <div className="lg:col-span-3 flex flex-col items-start justify-center order-2 lg:order-1 space-y-4">
            <div className="relative group w-full max-w-[260px] rounded-3xl overflow-hidden glass-panel p-4 border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl">
              
              {/* Graphic Tile (Top box) */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-rose-500/20 via-pink-600/10 to-orange-500/20 border border-white/10 flex items-center justify-center">
                <img 
                  src={activeBike.weightCard.graphic} 
                  alt="Dynamic Trail Analysis" 
                  className="w-full h-full object-cover mix-blend-screen opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-orbitron text-rose-300">
                  CHASSIS MATRIX
                </div>
              </div>

              {/* Weight Metric (Bottom box) */}
              <div className="mt-4 px-2 flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-orbitron text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {activeBike.weightCard.weight}
                  </span>
                  <span className="text-xs font-orbitron text-zinc-400 font-bold">
                    ({activeBike.weightCard.weightKg})
                  </span>
                </div>
                <span className="text-[10px] font-orbitron font-semibold tracking-[0.2em] text-zinc-500 uppercase mt-1">
                  {activeBike.weightCard.label}
                </span>
              </div>

            </div>
          </div>

          {/* Center Stage: 3/4 Perspective Bicycle + Interactive Hotspots */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2 py-6">
            
            {/* Subtle Pedestal Lighting */}
            <div 
              className="absolute w-[360px] h-[360px] rounded-full blur-[100px] opacity-35 pointer-events-none transition-all duration-700"
              style={{ backgroundColor: activeBike.accentColor }}
            />

            {/* Bicycle Frame Visual */}
            <div className="relative w-full max-w-xl aspect-[16/10] flex items-center justify-center">
              <img
                src={activeBike.angleImage || activeBike.heroImage}
                alt={`${activeBike.name} 3/4 Angle`}
                className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] transition-all duration-700 transform hover:scale-105"
              />

              {/* Interactive Hotspots Over Bike Frame */}
              {activeBike.hotspots.map((spot) => (
                <div
                  key={spot.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  <button
                    onClick={() => setSelectedHotspot(selectedHotspot?.id === spot.id ? null : spot)}
                    className="relative group w-6 h-6 rounded-full flex items-center justify-center transition-transform hover:scale-125 focus:outline-none"
                    aria-label={`Inspect ${spot.title}`}
                  >
                    <span 
                      className="absolute inset-0 rounded-full hotspot-pulse opacity-75"
                      style={{ backgroundColor: activeBike.accentColor }}
                    />
                    <span 
                      className="relative w-3 h-3 rounded-full bg-white border border-black shadow-lg"
                      style={{ backgroundColor: activeBike.accentColor }}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Hotspot Info Modal / Overlay */}
            {selectedHotspot && (
              <div className="mt-4 p-4 rounded-2xl glass-panel border border-white/20 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                <button 
                  onClick={() => setSelectedHotspot(null)}
                  className="absolute top-3 right-3 p-1 rounded-full text-zinc-400 hover:text-white bg-white/5"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 mb-1">
                  <span 
                    className="text-[9px] font-orbitron font-bold tracking-widest px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${activeBike.accentColor}25`, color: activeBike.accentColor }}
                  >
                    {selectedHotspot.category}
                  </span>
                  <h4 className="text-sm font-orbitron font-bold text-white">{selectedHotspot.title}</h4>
                </div>
                <p className="text-xs text-zinc-300 font-light leading-relaxed mt-1">
                  {selectedHotspot.desc}
                </p>
              </div>
            )}

            {/* Instruction tooltip */}
            <p className="text-[10px] font-space tracking-widest text-zinc-500 uppercase mt-4 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" style={{ color: activeBike.accentColor }} />
              Click glowing nodes to inspect engineered components
            </p>

          </div>

          {/* Right Floating Editorial Text: "FEATHERLIGHT FRAME" */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-center order-3 text-left lg:text-right space-y-3 pl-2 sm:pl-0">
            <span className="text-[11px] font-orbitron font-bold tracking-[0.25em] text-zinc-300 uppercase">
              {activeBike.weightCard.note}
            </span>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              {activeBike.weightCard.desc}
            </p>
            <div className="pt-3">
              <button
                onClick={onOpenSpecs}
                className="inline-flex items-center gap-2 text-xs font-orbitron font-semibold tracking-wider hover:text-white transition-colors"
                style={{ color: activeBike.accentColor }}
              >
                <span>EXPLORE CHASSIS DYNAMICS</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Floating Bar with Like Heart */}
        <div className="pt-6 flex items-center justify-between border-t border-white/5">
          <div className="text-xs text-zinc-500 font-space tracking-wider uppercase">
            Section 02 // Adaptable Engineering
          </div>

          <button
            onClick={onLike}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl group active:scale-95"
          >
            <Heart className="w-4 h-4 fill-current transition-transform group-hover:scale-125" />
            <span className="text-xs font-orbitron font-bold">{likesCount}</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default DominanceSection;
