'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Private Atelier Fitting',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '130px',
        paddingBottom: '140px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f4f4f5',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '5rem',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column: Direct Inquiries & Ateliers */}
          <div>
            <span className="text-caption" style={{ letterSpacing: '0.2em', color: '#71717a' }}>
              CONCIERGE & APPOINTMENTS
            </span>
            <h2
              className="headline-editorial"
              style={{
                fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
                color: '#0a0a0a',
                lineHeight: 0.95,
                marginTop: '0.5rem',
                marginBottom: '2rem',
              }}
            >
              LET&apos;S TALK.
            </h2>

            <p className="text-body" style={{ fontSize: '1.05rem', color: '#52525b', maxWidth: '440px', marginBottom: '3rem' }}>
              Whether you require bespoke frame fittings, prescription optical integration, or private collection preview, our concierge is at your service.
            </p>

            {/* Atelier Locations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700, marginBottom: '0.25rem' }}>
                  NEW YORK ATELIER
                </p>
                <p style={{ fontSize: '0.875rem', color: '#71717a' }}>
                  482 Broome Street, SoHo, NY 10013
                </p>
              </div>

              <div>
                <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700, marginBottom: '0.25rem' }}>
                  TOKYO ATELIER
                </p>
                <p style={{ fontSize: '0.875rem', color: '#71717a' }}>
                  5-7-22 Minamiaoyama, Minato-ku, Tokyo 107-0062
                </p>
              </div>

              <div>
                <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700, marginBottom: '0.25rem' }}>
                  DIRECT CHANNELS
                </p>
                <p style={{ fontSize: '0.875rem', color: '#71717a', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                  <Mail size={14} /> concierge@averune-eyewear.com
                </p>
                <p style={{ fontSize: '0.875rem', color: '#71717a', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                  <Phone size={14} /> +1 (800) 492-8428
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimal Contact Form */}
          <div
            style={{
              backgroundColor: '#fbfbfb',
              border: '1px solid #f0f0f2',
              borderRadius: '12px',
              padding: '2.5rem',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 1.25rem' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-barlow)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#0a0a0a',
                    marginBottom: '0.75rem',
                  }}
                >
                  MESSAGE RECEIVED
                </h3>
                <p className="text-body" style={{ fontSize: '0.95rem', color: '#52525b', maxWidth: '380px', margin: '0 auto 1.75rem' }}>
                  Thank you, {formData.name || 'valued client'}. A dedicated eyewear concierge will contact you within four business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Private Atelier Fitting', message: '' });
                  }}
                  className="btn-secondary"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-barlow)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#0a0a0a',
                  }}
                >
                  REQUEST CONSULTATION
                </h3>

                <div>
                  <label htmlFor="contact-name" className="text-caption" style={{ display: 'block', marginBottom: '0.4rem', color: '#52525b' }}>
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="E.g. Alexander Wright"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid #e4e4e7',
                      backgroundColor: '#ffffff',
                      fontFamily: 'var(--font-dm)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      color: '#0a0a0a',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-caption" style={{ display: 'block', marginBottom: '0.4rem', color: '#52525b' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="alexander@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid #e4e4e7',
                      backgroundColor: '#ffffff',
                      fontFamily: 'var(--font-dm)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      color: '#0a0a0a',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-topic" className="text-caption" style={{ display: 'block', marginBottom: '0.4rem', color: '#52525b' }}>
                    INQUIRY FOCUS
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid #e4e4e7',
                      backgroundColor: '#ffffff',
                      fontFamily: 'var(--font-dm)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      color: '#0a0a0a',
                      cursor: 'pointer',
                    }}
                  >
                    <option>Private Atelier Fitting</option>
                    <option>Prescription Custom Optics</option>
                    <option>Corporate & Bespoke Gifting</option>
                    <option>Editorial & Press Inquiries</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-caption" style={{ display: 'block', marginBottom: '0.4rem', color: '#52525b' }}>
                    YOUR MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Describe your appointment preferences or sizing questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid #e4e4e7',
                      backgroundColor: '#ffffff',
                      fontFamily: 'var(--font-dm)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      color: '#0a0a0a',
                      resize: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    padding: '0.95rem 1.5rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    width: '100%',
                    marginTop: '0.5rem',
                  }}
                >
                  <span>SUBMIT INQUIRY</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
