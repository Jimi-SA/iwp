import React from 'react';
import { motion } from 'framer-motion';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="logo-container"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <motion.img
          src="/logo.svg" // Replace with your actual logo path
          alt="Logo"
          className="logo"
          animate={{
            scale: [1, 1.1, 1], // Pulsing effect
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
        <motion.div
          className="loading-circle"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
