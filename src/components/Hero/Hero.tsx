"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center gap-6" id="hero">
      <motion.img
        src="/profile.jpg"
        alt="Foto Profil"
        className="w-32 h-32 rounded-full object-cover border-4 border-accent shadow-lg mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-bold mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Hai, saya <span className="text-accent">[Nama Anda]</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Seorang Frontend Developer yang bersemangat dalam membangun antarmuka web yang indah dan fungsional.
      </motion.p>
      <motion.a
        href="#projects"
        className="inline-block mt-4 px-6 py-2 rounded bg-accent text-white font-semibold shadow hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        Lihat Proyek Saya
      </motion.a>
    </section>
  );
} 