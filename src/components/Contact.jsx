import { useState } from 'react';

const ContactUsSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API Call, for example purposes
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message Sent!");
    }, 1500);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We're here to help! Get in touch with us for any queries, support, or project proposals.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact Form */}
          <div className="flex flex-col justify-center items-center p-8 bg-indigo-50 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-5 py-3 rounded-md border border-indigo-300 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3 rounded-md border border-indigo-300 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-5 py-3 rounded-md border border-indigo-300 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-white font-semibold rounded-md bg-indigo-700 hover:bg-indigo-800 transition-all duration-300 disabled:bg-indigo-300`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right side - Contact Information */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8 bg-gray-50 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Get In Touch</h3>
            <div className="mb-6 space-y-4">
              {/* Address */}
              <div className="flex items-center space-x-4">
                <span className="text-indigo-600 text-xl">📍</span>
                <p className="text-lg text-gray-700">Pracha Street ,Near Chowk B.C.G., Gulzaib Colony, Multan, Punjab</p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <span className="text-indigo-600 text-xl">📞</span>
                <p className="text-lg text-gray-700">+92 3166763282</p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <span className="text-indigo-600 text-xl">📧</span>
                <p className="text-lg text-gray-700">support@digitalskillshouse.pk</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509373!2d144.9630577153178!3d-37.81627944202102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777bf6c14d6e75!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1616519032245!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-indigo-50 opacity-20 transform rotate-12 -z-10"></div>
    </section>
  );
};

export default ContactUsSection;
