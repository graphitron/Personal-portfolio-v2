
import React, { useState } from 'react';
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
import { Download, Mail, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen text-blueprint-text font-sans selection:bg-blueprint-primary selection:text-white relative overflow-x-hidden bg-blueprint-bg bg-fixed bg-[size:20px_20px]">
          <Navbar />
          <HeroCanvas />
          
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

          <main className="relative z-10 max-w-[1200px] mx-auto px-6 border-x border-transparent md:border-blueprint-border/50 bg-white/30 backdrop-blur-[2px]">
            
            {/* 1. Hero Section */}
            <header className="min-h-screen flex flex-col justify-center pt-20 relative">
              {/* Header Background Image */}
              <div 
                className="absolute inset-0 z-[-1] opacity-[0.8] pointer-events-none bg-cover bg-center grayscale-[20%]"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1533658486763-0024c8743956?q=80&w=2667&auto=format&fit=crop')" 
                }}
              />

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-3xl mt-12 md:mt-0"
              >
                <motion.div variants={fadeInUp} className="mb-8 flex gap-4 items-center">
                   <motion.span 
                      initial={{ width: 0 }} 
                      animate={{ width: '3rem' }} 
                      transition={{ duration: 0.8, delay: 0.2 }} 
                      className="h-[1px] bg-blueprint-primary" 
                   />
                   <span className="text-xs font-mono text-blueprint-primary uppercase tracking-widest font-bold">Product Designer (UX/UI)</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-semibold text-blueprint-text leading-[1.1] mb-8 relative">
                  <span className="absolute -left-8 top-4 text-base text-blueprint-primary opacity-50 hidden md:block">+</span>
                  I bring clarity, <br/>
                  structure, and flow <br/>
                  to <span className="text-blueprint-primary underline decoration-2 underline-offset-4 decoration-blueprint-border">multi-layered</span> <br/>
                  digital products.
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-blueprint-muted max-w-xl leading-relaxed mb-12 bg-white/60 backdrop-blur-sm p-4 border-l-2 border-blueprint-primary/20 shadow-sm">
                  Designing intuitive systems, conversational AI touchpoints, and seamless workflows for intelligent digital products.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                   <a href="#work" className="bg-blueprint-primary text-white px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-blueprint-text transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
                     View Case Studies
                   </a>
                   <button className="bg-white border border-blueprint-border text-blueprint-text px-6 py-3 text-sm font-medium uppercase tracking-wider hover:border-blueprint-primary transition-colors flex items-center gap-2 shadow-sm">
                     Download Resume <Download className="w-4 h-4" />
                   </button>
                </motion.div>

                <motion.div variants={fadeInUp} className="mt-24 flex gap-8">
                   <div className="text-[10px] uppercase tracking-widest text-blueprint-muted border-l border-blueprint-primary pl-3 font-medium">
                     System<br/>Thinking
                   </div>
                   <div className="text-[10px] uppercase tracking-widest text-blueprint-muted border-l border-blueprint-primary pl-3 font-medium">
                     AI<br/>Interaction
                   </div>
                   <div className="text-[10px] uppercase tracking-widest text-blueprint-muted border-l border-blueprint-primary pl-3 font-medium">
                     Interface<br/>Architecture
                   </div>
                </motion.div>
              </motion.div>
            </header>

            {/* 2. Work Section */}
            <section id="work" className="py-24 border-t border-blueprint-border bg-white/40">
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
            <section id="about" className="py-32 border-t border-blueprint-border bg-white relative">
               <div className="absolute top-8 left-6 text-xs font-mono text-blueprint-primary font-bold">03. ABOUT</div>
               
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
                              whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#FFF' }} 
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
            <section id="visuals" className="py-24 border-t border-blueprint-border overflow-hidden bg-blueprint-bg">
              <SectionHeader title="Visual Modules" number="05" subtitle="Fragments of UI, Brand, and Print" />
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
                          href="mailto:hello@example.com" 
                          className="flex items-center gap-2 bg-blueprint-primary text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-black/80 transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]"
                        >
                           <Mail className="w-4 h-4" /> Email Me
                        </motion.a>
                        <motion.a 
                          whileHover={{ y: -2 }}
                          href="#" 
                          className="flex items-center gap-2 border-2 border-blueprint-border bg-white text-blueprint-text px-8 py-4 font-bold uppercase tracking-wider hover:border-blueprint-primary transition-colors"
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
