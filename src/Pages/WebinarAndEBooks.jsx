import React, { useState, useEffect } from 'react';

const WebinarAndEBooks = () => {
  const [webinars, setWebinars] = useState([]);
  const [ebooks, setEbooks] = useState([]);

  // Fetch webinars and e-books data (mock data in this case)
  useEffect(() => {
    const fetchedWebinars = [
      { id: 1, title: 'How to Build a Successful Startup', date: '2025-04-15', image: '/Images/Blog1.webp', description: 'Learn the key strategies for building a successful startup from the ground up, presented by industry experts. Includes actionable insights and real-life case studies.' },
      { id: 2, title: 'Digital Marketing Trends 2025', date: '2025-04-18', image: '/Images/Blog2.webp', description: 'Explore the latest trends in digital marketing for 2025. Learn about AI integration, social media strategies, and more to keep your brand ahead of the competition.' },
      { id: 3, title: 'Building Scalable Web Applications', date: '2025-04-22', image: '/Images/Blog3.webp', description: 'Understand the architecture behind scalable web applications and how to implement best practices in your next project. From frontend to backend solutions.' }
    ];

    const fetchedEbooks = [
      { id: 1, title: 'The Ultimate Guide to React', downloadLink: '/ebooks/react-guide.pdf', image: '/Images/Blog3.webp', description: 'A comprehensive guide for mastering React.js from basics to advanced concepts. Includes code examples, tips, and best practices for creating efficient React applications.' },
      { id: 2, title: 'Mastering JavaScript', downloadLink: '/ebooks/js-master.pdf', image: '/Images/Blog3.webp', description: 'An in-depth book on JavaScript concepts and best practices. From closures and promises to async/await, this guide covers all the essentials for becoming a JavaScript pro.' },
      { id: 3, title: 'CSS Flexbox & Grid: A Complete Guide', downloadLink: '/ebooks/css-flexgrid-guide.pdf', image: '/Images/Blog3.webp', description: 'A step-by-step guide to mastering CSS Flexbox and Grid systems. This book covers everything you need to know to create modern layouts that work across devices.' }
    ];

    setWebinars(fetchedWebinars);
    setEbooks(fetchedEbooks);
  }, []);

  return (
    <div className="p-8 bg-gray-50 rounded-lg">
      <h2 className="text-3xl text-center mb-8 font-semibold text-gray-800">Webinars & E-Books</h2>

      {/* Webinars Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-700">Upcoming Webinars</h3>
        <p className="text-gray-600 mb-8 text-center">Join us for live webinars where industry experts share their knowledge on cutting-edge topics. Stay ahead of the curve by learning about the latest trends and best practices!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.length > 0 ? (
            webinars.map(webinar => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
<img src={`${webinar.image}`} alt={webinar.title} className="w-full h-56 object-cover" />

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800">{webinar.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{webinar.description}</p>
                  <p className="mt-4 text-sm text-gray-500">Date: {webinar.date}</p>
                  <button className=" mt-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300">
       Register
      </button>
                </div>
              </div>
            ))
          ) : (
            <p>No webinars available at the moment.</p>
          )}
        </div>
      </div>

      {/* E-Books Section */}
    {/* E-Books Section */}
<div>
  <h3 className="text-2xl font-semibold mb-6 text-gray-700">Available E-Books</h3>
  <p className="text-gray-600 mb-8 text-center">Download free e-books to enhance your skills in web development, digital marketing, and more. Learn at your own pace and start your journey toward becoming an expert!</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {ebooks.length > 0 ? (
      ebooks.map(ebook => (
        <div key={ebook.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
          {/* Corrected to use ebook.image */}
          <img src={ebook.image} alt={ebook.title} className="w-full h-56 object-cover" />
          <div className="p-6">
            {/* Corrected to use ebook.title */}
            <h4 className="text-xl font-bold text-gray-800">{ebook.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{ebook.description}</p>
            <a href={ebook.downloadLink} download className="mt-4 text-blue-500 hover:underline font-semibold">Download PDF</a>
          </div>
        </div>
      ))
    ) : (
      <p>No e-books available at the moment.</p>
    )}
  </div>
</div>

    </div>
  );
};

export default WebinarAndEBooks;
