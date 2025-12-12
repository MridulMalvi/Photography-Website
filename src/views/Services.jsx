import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import { services } from "./servicesData";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const navigate = useNavigate(); // 2. Initialize navigate hook

  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };

  return (
    <>
      <section
        id="services"
        className="pt-20 pb-20 md:pt-30 px-4 md:px-12 text-center min-h-screen flex flex-col justify-center bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 transition-colors duration-300"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-900 dark:text-amber-400 mt-4 lg:mt-2 lg:pb-2 mb-10 transition-colors duration-300">
          Our Services
        </h1>

        <div className="mb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/95 dark:bg-gray-800/95 border border-amber-100 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition text-left"
            >
              <h2 className="text-2xl font-bold mb-2 text-amber-900 dark:text-amber-400 transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-amber-800 dark:text-amber-300 mb-4 transition-colors duration-300">{service.description}</p>
              <ul className="text-amber-700 dark:text-amber-200 space-y-2 mb-4 transition-colors duration-300">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => openModal(service.samples)}
                  className="flex-1 text-amber-900 dark:text-amber-400 border border-amber-700 dark:border-amber-500 px-4 py-2 rounded-lg text-center hover:bg-amber-50 dark:hover:bg-gray-700 transition font-medium"
                >
                  View Samples
                </button>
                <button
                  onClick={() => navigate("/book")}
                  className="flex-1 bg-amber-600 text-white px-4 py-2 rounded-lg text-center hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-800 transition font-medium shadow-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-400 transition-colors duration-300">
                Image Samples
              </h2>
              <button
                onClick={closeModal}
                className="text-amber-700 dark:text-amber-400 hover:text-red-500 dark:hover:text-red-400 transition-transform duration-300 transform hover:scale-125 text-3xl"
              >
                &times;
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {selectedImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-amber-50 dark:bg-gray-700"
                >
                  <img
                    src={image}
                    alt={`Sample ${index + 1}`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
