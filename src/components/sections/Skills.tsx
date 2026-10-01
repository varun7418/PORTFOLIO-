import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

interface SkillBubbleProps {
  name: string;
  level: string;
  color: string;
  delay?: number;
}

function SkillBubble({ name, level, color, delay = 0 }: SkillBubbleProps) {
  const levelColors: Record<string, { bg: string; text: string; border: string }> = {
    Experienced: { bg: 'rgba(34,197,94,0.1)', text: '#22C55E', border: 'rgba(34,197,94,0.3)' },
    'Project-Based': { bg: 'rgba(124,58,237,0.1)', text: '#a78bfa', border: 'rgba(124,58,237,0.3)' },
    Familiar: { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', border: 'rgba(245,158,11,0.3)' },
    Academic: { bg: 'rgba(6,182,212,0.1)', text: '#06B6D4', border: 'rgba(6,182,212,0.3)' },
    Learning: { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', border: 'rgba(239,68,68,0.3)' },
  };
  const lc = levelColors[level] || levelColors['Familiar'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: 'backOut' }}
      whileHover={{ y: -4, scale: 1.05 }}
      style={{
        background: '#1E293B', border: `1px solid #334155`,
        borderRadius: '12px', padding: '1rem 1.25rem',
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
        cursor: 'default', transition: 'all 0.3s',
        borderLeft: `3px solid ${color}`,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = color;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = '#334155';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.borderLeftColor = color;
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#F8FAFC' }}>
          {name}
        </span>
        <span style={{
          background: lc.bg, border: `1px solid ${lc.border}`,
          borderRadius: '9999px', padding: '0.15rem 0.6rem',
          fontSize: '0.65rem', color: lc.text,
          fontFamily: '"JetBrains Mono", monospace', whiteSpace: 'nowrap',
        }}>
          {level}
        </span>
      </div>
    </motion.div>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <span style={{
        fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem',
        color: '#7C3AED', letterSpacing: '0.1em', textTransform: 'uppercase',
        display: 'block', marginBottom: '0.25rem',
      }}>
        {label}
      </span>
      <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#F8FAFC' }}>
        {title}
      </h3>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" style={{ padding: '6rem 0', background: 'rgba(30,41,59,0.2)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, #334155, transparent)' }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <span className="section-label">Technical Arsenal</span>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#F8FAFC', marginTop: '0.5rem', marginBottom: '1rem',
          }}>
            Skills &{' '}
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Technologies
            </span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '550px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Every skill below is drawn directly from academic projects, certifications, and hands-on practice. No fluff, no filler.
          </p>
          {/* Legend */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Experienced', color: '#22C55E', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)' },
              { label: 'Project-Based', color: '#a78bfa', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.3)' },
              { label: 'Familiar', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)' },
            ].map(l => (
              <span key={l.label} style={{
                background: l.bg, border: `1px solid ${l.border}`, borderRadius: '9999px',
                padding: '0.25rem 0.75rem', fontSize: '0.7rem', color: l.color,
                fontFamily: '"JetBrains Mono", monospace',
              }}>
                {l.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }} className="skills-grid">
          {/* Languages */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ delay: 0.1 }}>
            <SectionTitle label="01 / Languages" title="Programming Languages" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {skills.languages.map((s, i) => <SkillBubble key={s.name} {...s} delay={0.15 + i * 0.08} />)}
            </div>
          </motion.div>

          {/* ML & Viz */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ delay: 0.2 }}>
            <SectionTitle label="02 / ML & Viz" title="ML & Visualization Libraries" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {skills.mlAndVisualization.map((s, i) => <SkillBubble key={s.name} {...s} delay={0.2 + i * 0.06} />)}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ delay: 0.3 }}>
            <SectionTitle label="03 / Tools" title="Tools & Platforms" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {skills.toolsAndPlatforms.map((s, i) => <SkillBubble key={s.name} {...s} delay={0.25 + i * 0.06} />)}
            </div>
          </motion.div>

          {/* Databases + Concepts */}
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{ delay: 0.4 }}>
            <SectionTitle label="04 / Databases" title="Databases" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {skills.databases.map((s, i) => <SkillBubble key={s.name} {...s} delay={0.3 + i * 0.06} />)}
            </div>

            <SectionTitle label="05 / Concepts" title="ML Concepts Applied" />
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              {skills.concepts.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.35 + i * 0.04 }}
                  style={{
                    background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)',
                    borderRadius: '6px', padding: '0.3rem 0.6rem',
                    fontFamily: '"JetBrains Mono", monospace', fontSize: '0.72rem', color: '#06B6D4',
                  }}
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
