import React, { useState } from 'react';
import { Layers, Shield, Zap, BatteryCharging, Disc, Sliders, Eye, Grid, Sparkles, ChevronRight } from 'lucide-react';

const componentModules = [
  {
    id: "chassis",
    name: "01 // MONOCOQUE CHASSIS",
    title: "Toray T1000 Aerospace Carbon",
    stat: "1,420g",
    statLabel: "FRAME BARE WEIGHT",
    desc: "Single-piece continuous carbon fiber front triangle molded under 12 bar pressure to eliminate microscopic voids. Engineered with directional weave for surgical steering precision and vertical bump compliance.",
    icon: Layers,
    coordinates: { x: "48%", y: "42%" }
  },
  {
    id: "suspension",
    name: "02 // SUSPENSION KINEMATICS",
    title: "Virtual Pivot Point (VPP) 160mm",
    stat: "160mm",
    statLabel: "ACTIVE GROUND TRAVEL",
    desc: "Counter-rotating CNC alloy links provide a progressive leverage rate curve. Keeps the rear wheel planted under hard braking with zero chain kickback on high-speed rock gardens.",
    icon: Shield,
    coordinates: { x: "62%", y: "44%" }
  },
  {
    id: "power",
    name: "03 // MID-DRIVE POWERPLANT",
    title: "Direct-Drive 750W / 90Nm Stator",
    stat: "90Nm",
    statLabel: "INSTANT PEAK TORQUE",
    desc: "Precision brushless motor integrated directly into the bottom bracket junction. Zero-cadence instant pickup delivers immediate power out of technical corners and steep incline switchbacks.",
    icon: Zap,
    coordinates: { x: "45%", y: "65%" }
  },
  {
    id: "battery",
    name: "04 // ENERGY MATRIX",
    title: "720Wh Sub-Chassis Lithium Core",
    stat: "95 KM",
    statLabel: "ESTIMATED SINGLE-CHARGE RANGE",
    desc: "Cylindrical 21700 cell array with internal phase-change heat dissipation. Hermetically sealed with IP67 double silicone seals for torrential Indian monsoon resilience.",
    icon: BatteryCharging,
    coordinates: { x: "52%", y: "52%" }
  },
  {
    id: "drivetrain",
    name: "05 // WIRELESS TRANSMISSION",
    title: "SRAM Eagle AXS 12-Speed T-Type",
    stat: "0.02s",
    statLabel: "SHIFT ENGAGEMENT TIME",
    desc: "Direct-mount hangerless rear derailleur clamping directly around the rear axle. Shifts seamlessly under full 750W motor torque load without chain drop or hesitation.",
    icon: Disc,
    coordinates: { x: "28%", y: "62%" }
  }
];

