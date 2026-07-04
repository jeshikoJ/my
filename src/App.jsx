import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Scene from "./three/Scene";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import SEO from "./components/SEO";
import Dock from "./components/Dock";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

import { AnimatePresence } from "framer-motion";
import lenis from "./utils/lenis";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lenis smooth scroll animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  const dockItems = [
    { 
      icon: <VscHome size={22} />, 
      label: 'Home', 
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) 
    },
    { 
      icon: <VscAccount size={22} />, 
      label: 'About', 
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <VscArchive size={22} />, 
      label: 'Work', 
      onClick: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <VscSettingsGear size={22} />, 
      label: 'Contact', 
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) 
    },
  ];

  return (
    <>
      <SEO />
      <ScrollProgress />

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" setLoading={setLoading} />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Scene />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />

          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}