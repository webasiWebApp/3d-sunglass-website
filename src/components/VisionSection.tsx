'use client';

import React from 'react';
import Image from 'next/image';

export default function VisionSection() {
  return (
    <section
      style={{
        paddingTop: '120px',
        paddingBottom: '140px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f4f4f5',
      }}
    >
      <div className="container">
        {/* Editorial Heading */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <span className="text-caption" style={{ letterSpacing: '0.2em', color: '#71717a' }}>
              EDITORIAL MANIFESTO
            </span>
            <h2
              className="headline-editorial"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                color: '#0a0a0a',
                lineHeight: 0.92,
                marginTop: '0.5rem',
              }}
            >
              SEE
              <br />
              DIFFERENTLY.
            </h2>
          </div>

          <p
            className="text-body"
            style={{
              fontSize: '1.05rem',
              color: '#52525b',
              maxWidth: '380px',
              lineHeight: 1.6,
            }}
          >
            We craft perspective. Engineered for those who look forward with quiet confidence and uncompromised clarity.
          </p>
        </div>

        {/* Heroic Campaign Lifestyle Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: '#fafafa',
          }}
          className="img-zoom-wrap"
        >
          <Image
            src="/images/editorial/vision-lifestyle.jpg"
            alt="Editorial campaign photograph featuring luxury eyewear in a bright minimalist architectural setting"
            fill
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            priority
          />
        </div>

        {/* Minimal Footer Credits */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid #f4f4f5',
            marginTop: '2rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span className="text-caption" style={{ color: '#71717a' }}>
            CAMPAIGN: ARCHITECTURE OF LIGHT
          </span>
          <span className="text-caption" style={{ color: '#a1a1aa' }}>
            LOCATED AT ZURICH ART PAVILION
          </span>
        </div>
      </div>
    </section>
  );
}
