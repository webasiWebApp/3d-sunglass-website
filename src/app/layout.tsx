import type { Metadata } from 'next';
import { DM_Sans, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import CartDrawer from '@/components/CartDrawer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AVERUNE — Designed to be Seen',
  description: 'A premium, highly minimalistic eyewear experience inspired by timeless form, aerospace titanium, and optical precision.',
  keywords: ['Averune', 'Sunglasses', 'Minimalist', 'Luxury Eyewear', 'Titanium', 'Polarized'],
  openGraph: {
    title: 'AVERUNE — Designed to be Seen',
    description: 'Precision, refined materials and timeless form together in modern eyewear.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${barlowCondensed.variable}`}>
      <body>
        <CartProvider>
          <Navigation />
          <CartDrawer />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
