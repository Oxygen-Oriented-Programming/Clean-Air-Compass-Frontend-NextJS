import React from 'react';
import Link from 'next/link';
import Login from './Login';

export default function NavLinks(props) {
  return (
    <>
      <div className='flex transition-all flex-col bg-black h-[96vh] items-center w-full space-y-2.5'>
        <Link
          className='flex h-fit px-4 py-2.5 font-normal rounded transition-all hover:bg-gray-700 text-white animate-pulse hover:animate-none'
          href='/'
        >
          Home
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition-all hover:bg-gray-700 text-white animate-pulse hover:animate-none'
          href='/'
          onClick={props.handleAboutClick}
        >
          About
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition-all hover:bg-gray-700 text-white animate-pulse hover:animate-none'
          href='/'
          onClick={props.handleFeaturesClick}
        >
          Features
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition-all hover:bg-gray-700 text-white animate-pulse hover:animate-none'
          href='/'
        >
          More
        </Link>
        <Login toggleModal={props.toggleModal} />
      </div>
    </>
  );
}
