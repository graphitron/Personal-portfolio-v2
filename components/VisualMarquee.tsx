
import React, { useRef } from 'react';
import { VISUAL_PROJECTS } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const VisualMarquee: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Approx card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
    <div className="w-full py-12 bg-blueprint-bg/30 border-y border-blueprint-border/50 relative group/container">
      
      {/* Navigation Buttons (Hidden on Mobile) */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-4 z-20">
        <button 
          onClick={() => scroll('left')}
          className="bg-white border border-blueprint-border p-3 rounded-full shadow-lg hover:bg-blueprint-primary hover:text-white transition-all disabled:opacity-50"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 z-20">
        <button 
          onClick={() => scroll('right')}
          className="bg-white border border-blueprint-border p-3 rounded-full shadow-lg hover:bg-blueprint-primary hover:text-white transition-all"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Manual Outer Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {VISUAL_PROJECTS.map((item, index) => {
          // Prepare images for infinite inner loop (Duplicate 4x for smoothness)
          const baseImages = item.gallery && item.gallery.length > 0 ? item.gallery : [item.image];
          const marqueeImages = [...baseImages, ...baseImages, ...baseImages, ...baseImages];

          return (
            <div 
              key={`${item.id}-${index}`}
              className={`relative flex-shrink-0 snap-center bg-white border border-blueprint-border p-3 hover:shadow-xl hover:border-blueprint-primary/50 transition-all duration-300 group/card ${getSizeClasses(item.size)}`}
            >
              {/* Card Technical Header */}
              <div className="flex justify-between items-center mb-2 border-b border-blueprint-border/50 pb-1">
                <span className="text-[9px] font-mono text-blueprint-muted uppercase tracking-widest">MOD.{index + 1}</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-blueprint-muted rounded-full"></div>
                  <div className="w-1 h-1 bg-blueprint-muted rounded-full"></div>
                </div>
              </div>

              {/* Inner Auto-Scrolling Image Area */}
              <div className="relative w-full h-[calc(100%-40px)] bg-blueprint-bg overflow-hidden group/image-container">
                {/* The Marquee Track */}
                <div className="flex h-full w-max animate-marquee hover:[animation-play-state:paused]">
                  {marqueeImages.map((img, i) => (
                    <div key={i} className="h-full aspect-[inherit] flex-shrink-0 relative">
                       <img 
                        src={img} 
                        alt={`${item.title} - ${i}`}
                        className="w-full h-full object-cover opacity-90 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
                      />
                      {/* Divider line between scrolling images */}
                      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/20"></div>
                    </div>
                  ))}
                </div>

                {/* Info Overlay (Visible by default on mobile, Hover on Desktop) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-blueprint-border p-3 transform translate-y-0 md:translate-y-full md:group-hover/card:translate-y-0 transition-transform duration-300 flex flex-col justify-center text-left z-10">
                  <h4 className="text-blueprint-text font-display font-bold text-sm mb-0.5">{item.title}</h4>
                  <p className="text-blueprint-muted text-[10px] mb-2 truncate">{item.description}</p>
                  <div className="flex gap-1 flex-wrap">
                     {item.tags?.slice(0, 3).map(tag => (
                       <span key={tag} className="text-[9px] border border-blueprint-border text-blueprint-muted px-1 rounded-sm bg-blueprint-bg">{tag}</span>
                     ))}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      <div className="text-center mt-4 flex justify-center items-center gap-2">
         <span className="text-[10px] font-mono text-blueprint-muted uppercase tracking-widest">
            Drag to navigate // Hover card to pause
         </span>
      </div>
    </div>
  );
};

export default VisualMarquee;
