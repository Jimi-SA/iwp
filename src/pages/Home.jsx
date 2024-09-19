import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Sample Data Arrays
const features = [
  { icon: '/massage-therapist.png', title: 'Massage Therapy', description: 'Rejuvenate your body and mind with our professional massage services.' },
  { icon: '/facial-massage.png', title: 'Facial Treatments', description: 'Revitalize your skin with our range of facial treatments.' },
  { icon: '/body-massage.png', title: 'Relaxation Therapy', description: 'Experience deep relaxation with our specialized therapy sessions.' },
];

const services = [
  { imgUrl: '/bg.jpg', title: 'Deep Tissue Massage', description: 'Relieve muscle tension and pain with our deep tissue massage.' },
  { imgUrl: '/bg2.jpg', title: 'Anti-Aging Facial', description: 'Fight the signs of aging with our advanced facial treatments.' },
  { imgUrl: '/rbg.jpg', title: 'Exfoliating Body Scrub', description: 'Get glowing skin with our exfoliating body scrub treatments.' },
];

const testimonials = [
  { name: 'Jane Doe', testimonial: 'The best spa experience I’ve ever had. Highly recommend!' },
  { name: 'John Smith', testimonial: 'Exceptional service and a relaxing environment. Will return!' },
  { name: 'Emily Johnson', testimonial: 'Fantastic treatments and friendly staff. I’m coming back soon!' },
];

const Home = () => {
  const images = ['/bg.jpg', '/bg2.jpg', '/bg3.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative md:h-screen h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            className="text-center text-white p-6 bg-opacity-75 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to Itohan Wellness Place</h1>
            <p className="text-lg mb-6">Experience relaxation and rejuvenation like never before.</p>
            <a
              href="/book-now"
              className="bg-lime-700 text-white py-2 px-4 rounded-lg hover:bg-lime-800 transition duration-300"
            >
              Book a Session
            </a>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center w-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={feature.icon} alt={feature.title} className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 lg:mx-10 md:px-16 sm:px-5 p-4 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={service.imgUrl} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center w-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <blockquote className="italic text-gray-700 mb-4">"{testimonial.testimonial}"</blockquote>
              <footer className="font-semibold text-lime-700">— {testimonial.name}</footer>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:mx-10 md:px-16 sm:px-5 p-4 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery images */}
          <motion.img
            src="/bg2.jpg"
            alt="Gallery Image 1"
            className="w-full h-60 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/bg3.jpg"
            alt="Gallery Image 2"
            className="w-full h-60 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/bg2.jpg"
            alt="Gallery Image 3"
            className="w-full h-60 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          {/* Add more gallery images as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:px-10 md:px-16 sm:px-5 bg-stone-800 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-lime-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Column */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg">
              Have questions or want to book an appointment? Reach out to us:
            </p>
            <div>
              <a
                href="mailto:info@itohanwellnessplace.com"
                className="bg-lime-700 text-white py-2 px-4 rounded-lg hover:bg-lime-800 transition duration-300 mb-4 inline-block"
              >
                Email Us
              </a>
              <div className="text-lg">
                <p className="mb-4">Phone: <a href="tel:+1234567890" className="text-lime-300 hover:underline"> (123) 456-7890</a></p>
                <p>Address: 123 Wellness Lane, Health City</p>
              </div>
            </div>
          </div>

          {/* Map Directions Column */}
          <div className="flex justify-center items-center">
            <iframe
              title="Map Directions"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.943087175259!2d-122.41941848468108!3d37.77492937975888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d8726e5c1%3A0x8d5fdfd03a6ed0d4!2s1600%20Pond%20St%2C%20San%20Francisco%2C%20CA%2094141!5e0!3m2!1sen!2sus!4v1601234567890"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-lime-50 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Experience True Relaxation?
        </motion.h2>
        <a
          href="/book-now"
          className="bg-lime-700 text-white py-3 px-6 rounded-lg text-lg hover:bg-lime-800 transition duration-300"
        >
          Book Your Appointment
        </a>
      </section>
    </div>
  );
};

export default Home;
