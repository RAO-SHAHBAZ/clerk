import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-700 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Card 1 - About Us */}
          <div className="p-8 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-extrabold text-white mb-4">Digital Skill House</h3>
            <p className="text-lg text-white mb-6">
              We provide cutting-edge software solutions that drive business transformation.
            </p>
            <div className="flex justify-center space-x-4 text-white">
              <a href="#" className="hover:text-indigo-200 text-2xl transition-all duration-300 transform hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-indigo-200 text-2xl transition-all duration-300 transform hover:scale-110">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-indigo-200 text-2xl transition-all duration-300 transform hover:scale-110">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-indigo-200 text-2xl transition-all duration-300 transform hover:scale-110">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Card 2 - Contact Info */}
          <div className="p-8 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-extrabold text-white mb-4">Contact Us</h3>
            <p className="text-lg text-white mb-6">
              We are here to help you. Feel free to reach out to us anytime.
            </p>
            <div className="text-white space-y-4">
              <div className="flex justify-center md:justify-start items-center">
                <span className="text-indigo-200 text-2xl">📍</span>
                <p className="ml-2">Pracha Street ,Near Chowk B.C.G., Gulzaib Colony, Multan, Punjab</p>
              </div>
              <div className="flex justify-center md:justify-start items-center">
                <span className="text-indigo-200 text-2xl">📞</span>
                <p className="ml-2">+92 3166763282</p>
              </div>
              <div className="flex justify-center md:justify-start items-center">
                <span className="text-indigo-200 text-2xl">📧</span>
                <p className="ml-2">support@digitalskillshouse.pk</p>
              </div>
            </div>
          </div>

          {/* Card 3 - Quick Links */}
          <div className="p-8 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-extrabold text-white mb-4">Quick Links</h3>
            <ul className="space-y-4 text-white">
              <li>
                <a href="/" className="hover:text-indigo-200 transition-all duration-300 transform hover:scale-110">Home</a>
              </li>
              <li>
                <a href="/services" className="hover:text-indigo-200 transition-all duration-300 transform hover:scale-110">Services</a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-200 transition-all duration-300 transform hover:scale-110">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-200 transition-all duration-300 transform hover:scale-110">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Card 4 - Newsletter */}
          <div className="p-8 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-extrabold text-white mb-4">Newsletter</h3>
            <p className="text-lg text-white mb-6">
              Subscribe to Digital Skill House newsletter for the latest updates.
            </p>
            <form className="flex flex-col items-center">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="p-3 rounded-lg bg-gray-200 text-white mb-4 w-full md:w-72 placeholder-gray-500 focus:outline-none"
              />
              <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-110">
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-white">
          <p>&copy; 2025 <span className='font-bold'>Digital Skill House</span>. All Rights Reserved. Crafted with Passion & Precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
