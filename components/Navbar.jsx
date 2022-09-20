import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <header className='p-4 bg-primary dark:text-gray-100'>
      <div className='container flex justify-between h-16 mx-auto md:justify-center md:space-x-8 font-Montserrat'>
        <ul className='items-stretch hidden space-x-3 md:flex'>
          <li className='flex'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
            >
              My Work
            </a>
          </li>
          <li className='flex'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
            >
              100 Days Of Code
            </a>
          </li>
          <li className='flex'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400'
            >
              About
            </a>
          </li>
        </ul>
        <a
          rel='noopener noreferrer'
          href='#'
          aria-label='Back to homepage'
          className='flex items-center p-2'
        ></a>
        <ul className='items-stretch hidden space-x-3 md:flex'>
          <li className='flex'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
            >
              Miniatures
            </a>
          </li>
          <li className='flex'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
            >
              Photography
            </a>
          </li>
          <li className='flex'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
            >
              Contact
            </a>
          </li>
        </ul>
        <button title='Button' type='button' className='p-4 md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6 dark:text-gray-100'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
