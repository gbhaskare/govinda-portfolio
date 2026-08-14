"use client";

import { useState } from 'react';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <nav className="backdrop-blur-sm bg-white/60 dark:bg-black/60 border-b border-gray-200/60 dark:border-gray-800/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="#home" className="text-lg font-semibold tracking-tight text-indigo-600">
                Govinda Bhaskare
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((s) => !s)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-black/80">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100/60 hover:text-indigo-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
