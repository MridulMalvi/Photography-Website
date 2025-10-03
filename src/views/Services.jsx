import React, { useState } from "react";
import { services } from "./servicesData"; // Import the services data

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

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
        className="bg-[#eeebe2] pt-20 md:pt-30 px-4 md:px-12 text-center bg-yellow min-h-screen flex flex-col justify-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-900 mt-4 lg:mt-2 lg:pb-2 mb-10">
          Our Services
        </h1>

        <div className="mb-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-left"
            >
              <h2 className="text-2xl font-bold mb-2 text-yellow-800">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => openModal(service.samples)}
                  className="flex-1 text-yellow-800 border border-yellow-800 px-4 py-2 rounded-lg text-center hover:bg-yellow-100 transition font-medium"
                >
                  View Samples
                </button>
                <a
                  href="#book"
                  className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-lg text-center hover:bg-yellow-800 transition font-medium"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-5 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-yellow-800">Image Samples</h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-red-500 transition-transform duration-300 transform hover:scale-125 text-3xl"
              >
                &times;
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {selectedImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100"
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