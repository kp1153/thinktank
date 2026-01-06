"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-lime-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-center mb-4">
          <h1 className="text-xl md:text-3xl">
            <div className="text-green-700 font-extrabold">KASHMIR</div>
            <div className="text-pink-600 text-sm md:text-xl italic font-normal">
              A Blooming Tulip
            </div>
          </h1>
        </div>

        <div className="flex flex-col gap-2 text-sm md:flex-row md:flex-wrap md:justify-center md:gap-3 md:text-base">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium px-2 py-1"
          >
            Home
          </Link>

          <Link
            href="/culture"
            className="text-purple-600 hover:text-purple-800 font-medium px-2 py-1"
          >
            Culture
          </Link>

          <Link
            href="/language"
            className="text-purple-600 hover:text-purple-800 font-medium px-2 py-1"
          >
            Language
          </Link>

          <Link
            href="/literature"
            className="text-purple-600 hover:text-purple-800 font-medium px-2 py-1"
          >
            Literature
          </Link>

          <Link
            href="/education"
            className="text-purple-600 hover:text-purple-800 font-medium px-2 py-1"
          >
            Education
          </Link>

          <Link
            href="/economy"
            className="text-orange-600 hover:text-orange-800 font-medium px-2 py-1"
          >
            Economy
          </Link>

          <Link
            href="/politics"
            className="text-red-600 hover:text-red-800 font-medium px-2 py-1"
          >
            Politics
          </Link>

          <Link
            href="/research"
            className="text-indigo-600 hover:text-indigo-800 font-medium px-2 py-1"
          >
            Research
          </Link>

          <Link
            href="/interviews"
            className="text-cyan-600 hover:text-cyan-800 font-medium px-2 py-1"
          >
            Interviews
          </Link>
        </div>
      </div>
    </nav>
  );
}