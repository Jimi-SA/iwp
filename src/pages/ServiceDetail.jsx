import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services'; // Adjust the path accordingly

const smoothScroll = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop;
    const start = window.scrollY;
    const distance = offsetTop - start;
    const duration = 1000; // Duration in milliseconds
    let startTime = null;

    const scroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      window.scrollTo(0, start + distance * progress);
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Find the category (e.g., "massage")
  const category = servicesData.find(cat => cat.id === serviceId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    // Scroll to the specific section if `serviceId` matches
    if (serviceId) {
      smoothScroll(serviceId);
    }
  }, [serviceId]);

  if (!category) {
    return <p className="text-center mt-8 text-xl">Category not found!</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Category Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative"
        style={{ 
          backgroundImage: `url(${category.imgUrl})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '300px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6 md:p-8">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{category.title}</h1>
            <p className="text-sm md:text-lg">{category.description}</p>
          </div>
        </div>
      </motion.div>

      {/* Anchor Menu */}
      <div className="px-4 py-4 bg-gray-200">
        <div className="flex flex-wrap justify-center gap-2">
          {category.services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(service.id);
              }}
              className="inline-block py-2 px-4 bg-lime-700 text-white rounded-md shadow-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-300 transition-all duration-300 min-w-[120px] text-center"
              style={{ minWidth: '120px' }} // Ensure buttons are wide enough
            >
              {service.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="px-4 sm:px-8 lg:px-16 py-12"
      >
        {category.services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Service Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
              className="p-6 md:p-8 border-b border-gray-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-lime-700 mb-4">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>

            {/* Images Section */}
            {service.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-8"
              >
                {service.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                ))}
              </motion.div>
            )}

            {/* Videos Section */}
            {service.videos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.6 }}
                className="p-6 md:p-8"
              >
                {service.videos.map((video, videoIndex) => (
                  <video
                    key={videoIndex}
                    controls
                    className="w-full h-64 rounded-lg shadow-md mb-4"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </motion.div>
            )}

            {/* Therapist Information */}
            {service.therapist && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.8 }}
                className="flex items-center p-6 md:p-8 border-t border-gray-200"
              >
                <img
                  src={service.therapist.profileImg}
                  alt={service.therapist.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">{service.therapist.name}</h4>
                  <p className="text-gray-600">{service.therapist.experience}</p>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
