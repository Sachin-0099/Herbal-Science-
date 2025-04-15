import React from 'react';
import SEOHelmet from '../Components/SEO/SeoHelmet';

const Data = [
  {
    id: 1,
    img: '/Images/Banner99.jpeg',
    title: "Father’s Day Gift Ideas for all Super Dads!",
    description: "Let’s be honest, even thinking about what to gift our father confuses us! Why, you ask? Because they always care about us and do not... read more",
  },
  {
    id: 2,
    img: '/Images/Banner99.jpeg',
    title: "Father’s Day Gift Ideas for all Super Dads!",
    description: "Let’s be honest, even thinking about what to gift our father confuses us! Why, you ask? Because they always care about us and do not... read more",
  },
  {
    id: 3,
    img: '/Images/Banner99.jpeg',
    title: "Father’s Day Gift Ideas for all Super Dads!",
    description: "Let’s be honest, even thinking about what to gift our father confuses us! Why, you ask? Because they always care about us and do not... read more",
  },
  {
    id: 4,
    img: '/Images/Banner99.jpeg',
    title: "Father’s Day Gift Ideas for all Super Dads!",
    description: "Let’s be honest, even thinking about what to gift our father confuses us! Why, you ask? Because they always care about us and do not... read more",
  }
];

const HSBlog = () => {
  return (
    <>
      <SEOHelmet
        title="Refund Policy | Herbal Science"
        description="Explore Herbal Science's Refund Policy, including details on eligibility, timelines for refunds, and how to request a return or exchange."
      />
      <div className="blog-container">
        <h1 className="text-2xl font-bold my-8 flex justify-center text-green-900 underline">The HS Blog - Herbal Science Official Blog</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Data.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <a href="#" className="text-blue-500 mt-2 inline-block">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HSBlog;
