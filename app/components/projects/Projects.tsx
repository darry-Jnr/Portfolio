'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Disney from '@/public/images/disney.jpeg';

interface Project {
  image: StaticImageData | string;
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    image: Disney,
    name: 'Disney Clone',
    description: 'A full-featured Disney+ streaming platform clone with movie listings, categories, and responsive design.',
    stack: ['React', 'Tailwind CSS', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    image: Disney,
    name: 'Project Two',
    description: 'Add your second project description here. Describe what it does and the problem it solves.',
    stack: ['Next.js', 'TypeScript', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="py-1.5 px-4 bg-white text-black font-semibold text-sm rounded-xl border border-gray-200">
            Projects
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Heading row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Here are Some of the<br className="hidden md:block" /> Projects I've Built
          </h2>
          <p className="text-gray-500 text-base max-w-sm leading-relaxed">
            These projects showcase my skills in building modern, responsive web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2">{project.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex-1 text-center bg-black hover:bg-[#0677EC] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200"
                    >
                      Live Demo ↗
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex-1 text-center bg-gray-50 hover:bg-gray-100 text-black text-sm font-semibold py-2.5 rounded-lg border border-gray-200 transition-colors duration-200"
                    >
                      GitHub ↗
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-block bg-white hover:bg-gray-50 text-black font-semibold px-8 py-3.5 rounded-lg border border-gray-200 transition-colors duration-200"
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;