import React from 'react';
import warehouseImg from '../assets/Warehouse.jpeg'; 
import { FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const boardsDir=[{
name: 'Mr. Dhiraj Gupta',
position: 'Chairman of Ulinkit',

image: warehouseImg,
},
{
name: 'Mr. John Doe',
position: 'CEO of Tradeling',

image: warehouseImg,
},
{
name: 'Ms. Jane Smith',
position: 'CTO of Tradeling',

image: warehouseImg,
},
{
name: 'Ms. Jane Smith',
position: 'CTO of Tradeling',

image: warehouseImg,
},
{
name: 'Ms. Jane Smith',
position: 'CTO of Tradeling',

image: warehouseImg,
}]
const timelineData = [
{
  year: '2011',
  title: 'Founded',
  description: 'Started as data mining firm in 2011 providing Global business based data to various clients.',
  image: '/Images/Founded.avif',
},
{
  year: '2013',
  title: 'IT Services',
  description: 'Started developing IT tools & outsourced clients Global business promotion activities and backend proces',
  image: '/Images/It.avif',
},
{
  year: '2014',
  title: 'Milestone Launches',
  description: 'Global Partnered with amazon, for the seller onboarding program with more than 2 lac seller onboard.',
  image: '/Images/Enhancement.avif',
},
{
  year: '2016',
  title: 'Product Assortment',
  description: 'Started Global warehousing business with more than 300 storage facility in Dubai, India and USA.',
  image: 'Images/Product.avif',
},
{
  year: '2017',
  title: 'RFQ & Credit Finance',
  description: 'Introduced RFQ/Negotiations & Credit Finance.',
  image: '/Images/Rfq.webp',
},
{
  year: '2024',
  title: 'Significant Growth',
  description: 'So many registered users with an inventory of over a large million items.',
  image: '/Images/Growth.avif',
},
];
const companies = [
    { name: 'Google', logo: '/Logos/Google.png' },
    { name: 'Amazon', logo: '/Logos/amazon.png' },
    { name: 'Facebook', logo: '/Logos/Facebook.png' },
    { name: 'Apple', logo: '/Logos/apple.png' },
    { name: 'HP', logo: '/Logos/hp.png' },
    { name: 'Samsung', logo: '/Logos/samsung.png' },
    { name: 'Bombay Dyeing', logo: '/Logos/bombay.png' },
    { name: 'Motorolla', logo: '/Logos/motorolla.png' },
    { name: 'Red Bull', logo: '/Logos/redbull.jpg' },
   
  ];
  
const settings = {
infinite: true,
speed: 2000,
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
arrows: false,
pauseOnHover: false,
responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
    }
  }
]
};



