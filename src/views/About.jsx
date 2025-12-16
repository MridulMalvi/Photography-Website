import React from "react";
import image from "./images/Aboutimage.png"; // Make sure this path is correct

const About = () => {
  const equipments = [
    {
      name: "📸 DSLR Cameras",
      details: "High-end Canon & Sony cameras for sharp, detailed shots.",
    },
    {
      name: "🎥 Video Cameras",
      details: "4K Ultra HD cinematic quality for events & films.",
    },
    {
      name: "🚁 Drones",
      details: "Aerial photography & videography for stunning top views.",
    },
    {
      name: "🎡 Crane & Gimbals",
      details: "Smooth cinematic movements with professional stabilizers.",
    },
    {
      name: "💡 Lighting Kits",
      details: "Professional studio & outdoor lighting setup.",
    },
    {
      name: "🎤 Audio Equipment",
      details: "High-quality sound capture for video shoots.",
    },
  ];

  return (
    <section
      className="pt-24 md:pt-32 px-4 md:px-12 text-center min-h-screen flex flex-col justify-center bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100"
    >
      <h1 className="mb-8 text-4xl md:text-5xl font-bold text-amber-900">
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
      <p className="text-lg md:text-xl text-amber-800 mb-12 max-w-3xl mx-auto">
        At Raj Photo Studio, every moment is treated as a story worth preserving.
        With over 15 years of experience, we specialize in wedding photography,
        portraits, events, and product photography, delivering timeless visuals.
      </p>

      {/* Why Choose Us */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/95 border border-amber-100 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition">
          <h2 className="text-2xl font-bold mb-2 text-amber-900">
            Professional Team
          </h2>
          <p className="text-amber-700">
            Experienced photographers who capture your moments with care and
            creativity.
          </p>
        </div>
        <div className="bg-white/95 border border-amber-100 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition">
          <h2 className="text-2xl font-bold mb-2 text-amber-900">
            Customer Satisfaction
          </h2>
          <p className="text-amber-700">
            Friendly service, flexible packages, and a focus on your happiness.
          </p>
        </div>
        <div className="bg-white/95 border border-amber-100 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition">
          <h2 className="text-2xl font-bold mb-2 text-amber-900">
            High-Quality Equipment
          </h2>
          <p className="text-amber-700">
            Premium cameras, lenses, and lighting for crisp, vibrant results.
          </p>
        </div>
      </div>

      {/* Our Gear */}
      <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
        Our Gear
      </h2>
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {equipments.map((item, index) => (
          <div
            key={index}
            className="bg-amber-50 border border-amber-100 p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold text-amber-900">
              {item.name}
            </h3>
            <p className="text-amber-700 mt-2">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
