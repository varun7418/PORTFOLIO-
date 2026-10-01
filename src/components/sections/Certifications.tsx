import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { certifications } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, #334155, transparent)' }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <span className="section-label">Credentials</span>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#F8FAFC', marginTop: '0.5rem', marginBottom: '1rem',
          }}>
            Certifications &{' '}
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Credentials
            </span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '550px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
            {certifications.length} certifications across programming, data, cloud, and full-stack disciplines.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="cert-card"
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: `${cert.color}18`, border: `1px solid ${cert.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: cert.color, flexShrink: 0,
                }}>
                  <Award size={18} />
                </div>
                <div>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#F8FAFC', lineHeight: 1.4, marginBottom: '0.25rem' }}>
                    {cert.name}
                  </h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.78rem' }}>{cert.provider}</p>
                </div>
              </div>

              {/* Meta */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {cert.year && (
                  <span style={{
                    background: `${cert.color}10`, border: `1px solid ${cert.color}30`,
                    borderRadius: '6px', padding: '0.15rem 0.5rem',
                    fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: cert.color,
                  }}>
                    {cert.year}
                  </span>
                )}
                {cert.duration && (
                  <span style={{
                    background: 'rgba(30,41,59,0.8)', border: '1px solid #334155',
                    borderRadius: '6px', padding: '0.15rem 0.5rem',
                    fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#64748B',
                  }}>
                    {cert.duration}
                  </span>
                )}
              </div>

              {/* Verified badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem' }}>
                <CheckCircle size={12} style={{ color: '#22C55E' }} />
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem', color: '#4B5563' }}>
                  Completed
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .certs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 550px) {
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