const EngineeringExplodedSection = ({ activeBike, onOpenSpecs, onOpenPreOrder }) => {
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [blueprintMode, setBlueprintMode] = useState(false);

  const currentModule = componentModules[activeModuleIdx];
  const CurrentIcon = currentModule.icon;

  return (
    <section id="engineering" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#040406]">
      
      {/* Background CAD Grid when blueprint mode is on */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          blueprintMode ? 'opacity-30' : 'opacity-10'
        } bg-[linear-gradient(to_right,#00d8ff15_1px,transparent_1px),linear-gradient(to_bottom,#00d8ff15_1px,transparent_1px)] bg-[size:32px_32px]`}
      />

      {/* Dynamic Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[180px] opacity-25 pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: blueprintMode ? '#00d8ff' : activeBike.accentColor }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with Blueprint Mode Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500">
                CHAPTER 04 // ENGINEERING BLUEPRINT
              </span>
              {blueprintMode && (
                <span className="text-[9px] font-orbitron font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse">
                  CAD TELEMETRY ACTIVE
                </span>
              )}
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl tracking-tight text-white mt-1">
              Engineered Without Compromise.
            </h2>
          </div>

          {/* Blueprint Mode Interactive Switch */}
          <button
            onClick={() => setBlueprintMode(!blueprintMode)}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-orbitron font-bold tracking-wider transition-all duration-300 border shadow-xl ${
              blueprintMode
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-cyan-900/50'
                : 'bg-white/5 border-white/15 text-zinc-300 hover:border-white/40 hover:text-white'
            }`}
          >
            <Grid className="w-4 h-4" style={{ color: blueprintMode ? '#00d8ff' : activeBike.accentColor }} />
            <span>{blueprintMode ? 'Blueprint CAD Mode: ON' : 'Toggle Blueprint CAD View'}</span>
          </button>
        </div>

        {/* 5 Component Module Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-10">
          {componentModules.map((mod, idx) => {
            const isSelected = activeModuleIdx === idx;
            const Icon = mod.icon;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleIdx(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-24 relative overflow-hidden group ${
                  isSelected
                    ? blueprintMode
                      ? 'bg-cyan-950/40 border-cyan-400 shadow-2xl scale-[1.02]'
                      : 'bg-zinc-900 border-white/40 shadow-2xl scale-[1.02]'
                    : 'bg-zinc-950/60 border-white/5 hover:border-white/15 hover:bg-zinc-900/40'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <Icon 
                    className="w-4 h-4 transition-colors"
                    style={{ 
                      color: isSelected 
                        ? blueprintMode ? '#00d8ff' : activeBike.accentColor 
                        : '#71717a' 
                    }}
                  />
                  <span className="text-[9px] font-orbitron text-zinc-500">0{idx + 1}</span>
                </div>
                <div>
                  <span className={`text-[10px] font-orbitron font-bold block truncate ${isSelected ? 'text-white' : 'text-zinc-400'}`}>
                    {mod.name.split('// ')[1]}
                  </span>
                </div>
                {isSelected && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: blueprintMode ? '#00d8ff' : activeBike.accentColor }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Stage: Bicycle Frame + Highlight Indicator + Spec Callout */}
        <div className="rounded-3xl glass-panel p-6 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Component Deep-Dive Card */}
            <div className="lg:col-span-5 space-y-6 text-left order-2 lg:order-1">
              <div>
                <span 
                  className="text-[10px] font-orbitron font-bold tracking-[0.25em] uppercase block mb-1"
                  style={{ color: blueprintMode ? '#00d8ff' : activeBike.accentColor }}
                >
                  {currentModule.name}
                </span>
                <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white tracking-tight">
                  {currentModule.title}
                </h3>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                {currentModule.desc}
              </p>

              {/* Big Metric Pill */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">KEY SPECIFICATION</span>
                  <span className="font-orbitron text-xs font-bold text-zinc-300">{currentModule.statLabel}</span>
                </div>
                <span 
                  className="font-orbitron font-black text-3xl"
                  style={{ color: blueprintMode ? '#00d8ff' : activeBike.accentColor }}
                >
                  {currentModule.stat}
                </span>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={onOpenSpecs}
                  className="text-xs font-orbitron font-bold text-white hover:underline flex items-center gap-2"
                >
                  <span>FULL SPEC SHEET</span>
                  <ChevronRight className="w-3.5 h-3.5" style={{ color: blueprintMode ? '#00d8ff' : activeBike.accentColor }} />
                </button>
              </div>
            </div>

            {/* Right: Exploded Stage Visual */}
            <div className="lg:col-span-7 relative flex flex-col items-center justify-center p-6 rounded-3xl bg-zinc-950/80 border border-white/5 order-1 lg:order-2 min-h-[380px]">
              
              <div className="relative w-full max-w-xl aspect-[16/10] flex items-center justify-center">
                <img
                  src={activeBike.angleImage || activeBike.heroImage}
                  alt={`${activeBike.name} ${currentModule.title}`}
                  className={`w-full h-full object-contain transition-all duration-700 ${
                    blueprintMode 
                      ? 'filter invert hue-rotate-180 brightness-150 contrast-125 opacity-80' 
                      : 'filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)]'
                  }`}
                />

                {/* Pulsing Target Dot on Component Location */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-700"
                  style={{ left: currentModule.coordinates.x, top: currentModule.coordinates.y }}
                >
                  <span 
                    className="absolute inset-0 w-8 h-8 -ml-2 -mt-2 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: blueprintMode ? '#00d8ff' : activeBike.accentColor }}
                  />
                  <span 
                    className="relative block w-4 h-4 rounded-full border-2 border-white shadow-2xl"
                    style={{ backgroundColor: blueprintMode ? '#00d8ff' : activeBike.accentColor }}
                  />
                </div>
              </div>

              {/* Blueprint HUD telemetry bar */}
              <div className="w-full mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-orbitron text-zinc-500">
                <span>MODULE 0{activeModuleIdx + 1} // ACTIVE FOCUS</span>
                <span className="text-zinc-400">FINITE ELEMENT ANALYSIS: <strong className="text-emerald-400">PASSED</strong></span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EngineeringExplodedSection;
