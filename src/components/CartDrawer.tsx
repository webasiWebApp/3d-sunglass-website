'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice, totalCount, clearCart } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const freeShippingThreshold = 500;
  const progressPercent = Math.min(100, Math.round((totalPrice / freeShippingThreshold) * 100));

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setOrderComplete(true);
      clearCart();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Slide Drawer */}
      <aside
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 101,
          animation: 'slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #f4f4f5',
          }}
        >
          <div>
            <span className="text-caption">YOUR SELECTION</span>
            <h3
              style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#0a0a0a',
                marginTop: '0.2rem',
              }}
            >
              SHOPPING BAG ({totalCount})
            </h3>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close Shopping Bag"
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f4f4f5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <X size={20} color="#0a0a0a" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{ padding: '0.85rem 2rem', backgroundColor: '#fafafa', borderBottom: '1px solid #f4f4f5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <Truck size={14} color="#71717a" />
            <p style={{ fontSize: '0.78rem', color: '#52525b', fontFamily: 'var(--font-dm)' }}>
              {totalPrice >= freeShippingThreshold ? (
                <span style={{ color: '#16a34a', fontWeight: 600 }}>You qualify for complimentary worldwide express delivery</span>
              ) : (
                <span>Add ${(freeShippingThreshold - totalPrice).toFixed(0)} more for complimentary express delivery</span>
              )}
            </p>
          </div>
          <div style={{ width: '100%', height: '3px', backgroundColor: '#e4e4e7', borderRadius: '2px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                backgroundColor: '#000000',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Order Completed Message */}
        {orderComplete ? (
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2.5rem',
              textAlign: 'center',
            }}
          >
            <CheckCircle2 size={54} color="#16a34a" style={{ marginBottom: '1.25rem' }} />
            <h4
              style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: '2rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              ORDER CONFIRMED
            </h4>
            <p className="text-body" style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>
              Thank you for choosing Averune. Your order #AVR-8921 has been placed. Our atelier is preparing your bespoke packaging.
            </p>

            <button
              onClick={() => {
                setOrderComplete(false);
                closeCart();
              }}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              CONTINUE EXPLORING
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty Bag */
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2.5rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: '1.75rem',
                fontWeight: 600,
                color: '#a1a1aa',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              YOUR BAG IS EMPTY
            </p>
            <p className="text-body" style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
              Discover our signature titanium and acetate silhouettes.
            </p>
            <button onClick={closeCart} className="btn-secondary" style={{ width: '100%' }}>
              VIEW COLLECTION
            </button>
          </div>
        ) : (
          /* Items List */
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid #f4f4f5',
                  }}
                >
                  <div
                    style={{
                      width: '90px',
                      height: '90px',
                      backgroundColor: '#fafafa',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain', padding: '0.4rem' }}
                    />
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h4
                          style={{
                            fontFamily: 'var(--font-barlow)',
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {product.name}
                        </h4>
                        <button
                          onClick={() => removeItem(product.id)}
                          aria-label={`Remove ${product.name}`}
                          style={{ color: '#a1a1aa', padding: '2px', transition: 'color 0.2s ease' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#a1a1aa')}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#71717a', marginTop: '0.15rem' }}>
                        {product.tagline}
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem' }}>
                      {/* Quantity Selector */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          border: '1px solid #e4e4e7',
                          borderRadius: '9999px',
                          padding: '0.2rem 0.5rem',
                          gap: '0.6rem',
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          style={{ display: 'flex', alignItems: 'center', color: '#52525b' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, minWidth: '14px', textAlign: 'center' }}>
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          style={{ display: 'flex', alignItems: 'center', color: '#52525b' }}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-dm)',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          color: '#0a0a0a',
                        }}
                      >
                        ${product.price * quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer / Checkout Button */}
        {items.length > 0 && !orderComplete && (
          <div
            style={{
              padding: '1.75rem 2rem',
              borderTop: '1px solid #f4f4f5',
              backgroundColor: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="text-caption">SUBTOTAL</span>
              <span style={{ fontFamily: 'var(--font-dm)', fontWeight: 600, fontSize: '1.1rem' }}>
                ${totalPrice.toLocaleString()}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#71717a' }}>Shipping</span>
              <span style={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 500 }}>
                {totalPrice >= freeShippingThreshold ? 'Complimentary Express' : '$25 Standard'}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '0.92rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              {checkingOut ? (
                <span>SECURING ORDER...</span>
              ) : (
                <>
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem',
                marginTop: '0.85rem',
                color: '#a1a1aa',
                fontSize: '0.75rem',
              }}
            >
              <ShieldCheck size={14} />
              <span>2-Year Atelier Warranty & 30-Day Returns</span>
            </div>
          </div>
        )}
      </aside>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
