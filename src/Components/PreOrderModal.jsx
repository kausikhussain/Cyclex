import React, { useState } from 'react';
import { X, Check, ChevronRight, ChevronLeft, ShieldCheck, Truck, Sparkles, CreditCard, Smartphone, Building, QrCode } from 'lucide-react';
import { formatINR } from '../utils/formatters';

const indianStates = [
  "Karnataka", "Maharashtra", "Delhi NCR", "Telangana", "Tamil Nadu", 
  "Gujarat", "West Bengal", "Odisha", "Kerala", "Punjab", "Rajasthan", "Goa", "Other"
];

const PreOrderModal = ({ isOpen, onClose, bike, bikes, onSelectBike }) => {
  const [step, setStep] = useState(1);
  const [selectedBike, setSelectedBike] = useState(bike || bikes[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [wheelSetup, setWheelSetup] = useState('29er');
  const [selectedUpgrades, setSelectedUpgrades] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [selectedEmiBank, setSelectedEmiBank] = useState('HDFC Bank (No-Cost EMI)');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: 'Karnataka',
    city: 'Bengaluru',
    pincode: '560001',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const currentBike = selectedBike || bike || bikes[0];

  const sizes = [
    { id: 'S', name: 'Small', riderHeight: "5'2\" – 5'7\" (157–170 cm)" },
    { id: 'M', name: 'Medium', riderHeight: "5'7\" – 5'11\" (170–180 cm)" },
    { id: 'L', name: 'Large', riderHeight: "5'11\" – 6'3\" (180–190 cm)" },
    { id: 'XL', name: 'X-Large', riderHeight: "6'2\"+ (188+ cm)" }
  ];

  const upgrades = [
    { id: 'cushcore', name: 'CushCore EVO Pro Tire Inserts', priceINR: 12499, price: '+₹12,499', desc: 'Rim protection & lower tire pressures for broken road joints' },
    { id: 'titanium', name: 'Burnt Titanium Hardware & Bolt Kit', priceINR: 18999, price: '+₹18,999', desc: 'Saves 85g with oil-slick rainbow anti-corrosion finish' },
    { id: 'garmin', name: 'Integrated GPS & Radar Mount System', priceINR: 7499, price: '+₹7,499', desc: 'Direct-stem CNC aero mount for Garmin and Wahoo' }
  ];

  const toggleUpgrade = (id) => {
    setSelectedUpgrades(prev => 
      prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]
    );
  };

  const calculateTotalUpgrades = () => {
    return selectedUpgrades.reduce((sum, upId) => {
      const up = upgrades.find(u => u.id === upId);
      return sum + (up ? up.priceINR : 0);
    }, 0);
  };

  const basePrice = currentBike.priceINR;
  const upgradeTotal = calculateTotalUpgrades();
  const totalPrice = basePrice + upgradeTotal;

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setOrderConfirmed(true);
      }, 1200);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const resetAndClose = () => {
    setStep(1);
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl glass-panel border border-white/15 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-orbitron font-bold tracking-[0.25em] text-zinc-400 uppercase">
                INDIA RESERVATION // STEP 0{step} OF 03
              </span>
              <span className="text-[9px] font-orbitron font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                ₹ INR
              </span>
            </div>
            <h3 className="font-orbitron font-black text-xl sm:text-2xl text-white tracking-tight mt-0.5">
              {orderConfirmed ? 'Reservation Confirmed' : `Pre-Order ${currentBike.name} (${currentBike.priceFormatted})`}
            </h3>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {orderConfirmed ? (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div 
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center border-2"
                style={{ borderColor: currentBike.accentColor, backgroundColor: `${currentBike.accentColor}20` }}
              >
                <Check className="w-8 h-8" style={{ color: currentBike.accentColor }} />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-orbitron font-bold tracking-[0.3em] uppercase text-zinc-400">
                  BOOKING REFERENCE #SPX-IN-2025-{Math.floor(100000 + Math.random() * 900000)}
                </span>
                <h4 className="font-orbitron font-black text-2xl sm:text-3xl text-white">
                  Welcome to Team {currentBike.name}
                </h4>
                <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto font-light leading-relaxed">
                  Your build slot has been registered. Our Indian Master Mechanic team will contact you at <strong className="text-white">{formData.email || 'your email'}</strong> / <strong className="text-white">{formData.phone || '+91'}</strong> for final chassis sizing and doorstep crated delivery scheduling.
                </p>
              </div>

              {/* Order Summary Receipt Box */}
              <div className="p-5 rounded-2xl bg-zinc-950/90 border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs font-space">
                <div className="flex justify-between text-zinc-400">
                  <span>Model:</span>
                  <strong className="text-white font-orbitron">{currentBike.name} Flagship</strong>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Frame Size:</span>
                  <strong className="text-white font-orbitron">Size {selectedSize}</strong>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Wheel Setup:</span>
                  <strong className="text-white font-orbitron">{wheelSetup === '29er' ? 'Full 29er DT Swiss' : 'MX Mullet (29/27.5)'}</strong>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Delivery Address:</span>
                  <strong className="text-white">{formData.city}, {formData.state} ({formData.pincode})</strong>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Configured Vehicle Price:</span>
                  <strong className="text-white font-orbitron">{formatINR(totalPrice)}</strong>
                </div>
                <div className="flex justify-between text-zinc-400 pt-2 border-t border-white/10">
                  <span>Refundable Reservation Deposit:</span>
                  <strong className="font-orbitron text-sm text-emerald-400">{currentBike.depositFormatted} SECURED</strong>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="px-8 py-3 rounded-full font-orbitron text-xs font-bold text-black transition-all transform hover:scale-105"
                style={{ backgroundColor: currentBike.accentColor }}
              >
                RETURN TO PRODUCT EXPERIENCE
              </button>
            </div>
          ) : (
            /* Multi-step Configurator */
            <>
              {/* Step 1: Model & Colorway */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-orbitron font-bold tracking-wider text-zinc-400 uppercase block mb-3">
                      Select Model & Identity
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {bikes.map((b) => (
                        <button
                          key={b.id}
                          onClick={() => {
                            setSelectedBike(b);
                            const idx = bikes.findIndex(x => x.id === b.id);
                            if (onSelectBike && idx !== -1) onSelectBike(idx);
                          }}
                          className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-28 relative ${
                            currentBike.id === b.id
                              ? 'bg-zinc-900 border-white shadow-xl scale-[1.02]'
                              : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: b.accentColor }} 
                            />
                            {currentBike.id === b.id && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <div>
                            <span className="font-orbitron font-bold text-sm text-white block">{b.name}</span>
                            <span className="text-[10px] font-space text-zinc-300 font-semibold">{b.priceFormatted}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Frame Size */}
                  <div>
                    <label className="text-xs font-orbitron font-bold tracking-wider text-zinc-400 uppercase block mb-3">
                      Select Frame Size
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {sizes.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setSelectedSize(s.id)}
                          className={`p-3 rounded-2xl border text-left transition-all ${
                            selectedSize === s.id
                              ? 'bg-zinc-900 border-white text-white shadow-lg'
                              : 'bg-zinc-950/60 border-white/10 text-zinc-400 hover:border-white/20'
                          }`}
                        >
                          <div className="font-orbitron font-black text-lg text-white">{s.id}</div>
                          <div className="text-[10px] font-orbitron text-zinc-400">{s.name}</div>
                          <div className="text-[9px] font-space text-zinc-500 mt-1">{s.riderHeight}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Wheel Architecture */}
                  <div>
                    <label className="text-xs font-orbitron font-bold tracking-wider text-zinc-400 uppercase block mb-3">
                      Wheel Configuration
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setWheelSetup('29er')}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          wheelSetup === '29er'
                            ? 'bg-zinc-900 border-white shadow-md'
                            : 'bg-zinc-950/60 border-white/10 hover:border-white/20 text-zinc-400'
                        }`}
                      >
                        <div className="font-orbitron font-bold text-xs text-white">Full 29" Wheels</div>
                        <div className="text-[10px] text-zinc-400 font-light mt-0.5">Maximum rollover velocity and momentum carry on highway & trails</div>
                      </button>

                      <button
                        onClick={() => setWheelSetup('mullet')}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          wheelSetup === 'mullet'
                            ? 'bg-zinc-900 border-white shadow-md'
                            : 'bg-zinc-950/60 border-white/10 hover:border-white/20 text-zinc-400'
                        }`}
                      >
                        <div className="font-orbitron font-bold text-xs text-white">MX Mullet (29" F / 27.5" R)</div>
                        <div className="text-[10px] text-zinc-400 font-light mt-0.5">Agile cornering clearance for technical downhill hairpin descents</div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Upgrades */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-orbitron font-bold tracking-wider text-zinc-400 uppercase block">
                      Optional Factory Performance Upgrades
                    </label>
                    <span className="text-xs font-space text-zinc-400">
                      Base: <strong className="text-white font-orbitron">{currentBike.priceFormatted}</strong>
                    </span>
                  </div>

                  {upgrades.map((up) => {
                    const isSelected = selectedUpgrades.includes(up.id);
                    return (
                      <div
                        key={up.id}
                        onClick={() => toggleUpgrade(up.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-zinc-900 border-white shadow-lg'
                            : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="space-y-0.5">
                          <div className="font-orbitron font-bold text-xs text-white flex items-center gap-2">
                            <span>{up.name}</span>
                            <span className="text-[10px] font-space px-2 py-0.5 rounded-full bg-white/10 font-semibold" style={{ color: currentBike.accentColor }}>
                              {up.price}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 font-light">{up.desc}</p>
                        </div>

                        <div 
                          className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                            isSelected ? 'bg-white border-white text-black' : 'border-zinc-700 bg-black/40'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}

                  <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-orbitron text-zinc-400 uppercase">Configured Total (Inc. GST)</span>
                    <span className="font-orbitron text-lg font-black text-white">{formatINR(totalPrice)}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 mt-4">
                    <div className="flex items-center gap-2 text-xs font-orbitron text-zinc-300">
                      <Truck className="w-4 h-4 text-sky-400" />
                      <span>Complimentary Pan-India Wooden Flight Crate Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-orbitron text-zinc-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>100% Fully Refundable Deposit Prior to Factory Assembly</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Customer Details & Reservation Payment */}
              {step === 3 && (
                <div className="space-y-4">
                  <label className="text-xs font-orbitron font-bold tracking-wider text-zinc-400 uppercase block">
                    Contact & Delivery Reservation (India)
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-[10px] font-orbitron text-zinc-500 uppercase block mb-1">First Name</span>
                      <input
                        type="text"
                        required
                        placeholder="Rohan"
                        value={formData.firstName}
                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:outline-none focus:border-white/40"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-orbitron text-zinc-500 uppercase block mb-1">Last Name</span>
                      <input
                        type="text"
                        required
                        placeholder="Sharma"
                        value={formData.lastName}
                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:outline-none focus:border-white/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-[10px] font-orbitron text-zinc-500 uppercase block mb-1">Email Address</span>
                      <input
                        type="email"
                        required
                        placeholder="rohan.sharma@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:outline-none focus:border-white/40"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-orbitron text-zinc-500 uppercase block mb-1">Phone (+91 Mobile)</span>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:outline-none focus:border-white/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <span className="text-[10px] font-orbitron text-zinc-500 uppercase block mb-1">State</span>
                      <select
                        value={formData.state}
                        onChange={e => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:outline-none focus:border-white/40"
                      >
                        {indianStates.map(s => <option key={s} value={s} className="bg-zinc-900">{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <span className="text-[10px] font-orbitron text-zinc-500 uppercase block mb-1">City</span>
                      <input
                        type="text"
                        placeholder="Bengaluru"
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:outline-none focus:border-white/40"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-orbitron text-zinc-500 uppercase block mb-1">PIN Code</span>
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="560001"
                        value={formData.pincode}
                        onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:outline-none focus:border-white/40"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-orbitron text-zinc-500 uppercase block">Deposit Payment Option</span>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-2.5 rounded-xl border text-center text-xs font-orbitron flex flex-col items-center gap-1 transition-all ${
                          paymentMethod === 'upi' ? 'bg-zinc-900 border-white text-white' : 'bg-zinc-950 border-white/10 text-zinc-400'
                        }`}
                      >
                        <Smartphone className="w-4 h-4" style={{ color: currentBike.accentColor }} />
                        <span>UPI (GPay / PhonePe)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('cards')}
                        className={`p-2.5 rounded-xl border text-center text-xs font-orbitron flex flex-col items-center gap-1 transition-all ${
                          paymentMethod === 'cards' ? 'bg-zinc-900 border-white text-white' : 'bg-zinc-950 border-white/10 text-zinc-400'
                        }`}
                      >
                        <CreditCard className="w-4 h-4 text-emerald-400" />
                        <span>Credit / Debit Card</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('emi')}
                        className={`p-2.5 rounded-xl border text-center text-xs font-orbitron flex flex-col items-center gap-1 transition-all ${
                          paymentMethod === 'emi' ? 'bg-zinc-900 border-white text-white' : 'bg-zinc-950 border-white/10 text-zinc-400'
                        }`}
                      >
                        <Building className="w-4 h-4 text-sky-400" />
                        <span>No-Cost EMI</span>
                      </button>
                    </div>
                  </div>

                  {/* Payment Info Badge */}
                  <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-orbitron font-bold text-white block">Reserve Build Slot (India)</span>
                      <span className="text-[10px] text-zinc-500 font-space">100% Refundable Booking Deposit</span>
                    </div>
                    <span className="font-orbitron font-black text-xl text-emerald-400">
                      {currentBike.depositFormatted}
                    </span>
                  </div>
                </div>
              )}
            </>
          )}

        </div>

        {/* Footer Navigation */}
        {!orderConfirmed && (
          <div className="p-4 sm:p-6 border-t border-white/10 bg-black/60 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={handlePrevStep}
                className="px-4 py-2 rounded-full text-xs font-orbitron text-zinc-400 hover:text-white flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div className="text-xs font-space text-zinc-500">
                Delivery Window: Q4 2025 • Doorstep Assembly Included
              </div>
            )}

            <button
              onClick={handleNextStep}
              disabled={isSubmitting}
              className="px-7 py-3 rounded-full font-orbitron text-xs font-bold text-black transition-all transform hover:scale-105 shadow-xl flex items-center gap-2 disabled:opacity-50"
              style={{ backgroundColor: currentBike.accentColor }}
            >
              <span>{isSubmitting ? 'Securing Slot...' : step === 3 ? `Pay ${currentBike.depositFormatted} Deposit` : 'Continue'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default PreOrderModal;
