import React, { useState } from 'react';
import { X, Search, Sliders, CheckCircle2, Download, ChevronRight } from 'lucide-react';

const SpecsModal = ({ isOpen, onClose, bike, onOpenPreOrder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  if (!isOpen || !bike) return null;

  const categories = ['ALL', ...bike.fullSpecs.map(s => s.category)];

  const filteredSpecs = bike.fullSpecs
    .filter(cat => selectedCategory === 'ALL' || cat.category === selectedCategory)
    .map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }))
    .filter(cat => cat.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Container Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl glass-panel border border-white/15 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: bike.accentColor }} />
              <span className="text-[10px] font-orbitron font-bold tracking-[0.25em] text-zinc-400 uppercase">
                COMPLETE TECHNICAL SPECIFICATION // INDIA
              </span>
            </div>
            <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white tracking-tight mt-1">
              {bike.name} Component Architecture
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
            aria-label="Close specifications"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 sm:px-8 border-b border-white/5 bg-zinc-950/60 flex flex-col sm:flex-row items-center gap-3">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-full bg-black/50 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-[10px] font-orbitron font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'text-black font-bold'
                    : 'text-zinc-400 hover:text-white bg-white/5'
                }`}
                style={{
                  backgroundColor: selectedCategory === cat ? bike.accentColor : undefined
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Scrollable Specs Table Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {filteredSpecs.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 font-space text-sm">
              No specifications match "{searchTerm}"
            </div>
          ) : (
            filteredSpecs.map((catGroup, idx) => (
              <div key={idx} className="space-y-3">
                <h4 
                  className="text-xs font-orbitron font-bold tracking-widest uppercase flex items-center gap-2"
                  style={{ color: bike.accentColor }}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{catGroup.category}</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {catGroup.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3.5 rounded-2xl bg-zinc-950/70 border border-white/5 flex flex-col justify-between hover:border-white/15 transition-all"
                    >
                      <span className="text-[10px] font-orbitron font-semibold text-zinc-500 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-xs font-space font-medium text-zinc-200 mt-1">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 font-space">
            Price: <strong className="text-white font-orbitron">{bike.priceFormatted}</strong> • Booking Deposit: <strong className="text-white font-orbitron">{bike.depositFormatted}</strong> (100% Refundable)
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-orbitron text-zinc-400 hover:text-white bg-white/5 border border-white/10 transition-all w-full sm:w-auto text-center"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenPreOrder(bike);
              }}
              className="px-6 py-2.5 rounded-full text-xs font-orbitron font-bold text-black transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{ backgroundColor: bike.accentColor }}
            >
              <span>Pre-order {bike.name}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SpecsModal;
