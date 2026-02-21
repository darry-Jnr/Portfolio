// app/layout.tsx

import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import NavbarWrapper from "./components/navbar/NavbarWrapper";
import LoadingScreen from './components/LoadingScreen';

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://darry.dev'), // 🔁 replace with your real domain
  title: {
    default: "Darry — Full Stack Developer",
    template: "%s | Darry",
  },
  description: "Full Stack Developer based in Nigeria. I build fast, modern, and responsive web applications using Next.js, React, Node.js and more.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Nigeria",
    "Freelance Developer",
  ],
  authors: [{ name: "Darry" }],
  creator: "Darry",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://darry.dev",
    siteName: "Darry Portfolio",
    title: "Darry — Full Stack Developer",
    description: "Full Stack Developer based in Nigeria. Building fast, modern web applications.",
    images: [
      {
        url: "/og-image.png", // 🔁 add a 1200x630px image to /public
        width: 1200,
        height: 630,
        alt: "Darry — Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Darry — Full Stack Developer",
    description: "Full Stack Developer based in Nigeria. Building fast, modern web applications.",
    images: ["/og-image.png"],
    creator: "@darry", // 🔁 replace with your Twitter handle
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body>
      <LoadingScreen /> 
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}