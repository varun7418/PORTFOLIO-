import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function TagBadge({ label }: { label: string }) {
  return (
    <span style={{
      background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)',
      borderRadius: '6px', padding: '0.2rem 0.55rem',
      fontFamily: '"JetBrains Mono", monospace', fontSize: '0.68rem', color: '#a78bfa',
    }}>
      {label}
    </span>
  );
}

function ProjectCard({ project, delay = 0 }: { project: typeof projects[0]; delay?: number }) {
  const [expanded, setExpanded] = useState(false);
  const categoryColors: Record<string, string> = {
    'Machine Learning / Healthcare AI': '#7C3AED',
    'Python / Database': '#2563EB',
    'Full-Stack Development': '#06B6D4',
  };
  const catColor = categoryColors[project.category] || '#7C3AED';

  return (
    <motion.div
      variants={fadeUp} initial="hidden" animate="visible"
      transition={{ delay, duration: 0.5 }}
      className="project-card"
      style={{ padding: '2rem' }}
    >
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{
              background: `${catColor}18`, border: `1px solid ${catColor}44`,
              borderRadius: '6px', padding: '0.2rem 0.6rem',
              fontSize: '0.65rem', color: catColor,
              fontFamily: '"JetBrains Mono", monospace',
            }}>
              {project.category}
            </span>
            {project.featured && (
              <span style={{
                background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: '6px', padding: '0.2rem 0.6rem',
                fontSize: '0.65rem', color: '#F59E0B',
                fontFamily: '"JetBrains Mono", monospace',
              }}>
                ⭐ Featured
              </span>
            )}
          </div>
          <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '0.25rem' }}>
            {project.title}
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.82rem', fontStyle: 'italic' }}>{project.subtitle}</p>
        </div>
        {/* Links */}
        <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
          {project.github && (
            <motion.a
              href={project.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '8px',
                border: '1px solid #334155', color: '#94A3B8', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              aria-label="GitHub Repository"
            >
              <FaGithub size={16} />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '8px',
                border: '1px solid #334155', color: '#94A3B8', textDecoration: 'none',
              }}
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ color: '#CBD5E1', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
        {project.description}
      </p>

      {/* Key finding badge */}
      {project.highlight && (
        <div style={{
          background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)',
          borderRadius: '8px', padding: '0.6rem 0.9rem',
          display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
          marginBottom: '1.25rem',
        }}>
          <AlertTriangle size={14} style={{ color: '#F59E0B', marginTop: '2px', flexShrink: 0 }} />
          <span style={{ fontSize: '0.8rem', color: '#F59E0B', lineHeight: 1.6 }}>{project.keyFinding}</span>
        </div>
      )}

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        {project.tags.map(t => <TagBadge key={t} label={t} />)}
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          color: '#7C3AED', fontSize: '0.82rem', fontWeight: 500,
          padding: 0, transition: 'opacity 0.2s',
        }}
      >
        {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        {expanded ? 'Show Less' : 'View Case Study'}
      </button>

      {/* Expanded case study */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ marginTop: '1.5rem', borderTop: '1px solid #334155', paddingTop: '1.5rem' }}>
              {/* Problem */}
              {project.problem && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#F8FAFC', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#7C3AED' }}>01</span> Problem Statement
                  </h4>
                  <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.8 }}>{project.problem}</p>
                </div>
              )}

              {/* Dataset */}
              {project.dataset && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#F8FAFC', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#7C3AED' }}>02</span> Dataset
                  </h4>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid #334155', borderRadius: '6px', padding: '0.35rem 0.7rem', fontSize: '0.78rem', color: '#94A3B8' }}>
                      📊 {project.dataset.size}
                    </span>
                    <span style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid #334155', borderRadius: '6px', padding: '0.35rem 0.7rem', fontSize: '0.78rem', color: '#94A3B8' }}>
                      🏥 {project.dataset.source}
                    </span>
                  </div>
                  {project.dataset.classes && (
                    <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.75rem', color: '#94A3B8', marginRight: '0.25rem' }}>Classes:</span>
                      {project.dataset.classes.map(c => (
                        <span key={c} style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '4px', padding: '0.15rem 0.5rem', fontSize: '0.72rem', color: '#a78bfa' }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Approach */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#F8FAFC', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#7C3AED' }}>03</span> Approach & Methodology
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.approach.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#7C3AED', marginTop: '3px', flexShrink: 0 }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.7 }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learnings */}
              <div>
                <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#F8FAFC', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#7C3AED' }}>04</span> Key Learnings
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {project.learnings.map((l, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <CheckCircle size={13} style={{ color: '#22C55E', marginTop: '3px', flexShrink: 0 }} />
                      <p style={{ color: '#94A3B8', fontSize: '0.82rem', lineHeight: 1.7 }}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub link again */}
              {project.github && (
                <motion.a
                  href={project.github} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    marginTop: '1.5rem',
                    background: 'linear-gradient(135deg, #7C3AED, #2563EB)',
                    color: 'white', borderRadius: '8px', padding: '0.6rem 1.25rem',
                    fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <FaGithub size={15} /> View on GitHub
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, #334155, transparent)' }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <span className="section-label">What I Built</span>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#F8FAFC', marginTop: '0.5rem', marginBottom: '1rem',
          }}>
            Academic{' '}
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Projects
            </span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '550px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Every project reflects genuine implementation — methodology, challenges, and honest evaluation.
            Click <em>"View Case Study"</em> to explore each in depth.
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.15 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <ProjectCard project={projects[0]} delay={0} />
        </motion.div>

        {/* Other projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="projects-grid">
          {projects.slice(1).map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
