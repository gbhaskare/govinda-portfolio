"use client";

import React from 'react';
import { PROJECTS } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Projects</h3>

        <div className="grid gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
