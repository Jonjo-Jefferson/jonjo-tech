import Image from 'next/image';
import React from 'react';
import flower1 from '../public/Images/flower1.png';

export const Hero = () => {
  return (
    <section>
      <div className='bg-secondary'>
        <div className='container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900'>
          <h1 className='text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900 font-Montserrat'>
            Jonjo Jefferson
          </h1>
          <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900 font-OpenSans'>
            Web developer, Miniature Builder, Cat Lover
          </p>
          <div className='flex flex-wrap justify-center'>
            <button
              type='button'
              className='px-8 py-3 m-2 text-lg font-semibold rounded bg-primary text-secondary '
            >
              Get started
            </button>
            <button
              type='button'
              className='px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900'
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className='w-3/6 mx-auto mb-12 -mt-20 lg:-mt-40 dark:bg-gray-500 z-1'>
        <Image className='rounded-lg shadow-md' src={flower1} alt='/' />
      </div>
    </section>
  );
};
