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
            Hayden Sandler
          </h1>
          <p className="text-lg text-[#b3e0ff]/80 mb-4">
            Hi! I&apos;m Hayden, I&apos;m a Computer Science student, from the
            University of Central Florida, and aspiring software engineer.
            Focused on full stack development, distributed systems. I&apos;m
            interested in working on retrieval augmented generation and computer
            vision. I enjoy learning new technologies and building scalable
            solutions.
          </p>
          <p className="text-lg text-[#b3e0ff]/80 mb-4">
            When I&apos;m not coding, you can find me visiting aquariums,
            watching sports (UFC, basketball, football - go Dolphins), catching
            live music, or watching movies{" "}
            <a
              href="https://letterboxd.com/sinno/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:underline"
            >
              Letterboxd
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
                Langchain
              </span>
              <span className="px-3 py-1 bg-[#1b3a4b] text-[#b3e0ff] rounded-full text-sm">
                Jupyter Notebook
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-[#b3e0ff] mb-4">Contact</h2>
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
      <div className="text-center mt-8">
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#b3e0ff]/60 hover:text-[#4fd1c5] transition-colors text-sm"
        >
          <span>Deployed on</span>
          <svg
            width="76"
            height="20"
            viewBox="0 0 76 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5274 0L75.0548 0H71.8778L37.5274 13.8828L3.17688 0H0L37.5274 0Z"
              fill="currentColor"
            />
            <path
              d="M37.5274 20L75.0548 20H71.8778L37.5274 6.11719L3.17688 20H0L37.5274 20Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
