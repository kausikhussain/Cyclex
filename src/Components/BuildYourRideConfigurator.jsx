import React, { useState } from 'react';
import { Check, ChevronRight, Sliders, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { formatINR } from '../utils/formatters';

const upgradesList = [
  { id: 'cushcore', name: 'CushCore EVO Pro Tire Inserts', priceINR: 12499, desc: 'Rim protection & lower tire pressures for broken road joints' },
  { id: 'titanium', name: 'Burnt Titanium Hardware & Bolt Kit', priceINR: 18999, desc: 'Saves 85g with oil-slick rainbow anti-corrosion finish' },
  { id: 'garmin', name: 'Integrated GPS & Radar Stem Mount System', priceINR: 7499, desc: 'Direct-stem CNC aero mount for Garmin and Wahoo' }
];

const sizes = [
  { id: 'S', name: 'Small', height: "5'2\"–5'7\"" },
  { id: 'M', name: 'Medium', height: "5'7\"–5'11\"" },
  { id: 'L', name: 'Large', height: "5'11\"–6'3\"" },
  { id: 'XL', name: 'X-Large', height: "6'2\"+" }
];

const BuildYourRideConfigurator = ({ activeBike, bikes, onSelectBike, onOpenPreOrder }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [wheelSetup, setWheelSetup] = useState('29er');
  const [selectedUpgrades, setSelectedUpgrades] = useState(['cushcore']);

  const toggleUpgrade = (id) => {
    setSelectedUpgrades(prev => 
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    );
  };

  const upgradesTotal = selectedUpgrades.reduce((sum, upId) => {
    const up = upgradesList.find(u => u.id === upId);
    return sum + (up ? up.priceINR : 0);
  }, 0);

  const basePrice = activeBike.priceINR;
  const totalPrice = basePrice + upgradesTotal;

  return (
    <section id="configurator" className="relative py-24 overflow-hidden border-t border-white/5 bg-gradient-to-b from-black via-zinc-950/90 to-black">
      
      {/* Glow */}
      <div 
        className="absolute top-1/2 right-1/3 w-[600px] h-[500px] rounded-full blur-[180px] opacity-20 pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500 block mb-1">
              CHAPTER 07 // BUILD YOUR RIDE
            </span>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl tracking-tight text-white">
              Configure Your Machine.
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md">
            Customize chassis model, sizing, wheel architecture, and factory race upgrades. All pricing calculated dynamically in ₹ INR.
          </p>
        </div>

        {/* 2 Column Configurator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Preview */}
          <div className="lg:col-span-6 rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 flex flex-col justify-between shadow-2xl space-y-6 sticky top-24">
            
            {/* Visual Frame */}
            <div className="relative w-full aspect-[16/10] flex items-center justify-center py-4">
              <div 
                className="absolute inset-0 rounded-full blur-[100px] opacity-30 pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeBike.accentColor }}
              />
              <img
                src={activeBike.heroImage}
                alt={`${activeBike.name} Custom Build`}
                className="w-full h-full object-contain filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.95)] transition-all duration-700 transform hover:scale-105"
              />
            </div>

            {/* Config Specs Badge Bar */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
              <div className="p-3 rounded-2xl bg-black/50 border border-white/5">
                <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">FRAME SIZE</span>
                <span className="font-orbitron text-xs font-bold text-white">SIZE {selectedSize}</span>
              </div>
              <div className="p-3 rounded-2xl bg-black/50 border border-white/5">
                <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">WHEELS</span>
                <span className="font-orbitron text-xs font-bold text-white">{wheelSetup === '29er' ? 'FULL 29"' : 'MX MULLET'}</span>
              </div>
              <div className="p-3 rounded-2xl bg-black/50 border border-white/5">
                <span className="text-[9px] font-orbitron text-zinc-500 uppercase block">UPGRADES</span>
                <span className="font-orbitron text-xs font-bold" style={{ color: activeBike.accentColor }}>
                  {selectedUpgrades.length} SELECTED
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Options & Live Price Summary */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Option 1: Select Model */}
            <div className="rounded-3xl glass-panel p-6 border border-white/10 space-y-4">
              <label className="text-xs font-orbitron font-bold tracking-wider text-zinc-400 uppercase block">
                01 // Select Model & Chassis
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {bikes.map((b, idx) => (
                  <button
                    key={b.id}
                    onClick={() => onSelectBike(idx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between h-24 ${
                      activeBike.id === b.id
                        ? 'bg-zinc-900 border-white shadow-xl scale-[1.02]'
                        : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: b.accentColor }} />
                      {activeBike.id === b.id && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div>
                      <span className="font-orbitron font-bold text-xs text-white block">{b.name}</span>
                      <span className="text-[10px] font-space text-zinc-300 font-semibold">{b.priceFormatted}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Option 2: Frame Sizing */}
            <div className="rounded-3xl glass-panel p-6 border border-white/10 space-y-4">
              <label className="text-xs font-orbitron font-bold tracking-wider text-zinc-400 uppercase block">
                02 // Frame Sizing (Rider Fit)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSize(s.id)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      selectedSize === s.id
                        ? 'bg-zinc-900 border-white text-white shadow-lg'
                        : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:border-white/20'
                    }`}
                  >
                    <span className="font-orbitron font-black text-base text-white block">{s.id}</span>
                    <span className="text-[9px] font-space text-zinc-500">{s.height}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Option 3: Wheel Setup */}
            <div className="rounded-3xl glass-panel p-6 border border-white/10 space-y-4">
              <label className="text-xs font-orbitron font-bold tracking-wider text-zinc-400 uppercase block">
                03 // Wheel Setup
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setWheelSetup('29er')}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    wheelSetup === '29er' ? 'bg-zinc-900 border-white text-white' : 'bg-zinc-950/60 border-white/10 text-zinc-400'
                  }`}
                >
                  <span className="font-orbitron text-xs font-bold block">Full 29er DT Swiss</span>
                  <span className="text-[10px] text-zinc-500 font-space">Maximum trail rollover</span>
                </button>

                <button
                  onClick={() => setWheelSetup('mullet')}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    wheelSetup === 'mullet' ? 'bg-zinc-900 border-white text-white' : 'bg-zinc-950/60 border-white/10 text-zinc-400'
                  }`}
                >
                  <span className="font-orbitron text-xs font-bold block">MX Mullet (29/27.5)</span>
                  <span className="text-[10px] text-zinc-500 font-space">Agile downhill cornering</span>
                </button>
              </div>
            </div>

            {/* Option 4: Factory Performance Upgrades */}
            <div className="rounded-3xl glass-panel p-6 border border-white/10 space-y-3">
              <label className="text-xs font-orbitron font-bold tracking-wider text-zinc-400 uppercase block">
                04 // Factory Race Upgrades
              </label>
              {upgradesList.map((up) => {
                const isSelected = selectedUpgrades.includes(up.id);
                return (
                  <div
                    key={up.id}
                    onClick={() => toggleUpgrade(up.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected ? 'bg-zinc-900 border-white text-white' : 'bg-zinc-950/60 border-white/10 text-zinc-400'
                    }`}
                  >
                    <div>
                      <div className="font-orbitron font-bold text-xs flex items-center gap-2">
                        <span>{up.name}</span>
                        <span className="text-[10px] font-space px-2 py-0.5 rounded-full bg-white/10" style={{ color: activeBike.accentColor }}>
                          +{formatINR(up.priceINR)}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 font-light mt-0.5">{up.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${isSelected ? 'bg-white text-black' : 'border-zinc-700'}`}>
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Pricing Breakdown Box */}
            <div className="rounded-3xl glass-panel p-6 border border-white/15 space-y-4 shadow-2xl bg-zinc-950/90">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-orbitron font-bold text-white uppercase">Your Build Summary</span>
                <span className="text-[10px] font-space text-zinc-400">All India Pricing</span>
              </div>

              <div className="space-y-2 text-xs font-space text-zinc-400">
                <div className="flex justify-between">
                  <span>{activeBike.name} Base Vehicle</span>
                  <strong className="text-white font-orbitron">{formatINR(basePrice)}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Selected Factory Upgrades ({selectedUpgrades.length})</span>
                  <strong className="text-white font-orbitron">+{formatINR(upgradesTotal)}</strong>
                </div>
                <div className="flex justify-between">
                  <span>18% GST & Wooden Crated Shipping</span>
                  <strong className="text-emerald-400">Included</strong>
                </div>
                <div className="flex justify-between pt-3 border-t border-white/10 text-sm">
                  <span className="font-orbitron font-bold text-white uppercase">Configured Total Price</span>
                  <span className="font-orbitron font-black text-xl text-white">{formatINR(totalPrice)}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenPreOrder(activeBike)}
                className="w-full py-4 rounded-full font-orbitron text-xs sm:text-sm font-black tracking-wider text-black transition-all transform hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-2"
                style={{ backgroundColor: activeBike.accentColor }}
              >
                <span>PRE-ORDER THIS BUILD ({activeBike.depositFormatted} Deposit)</span>
                <ChevronRight className="w-4 h-4 text-black" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BuildYourRideConfigurator;
