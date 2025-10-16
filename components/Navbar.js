"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Site Name */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">
            <div className="text-green-600 font-extrabold">KASHMIR</div>
            <div className="text-pink-600 text-base sm:text-lg md:text-xl italic font-normal">
              A Blooming Tulip
            </div>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-4 text-sm sm:text-base">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium px-2 py-1"
          >
            Home
          </Link>

          {/* Tourism Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("tourism")}
              className="text-green-600 hover:text-green-800 font-medium px-2 py-1 w-full sm:w-auto text-left"
            >
              Tourism
            </button>
            {openDropdown === "tourism" && (
              <div className="sm:absolute relative sm:top-full sm:left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-full sm:w-48 z-10">
                <Link
                  href="/culture"
                  className="block px-4 py-2 text-purple-600 hover:bg-purple-50"
                >
                  Culture
                </Link>
                <Link
                  href="/language"
                  className="block px-4 py-2 text-purple-600 hover:bg-purple-50"
                >
                  Language
                </Link>
                <Link
                  href="/literature"
                  className="block px-4 py-2 text-purple-600 hover:bg-purple-50"
                >
                  Literature
                </Link>
                <Link
                  href="/education"
                  className="block px-4 py-2 text-purple-600 hover:bg-purple-50"
                >
                  Education
                </Link>
              </div>
            )}
          </div>

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

          {/* Events Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("events")}
              className="text-teal-600 hover:text-teal-800 font-medium px-2 py-1 w-full sm:w-auto text-left"
            >
              Events
            </button>
            {openDropdown === "events" && (
              <div className="sm:absolute relative sm:top-full sm:left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-full sm:w-48 z-10">
                <Link
                  href="/research"
                  className="block px-4 py-2 text-indigo-600 hover:bg-indigo-50"
                >
                  Research
                </Link>
              </div>
            )}
          </div>

          {/* Media Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("media")}
              className="text-pink-600 hover:text-pink-800 font-medium px-2 py-1 w-full sm:w-auto text-left"
            >
              Media
            </button>
            {openDropdown === "media" && (
              <div className="sm:absolute relative sm:top-full sm:left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-full sm:w-48 z-10">
                <Link
                  href="/interviews"
                  className="block px-4 py-2 text-cyan-600 hover:bg-cyan-50"
                >
                  Interviews
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
