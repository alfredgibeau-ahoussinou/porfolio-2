'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-full flex justify-center py-6 bg-white/80 dark:bg-gray-950/80 backdrop-blur sticky top-0 z-50 shadow-sm mb-8">
      <ul className="flex gap-8 text-lg font-medium">
        <li><Link href="/" className="hover:text-blue-600 transition">Accueil</Link></li>
        <li><Link href="/#projets" className="hover:text-blue-600 transition">Projets</Link></li>
        <li><Link href="/competences" className="hover:text-blue-600 transition">Compétences</Link></li>
        <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
      </ul>
    </nav>
  );
} 