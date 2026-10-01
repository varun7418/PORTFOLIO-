import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s',
          background: isScrolled ? 'rgba(15, 23, 42, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(51, 65, 85, 0.5)' : 'none',
        }}
      >
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo('#home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <div style={{
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #7C3AED, #2563EB)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'white',
            }}>
              {personalInfo.initials}
            </div>
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, color: '#F8FAFC', fontSize: '0.95rem' }}>
              {personalInfo.name}
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
            {navLinks.slice(0, 7).map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: activeSection === link.href.slice(1) ? 'rgba(124, 58, 237, 0.08)' : 'none',
                  border: 'none', cursor: 'pointer',
                  padding: '0.4rem 0.75rem', borderRadius: '6px',
                  fontSize: '0.82rem', fontWeight: 500, transition: 'all 0.2s',
                  color: activeSection === link.href.slice(1) ? '#7C3AED' : '#94A3B8',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                color: '#94A3B8', textDecoration: 'none',
                fontSize: '0.82rem', fontWeight: 500,
                padding: '0.4rem 0.75rem', borderRadius: '6px',
                border: '1px solid #334155', transition: 'all 0.2s',
              }}
            >
              <Code2 size={14} />
              <span>GitHub</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollTo('#contact')}
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #2563EB)',
                border: 'none', borderRadius: '6px',
                color: 'white', fontWeight: 600, fontSize: '0.82rem',
                padding: '0.4rem 1rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
              }}
            >
              Contact
            </motion.button>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: '1px solid #334155', borderRadius: '6px', padding: '0.35rem', cursor: 'pointer', color: '#94A3B8', display: 'none' }}
              className="mobile-hamburger"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu"
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: activeSection === link.href.slice(1) ? '#7C3AED' : '#F8FAFC',
                  fontSize: '1.5rem', fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 600,
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
