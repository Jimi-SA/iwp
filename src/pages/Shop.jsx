import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
  // Sample data for categories and services
  const categories = ['All', 'Massage', 'Facial', 'Manicure', 'Pedicure'];
  const services = [
    { title: 'Relaxing Massage', price: '$60', img: 'rbg.jpg', category: 'Massage' },
    { title: 'Rejuvenating Facial', price: '$80', img: 'bg2.jpg', category: 'Facial' },
    { title: 'Luxury Pedicure', price: '$50', img: 'bg3.jpg', category: 'Pedicure' },
    // Add more services as needed
  ];

  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(true);
  const [sortCriteria, setSortCriteria] = useState('price-asc'); // Default sorting by price ascending
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All' category

  const servicesPerPage = 10; // Number of services to display per page

  // Filter services by category and search term
  const filteredServices = services
    .filter(service => selectedCategory === 'All' || service.category === selectedCategory)
    .filter(service => service.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // Sorting logic
  const sortServices = (services) => {
    switch (sortCriteria) {
      case 'price-asc':
        return services.sort((a, b) => parseFloat(a.price.substring(1)) - parseFloat(b.price.substring(1)));
      case 'price-desc':
        return services.sort((a, b) => parseFloat(b.price.substring(1)) - parseFloat(a.price.substring(1)));
      case 'title-asc':
        return services.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return services.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return services;
    }
  };

  const sortedServices = sortServices(filteredServices);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = sortedServices.slice(indexOfFirstService, indexOfLastService);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(sortedServices.length / servicesPerPage);

  return (
    <div className='p-5 md:p-10'>
      {/* Page Title and Ad Placeholder */}
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-center mb-4'>Book a Spa Session</h1>
        <div className='bg-gray-100 text-center py-5 mb-4 rounded-lg shadow-md'>
          <span className='text-sm text-gray-500'>Place your Ad here (728x90)</span>
        </div>
      </div>

      {/* Search Bar, Sort Dropdown, and Toggle Filter Button */}
      <div className='mb-6 flex flex-col md:flex-row md:justify-between items-center'>
        <input
          type='text'
          placeholder='Search services...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border border-gray-300 rounded-lg px-4 py-2 w-full md:w-2/3 mb-4 md:mb-0'
        />
        <div className='flex items-center space-x-4 mb-4 md:mb-0'>
          <select
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
            className='border border-gray-300 rounded-lg px-4 py-2'
          >
            <option value='price-asc'>Price: Low to High</option>
            <option value='price-desc'>Price: High to Low</option>
            <option value='title-asc'>Title: A to Z</option>
            <option value='title-desc'>Title: Z to A</option>
          </select>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className='bg-lime-700 text-white px-4 py-2 rounded-lg text-sm lg:text-lg hover:bg-lime-600 transition duration-300'
          >
            {showFilter ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>

      {/* Main content layout with sidebar and services */}
      <div className='md:flex md:space-x-6'>
        {/* Sidebar Filters */}
        <AnimatePresence>
          {showFilter && (
            <motion.aside
              className='w-full md:w-1/4 bg-white shadow-lg rounded-lg p-5 mb-6 md:mb-0'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className='text-lg font-semibold mb-4'>Filter by Category</h2>
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
              <div className='hidden md:block mt-10 bg-gray-100 p-4 text-center rounded-lg shadow-md'>
                <span className='text-sm text-gray-500'>Place Ad (300x250)</span>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Service Cards */}
        <section className={`w-full ${showFilter ? 'md:w-3/4' : 'md:w-full'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${showFilter ? '3' : '4'} gap-6`}>
          <AnimatePresence>
            {currentServices.map((service, index) => (
              <motion.div
                key={index}
                className='bg-white shadow-lg rounded-lg overflow-hidden'
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
                <div className='p-4'>
                  <h3 className='text-lg font-semibold mb-2'>{service.title}</h3>
                  <p className='text-gray-500 mb-4'>{service.price}</p>
                  <button className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300'>
                    Shop Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      </div>

      {/* Pagination */}
      <div className='mt-8 flex justify-center'>
        <nav>
          <ul className='flex space-x-2'>
            {totalPages > 1 && [...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <motion.button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-green-600 transition duration-300`}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.5 }}
                >
                  {index + 1}
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Shop;