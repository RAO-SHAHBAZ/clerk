import React from 'react';

const OurProcess = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300 py-16 px-6 md:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-8">Our Process</h2>
        <p className="text-lg text-gray-700 mb-12">
          We follow a streamlined approach to ensure your vision is brought to life with precision and quality. Here’s how we work:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 - Consultation */}
          <div className="p-8 bg-white bg-opacity-80 rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl text-cyan-500 mb-4">
              <i className="fas fa-comments"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Consultation</h3>
            <p className="text-lg text-gray-600">
              We begin by understanding your unique requirements and goals. Our team listens, discusses, and creates a roadmap for success.
            </p>
          </div>

          {/* Step 2 - Design */}
          <div className="p-8 bg-white bg-opacity-80 rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl text-cyan-500 mb-4">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Design</h3>
            <p className="text-lg text-gray-600">
              Our creative team crafts beautiful, user-friendly designs that meet your needs and reflect your brand identity.
            </p>
          </div>

          {/* Step 3 - Development */}
          <div className="p-8 bg-white bg-opacity-80 rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl text-cyan-500 mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Development</h3>
            <p className="text-lg text-gray-600">
              We build high-quality, scalable software solutions that perform flawlessly and scale with your business.
            </p>
          </div>

          {/* Step 4 - Testing */}
          <div className="p-8 bg-white bg-opacity-80 rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl text-cyan-500 mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Testing</h3>
            <p className="text-lg text-gray-600">
              We ensure everything works perfectly. Our QA team performs thorough testing to identify and fix any issues.
            </p>
          </div>

          {/* Step 5 - Launch */}
          <div className="p-8 bg-white bg-opacity-80 rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl text-cyan-500 mb-4">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Launch</h3>
            <p className="text-lg text-gray-600">
              Finally, we launch your solution into the world. We ensure a smooth deployment and ongoing support for continued success.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-purple-600">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
