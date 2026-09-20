'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f4f4f5',
        paddingTop: '80px',
        paddingBottom: '60px',
      }}
    >
      <div className="container">
        {/* Top Minimal Footer Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid #f4f4f5',
          }}
        >
          {/* Brand Wordmark & Tagline */}
          <div style={{ maxWidth: '300px' }}>
            <span
              style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: '2rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: '#0a0a0a',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              AVERUNE
            </span>
            <p className="text-body" style={{ fontSize: '0.875rem', color: '#71717a' }}>
              Precision eyewear engineered with aerospace titanium and handcrafted Japanese bio-acetate.
            </p>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700, marginBottom: '1.25rem' }}>
                EXPERIENCE
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li>
                  <a href="#collection" className="text-caption" style={{ color: '#52525b', textTransform: 'none', fontSize: '0.875rem' }}>
                    The Collection
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-caption" style={{ color: '#52525b', textTransform: 'none', fontSize: '0.875rem' }}>
                    About Averune
                  </a>
                </li>
                <li>
                  <a href="#technology" className="text-caption" style={{ color: '#52525b', textTransform: 'none', fontSize: '0.875rem' }}>
                    Precision & Optics
                  </a>
                </li>
                <li>
                  <a href="#materials" className="text-caption" style={{ color: '#52525b', textTransform: 'none', fontSize: '0.875rem' }}>
                    Material Matters
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700, marginBottom: '1.25rem' }}>
                ATELIER
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li>
                  <a href="#contact" className="text-caption" style={{ color: '#52525b', textTransform: 'none', fontSize: '0.875rem' }}>
                    Private Fittings
                  </a>
                </li>
                <li>
                  <span className="text-caption" style={{ color: '#71717a', textTransform: 'none', fontSize: '0.875rem' }}>
                    SoHo, New York
                  </span>
                </li>
                <li>
                  <span className="text-caption" style={{ color: '#71717a', textTransform: 'none', fontSize: '0.875rem' }}>
                    Minami-Aoyama, Tokyo
                  </span>
                </li>
                <li>
                  <span className="text-caption" style={{ color: '#71717a', textTransform: 'none', fontSize: '0.875rem' }}>
                    Bahnhofstrasse, Zurich
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-caption" style={{ color: '#0a0a0a', fontWeight: 700, marginBottom: '1.25rem' }}>
                SOCIAL & PRESS
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li>
                  <a href="#" className="text-caption" style={{ color: '#52525b', textTransform: 'none', fontSize: '0.875rem' }}>
                    Instagram @averune.eyewear
                  </a>
                </li>
                <li>
                  <a href="#" className="text-caption" style={{ color: '#52525b', textTransform: 'none', fontSize: '0.875rem' }}>
                    Vogue Editorial Archive
                  </a>
                </li>
                <li>
                  <a href="#" className="text-caption" style={{ color: '#52525b', textTransform: 'none', fontSize: '0.875rem' }}>
                    Designboom Architecture
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2.5rem',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <p style={{ fontSize: '0.8rem', color: '#a1a1aa', margin: 0 }}>
              &copy; {currentYear} AVERUNE Eyewear Inc. All rights reserved. Designed to be seen.
            </p>
            <span style={{ fontSize: '0.8rem', color: '#d4d4d8' }}>•</span>
            <a
              href="https://webasi.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.8rem',
                color: '#71717a',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
              }}
            >
              <span>Design by</span>
              <span
                style={{
                  color: '#0a0a0a',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                WEBASI
              </span>
            </a>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ fontSize: '0.8rem', color: '#71717a' }}>
              PRIVACY POLICY
            </a>
            <a href="#" style={{ fontSize: '0.8rem', color: '#71717a' }}>
              TERMS OF SERVICE
            </a>
            <a href="#" style={{ fontSize: '0.8rem', color: '#71717a' }}>
              WARRANTY & RETURNS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
