import React, { useState } from 'react';
import { Droplets, ShieldAlert, TrendingUp, SunMedium, Compass, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

const iconMap = {
  Droplets: Droplets,
  ShieldAlert: ShieldAlert,
  TrendingUp: TrendingUp,
  SunMedium: SunMedium
};

const terrains = [
  {
    id: "monsoon",
    name: "Monsoon & Urban Waterways",
    location: "Mumbai • Bengaluru • Kochi",
    kicker: "IP67 HERMETIC SEALING",
    headline: "Zero-Latency Submersible Electronics",
    desc: "Engineered with double-lip marine silicone gaskets around the bottom bracket, motor stator, and down-tube battery interface to withstand flooded underpasses and torrential monsoon downpours.",
    stat: "100%",
    statLabel: "WATER & DUST PROOF RATING",
    metric1: "IP67 Seal Rating",
    metric2: "Zero Electrical Shorting",
    metric3: "Corrosion-Resistant Hardware"
  },
  {
    id: "ghats",
    name: "Western Ghats & Alpine Climbs",
    location: "Nandi Hills • Lonavala • Munnar",
    kicker: "HIGH-INCLINE DYNAMICS",
    headline: "90Nm Instant High-Gradient Boost",
    desc: "Dynamic torque mapping delivers immediate hill-climbing assist from 0 RPM cadence. Effortlessly masters 35-degree hairpin switchbacks with active regenerative thermal dissipation.",
    stat: "35°",
    statLabel: "MAX GRADIENT CONTINUOUS CLIMB",
    metric1: "Zero-Cadence Assist",
    metric2: "Dynamic Incline Sensing",
    metric3: "Regenerative Descent Braking"
  },
  {
    id: "potholes",
    name: "Broken Tarmac & Potholes",
    location: "City Arterials & Highway Expansion Joints",
    kicker: "CHASSIS ISOLATION",
    headline: "160mm Progressive Fox Suspension",
    desc: "Tuned compression damping absorbs harsh urban potholes, speed breakers, and sudden road joints. High-volume 29\" Maxxis double-down casing eliminates pinch flats.",
    stat: "160mm",
    statLabel: "PROGRESSIVE AXLE TRAVEL",
    metric1: "ButterCups Anti-Vibration",
    metric2: "Dual-Chamber Air Spring",
    metric3: "Pinch-Flat Casing Shield"
  },
  {
    id: "heat",
    name: "Tropical Summer & Dust Defense",
    location: "Delhi NCR • Rajasthan • Hyderabad",
    kicker: "THERMAL DEFENSE",
    headline: "Phase-Change BMS Cooling to 50°C",
    desc: "Internal heat pipes and ceramic labyrinth pivot bearings prevent motor wattage throttling and dust ingress during intense 45°C+ summer afternoon rides.",
    stat: "50°C",
    statLabel: "PEAK AMBIENT RIDE RATING",
    metric1: "Ceramic Labyrinth Bearings",
    metric2: "Thermal Heat Sinks",
    metric3: "Zero Wattage Throttling"
  }
];

const BuiltForIndiaSection = ({ activeBike, onOpenSpecs, onOpenPreOrder }) => {
  const [selectedTerrainIdx, setSelectedTerrainIdx] = useState(0);
  const currentTerrain = terrains[selectedTerrainIdx];

  return (
    <section id="built-for-india" className="relative py-24 overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#050507] via-zinc-950/90 to-[#050507]">
      
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/3 w-[600px] h-[400px] rounded-full blur-[180px] opacity-20 pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500 block mb-1">
              ENGINEERED FOR THE SUBCONTINENT
            </span>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl tracking-tight text-white">
              Built For Indian Realities.
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md">
            World-class luxury bicycle engineering calibrated specifically for Indian road topologies, monsoon weather, and demanding elevation climbs.
          </p>
        </div>

        {/* 4 Indian Adaptation Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {activeBike.indiaAdaptations.map((adapt, idx) => {
            const IconComp = iconMap[adapt.icon] || Droplets;
            return (
              <div 
                key={adapt.id}
                className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-4 group hover:bg-zinc-900/60"
              >
                <div className="flex items-center justify-between">
                  <div 
                    className="w-10 h-10 rounded-2xl flex items-center justify-center border border-white/10 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${activeBike.accentColor}15`, borderColor: `${activeBike.accentColor}30` }}
                  >
                    <IconComp className="w-5 h-5" style={{ color: activeBike.accentColor }} />
                  </div>
                  <span className="text-[9px] font-orbitron font-semibold text-zinc-500">0{idx + 1}</span>
                </div>

                <div>
                  <h3 className="font-orbitron font-bold text-sm text-white mb-2 tracking-wide">
                    {adapt.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {adapt.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-space font-medium text-zinc-400">
                  <span style={{ color: activeBike.accentColor }}>{adapt.metric}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Indian Terrain Mode Explorer */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 shadow-2xl overflow-hidden relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-[10px] font-orbitron font-bold tracking-[0.25em] text-zinc-400 uppercase">
                INTERACTIVE TERRAIN RESPONSE
              </span>
              <h4 className="font-orbitron font-bold text-lg text-white mt-0.5">
                Choose Your Indian Riding Topology
              </h4>
            </div>

            {/* Terrain Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {terrains.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTerrainIdx(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-orbitron font-semibold transition-all whitespace-nowrap ${
                    selectedTerrainIdx === idx
                      ? 'text-black font-bold shadow-lg scale-105'
                      : 'text-zinc-400 hover:text-white bg-white/5'
                  }`}
                  style={{
                    backgroundColor: selectedTerrainIdx === idx ? activeBike.accentColor : undefined
                  }}
                >
                  {t.name.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-orbitron text-zinc-300">
                  {currentTerrain.location}
                </span>
                <span 
                  className="text-[10px] font-orbitron font-bold tracking-wider"
                  style={{ color: activeBike.accentColor }}
                >
                  {currentTerrain.kicker}
                </span>
              </div>

              <h4 className="font-orbitron font-black text-2xl sm:text-3xl text-white">
                {currentTerrain.headline}
              </h4>

              <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                {currentTerrain.desc}
              </p>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-center">
                  <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">SPEC 01</span>
                  <span className="font-space text-xs font-bold text-zinc-200">{currentTerrain.metric1}</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-center">
                  <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">SPEC 02</span>
                  <span className="font-space text-xs font-bold text-zinc-200">{currentTerrain.metric2}</span>
                </div>
                <div className="p-3 rounded-2xl bg-black/50 border border-white/5 text-center">
                  <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">SPEC 03</span>
                  <span className="font-space text-xs font-bold text-zinc-200">{currentTerrain.metric3}</span>
                </div>
              </div>
            </div>

            {/* Right Big Stat Box */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-zinc-950/90 border border-white/5 text-center relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10 blur-xl pointer-events-none"
                style={{ backgroundColor: activeBike.accentColor }}
              />
              <span className="text-[10px] font-orbitron font-bold tracking-widest text-zinc-500 uppercase">
                CALIBRATED PERFORMANCE
              </span>
              <div 
                className="font-orbitron text-6xl sm:text-7xl font-black my-2"
                style={{ color: activeBike.accentColor }}
              >
                {currentTerrain.stat}
              </div>
              <span className="text-xs font-orbitron font-bold text-zinc-300 uppercase tracking-widest">
                {currentTerrain.statLabel}
              </span>
              <p className="text-[11px] font-space text-zinc-500 mt-2">
                Tested across 15,000+ km of Indian real-world riding
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BuiltForIndiaSection;
