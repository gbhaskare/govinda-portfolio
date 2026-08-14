"use client";

import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">About</h3>
            <div className="rounded-lg border border-gray-100 p-6 shadow-sm bg-white">
              <p className="text-gray-700">
                I am Govinda Bhaskare, a Software Engineer based in Indore, Madhya Pradesh, India. I develop
                data-driven, responsive web applications using modern frontend technologies and APIs. I have experience
                working with Angular, React.js, Next.js, Python, REST APIs and SQL databases.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-indigo-600 mb-3">Quick Info</h4>
            <div className="grid gap-4">
              <div className="rounded-lg border p-4 bg-gradient-to-r from-white to-zinc-50 hover:from-indigo-50 hover:to-white transition">
                <div className="text-sm text-gray-500">Location</div>
                <div className="text-base font-medium">Indore, Madhya Pradesh, India</div>
              </div>

              <div className="rounded-lg border p-4 bg-gradient-to-r from-white to-zinc-50 hover:from-indigo-50 hover:to-white transition">
                <div className="text-sm text-gray-500">Degree</div>
                <div className="text-base font-medium">B.Tech in Information Technology</div>
              </div>

              <div className="rounded-lg border p-4 bg-gradient-to-r from-white to-zinc-50 hover:from-indigo-50 hover:to-white transition">
                <div className="text-sm text-gray-500">University</div>
                <div className="text-base font-medium">SGSITS, Indore (Jul 2019 – May 2023)</div>
              </div>

              <div className="rounded-lg border p-4 bg-gradient-to-r from-white to-zinc-50 hover:from-indigo-50 hover:to-white transition">
                <div className="text-sm text-gray-500">Role</div>
                <div className="text-base font-medium">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
