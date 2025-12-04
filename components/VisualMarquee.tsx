import React, { useRef } from 'react';
import { VISUAL_PROJECTS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VisualMarquee: React.FC = () => {
  // Duplicate items for seamless loop feel inside manual scroll
  const items = VISUAL_PROJECTS;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
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
    <div className="w-full relative group/container py-12 bg-blueprint-bg/30 border-y border-blueprint-border">
      
      {/* Navigation Controls */}
      <div className="max-w-[1200px] mx-auto px-6 flex justify-end gap-2 mb-4">
        <button 
          onClick={() => scroll('left')} 
          className="p-2 border border-blueprint-border bg-blueprint-panel hover:bg-blueprint-primary hover:text-blueprint-bg transition-colors rounded-full"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="p-2 border border-blueprint-border bg-blueprint-panel hover:bg-blueprint-primary hover:text-blueprint-bg transition-colors rounded-full"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar px-6 md:px-12 flex gap-8 pb-8 snap-x"
      >
        {items.map((item, index) => {
          const images = item.gallery && item.gallery.length > 0 ? item.gallery : [item.image];
          const galleryImages = [...images, ...images];

          return (
            <div 
              key={`${item.id}-${index}`}
              className={`relative flex-shrink-0 bg-blueprint-panel border border-blueprint-border p-3 hover:shadow-xl transition-shadow duration-300 group/card snap-start ${getSizeClasses(item.size)}`}
            >
              {/* Card Technical Header */}
              <div className="flex justify-between items-center mb-2 border-b border-blueprint-border/50 pb-1">
                <span className="text-[9px] font-mono text-blueprint-muted uppercase tracking-widest">
                  MOD.{index % VISUAL_PROJECTS.length + 1}
                </span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-blueprint-muted rounded-full"></div>
                  <div className="w-1 h-1 bg-blueprint-muted rounded-full"></div>
                </div>
              </div>

              {/* Scrollable Image Area (Auto-Marquee) */}
              <div className="relative w-full h-[calc(100%-40px)] bg-blueprint-bg overflow-hidden group/image-container">
                <div className="flex h-full w-max animate-marquee hover:[animation-play-state:paused]">
                  {galleryImages.map((img, i) => (
                    <img 
                      key={i}
                      src={img}
                      alt={`${item.title} - ${i + 1}`}
                      className="w-full h-full object-cover opacity-90 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500"
                    />
                  ))}
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-blueprint-panel/95 backdrop-blur-sm border-t border-blueprint-border p-3 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 flex flex-col justify-center text-left">
                  <h4 className="text-blueprint-text font-display font-bold text-sm mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-blueprint-muted text-[10px] mb-2 truncate">
                    {item.description}
                  </p>

                  <div className="flex gap-1 flex-wrap">
                    {item.tags?.slice(0, 3).map(tag => (
                      <span 
                        key={tag} 
                        className="text-[9px] border border-blueprint-border text-blueprint-muted px-1 rounded-sm bg-blueprint-bg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scroll hint */}
                {images.length > 1 && (
                  <div className="absolute right-2 top-2 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none">
                    {images.length} Pages
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisualMarquee;
