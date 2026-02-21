'use client';

import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress } from 'react-icons/si';

const techs = [
  { name: 'HTML',         icon: FaHtml5,       color: '#E34F26' },
  { name: 'CSS',          icon: FaCss3Alt,      color: '#1572B6' },
  { name: 'JavaScript',   icon: FaJs,           color: '#F7DF1E' },
  { name: 'TypeScript',   icon: SiTypescript,   color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss,  color: '#06B6D4' },
  { name: 'React',        icon: FaReact,        color: '#61DAFB' },
  { name: 'Next.js',      icon: SiNextdotjs,    color: '#000000' },
  { name: 'Node.js',      icon: FaNodeJs,       color: '#339933' },
  { name: 'Express.js',   icon: SiExpress,      color: '#000000' },
];

const TechCard = ({ tech }: { tech: typeof techs[0] }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = tech.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-3 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl p-5 transition-all duration-300 cursor-default"
    >
      <Icon
        size={36}
        style={{ color: hovered ? tech.color : '#D1D5DB', transition: 'color 0.3s' }}
      />
      <span
        style={{ color: hovered ? '#1f2937' : '#9CA3AF', transition: 'color 0.3s' }}
        className="text-sm font-semibold"
      >
        {tech.name}
      </span>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="py-1.5 px-4 bg-white text-black font-semibold text-sm rounded-xl border border-gray-200">
            Tech Stack
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Tools I Work With
        </h2>
        <p className="text-gray-500 text-base max-w-xl mb-10 leading-relaxed">
          My tech stack represents the tools, frameworks, and libraries I use to bring ideas to life —
          building web applications that are both functional and visually appealing.
        </p>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techs.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;