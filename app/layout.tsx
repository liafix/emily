import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'For Emily. — A Private Consultation',
  description: 'One little thing I wanted to ask.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: 'For Emily.', description: 'One little thing I wanted to ask.', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'For Emily. — A Private Consultation' }] },
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#0B0A0E' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body>{children}</body></html>;
}
