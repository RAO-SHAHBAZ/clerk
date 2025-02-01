import React from 'react';

const Features = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 via-teal-50 to-blue-50 py-20 px-6 md:px-12 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Our software solutions come with a suite of powerful features designed to scale with your business needs. Here's what sets us apart:
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-indigo-600 mb-6">
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Scalability</h3>
            <p className="text-lg text-gray-600">
              Our solutions are built to scale with your business, from small projects to enterprise-level systems.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-indigo-600 mb-6">
              <i className="fas fa-lock"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Security</h3>
            <p className="text-lg text-gray-600">
              We implement industry-leading security measures to protect your data and ensure privacy at all times.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-indigo-600 mb-6">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Fast Deployment</h3>
            <p className="text-lg text-gray-600">
              Our solutions are designed for rapid deployment, getting your product to market faster and more efficiently.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-indigo-600 mb-6">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Collaborative</h3>
            <p className="text-lg text-gray-600">
              We emphasize seamless collaboration, working closely with you to ensure your vision is fully realized.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-indigo-600 mb-6">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Custom Solutions</h3>
            <p className="text-lg text-gray-600">
              Every project is unique. We develop custom solutions that align perfectly with your business goals.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="text-4xl text-indigo-600 mb-6">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Analytics</h3>
            <p className="text-lg text-gray-600">
              Our software comes equipped with advanced analytics tools that help you track performance and growth.
            </p>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Features;
