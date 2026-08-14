"use client";

import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Resume</h3>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-4 py-2 text-white font-medium shadow hover:opacity-95 transition"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download="Govinda-Bhaskare-Resume.pdf"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
