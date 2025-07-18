"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-background/60 border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="font-bold text-xl tracking-widest text-accent">AF</div>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-2 py-1 text-sm font-medium text-white hover:text-accent transition-colors"
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-accent transition-all duration-300 ${typeof window !== 'undefined' && window.location.hash === link.href ? 'opacity-100' : 'opacity-0'}`}
              />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
} 