import React, { useState } from "react";
import { FaCamera, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Reusable function for navigation
  const handleNavClick = (path) => {
    setIsOpen(false); // close mobile menu after click
    navigate(path);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-200 shadow-md fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Camera Icon */}
          <div
            className="flex items-center gap-3 text-3xl md:text-3xl font-bold text-yellow-800 cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            <FaCamera className="text-yellow-700" />
            Raj Photo Studio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-yellow-900 font-medium">
            <button
              onClick={() => handleNavClick("/")}
              className="hover:text-yellow-700 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className="hover:text-yellow-700 transition"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="hover:text-yellow-700 transition"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="hover:text-yellow-700 transition"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("/book")}
              className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-900 focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-3 shadow-md">
            <button
              onClick={() => handleNavClick("/")}
              className="block w-full text-left text-yellow-900 hover:text-yellow-800 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className="block w-full text-left text-yellow-900 hover:text-yellow-800 transition"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="block w-full text-left text-yellow-900 hover:text-yellow-800 transition"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="block w-full text-left text-yellow-900 hover:text-yellow-800 transition"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("/book")}
              className="block w-full bg-amber-500 text-white px-4 py-2 rounded-lg text-center hover:bg-amber-600 transition"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
