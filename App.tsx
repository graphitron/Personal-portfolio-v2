
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import SectionHeader from './components/SectionHeader';
import CoreProjectCard from './components/CoreProjectCard';
import VisualMarquee from './components/VisualMarquee';
import LinkedInFeature from './components/LinkedInFeature';
import ToolGrid from './components/ToolGrid';
import SnakeGame from './components/SnakeGame';
import ExperienceSection from './components/ExperienceSection';
import LoadingScreen from './components/LoadingScreen';
import { CORE_PROJECTS, ABOUT_NODES } from './constants';
import { Download, Mail, Linkedin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



// --- Text Scramble Component for Hero ---
const ScrambleText: React.FC<{ text: string }> = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono">{display}</span>;
};


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen text-blueprint-text font-sans selection:bg-blueprint-primary selection:text-blueprint-bg relative overflow-x-hidden bg-blueprint-bg bg-fixed bg-[size:20px_20px] transition-colors duration-500">
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <HeroCanvas isDarkMode={isDarkMode} />
          
          {/* Decorative Fixed Line */}
          <motion.div 
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="fixed left-6 md:left-12 top-0 bottom-0 w-[1px] bg-blueprint-border z-0 hidden md:block" 
          />
          <motion.div 
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="fixed right-6 md:right-12 top-0 bottom-0 w-[1px] bg-blueprint-border z-0 hidden md:block" 
          />

          <main className="relative z-10 max-w-[1200px] mx-auto px-6 border-x border-transparent md:border-blueprint-border/50 bg-blueprint-panel/30 backdrop-blur-[2px]">
            
            {/* 1. Hero Section */}
            <header className="min-h-screen flex flex-col items-center justify-center relative py-20 text-center">
              {/* Header Background Image: Rice Terraces */}
              <div 
                className="absolute inset-0 z-[-1] pointer-events-none bg-cover bg-center grayscale-[10%] opacity-80"
                style={{ 
                  backgroundImage: "url('assets/homebgimage.png')" 
                }}
              />
             {/* Overlay to ensure text readability - adapts to dark mode */}
              <div className="absolute inset-0 z-[-1] bg-white/10 dark:bg-black/0 pointer-events-none radial-gradient(circle, transparent 0%, var(--bg-color) 100%)" />

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto relative z-10 flex flex-col items-center"
              >
                {/* System Status Bar */}
                <motion.div variants={fadeInUp} className="mb-12 inline-flex items-center gap-6 bg-blueprint-panel border border-blueprint-border px-4 py-2 rounded-full shadow-sm">
                   <div className="flex items-center gap-2 border-r border-blueprint-border pr-4">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blueprint-primary">System Online</span>
                   </div>
                   <div className="text-[10px] font-mono font-medium text-blueprint-muted uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-blueprint-primary" />
                      Open to Work
                   </div>
                </motion.div>
                
                {/* Main Headline */}
                <motion.div variants={fadeInUp} className="mb-28">
                  <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-blueprint-muted dark:text-black mb-4 drop-shadow-sm">
                    Designing workflows that bridge
                  </h2>
                  
                  <div className="flex flex-col md:block items-center leading-none">
                     <span className="block md:inline font-serif italic text-6xl md:text-8xl text-blueprint-text mb-4 md:mb-0 md:mr-4 drop-shadow-md">
                       Humans
                     </span>
                     <span className="font-display font-light text-2xl md:text-4xl text-blueprint-text align-centre mr-4">&</span>
                     <span className="block md:inline-block bg-blueprint-primary text-blueprint-bg text-3xl md:text-5xl font-mono px-4 py-2 mt-2 md:mt-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
                       <ScrambleText text="INTELLIGENT SYSTEMS" />
                     </span>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 items-center">

                <a href="#work" className="bg-blueprint-text text-blueprint-bg px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-blueprint-primary transition-all hover:scale-105 shadow-lg">
                  View Case Studies
                </a>

                <a
                    href="assets/Jagadeeswaran-Resume-20251202.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      // Trigger download in background
                      const link = document.createElement('a');
                      link.href = "assets/Jagadeeswaran-Resume-20251202.pdf";
                      link.download = "Jagadeeswaran-Resume.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-blueprint-panel border-2 border-blueprint-text text-blueprint-text px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-blueprint-bg transition-colors flex items-center gap-2"
                  >
                    Download Resume
                    <Download className="w-4 h-4" />
                  </a>


                </motion.div>

              </motion.div>
            </header>


            {/* 2. Work Section */}
            <section id="work" className="py-24 border-t border-blueprint-border bg-blueprint-bg/40">
               <SectionHeader title="Case Studies" number="01" subtitle="AI SaaS & Conversational Systems" />
               
               <motion.div 
                 variants={staggerContainer}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 className="flex flex-col"
               >
                 {CORE_PROJECTS.map((project, index) => (
                   <CoreProjectCard key={project.id} project={project} index={index} />
                 ))}
               </motion.div>
            </section>

            {/* 3. About Section (Moved Next to Work) */}
            <section id="about" className="flex py-32 border-t border-blueprint-border bg-blueprint-panel relative transition-colors duration-500">
               {/* {<div className="absolute top-8 left-6 text-xs font-mono text-blueprint-primary font-bold">02. ABOUT</div>} */}
               
               <div className="max-w-4xl mx-auto">
                 <motion.div 
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                 >
                   <h2 className="font-display text-4xl md:text-6xl font-bold text-blueprint-text leading-tight mb-12">
                     I’m a Product Designer with <span className="text-blueprint-primary relative inline-block">2.6 years<span className="absolute bottom-2 left-0 w-full h-3 bg-blueprint-grid -z-10 transform -rotate-1"></span></span> of experience creating AI-driven digital products.
                   </h2>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div>
                        <p className="text-lg text-blueprint-muted leading-relaxed mb-8">
                           My work blends <span className="text-blueprint-text font-medium border-b border-blueprint-primary/20">structured thinking</span>, simple interfaces, and deeply human interaction patterns across SaaS (B2B) and consumer experiences (B2C).
                        </p>
                        <p className="text-lg text-blueprint-muted leading-relaxed">
                           From scaling platforms like Ailaysa to 9k+ users, to building Chaireader from zero to enterprise whitelabels, I focus on tangible impact.
                        </p>
                     </div>
                     
                     <div>
                        <h4 className="text-sm font-mono uppercase text-blueprint-muted mb-6 tracking-widest border-b border-blueprint-border pb-2">Core Capabilities</h4>
                        <div className="flex flex-wrap gap-3 mb-12">
                          {ABOUT_NODES.map((node, i) => (
                            <motion.span 
                              key={i}
                              whileHover={{ scale: 1.05, backgroundColor: isDarkMode ? '#FFF' : '#000', color: isDarkMode ? '#000' : '#FFF' }} 
                              className="px-3 py-2 bg-blueprint-bg border border-blueprint-border text-sm font-medium text-blueprint-text transition-all cursor-default"
                            >
                              {node}
                            </motion.span>
                          ))}
                        </div>
                        
                        {/* New Interactive Tool Grid */}
                        <ToolGrid />
                     </div>
                   </div>
                 </motion.div>
               </div>
            </section>

            {/* 4. Experience Section (New) */}
            <ExperienceSection />

            {/* 5. Visual Marquee Section */}
            <section id="visuals" className="py-24 border-t border-blueprint-border overflow-hidden bg-blueprint-bg transition-colors duration-500">
              <SectionHeader title="Visual Modules" number="04" subtitle="Fragments of UI, Brand, and Print" />
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <VisualMarquee />
              </motion.div>
            </section>

            {/* 6. LinkedIn Section */}
            <div id="insights">
               <LinkedInFeature />
            </div>

            {/* 7. Contact Section */}
            <section id="contact" className="py-32 border-t border-blueprint-border relative overflow-hidden">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <motion.div 
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative z-10"
                  >
                     <h2 className="font-display text-4xl md:text-5xl font-bold text-blueprint-text mb-6">
                       Let's Build Clear, <br/> Intelligent Experiences.
                     </h2>
                     <p className="text-blueprint-muted text-lg mb-12 max-w-md">
                        Open to roles in Product Design, UX/UI, and AI-First Digital Products.
                     </p>
                     
                     <div className="flex flex-wrap gap-4">
                        <motion.a 
                          whileHover={{ y: -2 }}
                          href="jagadeesh.connects@gmail.com" 
                          className="flex items-center gap-2 bg-blueprint-primary text-blueprint-bg px-8 py-4 font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]"
                        >
                           <Mail className="w-4 h-4" /> Email Me
                        </motion.a>
                        <motion.a 
                          whileHover={{ y: -2 }}
                          href="https://www.linkedin.com/in/jagadeeswaran-a-r-91b9b326b" // REPLACE WITH YOUR LINKEDIN
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 border-2 border-blueprint-border bg-blueprint-panel text-blueprint-text px-8 py-4 font-bold uppercase tracking-wider hover:border-blueprint-primary transition-colors"
                        >
                           <Linkedin className="w-4 h-4" /> LinkedIn
                        </motion.a>
                     </div>
                  </motion.div>



                  {/* Game Console */}
                  <motion.div
                     initial={{ opacity: 0, rotate: 5 }}
                     whileInView={{ opacity: 1, rotate: 0 }}
                     viewport={{ once: true }}
                     transition={{ type: "spring", stiffness: 50 }}
                     className="w-full max-w-sm mx-auto md:mx-0"
                  >
                     <SnakeGame />
                  </motion.div>
               </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-blueprint-border mt-auto">
               <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 bg-blueprint-primary"></div>
                     <span className="text-xs font-mono text-blueprint-text font-bold">BLUEPRINT V2.0</span>
                  </div>
                  
                  <div className="text-xs font-mono text-blueprint-muted">
                     © {new Date().getFullYear()} JAGADEESWARAN
                  </div>
                  
                  <div className="text-xs font-mono text-blueprint-muted">
                     DESIGNED & BUILT BY ME
                  </div>
               </div>
            </footer>

          </main>
        </div>
      )}
    </>
  );
};

export default App;
