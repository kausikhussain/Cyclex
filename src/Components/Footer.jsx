import React from 'react';
import { ChevronRight, ArrowUpRight, ShieldCheck, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Footer = ({ activeBike, onOpenPreOrder, onOpenSpecs }) => {
  return (
    <footer className="relative bg-[#040406] border-t border-white/10 pt-16 pb-12 overflow-hidden text-left">
      
      {/* Subtle Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[180px] opacity-15 pointer-events-none"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Newsletter / VIP Allocation Banner */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-orbitron font-bold tracking-[0.25em] uppercase text-zinc-400">
              INDIA VIP ALLOCATION // BATCH 01
            </span>
            <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white">
              Join the Private India Demo Day & VIP Allocation
            </h3>
            <p className="text-xs text-zinc-400 font-light max-w-md">
              Receive private demo day invitations across Bengaluru, Mumbai, and Delhi NCR, exclusive factory delivery slots, and priority accessory vouchers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-72 px-4 py-3 rounded-full bg-black/60 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/40"
            />
            <button
              onClick={() => alert('Thank you for subscribing to SPECTRA India VIP Allocation.')}
              className="w-full sm:w-auto px-6 py-3 rounded-full font-orbitron text-xs font-bold text-black transition-all transform hover:scale-105 whitespace-nowrap shadow-xl"
              style={{ backgroundColor: activeBike.accentColor }}
            >
              REQUEST INVITE
            </button>
          </div>
        </div>

        {/* 4 Column Directory Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/5 text-xs">
          
          {/* Col 1: Brand Info & Indian Hubs */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-6 rounded-full" style={{ backgroundColor: activeBike.accentColor }} />
              <span className="font-orbitron font-black text-lg tracking-widest text-white">
                SPECTRA
              </span>
            </div>
            <p className="text-zinc-400 text-xs font-light leading-relaxed">
              Ultra-premium performance bicycles engineered without compromise. Calibrated for modern Indian roads, Western Ghats, and alpine terrain.
            </p>
            <div className="text-[11px] text-zinc-500 font-space space-y-1">
              <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-zinc-400" /> R&D & Experience Center: Indiranagar, Bengaluru</p>
              <p>Regional Hubs: Mumbai • Delhi NCR • Hyderabad • Pune</p>
            </div>
          </div>

          {/* Col 2: Flagship Lineup in INR */}
          <div className="space-y-3">
            <h4 className="font-orbitron font-bold text-xs tracking-wider text-white uppercase">
              India Lineup (₹ INR)
            </h4>
            <ul className="space-y-2 text-zinc-400 font-space">
              <li><a href="#bikes" className="hover:text-white transition-colors">SPECTRA Enduro — ₹2,49,999</a></li>
              <li><a href="#bikes" className="hover:text-white transition-colors">RIDGE Downhill — ₹2,29,999</a></li>
              <li><a href="#bikes" className="hover:text-white transition-colors">VORTEX Hyper — ₹2,89,999</a></li>
              <li><button onClick={onOpenSpecs} className="hover:text-white transition-colors text-left">Chassis Blueprint Database</button></li>
            </ul>
          </div>

          {/* Col 3: India Adaptations & Engineering */}
          <div className="space-y-3">
            <h4 className="font-orbitron font-bold text-xs tracking-wider text-white uppercase">
              Engineering
            </h4>
            <ul className="space-y-2 text-zinc-400 font-space">
              <li><a href="#built-for-india" className="hover:text-white transition-colors">IP67 Monsoon Sealing</a></li>
              <li><a href="#built-for-india" className="hover:text-white transition-colors">Pothole Dampening System</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Toray T1000 Carbon Monocoque</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">90Nm Incline Assist Powerplant</a></li>
            </ul>
          </div>

          {/* Col 4: Ownership & Support in India */}
          <div className="space-y-3">
            <h4 className="font-orbitron font-bold text-xs tracking-wider text-white uppercase">
              Ownership & RSA
            </h4>
            <ul className="space-y-2 text-zinc-400 font-space">
              <li><button onClick={() => onOpenPreOrder(activeBike)} className="hover:text-white transition-colors text-left">Pre-Order Reservation (₹9,999)</button></li>
              <li><a href="#delivery-support" className="hover:text-white transition-colors">5-Year Frame Warranty</a></li>
              <li><a href="#delivery-support" className="hover:text-white transition-colors">Pan-India Roadside Assistance</a></li>
              <li><a href="#delivery-support" className="hover:text-white transition-colors">PIN Code Delivery Checker</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-space text-zinc-500">
          <div>
            © 2025 SPECTRA BICYCLES PRIVATE LIMITED (INDIA). ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>Prices inclusive of 18% GST</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Sale</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">BIS Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
