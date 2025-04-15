import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Hospitality = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    hotelName: '',
    contactInfo: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a network request (e.g., form submission)
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Helmet>
        <title>Hotel Amenities | Just Herbs</title>
        <meta
          name="description"
          content="Explore safe, eco-friendly hotel amenities by Just Herbs. Customizable toiletries with natural ingredients for a luxurious hotel experience."
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-center text-green-900 mb-6">Herbal Science™ Hotel Amenities</h1>
      <p className="text-lg text-gray-600 mb-4">
        Hospitality is all about making your guests feel safe and cared for.
        Just Herbs™ hotel amenities are gentle, safe, and free from harsh
        artificial perfumes and chemicals. They exude an exotic charm that
        lends freshness, elegance, and eco-friendly purity to your hotel.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Customize blends and packaging with your hotel logo. Place your order
        by filling out the form or contact us at{' '}
        <a href="mailto:info@justherbs.in" className="text-blue-600">herbalscience28@gmail.com</a>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="hotel-name" className="block text-lg font-medium text-gray-700">Hotel Name:</label>
          <input
            type="text"
            id="hotel-name"
            value={formData.hotelName}
            onChange={handleInputChange}
            placeholder="Enter your hotel name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="contact-info" className="block text-lg font-medium text-gray-700">Contact Info:</label>
          <input
            type="email"
            id="contact-info"
            value={formData.contactInfo}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your inquiry details"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-3 text-lg font-semibold text-white rounded-lg 
                        ${isLoading ? 'bg-gray-400 cursor-not-allowed' : '!bg-[#228b22] hover:bg-blue-700'}`}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {formSubmitted && !isLoading && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg">
          <p>Thank you for reaching out! We will get back to you shortly.</p>
        </div>
      )}

      {isLoading && !formSubmitted && (
        <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg">
          <p>Please wait, we are processing your request...</p>
        </div>
      )}
    </div>
  );
};

export default Hospitality;
