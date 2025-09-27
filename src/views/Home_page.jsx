import React from "react";


const Home_page = () => {
  return (
    <>
    
      <br /><br />
      <section
        className="mb-8 bg-[#eeebe2] mt-2 bg-opacity-30 h-screen bg-cover bg-center flex items-center justify-center text-center px-4 lg:mt-11"
        style={{ backgroundImage: "url('/your-background-image.jpg')" }}
      >
        <div className="p-6 md:p-12 rounded-xl max-w-3xl">
          {/* Heading */}
          <h1 className="lg:mt-6 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-700 mb-10 leading-tight">
            Capturing moments today, <br /> creating memories for tomorrow.
          </h1>
          {/* Subtitle */}
          <h3 className="font-body text-base sm:text-lg md:text-xl lg:text-3xl text-yellow-700 mb-8 font-bold">
            Raj Photo Studio – Where every click tells your story
          </h3>

          {/* Button */}
          <a
            href="#book"
            className="bg-yellow-600 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg text-base sm:text-lg md:text-xl lg:text-2xl font-medium hover:bg-yellow-800 transition mt-1 inline-block lg:mb-5 lg:mt-5"
          >
            Book Now
          </a>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
            <div className="text-center lg:mr-12">
              <div className="text-5xl font-bold text-yellow-700">500+</div>
              <div className="text-xl font-medium text-yellow-700">Happy Clients</div>
            </div>

            <div className="text-center lg:mr-12 lg:ml-12">
              <div className="text-5xl font-bold text-yellow-700">15+</div>
              <div className="text-xl font-medium text-yellow-700">Years Experience</div>
            </div>

            <div className="text-center lg:ml-12">
              <div className="text-5xl font-bold text-yellow-700">200+</div>
              <div className="text-xl font-medium text-yellow-700">Projects Done</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_page;
