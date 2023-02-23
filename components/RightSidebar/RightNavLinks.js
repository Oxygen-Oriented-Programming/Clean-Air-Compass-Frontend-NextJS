import React from 'react';
import Link from 'next/link';

export default function RightNavLinks({
  handleFeaturesClick,
  handleAboutClick,
}) {
  return (
    <>
      {' '}
      <div className='flex flex-col bg-black items-center h-fit w-full space-y-2.5'>
        <Link
          className='flex h-fit px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-purple-700 text-white'
          href='https://www.cdc.gov/air/pollutants.htm'
          target='_blank'
        >
          Air Pollutants
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-purple-700 text-white'
          href='https://www2.purpleair.com/'
          target='_blank'
        >
          Purple Air Sensors
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100  hover:bg-purple-700 text-white'
          href='https://www.airveda.com/blog/what-is-pm2-5-and-why-is-it-important'
          target='_blank'
        >
          What is PM2.5
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100  hover:bg-purple-700 text-white'
          href='https://www.epa.gov/air-trends/particulate-matter-pm25-trends'
          target='_blank'
        >
          PM2.5 Trends
        </Link>
      </div>
    </>
  );
}
