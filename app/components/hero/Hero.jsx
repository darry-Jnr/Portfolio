'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left — Text */}
          <div className="flex-1">

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
              Hi, I'm <span className="text-[#0677EC]">Darry</span>.<br />
              Full Stack<br />
              Developer.
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-500 max-w-lg mb-8 leading-relaxed">
              I build fast, modern, and responsive web applications. From idea to deployment, I create clean and user-friendly digital experiences.
            </p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'].map(tech => (
                <span key={tech} className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="text-center bg-black hover:bg-[#0677EC] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="text-center bg-white hover:bg-gray-50 text-black font-semibold px-7 py-3.5 rounded-lg border border-gray-200 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right — Photo / Visual */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0677EC]/30 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Profile image placeholder — replace src with your real photo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="/profilebg.jpg"
                  alt="Darry"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // fallback if no image yet
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback initials */}
                {/* <span className="text-5xl font-bold text-gray-400 absolute">DA</span> */}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-white border border-gray-100 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2">
                <span className="text-lg">💻</span>
                <div>
                  <p className="text-xs font-bold text-black leading-none">4+ Years</p>
                  <p className="text-xs text-gray-500 leading-none">Experience</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;