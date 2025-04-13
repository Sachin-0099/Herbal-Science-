// src/components/HeroSection.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const HeroSection = ({ slides }) => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        swipeable
        emulateTouch
        className="text-left"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[70vh] sm:h-[80vh] md:h-[90vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-6 sm:p-10 text-white">
  <div className="max-w-2xl mb-8">
    <h1 className="text-3xl sm:text-5xl font-bold mb-4">
      {slide.title}
    </h1>
    <p className="text-md sm:text-lg mb-6">{slide.description}</p>
    {slide.buttonText && (
      <a
        href={slide.buttonLink}
        className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
      >
        {slide.buttonText}
      </a>
    )}
  </div>
</div>

          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
