import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#eeebe2] dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      {/* Main content grows to fill space */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
