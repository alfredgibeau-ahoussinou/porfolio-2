'use client';

import { motion } from 'framer-motion';

const competences = [
  {
    category: "Développement Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 & CSS3", level: 98 },
    ]
  },
  {
    category: "Développement Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
    ]
  },
  {
    category: "Développement Mobile",
    skills: [
      { name: "React Native", level: 75 },
    ]
  },
  {
    category: "Langages & Outils",
    skills: [
      { name: "Python", level: 70 },
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel", level: 85 },
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
        className="space-y-12"
      >
        {competences.map((category, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: skillIdx * 0.1 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 