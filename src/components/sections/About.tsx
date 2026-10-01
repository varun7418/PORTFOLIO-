import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Lightbulb, Target, BookOpen, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const traits = [
    {
      icon: <Cpu size={20} />,
      title: 'Analytical Thinking',
      desc: 'Demonstrated critical evaluation skills by identifying and disclosing label leakage in a clinical ML model — prioritizing rigor over inflated metrics.',
    },
    {
      icon: <Target size={20} />,
      title: 'Healthcare AI Focus',
      desc: 'Passionate about applying data science to healthcare challenges, specifically mental health classification and clinical decision support tools.',
    },
    {
      icon: <Lightbulb size={20} />,
      title: 'End-to-End Builder',
      desc: 'From raw data cleaning with Pandas to deploying interactive Streamlit apps with embedded maps — comfortable across the full ML pipeline.',
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Continuous Learner',
      desc: 'Completed 6 certifications across SQL, Python, DBMS, Java, MATLAB, and Full-Stack Development — proactively expanding technical breadth.',
    },
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      {/* Subtle top separator */}
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, #334155, transparent)' }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <span className="section-label">About Me</span>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#F8FAFC', marginTop: '0.5rem', marginBottom: '1rem',
          }}>
            The <span style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Story</span> Behind the Data
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            A Computer Science engineer who chose to go deep in data — turning clinical questionnaires into insights, and code into tools that matter.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
          {/* Left — narrative */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div style={{
              background: '#1E293B', border: '1px solid #334155', borderRadius: '16px',
              padding: '2rem', marginBottom: '1.5rem',
            }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{
                  background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)',
                  borderRadius: '6px', padding: '0.2rem 0.6rem',
                  fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#a78bfa',
                }}>B.E. CSE</span>
                <span style={{
                  background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                  borderRadius: '6px', padding: '0.2rem 0.6rem',
                  fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#22C55E',
                }}>2022 – 2026</span>
              </div>
              <p style={{ color: '#CBD5E1', lineHeight: 1.9, fontSize: '0.95rem' }}>
                I'm a B.E. Computer Science graduate from Sathyabama Institute of Science and Technology, Chennai,
                with a strong focus on <strong style={{ color: '#a78bfa' }}>Healthcare Data Science and AI</strong>.
              </p>
              <p style={{ color: '#CBD5E1', lineHeight: 1.9, fontSize: '0.95rem', marginTop: '1rem' }}>
                My final year project — a <strong style={{ color: '#06B6D4' }}>Random Forest classifier for PHQ-9 depression severity</strong> — taught me
                more than just modelling. I discovered and documented label leakage, a critical finding that
                demonstrates I value <em>methodological honesty</em> over artificially impressive numbers.
              </p>
              <p style={{ color: '#CBD5E1', lineHeight: 1.9, fontSize: '0.95rem', marginTop: '1rem' }}>
                Beyond ML, I led the <strong style={{ color: '#F59E0B' }}>Microsoft Club Content Team</strong> for three years,
                conducted Git workshops, and participated in Smart India Hackathon — building both technical depth and communication breadth.
              </p>
            </div>

            {/* Contact info */}
            <div style={{
              background: 'rgba(30,41,59,0.5)', border: '1px solid #334155', borderRadius: '12px', padding: '1.25rem',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}>
              {[
                { icon: <MapPin size={15} />, text: personalInfo.location, link: null },
                { icon: <Mail size={15} />, text: personalInfo.email, link: null },
                { icon: <FaGithub size={15} />, text: 'github.com/varun7418', link: personalInfo.github },
                { icon: <FaLinkedin size={15} />, text: 'linkedin.com/in/varunk43', link: personalInfo.linkedin },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#7C3AED', flexShrink: 0 }}>{item.icon}</span>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      style={{ color: '#94A3B8', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#7C3AED')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
                    >{item.text}</a>
                  ) : (
                    <span style={{ color: '#94A3B8', fontSize: '0.875rem' }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — trait cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(124,58,237,0.4)' }}
                style={{
                  background: '#1E293B', border: '1px solid #334155', borderRadius: '12px',
                  padding: '1.25rem', cursor: 'default', transition: 'all 0.3s',
                }}
              >
                <div style={{
                  width: '38px', height: '38px', borderRadius: '8px',
                  background: 'rgba(124,58,237,0.15)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: '#7C3AED', marginBottom: '0.75rem',
                }}>
                  {trait.icon}
                </div>
                <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>
                  {trait.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.8rem', lineHeight: 1.7 }}>
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
