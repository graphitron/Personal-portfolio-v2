
import React from 'react';
import { motion } from 'framer-motion';
import { TOOLS_LIST } from '../constants';

const ToolGrid: React.FC = () => {
  return (
    <div className="mt-12">
       <h4 className="text-sm font-mono uppercase text-blueprint-muted mb-6 tracking-widest border-b border-blueprint-border pb-2">Interactive Toolset</h4>
       <div className="flex flex-wrap gap-4 relative">
          {TOOLS_LIST.map((tool, i) => (
            <motion.div
              key={tool.name}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              whileHover={{ scale: 1.1, zIndex: 10, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              className="group relative cursor-pointer bg-white border border-blueprint-border w-12 h-12 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md hover:border-blueprint-primary transition-all"
            >
               {/* Icon */}
               <img src={tool.icon} alt={tool.name} className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
               
               {/* Tooltip */}
               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                  <div className="bg-blueprint-primary text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg relative">
                    {tool.name}
                    <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-blueprint-primary"></div>
                  </div>
               </div>
            </motion.div>
          ))}
       </div>
       <p className="text-[10px] font-mono text-blueprint-muted mt-4 text-right opacity-60">
          * DRAG ICONS TO REORGANIZE
       </p>
    </div>
  );
};

export default ToolGrid;
