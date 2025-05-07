import { useState } from "react";
import Pro from "../assets/wal.jpg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 fixed top-0 left-0 w-full h-18 z-60 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between w-full">
          {/* Logo and Name */}
          <div className="flex items-center justify-between">
            <img
              src={Pro}
              alt="Profile"
              className="h-10 w-10 rounded-full mr-2"
            />
            <h1 className="text-black hover:text-yellow-400 transition-colors duration-200 ease-in-out font-medium text-[1.2rem] cursor-pointer">
              Barath G
            </h1>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center rounded-md p-2 text-black"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black pl-4 hover:text-yellow-400 transition-colors duration-300 ease-in-out font-medium text-[1.2rem] cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white w-full shadow-md" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black block rounded-md px-3 py-2 text-base font-medium hover:text-yellow-400 transition-colors duration-300 ease-in-out text-[1.2rem] cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
