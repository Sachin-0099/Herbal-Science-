import React from "react";

const DiscountBannerSection = ({ title = "Shop Our Best Deals", images = [] }) => {
  return (
    <section
      className="w-full max-w-screen-2xl mx-auto px-6 md:px-10 py-10"
      role="region"
      aria-label={title}
    >
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        {images.length > 0 ? (
          images.map((image) => (
            <img
              key={image.id}
              src={image.image}
              alt={image.alt || `Discount Banner ${image.id}`}
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 shadow-md object-cover"
              loading="lazy"
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No images to display</p>
        )}
      </div>
    </section>
  );
};

export default DiscountBannerSection;
