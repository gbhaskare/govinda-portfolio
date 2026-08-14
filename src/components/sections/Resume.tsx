"use client";

import React from "react";

export default function Resume() {
  const BASE_PATH = process.env.NODE_ENV === "production" ? "/govinda-portfolio" : "";
  const resumePath = BASE_PATH + "/resume.pdf";

  return (
    <section id="resume" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Resume
        </h3>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* View Resume */}
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-gray-800 text-white px-4 py-2"
          >
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href={resumePath}
            download="Govinda-Bhaskare-Resume.pdf"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-gray-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}