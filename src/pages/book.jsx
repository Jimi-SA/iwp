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

  const categories = [
    'All', 'Massage', 'Facials', 'Facials Extras', 'Teeth Whitening', 'Facials (Others)', 
    'Nail', 'Body Treatment', 'Waxing'
  ];

  const services = [
    // Massage
    { title: 'Head Massage', description: 'Relaxing head massage to ease tension.', duration: '30 m', price: '₦5,000.00', category: 'Massage', img: 'head-massage.jpg' },
    { title: 'Reflexology Massage', description: 'Therapeutic massage focusing on pressure points.', duration: '45 m', price: '₦7,000.00', category: 'Massage', img: 'reflexology.jpg' },
    { title: 'Back Massage', description: 'Deep relaxation for the back muscles.', duration: '30 m', price: '₦6,000.00', category: 'Massage', img: 'back-massage.jpg' },
    { title: 'Stretching', description: 'Gentle stretching to improve flexibility.', duration: '30 m', price: '₦4,000.00', category: 'Massage', img: 'stretching.jpg' },
    { title: 'Swedish Massage', description: 'Full body relaxation massage.', duration: '60 m', price: '₦8,000.00', category: 'Massage', img: 'swedish-massage.jpg' },
    { title: 'Aromatherapy Massage', description: 'Massage with essential oils for relaxation.', duration: '60 m', price: '₦9,000.00', category: 'Massage', img: 'aromatherapy.jpg' },
    { title: 'Deep Tissue Massage', description: 'Intense massage targeting deep muscle layers.', duration: '60 m', price: '₦10,000.00', category: 'Massage', img: 'deep-tissue.jpg' },
    { title: 'Sports Massage', description: 'Massage to enhance athletic performance and recovery.', duration: '60 m', price: '₦11,000.00', category: 'Massage', img: 'sports-massage.jpg' },
    { title: 'Thai Massage', description: 'Traditional Thai massage combining stretching and acupressure.', duration: '90 m', price: '₦12,000.00', category: 'Massage', img: 'thai-massage.jpg' },
    { title: 'Hot Stone Massage', description: 'Massage using heated stones for deeper relaxation.', duration: '75 m', price: '₦14,000.00', category: 'Massage', img: 'hot-stone.jpg' },
    { title: 'Nirvana Signature Massage', description: 'Exclusive massage experience for ultimate relaxation.', duration: '90 m', price: '₦15,000.00', category: 'Massage', img: 'nirvana-signature.jpg' },
    // Facials
    { title: 'Deep Cleansing Facials', description: 'Thorough facial cleansing and exfoliation.', duration: '60 m', price: '₦7,000.00', category: 'Facials', img: 'deep-cleansing.jpg' },
    { title: 'Acne Facials', description: 'Specialized facial treatment for acne-prone skin.', duration: '60 m', price: '₦8,000.00', category: 'Facials', img: 'acne-facials.jpg' },
    // Facials Extras
    { title: 'LED Light Therapy', description: 'Advanced therapy for skin rejuvenation.', duration: '30 m', price: '₦5,000.00', category: 'Facials Extras', img: 'led-light.jpg' },
    { title: 'Derma Planing', description: 'Exfoliation treatment to remove dead skin cells.', duration: '30 m', price: '₦6,000.00', category: 'Facials Extras', img: 'derma-planing.jpg' },
    { title: 'Microdermabrasion', description: 'Skin resurfacing treatment for a smoother appearance.', duration: '45 m', price: '₦7,000.00', category: 'Facials Extras', img: 'microdermabrasion.jpg' },
    { title: 'High Frequency', description: 'Treatment to improve skin tone and texture.', duration: '30 m', price: '₦5,500.00', category: 'Facials Extras', img: 'high-frequency.jpg' },
    { title: 'Hydra Facial', description: 'Hydrating facial treatment for radiant skin.', duration: '60 m', price: '₦8,500.00', category: 'Facials Extras', img: 'hydra-facial.jpg' },
    // Teeth Whitening
    { title: 'Lace Whitening', description: 'Teeth whitening treatment for a brighter smile.', duration: '60 m', price: '₦10,000.00', category: 'Teeth Whitening', img: 'lace-whitening.jpg' },
    { title: 'Teeth Scaling', description: 'Teeth cleaning and scaling for oral health.', duration: '45 m', price: '₦7,000.00', category: 'Teeth Whitening', img: 'teeth-scaling.jpg' },
    // Facials (Others)
    { title: 'Vajacials (No Waxing)', description: 'Facial treatment without waxing.', duration: '45 m', price: '₦7,000.00', category: 'Facials (Others)', img: 'vajacials-no-waxing.jpg' },
    { title: 'Vajacials (With Waxing)', description: 'Facial treatment with waxing.', duration: '60 m', price: '₦9,000.00', category: 'Facials (Others)', img: 'vajacials-with-waxing.jpg' },
    { title: 'Butt Facial', description: 'Treatment for the buttocks to improve skin texture.', duration: '45 m', price: '₦6,500.00', category: 'Facials (Others)', img: 'butt-facial.jpg' },
    { title: 'Back Facials', description: 'Cleansing and treatment for the back.', duration: '60 m', price: '₦8,000.00', category: 'Facials (Others)', img: 'back-facials.jpg' },
    { title: 'Thigh Facial', description: 'Treatment for the thighs to enhance skin appearance.', duration: '45 m', price: '₦7,000.00', category: 'Facials (Others)', img: 'thigh-facial.jpg' },
    // Nail
    { title: 'Classic Pedicure', description: 'Traditional pedicure with nail care and polish.', duration: '45 m', price: '₦4,000.00', category: 'Nail', img: 'classic-pedicure.jpg' },
    { title: 'Classic Manicure', description: 'Traditional manicure with nail care and polish.', duration: '45 m', price: '₦4,000.00', category: 'Nail', img: 'classic-manicure.jpg' },
    { title: 'Jelly Pedicure', description: 'Luxurious pedicure with jelly treatment.', duration: '60 m', price: '₦5,500.00', category: 'Nail', img: 'jelly-pedicure.jpg' },
    { title: 'Jelly Manicure', description: 'Luxurious manicure with jelly treatment.', duration: '60 m', price: '5,500.00', category: 'Nail', img: 'jelly-manicure.jpg' },
    { title: 'Fruit Pedicure', description: 'Pedicure with fruit-based treatments for rejuvenation.', duration: '60 m', price: '6,000.00', category: 'Nail', img: 'fruit-pedicure.jpg' },
    { title: 'Fruit Manicure', description: 'Manicure with fruit-based treatments for rejuvenation.', duration: '60 m', price: '6,000.00', category: 'Nail', img: 'fruit-manicure.jpg' },
    { title: 'Paraffin Wax Pedicure', description: 'Pedicure with paraffin wax treatment for soft skin.', duration: '60 m', price: '7,000.00', category: 'Nail', img: 'paraffin-wax-pedicure.jpg' },
    { title: 'Paraffin Wax Manicure', description: 'Manicure with paraffin wax treatment for soft skin.', duration: '60 m', price: '7,000.00', category: 'Nail', img: 'paraffin-wax-manicure.jpg' },
    { title: 'Foot Mask', description: 'Hydrating and soothing mask for the feet.', duration: '30 m', price: '3,500.00', category: 'Nail', img: 'foot-mask.jpg' },
    { title: 'Hand Mask', description: 'Hydrating and soothing mask for the hands.', duration: '30 m', price: '3,500.00', category: 'Nail', img: 'hand-mask.jpg' },
    // Body Treatment
    { title: 'Steam Bath', description: 'Steam bath to relax and detoxify the body.', duration: '30 m', price: '4,000.00', category: 'Body Treatment', img: 'steam-bath.jpg' },
    { title: 'Jacuzzi Bath', description: 'Relaxing bath in a Jacuzzi for muscle relief.', duration: '45 m', price: '5,000.00', category: 'Body Treatment', img: 'jacuzzi-bath.jpg' },
    { title: 'Body Scrub', description: 'Exfoliating treatment to remove dead skin cells.', duration: '45 m', price: '6,000.00', category: 'Body Treatment', img: 'body-scrub.jpg' },
    { title: 'Body Polish', description: 'Polishing treatment to smooth and brighten the skin.', duration: '45 m', price: '6,500.00', category: 'Body Treatment', img: 'body-polish.jpg' },
    { title: 'Hammam Bath', description: 'Traditional bath with steam and scrubbing.', duration: '60 m', price: '7,500.00', category: 'Body Treatment', img: 'hammam-bath.jpg' },
    // Waxing
    { title: 'Full Body Waxing', description: 'Complete waxing treatment for the whole body.', duration: '90 m', price: '12,000.00', category: 'Waxing', img: 'full-body-waxing.jpg' },
    { title: 'Men’s Waxing', description: 'Waxing services tailored for men.', duration: '60 m', price: '8,000.00', category: 'Waxing', img: 'mens-waxing.jpg' },
    { title: 'Hollywood Wax', description: 'Complete waxing for intimate areas.', duration: '45 m', price: '7,000.00', category: 'Waxing', img: 'hollywood-wax.jpg' },
    { title: 'Brazilian Wax', description: 'Waxing treatment for the bikini area.', duration: '45 m', price: '6,500.00', category: 'Waxing', img: 'brazilian-wax.jpg' },
    { title: 'Bikini Wax', description: 'Waxing treatment for the bikini line.', duration: '30 m', price: '5,000.00', category: 'Waxing', img: 'bikini-wax.jpg' },
    { title: 'Under Arm Wax', description: 'Waxing treatment for underarm area.', duration: '20 m', price: '3,500.00', category: 'Waxing', img: 'under-arm-wax.jpg' },
    { title: 'Full Leg Wax', description: 'Complete waxing for the legs.', duration: '60 m', price: '8,000.00', category: 'Waxing', img: 'full-leg-wax.jpg' },
    { title: 'Half Leg Wax', description: 'Waxing treatment for half of the legs.', duration: '30 m', price: '5,500.00', category: 'Waxing', img: 'half-leg-wax.jpg' },
    { title: 'Full Hand Wax', description: 'Complete waxing for the hands.', duration: '30 m', price: '4,500.00', category: 'Waxing', img: 'full-hand-wax.jpg' },
    { title: 'Half Hand Wax', description: 'Waxing treatment for half of the hands.', duration: '20 m', price: '3,000.00', category: 'Waxing', img: 'half-hand-wax.jpg' },
    { title: 'Stomach Wax', description: 'Waxing treatment for the stomach area.', duration: '30 m', price: '4,000.00', category: 'Waxing', img: 'stomach-wax.jpg' },
    { title: 'Back Wax', description: 'Waxing treatment for the back.', duration: '45 m', price: '5,500.00', category: 'Waxing', img: 'back-wax.jpg' },
    { title: 'Half Face Wax', description: 'Waxing treatment for half of the face.', duration: '20 m', price: '3,500.00', category: 'Waxing', img: 'half-face-wax.jpg' },
    { title: 'Chin Wax', description: 'Waxing treatment for the chin area.', duration: '15 m', price: '2,500.00', category: 'Waxing', img: 'chin-wax.jpg' },
    { title: 'Upper Lip Wax', description: 'Waxing treatment for the upper lip area.', duration: '15 m', price: '2,000.00', category: 'Waxing', img: 'upper-lip-wax.jpg' },
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