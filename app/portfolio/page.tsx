// app/portfolio/page.tsx
// Server component — handles metadata only

import type { Metadata } from 'next';
import Portfolio from './Portfolio';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse Darry's portfolio of web projects — from pixel-perfect frontends to scalable backend systems built with Next.js, React, and Node.js.",
  openGraph: {
    title: "Portfolio — Darry",
    description: "Browse Darry's portfolio of web projects.",
  },
};

export default function Page() {
  return <Portfolio />;
}