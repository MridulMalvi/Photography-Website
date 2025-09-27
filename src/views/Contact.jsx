import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-[#eeebe2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-900 mb-4 mt-10">
              Get In Touch
            </h1>
            <p className="max-w-2xl mx-auto sm:text-xl sm:mt-4 lg:mt-6 lg:text-2xl text-gray-700">
              Ready to capture your special moments? Contact us to discuss your
              photography needs and get a personalized quote.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-12 mb-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info + Hours */}
            <div className="space-y-8">
              {/* Info */}
              <div className="mt-6 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <ul className="space-y-4 text-lg text-gray-900">
                  <li>📞 +91 98765 43210</li>
                  <li>✉️ rajphotostudio@gmail.com</li>
                  <li>
                    📍 123 Photography Lane, Creative District, Betul 460001
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Studio Hours
                </h2>
                <ul className="space-y-2 text-gray-900 text-lg">
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
            <div className="bg-[#eeebe6] p-8 rounded-lg shadow-lg border-2 border-[#d5d0c8]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 text-lg sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-medium text-gray-700"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your full name"
                      className="mt-1 w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-medium text-gray-700"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="your@email.com"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-lg block font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="text-lg block font-medium text-gray-700"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
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
                    className="pb-2 text-lg block font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your photography needs..."
                    className="mt-1 mb-4 block w-full text-lg border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-md shadow-sm text-lg font-medium 
                  text-white bg-yellow-600 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 transition-colors"
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
