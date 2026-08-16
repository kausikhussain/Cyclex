import React from 'react';
import { Heart, ChevronRight, CheckCircle2, ShieldCheck, Truck, Headphones } from 'lucide-react';

const ReadyToRideSection = ({ activeBike, likesCount, onLike, onOpenPreOrder, onOpenSpecs }) => {
  return (
    <section id="ready-to-ride" className="relative min-h-[95vh] py-24 overflow-hidden flex flex-col justify-center border-t border-white/5">
      
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full blur-[190px] opacity-30 pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid: Left Manifesto + Center Head-On Cockpit + Right Quality Guarantee */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px]">
          
          {/* Left Text Manifesto */}
          <div className="lg:col-span-3 flex flex-col justify-center text-left space-y-4 order-2 lg:order-1">
            <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500">
              UNCOMPROMISED VISION
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {activeBike.readyToRide.leftText}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenSpecs}
                className="text-xs font-orbitron font-semibold tracking-wider hover:underline flex items-center gap-1.5"
                style={{ color: activeBike.accentColor }}
              >
                <span>EXPLORE ALL {activeBike.name} SPECS</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Column: Dramatic Front Head-On Cockpit Visual + Headline + Pre-Order CTA */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center text-center order-1 lg:order-2 py-4">
            
            {/* Front Head-On Image Frame */}
            <div className="relative w-full max-w-sm aspect-[3/4] flex items-center justify-center">
              <img
                src={activeBike.frontImage || activeBike.heroImage}
                alt={`${activeBike.name} Front Cockpit View`}
                className="w-full h-full object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.95)] transition-all duration-700 transform hover:scale-105"
              />

              {/* Floating Center Headline & CTA directly over the lower section of the bike matching Reference */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4 flex flex-col items-center text-center z-20">
                <div className="mb-2">
                  <span className="text-xs font-orbitron text-zinc-400 font-bold">
                    {activeBike.name} • <span className="text-white text-base">{activeBike.priceFormatted}</span>
                  </span>
                </div>

                <h3 className="font-orbitron font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight drop-shadow-2xl mb-4 whitespace-nowrap">
                  {activeBike.readyToRide.headline}
                </h3>

                <button
                  onClick={() => onOpenPreOrder(activeBike)}
                  className="px-8 py-3.5 rounded-full font-orbitron text-xs sm:text-sm font-black tracking-widest text-black transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-3 group"
                  style={{ 
                    backgroundColor: activeBike.accentColor,
                    boxShadow: `0 0 35px ${activeBike.accentColor}70`
                  }}
                >
                  <span>Pre-order Now ({activeBike.depositFormatted})</span>
                  <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Text: Obsessed With Details / Support */}
          <div className="lg:col-span-3 flex flex-col justify-center text-left lg:text-right space-y-4 order-3 items-start lg:items-end">
            <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500">
              FACTORY DIRECT QA // INDIA
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {activeBike.readyToRide.rightText}
            </p>

            {/* Micro badges */}
            <div className="flex flex-col space-y-2 pt-2 text-[11px] text-zinc-400 font-space items-start lg:items-end">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>5-Year Carbon Frame Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-sky-400" />
                <span>Doorstep Delivery Across India</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4" style={{ color: activeBike.accentColor }} />
                <span>24/7 Pan-India Roadside Support</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Floating Bar with Like Heart */}
        <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-8">
          <div className="text-xs text-zinc-500 font-space tracking-wider uppercase">
            Section 06 // The Climax of Performance
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

export default ReadyToRideSection;
