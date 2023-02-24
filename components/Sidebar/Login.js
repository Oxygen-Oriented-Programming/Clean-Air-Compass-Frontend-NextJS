import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import MyAlerts from './MyAlerts';
import SetDefaultLocation from './SetDefaultLocation';

export default function Login(props) {
  const { data: session, status } = useSession();
  const [curdDefault, setCrudDefault] = useState();

  function defaultCrud(newDefault) {
    setCrudDefault(newDefault);
  }
  if (status === 'authenticated') {
    return (
      <>
        <div className='flex flex-col items-center w-full space-y-4 transition-all bg-black h-fit'>
          <button
            onClick={props.toggleModal}
            className='px-4 py-2 font-bold text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent'
          >
            <h1 className='transition-all hover:animate-none animate-pulse'>
              Sign Up for Alerts
            </h1>
          </button>

          {/* <SetDefaultLocation
            user_id={session.auth_token.user_id}
            auth_token={session.auth_token.tokens}
            defaultCrud={defaultCrud}
          />
          <div>
            {curdDefault && <>Default changed to: {curdDefault}</>}
          </div>
            {!curdDefault &&
            <div className='items-center p-3 px-4 mt-3 text-center transition-all duration-300 bg-transparent rounded-md cursor-pointer w-fit'>
            <label
              htmlFor='first_name'
              className='block mb-2 text-sm font-medium text-gray-900 transition-all dark:text-white'
            >
              Saved Default Location:
            </label>
            {session.auth_token.default_location}
          </div>}
          <MyAlerts /> */}
          <button
            className='px-4 py-2 font-bold text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent'
            onClick={() => signOut()}
          >
            Sign out
          </button>
          <div className='items-center p-3 px-4 mt-3 text-center transition-all duration-300 bg-green-900 rounded-md cursor-pointer w-fit hover:cursor-none'>
            <label
              htmlFor='first_name'
              className='block mb-2 text-sm font-medium text-gray-900 transition-all dark:text-white '
            >
              Logged in as:
            </label>
            {session.user.name}{' '}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className='flex items-center transition-all bg-black animate-pulse hover:animate-none'>
      <button
        className='px-4 py-2 font-bold text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent'
        onClick={() => signIn('google')}
      >
        Sign In
      </button>
    </div>
  );
}
