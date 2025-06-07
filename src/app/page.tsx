'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "React Native", level: 75 },
  { name: "Node.js", level: 70 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6">
            Développeur Web & Mobile
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Je crée des applications web et mobiles modernes, performantes et élégantes.
            Spécialisé en React, Next.js et React Native.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projets"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionné par le développement web et mobile, je m'efforce de créer des expériences utilisateur exceptionnelles
              en combinant design moderne et performance technique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Mes compétences</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Applications web modernes avec React et Next.js
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Développement Mobile</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Applications mobiles natives avec React Native
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interfaces utilisateur intuitives et élégantes
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
