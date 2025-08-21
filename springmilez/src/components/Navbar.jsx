// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkCls = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive
        ? "bg-amber-500 text-stone-900"
        : "text-blue-100 hover:bg-white/10"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-wide text-white">
          Springmillez <span className="text-amber-400">Engineering</span>
        </Link>

        <button
          className="md:hidden p-2 bg-white/10 rounded"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className="hidden md:flex items-center gap-2">
          <li><NavLink to="/" className={linkCls}>Home</NavLink></li>
          <li><NavLink to="/services" className={linkCls}>Services</NavLink></li>
          <li><NavLink to="/projects" className={linkCls}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={linkCls}>Contact</NavLink></li>
        </ul>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            <li><NavLink to="/" className={linkCls} onClick={() => setOpen(false)}>Home</NavLink></li>
            {/* <li><NavLink to="/services" className={linkCls} onClick={() => setOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/projects" className={linkCls} onClick={() => setOpen(false)}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={linkCls} onClick={() => setOpen(false)}>Contact</NavLink></li> */}
          </ul>
        </div>
      )}
    </nav>
  );
}
