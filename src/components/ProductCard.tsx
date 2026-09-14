'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Plus, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onClick={() => onSelect(product)}
    >
      {/* Product Image Area on Pure White / Subtle Neutral */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1',
          backgroundColor: '#fafafa',
          borderRadius: '4px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          transition: 'background-color 0.3s ease',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transform: isHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Floating Quick Action overlay on Hover */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            left: '1.25rem',
            right: '1.25rem',
            display: 'flex',
            gap: '0.5rem',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => addItem(product)}
            className="btn-primary"
            style={{
              flex: 1,
              padding: '0.65rem 1rem',
              fontSize: '0.78rem',
              letterSpacing: '0.06em',
            }}
          >
            <Plus size={14} />
            <span>ADD TO BAG</span>
          </button>
          <button
            onClick={() => onSelect(product)}
            className="btn-secondary"
            style={{
              padding: '0.65rem',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
            }}
            aria-label={`View details for ${product.name}`}
          >
            <Eye size={15} color="#0a0a0a" />
          </button>
        </div>
      </div>

      {/* Editorial Information */}
      <div style={{ paddingTop: '1.25rem', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
            }}
          >
            {product.name}
          </h3>
          <span
            style={{
              fontFamily: 'var(--font-dm)',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#0a0a0a',
            }}
          >
            ${product.price}
          </span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-dm)',
            fontSize: '0.825rem',
            color: '#71717a',
            marginTop: '0.2rem',
            lineHeight: 1.4,
          }}
        >
          {product.tagline}
        </p>

        {/* Minimal Editorial CTA */}
        <div style={{ marginTop: '0.85rem' }}>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: isHovered ? '#000000' : '#71717a',
              borderBottom: `1px solid ${isHovered ? '#000000' : 'transparent'}`,
              paddingBottom: '2px',
              transition: 'all 0.2s ease',
            }}
          >
            VIEW PRODUCT →
          </span>
        </div>
      </div>
    </div>
  );
}
