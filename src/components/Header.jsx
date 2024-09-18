import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaShoppingCart } from 'react-icons/fa';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Book Session', to: '/Book-now' },
    { name: 'Contact', to: '/contact' },
  ];

  const contactDetails = {
    phone: '+123 456 7890',
    email: 'info@itohanwellnessplace.com',
    social: [
      { platform: 'Facebook', url: 'https://facebook.com/itohanwellness', icon: <FaFacebookF size={20} /> },
      { platform: 'Twitter', url: 'https://twitter.com/itohanwellness', icon: <FaTwitter size={20} /> },
      { platform: 'Instagram', url: 'https://instagram.com/itohanwellness', icon: <FaInstagram size={20} /> },
    ],
  };

  useEffect(() => {
    // Close mobile menu when navigating to a new page
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white w-full shadow-lg">
      {/* Top Span for Contact Details */}
      <div className="bg-lime-700 lg:px-10 md:px-16 sm:px-5 text-white py-2 text-xs md:text-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <a href={`tel:${contactDetails.phone}`} className="hover:underline">{contactDetails.phone}</a>
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <a href={`mailto:${contactDetails.email}`} className="hover:underline">{contactDetails.email}</a>
          </span>
          <div className="flex gap-4">
            {contactDetails.social.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label={social.platform}
                whileHover={{ scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <nav className="container lg:px-10 md:px-16 sm:px-5 mx-auto flex items-center justify-between p-5 relative">
        {/* Logo */}
        <div>
          <a href="/">
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto ml-2 transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          /></a>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center">
          <ul className="hidden md:flex gap-7 font-medium items-center">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className={`relative ${location.pathname === item.to ? 'text-lime-700 border-b-2 border-lime-700' : 'text-gray-600'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="hover:text-lime-700 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Cart Icon */}
          <div className="md:ml-6 flex ml-44 mt-1">
            <Link to="/cart">
              <motion.div
                className="relative text-gray-600 hover:text-lime-700 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaShoppingCart size={24} />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden mt-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed inset-0 bg-white z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
        >
          <div className="flex flex-col items-center py-5 relative">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-black"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col gap-6 mt-16 font-medium">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className={`text-gray-600 ${location.pathname === item.to ? 'text-lime-700 underline' : ''}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    className="hover:text-lime-700 text-lg transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              {/* Additional Mobile Contact Details */}
              <div className="text-center mt-6">
                <p className="text-lg font-semibold mb-2">Contact Us:</p>
                <p className="text-gray-600 mb-2 flex items-center justify-center gap-2">
                  <FaPhoneAlt />
                  <a href={`tel:${contactDetails.phone}`} className="hover:underline">{contactDetails.phone}</a>
                </p>
                <p className="text-gray-600 mb-4 flex items-center justify-center gap-2">
                  <FaEnvelope />
                  <a href={`mailto:${contactDetails.email}`} className="hover:underline">{contactDetails.email}</a>
                </p>
                <div className="flex gap-4 justify-center">
                  {contactDetails.social.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                      aria-label={social.platform}
                      whileHover={{ scale: 1.2 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};
