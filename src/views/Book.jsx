import React, { useState } from "react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    state: '',
    workType: '',
    eventDate: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Booking submitted successfully!');
        // Reset form
        setFormData({ name: '', phone: '', city: '', state: '', workType: '', eventDate: '', details: '' });
      } else {
        alert('Failed to submit booking.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="bg-[#f5f5f0] mb-5 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mt-8 mx-auto bg-[#d3d3c8] shadow-lg rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-yellow-900">Book Now</h1>
          <p className="mt-3 text-lg text-gray-900">
            Fill out the form below to book our services.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mb-5 space-y-6">
          {/* Inputs are updated with value and onChange */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name *</label>
            <input type="text" id="name" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number *</label>
            <input type="tel" id="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500" />
          </div>
          <div>
            <label htmlFor="city" className="block text-lg font-medium text-gray-700">City *</label>
            <input type="text" id="city" required value={formData.city} onChange={handleChange} placeholder="Enter your city" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500" />
          </div>
          <div>
            <label htmlFor="state" className="block text-lg font-medium text-gray-700">State *</label>
            <select id="state" required value={formData.state} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500">
              <option value="">Select your state</option>
              {/* Add all state options here */}
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
            </select>
          </div>
          <div>
            <label htmlFor="workType" className="block text-lg font-medium text-gray-700">Work Type *</label>
            <select id="workType" required value={formData.workType} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500">
              <option value="">Select the type of work</option>
              <option>Wedding Photography</option>
              <option>Engagement / Pre-Wedding</option>
              <option>Birthday Party</option>
              <option>Corporate Event</option>
              <option>Product Photography</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="eventDate" className="block text-lg font-medium text-gray-700">Event Date *</label>
            <input type="date" id="eventDate" required value={formData.eventDate} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500" />
          </div>
          <div>
            <label htmlFor="details" className="block text-lg font-medium text-gray-700">Other Important Details</label>
            <textarea id="details" rows={4} value={formData.details} onChange={handleChange} placeholder="Mention venue, special requirements..." className="mt-1 mb-5 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-yellow-500 focus:border-yellow-500"></textarea>
          </div>
          <button type="submit" className="w-full py-3 px-4 rounded-md shadow-sm text-lg font-medium text-white mb-6 bg-yellow-600 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 transition-colors">
            Submit Booking Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;