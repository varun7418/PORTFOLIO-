import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { experience } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const typeIcons: Record<string, JSX.Element> = {
  Leadership: <Users size={18} />,
  Workshop: <BookOpen size={18} />,
  Hackathon: <Zap size={18} />,
};

const typeColors: Record<string, string> = {
  Leadership: '#7C3AED',
  Workshop: '#2563EB',
  Hackathon: '#F59E0B',
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, #334155, transparent)' }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <span className="section-label">Experience & Activities</span>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#F8FAFC', marginTop: '0.5rem', marginBottom: '1rem',
          }}>
            Leadership &{' '}
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Achievements
            </span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '550px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Beyond code — leading teams, teaching version control, and competing in national hackathons.
          </p>
        </motion.div>

        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '20px', top: '20px', bottom: '20px',
            width: '2px',
            background: 'linear-gradient(to bottom, #7C3AED, #06B6D4)',
            opacity: 0.4,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experience.map((item, i) => {
              const color = typeColors[item.type] || '#7C3AED';
              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                  style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '50%', flexShrink: 0,
                    background: `${color}18`, border: `2px solid ${color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: color, zIndex: 1, position: 'relative',
                  }}>
                    {typeIcons[item.type]}
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ borderColor: `${color}50`, y: -2 }}
                    style={{
                      flex: 1, background: '#1E293B', border: '1px solid #334155',
                      borderRadius: '12px', padding: '1.5rem',
                      transition: 'all 0.3s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                          <span style={{
                            background: `${color}18`, border: `1px solid ${color}44`,
                            borderRadius: '6px', padding: '0.15rem 0.55rem',
                            fontSize: '0.65rem', color: color,
                            fontFamily: '"JetBrains Mono", monospace',
                          }}>
                            {item.type}
                          </span>
                        </div>
                        <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1rem', color: '#F8FAFC' }}>
                          {item.role}
                        </h3>
                        <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: '0.15rem' }}>{item.organization}</p>
                      </div>
                      <span style={{
                        fontFamily: '"JetBrains Mono", monospace', fontSize: '0.75rem',
                        color: '#4B5563', whiteSpace: 'nowrap',
                      }}>
                        {item.period}
                      </span>
                    </div>

                    <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.75rem' }}>
                      {item.description.map((d, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                          <span style={{ color: color, fontSize: '0.7rem', marginTop: '5px', flexShrink: 0 }}>▸</span>
                          <span style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.7 }}>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {item.skills.map(s => (
                        <span key={s} style={{
                          background: 'rgba(30,41,59,0.8)', border: '1px solid #334155',
                          borderRadius: '6px', padding: '0.18rem 0.55rem',
                          fontFamily: '"JetBrains Mono", monospace', fontSize: '0.66rem', color: '#64748B',
                        }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <a
            href="https://github.com/varun7418"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(30,41,59,0.8)', border: '1px solid #334155',
              borderRadius: '10px', padding: '0.75rem 1.5rem',
              color: '#94A3B8', textDecoration: 'none',
              fontWeight: 500, fontSize: '0.9rem', transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.4)';
              (e.currentTarget as HTMLElement).style.color = '#F8FAFC';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#334155';
              (e.currentTarget as HTMLElement).style.color = '#94A3B8';
            }}
          >
            <FaGithub size={18} />
            View Code on GitHub — github.com/varun7418
          </a>
        </motion.div>
      </div>
    </section>
  );
}
