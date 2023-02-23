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
      <h1 className='flex flex-col p-5 text-3xl font-bold text-center'>FAQ</h1>
      <div className='flex flex-col align text-center p-4 items-center w-fit space-y-2.5'>
        <div className='w-fit p-2.5 mt-3 text-center items-center rounded-xl px-4 duration-300 cursor-pointer bg-gray-800'>
          <div className='block pt-2 mb-2 font-medium'>
            <label
              htmlFor='first_name'
              className='block pt-2 mb-2 font-medium text-slates-600 text-md '
            >
              Why is PM 2.5 important?
            </label>
            <p className='text-sm text-gray-300'>
              In the air, there exists a mixture of solid and liquid particles
              known as Particulate Matter (PM). PM2.5 refers to particles that
              are smaller than 2.5 micrometres in diameter and remain suspended
              in the air for longer periods of time. The formation of these
              particles is a result of burning fuels and chemical reactions that
              occur in the atmosphere, as well as natural processes such as
              forest fires.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-full space-y-2.5'>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='https://www.cdc.gov/air/pollutants.htm'
        >
          Air Pollutants
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='https://www2.purpleair.com/'
        >
          Purple Air Sensors
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='https://www.airveda.com/blog/what-is-pm2-5-and-why-is-it-important'
        >
          What is PM2.5
        </Link>
        <Link
          className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
          href='https://www.epa.gov/air-trends/particulate-matter-pm25-trends'
        >
          PM2.5 Trends
        </Link>
      </div>
    </>
  );
}
