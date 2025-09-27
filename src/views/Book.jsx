import React from "react";

const BookNow = () => {
  return (
    <div className="bg-[#f5f5f0] mb-5 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mt-8 mx-auto bg-[#d3d3c8] shadow-lg rounded-lg p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-yellow-900">Book Now</h1>
          <p className="mt-3 text-lg text-gray-900">
            Fill out the form below to book our services and we’ll get in touch with you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="mb-5 space-y-6 ">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Enter your full name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              placeholder="+91 XXXXX XXXXX"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-lg font-medium text-gray-700">
              City *
            </label>
            <input
              type="text"
              id="city"
              required
              placeholder="Enter your city"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-lg font-medium text-gray-700">
              State *
            </label>
            <select
              id="state"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="">Select your state</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
              <option>Andaman and Nicobar Islands</option>
              <option>Chandigarh</option>
              <option>Dadra and Nagar Haveli and Daman & Diu</option>
              <option>Delhi</option>
              <option>Lakshadweep</option>
              <option>Puducherry</option>
              <option>Ladakh</option>
              <option>Jammu and Kashmir</option>
            </select>
          </div>

          {/* Work Type */}
          <div>
            <label htmlFor="work" className="block text-lg font-medium text-gray-700">
              Work Type *
            </label>
            <select
              id="work"
              required
              className="mt-1  block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="">Select the type of work</option>
              <option>Wedding Photography</option>
              <option>Engagement / Pre-Wedding</option>
              <option>Birthday Party</option>
              <option>Corporate Event</option>
              <option>Product Photography</option>
              <option>Other</option>
            </select>
          </div>

          {/* Event Date */}
          <div>
            <label htmlFor="eventDate" className="block text-lg font-medium text-gray-700">
              Event Date *
            </label>
            <input
              type="date"
              id="eventDate"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Other Details */}
          <div>
            <label htmlFor="details" className="block text-lg font-medium text-gray-700">
              Other Important Details
            </label>
            <textarea
              id="details"
              rows={4}
              placeholder="Mention venue, special requirements..."
              className="mt-1 mb-5 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md shadow-sm text-lg font-medium 
            text-white mb-6 bg-yellow-600 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 transition-colors"
          >
            Submit Booking Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
