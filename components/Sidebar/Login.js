import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import MyAlerts from './MyAlerts';
import SetDefaultLocation from './SetDefaultLocation';
import Google from 'next-auth/providers/google';

export default function Login(props) {
  const { data: session, status } = useSession();
  const [curdDefault, setCrudDefault] = useState();

  function defaultCrud(newDefault) {
    setCrudDefault(newDefault);
  }
  if (status === 'authenticated') {
    return (
      <>
        <div className='flex flex-col items-center space-y-4 transition-all h-fit'>
          <button
            onClick={props.toggleModal}
            className='px-4 py-2 mt-2 font-mono text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent'
          >
            <h1 className='text-2xl transition-all hover:animate-none'>
              Alerts &
            </h1>
            <h1 className='text-2xl transition-all hover:animate-none'>
              Locations
            </h1>
          </button>
          <button
            className='px-6 py-2 font-mono text-2xl text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent'
            onClick={() => signOut()}
          >
            Sign out
          </button>
          <div className='text-white focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-md py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 pt-4 font-mono'>
            <svg
              className='w-8 h-8 mr-5 text-violet-700'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='google'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'
            >
              <path
                fill='currentColor'
                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
              ></path>
            </svg>
            Logged in as:
            {<br />}
            {session.user.name}{' '}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className='flex items-center transition-all bg-black hover:animate-none'>
      <button
        type='button'
        className='text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 mt-10'
        onClick={() => signIn('google')}
      >
        <svg
          className='w-10 h-10'
          aria-hidden='true'
          focusable='false'
          data-prefix='fab'
          data-icon='google'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 488 512'
        >
          <path
            fill='currentColor'
            d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
          ></path>
        </svg>
        Sign in with Google
      </button>
    </div>
  );
}
