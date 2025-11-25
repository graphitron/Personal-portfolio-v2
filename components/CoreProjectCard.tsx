
import React, { useState, useRef } from 'react';
import { CoreProject } from '../types';
import Badge from './Badge';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface CoreProjectCardProps {
  project: CoreProject;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
};

const CoreProjectCard: React.FC<CoreProjectCardProps> = ({ project, index }) => {
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  
  // Drag scrolling state
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Ensure we have images to scroll. If gallery is empty, use the main image.
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];
  // Duplicate images enough times to ensure smooth infinite scrolling
  const scrollItems = [...images, ...images, ...images, ...images];

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAutoScroll || !scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isAutoScroll || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="group mb-24 last:mb-0 relative bg-white border border-blueprint-border p-1 hover:border-blueprint-primary/50 transition-colors duration-500"
    >
      {/* Technical Markers */}
      <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-blueprint-primary"></div>
      <div className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t border-r border-blueprint-primary"></div>
      <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b border-l border-blueprint-primary"></div>
      <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-blueprint-primary"></div>

      <div className="p-6 md:p-8 bg-blueprint-bg/50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Content Column */}
          <div className="md:col-span-5 flex flex-col h-full relative order-2 md:order-1">
            <div className="mb-6">
              <div className="flex gap-2 flex-wrap mb-3">
                 {project.badges?.map(b => <span key={b} className="text-[10px] font-mono text-blueprint-primary">{b}</span>)}
              </div>
              <h3 className="text-3xl font-display font-bold text-blueprint-text mb-2 group-hover:text-blueprint-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-blueprint-muted tracking-wide">
                {project.tagline}
              </p>
            </div>
{/* 
            <p className="text-blueprint-text/80 leading-relaxed mb-8">
              {project.description}
            </p> */}

            {/* Impact Metrics Section */}
            {project.metrics && (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="border border-blueprint-border bg-white p-3 relative overflow-hidden group/metric hover:border-blueprint-primary/30 transition-colors">
                    <div className="absolute top-0 right-0 w-3 h-3 bg-blueprint-bg border-l border-b border-blueprint-border"></div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-display font-bold text-blueprint-primary">{metric.value}</span>
                      {metric.trend === 'up' && <TrendingUp className="w-3 h-3 text-green-500" />}
                    </div>
                    <p className="text-[10px] font-mono text-blueprint-muted leading-tight">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}

<div className="mt-auto flex gap-4 pt-4 md:pt-0">
               <motion.a 
                 href={project.caseStudyUrl || '#'}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ x: 5 }}
                 className="flex items-center text-sm font-medium bg-blueprint-text text-white px-5 py-2 hover:bg-blueprint-primary transition-colors cursor-pointer"
               >
                 {project.ctaText} <ArrowRight className="w-4 h-4 ml-2" />
               </motion.a>
               {project.secondaryCta && (
                 <a 
                   href={project.productUrl || '#'}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center text-sm font-medium text-blueprint-text border border-blueprint-border px-5 py-2 hover:border-blueprint-text transition-colors cursor-pointer"
                 >
                   {project.secondaryCta} <ExternalLink className="w-3 h-3 ml-2" />
                 </a>
               )}
            </div>
          </div>


          {/* Image Column (Static Background + Auto-Scrolling Overlay) */}
          <div className="md:col-span-7 order-1 md:order-2">
             <div className="w-full aspect-[16/10] border border-blueprint-border p-2 bg-white relative overflow-hidden">
                
                {/* Static Background Layer */}
                  <div className="absolute inset-0 z-0">
  
                {/* Background image */}
                  <img 
                    src={project.image}
                    alt="Background Context" 
                    className="w-full h-full object-cover opacity-1"   // <-- Increase visibility
                  />

                  {/* Optional subtle grid */}
                  <div className="absolute inset-0 bg-blueprint-grid opacity-20 mix-blend-multiply pointer-events-none" />

                  {/* Soft vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/10" />
                </div>


                {/* 2. Scrolling Gallery Overlay */}
                <div 
                   ref={scrollRef}
                   onMouseDown={handleMouseDown}
                   onMouseLeave={handleMouseLeave}
                   onMouseUp={handleMouseUp}
                   onMouseMove={handleMouseMove}
                   className={`absolute inset-0 z-20 flex items-center ${isAutoScroll ? 'overflow-hidden' : 'overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar'}`}
                >
                   <div 
                      className={`flex gap-6 px-6 ${isAutoScroll ? 'animate-marquee hover:[animation-play-state:paused]' : ''}`}
                   >
                      {scrollItems.map((img, i) => (
                        <div 
                          key={`${project.id}-scroll-${i}`} 
                          className="relative w-[350px] md:w-[500px] aspect-video flex-shrink-0 border-0 border-white shadow-[0px_4px_12px_rgba(0,0,0,0.08)] overflow-hidden group/item transition-transform duration-300 hover:scale-[1.02]"
                        >
                           <img 
                             src={img} 
                             alt={`${project.title} Screen ${i}`} 
                             draggable={false}
                             className="w-full h-full object-cover grayscale-[20%] group-hover/item:grayscale-0 transition-all select-none"
                           />
                           {/* Shine effect */}
                           <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      ))}
                   </div>
                </div>

                {/* Decorative UI Overlay */}

                {/* <div className="absolute bottom-3 left-3 z-30 flex items-center gap-2 pointer-events-none">
                   <div className={`w-1.5 h-1.5 rounded-full ${isAutoScroll ? 'bg-green-500 animate-pulse' : 'bg-blueprint-muted'}`}></div>
                   <span className="text-[9px] font-mono text-blueprint-primary tracking-widest bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm border border-blueprint-border">
                     {isAutoScroll ? 'Live Gallery Feed' : 'Manual Control'}
                   </span>
                </div> */}
             </div>
             
             <div className="flex justify-end items-center text-[10px] font-mono text-blueprint-muted mt-2">
                {/* <span className="flex items-center gap-2">
                   Fig. {index + 1}.0 // System Interface
                </span> */}
                
                {/* Toggle Switch */}
                <button 
                  onClick={() => setIsAutoScroll(!isAutoScroll)}
                  className="flex items-center gap-2 cursor-pointer hover:text-blueprint-primary transition-colors focus:outline-none"
                >
                  <span className={isAutoScroll ? "" : "opacity-50"}>Auto-Scroll</span>
                  <div className={`w-6 h-3 rounded-full border transition-colors relative ${isAutoScroll ? 'bg-blueprint-primary border-blueprint-primary' : 'bg-transparent border-blueprint-border'}`}>
                      <div className={`absolute top-[1px] w-2 h-2 rounded-full bg-white shadow-sm transition-all duration-300 ${isAutoScroll ? 'left-[13px]' : 'left-[1px] bg-blueprint-muted'}`}></div>
                  </div>
                </button>
             </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default CoreProjectCard;
