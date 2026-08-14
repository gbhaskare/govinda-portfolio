"use client";

import React from 'react';
import { Project } from '../../types/portfolio';

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="rounded-lg border border-gray-100 p-6 bg-white shadow-sm">
      <header className="flex items-start justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
          {project.date && <div className="text-sm text-gray-500 mt-1">{project.date}</div>}
        </div>
      </header>

      <p className="mt-3 text-gray-700">{project.shortDescription}</p>

      {project.tech && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-700">
              {t}
            </span>
          ))}
        </div>
      )}

      {project.features && (
        <ul className="mt-4 ml-5 list-disc text-gray-700">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
