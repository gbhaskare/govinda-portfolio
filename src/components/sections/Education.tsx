"use client";

import React from 'react';
import { EDUCATION } from '../../data/education';
import EducationCard from '../ui/EducationCard';

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>

        <div className="grid gap-6">
          {EDUCATION.map((e) => (
            <EducationCard key={e.id} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
