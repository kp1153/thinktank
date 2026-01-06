import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Blooming Kashmir
            </h3>
            <p className="text-sm">
              An independent think tank fostering peaceful, inclusive and
              sustainable development in Kashmir.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/vision-mission"
                  className="hover:text-blue-400 transition-colors"
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/objectives-values"
                  className="hover:text-blue-400 transition-colors"
                >
                  Core Objectives & Values
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:info@bloomingkashmir.org"
                className="text-blue-400 hover:text-blue-300"
              >
                info@bloomingkashmir.org
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Blooming Kashmir. All rights
            reserved.
          </p>
          <p className="mt-2">
            Developed and maintained by Kamta Prasad:
            <a
              href="https://web-developer-kp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-1"
            >
              https://web-developer-kp.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
