import React from "react";
import { notFound } from "next/navigation";

const projects = [
  {
    id: "projet1",
    title: "Projet 1",
    description: "Une application web moderne pour gérer vos tâches quotidiennes.",
    image: "/projet1.jpg",
    details: "Détails complets du projet 1..."
  },
  {
    id: "projet2",
    title: "Projet 2",
    description: "Un site e-commerce complet avec paiement sécurisé.",
    image: "/projet2.jpg",
    details: "Détails complets du projet 2..."
  },
  {
    id: "projet3",
    title: "Projet 3",
    description: "Un blog personnel avec gestion de contenu dynamique.",
    image: "/projet3.jpg",
    details: "Détails complets du projet 3..."
  },
  {
    id: "projet4",
    title: "Projet 4",
    description: "Une application mobile pour suivre votre activité sportive.",
    image: "/projet4.jpg",
    details: "Détails complets du projet 4..."
  },
];

export default function ProjetDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  if (!project) return notFound();
  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="rounded mb-4 w-full h-64 object-cover" />
      <p className="mb-4 text-lg">{project.description}</p>
      <div className="text-gray-700 dark:text-gray-300">{project.details}</div>
    </div>
  );
} 