import React from "react";
import Link from "next/link";
import Image from "next/image";
import { descriptions, images } from "./data";

export const dynamic = "force-dynamic";

async function getGithubProjects(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
    headers: { 'Accept': 'application/vnd.github+json' }
  });
  if (!res.ok) throw new Error('Erreur lors de la récupération des projets GitHub');
  return res.json();
}

export default async function Projets() {
  const username = "alfredgibeau-ahoussinou";
  const projects = await getGithubProjects(username);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Mes Projets Récents</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.slice(0, 4).map((repo: any) => (
          <Link href={`/projets/${repo.name}`} key={repo.id} className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {images[repo.name] && (
              <div className="relative h-48 w-full">
                <Image
                  src={images[repo.name]}
                  alt={`Image du projet ${repo.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{repo.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-hidden">
                {descriptions[repo.name] || repo.description}
              </p>
              <span
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Voir plus
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 