import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { education } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" style={{ padding: '6rem 0', background: 'rgba(30,41,59,0.15)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, #334155, transparent)' }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <span className="section-label">Academic Background</span>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#F8FAFC', marginTop: '0.5rem',
          }}>
            Education &{' '}
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Academics
            </span>
          </h2>
        </motion.div>

        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.15 + i * 0.12 }}
              whileHover={{ borderColor: 'rgba(124,58,237,0.4)', y: -3 }}
              style={{
                background: '#1E293B', border: '1px solid #334155', borderRadius: '16px',
                padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                transition: 'all 0.3s',
                borderLeft: i === 0 ? '4px solid #7C3AED' : '4px solid #2563EB',
              }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: i === 0 ? 'rgba(124,58,237,0.15)' : 'rgba(37,99,235,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: i === 0 ? '#7C3AED' : '#2563EB', flexShrink: 0,
              }}>
                {i === 0 ? <GraduationCap size={22} /> : <BookOpen size={22} />}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#F8FAFC' }}>
                    {edu.degree}
                  </h3>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem', color: '#4B5563', whiteSpace: 'nowrap' }}>
                    {edu.period}
                  </span>
                </div>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{edu.institution}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: i === 0 ? 'rgba(124,58,237,0.1)' : 'rgba(37,99,235,0.1)',
                  border: `1px solid ${i === 0 ? 'rgba(124,58,237,0.3)' : 'rgba(37,99,235,0.3)'}`,
                  borderRadius: '8px', padding: '0.4rem 0.9rem',
                }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.8rem', color: i === 0 ? '#a78bfa' : '#60a5fa' }}>
                    {edu.scoreLabel}
                  </span>
                  <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1rem', color: '#F8FAFC' }}>
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework relevance note */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5 }}
          style={{ marginTop: '3rem', maxWidth: '760px', margin: '3rem auto 0' }}
        >
          <div style={{
            background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.2)',
            borderRadius: '12px', padding: '1.5rem',
          }}>
            <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#F8FAFC', marginBottom: '0.75rem' }}>
              Relevant Technical Coursework
            </h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                'Data Structures & Algorithms',
                'Database Management Systems',
                'Machine Learning',
                'Artificial Intelligence',
                'Statistics & Probability',
                'Computer Science Fundamentals',
                'Software Engineering',
                'Operating Systems',
                'Computer Networks',
              ].map(c => (
                <span key={c} style={{
                  background: 'rgba(30,41,59,0.8)', border: '1px solid #334155',
                  borderRadius: '6px', padding: '0.25rem 0.6rem',
                  fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#64748B',
                }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
