import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Skills from './components/Skills';
import SkillsCircular from './components/SkillsCircular';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import DarkModeToggle from './components/DarkModeToggle';
import ShareButtons from './components/ShareButtons';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <DarkModeToggle />
      <BackToTop />
      <ShareButtons />
      
      <Hero />
      
      <motion.div {...fadeInUp}>
        <About />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Stats />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Services />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Skills />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <SkillsCircular />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Timeline />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Education />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Experience />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Projects />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Contact />
      </motion.div>
      
      <Footer />
    </div>
  );
}

export default App;
