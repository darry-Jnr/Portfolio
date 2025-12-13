// app/layout.tsx

import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "Darry's Portfolio",
  description: "Darry's professional portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
