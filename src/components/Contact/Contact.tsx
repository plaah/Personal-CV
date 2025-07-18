"use client";
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: FaLinkedin, url: 'https://linkedin.com/in/username' },
  { icon: FaGithub, url: 'https://github.com/username' },
  { icon: FaInstagram, url: 'https://instagram.com/username' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background flex flex-col items-center justify-center text-center">
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-4 text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Mari Terhubung!
      </motion.h2>
      <motion.p
        className="text-gray-300 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Tertarik bekerja sama atau sekadar ngobrol? Silakan hubungi saya melalui email atau media sosial berikut.
      </motion.p>
      <motion.a
        href="mailto:email@domain.com"
        className="text-accent font-semibold underline mb-6 inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        email@domain.com
      </motion.a>
      <div className="flex gap-6 mt-4 justify-center">
        {socials.map(({ icon: Icon, url }, i) => (
          <motion.a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl text-accent hover:text-white transition-colors"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </section>
  );
} 