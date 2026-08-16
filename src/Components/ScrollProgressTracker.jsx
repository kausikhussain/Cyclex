import React, { useState, useEffect } from 'react';

const chapters = [
  { id: 'home', number: '01', title: 'The Machine' },
  { id: 'performance', number: '02', title: 'Performance' },
  { id: 'dominance', number: '03', title: 'Chassis Dynamics' },
  { id: 'engineering', number: '04', title: 'Engineering Blueprint' },
  { id: 'built-for-india', number: '05', title: 'Built For India' },
  { id: 'gallery', number: '06', title: '360° Studio' },
  { id: 'configurator', number: '07', title: 'Build Your Ride' },
  { id: 'ready-to-ride', number: '08', title: 'The Climax' }
];

const ScrollProgressTracker = ({ activeColor = '#ff9100' }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
      setScrollProgress(progress);

      // Determine active chapter by section offset
      const sectionElements = chapters.map(c => document.getElementById(c.id));
      const scrollPosition = currentScroll + window.innerHeight * 0.4;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveChapter(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto select-none"
      aria-label="Story chapter progress"
    >
      {/* Chapter Counter */}
      <div className="glass-panel px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 mb-2 shadow-2xl">
        <span className="font-orbitron font-black text-xs text-white">
          {chapters[activeChapter].number}
        </span>
        <span className="text-[9px] font-space text-zinc-500">/ 08</span>
        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: activeColor }} />
        <span className="font-orbitron text-[10px] font-bold text-zinc-300 uppercase max-w-[120px] truncate">
          {chapters[activeChapter].title}
        </span>
      </div>

      {/* Progress Dots */}
      <div className="flex flex-col items-center gap-2.5 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10">
        {chapters.map((ch, idx) => {
          const isActive = activeChapter === idx;
          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="group relative flex items-center justify-center focus:outline-none"
              title={`Chapter ${ch.number}: ${ch.title}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-6 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/15 text-[10px] font-orbitron font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
                {ch.number} // {ch.title}
              </span>

              {/* Indicator Dot */}
              <div 
                className={`transition-all duration-300 rounded-full ${
                  isActive 
                    ? 'w-2.5 h-6 rounded-full' 
                    : 'w-2 h-2 bg-zinc-700 group-hover:bg-zinc-400'
                }`}
                style={{
                  backgroundColor: isActive ? activeColor : undefined,
                  boxShadow: isActive ? `0 0 12px ${activeColor}` : 'none'
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Scroll Percentage Track */}
      <div className="w-1 h-16 bg-zinc-900 rounded-full overflow-hidden border border-white/5 mt-2">
        <div 
          className="w-full transition-all duration-150 rounded-full"
          style={{ 
            height: `${scrollProgress}%`,
            backgroundColor: activeColor 
          }}
        />
      </div>
    </aside>
  );
};

export default ScrollProgressTracker;
