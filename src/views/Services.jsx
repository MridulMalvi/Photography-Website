import React from "react";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="bg-[#eeebe2] pt-20 md:pt-30 px-4 md:px-12 text-center bg-yellow min-h-screen flex flex-col justify-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-900 mt-4 lg:mt-2 lg:pb-2 mb-10">
          Our Services
        </h1>

        <div className="mb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Wedding Photography */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-left">
            <h2 className="text-2xl font-bold mb-2 text-yellow-800">
              Wedding Photography
            </h2>
            <p className="text-gray-700 mb-4">
              Complete wedding coverage with artistic storytelling
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>💰 Starting from ₹75,000</li>
              <li>⏱ 12 hours coverage</li>
              <li>📸 Pre-wedding shoot</li>
              <li>💒 Ceremony & Reception coverage</li>
              <li>🖼 Edited online gallery and Physical album</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#samples-wedding"
                className="flex-1 text-yellow-800 border border-yellow-800 px-4 py-2 rounded-lg text-center hover:bg-yellow-100 transition font-medium"
              >
                View Samples
              </a>
              <a
                href="#book"
                className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg text-center hover:bg-yellow-800 transition font-medium"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Portrait Sessions */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-left">
            <h2 className="text-2xl font-bold mb-2 text-yellow-800">
              Portrait Sessions
            </h2>
            <p className="text-gray-700 mb-4">
              Professional portraits for families, individuals, and couples
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>💰 Starting from ₹5,000</li>
              <li>⏱ 2 hours session</li>
              <li>📍 Indoor or Outdoor location</li>
              <li>📸 Multiple outfit changes</li>
              <li>🖼 Edited high-resolution images</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#samples-portrait"
                className="flex-1 text-yellow-800 border border-yellow-800 px-4 py-2 rounded-lg text-center hover:bg-yellow-100 transition font-medium"
              >
                View Samples
              </a>
              <a
                href="#book"
                className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg text-center hover:bg-yellow-800 transition font-medium"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Event Coverage */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-left">
            <h2 className="text-2xl font-bold mb-2 text-yellow-800">
              Event Coverage
            </h2>
            <p className="text-gray-700 mb-4">
              Comprehensive photography for corporate events, parties, and more
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>💰 Starting from ₹10,000</li>
              <li>⏱ 5 hours coverage</li>
              <li>🎤 Corporate functions & parties</li>
              <li>📸 Team photos & candid moments</li>
              <li>🖼 Edited online gallery</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#samples-event"
                className="flex-1 text-yellow-800 border border-yellow-800 px-4 py-2 rounded-lg text-center hover:bg-yellow-100 transition font-medium"
              >
                View Samples
              </a>
              <a
                href="#book"
                className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg text-center hover:bg-yellow-800 transition font-medium"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Product Photography */}
          <div className="mb-12 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-left">
            <h2 className="text-2xl font-bold mb-2 text-yellow-800">
              Product Photography
            </h2>
            <p className="text-gray-700 mb-4">
              High-quality images to make your products stand out
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>💰 Starting from ₹8,000</li>
              <li>⏱ Half-day shoot</li>
              <li>📦 Studio setup or on-site</li>
              <li>📸 Multiple angles & close-ups</li>
              <li>🖼 Edited product catalog</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#samples-product"
                className="flex-1 text-yellow-800 border border-yellow-800 px-4 py-2 rounded-lg text-center hover:bg-yellow-100 transition font-medium"
              >
                View Samples
              </a>
              <a
                href="#book"
                className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg text-center hover:bg-yellow-800 transition font-medium"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
