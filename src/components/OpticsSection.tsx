'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function OpticsSection() {
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

  const imageTransformY = (scrollYProgress - 0.5) * -30;

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: '120px',
        paddingBottom: '140px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f4f4f5',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Text / Specs Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <span className="text-caption" style={{ letterSpacing: '0.2em', color: '#71717a' }}>
                TECHNICAL ARCHITECTURE 02
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
                CLEAR
                <br />
                BY DESIGN.
              </h2>
            </div>

            <p
              className="text-body"
              style={{
                fontSize: '1.05rem',
                color: '#3f3f46',
                lineHeight: 1.65,
                maxWidth: '460px',
              }}
            >
              Every lens is diamond-turned from optical-grade mineral glass. Ground to zero distortion curves to deliver uncompromised chromatic fidelity.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem 1.5rem', marginTop: '0.5rem' }}>
              <div>
                <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700 }}>
                  POLARIZATION
                </p>
                <p style={{ fontSize: '0.875rem', color: '#71717a', marginTop: '0.25rem', lineHeight: 1.5 }}>
                  99.9% glare elimination without color shifts, optimized for open water and asphalt reflectance.
                </p>
              </div>

              <div>
                <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700 }}>
                  UV400 SHIELD
                </p>
                <p style={{ fontSize: '0.875rem', color: '#71717a', marginTop: '0.25rem', lineHeight: 1.5 }}>
                  100% absorption of UVA and UVB radiation up to 400nm wavelengths.
                </p>
              </div>

              <div>
                <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700 }}>
                  AR COATING
                </p>
                <p style={{ fontSize: '0.875rem', color: '#71717a', marginTop: '0.25rem', lineHeight: 1.5 }}>
                  7-layer internal vacuum-deposited anti-reflective treatment eliminating distracting eye bounce.
                </p>
              </div>

              <div>
                <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700 }}>
                  HYDRO-OLEOPHOBIC
                </p>
                <p style={{ fontSize: '0.875rem', color: '#71717a', marginTop: '0.25rem', lineHeight: 1.5 }}>
                  Permanent nanocoat repelling water beads, skin oils, and ambient dust particles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Macro Lens Image */}
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
                transform: `translateY(${imageTransformY}px)`,
                transition: 'transform 0.15s ease-out',
              }}
            >
              <Image
                src="/images/editorial/optics-macro.jpg"
                alt="Close-up photograph of Averune polarized crystal lens with antireflective coating"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
