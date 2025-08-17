import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-5 py-4 bg-white text-gray-800 shadow-md relative z-50">
      {/* Brand */}
      <h1 className="text-lg font-bold tracking-wide text-emerald-700">
        Sales Skills-Hub
      </h1>

      {/* Hamburger Icon */}
      <button
        className="flex flex-col justify-center items-center md:hidden space-y-1 bg-none border-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span
          className={`block w-6 h-[3px] bg-emerald-700 transition-transform duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-[3px] bg-emerald-700 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-[3px] bg-emerald-700 transition-transform duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row md:static absolute top-14 right-5 bg-white md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none shadow-md md:shadow-none gap-3 md:gap-6 transition-all duration-300 ${
          isMobileMenuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <li>
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 hover:text-emerald-700 font-medium transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 hover:text-emerald-700 font-medium transition-colors duration-300"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 hover:text-emerald-700 font-medium transition-colors duration-300"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-800 hover:text-emerald-700 font-medium transition-colors duration-300"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