function About() {
return (
  <>

<div
  className="relative flex justify-center items-center min-h-screen bg-cover bg-center text-white py-20"
  style={{ backgroundImage: `url(${warehouseImg})` }}
>
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm"></div>

  <div className="relative container mx-auto px-4 lg:px-8 z-10 flex flex-col lg:flex-row justify-between items-center">
    {/* Left Text Section */}
    <div className="max-w-2xl text-center lg:text-left mb-12 lg:mb-0 transition-all duration-700">
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#3770bf] to-[#468ff6] text-transparent bg-clip-text leading-tight">
        All your procurement and distribution needs in one integrated platform.
        <br />
        <span className="text-white">It's easier with Ulinkit.</span>
      </h1>

      <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300">
        Get in touch
      </button>
    </div>

    {/* Right Card Section */}
    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 lg:p-8 hover:shadow-purple-500/30 transition-all duration-500 text-center w-full max-w-sm">
      <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-transparent bg-clip-text">
        <span className="mr-2">♦</span> Ulinkit
      </div>
      <p className="text-sm text-gray-200">MENA's leading wholesale marketplace</p>
      <div className="bg-gray-600 h-6 rounded-b-lg mt-4"></div> {/* Bottom visual bar */}
    </div>
  </div>
</div>
{/* Our Journey */}
<div className="px-4 md:px-20 py-12 bg-white">
  <h2 className="text-4xl font-bold text-center mb-10">Our Journey</h2>

  <div className="relative overflow-x-auto">
    <div className="flex items-start justify-between relative border-t-2 border-gray-300">

      {timelineData.map((item, index) => (
        <div key={index} className="flex flex-col items-center min-w-[220px] mx-4 mt-4">
          {/* Icon */}
          <div className="relative z-10 bg-white p-2 border-4 border-orange-500 rounded-full -mt-6">
            <FaClock className="text-orange-500 text-xl" />
          </div>

          {/* Year & Title */}
          <div className="text-center mt-4">
            <h3 className="text-xl font-bold">{item.year}</h3>
            <p className="text-blue-600">{item.title}</p>
          </div>

          {/* Fixed-Height Card */}
          <div className="bg-white shadow-md border mt-4 p-4 rounded-xl text-center max-w-[250px] h-[250px] flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[120px] object-cover rounded-md mb-3"
            />
            <p className="text-gray-700 text-sm overflow-hidden text-ellipsis line-clamp-4">
              {item.description}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</div>

{/* who we are */}
<div className="w-full flex flex-col lg:flex-row items-stretch justify-center px-4 lg:px-20 py-20 gap-10 ">
  
  {/* Who We Are */}
  <div className="bg-white shadow-lg rounded-2xl p-8 flex-1 hover:scale-105 transition-transform duration-300 group">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-orange-100 text-orange-500 p-3 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-3-3h-4m-4 0H5a3 3 0 00-3 3v2h5m4 0v-6m0 0a4 4 0 00-8 0v6a4 4 0 008 0z" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold">Who We Are</h2>
    </div>
    <p className="text-gray-700 leading-relaxed">
      Ulinkit stands as the MENA region’s leading and most extensive business-to-business marketplace, 
      dedicated to streamlining the purchasing process for both buyers and sellers. 
      We are at the forefront of shaping the B2B landscape, supporting corporations of all sizes in their growth.
    </p>
  </div>

  {/* What We Do */}
  <div className="bg-white shadow-lg rounded-2xl p-8 flex-1 hover:scale-105 transition-transform duration-300 group">
    <div className="flex items-center gap-4 mb-4">
      <div className=" text-blue-500 p-3 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 10h2l1 2h6l1-2h2M9 21V9h6v12M9 3h6v6H9V3z" />
        </svg>
      </div>
      <h2 className="text-2xl font-semibold">What We Do</h2>
    </div>
    <p className="text-gray-700 leading-relaxed">
      We optimise business procurement by connecting international suppliers with MENA region buyers. 
      ULINKIT empowers both buyers and sellers through tailored product offerings and customised tools 
      that improve business efficiency and success.
    </p>
  </div>

</div>

{/* Our Vision */}
<div
  className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center px-6 py-16 text-white"
  style={{ backgroundImage: `url(${warehouseImg})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-0 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl text-center px-4 py-8 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl animate-fadeInUp transition-all duration-700">
    <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#3770bf] to-[#468ff6] text-transparent bg-clip-text">
      Our Vision
    </h2>
    <p className="text-lg leading-relaxed text-gray-200">
      To transform the B2B landscape in the MENA region by creating a unified platform that
      seamlessly connects business buyers and sellers from around the world. Our mission is to
      simplify and streamline the procurement process, empowering businesses to purchase with
      confidence and ease — saving both time and money.
    </p>
  </div>
</div>



  <div className="w-full flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-12 gap-10">
  
  {/* Image Section */}
  <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
    <img
      src={warehouseImg}
      alt="Warehouse"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Text Section */}
  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <p className="text-orange-500 font-semibold mb-2">
   Mr Dhiraj Gupta, Chairman of Ulinkit
    </p>
    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white leading-relaxed">
      "Ulinkit is all about opportunities. We are investing in the future of our people.
      The brilliant ecosystem approach will create layers of growth that build on top of
      the existing economic structures."
    </h2>
  </div>
</div>

<div>
  <h1 className='text-bold justify-center items-center text-center underline'>Boards of Directors</h1>
</div>
<div className="w-full flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-12 gap-10">
  
 


  {/* Text Section */}
  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <p className="text-orange-500 font-semibold mb-2">
   Mr Dhiraj Gupta, Chairman of Ulinkit
    </p>
    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white leading-relaxed">
      "Ulinkit is all about opportunities. We are investing in the future of our people.
      The brilliant ecosystem approach will create layers of growth that build on top of
      the existing economic structures."
    </h2>
  </div>
   {/* Image Section */}
  <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
    <img
      src={warehouseImg}
      alt="Warehouse"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>








<motion.div 
  className="flex justify-center items-center flex-col py-14 px-6 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <motion.h1 
    className="text-4xl font-bold mb-4 text-orange-400"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    Why Ulinkit?
  </motion.h1>

  <motion.p 
    className="text-2xl text-gray-800 max-w-2xl mb-2"
    whileHover={{ scale: 1.02 }}
  >
    We are the MENA region’s leading and most extensive B2B marketplace
  </motion.p>

  <motion.h2 
    className="text-xl font-semibold text-gray-900 mb-2"
    whileHover={{ scale: 1.02 }}
  >
    Everything you need in one B2B integrated platform. It's easier with Tradeling
  </motion.h2>

  <motion.p 
    className="text-base text-gray-700 max-w-xl mb-6"
    whileHover={{ scale: 1.01 }}
  >
    We are committed to resolving the pain points encountered in procurement and supply chain operations.
  </motion.p>

  <motion.button
    className="bg-orange-400 text-white px-6 py-2 rounded-md shadow-lg hover:bg-orange-500 transition transform hover:scale-105 active:scale-95"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    Contact Us
  </motion.button>
</motion.div>
`   <div>

</div>`
<div className="py-10 ">
  <h1 className="text-center text-2xl font-semibold mb-6">As Featured In</h1>
  <Slider {...settings}>
    {companies.map((company, index) => (
      <div key={index} className="flex justify-center items-center px-4">
        <div className=" shadow-md p-4 rounded h-24 w-40 flex justify-center items-center">
          <img
            src={company.logo}
            alt={`Logo of ${company.name}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    ))}
  </Slider>
</div>


  </>
);
}

export default About;