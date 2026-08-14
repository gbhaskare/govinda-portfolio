"use client";

import React from 'react';
import CONTACT from '../../data/contact';

export default function Contact() {
  const c = CONTACT;

  const whatsappLink = c.whatsapp
    ? `https://wa.me/${c.whatsapp.replace(/[^0-9]/g, '')}`
    : undefined;

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-gray-100 p-6 bg-white shadow-sm">
            <div className="text-gray-700 mb-2">Name</div>
            <div className="font-medium">{c.name}</div>

            <div className="mt-4 text-gray-700 mb-2">Location</div>
            <div className="font-medium">Current: {c.currentLocation}</div>
            <div className="text-sm text-gray-500">Permanent: {c.permanentAddress}</div>
          </div>

          <div className="rounded-lg border border-gray-100 p-6 bg-white shadow-sm">
            <div className="text-gray-700 mb-2">Contact</div>
            {c.email && (
              <a href={`mailto:${c.email}`} className="block text-indigo-600 hover:underline">
                {c.email}
              </a>
            )}

            {c.phone && (
              <a href={`tel:${c.phone.replace(/[^0-9]/g, '')}`} className="block text-gray-700">
                {c.phone}
              </a>
            )}

            {whatsappLink && (
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-green-600">
                WhatsApp
              </a>
            )}

            {c.github && (
              <a href={c.github} target="_blank" rel="noopener noreferrer" className="block text-gray-700">
                GitHub
              </a>
            )}

            {c.linkedin && (
              <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="block text-gray-700">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
