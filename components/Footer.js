export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BK. All rights reserved.</p>
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
