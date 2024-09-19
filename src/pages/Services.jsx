import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services'; // Adjust the path accordingly

// Extract only the necessary fields
const filteredServicesData = servicesData.map(category => ({
  id: category.id,
  title: category.title,
  imgUrl: category.imgUrl || '', // Ensure imgUrl is correctly set if available
  description: category.description,
}));

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-900">
      <section className="py-16 lg:mx-10 md:px-16 sm:px-5 p-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center text-5xl font-extrabold text-lime-700"
        >
          Our Premium Services
        </motion.h1>
        <p className="text-center mt-4 text-lg text-gray-600">
          Discover our range of spa services designed to pamper and relax you.
        </p>

        {/* Service Tiles */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServicesData.map((service, index) => (
            <motion.div
              key={service.id} // Use service.id as the key
              className="relative bg-white rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
              onClick={() => navigate(`/service/${service.id}`)} // Navigate to service detail page
            >
              {/* Image */}
              <motion.img
                src={service.imgUrl} // Update to use actual imgUrl if available
                alt={service.title}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
              {/* Service Title */}
              <div className="p-6 bg-gradient-to-r from-white to-lime-100">
                <h2 className="text-2xl font-bold text-lime-700 mb-2">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
