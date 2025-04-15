  import React, { useEffect, useState } from "react";
  import slidesData from "../Utils/slidesData";

  const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = slidesData.length;

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }, [totalSlides]);

    const goToPrevSlide = () => {
      setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
    };

    const goToNextSlide = () => {
      setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
    };

    return (
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-lg">{slide.description}</p>
              {slide.buttonText && slide.buttonLink && (
                <a
                  href={slide.buttonLink}
                  className="inline-block mt-4 bg-[#007d51] text-white px-5 py-2 rounded hover:bg-green-600 transition"
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 !bg-black/50 text-white p-2 rounded-full z-20 hover:bg-black"
        >
          &#10094;
        </button>
        <button
  onClick={goToNextSlide}
  className="absolute top-1/2 right-4 sm:right-6 md:right-8 lg:right-16 transform -translate-y-1/2 !bg-black/50 text-white p-2 rounded-full z-20 hover:bg-black"

>
  &#10095;
</button>

      </section>
    );
  };

  export default HeroSection;
 