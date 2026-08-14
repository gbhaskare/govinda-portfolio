"use client";

import React from 'react';
import { Education } from '../../types/portfolio';

type Props = { item: Education };

export default function EducationCard({ item }: Props) {
  return (
    <article className="rounded-lg border border-gray-100 p-6 bg-white shadow-sm">
      <header>
        <h4 className="text-lg font-semibold text-gray-900">{item.degree}</h4>
        <div className="text-sm text-gray-600">{item.institution}</div>
        {item.startDate && (
          <div className="text-sm text-gray-500 mt-1">{item.startDate}{item.endDate ? ` – ${item.endDate}` : ''}</div>
        )}
        {item.location && <div className="text-sm text-gray-500">{item.location}</div>}
      </header>

      {item.coursework && item.coursework.length > 0 && (
        <div className="mt-4">
          <div className="text-sm font-medium text-gray-700 mb-2">Relevant coursework</div>
          <ul className="ml-5 list-disc text-gray-700">
            {item.coursework.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
