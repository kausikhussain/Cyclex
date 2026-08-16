import React, { useState } from 'react';
import { Cpu, Zap, BatteryCharging, Gauge, ShieldCheck, Activity, Layers, Disc } from 'lucide-react';

const iconLookup = {
  chassis: Layers,
  powertrain: Zap,
  battery: BatteryCharging,
  telemetry: Activity
};

const TechnologySection = ({ activeBike, onOpenSpecs, onOpenPreOrder }) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTech = activeBike.techCategories[activeTab] || activeBike.techCategories[0];
  const CurrentIcon = iconLookup[currentTech.id] || Cpu;

  return (
    <section id="technology" className="relative py-24 overflow-hidden border-t border-white/5 bg-gradient-to-b from-black via-zinc-950/80 to-black">
      
      {/* Glow */}
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[180px] opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500 block mb-1">
              PROPRIETARY INNOVATION
            </span>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl tracking-tight text-white">
              Advanced Technology Matrix
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md">
            Every millimeter of the {activeBike.name} is engineered with race-proven composites, instant motor response, and intelligent telemetry.
          </p>
        </div>

        {/* Tech Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {activeBike.techCategories.map((tech, idx) => {
            const Icon = iconLookup[tech.id] || Cpu;
            const isSelected = activeTab === idx;
            return (
              <button
                key={tech.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-28 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-zinc-900 border-white/30 shadow-2xl scale-[1.02]'
                    : 'bg-zinc-950/60 border-white/5 hover:border-white/15 hover:bg-zinc-900/40'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <Icon 
                    className="w-5 h-5 transition-colors" 
                    style={{ color: isSelected ? activeBike.accentColor : '#71717a' }} 
                  />
                  <span className="text-[10px] font-orbitron text-zinc-500">0{idx + 1}</span>
                </div>
                <div>
                  <h4 className={`text-xs font-orbitron font-bold tracking-wide transition-colors ${isSelected ? 'text-white' : 'text-zinc-400'}`}>
                    {tech.name}
                  </h4>
                </div>
                {isSelected && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: activeBike.accentColor }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Tech Showcase Display */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Big Stat & Info */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-orbitron uppercase text-zinc-400">
                <CurrentIcon className="w-3.5 h-3.5" style={{ color: activeBike.accentColor }} />
                <span>{currentTech.name} // ARCHITECTURE</span>
              </div>

              <h3 className="font-orbitron font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                {currentTech.headline}
              </h3>

              <p className="text-zinc-300 text-sm font-light leading-relaxed">
                {currentTech.desc}
              </p>

              {/* Stat Highlight */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 inline-block min-w-[240px]">
                <div 
                  className="font-orbitron text-4xl sm:text-5xl font-black"
                  style={{ color: activeBike.accentColor }}
                >
                  {currentTech.stat}
                </div>
                <div className="text-[10px] font-orbitron font-semibold tracking-wider text-zinc-500 uppercase mt-1">
                  {currentTech.statLabel}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenSpecs}
                  className="text-xs font-orbitron font-bold tracking-wider text-white hover:underline flex items-center gap-2"
                >
                  <span>REVIEW COMPONENT BLUEPRINTS</span>
                  <span style={{ color: activeBike.accentColor }}>→</span>
                </button>
              </div>
            </div>

            {/* Right: Technical Visualizer Graphic */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 relative">
              <div className="w-full max-w-md aspect-[16/10] relative flex items-center justify-center">
                <img
                  src={activeBike.angleImage || activeBike.heroImage}
                  alt={currentTech.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
                />
              </div>

              {/* Real-time telemetry indicators */}
              <div className="w-full grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-center">
                <div className="p-2 rounded-xl bg-black/50">
                  <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">TORQUE SENSOR</span>
                  <span className="font-orbitron text-xs font-bold text-white">0.02ms LATENCY</span>
                </div>
                <div className="p-2 rounded-xl bg-black/50">
                  <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">THERMAL EFFICIENCY</span>
                  <span className="font-orbitron text-xs font-bold text-emerald-400">98.4% PEAK</span>
                </div>
                <div className="p-2 rounded-xl bg-black/50">
                  <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">COMPLIANCE RATING</span>
                  <span className="font-orbitron text-xs font-bold" style={{ color: activeBike.accentColor }}>UCI CERTIFIED</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;
