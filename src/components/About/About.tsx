"use client";
import { motion } from 'framer-motion';

const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src="/window.svg" alt="Ilustrasi" className="w-56 h-56 object-contain" />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">Tentang Saya</h2>
          <p className="text-gray-300 mb-4">
            Saya adalah seorang Frontend Developer yang fokus pada pembuatan UI modern, responsif, dan interaktif. Saya suka belajar teknologi baru dan membangun produk digital yang berdampak.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1 rounded bg-white/10 text-accent border border-accent text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 