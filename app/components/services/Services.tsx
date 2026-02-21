'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    number: '01',
    heading: 'Frontend Development',
    desc: 'Crafting clean, responsive, and interactive user interfaces using React and Next.js. Every pixel is intentional, every interaction is smooth.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    dark: true,
  },
  {
    number: '02',
    heading: 'Backend Development',
    desc: 'Building secure, scalable server-side logic and infrastructure with Node.js and Express.js for reliable, high-performance applications.',
    tags: ['Node.js', 'Express.js', 'REST APIs'],
    dark: false,
  },
  {
    number: '03',
    heading: 'API Integration',
    desc: 'Seamlessly connecting your frontend and backend using RESTful and GraphQL APIs, ensuring clean and efficient data flow across your stack.',
    tags: ['REST', 'GraphQL', 'Third-party APIs'],
    dark: false,
  },
  {
    number: '04',
    heading: 'Deployment & Optimization',
    desc: 'Taking your app from local to live — deploying on Vercel, Railway, or VPS while optimizing for speed, SEO, and scalability.',
    tags: ['Vercel', 'CI/CD', 'Performance'],
    dark: true,
  },
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="py-1.5 px-4 bg-white text-black font-semibold text-sm rounded-xl border border-gray-200">
            Services
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight max-w-sm">
            Everything you need to ship your product
          </h2>
          <div className="flex flex-col gap-3 max-w-sm">
            <p className="text-gray-500 text-base leading-relaxed">
              From idea to deployment — I handle the full stack so you can focus on what matters most.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#0677EC] transition-colors"
            >
              Let's work together <FiArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:scale-[1.01] ${
                s.dark
                  ? 'bg-black text-white'
                  : 'bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100'
              }`}
            >
              {/* Number */}
              <span className={`text-xs font-bold tracking-widest ${s.dark ? 'text-white/30' : 'text-gray-300'}`}>
                {s.number}
              </span>

              {/* Heading */}
              <h3 className={`text-xl font-bold leading-snug ${s.dark ? 'text-white' : 'text-black'}`}>
                {s.heading}
              </h3>

              {/* Desc */}
              <p className={`text-sm leading-relaxed flex-1 ${s.dark ? 'text-white/60' : 'text-gray-500'}`}>
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map(tag => (
                  <span
                    key={tag}
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      s.dark
                        ? 'bg-white/10 text-white/70'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;