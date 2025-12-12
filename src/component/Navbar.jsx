import React, { useState } from "react";
import { FaCamera, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  // Reusable function for navigation
  const handleNavClick = (path) => {
    setIsOpen(false); // close mobile menu after click
    navigate(path);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Camera Icon */}
          <div
            className="flex items-center gap-3 text-3xl md:text-3xl font-bold text-yellow-800 dark:text-yellow-400 cursor-pointer transition-colors duration-300"
            onClick={() => handleNavClick("/")}
          >
            <FaCamera className="text-yellow-700 dark:text-yellow-300" />
            Raj Photo Studio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-yellow-900 dark:text-gray-100 font-medium">
            <button
              onClick={() => handleNavClick("/")}
              className="hover:text-yellow-700 dark:hover:text-yellow-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className="hover:text-yellow-700 dark:hover:text-yellow-400 transition"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="hover:text-yellow-700 dark:hover:text-yellow-400 transition"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="hover:text-yellow-700 dark:hover:text-yellow-400 transition"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("/book")}
              className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 transition"
            >
              Book Now
            </button>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-yellow-300 dark:hover:bg-gray-700 transition"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-yellow-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-yellow-300 dark:hover:bg-gray-700 transition text-yellow-900 dark:text-gray-100"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-yellow-900" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-900 dark:text-gray-100 focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-3 shadow-md transition-colors duration-300">
            <button
              onClick={() => handleNavClick("/")}
              className="block w-full text-left text-yellow-900 dark:text-gray-100 hover:text-yellow-800 dark:hover:text-yellow-400 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/services")}
              className="block w-full text-left text-yellow-900 dark:text-gray-100 hover:text-yellow-800 dark:hover:text-yellow-400 transition"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className="block w-full text-left text-yellow-900 dark:text-gray-100 hover:text-yellow-800 dark:hover:text-yellow-400 transition"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("/contact")}
              className="block w-full text-left text-yellow-900 dark:text-gray-100 hover:text-yellow-800 dark:hover:text-yellow-400 transition"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("/book")}
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
