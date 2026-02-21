'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'John Adeyemi',
    role: 'CEO, TechStartup Lagos',
    avatar: 'JA',
    message: 'Darry delivered our web app on time and exceeded expectations. The code was clean, the UI was beautiful, and communication was top-notch throughout the project.',
    rating: 5,
  },
  {
    name: 'Sarah Okafor',
    role: 'Founder, StyleBrand',
    avatar: 'SO',
    message: 'Working with Darry was a great experience. He understood exactly what we needed and built a fast, responsive website that our customers love.',
    rating: 5,
  },
  {
    name: 'Michael Eze',
    role: 'Product Manager, FinTech Co.',
    avatar: 'ME',
    message: 'Darry is a talented developer who takes ownership of his work. He built our dashboard from scratch and handled every challenge professionally.',
    rating: 5,
  },
  {
    name: 'Amaka Nwosu',
    role: 'Creative Director, DesignHub',
    avatar: 'AN',
    message: 'Incredible attention to detail. Darry translated our designs pixel-perfectly and added smooth animations that really elevated the final product.',
    rating: 5,
  },
  {
    name: 'Tunde Bello',
    role: 'CTO, Logistics App',
    avatar: 'TB',
    message: 'Fast, reliable, and easy to work with. Darry built our entire frontend in record time without sacrificing quality. Will definitely work together again.',
    rating: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => goTo(current === 0 ? testimonials.length - 1 : current - 1);
  const next = () => goTo(current === testimonials.length - 1 ? 0 : current + 1);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="py-1.5 px-4 bg-white text-black font-semibold text-sm rounded-xl border border-gray-200">
            Testimonials
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
          What Clients Say
        </h2>
        <p className="text-gray-500 text-base max-w-md leading-relaxed mb-12">
          Here's what people I've worked with have to say about the experience and results.
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm"
            >
              <Stars count={testimonials[current].rating} />
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                "{testimonials[current].message}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-bold text-black">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-400">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6 gap-4">

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 text-gray-500"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black flex items-center justify-center transition-all duration-200 text-gray-500"
            >
              →
            </button>
          </div>

          {/* Counter */}
          <span className="text-sm text-gray-400 font-medium">
            {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-4 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black rounded-full"
            animate={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;