'use client';

import { motion } from 'framer-motion';

const competences = [
  {
    category: "Développement Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
    ]
  },
  {
    category: "Développement Mobile",
    skills: [
      { name: "React Native", icon: "📱" },
      { name: "Expo", icon: "🚀" },
    ]
  },
  {
    category: "Design & UI/UX",
    skills: [
      { name: "Figma", icon: "🎯" },
      { name: "Adobe XD", icon: "✨" },
    ]
  },
  {
    category: "Outils & Méthodologies",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "Agile", icon: "🔄" },
      { name: "Jira", icon: "📋" },
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Competences() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Mes Compétences
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {competences.map((category, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 