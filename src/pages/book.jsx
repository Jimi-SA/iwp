import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Advertisement Banner Component
const AdBanner = ({ adContent }) => (
  <div className='bg-stone-200 p-4 border border-stone-300 rounded-lg shadow-md mb-8'>
    <h2 className='text-xl font-semibold mb-2'>Advertisement</h2>
    <p>{adContent}</p>
  </div>
);

const BookAppointment = () => {
  const categories = ['All', 'Massage', 'Facials', 'Pedicure & Manicure', 'Foot Massage', 'Extra', 'Aesthetic Treatments'];

  const services = [
    { title: 'Couple Massage - 60 minutes', description: 'Strengthen Your Bond by Experiencing A Couple Massage Together...', duration: '60 m', price: '₦70,000.00', category: 'Massage', img: 'rbg.jpg' },
    { title: 'Full Body Massage - Male (60-mins)', description: 'Deep Tissue Massage that provides a deep penetrating effect on the muscle...', duration: '60 m', price: '₦35,000.00', category: 'Massage', img: 'bg.jpg' },
    { title: 'Couple Massage - 90-minutes', description: 'Strengthen Your Bond by Experiencing A Couple Massage Together...', duration: '90 m', price: '₦100,000.00', category: 'Massage', img: 'bg2.jpg' },
    { title: 'Full Body Massage - Female (60 mins)', description: 'Swedish and Deep Tissue Massage to relieve stress and tension...', duration: '60 m', price: '₦35,000.00', category: 'Massage', img: 'bg3.jpg' },
    { title: 'Full Body Massage - Female - 90 minutes', description: 'Swedish and Deep Tissue Massage to relieve stress and tension...', duration: '90 m', price: '₦50,000.00', category: 'Massage', img: 'rbg.jpg' },
    { title: 'Full Body Massage - Male (90 mins)', description: 'Swedish and Deep Tissue Massage to relieve stress and tension...', duration: '90 m', price: '₦50,000.00', category: 'Massage', img: 'bg.jpg' },
    { title: 'Couple Massage - 60 minutes', description: 'Strengthen Your Bond by Experiencing A Couple Massage Together...', duration: '60 m', price: '₦70,000.00', category: 'Massage', img: 'rbg.jpg' },
    { title: 'Full Body Massage - Male (60-mins)', description: 'Deep Tissue Massage that provides a deep penetrating effect on the muscle...', duration: '60 m', price: '₦35,000.00', category: 'Massage', img: 'bg.jpg' },
    { title: 'Couple Massage - 90-minutes', description: 'Strengthen Your Bond by Experiencing A Couple Massage Together...', duration: '90 m', price: '₦100,000.00', category: 'Massage', img: 'bg2.jpg' },
    { title: 'Full Body Massage - Female (60 mins)', description: 'Swedish and Deep Tissue Massage to relieve stress and tension...', duration: '60 m', price: '₦35,000.00', category: 'Massage', img: 'bg3.jpg' },
    { title: 'Full Body Massage - Female - 90 minutes', description: 'Swedish and Deep Tissue Massage to relieve stress and tension...', duration: '90 m', price: '₦50,000.00', category: 'Massage', img: 'rbg.jpg' },
    { title: 'Full Body Massage - Male (90 mins)', description: 'Swedish and Deep Tissue Massage to relieve stress and tension...', duration: '90 m', price: '₦50,000.00', category: 'Massage', img: 'bg.jpg' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isContentVisible, setIsContentVisible] = useState(false); // State to handle content visibility

  const servicesPerPage = 6;

  const filteredServices = services
    .filter(service => selectedCategory === 'All' || service.category === selectedCategory)
    .filter(service => service.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);

  const containerRef = useRef(null);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 40,
      behavior: 'smooth' // Native smooth scroll
    });

    // Delay the content loading for 3 seconds (3000ms)
    setIsContentVisible(false);
    setTimeout(() => {
      setIsContentVisible(true);
    }, 1000);
  };

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  useEffect(() => {
    setIsContentVisible(true); // Initially show the content
  }, []);

  return (
    <div className='p-6 md:p-10'>
      <div className='mb-8 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Book an Appointment</h1>
      </div>

      <AdBanner adContent="Check out our latest offers and discounts on wellness packages!" />

      <div className='mb-6 flex flex-col md:flex-row md:justify-between items-center'>
        <input
          type='text'
          placeholder='Search services...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border border-gray-300 rounded-lg px-4 py-2 w-full md:w-2/3 mb-4 md:mb-0'
        />
        <button
          onClick={() => setShowFilter(!showFilter)}
          className='bg-lime-700 text-white px-4 py-2 rounded-lg text-sm lg:text-lg hover:bg-lime-600 transition duration-300'
        >
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className='md:flex md:space-x-6'>
        <AnimatePresence>
          {showFilter && (
            <motion.aside
              className='w-full md:w-1/4 bg-white shadow-lg rounded-lg p-5 mb-6 md:mb-0'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className='text-lg font-semibold mb-4'>Select Category</h2>
              <ul className='space-y-2'>
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left p-2 rounded-lg ${selectedCategory === category ? 'bg-gray-200' : 'hover:bg-gray-100'} focus:bg-gray-200 transition`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.aside>
          )}
        </AnimatePresence>

        <section
          ref={containerRef}
          className={`w-full ${showFilter ? 'md:w-3/4' : 'md:w-full'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          <AnimatePresence>
            {isContentVisible &&
              currentServices.map((service, index) => (
                <motion.div
                  key={index}
                  className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col'
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className='h-48 w-full object-cover'
                  />
                  <div className='flex-1 p-4'>
                    <h3 className='text-lg font-semibold mb-2'>{service.title}</h3>
                    <p className='text-gray-500 mb-2'>{service.description}</p>
                    <p className='text-gray-500 mb-2'>Duration: {service.duration}</p>
                    <p className='text-gray-900 font-bold mb-4'>{service.price}</p>
                    <button className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300'>
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </section>
      </div>

      <div className='mt-8 flex justify-center'>
        <nav>
          <ul className='flex space-x-2'>
            {totalPages > 1 &&
              [...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? 'bg-lime-700 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      <div className='md:mt-20 mt-12'>
<h2 className='text-2xl font-bold mb-4'>1 thought on “Book an Appointment”</h2>
<div className='bg-gray-100 p-4 rounded-lg shadow-md'>
  <div className='flex items-center mb-4'>
    <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mr-3'>S</div>
    <div>
      <p className='text-gray-900 font-semibold'>Somkene</p>
      <p className='text-gray-500 text-sm'>April 17, 2024 at 12:40 pm</p>
    </div>
  </div>
  <p className='text-gray-900'>The workplace massage session provided by The Mobile Spa was exactly what our team needed to relieve stress and tension. The therapists were very good, the chair and foot massages were incredibly relaxing. Every office needs this!!</p>
</div>
<div className='mt-8'>
  <h3 className='text-lg font-semibold mb-4'>Leave a Reply</h3>
  <form className='bg-white p-6 border border-gray-300 rounded-lg shadow-md'>
    <label htmlFor='comment' className='block text-sm font-medium text-gray-700'>Comment *</label>
    <textarea id='comment' rows='4' className='border border-gray-300 rounded-lg px-3 py-2 w-full mt-2' placeholder='Your comment here...'></textarea>
    <button type='submit' className='mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300'>
      Post Comment
    </button>
  </form>
</div>
</div>

    </div>
  );
};

export default BookAppointment;



{/* <div className='mt-12'>
<h2 className='text-2xl font-bold mb-4'>1 thought on “Book an Appointment”</h2>
<div className='bg-gray-100 p-4 rounded-lg shadow-md'>
  <div className='flex items-center mb-4'>
    <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mr-3'>S</div>
    <div>
      <p className='text-gray-900 font-semibold'>Somkene</p>
      <p className='text-gray-500 text-sm'>April 17, 2024 at 12:40 pm</p>
    </div>
  </div>
  <p className='text-gray-900'>The workplace massage session provided by The Mobile Spa was exactly what our team needed to relieve stress and tension. The therapists were very good, the chair and foot massages were incredibly relaxing. Every office needs this!!</p>
</div>
<div className='mt-8'>
  <h3 className='text-lg font-semibold mb-4'>Leave a Reply</h3>
  <form className='bg-white p-6 border border-gray-300 rounded-lg shadow-md'>
    <label htmlFor='comment' className='block text-sm font-medium text-gray-700'>Comment *</label>
    <textarea id='comment' rows='4' className='border border-gray-300 rounded-lg px-3 py-2 w-full mt-2' placeholder='Your comment here...'></textarea>
    <button type='submit' className='mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300'>
      Post Comment
    </button>
  </form>
</div>
</div> */}