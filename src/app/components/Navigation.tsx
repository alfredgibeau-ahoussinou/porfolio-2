'use client';

export default function Navigation() {
  return (
    <nav className="w-full flex justify-center py-6 bg-white/80 dark:bg-gray-950/80 backdrop-blur sticky top-0 z-50 shadow-sm mb-8">
      <ul className="flex gap-8 text-lg font-medium">
        <li><a href="/" className="hover:text-blue-600 transition">Accueil</a></li>
        <li><a href="/#projets" className="hover:text-blue-600 transition">Projets</a></li>
        <li><a href="/competences" className="hover:text-blue-600 transition">Compétences</a></li>
        <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
      </ul>
    </nav>
  );
} 