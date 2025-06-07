'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';

const projects = [
  {
    id: "projet1",
    title: "Application de Gestion de Tâches",
    description: "Une application web moderne pour gérer vos tâches quotidiennes.",
    image: "/projet1.jpg",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Gestion des tâches en temps réel",
      "Interface utilisateur intuitive",
      "Synchronisation multi-appareils",
      "Notifications personnalisables"
    ],
    category: "web",
    date: "2024-03",
    popularity: 95,
    client: "Tech Solutions Inc."
  },
  {
    id: "projet2",
    title: "Plateforme E-commerce",
    description: "Un site e-commerce complet avec paiement sécurisé.",
    image: "/projet2.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Catalogue de produits dynamique",
      "Système de paiement sécurisé",
      "Gestion des commandes",
      "Interface administrateur"
    ],
    category: "web",
    date: "2024-02",
    popularity: 90,
    client: "Fashion Store"
  },
  {
    id: "projet3",
    title: "Blog Personnel",
    description: "Un blog personnel avec gestion de contenu dynamique.",
    image: "/projet3.jpg",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    features: [
      "Rédaction en Markdown",
      "Système de commentaires",
      "Recherche intégrée",
      "Design responsive"
    ],
    category: "web",
    date: "2024-01",
    popularity: 85,
    client: "Personal Project"
  },
  {
    id: "projet4",
    title: "Application de Suivi Sportif",
    description: "Une application mobile pour suivre votre activité sportive.",
    image: "/projet4.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    features: [
      "Suivi des performances",
      "Statistiques détaillées",
      "Planification d'entraînement",
      "Partage sur les réseaux sociaux"
    ],
    category: "mobile",
    date: "2023-12",
    popularity: 88,
    client: "Fitness Pro"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Martin",
    role: "CEO, Tech Solutions Inc.",
    content: "Un travail exceptionnel ! Le projet a été livré dans les délais et dépasse toutes nos attentes.",
    image: "/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Marc Dubois",
    role: "Fondateur, Fashion Store",
    content: "Une collaboration très professionnelle. Le résultat final est exactement ce que nous recherchions.",
    image: "/testimonial2.jpg"
  },
  {
    id: 3,
    name: "Julie Bernard",
    role: "Directrice Marketing, Fitness Pro",
    content: "Une application mobile parfaitement conçue qui a considérablement amélioré l'engagement de nos utilisateurs.",
    image: "/testimonial3.jpg"
  }
];

const categories = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" }
];

const sortOptions = [
  { id: "date-desc", label: "Plus récent" },
  { id: "date-asc", label: "Plus ancien" },
  { id: "popularity", label: "Popularité" },
  { id: "name", label: "Nom" }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Projets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return b.date.localeCompare(a.date);
        case "date-asc":
          return a.date.localeCompare(b.date);
        case "popularity":
          return b.popularity - a.popularity;
        case "name":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">Mes Projets</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets récents, mettant en valeur mes compétences en développement web et mobile.
        </p>

        <div className="mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-12"
        >
          {filteredAndSortedProjects.length > 0 ? (
            filteredAndSortedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(project.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">Technologies utilisées :</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Fonctionnalités principales :</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                          {project.features.map((feature, featureIdx) => (
                            <li key={featureIdx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Client : {project.client}
                      </div>
                    </div>

                    <Link
                      href={`/projets/${project.id}`}
                      className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                    >
                      Voir les détails
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Aucun projet ne correspond à votre recherche.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Section Témoignages */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Ce qu'en disent mes clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 