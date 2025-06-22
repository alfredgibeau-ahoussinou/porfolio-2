# 🚀 Portfolio - Alfred Gibeau-Ahoussinou

Portfolio professionnel moderne développé avec Next.js 14, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités

### 📄 Pages principales
- **Accueil** - Présentation et navigation
- **À propos** - Bio et photo de profil
- **Compétences** - Technologies maîtrisées avec barres de progression
- **Projets** - Portfolio de projets avec descriptions détaillées
- **Ce que je recherche** - Opportunités professionnelles (CDI/CDD Full-Stack)
- **Contact** - Formulaire de contact fonctionnel
- **Blog** - Section blog (en développement)
- **Processus** - Méthodologie de travail

### 🎨 Design & UX
- Design responsive et moderne
- Animations fluides avec Framer Motion
- Navigation intuitive
- Formulaire de contact avec validation
- Sauvegarde automatique des données de formulaire

### 📧 Contact
- Formulaire de contact intégré avec Resend
- Validation en temps réel
- Envoi d'emails automatique
- Interface utilisateur intuitive

## 🛠️ Technologies utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations
- **React Hook Form** - Gestion des formulaires

### Backend & Services
- **Resend** - Service d'envoi d'emails
- **Next.js API Routes** - Actions serveur

### Outils de développement
- **ESLint** - Linting du code
- **PostCSS** - Traitement CSS
- **Git** - Contrôle de version

## 🚀 Installation et démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/alfredgibeau-ahoussinou/porfolio-2.git
cd porfolio-2

# Installer les dépendances
npm install

# Configuration des variables d'environnement
cp .env.example .env.local
```

### Configuration
Créer un fichier `.env.local` avec :
```env
RESEND_API_KEY=your_resend_api_key_here
```

### Démarrage
```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Démarrage en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
porfolio-2/
├── src/
│   ├── app/
│   │   ├── a-propos/          # Page À propos
│   │   ├── competences/       # Page Compétences
│   │   ├── contact/           # Page Contact + actions
│   │   ├── projets/           # Pages Projets + données
│   │   ├── recherche/         # Page Ce que je recherche
│   │   ├── components/        # Composants réutilisables
│   │   └── layout.tsx         # Layout principal
│   └── ...
├── public/                    # Assets statiques
├── tailwind.config.js         # Configuration Tailwind
└── package.json
```

## 🎯 Fonctionnalités clés

### Formulaire de contact
- Validation en temps réel
- Sauvegarde automatique dans le navigateur
- Envoi via Resend
- Gestion des erreurs

### Page Compétences
- Barres de progression animées
- Niveaux de maîtrise en pourcentage
- Design moderne avec icônes

### Page Projets
- Affichage des 4 projets les plus récents
- Descriptions détaillées
- Images de projets
- Navigation vers les détails

### Page "Ce que je recherche"
- Types de contrats acceptés (CDI/CDD/Freelance)
- Préférences de travail
- Call-to-action vers le contact

## 🌐 Déploiement

### Vercel (Recommandé)
1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Autres plateformes
- Netlify
- Railway
- AWS Amplify

## 📝 Scripts disponibles

```bash
npm run dev          # Démarrage en développement
npm run build        # Build de production
npm run start        # Démarrage en production
npm run lint         # Vérification du code
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 📞 Contact

- **Email** : alfredgibeauahoussinou@gmail.com
- **GitHub** : [@alfredgibeau-ahoussinou](https://github.com/alfredgibeau-ahoussinou)
- **Portfolio** : [Lien vers le site déployé]

---

Développé avec ❤️ par Alfred Gibeau-Ahoussinou
