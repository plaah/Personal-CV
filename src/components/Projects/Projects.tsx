"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: 'Portofolio Modern',
    image: '/globe.svg',
    desc: 'Website portofolio pribadi dengan Next.js, Tailwind, dan animasi interaktif.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    demo: '#',
    github: '#',
  },
  {
    name: 'Aplikasi Catatan',
    image: '/window.svg',
    desc: 'Aplikasi catatan dengan fitur drag & drop dan dark mode.',
    tech: ['React', 'TypeScript', 'Firebase'],
    demo: '#',
    github: '#',
  },
  {
    name: 'Landing Page Startup',
    image: '/vercel.svg',
    desc: 'Landing page responsif untuk startup teknologi.',
    tech: ['Next.js', 'Tailwind'],
    demo: '#',
    github: '#',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-accent text-center">Proyek</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              className="bg-white/5 rounded-xl shadow-lg overflow-hidden border border-white/10 hover:shadow-2xl transition-shadow group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
            >
              <div className="overflow-hidden">
                <img src={proj.image} alt={proj.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-white">{proj.name}</h3>
                <p className="text-gray-300 text-sm">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-accent/20 text-accent text-xs font-medium border border-accent/40">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:scale-110 transition-transform"><FaExternalLinkAlt size={18} /></a>
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:scale-110 transition-transform"><FaGithub size={18} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 