import React from 'react';
import Link from 'next/link';
import Login from './Login';

export default function NavLinks(props) {
  return (
    <>
      <div className='flex flex-col bg-black h-[96vh] items-center w-full space-y-2.5'>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='/'
        >
          About
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='/'
          onClick={props.handleFeaturesClick}
        >
          Features
        </Link>
        
        <Login toggleModal={props.toggleModal} />
      </div>
    </>
  );
}
