"use client";

import { useEffect, useState } from 'react';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className={`fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[rgba(10,10,10,0.6)] backdrop-blur-sm border-b' : 'bg-transparent'} `}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="#home" className="text-lg font-semibold tracking-tight text-white/90">
                <span className="inline-block rounded px-2 py-1 bg-[rgba(255,255,255,0.04)]">Govinda</span>
                <span className="ml-2 text-sm text-indigo-300">Bhaskare</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white/90 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-2 text-sm font-medium text-black"
              >
                Resume
              </a>
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
          <div className="md:hidden border-t border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,10,0.7)] backdrop-blur-sm">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-[rgba(255,255,255,0.02)] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 bg-indigo-400 text-white">
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
