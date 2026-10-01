import { motion } from 'framer-motion';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FaGithub size={18} />, href: personalInfo.github, label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer style={{
      background: '#080F1C',
      borderTop: '1px solid #1E293B',
      padding: '3rem 0 2rem',
      position: 'relative',
    }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #7C3AED, #2563EB)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'white',
              }}>
                VK
              </div>
              <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, color: '#F8FAFC', fontSize: '1rem' }}>
                Varun K
              </span>
            </div>
            <p style={{ color: '#4B5563', fontSize: '0.82rem', lineHeight: 1.8, maxWidth: '220px', fontFamily: '"JetBrains Mono", monospace' }}>
              Data Science & Healthcare AI
            </p>
            <p style={{ color: '#4B5563', fontSize: '0.8rem', lineHeight: 1.8, maxWidth: '240px', marginTop: '0.4rem' }}>
              Chennai, Tamil Nadu, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#94A3B8', marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
              {links.map(l => (
                <a key={l.href} href={l.href}
                  style={{ color: '#4B5563', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7C3AED')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#4B5563')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#94A3B8', marginBottom: '1rem' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem' }}>
              {socials.map(s => (
                <motion.a key={s.label}
                  href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, color: '#7C3AED' }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '38px', height: '38px', borderRadius: '8px',
                    border: '1px solid #1E293B', color: '#4B5563',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <a href={`mailto:${personalInfo.email}`}
              style={{ color: '#4B5563', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s', display: 'block' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#94A3B8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4B5563')}
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #1E293B', paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ color: '#4B5563', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            © 2026 Varun K — Built with
            <Heart size={12} style={{ color: '#EF4444', display: 'inline' }} />
            using React + Vite + TypeScript + Tailwind + Framer Motion
          </p>
          <motion.button
            whileHover={{ scale: 1.1, borderColor: '#7C3AED', color: '#7C3AED' }}
            onClick={scrollTop}
            style={{
              background: 'none', border: '1px solid #1E293B', borderRadius: '8px',
              padding: '0.4rem 0.75rem', cursor: 'pointer', color: '#4B5563',
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.75rem', transition: 'all 0.2s',
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={14} /> Back to Top
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
