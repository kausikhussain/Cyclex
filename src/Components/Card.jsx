import React from 'react';
import { Zap, ShieldCheck, Feather, Cpu, Heart, ChevronRight, ChevronLeft } from 'lucide-react';

const iconMap = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Feather: Feather,
  Cpu: Cpu
};

const Card = ({ bike, bikes, currentIndex, onSelectBike, likesCount, onLike }) => {
  if (!bike) return null;

  const handlePrev = () => {
    const prev = (currentIndex - 1 + bikes.length) % bikes.length;
    onSelectBike(prev);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % bikes.length;
    onSelectBike(next);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 relative my-2">
      {/* Container Box with Subtle Border & Dark Glow */}
      <div className="relative rounded-3xl overflow-hidden backdrop-blur-glass border border-white/10 bg-gradient-to-b from-zinc-950/90 via-black/80 to-zinc-950/95 p-6 md:p-10 shadow-2xl transition-all duration-700">
        
        {/* Giant Watermark Background Text */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 w-full text-center overflow-hidden">
          <span 
            className="font-orbitron font-black text-[7rem] sm:text-[11rem] md:text-[14rem] tracking-widest block uppercase transition-all duration-700 opacity-5"
            style={{ 
              color: bike.accentColor,
              WebkitTextStroke: `2px ${bike.accentColor}30`
            }}
          >
            {bike.bgText}
          </span>
        </div>

        {/* Ambient Radial Backlight */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full blur-[120px] opacity-40 transition-all duration-700 pointer-events-none"
          style={{ backgroundColor: bike.accentColor }}
        />

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Hero Text & Pre-Order */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-left">
            <div>
              <span className="inline-block text-[10px] font-orbitron font-bold tracking-[0.25em] text-zinc-400 uppercase mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {bike.tagline}
              </span>
              <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                {bike.titlePrefix} <br />
                <span 
                  className="bg-clip-text text-transparent bg-gradient-to-r drop-shadow-lg"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${bike.accentColor}, #ffffff)`
                  }}
                >
                  {bike.titleAccent}
                </span>
              </h1>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md font-light">
              {bike.about}
            </p>

            <div className="pt-2">
              <button
                className="flex items-center gap-3 px-7 py-3.5 rounded-full font-orbitron text-xs font-bold tracking-wider text-black transition-all duration-300 transform hover:scale-105 shadow-lg group"
                style={{ 
                  backgroundColor: bike.accentColor,
                  boxShadow: `0 0 25px ${bike.accentColor}50`
                }}
              >
                <span>Pre-order Now</span>
                <div className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ChevronRight className="w-3.5 h-3.5 text-black" />
                </div>
              </button>
            </div>
          </div>

          {/* Center Column: Interactive Bike Pedestal Image */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-4">
            
            {/* Left & Right Navigation Arrows */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-md hover:scale-110"
              title="Previous Bike"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-md hover:scale-110"
              title="Next Bike"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Bike Display Frame */}
            <div className="relative w-full max-w-lg aspect-[16/10] flex items-center justify-center group cursor-pointer" onClick={handleNext}>
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transition-all duration-700 transform group-hover:scale-105"
              />
            </div>

            {/* Pedestal Pagination Dots */}
            <div className="flex items-center gap-2.5 mt-4 z-20 bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              {bikes.map((b, idx) => (
                <button
                  key={b.id}
                  onClick={() => onSelectBike(idx)}
                  className={`transition-all duration-500 rounded-full ${
                    currentIndex === idx 
                      ? 'w-7 h-2 bg-white' 
                      : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-400'
                  }`}
                  style={{
                    backgroundColor: currentIndex === idx ? bike.accentColor : undefined
                  }}
                  title={`View ${b.name}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Key Feature Highlights */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-5 text-left pl-0 lg:pl-4">
            {bike.features.map((feature, idx) => {
              const IconComp = iconMap[feature.icon] || Zap;
              return (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10 group"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 transition-colors duration-300"
                    style={{ 
                      backgroundColor: `${bike.accentColor}15`,
                      borderColor: `${bike.accentColor}40` 
                    }}
                  >
                    <IconComp className="w-5 h-5 transition-transform group-hover:scale-110" style={{ color: bike.accentColor }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-orbitron font-bold text-white tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-light leading-snug">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Bar: Key Specifications Cards */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center relative z-10">
          <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-3.5 flex flex-col items-center justify-center hover:border-white/20 transition-all">
            <span className="font-orbitron text-xl sm:text-2xl font-black text-white">
              {bike.specs.wheelSize}
            </span>
            <span className="text-[10px] font-orbitron font-semibold tracking-wider text-zinc-500 uppercase mt-1">
              WHEEL SIZE
            </span>
          </div>

          <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-3.5 flex flex-col items-center justify-center hover:border-white/20 transition-all">
            <span className="font-orbitron text-xl sm:text-2xl font-black text-white">
              {bike.specs.travel}
            </span>
            <span className="text-[10px] font-orbitron font-semibold tracking-wider text-zinc-500 uppercase mt-1">
              TRAVEL
            </span>
          </div>

          <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-3.5 flex flex-col items-center justify-center hover:border-white/20 transition-all">
            <span className="font-orbitron text-xl sm:text-2xl font-black text-white">
              {bike.specs.weight}
            </span>
            <span className="text-[10px] font-orbitron font-semibold tracking-wider text-zinc-500 uppercase mt-1">
              WEIGHT
            </span>
          </div>

          <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-3.5 flex flex-col items-center justify-center hover:border-white/20 transition-all">
            <span className="font-orbitron text-xl sm:text-2xl font-black text-white">
              {bike.specs.drivetrain}
            </span>
            <span className="text-[10px] font-orbitron font-semibold tracking-wider text-zinc-500 uppercase mt-1">
              DRIVETRAIN
            </span>
          </div>
        </div>

        {/* Bottom Floating Like Heart Button */}
        <div className="absolute bottom-6 right-6 z-20">
          <button 
            onClick={onLike}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-rose-600/20 border border-rose-500/40 text-rose-400 hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-lg group hover:scale-105 active:scale-95"
            title="Like bike"
          >
            <Heart className="w-4 h-4 fill-current transition-transform group-hover:scale-125" />
            <span className="text-xs font-orbitron font-bold">{likesCount}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;
