import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-slate-900 text-gray-200 shadow-lg relative z-50">
      {/* Brand */}
      <h1 className="text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
        StarnDev
      </h1>

      {/* Hamburger Icon */}
      <button
        className="flex flex-col justify-center items-center md:hidden space-y-1 bg-none border-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span
          className={`block w-6 h-[3px] bg-cyan-400 transition-transform duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-[3px] bg-cyan-400 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-[3px] bg-cyan-400 transition-transform duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row md:static absolute top-14 right-5 bg-slate-800 md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none shadow-lg md:shadow-none gap-4 md:gap-8 transition-all duration-300 ${
          isMobileMenuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/projects", label: "Projects" },
          { to: "/contact", label: "Contact Us" },
        ].map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
