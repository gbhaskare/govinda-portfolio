"use client";

import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium text-indigo-600">Professional Software Engineer</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Hi, I'm Govinda Bhaskare
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-zinc-200">Software Engineer</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl">
              I build data-driven, responsive web applications using modern frontend technologies and APIs. I have
              2.5+ years of software development experience working with Angular, React, Next.js, TypeScript, Python and
              SQL.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-4 py-2 text-white font-medium shadow hover:scale-[1.01] transition-transform"
              >
                View My Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-gray-200 px-4 py-2 text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                View Resume
              </a>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a href="https://github.com" aria-label="GitHub" className="text-gray-600 hover:text-indigo-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.1 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z" fill="currentColor" />
                </svg>
              </a>

              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-600 hover:text-indigo-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.7v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v7H19v-6.2c0-1.5 0-3.4-2-3.4-2 0-2.3 1.6-2.3 3.3V21H9z" fill="currentColor" />
                </svg>
              </a>

              <a href="mailto:you@example.com" aria-label="Email" className="text-gray-600 hover:text-indigo-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="0" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-200 opacity-60 blur-3xl transform-gpu" />
              <div className="relative rounded-full overflow-hidden w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shadow-lg">
                <img
                  src="/images/govinda_image.jpeg"
                  alt="Profile image of Govinda Bhaskare"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/profile.svg';
                  }}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
