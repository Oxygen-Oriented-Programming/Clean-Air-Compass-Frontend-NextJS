import React from 'react';
import Link from 'next/link';

export default function NavLinks({ handleFeaturesClick }) {
  return (
    <div className="flex flex-col items-center w-full space-y-2.5">
      <Link
        className="block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white"
        href="/"
      >
        Home
      </Link>
      <Link
        className="block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white"
        href="/"
      >
        About
      </Link>
      <Link
        className="block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white"
        href="/"
        onClick={handleFeaturesClick}
      >
        Features
      </Link>
      <Link
        className="block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white"
        href="/"
      >
        More
      </Link>
    </div>
  );
}
