import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Augustine Paul Samraj V — Backend Software Engineer',
  description:
    'Portfolio of Augustine Paul Samraj V — real-time systems, reliable APIs, and AI-integrated products.',
  openGraph: {
    title: 'Augustine Paul Samraj V — Backend Software Engineer',
    description: 'Real-time systems, reliable APIs, and AI-integrated products.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Augustine Paul Samraj V — Backend Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Augustine Paul Samraj V — Backend Software Engineer',
    description: 'Real-time systems, reliable APIs, and AI-integrated products.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
