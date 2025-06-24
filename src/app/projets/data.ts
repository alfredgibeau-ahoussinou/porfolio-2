export const descriptions: Record<string, string> = {
  smaloc: "Application développée en TypeScript pour la gestion de locations ou de petites annonces. Ce projet met en avant la gestion de données, l'authentification et l'ergonomie utilisateur.",
  test4: "Projet d'expérimentation HTML, servant à tester des fonctionnalités ou des intégrations spécifiques dans un environnement isolé.",
  "holbertonschool-Markdown2HTML": "Script de conversion de Markdown vers HTML, réalisé en Python dans le cadre de ma formation.",
  "holbertonschool-interview": "Collection d'exercices d'algorithmique en Python pour la préparation d'entretiens techniques.",
  netflixclone: "Clone de l'interface de Netflix, réalisé pour s'exercer à la reproduction d'UI modernes en HTML et CSS. Ce projet met l'accent sur le responsive design et la fidélité visuelle.",
  "porfoliio-tests": "Projet de tests pour expérimenter différentes fonctionnalités et designs de portfolio web. Idéal pour tester de nouvelles idées avant de les intégrer dans un portfolio principal.",
  Porfolio1: "Premier portfolio personnel développé en TypeScript et React, présentant mes compétences, projets et parcours. Ce projet met en avant l'utilisation de technologies modernes et une structure professionnelle.",
  porfolio_: "Variation ou version alternative de mon portfolio, axée sur l'exploration de nouveaux styles CSS et d'animations. Sert de laboratoire créatif pour l'expérimentation visuelle.",
  profilgibhub: "Projet de profil GitHub personnalisé, permettant de présenter mes contributions, statistiques et informations de manière originale sur ma page GitHub.",
  "test-netflifly": "Projet de test pour le déploiement sur Netlify, utilisé pour valider la compatibilité et le fonctionnement de sites statiques ou JAMstack.",
  testspython: "Projet de tests en Python, utilisé pour expérimenter des scripts, des algorithmes ou des automatisations simples."
};

export const images: Record<string, string> = {
  smaloc: "/projet1.jpg",
  test4: "/projet2.jpg",
  "holbertonschool-Markdown2HTML": "/projet3.jpg",
  "holbertonschool-interview": "/projet4.jpg",
};

export const projectsData = [
  {
    name: "smaloc",
    description: descriptions["smaloc"],
    image: images["smaloc"],
    etat: "Livré",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "MongoDB", "NextAuth"],
    lien: "/projets/smaloc",
  },
  {
    name: "cvporfolio",
    description: "Portfolio personnel moderne pour présenter mon CV, mes compétences et mes réalisations.",
    image: images["test4"] || "/projet2.jpg",
    etat: "Livré",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    lien: "/projets/cvporfolio",
  },
  {
    name: "Runako",
    description: "Application e-commerce pour la vente de produits de beauté et bien-être.",
    image: images["holbertonschool-Markdown2HTML"] || "/projet3.jpg",
    etat: "En cours",
    technologies: ["Next.js", "Stripe", "Prisma", "MongoDB", "Tailwind CSS"],
    lien: "/projets/Runako",
  },
  {
    name: "immo",
    description: "Plateforme de gestion et de recherche d'annonces immobilières.",
    image: images["holbertonschool-interview"] || "/projet4.jpg",
    etat: "Terminé",
    technologies: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind CSS"],
    lien: "/projets/immo",
  },
]; 