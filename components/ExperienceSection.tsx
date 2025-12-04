
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_ITEMS } from '../constants';
import SectionHeader from './SectionHeader';
import { Briefcase, Calendar, MapPin, Clock } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-blueprint-border bg-blueprint-bg relative transition-colors duration-500">
      <SectionHeader title="Experience" number="04" subtitle="Professional History" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 gap-8">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
               {/* Card Container */}
               <div className="bg-blueprint-panel border-2 border-blueprint-border hover:border-blueprint-primary transition-colors duration-300 p-0 relative overflow-hidden shadow-sm hover:shadow-md">
                  
                  {/* Technical Decorative Header */}
                  <div className="bg-blueprint-bg border-b border-blueprint-border p-3 flex justify-between items-center text-[10px] font-mono text-blueprint-muted uppercase tracking-widest">
                     <span>[EXP_MODULE_0{index + 1}]</span>
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full border border-blueprint-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-blueprint-primary/20"></div>
                     </div>
                  </div>

                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                     
                     {/* Left Column: Role & Company */}
                     <div className="md:col-span-5 flex flex-col border-b md:border-b-0 md:border-r border-blueprint-border/50 pb-6 md:pb-0 md:pr-6">
                        
                        <div className="flex items-start gap-4 mb-4">
                           {/* Company Logo */}
                           {item.logo && (
                             <div className="w-12 h-12 border border-blueprint-border p-2 bg-blueprint-bg flex items-center justify-center shrink-0">
                               <img src={item.logo} alt={item.company} className="w-full h-full object-contain opacity-80" />
                             </div>
                           )}
                           
                           <div>
                              <h3 className="font-display font-bold text-xl leading-tight text-blueprint-text group-hover:text-blueprint-primary transition-colors">
                                 {item.role}
                              </h3>
                              <div className="flex items-center gap-2 text-blueprint-primary/80 font-medium text-sm mt-1">
                                 <Briefcase className="w-3 h-3" />
                                 <span>{item.company}</span>
                              </div>
                           </div>
                        </div>

                        {/* Badges Row */}
                        <div className="flex flex-wrap gap-2 mb-4">
                           {item.type && (
                             <div className="inline-flex items-center gap-1.5 bg-blueprint-bg border border-blueprint-border px-2 py-1">
                               <Clock className="w-3 h-3 text-blueprint-muted" />
                               <span className="text-[10px] font-mono uppercase text-blueprint-text tracking-wider">{item.type}</span>
                             </div>
                           )}
                           {item.location && (
                             <div className="inline-flex items-center gap-1.5 bg-blueprint-bg border border-blueprint-border px-2 py-1">
                               <MapPin className="w-3 h-3 text-blueprint-muted" />
                               <span className="text-[10px] font-mono uppercase text-blueprint-text tracking-wider">{item.location}</span>
                             </div>
                           )}
                        </div>
                        
                        <div className="inline-flex items-center gap-2 mt-auto text-blueprint-muted">
                           <Calendar className="w-3 h-3" />
                           <span className="text-xs font-mono font-bold">
                              {item.period}
                           </span>
                        </div>
                     </div>

                     {/* Right Column: Description & Details */}
                     <div className="md:col-span-7 flex flex-col justify-center pl-0 md:pl-2">
                        <p className="text-blueprint-text/80 leading-relaxed text-sm md:text-base">
                           {item.description}
                        </p>
                        
                        {/* Corner Decoration */}
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-l border-t border-blueprint-border/50 bg-blueprint-bg/30"></div>
                     </div>
                  </div>
                  
                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-blueprint-primary w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
