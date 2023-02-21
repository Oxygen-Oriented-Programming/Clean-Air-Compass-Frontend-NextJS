import Form from './Form';
import MobileForm from './MobileForm';
import Login from './Login';
import MobileLogin from './MobileLogin';
import Image from 'next/image';
import logo from 'public/logo.png';
import Link from 'next/link';

export default function Sidebar(props) {
  return (
    <>
      {/* Mobile Menu Bar */}
      <div className='flex items-center justify-between pl-3 text-gray-100 bg-black w-fit sm:w-screen md:hidden'>
        <MobileForm
          handleLocationInput={props.handleLocationInput}
          handleSubmit={props.handleSubmit}
        />
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
        <MobileLogin />
      </div>

      {/* Sidebar */}
      <div className='sidebar w-64 px-2 space-y-2.5 text-blue-100 bg-black absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
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
                handleLocationInput={props.handleLocationInput}
                handleSubmit={props.handleSubmit}
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
    </>
  );
}
