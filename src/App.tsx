import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Workflow from './components/sections/Workflow';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ minHeight: '100vh', background: '#0F172A' }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Workflow />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
