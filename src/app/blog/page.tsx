'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
  {
    id: 11,
    title: "Introduction à TypeScript : Les bases essentielles",
    excerpt: "Découvrez les concepts fondamentaux de TypeScript, des types de base aux génériques et aux types utilitaires.",
    date: "2024-03-20",
    category: "TypeScript",
    readTime: "15 min",
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"]
  },
  {
    id: 12,
    title: "Les Design Patterns en JavaScript",
    excerpt: "Explorez les patterns de conception les plus utiles en JavaScript, du Singleton au Strategy Pattern.",
    date: "2024-03-18",
    category: "JavaScript",
    readTime: "20 min",
    tags: ["JavaScript", "Design Patterns", "Programming", "Software Architecture"]
  },
  {
    id: 13,
    title: "Les bases de GraphQL avec Apollo Client",
    excerpt: "Apprenez à utiliser GraphQL avec Apollo Client pour créer des applications React performantes.",
    date: "2024-03-16",
    category: "GraphQL",
    readTime: "25 min",
    tags: ["GraphQL", "Apollo", "React", "JavaScript", "API"]
  },
  {
    id: 14,
    title: "Les bases de Docker pour le développement",
    excerpt: "Maîtrisez Docker pour le développement, de l'installation à la configuration des conteneurs.",
    date: "2024-03-14",
    category: "DevOps",
    readTime: "30 min",
    tags: ["Docker", "DevOps", "Containers", "Development", "Deployment"]
  },
  {
    id: 15,
    title: "Les bases de l'accessibilité web",
    excerpt: "Apprenez les principes fondamentaux de l'accessibilité web pour créer des sites inclusifs.",
    date: "2024-03-12",
    category: "Accessibility",
    readTime: "25 min",
    tags: ["Accessibility", "Web Development", "HTML", "CSS", "ARIA"]
  },
  {
    id: 1,
    title: "Optimisation des performances React",
    excerpt: "Découvrez les meilleures pratiques pour optimiser les performances de vos applications React.",
    date: "2024-03-15",
    category: "React",
    readTime: "15 min",
    tags: ["React", "Performance", "Optimisation", "JavaScript", "Web Development"]
  },
  {
    id: 2,
    title: "Les nouvelles fonctionnalités de Next.js 14",
    excerpt: "Explorez les dernières fonctionnalités de Next.js 14, incluant le Server Actions et le Partial Prerendering.",
    date: "2024-03-10",
    category: "Next.js",
    readTime: "20 min",
    tags: ["Next.js", "React", "Web Development", "JavaScript", "Performance"]
  },
  {
    id: 3,
    title: "Créer une API RESTful avec Node.js et Express",
    excerpt: "Guide complet pour créer une API RESTful robuste avec Node.js et Express.",
    date: "2024-03-05",
    category: "Backend",
    readTime: "25 min",
    tags: ["Node.js", "Express", "API", "Backend", "JavaScript", "MongoDB"]
  },
  {
    id: 4,
    title: "Développement mobile avec React Native",
    excerpt: "Apprenez à créer des applications mobiles performantes avec React Native.",
    date: "2024-03-01",
    category: "Mobile",
    readTime: "30 min",
    tags: ["React Native", "Mobile", "JavaScript", "iOS", "Android", "Development"]
  }
];

const categories = ["All", "TypeScript", "JavaScript", "GraphQL", "DevOps", "Accessibility", "React", "Next.js", "Backend", "Mobile"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Blog Technique</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Articles et tutoriels sur le développement web et mobile, React, Next.js et plus encore.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Liste des articles */}
        <div className="grid gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                    {article.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  <Link href={`/blog/${article.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">
              Aucun article ne correspond à votre recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 