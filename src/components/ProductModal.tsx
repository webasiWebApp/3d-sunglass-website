'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { X, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          overflowY: 'auto',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.15)',
          zIndex: 111,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          animation: 'modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 10,
            backgroundColor: '#f4f4f5',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e4e4e7')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f4f4f5')}
        >
          <X size={18} color="#0a0a0a" />
        </button>

        {/* Left: Product Image */}
        <div
          style={{
            backgroundColor: '#fafafa',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '360px',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
        </div>

        {/* Right: Specifications & CTA */}
        <div style={{ padding: '2.75rem 2.25rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="text-caption" style={{ color: '#71717a' }}>
              AVERUNE ATELIER EDITION
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: '2.25rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginTop: '0.25rem',
                color: '#0a0a0a',
              }}
            >
              {product.name}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#52525b', marginTop: '0.25rem' }}>
              {product.tagline}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm)',
                fontSize: '1.4rem',
                fontWeight: 600,
                color: '#0a0a0a',
                marginTop: '0.75rem',
              }}
            >
              ${product.price}
            </p>
          </div>

          <p className="text-body" style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            {product.description}
          </p>

          {/* Specifications Grid */}
          <div
            style={{
              backgroundColor: '#fbfbfb',
              border: '1px solid #f0f0f2',
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '1.75rem',
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                color: '#27272a',
              }}
            >
              SPECIFICATIONS & FIT
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.65rem 1rem',
                fontSize: '0.825rem',
              }}
            >
              <div>
                <span style={{ color: '#71717a' }}>Lens Width:</span>{' '}
                <span style={{ fontWeight: 600, color: '#0a0a0a' }}>{product.dimensions.lensWidth}</span>
              </div>
              <div>
                <span style={{ color: '#71717a' }}>Bridge:</span>{' '}
                <span style={{ fontWeight: 600, color: '#0a0a0a' }}>{product.dimensions.bridge}</span>
              </div>
              <div>
                <span style={{ color: '#71717a' }}>Temple:</span>{' '}
                <span style={{ fontWeight: 600, color: '#0a0a0a' }}>{product.dimensions.temple}</span>
              </div>
              <div>
                <span style={{ color: '#71717a' }}>Total Width:</span>{' '}
                <span style={{ fontWeight: 600, color: '#0a0a0a' }}>{product.dimensions.totalWidth}</span>
              </div>
              <div>
                <span style={{ color: '#71717a' }}>Net Weight:</span>{' '}
                <span style={{ fontWeight: 600, color: '#0a0a0a' }}>{product.dimensions.weight}</span>
              </div>
              <div>
                <span style={{ color: '#71717a' }}>Protection:</span>{' '}
                <span style={{ fontWeight: 600, color: '#0a0a0a' }}>UV400 Polarized</span>
              </div>
            </div>

            <div style={{ marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid #f0f0f2', fontSize: '0.8rem', color: '#52525b' }}>
              <strong>Materials:</strong> {product.materials.frame} with {product.materials.hinges}.
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ marginTop: 'auto', display: 'flex', gap: '0.85rem' }}>
            <button
              onClick={handleAddToCart}
              className="btn-primary"
              style={{
                flex: 1,
                padding: '0.95rem',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              ADD TO BAG • ${product.price}
            </button>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '0.95rem 1.4rem' }}
            >
              CLOSE
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginTop: '1rem',
              color: '#71717a',
              fontSize: '0.78rem',
            }}
          >
            <ShieldCheck size={14} color="#16a34a" />
            <span>Includes luxury leather case, microfibre cloth, and certificate of origin</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
