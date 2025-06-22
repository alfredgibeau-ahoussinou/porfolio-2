import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import { descriptions } from "../data";

async function getGithubRepo(username: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${username}/${repo}`, {
    headers: { 'Accept': 'application/vnd.github+json' }
  });
  if (!res.ok) return null;
  return res.json();
}

async function getGithubReadme(username: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${username}/${repo}/readme`, {
    headers: { 'Accept': 'application/vnd.github.v3.raw' }
  });
  if (!res.ok) return null;
  return res.text();
}

export default async function ProjetDetail({ params }: { params: { id: string } }) {
  const username = "alfredgibeau-ahoussinou";
  const repo = await getGithubRepo(username, params.id);
  if (!repo) return notFound();
  const readme = await getGithubReadme(username, params.id);
  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">{repo.name}</h1>
      {repo.owner?.avatar_url && (
        <div className="relative w-24 h-24 mb-4">
          <Image
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}
      <p className="mb-4 text-lg">{descriptions[repo.name] || repo.description}</p>
      <div className="mb-4">
        <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded px-3 py-1 text-sm mr-2">
          ⭐ {repo.stargazers_count} stars
        </span>
        <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded px-3 py-1 text-sm mr-2">
          🍴 {repo.forks_count} forks
        </span>
        <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded px-3 py-1 text-sm">
          🕒 Dernière MAJ : {new Date(repo.updated_at).toLocaleDateString('fr-FR')}
        </span>
      </div>
      {/* Technologies */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Technologies utilisées :</h3>
        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
              {repo.language}
            </span>
          )}
          {repo.topics && repo.topics.map((topic: string) => (
            <span key={topic} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm">
              {topic}
            </span>
          ))}
        </div>
      </div>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block"
      >
        Voir sur GitHub
      </a>
      {/* README */}
      {readme && (
        <div className="prose dark:prose-invert max-w-none mt-8">
          <h3 className="text-2xl font-bold mb-4">README</h3>
          <pre className="whitespace-pre-wrap text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
            {readme}
          </pre>
        </div>
      )}
    </div>
  );
} 