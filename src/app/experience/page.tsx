"use client";
import React from "react";

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8 pb-20">
      <h1 className="text-3xl font-bold text-[#b3e0ff] mb-8">Experience</h1>
      <div className="w-full max-w-2xl space-y-8">
        <div className="bg-[#0a2233]/80 rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold text-[#4fd1c5] mb-2">
            Capital One
          </h2>
          <p className="text-[#b3e0ff]/80 mb-1">Software Engineering Intern</p>
          <p className="text-[#b3e0ff]/60 mb-2">June 2025 -- August 2025</p>
          <ul className="list-disc list-inside text-[#b3e0ff]/90 text-sm pl-4 mb-4">
            <li>
              Working in the Graffiti team, within card tech, and updating the
              way IMBs are being generated
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Java
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Python
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Go
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              AWS DocumentDB
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Hoppscotch
            </span>
          </div>
        </div>
        <div className="bg-[#0a2233]/80 rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold text-[#4fd1c5] mb-2">
            Guest Media
          </h2>
          <p className="text-[#b3e0ff]/80 mb-1">Software Engineering Intern</p>
          <p className="text-[#b3e0ff]/60 mb-2">May 2024 -- December 2024</p>
          <ul className="list-disc list-inside text-[#b3e0ff]/90 text-sm pl-4 mb-4">
            <li>
              Collaborated with a small development team of 5 developers
              operating within an agile framework to develop various contracted
              projects
            </li>
            <li>
              Created React and Next.js components for a variety of different
              contracted projects to improve the user experience and provide
              data on potential purchases
            </li>
            <li>
              Implemented authentication, using Kinde, to provide the admins of
              a local Hair Salon with a custom dashboard for viewing attraction
              metrics
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              React
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Next.js
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Tailwind
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Sass
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
