'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
  {
    id: 11,
    title: "Introduction à TypeScript : Les bases essentielles",
    content: `
      # Introduction à TypeScript : Les bases essentielles

      TypeScript est un sur-ensemble typé de JavaScript qui compile en JavaScript pur. Découvrons les concepts fondamentaux de TypeScript.

      ## 1. Types de base
      TypeScript offre un système de types statiques puissant.

      ### Types primitifs
      \`\`\`typescript
      let name: string = "John";
      let age: number = 30;
      let isActive: boolean = true;
      let numbers: number[] = [1, 2, 3];
      let tuple: [string, number] = ["John", 30];
      \`\`\`

      ### Types personnalisés
      \`\`\`typescript
      type User = {
        id: number;
        name: string;
        email: string;
        age?: number; // Optionnel
      };

      interface Employee extends User {
        department: string;
        salary: number;
      }
      \`\`\`

      ## 2. Fonctions typées
      Les fonctions en TypeScript peuvent être fortement typées.

      ### Définition de fonctions
      \`\`\`typescript
      function add(x: number, y: number): number {
        return x + y;
      }

      const multiply = (x: number, y: number): number => x * y;

      // Fonction avec paramètres optionnels
      function greet(name: string, greeting?: string): string {
        return greeting ? \`\${greeting}, \${name}!\` : \`Hello, \${name}!\`;
      }
      \`\`\`

      ## 3. Classes et interfaces
      TypeScript supporte la programmation orientée objet.

      ### Classes
      \`\`\`typescript
      class Animal {
        private name: string;
        protected age: number;

        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }

        public makeSound(): void {
          console.log("Some sound");
        }
      }

      class Dog extends Animal {
        constructor(name: string, age: number) {
          super(name, age);
        }

        public makeSound(): void {
          console.log("Woof!");
        }
      }
      \`\`\`

      ## 4. Génériques
      Les génériques permettent de créer des composants réutilisables.

      ### Exemple de génériques
      \`\`\`typescript
      function getFirst<T>(arr: T[]): T {
        return arr[0];
      }

      class Container<T> {
        private value: T;

        constructor(value: T) {
          this.value = value;
        }

        getValue(): T {
          return this.value;
        }
      }
      \`\`\`

      ## 5. Utilitaires TypeScript
      TypeScript fournit des types utilitaires puissants.

      ### Types utilitaires courants
      \`\`\`typescript
      type ReadonlyUser = Readonly<User>;
      type PartialUser = Partial<User>;
      type PickUser = Pick<User, 'name' | 'email'>;
      type OmitUser = Omit<User, 'password'>;
      \`\`\`

      ## 6. Gestion des erreurs
      TypeScript aide à gérer les erreurs de manière plus sûre.

      ### Exemple de gestion d'erreurs
      \`\`\`typescript
      function divide(a: number, b: number): number {
        if (b === 0) {
          throw new Error("Division by zero");
        }
        return a / b;
      }

      try {
        const result = divide(10, 0);
      } catch (error) {
        console.error("Error:", error.message);
      }
      \`\`\`

      ## Conclusion
      TypeScript apporte une couche de sécurité supplémentaire à JavaScript en ajoutant le typage statique. Ces bases vous permettront de commencer à utiliser TypeScript dans vos projets.
    `,
    date: "2024-03-20",
    category: "TypeScript",
    readTime: "15 min",
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"]
  },
  {
    id: 12,
    title: "Les Design Patterns en JavaScript",
    content: `
      # Les Design Patterns en JavaScript

      Les Design Patterns sont des solutions réutilisables aux problèmes courants de conception logicielle. Explorons les patterns les plus utiles en JavaScript.

      ## 1. Pattern Singleton
      Le Singleton garantit qu'une classe n'a qu'une seule instance.

      ### Implémentation
      \`\`\`javascript
      class Database {
        static instance;
        
        constructor() {
          if (Database.instance) {
            return Database.instance;
          }
          Database.instance = this;
        }

        query(sql) {
          console.log(\`Executing: \${sql}\`);
        }
      }

      const db1 = new Database();
      const db2 = new Database();
      console.log(db1 === db2); // true
      \`\`\`

      ## 2. Pattern Observer
      Le pattern Observer permet de créer un système de notification.

      ### Implémentation
      \`\`\`javascript
      class Subject {
        constructor() {
          this.observers = [];
        }

        subscribe(observer) {
          this.observers.push(observer);
        }

        unsubscribe(observer) {
          this.observers = this.observers.filter(obs => obs !== observer);
        }

        notify(data) {
          this.observers.forEach(observer => observer.update(data));
        }
      }

      class Observer {
        update(data) {
          console.log(\`Received: \${data}\`);
        }
      }
      \`\`\`

      ## 3. Pattern Factory
      Le Factory pattern simplifie la création d'objets.

      ### Implémentation
      \`\`\`javascript
      class VehicleFactory {
        createVehicle(type) {
          switch(type) {
            case 'car':
              return new Car();
            case 'bike':
              return new Bike();
            default:
              throw new Error('Vehicle type not supported');
          }
        }
      }

      class Car {
        drive() {
          console.log('Driving car');
        }
      }

      class Bike {
        ride() {
          console.log('Riding bike');
        }
      }
      \`\`\`

      ## 4. Pattern Module
      Le Module pattern permet d'encapsuler le code.

      ### Implémentation
      \`\`\`javascript
      const Module = (function() {
        let privateVar = 'private';
        
        function privateMethod() {
          console.log(privateVar);
        }
        
        return {
          publicMethod: function() {
            privateMethod();
          }
        };
      })();
      \`\`\`

      ## 5. Pattern Decorator
      Le Decorator pattern permet d'ajouter des fonctionnalités dynamiquement.

      ### Implémentation
      \`\`\`javascript
      function withLogging(fn) {
        return function(...args) {
          console.log(\`Calling \${fn.name} with args: \${args}\`);
          const result = fn.apply(this, args);
          console.log(\`Result: \${result}\`);
          return result;
        };
      }

      function add(a, b) {
        return a + b;
      }

      const loggedAdd = withLogging(add);
      \`\`\`

      ## 6. Pattern Strategy
      Le Strategy pattern permet de définir une famille d'algorithmes.

      ### Implémentation
      \`\`\`javascript
      class PaymentStrategy {
        pay(amount) {
          throw new Error('Method not implemented');
        }
      }

      class CreditCardStrategy extends PaymentStrategy {
        pay(amount) {
          console.log(\`Paid \${amount} with credit card\`);
        }
      }

      class PayPalStrategy extends PaymentStrategy {
        pay(amount) {
          console.log(\`Paid \${amount} with PayPal\`);
        }
      }
      \`\`\`

      ## Conclusion
      Les Design Patterns sont des outils puissants pour structurer votre code JavaScript. Ils aident à résoudre des problèmes courants et à maintenir un code propre et maintenable.
    `,
    date: "2024-03-18",
    category: "JavaScript",
    readTime: "20 min",
    tags: ["JavaScript", "Design Patterns", "Programming", "Software Architecture"]
  },
  {
    id: 13,
    title: "Les bases de GraphQL avec Apollo Client",
    content: `
      # Les bases de GraphQL avec Apollo Client

      GraphQL est un langage de requête pour les API qui permet aux clients de demander exactement les données dont ils ont besoin. Découvrons comment l'utiliser avec Apollo Client.

      ## 1. Configuration d'Apollo Client
      Commençons par configurer Apollo Client dans notre application React.

      ### Installation
      \`\`\`bash
      npm install @apollo/client graphql
      \`\`\`

      ### Configuration
      \`\`\`javascript
      import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

      const client = new ApolloClient({
        uri: 'http://localhost:4000/graphql',
        cache: new InMemoryCache()
      });

      function App() {
        return (
          <ApolloProvider client={client}>
            <YourApp />
          </ApolloProvider>
        );
      }
      \`\`\`

      ## 2. Requêtes GraphQL
      Apprenons à faire des requêtes avec Apollo Client.

      ### Requête simple
      \`\`\`javascript
      import { gql, useQuery } from '@apollo/client';

      const GET_USERS = gql\`
        query GetUsers {
          users {
            id
            name
            email
          }
        }
      \`;

      function UserList() {
        const { loading, error, data } = useQuery(GET_USERS);

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;

        return (
          <ul>
            {data.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }
      \`\`\`

      ## 3. Mutations
      Les mutations permettent de modifier les données.

      ### Exemple de mutation
      \`\`\`javascript
      const CREATE_USER = gql\`
        mutation CreateUser($name: String!, $email: String!) {
          createUser(name: $name, email: $email) {
            id
            name
            email
          }
        }
      \`;

      function CreateUser() {
        const [createUser, { loading }] = useMutation(CREATE_USER);

        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            await createUser({
              variables: {
                name: "John Doe",
                email: "john@example.com"
              }
            });
          } catch (error) {
            console.error('Error:', error);
          }
        };

        return (
          <form onSubmit={handleSubmit}>
            <button type="submit" disabled={loading}>
              Create User
            </button>
          </form>
        );
      }
      \`\`\`

      ## 4. Gestion du cache
      Apollo Client gère automatiquement le cache des requêtes.

      ### Mise à jour du cache
      \`\`\`javascript
      const [createUser] = useMutation(CREATE_USER, {
        update(cache, { data: { createUser } }) {
          const { users } = cache.readQuery({ query: GET_USERS });
          cache.writeQuery({
            query: GET_USERS,
            data: { users: [...users, createUser] }
          });
        }
      });
      \`\`\`

      ## 5. Fragments
      Les fragments permettent de réutiliser des parties de requêtes.

      ### Définition de fragments
      \`\`\`javascript
      const USER_FIELDS = gql\`
        fragment UserFields on User {
          id
          name
          email
        }
      \`;

      const GET_USERS = gql\`
        query GetUsers {
          users {
            ...UserFields
          }
        }
        \${USER_FIELDS}
      \`;
      \`\`\`

      ## 6. Gestion des erreurs
      Apprenons à gérer les erreurs de manière efficace.

      ### Middleware d'erreur
      \`\`\`javascript
      const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.error(
              \`[GraphQL error]: Message: \${message}, Location: \${locations}, Path: \${path}\`
            )
          );
        if (networkError) console.error(\`[Network error]: \${networkError}\`);
      });

      const client = new ApolloClient({
        link: errorLink,
        cache: new InMemoryCache()
      });
      \`\`\`

      ## Conclusion
      Apollo Client simplifie l'utilisation de GraphQL dans les applications React. Il fournit des outils puissants pour gérer les requêtes, les mutations et le cache.
    `,
    date: "2024-03-16",
    category: "GraphQL",
    readTime: "25 min",
    tags: ["GraphQL", "Apollo", "React", "JavaScript", "API"]
  },
  {
    id: 14,
    title: "Les bases de Docker pour le développement",
    content: `
      # Les bases de Docker pour le développement

      Docker est un outil puissant pour la conteneurisation d'applications. Découvrons les concepts fondamentaux et comment l'utiliser dans le développement.

      ## 1. Installation et configuration
      Commençons par installer Docker et comprendre sa configuration.

      ### Installation
      \`\`\`bash
      # macOS
      brew install docker

      # Ubuntu
      sudo apt-get update
      sudo apt-get install docker-ce docker-ce-cli containerd.io
      \`\`\`

      ### Vérification
      \`\`\`bash
      docker --version
      docker-compose --version
      \`\`\`

      ## 2. Concepts de base
      Comprendre les concepts fondamentaux de Docker.

      ### Images et conteneurs
      \`\`\`bash
      # Créer une image
      docker build -t mon-app .

      # Lancer un conteneur
      docker run -d -p 3000:3000 mon-app

      # Voir les conteneurs en cours
      docker ps

      # Arrêter un conteneur
      docker stop <container_id>
      \`\`\`

      ## 3. Dockerfile
      Créons un Dockerfile pour notre application.

      ### Exemple de Dockerfile
      \`\`\`dockerfile
      # Image de base
      FROM node:18-alpine

      # Répertoire de travail
      WORKDIR /app

      # Copier les fichiers de dépendances
      COPY package*.json ./

      # Installer les dépendances
      RUN npm install

      # Copier le reste du code
      COPY . .

      # Exposer le port
      EXPOSE 3000

      # Commande de démarrage
      CMD ["npm", "start"]
      \`\`\`

      ## 4. Docker Compose
      Utilisons Docker Compose pour gérer plusieurs conteneurs.

      ### docker-compose.yml
      \`\`\`yaml
      version: '3'
      services:
        app:
          build: .
          ports:
            - "3000:3000"
          environment:
            - NODE_ENV=development
          volumes:
            - .:/app
            - /app/node_modules
          depends_on:
            - db

        db:
          image: mongo:latest
          ports:
            - "27017:27017"
          volumes:
            - mongodb_data:/data/db

      volumes:
        mongodb_data:
      \`\`\`

      ## 5. Volumes et persistance
      Gérons la persistance des données.

      ### Création de volumes
      \`\`\`bash
      # Créer un volume
      docker volume create mon-volume

      # Utiliser un volume
      docker run -v mon-volume:/data mon-app
      \`\`\`

      ## 6. Réseaux Docker
      Configurons la communication entre conteneurs.

      ### Création de réseau
      \`\`\`bash
      # Créer un réseau
      docker network create mon-reseau

      # Connecter des conteneurs
      docker run --network mon-reseau mon-app
      \`\`\`

      ## 7. Bonnes pratiques
      Suivons les meilleures pratiques pour Docker.

      ### Optimisation des images
      \`\`\`dockerfile
      # Utiliser des images de base légères
      FROM node:18-alpine

      # Multi-stage builds
      FROM node:18-alpine AS builder
      WORKDIR /app
      COPY . .
      RUN npm run build

      FROM node:18-alpine
      COPY --from=builder /app/dist /app
      \`\`\`

      ## 8. Débogage
      Apprenons à déboguer les conteneurs Docker.

      ### Commandes de débogage
      \`\`\`bash
      # Voir les logs
      docker logs <container_id>

      # Entrer dans un conteneur
      docker exec -it <container_id> sh

      # Inspecter un conteneur
      docker inspect <container_id>
      \`\`\`

      ## Conclusion
      Docker est un outil essentiel pour le développement moderne. Il permet de créer des environnements cohérents et isolés pour vos applications.
    `,
    date: "2024-03-14",
    category: "DevOps",
    readTime: "30 min",
    tags: ["Docker", "DevOps", "Containers", "Development", "Deployment"]
  },
  {
    id: 15,
    title: "Les bases de l'accessibilité web",
    content: `
      # Les bases de l'accessibilité web

      L'accessibilité web est essentielle pour permettre à tous les utilisateurs d'accéder à votre site. Découvrons les principes fondamentaux et les bonnes pratiques.

      ## 1. Structure HTML sémantique
      Une bonne structure HTML est la base de l'accessibilité.

      ### Exemple de structure
      \`\`\`html
      <header>
        <nav aria-label="Navigation principale">
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <article>
          <h1>Titre principal</h1>
          <section>
            <h2>Sous-section</h2>
            <p>Contenu...</p>
          </section>
        </article>
      </main>

      <footer>
        <p>&copy; 2024 Mon Site</p>
      </footer>
      \`\`\`

      ## 2. Attributs ARIA
      Les attributs ARIA améliorent l'accessibilité.

      ### Exemples d'utilisation
      \`\`\`html
      <!-- Rôle explicite -->
      <div role="alert" aria-live="polite">
        Message important
      </div>

      <!-- Description -->
      <button aria-label="Fermer la fenêtre">
        <span class="icon">×</span>
      </button>

      <!-- État -->
      <div role="checkbox" aria-checked="true">
        Option sélectionnée
      </div>
      \`\`\`

      ## 3. Navigation au clavier
      Assurez-vous que votre site est navigable au clavier.

      ### Focus visible
      \`\`\`css
      :focus {
        outline: 3px solid #4A90E2;
        outline-offset: 2px;
      }

      /* Pour les utilisateurs qui préfèrent la souris */
      :focus:not(:focus-visible) {
        outline: none;
      }
      \`\`\`

      ## 4. Contraste des couleurs
      Maintenez un bon contraste pour la lisibilité.

      ### Exemples de contraste
      \`\`\`css
      /* Bon contraste */
      .good-contrast {
        color: #000000;
        background-color: #FFFFFF;
      }

      /* Mauvais contraste */
      .bad-contrast {
        color: #CCCCCC;
        background-color: #FFFFFF;
      }
      \`\`\`

      ## 5. Formulaires accessibles
      Rendez vos formulaires accessibles.

      ### Exemple de formulaire
      \`\`\`html
      <form>
        <div>
          <label for="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
          >
        </div>

        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            aria-invalid="false"
          >
          <div role="alert" class="error-message"></div>
        </div>
      </form>
      \`\`\`

      ## 6. Images et médias
      Rendez vos images et médias accessibles.

      ### Images
      \`\`\`html
      <!-- Image informative -->
      <img
        src="logo.png"
        alt="Logo de l'entreprise"
        width="200"
        height="100"
      >

      <!-- Image décorative -->
      <img
        src="decoration.png"
        alt=""
        role="presentation"
      >
      \`\`\`

      ## 7. Tests d'accessibilité
      Testez l'accessibilité de votre site.

      ### Outils de test
      \`\`\`javascript
      // Exemple de test avec axe-core
      import axe from 'axe-core';

      axe.run(document.body, {}, (err, results) => {
        if (err) throw err;
        console.log(results.violations);
      });
      \`\`\`

      ## 8. Bonnes pratiques générales
      Suivez ces bonnes pratiques pour l'accessibilité.

      ### Checklist
      - Utilisez des titres hiérarchiques (h1-h6)
      - Ajoutez des textes alternatifs aux images
      - Assurez-vous que les liens sont descriptifs
      - Utilisez des couleurs avec un bon contraste
      - Testez avec un lecteur d'écran
      - Vérifiez la navigation au clavier
      - Ajoutez des sous-titres aux vidéos
      - Utilisez des unités relatives (rem, em)

      ## Conclusion
      L'accessibilité web n'est pas une option mais une nécessité. En suivant ces principes, vous rendrez votre site accessible à tous les utilisateurs.
    `,
    date: "2024-03-12",
    category: "Accessibility",
    readTime: "25 min",
    tags: ["Accessibility", "Web Development", "HTML", "CSS", "ARIA"]
  },
  {
    id: 1,
    title: "Optimisation des performances React",
    content: `
      # Optimisation des performances React

      Les performances sont un aspect crucial du développement d'applications React. Dans cet article, nous allons explorer en profondeur les meilleures pratiques et techniques pour optimiser vos applications React.

      ## 1. Code Splitting
      Le code splitting est une technique essentielle pour améliorer les performances de chargement initial de votre application.

      ### Implémentation avec React.lazy
      \`\`\`jsx
      import React, { lazy, Suspense } from 'react';
      
      const HeavyComponent = lazy(() => import('./HeavyComponent'));
      
      function App() {
        return (
          <Suspense fallback={<div>Chargement...</div>}>
            <HeavyComponent />
          </Suspense>
        );
      }
      \`\`\`

      ### Avantages
      - Réduction de la taille du bundle initial
      - Chargement à la demande des composants
      - Meilleure expérience utilisateur

      ## 2. Mémorisation des composants
      La mémorisation est cruciale pour éviter les rendus inutiles et optimiser les performances.

      ### React.memo
      \`\`\`jsx
      const MemoizedComponent = React.memo(function MyComponent(props) {
        return <div>{props.value}</div>;
      });
      \`\`\`

      ### useMemo et useCallback
      \`\`\`jsx
      const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
      const memoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      \`\`\`

      ## 3. Virtualisation des listes
      Pour les longues listes, la virtualisation est essentielle.

      ### Exemple avec react-window
      \`\`\`jsx
      import { FixedSizeList } from 'react-window';
      
      const Row = ({ index, style }) => (
        <div style={style}>Row {index}</div>
      );
      
      const VirtualizedList = () => (
        <FixedSizeList
          height={400}
          width={300}
          itemCount={1000}
          itemSize={35}
        >
          {Row}
        </FixedSizeList>
      );
      \`\`\`

      ## 4. Optimisation des images
      L'optimisation des images est cruciale pour les performances.

      ### Bonnes pratiques
      - Utilisation du format WebP
      - Implémentation du lazy loading
      - Redimensionnement des images
      - Utilisation de CDN

      ### Exemple de lazy loading
      \`\`\`jsx
      import { LazyLoadImage } from 'react-lazy-load-image-component';
      
      const MyImage = () => (
        <LazyLoadImage
          src="image.jpg"
          alt="Description"
          effect="blur"
          placeholderSrc="tiny-image.jpg"
        />
      );
      \`\`\`

      ## 5. Gestion de l'état
      Le choix de la solution de gestion d'état impacte directement les performances.

      ### Comparaison des solutions
      - Redux : Pour les applications complexes
      - Context API : Pour les applications simples
      - Zustand : Pour un bon équilibre
      - Jotai : Pour une approche atomique

      ### Exemple avec Zustand
      \`\`\`jsx
      import create from 'zustand';
      
      const useStore = create((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
      }));
      \`\`\`

      ## 6. Optimisation des hooks personnalisés
      Les hooks personnalisés peuvent être optimisés pour de meilleures performances.

      ### Exemple de hook optimisé
      \`\`\`jsx
      function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
        
        useEffect(() => {
          const handler = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);
          
          return () => {
            clearTimeout(handler);
          };
        }, [value, delay]);
        
        return debouncedValue;
      }
      \`\`\`

      ## 7. Outils de mesure des performances
      Plusieurs outils peuvent vous aider à mesurer et optimiser les performances.

      ### React DevTools Profiler
      - Analyse des rendus
      - Identification des goulots d'étranglement
      - Mesure des temps de rendu

      ### Lighthouse
      - Audit complet des performances
      - Suggestions d'optimisation
      - Score de performance

      ## Conclusion
      L'optimisation des performances React est un processus continu qui nécessite une attention constante. En appliquant ces techniques et en utilisant les outils appropriés, vous pouvez créer des applications React performantes et offrir une excellente expérience utilisateur.
    `,
    date: "2024-03-15",
    category: "React",
    readTime: "15 min",
    tags: ["React", "Performance", "Optimisation", "JavaScript", "Web Development"]
  },
  {
    id: 2,
    title: "Les nouvelles fonctionnalités de Next.js 14",
    content: `
      # Les nouvelles fonctionnalités de Next.js 14

      Next.js 14 apporte une révolution dans le développement web avec React. Découvrons en détail les nouvelles fonctionnalités et leurs cas d'utilisation.

      ## 1. Server Actions
      Les Server Actions représentent une avancée majeure dans la gestion des formulaires et des mutations.

      ### Implémentation
      \`\`\`jsx
      'use server';
      
      async function submitForm(formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        
        await db.users.create({
          data: { name, email }
        });
      }
      
      export default function Form() {
        return (
          <form action={submitForm}>
            <input name="name" />
            <input name="email" type="email" />
            <button type="submit">Submit</button>
          </form>
        );
      }
      \`\`\`

      ### Avantages
      - Exécution du code côté serveur
      - Gestion automatique des erreurs
      - Optimistic updates
      - Revalidation automatique

      ## 2. Partial Prerendering
      Le Partial Prerendering permet de combiner le rendu statique et dynamique.

      ### Configuration
      \`\`\`jsx
      export default function Page() {
        return (
          <div>
            <StaticContent />
            <Suspense fallback={<Loading />}>
              <DynamicContent />
            </Suspense>
          </div>
        );
      }
      \`\`\`

      ### Cas d'utilisation
      - Pages avec contenu statique et dynamique
      - Amélioration du First Contentful Paint
      - Meilleure expérience utilisateur

      ## 3. Turbopack
      Turbopack est le nouveau bundler de Next.js, offrant des performances de développement exceptionnelles.

      ### Caractéristiques
      - Compilation incrémentale
      - Hot Module Replacement rapide
      - Support natif de TypeScript
      - Optimisation des assets

      ### Configuration
      \`\`\`json
      {
        "scripts": {
          "dev": "next dev --turbo"
        }
      }
      \`\`\`

      ## 4. Améliorations de l'App Router
      L'App Router a été considérablement amélioré pour offrir plus de flexibilité.

      ### Nouvelles fonctionnalités
      - Intercepting Routes
      - Parallel Routes
      - Route Groups
      - Loading UI

      ### Exemple d'Intercepting Routes
      \`\`\`jsx
      // app/photo/[id]/page.js
      export default function Photo({ params }) {
        return <div>Photo {params.id}</div>;
      }
      
      // app/photo/[id]/@modal/page.js
      export default function Modal({ params }) {
        return <div>Modal for Photo {params.id}</div>;
      }
      \`\`\`

      ## 5. Optimisations de performance
      Next.js 14 apporte plusieurs optimisations de performance.

      ### Image Component
      \`\`\`jsx
      import Image from 'next/image';
      
      export default function OptimizedImage() {
        return (
          <Image
            src="/photo.jpg"
            alt="Description"
            width={500}
            height={300}
            priority
            quality={75}
          />
        );
      }
      \`\`\`

      ### Font Optimization
      \`\`\`jsx
      import { Inter } from 'next/font/google';
      
      const inter = Inter({
        subsets: ['latin'],
        display: 'swap',
      });
      \`\`\`

      ## 6. Améliorations de la sécurité
      La sécurité a été renforcée dans Next.js 14.

      ### Middleware
      \`\`\`jsx
      export function middleware(request) {
        const response = NextResponse.next();
        response.headers.set('X-Frame-Options', 'DENY');
        return response;
      }
      \`\`\`

      ### Headers de sécurité
      - Content Security Policy
      - X-Frame-Options
      - X-Content-Type-Options
      - Referrer-Policy

      ## 7. Déploiement et CI/CD
      Les outils de déploiement ont été améliorés.

      ### Vercel Integration
      - Déploiement automatique
      - Preview deployments
      - Analytics intégrés
      - Edge Functions

      ### Configuration
      \`\`\`json
      {
        "build": {
          "env": {
            "NEXT_PUBLIC_API_URL": "https://api.example.com"
          }
        }
      }
      \`\`\`

      ## Conclusion
      Next.js 14 représente une avancée majeure dans l'écosystème React, offrant des outils puissants pour créer des applications web modernes et performantes. Les nouvelles fonctionnalités comme les Server Actions et le Partial Prerendering ouvrent de nouvelles possibilités pour les développeurs.
    `,
    date: "2024-03-10",
    category: "Next.js",
    readTime: "20 min",
    tags: ["Next.js", "React", "Web Development", "JavaScript", "Performance"]
  },
  {
    id: 3,
    title: "Créer une API RESTful avec Node.js et Express",
    content: `
      # Créer une API RESTful avec Node.js et Express

      Dans ce guide complet, nous allons explorer comment créer une API RESTful robuste et sécurisée avec Node.js et Express.

      ## 1. Configuration initiale
      Commençons par mettre en place notre projet.

      ### Structure du projet
      \`\`\`
      project/
      ├── src/
      │   ├── controllers/
      │   ├── models/
      │   ├── routes/
      │   ├── middleware/
      │   ├── config/
      │   └── app.js
      ├── package.json
      └── .env
      \`\`\`

      ### Installation des dépendances
      \`\`\`bash
      npm init -y
      npm install express mongoose dotenv cors helmet express-rate-limit
      npm install -D nodemon
      \`\`\`

      ### Configuration de base
      \`\`\`javascript
      // src/app.js
      const express = require('express');
      const mongoose = require('mongoose');
      const cors = require('cors');
      const helmet = require('helmet');
      
      const app = express();
      
      app.use(express.json());
      app.use(cors());
      app.use(helmet());
      
      mongoose.connect(process.env.MONGODB_URI);
      
      app.listen(3000, () => {
        console.log('Server running on port 3000');
      });
      \`\`\`

      ## 2. Structure de l'API
      Organisons notre API de manière modulaire.

      ### Modèle d'utilisateur
      \`\`\`javascript
      // src/models/User.js
      const mongoose = require('mongoose');
      
      const userSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['user', 'admin'], default: 'user' }
      }, { timestamps: true });
      
      module.exports = mongoose.model('User', userSchema);
      \`\`\`

      ### Contrôleur
      \`\`\`javascript
      // src/controllers/userController.js
      const User = require('../models/User');
      
      exports.createUser = async (req, res) => {
        try {
          const user = await User.create(req.body);
          res.status(201).json(user);
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      };
      
      exports.getUsers = async (req, res) => {
        try {
          const users = await User.find();
          res.json(users);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };
      \`\`\`

      ### Routes
      \`\`\`javascript
      // src/routes/userRoutes.js
      const express = require('express');
      const router = express.Router();
      const userController = require('../controllers/userController');
      
      router.post('/', userController.createUser);
      router.get('/', userController.getUsers);
      
      module.exports = router;
      \`\`\`

      ## 3. Middleware d'authentification
      Implémentons l'authentification JWT.

      ### Middleware d'authentification
      \`\`\`javascript
      // src/middleware/auth.js
      const jwt = require('jsonwebtoken');
      
      exports.protect = async (req, res, next) => {
        try {
          const token = req.headers.authorization?.split(' ')[1];
          
          if (!token) {
            return res.status(401).json({ error: 'Not authorized' });
          }
          
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.user = decoded;
          next();
        } catch (error) {
          res.status(401).json({ error: 'Not authorized' });
        }
      };
      \`\`\`

      ## 4. Validation des données
      Ajoutons la validation des données avec Joi.

      ### Schéma de validation
      \`\`\`javascript
      // src/middleware/validate.js
      const Joi = require('joi');
      
      const userSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
      });
      
      exports.validateUser = (req, res, next) => {
        const { error } = userSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
        next();
      };
      \`\`\`

      ## 5. Gestion des erreurs
      Créons un middleware de gestion d'erreurs global.

      ### Middleware d'erreur
      \`\`\`javascript
      // src/middleware/errorHandler.js
      const errorHandler = (err, req, res, next) => {
        console.error(err.stack);
        
        res.status(err.status || 500).json({
          error: {
            message: err.message || 'Internal Server Error',
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
          }
        });
      };
      
      module.exports = errorHandler;
      \`\`\`

      ## 6. Tests
      Implémentons des tests avec Jest.

      ### Test d'intégration
      \`\`\`javascript
      // tests/user.test.js
      const request = require('supertest');
      const app = require('../src/app');
      
      describe('User API', () => {
        it('should create a new user', async () => {
          const res = await request(app)
            .post('/api/users')
            .send({
              name: 'Test User',
              email: 'test@example.com',
              password: 'password123'
            });
          
          expect(res.statusCode).toBe(201);
          expect(res.body).toHaveProperty('name', 'Test User');
        });
      });
      \`\`\`

      ## 7. Documentation
      Documentons notre API avec Swagger.

      ### Configuration Swagger
      \`\`\`javascript
      // src/config/swagger.js
      const swaggerJsDoc = require('swagger-jsdoc');
      
      const swaggerOptions = {
        definition: {
          openapi: '3.0.0',
          info: {
            title: 'User API',
            version: '1.0.0',
            description: 'A simple Express User API'
          },
          servers: [
            {
              url: 'http://localhost:3000'
            }
          ]
        },
        apis: ['./src/routes/*.js']
      };
      
      module.exports = swaggerJsDoc(swaggerOptions);
      \`\`\`

      ## 8. Déploiement
      Préparons notre API pour le déploiement.

      ### Configuration de production
      \`\`\`javascript
      // src/config/production.js
      module.exports = {
        port: process.env.PORT || 3000,
        mongoUri: process.env.MONGODB_URI,
        jwtSecret: process.env.JWT_SECRET,
        corsOptions: {
          origin: process.env.ALLOWED_ORIGINS.split(','),
          credentials: true
        }
      };
      \`\`\`

      ## Conclusion
      Nous avons créé une API RESTful robuste avec Node.js et Express, incluant l'authentification, la validation, la gestion des erreurs, les tests et la documentation. Cette structure peut servir de base pour des projets plus complexes.
    `,
    date: "2024-03-05",
    category: "Backend",
    readTime: "25 min",
    tags: ["Node.js", "Express", "API", "Backend", "JavaScript", "MongoDB"]
  },
  {
    id: 4,
    title: "Développement mobile avec React Native",
    content: `
      # Développement mobile avec React Native

      React Native permet de créer des applications mobiles performantes avec JavaScript. Ce guide complet vous accompagnera dans le développement d'applications React Native.

      ## 1. Configuration de l'environnement
      Commençons par mettre en place notre environnement de développement.

      ### Installation des outils
      \`\`\`bash
      # Installation de Node.js et npm
      brew install node
      
      # Installation de Watchman
      brew install watchman
      
      # Installation de React Native CLI
      npm install -g react-native-cli
      
      # Installation de Xcode (macOS)
      xcode-select --install
      \`\`\`

      ### Création d'un nouveau projet
      \`\`\`bash
      npx react-native init MyApp
      cd MyApp
      \`\`\`

      ## 2. Structure du projet
      Organisons notre projet de manière modulaire.

      ### Architecture recommandée
      \`\`\`
      src/
      ├── components/
      │   ├── common/
      │   └── screens/
      ├── navigation/
      ├── services/
      ├── store/
      ├── utils/
      └── assets/
      \`\`\`

      ### Configuration de base
      \`\`\`javascript
      // App.js
      import React from 'react';
      import { NavigationContainer } from '@react-navigation/native';
      import { Provider } from 'react-redux';
      import store from './src/store';
      import AppNavigator from './src/navigation';
      
      const App = () => {
        return (
          <Provider store={store}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </Provider>
        );
      };
      
      export default App;
      \`\`\`

      ## 3. Navigation
      Implémentons la navigation avec React Navigation.

      ### Configuration de la navigation
      \`\`\`javascript
      // src/navigation/index.js
      import React from 'react';
      import { createStackNavigator } from '@react-navigation/stack';
      import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
      
      const Stack = createStackNavigator();
      const Tab = createBottomTabNavigator();
      
      const TabNavigator = () => (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      );
      
      const AppNavigator = () => (
        <Stack.Navigator>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      );
      
      export default AppNavigator;
      \`\`\`

      ## 4. Gestion d'état
      Utilisons Redux pour la gestion d'état.

      ### Configuration Redux
      \`\`\`javascript
      // src/store/index.js
      import { configureStore } from '@reduxjs/toolkit';
      import userReducer from './slices/userSlice';
      
      const store = configureStore({
        reducer: {
          user: userReducer
        }
      });
      
      export default store;
      \`\`\`

      ### Slice Redux
      \`\`\`javascript
      // src/store/slices/userSlice.js
      import { createSlice } from '@reduxjs/toolkit';
      
      const userSlice = createSlice({
        name: 'user',
        initialState: {
          profile: null,
          loading: false,
          error: null
        },
        reducers: {
          setProfile: (state, action) => {
            state.profile = action.payload;
          }
        }
      });
      
      export const { setProfile } = userSlice.actions;
      export default userSlice.reducer;
      \`\`\`

      ## 5. Composants réutilisables
      Créons des composants réutilisables.

      ### Button Component
      \`\`\`javascript
      // src/components/common/Button.js
      import React from 'react';
      import { TouchableOpacity, Text, StyleSheet } from 'react-native';
      
      const Button = ({ onPress, title, variant = 'primary' }) => {
        return (
          <TouchableOpacity
            style={[styles.button, styles[variant]]}
            onPress={onPress}
          >
            <Text style={styles.text}>{title}</Text>
          </TouchableOpacity>
        );
      };
      
      const styles = StyleSheet.create({
        button: {
          padding: 15,
          borderRadius: 8,
          alignItems: 'center'
        },
        primary: {
          backgroundColor: '#007AFF'
        },
        secondary: {
          backgroundColor: '#5856D6'
        },
        text: {
          color: 'white',
          fontSize: 16,
          fontWeight: '600'
        }
      });
      
      export default Button;
      \`\`\`

      ## 6. Gestion des formulaires
      Utilisons Formik pour la gestion des formulaires.

      ### Exemple de formulaire
      \`\`\`javascript
      // src/components/screens/LoginScreen.js
      import React from 'react';
      import { View, TextInput, StyleSheet } from 'react-native';
      import { Formik } from 'formik';
      import * as Yup from 'yup';
      import Button from '../common/Button';
      
      const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required()
      });
      
      const LoginScreen = () => {
        return (
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <View style={styles.container}>
                <TextInput
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="Email"
                  style={styles.input}
                />
                <TextInput
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder="Password"
                  secureTextEntry
                  style={styles.input}
                />
                <Button title="Login" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          padding: 20
        },
        input: {
          borderWidth: 1,
          borderColor: '#ddd',
          padding: 10,
          marginBottom: 10,
          borderRadius: 5
        }
      });
      
      export default LoginScreen;
      \`\`\`

      ## 7. Gestion des images et des assets
      Optimisons la gestion des images.

      ### Configuration des images
      \`\`\`javascript
      // src/utils/imageLoader.js
      import { Image } from 'react-native';
      
      export const preloadImages = (images) => {
        return Promise.all(
          images.map(image => Image.prefetch(image))
        );
      };
      
      export const getImageSize = (uri) => {
        return new Promise((resolve, reject) => {
          Image.getSize(uri, (width, height) => {
            resolve({ width, height });
          }, reject);
        });
      };
      \`\`\`

      ## 8. Tests
      Implémentons des tests avec Jest et React Native Testing Library.

      ### Test de composant
      \`\`\`javascript
      // src/components/common/__tests__/Button.test.js
      import React from 'react';
      import { render, fireEvent } from '@testing-library/react-native';
      import Button from '../Button';
      
      describe('Button Component', () => {
        it('renders correctly', () => {
          const { getByText } = render(
            <Button title="Test Button" onPress={() => {}} />
          );
          expect(getByText('Test Button')).toBeTruthy();
        });
        
        it('calls onPress when pressed', () => {
          const onPress = jest.fn();
          const { getByText } = render(
            <Button title="Test Button" onPress={onPress} />
          );
          fireEvent.press(getByText('Test Button'));
          expect(onPress).toHaveBeenCalled();
        });
      });
      \`\`\`

      ## 9. Déploiement
      Préparons notre application pour le déploiement.

      ### Configuration Android
      \`\`\`gradle
      // android/app/build.gradle
      android {
        defaultConfig {
          applicationId "com.myapp"
          minSdkVersion 21
          targetSdkVersion 33
          versionCode 1
          versionName "1.0"
        }
        
        signingConfigs {
          release {
            storeFile file('my-release-key.keystore')
            storePassword '****'
            keyAlias 'my-key-alias'
            keyPassword '****'
          }
        }
        
        buildTypes {
          release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
          }
        }
      }
      \`\`\`

      ### Configuration iOS
      \`\`\`ruby
      # ios/Podfile
      platform :ios, '13.0'
      
      target 'MyApp' do
        config = use_native_modules!
        use_react_native!(
          :path => config[:reactNativePath],
          :hermes_enabled => true
        )
      end
      \`\`\`

      ## Conclusion
      React Native offre un puissant framework pour le développement d'applications mobiles. En suivant ces bonnes pratiques et en utilisant les outils appropriés, vous pouvez créer des applications performantes et maintenables.
    `,
    date: "2024-03-01",
    category: "Mobile",
    readTime: "30 min",
    tags: ["React Native", "Mobile", "JavaScript", "iOS", "Android", "Development"]
  }
];

export default function BlogPost() {
  const params = useParams();
  const article = articles.find(a => a.id === Number(params.id));

  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              L'article que vous recherchez n'existe pas.
            </p>
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retour au blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose dark:prose-invert max-w-none"
        >
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Retour au blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                {article.category}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {article.readTime}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {new Date(article.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.slice(2)}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.slice(3)}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-4 mb-2">{paragraph.slice(4)}</h3>;
              }
              if (paragraph.startsWith('```')) {
                return (
                  <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
                    <code>{paragraph.slice(3)}</code>
                  </pre>
                );
              }
              if (paragraph.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>
        </motion.article>
      </div>
    </div>
  );
}