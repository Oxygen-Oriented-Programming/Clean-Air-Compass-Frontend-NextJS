import React, { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Link from "next/link";

export default function Login({ providers }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState();
  useEffect(() => {
    if (session) {
      if (session.provider === 'google') {;
        console.log(session.provider)
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
    })
    .then((response) => response.json())
    .then((data) => setUser(data))
  }
  console.log(status)
  console.log(session)
  console.log(user)
  if (status === 'authenticated') {
    return (
      <p className='px-4 py-2 m-auto font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'>
        Hi 
      </p>
    );
  }

  return (
     <div className="flex items-center bg-black">
    <Link
      href='/api/auth/signin'
      className='px-4 py-2 m-auto font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
    >
      Sign in
    </Link>
    </div>
  );
}
