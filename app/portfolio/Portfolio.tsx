'use client';
// app/portfolio/Portfolio.tsx
// Client component — handles all interactivity

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Disney from '@/public/images/disney.jpeg';
import Cta from '../components/cta/page';
import Footer from '../components/footer/Footer';

type Category = 'All' | 'Frontend' | 'Fullstack' | 'Backend';

interface Project {
  name: string;
  desc: string;
  image: any;
  stack: string[];
  category: Category;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: 'Disney+ Clone',
    desc: 'A full-featured Disney+ streaming platform clone with movie listings, categories, authentication, and a fully responsive design.',
    image: Disney,
    stack: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    name: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce app with product listings, cart, checkout, and admin dashboard. Integrated with Stripe for payments.',
    image: Disney,
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Fullstack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    name: 'REST API — Blog',
    desc: 'A RESTful API for a blog platform with auth, CRUD operations, pagination, and role-based access control.',
    image: Disney,
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Portfolio Website',
    desc: 'My personal portfolio built with Next.js and Tailwind CSS, featuring smooth animations and a clean design system.',
    image: Disney,
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Task Manager App',
    desc: 'A full-stack productivity app with drag-and-drop boards, real-time updates, and team collaboration features.',
    image: Disney,
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    category: 'Fullstack',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Auth Microservice',
    desc: 'A standalone authentication microservice with JWT, OAuth2, refresh tokens, and rate limiting.',
    image: Disney,
    stack: ['Node.js', 'Express.js', 'Redis'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const categories: Category[] = ['All', 'Frontend', 'Fullstack', 'Backend'];

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="py-1.5 px-4 bg-white text-black font-semibold text-sm rounded-xl border border-gray-200">
            Portfolio
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-3">
              Projects I've Built
            </h1>
            <p className="text-gray-500 text-base max-w-md leading-relaxed">
              A collection of work that showcases my skills across the full stack — from pixel-perfect UIs to scalable backend systems.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 flex-shrink-0">
            {[
              { num: `${projects.length}+`, label: 'Projects' },
              { num: '5+', label: 'Years' },
              { num: '10+', label: 'Clients' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-black">{s.num}</p>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
              <span className={`ml-2 text-xs ${active === cat ? 'text-white/60' : 'text-gray-400'}`}>
                {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0677EC] hover:text-white transition-colors">
                      <FiExternalLink size={16} />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0677EC] hover:text-white transition-colors">
                      <FiGithub size={16} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base text-black">{project.name}</h3>
                  <span className="text-xs font-semibold text-[#0677EC] bg-blue-50 px-2 py-0.5 rounded-full flex-shrink-0">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-semibold bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold">No projects found</p>
          </div>
        )}

      </div>

      <Cta />
      <Footer />
    </div>
  );
}