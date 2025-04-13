import React from 'react'

const images = [
  {
    id: 1,
    image: "/Images/Banner99.jpeg",
  },
  {
    id: 2,
    image: "/Images/Banner199.webp",
  },
  {
    id: 3,
    image: "/Images/Banner499.webp",
  },
  {
    id: 4,
    image: "/Images/Banner299.webp",
  },
];

const DiscountBannerSection = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-20 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Shop Our Best Deals</h1>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt="Discount Banner"
            className="w-full max-w-sm lg:w-1/4  shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default DiscountBannerSection;
