"use client";

import React from 'react';
import { EXPERIENCES } from '../../data/experience';
import ExperienceCard from '../ui/ExperienceCard';

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Experience</h3>

        <div className="grid gap-6">
          {EXPERIENCES.map((e) => (
            <ExperienceCard key={e.id} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
