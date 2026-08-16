import React, { useState } from 'react';
import { Heart, ChevronRight, ArrowDownRight, Compass, ShieldCheck, Zap, CreditCard } from 'lucide-react';

const HeroSection = ({ 
  activeBike, 
  bikes, 
  selectedBikeIdx, 
  onSelectBike, 
  likesCount, 
  onLike, 
  onOpenPreOrder,
  onOpenSpecs
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      
      {/* Dynamic Background Studio Lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[160px] opacity-35 pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      {/* Atmospheric Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40 z-0" />

      {/* Brand Sub-Header & Model Tabs Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: activeBike.accentColor }} />
            {activeBike.tagline}
          </span>
          <h1 className="font-orbitron font-black text-2xl sm:text-3xl tracking-tight text-white mt-0.5">
            {activeBike.titlePrefix}{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${activeBike.accentColor}, #ffffff)`
              }}
            >
              {activeBike.titleAccent}
            </span>
          </h1>
        </div>

        {/* Floating Model Selector Pills */}
        <div id="bikes" className="flex items-center gap-2 p-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-xl">
          {bikes.map((bike, idx) => (
            <button
              key={bike.id}
              onClick={() => onSelectBike(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-orbitron font-bold tracking-wider transition-all duration-300 ${
                selectedBikeIdx === idx
                  ? 'text-black shadow-lg scale-105'
                  : 'text-zinc-400 hover:text-white'
              }`}
              style={{
                backgroundColor: selectedBikeIdx === idx ? activeBike.accentColor : 'transparent'
              }}
            >
              <span>{bike.name}</span>
              <span className="hidden sm:inline-block ml-1.5 text-[9px] font-space opacity-80">{bike.priceFormatted}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Hero Showcase: Floating Metrics + Center Bicycle */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
          
          {/* Left Metrics Column (Top Speed + Range) */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-10 order-2 lg:order-1 text-left">
            
            {/* Top Speed Stat */}
            <div className="group transition-transform hover:translate-x-1 duration-300">
              <div className="flex items-baseline gap-2">
                <span className="font-orbitron text-6xl sm:text-7xl font-black text-white tracking-tight leading-none">
                  {activeBike.specs.topSpeed}
                </span>
                <span className="font-orbitron text-sm font-bold text-zinc-400 tracking-widest">
                  {activeBike.specs.topSpeedUnit}
                </span>
              </div>
              <p className="text-[10px] font-orbitron font-semibold tracking-[0.25em] text-zinc-500 uppercase mt-2">
                {activeBike.specs.topSpeedLabel}
              </p>
            </div>

            {/* Range Stat */}
            <div className="group transition-transform hover:translate-x-1 duration-300">
              <div className="flex items-baseline gap-2">
                <span className="font-orbitron text-6xl sm:text-7xl font-black text-white tracking-tight leading-none">
                  {activeBike.specs.range}
                </span>
                <span className="font-orbitron text-sm font-bold text-zinc-400 tracking-widest">
                  {activeBike.specs.rangeUnit}
                </span>
              </div>
              <p className="text-[10px] font-orbitron font-semibold tracking-[0.25em] text-zinc-500 uppercase mt-2">
                {activeBike.specs.rangeLabel}
              </p>
            </div>

            {/* Supporting Copy & Action Button */}
            <div className="space-y-4 pt-2">
              <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-xs">
                {activeBike.specs.topSpeedDesc}
              </p>
              <a
                href="#dominance"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-orbitron font-semibold tracking-wider text-zinc-300 bg-zinc-900/90 border border-white/15 hover:border-white/40 hover:text-white transition-all shadow-md group"
              >
                <span>SEE PERFORMANCE</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Center Column: Hero Bicycle Visual */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2 py-4">
            
            {/* Ambient Spotlight */}
            <div 
              className="absolute inset-0 max-w-lg mx-auto rounded-full blur-[90px] opacity-40 transition-all duration-700 pointer-events-none"
              style={{ backgroundColor: `${activeBike.accentColor}35` }}
            />

            {/* Bicycle Presentation Frame */}
            <div className="relative w-full max-w-2xl aspect-[16/10] flex items-center justify-center">
              <img
                src={activeBike.heroImage}
                alt={`${activeBike.name} High Performance Electric Mountain Bicycle`}
                className="w-full h-full object-contain filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] transition-all duration-700 transform hover:scale-[1.03] cursor-pointer"
                onClick={() => onOpenPreOrder(activeBike)}
              />
            </div>

            {/* Studio Floor Reflection & Shadow */}
            <div className="w-4/5 h-4 -mt-3 bg-gradient-to-r from-transparent via-black to-transparent opacity-80 blur-md rounded-full" />

          </div>

          {/* Right Metrics Column (Motor Power + Peak Torque) */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-10 order-3 text-left lg:text-right items-start lg:items-end">
            
            {/* Motor Power Stat */}
            <div className="group transition-transform hover:-translate-x-1 duration-300">
              <div className="flex items-baseline justify-start lg:justify-end gap-2">
                <span className="font-orbitron text-6xl sm:text-7xl font-black text-white tracking-tight leading-none">
                  {activeBike.specs.motorPower}
                </span>
                <span className="font-orbitron text-sm font-bold text-zinc-400 tracking-widest">
                  {activeBike.specs.motorPowerUnit}
                </span>
              </div>
              <p className="text-[10px] font-orbitron font-semibold tracking-[0.25em] text-zinc-500 uppercase mt-2">
                {activeBike.specs.motorPowerLabel}
              </p>
            </div>

            {/* Torque Stat */}
            <div className="group transition-transform hover:-translate-x-1 duration-300">
              <div className="flex items-baseline justify-start lg:justify-end gap-2">
                <span className="font-orbitron text-6xl sm:text-7xl font-black text-white tracking-tight leading-none">
                  {activeBike.specs.torque}
                </span>
                <span className="font-orbitron text-sm font-bold text-zinc-400 tracking-widest">
                  {activeBike.specs.torqueUnit}
                </span>
              </div>
              <p className="text-[10px] font-orbitron font-semibold tracking-[0.25em] text-zinc-500 uppercase mt-2">
                {activeBike.specs.torqueLabel}
              </p>
            </div>

            {/* Supporting Copy & Drivetrain Button */}
            <div className="space-y-4 pt-2 flex flex-col items-start lg:items-end">
              <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-xs text-left lg:text-right">
                {activeBike.specs.motorPowerDesc}
              </p>
              <a
                href="#under-the-hood"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-orbitron font-bold tracking-wider text-black shadow-lg transition-all transform hover:scale-105"
                style={{ 
                  backgroundColor: activeBike.accentColor,
                  boxShadow: `0 0 20px ${activeBike.accentColor}50`
                }}
              >
                <span>SEE DRIVETRAIN</span>
                <ChevronRight className="w-3.5 h-3.5 text-black" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Floating Bar with Indian Rupee Pricing & Like Heart */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-zinc-400 font-space">
          <div className="flex items-baseline gap-2">
            <span className="text-zinc-500 uppercase text-[10px] font-orbitron">Price:</span>
            <strong className="text-white font-orbitron text-base font-black">{activeBike.priceFormatted}</strong>
            <span className="text-zinc-600 line-through text-xs">{activeBike.originalPriceFormatted}</span>
          </div>

          <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:inline-block" />

          <div className="flex items-baseline gap-1.5">
            <span className="text-zinc-500 uppercase text-[10px] font-orbitron">EMI from:</span>
            <strong className="text-emerald-400 font-orbitron font-semibold">{activeBike.emiFormatted}</strong>
          </div>

          <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:inline-block" />

          <div className="flex items-baseline gap-1.5">
            <span className="text-zinc-500 uppercase text-[10px] font-orbitron">Booking Deposit:</span>
            <strong className="text-white font-orbitron font-semibold" style={{ color: activeBike.accentColor }}>{activeBike.depositFormatted} (100% Refundable)</strong>
          </div>
        </div>

        {/* Live Interactive Heart Badge */}
        <button
          onClick={onLike}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl group active:scale-95 shrink-0"
          title={`Like ${activeBike.name}`}
        >
          <Heart className="w-4 h-4 fill-current transition-transform group-hover:scale-125" />
          <span className="text-xs font-orbitron font-bold">{likesCount}</span>
        </button>
      </div>

    </section>
  );
};

export default HeroSection;
