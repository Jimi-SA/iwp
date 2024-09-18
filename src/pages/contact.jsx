import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='grid md:grid-cols-2 md:py-10 pt-16 md:pt-0 md:px-20 md:-ml-20'>
        <div className='md:scale-75 scale-95 -mt-10'>
          <div className='py-3 md:pl-0 pl-2'>
          <h1 className='md:text-4xl text-2xl md:pb-2 font-semibold md:font-bold  md:pl-5'>
              Contact Us
          </h1>
          <span className='md:pl-5 text-sm md:text-lg'>Explore what we have prepared for you</span>
          </div>
          <div className='bg-stone-700 space-y-4 md:text-lg py-8 text-white md:p-10 p-4 rounded-lg text-sm md:rounded-2xl'>
            <p className=''>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint, dolore minima nobis nemo quo blanditiis eligendi perspiciatis quisquam perferendis fugit sunt ea, a hic obcaecati, totam provident veritatis. Sapiente?
            </p>
            <p className='border-t-2 pt-4 border-primary-dark'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint, dolore minima nobis nemo quo blanditiis eligendi perspiciatis quisquam perferendis fugit sunt ea, a hic obcaecati, totam provident veritatis. Sapiente?
            </p>
            <p className='border-t-2 pt-4 border-primary-dark'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint, dolore minima nobis nemo quo blanditiis eligendi perspiciatis quisquam perferendis fugit sunt ea, a hic obcaecati, totam provident veritatis. Sapiente?
            </p>
          </div>
        </div>
        <div>
          <form className='py-4 space-y-4 scale-90'>
            <div className='mb-4 gap-2 md:flex space-y-4 md:space-y-0'>
              <div className='w-full md:w-1/2'>
                <label htmlFor='firstname' className='block pl-1 text-sm font-medium text-black'>
                  First Name
                </label>
                <input
                  type='text'
                  id='firstname'
                  className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-lime-800 focus:border-lime-800 sm:text-sm'
                  placeholder='Firstname'
                />
              </div>
              <div className='w-full md:w-1/2'>
                <label htmlFor='lastname' className='block pl-1 text-sm font-medium text-black'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastname'
                  className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-lime-800 focus:border-lime-800 sm:text-sm'
                  placeholder='Lastname'
                />
              </div>
            </div>

            <div className='pb-4'>
              <label htmlFor='email' className='block pl-1 text-sm font-medium text-black'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-lime-800 focus:border-lime-800 sm:text-sm'
                placeholder='Email'
              />
            </div>

            <div className='pb-4'>
              <label htmlFor='phone' className='block pl-1 text-sm font-medium text-black'>
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-lime-800 focus:border-lime-800 sm:text-sm'
                placeholder='(+234) 232 3244 232'
              />
            </div>

            <div className='pb-4'>
              <label htmlFor='country' className='block pl-1 text-sm font-medium text-black'>
                Country
              </label>
              <input
                type='text'
                id='country'
                className='mt-1 block w-full px-3 py-2 border bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-lime-800 focus:border-lime-800 sm:text-sm'
                placeholder='Country'
              />
            </div>

            <div className='pb-4'>
              <label htmlFor='comment' className='block pl-1 text-sm font-medium text-black'>
                Comment
              </label>
              <textarea
                id='comment'
                className='mt-1 block w-full px-3 py-2 border h-44 bg-primary-light/5 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-lime-800 focus:border-lime-800 sm:text-sm'
                placeholder='Your comment'
              />
            </div>

            <div className='pt-4 pb-6 space-y-2 text-sm px-2'>
              <span>By submitting this form, I acknowledge receipt of the <a href='/docs/legal' className='text-lime-800'>Itohan Wellness Place Privacy Policy.</a></span>
            </div>

            <button
              type='submit'
              className='w-1/4 px-4 py-3 bg-primary-dark text-white font-semibold rounded-xl shadow-sm hover:bg-lime-800 focus:outline-none text-sm focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
