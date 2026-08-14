"use client";

import React from 'react';
import { Skill } from '../../types/portfolio';

type Props = {
  skill: Skill;
};

export default function SkillTag({ skill }: Props) {
  return (
    <span
      tabIndex={0}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium shadow-sm transform transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
        skill.color ?? 'bg-gray-100'
      } text-gray-900`}
      role="button"
      aria-label={skill.name}
    >
      {skill.name}
    </span>
  );
}
