import React, { useState } from "react";
import { FaCamera, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Reusable function for navigation with smooth scroll
  const handleNavClick = (sectionId) => {
    setIsOpen(false); // close mobile menu after click
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-200 dark:from-gray-900 dark:via-gray-600 dark:to-gray-500 shadow-md fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Camera Icon */}
          <div
            className="flex items-center gap-3 text-3xl md:text-3xl font-bold text-yellow-800 dark:text-amber-400 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <FaCamera className="text-yellow-800 dark:text-amber-400" />
            Raj Photo Studio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-yellow-900 dark:text-gray-200 font-medium">
            <button
              onClick={() => handleNavClick("home")}
              className="hover:text-yellow-700 dark:hover:text-amber-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="hover:text-yellow-700 dark:hover:text-amber-400 transition"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="hover:text-yellow-700 dark:hover:text-amber-400 transition"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="hover:text-yellow-700 dark:hover:text-amber-400 transition"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("book")}
              className="bg-amber-500 text-white px-3 py-2 rounded-lg hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-700 transition"
            >
              Book Now
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-yellow-500 text-yellow-100 hover:bg-yellow-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-yellow-800 text-yellow-100 hover:bg-yellow-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-900 dark:text-gray-200 focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-3 shadow-md">
            <button
              onClick={() => handleNavClick("home")}
              className="block w-full text-left text-yellow-900 dark:text-gray-200 hover:text-yellow-800 dark:hover:text-amber-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="block w-full text-left text-yellow-900 dark:text-gray-200 hover:text-yellow-800 dark:hover:text-amber-400 transition"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="block w-full text-left text-yellow-900 dark:text-gray-200 hover:text-yellow-800 dark:hover:text-amber-400 transition"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-left text-yellow-900 dark:text-gray-200 hover:text-yellow-800 dark:hover:text-amber-400 transition"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("book")}
              className="block w-full bg-amber-500 text-white px-4 py-2 rounded-lg text-center hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition"
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
