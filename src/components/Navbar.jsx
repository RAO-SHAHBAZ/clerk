import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-gray-800 text-2xl font-semibold ${
            menuOpen ? "hidden" : ""
          }`}
        >
          <Link to="/">Rao Shahbaz</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
        <Link className="text-gray-600 text-lg hover:text-gray-800 hover:underline transition-all duration-300"
         to="/">Home</Link>
         <Link className="text-gray-600 text-lg hover:text-gray-800 hover:underline transition-all duration-300"
          to="/service">Services</Link>
         <Link   className="text-gray-600 text-lg hover:text-gray-800 hover:underline transition-all duration-300"
         to="/about">About</Link>
         <Link  className="text-gray-600 text-lg hover:text-gray-800 hover:underline transition-all duration-300"
         to="/contact-us">Contact</Link>
        
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg z-50">
          <div className="p-6 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-600 text-xl hover:text-gray-800 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-600 text-xl hover:text-gray-800 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-600 text-xl hover:text-gray-800 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 text-xl hover:text-gray-800 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
