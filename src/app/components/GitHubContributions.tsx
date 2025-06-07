'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Contribution {
  date: string;
  count: number;
}

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  description: string | null;
  html_url: string;
}

interface GitHubStats {
  totalContributions: number;
  popularRepos: Array<{
    name: string;
    stars: number;
    description: string;
    url: string;
  }>;
}

type Period = 'week' | 'month' | 'year';

// Vérification du token
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  console.error('Token GitHub manquant. Vérifiez votre fichier .env.local');
}

const USERNAME = 'alfredgibeau-ahoussinou';

export default function GitHubContributions() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('month');

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        console.log('Début de la récupération des données GitHub');
        console.log('Token disponible:', !!GITHUB_TOKEN);

        if (!GITHUB_TOKEN) {
          throw new Error('Token GitHub manquant');
        }

        // Récupérer les contributions
        console.log('Récupération des contributions...');
        const contributionsResponse = await fetch('https://github-contributions-api.jogruber.de/v4/alfredgibeau-ahoussinou');
        if (!contributionsResponse.ok) {
          throw new Error(`Erreur lors de la récupération des contributions: ${contributionsResponse.statusText}`);
        }
        const contributionsData = await contributionsResponse.json();
        console.log('Données de contribution reçues:', contributionsData);
        
        const formattedContributions = Object.entries(contributionsData.contributions).map(([date, count]) => ({
          date,
          count: count as number
        }));

        // Récupérer les données GitHub via l'API officielle
        const headers = {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        };

        // Récupérer les repos populaires
        console.log('Récupération des repos...');
        const reposResponse = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=stars&per_page=5`,
          { headers }
        );
        if (!reposResponse.ok) {
          throw new Error(`Erreur lors de la récupération des repos: ${reposResponse.statusText}`);
        }
        const reposData = await reposResponse.json();
        console.log('Données des repos reçues:', reposData);

        // Récupérer les statistiques de contribution
        console.log('Récupération des statistiques utilisateur...');
        const statsResponse = await fetch(
          `https://api.github.com/users/${USERNAME}`,
          { headers }
        );
        if (!statsResponse.ok) {
          throw new Error(`Erreur lors de la récupération des statistiques: ${statsResponse.statusText}`);
        }
        const userData = await statsResponse.json();
        console.log('Données utilisateur reçues:', userData);

        const githubStats: GitHubStats = {
          totalContributions: formattedContributions.reduce((sum, c) => sum + c.count, 0),
          popularRepos: reposData.map((repo: GitHubRepo) => ({
            name: repo.name,
            stars: repo.stargazers_count,
            description: repo.description || 'Pas de description',
            url: repo.html_url
          }))
        };

        console.log('Statistiques GitHub préparées:', githubStats);

        setContributions(formattedContributions);
        setStats(githubStats);
        setLoading(false);
      } catch (err) {
        console.error('Erreur détaillée:', err);
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getFilteredContributions = () => {
    const now = new Date();
    const filtered = contributions.filter(contribution => {
      const contributionDate = new Date(contribution.date);
      switch (selectedPeriod) {
        case 'week':
          return contributionDate >= new Date(now.setDate(now.getDate() - 7));
        case 'month':
          return contributionDate >= new Date(now.setMonth(now.getMonth() - 1));
        case 'year':
          return contributionDate >= new Date(now.setFullYear(now.getFullYear() - 1));
        default:
          return true;
      }
    });
    return filtered;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <div className="text-red-600 dark:text-red-400 mb-2">
          {error}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Vérifiez que votre token GitHub est correctement configuré dans le fichier .env.local
        </p>
      </div>
    );
  }

  const filteredContributions = getFilteredContributions();
  const maxContributions = Math.max(...filteredContributions.map(c => c.count));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Contributions GitHub</h2>
        <Link
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
        >
          <span>Voir le profil</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </Link>
      </div>

      {stats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Statistiques</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Total des contributions : {stats.totalContributions}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Repos populaires</h3>
            <div className="space-y-2">
              {stats.popularRepos.map((repo, index) => (
                <Link
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded transition-colors"
                >
                  <div className="flex-1">
                    <span className="text-gray-600 dark:text-gray-300">{repo.name}</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{repo.description}</p>
                  </div>
                  <span className="text-yellow-500 ml-2">★ {repo.stars}</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <div className="mb-4 flex justify-center gap-4">
        {(['week', 'month', 'year'] as Period[]).map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedPeriod === period
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {period === 'week' ? 'Semaine' : period === 'month' ? 'Mois' : 'Année'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {filteredContributions.map((contribution, index) => (
          <motion.div
            key={contribution.date}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: index * 0.01,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`
              aspect-square rounded-sm cursor-pointer
              ${contribution.count === 0 ? 'bg-gray-100 dark:bg-gray-700' :
                contribution.count <= maxContributions * 0.25 ? 'bg-green-200 dark:bg-green-900' :
                contribution.count <= maxContributions * 0.5 ? 'bg-green-300 dark:bg-green-800' :
                contribution.count <= maxContributions * 0.75 ? 'bg-green-400 dark:bg-green-700' :
                'bg-green-500 dark:bg-green-600'}
            `}
            title={`${contribution.date}: ${contribution.count} contributions`}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>Moins</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded-sm" />
          <div className="w-3 h-3 bg-green-200 dark:bg-green-900 rounded-sm" />
          <div className="w-3 h-3 bg-green-300 dark:bg-green-800 rounded-sm" />
          <div className="w-3 h-3 bg-green-400 dark:bg-green-700 rounded-sm" />
          <div className="w-3 h-3 bg-green-500 dark:bg-green-600 rounded-sm" />
        </div>
        <span>Plus</span>
      </div>
    </div>
  );
} 