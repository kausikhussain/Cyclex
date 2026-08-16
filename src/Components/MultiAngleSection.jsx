import React, { useState, useRef } from 'react';
import { Camera, Maximize2, RotateCcw, Check, Sparkles, RefreshCw, Compass } from 'lucide-react';

const MultiAngleSection = ({ activeBike, onOpenPreOrder }) => {
  const [selectedAngleIdx, setSelectedAngleIdx] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const angleViews = [
    {
      id: "side",
      angleDegree: "0°",
      name: "Side Profile",
      desc: "Full chassis lateral geometry & pivot articulation",
      image: activeBike.heroImage
    },
    {
      id: "angle",
      angleDegree: "45°",
      name: "3/4 Dynamic Angle",
      desc: "Downhill attack perspective & down-tube profile",
      image: activeBike.angleImage || activeBike.heroImage
    },
    {
      id: "vertical",
      angleDegree: "90°",
      name: "Vertical Telemetry",
      desc: "Headtube to rear axle torsional stiffness plane",
      image: activeBike.verticalImage || activeBike.heroImage
    },
    {
      id: "front",
      angleDegree: "180°",
      name: "Head-On Cockpit",
      desc: "Aggressive tire clearance, 38mm fork stanchions & cockpit",
      image: activeBike.frontImage || activeBike.heroImage
    }
  ];

  const currentAngle = angleViews[selectedAngleIdx] || angleViews[0];

  const handleNextAngle = () => {
    setSelectedAngleIdx((prev) => (prev + 1) % angleViews.length);
  };

  const handleAutoRotate = () => {
    setIsRotating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setSelectedAngleIdx((prev) => (prev + 1) % angleViews.length);
      if (step >= 4) {
        clearInterval(interval);
        setIsRotating(false);
      }
    }, 600);
  };

  return (
    <section id="gallery" className="relative py-24 overflow-hidden border-t border-white/5 bg-black">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500 block mb-1">
              CHAPTER 06 // 360° PRECISION STUDIO
            </span>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl tracking-tight text-white">
              360° Precision Studio Showroom.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAutoRotate}
              disabled={isRotating}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-orbitron font-semibold text-zinc-300 bg-white/5 border border-white/10 hover:border-white/30 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ color: activeBike.accentColor }} />
              <span>{isRotating ? 'Rotating 360°...' : '360° Auto Turntable'}</span>
            </button>
          </div>
        </div>

        {/* Studio Viewport Card */}
        <div className="relative rounded-3xl glass-panel p-6 sm:p-12 border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Angle Switcher Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 z-20 relative">
            {angleViews.map((view, idx) => (
              <button
                key={view.id}
                onClick={() => setSelectedAngleIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-orbitron font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  selectedAngleIdx === idx
                    ? 'text-black shadow-lg scale-105'
                    : 'text-zinc-400 bg-white/5 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
                style={{
                  backgroundColor: selectedAngleIdx === idx ? activeBike.accentColor : undefined
                }}
              >
                <span className="text-[10px] opacity-70">{view.angleDegree}</span>
                <span>{view.name}</span>
              </button>
            ))}
          </div>

          {/* Large Main Display View */}
          <div 
            className="relative w-full max-w-3xl mx-auto aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center my-4 cursor-pointer group"
            onClick={handleNextAngle}
            title="Click to advance angle"
          >
            {/* Ambient Background Glow */}
            <div 
              className="absolute w-[400px] h-[400px] rounded-full blur-[140px] opacity-30 pointer-events-none transition-all duration-700"
              style={{ backgroundColor: activeBike.accentColor }}
            />

            <img
              key={currentAngle.image}
              src={currentAngle.image}
              alt={`${activeBike.name} - ${currentAngle.name}`}
              className="w-full h-full object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] transition-all duration-700 animate-in fade-in zoom-in-95 group-hover:scale-105"
            />

            {/* Click to rotate hint badge */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-orbitron text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
              CLICK TO SWITCH CAMERA PERSPECTIVE
            </div>
          </div>

          {/* Description Caption Bar */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-xs font-orbitron font-bold text-white tracking-wide block">
                {currentAngle.name} // {currentAngle.angleDegree} PERSPECTIVE
              </span>
              <p className="text-xs text-zinc-400 font-light mt-0.5">
                {currentAngle.desc}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-space text-zinc-500">
                100% UNCOMPRESSED STUDIO PHOTOMETRY
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MultiAngleSection;
