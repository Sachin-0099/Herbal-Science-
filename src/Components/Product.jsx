import React from "react";
import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    id: 1,
    name: "Ayurvedic Makeup Essentials Kit ...",
    description: "Full Coverage| Nurtures & Repairs | Moisturises",
    price: 307,
    oldPrice: 1535,
    rating: 4.2,
    reviews: 48,
    image: "/Images/Banner99.jpeg",
    tag: "NO RETURNS",
    badge: "360° beauty",
  },
  {
    id: 2,
    name: "Advanced Ayurvedic Pimple Treatm...",
    description: "Fights Acne | Ideal For Stubborn Acne",
    price: 115,
    oldPrice: 575,
    rating: 4.2,
    reviews: 48,
    image: "/Images/Banner499.webp",
    tag: "NO RETURNS",
    badge: "PRESERVE",
  },
  {
    id: 3,
    name: "Malabar Lemongrass Body Wash - 2...",
    description: "Exfoliate & Polishes | Uplifts",
    price: 29,
    oldPrice: 145,
    rating: 4.5,
    reviews: 90,
    image: "/Images/Banner199.webp",
    tag: "NO RETURNS",
    badge: "PROTECT",
  },
  {
    id: 4,
    name: "Dandruff Control Ayurvedic Soya ...",
    description: "Controls Dandruff Build-up| Non-drying",
    price: 29,
    oldPrice: 105,
    rating: 4.5,
    reviews: 686,
    image: "/Images/Banner299.webp",
    tag: "NO RETURNS",
    badge: "PROTECT",
  },
];

const Product = () => {
  return (
    <section className="px-10 py-12" aria-label="Lightning Deals Section">
      <h2 className="text-3xl font-bold text-center mb-10">LIGHTNING DEALS</h2>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ProductData.map((product) => (
            <article
              key={product.id}
              className="text-center relative"
              itemScope
              itemType="http://schema.org/Product"
            >
              {/* Top Badge */}
              <div className="absolute top-0 left-0">
                {product.badge === "360° beauty" ? (
                  <div className="flex flex-col items-start ml-[-10px] mt-[10px] rotate-[-90deg] text-[#814f3b] font-medium">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-[10px] tracking-wide mt-1">
                      {product.badge}
                    </span>
                  </div>
                ) : (
                  <div className="rotate-[-90deg] absolute top-[10px] left-[-40px] text-[#814f3b] font-medium text-sm">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Tag */}
              <div className="absolute top-0 right-0 bg-[#814f3b] text-white text-xs font-bold px-2 py-1 rounded-sm">
                {product.tag}
              </div>

              {/* Image with <figure> */}
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto h-[160px] object-contain"
                  itemProp="image"
                />
              </figure>

              {/* Name */}
              <h3 className="text-[16px] font-semibold mt-2" itemProp="name">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#814f3b]" itemProp="description">
                {product.description}
              </p>

              {/* Rating */}
              <div
                className="flex justify-center items-center gap-1 text-sm mt-1"
                itemProp="aggregateRating"
                itemScope
                itemType="http://schema.org/AggregateRating"
              >
                <FaStar className="text-yellow-500" />
                <span itemProp="ratingValue">{product.rating}</span>
                <span>✅</span>
                <span className="text-gray-600">
                  <span itemProp="reviewCount">{product.reviews}</span> reviews
                </span>
              </div>

              {/* Price */}
              <div className="mt-1">
                <span
                  className="font-bold text-[16px]"
                  itemProp="offers"
                  itemScope
                  itemType="http://schema.org/Offer"
                >
                  MRP: ₹<span itemProp="price">{product.price.toFixed(2)}</span>
                  <meta itemProp="priceCurrency" content="INR" />
                </span>
                <span className="line-through text-gray-400 text-sm ml-1">
                  ₹{product.oldPrice.toFixed(2)}
                </span>
              </div>

              {/* Button */}
              <button className="!bg-[#814f3b] text-white px-4 py-8 mt-3 w-full">
                ADD TO CART
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
