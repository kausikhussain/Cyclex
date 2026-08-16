import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import SpecsSection from './Components/SpecsSection';
import bikesData from './data/bikes';

const App = () => {
  const [bikes, setBikes] = useState(bikesData);
  const [selectedBikeIdx, setSelectedBikeIdx] = useState(0);

  const handleLike = (index) => {
    setBikes(prev => prev.map((b, i) => i === index ? { ...b, likes: b.likes + 1 } : b));
  };

  const activeBike = bikes[selectedBikeIdx];

  return (
    <div className="min-h-screen bg-[#060608] text-white selection:bg-rose-500 selection:text-white pb-16 relative overflow-x-hidden">
      
      {/* Dynamic Background Atmospheric Radial Glow */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] blur-[160px] opacity-20 pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundColor: activeBike.accentColor }}
      />

      {/* Top Navbar */}
      <Navbar 
        activeBike={activeBike} 
        bikes={bikes} 
        onSelectBike={(idx) => setSelectedBikeIdx(idx)} 
      />

      {/* Main Container displaying all 3 Bike Hero Sections (Ridge, Vortex, Spectra) */}
      <main className="relative z-10 space-y-4">
        
        {/* Render Each Bike Card in sequence matching the screenshot */}
        {bikes.map((bikeItem, idx) => (
          <Card
            key={bikeItem.id}
            bike={bikeItem}
            bikes={bikes}
            currentIndex={idx}
            onSelectBike={(i) => setSelectedBikeIdx(i)}
            likesCount={bikeItem.likes}
            onLike={() => handleLike(idx)}
          />
        ))}

        {/* Bottom Detailed Performance Specs Showcase Card */}
        <SpecsSection 
          bike={activeBike} 
          likesCount={activeBike.likes}
          onLike={() => handleLike(selectedBikeIdx)}
        />

      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-zinc-600 font-orbitron tracking-widest uppercase">
        © 2025 SPECTRA MOUNTAIN BIKES — ENGINEERED FOR EXTREME PERFORMANCE
      </footer>

    </div>
  );
};

export default App;