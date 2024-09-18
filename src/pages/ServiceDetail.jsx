import React from 'react';
import { useParams } from 'react-router-dom';

// Dummy data for services
const servicesData = {
  waxing: {
    title: 'Waxing',
    description: 'Experience smooth, hair-free skin with our waxing services.',
    images: ['/bg.jpg', '/bg2.jpg'],
    videos: ['/path-to-waxing-video'],
    therapist: {
      name: 'Samantha Lee',
      experience: '5 years of experience in professional waxing and skin treatments.',
      profileImg: '/bg3.jpg',
    },
  },
  facials: {
    title: 'Facials',
    description: 'Rejuvenate your skin with our relaxing and refreshing facial treatments.',
    images: ['/path-to-facials-image1', '/path-to-facials-image2'],
    videos: ['/path-to-facials-video'],
    therapist: {
      name: 'Jessica Doe',
      experience: '8 years of experience as a skincare expert specializing in facials.',
      profileImg: '/path-to-therapist2-image',
    },
  },
  // Add more services here
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div className="p-8 lg:mx-10 md:px-16 sm:px-5">
      <h1 className="text-4xl font-bold text-lime-700 mb-4">{service.title}</h1>
      <p className="text-gray-700 mb-8">{service.description}</p>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {service.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={service.title}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Videos Section */}
      <div className="mb-8">
        {service.videos.map((video, index) => (
          <video key={index} controls className="w-full h-64 rounded-lg shadow-md mb-4">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      {/* Therapist Information */}
      <div className="mt-8 flex items-center">
        <img
          src={service.therapist.profileImg}
          alt={service.therapist.name}
          className="w-20 h-20 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-xl font-semibold">{service.therapist.name}</h4>
          <p className="text-gray-600">{service.therapist.experience}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
