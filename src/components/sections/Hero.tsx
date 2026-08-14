"use client";

import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24">
      <div className="container-max px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-[rgba(255,255,255,0.03)] text-sm text-green-300">Available • Open to opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Building modern, scalable web experiences.
            </h1>

            <p className="text-md text-[--muted] leading-relaxed">
              Software developer specializing in Angular, React, Next.js and TypeScript. I build API-driven, data-focused
              applications with attention to performance, accessibility and maintainable UI architecture.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-2 text-black font-semibold shadow-md hover:translate-y-[-2px] transition-transform"
              >
                View My Work
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-[var(--muted-border)] px-4 py-2 text-[--fg] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] transition"
              >
                View Resume
              </a>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com" aria-label="GitHub" className="text-[var(--fg)] hover:text-[var(--accent)]">
                {/* GitHub */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.4-1.9-1.4-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.1 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z" />
                </svg>
              </a>

              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-[var(--fg)] hover:text-[var(--accent)]">
                {/* LinkedIn */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.7v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v7H19v-6.2c0-1.5 0-3.4-2-3.4-2 0-2.3 1.6-2.3 3.3V21H9z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-[rgba(110,231,255,0.06)] to-[rgba(96,165,250,0.04)] blur-3xl animate-float" />

              <div className="relative surface-glass p-6 rounded-2xl border border-[var(--muted-border)] shadow-soft-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-[--muted]">Live Preview</div>
                  <div className="text-xs px-2 py-1 rounded bg-[rgba(255,255,255,0.02)]">Editor</div>
                </div>

                <div className="bg-[rgba(0,0,0,0.35)] rounded-md p-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded bg-[rgba(110,231,255,0.08)] text-[var(--accent)] text-sm">React</span>
                    <span className="px-2 py-1 rounded bg-[rgba(96,165,250,0.06)] text-[var(--accent-2)] text-sm">Angular</span>
                    <span className="px-2 py-1 rounded bg-[rgba(110,231,255,0.06)] text-[var(--accent)] text-sm">Next.js</span>
                    <span className="px-2 py-1 rounded bg-[rgba(110,231,255,0.06)] text-[var(--accent)] text-sm">TypeScript</span>
                    <span className="px-2 py-1 rounded bg-[rgba(255,255,255,0.02)] text-[--muted] text-sm">API</span>
                    <span className="px-2 py-1 rounded bg-[rgba(255,255,255,0.02)] text-[--muted] text-sm">UI/UX</span>
                  </div>

                  <div className="mt-4 text-sm text-[--muted]">Build: <span className="text-[--fg]">Production</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
