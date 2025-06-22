'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function APropos() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">À propos de moi</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Mon parcours, ma vision et mes ambitions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="relative w-full h-80 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Photo de Alfred Gibeau-Ahoussinou"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 space-y-6 text-gray-700 dark:text-gray-300"
          >
            <p>
              Passionné par l'informatique depuis mon plus jeune âge, j'ai toujours été fasciné par la manière dont la technologie peut résoudre des problèmes complexes et améliorer notre quotidien. Mon parcours m'a naturellement conduit vers le développement web et mobile, un domaine où la créativité rencontre la logique.
            </p>
            <p>
              Après une formation intensive et de nombreux projets personnels, j'ai acquis une solide expertise dans l'écosystème JavaScript, notamment avec React, Next.js et React Native. Je suis convaincu que la clé d'une application réussie réside dans une expérience utilisateur intuitive, une performance optimale et un code propre et maintenable.
            </p>
            <p>
              Je suis constamment en veille technologique, curieux d'apprendre de nouveaux langages et frameworks. Mon objectif est de continuer à grandir en tant que développeur et de contribuer à des projets innovants et ambitieux.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 