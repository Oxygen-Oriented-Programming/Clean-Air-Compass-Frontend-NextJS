import React from 'react';
import Link from 'next/link';
import Login from './Login';

export default function NavLinks(props) {
  return (
    <>
      <div className='flex transition-all flex-col bg-black h-[96vh] items-center w-full space-y-2.5'>
        <button
          className='px-6 py-4 text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent text-2xl font-mono mt-10 mb-2'
          onClick={props.handleAboutClick}
        >
          About Us
        </button>
        <button
          className='px-6 py-4 text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent text-2xl font-mono'
          onClick={props.handleFeaturesClick}
        >
          Features
        </button>
        <Login toggleModal={props.toggleModal} />
      </div>
    </>
  );
}
