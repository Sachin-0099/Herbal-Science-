import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar, FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProductDetailPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleAddToCart = () => {
    console.log('Added to cart', product, quantity);
  };

  const handleBuyNow = () => {
    console.log('Buying now', product);
  };

  const handleQuantityChange = (type) => {
    if (type === 'inc') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'dec' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <FaStar key={i} className="text-yellow-500" />
          ) : (
            <FaRegStar key={i} className="text-gray-400" />
          )
        )}
      </div>
    );
  };

  return (
    <motion.div
      className="product-detail-page p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image Gallery */}
        <div className="product-images flex flex-col gap-4">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={selectedImage || product.image} // Fallback to main image if no thumbnail is selected
            alt={product.name}
            className="w-full h-auto object-contain rounded-xl shadow-md"
          />

          {/* Ensure product.images exists and is not empty */}
{product.images && Array.isArray(product.images) && product.images.length > 0 ? (
  <div className="product-thumbnail-gallery flex gap-4 mt-4">
    {product.images.map((image, index) => (
      <motion.img
        key={index}
        src={image}
        alt={`product-thumbnail-${index}`}
        className="w-16 h-16 object-cover rounded-md cursor-pointer transition-all duration-300 hover:scale-105"
        onClick={() => setSelectedImage(image)}
      />
    ))}
  </div>
) : (
  <p>No additional images available</p> // Fallback message if no images are available
)}
</div>

        {/* Product Info */}
        <div className="product-info space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            {renderStars(Math.floor(product.rating))}
            <span className="text-sm text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 text-2xl font-semibold text-gray-800">
            ₹{product.price.toFixed(2)}{' '}
            <span className="text-gray-400 text-lg line-through ml-2">
              ₹{product.oldPrice.toFixed(2)}
            </span>
          </div>

          {/* Quantity Control */}
          <div className="flex items-center gap-3 mt-4">
            <label className="font-medium">Quantity:</label>
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() => handleQuantityChange('dec')}
                className="px-3 py-1 !bg-gray-100 hover:bg-gray-200 text-xl"
              >
                <FaMinus />
              </button>
              <input
                type="number"
                value={quantity}
                min="1"
                readOnly
                className="w-12 text-center border-l border-r"
              />
              <button
                onClick={() => handleQuantityChange('inc')}
                className="px-3 py-1 !bg-gray-100 hover:bg-gray-200 text-xl"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <div>
            <label className="block mt-4">Enter Pincode:</label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter your pincode"
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button
              onClick={handleAddToCart}
              disabled={!pincode}
              className={`py-3 px-6 w-full rounded-md transition duration-300 ${
                !pincode
                  ? '!bg-gray-300 cursor-not-allowed'
                  : '!bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              disabled={!pincode}
              className={`py-3 px-6 w-full rounded-md transition duration-300 ${
                !pincode
                  ? '!bg-gray-300 cursor-not-allowed'
                  : '!bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
