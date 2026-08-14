"use client";

import React from 'react';
import { Experience } from '../../types/portfolio';

type Props = { item: Experience };

export default function ExperienceCard({ item }: Props) {
  return (
    <article className="rounded-lg border border-gray-100 p-6 bg-white shadow-sm">
      <header className="flex items-start justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{item.role}</h4>
          <div className="text-sm text-gray-600">{item.company}</div>
        </div>
        <div className="text-sm text-gray-500 text-right">
          <div>{item.startDate}{item.endDate ? ` – ${item.endDate}` : ''}</div>
          {item.location && <div className="mt-1">{item.location}</div>}
        </div>
      </header>

      {item.description && <p className="mt-4 text-gray-700">{item.description}</p>}

      {item.responsibilities && item.responsibilities.length > 0 && (
        <ul className="mt-4 ml-5 list-disc text-gray-700">
          {item.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}

      {item.tech && item.tech.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-700">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
