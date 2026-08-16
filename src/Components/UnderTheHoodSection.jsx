import React from 'react';
import { Heart, ChevronRight, Sliders, Shield, Zap, Layers } from 'lucide-react';

const UnderTheHoodSection = ({ activeBike, likesCount, onLike, onOpenSpecs, onOpenPreOrder }) => {
  return (
    <section id="under-the-hood" className="relative min-h-[92vh] py-20 overflow-hidden flex flex-col justify-center border-t border-white/5">
      
      {/* Ambient Backlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[180px] opacity-25 pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[560px]">
          
          {/* Left Column: Title & Engineering Storytelling */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-left order-2 lg:order-1">
            <div>
              <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500 block mb-2">
                {activeBike.underTheHood.kicker}
              </span>
              <h2 className="font-orbitron font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
                {activeBike.underTheHood.title}
              </h2>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              {activeBike.underTheHood.description}
            </p>

            {/* Quick Engineering Badges */}
            <div className="grid grid-cols-2 gap-3 py-2">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                <Layers className="w-4 h-4" style={{ color: activeBike.accentColor }} />
                <span className="text-[11px] font-orbitron font-medium text-zinc-300">Toray T1000</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                <Shield className="w-4 h-4" style={{ color: activeBike.accentColor }} />
                <span className="text-[11px] font-orbitron font-medium text-zinc-300">UDH Hanger</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSpecs}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-orbitron font-bold tracking-wider text-white border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 transition-all shadow-md group"
              >
                <span>LEARN MORE</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Center Column: Steep High-Angle Dramatic Bicycle Render */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center order-1 lg:order-2 py-4">
            
            {/* Spotlight halo */}
            <div 
              className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-40 pointer-events-none"
              style={{ backgroundColor: activeBike.accentColor }}
            />

            <div className="relative w-full max-w-sm aspect-[3/4] flex items-center justify-center">
              <img
                src={activeBike.verticalImage || activeBike.heroImage}
                alt={`${activeBike.name} Under The Hood Architecture`}
                className="w-full h-full object-contain filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] transition-all duration-700 transform hover:scale-105 hover:rotate-1"
              />
            </div>

            <span className="text-[9px] font-orbitron tracking-widest text-zinc-500 uppercase mt-2">
              VERTICAL CHASSIS TELEMETRY
            </span>
          </div>

          {/* Right Column: Floating Translucent Drivetrain Specs Card */}
          <div className="lg:col-span-4 flex flex-col justify-center order-3 text-left">
            <div className="w-full rounded-3xl overflow-hidden glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
              
              {/* Card Title */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4" style={{ color: activeBike.accentColor }} />
                  <span className="text-xs font-orbitron font-bold tracking-widest text-white uppercase">
                    DRIVETRAIN SPECS
                  </span>
                </div>
                <span className="text-[10px] font-space tracking-widest text-zinc-400">
                  {activeBike.name}
                </span>
              </div>

              {/* 2x2 Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* 12X Gears */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="font-orbitron text-2xl sm:text-3xl font-black text-white">
                    {activeBike.specs.drivetrain}
                  </div>
                  <div className="text-[9px] font-orbitron font-semibold tracking-wider text-zinc-400 uppercase mt-1">
                    SPEED RATIO
                  </div>
                </div>

                {/* 160mm Travel */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="font-orbitron text-2xl sm:text-3xl font-black text-white">
                    {activeBike.specs.travel}
                  </div>
                  <div className="text-[9px] font-orbitron font-semibold tracking-wider text-zinc-400 uppercase mt-1">
                    TRAVEL
                  </div>
                </div>

                {/* 29" Wheels */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="font-orbitron text-2xl sm:text-3xl font-black text-white">
                    {activeBike.specs.wheelSize}
                  </div>
                  <div className="text-[9px] font-orbitron font-semibold tracking-wider text-zinc-400 uppercase mt-1">
                    WHEEL SIZE
                  </div>
                </div>

                {/* 13.2kg Weight */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                  <div className="font-orbitron text-2xl sm:text-3xl font-black text-white">
                    {activeBike.specs.weight}
                  </div>
                  <div className="text-[9px] font-orbitron font-semibold tracking-wider text-zinc-400 uppercase mt-1">
                    TOTAL WEIGHT
                  </div>
                </div>

              </div>

              {/* Card Description */}
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {activeBike.underTheHood.drivetrainCardDesc}
              </p>

              {/* Action CTA Button */}
              <button
                onClick={onOpenSpecs}
                className="w-full py-3.5 rounded-full font-orbitron text-xs font-bold tracking-wider text-black transition-all duration-300 transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2"
                style={{ 
                  backgroundColor: activeBike.accentColor,
                  boxShadow: `0 0 25px ${activeBike.accentColor}50`
                }}
              >
                <span>VIEW FULL SPECS</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom Floating Bar with Like Heart */}
        <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-8">
          <div className="text-xs text-zinc-500 font-space tracking-wider uppercase">
            Section 03 // Chassis & Drivetrain Architecture
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

export default UnderTheHoodSection;
