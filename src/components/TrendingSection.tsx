'use client';

import React, { useState } from 'react';
import { TRENDING_PRODUCTS, Product } from '@/data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function TrendingSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section
      style={{
        paddingTop: '120px',
        paddingBottom: '130px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f4f4f5',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '4.5rem',
            maxWidth: '640px',
          }}
        >
          <span className="text-caption" style={{ marginBottom: '0.75rem', letterSpacing: '0.2em' }}>
            CURATED EDITIONS
          </span>
          <h2
            className="headline-editorial"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              color: '#0a0a0a',
              lineHeight: 0.95,
            }}
          >
            IN VIEW
          </h2>
          <p
            className="text-body"
            style={{
              fontSize: '1.05rem',
              color: '#52525b',
              marginTop: '1.25rem',
            }}
          >
            Seasonal expressions exploring warm honey acetate palettes and ultra-lightweight double-bridge profiles.
          </p>
        </div>

        {/* Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3.5rem 2.5rem',
          }}
        >
          {TRENDING_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
