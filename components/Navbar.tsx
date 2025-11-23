
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Work', 'About', 'Experience', 'Visuals', 'Insights'];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-blueprint-border py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-xl tracking-tighter text-blueprint-text flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-3 h-3 bg-blueprint-primary rounded-sm" />
            Jagadeeswaran
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.button 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                onClick={() => scrollToSection(item)}
                className="text-xs font-medium uppercase tracking-widest text-blueprint-muted hover:text-blueprint-primary transition-colors"
              >
                {item}
              </motion.button>
            ))}
             <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollToSection('contact')}
                className="text-xs font-medium uppercase tracking-widest bg-white border border-blueprint-border px-4 py-2 hover:bg-blueprint-primary hover:text-white hover:border-blueprint-primary transition-colors"
              >
                Contact
              </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-blueprint-text">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-blueprint-bg pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-2xl font-display font-bold text-blueprint-text text-left border-b border-blueprint-border pb-4"
              >
                {item}
              </button>
            ))}
             <button 
                onClick={() => scrollToSection('contact')}
                className="text-2xl font-display font-bold text-blueprint-primary text-left pb-4"
              >
                Contact Me
              </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
