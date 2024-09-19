// AboutUs.js

import React from 'react';
import { motion } from 'framer-motion';

// Sample team members data
const teamData = [
  { 
    name: 'Emma Johnson',
    title: 'Lead Esthetician',
    imgUrl: '/bg2.jpg',
    description: 'Specializing in facials and advanced skincare with 10 years of experience.',
  },
  {
    name: 'Michael Lee',
    title: 'Massage Therapist',
    imgUrl: '/path-to-michael-image',
    description: 'Expert in therapeutic and deep tissue massages, helping clients relieve stress.',
  },
  {
    name: 'Sophia Martinez',
    title: 'Yoga Instructor',
    imgUrl: '/path-to-sophia-image',
    description: 'A certified yoga teacher with a passion for holistic wellness and mindfulness.',
  },
  // Add more team members
];

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[40vh] md:h-[60vh]" style={{ backgroundImage: 'url(/bg.jpg)' }}>
        <div className="absolute inset-0 bg-black md:bg-opacity-50 bg-opacity-60 flex justify-center items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:text-5xl md:text-5xl sm-text-4xl text-3xl px-4 font-extrabold text-white"
          >
            Welcome to Itohan Wellness Place
          </motion.h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-lime-50">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Story
        </motion.h2>
        <p className="md:text-xl text-lg text-gray-700 leading-relaxed">
          Founded in 2015, **Itohan Wellness Place** began as a dream to create a serene space where individuals could
          escape the stresses of daily life and reconnect with their well-being. Inspired by the rich traditions of
          ancient healing and modern wellness practices, we have cultivated a sanctuary dedicated to relaxation,
          rejuvenation, and holistic care. Our approach to wellness is rooted in the belief that true beauty comes from
          within, and our services are designed to nourish the body, mind, and soul.
        </p>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-white">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet Our Founder
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.img
            src="/bg3.jpg"
            alt="Founder"
            className="w-full lg:w-1/3 h-auto object-cover rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-lime-700 mb-4">Itohan Eke</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              A wellness enthusiast and skincare expert, Itohan Eke has been dedicated to helping people feel and look
              their best for over a decade. With a background in holistic health and esthetics, she brings a wealth of
              knowledge to the spa, ensuring that each client receives personalized care that is both effective and
              deeply nurturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-lime-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-lime-700 mb-8">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-lime-600">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide a holistic wellness experience that nurtures both body and mind, creating an environment where
                clients feel supported in their journey towards relaxation and rejuvenation.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4 text-lime-600">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become a globally recognized wellness destination, known for our commitment to excellence, innovation
                in self-care, and dedication to enhancing the lives of our clients.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-white">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={member.imgUrl}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-lime-700">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-lime-50">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.img
            src="/path-to-spa-image1"
            alt="Gallery Image"
            className="w-full h-64 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src="/path-to-spa-image2"
            alt="Gallery Image"
            className="w-full h-64 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          {/* Add more gallery images */}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-white">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Client Testimonials
        </motion.h2>
        <div className="space-y-8">
          <motion.blockquote
            className="text-lg italic text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            “Itohan Wellness Place is a sanctuary of calm. The staff is incredibly professional, and I leave feeling
            rejuvenated after every visit.”
            <footer className="mt-4 text-right text-lime-700">— Jane Doe</footer>
          </motion.blockquote>
          {/* Add more testimonials */}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-lime-50">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-lime-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          We’d love to hear from you! For any inquiries or to book an appointment, please contact us through the details
          below or follow us on Instagram.
        </p>
        <div className="text-center">
          <a
            href="https://instagram.com/yourinstagramhandle"
            className="inline-block bg-lime-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Follow Us on Instagram
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-16 lg:px-32 bg-white text-center">
        <motion.h2
          className="text-4xl font-bold text-lime-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ready to Experience Wellness?
        </motion.h2>
        <p className="text-lg text-gray-700 mb-8">
          Book your appointment today and begin your journey to a more balanced and rejuvenated self.
        </p>
        <a
          href="/book-appointment"
          className="bg-lime-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
