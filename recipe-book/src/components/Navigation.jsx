import React, { useState } from 'react'

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="bg-blue-600 text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/" className="hover:text-gray-200">Bliksund</a>
          </div>
  
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-200 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-200 transition">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
            </li>
          </ul>
  
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-blue-500 space-y-2 px-6 py-4">
            <li>
              <a href="#home" className="block hover:text-gray-200 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-gray-200 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-gray-200 transition">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    );
}

export default Navigation