import React from "react";

const About = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/Images/warehouse.jpg')"

      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-9xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          All your procurement and distribution needs in one integrated platform.
          <br />
          It’s easier with <span className="text-orange-400">Ulinkit</span>.
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default About;
