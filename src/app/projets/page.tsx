'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "./data";

export default function Projets() {
  const [favoris, setFavoris] = React.useState<string[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("favoris") || "[]");
    }
    return [];
  });

  const toggleFavori = (name: string) => {
    setFavoris((prev) => {
      const updated = prev.includes(name)
        ? prev.filter((f) => f !== name)
        : [...prev, name];
      if (typeof window !== "undefined") {
        localStorage.setItem("favoris", JSON.stringify(updated));
      }
      return updated;
    });
  };

  const handleShare = (lien: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.origin + lien);
      alert("Lien copié !");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">Mes Projets Récents</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((proj) => (
          <div
            key={proj.name}
            className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
          >
            {/* Badge d'état */}
            <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-10
              ${proj.etat === "Livré" ? "bg-green-500 text-white" :
                proj.etat === "En cours" ? "bg-yellow-400 text-black" :
                proj.etat === "Terminé" ? "bg-gray-400 text-white" :
                proj.etat === "Featured" ? "bg-pink-500 text-white" :
                "bg-blue-500 text-white"}`}
            >
              {proj.etat}
            </span>
            {/* Image */}
            {proj.image && (
              <div className="relative h-40 w-full">
                <Image
                  src={proj.image}
                  alt={`Image du projet ${proj.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {/* Contenu */}
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{proj.name}</h2>
              <p className="text-gray-900 dark:text-white mb-4 h-20 overflow-hidden">{proj.description}</p>
              {/* Tags technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.technologies.map((tech) => (
                  <span key={tech} className="bg-[#e5e7eb] dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Boutons */}
              <div className="flex items-center gap-3 mt-auto">
                <Link href={proj.lien} className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition" target="_blank">
                  Disponible
                </Link>
                <button
                  onClick={() => handleShare(proj.lien)}
                  className="p-2 rounded-full hover:bg-[#2e3650] transition"
                  title="Partager"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-300">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8a3 3 0 11-6 0 3 3 0 016 0zM19.5 19.5a3 3 0 11-6 0 3 3 0 016 0zM8.25 15.75l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={() => toggleFavori(proj.name)}
                  className="p-2 rounded-full hover:bg-[#2e3650] transition"
                  title="Favori"
                >
                  {favoris.includes(proj.name) ? (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="text-pink-400">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" stroke="currentColor" className="text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 