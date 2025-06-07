'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Analyse des besoins",
    description: "Je commence par une analyse approfondie de vos besoins et objectifs pour comprendre parfaitement votre projet.",
    icon: "📋",
    details: [
      "Réunion de découverte",
      "Analyse des objectifs",
      "Étude de la concurrence",
      "Définition des fonctionnalités"
    ]
  },
  {
    id: 2,
    title: "Conception",
    description: "Je crée une architecture technique solide et un design moderne qui répond à vos besoins.",
    icon: "🎨",
    details: [
      "Architecture technique",
      "Design UI/UX",
      "Prototypage",
      "Validation des choix"
    ]
  },
  {
    id: 3,
    title: "Développement",
    description: "Je développe votre projet en utilisant les meilleures pratiques et technologies modernes.",
    icon: "💻",
    details: [
      "Développement agile",
      "Tests unitaires",
      "Code review",
      "Documentation"
    ]
  },
  {
    id: 4,
    title: "Tests & Optimisation",
    description: "Je m'assure que votre application est performante, sécurisée et prête pour la production.",
    icon: "🔍",
    details: [
      "Tests d'intégration",
      "Optimisation des performances",
      "Sécurité",
      "Compatibilité"
    ]
  },
  {
    id: 5,
    title: "Déploiement",
    description: "Je déploie votre application sur les meilleures plateformes et assure un suivi post-lancement.",
    icon: "🚀",
    details: [
      "Configuration serveur",
      "Déploiement continu",
      "Monitoring",
      "Support"
    ]
  }
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

export default function Processus() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Mon Processus de Travail</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une approche méthodique et transparente pour transformer vos idées en réalité
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={item}
              className="relative"
            >
              {/* Ligne de connexion */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800" />
              )}

              <div className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {step.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {step.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-moi pour discuter de votre projet et voir comment nous pouvons travailler ensemble.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </div>
  );
} 