import React from 'react';
import Link from 'next/link';
import Login from './Login';

export default function NavLinks(props) {
  return (
    <>
      <div className='flex transition-all flex-col  items-center w-full space-y-2.5'>
        <button
          className='px-6 py-4 mt-10 mb-2 font-mono text-2xl text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent'
          onClick={props.handleAboutClick}
        >
          About Us
        </button>
        <button
          className='px-6 py-4 font-mono text-2xl text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent'
          onClick={props.handleFeaturesClick}
        >
          Features
        </button>
        <Login toggleModal={props.toggleModal} />
      </div>
    </>
  );
}
