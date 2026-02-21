'use client';

import { FiMapPin, FiDownload } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import myimage from '@/public/images/myimg.webp';
import Services from '../components/services/Services';
import Cta from '../components/cta/page';
import Footer from '../components/footer/Footer';

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Built' },
  { number: '10+', label: 'Happy Clients' },
];

const Page = () => {
  return (
    <div className="pt-20 md:pt-24">

      {/* ABOUT HERO */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex-1 order-2 md:order-1">

            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="py-1.5 px-4 bg-white text-black font-semibold text-sm rounded-xl border border-gray-200">
                About Me
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Name + role */}
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Darry
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-gray-500 text-base mb-6">
              <span className="font-medium text-black">Full Stack Developer</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <FiMapPin size={15} />
                Based in Nigeria
              </span>
            </div>

            <hr className="border-gray-100 mb-6" />

            {/* Bio */}
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              I'm a Full-Stack JavaScript Engineer with five years of experience
              building fast, scalable, and user-centric web applications. I leverage
              modern technologies like the MERN stack and Next.js to turn innovative
              ideas into reliable digital products.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              I care deeply about clean code, great user experience, and delivering
              work that actually makes a difference. Whether it's a startup MVP or a
              full enterprise product — I bring the same level of dedication.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-black hover:bg-[#0677EC] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Start a Project
              </Link>
              <a
                href="/cv.docx"
                download
                className="flex items-center gap-2 text-gray-500 hover:text-black font-semibold text-sm transition-colors"
              >
                <FiDownload size={18} />
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-shrink-0 order-1 md:order-2">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-3 bg-gray-100 rounded-3xl -z-10" />
              <Image
                src={myimage}
                alt="Portrait of Darry, Full Stack Developer"
                width={340}
                height={420}
                className="rounded-2xl object-cover shadow-md"
                priority
              />

              {/* Floating experience badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 shadow-lg rounded-xl px-4 py-3 flex items-center gap-2">
                <span className="text-2xl">💻</span>
                <div>
                  <p className="text-xs font-bold text-black leading-none">5+ Years</p>
                  <p className="text-xs text-gray-400 leading-none mt-0.5">Experience</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mt-16 border-t border-gray-100 pt-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-black">{s.number}</p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Services />
      <Cta />
      <Footer />
    </div>
  );
};

export default Page;