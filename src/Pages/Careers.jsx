import React from 'react'
import warehouseImg from '../assets/Warehouse.jpeg'; 
import { FaCalendarAlt, FaGlobe, FaUsers } from 'react-icons/fa';
import { GiTalk } from 'react-icons/gi'; // for "languages spoken"
import TestimonialCarousel from '../Components/Testimonials';
import FAQsSection from '../Components/FAQs';
const Data = [
    {
      id: 1,
      icon: <FaCalendarAlt className="text-orange-500 text-4xl" />,
      numbersData: '14',
      title: 'Years in business',
    },
    {
      id: 2,
      icon: <FaGlobe className="text-orange-500 text-4xl" />,
      numbersData: '33',
      title: 'Nationalities',
    },
    {
      id: 3,
      icon: <GiTalk className="text-orange-500 text-4xl" />,
      numbersData: '47',
      title: 'Languages spoken',
    },
    {
      id: 4,
      icon: <FaUsers className="text-orange-500 text-4xl" />,
      numbersData: '200+',
      title: 'Talent working here',
    },
  ];
  const ImgData=[{
    id: 1,
    img: <img src={warehouseImg} alt="Warehouse" className="rounded-lg shadow-lg w-full h-auto" />,
  },
  {
    id: 1,
    img: <img src={warehouseImg} alt="Warehouse" className="rounded-lg shadow-lg w-full h-auto" />,
  },
  {
    id: 1,
    img: <img src={warehouseImg} alt="Warehouse" className="rounded-lg shadow-lg w-full h-auto" />,
  },
  {
    id: 1,
    img: <img src={warehouseImg} alt="Warehouse" className="rounded-lg shadow-lg w-full h-auto" />,
  },]


const Careers = () => {
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
           <div className="bg-gray-100 py-12 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left - Images */}
      <div className="relative w-full max-w-lg">
        <img
          src="/Images/warehouse.avif"         alt="Office Building"
          className="rounded-lg shadow-lg w-full h-auto"
        />
        <img
          src={warehouseImg}
          alt="Team Work"
          className="absolute top-1/2 left-1/2 w-[80%] transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl"
        />
      </div>

      {/* Right - Text */}
      <div className="max-w-xl">
        <img
          src="Images/logo2.png"
          alt="Tradeling Logo"
          className="mb-4 w-40 h-auto"
        />
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Ulinkit stands as the MENA region's leading and most extensive
          business-to-business eMarketplace, dedicated to streamlining the
          purchasing process for both buyers and sellers.
        </h2>
        <p className="text-gray-600">
          Through our technology, comprehensive ecosystem, financial solutions,
          and skilled workforce, we facilitate international trade between the
          Middle East and the rest of the world, supporting the growth of SMEs
          in their business aspirations.
        </p>
      </div>
    </div>
    <div className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {Data.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="mb-2">{item.icon}</div>
            <h3 className="text-3xl font-semibold text-gray-800">{item.numbersData}</h3>
            <p className="text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>
    </div>

    <section className="py-16 px-4 lg:px-20 bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Putting our people first while ensuring our culture is grounded in diversity and where
          integrity is pivotal, will mean we are driving individual and community excellence and
          ensuring our customer is at the heart of everything that we do!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {ImgData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{item.img}</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">{item.numbersData}</h3>
            <p className="text-gray-500 text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </section>

    <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-center py-16 bg-orange-100 px-4 lg:px-20">
  {/* Left Section */}
  <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-center lg:text-left mb-10 lg:mb-0">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Become a part of Ulinkit</h1>
    <p className="text-gray-700 text-lg leading-relaxed">
      Haven't come across the role you desire? Don't hesitate to share your resume with us anyway! 
      We're in search of talents like yours.
    </p>
  </div>

  {/* Right Section - Circular Image */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src="/Images/warehouse.avif"
        alt="Warehouse"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
<div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-center py-16 bg-orange-100 px-4 lg:px-20">
  

  {/* Right Section - Images Side by Side */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <div className="flex gap-8">
      {/* Circular Image */}
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src="/Images/warehouse.avif"
          alt="Warehouse"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Diamond-shaped Image */}
      <div className="w-64 h-64 overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out rounded-xl">
        <img
          src="/Images/warehouse.avif"
          alt="Warehouse"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  {/* Left Section */}
  <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-center lg:text-left mb-10 lg:mb-0">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Culture and environment</h1>
    <p className="text-gray-700 text-lg leading-relaxed">
      A detailed look into our work environment, how we operate, and what makes our company so unique.
    </p>
    <button className="text-white mt-5 bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
      Learn More
    </button>
  </div>
</div>
<TestimonialCarousel/>
<FAQsSection/>




    </>
  )
}

export default Careers
