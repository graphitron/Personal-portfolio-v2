
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_ITEMS } from '../constants';
import SectionHeader from './SectionHeader';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-blueprint-border bg-blueprint-bg/50 relative">
      <SectionHeader title="Experience" number="04" subtitle="Professional Timeline" />
      
      <div className="max-w-3xl mx-auto relative pt-8 pb-8">
        {/* Vertical Line - Fades out at bottom to imply continuation/single entry */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-blueprint-border via-blueprint-border to-transparent transform -translate-x-1/2"></div>

        {EXPERIENCE_ITEMS.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0`}
          >
             {/* Empty side for spacing (Left side on desktop) */}
             <div className="hidden md:block w-5/12 text-right pr-12">
               <span className="text-xs font-mono text-blueprint-primary font-bold bg-blueprint-bg/80 px-2 py-1 border border-blueprint-border rounded">
                 {item.period}
               </span>
             </div>

             {/* Center Node */}
             <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blueprint-primary border-4 border-white rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"></div>

             {/* Content Card (Right side on desktop) */}
             <div className="w-full pl-12 md:pl-0 md:w-5/12 md:ml-auto">
               <div className="relative bg-white border border-blueprint-border p-6 hover:border-blueprint-primary hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] transition-all group ml-0 md:ml-12">
                  {/* Connector Line for Mobile */}
                  <div className="md:hidden absolute top-4 -left-12 w-8 h-[1px] bg-blueprint-border"></div>
                  
                  {/* Period badge for Mobile */}
                  <div className="md:hidden mb-3">
                     <span className="text-[10px] font-mono text-blueprint-primary font-bold bg-blueprint-bg px-2 py-1 border border-blueprint-border rounded">
                       {item.period}
                     </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-blueprint-text group-hover:text-blueprint-primary transition-colors">{item.company}</h3>
                  <h4 className="text-sm font-medium text-blueprint-muted mb-4 uppercase tracking-wider">{item.role}</h4>
                  <p className="text-sm text-blueprint-text/80 leading-relaxed border-t border-blueprint-border pt-3">
                    {item.description}
                  </p>
               </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
