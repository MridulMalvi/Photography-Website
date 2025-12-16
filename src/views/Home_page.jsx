import React from "react";
import image from "./images/Camera.png"; // Ensure the path is correct

const Home_page = () => {
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="pb-12 min-h-screen flex items-center justify-center sm:pt-5 lg:pt-0 lg:mt-2 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100">
        <div className="p-6 rounded-xl max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center sm:mt-12 lg:mt-10">
            <img
              src={image}
              alt="Camera"
              className="w-64 sm:w-80 lg:w-96 rounded-xl shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="pb-6 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800 lg:mt-12 lg:pt-10 leading-tight">
              Capturing moments today, <br /> creating memories for tomorrow.
            </h1>

            <h3 className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-amber-700 mb-8 font-bold">
              Raj Photo Studio – Where every click tells your story
            </h3>

            {/*
              --- FIX APPLIED HERE ---
              We wrap the button in a div and force it to use flexbox (flex)
              with justification center (justify-center) on screens larger than 'lg'
              to override the parent's 'lg:text-left' alignment,
              while keeping it centered on smaller screens via 'text-center' on the parent div.
            */}
            <div className=" lg:ml-20 pl-16 flex justify-center lg:justify-start">
              <button
                onClick={() => handleNavClick("book")}
                className="bg-amber-500 text-white px-6 sm:px-9 md:px-10 lg:px-12 py-3 sm:py-5 md:py-5 lg:py-6 rounded-lg text-base sm:text-xl md:text-xl lg:text-3xl font-medium hover:bg-amber-600 transition mb-6 shadow-md"
              >
                Book Now
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-12 mt-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-800">500+</div>
                <div className="text-xl font-medium text-amber-700">
                  Happy Clients
                </div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-amber-800">15+</div>
                <div className="text-xl font-medium text-amber-700">
                  Years Experience
                </div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold text-amber-800">200+</div>
                <div className="text-xl font-medium text-amber-700">
                  Projects Done
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_page;