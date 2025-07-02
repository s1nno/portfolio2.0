"use client";
import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-3xl font-bold text-[#b3e0ff] mb-8">Projects</h1>
      <div className="w-full max-w-3xl space-y-8">
        {/* SensAI */}
        <div className="bg-[#0a2233]/80 rounded-lg p-6 shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-[#4fd1c5]">SensAI</h2>
            <a
              href="https://github.com/LordCogsWorth/sensAI_knight_hacks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b3e0ff] underline hover:text-[#4fd1c5] text-sm"
            >
              GitHub ↗
            </a>
          </div>
          <ul className="list-disc list-inside text-[#b3e0ff]/90 text-sm pl-4 space-y-1 mb-4">
            <li>
              Placed 3rd overall at KnightHacks 2024 (100+ participants, team of
              4)
            </li>
            <li>
              Developed a computer vision project using TensorFlow&apos;s
              Coco-SSD model to identify objects to assist the visually impaired
              with navigating around the objects in the user&apos;s path
            </li>
            <li>
              Integrated Tesseract and ServiceNow&apos;s ExecuteNowLLM API for
              real-time text scanning and reading
            </li>
            <li>
              Developed a React hook for voice commands and audio cues using the
              Web Speech API
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              React
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              TensorFlow
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Tesseract
            </span>
          </div>
        </div>
        {/* Scuparadise */}
        <div className="bg-[#0a2233]/80 rounded-lg p-6 shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-[#4fd1c5]">
              Scuparadise
            </h2>
            <a
              href="https://github.com/POOS-Group29/Large_project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b3e0ff] underline hover:text-[#4fd1c5] text-sm"
            >
              GitHub ↗
            </a>
          </div>
          <ul className="list-disc list-inside text-[#b3e0ff]/90 text-sm pl-4 space-y-1 mb-4">
            <li>
              Collaborated with 7 developers to build a full-stack web and
              mobile app for scuba diving locations
            </li>
            <li>Enabled users to view, create, rate, and review dive spots</li>
            <li>
              Implemented a 3D globe interface with real-time sync and 4,093+
              locations worldwide
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              React
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              React Native
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Docker
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Express
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Node
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              MongoDB
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              AWS
            </span>
          </div>
        </div>
        {/* OceanSide Contact Manager */}
        <div className="bg-[#0a2233]/80 rounded-lg p-6 shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-[#4fd1c5]">
              OceanSide Contact Manager
            </h2>
            <a
              href="https://github.com/POOS-Group29/small-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b3e0ff] underline hover:text-[#4fd1c5] text-sm"
            >
              GitHub ↗
            </a>
          </div>
          <ul className="list-disc list-inside text-[#b3e0ff]/90 text-sm pl-4 space-y-1 mb-4">
            <li>
              Designed and implemented a contact manager for account creation
              and management (team of 5)
            </li>
            <li>
              Created the UI in Figma and used MySQL on Digital Ocean for data
              storage
            </li>
            <li>
              Developed a PHP/SwaggerHub API to connect the website and database
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              jQuery
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              HTML
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              CSS
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              MySQL
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              SwaggerHub
            </span>
          </div>
        </div>
        {/* AuthVista */}
        <div className="bg-[#0a2233]/80 rounded-lg p-6 shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-[#4fd1c5]">AuthVista</h2>
          </div>
          <ul className="list-disc list-inside text-[#b3e0ff]/90 text-sm pl-4 space-y-1 mb-4">
            <li>
              Developed a secure three-tier web app with role-based
              authentication and SQL query features
            </li>
            <li>
              Designed a relational schema with referential integrity for
              suppliers, parts, jobs, and shipments
            </li>
            <li>
              Implemented secure authentication and dynamic user redirection by
              access role
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Java
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Servlets
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              JSP
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              JDBC
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              Tomcat
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              MySQL
            </span>
            <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-xs">
              HTML
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
