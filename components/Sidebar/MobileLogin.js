import React, { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';

export default function Login({ providers }) {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      if (session.provider === 'google') {
        var auth_token = session.auth_token;
        backendapi_google(auth_token);
      }
    }
  }, [session]);
  function backendapi_google(auth_token) {
    fetch(`http://127.0.0.1:8000/accounts/google/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ auth_token: auth_token }),
    }).then((data) => data.json());
  }
  if (status === 'authenticated') {
    return (
      <p className='px-4 py-2 m-auto font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'>
        Logout
      </p>
    );
  }

  return (
    <Link
      href='/api/auth/signin'
      className='flex px-3 py-1.5 m-auto text-xs font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
    >
      Login
    </Link>
  );
}
