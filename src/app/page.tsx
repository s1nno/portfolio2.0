"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8 px-4 pb-16">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
        <Image
          src="/PortPic.png"
          alt="Portrait of Hayden Sandler"
          width={280}
          height={280}
          className="rounded-lg border-4 border-[#1b3a4b] shadow-lg bg-[#0a2233] object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#b3e0ff] mb-2">
            Hey, I&apos;m Hayden
          </h1>
          <p className="text-lg text-[#b3e0ff]/80 mb-4">
            I&apos;m a Computer Science student from the University of Central
            Florida and a software engineer. I&apos;m specifically interested in
            working on projects involving full stack development, API
            development, distributed systems, computer vision, retrieval
            augmented generation (RAG), and machine learning.
          </p>
          <p className="text-lg text-[#b3e0ff]/80 mb-4">
            When I&apos;m not coding, you can find me visiting aquariums,
            watching{" "}
            <span className="relative group inline-block text-orange-400 cursor-pointer">
              sports
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-0.5 px-3 py-2 rounded bg-[#0a2233] text-orange-400 text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                Go Dolphins!
              </span>
            </span>
            , catching live music, watching{" "}
            <a
              href="https://letterboxd.com/sinno/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              movies
            </a>
            , playing video games and just spending time outside.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#1b3a4b] text-[#b3e0ff] rounded-full shadow hover:bg-[#4fd1c5] hover:text-[#0a2233] transition-colors font-semibold"
          >
            View Resume
          </a>
        </div>
      </div>
      <section className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-[#b3e0ff] mb-4">Skills</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[#4fd1c5] mb-3">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Java
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Go
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                C
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                HTML/CSS
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#4fd1c5] mb-3">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Spring
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Gin
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                React.js
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Express.js
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                jQuery
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                React Native
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#4fd1c5] mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Relational Databases
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Non-Relational Databases
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Vector Databases
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Postman
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Hoppscotch
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                AWS
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Figma
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Docker
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Kubernetes
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                LangChain
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Jupyter Notebook
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-[#b3e0ff] mb-4">Links</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://github.com/s1nno"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#0a2233]/80 rounded-lg p-4 shadow text-center text-[#b3e0ff] hover:bg-[#4fd1c5] hover:text-[#0a2233] transition-colors font-semibold"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/HaydenSandler"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#0a2233]/80 rounded-lg p-4 shadow text-center text-[#b3e0ff] hover:bg-[#4fd1c5] hover:text-[#0a2233] transition-colors font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="mailto:haydensandler1@gmail.com"
            className="flex-1 bg-[#0a2233]/80 rounded-lg p-4 shadow text-center text-[#b3e0ff] hover:bg-[#4fd1c5] hover:text-[#0a2233] transition-colors font-semibold"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
