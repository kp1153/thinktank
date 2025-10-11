// components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
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
        <div className="flex flex-wrap justify-between gap-2 text-xs sm:text-sm md:text-base">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link
            href="/culture-tourism"
            className="text-gray-700 hover:text-gray-900"
          >
            Culture & Tourism
          </Link>
          <Link
            href="/language-literature"
            className="text-gray-700 hover:text-gray-900"
          >
            Language & Literature
          </Link>
          <Link href="/education" className="text-gray-700 hover:text-gray-900">
            Education
          </Link>
          <Link href="/economy" className="text-gray-700 hover:text-gray-900">
            Economy
          </Link>
          <Link href="/politics" className="text-gray-700 hover:text-gray-900">
            Politics
          </Link>
          <Link
            href="/interviews"
            className="text-gray-700 hover:text-gray-900"
          >
            Interviews
          </Link>
          <Link href="/research" className="text-gray-700 hover:text-gray-900">
            Research
          </Link>
          <Link href="/events" className="text-gray-700 hover:text-gray-900">
            Events
          </Link>
          <Link href="/media" className="text-gray-700 hover:text-gray-900">
            Media
          </Link>
        </div>
      </div>
    </nav>
  );
}
