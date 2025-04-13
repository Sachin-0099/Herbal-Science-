// src/components/HeroSection.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = ({ slides }) => {
  return (
    <section
      className="w-full max-w-screen-2xl mx-auto"
      aria-label="Hero Section Carousel"
    >
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
          <div
            key={index}
            className="relative h-[70vh] sm:h-[80vh] md:h-[90vh]"
          >
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-start p-4 sm:p-10 text-white">
              <div className="max-w-xl mb-6 sm:mb-0">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-lg md:text-xl mb-5 leading-relaxed">
                  {slide.description}
                </p>
                {slide.buttonText && slide.buttonLink && (
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-white text-black text-sm sm:text-base px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
