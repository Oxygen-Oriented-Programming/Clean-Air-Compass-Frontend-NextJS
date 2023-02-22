import React from 'react';
import Link from 'next/link';

export default function RightSidebarButton(props) {
  return (
    <>
      <h1
        className={
          props.sidebar_show
            ? 'flex flex-row p-2 text-2xl hover:text-gray-400 text-white text-align-center w-16 rounded-md ml-2 mt-0.5 font-bold cursor-pointer'
            : 'hover:text-white bg-transparent font-bold p-4 rounded-lg border-2 border-black hover:bg-black fixed top-0 m-4 right-20 cursor-pointer transition duration-200 ease-in-out'
        }
        onClick={() => props.set_show(!props.sidebar_show)}
      >
        {props.text}
      </h1>
      <div className='flex flex-col items-center w-full space-y-2.5'>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='/'
        >
          Home
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='/'
        >
          About
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='/'
        >
          Features
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='/'
        >
          More
        </Link>
      </div>
    </>
  );
}
