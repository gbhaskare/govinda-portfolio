"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Govinda Bhaskare. All rights reserved.
      </div>
    </footer>
  );
}
