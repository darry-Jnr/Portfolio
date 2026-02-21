import Link from 'next/link';

const Cta = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-black rounded-3xl px-8 py-16 md:py-20 text-center flex flex-col items-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl">
            Have a project in mind?<br />
            Let's build it <span className="text-[#0677EC]">together.</span>
          </h2>

        

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#0677EC] hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link
              href="/portfolio"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
            >
              View My Work →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cta;