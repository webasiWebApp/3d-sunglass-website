'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function PrecisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
      setScrollYProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageScale = 1.0 + scrollYProgress * 0.08;

  return (
    <section
      ref={sectionRef}
      id="technology"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f4f4f5',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Editorial Headline */}
        <div style={{ maxWidth: '840px', marginBottom: '4rem' }}>
          <span className="text-caption" style={{ letterSpacing: '0.2em', color: '#71717a' }}>
            TECHNICAL ARCHITECTURE 01
          </span>
          <h2
            className="headline-editorial"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              color: '#0a0a0a',
              lineHeight: 0.95,
              marginTop: '0.5rem',
            }}
          >
            PRECISION
            <br />
            IN EVERY DETAIL.
          </h2>
        </div>

        {/* Cinematic Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Macro Image Container with Parallax Zoom */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '6px',
              overflow: 'hidden',
              backgroundColor: '#fafafa',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transform: `scale(${imageScale})`,
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <Image
                src="/images/editorial/precision-macro.jpg"
                alt="Macro photograph of Averune custom titanium hinge mechanism and precision screw"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Core Technical Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Pillar 1: FRAME */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <span className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700 }}>
                  01
                </span>
                <h3
                  className="subheadline-editorial"
                  style={{
                    fontSize: '1.4rem',
                    letterSpacing: '0.06em',
                    color: '#0a0a0a',
                  }}
                >
                  FRAME
                </h3>
              </div>
              <p className="text-body" style={{ fontSize: '0.95rem', color: '#52525b', maxWidth: '440px' }}>
                Monobloc beta-titanium wire carved with 0.02mm tolerance. Designed to distribute frame tension evenly across the temporal bone without pressure points.
              </p>
            </div>

            {/* Pillar 2: BALANCE */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <span className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700 }}>
                  02
                </span>
                <h3
                  className="subheadline-editorial"
                  style={{
                    fontSize: '1.4rem',
                    letterSpacing: '0.06em',
                    color: '#0a0a0a',
                  }}
                >
                  BALANCE
                </h3>
              </div>
              <p className="text-body" style={{ fontSize: '0.95rem', color: '#52525b', maxWidth: '440px' }}>
                A 52:48 front-to-temple weight ratio ensures the eyewear sits weightlessly on the nasal bridge, maintaining perfect alignment during active movement.
              </p>
            </div>

            {/* Pillar 3: CONSTRUCTION */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <span className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700 }}>
                  03
                </span>
                <h3
                  className="subheadline-editorial"
                  style={{
                    fontSize: '1.4rem',
                    letterSpacing: '0.06em',
                    color: '#0a0a0a',
                  }}
                >
                  CONSTRUCTION
                </h3>
              </div>
              <p className="text-body" style={{ fontSize: '0.95rem', color: '#52525b', maxWidth: '440px' }}>
                Custom micro-cylindrical barrel hinges seated with Teflon-sleeved titanium screws that resist loosening through more than 50,000 open-close cycles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
