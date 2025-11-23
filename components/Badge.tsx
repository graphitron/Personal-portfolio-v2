import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'accent';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const baseClasses = "text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded border transition-all duration-300";
  
  const variants = {
    default: "bg-blueprint-bg border-blueprint-border text-blueprint-text hover:border-blueprint-primary hover:text-blueprint-primary",
    outline: "bg-transparent border-blueprint-border text-blueprint-muted hover:border-blueprint-text hover:text-blueprint-text",
    accent: "bg-blueprint-primary/5 border-blueprint-primary/30 text-blueprint-primary hover:bg-blueprint-primary/10"
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;