import React, { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import SetDefaultLocation from './SetDefaultLocation';

export default function Login() {
  const { data: session, status } = useSession();
  const [curdDefault, setCrudDefault] = useState();

  function defaultCrud(newDefault){
    setCrudDefault(newDefault);
  }
  if (status === 'authenticated') {
    return (
      <>
        <div className='flex flex-col items-center w-full space-y-2.5 bg-black h-fit'>
          <div className='items-center p-3 px-4 mt-3 text-center duration-300 rounded-md cursor-pointer bg-violet-900 w-fit'>
            <label
              htmlFor='first_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Logged in as:
            </label>
            {session.user.name}{' '}
          </div>
          <SetDefaultLocation
            user_id={session.auth_token.user_id}
            auth_token={session.auth_token.tokens}
            defaultCrud={defaultCrud}
          />
          <div>
            {curdDefault && <>Default changed to: {curdDefault}</>}
          </div>
            {!curdDefault &&
            <div className='items-center p-3 px-4 mt-3 text-center duration-300 bg-transparent rounded-md cursor-pointer w-fit'>
            <label
              htmlFor='first_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Saved Default Location:
            </label>
            {session.auth_token.default_location}
          </div>}

          <button
            className='px-4 py-2 m-auto font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </>
    );
  }

  return (
    <div className='flex items-center bg-black'>
      <button
        className='px-4 py-2 m-auto font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
        onClick={() => signIn('google')}
      >
        Sign In
      </button>
    </div>
  );
}
