import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hayden's Portfolio",
  description: "Portfolio Website of Hayden Sandler",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full flex justify-center items-center py-6 mb-8 bg-gradient-to-b from-[#0a2233] to-transparent text-[#b3e0ff] shadow-md">
          <ul className="flex gap-8 text-lg font-semibold">
            <li>
              <Link href="/" className="hover:text-[#4fd1c5] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="hover:text-[#4fd1c5] transition-colors"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-[#4fd1c5] transition-colors"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
