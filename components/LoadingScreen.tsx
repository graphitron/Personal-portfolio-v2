
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING');

  const statusMessages = [
    'CALIBRATING GRID SYSTEM...',
    'LOADING UX MODULES...',
    'OPTIMIZING ASSETS...',
    'COMPILING INTERFACE...',
    'SYSTEM READY.'
  ];

  useEffect(() => {
    // Progress bar logic
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600); // Small delay before unmounting
          return 100;
        }
        // Randomize speed for "real" feeling
        const jump = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Update text based on progress thresholds
    if (progress < 20) setStatus(statusMessages[0]);
    else if (progress < 50) setStatus(statusMessages[1]);
    else if (progress < 80) setStatus(statusMessages[2]);
    else if (progress < 100) setStatus(statusMessages[3]);
    else setStatus(statusMessages[4]);
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-blueprint-bg flex flex-col items-center justify-center overflow-hidden"
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[size:40px_40px] bg-grid-pattern pointer-events-none" />

      {/* Center Content */}
      <div className="relative w-full max-w-md px-8">
        
        {/* Main Percentage Display */}
        <div className="flex justify-between items-end mb-2">
          <span className="font-mono text-xs text-blueprint-primary/50 tracking-widest">
            SYSTEM_BOOT_V2.0
          </span>
          <span className="font-display text-6xl font-bold text-blueprint-text tracking-tighter">
            {progress}%
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-blueprint-border relative overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-blueprint-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Status Text & Decorative Elements */}
        <div className="flex justify-between items-start font-mono text-[10px] text-blueprint-primary uppercase tracking-wider">
          <div className="flex flex-col gap-1">
            <span className="animate-pulse">
              {'>'} {status}
            </span>
            <span className="text-blueprint-muted opacity-50">
              MEM: {Math.floor(progress * 4.2)}MB / OK
            </span>
          </div>
          <div className="text-right opacity-50">
            COORD: {42 + progress}.892 <br/>
            GRID: ACTIVE
          </div>
        </div>

      </div>

      {/* Corner Crosshairs */}
      <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-blueprint-primary/50" />
      <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-blueprint-primary/50" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-blueprint-primary/50" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-blueprint-primary/50" />

      {/* Center vertical line decoration */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blueprint-border -z-10" />

    </motion.div>
  );
};

export default LoadingScreen;
