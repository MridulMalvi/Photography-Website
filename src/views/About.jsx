import React from "react";
import image from "./images/Aboutimage.png"; // Make sure this path is correct

const About = () => {
  const equipments = [
    { name: "📸 DSLR Cameras", details: "High-end Canon & Sony cameras for sharp, detailed shots." },
    { name: "🎥 Video Cameras", details: "4K Ultra HD cinematic quality for events & films." },
    { name: "🚁 Drones", details: "Aerial photography & videography for stunning top views." },
    { name: "🎡 Crane & Gimbals", details: "Smooth cinematic movements with professional stabilizers." },
    { name: "💡 Lighting Kits", details: "Professional studio & outdoor lighting setup." },
    { name: "🎤 Audio Equipment", details: "High-quality sound capture for video shoots." },
  ];

  return (
    <section
      id="about"
      className="pt-20 md:pt-32 px-4 md:px-12 text-center bg-[#eeebe2] min-h-screen flex flex-col justify-center"
    >
      <h1 className="mb-8 text-4xl md:text-5xl font-bold text-yellow-900">
        About Raj Photo Studio
      </h1>

      {/* Image */}
      <div className="mb-8 flex justify-center items-center">
        <img
          src={image}
          alt="Raj Photo Studio"
          className="rounded-xl shadow-lg sm:w-1/2 md:w-1/3 lg:w-2/6"
        />
      </div>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
        At Raj Photo Studio, we believe every moment deserves to be captured beautifully.
        With over 15 years of experience, we specialize in wedding photography, portraits,
        events, and product photography. Our mission is to tell your story through timeless
        photographs.
      </p>

      {/* Why Choose Us */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-2">Professional Team</h2>
          <p className="text-gray-700">
            Experienced photographers who capture your moments perfectly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-2">Customer Satisfaction</h2>
          <p className="text-gray-700">
            Your happiness is our priority, ensuring memorable experiences.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold mb-2">High-Quality Equipment</h2>
          <p className="text-gray-700">
            We use the latest cameras and lenses for stunning results.
          </p>
        </div>
      </div>

      {/* Our Gear */}
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-8">
        Our Gear
      </h2>
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipments.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-yellow-700">{item.name}</h3>
            <p className="text-gray-600 mt-2">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
