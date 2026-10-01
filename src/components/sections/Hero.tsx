import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ChevronDown, Brain, Database, BarChart3, Code2, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const TYPING_ROLES = personalInfo.roles;

// Floating data node component
function DataNode({ x, y, label, delay = 0, size = 60 }: { x: string; y: string; label: string; delay?: number; size?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: 'backOut' }}
      style={{
        position: 'absolute', left: x, top: y,
        width: size, height: size, borderRadius: '50%',
        background: 'rgba(124, 58, 237, 0.08)',
        border: '1px solid rgba(124, 58, 237, 0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
        color: '#a78bfa', textAlign: 'center', lineHeight: 1.2,
        backdropFilter: 'blur(4px)',
        animation: `float ${3 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        zIndex: 1,
      }}
    >
      {label}
    </motion.div>
  );
}

// Neural network SVG
function NeuralNetSVG() {
  const layers = [
    [20, 80, 140, 200, 260],
    [50, 110, 170, 230],
    [80, 140, 200],
    [110, 170],
    [140],
  ];
  const xs = [40, 120, 200, 280, 360];
  const color = 'rgba(124,58,237,0.35)';
  const nodeColor = 'rgba(124,58,237,0.5)';
  const lines: JSX.Element[] = [];

  layers.forEach((layer, li) => {
    if (li < layers.length - 1) {
      layer.forEach(y1 => {
        layers[li + 1].forEach(y2 => {
          lines.push(
            <line key={`${li}-${y1}-${y2}`}
              x1={xs[li]} y1={y1 + 10} x2={xs[li + 1]} y2={y2 + 10}
              stroke={color} strokeWidth="0.8"
            />
          );
        });
      });
    }
  });

  return (
    <svg viewBox="0 0 400 280" style={{ width: '100%', height: '100%', opacity: 0.6 }}>
      {lines}
      {layers.map((layer, li) =>
        layer.map(y => (
          <circle key={`${li}-${y}`} cx={xs[li]} cy={y + 10} r="7"
            fill={nodeColor} stroke="rgba(124,58,237,0.8)" strokeWidth="1"
          />
        ))
      )}
    </svg>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const current = TYPING_ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex(i => (i + 1) % TYPING_ROLES.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #0F172A 0%, #0F172A 60%, #1a0f2e 100%)',
    }}>
      {/* Radial glow backgrounds */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Floating nodes (decorative) */}
      <DataNode x="72%" y="15%" label="ML" delay={0.3} size={55} />
      <DataNode x="78%" y="35%" label="EDA" delay={0.5} size={50} />
      <DataNode x="68%" y="55%" label="RF" delay={0.7} size={48} />
      <DataNode x="82%" y="60%" label="SQL" delay={0.9} size={52} />
      <DataNode x="65%" y="30%" label="PHQ-9" delay={1.1} size={60} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2, paddingTop: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            {/* Open to Work badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <span className="open-to-work">
                <span className="open-to-work-dot" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '0.75rem',
                color: '#F8FAFC',
              }}
            >
              Hi, I'm{' '}
              <span style={{
                background: 'linear-gradient(135deg, #7C3AED, #2563EB, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Varun K
              </span>
            </motion.h1>

            {/* Typing Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                color: '#06B6D4',
                marginBottom: '1.5rem',
                minHeight: '2em',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}
            >
              <span style={{ color: '#4B5563' }}>&gt;</span>
              <span>{displayText}</span>
              <span className="animate-cursor" style={{ color: '#7C3AED', fontSize: '1.3em', lineHeight: 1 }}>|</span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{
                color: '#94A3B8', lineHeight: 1.8,
                fontSize: '1rem', marginBottom: '2rem',
                maxWidth: '520px',
              }}
            >
              B.E. CSE graduate focused on <strong style={{ color: '#a78bfa' }}>Healthcare Data Science & AI</strong>.
              Built a Random Forest–powered Streamlit app for depression severity classification, and demonstrated rigorous ML thinking by{' '}
              <strong style={{ color: '#06B6D4' }}>detecting and reporting label leakage</strong> in clinical data.
            </motion.p>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}
            >
              {[
                { icon: <Brain size={14} />, label: 'ML Projects', value: '3' },
                { icon: <Code2 size={14} />, label: 'Certifications', value: '6' },
                { icon: <Database size={14} />, label: 'CGPA', value: '7.89' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: 'rgba(30,41,59,0.8)', border: '1px solid #334155',
                  borderRadius: '8px', padding: '0.6rem 1rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <span style={{ color: '#7C3AED' }}>{stat.icon}</span>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '1rem', fontWeight: 700, color: '#F8FAFC' }}>{stat.value}</span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}
            >
              <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="btn-primary" onClick={scrollToProjects}
              >
                <BarChart3 size={16} /> View Projects
              </motion.button>
              <motion.a whileHover={{ scale: 1.04, y: -2 }}
                href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="btn-outline"
              >
                <FaGithub size={16} /> GitHub
              </motion.a>
              <motion.button whileHover={{ scale: 1.04, y: -2 }}
                className="btn-outline" onClick={scrollToContact}
              >
                <Mail size={16} /> Contact
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}
            >
              {[
                { icon: <FaGithub size={18} />, href: personalInfo.github, label: 'GitHub' },
                { icon: <FaLinkedin size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: <Mail size={18} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(social => (
                <motion.a key={social.label}
                  href={social.href} target="_blank" rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, color: '#7C3AED' }}
                  style={{
                    color: '#94A3B8', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', width: '40px', height: '40px',
                    borderRadius: '8px', border: '1px solid #334155',
                    transition: 'all 0.2s', textDecoration: 'none',
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className="hero-visual"
          >
            {/* Main card */}
            <div style={{
              background: 'rgba(30,41,59,0.8)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '16px', padding: '2rem',
              width: '100%', maxWidth: '420px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 60px rgba(124,58,237,0.1)',
            }}>
              {/* Terminal header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#4B5563', marginLeft: 'auto' }}>
                  depression_model.py
                </span>
              </div>

              {/* Code-style content */}
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem', lineHeight: 2 }}>
                <div><span style={{ color: '#4B5563' }}>1</span>  <span style={{ color: '#7dd3fc' }}>import</span> <span style={{ color: '#F8FAFC' }}>pandas</span> <span style={{ color: '#7dd3fc' }}>as</span> <span style={{ color: '#F8FAFC' }}>pd</span></div>
                <div><span style={{ color: '#4B5563' }}>2</span>  <span style={{ color: '#7dd3fc' }}>from</span> <span style={{ color: '#F8FAFC' }}>sklearn.ensemble</span> <span style={{ color: '#7dd3fc' }}>import</span> <span style={{ color: '#a78bfa' }}>RandomForestClassifier</span></div>
                <div><span style={{ color: '#4B5563' }}>3</span>  <span style={{ color: '#7dd3fc' }}>from</span> <span style={{ color: '#F8FAFC' }}>sklearn.model_selection</span> <span style={{ color: '#7dd3fc' }}>import</span> <span style={{ color: '#a78bfa' }}>cross_val_score</span></div>
                <div style={{ color: '#4B5563' }}>4</div>
                <div><span style={{ color: '#4B5563' }}>5</span>  <span style={{ color: '#22C55E' }}># PHQ-9 severity classification</span></div>
                <div><span style={{ color: '#4B5563' }}>6</span>  <span style={{ color: '#F8FAFC' }}>model</span> <span style={{ color: '#94A3B8' }}>=</span> <span style={{ color: '#a78bfa' }}>RandomForestClassifier</span><span style={{ color: '#94A3B8' }}>(</span></div>
                <div><span style={{ color: '#4B5563' }}>7</span>      <span style={{ color: '#F8FAFC' }}>n_estimators</span><span style={{ color: '#94A3B8' }}>=</span><span style={{ color: '#06B6D4' }}>100</span><span style={{ color: '#94A3B8' }}>,</span></div>
                <div><span style={{ color: '#4B5563' }}>8</span>      <span style={{ color: '#F8FAFC' }}>random_state</span><span style={{ color: '#94A3B8' }}>=</span><span style={{ color: '#06B6D4' }}>42</span></div>
                <div><span style={{ color: '#4B5563' }}>9</span>  <span style={{ color: '#94A3B8' }}>)</span></div>
                <div style={{ color: '#4B5563' }}>10</div>
                <div><span style={{ color: '#4B5563' }}>11</span> <span style={{ color: '#22C55E' }}># ⚠ Label leakage detected & reported</span></div>
              </div>

              {/* Mini metric */}
              <div style={{ marginTop: '1.5rem', padding: '0.75rem 1rem', background: 'rgba(124,58,237,0.08)', borderRadius: '8px', border: '1px solid rgba(124,58,237,0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#94A3B8' }}>Cross-Val F1 (without leakage)</span>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: '#22C55E' }}>~29%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#94A3B8' }}>With leakage (reported)</span>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: '#F59E0B' }}>~99%</span>
                </div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.65rem', color: '#4B5563', fontFamily: '"JetBrains Mono", monospace' }}>
                  ✓ Leakage identified and critically disclosed
                </div>
              </div>

              {/* Mini neural net */}
              <div style={{ marginTop: '1.5rem', height: '80px', opacity: 0.5 }}>
                <NeuralNetSVG />
              </div>

              {/* Tags */}
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {['Scikit-learn', 'Pandas', 'Streamlit', 'Folium'].map(t => (
                  <span key={t} className="skill-badge">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute', bottom: '-3rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          }}
        >
          <span style={{ color: '#4B5563', fontSize: '0.7rem', fontFamily: '"JetBrains Mono", monospace' }}>scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={18} color="#4B5563" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  );
}
