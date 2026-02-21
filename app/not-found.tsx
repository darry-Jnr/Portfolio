'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

const NotFound = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-80" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        {/* 404 big number */}
        <div className="relative mb-6 select-none">
          <span className="text-[160px] sm:text-[220px] font-black text-gray-100 leading-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl">🔍</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-3">
          Page not found
        </h1>
        <p className="text-gray-500 text-base max-w-sm mx-auto leading-relaxed mb-10">
          Looks like this page doesn't exist or was moved. Let's get you back on track.
        </p>

        {/* Quick links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 bg-black hover:bg-[#0677EC] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            <FiHome size={16} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-black font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
          >
            <FiArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Helpful links */}
        <div>
          <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">
            Or visit one of these
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: '/about', label: 'About' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-400 hover:text-black border border-gray-100 hover:border-gray-300 px-4 py-2 rounded-full transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default NotFound;