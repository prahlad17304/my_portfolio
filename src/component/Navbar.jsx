import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome, FaUser, FaFileAlt, FaBriefcase, FaBlog, FaEnvelope, FaMoon, FaRegSun
} from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const activeClass = "bg-gradient-to-r from-red-400 to-pink-500 text-white";

  return (
    <nav className="flex flex-wrap items-center justify-between px-12 py-6 w-full bg-transparent z-20">
      {/* Left side: logo/brand */}
      <div className="flex flex-wrap items-center">
        <span className="font-bold text-3xl italic text-[#ff5f6d]">Prahlad</span>
        <span className="font-bold text-3xl italic text-[#ff5f6d]">Kumar</span>
      </div>
      {/* Right side: navbar links and dark mode button */}
      <div className="flex flex-wrap items-center gap-3">
        <NavLink to="/" className={({ isActive }) =>
          `px-3 py-2 rounded-md flex items-center gap-1 ${isActive ? activeClass : 'bg-white text-black'}`
        }>
          <FaHome /> Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
          `px-3 py-2 rounded-md flex items-center gap-1 ${isActive ? activeClass : 'bg-white text-black'}`
        }>
          <FaUser /> About
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) =>
          `px-3 py-2 rounded-md flex items-center gap-1 ${isActive ? activeClass : 'bg-white text-black'}`
        }>
          <FaFileAlt /> Resume
        </NavLink>
        <NavLink to="/works" className={({ isActive }) =>
          `px-3 py-2 rounded-md flex items-center gap-1 ${isActive ? activeClass : 'bg-white text-black'}`
        }>
          <FaBriefcase /> Works
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) =>
          `px-3 py-2 rounded-md flex items-center gap-1 ${isActive ? activeClass : 'bg-white text-black'}`
        }>
          <FaBlog /> Blogs
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          `px-3 py-2 rounded-md flex items-center gap-1 ${isActive ? activeClass : 'bg-white text-black'}`
        }>
          <FaEnvelope /> Contact
        </NavLink>

        {/* Dark/Light mode toggle button */}
        <button
          className="p-2 rounded-full bg-white flex items-center justify-center ml-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode
            ? <FaRegSun className="w-6 h-6 text-yellow-400" />
            : <FaMoon className="w-6 h-6 text-black" />}
        </button>
      </div>
    </nav>
  );
}
