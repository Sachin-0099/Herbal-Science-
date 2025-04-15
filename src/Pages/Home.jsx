import React from 'react'
import SEOHelmet from '../Components/SEO/SeoHelmet'
import slidesData from '../Utils/slidesData'
import HeroSection from '../Components/HeroSection'
import DiscountBannerSection from '../Components/DiscountBannerSection'
import Product from '../Components/Product'
import BannerDivider from '../Components/BannerDivider'
import VideoSection from '../Components/VideoSection'
import Footer from '../Components/Footer'
const dealBanners = [
  { id: 1, image: "/Images/Banner99.jpeg" },
  { id: 2, image: "/Images/Banner199.webp" },
  { id: 3, image: "/Images/Banner499.webp" },
  { id: 4, image: "/Images/Banner299.webp" },
];

const festiveBanners = [
  { id: 1, image: "/Images/Festive1.jpg" },
  { id: 2, image: "/Images/Festive2.jpg" },
  { id: 3, image: "/Images/Festive3.jpg" },
];
const productData = [
  {
    id: 1,
    name: "Ayurvedic Makeup Essentials Kit ...",
    description: "Full Coverage| Nurtures & Repairs | Moisturises",
    price: 307,
    oldPrice: 1535,
    rating: 4.2,
    reviews: 48,
    image: "/Images/Banner99.jpeg",
    hoverImage: "/Images/Banner499.webp",
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
    hoverImage: "/Images/Banner299.webp",
    tag: "NO RETURNS",
    badge: "PRESERVE",
  },
  {
    id: 1,
    name: "Ayurvedic Makeup Essentials Kit ...",
    description: "Full Coverage| Nurtures & Repairs | Moisturises",
    price: 307,
    oldPrice: 1535,
    rating: 4.2,
    reviews: 48,
    image: "/Images/Banner99.jpeg",
    hoverImage: "/Images/Banner499.webp",
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
    hoverImage: "/Images/Banner299.webp",
    tag: "NO RETURNS",
    badge: "PRESERVE",
  },
  
  // more products...
];


const Home = () => {
  const lightningDealsTitle = "Lightning Deals";  // You can change this dynamically
  return (
    
  <>
   <SEOHelmet
        title="Home | Herbal Science"
        description="Welcome to Herbal Science — Discover nature's wellness products handcrafted with care."
      />
       <div>
       <HeroSection slides={slidesData} />
       <DiscountBannerSection title="Shop Our Best Deals" images={dealBanners} />
      
     

 <Product title={lightningDealsTitle} products={productData} />;
 <BannerDivider
  src="/Images/Banner99.jpeg"
  alt="Ayurvedic Product Promotional Banner"
  height="h-96"
  width="w-full"
/>

       <Product title={lightningDealsTitle} products={productData} />;
       <Product title={lightningDealsTitle} products={productData} />;
       <VideoSection/>
       <Product title={lightningDealsTitle} products={productData} />;
       <DiscountBannerSection title="Celebrate the Festive Season" images={dealBanners} />
       <BannerDivider
  src="/Images/Banner99.jpeg"
  alt="Ayurvedic Product Promotional Banner"
  height="h-96"
  width="w-full"
/>

      <div className='mt-20'>
      <BannerDivider
  src="/Images/AwardsBanner.webp"
  alt="Ayurvedic Product Promotional Banner"
  height="h-96"
  width="w-full"
/>

      </div>
      <Footer/>
       
     
      </div>
  </>
  )
}

export default Home
