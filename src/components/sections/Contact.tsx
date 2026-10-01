import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setFormState('loading');
    // Frontend-only: simulate sending (no backend)
    setTimeout(() => {
      setFormState('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors(err => ({ ...err, [name]: undefined }));
  };

  const contactItems = [
    { icon: <Mail size={18} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={18} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <MapPin size={18} />, label: 'Location', value: personalInfo.location, href: null },
    { icon: <FaGithub size={18} />, label: 'GitHub', value: 'github.com/varun7418', href: personalInfo.github },
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/varunk43', href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'rgba(30,41,59,0.15)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, #334155, transparent)' }} />

      <div className="container-custom" ref={ref}>
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <span className="section-label">Let's Connect</span>
          <h2 style={{
            fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#F8FAFC', marginTop: '0.5rem', marginBottom: '1rem',
          }}>
            Get in{' '}
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Touch
            </span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
            Open to Data Science internships, ML roles, and collaborative projects. Let's build something meaningful with data.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          {/* Left — contact info */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.05))',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem',
            }}>
              <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '1.5rem' }}>
                Contact Information
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {contactItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '8px',
                      background: 'rgba(124,58,237,0.15)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      color: '#7C3AED', flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.65rem', color: '#4B5563', marginBottom: '0.15rem' }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer"
                          style={{ color: '#94A3B8', fontSize: '0.87rem', textDecoration: 'none', transition: 'color 0.2s', wordBreak: 'break-all' }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#7C3AED')}
                          onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ color: '#94A3B8', fontSize: '0.87rem' }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open to work */}
            <div style={{
              background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)',
              borderRadius: '12px', padding: '1.25rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: '#22C55E', animation: 'pulse-dot 2s ease-in-out infinite', flexShrink: 0,
              }} />
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#22C55E', marginBottom: '0.15rem' }}>
                  Open to Opportunities
                </p>
                <p style={{ color: '#4B5563', fontSize: '0.78rem' }}>
                  Actively seeking Data Science internships & entry-level ML roles
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <div style={{
              background: '#1E293B', border: '1px solid #334155',
              borderRadius: '16px', padding: '2rem',
            }}>
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '2rem' }}
                >
                  <CheckCircle size={48} style={{ color: '#22C55E', margin: '0 auto 1rem' }} />
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button onClick={() => setFormState('idle')} className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1.5rem' }}>
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '1.5rem' }}>
                    Send a Message
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#94A3B8', marginBottom: '0.4rem' }}>
                        Name *
                      </label>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="Your name" className="form-input"
                        style={{ borderColor: errors.name ? '#EF4444' : undefined }}
                        aria-label="Name"
                      />
                      {errors.name && <p style={{ color: '#EF4444', fontSize: '0.7rem', marginTop: '0.25rem' }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#94A3B8', marginBottom: '0.4rem' }}>
                        Email *
                      </label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com" className="form-input"
                        style={{ borderColor: errors.email ? '#EF4444' : undefined }}
                        aria-label="Email"
                      />
                      {errors.email && <p style={{ color: '#EF4444', fontSize: '0.7rem', marginTop: '0.25rem' }}>{errors.email}</p>}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#94A3B8', marginBottom: '0.4rem' }}>
                      Subject
                    </label>
                    <input
                      name="subject" value={form.subject} onChange={handleChange}
                      placeholder="Data Science Internship / Collaboration..."
                      className="form-input"
                      aria-label="Subject"
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.7rem', color: '#94A3B8', marginBottom: '0.4rem' }}>
                      Message *
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Your message..."
                      className="form-input"
                      rows={5}
                      style={{ resize: 'vertical', borderColor: errors.message ? '#EF4444' : undefined }}
                      aria-label="Message"
                    />
                    {errors.message && <p style={{ color: '#EF4444', fontSize: '0.7rem', marginTop: '0.25rem' }}>{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formState === 'loading'}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', opacity: formState === 'loading' ? 0.8 : 1 }}
                  >
                    {formState === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </motion.button>

                  <p style={{ color: '#4B5563', fontSize: '0.72rem', textAlign: 'center', marginTop: '1rem', fontFamily: '"JetBrains Mono", monospace' }}>
                    Or email directly: {personalInfo.email}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
