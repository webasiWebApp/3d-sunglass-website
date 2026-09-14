'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { ArrowDown } from 'lucide-react';

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let animationFrameId: number;
    let isDisposed = false;
    let isVisible = true;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // CAMERA SETUP
    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
    camera.position.set(0, 0.35, 8.4);

    // RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // STUDIO THREE-POINT LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    // Key Light (top right front)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(6, 9, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Fill Light (top left front)
    const fillLight = new THREE.DirectionalLight(0xf4f7fb, 1.5);
    fillLight.position.set(-6, 5, 6);
    scene.add(fillLight);

    // Rim Light (back top) creating sharp metallic edge highlights
    const rimLight = new THREE.DirectionalLight(0xffffff, 2.6);
    rimLight.position.set(0, 8, -7);
    scene.add(rimLight);

    // Specular front light
    const frontLight = new THREE.DirectionalLight(0xffffff, 1.2);
    frontLight.position.set(0, 2, 7);
    scene.add(frontLight);

    // ROOT MODEL GROUP
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // SOFT STUDIO CONTACT SHADOW
    const createShadowTexture = () => {
      const size = 512;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(
          size / 2, size / 2, 8,
          size / 2, size / 2, size / 2
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.35)');
        gradient.addColorStop(0.25, 'rgba(0, 0, 0, 0.16)');
        gradient.addColorStop(0.55, 'rgba(0, 0, 0, 0.04)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const shadowPlaneGeo = new THREE.PlaneGeometry(6.4, 3.2);
    const shadowPlaneMat = new THREE.MeshBasicMaterial({
      map: createShadowTexture(),
      transparent: true,
      depthWrite: false,
    });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.15;
    scene.add(shadowPlane);

    // LUXURY PBR MATERIALS FOR SLOTS
    // Slot 0: Smoked Polarized Lenses (Material.002)
    const lensMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x151518,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.22,
      ior: 1.52,
      reflectivity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      transparent: true,
      opacity: 0.92,
    });

    // Slot 1: Satin Brushed Titanium Frame (frame color)
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e1e22,
      metalness: 0.9,
      roughness: 0.24,
    });

    // Slot 2: Temple Tips (ear piece)
    const templeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      metalness: 0.25,
      roughness: 0.15,
    });

    // LOAD FBX MODEL
    const loader = new FBXLoader();
    loader.load(
      '/models/vr.fbx',
      (fbx) => {
        if (isDisposed) return;

        // Reset root rotation
        fbx.rotation.set(0, 0, 0);

        // Compute original bounding box
        const box = new THREE.Box3().setFromObject(fbx);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Center FBX at (0, 0, 0)
        fbx.position.x = -center.x;
        fbx.position.y = -center.y;
        fbx.position.z = -center.z;

        // Pivot wrapper: rotate 180 degrees so front of sunglasses faces camera
        const pivot = new THREE.Group();
        pivot.add(fbx);
        pivot.rotation.y = Math.PI;

        // Scale so width is ~4.8 units for comfortable elegance
        const targetScale = 4.8 / (size.x || 1);
        pivot.scale.setScalar(targetScale);

        // Apply slot materials
        fbx.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            if (Array.isArray(mesh.material)) {
              mesh.material = [lensMaterial, frameMaterial, templeMaterial];
            } else {
              mesh.material = frameMaterial;
            }
          }
        });

        modelGroup.add(pivot);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error('FBX Load Error:', error);
        setLoading(false);
      }
    );

    // SCROLL ANIMATION & LERP
    let currentScroll = 0;
    let targetScroll = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      targetScroll = progress;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // INTERSECTION OBSERVER
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // RESIZE
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // RENDER LOOP
    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      currentScroll += (targetScroll - currentScroll) * 0.085;

      const isMobile = window.innerWidth < 768;
      const p = currentScroll; // 0.0 -> 1.0

      if (isMobile) {
        // Mobile Composition: model sits above, text below
        const targetY = THREE.MathUtils.lerp(0.3, 0.95, p);
        const targetScale = THREE.MathUtils.lerp(0.85, 0.65, p);
        const targetRotY = THREE.MathUtils.lerp(0.06, 0.45, p);
        const targetRotX = THREE.MathUtils.lerp(0.12, 0.02, p);

        modelGroup.position.set(0, targetY, 0);
        modelGroup.scale.setScalar(targetScale);
        modelGroup.rotation.set(targetRotX, targetRotY, 0);

        shadowPlane.position.set(0, targetY - 1.15 * targetScale, 0);
        shadowPlane.scale.setScalar(targetScale);
      } else {
        // Desktop Composition:
        // Starts centered in Hero (y = -0.15) leaving clean room for top headline,
        // then glides into RIGHT column (x = 2.05, y = 0.05)
        const targetX = THREE.MathUtils.lerp(0, 2.05, Math.min(1, p * 1.15));
        const targetY = THREE.MathUtils.lerp(-0.15, 0.05, p);
        const targetZ = THREE.MathUtils.lerp(0, 0.35, Math.min(1, p * 1.2));
        const targetScale = THREE.MathUtils.lerp(0.9, 0.82, p);

        // Rotation revealing side silhouette and lens reflection
        const targetRotY = THREE.MathUtils.lerp(0.06, 0.52, p);
        const targetRotX = THREE.MathUtils.lerp(0.12, 0.02, p);
        const targetRotZ = THREE.MathUtils.lerp(0, -0.03, p);

        modelGroup.position.set(targetX, targetY, targetZ);
        modelGroup.scale.setScalar(targetScale);
        modelGroup.rotation.set(targetRotX, targetRotY, targetRotZ);

        // Soft shadow follows model
        shadowPlane.position.set(targetX, targetY - 1.15 * targetScale, targetZ);
        shadowPlane.scale.setScalar(targetScale);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  // UI OPACITY / TRANSLATIONS
  const heroOpacity = Math.max(0, 1 - scrollProgress * 2.8);
  const heroTranslateY = -scrollProgress * 45;

  const aboutOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.35) * 2.6));
  const aboutTranslateY = Math.max(0, (1 - (scrollProgress - 0.35) * 2.2) * 35);

  return (
    <section
      ref={containerRef}
      id="hero-scroll-container"
      style={{
        position: 'relative',
        height: '240vh',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Sticky 100vh Viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Three.js Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            zIndex: 10,
          }}
        />

        {/* Loading Indicator */}
        {loading && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              zIndex: 30,
              transition: 'opacity 0.4s ease',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                border: '2px solid #e4e4e7',
                borderTopColor: '#0a0a0a',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
              }}
            />
            <span
              className="text-caption"
              style={{ marginTop: '1.25rem', letterSpacing: '0.18em', color: '#71717a' }}
            >
              INITIALIZING AVERUNE 3D
            </span>
          </div>
        )}

        {/* ========================================================= */}
        {/* 1. HERO STATE UI (Clean top headline above the 3D model) */}
        {/* ========================================================= */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 20,
            pointerEvents: heroOpacity > 0.1 ? 'auto' : 'none',
            opacity: heroOpacity,
            transform: `translateY(${heroTranslateY}px)`,
            transition: 'opacity 0.1s linear',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: '100px',
            paddingBottom: '35px',
          }}
          className="container"
        >
          {/* Top Exact Headline from prompt.md */}
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            <span
              className="text-caption"
              style={{
                letterSpacing: '0.25em',
                color: '#71717a',
                display: 'inline-block',
                marginBottom: '0.65rem',
              }}
            >
              SPRING / SUMMER 2026
            </span>
            <h1
              className="headline-editorial"
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)',
                letterSpacing: '-0.02em',
                color: '#0a0a0a',
                lineHeight: 0.95,
                marginBottom: '0.35rem',
              }}
            >
              AVERUNE
            </h1>
            <h2
              className="headline-editorial"
              style={{
                fontSize: 'clamp(1.75rem, 3.8vw, 2.75rem)',
                color: '#27272a',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
              }}
            >
              DESIGNED TO BE SEEN.
            </h2>
          </div>

          {/* Bottom Minimal Scroll Cue */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <span
              className="text-caption"
              style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: '#71717a' }}
            >
              SCROLL TO REVEAL
            </span>
            <div style={{ animation: 'bounce 2s infinite' }}>
              <ArrowDown size={14} color="#71717a" />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. ABOUT STATE UI (Reveals on LEFT column) */}
        {/* ========================================================= */}
        <div
          id="about"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 21,
            pointerEvents: aboutOpacity > 0.1 ? 'auto' : 'none',
            opacity: aboutOpacity,
            transform: `translateY(${aboutTranslateY}px)`,
            transition: 'opacity 0.15s linear',
            display: 'flex',
            alignItems: 'center',
          }}
          className="container"
        >
          {/* LEFT COLUMN: About Aviator Content */}
          <div
            style={{
              maxWidth: '540px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            <div>
              <span
                className="text-caption"
                style={{
                  letterSpacing: '0.18em',
                  color: '#71717a',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                ABOUT AVERUNE
              </span>
              <h2
                className="headline-editorial"
                style={{
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.75rem)',
                  color: '#0a0a0a',
                  letterSpacing: '-0.02em',
                  lineHeight: 0.95,
                }}
              >
                FORM.
                <br />
                FUNCTION.
                <br />
                VISION.
              </h2>
            </div>

            <p
              className="text-body"
              style={{
                fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
                lineHeight: 1.6,
                color: '#27272a',
                fontWeight: 400,
                maxWidth: '460px',
              }}
            >
              Averune brings precision, refined materials and timeless form together in modern eyewear.
            </p>

            <div style={{ display: 'flex', gap: '2.5rem', paddingTop: '0.5rem' }}>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-barlow)',
                    fontSize: '1.85rem',
                    fontWeight: 700,
                    color: '#0a0a0a',
                  }}
                >
                  14<span style={{ fontSize: '1rem', fontWeight: 500 }}>g</span>
                </p>
                <p className="text-caption" style={{ marginTop: '0.15rem' }}>
                  AEROSPACE WEIGHT
                </p>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: '#e4e4e7' }} />
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-barlow)',
                    fontSize: '1.85rem',
                    fontWeight: 700,
                    color: '#0a0a0a',
                  }}
                >
                  100%
                </p>
                <p className="text-caption" style={{ marginTop: '0.15rem' }}>
                  UVA/UVB POLARIZED
                </p>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: '#e4e4e7' }} />
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-barlow)',
                    fontSize: '1.85rem',
                    fontWeight: 700,
                    color: '#0a0a0a',
                  }}
                >
                  β-Ti
                </p>
                <p className="text-caption" style={{ marginTop: '0.15rem' }}>
                  JAPANESE TITANIUM
                </p>
              </div>
            </div>

            <div>
              <a
                href="#collection"
                className="btn-primary"
                style={{ alignSelf: 'flex-start' }}
              >
                EXPLORE THE COLLECTION
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(6px);
          }
          60% {
            transform: translateY(3px);
          }
        }
      `}</style>
    </section>
  );
}
