import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='bg-stone-800 lg:px-10 md:px-16 sm:px-5 text-white py-8'>
      <div className='container mx-auto px-4'>
        {/* Footer Top Section */}
        <div className='flex flex-wrap justify-between md:space-x-8 mb-8'>
          {/* About Section */}
          <div className='w-full md:w-1/4 mb-6 md:mb-0'>
            <h2 className='text-xl font-semibold mb-4 text-stone-200'>About Us</h2>
            <p className='text-stone-400'>
              Experience the ultimate relaxation with our range of premium spa services. Our skilled professionals ensure a rejuvenating experience tailored to your needs.
            </p>
          </div>

          {/* Contact Section */}
          <div className='w-full md:w-1/4 mb-6 md:mb-0'>
            <h2 className='text-xl font-semibold mb-4 text-stone-200'>Contact Us</h2>
            <ul className='text-stone-400'>
              <li className='mb-2'>
                <span className='font-semibold'>Address:</span> 123 Spa Road, Wellness City
              </li>
              <li className='mb-2'>
                <span className='font-semibold'>Phone:</span> 
                <a href='tel:+1234567890' className='hover:underline'> (123) 456-7890</a>
              </li>
              <li className='mb-2'>
                <span className='font-semibold'>Email:</span> 
                <a href='mailto:contact@spa.com' className='hover:underline'> contact@spa.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className='w-full md:w-1/2'>
            <h2 className='text-xl font-semibold mb-4 text-stone-200'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-stone-400 hover:text-white transition'>
                <FaFacebook size={24} />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-stone-400 hover:text-white transition'>
                <FaTwitter size={24} />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-stone-400 hover:text-white transition'>
                <FaInstagram size={24} />
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-stone-400 hover:text-white transition'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='border-t border-stone-700 pt-6'>
          <div className='flex flex-col md:flex-row md:justify-between items-center'>
            <p className='text-stone-400 mb-4 md:mb-0'>
              &copy; {new Date().getFullYear()} Itohan Welness Place. All rights reserved.
            </p>
            <div className='text-stone-400'>
              <a href='#' className='hover:underline mx-2'>Privacy Policy</a>
              <span className='mx-2'>|</span>
              <a href='#' className='hover:underline mx-2'>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

