import React from 'react';

const ServiceSection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-teal-100 to-purple-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-700 mb-12 animate__animated animate__fadeIn animate__delay-1s">
          Our Premium Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Service Card 1: Web Development */}
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-6 transform hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-lg hover:shadow-xl hover:translate-y-4 ease-in-out animate__animated animate__fadeIn animate__delay-2s">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto animate__animated animate__bounceIn" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Web Development</h3>
            <p className="text-gray-200 mb-6">Modern, responsive websites designed to elevate your business online.</p>
            <ul className="text-gray-200 mb-9">
              <li>Responsive Design</li>
              <li>SEO Optimization</li>
              <li>Fast Loading Speed</li>
            </ul>
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-purple-600">
              Start Now
            </a>
          </div>

          {/* Service Card 2: Mobile App Development */}
          <div className="bg-gradient-to-r from-purple-300 via-cyan-500 to-blue-700 text-white rounded-lg p-6 transform hover:scale-125 hover:rotate-6 transition-all duration-500 shadow-lg hover:shadow-xl hover:translate-y-4 ease-in-out animate__animated animate__fadeIn animate__delay-3s">
            <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto animate__animated animate__bounceIn" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Mobile App Development</h3>
            <p className="text-gray-200 mb-6">Beautiful and intuitive mobile apps for iOS and Android.</p>
            <ul className="text-gray-200 mb-9">
              <li>Cross-platform Development</li>
              <li>Custom Features</li>
              <li>Fast & Secure</li>
            </ul>
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-purple-600">
              Start Now
            </a>
          </div>

          {/* Service Card 3: Custom Software Solutions */}
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-6 transform hover:scale-150 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-xl hover:translate-y-6 ease-in-out animate__animated animate__fadeIn animate__delay-4s">
            <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto animate__animated animate__bounceIn" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Custom Software Solutions</h3>
            <p className="text-gray-200 mb-6">Tailored software solutions to meet your specific business needs.</p>
            <ul className="text-gray-200 mb-9">
              <li>ERP Systems</li>
              <li>CRM Solutions</li>
              <li>Business Automation</li>
            </ul>
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-purple-600">
              Start Now
            </a>
          </div>

          {/* Service Card 4: Cloud Services */}
          <div className="bg-gradient-to-r from-purple-300 via-cyan-500 to-blue-700 text-white rounded-lg p-6 transform hover:scale-130 hover:rotate-9 transition-all duration-500 shadow-lg hover:shadow-xl hover:translate-y-6 ease-in-out animate__animated animate__fadeIn animate__delay-5s">
            <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto animate__animated animate__bounceIn" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Cloud Services</h3>
            <p className="text-gray-200 mb-6">Scalable and secure cloud solutions for your business needs.</p>
            <ul className="text-gray-200 mb-9">
              <li>Cloud Hosting</li>
              <li>Data Security</li>
              <li>Real-time Sync</li>
            </ul>
            <a href="#" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:bg-purple-600">
              Start Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
