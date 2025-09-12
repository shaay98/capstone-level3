import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['Home', 'Menu', 'Reservations', 'Gallery', 'Events', 'About', 'Contact'];

  return (
    <header className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-extrabold tracking-wide uppercase">
          Happy Hour
        </div>

        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          {navItems.map((item) => (
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

        <div className="hidden md:block">
          <a
            href="#reservations"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
          >
            Reserve Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
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

  
      {isOpen && (
        <div className="md:hidden bg-black text-white py-6 px-4 text-center space-y-4">
          {navItems.map((item) => (
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