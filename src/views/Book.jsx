import React, { useState } from "react";
import VerificationModal from "../component/VerificationModal";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    state: "",
    workType: "",
    eventDate: "",
    details: "",
  });

  const [showVerification, setShowVerification] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.city ||
      !formData.state ||
      !formData.workType ||
      !formData.eventDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setShowVerification(true);
  };

  const handleVerificationSuccess = async (verifiedPhone) => {
    setShowVerification(false);

    // Update phone number with the verified one before submission
    const finalData = { ...formData, phone: verifiedPhone };
    setFormData(finalData);

    try {
      const response = await fetch("http://backend:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });
      if (response.ok) {
        alert("Booking submitted successfully!");
        // Reset the form data after successful submission
        setFormData({
          name: "",
          phone: "",
          city: "",
          state: "",
          workType: "",
          eventDate: "",
          details: "",
        });
      } else {
        alert("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while connecting to the server.");
    }
  };

  return (
    <>
      <div className="min-h-screen pb-20 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-50 via-amber-50 to-yellow-100">
        
        <div className="max-w-3xl mt-8 mx-auto bg-white border border-amber-300 shadow-2xl rounded-xl p-8 sm:p-10">
          <div className="text-center mb-10">
            {/* Header font color is darker for better contrast (amber-800) */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-800 tracking-tight">
              Book Our Services
            </h1>
            {/* Subtext color is also darker (amber-700) */}
            <p className="mt-4 text-lg text-amber-700">
              Tell us about your event and we'll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-8">
            
            {/* Input Field Styling Block */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-amber-800 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  // Updated input style: visible border (amber-300), darker text (amber-900)
                  className="mt-1 block w-full border border-amber-300 rounded-lg shadow-sm p-3 bg-amber-50 text-amber-900 placeholder:text-amber-500 focus:ring-amber-600 focus:border-amber-600 transition duration-150 ease-in-out"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-amber-800 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  // Updated input style: visible border (amber-300), darker text (amber-900)
                  className="mt-1 block w-full border border-amber-300 rounded-lg shadow-sm p-3 bg-amber-50 text-amber-900 placeholder:text-amber-500 focus:ring-amber-600 focus:border-amber-600 transition duration-150 ease-in-out"
                />
              </div>

              {/* City Field */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-bold text-amber-800 mb-1"
                >
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  // Updated input style: visible border (amber-300), darker text (amber-900)
                  className="mt-1 block w-full border border-amber-300 rounded-lg shadow-sm p-3 bg-amber-50 text-amber-900 placeholder:text-amber-500 focus:ring-amber-600 focus:border-amber-600 transition duration-150 ease-in-out"
                />
              </div>

              {/* State Field */}
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-bold text-amber-800 mb-1"
                >
                  State *
                </label>
                <select
                  id="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  // Updated input style: visible border (amber-300), darker text (amber-900)
                  className="mt-1 block w-full border border-amber-300 rounded-lg shadow-sm p-3 bg-amber-50 text-amber-900 focus:ring-amber-600 focus:border-amber-600 transition duration-150 ease-in-out"
                >
                  <option value="">Select your state</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Work Type Field */}
              <div>
                <label
                  htmlFor="workType"
                  className="block text-sm font-bold text-amber-800 mb-1"
                >
                  Work Type *
                </label>
                <select
                  id="workType"
                  required
                  value={formData.workType}
                  onChange={handleChange}
                  // Updated input style: visible border (amber-300), darker text (amber-900)
                  className="mt-1 block w-full border border-amber-300 rounded-lg shadow-sm p-3 bg-amber-50 text-amber-900 focus:ring-amber-600 focus:border-amber-600 transition duration-150 ease-in-out"
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

              {/* Event Date Field */}
              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-bold text-amber-800 mb-1"
                >
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-amber-300 rounded-lg shadow-sm p-3 bg-amber-50 text-amber-900 focus:ring-amber-600 focus:border-amber-600 transition duration-150 ease-in-out"
                />
              </div>
            </div>

       
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-bold text-amber-800 mb-1"
              >
                Other Important Details
              </label>
              <textarea
                id="details"
                rows={4}
                value={formData.details}
                onChange={handleChange}
                placeholder="Mention venue, special requirements, expected dates if flexible..."
                // Updated textarea style: visible border (amber-300), darker text (amber-900)
                className="mt-1 block w-full border border-amber-300 rounded-lg shadow-sm p-3 bg-amber-50 text-amber-900 placeholder:text-amber-500 focus:ring-amber-600 focus:border-amber-600 transition duration-150 ease-in-out"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-4 rounded-lg shadow-lg text-xl font-semibold
              text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200 ease-in-out"
            >
              Verify & Submit Booking Request
            </button>
          </form>
        </div>
      </div>

      {/* Verification Modal */}
      {showVerification && (
        <VerificationModal
          onClose={() => setShowVerification(false)}
          onVerify={handleVerificationSuccess}
          initialPhone={formData.phone}
        />
      )}
    </>
  );
};

export default BookNow;