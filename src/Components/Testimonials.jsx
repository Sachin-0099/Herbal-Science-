import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    initials: 'IU',
    quote:
      "Joining Ulinkit has been a rewarding experience for my career in finance. The company's commitment to excellence extends beyond products and services to the health and well-being of its employees.",
    name: 'Ivy Umadhay',
    designation: 'Treasury Manager',
    company: 'Ulinkit',
  },
  {
    initials: 'JD',
    quote:
      "Ulinkit is an amazing place to work! The opportunities for growth and learning are immense. I feel valued and supported by my colleagues and the management.",
    name: 'John Doe',
    designation: 'Senior Analyst',
    company: 'Ulinkit',
  },
  {
    initials: 'AS',
    quote:
      "I've been with Ulinkit for several years, and it's been a fantastic journey. The company truly cares about its employees and fosters a collaborative environment.",
    name: 'Alice Smith',
    designation: 'Marketing Specialist',
    company: 'Ulinkit',
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-xl shadow-md p-8 text-center w-full max-w-xl mx-auto transition-all duration-500 ease-in-out">
    <div className="bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-5 mx-auto">
      {testimonial.initials}
    </div>
    <p className="text-gray-700 leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
    <div className="text-gray-900 font-semibold">{testimonial.name}</div>
    <div className="text-gray-600 text-sm">
      {testimonial.designation}, {testimonial.company}
    </div>
  </div>
);

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

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        What our employees say?
      </h2>

      <div className="relative w-full max-w-2xl flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className=" !bg-white absolute left-[-40px] md:left-[-60px] text-3xl text-gray-600 hover:text-blue-700 z-10"
        >
          &#8592;
        </button>

        {/* Carousel Wrapper */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute  !bg-white right-[-40px] md:right-[-60px] text-3xl text-gray-600 hover:text-blue-700 z-10"
        >
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all !bg-white ${
              currentIndex === index ? 'bg-blue-700 scale-110' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
