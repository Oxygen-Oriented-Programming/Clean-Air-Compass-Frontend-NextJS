import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from '../components/Login';
import Homepage from '../components/Homepage';
import Map from '../components/Map';
import Form from '../components/Form';
import Image from 'next/image';
import logo from '../public/logo.png';
import Head from 'next/head';

export default function Home() {
  function dropdown(e) {
    e.preventDefault();
    document.querySelector('#submenu').classList.toggle('hidden');
    document.querySelector('#arrow').classList.toggle('rotate-0');
  }

  return (
    <>
      <div className='fixed top-0 bottom-0 p-2 text-white sidebar lg:left-0 left:hidden w-[300px] overflow-y-auto text-center bg-black'>
        <div className='p-2.5 mt-1 flex items-center'>
          <Image className='w-10' src={logo} alt='' />
          <h1 className='ml-4 text-xl font-bold text-center text-white hover:text-gray-400'>
            CleanAir Compass
          </h1>
          <i className='ml-20 cursor-pointer bi bi-box lg:hidden'></i>
        </div>
        <hr className='my-2 text-gray-600'></hr>
        <Form className='bg-transparent' />
        <div className='p2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600'>
          <i className='bi bi-box-fill'></i>
          <span className='ml-4 text-lg text-gray-200'>HOME</span>
        </div>

        <div className='p2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600'>
          <i className='bi bi-box'></i>
          <span className='ml-4 text-lg text-gray-200'>Bookmark</span>
        </div>

        <div className='p2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600'>
          <i className='bi bi-box-fill'></i>
          <span className='ml-4 text-lg text-gray-200'>Stuff</span>
        </div>

        <div className='p2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600'>
          <i className='bi bi-box'></i>
          <span className='ml-4 text-lg text-gray-200'>About</span>
        </div>

        <hr className='my-2 text-gray-600'></hr>

        <div
          className='p2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600 text-white'
          onClick={dropdown}
        >
          <i className='bi bi-chat-left-text-fill'></i>
          <div className='flex items-center justify-between w-full'>
            <span className='ml-4 text-xl text-gray-200'>Info</span>
            <span className='text-sm rotate-180' id='arrow'>
              <i className='bi bi-chevron-down'></i>
            </span>
          </div>
        </div>
        <div
          className='w-4/5 mx-auto mt-2 text-sm font-thin text-left text-gray-200'
          id='submenu'
        >
          <h1 className='p-2 mt-1 font-semibold rounded-md cursor-pointer hover:bg-gray-600'>
            Result1
          </h1>
          <h1 className='p-2 mt-1 font-semibold rounded-md cursor-pointer hover:bg-gray-600'>
            Result2
          </h1>
          <h1 className='p-2 mt-1 font-semibold rounded-md cursor-pointer hover:bg-gray-600'>
            Result3
          </h1>
          <h1 className='p-2 mt-1 font-semibold rounded-md cursor-pointer hover:bg-gray-600'>
            Result4
          </h1>
        </div>

        <div className='p2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-600'>
          <i className='bi bi-box-arrow-in-right'></i>
          <span className='ml-4 text-lg text-gray-200'>
          <Login></Login>
          Login
          </span>
        </div>
      </div>
      <span className='absolute text-4xl text-white cursor-pointer top-5 left-4'>
        <i className='px-2 bg-gray-900 rounded-md bi bi-filter-left'></i>
      </span>
      <Map />
      <Form />
      <Homepage />
    </>
  );
}
