import React from 'react';
import { motion } from 'framer-motion';

const TherapistProfile = ({ therapist }) => {
  if (!therapist) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="therapist-profile p-4 border rounded-lg shadow-lg bg-white"
    >
      <img 
        src={therapist.imageUrl} 
        alt={therapist.name} 
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-center">{therapist.name}</h3>
      <p className="text-center text-gray-600">{therapist.specialty}</p>
      <div className="flex justify-center items-center mt-2">
        <span className="text-yellow-500">⭐ {therapist.rating}</span>
      </div>
    </motion.div>
  );
};

export default TherapistProfile;
