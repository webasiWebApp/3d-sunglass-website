'use client';

import React, { useState } from 'react';
import { FEATURED_PRODUCTS, Product } from '@/data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section
      id="collection"
      style={{
        paddingTop: '140px',
        paddingBottom: '120px',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '4.5rem',
            maxWidth: '680px',
          }}
        >
          <span className="text-caption" style={{ marginBottom: '0.75rem', letterSpacing: '0.2em' }}>
            FLAGSHIP SILHOUETTES
          </span>
          <h2
            className="headline-editorial"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              color: '#0a0a0a',
              lineHeight: 0.95,
            }}
          >
            THE COLLECTION
          </h2>
          <p
            className="text-body"
            style={{
              fontSize: '1.05rem',
              color: '#52525b',
              marginTop: '1.25rem',
              maxWidth: '520px',
            }}
          >
            Engineered from solid Japanese beta-titanium and cured bio-acetate. Every frame is hand-buffed for seventy-two hours.
          </p>
        </div>

        {/* Product Editorial Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3.5rem 2.5rem',
          }}
        >
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
