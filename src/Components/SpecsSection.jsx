import React from 'react';
import { Heart, ChevronRight, Gauge, Activity, Battery, Zap } from 'lucide-react';

const SpecsSection = ({ bike, likesCount, onLike }) => {
  if (!bike) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 relative my-4">
      {/* Container Card */}
      <div className="relative rounded-3xl overflow-hidden backdrop-blur-glass border border-white/10 bg-gradient-to-b from-zinc-950/90 via-black/85 to-zinc-950 p-6 md:p-12 shadow-2xl transition-all duration-700">
        
        {/* Subtle Background Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px] opacity-30 pointer-events-none transition-all duration-700"
          style={{ backgroundColor: bike.accentColor }}
        />

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Stats */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-8 text-left">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-orbitron text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {bike.specs.topSpeed}
                </span>
                <span className="font-orbitron text-xs font-bold text-zinc-400 tracking-wider">
                  {bike.specs.topSpeedUnit}
                </span>
              </div>
              <p className="text-[10px] font-orbitron font-semibold tracking-[0.2em] text-zinc-500 uppercase mt-1">
                TOP SPEED
              </p>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-orbitron text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {bike.specs.torque}
                </span>
                <span className="font-orbitron text-xs font-bold text-zinc-400 tracking-wider">
                  {bike.specs.torqueUnit}
                </span>
              </div>
              <p className="text-[10px] font-orbitron font-semibold tracking-[0.2em] text-zinc-500 uppercase mt-1">
                TORQUE OUTPUT
              </p>
            </div>
          </div>

          {/* Center Showcase Image & Description */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center py-2">
            <div className="w-full max-w-md aspect-[16/9] relative flex items-center justify-center mb-6">
              <img 
                src={bike.image} 
                alt={`${bike.name} Performance`} 
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-all duration-700 transform hover:scale-105"
              />
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-lg leading-relaxed font-light">
              Built for the rider that pushes limits — instant torque and mid-range boost meet the {bike.name} performance drive. Control every descent and dominate challenging terrain.
            </p>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-8 text-left lg:text-right">
            <div>
              <div className="flex items-baseline justify-start lg:justify-end gap-2">
                <span className="font-orbitron text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {bike.specs.motorPower}
                </span>
                <span className="font-orbitron text-xs font-bold text-zinc-400 tracking-wider">
                  {bike.specs.motorPowerUnit}
                </span>
              </div>
              <p className="text-[10px] font-orbitron font-semibold tracking-[0.2em] text-zinc-500 uppercase mt-1">
                MOTOR POWER
              </p>
            </div>

            <div>
              <div className="flex items-baseline justify-start lg:justify-end gap-2">
                <span className="font-orbitron text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {bike.specs.peakRange}
                </span>
                <span className="font-orbitron text-xs font-bold text-zinc-400 tracking-wider">
                  {bike.specs.peakRangeUnit}
                </span>
              </div>
              <p className="text-[10px] font-orbitron font-semibold tracking-[0.2em] text-zinc-500 uppercase mt-1">
                PEAK RANGE
              </p>
            </div>
          </div>

        </div>

        {/* Bottom CTA Row */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
          <button 
            className="flex items-center gap-3 px-6 py-3 rounded-full font-orbitron text-xs font-bold tracking-wider text-black transition-all duration-300 transform hover:scale-105 shadow-lg group"
            style={{ 
              backgroundColor: bike.accentColor,
              boxShadow: `0 0 20px ${bike.accentColor}40`
            }}
          >
            <span>SEE SPECS</span>
            <ChevronRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
          </button>

          <button 
            onClick={onLike}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-rose-600/20 border border-rose-500/40 text-rose-400 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-lg group"
          >
            <Heart className="w-4 h-4 fill-current transition-transform group-hover:scale-125" />
            <span className="text-xs font-orbitron font-bold">{likesCount}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SpecsSection;
