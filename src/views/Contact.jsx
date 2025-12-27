import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Wedding Photography",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://raj-photo-backend.onrender.com/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Contact form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Wedding Photography",
          message: "",
        });
      } else {
        alert("Failed to submit contact form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-900 dark:text-amber-400 mb-4 mt-10">
              Get In Touch
            </h1>
            <p className="max-w-2xl mx-auto sm:text-xl sm:mt-4 lg:mt-6 lg:text-2xl text-amber-800 dark:text-amber-300">
              Ready to capture your special moments? Contact us to discuss your
              photography needs and get a personalized quote.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 mb-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info + Hours */}
            <div className="space-y-8">
              {/* Info */}
              <div className="mt-6 bg-white/95 dark:bg-gray-800/95 p-8 rounded-lg shadow-md border border-amber-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-400 mb-4">
                  Contact Information
                </h2>
                <ul className="space-y-4 text-lg text-amber-800 dark:text-amber-300">
                  <li>📞 +91 98765 43210</li>
                  <li>✉️ rajphotostudio@gmail.com</li>
                  <li>
                    📍 123 Photography Lane, Creative District, Betul 460001
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-white/95 dark:bg-gray-800/95 p-8 rounded-lg shadow-md border border-amber-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-400 mb-4">
                  Studio Hours
                </h2>
                <ul className="space-y-2 text-amber-800 dark:text-amber-300 text-lg">
                  <li className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-amber-50/80 dark:bg-gray-800/80 p-8 rounded-lg shadow-md border border-amber-200 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 text-lg sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-medium text-amber-900 dark:text-amber-400"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 w-full border-amber-200 dark:border-gray-600 rounded-md shadow-sm p-3 bg-white dark:bg-gray-700 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-medium text-amber-900 dark:text-amber-400"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border-amber-200 dark:border-gray-600 rounded-md shadow-sm p-3 bg-white dark:bg-gray-700 dark:text-gray-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-lg block font-medium text-amber-900 dark:text-amber-400"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full border-amber-200 dark:border-gray-600 rounded-md shadow-sm p-3 bg-white dark:bg-gray-700 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="text-lg block font-medium text-amber-900 dark:text-amber-400"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="mt-1 block w-full border-amber-200 dark:border-gray-600 rounded-md shadow-sm p-3 bg-white dark:bg-gray-700 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option>Wedding Photography</option>
                      <option>Portrait Sessions</option>
                      <option>Corporate Party Coverage</option>
                      <option>Birthday Party Photography</option>
                      <option>Product Photography</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="pb-2 text-lg block font-medium text-amber-900 dark:text-amber-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your photography needs..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 mb-4 block w-full text-lg border-amber-200 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 dark:text-gray-200 focus:ring-amber-500 focus:border-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-md shadow-md text-lg font-medium
                  text-white bg-amber-500 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
