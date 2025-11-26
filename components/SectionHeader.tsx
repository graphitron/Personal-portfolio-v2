import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, number, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 border-b border-blueprint-border pb-4 relative ${className}`}
    >
      {/* Blueprint decorative notch animation */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '8px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="absolute bottom-[-1px] left-0 h-2 bg-blueprint-primary"
      />
      
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3">
          {/* {number && (
            <span className="font-mono text-sm text-blueprint-primary font-bold">
              {number}
            </span>
          )} */}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-blueprint-text tracking-tight">
            {title}
          </h2>
        </div>
        
        {subtitle && (
          <p className="font-sans text-sm text-blueprint-muted md:text-right">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SectionHeader;