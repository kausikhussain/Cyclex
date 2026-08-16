import React, { useState } from 'react';
import { MapPin, Truck, ShieldCheck, Wrench, Headphones, Search, CheckCircle2, AlertCircle } from 'lucide-react';

const cityLookup = {
  '560': { city: 'Bengaluru, Karnataka', hub: 'Indiranagar Hub', days: '2-3 Business Days' },
  '400': { city: 'Mumbai, Maharashtra', hub: 'Bandra BKC Hub', days: '2-3 Business Days' },
  '110': { city: 'Delhi NCR', hub: 'Cyber City Hub', days: '2-3 Business Days' },
  '500': { city: 'Hyderabad, Telangana', hub: 'Hitec City Hub', days: '3-4 Business Days' },
  '600': { city: 'Chennai, Tamil Nadu', hub: 'Adyar Hub', days: '3-4 Business Days' },
  '411': { city: 'Pune, Maharashtra', hub: 'Koregaon Park Hub', days: '2-3 Business Days' },
  '700': { city: 'Kolkata, West Bengal', hub: 'Salt Lake Hub', days: '3-5 Business Days' },
  '768': { city: 'Jharsuguda, Odisha', hub: 'Eastern Regional Hub', days: '4-5 Business Days' },
  '380': { city: 'Ahmedabad, Gujarat', hub: 'SG Highway Hub', days: '3-4 Business Days' },
  '160': { city: 'Chandigarh, Punjab', hub: 'Sector 17 Hub', days: '3-4 Business Days' },
  '403': { city: 'Panaji, Goa', hub: 'Goa Coastal Hub', days: '3-4 Business Days' },
  '682': { city: 'Kochi, Kerala', hub: 'Ernakulam Hub', days: '3-4 Business Days' }
};

