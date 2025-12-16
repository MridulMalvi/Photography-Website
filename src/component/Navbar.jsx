import React, { useState, useEffect } from "react";
import { FaCamera, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Reusable function for navigation with smooth scroll
  const handleNavClick = (sectionId) => {
    setIsOpen(false); // close mobile menu after click
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-200 shadow-md fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Camera Icon */}
          <div
            className="flex items-center gap-3 text-3xl md:text-3xl font-bold text-yellow-800 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <FaCamera className="text-yellow-700" />
            Raj Photo Studio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-yellow-900 font-medium">
            <button
              onClick={() => handleNavClick("home")}
              className="hover:text-yellow-700 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="hover:text-yellow-700 transition"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="hover:text-yellow-700 transition"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="hover:text-yellow-700 transition"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("book")}
              className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
            >
              Book Now
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-yellow-800 text-yellow-100 hover:bg-yellow-700 transition"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
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
              onClick={() => handleNavClick("home")}
              className="block w-full text-left text-yellow-900 hover:text-yellow-800 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="block w-full text-left text-yellow-900 hover:text-yellow-800 transition"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="block w-full text-left text-yellow-900 hover:text-yellow-800 transition"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-left text-yellow-900 hover:text-yellow-800 transition"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick("book")}
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
