import React from 'react';
import { motion } from 'framer-motion';
import SEOHelmet from '../Components/SEO/SeoHelmet';
import Footer from '../Components/Footer';

const ImageData = [
  {
    id: 1,
    img: "/Images/Banner99.jpeg",
    title: "A Humble Start",
  },
  {
    id: 2,
    img: "/Images/Banner99.jpeg",
    title: "A Humble Start",
  },
  {
    id: 3,
    img: "/Images/Banner99.jpeg",
    title: "A Humble Start",
  },
];

const OurStory = () => {
  return (
    <>
      <SEOHelmet
        title="Our Story | Herbal Science"
        description="Discover the philosophy behind Herbal Science — safe, honest, and effective beauty solutions."
      />

      {/* Hero Story Section */}
      <section
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          backgroundColor: '#fef9f6',
        }}
      >
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            style={{
              fontSize: '2rem',
              color: '#228B22',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            Our Story
          </h1>
        </motion.header>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            maxWidth: '700px',
            width: '90%',
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#444',
            lineHeight: '1.8',
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          <p>
            Herbal Science was founded with the intent to create holistic beauty solutions that are safe,
            honest and effective.
          </p>
          <br />
          <p>
            We pair the best aspects of traditional ayurvedic practices with learning from contemporary
            knowledge, to offer beauty solutions that work on multiple levels.
          </p>
          <br />
          <p>
            We believe beauty needs to come full circle. Our formulations nourish, preserve or protect –
            a 360° approach that makes sure our solutions are long-lasting.
          </p>
          <br />
          <p>
            We promise beauty that is wholesome, yet we have never wavered from our original promise:
            beauty solutions that work.
          </p>
        </motion.article>
      </section>

      {/* Story Banner Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 bg-[#fef9f6]">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/Images/Banner99.jpeg"
            alt="Just Herbs Founder Story"
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>

        {/* Text */}
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center items-start gap-4 max-w-xl text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-[#228B22]">A Humble Start</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Just Herbs journey began when my mother, Dr Neena Chopra, an award-winning biochemist, 
            started mixing herbs, plants and flowers to make lotions and potions at our family-owned garden lab 
            in Mohali in northern India.
          </p>
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="text-[#864f43] underline font-semibold transition duration-300"
          >
            Read More
          </motion.a>
        </motion.article>
      </section>

      {/* Timeline/Highlight Section */}
      <section className="flex flex-wrap justify-center items-center gap-8 p-8 bg-[#fef9f6]">
        {ImageData.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center text-center max-w-xs p-4 rounded-xl duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-[#228B22]">{item.title}</h3>
          </motion.article>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default OurStory;
