import Map from './Map';
import Form from './Form';
import MobileForm from './MobileForm';
import Login from '../components/Login';
import MobileLogin from '../components/MobileLogin';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';

export default function Homepage() {
  const [locationName, setLocationName] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [distance, setDistance] = useState('');

  function handleLocationInput(e) {
    setLocationName(e.target.value);
  }

  function handleDistanceChange(e) {
    setDistance(e.target.value);
  }
  const App = () => {
    const [open, setOpen] = useState(true);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const zipRegex = /^\d{5}(-\d{4})?$/;
    const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (zipRegex.test(locationName) || cityRegex.test(locationName)) {
      // let apiData =
      // pass distance too so we can change the zoom
      // setLocationData(apiData)
    } else {
      alert('This is not a valid city name or zip code');
    }
  }

  // const btn = document.querySelector('.mobile-menu-button');
  // const sidebar = document.querySelector('.sidebar');

  // btn.addEventListener('click', () => {
  //   sidebar.classList.toggle('-translate-x-full');
  // });

  return (
    <>
      <div className='relative min-h-screen md:flex '>
        {/* mobile menu bar */}
        <div className='flex items-center justify-between pl-3 text-gray-100 bg-black w-fit sm:w-screen md:hidden'>
          {/* Logo */}
          <div class='mobile-menu-button flex items-center space gap-x-2.5 bg-black'>
            {/* Mobile Search */}
            <div className='flex items-center justify-center bg-black'>
              <MobileForm
                handleLocationInput={handleLocationInput}
                handleDistanceChange={handleDistanceChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>

          {/* mobile nav page links */}
          <Link
            className='block px-4 py-2.5 text-sm font-normal rounded transition duration-100 hover:bg-gray-700 text-white bg-black'
            href='/'
          >
            Home
          </Link>
          <Link
            className='block px-4 py-2.5 font-normal text-sm rounded transition duration-100 hover:bg-gray-700 text-white bg-black'
            href='/'
          >
            About
          </Link>
          <Link
            className='block px-4 py-2.5 font-normal text-sm rounded transition duration-100 hover:bg-gray-700 text-white bg-black'
            href='/'
          >
            Features
          </Link>
          <Link
            className='block px-4 py-2.5 font-normal text-sm rounded transition duration-100 hover:bg-gray-700 text-white bg-black'
            href='/'
          >
            More
          </Link>

          {/* Mobile Login */}
          <div className='flex items-center justify-center pr-2 bg-black'>
            <MobileLogin />
          </div>
        </div>

        {/* Sidebar */}
        <div class='sidebar w-64 px-2 space-y-2.5 text-blue-100 bg-black absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
          {/* Logo */}
          <div className='flex items-center pt-2 space gap-x-2.5 '>
            <Image className=' w-11 h-11' src={logo} alt='' />
            <span className='text-lg font-extrabold text-white'>
              <h1>CleanAir Compass</h1>
            </span>
          </div>
          {/* Nav*/}
          <nav>
            <div className='space-y-2'>
              {/* Search */}
              <div className='flex flex-col items-center w-full space-y-2.5'>
                <Form
                  handleLocationInput={handleLocationInput}
                  handleDistanceChange={handleDistanceChange}
                  handleSubmit={handleSubmit}
                />
              </div>
              {/* Page Links */}
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
          </nav>
          {/* Login */}
          <div className='flex items-center bg-black'>
            <Login />
          </div>
        </div>
        {/* Map */}
        <div className='flex-1 '>
          <Map className='' locationData={locationData} />
        </div>
      </div>
    </>
  );
}
