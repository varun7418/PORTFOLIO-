import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { dataWorkflow } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Workflow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="workflow" style={{ padding: '6rem 0', background: 'rgba(30,41,59,0.15)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, #334155, transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, #334155, transparent)' }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <span className="section-label">Process</span>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#F8FAFC', marginTop: '0.5rem', marginBottom: '1rem',
          }}>
            Data Science{' '}
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Workflow
            </span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '550px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Applied end-to-end in the Depression Severity Assessment project — from raw PHQ-9 data to a deployed Streamlit application.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', position: 'relative' }} className="workflow-grid">
          {dataWorkflow.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              onHoverStart={() => setActiveStep(i)}
              onHoverEnd={() => setActiveStep(null)}
              className="workflow-step"
              style={{
                background: activeStep === i ? 'rgba(124,58,237,0.08)' : '#1E293B',
                borderColor: activeStep === i ? 'rgba(124,58,237,0.4)' : '#334155',
                cursor: 'default',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem',
                      color: '#7C3AED', fontWeight: 600,
                    }}>{step.step}</span>
                    <span style={{ fontSize: '1.25rem' }}>{step.emoji}</span>
                  </div>
                  <h3 style={{
                    fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600,
                    fontSize: '0.92rem', color: '#F8FAFC', marginBottom: '0.4rem',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.8rem', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
              {/* Step connector arrow */}
              {i < dataWorkflow.length - 1 && (i + 1) % 3 !== 0 && (
                <div style={{
                  position: 'absolute', right: '-16px', top: '50%', transform: 'translateY(-50%)',
                  color: '#334155', fontSize: '1rem', pointerEvents: 'none', zIndex: 2,
                }}>→</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Project link note */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.8 }}
          style={{ marginTop: '2.5rem', textAlign: 'center' }}
        >
          <p style={{ color: '#4B5563', fontSize: '0.82rem', fontFamily: '"JetBrains Mono", monospace' }}>
            Applied in:{' '}
            <span style={{ color: '#7C3AED' }}>Depression Severity Assessment Project</span>
            {' | '}
            <a href="https://github.com/varun7418/depression-severity-prediction" target="_blank" rel="noopener noreferrer"
              style={{ color: '#06B6D4', textDecoration: 'none' }}>
              github.com/varun7418/depression-severity-prediction ↗
            </a>
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .workflow-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 550px) {
          .workflow-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
