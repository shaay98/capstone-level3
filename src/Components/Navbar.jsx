import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="text-xl md:text-2xl font-extrabold tracking-wide uppercase">
          Happy Hour
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          {['Home', 'Menu', 'Reservations', 'Gallery', 'Events', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Reserve Button (Desktop only) */}
        <div className="hidden md:block">
          <a
            href="#reservations"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
          >
            Reserve Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black text-white py-6 px-4 text-center space-y-4">
          {['Home', 'Menu', 'Reservations', 'Gallery', 'Events', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-yellow-400 transition-colors"
            >
              {item}
            </a>
          ))}

          <a
            href="#reservations"
            className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors mt-4"
            onClick={() => setIsOpen(false)}
          >
            Reserve Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;