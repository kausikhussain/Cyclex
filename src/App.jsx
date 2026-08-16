import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import DominanceSection from './Components/DominanceSection';
import UnderTheHoodSection from './Components/UnderTheHoodSection';
import EngineeringExplodedSection from './Components/EngineeringExplodedSection';
import BuiltForIndiaSection from './Components/BuiltForIndiaSection';
import MultiAngleSection from './Components/MultiAngleSection';
import BuildYourRideConfigurator from './Components/BuildYourRideConfigurator';
import DeliveryCheckerSection from './Components/DeliveryCheckerSection';
import ReadyToRideSection from './Components/ReadyToRideSection';
import ScrollProgressTracker from './Components/ScrollProgressTracker';
import SpecsModal from './Components/SpecsModal';
import PreOrderModal from './Components/PreOrderModal';
import CustomCursor from './Components/CustomCursor';
import Footer from './Components/Footer';
import bikesData from './data/bikes';

const App = () => {
  const [bikes, setBikes] = useState(bikesData);
  const [selectedBikeIdx, setSelectedBikeIdx] = useState(0);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isPreOrderOpen, setIsPreOrderOpen] = useState(false);
  const [preOrderTargetBike, setPreOrderTargetBike] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const activeBike = bikes[selectedBikeIdx] || bikes[0];

  // Subtle web audio synthetic sound click
  const playTactileSound = (freq = 440, type = 'sine') => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // Audio context might be restricted before user interaction
    }
  };

  const handleSelectBike = (idx) => {
    setSelectedBikeIdx(idx);
    playTactileSound(580, 'triangle');
  };

  const handleLike = (idx = selectedBikeIdx) => {
    setBikes(prev => prev.map((b, i) => i === idx ? { ...b, likes: b.likes + 1 } : b));
    playTactileSound(880, 'sine');
  };

  const handleOpenPreOrder = (bike = activeBike) => {
    setPreOrderTargetBike(bike);
    setIsPreOrderOpen(true);
    playTactileSound(620, 'sine');
  };

  const handleOpenSpecs = () => {
    setIsSpecsOpen(true);
    playTactileSound(520, 'triangle');
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-amber-500 selection:text-black relative overflow-x-hidden">
      
      {/* Dynamic Background Atmospheric Radial Glow */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] blur-[180px] opacity-20 pointer-events-none transition-all duration-1000 z-0 animate-atmosphere"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      {/* Subtle Desktop Cursor */}
      <CustomCursor activeColor={activeBike.accentColor} />

      {/* Floating 01/08 Scroll Chapter Progress Tracker */}
      <ScrollProgressTracker activeColor={activeBike.accentColor} />

      {/* Top Navbar */}
      <Navbar 
        activeBike={activeBike} 
        bikes={bikes} 
        onSelectBike={handleSelectBike}
        onOpenPreOrder={handleOpenPreOrder}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {/* Cinematic 8-Chapter Storytelling Flow */}
      <main className="relative z-10 space-y-0">
        
        {/* Chapter 01: The Machine (Hero Performance) */}
        <HeroSection 
          activeBike={activeBike}
          bikes={bikes}
          selectedBikeIdx={selectedBikeIdx}
          onSelectBike={handleSelectBike}
          likesCount={activeBike.likes}
          onLike={() => handleLike(selectedBikeIdx)}
          onOpenPreOrder={handleOpenPreOrder}
          onOpenSpecs={handleOpenSpecs}
        />

        {/* Chapter 02: Chassis Dynamics (Dominance on Two Wheels) */}
        <DominanceSection 
          activeBike={activeBike}
          likesCount={activeBike.likes}
          onLike={() => handleLike(selectedBikeIdx)}
          onOpenPreOrder={handleOpenPreOrder}
          onOpenSpecs={handleOpenSpecs}
        />

        {/* Chapter 03: Precision Architecture (Built From the Ground Up) */}
        <UnderTheHoodSection 
          activeBike={activeBike}
          likesCount={activeBike.likes}
          onLike={() => handleLike(selectedBikeIdx)}
          onOpenSpecs={handleOpenSpecs}
          onOpenPreOrder={handleOpenPreOrder}
        />

        {/* Chapter 04: Engineering Blueprint (Exploded Component Matrix with CAD Mode) */}
        <EngineeringExplodedSection 
          activeBike={activeBike}
          onOpenSpecs={handleOpenSpecs}
          onOpenPreOrder={handleOpenPreOrder}
        />

        {/* Chapter 05: Built For India (Monsoon, Potholes & Ghats Incline Boost) */}
        <BuiltForIndiaSection 
          activeBike={activeBike}
          onOpenSpecs={handleOpenSpecs}
          onOpenPreOrder={handleOpenPreOrder}
        />

        {/* Chapter 06: 360° Precision Studio (Image-Based Turntable) */}
        <MultiAngleSection 
          activeBike={activeBike}
          onOpenPreOrder={handleOpenPreOrder}
        />

        {/* Chapter 07: Build Your Ride (In-Page Configurator & Live INR Price Calculator) */}
        <BuildYourRideConfigurator 
          activeBike={activeBike}
          bikes={bikes}
          onSelectBike={handleSelectBike}
          onOpenPreOrder={handleOpenPreOrder}
        />

        {/* Logistics & Warranty Architecture */}
        <DeliveryCheckerSection 
          activeBike={activeBike}
          onOpenPreOrder={handleOpenPreOrder}
        />

        {/* Chapter 08: The Climax (Ready to Ride?) */}
        <ReadyToRideSection 
          activeBike={activeBike}
          likesCount={activeBike.likes}
          onLike={() => handleLike(selectedBikeIdx)}
          onOpenPreOrder={handleOpenPreOrder}
          onOpenSpecs={handleOpenSpecs}
        />

      </main>

      {/* Footer */}
      <Footer 
        activeBike={activeBike}
        onOpenPreOrder={handleOpenPreOrder}
        onOpenSpecs={handleOpenSpecs}
      />

      {/* Interactive Specifications Drawer */}
      <SpecsModal 
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
        bike={activeBike}
        onOpenPreOrder={handleOpenPreOrder}
      />

      {/* Interactive Pre-Order Configurator Modal */}
      <PreOrderModal 
        isOpen={isPreOrderOpen}
        onClose={() => setIsPreOrderOpen(false)}
        bike={preOrderTargetBike || activeBike}
        bikes={bikes}
        onSelectBike={handleSelectBike}
      />

    </div>
  );
};

export default App;