// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/who-are-we" className="hover:text-white">
                  Who are We
                </Link>
              </li>
              <li>
                <Link href="/about/vision" className="hover:text-white">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/about/mission" className="hover:text-white">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team/director"
                  className="hover:text-white ml-4"
                >
                  Director
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team/researchers"
                  className="hover:text-white ml-4"
                >
                  Researchers
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team/interns"
                  className="hover:text-white ml-4"
                >
                  Interns
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/association" className="hover:text-white">
                  Association with BK
                </Link>
              </li>
              <li>
                <Link
                  href="/association/join-hands"
                  className="hover:text-white ml-4"
                >
                  Join Hands
                </Link>
              </li>
              <li>
                <Link
                  href="/association/academic-support"
                  className="hover:text-white ml-4"
                >
                  Academic Support
                </Link>
              </li>
              <li>
                <Link
                  href="/association/financial-support"
                  className="hover:text-white ml-4"
                >
                  Financial Support
                </Link>
              </li>
              <li>
                <Link
                  href="/association/fellowship"
                  className="hover:text-white ml-4"
                >
                  Fellowship
                </Link>
              </li>
              <li>
                <Link
                  href="/association/collaboration"
                  className="hover:text-white ml-4"
                >
                  Collaboration
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/bk-press" className="hover:text-white">
                  BK Press
                </Link>
              </li>
              <li>
                <Link
                  href="/bk-press/periodicals"
                  className="hover:text-white ml-4"
                >
                  Periodicals
                </Link>
              </li>
              <li>
                <Link href="/bk-press/books" className="hover:text-white ml-4">
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/bk-press/reviews"
                  className="hover:text-white ml-4"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/bk-press/journal"
                  className="hover:text-white ml-4"
                >
                  Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/reach-us" className="hover:text-white">
                  Reach Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