const DeliveryCheckerSection = ({ activeBike, onOpenPreOrder }) => {
  const [pincode, setPincode] = useState('');
  const [deliveryResult, setDeliveryResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheckPincode = (e) => {
    e.preventDefault();
    setError('');
    const cleanPin = pincode.trim();
    
    if (cleanPin.length !== 6 || !/^\d+$/.test(cleanPin)) {
      setError('Please enter a valid 6-digit Indian PIN code.');
      setDeliveryResult(null);
      return;
    }

    const prefix = cleanPin.substring(0, 3);
    const match = cityLookup[prefix];

    if (match) {
      setDeliveryResult({
        pincode: cleanPin,
        city: match.city,
        hub: match.hub,
        days: match.days,
        whiteGlove: 'Complimentary Master Mechanic Doorstep Setup Available'
      });
    } else {
      setDeliveryResult({
        pincode: cleanPin,
        city: 'All-India Express Coverage',
        hub: 'National Central Dispatch Hub',
        days: '4-6 Business Days',
        whiteGlove: 'Crated Direct-to-Door Delivery with Video Setup Guide'
      });
    }
  };

  return (
    <section id="delivery-support" className="relative py-20 overflow-hidden border-t border-white/5 bg-black">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-500 block mb-1">
            NATIONWIDE PAN-INDIA LOGISTICS & SUPPORT
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl tracking-tight text-white">
            Delivered Across India.
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light mt-2">
            Every {activeBike.name} is shipped in a custom wooden-reinforced flight crate with white-glove doorstep delivery and complimentary technician calibration.
          </p>
        </div>

        {/* 2 Column Box: PIN Code Checker + Service Warranty Perks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: PIN Code Delivery Checker Form */}
          <div className="lg:col-span-6 rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: activeBike.accentColor }} />
                <h3 className="font-orbitron font-bold text-base text-white tracking-wide uppercase">
                  Check Delivery & Service to Your Location
                </h3>
              </div>

              <p className="text-xs text-zinc-400 font-light">
                Enter your 6-digit postal PIN code to check estimated delivery timeline and local technician availability.
              </p>

              <form onSubmit={handleCheckPincode} className="flex gap-2 pt-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter 6-digit PIN (e.g. 560001, 400001, 768200)"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-black/60 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 font-orbitron tracking-wider"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full font-orbitron text-xs font-bold text-black transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 whitespace-nowrap"
                  style={{ backgroundColor: activeBike.accentColor }}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>CHECK</span>
                </button>
              </form>

              {error && (
                <div className="flex items-center gap-2 text-xs text-rose-400 font-space pt-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              {deliveryResult && (
                <div className="p-4 rounded-2xl bg-zinc-950/90 border border-white/10 space-y-2 mt-4 animate-in fade-in zoom-in-95">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-orbitron font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>PIN {deliveryResult.pincode} // {deliveryResult.city}</span>
                    </span>
                    <span className="text-[10px] font-orbitron font-bold" style={{ color: activeBike.accentColor }}>
                      {deliveryResult.days}
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-300 font-space">
                    <p>• Nearest Support Hub: <strong className="text-white">{deliveryResult.hub}</strong></p>
                    <p>• Logistics: <strong className="text-emerald-400">{deliveryResult.whiteGlove}</strong></p>
                    <p>• Zero Transit Damage Guarantee: <strong className="text-white">Included</strong></p>
                  </div>
                </div>
              )}
            </div>

            {/* Micro Delivery Badges */}
            <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-white/5">
              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-3">
                <Truck className="w-5 h-5" style={{ color: activeBike.accentColor }} />
                <div className="text-left">
                  <span className="font-orbitron text-xs font-bold text-white block">Free Shipping</span>
                  <span className="text-[10px] text-zinc-500 font-space">Pan-India Crated Logistics</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-3">
                <Wrench className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <span className="font-orbitron text-xs font-bold text-white block">Doorstep Setup</span>
                  <span className="text-[10px] text-zinc-500 font-space">By Certified Mechanic</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Service Network & Warranty Pillars */}
          <div className="lg:col-span-6 rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 flex flex-col justify-between shadow-2xl space-y-6">
            
            <div className="space-y-2">
              <span className="text-[10px] font-orbitron font-bold tracking-[0.25em] text-zinc-400 uppercase">
                PEACE OF MIND OWNERSHIP
              </span>
              <h3 className="font-orbitron font-black text-2xl text-white">
                5-Year Comprehensive Warranty & Service
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                We back every bicycle with an industry-leading ownership program designed specifically for riders across India.
              </p>
            </div>

            <div className="space-y-3 text-left">
              <div className="p-3.5 rounded-2xl bg-zinc-950/70 border border-white/5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-orbitron font-bold text-xs text-white">5-Year Carbon Frame Warranty</h4>
                  <p className="text-[11px] text-zinc-400 font-light mt-0.5">Full replacement guarantee on carbon chassis integrity, welds, and swingarms.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-950/70 border border-white/5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-orbitron font-bold text-xs text-white">3-Year Battery & Motor Replacement</h4>
                  <p className="text-[11px] text-zinc-400 font-light mt-0.5">Guaranteed minimum 80% battery health capacity across 36 months of ownership.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-950/70 border border-white/5 flex items-start gap-3">
                <Headphones className="w-5 h-5 shrink-0 mt-0.5" style={{ color: activeBike.accentColor }} />
                <div>
                  <h4 className="font-orbitron font-bold text-xs text-white">24/7 Pan-India Roadside Assistance (RSA)</h4>
                  <p className="text-[11px] text-zinc-400 font-light mt-0.5">Emergency trail breakdown recovery and express replacement tube dispatch across 45+ cities.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/5">
              <span className="text-xs font-space text-zinc-400">
                Starting at <strong className="text-white font-orbitron">{activeBike.priceFormatted}</strong>
              </span>
              <button
                onClick={() => onOpenPreOrder(activeBike)}
                className="px-5 py-2 rounded-full font-orbitron text-xs font-bold text-black shadow-lg hover:scale-105 transition-all"
                style={{ backgroundColor: activeBike.accentColor }}
              >
                Pre-order with ₹9,999 Deposit
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DeliveryCheckerSection;
