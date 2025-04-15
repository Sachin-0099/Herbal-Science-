import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ProductCard Component to make it reusable
const ProductCard = ({ product }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer flex flex-col justify-between h-full text-center relative shadow-lg rounded-lg bg-white p-4 transition-transform duration-300 hover:scale-105 "
      itemScope
      itemType="http://schema.org/Product"
    >
      <div>
        {/* Top Badge */}
        <div className="absolute top-0 left-0 px-4">
          {product.badge === "360° beauty" ? (
            <div className="flex flex-col items-start ml-[-10px] mt-[10px] rotate-[-90deg] text-[#228B22] font-medium">
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
        <div className="absolute top-0 right-0 bg-[#228B22] text-white text-xs font-bold px-2 py-1 rounded-sm">
          {product.tag}
        </div>

        {/* Image with <figure> */}
        <figure
          onMouseEnter={() => setHoveredImage(product.id)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <img
            src={
              hoveredImage === product.id ? product.hoverImage : product.image
            }
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
        <p className="text-sm text-[#228B22]" itemProp="description">
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
      </div>

      {/* Button */}
      <button className="!bg-[#228B22] text-white px-4 py-3 mt-4 w-full">
        ADD TO CART
      </button>
    </article>
  );
};

// Main Product Component
const Product = ({ title, products = [] }) => {
  return (
    <section className="px-10 py-4" aria-label="Lightning Deals Section">
      {/* Dynamic Title */}
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>

      <div className="relative">
        {Array.isArray(products) && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="h-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Product;
