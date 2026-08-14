"use client";

import React from 'react';

export default function Hero() {
  const BASE_PATH =
    process.env.NODE_ENV === "production" ? "/govinda-portfolio" : "";
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
           Software Developer with 2.5+ years of experience developing responsive and data-driven web applications using Angular, React, Next.js, TypeScript, Python, and SQL. Experienced in building API-driven applications and solving real-world development problems, with a strong interest in expanding across the full software development stack.

            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-4 py-2 text-white font-medium shadow hover:scale-[1.01] transition-transform"
              >
                View My Projects
              </a>

              <a
                href={BASE_PATH + "/resume.pdf"}
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
              <a href="mailto:govindabhaskare123@gmail.com?subject=Hello%20Govinda" aria-label="Email" className="text-gray-600 hover:text-indigo-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="0" fill="currentColor" />
                </svg>
              </a>

              <a href="https://wa.me/918889094975?text=Hello%20Govinda" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M20.52 3.48A11.9 11.9 0 0012.06.5C6.09.5 1.46 4.9 1.12 10.6c-.09 1.18.2 2.34.82 3.38L.5 21.5l7.9-2.07c1 .56 2.14.85 3.3.85 5.97 0 10.6-4.4 10.94-10.1.26-4.25-1.7-8.1-4.12-10.7zM12.06 20.5c-1.02 0-2.02-.27-2.9-.78l-.21-.12-4.69 1.23 1.25-4.58-.13-.24A8.44 8.44 0 013.62 10.6c.28-4.2 4.05-7.56 8.44-7.56 2.25 0 4.36.87 5.95 2.46 1.58 1.58 2.45 3.7 2.16 5.94-.36 3.76-3.6 6.77-7.36 6.77z" fill="currentColor"/>
                  <path d="M17.2 14.2c-.28-.14-1.66-.82-1.92-.92-.26-.1-.45-.14-.64.14-.18.28-.7.92-.86 1.11-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.24-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.04-.33-.02-.46-.07-.14-.64-1.55-.88-2.14-.23-.56-.47-.48-.64-.49l-.55-.01c-.18 0-.46.07-.7.33-.24.26-.9.87-.9 2.12 0 1.25.92 2.46 1.05 2.63.12.18 1.8 2.8 4.36 3.92 3.04 1.36 3.04.91 3.58.86.36-.03 1.16-.47 1.32-.92.16-.46.16-.86.12-.95-.05-.09-.18-.14-.46-.28z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-200 opacity-60 blur-3xl transform-gpu" />
              <div className="relative rounded-full overflow-hidden w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shadow-lg">
                <img
                  src={BASE_PATH + "/images/govinda_image.jpeg"}
                  alt="Profile image of Govinda Bhaskare"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = BASE_PATH + '/images/profile.svg';
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
