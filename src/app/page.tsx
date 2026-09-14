import HeroCinematic from '@/components/HeroCinematic';
import FeaturedProducts from '@/components/FeaturedProducts';
import PrecisionSection from '@/components/PrecisionSection';
import OpticsSection from '@/components/OpticsSection';
import TrendingSection from '@/components/TrendingSection';
import VisionSection from '@/components/VisionSection';
import MaterialSection from '@/components/MaterialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* 1 & 2: HERO & ABOUT (Cinematic 3D FBX Scroll Transition) */}
      <HeroCinematic />

      {/* 3: FEATURED SUNGLASSES (The Collection) */}
      <FeaturedProducts />

      {/* 4: TECHNICAL HIGHLIGHT 01 — PRECISION */}
      <PrecisionSection />

      {/* 5: TECHNICAL HIGHLIGHT 02 — OPTICS */}
      <OpticsSection />

      {/* 6: TRENDING SUNGLASSES (In View) */}
      <TrendingSection />

      {/* 7: VISION (Editorial Campaign Lifestyle Photography) */}
      <VisionSection />

      {/* 8: MATERIAL (Atelier Craftsmanship) */}
      <MaterialSection />

      {/* 9: CONTACT (Concierge & Private Appointments) */}
      <ContactSection />

      {/* 10: FOOTER */}
      <Footer />
    </>
  );
}
