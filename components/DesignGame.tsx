
import React, { useState, useEffect, useRef } from 'react';
import { Type, Trophy, RefreshCw, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DesignGame: React.FC = () => {
  const [kerning, setKerning] = useState(0); // Pixel offset
  const [target, setTarget] = useState(-5); // The ideal kerning
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const resetRound = () => {
    // Randomize starting position (very wide or very tight)
    const start = Math.random() > 0.5 ? 40 : -40;
    setKerning(start);
    // Target is somewhat subjective but fixed for game logic
    setTarget(-8); 
    setWon(false);
    setShowResult(false);
  };

  useEffect(() => {
    resetRound();
  }, []);

  const checkResult = () => {
    const diff = Math.abs(kerning - target);
    if (diff <= 4) { // Tolerance of 4 pixels
      setWon(true);
      setScore(s => s + 1);
    } else {
      setWon(false);
    }
    setShowResult(true);
  };

  const adjust = (amount: number) => {
    if (showResult) return;
    setKerning(prev => prev + amount);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (showResult) {
      if (e.key === 'Enter' || e.key === ' ') resetRound();
      return;
    }
    switch(e.key) {
      case 'ArrowLeft': adjust(-2); break;
      case 'ArrowRight': adjust(2); break;
      case 'Enter': checkResult(); break;
    }
  };

  return (
    <div 
      className="border border-blueprint-primary bg-blueprint-panel p-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="bg-blueprint-bg p-4">
        <div className="flex justify-between items-center mb-4 font-mono text-xs uppercase tracking-widest text-blueprint-primary">
           <span className="flex items-center gap-2"><Type className="w-3 h-3"/> Kern.exe</span>
           <span className="flex items-center gap-2"><Trophy className="w-3 h-3"/> Balanced: {score}</span>
        </div>
        
        <div className="relative bg-blueprint-panel border border-blueprint-border mx-auto w-full md:w-80 h-48 overflow-hidden flex flex-col items-center justify-center">
           {/* Grid Background */}
           <div className="absolute inset-0 opacity-10 pointer-events-none bg-[size:20px_20px] bg-grid-pattern"></div>
           
           {/* Letters */}
           <div className="relative flex items-end justify-center select-none" style={{ transform: 'translateY(10px)' }}>
              <span className="font-serif text-8xl md:text-9xl leading-none text-blueprint-primary">A</span>
              <motion.span 
                animate={{ x: kerning }}
                className="font-serif text-8xl md:text-9xl leading-none text-blueprint-primary relative z-10"
              >
                V
              </motion.span>
              
              {/* Guides (only appear on result) */}
              {showResult && (
                 <motion.div 
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                   className="absolute bottom-0 h-full w-px bg-red-500/50"
                   style={{ left: `calc(50% + ${target}px + 30px)` }} // Approximate visual center logic
                 />
              )}
           </div>

           {/* Result Overlay */}
           {showResult && (
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }} 
               animate={{ scale: 1, opacity: 1 }}
               className="absolute inset-0 flex flex-col items-center justify-center bg-blueprint-panel/90 z-20"
             >
                <div className={`font-bold text-lg mb-2 ${won ? 'text-green-600' : 'text-red-500'}`}>
                   {won ? 'VISUALLY BALANCED' : 'NEEDS ADJUSTMENT'}
                </div>
                <div className="text-xs font-mono mb-4 text-blueprint-muted">
                   Offset: {kerning}px | Target: ~{target}px
                </div>
                <button onClick={resetRound} className="flex items-center gap-2 bg-blueprint-primary text-blueprint-bg px-4 py-2 text-xs font-bold uppercase hover:opacity-90 transition shadow-lg">
                   <RefreshCw className="w-3 h-3" /> Next Pair
                </button>
             </motion.div>
           )}
        </div>

        {/* Controls */}
        <div className="mt-4 flex flex-col gap-3">
           <div className="flex justify-between items-center text-[10px] font-mono text-blueprint-muted">
             <span>Current Spacing: {kerning}px</span>
             <span className="hidden md:block animate-pulse">Use Arrow Keys & Enter</span>
           </div>
           
           <div className="grid grid-cols-3 gap-2">
              <button 
                className="bg-blueprint-panel border border-blueprint-border p-2 rounded text-blueprint-text hover:bg-blueprint-primary hover:text-blueprint-bg transition flex justify-center" 
                onClick={() => adjust(-2)} disabled={showResult}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                className={`p-2 rounded font-bold text-xs uppercase tracking-wider transition ${showResult ? 'bg-blueprint-border opacity-50' : 'bg-blueprint-primary text-blueprint-bg hover:opacity-90'}`}
                onClick={checkResult} disabled={showResult}
              >
                Submit
              </button>
              <button 
                className="bg-blueprint-panel border border-blueprint-border p-2 rounded text-blueprint-text hover:bg-blueprint-primary hover:text-blueprint-bg transition flex justify-center" 
                onClick={() => adjust(2)} disabled={showResult}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGame;
