import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    initials: 'IU',
    quote:
      "Joining Tradeling has been a rewarding experience for my career in finance. The company's commitment to excellence extends beyond products and services to the health and well-being of its employees. Tradeling's culture promotes a sense of ownership and responsibility, which has empowered me to contribute meaningfully to the company's success. It's not just about numbers; it's about being part of a team that plays a crucial role in driving Tradeling's overall success.",
    name: 'Ivy Umadhay',
    designation: 'Treasury Manager',
    company: 'Tradeling',
  },
  {
    initials: 'JD',
    quote:
      "Tradeling is an amazing place to work! The opportunities for growth and learning are immense. I feel valued and supported by my colleagues and the management. The work is challenging but also very rewarding. I highly recommend Tradeling to anyone looking for a fulfilling career.",
    name: 'John Doe',
    designation: 'Senior Analyst',
    company: 'Tradeling',
  },
  {
    initials: 'AS',
    quote:
      "I've been with Tradeling for several years, and it's been a fantastic journey. The company truly cares about its employees and fosters a collaborative environment. I appreciate the focus on innovation and the chance to work on impactful projects. Tradeling is more than just a job; it's a community.",
    name: 'Alice Smith',
    designation: 'Marketing Specialist',
    company: 'Tradeling',
  },
  // Add more testimonial objects here
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-xl w-full">
      <div className="bg-blue-700 text-white w-15 h-15 rounded-full flex items-center justify-center text-xl font-bold mb-5 mx-auto">
        {testimonial.initials}
      </div>
      <div className="text-gray-700 leading-relaxed mb-4">{testimonial.quote}</div>
      <div className="text-gray-800 font-semibold mb-1">{testimonial.name}, {testimonial.designation}</div>
      <div className="text-gray-600 text-sm">{testimonial.company}</div>
    </div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">What our employees say?</h2>
      <div className="carousel">
        <TestimonialCard testimonial={testimonials[currentIndex]} />
      </div>
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-blue-700' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;