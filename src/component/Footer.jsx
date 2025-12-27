import React from "react";
import { Camera, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = ({ handleNavClick }) => {
  return (
    <footer className="bg-yellow-900 dark:bg-gray-600 text-white pb-6 px-4 md:px-12 rounded-t-sm shadow-inner pt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-yellow-700 dark:border-gray-700 pb-10">
        {/* Column 1: Logo & Mission */}
        <div>
          <div
            className="flex text-yellow-200 dark:text-amber-500 items-center gap-2 text-2xl font-bold mb-4 lg:pt-3 cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            <Camera className="text-yellow-200 dark:text-amber-500" />
            Raj Photo Studio
          </div>
          <p className="text-sm text-white dark:text-gray-300">
            Capturing moments today, creating memories for tomorrow.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-red-400 transition transform hover:scale-110"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-600 transition transform hover:scale-110"
            >
              <Twitter />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:px-12 lg:ml-5 mt-3">
          <h3 className="text-lg font-semibold mb-4 text-yellow-400 dark:text-amber-400">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => handleNavClick("/")}
                className="text-sm hover:text-yellow-400 transition text-left w-auto"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("/services")}
                className="text-sm hover:text-yellow-400 transition text-left w-auto"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("/about")}
                className="text-sm hover:text-yellow-400 transition text-left w-auto"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("/contact")}
                className="text-sm hover:text-yellow-400 transition text-left w-auto"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400 dark:text-amber-400 sm:pt-4">
            Our Expertise
          </h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => handleNavClick("/services")}
                className="text-sm hover:text-yellow-100 transition text-left w-auto"
              >
                Wedding Photography
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("/services")}
                className="text-sm hover:text-yellow-100 transition text-left w-auto"
              >
                Portrait Sessions
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("/services")}
                className="text-sm hover:text-yellow-100 transition text-left w-auto"
              >
                Event Coverage
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("/services")}
                className="text-sm hover:text-yellow-100 transition text-left w-auto"
              >
                Product Photography
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400 dark:text-amber-400 sm:pt-4">
            Reach Us
          </h3>
          <ul className="space-y-3 text-sm text-white dark:text-gray-300">
            <li className="flex items-center gap-2">📞 +91 98765 43210</li>
            <li className="flex items-center gap-2">
              ✉️ hello@rajphotostudio.com
            </li>
            <li className="flex items-start gap-2">
              📍 123 Photography Lane, Creative District, Betul 460001
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-6">
        <p className="text-xs text-white dark:text-gray-400">
          &copy; {new Date().getFullYear()} Raj Photo Studio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
