import React from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LINKEDIN_POSTS } from '../constants';

const LinkedInFeature: React.FC = () => {
  const topRow = LINKEDIN_POSTS.slice(0, 6);
  const bottomRow = LINKEDIN_POSTS.slice(6, 12);

  return (
    <section className="py-32 border-t border-blueprint-border bg-blueprint-panel relative overflow-hidden transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4 border border-blueprint-border px-3 py-1 rounded-full bg-blueprint-bg">
          <Linkedin className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-mono text-blueprint-text font-bold uppercase tracking-widest">Social Intelligence</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-blueprint-text mb-6">
          Insights & Experiments
        </h2>
        <p className="text-blueprint-muted max-w-2xl mx-auto leading-relaxed mb-8">
          My LinkedIn isn't just a resume—it's a live documentation of my process. I share micro-case studies, build-in-public updates, and thoughts on AI UX.
        </p>
        <motion.a 
          href="https://www.linkedin.com/in/jagadeeswaran-a-r-91b9b326b/"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-sm font-medium bg-blueprint-primary text-blueprint-bg px-6 py-3 hover:opacity-90 transition-opacity"
        >
          Connect on LinkedIn <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Tilted Marquee Container */}
      <div className="relative w-full overflow-hidden -rotate-2 py-10 bg-blueprint-bg/50 border-y border-blueprint-border">
        
        {/* Row 1 */}
        <div className="flex gap-6 animate-marquee w-max mb-6">
          {[...topRow, ...topRow].map((post, i) => (
            <div key={`top-${i}`} className="relative w-60 aspect-[4/5] bg-blueprint-panel border border-blueprint-border shadow-lg group overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src={post.image} alt="LinkedIn Post" className="w-full h-full object-cover group-hover:grayscale-0 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-blueprint-panel/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[10px] font-mono text-blueprint-primary">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Reverse Direction) */}
        <div className="flex gap-6 animate-marquee-reverse w-max">
           {[...bottomRow, ...bottomRow].map((post, i) => (
            <div key={`btm-${i}`} className="relative w-60 aspect-[4/5] bg-blueprint-panel border border-blueprint-border shadow-lg group overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src={post.image} alt="LinkedIn Post" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
               <div className="absolute bottom-0 left-0 right-0 p-4 bg-blueprint-panel/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-[10px] font-mono text-blueprint-primary">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overlay Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blueprint-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blueprint-bg to-transparent z-10 pointer-events-none"></div>
      </div>

    </section>
  );
};

export default LinkedInFeature;