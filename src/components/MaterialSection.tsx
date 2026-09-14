'use client';

import React from 'react';
import Image from 'next/image';

export default function MaterialSection() {
  const materialsList = [
    {
      num: '01',
      title: 'AEROSPACE β-TITANIUM',
      description:
        'Sourced from certified mills in Fukui, Japan. Boasting twice the tensile strength of standard alloy at half the density, impervious to corrosion and sweat.',
    },
    {
      num: '02',
      title: 'ORGANIC BIO-ACETATE',
      description:
        'Formulated from renewable cotton seed linters and wood pulp. Cured for four months before carving, producing unrivaled depth and warm tactile touch.',
    },
    {
      num: '03',
      title: 'SAPPHIRE OPTICAL GLASS',
      description:
        'Diamond-polished mineral crystal annealed at 1,100°C for exceptional structural stability, zero chromatic dispersion, and lifelong scratch resistance.',
    },
  ];

  return (
    <section
      id="materials"
      style={{
        paddingTop: '130px',
        paddingBottom: '130px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f4f4f5',
      }}
    >
      <div className="container">
        {/* Section Headline */}
        <div style={{ maxWidth: '820px', marginBottom: '4.5rem' }}>
          <span className="text-caption" style={{ letterSpacing: '0.2em', color: '#71717a' }}>
            ATELIER CRAFTSMANSHIP
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
            MATERIAL
            <br />
            MATTERS.
          </h2>
        </div>

        {/* Editorial Split: Macro Photo & 3 Materials Descriptions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4.5rem',
            alignItems: 'center',
          }}
        >
          {/* Macro Materials Photo */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: '6px',
              overflow: 'hidden',
              backgroundColor: '#fafafa',
            }}
            className="img-zoom-wrap"
          >
            <Image
              src="/images/editorial/materials-macro.jpg"
              alt="Macro photograph showing raw beta-titanium bar, Japanese tortoise cellulose acetate block, and crystal optical glass disc"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Three Material Descriptions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {materialsList.map((item) => (
              <div key={item.num}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#a1a1aa',
                    }}
                  >
                    {item.num}
                  </span>
                  <h3
                    className="subheadline-editorial"
                    style={{
                      fontSize: '1.35rem',
                      letterSpacing: '0.06em',
                      color: '#0a0a0a',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-body" style={{ fontSize: '0.925rem', color: '#52525b', lineHeight: 1.6, maxWidth: '440px' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
