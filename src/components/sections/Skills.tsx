"use client";

import React from 'react';
import { SKILLS } from '../../data/skills';
import SkillTag from '../ui/SkillTag';
import { Skill } from '../../types/portfolio';

const groupByCategory = (items: Skill[]) => {
  return items.reduce<Record<string, Skill[]>>((acc, item) => {
    const key = item.category ?? 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
};

export default function Skills() {
  const groups = groupByCategory(SKILLS);

  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(groups).map(([category, skills]) => (
            <div key={category}>
              <h4 className="text-lg font-medium text-indigo-600 mb-3">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <SkillTag key={s.id} skill={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
