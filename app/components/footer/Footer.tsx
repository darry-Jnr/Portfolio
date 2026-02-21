'use client';
import Link from "next/link";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  // { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://github.com/darry-Jnr', label: 'GitHub' },
  { href: 'https://www.facebook.com/profile.php?id=61587194386511', label: 'Facebook' },
  { href: 'https://x.com/DarryAntho93069', label: 'X (Twitter)' },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="text-xl font-bold text-black tracking-tight">
              Darry<span className="text-[#0677EC]">.</span>
            </Link>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              Building clean, modern web experiences. Open to freelance and full-time opportunities.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Pages</p>
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-[#0677EC] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#0677EC] transition-colors font-medium"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Work With Me</p>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Have a project in mind? Let's talk.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black hover:bg-[#0677EC] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Darry. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Designed & Built by Darry
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;