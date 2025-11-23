import React from 'react';
import { VisualProject } from '../types';
import { VISUAL_PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const VisualMarquee: React.FC = () => {
  // Duplicate items for seamless infinite scroll
  const items = [...VISUAL_PROJECTS, ...VISUAL_PROJECTS];

  const getSizeClasses = (size?: string) => {
    switch (size) {
      case 'social': return 'w-[280px] aspect-square'; // 1:1
      case 'a4': return 'w-[240px] aspect-[1/1.414]'; // A4 Vertical
      case 'presentation': return 'w-[400px] aspect-[16/9]'; // 16:9
      case 'wide': return 'w-[360px] aspect-[3/2]'; // 3:2
      default: return 'w-[300px] aspect-[4/3]';
    }
  };

  return (
    <div className="w-full overflow-hidden border-y border-blueprint-border/50 bg-blueprint-bg/30 py-12 group/marquee">
      <div className="relative flex items-center gap-8 animate-marquee w-max hover:[animation-play-state:paused] active:[animation-play-state:paused]">
        {items.map((item, index) => (
          <div 
            key={`${item.id}-${index}`}
            className={`relative flex-shrink-0 bg-white border border-blueprint-border p-3 hover:shadow-xl transition-shadow duration-300 group/card ${getSizeClasses(item.size)}`}
          >
            {/* Card Technical Header */}
            <div className="flex justify-between items-center mb-2 border-b border-blueprint-border/50 pb-1">
              <span className="text-[9px] font-mono text-blueprint-muted uppercase tracking-widest">MOD.{index % VISUAL_PROJECTS.length + 1}</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-blueprint-muted rounded-full"></div>
                <div className="w-1 h-1 bg-blueprint-muted rounded-full"></div>
              </div>
            </div>

            {/* Image Area */}
            <div className="relative w-full h-[calc(100%-40px)] overflow-hidden bg-blueprint-bg">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover grayscale opacity-90 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blueprint-text/90 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h4 className="text-white font-display font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-blueprint-border text-xs mb-3">{item.description}</p>
                <div className="flex gap-1 justify-center flex-wrap">
                   {item.tags?.map(tag => (
                     <span key={tag} className="text-[9px] border border-white/30 text-white/80 px-1">{tag}</span>
                   ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
      <div className="text-center mt-8 flex justify-center items-center gap-2">
         <span className="text-[10px] font-mono text-blueprint-muted uppercase tracking-widest animate-pulse">System scrolling... Hover to inspect</span>
      </div>
    </div>
  );
};

export default VisualMarquee;